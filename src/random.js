// Seeded pseudo-random number generator (Mulberry32 algorithm)
let seed = null;
let seededRng = null;

function mulberry32(s) {
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Set a seed for reproducible data generation.
 * @param {number} s - Seed value
 */
export function setSeed(s) {
  seed = s;
  seededRng = mulberry32(s);
}

/**
 * Clear the seed and return to random generation.
 */
export function clearSeed() {
  seed = null;
  seededRng = null;
}

/**
 * Get the current seed value (or null if unseeded).
 */
export function getSeed() {
  return seed;
}

/**
 * Returns a random float between 0 (inclusive) and 1 (exclusive).
 */
export function random() {
  return seededRng ? seededRng() : Math.random();
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 */
export function randomInt(min, max) {
  return Math.floor(random() * (max - min + 1)) + min;
}

/**
 * Pick a random element from an array.
 */
export function pick(arr) {
  return arr[randomInt(0, arr.length - 1)];
}

/**
 * Pick N unique random elements from an array.
 */
export function pickN(arr, n) {
  const shuffled = [...arr].sort(() => random() - 0.5);
  return shuffled.slice(0, Math.min(n, arr.length));
}

/**
 * Returns a random float between min and max, rounded to given decimals.
 */
export function randomFloat(min, max, decimals = 2) {
  const val = random() * (max - min) + min;
  return parseFloat(val.toFixed(decimals));
}

/**
 * Generate a random digit string of given length.
 */
export function randomDigits(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomInt(0, 9).toString();
  }
  return result;
}
