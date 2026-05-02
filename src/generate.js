const { person, phone, email } = require("./person");
const { address, city, stateName, pincode } = require("./address");
const { student } = require("./student");
const { order, product } = require("./ecommerce");
const { bank, ifsc } = require("./banking");
const { aadhaar, pan, upi } = require("./identity");

const map = {
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

function generate(type, count, options) {
  count = count || 1;
  options = options || {};
  const gen = map[type.toLowerCase()];
  if (!gen)
    throw new Error(
      'Unknown type: "' + type + '". Available: ' + Object.keys(map).join(", "),
    );
  return Array.from({ length: count }, () => gen(options));
}

module.exports = { generate };
