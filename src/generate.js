import { person, phone, email } from "./person.js";
import { address, city, stateName, pincode } from "./address.js";
import { student } from "./student.js";
import { order, product } from "./ecommerce.js";
import { bank, ifsc } from "./banking.js";
import { aadhaar, pan, upi } from "./identity.js";

const generatorMap = {
  person,
  phone,
  email,
  address,
  city,
  state: stateName,
  pincode,
  student,
  order,
  product,
  bank,
  ifsc,
  aadhaar,
  pan,
  upi,
};

/**
 * Generate multiple records of a given type.
 * @param {string} type - The generator name (e.g. "person", "student", "order")
 * @param {number} count - How many records to generate
 * @param {Object} [options] - Options to pass to the generator
 * @returns {Array} Array of generated records
 *
 * @example
 * generate("person", 10);
 * generate("student", 5, { region: "south" });
 */
export function generate(type, count = 1, options = {}) {
  const gen = generatorMap[type.toLowerCase()];
  if (!gen) {
    const available = Object.keys(generatorMap).join(", ");
    throw new Error(`Unknown generator type: "${type}". Available types: ${available}`);
  }
  return Array.from({ length: count }, () => gen(options));
}
