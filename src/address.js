const {
  states,
  streetTypes,
  streetNames,
  flatTypes,
  getPincodeForState,
} = require("./data/locations");
const { randomItem, randomInt } = require("./utils/random");

function address(options) {
  options = options || {};
  let pool = states;
  if (options.region) pool = states.filter((s) => s.region === options.region);
  if (options.state)
    pool = states.filter(
      (s) => s.name.toLowerCase() === options.state.toLowerCase(),
    );
  const stateObj = randomItem(pool.length ? pool : states);
  const city = randomItem(stateObj.cities);
  const pincode = getPincodeForState(stateObj.name);
  const flatNum = randomItem(flatTypes) + " " + randomInt(1, 999);
  const building = randomItem(streetNames) + " " + randomItem(streetTypes);
  return {
    addressLine: flatNum + ", " + building,
    city,
    state: stateObj.name,
    pincode,
  };
}

function city() {
  return randomItem(randomItem(states).cities);
}
function stateName() {
  return randomItem(states).name;
}
function cityState(options) {
  const a = address(options);
  return { city: a.city, state: a.state };
}
function pincode(sName) {
  return getPincodeForState(sName || randomItem(states).name);
}

module.exports = { address, city, stateName, cityState, pincode };
