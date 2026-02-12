// ================= PRACTICE 1 =================
// Account Access Checker

let loggedInStatus = true;
let profileSetupDone = false;

let accessMessage;

// Check account & profile status
if (!loggedInStatus) {
    accessMessage = "Login required";
}
else if (!profileSetupDone) {
    accessMessage = "Finish setting up your profile";
}
else {
    accessMessage = "Access granted";
}

console.log("Status:", accessMessage);


// ================= PRACTICE 2 =================
// Program Fee Classifier

let programFee = 1299;
let feeType;

if (programFee < 500) {
    feeType = "Low Cost Program";
}
else if (programFee >= 500 && programFee <= 1000) {
    feeType = "Mid Range Program";
}
else {
    feeType = "High End Program";
}

console.log("Program Category:", feeType);


// ================= PRACTICE 3 =================
// Enrollment Eligibility Checker

let paymentDone = true;
let prerequisitesCompleted = false;

// Ternary operator
let eligibilityStatus = (paymentDone && prerequisitesCompleted)
    ? "Eligible to Enroll"
    : "Eligibility Pending";

console.log("Enrollment Result:", eligibilityStatus);
