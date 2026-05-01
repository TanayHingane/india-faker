import {
  products,
  orderStatuses,
  paymentMethods,
  couriers,
} from "./data/domain.js";
import { person } from "./person.js";
import { address } from "./address.js";
import { pick, randomInt } from "./utils/random.js";

const orderIdPrefixes = ["OD", "FK", "AM", "MN", "AJ"];

function generateOrderId() {
  const prefix = pick(orderIdPrefixes);
  const timestamp = Date.now().toString().slice(-8);
  return `${prefix}${timestamp}${randomInt(10, 99)}`;
}

function randomPastDate(daysBack = 30) {
  const d = new Date();
  d.setDate(d.getDate() - randomInt(0, daysBack));
  return d.toISOString().split("T")[0];
}

/**
 * Generate a fake e-commerce order.
 * @param {Object} options
 * @param {string} [options.status] - Force a specific status
 * @param {string} [options.paymentMethod] - Force payment method
 */
export function order({ status, paymentMethod } = {}) {
  const product = pick(products);
  const price = randomInt(product.priceRange[0], product.priceRange[1]);
  const qty = randomInt(1, 3);
  const discount = randomInt(0, Math.floor(price * 0.3));
  const deliveryCharge = price > 500 ? 0 : 49;
  const total = price * qty - discount + deliveryCharge;
  const selectedStatus = status || pick(orderStatuses);
  const p = person();
  const addr = address();

  let deliveryDate = null;
  if (selectedStatus === "Delivered") {
    deliveryDate = randomPastDate(10);
  } else if (
    selectedStatus === "Shipped" ||
    selectedStatus === "Out for Delivery"
  ) {
    const future = new Date();
    future.setDate(future.getDate() + randomInt(1, 5));
    deliveryDate = future.toISOString().split("T")[0];
  }

  return {
    orderId: generateOrderId(),
    product: product.name,
    category: product.category,
    quantity: qty,
    pricePerUnit: price,
    discount,
    deliveryCharge,
    total,
    payment: paymentMethod || pick(paymentMethods),
    status: selectedStatus,
    courier:
      selectedStatus !== "Ordered" && selectedStatus !== "Confirmed"
        ? pick(couriers)
        : null,
    trackingId:
      selectedStatus !== "Ordered"
        ? `TRK${randomInt(100000000, 999999999)}`
        : null,
    customer: p.name,
    phone: p.phone,
    deliveryAddress: addr.full,
    orderDate: randomPastDate(30),
    estimatedDelivery: deliveryDate,
  };
}

/**
 * Generate multiple orders.
 * @param {number} count
 * @param {Object} options
 */
export function orders(count = 5, options = {}) {
  return Array.from({ length: count }, () => order(options));
}
