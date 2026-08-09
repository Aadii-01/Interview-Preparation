let btn = document.querySelector("#btn");
let fileinp = document.querySelector("input")

btn.addEventListener("click", function(){
    fileinp.click();
})

fileinp.addEventListener("change",function(dets){
    btn.textContent = (dets.target.files[0].name);
})