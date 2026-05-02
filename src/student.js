const { maleFirstNames, femaleFirstNames, lastNames } = require("./data/names");
const { colleges, courses, branches } = require("./data/misc");
const {
  randomItem,
  randomInt,
  randomFloat,
  randomDigits,
  random,
} = require("./utils/random");

const regions = ["north", "south", "west", "east"];

function student(options) {
  options = options || {};
  const region = options.region || randomItem(regions);
  const gender = options.gender || (random() > 0.5 ? "male" : "female");
  const firstPool =
    gender === "male" ? maleFirstNames[region] : femaleFirstNames[region];
  const firstName = randomItem(firstPool);
  const lastName = randomItem(lastNames[region]);
  const course = randomItem(courses);
  const branch = randomItem(branches);
  const college = randomItem(colleges);
  const year = randomInt(1, 4);
  const yearPfx = { 1: "FY", 2: "SY", 3: "TY", 4: "LY" };
  const branchAbbr = branch
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  const rollNo = yearPfx[year] + branchAbbr + randomDigits(3);
  const percentage = randomFloat(40, 98, 1);
  const cgpa = parseFloat((percentage / 9.5).toFixed(2));
  return {
    name: firstName + " " + lastName,
    gender,
    rollNo,
    course,
    branch,
    college,
    year: "Year " + year,
    percentage,
    cgpa,
  };
}

module.exports = { student };
