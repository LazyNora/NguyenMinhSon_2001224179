const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100,60,50,0,Math.PI/2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,60,40,0,Math.PI/2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,60,30,0,Math.PI/2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,60,20,0,Math.PI/2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,60,20,Math.PI,Math.PI*1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,60,50,Math.PI,Math.PI*1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,60,40,Math.PI,Math.PI*1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,60,30,Math.PI,Math.PI*1.5);
ctx.stroke();