//https://www.youtube.com/watch?v=upDLs1sn7g4 - What is JavaScript?
//https://www.youtube.com/watch?v=0Rwb4Xmlcwc&list=PLui3EUkuMTPgZcV0QhQrOcwMPcBCcd_Q1&index=1 - Bckend Plan

//Its compile time as C/C++.


//====================================================================================================================================
//Concept of Hoisting & String Operations.
/*console.log(x); // undefined
var x = 10;

//But JS sees it like this

var x;
console.log(x);
x=10;           -----------------> This is how JS does Internal work and its called hoisting.*/
//Hoisting happens all the time but the shut off its effect let or const are used
//So, let or const make function block(Global scoped or function scoped) variable to scope blocked
/*Naming rules -
 1) names just must contain letters, numbers, symbol $ _.
 2) first character must not be a number.
 3) It mustn't be a reserved word eg var.*/
 /*
console.log(age);
// temporal dead zone - here var is not accessible
let age = 26;
SyntaxError: Identifier 'age' has already been declared

const msg = "hello";
const msg = "again"; // ❌ SyntaxError

let msg = "hello";
let msg = "again"; // ❌ SyntaxError

var msg;
var msg; // ignored (same variable) ie No error

userName_const="Const_usecase"; //We cant define the variable of const type as we must define it during the time of declaration. This will show error.
username='RehaanParathanahalli';
userName_let="Let_usecase";
console.log("\`\` We use this called as template literal and When we add \&{variable_Name}\ we are using mixture of template literal and a concept known as string interpolation");
console.log(`Hello learners we are revising JS. \"${username}\" A concept of Hoisting.Where the JS takes all variables to the front of Queue at the time of Execution except let and const.`);
console.log(`Hello learners we are revising JS. \"${userName_let}\" Let benefits of ignoring the concept of Hoisting.`);
let userName_let;
var username;
const userName_const;
//OR
console.log("Hello learners we are revising JS."+"\""+username+"\""+"A concept of string concatenation in string operations");
//OR
var stringLiteral=`Hello learners we are revising JS. \"${username}\" A concept of Hoisting.Where the JS takes all variables to the front of Queue at the time of Execution except let and const.`;
console.log(stringLiteral);
convention="roadBreak";
console.log("But what if we didn't define the var but just declared then output can be \"undefined\" OR \'null\'");//Difference between undefined and null will be cleared in DOM Methods, JSON Parsing and APIs.
console.log('Can we use \' \' instead of \" \".Also lets explore escape sequence characters.\n A new line And\t Space');
var convention;
console.log(`A convention for all the users called CamelCased Eg ${convention}`);

const name = 'Jane';
const Name = 'Mark';
const NAME = 'Fred';

console.log(name, Name, NAME);

let firstName;

// is, has will be used for boolean valued variable
// let isModalVisible = true;

// if (isModalVisible) {
//   // do something  
// }

// let isLoading;
// let hasPosition;

const COLOR_RED = '#f00';   CAPITAL will be used for const so that other developers can understand that this value is const and cant be channged
*/
//====================================================================================================================================


//====================================================================================================================================
//String Operations Advanced
/*
msg="hi";
msg="Hi, My name is Rehaan.";
console.log("msg");

const threeLines = "This is a string \n that spans \r across three lines.";
                               OR
const threeLines = `This is a string 
that spans across 
three lines.
*/
//====================================================================================================================================


//====================================================================================================================================
//Global, GlobalThis & window in Node.js, Everywhere & Browser.
//The "global object" is the top-level object that provides access to built-in functions, variables, and environment-specific APIs.

//Window(Browser)
/*
🖼️ window
- Browser-specific global object.
- Represents the browser window and provides :
    - DOM APIs (document, location, history)
    - Browser-specific functions (alert, confirm)
    - Global variables declared with var (they become properties of window).
    - Not available in Node.js. That’s why relying on window breaks outside browsers.
*/

//Global(Server)
/*
🖼️ global
- Node.js-specific global object.
- Represents the Node runtime environment and provides:
    - Core Node APIs (process, Buffer, require)
    - Utility functions (setTimeout, setInterval)
    - Environment-wide values accessible across modules
    - Module scope difference: Variables declared with var or let inside a Node module do not automatically become properties of global (unlike window in browsers).
    - Not available in browsers. That’s why relying on global breaks outside Node.js.

- In browsers, var x = 10; attaches x to window.
- In Node, var x = 10; does not attach x to global. (Node modules are scoped, so globals don’t leak as easily.)
*/

//globalThis
/*
🖼️ globalThis
- Universal global object (introduced in ES2020).
- Provides a standard, cross-platform reference to the global object.
- Works consistently across environments:
    - In browsers, globalThis → window
    - In Node.js, globalThis → global
    - In Web Workers, globalThis → self
    - Purpose: Eliminates the need for environment-specific checks (window vs global).
    - Best practice: Use globalThis when writing portable code that should run in both browser and Node.js contexts.
*/

//console.log(window);// Go to browser dont check through node
//console.log(global);// Check in node
//console.log(globalThis);// Check Anywhere you want but in browser it will be window and in node it will remain global

//Window
/*
window.x=10;
console.log(x);
//OR
var x=1;
console.log(window.x);
*/

//Global
/*
global.x=10;
console.log(x);
*/

//GlobalThis
/*
globalThis.x=10;
console.log(globalThis.x); console.log(typeof globalThis.x); //Depends on the runtime environment.
*/

//Explicit and Implicit global objects
//Explicit
//global.x, globalThis.x, window.x
//Implicit
//var x; x;
/* Explicit global with var
//Node.js(For bettter understanding read from comparision table)
var f = 6;
console.log(f);        // 6
console.log(global.f); // undefined → var is module-scoped in Node.js, not global 
// Implicit assignment
g = 7;
console.log(g);        // 7
console.log(global.g); // undefined → stays in module scope
*/

/* //Block Scope and Top-Level Scope
// Block scope with let/const
{
  let c = 3;
  const d = 4;
  var e = 5;
}
console.log(typeof c); // "undefined" → block-scoped
console.log(typeof d); // "undefined" → block-scoped
console.log(e);        // 5 → var ignores block, leaks out
*/

//Comparison table
/*
| Scope Type        | Node.js Behavior                                                                                   | Browser Behavior                                                                                                       | Example Keywords      |
|-------------------|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------|
| Top-level scope   | Top-level variables are **module-scoped**, not global. They don’t attach to `global`.              | In non‑module `<script>`, top-level variables attach to `window`. In `<script type="module">`, they are module-scoped. | `var`, `let`, `const` |
| Module scope      | Each file is its own module. Top-level declarations are private unless exported.                   | `<script type="module">` creates its own scope; top-level declarations don’t leak to `window`.                         | `export`, `import`    |
| Block scope       | `let` and `const` are block-scoped. `var` ignores block scope and hoists to function/module scope. | Same behavior: `let` and `const` respect block scope, `var` leaks to function/global scope.                            | `let`, `const`, `var` |
Node.js is module scoped. its module scoped and keywords are module.export or module.import .
*/
//====================================================================================================================================


//======================================================================================================================================
// 1) sloppy "normal" mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls of the language

/*"use strict";
x=10;//error
console.log(x);//If "use strict"; wasn't used then this wouldn't have given error.

let obj ={ p:1, p:2}; //Error since duplicates aren't allowed while in strict mode.

function myFunction(){
"use strict";
//this usecase will be defined to the block of myFunction() Not applicable outside.
}
*/

//Sloppy mode
/*x=10;//No error & its considered implicit window object.
console.log(x);*/
//====================================================================================================================================


//====================================================================================================================================
//Variable shadowing
/*var price = 20;
var isSale = true;
//Variable shadowing the if statements var is being shadowed on outer elements
if (isSale) {
  // discount price of product
  let price = 20 - 2;    // Use let price = 20-2; instead of var price=20-2; as let & const - block-scoped meaning that price is no longer accessed outside of if block
                        //if price = 19; is used then since var is function scoped then outside value gets overwritten.
  console.log('sale price', price);// if let is used output is 18 else 19
}
console.log('price', price-20);//if let is used inside if block then output is 0 else -1.
*/
//====================================================================================================================================
/*


*/
