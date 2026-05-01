# 🇮🇳 india-faker

> Realistic Indian test data generator for developers.

[![npm version](https://badge.fury.io/js/india-faker.svg)](https://www.npmjs.com/package/india-faker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Most popular libraries like `Faker.js` or `Chance.js` generate Western-style data that doesn't match Indian formats. `india-faker` solves this by generating **realistic, region-aware Indian test data** — names, addresses, UPI IDs, Aadhaar-like numbers, student records, banking data, e-commerce orders, and more.

> ⚠️ **Disclaimer**: All generated data is completely fake and intended for development/testing purposes **only**. Do not use for any real-world identity, financial, or verification purposes.

---

## 🚀 Quick Start

```bash
npm install india-faker
```

```js
import { person, student, address, bank, order, upi } from "india-faker";

console.log(person());
// { name: 'Aarav Sharma', gender: 'male', phone: '+91 9876543210', email: 'aarav.sharma@gmail.com', age: 27, ... }

console.log(student());
// { name: 'Priya Patil', rollNo: 'TYCS102', college: 'Pune University', percentage: 78.4, ... }
```

---

## ✨ Features

| Module            | Functions                                                       |
| ----------------- | --------------------------------------------------------------- |
| 👤 **Person**     | `person()`, `phone()`, `email()`, `aadhaar()`, `pan()`, `upi()` |
| 🏠 **Address**    | `address()`, `listStates()`, `citiesInState()`                  |
| 🎓 **Student**    | `student()`, `students()`                                       |
| 🏦 **Banking**    | `bank()`, `ifsc()`, `gst()`                                     |
| 🛒 **E-commerce** | `order()`, `orders()`                                           |
| 📦 **Bulk**       | `generate()`, `generateJSON()`, `generateCSV()`                 |
| 🌱 **Seed**       | `setSeed()`, `clearSeed()`, `getSeed()`                         |

---

## 📚 API Reference

### 👤 Person

```js
import { person, phone, email, aadhaar, pan, upi } from "india-faker";

// Full person record
person();
// {
//   name: "Aarav Sharma",
//   firstName: "Aarav",
//   lastName: "Sharma",
//   gender: "male",
//   region: "north",
//   phone: "+91 9876543210",
//   email: "aarav.sharma@gmail.com",
//   age: 27
// }

// With options
person({ gender: "female", region: "south" });

// Individual fields
phone(); // "+91 8765432109"
email("Priya", "Patel"); // "priya.patel@gmail.com"
aadhaar(); // "4821 7643 9210"  ⚠️ FAKE
pan(); // "ABCPD1234E"      ⚠️ FAKE
upi(); // "rahul.verma@okhdfcbank"
```

**Options for `person()`:**

| Option   | Values                                         | Default |
| -------- | ---------------------------------------------- | ------- |
| `gender` | `"male"` \| `"female"`                         | random  |
| `region` | `"north"` \| `"south"` \| `"east"` \| `"west"` | random  |

---

### 🏠 Address

```js
import { address, listStates, citiesInState } from "india-faker";

address();
// {
//   addressLine1: "Flat 302, Shree Residency",
//   addressLine2: "MG Marg",
//   landmark: "Near Bus Stand",
//   city: "Pune",
//   state: "Maharashtra",
//   pincode: "411038",
//   country: "India",
//   full: "Flat 302, Shree Residency, MG Marg, Pune, Maharashtra - 411038"
// }

// Filter by state
address({ state: "Karnataka" });

// Utilities
listStates(); // ["Maharashtra", "Karnataka", ...]
citiesInState("Gujarat"); // ["Ahmedabad", "Surat", ...]
```

---

### 🎓 Student

```js
import { student, students } from "india-faker";

student();
// {
//   name: "Priya Patil",
//   gender: "female",
//   rollNo: "TYCS102",
//   prn: "21045678",
//   college: "Pune University",
//   department: "Computer Science",
//   year: "TY",
//   division: "B",
//   percentage: 78.4,
//   cgpa: 7.89,
//   grade: "A",
//   gradeLabel: "Very Good",
//   email: "priya.patil@gmail.com",
//   phone: "+91 9876543210"
// }

// With options
student({ gender: "male", region: "south", department: "Computer Science" });

// Bulk
students(50); // Array of 50 students
```

---

### 🏦 Banking

```js
import { bank, ifsc, gst } from "india-faker";

bank();
// {
//   bankName: "HDFC Bank",
//   accountHolderName: "Rahul Mehta",
//   accountNumber: "XXXX XXXX 1234",
//   fullAccountNumber: "482176439210",
//   ifsc: "HDFC0001234",
//   accountType: "Savings",
//   balance: 52450,
//   upiId: "rahul.mehta@okhdfcbank",
//   branch: "City Branch"
// }

bank({ bankName: "SBI" }); // Filter by bank
ifsc("HDFC"); // "HDFC0001234"
gst(); // "27ABCPD1234E1Z5"  ⚠️ FAKE
```

---

### 🛒 E-commerce

```js
import { order, orders } from "india-faker";

order();
// {
//   orderId: "OD123456789",
//   product: "Bluetooth Earbuds",
//   category: "Electronics",
//   quantity: 1,
//   pricePerUnit: 1499,
//   discount: 200,
//   deliveryCharge: 0,
//   total: 1299,
//   payment: "UPI",
//   status: "Delivered",
//   courier: "Blue Dart",
//   trackingId: "TRK123456789",
//   customer: "Arjun Reddy",
//   phone: "+91 9876543210",
//   deliveryAddress: "...",
//   orderDate: "2024-01-15",
//   estimatedDelivery: "2024-01-20"
// }

// Force specific status
order({ status: "Delivered" });

// Bulk
orders(100);
```

---

### 📦 Bulk Generation

```js
import {
  generate,
  generateJSON,
  generateCSV,
  person,
  student,
} from "india-faker";

// Array of records
generate(person, 100);

// JSON string
generateJSON(student, 50);

// CSV string (ready to save as .csv)
generateCSV(person, 200);
```

---

### 🌱 Seed Support

```js
import { setSeed, clearSeed, person } from "india-faker";

// Reproducible data (same seed = same output)
setSeed(42);
console.log(person()); // Always the same with seed 42

// Back to random
clearSeed();
console.log(person()); // Random again
```

---

## 🗺️ Regional Support

All regions of India are supported for name generation:

| Region  | States Covered                           | Sample Names               |
| ------- | ---------------------------------------- | -------------------------- |
| `north` | UP, Delhi, Punjab, Haryana, Rajasthan    | Aarav Sharma, Priya Singh  |
| `south` | Tamil Nadu, Karnataka, Telangana, Kerala | Karthik Iyer, Ananya Reddy |
| `west`  | Maharashtra, Gujarat                     | Parth Patel, Isha Desai    |
| `east`  | West Bengal, Odisha                      | Arnab Banerjee, Arpita Das |

---

## 🚀 Roadmap

- [x] Phase 1: person, address, student, bulk generator
- [x] Phase 2: UPI, banking, e-commerce
- [ ] Phase 3: Regional filters for all generators
- [ ] Phase 4: CLI tool — `npx india-faker generate person 100`
- [ ] Phase 5: TypeScript definitions

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or PR on GitHub.

Want to add more:

- 🏙️ More cities and PIN codes
- 👤 More regional names
- 🏢 Company/startup data
- 🏥 Hospital/medical data

---

## ⚠️ Legal & Ethical Notice

- ❌ Do NOT use generated Aadhaar/PAN/bank numbers for any real purpose
- ✅ All data is clearly fake — for development and testing ONLY
- ✅ No real identity logic is implemented
- ✅ Safe for demos, UI testing, unit tests, hackathons

---

## 📄 License

MIT © india-faker contributors
