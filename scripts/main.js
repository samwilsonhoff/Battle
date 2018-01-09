var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var width = 300;
var height = 300;

function background() {
  c.fillStyle = "#ffffff"
  c.fillRect(0, 0, width, height);
}

function show() {
  //does not work yet
  var hide = document.getElementById("canvas");
  hide.style.display = "none";
}

var hide = document.getElementById("canvas");
hide.style.display = "none";
