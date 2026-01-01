//https://www.youtube.com/watch?v=upDLs1sn7g4 - What is JavaScript?
//https://www.youtube.com/watch?v=EH3vGeqeIAo - Bckend Plan





/*
//console.log("Hello World");
var username;
console.log(username);   //Output is undefined but smtimes it gives null bth aren't same

var username;
username="Rehaan";       
console.log(username);

var firstName="Rehaan";
console.log(firstName); //camelCased is convention which all programmers follow to be on same page

Naming rules 
 1) names just must contain letters, numbers, symbol $ _
 2) first character must not be a number
 3) It mustn't be a reserved word like a kiword in serpent eg var
*/





//JS is Compile time as C/C++





/*
msg="Hello world"; //It is global object as per name it can't be accessed from no where & has some useful function.
console.log(msg); 
console.log(window); - > Gives list of function in window

Environment	      Global Object
Browser	            window
Node.js(server)	    global
Universal	        globalThis 

//window.x = 10;  or x=10;
//global.x = 10; 
//globalThis.myVar = 10; 
*/





/*
// 1) sloppy "normal" mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls of the language

"use strict";

// hoisting - means even before defining logging it into the console!
var age;
console.log(age); // undefined or NULL
age = 26;
or
console.log(age); // undefined
var age = 26;

console.log(age);
let age = 26;   or // const age=26; //Error

console.log(age);
age = 20;
//ReferenceError: age is not defined
//We cant hoist a global object
*/





/*
// message = "hello world";  or window.message="hello world";
// message = "hello again";  intial value will be over written with hello again. when we use var
//console.log(message);

// var console = 'hi';  TypeError: console.log is not a function
                        You overwrote the global console object.
// console.log("hi");
*/





// Lets & const
/*console.log(age);
let age = 26;   or // const age=26; 
//script.js:76 Uncaught ReferenceError: Cannot access 'age' before initialization
// const - restrictions that make code more readable
// 1) must be initialized with value
// 2) can't be reassigned after declaration

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

const age; //error must write like this const age=26; as its const if tried to change error and if not declared then also errors
age = 26;
age = 36;
*/





/*var price = 20;
var isSale = true;
//Variable shadowing the if statements var is being shadowed on outer elements
if (isSale) {
  // discount price of product
  let price = 20 - 2;    // Use let price = 20-2; instead of var price=20-2; as let & const - block-scoped meaning that price is no longer accessed outside of if block just like CPP or C
  // do something 
  console.log('sale price', price);
}
//var price = 21; Promblem solved but not good and hoisting can occur 
console.log('price', price-20);
*/

/*
🔄 Hoisting
- Definition: JavaScript moves declarations (var, function) to the top of their scope before execution.

console.log(x); // undefined
var x = 10;

var x;
console.log(x);
x=10;           -----------------> This is how JS does Internal work and its called hoisting.
//Hoisting happens all the time but the shut off its effect let or const are used
//So, let or const make function block variable to scope blocked
*/





//Escape seq char & String operations
/*
let username="Rehaan"; or 'Rehaan'
console.log("Hi\n"+username);
let username="Rehaan";
console.log("Hi\t" + username);
*/
//Better solution to concatenate a string
/*
// new feature for JS called template literal we to use back tick(`) & we need to use a concept called string interpolation
let username="Rehaan";
let msg = `Hi ${username}, How is The Dowg?`;  //instead of let msg="Hi\t"+usename+"\t,How is The Dowg?";
console.log(msg);
let height = 170;
console.log(`Rehaan is ${height/12} feet tall`);
//Later we use condition in template literal for some websites
//fixing some pitholes in static string not template literal string
"I'm a string";  or 'I\'m a string';

'He said, "I am string."'; "He said, \"I am string.\"";
const threeLines = "This is a string \n that spans \r across three lines.";
                               OR
const threeLines = `This is a string 
that spans across 
three lines.
`; 
*/





/*
const name = 'Jane';
const Name = 'Mark';
const NAME = 'Fred';

console.log(name, Name, NAME);
*/





/*
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





/*  Data Types [ AKA Types ] & conditionals
    Ternaries for shortcut conditionals
    Operators and Relational Operators

const prefersDarkMode = false;
const prefersSolarizedMode = true;

if (prefersDarkMode) {
  console.log('dark mode set!');  
  document.body.style.background = 'black';
} else if (prefersSolarizedMode) {
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
} else {    
  console.log('light mode set!');
  document.body.style.background = 'ghostwhite';
}

const colorMode = 'dark';

if (colorMode === 'solarized') {
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
} else if (colorMode === 'dark') {
  console.log('dark mode set!');  
  document.body.style.background = 'black';
} else {    
  console.log('light mode set!');
  document.body.style.background = 'ghostwhite';
}
const colorMode = 'dark';
switch (colorMode) {
  case "solarized":
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
    break;
  case 'dark':
    console.log('dark mode set!');  
    document.body.style.background = 'black';
    break;
  default:  
    console.log('light mode set!');
    document.body.style.background = 'ghostwhite';
}
*/





/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type

console.log(typeof window);  // Output Object type
*/





/*
let message = 'some string';

// console.log(typeof window);

// 1) Explicit type conversion
// 2) Implicit type conversion (coercion)

console.log('1' * '2');  //2
console.log('10' + 20);  //1020

String(123);     // "123"
(123).toString(); // "123"

Number("42");    // 42
parseInt("42");  // 42
parseFloat("3.14"); // 3.14

Boolean(1);      // true
Boolean(0);      // false
Boolean("");     // false
Boolean("hi");   // true
*/





/*
if (value) {      //JS internal change Boolean(value) === true (=== is strict evaluator)
  //It converts value to bool using explicit conv boolean() 0 is false 1 or other is true '' is false 'smthng' is true

  //Note down
  //1 == "1";   // true (string coerced to number)
  //1 === "1";  // false (different types)
}else{
  //Its true so do smthng else
}
// falsy values
// 0
// '' or `` or ""
// null
// undefined
// NaN
// -0
//- 0n

//Truthy values
- Non‑empty strings → "hello", "0", "false"
- Non‑zero numbers → 1, -1, 3.14
- Objects → {}, [] (even empty ones!)
- Functions → function(){}
- Infinity and -Infinity
if ("hello") console.log("Truthy"); // runs
if ([]) console.log("Truthy");      // runs
*/





/*
// Avoid direct comparisons in conditionals
// Use triple equals === (strict equals operator) as it doesn't allow type conversion. == is aka loose operator
const username = '';

if (username === false) {     better version if(!username){            
  console.log('no user');                     console.log('no user');             
}                                            }

// Convert to real Boolean values where needed

if (Boolean(NaN) === Boolean(NaN)) {        //true but NaN===Nan is false bcz Nan is Not a number it might be 0/0 or 1/0 undetermined and we cant tell whether both are equal
    console.log('equal')
} else {
    console.log('not equals')
}

if (null == undefined) {       true
  console.log('equals');
} else {
  console.log('not equals');
}
*/





// const isAuthenticated = false;
// let cartItemCount = 0;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
// //   console.log("Please log in!");
//   cartItemCount = 0;
// }

// const cartItemCount = isAuthenticated ? 1 : 0;
// console.log(cartItemCount);
//OR

//const greeting = age < 10 ? "Hey there" : "That's an interesting age!";
//console.log(greeting);

// if (age < 10) {
//   greeting = "Hey there"; 
// } else if (age > 18) {
//   greeting = "Greetings";  
// } else if (age > 10) {
//   greeting = "What's up?";  
// } else {
//   greeting = "That's an interesting age!";  
// }
// console.log(greeting);

//const greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up?" : "That's an interesting age!";
//console.log(greeting);





//Short-Circuiting -- Using && || is short circuiting
/*
// let username;

// if (response) {
//   username = response;
// } else {
//   username = "guest";
// }

// const result = 'Reed' || '';   // returns Reed and if used && will return first false value that is "" but == or ! gives true or false but this is special case in JS as in C / C++ || && gives true or false not the value ie 0 and 1
// console.log(result);

// const username = response ? response : "guest";

// console.log(username);


Short circuit eg -
const username = isEmailVerified && response || "guest";

console.log(username);
//Beaware of operator precedence
*/





/*🧩 Order of Precedence (simplified focus)
- Parentheses () → highest, used for grouping.
- Unary operators (++, --, !, ~, * dereference, & address-of, casts).
- Multiplication/Division/Modulo (*, /, %).
- Addition/Subtraction (+, -).
- Relational (<, <=, >, >=).
- Equality (==, !=).
- Bitwise AND (&).
- Bitwise XOR (^).
- Bitwise OR (|).
- Logical AND (&&).
- Logical OR (||).
- Ternary conditional (?:).
- Assignments (=, +=, -=, etc.).
- Comma operator (,).
*/





/*
 - What is the purpose of functions in JS?
 - Later talk about a special property called closure
 - Then how to make more reliable function or function with parameter that are more readable
 - Short - circuiting the functions using arrow function
 - Advance thing like partial applications of functions
*/




// input -> performs an action
// input -> returns some data
/*   
function echo(input) {
  console.log(`${input}`);  
}

echo(42, "Hi");  // JS ignore "Hi" so output is 42

function echo(input, greeting) {
  console.log(`${greeting} ${input}`);  
}

echo(42, "Hi");

let result;              better solution as result is let object then it can be reassigned so use const
                                        down 
function echo(input, greeting) {        here
 result = `${greeting} ${input}`;      const result = `${greeting} ${input}`; 
}

echo(42, "Hi");
console.log(result);
*/