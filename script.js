var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var randomResult = document.getElementById("randonResult")

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// this function is called so that it displays the gradient property/style onload of webpage properties. 
//Otherwise, nothing shows unless the input addEventListener is activated
// it also sets the colour pickers to the css properties for the background as per the function
// setGradient();  // however, i have commented this so that onload of page the colours are auto by default:
setGradientRandom();

//returns numbers upto 255 randomly
function getRndInteger() {
  return Math.floor(Math.random() * 255);
};

// Function that converts the random number to a string with base 16
// The number will show as an hexadecimal value

function rgbToHex() { 
  var hex = getRndInteger().toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

// Function that creates the final hex number by combining 
// 3 random rgbToHex values
function randomColorNo() {
	var randomColor = "#" + rgbToHex()
				 + rgbToHex()
				 + rgbToHex();
	return randomColor;
}

// Function that assigns the color1 and color 2 values with the random ones formed earlier
// and then runs the function 'setGradient' with the new values to change the colours and display the css style code
function setGradientRandom() {
	color1.value = randomColorNo();
	color2.value = randomColorNo();
	setGradient()
} 

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setGradientRandom);