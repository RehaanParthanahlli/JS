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
symbol - [] so on

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
const addFive=add(5); // Here add follows a closure of 5 or a;
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

//Using Callback in an Partial Applications
function getData(baseUrl) {
  return function(route) { 
    return function(callback) {    
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  
    }     
  }  
}

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaComments = getSocialMediaData('/comments');

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title));  
});


//Arrow function & Callback or Higher order function in Partial Application concept
const getData = baseUrl => route => callback =>  
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  
        

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaComments = getSocialMediaData('/comments');

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title)); 
*/



//Objects & Maps
// Functions in objects are called methods just like Python.

//Window or global or globalThis are object and those has many methods like console.log(); window.alert(); window.prompt(); window.varName;

/*const object = {
    key:value,    //Generally, key is string but value can be of any type.
    key1:value1
    }



/*const obj = {
  sayHi() {
    console.log('hi')  
  }
}

obj.sayHi();
// objectName.methodName();
*/

/*const blueColor = '#00f';
const orangeColor = '#f60';

// variables - boxes; objects - file cabinets

const colors = {
  yellow: '#ff0',
  blue: blueColor,
  orange: orangeColor    
}
console.log(colors);*/

//Shorter version of previous

/*const blue = '#00f';
const orange = '#f60';

// variables - boxes; objects - file cabinets

const colors = {
  yellow: '#ff0',
  blue,
  orange: orange   
}
console.log(colors);  //{yellow: '#ff0', blue: '#00f', orange: '#f60'}
console.log(colors.yellow);
*/
// Objects play a huge role in JS if there isn't a Dynamic changes time to time since hex value of color object wont changes its suited but if
// we needed to change the value then we should'nt use objects

/*Qns 1
var bar='Undetermined';
var restaurant="A1";
var cafe='NaN';
const favouritePlaces={
    bar,
    restaurant,
    cafe,
    greeting(){
        console.log("Hi these are mine choices");
    }
}
favouritePlaces.greeting();
console.log(favouritePlaces.restaurant);*/




//More depth for objects - 
/*
  undefined, null, boolean, number, string, symbol
*/
// primitive - passed by value

// const num = 'hello world';
// const anotherNum = 'hello world';
// console.log(num === anotherNum);
/*
var key='value';
const obj = {key:value};
const anotherObj = {key:value}; //as earlier num gets copy of 'hello world' but there obj gets reference of keys and values.
//If we change value from even one object the value gets changed globally as a result of pass by reference.
//Object creates a complete unique value unlike prim. as primitive creates values through pass by value.
//Eg var txt='hi'; here txt is a copied value not reference
// Where as const obj ={}; here obj is a pointer with a unique reference of {};
console.log(obj === anotherObj); // False
*/

//Subtypes of objects 
// Arrays, set, map & functions
/*# JavaScript Objects & Subtypes vs C Structs

## Objects in JavaScript
- Base building block for non-primitive data.
- Flexible: properties can be added/removed at runtime.
- Can hold both data and functions (methods).
- Serve as foundation for Abstract Data Types (ADTs).

## Subtypes of Objects
1. Array → Ordered list, indexed by numbers.
   Example: [10, 20, 30]
2. Set → Unique collection, no duplicates.
   Example: new Set([1,2,2,3]) → {1,2,3}
3. Map → Key-value pairs, keys can be any type.
   Example: myMap.set("name","Rehaan")
4. Function → Callable object, can also have properties.
   Example: greet.language = "English"

## Comparison with C Structs
- Similarity: Both group related data → ADTs.
- Differences:
  - C struct → fixed fields, strongly typed, no methods.
  - JS object → dynamic, can include methods, supports inheritance.
- Analogy: JS objects are like "structs on steroids".

## Big Picture
- Object is the parent type.
- Arrays, Sets, Maps, Functions are specialized children.
- Objects in JS = flexible, extensible ADTs compared to rigid C structs.
*/


//Notes 
/*const obj = {};
const anotherObj = obj;
anotherObj.a = 1;

console.log('obj', obj);
console.log('another obj', anotherObj);//Same bcz of Shared references of obj.
*/





/*
const colors = {
  blue: "#f00",
  orange: "#f60"
};

function getColor(key) {
  return colors.key;
}
console.log(getColor('blue'));   Output is NuLL
*/                                     
// Why?   -----> This will literally look for a property named "key" inside colors, not the variable value.
//Mutable 
/*const colors = {
  yellow: '#ff0',
  blue: "#f00",
  orange: "#f60"
};

// console.log(colors.yellow);
colors.red = '#foo';

colors.red = '#f00';

console.log(colors);*/



//How to have space for key's & Square bracket syntax.
//Why [] ? ----> It gives capability of using keys dynamically.
/*const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60"
};

// console.log(colors.yellow);
colors.red = '#foo';

colors.red = '#f00';

console.log(colors);
console.log(colors['yellow Color']);*/



//How [] gives dynammic power?
/*const color = 'green';
const hexCode = '#0f0';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",     or [color]: hexCode,
  orange: "#f60"
};

colors[color] = hexCode;*/

//Now
/*
function getColor(key) {
  return colors[key];
}

console.log(getColor('green'));
*/

//Delete
/*delete colors['yellow Color'];
console.log(colors);

delete colors.blue;
console.log(colors);*/

//Know the property named "ahead of time" ie if your key value is static use . operator else use [].
/*
const person = {
  name: "Rehaan",
  age: 25
};

console.log(person.name); // ✅ "Rehaan"
console.log(person.age);  // ✅ 25

const key = "name";
console.log(person[key]); // ✅ "Rehaan"

const dynamicKey = "age";
console.log(person[dynamicKey]); // ✅ 25

// Works with non-standard identifiers
const obj = { "likes-coding": true };
console.log(obj["likes-coding"]); // ✅ true
*/



//Object destructuring
/*
const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

const { username, email } = user;
          OR
var { username, email } = user;

function displayUser() {
  console.log(`username: ${username}, email: ${email}`);   //Instead of user.username, user.email
}

displayUser()
*/
/*
const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

const { title } = user.details
const { name } = user;          or const { name, details: { title} } = user;

function displayUserBio() {
  console.log(`${name} is a ${title}`); 
}

displayUserBio()
*/
/*
function displayUserBio({ name, details: { title} }) {
  console.log(`${name} is a ${title}`); 
}

displayUserBio(user);
*/

//Qns
/*const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}
const {beer,coffee,music:{traditional,jazz}}=recommendations;
function recommend({music:{traditional,jazz}}){
    console.log(traditional);
    console.log(jazz);
}
recommend(recommendations);*/





//Merge two objects 
/*
const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: ""  
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

console.log(Object.assign(user, newUser));*/

//If you dont want to merge two things instead merge two into an empty one
/*const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: ""  
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};
const ob_new=Object.assign({}, user, newUser);
console.log(ob_new);*/
//OR
/*const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  verified: true   // here verified is true but in assign at the end we are providing the same key with different value so assign will
                      Override the previous value.
  };

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

const createdUser = { ...user, ...newUser, verified: false };  // const createdUser={user,newUser,verified:false}; ie ... is called spread operator.
console.log(user);*/

//Maps vs Objects
/*const nums = {
  1: 1,
  true: true
};

console.log(Object.keys(nums));//Here there is an implicit conversion since key of object must be strings.
*/
//So to solve this problem map was introduced in ES6

/*const nums = {
  1: 1,
  true: true
};

const map1 = new Map([
  [1, 1],
  [true, true]  
]);

map1.set('key', 'value');

console.log(...map1.keys());
map1.forEach((value, key) => {
  console.log(key, value);  
});
//Normally objects aren't ordered however the maps preserve the insertion order.

const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const secretKeyMap = new Map([
  [user1, secretKey1],
  [user2, secretKey2]  
]);

const key = secretKeyMap.get(user1);
console.log(key);*/
//Concept of WeakMap -- Its used when we need key to object but not consider the space occupied by the object ie a key.
/*const user1 = { name: "john" };
const user2 = { name: "mary" };

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const secretKeyMap = new WeakMap([
  [user1, secretKey1],
  [user2, secretKey2]  
]);

const key = secretKey*/
// To get a number of the value we must use Object.keys(nums).length;
//but Maps made it easy we cant just do this
/*const userMap = new Map([
  ["name", "john"],
  ["verified", true]  
]);

console.log(userMap.size);*/

//Map is treated just like let or const it doesnt replace var but has its own usecases.
//This - later into depth -- Conceptual section in Scrimba
/*const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${userData.username} is a ${this.title}`);
  }  
}
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    setTimeout(function() {
      console.log(`Would you like to friend ${this.username}?`);    // null
    }, 2000);  
  } 
}

userData.askToFriend();*/
//To solve this issue 
/*const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    let that = this;
    setTimeout(function() {
      console.log(`Would you like to friend ${that.username}?`);   
    }, 2000);  
  } 
}

userData.askToFriend();*/

//Better solution

/*const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio: () {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`);   
    }, 2000);  
  } 
}

userData.askToFriend();

//But
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio: () => {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`);   
    }, 2000);  
  } 
}

console.log(this);
//userData.getBio();*/
//Since normal function are dynamically bound to the object but arrow function are lexically bound to surrounding therefore this for arrow function has no meaning.
// Difference between lexical scope and dynammic scope
//- Lexical (static) scope: Variables are accessible only within the block or function where they are defined, and in any nested blocks/functions inside it.
//- Dynamic scope (contrast): Variables would be resolved based on the call stack at runtime, but most modern languages (like JavaScript, Python, C, Java) use lexical scope.
//--JS Follows Lexical scope but c follows Dynamic scope.





//Array's & Sets
//Agenda -
//1. Flexible collections of data using Array's
//2. Perform operations on elements of Array's
//3. Get subsets of Array's
//4. Transform Array's using reduce
//5. Mold Array's using spread operator



/*const todos = {};
const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};
const todo2 = {
  text: 'Do laundry',
  complete: false  
};
todos[2] = todo2;
todos[1] = todo1;
console.log(todos);*/



//We must know ahead of time about the keys of object like 2 or 1 without that we can't delete in an object.
//Order isn't preserved in an object.

/*const todos_array = [];
const todos_object = {
  tasks:"Do JS",
  completed:false
}
todos_array[0]=todos_object;
todos_array.push("Whats an array in JS?");
console.log(todos_array);
let index = todos_array.length;
console.log(`The length of Array is ${index}`);
todos_array.pop();
console.log(`After poping last element of Array We get this`);
console.log(todos_array);*/

/*
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

console.log(temperatures.includes(50));
//We cant use include here as includes is onyl for boolean, int and so on.
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

const result = temperatures.some(temperature => temperature.isRecordTemp === true); // true / false
console.log(result);
Some iterates through all & then gives out if any one has passed condition but . every is opposite of this.
 */



//Map
/*const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

//const newTemps = temperatures.map(temperature => {
//   temperature.isHigh = true; 
//   return temperature;
//});
const newTemps = temperatures.map(temperature => 
temperature.degrees > 70 ? { ...temperature,isHigh: true } : temperature      //Check for temperature.degrees > 70 ? { temperature,isHigh: true } : temperature You will notice the difference
);
console.log(newTemps);*/



//forEach() works same as map as it allows us to iterate over the array but in map new array is created here it isn't the case.
/*const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

//const newTemps = temperatures.map(temperature => {
//   temperature.isHigh = true; 
//   return temperature;
//});
const newTemps = temperatures.map(temperature => 
temperature.degrees > 70 ? { ...temperature,isHigh: true } : temperature      //Check for temperature.degrees > 70 ? { temperature,isHigh: true } : temperature You will notice the difference
);
newTemps.forEach(i=>{
  if(i.isHigh){
    console.log(`The temperatur ${i.degrees} was a record high last week!`);
  }
})
//OR Method chaining
//temperatures.map(temperature => 
//temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
//).forEach(temperature => {
//   if (temperature.isHigh) {
//     console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
//   }
//})  
*/

//Filter 
/*const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const results = restaurants.filter(restaurant => restaurant.name.startsWith('z'));
const results1 = restaurants.filter(restaurant => restaurant.name.startsWith('C')&&restaurant.milesAway<2);
console.log(results,results1);*/



//Reduce
/*const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const total = menuItems.reduce((accumulator, menuItem) => {
  return accumulator + menuItem.price;  
}, 0);
console.log(total);*/


/*const Numbers=[1,2,3,4,5];
const new_Nums=Numbers.reduce((acc,nums)=>{
  acc.push(nums*2);
  return acc;
},[]);
console.log(new_Nums);
//OR
const doubledNumbers = Numbers.map(num => num * 2);
console.log(doubledNumbers);
const greaterNumbers = Numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []); //push won't work. So, concat method was used. 
console.log(greaterNumbers);*/

//Array mutation with spread operator
/*const lunchMenu = ["Chapati",'Rice','Daal'];
const allMenu = lunchMenu;
allMenu.push("Juice");
console.log(lunchMenu); //[ 'Chapati', 'Rice', 'Daal', 'Juice' ] But Why?
//Here allMenu is passed as reference so when changes are made in allMenu actual thing is made in lunchMenu
*/
//Solution
/*const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');

// allMenuIdeas.push('Club Sandwich');

console.log(lunchMenuIdeas);*/
/*const lunchMenu = ["Chapati",'Rice','Daal'];
const allMenu = [...lunchMenu];
allMenu.push("Juice");
console.log(lunchMenu);*/

//Non-mutating means creating a new Array and then making changes to it!
/*const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];
console.log(allMenuIdeas.push());
const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
console.log(otherMenuIdeas);
const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, saladIndex),
  "Garden Salad",
  ...allMenuIdeas.slice(saladIndex + 1)
];
const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1)
]
console.log(finalMenuIdeas);*/

/*Flexible Array Destructuring
const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

var [first, second] = finalMenuItems;

var [second, first] = [first, second]; //Swapping  Let & Const won't work in this case.
// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];

// console.log(first, second, third);
console.log({ first },{ second });*/
/*const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

const [winner, ...losers] = finalMenuItems;

console.log({ winner, losers });*/

/*Qns
// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let [chefsFishDishes, ...regularFishDishes] = fishDishes;

let [regularMeatDishes ,...chefsMeatDishes] = meatDishes;

// console.log(chefsFishDishes);
// console.log(regularFishDishes);
// console.log(regularMeatDishes);
// console.log(chefsMeatDishes);

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsMeatDishes, chefsFishDishes]
let regularDishes = [...regularFishDishes, regularMeatDishes];
console.log(chefsDishes);
console.log(regularDishes);*/


//For End loop
/*const obj = { one: 1, two: 2 };

for (const key in obj) {
  console.log('value', obj[key]);
}
// Object.keys(), Object.values(), Object.entries()
//Conversion of Object to flexible array's
const user = {
  name: 'John',
  age: 29  
};
const keys=Object.keys(user);
console.log(keys);



const values = Object.keys(user).map(key => user[key]);
console.log(values);
//OR
console.log(Object.values(user));
console.log(Object.entries(user));



const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95  
};

const monthlyTotal = Object.values(monthlyExpenses).reduce(
    (acc, expense) => acc + expense, 0
);*/




/*const users = {
  '2345234': {
    name: "John",
    age: 29
  },
  '8798129': {
    name: "Jane",
    age: 42
  },
  '1092384': {
    name: "Fred",
    age: 17 
  }
};
console.log(Object.entries(users));



const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }  
  return acc;
}, []);
console.log(usersOver20);*/