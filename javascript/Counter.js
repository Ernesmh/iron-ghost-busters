function Counter(){
  this.height = 210;
  this.width = 210;
  this.x = 1250;
  this.y = 25;
  this.sum = 0;
}

Counter.prototype.addPoints = function(){
  if ((myGame.pointer.x >= myGame.ghost.x &&
  myGame.pointer.x <= myGame.ghost.x + myGame.ghost.width)
  && (myGame.pointer.y >= myGame.ghost.y &&
  myGame.pointer.y <= myGame.ghost.y + myGame.ghost.height)){
    this.sum += 1;
    console.log("hit!")
    console.log(this.sum)
  }
}

Counter.prototype.drawCounter = function(){
  var imgco = new Image();
  imgco.src = "images/contador.png";
  ctx.drawImage(imgco, this.x, this.y, this.height, this.width);

  ctx.font = "60px Arial";
ctx.fillText(this.sum,1338,220)

ctx.font = "35px Arial";
ctx.fillText("HITS",1315,165)
}
