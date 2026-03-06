let userRole="admin";
let accessLevel;

if (userRole==="admin"){
    accessLevel="Full Access Granted";
} else if(userRole="Manager"){
    accessLevel="Limited Access Granted";
} else {
    accessLevel="No Access Granted";
}

console.log("Access Level:",accessLevel)

let isLoggedIn=true;
let userMessage;

if(isLoggedIn){
    if(userRole==="Admin!"){
        userMessage="Welcome, Admin!";
    } else {
        userMessage="Welcome, User!";
    } 
} else {
    userMessage="Please Log in to access the system."
}

console.log("user Message:",userMessage)

let userType = "subscriber"
let userCategory;

switch(userType){
    case "admin":
        userCategory ="Administrator";
        break;
    case "manager":
        userCategory = "Manager";
    case "subscriber":
        userCategory="Subscriber";
    default:
        usercategory="unknown";
}

console.log("User Category:",userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);
