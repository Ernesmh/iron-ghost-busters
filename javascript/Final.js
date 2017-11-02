function Final() {
  this.height = 800;
  this.width = 1500;
  this.x = 0;
  this.y = 0;
  this.image = new Image();
  this.image.src = "images/giphy.gif";
}

Final.prototype.drawEnd = function() {
  ctx.clearRect(0, 0, 1500, 800);
  $('canvas').css('background-image', 'url("images/fondo.jpg")')
  $('div').removeClass( "hidden" )
  $( "div" ).click(function() {
    window.location = "index.html"
});

  ctx.font = "50px Arial";
  ctx.fillStyle = 'rgb(255,255,255';
  ctx.fillText("YOUR FINAL SCORE IS ", this.x + 850, this.y + 250)

  ctx.font = "80px Arial";
  ctx.fillText(("0" + myGame.counter.sum).slice(-2), this.x + 1070, this.y + 350)
  ctx.drawImage(this.image, this.x + 75, this.y + 50, 700, 700);

  // ctx.fillStyle = 'rgb(198, 35, 35)';
  // ctx.fillRect(920, 500, 400, 100);
  //
  // ctx.fillStyle = 'rgb(0, 0, 0)';
  // ctx.strokeRect(920, 500, 400, 100)
  //
  // ctx.font = "50px Arial";
  // ctx.fillStyle = 'rgb(255,255,255';
  // ctx.fillText("Try again!", this.x + 1005, this.y + 567);
}

Final.prototype.retry = function(){

}
