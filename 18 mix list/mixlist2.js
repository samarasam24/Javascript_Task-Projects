let list = document.querySelector(".list");
let btn  = document.querySelector(".btn");
let p = document.querySelector("p");
const songs = [ 
    "Time to Pretend",
    "O-o-oh Child",
    "Wish You Were Here",
    "Heroes",
    "I Put a Spell on You",
    "Call Me",
    "Paper Planes",
    "Jolene",
    "You Don't Own Me",
    "Fast Car",
    "Run the World (Girls)",
    "Superstition"
    ];
p.innerHTML = songs.length + " GREAT SONGS";

list.classList.remove("list");

btn.addEventListener("click", () => {
    let print = "";
  songs.forEach((song,index)=> {
   print += `<li>`
   print += `<p><span>${index+1} </span>  ${song}</p>`
   print += `</li>`
  });
  list.innerHTML = print;
  list.classList.add("list");
  btn.classList.add("hide");
});