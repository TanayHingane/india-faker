/**
 * Generate an array of fake data for a given generator function.
 * @param {Function} generatorFn - A generator function (e.g., person, student)
 * @param {number} count - Number of records to generate
 * @param {Object} options - Options passed to each generator call
 * @returns {Array}
 */
export function generate(generatorFn, count = 10, options = {}) {
  if (typeof generatorFn !== "function") {
    throw new TypeError(
      "First argument must be a generator function from india-faker.",
    );
  }
  if (count < 1 || count > 10000) {
    throw new RangeError("Count must be between 1 and 10,000.");
  }
  return Array.from({ length: count }, () => generatorFn(options));
}

/**
 * Generate data and export as JSON string.
 * @param {Function} generatorFn
 * @param {number} count
 * @param {Object} options
 */
export function generateJSON(generatorFn, count = 10, options = {}) {
  return JSON.stringify(generate(generatorFn, count, options), null, 2);
}

/**
 * Generate data as a simple flat CSV string.
 * @param {Function} generatorFn
 * @param {number} count
 * @param {Object} options
 */
export function generateCSV(generatorFn, count = 10, options = {}) {
  const data = generate(generatorFn, count, options);
  if (!data.length) return "";

  const flatten = (obj, prefix = "") =>
    Object.keys(obj).reduce((acc, key) => {
      const val = obj[key];
      const newKey = prefix ? `${prefix}_${key}` : key;
      if (val !== null && typeof val === "object" && !Array.isArray(val)) {
        Object.assign(acc, flatten(val, newKey));
      } else {
        acc[newKey] = val;
      }
      return acc;
    }, {});

  const flat = data.map(flatten);
  const headers = Object.keys(flat[0]);
  const rows = flat.map((row) =>
    headers
      .map((h) => {
        const val = row[h] ?? "";
        return typeof val === "string" && val.includes(",") ? `"${val}"` : val;
      })
      .join(","),
  );
  return [headers.join(","), ...rows].join("\n");
}
