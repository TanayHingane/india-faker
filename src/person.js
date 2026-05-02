const { maleFirstNames, femaleFirstNames, lastNames } = require("./data/names");
const { emailDomains } = require("./data/misc");
const {
  randomItem,
  randomInt,
  randomDigits,
  random,
} = require("./utils/random");

const regions = ["north", "south", "west", "east"];

function person(options) {
  options = options || {};
  const region = options.region || randomItem(regions);
  const gender = options.gender || (random() > 0.5 ? "male" : "female");
  const firstPool =
    gender === "male" ? maleFirstNames[region] : femaleFirstNames[region];
  const firstName = randomItem(firstPool);
  const lastName = randomItem(lastNames[region]);
  const name = firstName + " " + lastName;
  const phonePrefix = randomItem(["9", "8", "7", "6"]);
  const ph = "+91 " + phonePrefix + randomDigits(9);
  const emailSuffix = randomInt(0, 99) > 90 ? randomInt(1, 99) : "";
  const em =
    firstName.toLowerCase() +
    "." +
    lastName.toLowerCase() +
    emailSuffix +
    "@" +
    randomItem(emailDomains);
  return { name, gender, phone: ph, email: em, region };
}

function phone() {
  const { randomItem, randomDigits } = require("./utils/random");
  const prefix = randomItem(["9", "8", "7", "6"]);
  return "+91 " + prefix + randomDigits(9);
}

function email(name) {
  if (name) {
    const parts = name.toLowerCase().split(" ");
    return parts.join(".") + "@" + randomItem(emailDomains);
  }
  const firstName = randomItem(maleFirstNames.north);
  const lastName = randomItem(lastNames.north);
  return (
    firstName.toLowerCase() +
    "." +
    lastName.toLowerCase() +
    "@" +
    randomItem(emailDomains)
  );
}

module.exports = { person, phone, email };
