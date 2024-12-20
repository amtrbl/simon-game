
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let gameStarted =false;
let level = 0;

// When keyboard key is pressed for the 1st time, call nextSequence()
$(document).keydown(function() {
    if (!gameStarted) {
        // When game starts, change h1 to say Level 0
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

$(".btn").on("click", function() {
    const userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence() {
    // Increase lvl by 1 each time nextSequence() is called
    level++;
    // Update h1 for each level
    $("#level-title").text("Level " + level);

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
