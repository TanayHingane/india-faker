/**
 * india-faker
 * Realistic Indian test data generator
 * ⚠️ All generated data is FAKE and for testing/development purposes only.
 */

const { person, phone, email } = require("./src/person");
const {
  address,
  city,
  stateName,
  cityState,
  pincode,
} = require("./src/address");
const { student } = require("./src/student");
const { order, product } = require("./src/ecommerce");
const { bank, ifsc } = require("./src/banking");
const { aadhaar, pan, upi } = require("./src/identity");
const { generate } = require("./src/generate");
const { setSeed, clearSeed } = require("./src/utils/random");

module.exports = {
  person,
  phone,
  email,
  address,
  city,
  stateName,
  cityState,
  pincode,
  student,
  order,
  product,
  bank,
  ifsc,
  aadhaar,
  pan,
  upi,
  generate,
  setSeed,
  clearSeed,
};
