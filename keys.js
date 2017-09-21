var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

right = false; //right pressed?
left = false; //Left pressed?

keyDown = (event) => {
	if(event.keyCode==39)
		right = true;
	else if(event.keyCode==37)
		left = true;
}

keyUp = (event) => {
	if(event.keyCode==39)
		right = false;
	else if(event.keyCode == 37)
		left = false;
}
document.addEventListener("keydown",keyDown,false);
document.addEventListener("keyup",keyUp,false);

function drawPaddle() {
	ctx.beginPath();
	ctx.clearRect(0,canvas.height-paddleHeight,canvas.width,canvas.height);
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
	if(right)
		paddleX+=7;
	else if(left)
		paddleX-=7;
	if(paddleX<0)
		paddleX = 0;
	else if(paddleX > canvas.width-paddleWidth)
		paddleX = canvas.width-paddleWidth;
}

drawPaddle();
if(gameON)
	setInterval(drawPaddle,10);