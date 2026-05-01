import {
  firstNamesMale,
  firstNamesFemale,
  lastNames,
  allRegions,
} from "./data/names.js";
import { emailDomains } from "./data/domain.js";
import { pick, randomInt, randomDigits } from "./utils/random.js";

/**
 * Generate a realistic Indian phone number.
 * Starts with +91 9XXXXXXXXX format.
 */
export function phone() {
  const validPrefixes = ["6", "7", "8", "9"];
  const prefix = pick(validPrefixes);
  return `+91 ${prefix}${randomDigits(9)}`;
}

/**
 * Generate an Indian-style email from a name.
 * @param {string} firstName
 * @param {string} lastName
 */
export function email(firstName, lastName) {
  const domain = pick(emailDomains);
  const patterns = [
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${randomInt(10, 999)}`,
    `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    `${firstName[0].toLowerCase()}${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${lastName[0].toLowerCase()}${randomInt(10, 99)}`,
  ];
  return `${pick(patterns)}@${domain}`;
}

/**
 * Generate a realistic Indian person.
 * @param {Object} options
 * @param {string} [options.gender] - 'male' | 'female' | random
 * @param {string} [options.region] - 'north' | 'south' | 'east' | 'west' | random
 */
export function person({ gender, region } = {}) {
  const resolvedGender = gender || (Math.random() < 0.5 ? "male" : "female");
  const resolvedRegion = region || pick(allRegions);

  const firstNamePool =
    resolvedGender === "male"
      ? firstNamesMale[resolvedRegion]
      : firstNamesFemale[resolvedRegion];

  const firstName = pick(firstNamePool);
  const lastName = pick(lastNames[resolvedRegion]);
  const fullName = `${firstName} ${lastName}`;

  return {
    name: fullName,
    firstName,
    lastName,
    gender: resolvedGender,
    region: resolvedRegion,
    phone: phone(),
    email: email(firstName, lastName),
    age: randomInt(18, 65),
  };
}

/**
 * Generate an Aadhaar-like 12-digit number.
 * ⚠️ NOT a real Aadhaar number. For testing only.
 */
export function aadhaar() {
  // First digit cannot be 0 or 1 (as per real Aadhaar rules, for realism)
  const first = randomInt(2, 9).toString();
  const rest = randomDigits(11);
  const digits = first + rest;
  // Format: XXXX XXXX XXXX
  return `${digits.slice(0, 4)} ${digits.slice(4, 8)} ${digits.slice(8, 12)}`;
}

/**
 * Generate a fake PAN number.
 * Format: AAAAA9999A (5 letters, 4 digits, 1 letter)
 * ⚠️ NOT a real PAN. For testing only.
 */
export function pan() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const panTypes = ["P", "C", "H", "F", "A", "T", "B", "L", "J", "G"];
  const part1 = Array.from({ length: 3 }, () => pick(letters.split(""))).join(
    "",
  );
  const panType = pick(panTypes);
  const initial = pick(letters.split(""));
  const numbers = randomDigits(4);
  const last = pick(letters.split(""));
  return `${part1}${panType}${initial}${numbers}${last}`;
}

/**
 * Generate a UPI ID.
 * @param {string} [name] - Optional name to base UPI on
 */
export function upi(name) {
  const { firstName, lastName } = name
    ? { firstName: name.split(" ")[0], lastName: name.split(" ")[1] || "" }
    : person();

  const handles = [
    "@okicici",
    "@okhdfcbank",
    "@oksbi",
    "@okaxis",
    "@ybl",
    "@ibl",
    "@upi",
    "@paytm",
  ];
  const patterns = [
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${randomInt(1, 999)}`,
    `${firstName[0].toLowerCase()}${lastName.toLowerCase()}${randomInt(10, 99)}`,
  ];
  return `${pick(patterns)}${pick(handles)}`;
}
