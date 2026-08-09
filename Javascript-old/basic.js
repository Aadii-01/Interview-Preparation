// console.log("Namaste India")

var agee = 19;
if(true){
    console.log(agee);
}


// operations
console.log(2 & 5);
console.log(2 | 7);
console.log(2 ^ 5);
console.log(~0);


let age = 50;
// if-else 
if(age>18){
    console.log("Can vote");
} else if(age == 18) { 
    console.log("Welcome to the valid voting age");
} else { 
    console.log("Cannot vote");
}

// Loops
for(let i=0;i<=4;i++){
    console.log("This is a loop");
}

let u=1;
while(u<=2){
    console.log("While loop in process");
    u++;
}


// Playing with strings

let name = "aadi";
console.log(typeof(name));

let op1 = "English";
let op2 = "Hindi" ;

let finalAns = `${op1} ${op2}`;
console.log(finalAns)

let str = "kingo";
console.log(str.substring(2,4));

let str1 = "I am the \"king\" of the world";
console.log(str1.split(" "));


// Functions
function solve(){
    var age=19;
    console.log(age);
}

solve();

function printCount(num){
    for(let i=0;i<=num;i++){
        console.log(`New number ${i}`);
    }
}
printCount(4);
function getMyName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}
let fullName = getMyName("Aadi", "Shirke");
console.log("Full Name is : ",fullName)