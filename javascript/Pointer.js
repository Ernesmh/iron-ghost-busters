function Pointer() {
  this.height = 60;
  this.width = 60;
  this.x = 700;
  this.y = 300;
  this.shoot = [];

}

Pointer.prototype.drawPointer = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.width / 2, 0, Math.PI * 2, false);
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(this.x, this.y - 30);
  ctx.lineTo(this.x, this.y + 30);
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.moveTo(this.x - 30, this.y);
  ctx.lineTo(this.x + 30, this.y);
  ctx.strokeStyle = "red";
  ctx.stroke();

}


Pointer.prototype.moveLeft = function() {
  if (this.x > 300 && this.x < 1200) {
    this.x -= 20;
  }
}

Pointer.prototype.moveRight = function() {
  if (this.x > 200 && this.x < 1150) {
    this.x += 20;
  }
}

Pointer.prototype.moveUp = function() {
  if (this.y > 15 && this.y < 425) {
    this.y -= 20;
  }
}

Pointer.prototype.moveDown = function() {
  if (this.y > 0 && this.y < 400) {
    this.y += 20;
  }
}

Pointer.prototype.shoot = function() {
  this.shoot.push()
}
