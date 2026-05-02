let rng = Math.random;

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function setSeed(s) {
  rng = mulberry32(s);
}
function clearSeed() {
  rng = Math.random;
}
function random() {
  return rng();
}
function randomInt(min, max) {
  return Math.floor(random() * (max - min + 1)) + min;
}
function randomItem(arr) {
  return arr[Math.floor(random() * arr.length)];
}
function randomFloat(min, max, decimals) {
  decimals = decimals || 1;
  return parseFloat((random() * (max - min) + min).toFixed(decimals));
}
function randomDigits(length) {
  let r = "";
  for (let i = 0; i < length; i++) r += randomInt(0, 9);
  return r;
}

module.exports = {
  setSeed,
  clearSeed,
  random,
  randomInt,
  randomItem,
  randomFloat,
  randomDigits,
};
