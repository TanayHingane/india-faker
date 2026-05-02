/**
 * india-faker
 * Realistic Indian test data generator
 * ⚠️ All generated data is FAKE and for testing/development purposes only.
 */

export { person, phone, email } from "./src/person.js";
export { address, city, stateName, cityState, pincode } from "./src/address.js";
export { student } from "./src/student.js";
export { order, product } from "./src/ecommerce.js";
export { bank, ifsc } from "./src/banking.js";
export { aadhaar, pan, upi } from "./src/identity.js";
export { generate } from "./src/generate.js";
export { setSeed, clearSeed } from "./src/utils/random.js";
