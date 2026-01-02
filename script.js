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



function echo(input, greeting) {
 return `${greeting} ${input}`;  
}

const result = echo(42, "Hi");
console.log(result);
*/





/*  Closure- A function forms a closure when it accesses variables from its outer lexical scope.
function handleLikePost() {
  let likeCount = 0;
  return function addLike() {
    likeCount += 1;    
    return likeCount;
  }
  //addLike();
  //console.log('like count:', likeCount);
}

const like = handleLikePost();

console.log(like());
console.log(like());
console.log(like());

// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(start,step) {
  let remainingTime=start;
  function sub(){
    remainingTime-=step;
    return remainingTime;
  }
  return sub;
  // write your code here
}

const countingDown = countdown(20,2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
*/





/* Function with default parameter
function convertTemperature(celsius, decimalPlaces) {
    // celsius to fahrenheit
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 1));


function convertTemperature(celsius, decimalPlaces) {
    // celsius to fahrenheit
  decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));


function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));
*/





/* Arrow Functions ie Shorter Functions using fat arrow for conciseness and ease for classes & objects
//Explicit return arrow functions
const username = 'john';

const capitalize = (name) => {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}
           OR
const capitalize = name => {         //This fails incase two parameters that are (name, age) -----> Correct!
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}

Arrow function
= concise syntax
+ lexical this
- no own this
- no arguments object

Implicit return Arrow Functions

const username = 'john';

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
 console.log(capitalize(username));

 //Callback functions -A function becomes a callback only when it is passed as an argument to another function and that function decides when to execute it.
 //Call back funcions will make more sense when we learn about the async functions
 //Callback function has another name called as higher order function.

 const username = 'john';

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
function greetUser(name, callback) {
  return callback(capitalize(name));  
}

greetUser(username, function(name) { return `Hi there, ${name}`; });
------------OR---------------

const username = 'john';

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
function greetUser(name, callback) {
  return callback(capitalize(name));  
}

const result = greetUser(username, (name) => {
  return `Hi there, ${name}`;
});

console.log(result);
-------------OR----------------

const username = 'john';

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
function greetUser(name, callback) {
  return callback(capitalize(name));  
}

const result = greetUser(username, (name) =>`Hi there, ${name}!`;);

console.log(result);

 */

/*
// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 5));


// Stretch goal start
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => countFromNum -= step;
}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
*/





/*
Partial Application - Partial application is a technique where a function is transformed into a new function by pre-filling one or more of its arguments with fixed values, while the remaining arguments are supplied later.
function add(a) {
  return function (b) {
    return a + b;
  };
}
const addFive=add(5);
console.log(addFive(3));   //Output is 8

//Rest API to fetch
function getData(baseUrl, route) {
  fetch(`${baseUrl}${route}`)
    .then(response => response.json())
    .then(data => console.log(data));  
}

getData('https://jsonplaceholder.typicode.com', '/posts');
getData('https://jsonplaceholder.typicode.com', '/comments');

//We have to call https://jsonplaceholder.typicode.com a lot of times so instead we used concept of partial application

function getData(baseUrl) {
  return function(route) {    
    fetch(`${baseUrl}${route}`)
    .then(response => response.json())
    .then(data => console.log(data));  
  }  
}

const decideroute=getData(https://jsonplaceholder.typicode.com);
decideroute('/Posts');c
*/
