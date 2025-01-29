var Consent = confirm("Do you agree to share your personal information with this site?");

if (Consent)
{
	var currentYear = new Date().getFullYear();
	var age = currentYear - parseInt(byear);
	console.log(`Hello ${fname} ${lname}! How does it feel to be ${age} years old?`);
} 
else 
{
 	console.log("User does not wish to share his/her information.");
}
