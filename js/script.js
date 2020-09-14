function selectMode(mode) {

var color = "rgb(209,209,209)";
var label = "Light Mode";
var name = "Light";
var text = " rgb(189,133,248)";
if(mode === "dark"){
    color="rgb(33,33,33)";
    label="Dark Mode";
    name ="Dark";
    text = "rgb(189,133,248)";
} else if(mode==="light"){
    color = "rgb(209,209,209)";
    label = "Light Mode";
}

console.log(label);

document.getElementById("theme").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;
document.getElementById("name").innerText = name;
document.getElementById("name").style.color = text;
}