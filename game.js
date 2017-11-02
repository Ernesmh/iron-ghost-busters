function Game() {
  this.board = new Board()
  this.pointer = new Pointer()
  this.ghost = new Ghost()
  this.gun = new Gun()
  this.counter = new Counter();
  this.chrono = new Chrono();
  this.final = new Final();
  this.laser = new Laser ();
}

Game.prototype.startGame = function() {
  this.interval = setInterval(() => {
    this.update()
  }, 60);
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

Game.prototype.newGhost = function() {
  this.ghost = new Ghost()
}

Game.prototype.finish = function() {
  console.log("GAME OVER");
  clearInterval(this.interval)
  this.final.drawEnd();
}

Game.prototype.pause = function() {

}

Game.prototype.gameOver = function() {

}

Game.prototype.winner = function() {

}
