import { banks } from "./data/misc.js";
import { randomItem, randomInt, randomDigits } from "./utils/random.js";

/**
 * Generate fake Indian bank account details.
 * ⚠️ All data is fake and for testing purposes only.
 * @returns {Object}
 */
export function bank() {
  const bankObj = randomItem(banks);
  const branchCode = randomDigits(6);
  const ifsc = `${bankObj.ifscPrefix}0${branchCode}`;

  const accLength = randomInt(9, 14);
  const accountNumber = randomDigits(accLength);
  const maskedAccount =
    "X".repeat(accountNumber.length - 4) + accountNumber.slice(-4);

  return {
    bankName: bankObj.name,
    accountNumber: maskedAccount,
    ifsc,
    accountType: randomItem(["Savings", "Current", "Salary"]),
    branch: `Main Branch`,
  };
}

/**
 * Generate a random IFSC code.
 * @param {string} [bankName] - Optional: filter by bank name
 * @returns {string}
 */
export function ifsc(bankName) {
  let bankObj;
  if (bankName) {
    bankObj = banks.find((b) =>
      b.name.toLowerCase().includes(bankName.toLowerCase()),
    );
  }
  bankObj = bankObj || randomItem(banks);

  const branchCode = randomDigits(6);
  return `${bankObj.ifscPrefix}0${branchCode}`;
}
