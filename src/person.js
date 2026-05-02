import { maleFirstNames, femaleFirstNames, lastNames } from "./data/names.js";
import { emailDomains } from "./data/misc.js";
import { randomItem, randomInt, randomDigits, random } from "./utils/random.js";

const regions = ["north", "south", "west", "east"];

/**
 * Generate a realistic Indian person profile.
 * @param {Object} options
 * @param {'male'|'female'} [options.gender] - Force a specific gender
 * @param {'north'|'south'|'west'|'east'} [options.region] - Force a specific region
 * @returns {Object} Person object
 */
export function person(options = {}) {
  const region = options.region || randomItem(regions);
  const gender = options.gender || (random() > 0.5 ? "male" : "female");

  const firstNamePool =
    gender === "male" ? maleFirstNames[region] : femaleFirstNames[region];
  const firstName = randomItem(firstNamePool);
  const lastName = randomItem(lastNames[region]);
  const name = `${firstName} ${lastName}`;

  const phonePrefix = randomItem(["9", "8", "7", "6"]);
  const phone = `+91 ${phonePrefix}${randomDigits(9)}`;

  const emailUser = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomInt(0, 99) > 90 ? randomInt(1, 99) : ""}`;
  const email = `${emailUser}@${randomItem(emailDomains)}`;

  return { name, gender, phone, email, region };
}

/**
 * Generate only a phone number.
 * @returns {string} Phone in +91 XXXXXXXXXX format
 */
export function phone() {
  const prefix = randomItem(["9", "8", "7", "6"]);
  return `+91 ${prefix}${randomDigits(9)}`;
}

/**
 * Generate only an email.
 * @param {string} [name] - Optional name to base email on
 * @returns {string}
 */
export function email(name) {
  if (name) {
    const parts = name.toLowerCase().split(" ");
    return `${parts.join(".")}@${randomItem(emailDomains)}`;
  }
  const firstName = randomItem(maleFirstNames.north);
  const lastName = randomItem(lastNames.north);
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${randomItem(emailDomains)}`;
}
