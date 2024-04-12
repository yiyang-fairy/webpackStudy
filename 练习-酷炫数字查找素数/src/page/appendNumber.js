import randomColor, { getRandom } from "../util/randomColor";

const divContainer = document.getElementById("divContainer");
const divCenter = document.getElementById("divCenter");

export default function appendNumber(n, isPrime) {
  const span = document.createElement("span");
  span.innerHTML = n;
  if (isPrime) {
    const color = randomColor();
    span.style.color = color;
    createCenterPrimeNumber(n, color);
  }
  divContainer.appendChild(span);
  createCenterNumber(n);
}

function createCenterNumber(n) {
  divCenter.innerHTML = n;
}

function createCenterPrimeNumber(n, color) {
  const div = document.createElement("div");
  div.className = "center";
  div.innerHTML = n;
  div.style.color = color;
  document.body.appendChild(div);

  // 加入了div后，强行昂页面重新渲染
  getComputedStyle(div).left; // 只要读取某个元素的位置或者尺寸信息，则会让浏览器重新渲染

  div.style.transform = `translate(${getRandom(-250, 250)}px, ${getRandom(
    -250,
    250
  )}px)`;
  div.style.opacity = 0;
}
