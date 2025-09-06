fetch("https://openapi.programming-hero.com/api/categories")
.then(res => res.json())
.then(data => displaycategory(data.categories))    

const displaycategory = categories =>{
    
    categoryContainer = document.getElementById("list");
    
    document.getElementById("alltree").classList.add("active");
    document.getElementById("alltree").addEventListener("click", ()=>{
        Array.from(categoryContainer.children).forEach(child => {
        child.classList.remove("active");
        });
        document.getElementById("alltree").classList.add("active")  ;
        console.log("all tree");
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
const listcliked = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => displaycatitems(data.plants) )
}
const displaycatitems = (data) =>{
    baxo= document.getElementById("catcenter");
    baxo.innerHTML = "";
    data.forEach(item =>{
        //  console.log(item.image);
         let dibba = document.createElement('div');
         dibba.innerHTML = `
          <div class=" ">
             <img src=${item.image} alt="" srcset="">
          </div>
        `
        baxo.append(dibba);
       
    })
}
