let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector(".error-msg").style.display = "initial"
        isValid = false;
    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        isValid = false;
    }
    if(isValid){
        document.querySelector("#resultMessage").textContent = "You are good to go !"
    }
});
