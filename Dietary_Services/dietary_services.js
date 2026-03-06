let userType = prompt("Enter one Employee/Enrolled Member/Subscriber/Non-Subscribe");

if (userType=="Employee"){
    alert("Access to Deitary Services")
} else if (userType=="Enrolled Member"){
    alert("Access to Dietary Services and one-on-one interaction with dietician.")
} else if (userType=="Subscriber"){
    alert("Partial Access to Dietary Services")
} else if (userType=="Non-Subscriber"){
    alert("Need to Enroll or atleast Subscriber, Access Denied!")
}