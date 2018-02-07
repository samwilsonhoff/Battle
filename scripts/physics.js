var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var width = 800;
var height = 600;
var square = 20;

var fourth = ((width/2)/2);
var eighth = fourth/2;
var redX = (width/2) - fourth - eighth;
var redY = height/2;
var greenX = (width/2) + fourth + eighth;
var greenY = height/2;

function Red() {
  this.xspeed = 0;
  this.yspeed = 0;

  this.dir = function(x, y) {
    this.xspeed += x;
    this.yspeed += y;
    this.update();
  }

  this.update = function() {
    c.fillStyle = "#C0C0C0";
    c.fillRect(redX, redY, square, square);

    redX += this.xspeed;
    redY += this.yspeed;
    this.Summon();
  }

  this.Summon = function() {
    c.fillStyle = "#ff0000";
    c.fillRect(redX, redY, square, square);
  }

}
function Green() {
  this.xspeed = 0;
  this.yspeed = 0;

  this.dir = function(x, y) {
    this.xspeed += x;
    this.yspeed += y;
    this.update();
  }

  this.update = function() {
    c.fillStyle = "#C0C0C0";
    c.fillRect(greenX, greenY, square, square);

    greenX += this.xspeed;
    greenY += this.yspeed;
    this.Summon();
  }

  this.Summon = function() {
    c.fillStyle = "#32CD32";
    c.fillRect(greenX, greenY, square, square);
  }
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  const keyCode = event.keyCode;
  var r = new Red();
  var g = new Green();
  if (keyCode == "87") {
    r.dir(0, -square);
  }
  if (keyCode == "83") {
    r.dir(0, square);
  }
  if (keyCode == "68") {
    r.dir(square, 0);
  }
  if (keyCode == "65") {
    r.dir(-square, 0);
  }
  if (keyName == "ArrowUp") {
    g.dir(0, -square);
  }
  if (keyName == "ArrowDown") {
    g.dir(0, square);
  }
  if (keyName == "ArrowRight") {
    g.dir(square, 0);
  }
  if (keyName == "ArrowLeft") {
    g.dir(-square, 0);
  }
});
