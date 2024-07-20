document.getElementById("myform").addEventListener("submit",
 function (event) {
  document.getElementById("username").innerHTML = "";
  document.getElementById("nameerrormsg").innerHTML = "";
  var name = document.getElementById("username").value;
  if (name == "") {
    document.getElementById("nameerrormsg").innerHTML = "Name Is  Required";
    event.preventDefault();
    document.getElementById("nameerrormsg").style.color="red"
  }

  document.getElementById("password").innerHTML = "";
  document.getElementById("passworderrormsg").innerHTML = "";
  var password = document.getElementById("password").value;
  if (password == "") {
    document.getElementById("passworderrormsg").innerHTML =
      "Password Is Required";
      document.getElementById("passworderrormsg").style.color="red"
    event.preventDefault();
  }
});
const checkBranch = "branch creation"