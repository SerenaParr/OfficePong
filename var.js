var ball = {
  x: 150,
  y: 150,
  diam: 40,
  speedX: 5,
  speedY: 5,
  display: function() {
    image(img2, this.x, this.y, this.diam, this.diam);
  },
  move: function() {
    ball.x = ball.x + ball.speedX;
    ball.y = ball.y + ball.speedY;
  },
  changeDirectionX: function() {
    ball.speedX = ball.speedX * -1.1;
    ball.x = ball.x + ball.speedX;
  },
  changeDirectionY: function() {
    ball.speedY = ball.speedY * -1;
    ball.y = ball.y + ball.speedY;
  },
};

var wall = {
  x: 0,
  y: 0,
  w: 50,
  display: function() {
    image(img1, this.x, this.y, this.w, height);
  },
};
