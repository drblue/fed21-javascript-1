// Shows a popup saying hi
//alert("Hej");

/*
let msg;
msg = "Hej variabel";
msg = "Hej igen variabel";

// alert(msg);
console.log(msg);

msg = "Hej nytt meddelande";

console.log(msg);
*/

/*
let thisIsVariableNameVeryLong;   // camelCase

let ThisIsVariableNameVeryLong // PascalCase   UpperCamelCase

let first_name;
let this_is_variable_name_very_long;   // snake_case
*/

let firstName; // first name
firstName = "Johan";

let helloMsg = "Hello " + firstName + "!";
firstName = "Alicia";
console.log(helloMsg);  // "Hello Johan!"

helloMsg = "Hello " + "Alicia" + "!";  // "Hello Alicia!"
console.log(helloMsg);  // ?

const lastName = "Nordström";
// lastName = "Testsson";  // NO CAN DO!

const hello = "Hello";
console.log(hello + " " + firstName + " " + lastName);
