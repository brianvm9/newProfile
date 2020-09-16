function selectMode(mode) {

var color = "rgb(209,209,209)";
var label = "Light Mode";
var text = " rgb(189,133,248)";
var image = "img/astrodesigns.png";
var nav = ""
if(mode === "dark"){
    color="rgb(33,33,33)";
    label="Dark Mode";
    text = "rgb(189,133,248)";
    image = "img/astrodesignsdark.png";
} else if(mode === "light"){
    color = "rgb(209,209,209)";
    label = "Light Mode";
    text = "rgb(33,33,33)";
    image = "img/astrodesigns.png";
}

console.log(label);

document.getElementById("logo").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;
}

