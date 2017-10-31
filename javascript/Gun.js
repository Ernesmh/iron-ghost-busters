function Gun(){
  this.height= 200;
  this.width=200;
  this.x=300;
  this.y=300;
}

var gunimg = new Image();

Gun.prototype.drawGun = function(){
  gunimg.onload = function() {
    ctx.drawImage(gunimg, myGame.pointer.x - 180, myGame.pointer.y + 340, 400, 600  );
  };
  gunimg.src = "images/gun.png";
}
