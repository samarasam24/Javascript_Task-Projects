function naviGate(section) {
    console.log(section);
    if (section === "home") {
        document.querySelectorAll('section').forEach(section =>{section.style.display = "block"})
        document.getElementById("about").style.display = "none"
        document.getElementById("services").style.display = "none";
        document.getElementById("blog").style.display = "none";
        document.getElementById("pricing").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else {
        document.querySelectorAll('section').forEach(section =>{section.style.display = "none"})
        document.querySelector(`#${section}`).style.display = "block" 
    }
    
}
document.getElementById("about").style.display = "none";
document.getElementById("services").style.display = "none";
document.getElementById("blog").style.display = "none";
document.getElementById("pricing").style.display = "none";
document.getElementById("contact").style.display = "none";
// document.querySelectorAll('section').forEach(section => { section.style.display = "none"});
// document.getElementById("contact").style.display = "block";