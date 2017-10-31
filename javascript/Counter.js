function Counter(){
  this.height = 200;
  this.width = 200;
  this.x = 1200;
  this.y = 0;
  this.sum = 0;
}

Counter.prototype.addPoints = function(){
  if ((myGame.pointer.x >= myGame.ghost.x &&
  myGame.pointer.x <= myGame.ghost.x + myGame.ghost.width)
  && (myGame.pointer.y >= myGame.ghost.y &&
  myGame.pointer.y <= myGame.ghost.y + myGame.ghost.height)){
    this.sum += 1;
  }
}
