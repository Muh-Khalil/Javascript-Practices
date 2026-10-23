let input = document.querySelector("input");

let parr = document.querySelector("p");

input.addEventListener("input",function(event){
    console.log(input.value);
    parr.innerText = ` ${input.value}`;
})

let btn = document.querySelector("button")

btn.addEventListener("click",function(event){
    // event.preventDefault();
    btn.style.backgroundColor = "rgb(238, 125, 44)";
    alert("Your message is submitted");
})