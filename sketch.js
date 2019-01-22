
let img;
const burst = 800;
function preload(){
    img = loadImage('Images/basketball-smiley-face.png');
    sun = loadImage('Images/Sun_corner.svg.png')
    hoop = loadImage('Images/41fbcca19c8e3411949a61e603eb9e01.png');
    ball = loadImage('Images/Ball.png');
    finger = loadImage('Images/png-foam-finger-fan-finger-foam-hand-icon-512.png');
    court = loadImage('Images/basketball-court-sticker-31474-300x300.png');
    zion = loadImage('Images/source.gif');
}
let x, y;
function setup(){
    createCanvas(1600, 800);
   //noStroke();
   x = 1050;
   y = height;
}

function draw(){
    background(255, 10);
    for(var i=0; i < 50; i++){
        image(img, 0+i*40, 130, img.width/4, img.height/4);
    }
    for(var i=0; i < 50; i++){
        image(img, 0+i*40, 170, img.width/4, img.height/4);
    };

    for(var i=0; i < 50; i++){
        image(img, 0+i*40, 210, img.width/4, img.height/4);
    };
    image(court, 300, 100, img.width*5.3, img.height*5.3);
    image(sun, 0, 0, img.width*1, img.height*1);
    image(hoop, 950, 300, img.width*1.3, img.height*1.3);
    image(hoop, 226, 300, img.width*1.3, img.height*1.3);
    image(finger, mouseX, mouseY, img.width/3, img.height/3);
    image(zion, 500, 300, img.width/1.2, img.height/1.2);
    strokeWeight(2);
    fill(50 + cos(frameCount*0.1) * 128);
    textSize(40);
    text("Let's Go Duke!", 600, 50);
    stroke(50);
    fill(100);
    fill(255, 165, 0);
    ellipse(x, y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
    x = x 
  // Moving down at a constant speed
     y = y + 3;
  
  // Reset to the bottom
    if (y > height) {
        y = 0;
  }
  for(let counter=0; counter<100; counter++) {
    fill(0, 48, 135); 
    stroke(0, 48, 135);
    g = (random(-burst, burst)
          +random(-burst, burst)
          +random(-burst, burst)
          +random(-burst, burst)
          +random(-burst, burst))
    a = (random(-burst, burst)
          +random(-burst, burst)
          +random(-burst, burst)
          +random(-burst, burst)
          +random(-burst, burst))
    
    rect(g, a, 5, 5) // square
}
}

function kCLicker(){
    image('Images/Duke.png', 200, 200, img.width, img.height);
}

function buttonClicked(){
    kCLicker();
}