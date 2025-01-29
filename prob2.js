var fname = prompt("First Name:");
var lname = prompt("Last Name:");
var byear = prompt("Birth Year:");

var currentYear = new Date().getFullYear();
var age = currentYear - parseInt(byear);

document.getElementById("greet").innerHTML = `Hello ${fname} ${lname}! How does it feel to be ${age} years old?`;