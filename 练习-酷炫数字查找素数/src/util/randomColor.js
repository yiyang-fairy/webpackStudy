const colors = [
  "#00BCD4",
  "#FFEB3B",
  "#74d2e7",
  "#2dde98",
  "#ff4f81",
  "#0dd3ff",
  "#6a67ce",
  "#ff4e00",
];

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default function randomColor() {
  {
    return colors[getRandom(0, colors.length)];
  }
}
