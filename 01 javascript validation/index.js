const form = document.getElementById('myform');
let userName = document.getElementById('username');
let password = document.getElementById('password'); 
let nameError = document.getElementById('nameerrormsg');
let passwordError = document.getElementById('passworderrormsg');

form.addEventListener('submit',(event) => {
  event.preventDefault();  

    if( userName.value ===  ""){
      nameError.innerHTML = 'Name is required*'; 
      nameError.style.color = '#e74646';
    };

    if(password.value === "") { 
      passwordError.innerHTML='Password is required*';
      passwordError.style.color = '#e74646';
    };

    if( userName.value !==  ""){
      nameError.innerHTML = '';
    };

    if( password.value !==  ""){
      passwordError.innerHTML = '';
    };

});