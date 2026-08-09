/*
Localstorage -> apke browser ke andar data store karna jo ki
browser band hone par bhi delete nahi hofa

sessionstorage -> tab band hua aur data gya (temporarily storage)

cookies -> stores data in browser ke cookies naam ki property mai save hota hai
this concept kam data ya light data k liye hota hai
*/


// localStorage : storing, fetching, removing, updating
localStorage.setItem("name","aadi");
let val = localStorage.getItem("name");
console.log(val);
localStorage.removeItem("name");
localStorage.setItem("name", "aaditya");

//sessionStorage : setItem, getItem, removeItem
