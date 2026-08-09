let obj = {
    name : "Aadi",
    age : 19,
    height : "6ft",
    greet: function(){
        console.log("Hello ji!");
    }
};
console.log(obj)
obj.greet();
console.log(typeof(obj))

let arr = [1,2,3,4];
let brr = new Array("Aadi",1,true);
brr.push("Shirke");
brr.pop()
brr.shift();
brr.unshift("Aadiii");
brr.push(10);
brr.push(20);
brr.push(30);
console.log(brr.slice(2,4));
console.log(brr);

brr.splice(1,2,"Man");
console.log(brr)

number = [10,20,30];
let ansArray = number.map((number) => {
    return number*number
})
console.log(ansArray)
number.map((number) => {
    console.log(number+1);
})

let ans = brr.filter((value) => {
    if(typeof(value) == "string"){
        return true;
    } else { 
        return false;
    }
})
console.log(ans)








// Call Stack & Hoisting
// Hoisting - It is a process in which variable declaration or func declaration shift to top in their scope

console.log("\n");
sayMyName("Aadi");
function sayMyName(finalName){
    console.log(finalName);
}

console.log(agee); //outputs undefined since only declared variable is shifted above except its value
var agee = 25; //error on using let or const or class level hoisting


// function callstack - 
const arr1 = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]
let first = arr1[0];
console.log(first(10,20));

console.log(greet); //undefined
var greet = function(){
    console.log("Namaste");
}







// Temporal deadzone - from line 94 to line 96 u cant access the value of marks since hoisting issues

// console.log(marks);

// const marks = 100;




// Classes - It is a blueprint for various objects
class human{
    // state / properties
    age = 12;
    #height = 180; // To make it private add a # before it
    wt = 80;


    // behaviour / functions
    walk(){
        console.log("I walk");
    }
    talk(){
        console.log("I talk");
    }
    get fetchHeight(){
        return this.#height;
    }
    set modifyHeight(val){
        this.#height = val;
    }
}
let obj1 = new human();
obj1.walk();
console.log(obj1.fetchHeight);


//  Inbuilt objects

console.log(Math.max(10,20,50,304,20));




// object cloning

// clone-1
let src = {
    age : 12,
    wt  :60,
    ht : 10
}

let dest = {...src};
src.age = 90;
console.log("src: ", src);
console.log("dest: ",dest);

// clone-2
let dest1 = Object.assign({}, src);


let dest2 = {};
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    // insert newKey and value in dest and create a clone
    dest2[newKey] = newValue;
}
src.age = 7;

console.log("src: ", src);
console.log("dest: ",dest);







// Compile time error

// Sytax error

// Runtime error
// Reference error

try{
    console.log("I am in try block");
    console.log(x);
} catch (e){
    // define whst to do with error
    // retry logic
    // fallback mechanism, logging
    // custom error
    console.log("I am inside catch block");
} finally {
    console.log("I will run everytime");
}

// finally block -> will run everytime
try{

} catch{

} finally{

}


// custom error

try{
    console.log(x);
} catch(err){
    throw new Error("First declaration then print");
}
