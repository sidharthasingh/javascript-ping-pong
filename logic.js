gameLogic = () => {
	gameBall = balls[0];
	if(gameBall.y>=canvas.height-paddleHeight-ballRadius)
	{
		if(gameBall.x-paddleX>=0 && gameBall.x-paddleX<=paddleWidth)
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
	gameLogicInterval = setInterval(gameLogic,5);