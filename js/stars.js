var x = [];
var y = [];
var w = [];
var fr = 8;

var starscape = 200;

starSize = 2;

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(fr);
    
    background(0);
    fill(255);

    for(var i = 0; i < starscape; i++) {
        x[i] = (random(canvasWidth));
        y[i] = (random(canvasHeight));
        w[i] = (random(1, 4));
    }
}

function draw() {
    for(var i = 0; i < starscape; i++) {
        fill(random(200, 255));
        ellipse(x[i], y[i], w[i], w[i]);
    }
}