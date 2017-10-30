var myBoard
var myPointer
$(document).ready(function() {
  myPointer = new Pointer();
  myBoard = new Board();

  myBoard.start();

  myBoard.context.fillStyle = "rgb(255,255,255)";
  myBoard.context.fillRect(300, 75, 1600, 1000);

  myBoard.context.fillStyle = "rgb(0,0,0)";
  myBoard.context.strokeRect(300, 75, 1600, 1000);

  // var img = new Image();
  //   img.onload = function() {
  //     myBoard.context.drawImage(img, 300, 75, 1600, 900);
  //   };
  //   img.src = "images/fondo.jpg";


  document.onkeydown = function(e) {
    if (e.keyCode == 37) {
      myPointer.moveLeft();
    }
    if (e.keyCode == 39) {
      myPointer.moveRight();
    }
    if (e.keyCode == 38) {
      myPointer.moveUp();
    }
    if (e.keyCode == 40) {
      myPointer.moveDown();
    }
    if (e.keyCode == 83) {
      myPointer.shoot();
    }
  }

});

function updateCanvas() {
  myBoard.context.clearRect(0, 0, 1500, 1700);
  drawPointer()
}

function drawPointer() {
  myBoard.context.beginPath();
  myBoard.context.arc(myPointer.x, myPointer.y, myPointer.width / 2, 0, Math.PI * 2, false);
  myBoard.context.strokeStyle = "red";
  myBoard.context.stroke();

  myBoard.context.beginPath();
  myBoard.context.moveTo(myPointer.x, myPointer.y-30);
  myBoard.context.lineTo(myPointer.x, myPointer.y+30);
  myBoard.context.strokeStyle = "red";
  myBoard.context.stroke();


  myBoard.context.moveTo(myPointer.x-30, myPointer.y);
  myBoard.context.lineTo(myPointer.x+30, myPointer.y);
  myBoard.context.strokeStyle = "red";
  myBoard.context.stroke();
}
