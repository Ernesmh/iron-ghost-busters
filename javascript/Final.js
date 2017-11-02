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

}
