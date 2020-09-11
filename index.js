function randomNos(){
  var n1=randomNo1();
  var n2=randomNo2();

  if(n1>n2){
    document.querySelector("h1").innerHTML="Player1 is winner.";
  }else if(n1<n2){
    document.querySelector("h1").innerHTML="Player2 is winner.";
  }else{
    document.querySelector("h1").innerHTML="Match Draw";
  }
}

function randomNo2(){
  var n=Math.random();
  n=n*6;
  n=Math.floor(n)+1;
  changeImg2(n);
  return n;

}
function changeImg2(n){
  switch (n) {
    case 1:
      document.querySelector(".img2").src="images/dice1.png";
      break;
      case 2:
        document.querySelector(".img2").src="images/dice2.png";
        break;
      case 3:
        document.querySelector(".img2").src="images/dice3.png";
        break;
      case 4:
        document.querySelector(".img2").src="images/dice4.png";
        break;
      case 5:
        document.querySelector(".img2").src="images/dice5.png";
        break;
      case 6:
        document.querySelector(".img2").src="images/dice6.png";
        break;
    default:
  }
}
function randomNo1(){
  var n=Math.random();
  n=n*6;
  n=Math.floor(n)+1;
  changeImg1(n);

  return n;
}
function changeImg1(n){
  switch (n) {
    case 1:
      document.querySelector(".img1").src="images/dice1.png";
      break;
      case 2:
        document.querySelector(".img1").src="images/dice2.png";
        break;
      case 3:
        document.querySelector(".img1").src="images/dice3.png";
        break;
      case 4:
        document.querySelector(".img1").src="images/dice4.png";
        break;
      case 5:
        document.querySelector(".img1").src="images/dice5.png";
        break;
      case 6:
        document.querySelector(".img1").src="images/dice6.png";
        break;
    default:
  }
}
