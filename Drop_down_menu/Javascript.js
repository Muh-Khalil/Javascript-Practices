let input = document.querySelector("input");
let drop_icon = document.querySelector("#icon");
let unordered_list = document.querySelector(".visibility_mode");
let list_text = document.querySelectorAll("li");

document.addEventListener("DOMContentLoaded",function(){
    drop_icon.addEventListener("click",()=>{
        unordered_list.classList.toggle("visibility_mode");
        list_text.forEach((element) => {
            element.addEventListener("mouseenter",()=>{
                let value = element.children[1];
                console.log(value.textContent);
                input.value = value.textContent;
            });
        });
    });
});

