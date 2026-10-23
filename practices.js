// let x = 20;
// let y = 10;
// let z = x + y;
// console.log(z);
// console.log("Now i am using the concept of the template letarial.")
// let str = `The Summatation of the two number is: ${z}`;
// console.log(str);

//=======================================================If-else statement

// let size = 'l';
// if(size == "xl")
//     {
//         console.log("The price of the popcorn is: 250");
//     }else if(size == "l")
//         {
//             console.log("The price of the popsorn is: 200");
//         }else if(size == "s")
//             {
//                 console.log("The price of the popcorn is: 100");
//             }else
//             {
//                 console.log("The price of the popcorn is: 50");
//             }

//===========================================Switch statement with example.
// let day = 1;
// switch(day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default :
//         console.log("You entered the number other than from 1 to 7");
//         console.log("Please entered the number inside from 1 to 7.");
// }

//=======================================================Alert usage

// alert("You enetered the wrong statement");
// console.error("Something wrong");
// console.warn("This the first warnning");

//=====================================prompt is used for taking the value.

// let firstName = prompt("Please enter your first name");
// let LastName = prompt("Enter your second name");
// console.log(firstName, LastName);
// alert(firstName + " " + LastName);

//========================================EXERCISE========================
//                         Question number = 01.
// let num = 20;
// if(num/10)
//     {
//         console.log("Good");
//     }else
//     {
//         console.log("False");
//     }

//                         Question number = 02.

// let Name = prompt("Enter your name.");
// let age = prompt("Enter your age.");
// let output = `Your Name is: ${Name} and age is: ${age}.`;
// alert(output);

//                         Question number = 03.

// let num = 2;
// switch(num)
// {
//     case 1:
//         console.log("Month in Quater 1: January, february,March");
//         brerak;
//     case 2:
//         console.log("Month in Quater 2: April, May,June");
//         break;
//     case 3:
//         console.log("Month in Quater 3: july, August,September");
//         break;
//     case 4:
//         console.log("Month in Quater 4: October, November,December");
//         break;
//     default:
//         console.log("Your entered wrong number");
// }

//                      question number = 04.

// let str = "Muhammad";
// if(str.length > 5 && (str[0] == 'A' || str[0] == 'a'))
//     {
//         console.log("This the golden string.");
//     }else
//     {
//         console.log("This is not the golden string.");
//     }

//                      Question number = 05.

// let num1 = 15;
// let num2 = 7;
// let num3 = 23;
// if((num1 > num2) && (num1 > num3))
//     {
//         console.log(num1);
//     }else if((num2 > num1) && (num2 > num3))
//         {
//             console.log(num2);
//         }else 
//         {
//             console.log(num3);
//         }

//                      Question number = 06.
//To check the last digit is same or not.

// let num1 = 994;
// let num2 = 8794;

// if (num1%10 == num2%10)
//     {
//         console.log("The last digit is same.");
//     }else
//     {
//         console.log("The last digit is different.");
//     }


//                          Practices Qs.
// let array = ["Junuary","July","March","April"];
// //  convet into form = ["July","June","March","April"]
// let remo = array.shift();
// console.log(array);
// array[1].unshift("June");
// console.log(array);

//                          Question number = 01.
//  Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//  positive number].
//  For example: for array [7, 9, 0, -2] and n=3
//  Print, [7, 9, 0].


// let array = [7,9,0,-2];
// console.log("Print the first three number.");
// let newarray = array.splice(0,3);
// console.log("The first three number is:", newarray);

//                          Question number =02.
//Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//      For example: for array [7, 9, 0, -2] and n=3
//      Print, [9, 0, -2

// let array = [7,9,0,-2];
// console.log("Print the last three number.");
// let newarray = array.splice(1);
// console.log("The last three number is:", newarray);

//                          Question number= 03.
//  Qs3. Write a JavaScript program to check whether a string is blank or not.
// let string = "Shabab";
// if(string == "")
//     {
//         console.log("The given string is empty.");
//     }else
//     {
//         console.log("The given is not empty.");
//     }

//                      Question number = 04.
//  Qs4. Write a JavaScript program to test whether the character at the given (character)
//          index is lower case.
// let string = "Shabab";
// console.log(string[2]);
// console.log(string[2].toLowerCase());
// if(string[2] == string[2].toLowerCase())
//     {
//         console.log("The given index is an lower case.");
//     }else{
//         console.log("The given index is not in lower case.");
//     }

//                          Question number = 05.
//      Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
// let string = "  Muhammad   ";
// console.log("The original string is: ",string);
// console.log("The string after removal space befor and after.");
// console.log(string.trim());

//                          Question number = 06.
//  Qs6. Write a JavaScript program to check if an element exists in an array or not
// let array = [2,4,5,8];
// if(array[0].includes == "true" == 2)
//     {
//         console.log("if element is exist then it will return true.");
//     }else
//     {
//         console.log("If the element is not exist then it will return false");
//     }

//=====================================print Even number===================================
// let mult = 0;
// let num = prompt("Enter the number.");
// for(let i = 0; i<=10; i++)
//  {
//     mult = num * i;
//     console.log("2 *",i,"=",mult);
//  }


//============================Guessing Game=============================================
// let i = 0;
// let num = 0;
// while(i<=10)
//     {
//         num = prompt("Enter your fravite number.");
//         if(num == 4)
//             {
//                 console.log("good");
//                 break;
//             }else{
//                 console.log("bad");
//             }
//             i++;
//     }

//==================================Loops with Array======================================
// let array = [1,5,8,9,0,3];
// for(let i = 0; i<=array.length; i++)
//     {
//         console.log(array[i]);
//     }

//================================Loops with Nested array===============================
// let num = [[23,45],[67,89],[1,34,89]];
// for(let i = 0; i<num.length; i++)
//     {
//         for(let j = 0; j<num[i][j]; j++)
//             {
//                 console.log(i,j,"=",num[i][j]);
//             }
//     }
//  Question No.01 Write a JS program to delete all occurrences of element ‘num’ in a given array.
//      Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
//        Result should be arr = [1, 3, 4, 5, 6, 3]

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i = 0; i<arr.length; i++)
//     {
//         if(arr[i] == num)
//             {
//                 console.log(arr.splice(i,1));
//             }
//     }
//     console.log(arr);

//  Question No.02 Write a JS program to find the no of digits in a number.===============
//      Example : if number = 287152, count = 6

// let number = "287152";
// let count = 0;
// for(list of number)
//     {
//         count++;
//     }
//     console.log(count);

//    Question No.03 Write a JS program to find the sum of digits in a number.==============
//          Example : if number = 287152, sum = 25

// let number = "287152";
// let sum = 0;
// for(let i = 0; i<number.length; i++)
//     {
//         console.log(i);
//         sum = number[i] + sum;
//     }
//     console.log("The sum of the digit in a number.");
//     console.log(sum);

//Qyestion No. 04. ===============Print the factorial of a number n.==========================
//      [Factorial of a number n is the product of all positive integers less than or equal to a
//    given positive integer and denoted by that integer. ]
//    Example :
//   7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
//    5! (factorial of 5) = 1x2x3x4x5 = 120
//    3! (factorial of 3) = 1x2x3 = 6
//    0! Is always 1

// let num = 5;
// let factorial = 1;
// for(let i = 1; i<=5; i++)
//     {
//         factorial = factorial * i;
//     }
//     console.log("The factorial of that number",num,"is",factorial);

//Question No. 05.=========Find the largest number in an array with only positive numbers.======

// let array = [2,5,7,9,0,1,6];
// let num = array[0];
// console.log(array);
// for(let i = 0; i<array.length; i++)
//     {
//         if(array[i] > num)
//             {
//                 num = array[i];
//             }
//     }
//     console.log("The maximum number is:",num);

//============================Object Leterials=============================================
// let man = {
//     name : "Muhammad khalil",
//     age : 19,
//     Loaction : "Latamber" 
// };

// console.log(man);

//=========================Thread=============================================

// let thread = {
//     username : "jawad ahmed",
//     content : "About health and safety",
//     like : "9k",
//     report : 2,
//     tags : 10
// }

// console.log("Please coorect your post.");
// console.log(thread);

//=================================Nesting of the object==================================

// let family = [
//     {
//         name : "Dashat mir",
//         age : 90
//     },
//     {
//         name : "Ahmad Faraz",
//         age : 55,
//         retuir : "Pak army"
//     },
//     {
//         name : "Asif Nawaz",
//         age : 30,
//         employee : "Pak army"
//     }
// ];

//======================================Practices Question=================================

//  Question number 01. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

// let num = Math.floor(Math.random() * 6) + 1;
// console.log("random number of the die rolled is",num);

//Question number 02. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.


// let car_Store = {
//     name : "bnw",
//     model : "2002",
//     color : "Black"
// }
// console.log(car_Store);

// Question number 03. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

// let person = {
//     name : "jawad Ahmad",
//     age : 19,
//     city : "Peshawar"
// }
// console.log("The Person data is:",person);
// person.city = "New York";
// person.country = "United States";
// console.log("Now that person data will be:",person);

//===================================Function practice==================================

// console.log("The even number is:");
// function even_number(){
//     for(let i = 0; i<=10; i++)
//         if(i%2 == 0)
//             {
//                 console.log(i);
//             }
// }

//even_number();


// console.log("The even number is:");
// function even_number(){
//     for(let i = 0; i<=10; i++)
//         if(i%2 != 0)
//             {
//                 console.log(i);
//             }
// }

// even_number();

//==========================Prime Number==============================================
// let num = 9;
// for(let i = 2; i< num; i++)
//     {
//         if(num % i == 0)
//             {
//                 console.log("the given number is not prime",num);
//                 break;
//             }
//     }
//     if(i == num)
//         {
//             console.log("the given number is prime",num);
//         }

//==========================Prime number between two number============================

// let num1 = prompt("enter the first number");
// let num2 = prompt("enter the second number");
// let j = 0;
// let count = 0;
// console.log("The prime number beteen",num1,"and",num2);
// for(let i = num1; i<= num2; i++)
//     {
//         for(j = 2; j< i; j++)
//             {
//                 if(i == 2)
//                     {
//                         count++;
//                         console.log(i);
//                     }

//                 if(i % j == 0)
//                     {
//                         break;
//                     }
//             }
//             if(j == i)
//                 {
//                     count++;
//                     console.log(i);
//                 }
//     }
//     console.log("The total prime number is",count);

// let num1 = 5;
// let num2 = 6;
// let num3 = 10;
// function sum(num1,num2,num3)
// {
//     console.log("the average of the three number is",(num1+num2+num3)/3);
// }

//===========================Print Table through Function============================
// let num = 8;
// function table(num1,num2){
//     let result = 0;
//     for(let j = num1; j<=num2; j++)
//         {
//             console.log("===================",j,"Table==============================");
//             for(let i = 0; i<=20; i++)
//                 {
//                     result = j * i;
//                     console.log(j,'*',i,'=',result);
//                 }
//         }
// }

// //function call
// table(0,100);

//===================================print sum between 1 to 100========================
// let result = 0;
// function sum(){
//     for(let i = 0; i<=100; i++)
//         {
//             result = i + result;
//         }
//     return result;
// } 

// let summation = sum();
// console.log("The summation is",summation);

//======================================catconation of the string============================
// let result = "";
// let array = ["How","","are","","you","","i","","am","","fine"];
// function string(array){
//     for(let i = 0; i<array.length; i++)
//         {
//             result = result + array[i];
//         }
//         return result;
// }
// let finalresult = string(array);
// console.log("the final string become",finalresult);

//==================================Lexical Scope=======================================

// function outer(){
//     let num1 = 90;
//     let num2 = 80;
//     function inner(){
//         console.log(num1,"and",num2);
//     }
//      inner();
// }

//===========================Practice question of lexical Scope========================
// let name = "Khalil";
// function outer(){
//     let name = "jawad";
//     console.log(name);
//     function inner(){
//         console.log(name);
//     }
// }

// console.log(name);
// outer();

//================================Function Expression===================================

// let name = function(){
//     let x = 0; 
//     let y = 1;
//     let z = 0;
//     console.log(x);
//     console.log(y);
//     for(i = 0; i<10; i++)
//         {
//             z = x + y;
//             console.log(z);
//             x = y;
//             y = z;
//         }
// }

//=============================Higher Order Function===================================
//The function which take and return the function as a argument.
// function name(abc,num){
//     for(let i = 0; i<= num; i++)
//         {
//             abc();
//         }
// }

// let another = function(){
//     console.log("Hello");
// }
// name(another,3);

//========================================Practices Question============================

// Write a JavaScript function that returns array elements larger than a number.

//  let array = [2,3,4,5,6,7];
//  let n = 1;
//  function arr(array){
//     let array1 = array.splice(0,2);
//     return array;
//  }
//  let retarray = arr(array);
//  console.log("the return array is",retarray);

//  Write a JavaScript function to extract unique characters from a string.
//  Example: str = “abcdabcdefgggh” ans = “abcdefgh”.
// let string = "abcdabcdefgggh";
// console.log(string);
// function Unique(str){
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//             console.log(ans);
//         //if current character is not added, then add it in
//         //ans.
//         //Otherwise it is a duplicate.
//         ans += currChar;
//         }
//         } 
//         return ans;
//     }
// console.log(Unique(string));

//=========================================To find the Unique Character in a string============

// let string = "abcdeabcd";
// let emptystring = "";
// for(let i = 0; i< string.length; i++)
//     {
//         let newstr = string[i];
//         if(emptystring.indexOf(newstr) == -1)
//             {
//                 emptystring = emptystring + newstr;
//             }
//     }
// console.log(emptystring);

//======================================This keyword=================================
// let student = {
//     name:"Muhammad khalil",
//     age : 19,
//     gender: "male",
//     averge()
//     {
//         console.log(this);
//         console.log("The age of the student is",this.age);
//     }
// }

//======================================Try and catch block===========================

// let a = 5, b = 0;
// try{
//     console.log(a/b);
//     throw(b)
// }catch(err){
//     console.log("a and b is undefined.");
//     console.log("change the value of b.");
// }

//=======================================arrow function============================

// let square = (n) =>{
//     console.log("The square of",n,"is",n*n);
// };

// square(5);

// let num = 5;
// let mult = (x,y) =>{
//     return x * y;
// };

// console.log("The mutliplication of",num,"is",mult(num,num));

//================================implicit return arro function=======================
// let num1 = 10, num2 = 20;
// let sum = (x,y) =>(
//     x + y
// );

// console.log("The sum of the two number",num1,"and",num2,"is",sum(num1,num2));

//================================set time out function===============================

// console.log("Hi there!");
// let funct = () =>{
//     for(let i = 0; i<5; i++)
//         {
//             console.log("Muhammad khalil");
//         }
// };

// setTimeout(funct,5000);
// console.log("What to tell");

//=======================================set interval function=======================
 
// console.log("hi there!");
// let funct = () =>{
//          for(let i = 0; i<5; i++)
//              {
//                  console.log("Muhammad khalil");
//              }
//      };
// let id1 = setInterval(funct,2000);

// console.log("I am here.");

// let funct2 = () =>{
//         for(let i = 0; i<5; i++)
//             {
//                 console.log("Tell me about yourself");
//             }
//     };
//  let id2 = setInterval(funct2,2000);
//  clearInterval(id1);//setInterval function can stop through clearInterval function. By using there id.
//  clearInterval(id2);

//========================================This with Arrow function=========================
//===================================very Important concept============================
// let family = {
//     father : "Ahmad Faraz",
//     age : 55,
//     son : "Asif",
//     getName : function(){
//         console.log(this);
//         return this.son;
//     },

//     getAge : () =>{
//         console.log(this);
//         return this.age;
//     },

//     Funct1 : function(){
//         setTimeout(()=>{
//             console.log(this);
//         },2000)
//     },

//     funct2 : function(){
//         setTimeout(function(){
//             console.log(this);
//         },2000)
//     }
// }

//=============================Practice Question====================================
//                              Question number = 01.
// let n = 10;
// let square = (n)=>{
//     return n*n;
// }

// console.log("The square of that number",n,"is",square(n));

// Write the function that print "Hello World!" 5 times at each 2 second.
//                            Question number = 02.

// let count = 0;
// let id = setInterval(function(){
//     console.log("Hello World!");
//     count ++;
//     if(count == 5){
//         clearInterval(id);
//     }
// },2000);

//==================================Question number = 03.
// Write an arrow function name arrayaverge that accept an array of number and then
//   return the averge of that array.

// let array = [2,3,5,6,7,9];
// let sum = 0;
// let result = 0;
// let count = 0;
// let arrayaverge = (array)=>{
//     for(let i = 0; i<array.length; i++)
//         {
//             sum = sum + array[i];
//             count++;
//         }
//         result = sum /count;
//         return result;
// }

// console.log("The average of that array",array,"is",arrayaverge(array));

// create an arrow function isEven that take single argument as a number to check that
// number is even or odd.

// let num = prompt("Enter the number");
// let IsEven = (n) =>{
//     if(n % 2 == 0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }

// console.log("To check this number either even or odd",num,"is",IsEven(num));

//=================================Array method ForEach function==============================

let array = [2,4,5,6,7];
let string = ['Khalil','shabab','jawad'];
function name(item){
    console.log(item);
}
array.forEach(name);


string.forEach(function(it){
    console.log(it);
});

array.forEach((element)=>{
    console.log(element);
})

//=================================Array method map() function==============================

// let array = [1,3,5,7,9];
// function name(item){
//     return item * item;
// }
// console.log("By simply passing name of the function as a argument");
// let newArray = array.map(name);
// console.log(newArray);

// console.log("By simply passing function as a argument");
// let newArray2 = array.map(function(element){
//     return element * 2;
// })
// console.log(newArray2);

// console.log("By simply passing arrow function as a argument");
// let newArray3 = array.map((it)=>{
//     return it * 3 + 6;
// })
// console.log(newArray3);

//==================================array method filter()==============================

// let array = [2,4,6,7,8,9,0];
// function filt(item){
//     return item %2 != 0;
// }

// let newArray = array.filter(filt);
// console.log(newArray);
// //filter function is invoked for the item that time when return gives true value.
// // at thet time in an newarray item is stored.

//==================================array method reduce()==============================

// let array = [2,3,4,5,6,7,8,9,0];
// console.log("By using arrow function as a argument.")
// let result = array.reduce((final,num)=>{
//     console.log(final);
//     return final + num;
// })

// console.log("The sum of the array is:",result);

// console.log("By using normal function as a argument");
// let result2 = array.reduce(function(fin,number){
//     console.log(fin);
//     return fin + number;
// })

// console.log("The final result of the array is:",result2);

// console.log("By passing name of the function as a argument.");

// function arrayResult(res, item){
//     console.log(res);
//     return res * item;
// }

// let value = array.reduce(arrayResult);

// console.log("The final result of the array is:",value);

//=========================Find Minimum number in array=============usind reduce method====

// let array = [1,2,4,5,6,8,0,4,5,6,9];
// let min = array[0];
// let minimum = array.reduce((min,element) =>{
//     if(element < min)
//         {
//             return element;
//         }else{
//             return min;
//         }
// })
// console.log("The minimum number in array is",minimum);

//=================To check all element of the array is multiple of 10 or not.==============
// let array = [10,20,30,5,40,60];

// let check = array.every((element)=>{
//     return (element % 10 == 0);
// });

// if(check == true){
//     console.log("The element is the multipple of 10");
// }else{
//     console.log("The element in array is not multiple of 10");
// }

//========find maximum number in an array by using reduce function========================

// let array = [2,4,6,8,9,0];
// let max = array[0];

// let result = array.reduce((max,element)=>{
//     if(element > max){
//         return element;
//     }else{
//         return max;
//     }
// });

// console.log("The maiximum number in an array is",result);

//=======================spread of the object=========================================
// let obj = {
//     name : "Jawad ahmad",
//     age : 18
// };

// console.log("In spread form is",{...obj.name});
// let object = {...obj,gender:"male"};

//====================Destructuring in array==================================
// let array = [3,4,5,7,9];
// let [num1,num2,num3] = array;
// console.log(num1,num2,num3);

// let string = ["shabab","Jawad","Muhammad","Israr"];
// let [name,name2,name3] = string;
// console.log(name,name2,name3);

//====================Destruturing in Object ========================================

// let family = {
//     father : "Ahmad Faraz",
//     age : 55,
//     gender : "male"
// }

// let {father,age} = family;//It search key. when key same then it will store in it.
// console.log(father,age);

// let {father :fathername,age :fatherage} = family;
// console.log(fathername,fatherage);

//+++++++++++++++++++++++Practices Question+++++++++++++++++++++++++++++++++++++++++++++
// Square and sum the array elements using the arrow function and then find the
//  average of the array.

// let array = [2,4,6,7,5,3,1];
// let count = 0;
// let sum = 0;
// //used for taking square of that array.
// let newarray = array.map((element)=>{
//     count++;
//     let square = element ** 2;
//      sum = sum + square;
//     return square;
// });

// console.log("The original array is:",array);
// console.log("the average of that square array is",newarray,sum/count);

//======================================================================================
//   Create a new array using the map function whose each element is equal to the
//      original element plus 5.

// let array = [2,4,5,7,8,9];
// let newArray = array.map((element)=>{
//     return element + 5;
// })
// console.log("The old array is",array);
// console.log("The new array is",newArray);

//======================================================================================
//   Create a new array whose elements are in uppercase of words present in the
//      original array.

// let array = ["shabab","khalil","amin","ali"];
// let newArray = array.map((str)=>{
//     let newString = str.toUpperCase();
//     return newString;
// })
// console.log("The original array is",array);
// console.log("The new array is",newArray);

//=====================================================================================
// . Write a function called doubleAndReturnArgs which accepts an array and a
//  variable number of arguments. The function should return a new array with the original
//  array values and all of the additional arguments doubled.

// let array = [2,4,5,6,7,0];
// let newArray = function doubleAndReturnArgs(argument,array){

// }

//=====================================================================================
// . Write a function called mergeObjects that accepts two objects and returns a new
//  object which contains all the keys and values of the first object and second object.

// let Object1 = {
//     name : "Muhammad",
//     age : 19,
//     gender : "male"
// }

// let Object2 = {
//     Username : "Muhammad@1234",
//     password : "acbxdf",
//     e_mail : "Muhammad@gmail.com"
// }

// let mergeObjects = function(Object1,Object2){
//     return {...Object1,...Object2};
// }
// console.log("The new Object is",mergeObjects(Object1,Object2));

//=================New Practices set queston through DOM=================================

// Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me".

// let body = document.querySelector("body");
// let input = document.createElement("input");
// let btn = document.createElement("button");
// input.placeholder = "i am the input";
// btn.innerText = "Click me!";

// body.appendChild(input);
// body.appendChild(btn);

//==============================Question number = 02===================================
// Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn".

// input.placeholder = "username";
// btn.id = "btn";

//=============================Question number = 03.====================================
//  Access the btn using the querySelector and button id. Change the button background 
// color to blue and text color to white.

// let button = document.querySelector("#btn");
// button.classList.add("btn1");

//===============================Question number = 04.=================================
//  Create an h1 element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.

// let h1 = document.createElement("h1");
// h1.innerText = "DOM practice";
// let body = document.querySelector("body");
// body.appendChild(h1);
// h1.classList.add("h1_design");

//================================Question number = 05.================================
//  Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.

// let body = document.querySelector("body");
// let parra = document.createElement("p");
// parra.innerHTML = "Apna College <h2>Delta</h2> practice";
// body.append(parra);

//===============================DOM Events===========================================
// let btn = document.querySelectorAll("button");

// function click(){
//     console.log("You clicked the button");
// }

// for(button of btn){
//     button.onclick = click;
// }

// function hovering(){
//     console.log("You hovered on the button");    
// }

// for(button2 of btn){
//     button2.onmouseenter = hovering;
//     }

//=======================addEventListener(event,callback)================================

// let btn = document.querySelectorAll("button");

// function printing(){
//     console.log("You click the button");
// }

// function hovering(){
//     alert("You enter the button");
// }

// for(buttons of btn){
//     // buttons.addEventListener("click",printing);
//     // buttons.addEventListener("click",hovering);//click event.

//     // buttons.addEventListener("dblclick",printing);//double click event.
//     // buttons.addEventListener("mouseenter",hovering);//mouse enter event.

//     // buttons.addEventListener("mouseenter",printing);
//     // buttons.addEventListener("mouseleave",hovering);//mouse leave event.
// }

//=====================================This an EventListener==============================
// let h1 = document.querySelector("h1");
// let div = document.querySelector("div");
// let btn = document.querySelector(".btn_1");

// function changeColor(){
//     console.log(this.innerText);
//     this.style.color = "green";
//     this.classList.add("btn1")
// }

// h1.addEventListener("click",changeColor);
// div.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);

//======================================Keyboard Event=====================================
// let input = document.querySelector(".input");
// input.addEventListener("keydown",function(event){
//     console.dir(event);
//     console.log("Key is pressed");
// })

//======================================Form Event=========================================

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){   //event argument that is by default.
//     event.preventDefault(); //this method will not go to another page. means if you submit your form then you remain on that page.
//     // event.defaultPrevented(); //this method work opposite to above method. or Even these method is not used then again it will go to another page.
//     alert("Your form is submitted");
//     console.log("Congratulation");
// })

//==================================Extract the form data =================================

// let user = document.querySelector(".user");
// let pass = document.querySelector(".pass");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event) {
//     event.preventDefault();
//     console.dir(event);
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`your username is ${user.value}, and passward is ${pass.value}`);
// })

//      ==============================indirect method ===============================
 
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(this);
//     let user = this.elements[0];
//     let pass = this.elements[1];

//     alert(`your username is ${user.value} and passward is ${pass.value}`);
// })

//=====================================change event and input event ======================

// let user = document.querySelector(".user");

// user.addEventListener("change",function(event){
//     event.preventDefault();

//     console.log("change event occure");
//     console.log(user.value);
// })
//=========================== input event ==============================
// user.addEventListener("input",function(event){
//     event.preventDefault();

//     console.log("input event occure");
//     console.log(user.value);
// })

//============================= Practice Set Question ===============================

//s1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load

// let btn = document.querySelector("button");

// // btn.addEventListener("mouseout",function(){
// //     console.log("mouse event is out");
// // })

// // btn.addEventListener("keypress",function(){
// //     console.log("Key press event occurs");
// // })

// btn.addEventListener("load",function(event){
//     console.dir(event)
//     alert("I am scrolling now");
// })

//============================= question number 02.===================================
//Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

// let btn = document.createElement("button");
// btn.innerText = "Submit";
// let body = document.querySelector("body");
// body.appendChild(btn);
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor = "yellow";
// })

//============================= question number 03. ===================================
//  Create an input element on the page with a placeholder ”enter your name” and an
//   H2 heading on the page inside HTML.
//   letters from a-z, A-Z and space (all other characters should not be detected).
//   The purpose of this input element is to enter a user’s name so it should only input
//   Whenever the user inputs their name, their input should be dynamically visible inside
//   the heading.
//   [Please note that no other character apart from the allowed characters should be
//   visible in the heading]

// let input = document.querySelector("input");
// let h2 = document.querySelector("h2");

// input.addEventListener("input",function(event){
//     h2.innerText = input.value;
// })

//=============================Event Bubbling===================================

// let div = document.querySelector("div");
// let ol = document.querySelector("ol");
// let li = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("Div tags is clicked");
// })

// ol.addEventListener("click",function(event){
//     event.stopPropagation(); // This method is used to stop Bubbling....
//     console.log("Ol tags is clicked");
// })

// for(list of li)
//     {
//         list.addEventListener("click",function(event){
//             console.log("li element is clicked");
//             event.stopPropagation();
//         })
//     }

//================================ Breakpoint ========================================

// function one()
// {
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three()
// {
//     let result = two() + one();
//     return result;
// }

// let variable = three();
// console.log("The value of the variable is: ",variable);

//====================================== call back hell ===================================

//callback nesting called Callback hell.
//Callback hell is mostly used in API calling and storing data in database.

// function Savedb(data,nextData,delay)
// {
//     let num = Math.floor(Math.random() * 10) +1;
//     if(num > 5)
//         {
//             nextData();
//         }else{
//             delay();
//         }
// }

// Savedb(
//     "Data 1",
//     ()=>{
//     console.log("Data 1: was saved");
//     Savedb(
//         "Data 2",
//         ()=>{
//         console.log("Data 2: was saved");
//         Savedb(
//             "Data 3",
//             ()=>{
//             console.log("Data 3: was saved");
//             Savedb(
//                 "Data 4",
//             ()=>{
//                 console.log("Data 4: was saved");
//             },
//             ()=>{
//                 console.log("Data 4: was not saved");
//             })
//         },
//         ()=>{
//             console.log("Data 3: was not saved");
//         })
//     },
//     ()=>{
//         console.log("Data 2: was not saved");
//     })
// },
// ()=>{
//     console.log("Data 1: was not saved");
// })

//=========================== promise ============================================

// function savedb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 5)
//             {
//                 resolve("Data was saved : ",data);
//             }else{
//                 reject("Data was not saved,Week connection: ",data);
//             }
//     })
// }

// console.log(savedb("Welcome to data base"));

//========================== then and catch =====================================
// function savedb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 5)
//             {
//                 resolve("Data was saved : ",data);
//             }else{
//                 reject("Data was not saved,Week connection: ",data);
//             }
//     })
// }

// let data = savedb();
// data.then(()=>{
//     console.log("problem is resolved");
//     console.log(data);
// })
// .catch(()=>{
//     console.log("problem is rejected");
//     console.log(data);
// })

//================================ promie chaning ========================================

// function savedb()
// {
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 5)
//             {
//                 resolve("Your data saved");
//             }else{
//                 reject("Your data not saved. weak connection");
//             }
//     })
// }

// let data = savedb();
// data.then(()=>{
//     console.log("Data 1 saved");
//     let data2 = savedb();
//     data2.then(()=>{
//         console.log("Data 2 saved");
//     })
//     .catch(()=>{
//         console.log("Data 2 was not saved");
//     })
// })
// .catch(()=>{
//     console.log("Data 1 was not saved");
// })

// ===================== The above work we can do by this method ============================

// function savedb()
// {
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 5)
//             {
//                 resolve("Your data saved");
//             }else{
//                 reject("Your data not saved. weak connection");
//             }
//     })
// }

// let data = savedb();
// data.then(()=>{
//     console.log("Data 1 saved");
//     return savedb();
// })
// .then(()=>{
//     console.log("Data 2 saved");
//     return savedb();
// })
// .then(()=>{
//     console.log("Data 3 was saved");
// })
// .catch(()=>{
//     console.log("Weak connection");
// })

// ========================then and catch default arrgument =======================

// function savedb()
// {
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 5)
//             {
//                 resolve("success: Your data saved");
//             }else{
//                 reject("Your data not saved. weak connection");
//             }
//     })
// }

// let data = savedb();
// data.then((result)=>{
//     console.log("Data 1 saved");
//     console.log(result);
//     return savedb();
// })
// .then((result)=>{
//     console.log("Data 2 saved");
//     console.log(result);
//     return savedb();
// })
// .then((result)=>{
//     console.log("Data 3 was saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("Weak connection");
//     console.log(error);
// })

// ==== applying promise concept on the button to change their background color ==========

// let btn = document.querySelector("div");
// function changecolor(color,delay)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             btn.style.backgroundColor = color;
//             console.log("Success");
//         },delay);
        
//     });
// }

// let changedColor = changecolor("red",1000);
// changedColor.then(()=>{
//     console.log("color 1 is changed");
//     return changecolor("blue",1000);
// })
// .then(()=>{
//     console.log("Color 2 is changed");
//     return changecolor("green",1000);
// })
// .then(()=>{
//     console.log("color 3 is changed");
//     return changecolor("yellow",1000);
// })
// .then(()=>{
//     console.log("Color 4 is changed");
// })

//=================================async keyword ===============================
// async function printing(){
//     return "Hi there";
// }

// let data = printing();
// data.then((result)=>{
//     console.log(result);
//     console.log("Success");
// })
// .catch((err)=>{
//     console.log(err);
//     console.log("Weak connection");
// })

// let change = async ()=>{
//     return "Welcome";
// }

// let data2 = change();
// data2.then((resolve)=>{
//     console.log(resolve);
//     console.log("Congratulation");
// })
// .catch(()=>{
//     console.log("Sorry, your data was not saved");
// })

//============================= apply yhe concept of async and await keyword ================
// 1). we used callback hell method for asynchrouns function.
// 2). We used the promise for asynchrouns function.
// 3). Now the compact version and easly understandble that is async and await keyword for asynchrouns function.

// let box = document.querySelector("div");
// function changeColor(color,delay){
//     console.log("Hello world how are you!");
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             box.style.backgroundColor = color;
//             console.log("Congratulation");
//             resolve("color changed");
//         },delay);
//     })
// }
// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("pink",1000);
//     await changeColor("brown",1000);
//     await changeColor("white",1000);
//     await changeColor("orange",1000);
//     await changeColor("black",1000);
//           changeColor("dark",1000);
// }
// demo();

// ================== try and catch block ============================================
// let box = document.querySelector("div");
// function changeColor(color,delay){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) +1;
//             if(num > 5)
//                 {
//                     reject("Promise is reject");
//                 }
//             box.style.backgroundColor = color;
//             console.log("Congratulation");
//             resolve("color changed");
//         },delay);
//     })
// }
// async function demo(){
// try{
    
//         await changeColor("red",1000);
//         await changeColor("blue",1000);
//         await changeColor("pink",1000);
//         await changeColor("brown",1000);
//         await changeColor("white",1000);
//         await changeColor("orange",1000);
//         await changeColor("black",1000);
//               changeColor("dark",1000);
//     }catch(err){
//         console.log("Error occure due to weak connection");
//         console.log(err);
//     }

//     let a = 10;
//               let b = 20;
//               console.log("the sum of the two number is:",a+b);
// }

// demo();

//========== Converte Object into Json data =============================================
// let object = {
//     name : "Muhammad khalil",
//     age : 19,
//     gender: "male",
//     location: "Village sharif wala latamber tehsil and district karak"
// }

// let string = JSON.stringify(object);
// console.log(string);

// //======== Converte Json data into object ========================
// let str = '{"fact":"A cat\u2019s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute.","length":88}';
// let json_data = JSON.parse(str);
// console.log(json_data);

// let img = document.querySelector("img");
// let image = '{"message":"https:\/\/images.dog.ceo\/breeds\/springer-english\/n02102040_1147.jpg","status":"success"}';
// let image_data = JSON.parse(image);
// img.src = image_data.message;

// console.log(image);
// console.log(image.message);

//==============================Request to API within JavaScript by fetch(url) ======================
// let url = 'https://catfact.ninja/fact';
// async function testing(){
//     let data = await fetch(url);
//     console.log(data);
//      let image = await data.json();
//      console.log(image);

//      let h1 = document.createElement("h1");
// h1.innerText = "Random facts";
// let body = document.querySelector("body");
// body.appendChild(h1);

// let h2 = document.createElement("h2");
// h2.innerText = image.fact;
// body.appendChild(h2);
// }

//==============================Request to API within JavaScript by axios.get(url) ======================
// let url = 'https://catfact.ninja/fact';
// async function testing(){
//     let res = await axios.get(url);
//      console.log(res);
//      console.log(res.data.fact)

//      let h1 = document.createElement("h1");
// h1.innerText = "Random facts";
// let body = document.querySelector("body");
// body.appendChild(h1);

// let h2 = document.createElement("h2");
// h2.innerText = res.data.fact;
// body.appendChild(h2);
// }

//=========================== OOPs concept in js ===============================================

//============== Prototype =======================
// let arr = [1,2,3,4];
// let arr2 = [6,7,8,0];

//============ factory function =================
// function students(x,y){
//     let obj = {
//         name:x,
//         age: y
//     }
//     return obj;
// }
// p1 = students("Khalil",10);
// p2 = students("abc",20);

// ================ class and object ============
//class and constructor are keyword.
//here, this means that the object that are calling.
// class Students{
//     constructor(x,y){
//         this.name = x,
//         this.age = y
//     }
//     talk(){
//         console.log("I am function to print something");
//         console.log(`Hi, my age is:${this.age}`);
//     }
// }
// //Before the assignment operator is object. 
// //We create the object through new keyword.
// p1 = new Students("abcd",20);

//==================================================== inheritence ================================================
// class Parent{
//     constructor(name,age,gender){
//         this.name = name,
//         this.age = age,
//         this.gender = gender
//     }
//     display(){
//         console.log(`The name is: ${this.name}`);
//         console.log(`The age is: ${this.age}`);
//     }
// }
// //Son class is inherte from the parent class.
// class Son extends Parent{
//     constructor(name,age,gender,height){
//         super(name,age,gender);
//        this.height = height
//     }
// }
// //Daughter class is inherte from the parent class.
// class Daughter extends Parent{
//     constructor(name,age,gender){
//         super(name,age,gender);
//     }
// }
// //p1 is the object of son class and p2 of the daughter class.
// let p1 = new Son("abcd",10,"male",20);
// let p2 = new Daughter("xyz",13,"female");