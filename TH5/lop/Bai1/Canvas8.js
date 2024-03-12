// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// var grd = ctx.createRadialGradient(100, 75, 5, 100, 75, 70);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "green");

// ctx.arc(100, 75, 60, 0, 2 * Math.PI);
// ctx.fillStyle = grd;
// ctx.fill;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 100,
  y = 100,
  innerRadius = 10,
  outerRadius = 100,
  radius = 180;

var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "white");

ctx.arc(x, y, radius, 0, 2 * Math.PI);

ctx.fillStyle = gradient;
ctx.fill();
