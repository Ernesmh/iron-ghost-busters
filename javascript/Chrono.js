var a = 60;
function Chrono(){
  this.height = 220;
  this.width = 220;
  this.x = 20;
  this.y = 20;
  this.time = this.startChrono();
}

Chrono.prototype.startChrono = function(){
//TODO var formattedNumber = ("0" + myNumber).slice(-2)
  var counter = 59;
  var timer = function () {
    console.log(counter);
    a = counter;
    timeoutId = setTimeout(timer, 1000);
    counter -= 1;

    if (counter <0 ) {
      clearTimeout(timeoutId);
    }

  }

  var timeoutId = setTimeout(timer, 1000);
}

Chrono.prototype.stopChrono = function(){

}

Chrono.prototype.drawChrono = function(){
  var imgch = new Image();
  imgch.src = "images/reloj.png";
  ctx.drawImage(imgch, this.x, this.y, this.height, this.width);
  ctx.font = "60px Arial";
  ctx.fillText(a,this.x + 77, this.y + 155)
}
