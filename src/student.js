import { maleFirstNames, femaleFirstNames, lastNames } from "./data/names.js";
import { colleges, courses, branches } from "./data/misc.js";
import {
  randomItem,
  randomInt,
  randomFloat,
  randomDigits,
  random,
} from "./utils/random.js";

const regions = ["north", "south", "west", "east"];

/**
 * Generate a realistic Indian student profile.
 * @param {Object} options
 * @param {'male'|'female'} [options.gender]
 * @param {'north'|'south'|'west'|'east'} [options.region]
 * @returns {Object}
 */
export function student(options = {}) {
  const region = options.region || randomItem(regions);
  const gender = options.gender || (random() > 0.5 ? "male" : "female");

  const firstPool =
    gender === "male" ? maleFirstNames[region] : femaleFirstNames[region];
  const firstName = randomItem(firstPool);
  const lastName = randomItem(lastNames[region]);
  const name = `${firstName} ${lastName}`;

  const course = randomItem(courses);
  const branch = randomItem(branches);
  const college = randomItem(colleges);
  const year = randomInt(1, 4);
  const yearPrefixes = { 1: "FY", 2: "SY", 3: "TY", 4: "LY" };
  const branchAbbr = branch
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  const rollNo = `${yearPrefixes[year]}${branchAbbr}${randomDigits(3)}`;

  const percentage = randomFloat(40, 98, 1);
  const cgpa = parseFloat((percentage / 9.5).toFixed(2));

  return {
    name,
    gender,
    rollNo,
    course,
    branch,
    college,
    year: `Year ${year}`,
    percentage,
    cgpa,
  };
}
