
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

let userClickedPattern = [];

$(".btn").on("click", function() {
    const userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence() {
    // Generate a random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * buttonColors.length);
  
    // Log the random number to the console
    console.log("Generated random number:", randomNumber);
  
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
  
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

}

function playSound(name) {
    const audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
