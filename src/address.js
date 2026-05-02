import {
  states,
  streetTypes,
  streetNames,
  flatTypes,
  getPincodeForState,
} from "./data/locations.js";
import { randomItem, randomInt } from "./utils/random.js";

/**
 * Generate a realistic Indian address.
 * @param {Object} options
 * @param {'north'|'south'|'west'|'east'} [options.region] - Filter by region
 * @param {string} [options.state] - Force a specific state name
 * @returns {Object} Address object
 */
export function address(options = {}) {
  let statePool = states;

  if (options.region) {
    statePool = states.filter((s) => s.region === options.region);
  }
  if (options.state) {
    statePool = states.filter(
      (s) => s.name.toLowerCase() === options.state.toLowerCase(),
    );
  }

  const stateObj = randomItem(statePool.length ? statePool : states);
  const city = randomItem(stateObj.cities);
  const pincode = getPincodeForState(stateObj.name);

  const flatNum = `${randomItem(flatTypes)} ${randomInt(1, 999)}`;
  const building = `${randomItem(streetNames)} ${randomItem(streetTypes)}`;
  const addressLine = `${flatNum}, ${building}`;

  return {
    addressLine,
    city,
    state: stateObj.name,
    pincode,
  };
}

/**
 * Generate only a city and state pair.
 */
export function cityState(options = {}) {
  const { city, state } = address(options);
  return { city, state };
}

/**
 * Get a random Indian state name.
 */
export function stateName() {
  return randomItem(states).name;
}

/**
 * Get a random Indian city.
 */
export function city() {
  const s = randomItem(states);
  return randomItem(s.cities);
}

/**
 * Generate a random Indian PIN code.
 */
export function pincode(stateName) {
  return getPincodeForState(stateName || randomItem(states).name);
}
