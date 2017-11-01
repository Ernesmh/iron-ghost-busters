function Ghost() {
  this.height = 150;
  this.width = 150;
  this.x = Math.random() * 800 + 200;
  this.y = Math.random() * 500;
  this.number = ["ghost"];
  this.pics = ['images/ghost-512.png', 'images/ghostdead.png', 'images/ghostpink.png', 'images/ghostpinkdead.png'];
  this.dx = (Math.random() - 0.5) * 50 + 10
  this.dy = (Math.random() - 0.5) * 50 + 10
  this.img = new Image();
  this.img.src = this.pics[0];
}

Ghost.prototype.drawAnimation = function() {


  ctx.drawImage(this.img, this.x + this.dx, this.y + this.dy, 150, 150);

  if (this.x > 1100 || this.x < 200) {
    this.dx = -this.dx;
  }
  if (this.y > 500 || this.y < 10) {
    this.dy = -this.dy;
  }
  this.x += this.dx
  this.y += this.dy

}

Ghost.prototype.appear = function() {

}

Ghost.prototype.diedGhost = function() {
  if ((myGame.pointer.x >= myGame.ghost.x &&
      myGame.pointer.x <= myGame.ghost.x + myGame.ghost.width) &&
    (myGame.pointer.y >= myGame.ghost.y &&
      myGame.pointer.y <= myGame.ghost.y + myGame.ghost.height)) {
    this.img.src = this.pics[1];
    this.number.pop();
    console.log(this.number);
    return true
  } else return false
}

Ghost.prototype.burn = function() {

}

Ghost.prototype.dissapear = function() {

}
