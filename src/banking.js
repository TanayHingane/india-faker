const { banks } = require("./data/misc");
const { randomItem, randomInt, randomDigits } = require("./utils/random");

function bank() {
  const b = randomItem(banks);
  const branchCode = randomDigits(6);
  const ifscCode = b.ifscPrefix + "0" + branchCode;
  const accLen = randomInt(9, 14);
  const acc = randomDigits(accLen);
  const masked = "X".repeat(acc.length - 4) + acc.slice(-4);
  return {
    bankName: b.name,
    accountNumber: masked,
    ifsc: ifscCode,
    accountType: randomItem(["Savings", "Current", "Salary"]),
    branch: "Main Branch",
  };
}

function ifsc(bankName) {
  let b;
  if (bankName)
    b = banks.find((x) =>
      x.name.toLowerCase().includes(bankName.toLowerCase()),
    );
  b = b || randomItem(banks);
  return b.ifscPrefix + "0" + randomDigits(6);
}

module.exports = { bank, ifsc };
