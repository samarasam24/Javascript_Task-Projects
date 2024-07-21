let num = document.getElementById("number");
let count = 0;

function sum(value) {   //counter function

    if (value === "-") { //counter values
        count--;
        num.innerText = count;
    }else if( value === "+"){
        count++;
        num.innerText = count;
    }else{
        count = 0;
        num.innerText = count;
    };


    if (count < 0) {   //counter color
        num.style.color = "red";
    }else if(count > 0){
         num.style.color = "green";
    }else {
        num.style.color = "";
    };
};

function reset() {   //counter reset function
    count = 0;
    num.innerText = count;
    num.style.color = "";
};