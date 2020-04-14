
var buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var gameStarted = false;

var level = 0;
$(document).keypress(function(e){
     if (gameStarted == false){
         nextSequence();
         gameStarted = true;

        $("h1").text("Level " + level);
     } 
 })

$(".btn").click(function(e){
    var userChosenColor = $(this).attr("id"); 
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatedPress(userChosenColor);
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()* 4);
    var randomChosenColor =  buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColor);

};

function playSound(name){

var audio = new Audio('sounds/' + name + '.mp3');
audio.play();

};

function animatedPress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 50);
};

