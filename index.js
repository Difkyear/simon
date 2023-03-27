// $("h1").text=""
var userPartten = [];
var gameOver = false;
var gamestart = false;
var partten = [];
var level = 0;
var buttonname = ["green", "red", "yellow", "blue"];

$("#green").on("click", function () {
  var sound = new Audio("sounds/green.mp3");
  $("#green").addClass("pressed");
  setTimeout(() => {
    $("#green").removeClass("pressed");
  }, 300);
  sound.play();
  userPartten.push("green");
  check(userPartten);
});

$("#red").on("click", function () {
  var sound = new Audio("sounds/red.mp3");
  $("#red").addClass("pressed");
  setTimeout(() => {
    $("#red").removeClass("pressed");
  }, 300);
  sound.play();
  userPartten.push("red");
  check(userPartten);
});

$("#blue").on("click", function () {
  var sound = new Audio("sounds/blue.mp3");
  $("#blue").addClass("pressed");
  setTimeout(() => {
    $("#blue").removeClass("pressed");
  }, 300);
  sound.play();
  userPartten.push("blue");
  check(userPartten);
});
$("#yellow").on("click", function () {
  var sound = new Audio("sounds/yellow.mp3");
  $("#yellow").addClass("pressed");
  setTimeout(() => {
    $("#yellow").removeClass("pressed");
  }, 300);
  sound.play();
  userPartten.push("yellow");
  check(userPartten);
});

// game start
$(document).on("keypress", function (event) {
  if (event.key === "a" || event.key === "A") {
    startGame();
  }
});
function startGame() {
  partten = [];
  userPartten = [];
  level = 0;
  systembuttonClick(partten);
}

function systembuttonClick(partten) {
  userPartten = [];
  $("h1").text(level);
  var randombutton = Math.floor(Math.random() * 4);

  $("#" + buttonname[randombutton])
    .fadeOut(500)
    .fadeIn(500);
  new Audio("sounds/" + buttonname[randombutton] + ".mp3").play();
  partten.push(buttonname[randombutton]);
  //   alert("system " + partten);
}

function check(userPartten) {
  if (userPartten[userPartten.length - 1] === partten[userPartten.length - 1]) {
    if (userPartten.length === partten.length) {
      level++;
      document.querySelector("h1").textContent = level;
      setTimeout(() => {
        systembuttonClick(partten);
      }, 500);
    }
  } else {
    $("h1").text("you game over . Press any key to restart");
  }
}
