function selectMode(mode) {

var color = "rgb(209,209,209)";
var label = "Light Mode";
var name = "Light"
if(mode === "dark"){
    color="rgb(189,133,248)";
    label="Dark Mode";
    name ="Dark"
} else if(mode==="light"){
    color = "rgb(209,209,209)";
    label = "Light Mode";
}

console.log(label);

document.getElementById("theme").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;
document.getElementById("name").innerText = name;
}