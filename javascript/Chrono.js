var a = 60;

function Chrono() {
  this.height = 220;
  this.width = 220;
  this.x = 20;
  this.y = 20;
  this.time = this.startChrono();
}

Chrono.prototype.startChrono = function() {
  var counter = 60;
  var timer = function() {
    console.log(counter);
    a = ("0" + counter).slice(-2);
    timeoutId = setTimeout(timer, 1000);
    counter -= 1;

    if (counter < 0) {
      clearTimeout(timeoutId);
      myGame.finish()
    }
  }

  var timeoutId = setTimeout(timer, 1000);
}

Chrono.prototype.stop = function() {

}

Chrono.prototype.drawChrono = function() {
  var imgch = new Image();
  imgch.src = "images/reloj.png";
  ctx.drawImage(imgch, this.x, this.y, this.height, this.width);
  ctx.font = "60px Arial";
  ctx.fillText(a, this.x + 77, this.y + 155)
}
