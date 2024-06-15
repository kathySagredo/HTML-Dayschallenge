const details = document.querySelector(".texto")
const imgLuna = document.querySelector("img")
console.log(imgLuna)

imgLuna.addEventListener("click", ()=>{
    details.toggleAttribute("open");
})