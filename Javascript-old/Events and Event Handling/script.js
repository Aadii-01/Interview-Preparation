//DOM : Document Object Model
/*
dom manipulation:-
1 html se element select krna 
2 text badalna
3 html badalna
4 css badalna
5 attribute badalna
6 event listeners add krna

Day-1 

getElementById, getElementsByClass query.selector, query.selectorAll(selects the topmost query passed)
*/

// let abcd = document.getElementById("abcd");
// console.log(abcd);

// let abc = document.querySelector("h1");
// console.log(abc);

// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.textContent = "hello Mannn";

//innerText, innerHTML, textContent
//getAttribute, setAttribute, removeAttribute
//createElement, appendChild, removeChild, prepend, append
//styles update via hq.style.color = "red"
//h1.classList.add("classname")
 


// Day - 2

//Events handling : browser main page par koi bhi harkat hui event is raised
/*

Event Binding : addEventListener, removeEventListener
Coomon events : click, input, change, submit, mouseover, keyup
Event object : target, type, preventDefault
Event bubling and capturing
Event delegation


Event matlab action hua
event listener ka matlab hai action ka reaction diya

let h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
h1.style.color - "red"
});
h1.removeEventListener();
function dblclick(){
h1.style.color - "red"
}
h1.addEventListener("dblclick", dblclick);

1. select the paragraph first
2. Realise karo paragraph pe konsi action hogi
3. add event lstener on para with action and function as params 
where function would be changing p.style.color = "green"

//to retrieve text from input and print on console
let inp = document.querySelector("input");
inp.addEventListener("input", function(dets){
console.log(dets.data);
});
inp.addEventListener("input", function(dets){
if(dets.data !== null){
console.log(dets.data);
}
});

let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(dets){
h1.textContent = dets.key;
});

jispe eveent aayega agar uspe listener nahi hua toh humara event uske parent par listner dhundega


*/