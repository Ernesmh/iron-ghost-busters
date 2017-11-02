function Final(){
  this.height= 800;
  this.width=1500;
  this.x=0;
  this.y=0;
}

Final.prototype.drawEnd = function(){
  console.log("lo pilla")

  ctx.clearRect(0, 0, 1500, 800);
  $('canvas').css('background-image', 'url("images/fondo.jpg")')

  ctx.font = "60px Arial";
  ctx.fillStyle = 'rgb(255,255,255';
  ctx.fillText("YOUR FINAL SCORE IS ", this.x + 400, this.y + 600)

  ctx.font = "100px Arial";

  ctx.fillText(myGame.counter.sum, this.x + 650, this.y + 700)
}
