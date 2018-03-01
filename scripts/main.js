var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var width = 800;
var height = 600;
var square = 20;

function StartGame() {
  background();
  border();

  var fCall = new Red();
  fCall.Summon();
  var fCall = new Green();
  fCall.Summon();

}

function background() {
  c.fillStyle = "#C0C0C0"
  c.fillRect(0, 0, width, height);
}

function border() {
  c.fillStyle = "#000000";
  for (var i = 0; i < width; i++) {
    var temp = square * i;
    c.fillRect(temp, 0, square, square); //top
    c.fillRect(0, temp, square, square); //left
    c.fillRect(temp, 580, square, square); //bottom
    c.fillRect(780, temp, square, square); //right
  }
}
