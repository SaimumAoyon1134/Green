const showSpinner = () => document.getElementById("spinner").classList.remove("hidden");
const hideSpinner = () => document.getElementById("spinner").classList.add("hidden");
let totalCost =0;

fetch("https://openapi.programming-hero.com/api/categories")
.then(res => res.json())
.then(data => displaycategory(data.categories))    
const displaycati = () =>{
    Array.from(categoryContainer.children).forEach(child => {
        child.classList.remove("active");
        });
        document.getElementById("alltree").classList.add("active");
        showSpinner();
        fetch(`https://openapi.programming-hero.com/api/categories`)
        .then(res => res.json())
        .then(data => {
         data.categories.forEach(category => {
                baxo= document.getElementById("catcenter");
                baxo.innerHTML = "";
                listclikedall(category.id);
            
            });
            hideSpinner();
        }).catch(() => hideSpinner());
};
const displaycategory = categories =>{
    
    categoryContainer = document.getElementById("list");
    
    document.getElementById("alltree").classList.add("active");
    displaycati();
    
    document.getElementById("alltree").addEventListener("click", ()=>{
        displaycati();

});
    

    categories.forEach(category => {
    
    let box = document.createElement('div');
    box.innerHTML = `
        <div class="py-2 pl-2  hover:cursor-pointer hover:font-bold">
            <p class"">${category.category_name}</p>
        </div>
    `;
    categoryContainer.append(box);
    box.addEventListener("click", ()=>{
        Array.from(categoryContainer.children).forEach(child => {
        child.classList.remove("active");
        });
        box.classList.add("active");
        listcliked(category.id);
        
    });
    
});

}

const listclikedall = (id) => {
  showSpinner();
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => {
      displaycatitemsall(data.plants);
      hideSpinner();
    })
    .catch(() => hideSpinner());
};

const listcliked = (id) => {
  showSpinner();
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => {
      displaycatitems(data.plants);
      hideSpinner();
    })
    .catch(() => hideSpinner());
};


const displaycatitems = (data) =>{
    const baxo= document.getElementById("catcenter");
    baxo.innerHTML = "";
    data.forEach(item =>{
        
         let dibba = document.createElement('div');
         dibba.innerHTML = `
          <div class="h-[400px] bg-white p-2 flex flex-col hover:shadow-lg hover:scale-[1.1] duration-300">
             <img class="h-[50%] w-full rounded-2xl"src=${item.image} alt="" srcset="">
             <p class="font-bold">${item.name}</p>
             <div class="h-[80px]"><p class="overflow-ellipsis text-[10px] font-light">${item.description}</p></div>
             <div class="flex justify-between">
             <button class="mt-2 bg-[#DCFCE7] text-[#15803D] px-2 rounded-3xl">${item.category}</button>
             <p class="font-bold mt-2">ট ${item.price}</p>
              </div>
             <a class="btn btn-ghost text-sm rounded-4xl bg-[#15803D] hover:bg-[#FACC15] hover:text-black text-white my-3">Get Involved</a>
          </div>
        `
        baxo.append(dibba);
       
    })
}
const displaycatitemsall = (data) =>{
    const baxo= document.getElementById("catcenter");
   
    data.forEach(item =>{
        
         let dibba = document.createElement('div');
         dibba.innerHTML = `
          <div class="h-[400px] bg-white p-2 flex flex-col hover:shadow-lg hover:scale-[1.1] duration-300">
             <img class="h-[50%] w-full rounded-2xl"src=${item.image} alt="" srcset="">
             <p class="font-bold">${item.name}</p>
              <div class="h-[80px]"><p class="overflow-ellipsis text-[10px] font-light">${item.description}</p></div>
             <div class="flex justify-between">
             <button class="mt-2 bg-[#DCFCE7] text-[#15803D] px-2 rounded-3xl">${item.category}</button>
             <p class="font-bold mt-2">ট ${item.price}</p>
              </div>
             <a class="btn btn-ghost text-sm rounded-4xl bg-[#15803D] hover:bg-[#FACC15] hover:text-black text-white my-3">Get Involved</a>
          </div>
        `
       baxo.append(dibba);
       dibba.children[0].children[4].addEventListener("click", ()=>{
             const cartContainer = document.getElementById("cart");
             const cartitem = document.createElement('div');
             cartitem.innerHTML = `
               <div class="bg-[#F0FDF4]  h-[60px] flex flex-row justify-between  mb-2">
                 
                 <div class="flex flex-col">
                    <p class="font-bold">${item.name}</p>
                    <p class="font-light">ট ${item.price} X 1</p>
                </div>
                 
                    <div class="flex items-center">
                    <button class="cross h-[30px] w-[30px] bg-[#15803D] text-white px-2 rounded-4xl hover:bg-red-700">X</button>
                    </div>
                    
                   
                
               </div>
             `;

            totalCost += item.price;
               
            document.getElementById("tk").innerText = totalCost;
            cartContainer.appendChild(cartitem);
            const crs = cartitem.children[0].children[1];
            crs.addEventListener("click", () => {
                const amount = item.price;
                totalCost -= amount;
                document.getElementById("tk").innerText = totalCost;
                cartContainer.removeChild(cartitem);
            });
       });
       
       
    })
}

