/**
 * india-faker
 * Realistic Indian test data generator for developers.
 * ⚠️ All generated data is fake and for testing/development purposes only.
 *
 * @version 1.0.0
 * @license MIT
 */

// Core generators
export { person, phone, email, aadhaar, pan, upi } from "./src/person.js";
export { address, listStates, citiesInState } from "./src/address.js";
export { student, students } from "./src/student.js";
export { bank, ifsc, gst } from "./src/banking.js";
export { order, orders } from "./src/ecommerce.js";

// Bulk & utilities
export { generate, generateJSON, generateCSV } from "./src/bulk.js";
export { setSeed, clearSeed, getSeed } from "./src/utils/random.js";

// Data exports (for custom use)
export { stateData, listStates as states } from "./src/address.js";
