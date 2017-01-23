var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

var numSquares=6;
var colors=generateColors(numSquares);
var pickedColor= pickColor();
colorDisplay.textContent=pickedColor;


//buttons event listeners
for(var i=0;i<modeButton.length;i++){

	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected"); 
		this.textContent=="Easy"?numSquares=3:numSquares=6;
		reset();

	});
}

resetButton.addEventListener("click",function(){
	reset();
});



//colors event listeners
for (var i =0; i <squares.length; i++) {

	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor==pickedColor) {
			resetButton.textContent="Play again?"; 
			messageDisplay.textContent="correct";
			changeColors(clickedColor);
			h1.style.background=clickedColor; 
		}
		else {
			this.style.background="#232323";
			messageDisplay.textContent="wrong";
		}

	});

}

//change every color to winning color
function changeColors(color){
	for (var i =0; i <squares.length; i++) {
		squares[i].style.background=color;
	}
}

//pick a random color to make it winning color
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
} 

//generate colors array with num of different colors
function generateColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

//returns a random color
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";

}

//reset everything,triggers on all buttons
function reset(){
	colors=generateColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent=pickedColor;
	
	for (var i =0; i <squares.length; i++) {

		if(colors[i]){
			squares[i].style.background=colors[i];

			squares[i].style.display="block";
		}
		else
			squares[i].style.display="none";
	}


	h1.style.background="steelblue";
	messageDisplay.textContent="";
	resetButton.textContent="New colors";
}