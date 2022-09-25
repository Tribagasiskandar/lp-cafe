const nav = document.getElementById("nav")
const open = document.getElementById("open")
const close = document.getElementById("close")

// membuka navbar
open.addEventListener('click', function(){
    nav.classList.add('right-0')
})
// menutup navbar
close.addEventListener("click", function(){
    nav.classList.remove("right-0")
})