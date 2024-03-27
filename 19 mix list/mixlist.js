let headTitle = document.getElementById("heading");
let ul = document.getElementById("song-list");
let btn = document.querySelector("button");
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

headTitle.innerHTML = songs.length + " GREAT SONGS!";

function showList() {
    let print = "";
    for (let i = 0; i < (songs.length ); i++) {
       print += `<li>`;
       print += `<p><span>#${i+1}</span> ${songs[i]} </p>`;
       print += `</li>`;
    }
    ul.innerHTML = print;
    ul.style.display = "grid"; 
    btn.style.display = "none";
};