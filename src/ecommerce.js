const { products, paymentMethods, orderStatuses } = require("./data/misc");
const {
  randomItem,
  randomInt,
  randomDigits,
  random,
} = require("./utils/random");

function order() {
  const p = randomItem(products);
  const price = randomInt(p.priceRange[0], p.priceRange[1]);
  const qty = randomInt(1, 3);
  return {
    orderId: "ORD" + randomDigits(10),
    product: p.name,
    quantity: qty,
    price,
    totalAmount: price * qty,
    payment: randomItem(paymentMethods),
    status: randomItem(orderStatuses),
  };
}

function product() {
  const p = randomItem(products);
  const price = randomInt(p.priceRange[0], p.priceRange[1]);
  const discount = randomInt(5, 40);
  const mrp = Math.round(price / (1 - discount / 100));
  return {
    sku: "SKU" + randomDigits(8),
    name: p.name,
    price,
    mrp,
    discount: discount + "%",
    inStock: random() > 0.15,
    rating: parseFloat((3 + random() * 2).toFixed(1)),
    reviews: randomInt(5, 9999),
  };
}

module.exports = { order, product };
