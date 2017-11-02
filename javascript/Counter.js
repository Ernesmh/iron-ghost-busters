function Counter() {
  this.height = 210;
  this.width = 210;
  this.x = 1250;
  this.y = 25;
  this.sum = 0;
}

Counter.prototype.addPoints = function() {
  if ((myGame.pointer.x >= myGame.ghost.x &&
      myGame.pointer.x <= myGame.ghost.x + myGame.ghost.width) &&
    (myGame.pointer.y >= myGame.ghost.y &&
      myGame.pointer.y <= myGame.ghost.y + myGame.ghost.height)) {
    if (myGame.ghost.index === 1) {
      this.sum += 3
    } else {
      this.sum += 1;
    }
    ("0" + this.sum).slice(-2)

    console.log(this.sum)
  }
}

Counter.prototype.drawCounter = function() {
  var imgco = new Image();
  imgco.src = "images/contador.png";
  ctx.drawImage(imgco, this.x, this.y, this.height, this.width);

  ctx.font = "50px Arial";
  ctx.fillText(("0" + this.sum).slice(-2), 1326, 210)

  ctx.font = "35px Arial";
  ctx.fillText("HITS", 1315, 165)
}
