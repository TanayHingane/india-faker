/**
 * india-faker
 * Realistic Indian test data generator
 * ⚠️ All generated data is FAKE and for testing/development purposes only.
 */

// ─── SEEDED RANDOM ────────────────────────────────────────────────────────────
let rng = Math.random;
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function setSeed(s) {
  rng = mulberry32(s);
}
function clearSeed() {
  rng = Math.random;
}
function _rand() {
  return rng();
}
function _int(min, max) {
  return Math.floor(_rand() * (max - min + 1)) + min;
}
function _pick(arr) {
  return arr[Math.floor(_rand() * arr.length)];
}
function _float(min, max, d) {
  d = d || 1;
  return parseFloat((_rand() * (max - min) + min).toFixed(d));
}
function _digits(n) {
  let r = "";
  for (let i = 0; i < n; i++) r += _int(0, 9);
  return r;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const _maleNames = {
  north: [
    "Aarav",
    "Vihaan",
    "Arjun",
    "Rohan",
    "Rahul",
    "Amit",
    "Sanjay",
    "Vikram",
    "Rohit",
    "Nikhil",
    "Karan",
    "Deepak",
    "Ankit",
    "Gaurav",
    "Pankaj",
    "Manish",
    "Suresh",
    "Rajesh",
    "Vivek",
    "Aditya",
  ],
  south: [
    "Arjun",
    "Karthik",
    "Suresh",
    "Ramesh",
    "Venkatesh",
    "Srinivas",
    "Rajesh",
    "Naveen",
    "Praveen",
    "Sunil",
    "Anil",
    "Mahesh",
    "Ganesh",
    "Dinesh",
    "Harish",
    "Girish",
    "Lokesh",
    "Rakesh",
    "Umesh",
    "Naresh",
  ],
  west: [
    "Aarav",
    "Parth",
    "Dev",
    "Raj",
    "Yash",
    "Harsh",
    "Nirav",
    "Dhruv",
    "Jay",
    "Rishi",
    "Atul",
    "Vivek",
    "Pratik",
    "Akash",
    "Sagar",
    "Vishal",
    "Sumit",
    "Sachin",
    "Tejas",
    "Omkar",
    "Tanay",
  ],
  east: [
    "Souvik",
    "Arnab",
    "Debashish",
    "Subhajit",
    "Sayan",
    "Rahul",
    "Ritik",
    "Bikram",
    "Dipankar",
    "Saikat",
    "Anirban",
    "Soumya",
    "Pritam",
    "Ranjit",
    "Kaushik",
    "Abhijit",
    "Tanmoy",
    "Suman",
    "Arijit",
    "Niloy",
  ],
};
const _femaleNames = {
  north: [
    "Ananya",
    "Isha",
    "Priya",
    "Neha",
    "Pooja",
    "Divya",
    "Kajal",
    "Simran",
    "Riya",
    "Nisha",
    "Shivani",
    "Ankita",
    "Swati",
    "Monika",
    "Sonal",
    "Deepika",
    "Aarti",
    "Kavita",
    "Mamta",
    "Rekha",
  ],
  south: [
    "Ananya",
    "Priya",
    "Kavitha",
    "Lakshmi",
    "Meena",
    "Rekha",
    "Sowmya",
    "Deepa",
    "Asha",
    "Usha",
    "Nirmala",
    "Saritha",
    "Anitha",
    "Sunitha",
    "Padma",
    "Hema",
    "Vani",
    "Revathi",
    "Geetha",
    "Shobha",
  ],
  west: [
    "Priya",
    "Neha",
    "Riya",
    "Tanvi",
    "Shreya",
    "Ankita",
    "Pooja",
    "Nidhi",
    "Sneha",
    "Meera",
    "Drashti",
    "Sejal",
    "Hetal",
    "Khushi",
    "Mansi",
    "Riddhi",
    "Siddhi",
    "Vrunda",
    "Rupal",
    "Foram",
  ],
  east: [
    "Priya",
    "Riya",
    "Tiya",
    "Miya",
    "Sonia",
    "Moumita",
    "Puja",
    "Rina",
    "Mina",
    "Tina",
    "Debasmita",
    "Sayani",
    "Sutapa",
    "Barnali",
    "Mousumi",
    "Chandana",
    "Ruma",
    "Sumi",
    "Buli",
    "Kakoli",
  ],
};
const _lastNames = {
  north: [
    "Sharma",
    "Verma",
    "Gupta",
    "Singh",
    "Kumar",
    "Mishra",
    "Pandey",
    "Tiwari",
    "Yadav",
    "Chauhan",
    "Joshi",
    "Dubey",
    "Shukla",
    "Srivastava",
    "Aggarwal",
    "Malhotra",
    "Kapoor",
    "Khanna",
    "Mehta",
    "Bose",
  ],
  south: [
    "Reddy",
    "Rao",
    "Naidu",
    "Iyer",
    "Pillai",
    "Menon",
    "Nair",
    "Krishnan",
    "Subramaniam",
    "Venkataraman",
    "Chakravarthy",
    "Bhattacharya",
    "Murugan",
    "Sundaram",
    "Rajan",
    "Subramanian",
    "Balaji",
    "Natarajan",
    "Annamalai",
    "Palaniswamy",
  ],
  west: [
    "Patel",
    "Shah",
    "Desai",
    "Mehta",
    "Joshi",
    "Patil",
    "Kulkarni",
    "Shinde",
    "Jadhav",
    "Mane",
    "Pawar",
    "Bhosale",
    "Chavan",
    "Gaikwad",
    "Sawant",
    "More",
    "Kadam",
    "Thakur",
    "Wagh",
    "Deshpande",
    "Hingane",
  ],
  east: [
    "Banerjee",
    "Chatterjee",
    "Mukherjee",
    "Das",
    "Dey",
    "Roy",
    "Ghosh",
    "Bose",
    "Sen",
    "Ganguly",
    "Chakraborty",
    "Bhattacharya",
    "Sarkar",
    "Mandal",
    "Pal",
    "Biswas",
    "Mitra",
    "Dutta",
    "Saha",
    "Guha",
  ],
};
const _states = [
  {
    name: "Maharashtra",
    cities: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik",
      "Aurangabad",
      "Solapur",
      "Kolhapur",
      "Thane",
      "Navi Mumbai",
      "Amravati",
    ],
    region: "west",
    pin: [400001, 445401],
  },
  {
    name: "Karnataka",
    cities: [
      "Bengaluru",
      "Mysuru",
      "Hubballi",
      "Mangaluru",
      "Belagavi",
      "Davanagere",
      "Ballari",
      "Vijayapura",
      "Shimoga",
      "Tumkur",
    ],
    region: "south",
    pin: [560001, 591317],
  },
  {
    name: "Tamil Nadu",
    cities: [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Vellore",
      "Erode",
      "Thoothukudi",
      "Dindigul",
    ],
    region: "south",
    pin: [600001, 643253],
  },
  {
    name: "Uttar Pradesh",
    cities: [
      "Lucknow",
      "Kanpur",
      "Agra",
      "Varanasi",
      "Meerut",
      "Allahabad",
      "Ghaziabad",
      "Noida",
      "Gorakhpur",
      "Firozabad",
    ],
    region: "north",
    pin: [201001, 285223],
  },
  {
    name: "Gujarat",
    cities: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Junagadh",
      "Gandhinagar",
      "Anand",
      "Morbi",
    ],
    region: "west",
    pin: [360001, 396590],
  },
  {
    name: "Rajasthan",
    cities: [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
      "Kota",
      "Bikaner",
      "Ajmer",
      "Bhilwara",
      "Alwar",
      "Bharatpur",
      "Sikar",
    ],
    region: "north",
    pin: [301001, 345034],
  },
  {
    name: "West Bengal",
    cities: [
      "Kolkata",
      "Asansol",
      "Siliguri",
      "Durgapur",
      "Bardhaman",
      "Malda",
      "Baharampur",
      "Habra",
      "Kharagpur",
      "Shantipur",
    ],
    region: "east",
    pin: [700001, 743710],
  },
  {
    name: "Telangana",
    cities: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar",
      "Khammam",
      "Ramagundam",
      "Mahbubnagar",
      "Nalgonda",
      "Adilabad",
      "Suryapet",
    ],
    region: "south",
    pin: [500001, 509412],
  },
  {
    name: "Andhra Pradesh",
    cities: [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Kakinada",
      "Rajahmundry",
      "Tirupati",
      "Kadapa",
      "Anantapur",
    ],
    region: "south",
    pin: [515001, 535591],
  },
  {
    name: "Madhya Pradesh",
    cities: [
      "Bhopal",
      "Indore",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Dewas",
      "Satna",
      "Ratlam",
      "Rewa",
    ],
    region: "north",
    pin: [450001, 488001],
  },
  {
    name: "Bihar",
    cities: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Darbhanga",
      "Purnia",
      "Bihar Sharif",
      "Arrah",
      "Begusarai",
      "Katihar",
    ],
    region: "east",
    pin: [800001, 855117],
  },
  {
    name: "Punjab",
    cities: [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "Mohali",
      "Firozpur",
      "Hoshiarpur",
      "Gurdaspur",
      "Ropar",
    ],
    region: "north",
    pin: [140001, 160101],
  },
  {
    name: "Haryana",
    cities: [
      "Faridabad",
      "Gurugram",
      "Panipat",
      "Ambala",
      "Yamunanagar",
      "Rohtak",
      "Hisar",
      "Karnal",
      "Sonipat",
      "Panchkula",
    ],
    region: "north",
    pin: [121001, 136156],
  },
  {
    name: "Kerala",
    cities: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Thrissur",
      "Kollam",
      "Palakkad",
      "Alappuzha",
      "Malappuram",
      "Kannur",
      "Manjeri",
    ],
    region: "south",
    pin: [670001, 695615],
  },
  {
    name: "Odisha",
    cities: [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Brahmapur",
      "Sambalpur",
      "Puri",
      "Balasore",
      "Bhadrak",
      "Baripada",
      "Jharsuguda",
    ],
    region: "east",
    pin: [751001, 770076],
  },
];
const _streetTypes = [
  "Nagar",
  "Colony",
  "Sector",
  "Phase",
  "Layout",
  "Extension",
  "Vihar",
  "Enclave",
  "Residency",
  "Apartments",
  "CHS",
  "Society",
];
const _streetNames = [
  "Shanti",
  "Laxmi",
  "Ganesh",
  "Saraswati",
  "Durga",
  "Ram",
  "Krishna",
  "Shiv",
  "Hanuman",
  "Indira",
  "Gandhi",
  "Nehru",
  "Patel",
  "Subhash",
  "Tilak",
  "Ambedkar",
  "Phule",
  "Shivaji",
  "Bose",
  "Azad",
];
const _flatTypes = [
  "Flat",
  "Room",
  "Shop",
  "Office",
  "Plot",
  "Bungalow",
  "Villa",
  "Studio",
];
const _emailDomains = [
  "gmail.com",
  "yahoo.co.in",
  "hotmail.com",
  "outlook.com",
  "rediffmail.com",
  "ymail.com",
  "protonmail.com",
];
const _colleges = [
  "IIT Bombay",
  "IIT Delhi",
  "IIT Madras",
  "IIT Kanpur",
  "IIT Kharagpur",
  "NIT Trichy",
  "NIT Surathkal",
  "NIT Warangal",
  "NIT Calicut",
  "NIT Rourkela",
  "Pune University",
  "Mumbai University",
  "Delhi University",
  "Calcutta University",
  "Madras University",
  "Osmania University",
  "Anna University",
  "Bangalore University",
  "Jadavpur University",
  "Amity University",
  "VIT Vellore",
  "SRM University",
  "Manipal Institute of Technology",
  "BITS Pilani",
  "Christ University",
  "COEP Pune",
  "VJTI Mumbai",
  "Sardar Patel Institute of Technology",
  "DJ Sanghvi College",
  "K.J. Somaiya",
];
const _courses = [
  "BE",
  "BTech",
  "MCA",
  "BCA",
  "BSc IT",
  "MSc CS",
  "MBA",
  "BMS",
  "BCom",
  "BA",
];
const _branches = [
  "Computer Science",
  "Information Technology",
  "Electronics",
  "Mechanical",
  "Civil",
  "Electrical",
  "Chemical",
  "Instrumentation",
];
const _banks = [
  { name: "State Bank of India", ifscPrefix: "SBIN" },
  { name: "HDFC Bank", ifscPrefix: "HDFC" },
  { name: "ICICI Bank", ifscPrefix: "ICIC" },
  { name: "Axis Bank", ifscPrefix: "UTIB" },
  { name: "Punjab National Bank", ifscPrefix: "PUNB" },
  { name: "Bank of Baroda", ifscPrefix: "BARB" },
  { name: "Canara Bank", ifscPrefix: "CNRB" },
  { name: "Union Bank of India", ifscPrefix: "UBIN" },
  { name: "Kotak Mahindra Bank", ifscPrefix: "KKBK" },
  { name: "IndusInd Bank", ifscPrefix: "INDB" },
  { name: "Yes Bank", ifscPrefix: "YESB" },
  { name: "Federal Bank", ifscPrefix: "FDRL" },
  { name: "South Indian Bank", ifscPrefix: "SIBL" },
  { name: "Karnataka Bank", ifscPrefix: "KARB" },
  { name: "UCO Bank", ifscPrefix: "UCBA" },
];
const _upiHandles = [
  "@okaxis",
  "@ybl",
  "@oksbi",
  "@okhdfcbank",
  "@paytm",
  "@apl",
  "@ibl",
  "@upi",
  "@icici",
  "@kotak",
];
const _products = [
  { name: "Wireless Earbuds", p: [799, 4999] },
  { name: "Smartwatch", p: [1499, 19999] },
  { name: "Phone Case", p: [99, 799] },
  { name: "USB-C Cable", p: [149, 799] },
  { name: "Portable Charger", p: [599, 2999] },
  { name: "Laptop Bag", p: [499, 2499] },
  { name: "Keyboard", p: [499, 5999] },
  { name: "Mouse", p: [299, 3499] },
  { name: "Bluetooth Speaker", p: [799, 7999] },
  { name: "Neck Pillow", p: [299, 1499] },
  { name: "Water Bottle", p: [199, 999] },
  { name: "Running Shoes", p: [999, 6999] },
  { name: "Yoga Mat", p: [399, 2499] },
  { name: "Pressure Cooker", p: [799, 4999] },
  { name: "Air Fryer", p: [2999, 9999] },
  { name: "Ceiling Fan", p: [1499, 5999] },
  { name: "Backpack", p: [599, 3999] },
  { name: "Table Lamp", p: [399, 2499] },
];
const _payments = [
  "UPI",
  "Cash on Delivery",
  "Debit Card",
  "Credit Card",
  "Net Banking",
  "EMI",
  "PhonePe",
  "Google Pay",
  "Paytm",
];
const _statuses = [
  "Pending",
  "Confirmed",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
  "Returned",
];
const _regions = ["north", "south", "west", "east"];

// ─── PERSON ───────────────────────────────────────────────────────────────────
function person(options) {
  options = options || {};
  const region = options.region || _pick(_regions);
  const gender = options.gender || (_rand() > 0.5 ? "male" : "female");
  const first = _pick(
    gender === "male" ? _maleNames[region] : _femaleNames[region],
  );
  const last = _pick(_lastNames[region]);
  const suffix = _int(0, 99) > 90 ? _int(1, 99) : "";
  return {
    name: first + " " + last,
    gender,
    phone: "+91 " + _pick(["9", "8", "7", "6"]) + _digits(9),
    email:
      first.toLowerCase() +
      "." +
      last.toLowerCase() +
      suffix +
      "@" +
      _pick(_emailDomains),
    region,
  };
}

function phone() {
  return "+91 " + _pick(["9", "8", "7", "6"]) + _digits(9);
}

function email(name) {
  if (name)
    return name.toLowerCase().replace(/\s+/g, ".") + "@" + _pick(_emailDomains);
  return (
    _pick(_maleNames.north).toLowerCase() +
    "." +
    _pick(_lastNames.north).toLowerCase() +
    "@" +
    _pick(_emailDomains)
  );
}

// ─── ADDRESS ──────────────────────────────────────────────────────────────────
function address(options) {
  options = options || {};
  let pool = _states;
  if (options.region)
    pool = _states.filter(function (s) {
      return s.region === options.region;
    });
  if (options.state)
    pool = _states.filter(function (s) {
      return s.name.toLowerCase() === options.state.toLowerCase();
    });
  if (!pool.length) pool = _states;
  const s = _pick(pool);
  const pin = s.pin[0] + _int(0, s.pin[1] - s.pin[0]);
  return {
    addressLine:
      _pick(_flatTypes) +
      " " +
      _int(1, 999) +
      ", " +
      _pick(_streetNames) +
      " " +
      _pick(_streetTypes),
    city: _pick(s.cities),
    state: s.name,
    pincode: String(pin),
  };
}

function city() {
  return _pick(_pick(_states).cities);
}
function stateName() {
  return _pick(_states).name;
}
function cityState(options) {
  const a = address(options);
  return { city: a.city, state: a.state };
}
function pincode(sName) {
  const s = sName
    ? _states.find(function (x) {
        return x.name === sName;
      })
    : _pick(_states);
  if (!s) return String(_pick(_states).pin[0]);
  return String(s.pin[0] + _int(0, s.pin[1] - s.pin[0]));
}

// ─── IDENTITY ─────────────────────────────────────────────────────────────────
function aadhaar() {
  return _digits(4) + " " + _digits(4) + " " + _digits(4);
}

function pan() {
  const L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const T = ["P", "C", "H", "F", "A", "T", "B", "L", "J", "G"];
  return (
    _pick(L) + _pick(L) + _pick(L) + _pick(T) + _pick(L) + _digits(4) + _pick(L)
  );
}

function upi(name) {
  const h = _pick(_upiHandles);
  if (name) return name.toLowerCase().replace(/\s+/g, ".") + h;
  const first = [
    "rahul",
    "priya",
    "amit",
    "neha",
    "raj",
    "anjali",
    "suresh",
    "pooja",
  ];
  const last = [
    "verma",
    "patel",
    "sharma",
    "gupta",
    "singh",
    "mehta",
    "joshi",
    "kumar",
  ];
  const t = _int(0, 2);
  if (t === 0) return _pick(first) + "." + _pick(last) + h;
  if (t === 1) return "pay" + _digits(4) + h;
  return "user" + _digits(6) + h;
}

// ─── STUDENT ──────────────────────────────────────────────────────────────────
function student(options) {
  options = options || {};
  const region = options.region || _pick(_regions);
  const gender = options.gender || (_rand() > 0.5 ? "male" : "female");
  const first = _pick(
    gender === "male" ? _maleNames[region] : _femaleNames[region],
  );
  const last = _pick(_lastNames[region]);
  const course = _pick(_courses);
  const branch = _pick(_branches);
  const college = _pick(_colleges);
  const year = _int(1, 4);
  const pfx = { 1: "FY", 2: "SY", 3: "TY", 4: "LY" }[year];
  const abbr = branch
    .split(" ")
    .map(function (w) {
      return w[0];
    })
    .join("")
    .slice(0, 3)
    .toUpperCase();
  const pct = _float(40, 98, 1);
  return {
    name: first + " " + last,
    gender,
    rollNo: pfx + abbr + _digits(3),
    course,
    branch,
    college,
    year: "Year " + year,
    percentage: pct,
    cgpa: parseFloat((pct / 9.5).toFixed(2)),
  };
}

// ─── ECOMMERCE ────────────────────────────────────────────────────────────────
function order() {
  const p = _pick(_products);
  const price = _int(p.p[0], p.p[1]);
  const qty = _int(1, 3);
  return {
    orderId: "ORD" + _digits(10),
    product: p.name,
    quantity: qty,
    price,
    totalAmount: price * qty,
    payment: _pick(_payments),
    status: _pick(_statuses),
  };
}

function product() {
  const p = _pick(_products);
  const price = _int(p.p[0], p.p[1]);
  const discount = _int(5, 40);
  const mrp = Math.round(price / (1 - discount / 100));
  return {
    sku: "SKU" + _digits(8),
    name: p.name,
    price,
    mrp,
    discount: discount + "%",
    inStock: _rand() > 0.15,
    rating: parseFloat((3 + _rand() * 2).toFixed(1)),
    reviews: _int(5, 9999),
  };
}

// ─── BANKING ──────────────────────────────────────────────────────────────────
function bank() {
  const b = _pick(_banks);
  const acc = _digits(_int(9, 14));
  return {
    bankName: b.name,
    accountNumber: "X".repeat(acc.length - 4) + acc.slice(-4),
    ifsc: b.ifscPrefix + "0" + _digits(6),
    accountType: _pick(["Savings", "Current", "Salary"]),
    branch: "Main Branch",
  };
}

function ifsc(bankName) {
  let b = bankName
    ? _banks.find(function (x) {
        return x.name.toLowerCase().includes(bankName.toLowerCase());
      })
    : null;
  b = b || _pick(_banks);
  return b.ifscPrefix + "0" + _digits(6);
}

// ─── BULK GENERATOR ───────────────────────────────────────────────────────────
var _map = {
  person: person,
  phone: phone,
  email: email,
  address: address,
  city: city,
  state: stateName,
  pincode: pincode,
  student: student,
  order: order,
  product: product,
  bank: bank,
  ifsc: ifsc,
  aadhaar: aadhaar,
  pan: pan,
  upi: upi,
};

function generate(type, count, options) {
  count = count || 1;
  options = options || {};
  var gen = _map[type.toLowerCase()];
  if (!gen)
    throw new Error(
      'Unknown type: "' +
        type +
        '". Available: ' +
        Object.keys(_map).join(", "),
    );
  return Array.from({ length: count }, function () {
    return gen(options);
  });
}

// ─── EXPORTS ──────────────────────────────────────────────────────────────────
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
