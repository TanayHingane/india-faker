const { randomDigits, randomItem, randomInt } = require("./utils/random");

function aadhaar() {
  return randomDigits(4) + " " + randomDigits(4) + " " + randomDigits(4);
}

function pan() {
  const L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const types = ["P", "C", "H", "F", "A", "T", "B", "L", "J", "G"];
  return (
    randomItem(L) +
    randomItem(L) +
    randomItem(L) +
    randomItem(types) +
    randomItem(L) +
    randomDigits(4) +
    randomItem(L)
  );
}

function upi(name) {
  const handles = [
    "@okaxis",
    "@ybl",
    "@oksbi",
    "@okhdfcbank",
    "@paytm",
    "@apl",
    "@ibl",
    "@upi",
    "@icici",
    "@kotak",
  ];
  const handle = randomItem(handles);
  if (name) return name.toLowerCase().replace(/\s+/g, ".") + handle;
  const first = [
    "rahul",
    "priya",
    "amit",
    "neha",
    "raj",
    "anjali",
    "suresh",
    "pooja",
  ];
  const last = [
    "verma",
    "patel",
    "sharma",
    "gupta",
    "singh",
    "mehta",
    "joshi",
    "kumar",
  ];
  const type = randomInt(0, 2);
  if (type === 0) return randomItem(first) + "." + randomItem(last) + handle;
  if (type === 1) return "pay" + randomDigits(4) + handle;
  return "user" + randomDigits(6) + handle;
}

module.exports = { aadhaar, pan, upi };
