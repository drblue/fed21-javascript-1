/*
let sum = 100;
console.log("sum:", sum, typeof sum); // number

let points = 25;
console.log("points:", points, typeof points); // number

let batman = "Batman";
console.log("batman:", batman, typeof batman); // string

let strPoints = "25";
console.log("strPoints:", strPoints, typeof strPoints); // string


// Type Conversion

let sumPoints = sum + points;
console.log("sumPoints:", sumPoints, typeof sumPoints); // number

let sumStrPoints = sum + strPoints; // 100 + "25"
console.log("sumStrPoints:", sumStrPoints, typeof sumStrPoints); // ?

let convertedStrPoints = Number(strPoints); // 25
console.log("convertedStrPoints:", convertedStrPoints, typeof convertedStrPoints); // number! 🥳

let convertedBatman = Number(batman);
console.log("convertedBatman:", convertedBatman, typeof convertedBatman); // 🦇?
*/

let result;

result = Boolean(100); // true
result = Boolean(1); // true
result = Boolean(0); // false
result = Boolean(-1); // true
result = Boolean(-100); // true

result = Boolean("i am groot"); // true
result = Boolean(""); // false
result = Boolean(" "); // true

console.log("result:", result, typeof result);
