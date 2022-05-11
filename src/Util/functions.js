function randomInt(n) {
  return Math.floor(Math.random() * n);
}
export function randomElement(array) {
  return array[randomInt(array.length)];
}
