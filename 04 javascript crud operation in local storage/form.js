let data = [];
let editID;
console.log(data);
window.onload = () => {
  editForm();
  console.log(data);
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
};
let form = document.getElementById("form");
form.addEventListener("submit", function validation(event) {
  event.preventDefault();
  let userName = document.getElementById("username").value,
    passWord = document.getElementById("password").value;
  if (userName === "") {
    document.getElementById("nameError").innerHTML = "Name is Required...";
    document.getElementById("nameError").style.color = "red";
    document.getElementById("nameError").style.fontWeight = "800";
  } else {
    document.getElementById("nameError").innerHTML = "";
  }
  if (passWord === "") {
    document.getElementById("passwordError").innerHTML =
      "Password is Required...";
    document.getElementById("passwordError").style.color = "red";
    document.getElementById("passwordError").style.fontWeight = "800";
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }
  if (editID !== null) {
   
    let editedData = {
      username: userName,
      password: passWord,
    };

    data[editID] = editedData;
    localStorage.setItem("data", JSON.stringify(data));

    
    localStorage.removeItem("editID");

    
    window.location.href = "table.html";
  } else if (userName !== "" && passWord !== "") {
    let file = {
      username: userName,
      password: passWord,
    };

    data.push(file);
   
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "table.html";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } 
});
function editForm() {
  let data = JSON.parse(localStorage.getItem("data")) ;
  editID = localStorage.getItem("editID");

  if (editID !== null) {
    
    let editData = data[editID];

   
    document.getElementById("username").value = editData.username ;
    document.getElementById("password").value = editData.password ;

    
    localStorage.removeItem("editID");
  }
}
