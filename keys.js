right = false; //right pressed?
left = false; //Left pressed?

keyDown = (event) => {
	if(e.keyCode==39)
		right = true;
	else if(e.keyCode==37)
		left = true;
}

keyUp = (event) => {
	if(e.keyCode==39)
		right = false;
	else if(e.keyCode == 37)
		left = false;
}
document.addEventListener("keydown",keyDown,false);
document.addEventListener("keyup",keyUp,false);