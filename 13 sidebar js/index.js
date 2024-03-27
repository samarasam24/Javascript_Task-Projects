let hamburger = document.getElementById("hamburger");
let side = document.querySelector('.side-header')
hamburger.addEventListener('click',() => {
  side.classList.toggle("show-sidebar")
})
let closes = document.getElementById("close");
closes.addEventListener("click",() => {
  side.classList.remove("show-sidebar")
});