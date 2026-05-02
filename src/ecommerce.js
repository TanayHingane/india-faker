import { products, paymentMethods, orderStatuses } from "./data/misc.js";
import { randomItem, randomInt, randomDigits, random } from "./utils/random.js";

/**
 * Generate a fake e-commerce order.
 * @returns {Object}
 */
export function order() {
  const product = randomItem(products);
  const price = randomInt(product.priceRange[0], product.priceRange[1]);
  const payment = randomItem(paymentMethods);
  const status = randomItem(orderStatuses);
  const orderId = `ORD${randomDigits(10)}`;
  const quantity = randomInt(1, 3);

  return {
    orderId,
    product: product.name,
    quantity,
    price,
    totalAmount: price * quantity,
    payment,
    status,
  };
}

/**
 * Generate a product listing.
 * @returns {Object}
 */
export function product() {
  const p = randomItem(products);
  const price = randomInt(p.priceRange[0], p.priceRange[1]);
  const discount = randomInt(5, 40);
  const mrp = Math.round(price / (1 - discount / 100));
  const sku = `SKU${randomDigits(8)}`;

  return {
    sku,
    name: p.name,
    price,
    mrp,
    discount: `${discount}%`,
    inStock: random() > 0.15,
    rating: parseFloat((3 + Math.random() * 2).toFixed(1)),
    reviews: randomInt(5, 9999),
  };
}
