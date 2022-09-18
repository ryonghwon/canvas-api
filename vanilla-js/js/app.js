import Ball from "./ball.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    window.addEventListener("resize", this.handleResize.bind(this), false);
    this.handleResize();
    this.ball = new Ball(this.width, this.height, 10, 4);
    // this.ball.draw(this.ctx, this.width, this.height);
    window.requestAnimationFrame(this.handleAnimated.bind(this));
  }

  handleResize() {
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    this.canvas.width = this.width * 2;
    this.canvas.height = this.height * 2;
    this.ctx.scale(2, 2);
  }

  handleAnimated(time) {
    window.requestAnimationFrame(this.handleAnimated.bind(this));
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ball.draw(this.ctx, this.width, this.height);
  }
}

new App();
