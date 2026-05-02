export const states = [
  { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Thane", "Navi Mumbai", "Amravati"], region: "west" },
  { name: "Karnataka", cities: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi", "Davanagere", "Ballari", "Vijayapura", "Shimoga", "Tumkur"], region: "south" },
  { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Vellore", "Erode", "Thoothukudi", "Dindigul"], region: "south" },
  { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Allahabad", "Ghaziabad", "Noida", "Gorakhpur", "Firozabad"], region: "north" },
  { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Morbi"], region: "west" },
  { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Bhilwara", "Alwar", "Bharatpur", "Sikar"], region: "north" },
  { name: "West Bengal", cities: ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "Malda", "Baharampur", "Habra", "Kharagpur", "Shantipur"], region: "east" },
  { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet"], region: "south" },
  { name: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kakinada", "Rajahmundry", "Tirupati", "Kadapa", "Anantapur"], region: "south" },
  { name: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"], region: "north" },
  { name: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia", "Bihar Sharif", "Arrah", "Begusarai", "Katihar"], region: "east" },
  { name: "Punjab", cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Firozpur", "Hoshiarpur", "Gurdaspur", "Ropar"], region: "north" },
  { name: "Haryana", cities: ["Faridabad", "Gurugram", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat", "Panchkula"], region: "north" },
  { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Malappuram", "Kannur", "Manjeri"], region: "south" },
  { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda"], region: "east" },
];

export const streetTypes = ["Nagar", "Colony", "Sector", "Phase", "Layout", "Extension", "Vihar", "Enclave", "Residency", "Apartments", "CHS", "Society"];
export const streetNames = ["Shanti", "Laxmi", "Ganesh", "Saraswati", "Durga", "Ram", "Krishna", "Shiv", "Hanuman", "Indira", "Gandhi", "Nehru", "Patel", "Subhash", "Tilak", "Ambedkar", "Phule", "Shivaji", "Bose", "Azad"];
export const flatTypes = ["Flat", "Room", "Shop", "Office", "Plot", "Bungalow", "Villa", "Studio", "Penthouse"];

const pincodeRanges = {
  Maharashtra: [400001, 445401],
  Karnataka: [560001, 591317],
  "Tamil Nadu": [600001, 643253],
  "Uttar Pradesh": [201001, 285223],
  Gujarat: [360001, 396590],
  Rajasthan: [301001, 345034],
  "West Bengal": [700001, 743710],
  Telangana: [500001, 509412],
  "Andhra Pradesh": [515001, 535591],
  "Madhya Pradesh": [450001, 488001],
  Bihar: [800001, 855117],
  Punjab: [140001, 160101],
  Haryana: [121001, 136156],
  Kerala: [670001, 695615],
  Odisha: [751001, 770076],
};

export function getPincodeForState(stateName) {
  const range = pincodeRanges[stateName] || [100001, 999999];
  return String(Math.floor(Math.random() * (range[1] - range[0]) + range[0]));
}
