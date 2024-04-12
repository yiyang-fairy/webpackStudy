import isPrime from "./isPrime";

export default class NumberTimer {
  constructor(duration) {
    this.duration = duration;
    this.number = 1;
    this.onNumberCreated = null; // 当数字产生时要调用的回调函数
    this.timerId = null;
  }
  start() {
    if (this.timerId) {
      return;
    }
    this.timerId = setInterval(() => {
      this.onNumberCreated &&
        this.onNumberCreated(this.number, isPrime(this.number));
      this.number++;
    }, this.duration || 200);
  }
  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
  }
}
