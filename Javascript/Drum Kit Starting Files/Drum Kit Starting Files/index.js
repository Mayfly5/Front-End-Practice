
/*
target.addEventListener(event, function);
*/

//Higher Order Function: Higher order functions are functions that can take other functions as inputs

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var clickbtw = this.innerHTML; // where is the click
    makesounds(clickbtw);
    activebtw(clickbtw);

  });
}

//event is the property of event (callback function)
document.addEventListener("keypress",function(event){ // get the key has been pressed
  makesounds(event.key); //event.key get the key
  activebtw(event.key);
})

function makesounds (key){

  switch(key){
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

    case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

    case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

    case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

    default: console.log("Click in the box");

  }
}

//the function to active button showdom
function activebtw(keybtw){
  document.querySelector("."+keybtw).classList.add("pressed"); //add the pressed class when press or click the key
  setTimeout(function(){document.querySelector("."+keybtw).classList.remove("pressed");},100); // setTimeout(function, time to delay to execute the function) 1000ns = 1s
}
