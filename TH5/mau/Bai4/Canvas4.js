const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 100, 70, 0, Math.PI / 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI / 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI / 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 10, 0, Math.PI / 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 10, Math.PI, Math.PI * 1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 30, Math.PI, Math.PI * 1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 50, Math.PI, Math.PI * 1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 70, Math.PI, Math.PI * 1.5);
ctx.stroke();
