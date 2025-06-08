let btn = document.querySelector(".bt");
let bod = document.querySelector("body");
let cur = "light";
btn.addEventListener("click",()=>{
    if(cur=="light"){
        cur ="dark";
        bod.classList.add("dark_mode");
        bod.classList.remove("light_mode");
    }
    else{
        cur = "light"
        bod.classList.add("light_mode");
        bod.classList.remove("dark_mode")
    }
})