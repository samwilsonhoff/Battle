//list of issues
  //characater does not move
  //both of these due to being reset to default on call
    //this.x does not stay changed
    //this.xspeed does not stay changed
  //general idea
    //when up arrrow pressed, yspeed changes to -20
    //then this.y is added by -20
    //the y value becomes (whatever it was + -20)
    //this moves character up
  //what actually happens
    //yspeed does change to -20
    //this.y does change by -20
    //character moves one square up
    //all reset back
      //so next movement is from original spawnpoint
//i wrote this so i don't forget, ill figure it out im sure -theo
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var width = 800;
var height = 600;
var square = 20;
var start = true;

function Red() {
  var fourth = ((width/2)/2);
  var eighth = fourth/2;
  this.x = (width/2) - fourth - eighth;
  this.y = height/2;
  this.xspeed = 0;
  this.yspeed = 0;

  this.dir = function(x, y) {
    this.xspeed += x;
    this.yspeed += y;
    this.update();
  }

  this.update = function() {
    alert(this.yspeed);
    c.fillStyle = "#C0C0C0";
    c.fillRect(this.x, this.y, square*1.5, square*1.5);

    this.x += this.xspeed;
    this.y += this.yspeed;
    this.Summon();
  }

  this.Summon = function() {
    c.fillStyle = "#ff0000";
    c.fillRect(this.x, this.y, square*1.5, square*1.5);
  }


}
function Green() {
  var fourth = ((width/2)/2);
  var eighth = fourth/2;
  this.x = (width/2) + fourth + eighth;
  this.y = height/2;
  this.xspeed = 0;
  this.yspeed = 0;

  this.dir = function(x, y) {
    this.xspeed += x;
    this.yspeed += y;
    this.update();
  }

  this.update = function() {
    c.fillStyle = "#C0C0C0";
    c.fillRect(this.x, this.y, square*1.5, square*1.5);

    this.x += this.xspeed;
    this.y += this.yspeed;
    this.Summon();
  }

  this.Summon = function() {
    c.fillStyle = "#00ff00";
    c.fillRect(this.x, this.y, square*1.5, square*1.5);
  }
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  var r = new Red();
  if (keyName == "ArrowUp") {
    r.dir(0, -square);
  }
  if (keyName == "ArrowDown") {
    r.dir(0, square);
  }
  if (keyName == "ArrowRight") {
    r.dir(square, 0);
  }
  if (keyName == "ArrowLeft") {
    r.dir(-square, 0);
  }
});
