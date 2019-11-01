var css = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var bod = document.getElementById("bg-gradient");
var randomButton = document.querySelector(".randomButton")

window.onload = function() {
  changeBGGrad();
};

function randomBGGRad() {
	colour1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	colour2.value =  '#'+Math.floor(Math.random()*16777215).toString(16);
	console.log(colour1);
	changeBGGrad();
}

function changeBGGrad() {
	bod.style.background = "linear-gradient(to right, "+colour1.value+", " +colour2.value+")";
	css.textContent = "RGB: " + bod.style.background + " .::. Hex: " + colour1.value + ", " + colour2.value + ";";
}

colour1.addEventListener("input", changeBGGrad);
colour2.addEventListener("input", changeBGGrad);
randomButton.addEventListener("click", randomBGGRad);