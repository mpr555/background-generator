var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var button1 = document.getElementById("btn1");

// Run setRandomGrad function when window loads
window.onload = setRandomGrad();

// sets var body css style for linear
//css.textContent sets the actual css in h3 to display on page

function setGrad() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";"
}

// This generates a random RGB colour
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// This uses the random rgd colour and creates the css
// for the linear gradient
function setRandomGrad() {	
	var randomColor1 = getRandomRgb();
	var randomColor2 = getRandomRgb();	
	body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
	css.textContent = body.style.background + ";"
}

// The even listeners use the click for the button, and the colour
// inputs
button1.addEventListener("click", setRandomGrad);
color1.addEventListener("input", setGrad);
color2.addEventListener("input", setGrad);
