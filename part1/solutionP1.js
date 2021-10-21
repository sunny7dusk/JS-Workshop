/**
 * Variables
 * JS has dynamic typing, be careful with how you use it
 * Use `let` and `const` for variables
 * `var` and `val` are outdated
 */
let mutableVariable = 1; // Number, Big Int
mutableVariable = "1";
mutableVariable = [1];
mutableVariable = false;
mutableVariable = undefined;
mutableVariable = null;

const unmutableVariable = 1;
// unmutableVariable = 2 (Error)

/**
 * Inserting to strings
 * ${} only works with `` strings
 */
let stringExample = `You can insert to strings with this notation ${mutableVariable}`;

/**
 * Equality
 * Greater or less than  a > b, a < b
 * Greater/less than or equals a>=b, a<=b
 * Equals a === b (avoid using ==)
 * Not equals a !== b
 *
 * Numbers and Strings can be compared!
 */
let greater = a > b;
let lessThan = a < b;
let greaterEqual = a >= b;
let lessThanEqual = a <= b;
let equals = a === b;
let notEquals = a !== b;
/**
 * Because of the dynamic typing property, weird things can be done with variables
 * so be careful
 *
 * "1" == 1 is true according to ECMA script
 * "1" === 1 is false, try to always use this instead
 */

/**
 * Conditional Branching
 * if(true) {executes}
 * if(true) {executes} else {executes}
 *  if(true) {executes} else if {executes} ...
 * let result = condition ? excute1 : execute2;
 * 👆JS allows you to run code in ternary operators
 */

if (true) {
  executes();
}

if (true) {
  executes1();
} else {
  executes2();
}

if (false) {
  executes();
} else if (true) {
  executes();
}

// execute code or choose a value etc etc
let result = condition ? excute1() : execute2(); //chainable
let result = condition1
  ? "run if first condition"
  : condition2
  ? "second condition"
  : condition3
  ? "run if third condition"
  : "run if none are true";

/**
 * Loops!
 * multiple ways of doing loops in JS
 */

while (condition) {}

//

let i = 0;
while (i < 3) {
  i++;
}

// Condition check can me moved below

let i = 0;
do {
  i++;
} while (i < 3);

// Typical for loop
for (let i = 0; i < 10; i++) {
  if (i == 6) continue;
  console.log(i);
  if (i == 8) break;
}

// switch
switch (x) {
  case "condition1":
    something();
    break;
}

/**
 * JS functions
 */

// Outer variable is used
// if there isnt a local one
let outerVariable = "sheeesh";
// default value if not given
function something(param1, param2, param3 = 4) {
  let localVariable = "gottem";
  execute(localVariable);
  execute(outerVariable);
  execute(param1 + param2 + param3);
  return localVariable;
}
//Scopes!  Changes to local variables
// dont reflect back on outer variables

let what = function () {
  execute();
};

// call "what" directly
// but something needs to be "something()"

// Return is implicit, very short and readable
let sum = (a, b) => a + b;

let kenapa = () => {
  // if multilined, return needs to be stated
};

/**
 * Function Declaration allows you to call earlier than it
 *  it defined, visible everywhere
 * function funcName() {
 * }
 * 👆global scope
 *
 * Function Expressions works only after execution
 * reaches it
 * let funcName = function() {
 * }
 * 👆used to avoid polluting global scope
 *
 * Arrow Functions allows you to create short and concise
 * code if used correctly
 * let funcName = () => {
 * }
 * 👆used for passing short or single use functions as
 *      params
 */

/**
 * JS comes with data structures
 */

let array = [];
array.push("something");
console.log(array[0]); // "something"
array.pop();
console.log(array); // []

let array = [1, 2, 3, 4, 5];
// remove element when false
array = array.filter((value) => value > 2);
console.log(array); // [3,4,5]

let array = [];
console.log(array.length); // 0

// Like Python, you can access arrays
// like this 👇
let array = [1, 2, 3, 4, 5];
for (let currNum in array) {
  console.log(array[currNum]); // 1\n2\n3\n4\n5
}
// Might not be a good idea, it is slower than
// a for loop that uses the length of array

// Use this to run a function for every element
let array = [1, 2, 3, 4, 5];
array.forEach((value, index, array) => {
  console.log(`Value ${value} at index ${index}!`);
  // "Value 1 at index 0", stops at end of array
});

/**
 * So much more methods to manipulate
 * arrays available, be sure to read the web docs
 * These include :
 *   slice
 *   concat
 *   shift
 *   indexOf, lastIndexOf, includes
 *   and much more!
 */

/**
 * JSON!
 * JS objects are modelled as a Map
 * Map => A data structure that uses
 *     a key value pair
 * To access data, provide the "key"
 * to it
 */
let map = {};
// shortcut to create empty object

let map = {
  name: "Nate",
};
console.log(map.name); // "Nate"

// You can put basically any data type
// into a map, even another map!
// Mapception
let map = {};
console.log(map); // {}
console.log(map.heyo); // undefined
map.heyo = "Sup";
// map[heyo] works too
console.log(map.heyo); // "Sup"
