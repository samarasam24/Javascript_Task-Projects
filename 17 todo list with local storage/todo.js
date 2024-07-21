const inputBox = document.getElementById("input");
const ul = document.getElementById("ul");
let tasks = [];

document.addEventListener("DOMContentLoaded",()=>{
    let stored = JSON.parse(localStorage.getItem("task"));
    if (stored) {
        tasks = stored;
    };
    showData()
});

function addTask() {

    if (inputBox.value !== "") {
        let stored = JSON.parse(localStorage.getItem("task"));

    if (stored) {
        tasks = stored;
    };
    
    let list = {
        task:inputBox.value
    };
    
    tasks.push(list);

    localStorage.setItem("task",JSON.stringify(tasks));
    } else {
        alert("fill the input");
    };
    
    showData()

    inputBox.value = "";

};

function showData() {
    let print = "";
    for (let i = 0; i < tasks.length; i++) {
       print += `<li>`
       print += `<p>${tasks[i].task}<p>
       <button onclick = removeItem(${i})>Remove</button>`
       print += `</li>`
    }
    ul.innerHTML = print;
}
function removeItem(val) {
   tasks.splice(val,1)
   localStorage.setItem("task",JSON.stringify(tasks))
   showData()
}