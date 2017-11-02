function Laser(){
  this.height = 800;
  this.width = 1500;
  this.x = 300;
  this.y = 300;
}

Laser.prototype.showLaser = function (){
  var lasimg = new Image();
  lasimg.src = "images/lasertopvert.png"
      ctx.drawImage(lasimg, myGame.pointer.x - 225, myGame.pointer.y-32, 400, 473);
}
