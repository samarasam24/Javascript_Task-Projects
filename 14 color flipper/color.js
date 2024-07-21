const btn = document.querySelector("button");
let body = document.querySelector("body");
btn.addEventListener("click", () => {

    if (body.style.backgroundColor === "red") {
        body.style.backgroundColor = "blue"
    }if (body.style.backgroundColor === "blue") {
       setTimeout(() => {
        body.style.backgroundColor = "green"
       }, 1000);
    } else{
        body.style.backgroundColor = "red";
    }
});