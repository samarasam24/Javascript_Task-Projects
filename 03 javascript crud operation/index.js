// let data = [];
// let fname = document.getElementById("name").value;
// let age = document.getElementById("age").value;
// function submitForm() {
//   validation(); // validation function
// }

// // validation function
// function validation() {
//   let fname = document.getElementById("name").value;
//   let age = document.getElementById("age").value;
//   if (fname === "") {
//     document.getElementById("nameerror").textContent = "Name is Required..";
//     document.getElementById("nameerror").style.color = "red";
//   } else {
//     document.getElementById("nameerror").textContent = "";
//   }
//   if (age === "") {
//     document.getElementById("ageerror").textContent = "Password is Required..";
//     document.getElementById("ageerror").style.color = "red";
//   } else {
//     document.getElementById("ageerror").textContent = "";
//   }
//   if (fname !== "" && age !== "") {
//     // for creating object
//     let dataObj = {
//       name: fname,
//       age: age,
//     };
//     data.push(dataObj); // to push the object into array

//     restForm(); // empty function for input box
//     table(); // table add function
//   }
// }

// // empty function for input box
// function restForm() {
//   document.getElementById("name").value = "";
//   document.getElementById("age").value = "";
// }

// // table add function
// function table() {
//   let datatable = "";
//   for (let i = 0; i < data.length; i++) {
//     datatable += "<tr>";
//     datatable += "<td>" + (i+1)  + "</td>";
//     datatable += "<td>" + data[i].name + "</td>";
//     datatable += "<td>" + data[i].age + "</td>";
//     datatable +=
//       "<td><button onclick='editRow(" +
//       i +
//       ")'>Edit</button><button onclick ='deleteRow(" +
//       i +
//       ") '>Delete</button></td>";
//     datatable += "</tr>";
//   }
//   document.getElementById("tbody").innerHTML = datatable;
// }

// // table edit function
// function editRow(edit) {
//   for (let i = 0; i < data.length; i++) {
//     if (edit == i) {
//       document.getElementById("name").value = data[i].name;
//       document.getElementById("age").value = data[i].age;
//       data.splice(i, 1);
//     }
//   }
// }

// // delete function
// function deleteRow(del) {
//   data.splice(del, 1);
//   table();
// }









                                                    // second method form submit
const arr = [];
var editIndex = -1;
var form = document.getElementById("form");
form.addEventListener("submit", function validation(event) {        // submit function
  event.preventDefault();
  let fname = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  if (fname === "") {
    document.getElementById("form").style.boxShadow=" 0px 0px 10px 3px red"
    document.getElementById("nameerror").innerHTML =
      "This Field is Required...";
    document.getElementById("nameerror").style.color = "red";
    document.getElementById("nameerror").style.textShadow =
      "2px 2px 2px  black";
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }

  if (age === "") {
    document.getElementById("form").style.boxShadow=" 0px 0px 10px 3px red"
    document.getElementById("ageerror").innerHTML = "This Field is Required...";
    document.getElementById("ageerror").style.color = "red";
    document.getElementById("ageerror").style.textShadow = "2px 2px 2px  black";
  } else {
    document.getElementById("ageerror").innerHTML = "";
  }
  if (editIndex !== -1 &&fname !== "" && age !== "") {
   
    arr[editIndex].name = fname;
    arr[editIndex].age = age;
    editIndex=-1
  } else if(fname !== "" && age !== "") {
   
    let obj = {
      name: fname,
      age: age,
    };
    arr.push(obj);
  }
  if (fname !== "" && age !== "") {
    document.getElementById("form").style.boxShadow=" 0px 0px 10px 3px goldenrod"
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }
  table();
});


function table() {               // table function
  let datas = "";
  for (let i = 0; i < arr.length; i++) {
    datas += "<tr>";
    datas += "<td>" + (i + 1) + "</td>";
    datas += "<td>" + arr[i].name + " </td>";
    datas += "<td>" + arr[i].age + " </td>";
    datas +=
      "<td><button onclick='edit(" +
      i +
      ")'>Edit</button> <button onclick='del(" +
      i +
      ")'>Delete</button> </td>";
    datas += "</tr>";
  }
  document.getElementById("tbody").innerHTML = datas;
}



function edit(editIt) {                       // edit function
  for (let i = 0; i < arr.length; i++) {
    if (editIt == i) {
      editIndex = i;
      document.getElementById("name").value = arr[i].name;
      document.getElementById("age").value = arr[i].age;
    }
  }
 
}




function del(deleted) {             // delete function
  arr.splice(deleted, 1);
  table();
}
