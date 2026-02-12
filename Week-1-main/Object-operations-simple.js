// ================= TASK 1 =================
// Account Profile Handler

const accountDetails = {
  userId: 201,
  fullName: "Anita",
  contactEmail: "anita@gmail.com",
  role: "learner",
  activeStatus: true
};

// Read and display name & email
console.log("User Name:", accountDetails.fullName);
console.log("User Email:", accountDetails.contactEmail);

// Add new property: lastAccessed
accountDetails.lastAccessed = "2026-02-10";

// Update role
accountDetails.role = "manager";

// Remove active status
delete accountDetails.activeStatus;

// Display remaining keys
console.log(Object.keys(accountDetails));



// ================= TASK 2 =================
// Subject Score Calculator

const subjectScores = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let totalScore = 0;
let topScore = 0;
let topSubject;

for (let subject in subjectScores) {
  totalScore += subjectScores[subject];

  if (subjectScores[subject] > topScore) {
    topScore = subjectScores[subject];
    topSubject = subject;
  }
}

// Total score
console.log("Total Score:", totalScore);

// Average score
console.log(
  "Average Score:",
  totalScore / Object.keys(subjectScores).length
);

// Best subject
console.log("Top Subject:", topSubject);

// Add new subject
subjectScores.computerScience = 90;



// ================= TASK 3 =================
// App Preference Manager

const appSettings = {
  themeMode: "light",
  notificationsOn: true,
  autoSync: false,
  language: "en"
};

// Switch theme
appSettings.themeMode =
  appSettings.themeMode === "light" ? "dark" : "light";

// Enable autoSync
appSettings.autoSync = true;

// Remove notifications setting
delete appSettings.notificationsOn;

// Lock settings
Object.freeze(appSettings);
