function Ghost() {
  this.height = 150;
  this.width = 150;
  this.x = 450;
  this.y = 50;
  this.number = [];
  this.captured = [];
  this.dx = 10
  this.dy = 10
}

Ghost.prototype.drawAnimation = function() {
  var img = new Image();
  img.src = "images/ghost-512.png";
  ctx.drawImage(img, this.x + this.dx, this.y + this.dy, 150, 150);

  if (this.x > 1200 || this.x < 100) {
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

Ghost.prototype.moveRandom = function() {

}

Ghost.prototype.burn = function() {

}

Ghost.prototype.dissapear = function() {

}
