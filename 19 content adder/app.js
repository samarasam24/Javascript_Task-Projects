let adder = document.getElementById("plus");
let section = document.querySelector("section");
let one = document.getElementById("one");
let two = document.getElementById("two");
let submit = document.querySelector("button");
let container = document.getElementById("container");

adder.addEventListener("click",() => {

    section.style.display = "block";    

});

submit.addEventListener("click",(event) => {

    event.preventDefault();

    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let button = document.createElement("button")

    h1.innerHTML = one.value;
    p.innerHTML = two.value;
    button.innerHTML = "Delete";
    button.onclick = function () {
        div.remove()
    }
    div.id = "cont";

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(button);
    container.appendChild(div);
    
    one.value = "";
    two.value = "";
    section.style.display = "none"; 

});