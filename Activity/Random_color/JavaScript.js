let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");

function changes(){
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let randomColor = "rgb" + "("+ red + "," + green + "," + blue + ")"
    console.log("Your color is updated",randomColor);
    return randomColor;
}

btn.addEventListener("click",function(){
    
    let color = changes();
    h1.innerText = color;
    div.style.backgroundColor = color;
})