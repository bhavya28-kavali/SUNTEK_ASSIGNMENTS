// ================= ASSIGNMENT 1 =================
// Weekly Weather Analysis

const dailyTemps = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures greater than 35
let highTemps = dailyTemps.filter(value => value > 35);
console.log("High Temperatures:", highTemps);

// 2. map() convert Celsius to Fahrenheit
let fahrenheitTemps = dailyTemps.map(value => (value * 9 / 5) + 32);
console.log("Fahrenheit Values:", fahrenheitTemps);

// 3. reduce() to find average temperature
let totalTemp = dailyTemps.reduce((sum, value) => sum + value, 0);
let avgTemp = totalTemp / dailyTemps.length;
console.log("Average Temperature:", avgTemp);

// 4. find() first temperature above 40
let aboveFortyTemp = dailyTemps.find(value => value > 40);
console.log("First Temp above 40:", aboveFortyTemp);

// 5. findIndex() of temperature 28
let indexOf28 = dailyTemps.findIndex(value => value === 28);
console.log("Position of 28:", indexOf28);



// ================= ASSIGNMENT 2 =================
// Course Title Manager

const courseList = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() course names longer than 5 characters
let longCourses = courseList.filter(name => name.length > 5);
console.log("Long Course Names:", longCourses);

// 2. map() convert to uppercase
let upperCaseCourses = courseList.map(name => name.toUpperCase());
console.log("Uppercase Courses:", upperCaseCourses);

// 3. reduce() merge all course names into one string
let mergedCourses = upperCaseCourses.reduce(
    (text, name) => text + " - " + name
);
console.log("Merged Course Names:", mergedCourses);

// 4. find() course named "react"
let reactCourse = courseList.find(name => name === "react");
console.log("Found Course:", reactCourse);

// 5. findIndex() of "node"
let nodeIndex = courseList.findIndex(name => name === "node");
console.log("Index of Node:", nodeIndex);



// ================= ASSIGNMENT 3 =================
// Student Score Processor

const studentScores = [78, 92, 35, 88, 40, 67];

// 1. filter() passing marks (>= 40)
let passedStudents = studentScores.filter(score => score >= 40);
console.log("Number of Passed Students:", passedStudents.length);

// 2. map() add bonus marks
let bonusScores = studentScores.map(score => score + 5);
console.log("Scores after Bonus:", bonusScores);

// 3. reduce() find highest score
let topScore = studentScores.reduce(
    (max, score) => score > max ? score : max
);
console.log("Top Score:", topScore);

// 4. find() first failed score
let failedScore = studentScores.find(score => score < 40);
console.log("First Failed Score:", failedScore);

// 5. findIndex() of score 92
let indexOf92 = studentScores.findIndex(score => score === 92);
console.log("Position of 92:", indexOf92);
