var print_token = false;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var gameON = false;
gameON = true;

var ballRadius, time, fps, function_call_interval, number_of_balls, sizeX, sizeY,
	balls, maxSpeed, paddleHeight, paddleWidth, paddleX, right, left;
