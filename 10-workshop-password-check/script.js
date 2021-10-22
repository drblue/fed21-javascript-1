/**
 * Workshop: Password Checker
 *
 * Link: https://teams.microsoft.com/l/message/19:ee60e4662a5a4a95babd494649401fdc@thread.tacv2/1634737231314?tenantId=1f14a049-d614-4ea3-8d0d-040443a8bc19&groupId=10a26e5b-f1f9-4c41-892c-ba5f3e43d8ba&parentMessageId=1634737231314&teamName=FED21M&channelName=JavaScript%20Grundkurs-%2065%20Yhp&createdTime=1634737231314
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// set status variable to initial value false
let containsSpecialChar = false;

// check for any special chars in password
for (let i = 0; // only run once, at the beginning of the loop
	i < specialChars.length; // should we continue another round?
	i++) // run AFTER each round is executed
{
	//console.log("At special char:", specialChars[i]);
	if (password.includes(specialChars[i])) {
		console.log("Password contained char:", specialChars[i]);
		containsSpecialChar = true;
	}
}

console.log(`🕵🏻 Checking password "${password}"`);

// Har lösenordet minst 16 tecken?
if (password.length >= 16) {
	console.log("- ✅ Great! That's a long password!");

} else if (password.length >= 12 && password.includes('-')) {
	console.log("- ✅ Great! That's a pretty good password!");

} else if (password.length >= 8 && containsSpecialChar) {
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

} else {
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}
