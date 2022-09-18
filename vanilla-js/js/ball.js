class Ball {
  constructor(width, height, radius, speed) {
    this.radius = radius;
    this.velocityX = speed;
    this.velocityY = speed;
    const diameter = this.radius * 2;
    this.x = diameter + (Math.random() * width - diameter);
    this.y = diameter + (Math.random() * height - diameter);
  }

  draw(ctx, width, height) {
    this.x += this.velocityX;
    this.y += this.velocityY;

    this.resetPosition(width, height);

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  resetPosition(width, height) {
    const minX = this.radius;
    const maxX = width - this.radius;
    const minY = this.radius;
    const maxY = height - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.velocityX *= -1;
      this.x += this.velocityX;
    } else if (this.y <= minY || this.y >= maxY) {
      this.velocityY *= -1;
      this.y += this.velocityY;
    }
  }
}

export default Ball;
