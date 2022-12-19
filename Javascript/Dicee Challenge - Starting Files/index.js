var randomNum1 = Math.floor(Math.random()*6+1);
var randomNum2 = Math.floor(Math.random()*6+1);


document.querySelectorAll("img")[0].setAttribute("src",numToimgs(randomNum1));
document.querySelectorAll("img")[1].setAttribute("src",numToimgs(randomNum2));

if(randomNum1>randomNum2){
  document.querySelector("h1").textContent = "Player 1 wins";
}else if(randomNum1<randomNum2){
  document.querySelector("h1").textContent = "Player 2 wins";
}else{
  document.querySelector("h1").textContent = "Draw!";
}


//var numToimgs = "images/dice" + randomNum1 +".png";
//wroest function
function numToimgs(randomNum){

  if(randomNum === 1){
    var res = "images/dice1.png";
  }else if(randomNum === 2){
        res = "images/dice2.png";
  }else if(randomNum === 3){
     res = "images/dice3.png";
  }else if(randomNum === 4){
     res = "images/dice4.png";
  }else if(randomNum === 5){
     res = "images/dice5.png";
  }else{
     res = "images/dice6.png";
  }

  return res;
}
