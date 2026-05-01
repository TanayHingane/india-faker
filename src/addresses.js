import {
  stateData,
  streetTypes,
  societyPrefixes,
  societySuffixes,
  streetNames,
  flatTypes,
} from "./data/address.js";
import { pick, randomInt, randomDigits } from "./utils/random.js";

/**
 * Generate a realistic Indian address.
 * @param {Object} options
 * @param {string} [options.state] - Specific state name to use
 */
export function address({ state } = {}) {
  let stateInfo;

  if (state) {
    stateInfo = stateData.find(
      (s) => s.state.toLowerCase() === state.toLowerCase(),
    );
    if (!stateInfo)
      throw new Error(`State "${state}" not found. Check available states.`);
  } else {
    stateInfo = pick(stateData);
  }

  const cityIndex = randomInt(0, stateInfo.cities.length - 1);
  const city = stateInfo.cities[cityIndex];
  const pinPrefix = stateInfo.pinPrefix[cityIndex];
  const pincode =
    `${pinPrefix}${randomDigits(3 - (pinPrefix.length - 3))}`.padEnd(
      6,
      randomDigits(1),
    );

  // Generate realistic pincode
  const fullPincode =
    pinPrefix.length >= 3
      ? `${pinPrefix}${randomDigits(6 - pinPrefix.length)}`
      : `${pinPrefix}${randomDigits(3)}`;

  const societyName = `${pick(societyPrefixes)} ${pick(societySuffixes)}`;
  const flatNo = `${pick(flatTypes)} ${randomInt(1, 999)}, ${societyName}`;
  const streetName = `${pick(streetNames)} ${pick(streetTypes)}`;
  const landmark = `Near ${pick(["Main Market", "Bus Stand", "Railway Station", "School", "Temple", "Hospital", "Park", "Police Station"])}`;

  return {
    addressLine1: flatNo,
    addressLine2: streetName,
    landmark,
    city,
    state: stateInfo.state,
    pincode: fullPincode.slice(0, 6),
    country: "India",
    full: `${flatNo}, ${streetName}, ${city}, ${stateInfo.state} - ${fullPincode.slice(0, 6)}`,
  };
}

/**
 * Returns all available states.
 */
export function listStates() {
  return stateData.map((s) => s.state);
}

/**
 * Returns cities for a given state.
 * @param {string} stateName
 */
export function citiesInState(stateName) {
  const stateInfo = stateData.find(
    (s) => s.state.toLowerCase() === stateName.toLowerCase(),
  );
  if (!stateInfo) return [];
  return stateInfo.cities;
}
