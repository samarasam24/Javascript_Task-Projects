let data = [];

window.onload = () => {
  table();
};

function returnPage() {
  
  window.location.replace("form.html");
}

function table() {
  data = JSON.parse(localStorage.getItem("data"));
  let view = "";
  for (let i = 0; i < data.length; i++) {
    view += "<tr>";
    view += "<td class='border border-dark'>" + (i + 1) + "</td>";
    view += "<td class='border border-dark'>" + data[i].username + "</td>";
    view += "<td class='border border-dark'>" + data[i].password + "</td>";
    view +=
      "<td>" +
      "<button class='btn btn-sm btn-success' onclick = 'edit(" +
      i +
      ")'>Edit</button>" +
      "<button class='btn btn-sm btn-danger ms-2' onclick = 'dele(" +
      i +
      ")'>Delete</button>" +
      "</td>";
    view += "</tr>";
  }

  document.getElementById("tbody").innerHTML = view;
}

function edit(id) {
  
  localStorage.setItem("editID", id);
 
  window.location.replace("form.html");
}

function dele(id) {
  data.splice(id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  table();
}
