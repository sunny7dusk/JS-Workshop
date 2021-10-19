/**
 * JS has dynamic typing, be careful with how you use it
 * Use `let` and `const` for variables
 * `var` and `val` are outdated
 */
let mutableVariable = 1;
mutableVariable = "1";
mutableVariable = [1];
mutableVariable = false;

const unmutableVariable = 1;
// unmutableVariable = 2 (Error)

/**
 * Because of the dynamic typing property, weird things can be done with variables
 * so be careful
 *
 * "1" == 1 is true according to ECMA script
 * "1" === 1 is false, try to always use this instead
 */

/**
 * Inserting to strings
 * ${} only works with `` strings
 */
let stringExample = `You can insert to strings with this notation ${mutableVariable}`;

/**
 * JS comes with data structures
 */
let array = [];
let map = {};

/**
 * JS functions
 */
function something() {}

let what = function () {};

let kenapa = () => {};
