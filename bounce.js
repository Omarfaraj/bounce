const canvas = document.getElementById('bounceCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  velocityY: 2,
};

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke();
}

function updateBall() {
  ball.y += ball.velocityY;

  // Bounce when the ball hits the top or bottom of the canvas
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.velocityY = -ball.velocityY;
  }
}

function animate() {
  drawBall();
  updateBall();
  requestAnimationFrame(animate);
}

animate();
