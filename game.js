

var gamePattern = [randomChosenColor];

var buttonColors = [
    "red",
    "blue",
    "green",
    "yellow"
];

var randomChosenColor =  buttonColors[randomNumber];
var randomNumber = Math.floor(Math.random()* 4);
function nextSequence(){
    var randomNumber
   console.log(randomNumber)
};

$("#red").on("click", function(){
    $("#red").fadeOut(25).fadeIn(25).fadeOut(25).fadeIn(25);
});