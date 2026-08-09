let tm = setTimeout(function(){
    console.log("hlelo")
}, 4000);

//repeats itself after eveery 5 second
let inv = setInterval(function(){
    console.log("Hello")
}, 5000)

clearTimeout(tm);
clearInterval(inv);


//countdown timer
let count = 10;
let intv = setInterval(function(){
    if(count>=1){    
        count-- ;
        console.log(count);
    } else {
        clearInterval(intv);
    }
}, 1000)