let close_icon = document.querySelector("span");
let full_image = document.querySelector(".full_image");
let images = document.querySelectorAll(".img");
let view = document.querySelector(".view");

document.addEventListener("DOMContentLoaded",function(){

images.forEach(img => {
    img.addEventListener("click",()=>{
        // console.log("img event is applied");
        // console.log(img.src);
        view.src = img.src;
        console.log(view.src);
        full_image.classList.remove("display_mode");
    })
});
    
})
close_icon.addEventListener("click",()=>{
    full_image.classList.add("display_mode");
    // console.log("The full image is hide");   
})