let seed = null;

// Simple seeded PRNG (mulberry32)
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

let rng = Math.random;

export function setSeed(s) {
  seed = s;
  rng = mulberry32(s);
}

export function clearSeed() {
  seed = null;
  rng = Math.random;
}

export function random() {
  return rng();
}

export function randomInt(min, max) {
  return Math.floor(random() * (max - min + 1)) + min;
}

export function randomItem(arr) {
  return arr[Math.floor(random() * arr.length)];
}

export function randomFloat(min, max, decimals = 1) {
  return parseFloat((random() * (max - min) + min).toFixed(decimals));
}

export function randomDigits(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomInt(0, 9);
  }
  return result;
}
