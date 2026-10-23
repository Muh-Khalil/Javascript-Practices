let input = document.querySelector("input");
let btn = document.querySelector("button");
let see_more = document.querySelector(".Search_more");
let body_image = document.querySelector(".images");
let body = document.querySelector("body");
let keyword = '';
let count = 1;
let key = "296qQ1LZpXmArp2biwiJuwKf3xXhyx3j3T9CnMWQVEw";
let page = 1;


input.addEventListener("input",(event)=>{
    console.dir(input.value);
    keyword = input.value;
    async function Search_result()
    {
        let link = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;
        let result = await fetch(link);
        let data = await result.json();
        let result_data = data.results;
       await result_data.map((element) => {
        if(count <= 12)
        {
            console.log(element.urls.small);
            let image = document.createElement("img");
            image.src = '';
            body_image.appendChild(image);
            image.src = element.urls.small;
            // image.classList.remove("img");
            image.classList.add("img");
            count++;
        }
        });
        
        see_more.classList.remove("visible_mode");
        // see_more.style.visibility="visible";
    }
    btn.addEventListener("click",()=>{
        console.log("btn is clicked!");
        page = 1;
        Search_result();

        see_more.addEventListener("click",()=>{
            // body_image.insertAdjacentElement("afterend",see_more);
            // see_more.classList.toggle("visible_mode")
            body_image.classList.add("add_images");
            console.log("See more is clicked!");
            page++;
            count = 1;
            Search_result();
            console.log("hhhhhhhhhhhhhhhhhhhhhhhhh");
            // see_more.style.visibility="visible";
        });    
    });
});



array = [2,3,4,5,6,77];
array.forEach((ele)=>{
    console.log(ele);
})
// let picture = document.querySelector("img");
// picture.classList.add("img");
// console.log(picture.classList);
