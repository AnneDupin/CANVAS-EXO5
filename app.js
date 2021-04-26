let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let pi = Math.PI;

canvas.width = 600;
canvas.height = 450;

ctx.beginPath(); 
// HEAD
ctx.fillStyle = "#dda15e";
ctx.arc(298, 96, 64, 0, 2*pi, false);
ctx.fill();
// ARMS
ctx.fillRect(155, 145, 290, 40); 
// BODY
ctx.fillRect(240, 177, 120, 198); 

ctx.beginPath();
 // HAND
ctx.arc(155, 165, 20, 0, 2*pi, false);

ctx.arc(440, 165, 20, 0, 2*pi, false);
ctx.fill();

ctx.beginPath(); 
// FOOT
ctx.arc(265, 380, 25, 0, 2*pi, false);
ctx.fill();

ctx.arc(335, 380, 25, 0, 2*pi, false);
ctx.fill();

ctx.beginPath(); 
// BISCUIT SPREADING
ctx.fillStyle = "black";
ctx.arc(300, 330, 5, 0, 2*pi, false);
ctx.fill();

ctx.fillRect(290, 340, 20, 65);
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
 // EYES
ctx.arc(275, 85, 12, 0, 2*pi, false);
ctx.fill();

ctx.arc(325, 85, 12, 0, 2*pi, false);
ctx.fill();

ctx.beginPath();  
// EYEBROWN
ctx.strokeStyle = "white";
ctx.moveTo(260, 70);
ctx.quadraticCurveTo(275, 60, 290, 65);

ctx.moveTo(310, 65);
ctx.quadraticCurveTo(330, 70, 340, 70);
ctx.stroke();

ctx.beginPath();  
// SMIRKING SMILE
ctx.strokeStyle = "#d90429";
ctx.lineWidth = 6; 
ctx.moveTo(270, 115);
ctx.quadraticCurveTo(300, 125, 330, 115);
ctx.moveTo(270, 115);
ctx.quadraticCurveTo(300, 145, 330, 115);
ctx.stroke();

ctx.beginPath(); 
//BUTTONS
ctx.fillStyle = "#3a0ca3";
ctx.arc(300, 200, 10, 0, 2*pi, false);
ctx.fill();
ctx.arc(300, 230, 10, 0, 2*pi, false);
ctx.fill();
