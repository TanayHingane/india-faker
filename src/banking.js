import { bankData } from "./data/domain.js";
import { person } from "./person.js";
import { upi } from "./person.js";
import { pick, randomInt, randomDigits } from "./utils/random.js";

const accountTypes = ["Savings", "Current", "Salary", "Fixed Deposit", "NRI"];

/**
 * Generate a realistic fake Indian bank account.
 * ⚠️ All data is fake and for testing purposes only.
 * @param {Object} options
 * @param {string} [options.bankName] - Specific bank name
 * @param {string} [options.accountType] - Specific account type
 */
export function bank({ bankName, accountType } = {}) {
  let selectedBank;

  if (bankName) {
    selectedBank = bankData.find((b) =>
      b.name.toLowerCase().includes(bankName.toLowerCase()),
    );
    if (!selectedBank) throw new Error(`Bank "${bankName}" not found.`);
  } else {
    selectedBank = pick(bankData);
  }

  const accountNumber = `XXXX XXXX ${randomDigits(4)}`;
  const rawAccountNumber = randomDigits(12);
  const ifscBranch = randomDigits(6).toString().padStart(6, "0");
  const ifsc = `${selectedBank.ifscPrefix}0${ifscBranch}`;
  const type = accountType || pick(accountTypes);
  const balance = randomInt(1000, 500000);
  const p = person();

  return {
    bankName: selectedBank.name,
    accountHolderName: p.name,
    accountNumber,
    fullAccountNumber: rawAccountNumber,
    ifsc,
    accountType: type,
    balance,
    upiId: upi(p.name),
    branch: `${pick(["Main Branch", "City Branch", "Gandhi Nagar Branch", "Sector 5 Branch", "MG Road Branch"])}`,
  };
}

/**
 * Generate a fake IFSC code.
 * @param {string} [bankName] - Optional bank to use
 */
export function ifsc(bankName) {
  let selectedBank;
  if (bankName) {
    selectedBank =
      bankData.find((b) =>
        b.name.toLowerCase().includes(bankName.toLowerCase()),
      ) || pick(bankData);
  } else {
    selectedBank = pick(bankData);
  }
  return `${selectedBank.ifscPrefix}0${randomDigits(6)}`;
}

/**
 * Generate a fake GST number.
 * Format: 2-digit state code + PAN + 1 digit entity number + Z + check digit
 * ⚠️ NOT real. For testing only.
 */
export function gst() {
  const stateCodes = [
    "27",
    "29",
    "07",
    "33",
    "24",
    "08",
    "09",
    "19",
    "36",
    "32",
  ];
  const stateCode = pick(stateCodes);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const panPart = `${Array.from({ length: 3 }, () => pick(letters.split(""))).join("")}P${pick(letters.split(""))}${randomDigits(4)}${pick(letters.split(""))}`;
  return `${stateCode}${panPart}1Z${randomInt(1, 9)}`;
}
