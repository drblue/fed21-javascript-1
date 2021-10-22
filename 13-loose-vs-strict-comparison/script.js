/**
 * Loose vs Strict comparison
 */

let age = 25; // Number

// loose comparison (different data types can still be equal)
console.log('age == 25', age == 25);  // true
console.log('age == "25"', age == "25"); // true
console.log('age != 25', age != 25);  // false
console.log('age != "25"', age != "25"); // false

// strict comparison (different types *cannot* be equal)
console.log('age === 25', age === 25); // true
console.log('age === "25"', age === "25"); // false
console.log('age !== 25', age !== 25); // false
console.log('age !== "25"', age !== "25"); // true
