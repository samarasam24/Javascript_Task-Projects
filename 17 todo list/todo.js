const btn =  document.querySelector("button");
let inputValue = document.querySelector("input");
let div = document.querySelector(".todo-container");
let ul = document.createElement("ul");
let id = 0;
btn.addEventListener("click",() => {
 let li = document.createElement("li");
 let p = document.createElement("p");
 let removeBtn= document.createElement("button");
if (inputValue.value === "") {
    alert("Add a ToDo List");   
} else {    
    p.innerHTML = inputValue.value;
    removeBtn.id =  (++id)+ " "+"btn2";
    removeBtn.innerText = "Remove"; 
    removeBtn.onclick = function removeItem() {
        li.remove();
      };
    li.appendChild(p);
    li.appendChild(removeBtn);
    ul.appendChild(li);
    div.appendChild(ul);
    setTimeout(() => {
        inputValue.value = "";
    }, 50);
   
}


});