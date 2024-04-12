// 注册事件
import appendNumber from "./appendNumber.js";
import NumberTimer from "../util/number.js";

let isStart = false;

const n = new NumberTimer();
n.onNumberCreated = function (n, isPrime) {
  appendNumber(n, isPrime);
};

window.onclick = function () {
  if (isStart) {
    n.stop();
    isStart = false;
  } else {
    n.start();
    isStart = true;
  }
};
