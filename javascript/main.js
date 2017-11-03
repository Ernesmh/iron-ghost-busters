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
    if (myGame.ghost.diedGhost()) {
      myGame.newGhost()
    }
    myGame.laser.showLaser()
    audio = new Audio("./images/gunsound.mp3")
    audio.play();
  }
  }
  audio = new Audio("./images/mgs.mp3")
  audio.play();
});
