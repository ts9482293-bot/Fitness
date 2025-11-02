const closebtn =document.querySelector(".close-btn");
const navcollapes = document.querySelector(".nav-collapes");
const body = document.querySelector("body")
const overlay = document.querySelector(".over-lay")


closebtn.addEventListener("click",()=>{
    if(close==true){
        close=false;
        navcollapes.style.right = "0%";
        closebtn.classList.add("open");
        // body.style.overflow = "hidden";
        overlay.classList.add("active")
    }else{
        close=true;
        navcollapes.style.right = "-100%";
        closebtn.classList.remove("open");
        // body.style.overflow ="visible";
        overlay.classList.remove("active")
    }
});