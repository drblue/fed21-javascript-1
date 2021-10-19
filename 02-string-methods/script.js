let myName = "Johanh";

console.log("Name is: ", myName);  // "Johan"
console.log("Length of name is:", myName.length); // 5

console.log("First char in name is:", myName[0]);

console.log("Name SHOUTED is:", myName.toUpperCase());
console.log("Name whispered is:", myName.toLowerCase());

console.log("Name is:", myName); // "Johan"

console.log("Position of 'h':", myName.indexOf('h')); // 2
console.log("Position of last 'h':", myName.lastIndexOf('h')); // 5
console.log("Position of 'z':", myName.indexOf('z')); // -1 (does not exist)

console.log("Slices of Johan:", myName.slice(3, 6));

console.log("Tiny name:", myName.substr(0, 2)); // "Jo"

let email = "johan.nordstrom@elevera.org";
console.log("Does email contain at-char?", email.includes('@'));
