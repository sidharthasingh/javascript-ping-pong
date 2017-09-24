gameLogic = () => {
	gameBall = balls[0];
	if(gameBall.y>=canvas.height-paddleHeight-ballRadius)
	{
		paddleX1 = paddleWidth+paddleX;
		paddleY = canvas.height - paddleHeight;
		ballX = gameBall.x;
		ballY = gameBall.y;
		if(ballX-paddleX>=0 && ballX-paddleX<=paddleWidth)
		{
			balls[0].dy = -balls[0].dy;
		}
		else if(Math.sqrt(Math.pow(ballX-paddleX,2)+Math.pow(ballY-paddleY),2)<=ballRadius)
		{
			balls[0].dy = -balls[0].dy;	
		}
		else
		{
			clearInterval(ballInterval);
			clearInterval(paddleInterval);
			clearInterval(gameLogicInterval);
			alert("gameOver");
		}
	}
}
if(gameON)
	gameLogicInterval = setInterval(gameLogic,logic_refresh_rate);