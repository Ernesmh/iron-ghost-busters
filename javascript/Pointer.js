function Pointer(){
  this.height = 60;
  this.width = 60;
  this.x = 300;
  this.y = 300;
  this.shoot = [];

}

Pointer.prototype.moveLeft = function(){
  if(this.x > 300 && this.x < 1200){
    this.x -= 10;
  }
}

Pointer.prototype.moveRight = function(){
  if(myPointer.x > 100 && myPointer.x <1200){
    this.x += 10;
  }
}

Pointer.prototype.moveUp = function(){
  if(myPointer.y > 0 && myPointer.y < 400){
    this.y -= 10;
  }
}

Pointer.prototype.moveDown = function(){
  if(myPointer.y > 0 && myPointer.y < 400){
    this.y += 10;
  }
}

Pointer.prototype.shoot = function(){
    this.shoot.push()
}
