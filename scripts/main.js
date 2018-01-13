var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var width = 300;
var height = 300;

function StartGame() {
  show();
  background();
}

function background() {
  c.fillStyle = "#ffffff"
  c.fillRect(0, 0, width, height);
}

function show() {
  var show = document.getElementById("canvas");
  show.style.display = "initial";
}

var hide = document.getElementById("canvas");
hide.style.display = "none";
