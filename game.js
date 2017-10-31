function Game() {
  this.board = new Board()
  this.pointer = new Pointer()
  this.ghost = new Ghost()
  this.gun = new Gun()
  this.counter = new Counter();
  this.chrono = new Chrono();
}

Game.prototype.startGame = function() {
  this.interval = setInterval(function() {
    this.update()
  }.bind(this), 60);
  this.update()
}

Game.prototype.update = function() {
  ctx.clearRect(0, 0, 1500, 800);
  this.ghost.drawAnimation()
  this.pointer.drawPointer()
  this.gun.drawGun();
  this.chrono.drawChrono();
  this.counter.drawCounter();
}

Game.prototype.goCounter = function() {
  // if ((myGame.pointer.x >= myGame.ghost.x &&
  // myGame.pointer.x <= myGame.ghost.x + myGame.ghost.width)
  // && (myGame.pointer.y >= myGame.ghost.y &&
  //myGame.pointer.y <= myGame.ghost.y + myGame.ghost.height)){
  //   this.counter += 1;
  // }
}

Game.prototype.reset = function() {

}

Game.prototype.pause = function() {

}

Game.prototype.gameOver = function() {

}

Game.prototype.winner = function() {

}
