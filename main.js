var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var width = 300;
var height = 300;

function background() {
  c.fillRect(0, 0, width, height);
  c.fillStyle = "#FF0000";
}
