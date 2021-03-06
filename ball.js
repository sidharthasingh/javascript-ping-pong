/*The following code is commented because it was just used while starting the project and can be later on used for reference purposes.*/
// ctx.beginPath();
// ctx.rect(20,40,50,50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

function new_ball(x,y,dx,dy){
	if(!x)
		x = parseInt(Math.random()*sizeX);
	if(!y)
		y = parseInt(Math.random()*sizeY);
	if(!dx)
		dx = parseInt(Math.random()*maxSpeed)*((parseInt(Math.random())*10>5)?1:-1);
	if(!dy)
		dy = parseInt(Math.random()*maxSpeed)*((parseInt(Math.random())*10>5)?1:-1);
	obj = {
		"x":x,
		"y":y,
		"dx":dx,
		"dy":dy
	}
	if(obj.dx==0)
		obj.dx=1;
	if(obj.dy==0)
		obj.dy=1;
	return obj;
}

function ball_init(){
	var s = [];
	for(i=0;i<number_of_balls;i++)
		s = s.concat(new_ball());
	balls = s;
}

function drawBall(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBalls(){
	for(i=0;i<balls.length;i++)
		drawBall(balls[i].x,balls[i].y);
}

function directional_logic(){
	for(i=0;i<balls.length;i++)
	{
		if(balls[i].x+balls[i].dx+ballRadius>canvas.width || balls[i].x+balls[i].dx-ballRadius<0)
			balls[i].dx = -balls[i].dx;
		if(balls[i].y+balls[i].dy+ballRadius>canvas.height || balls[i].y+balls[i].dy-ballRadius<0)
			balls[i].dy = -balls[i].dy;
		balls[i].x+=balls[i].dx;
		balls[i].y+=balls[i].dy;

		x = balls[i].x;
		y = balls[i].y;
		for(j=i+1;j<balls.length;j++)
		{
			x1 = balls[j].x;
			y1 = balls[j].y;
			if(Math.sqrt(Math.pow(x-x1,2)+Math.pow(y-y1,2))<=2*ballRadius)
			{
				balls[i] = new_ball(x,y,-1*parseInt(Math.random()*maxSpeed),parseInt(Math.random()*maxSpeed));
				balls[j] = new_ball(x1,y1,parseInt(Math.random()*maxSpeed),-1*parseInt(Math.random()*maxSpeed));
			}
		}
	}
}

function draw() {
	time++;
	ctx.clearRect(0, 0, canvas.width, canvas.height-paddleHeight);
	drawBalls();
	directional_logic();
}

ball_init();
if(gameON)
	ballInterval = setInterval(draw,ball_refresh_rate);