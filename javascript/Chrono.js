function Chrono(){
  this.height = 220;
  this.width = 220;
  this.x = 20;
  this.y = 20;
  this.time = 60;
}

Chrono.prototype.startChrono = function(){

}

Chrono.prototype.stopChrono = function(){

}

Chrono.prototype.drawChrono = function(){
  var imgch = new Image();
  imgch.src = "images/reloj.png";
  ctx.drawImage(imgch, this.x, this.y, this.height, this.width);

  ctx.font = "60px Arial";
ctx.fillText(this.time,this.x + 77, this.y + 155)
}


  var i = 60;
var interval = setInterval(function () {
  console.log(i);
  i--;

  if (i < 0) {
    clearInterval(interval);
  }
}, 1000);
