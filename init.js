console.log("Setting canvas width to  : "+document.body.clientWidth);
console.log("Setting canvas height to : "+document.body.clientHeight);

canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight; //document.height is obsolete

time = 0;
fps = 200;
function_call_interval = 1000/fps;
number_of_balls = 1; // This can be changed to any number. But the game build currently uses the first ball or '0' indexed ball
sizeX = canvas.width;
sizeY = canvas.height;
balls = [];
maxSpeed = 20;


ballRadius = (sizeY>sizeX)?sizeX/25:sizeY/25;
paddleHeight = sizeY/25;
paddleWidth = sizeX/5;
paddleMove = sizeX/30;
paddleX = (canvas.width-paddleWidth)/2;

right = false; //right pressed?
left = false; //Left pressed?

paddle_refresh_rate = 1;
ball_refresh_rate = 1;
logic_refresh_rate = 0;