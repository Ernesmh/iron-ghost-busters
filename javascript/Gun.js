function Gun(){
  this.height= 200;
  this.width=200;
  this.x=300;
  this.y=300;
}

var gunimg = new Image();

Gun.prototype.drawGun = function(){
  gunimg.src = "images/gun.png";
    ctx.drawImage(gunimg, myGame.pointer.x - 180, myGame.pointer.y + 340, 400, 600  );


}
