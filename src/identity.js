import { randomDigits, randomItem, randomInt } from "./utils/random.js";

/**
 * Generate a fake Aadhaar-like number.
 * ⚠️ NOT a real Aadhaar number. For testing purposes only.
 * Does not pass Verhoeff algorithm check intentionally.
 * @returns {string} Formatted as "XXXX XXXX XXXX"
 */
export function aadhaar() {
  // Intentionally NOT using real Verhoeff checksum to prevent misuse
  const part1 = randomDigits(4);
  const part2 = randomDigits(4);
  const part3 = randomDigits(4);
  return `${part1} ${part2} ${part3}`;
}

/**
 * Generate a fake PAN-like card number.
 * ⚠️ NOT a real PAN number. For testing purposes only.
 * @returns {string} e.g. "ABCDE1234F"
 */
export function pan() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const panTypes = ["P", "C", "H", "F", "A", "T", "B", "L", "J", "G"];

  const l1 = randomItem(letters.split(""));
  const l2 = randomItem(letters.split(""));
  const l3 = randomItem(letters.split(""));
  const l4 = randomItem(panTypes);
  const l5 = randomItem(letters.split(""));
  const digits = randomDigits(4);
  const lastLetter = randomItem(letters.split(""));

  return `${l1}${l2}${l3}${l4}${l5}${digits}${lastLetter}`;
}

/**
 * Generate a fake UPI ID.
 * @param {string} [name] - Optional name to base the UPI ID on
 * @returns {string} e.g. "rahul.verma@upi"
 */
export function upi(name) {
  const handles = ["@okaxis", "@ybl", "@oksbi", "@okhdfcbank", "@paytm", "@apl", "@ibl", "@upi", "@icici", "@kotak"];
  const handle = randomItem(handles);

  if (name) {
    const slug = name.toLowerCase().replace(/\s+/g, ".");
    return `${slug}${handle}`;
  }

  const prefixes = ["payment", "money", "pay", "upi", "txn"];
  const type = randomInt(0, 2);

  if (type === 0) {
    // name-based fake
    const first = ["rahul", "priya", "amit", "neha", "raj", "anjali", "suresh", "pooja"];
    const last = ["verma", "patel", "sharma", "gupta", "singh", "mehta", "joshi", "kumar"];
    return `${randomItem(first)}.${randomItem(last)}${handle}`;
  } else if (type === 1) {
    return `${randomItem(prefixes)}${randomDigits(4)}${handle}`;
  } else {
    return `user${randomDigits(6)}${handle}`;
  }
}
