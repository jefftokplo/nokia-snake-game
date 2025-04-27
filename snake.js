javascript
CopyEdit
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let snake = [{x: 200, y: 200}];
let direction = 'right';

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "lime";
  for (let s of snake) {
    ctx.fillRect(s.x, s.y, 20, 20);
  }

  let head = {x: snake[0].x, y: snake[0].y};
  if (direction === 'right') head.x += 20;
  if (direction === 'left') head.x -= 20;
  if (direction === 'up') head.y -= 20;
  if (direction === 'down') head.y += 20;

  snake.unshift(head);
  snake.pop();
}

setInterval(draw, 100);
window.addEventListener("keydown", (e) => {
  if (e.key === 'ArrowUp') direction = 'up';
  if (e.key === 'ArrowDown') direction = 'down';
  if (e.key === 'ArrowLeft') direction = 'left';
  if (e.key === 'ArrowRight') direction = 'right';
});
