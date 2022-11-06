


const block = document.querySelector(".block")
const bgc = document.querySelector(".bgc")
let a = 0

bgc.addEventListener("click",(e)=>{
if(e.pointerType == "mouse"){
    bgc.style.left =`${a}px`
    a+=10
}

})