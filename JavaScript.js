/** This file JS it's for help-me with commands e Tips */

/*
 * TURNARY MAGIC
 ? This function use of the ternary operete conditional, less verbose way ?
 */
const ternaryConditional = 70;

ternaryConditional >= 18
  ? ternaryConditional >= 70
    ? console.log("ternaryConditional:", "You are bigger 70 years old")
    : console.log("ternaryConditional:", "You are between 18 and 70 years old")
  : console.log("ternaryConditional:", "You are smaller 18 years old");

/*
* NUMBER TO STRING
? this function Change a number for string ?
*/

const numberToString = 20 + "";
console.log("numberToString: ", typeof numberToString);

/*
* FILL ARRAY
? This function create multiple itens inside of the array ?
*/

const fillArrray = Array(5).fill("Any");
console.log("fillArrray:", fillArrray);

/*
 * UNIQUE VALUE ARRAY
 ? This function brings only unrepeted values ?
 */

const uniqueValueArray = [
  "Facebook",
  "Twitter",
  "Instagram",
  "Twitch",
  "Youtube",
  "Instagram",
  "Youtube"
];

const unique = Array.from(new Set(uniqueValueArray));
console.log("uniqueValueArray:", unique);

/*
 * DYNAMIC OBJECT
 ? This function get a dynamic value in it's object key ? 
 */

const dynamic = "phone";
const valueOfDynamic = "99-9999999";

const dynamicObject = {
  name: "Robert Eagle",
  email: "robert@eagle.com",
  [dynamic]: valueOfDynamic
};

console.log("dynamicObject: ", dynamicObject);

/*
 * SLICING ARRAYS
 ? This function has the first value as defined in XXX.length = "valueRequired"? 
 */

const slicing = [1, 44, 4, 46, 533, 445, 1222];
slicing.length = 1;
console.log("slicing: ", slicing);

/*
? As a variantion of the slicing, we can use slice() ?
*/
const slice = [1, 44, 4, 46, 533, 445, 1222]; // Direction: start from the beginning
console.log("slice: ", slice.slice(-1)); // Direction: start of the end

/*
 * ARRAY TO OBJECT
 ? This function change a array to object ?
 */

const arrayExemple = [1, 3, 4, 5, 6, 7, 55, 66, 77, 88];

const arrayToObject = { ...arrayExemple };
console.log("ArrayToObject: ", arrayToObject);

/*
 * OBJECT TO ARRAY
 ? This function change a object to array ?
 */

const objectExemple = { any1: 1, any2: 2, any3: 3, any4: 4, any5: 5 };

const objectToArrayKey = Object.keys(objectExemple);
const objectToArrayValue = Object.values(objectExemple);
console.log("objectToArrayKey: ", objectToArrayKey);
console.log("objectToArrayValue: ", objectToArrayValue);

/*
 * PERFORMACE
 ? This function show the time a application have ?
  !Only execute in browser
 */

let startAt = performance.now();

for (let i = 0; i < 22222; i++) {
  console.log(i);
}

let endAt = performance.now();

console.log(` ${endAt - startAt} milliscensds to execute`);

/*
This article describes how to find an object in an array.
This link has many interesting comments.

https://medium.com/@osuissa/javascript-buscas-em-arrays-parte-1-aff64d22174

*/

/*
This function changes a letter of the first word to uppercase.
*/

keyWordString.charAt(0).toUpperCase() + KeyWordString.slice(1)


/*New way to create conditions*/
function getCity(state){ 
   const city = {
    "MG": ()=> "Belo Horizonte",
    "PR": ()=> "Paraná",
    "MT": ()=> "Mato Grosso",
    "SP": ()=> "São Paulo"
   }
   return (city[state] || "Not found"
 };
           
 console.log(getCity("PR"));
 
 
 ### Get object with max value
 

  function getMax(array) {
    const maxValue = Math.max(...array.map(obj => obj.value));
    return array.find(obj => obj.value === maxValue);
  }
 
 console.log(getMax([
  {name: "positive", value: 12},
  {name: "neutral", value: 55},
  {name: "negative", value: 33},
]));


