import { colleges, departments } from "./data/domain.js";
import { person } from "./person.js";
import { pick, randomInt, randomFloat } from "./utils/random.js";

const years = ["FY", "SY", "TY", "Final Year"];
const divisions = ["A", "B", "C", "D"];
const gradeMap = [
  { min: 90, grade: "O", label: "Outstanding" },
  { min: 80, grade: "A+", label: "Excellent" },
  { min: 70, grade: "A", label: "Very Good" },
  { min: 60, grade: "B+", label: "Good" },
  { min: 50, grade: "B", label: "Above Average" },
  { min: 40, grade: "C", label: "Average" },
  { min: 0, grade: "F", label: "Fail" },
];

function getGrade(percentage) {
  return (
    gradeMap.find((g) => percentage >= g.min) || gradeMap[gradeMap.length - 1]
  );
}

/**
 * Generate a realistic Indian student record.
 * @param {Object} options
 * @param {string} [options.gender] - 'male' | 'female'
 * @param {string} [options.region] - 'north' | 'south' | 'east' | 'west'
 * @param {string} [options.college] - Specific college name
 * @param {string} [options.department] - Specific department
 */
export function student({ gender, region, college, department } = {}) {
  const p = person({ gender, region });
  const selectedCollege = college || pick(colleges);
  const selectedDept = department || pick(departments);
  const year = pick(years);
  const div = pick(divisions);
  const rollNo = `${year.slice(0, 2).toUpperCase()}${selectedDept.slice(0, 2).toUpperCase()}${randomInt(100, 999)}`;
  const percentage = randomFloat(35, 98, 1);
  const { grade, label } = getGrade(percentage);
  const cgpa = parseFloat(
    (percentage / 10 + randomFloat(-0.2, 0.2)).toFixed(2),
  ).toFixed(2);
  const clampedCgpa = Math.min(10, Math.max(0, parseFloat(cgpa)));

  return {
    name: p.name,
    gender: p.gender,
    rollNo,
    prn: `${randomInt(20, 24)}${randomInt(10000, 99999)}`,
    college: selectedCollege,
    department: selectedDept,
    year,
    division: div,
    percentage,
    cgpa: clampedCgpa,
    grade,
    gradeLabel: label,
    email: p.email,
    phone: p.phone,
  };
}

/**
 * Generate multiple student records.
 * @param {number} count
 * @param {Object} options
 */
export function students(count = 5, options = {}) {
  return Array.from({ length: count }, () => student(options));
}
