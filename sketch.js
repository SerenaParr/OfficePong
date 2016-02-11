//original simple pong code from http://www.openprocessing.org/sketch/47481

var gameStart = false;
var paddle
var words = ["TOUCH BASE", "PROCESS REVIEW", "CIRCLE BACK", "POWER LUNCH"];
var wordsindex = 0;


function preload() {
  img1 = loadImage("assets/wall.png");
  img2 = loadImage("assets/ball.png");
  img3 = loadImage("assets/paddle.png");
  img4 = loadImage("assets/office.jpg");
}


function setup() {
  createCanvas(800, 500);
  ellipseMode(CENTER);
  paddle = {
    w: 15,
    h: 150,
    display: function() {
      image(img3, width - (this.w * 2), mouseY - (this.h / 2), this.w, this.h);
    },
    shorten: function() {
      paddle.h = paddle.h - 5;
      paddle.h = constrain(paddle.h, 10, 150);
    },
  }
}

//GAME START
function mousePressed() {
  gameStart = true;
}

//GAME
function draw() {
  background(img4, 0, 0, 800, 500);

  ball.display();
  wall.display();
  paddle.display();

  // GAME START
  if (gameStart) {
    ball.move();

    //if ball hits paddle, invert x direction 
    if (ball.x > (width - 60) && ball.x < (width - 50) && ball.y > (mouseY - 90) && ball.y < (mouseY + 60)) {
      ball.changeDirectionX();
      //and reduce size of paddle
      paddle.shorten();
    }
    //if ball hits wall, change direction
    if (ball.x < 25) {
      ball.changeDirectionX();
      //and display words
      fill(255);
      textSize(40);
      text(words[wordsindex], 250, 450);
      println(words[wordsindex])
      wordsindex = wordsindex + 1;
      if (wordsindex == words.length) {
        wordsindex = 0;
      }
    }

    // if ball hits up or down, change direction of Y  
    if (ball.y > (height - 25) || ball.y < 0) {
      ball.changeDirectionY();
    }

    //GAME OVER
    if (ball.x > width) {
      gameStart = false;
      ball.x = 150
      ball.y = 150;
      ball.speedX = 5;
      ball.speedY = 5;
      paddle.h = 150;
    }
  }
}
