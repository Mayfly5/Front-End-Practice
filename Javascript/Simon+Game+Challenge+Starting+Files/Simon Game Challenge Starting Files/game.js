
const buttonClolours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
//this function creat random number of next Sequence
function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4); //radom number 0-3
  var randomChosenColour = buttonClolours[randomNumber]; //get what's color has benn cliked
  gamePattern.push(randomChosenColour);//push the clicked color to gamePattern
  //console.log(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);//Play the radnom Sound
  //level++;
  $("h1").text("Level "+level);//show levels
}

//this function play sounds
function playSound(name){
  var sounds = new Audio("sounds/"+name+".mp3");
  sounds.play();
}


//when click button add a class for button and then remove it after 1/10 s;
function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");

  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed"); //Don't need add . after className in addClass() or removeClass()
  },100);
      //console.log("#"+currentColour);
}

function checkAnswer(currentLevel){
    // console.log(currentLevel);
    var userlength = userClickedPattern.length;
    var gamelength = gamePattern.length;

  if(userClickedPattern[userlength-1] === gamePattern[userlength-1]){ //right

    if(userlength === gamelength){
        setTimeout(function(){
          nextSequence();
        },1000);
        userClickedPattern = [];
        level++;
        console.log("success");
    }

  }else{                           //wrong
    playSound("wrong");
    setTimeout(function(){
      $("body").addClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    $(document).keypress(function(event){
        startOVer();
    });
  }
}

function startOVer(){
  gamePattern = [];
  userClickedPattern = [];
  $("body").removeClass("game-over");
  nextSequence();
}

//event that detect any key has been pressed to start the game
$(document).keypress(function(event){
  startOVer();
  level = 0;
  $("h1").text("Level 0 ");
});

//Click function
$(".btns").click(function(event){ //select the target from """""""className""""""""
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour); //record clicked pattern in userClickedPattern
    playSound(userChosenColour);//play sound
    $("#"+userChosenColour).fadeOut(100).fadeIn(100); //flash the button when click
    animatePress(userChosenColour);
    // console.log(userClickedPattern);
    // console.log(gamePattern);
    // console.log(level);
    checkAnswer(level);
  });












//console.log(gamePattern);
