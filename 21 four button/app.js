let buttons = document.querySelectorAll("button");
let paragraphs = document.querySelectorAll("p");
let buttonId;

buttons.forEach(button =>  

    button.addEventListener("click", function()  {

        buttonId = this.id;

        buttons.forEach(btn =>{
           if (buttonId !== btn.id) {
             btn.classList.remove("active-btn");
             btn.classList.add("disabled-btn")
           }
          button.classList.replace("disabled-btn","active-btn");
        });
        let active = buttonId.split("-");
        
       paragraphs.forEach(para => {
          para.classList.remove("active")
            if (active[1] == para.id) {
              para.classList.toggle("active")
            };
       });
    })

);

