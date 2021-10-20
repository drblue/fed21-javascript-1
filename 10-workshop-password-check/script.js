/**
 * Workshop: Password Checker
 *
 * Link: https://teams.microsoft.com/l/message/19:ee60e4662a5a4a95babd494649401fdc@thread.tacv2/1634737231314?tenantId=1f14a049-d614-4ea3-8d0d-040443a8bc19&groupId=10a26e5b-f1f9-4c41-892c-ba5f3e43d8ba&parentMessageId=1634737231314&teamName=FED21M&channelName=JavaScript%20Grundkurs-%2065%20Yhp&createdTime=1634737231314
 */

let password;
// password = "password"; // inte giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];
