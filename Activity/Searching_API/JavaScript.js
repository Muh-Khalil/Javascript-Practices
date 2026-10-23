let url = "http://universities.hipolabs.com/search?name=";
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    state = input.value;
    let strong = document.createElement("strong");
    strong.innerText = "";
    strong.innerText = state;
    h2.append(strong);
    showdata(state);
    input.value = "";

})

async function showdata(state){
    let array = await axios.get(url+state);
    console.log(array);
    let colleges = array.data;
    for(coll_name of colleges)
        {
            console.log(coll_name.name);
            let list = document.createElement("li");
            list.innerText = coll_name.name;
            ul.appendChild(list);
        }
        array = [];
}

