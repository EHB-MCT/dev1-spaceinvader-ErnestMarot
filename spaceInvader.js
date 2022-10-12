"use strict";

alert("This is my space invader");

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpaceInvader();

function drawSpaceInvader() {


    //black box
    context.fillStyle = "black";
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();

    //green boxes
    context.fillStyle = "lime";
    context.beginPath();
    context.rect(75, 75, 50, 50);
    context.rect(75 + 50, 75, 50, 50);

    context.rect(75 + 150, 75, 50, 50);
    context.rect(75 + 200, 75, 50, 50);

    context.rect(75, 75 + 150, 50, 50);
    context.rect(75, 75 + 200, 50, 50);
    context.rect(75 + 50, 75 + 200, 50, 50);

    context.rect(75 + 200, 75 + 150, 50, 50);
    context.rect(75 + 200, 75 + 200, 50, 50);
    context.rect(75 + 150, 75 + 200, 50, 50);

    context.fill();
}