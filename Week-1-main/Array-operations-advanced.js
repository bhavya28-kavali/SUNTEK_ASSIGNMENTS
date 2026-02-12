// ================= TASK 1 =================
// Order Cart Overview

const orderList = [
  { id: 501, productTitle: "Laptop", pricePerUnit: 60000, qty: 1, available: true },
  { id: 502, productTitle: "Mouse", pricePerUnit: 800, qty: 2, available: true },
  { id: 503, productTitle: "Keyboard", pricePerUnit: 1500, qty: 1, available: false },
  { id: 504, productTitle: "Monitor", pricePerUnit: 12000, qty: 1, available: true }
];

// filter() available products
const availableItems = orderList.filter(item => item.available);
console.log("Available Items:", availableItems);

// map() → { product, cost }
const itemCostSummary = orderList.map(item => ({
  product: item.productTitle,
  cost: item.pricePerUnit * item.qty
}));
console.log("Item Cost Summary:", itemCostSummary);

// reduce() → total bill
const totalBillAmount = orderList.reduce(
  (sum, item) => sum + item.pricePerUnit * item.qty,
  0
);
console.log("Total Bill:", totalBillAmount);

// find() Mouse
const mouseItem = orderList.find(item => item.productTitle === "Mouse");
console.log("Mouse Item:", mouseItem);

// findIndex() Keyboard
const keyboardPosition = orderList.findIndex(
  item => item.productTitle === "Keyboard"
);
console.log("Keyboard Index:", keyboardPosition);



// ================= TASK 2 =================
// Student Result Tracker

const studentRecords = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// filter() passed students
const passedList = studentRecords.filter(s => s.marks >= 40);
console.log("Passed Students:", passedList);

// map() assign grade
const gradedList = studentRecords.map(s => {
  let grade =
    s.marks >= 90 ? "A" :
    s.marks >= 75 ? "B" :
    s.marks >= 60 ? "C" : "D";
  return { ...s, grade };
});
console.log("Graded Students:", gradedList);

// reduce() average marks
const avgMarks =
  studentRecords.reduce((total, s) => total + s.marks, 0) /
  studentRecords.length;
console.log("Average Marks:", avgMarks);

// find() top scorer
const bestStudent = studentRecords.find(s => s.marks === 92);
console.log("Top Scorer:", bestStudent);

// findIndex() Kiran
const kiranPos = studentRecords.findIndex(s => s.name === "Kiran");
console.log("Kiran Index:", kiranPos);



// ================= TASK 3 =================
// Staff Salary Manager

const staffMembers = [
  { staffId: 301, staffName: "Amit", salary: 45000, team: "IT" },
  { staffId: 302, staffName: "Neha", salary: 60000, team: "HR" },
  { staffId: 303, staffName: "Rahul", salary: 75000, team: "IT" },
  { staffId: 304, staffName: "Pooja", salary: 30000, team: "Sales" }
];

// filter() IT staff
const itStaff = staffMembers.filter(member => member.team === "IT");
console.log("IT Team:", itStaff);

// map() calculate final salary
const updatedPayroll = staffMembers.map(member => ({
  ...member,
  finalSalary: member.salary * 1.1
}));
console.log("Updated Payroll:", updatedPayroll);

// reduce() total salary expense
const totalSalaryExpense = staffMembers.reduce(
  (sum, member) => sum + member.salary,
  0
);
console.log("Total Salary Expense:", totalSalaryExpense);

// find() lowest salary
const lowestSalaryStaff = staffMembers.find(
  member => member.salary === 30000
);
console.log("Lowest Paid Staff:", lowestSalaryStaff);

// findIndex() Neha
const nehaPos = staffMembers.findIndex(
  member => member.staffName === "Neha"
);
console.log("Neha Index:", nehaPos);



// ================= TASK 4 =================
// Movie Library System

const filmList = [
  { id: 11, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 12, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 13, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 14, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// filter() Sci-Fi genre
const sciFiList = filmList.filter(film => film.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiList);

// map() title + rating
const movieLabels = filmList.map(
  film => `${film.title} - Rating: ${film.rating}`
);
console.log("Movie Labels:", movieLabels);

// reduce() average rating
const avgRating =
  filmList.reduce((sum, film) => sum + film.rating, 0) /
  filmList.length;
console.log("Average Rating:", avgRating);

// find() Joker movie
const jokerFilm = filmList.find(film => film.title === "Joker");
console.log("Joker Movie:", jokerFilm);

// findIndex() Avengers
const avengersPos = filmList.findIndex(
  film => film.title === "Avengers"
);
console.log("Avengers Index:", avengersPos);



// ================= TASK 5 =================
// Account Transaction Checker

const accountLogs = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// filter() credit entries
const creditEntries = accountLogs.filter(log => log.type === "credit");
console.log("Credit Transactions:", creditEntries);

// map() extract amounts
const transactionAmounts = accountLogs.map(log => log.amount);
console.log("Transaction Amounts:", transactionAmounts);

// reduce() calculate balance
const currentBalance = accountLogs.reduce(
  (balance, log) =>
    log.type === "credit"
      ? balance + log.amount
      : balance - log.amount,
  0
);
console.log("Final Balance:", currentBalance);

// find() first debit
const firstDebitTxn = accountLogs.find(log => log.type === "debit");
console.log("First Debit:", firstDebitTxn);

// findIndex() amount 10000
const amountPos = accountLogs.findIndex(log => log.amount === 10000);
console.log("Index of 10000:", amountPos);
