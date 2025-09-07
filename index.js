fetch("https://openapi.programming-hero.com/api/categories")
.then(res => res.json())
.then(data => displaycategory(data.categories))    
const displaycati = () =>{
    Array.from(categoryContainer.children).forEach(child => {
        child.classList.remove("active");
        });
        document.getElementById("alltree").classList.add("active");
        fetch(`https://openapi.programming-hero.com/api/categories`)
        .then(res => res.json())
        .then(data => {
         data.categories.forEach(category => {
                baxo= document.getElementById("catcenter");
                baxo.innerHTML = "";
                listclikedall(category.id);
            });
        });
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
const listclikedall = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => displaycatitemsall(data.plants) )
}
const listcliked = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => displaycatitems(data.plants) )
}
const displaycatitems = (data) =>{
    baxo= document.getElementById("catcenter");
    baxo.innerHTML = "";
    data.forEach(item =>{
        
         let dibba = document.createElement('div');
         dibba.innerHTML = `
          <div class="h-[400px] bg-white p-2 flex flex-col hover:shadow-lg hover:scale-[1.1] duration-300">
             <img class="h-[50%] w-full"src=${item.image} alt="" srcset="">
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
    baxo= document.getElementById("catcenter");
   
    data.forEach(item =>{
        
         let dibba = document.createElement('div');
         dibba.innerHTML = `
          <div class="h-[400px] bg-white p-2 flex flex-col hover:shadow-lg hover:scale-[1.1] duration-300">
             <img class="h-[50%] w-full"src=${item.image} alt="" srcset="">
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
              console.log(item.price); 
       });
       
       
    })
}