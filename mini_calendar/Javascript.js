let date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let day_array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month_array = ["january", "February", "march", "April", "May", "june", "july", "August", "September", "October", "November", "December"];

let update = new Date();
console.dir(update);
date.innerText = update.getDate();
let day_number = update.getDay();
let month_number = update.getMonth();
year.innerText = update.getFullYear();


for (let index = 0; index < day_array.length; index++) {
    if (index == day_number) {
        console.log(day_array[index]);
        day.innerText = day_array[index];
        break;
    }
}

for (let index = 0; index < month_array.length; index++) {
    if (index == month_number) {
        console.log(month_array[index]);
        month.innerText = month_array[index];
        break;
    }
}
console.log(date);
console.log(day);
console.log(month);
console.log(year);
console.log(month_array);
console.log(day_array);