
function setup(){
    createCanvas(800, 800);
    background(90);
}

function draw(){
    fill(255, 0, 0);
    rect(400, 400, 100, 100);
    fill(0, 0, 255);
    ellipse(100, 100, 30, 80);
    fill(25, 50, 100);
    ellipse(100, 40, 20, 30);
    fill(4, 2, 1);
    ellipse(100, 140, 20, 30);
    fill(20, 60, 70);
    rect(400, 200, 100, 100);
    fill(90, 10, 70);
    rect(600, 200, 100, 100);
    fill(40, 50, 100);
    rect(600, 400, 100, 100);
    triangle(300, 100, 320, 100, 310, 80);
    fill(4, 190, 123);
    arc(550, 200, 400, 280, PI, TWO_PI);
}