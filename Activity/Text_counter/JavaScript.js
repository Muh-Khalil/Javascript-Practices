let input = document.querySelector("input");
let div = document.querySelector(".container");
let btn = document.querySelector("button");
let count = 0;
let h3 = document.querySelector("h3");
let strong = document.createElement("strong");

input.addEventListener("input",(event)=>{
   
    console.log(event.data)
    console.dir(event);
    if(event.data != null)
        {
            div.innerText = input.value;
            count++;
        }else{
            if(count >= 0)
                {
                    div.innerText = input.value;
                    count--;
                }  
        }  
        strong.innerText = count;
        h3.append(strong);
})

btn.addEventListener("click",()=>{
    input.value = "";
    btn.style.backgroundColor = "yellow";
})


