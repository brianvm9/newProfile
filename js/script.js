function selectMode(mode) {

var color = "rgb(209,209,209)";
var label = "Light Mode";
var icon = "img/lightbulb.png";
var name = "Light"
if(mode === "dark"){
    color="rgb(189,133,248)";
    label="Dark Mode";
    image = "img/moon.jpg"
    name ="Dark"
} else{
    color = "rgb(209,209,209)";
    label = "Light Mode";
    image = "img/lightbulb.png"
}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;
document.getElementById("name").innerText = name
}