var myGame
var img
var ctx
var audio
$(document).ready(function() {
  ctx = document.getElementById('canvas').getContext("2d")
  myGame = new Game();

  myGame.startGame();

  document.onkeydown = function(e) {
    if (e.keyCode == 37) {
      myGame.pointer.moveLeft();
    }
    if (e.keyCode == 39) {
      myGame.pointer.moveRight();
    }
    if (e.keyCode == 38) {
      myGame.pointer.moveUp();
    }
    if (e.keyCode == 40) {
      myGame.pointer.moveDown();
    }
    if (e.keyCode == 83) {
      // myGame.pointer.shoot();
      myGame.counter.addPoints();

    }
  }
  audio = new Audio ("./images/Ghostbusters-.mp3")
  audio.onload(audio.play());
});
