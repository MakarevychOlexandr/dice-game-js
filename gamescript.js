let dice1 = 0; let dice2 = 0;
while ((dice1==0 || dice1>6) && (dice2==0 || dice2>6)) {
  dice1 = Math.floor(Math.random()*10);
  dice2 = Math.floor(Math.random()*10);
}
switch (dice1) {
  case 1:
    document.getElementById("p1").src="d1.png";
    break;
  case 2:
    document.getElementById("p1").src="d2.png";
    break;
  case 3:
    document.getElementById("p1").src="d3.png";
    break;
  case 4:
    document.getElementById("p1").src="d4.png";
    break;
  case 5:
    document.getElementById("p1").src="d5.png";
    break;
  case 6:
    document.getElementById("p1").src="d6.png";
    break;
}
switch (dice2) {
  case 1:
    document.getElementById("p2").src="d1.png";
    break;
  case 2:
    document.getElementById("p2").src="d2.png";
    break;
  case 3:
    document.getElementById("p2").src="d3.png";
    break;
  case 4:
    document.getElementById("p2").src="d4.png";
    break;
  case 5:
    document.getElementById("p2").src="d5.png";
    break;
  case 6:
    document.getElementById("p2").src="d6.png";
    break;
}
if (dice1>dice2) {
  document.getElementById("win").innerHTML="Player 1 wins!";
} else {
  if (dice1<dice2) {
    document.getElementById("win").innerHTML="Player 2 wins!";
  } else {
    document.getElementById("win").innerHTML="Draw";
  }
}
