console.log("Hello world")
// document.getElementById("click").style.backgroundColor = "red";

// 1. Ways to print javascript in document

// console.log("Hello world", 5 + 5, 'another log');
// alert("Me");
// document.getElementById("click").click();
// document.write("this is Document write");

// 2. Javascript console API(Applicatioin Programming Interface)

// console.warn("This is Warning");
// console.error("This is Error");
// console.clear();
// console.assert(6 == 5);
// console.assert(6 == (5 + 1));



// 3. JavaScript Variables
// what are variables? -> containers to store data values 
/*
Multi
line
comment
*/
var number1 = 35;
var number2 = 45;
// console.log(number1 + number2);


// 4. Data Types in JavaScript
// Numbers
var num1 = 50.50
var num2 = 50;

// String
var str1 = "This is a string1";
var str2 = 'This is a string2';

// Objects
var marks = {
    Kkhan: 45,
    Kasim: 90,
    aslam: 50
}
// console.log(str1, num1, str2);
// console.log(marks.Kkhan);

// Boolean
var a = true;
var b = false;
// console.log(a, b);


// Undefined or Null
var kkhan;
var und = undefined;
// console.log(kkhan);
// console.log(und);
// console.log(undefined);

var n = null;
// console.log(n);


/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and objects
*/

// Symbol('');


// Arrays
var arr = [1, 2, 'String', 4.5, 5];
/*
console.log(arr);
console.log(arr[0]); //1
console.log(arr[1]); //2
console.log(arr[2]); //string
console.log(arr[3]); //4.5
console.log(arr[4]); //5
*/


// Operators in JavaScript
var a = 10;
var b = 5;
// console.log("The value of a + b", (a + b));
// console.log("The value of a - b", (a - b));
// console.log("The value of a / b", (a / b));
// console.log("The value of a * b", (a * b));

// Assigment Operators
var c = b;
c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparision operators
var x = 20;
var y = 40;
// console.log(x == y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x === y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators
// Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// logical not
// console.log(!false);
// console.log(!true);


// Functions in JavaScript
function avg(a, b) {
    // return (a + b) / 2;
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself

c1 = avg(4, 2);
c2 = avg(10, 2);
// console.log(c1, c2);


// conditionals in JavaScript
/*

var age = 24;

// Single if statement
if (age > 18) {
    console.log("you can drink rasna water");
}

// if - else statement
// if (age > 18) {
//     console.log("you can drink rasna water");
// }
// else {
//     console.log("You cannot drink rasna water");
// }


// if - else ladder
if (age > 10) {
    console.log("You are not a kid");
}
else if (age > 15) {
    console.log("Tum ab bacche nahi rahe");
}
else if (age > 20) {
    console.log("Tum ab jawan hogaye ho");
}
else {
    console.log("You are a kid");
}
console.log("End of if - else ladder")

*/


// Loops in JavaScript

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
/*
for (var i = 0; i < arr.length; i++) {
    if (i == 5) {
        // console.log("Number is match");
        // break;
        continue;
    }
    else {
        // console.log(arr[i]);
    }
}
*/

arr.forEach(function (element) {
    // console.log(element)
})

let j = 0;
const ac = 0;
// ac++;

// while Loop
/*
while (j < arr.length) {
    console.log(arr[j]);
    j++;

}
*/

// Do - while loop
/*
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length)
*/


// Arrays methods
let myArr = ["Fan", "Camera", 34, 89, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Kkhan");
// myArr.shift();
// myArr.unshift("Kkhan");
// const newLen = myArr.unshift("Kkhan");
// console.log(newLen);

// myArr.toString();
// myArr.sort();

// console.log(myArr);


// String method in JavaScript
let myLovelyString = "Kkhan is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("Kkhan"));
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.indexOf("a"));
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(0, 5));
// console.log(myLovelyString.replace("Kkhan", "Kutbuddin"));
d = myLovelyString.replace("Kkhan", "Kutbuddin");
d = d.replace("good", "bad");
// console.log(d, myLovelyString)


// Dates in JavaScript
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());


// DOM Manipulation - Document Object Model

// document
// document.location
// document.title
// document.URL
// document.scripts
// document.links
// document.forms
// document.images
// document.domain

let elem = document.getElementById('click');
// console.log(elem);
// document.getElementById('click').style.border = '2px solid red';

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = 'yellow';
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');
// elemClass[0].classList.remove('text-success');

// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);


tagName = document.getElementsByTagName("button");
tagName = document.getElementsByTagName("div");
// console.log(tagName)

createdElement = document.createElement('p');
createdElement.innerText = "This is createdElement para";
tagName[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is createdElement bold";
tagName[0].appendChild(createdElement2);

createdElement3 = document.createElement('button');
createdElement3.innerText = "This is createdElement button";
tagName[0].appendChild(createdElement3);

tagName[0].replaceChild(createdElement3, createdElement);
// removeChild(element); --> remove an element 
tagName[0].removeChild(createdElement3);

// Selecting using Query
qSel = document.querySelector(".container");
// console.log(qSel);
selAll = document.querySelectorAll(".container");
// console.log(selAll);


function clicked() {
    // console.log("the button was clicked");
}
window.onload = function () {
    // console.log("The document was load");
}
// Events in JavaScript
// firstContainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We Have Clicked</b>"
//     console.log("Clicked on container2");
// })

// firstContainer.addEventListener('mouseover', function () {
//     console.log("MouseOver on Container");
// })

// firstContainer.addEventListener('mouseout', function () {
//     console.log("MouseOut of container");
// })

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener('mouseup', function () {
//     document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown', function () {
//     document.querySelectorAll(".container")[1].innerHTML = "<br>we have clicked</b>";
//     console.log("Mouse down when click on container");
// })



// Arrow function
// function sum(a, b) {
//     return a + b;
// }
sum = (a, b) => {
    return a + b;
}

// console.log(sum(5, 5));

logKaro = () => {
    document.querySelectorAll(".container")[1].innerHTML = "<br>setTimeOut fired</b>";
    console.log("I am your log");
}

setIntervalFun = () => {
    document.querySelectorAll(".container")[1].innerHTML = "<b>SetInterval Fired";
    console.log("i am setInterval function");
}

// setTimeout and setinterval
// setTimeout(logKaro, 1000); //kuch time bad kuch karana ho to ye use krte hai
// setInterval(setIntervalFun, 2000); //repeatedly koi kaam karana ho to

// clr = setInterval(setIntervalFun, 2000);
// clr = setTimeout(setIntervalFun, 2000);
// console.log(clearInterval(clr));
// user clearInterval/clearTimeout to cancel setimeout/setinterval



// Local Storage in JavaScript  ->(Data user ke machine me store krne ke liye use hota hai as a String)
console.log(localStorage.setItem('name', 'kkhan'));
console.log(localStorage);
// console.log(localStorage.clear());
// console.log(localStorage.getItem('name'));
// console.log(localStorage.removeItem("name"))
console.log(localStorage.clear());

// JSON  --> JavaScript Object Notaion

obj = { name: "Kkhan", length: 1, a: { this: 'tha\"t' } };
js = JSON.stringify(obj);
// console.log(js);
// console.log(typeof (js));
parsed = JSON.parse(`{"name":"Kkhan","length":1,"a":{"this":"that"}}`);
// console.log(parsed);


// Template literals - Bacticks
a = 34;
console.log(`this is ${a}`);






