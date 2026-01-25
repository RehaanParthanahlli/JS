📌 Summary of Topics Covered in JavaScript Basics

1. Console & Variables
   - console.log("Hello World");
   - var, let, const declarations
   - undefined vs null
   - camelCase naming convention

2. Naming Rules
   - Allowed: letters, numbers, $, _
   - Cannot start with a number
   - Cannot use reserved keywords (e.g., var, let)

3. Global Objects
   - Browser → window
   - Node.js → global
   - Universal → globalThis
   - Example: window.x = 10; globalThis.myVar = 10;

4. Modes
   - Sloppy mode (default)
   - Strict mode ("use strict") → catches more errors 

5. Hoisting
   - var declarations are hoisted (moved to top of scope)
   - let & const are block-scoped and not hoisted the same way
   - Temporal Dead Zone (TDZ) for let/const

6. Variable Shadowing
   - var is function-scoped → can cause shadowing issues
   - let/const are block-scoped → safer for inner blocks

7. Escape Sequences & Strings
   - \n (newline), \t (tab), \" (quotes), \'
   - Template literals with backticks (`) and string interpolation ${variable}
   - Multi-line strings using backticks

8. Constants & Reassignment
   - const must be initialized and cannot be reassigned
   - let can be reassigned but not redeclared in same scope
   - var can be redeclared without error

9. Case Sensitivity
   - name, Name, NAME are treated as different identifiers

✅ Key Takeaway:
Use let/const for modern JS (block scope, safer).
Prefer template literals for strings.
Avoid var to prevent hoisting/shadowing issues.



📌 Summary of Topics Covered in JavaScript (Part 2)

1. Variable Naming Conventions
   - Use `is`, `has` for booleans → e.g., isModalVisible, hasPosition
   - Use ALL_CAPS for constants → e.g., const COLOR_RED = '#f00';

2. Data Types & Conditionals
   - Primitive types: string, number, boolean, undefined, null, symbol
   - Everything else → Object
   - if / else if / else statements
   - switch statements for cleaner branching

3. Type Conversion
   - Explicit: String(123), Number("42"), Boolean(1)
   - Implicit (coercion): '1' * '2' → 2, '10' + 20 → "1020"
   - console.log(typeof value);

4. Truthy & Falsy Values
   - Falsy: 0, '', null, undefined, NaN, -0, 0n
   - Truthy: non-empty strings, non-zero numbers, objects, functions, Infinity
   - Always prefer `===` (strict equality) over `==` (loose equality)

5. Conditionals & Ternaries
   - if/else vs ternary operator `?:`
   - Nested ternaries for multiple conditions
   - Example: const greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : "What's up?";

6. Short-Circuiting
   - `||` returns first truthy value
   - `&&` returns first falsy value
   - Example: const username = isEmailVerified && response || "guest";

7. Operator Precedence (simplified)
   - () → highest
   - Unary (!, ++, --)
   - *, /, %
   - +, -
   - Relational (<, >, <=, >=)
   - Equality (==, ===, !=)
   - Bitwise (&, ^, |)
   - Logical (&&, ||)
   - Ternary (?:)
   - Assignment (=, +=, etc.)
   - Comma (,)

8. Functions (Intro)
   - Purpose: reusable blocks of code
   - Closures: functions that capture variables from outer scope
   - Arrow functions: concise syntax, useful for short-circuiting
   - Advanced: partial application, more readable parameter handling
   - Follows -
      1. 🔹 Arrow Functions
         - Explicit return
         const fn = (param) => { return value; }
         - Implicit return
         const fn = param => value;
         - Properties:
         + Concise syntax
         + Lexical this
         - No own this
         - No arguments object

      2. 🔹 Callback Functions / Higher-Order Functions
         - Function passed as argument, executed later
         - Example:
         function greetUser(name, callback) {
            return callback(capitalize(name));
         }

      3. 🔹 Partial Application
         - Pre-filling arguments to create new functions
         - Example:
         function add(a) {
            return function(b) { return a + b; };
         }
         const addFive = add(5);

      4. 🔹 Partial Application with REST API
         - Basic fetch
         - Using partial application to fix baseUrl
         - Example:
         const api = getData('https://jsonplaceholder.typicode.com');
         api('/posts');

      5. 🔹 Partial Application + Callback
         - Nested closures with callback
         - Arrow function version:
         const getData = baseUrl => route => callback =>
            fetch(`${baseUrl}${route}`)
               .then(res => res.json())
               .then(data => callback(data));

==========================
📝 Key Takeaways
==========================
- Arrow functions simplify syntax and handle `this` differently.
- Callbacks are functions passed into other functions, often used in async code.
- Higher-order functions take/return functions.
- Closures allow functions to "remember" outer scope variables.
- Partial application helps reuse functions by fixing some arguments.
- Combining arrow functions, callbacks, and partial application makes code concise and powerful.

==================================================
Part-3
==================================================

1. Objects Basics
   - Key–value pairs
   - Keys usually strings, values any type
   - Used to group related data and behavior

2. Methods
   - Functions inside objects
   - Accessed via: objectName.methodName()

3. Global Objects (Runtime Provided)
   - window (browser)
   - global (Node.js)
   - globalThis (universal)
   - Expose methods like console.log(), alert(), prompt()

4. Object Creation
   - Object literal syntax {}
   - Properties: key: value
   - Method shorthand syntax

5. ES6 Shorthand Properties
   - Property name inferred from variable name
   - Reduces repetition
   - Improves readability

6. Accessing Object Properties
   - Dot notation (obj.key)
   - Objects as “file cabinets”
   - Variables as “boxes”

7. Objects vs Dynamic Data
   - Best for structured, stable data
   - Not ideal for constantly changing values

8. Primitive Data Types
   - undefined, null, boolean, number, string, symbol
   - Passed by value

9. Non-Primitive Data (Objects)
   - Passed by reference
   - Stored as memory references

10. Equality Comparison
    - Primitives compare values
    - Objects compare references
    - Identical objects ≠ equal

11. Pass by Value vs Pass by Reference
    - Primitives → copied
    - Objects → shared reference
    - Changes affect all references

12. Subtypes of Objects
    - Array → ordered collection
    - Set → unique values
    - Map → key–value pairs (any key type)
    - Function → callable object with properties

13. Objects as Abstract Data Types (ADTs)
    - Combine data and behavior
    - Foundation for complex structures

14. Comparison with C Structs
    - C struct → fixed, typed, no methods
    - JS object → dynamic, extensible, methods allowed

15. Shared References Example
    - Multiple variables can reference the same object
    - Modifying one affects all

16. Big Picture
    - Objects are the backbone of JavaScript
    - Everything non-primitive is an object
    - Core to frontend and backend development
==================================================

==================================================
Part-4
==================================================

1. Dot Notation vs Variable Lookup
   - colors.key looks for literal property "key"
   - Does NOT use the variable value
   - Returns undefined/null if "key" property does not exist

2. Bracket Notation (Dynamic Access)
   - colors[key] uses the variable value of key
   - Required for dynamic property access
   - Required when key is not a valid identifier

3. Why [] Exists
   - Enables dynamic keys
   - Allows runtime-determined property names
   - Supports keys with spaces or special characters

4. Object Mutability
   - Objects are mutable even when declared with const
   - Properties can be added, updated, or deleted
   - const prevents reassignment, not mutation

5. Adding & Updating Properties
   - obj.newKey = value
   - obj[key] = value
   - Existing keys can be overwritten safely

6. Keys with Spaces or Special Characters
   - Must be accessed using bracket notation
   - Example: obj["yellow Color"]
   - Dot notation does NOT work here

7. Dynamic Property Creation
   - Use variables as keys
   - Example:
     const color = "green"
     colors[color] = "#0f0"

8. delete Operator
   - Removes a property from an object
   - Works with both dot and bracket notation
   - Example:
     delete obj.key
     delete obj["key with space"]

9. Rule of Thumb (Very Important)
   - Static / known keys → use dot notation
   - Dynamic / computed keys → use bracket notation

10. Object Destructuring (Basics)
    - Extract properties into variables
    - Avoid repetitive obj.property access
    - Improves readability

11. Destructuring Nested Objects
    - Access nested properties directly
    - Example:
      const { details: { title } } = user

12. Destructuring in Function Parameters
    - Destructure directly in function signature
    - Clean and expressive function APIs
    - Common in modern JS & backend code

13. Big Picture
    - Objects support dynamic behavior
    - Bracket notation unlocks runtime flexibility
    - Destructuring simplifies data extraction
    - These patterns are critical for real-world JS

==================================================

==================================================
Part-5
==================================================

1. Merging Objects (Object.assign)
   - Combines properties from source objects into a target object
   - Syntax: Object.assign(target, source)
   - Modifies the target object directly
   - Later properties overwrite earlier ones

2. Safe Object Merging (No Mutation)
   - Use empty object as target
   - Syntax: Object.assign({}, obj1, obj2)
   - Prevents modification of original objects

3. Object Merging Using Spread Operator (ES6)
   - Syntax: { ...obj1, ...obj2 }
   - Cleaner and more readable than Object.assign
   - Later properties override earlier ones
   - Additional properties can be overridden inline

4. Property Override Rule
   - When duplicate keys exist
   - The last defined value wins
   - Applies to Object.assign and spread operator

5. const and Object Mutability
   - const prevents reassignment
   - Does NOT prevent mutation
   - Object properties can still change

6. Objects and Key Limitations
   - Object keys are always strings
   - Non-string keys are implicitly converted to strings
   - Can cause key collisions

7. Why Maps Were Introduced (ES6)
   - Allow keys of ANY data type
   - Preserve insertion order
   - Avoid implicit string conversion

8. Map Basics
   - Created using new Map()
   - Accepts iterable of key–value pairs
   - Methods: set(), get(), keys(), forEach()
   - Property: size (instead of length)

9. Iterating Over Maps
   - map.keys()
   - map.forEach((value, key) => {})
   - Order is preserved

10. Maps vs Objects
    - Objects: simple, unordered, string keys only
    - Maps: ordered, any-type keys, better performance for frequent updates

11. Using Objects as Map Keys
    - Maps allow objects as keys
    - Objects cannot reliably use objects as keys
    - Useful for private or secret mappings

12. WeakMap Concept
    - Keys must be objects only
    - Does NOT prevent garbage collection
    - Automatically removes keys when objects are deleted
    - Used for memory-sensitive or private data storage

13. WeakMap Limitations
    - No size property
    - Not iterable
    - Keys must be objects

14. Counting Entries
    - Objects: Object.keys(obj).length
    - Maps: map.size

15. Declaration Keywords (Important Note)
    - Map is NOT a replacement for var / let / const
    - Map is a data structure
    - Use let or const to declare Maps based on use case

16. Big Picture Summary
    - Object.assign and spread merge objects
    - Maps solve object key limitations
    - WeakMaps enable memory-safe key-object associations
    - Choosing between Object, Map, and WeakMap depends on use case

==================================================

// 1. Map
// - Declared like let/const
// - Does not replace var
// - Has its own use cases

// 2. Normal object method
// - Functions inside objects bind 'this' dynamically
// - Example: getBio() works with this.username and this.title

// 3. Problem with setTimeout
// - Regular function inside setTimeout loses 'this'
// - Results in undefined/null for this.username

// 4. Workaround with 'that = this'
// - Capture 'this' in a variable
// - Use 'that.username' inside setTimeout

// 5. Better solution: arrow function in callback
// - Arrow functions lexically bind 'this' from surrounding scope
// - Keeps correct reference to object inside setTimeout

// 6. Caveat: arrow functions as object methods
// - Arrow functions do NOT bind 'this' to the object
// - Using arrow for methods like getBio() breaks 'this'
// - Suitable only for callbacks, not for defining object methods

// 7. Difference between lexical scope and dynamic scope.

// Summary:
// - Normal functions: 'this' dynamically bound to object
// - Arrow functions: 'this' lexically bound → good for callbacks, bad for object methods

# 📑 Arrays & Sets – Agenda & Topics

## 1. Flexible Collections of Data
- Arrays vs Objects
- Order preservation in arrays vs objects
- Need for known keys in objects

## 2. Operations on Array Elements
- Adding elements: push, unshift, splice
- Removing elements: pop, shift, splice
- Accessing length
- Iterating: forEach, map

## 3. Subsets of Arrays
- slice (non‑mutating copy)
- splice (mutating add/remove)
- filter (subset based on condition)

## 4. Transforming Arrays
- map (element‑wise transformation → new array)
- reduce (accumulation left → right)
- reduceRight (accumulation right → left)
- Method chaining (map + forEach)

## 5. Searching & Checking
- indexOf / lastIndexOf
- includes
- find / findIndex
- some / every

## 6. Sorting & Reversing
- sort
- reverse

## 7. Flattening & Combining
- concat
- flat
- flatMap

## 8. String Conversions
- join
- toString

## 9. Newer Methods
- at
- with
- toReversed
- toSorted
- toSpliced
- Array.from
- Array.of

## 10. Practical Examples
- Arrays of objects (e.g., temperatures with properties)
- Using some vs every
- Using map to add new properties
- Using forEach for side effects
- Spread operator for immutability

# 📑 Index of Discussed Topics

**Filter**
- `array.filter(callback)`
- Example: filter restaurants by name or distance

**String Methods**
- Searching & Checking: `length`, `charAt`, `charCodeAt`, `codePointAt`, `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`
- Extracting: `slice`, `substring`, `substr (deprecated)`, `at`
- Modifying: `concat`, `repeat`, `replace`, `replaceAll`, `padStart`, `padEnd`, `trim`, `trimStart`, `trimEnd`, `toLowerCase`, `toUpperCase`
- Splitting & Matching: `split`, `match`, `matchAll`, `search`
- Iteration: `for...of`, direct indexing `str[0]`
- Conversion: `valueOf`, `toString`

**Object Methods**
- Keys/Values/Entries: `Object.keys`, `Object.values`, `Object.entries`, `Object.fromEntries`
- Property Management: `Object.assign`, `Object.create`, `Object.defineProperty`, `Object.defineProperties`
- Immutability: `Object.freeze`, `Object.seal`, `Object.preventExtensions`
- Checks: `Object.is`, `Object.hasOwn`, `Object.getOwnPropertyNames`, `Object.getOwnPropertySymbols`, `Object.getOwnPropertyDescriptor`, `Object.getOwnPropertyDescriptors`
- State: `Object.isFrozen`, `Object.isSealed`, `Object.isExtensible`
- Type Checking: `Object.prototype.toString.call(obj)`

**Map Methods**
- Basic Operations: `set`, `get`, `has`, `delete`, `clear`
- Property: `size`
- Iteration: `keys`, `values`, `entries`, `forEach`
- Example: `for (const [key, value] of map) { ... }`

**Reduce**
- `array.reduce(callback, initialValue)`
- Example: summing prices of menu items

1. **Array Mutation in JavaScript**
   - Example: `const allMenu = lunchMenu;`
   - Concept: Reference assignment leads to mutation of the original array.

2. **Pass by Reference**
   - Explanation: Assigning one array to another variable points to the same memory reference.
   - Effect: Changes in one variable reflect in the original array.

3. **Array `push()` Method**
   - Usage: Adds new elements to the end of an array.
   - Example: `allMenu.push("Juice");`

4. **Array `concat()` Method**
   - Usage: Creates a new array by merging existing arrays or values.
   - Example: `const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');`
   - Key Point: Does not mutate the original array.

5. **Spread Operator (`...`)**
   - Usage: Creates a shallow copy of an array.
   - Example: `const allMenu = [...lunchMenu];`
   - Benefit: Prevents mutation of the original array when modifying the copy.

6. **Immutability in Arrays**
   - Concept: Using `concat()` or spread operator to avoid unintended side effects.
   - Importance: Ensures original data remains unchanged.

7. **Console Logging**
   - Usage: `console.log()` to inspect array contents and verify behavior.



// OBJECTS
const obj = { one: 1, two: 2 };
for (const key in obj) { console.log('value', obj[key]); }

const user = { name: 'John', age: 29 };
console.log(Object.keys(user));             // ['name','age']
console.log(Object.values(user));           // ['John',29]
console.log(Object.entries(user));          // [['name','John'],['age',29]]

const monthlyExpenses = { food: 400, rent: 1700, insurance: 550, internet: 49, phone: 95 };
const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense, 0);
console.log(monthlyTotal);

const users = {
  '2345234': { name: "John", age: 29 },
  '8798129': { name: "Jane", age: 42 },
  '1092384': { name: "Fred", age: 17 }
};
console.log(Object.entries(users));
const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) acc.push({ ...user, id });
  return acc;
}, []);
console.log(usersOver20);

// SETS
const customerDishes = [
  "Chicken Wings","Fish Sandwich","Beef Stroganoff","Grilled Cheese","Blue Cheese Salad",
  "Chicken Wings","Reuben Sandwich","Grilled Cheese","Fish Sandwich","Chicken Pot Pie",
  "Fish Sandwich","Beef Stroganoff"
];
console.log(new Set([1, 1, 3]).size);              // 2
console.log(new Set([[1], [1], [3]]).size);        // 3
const numbersSet = new Set([[1], [2], [3]]);
for (const num of numbersSet) console.log(num);
const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes);

// ARRAYS
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) console.log(numbers[i]);
numbers.forEach(number => console.log(number));

numbers.map(n => n * 2);                  // transform
numbers.filter(n => n % 2 === 0);         // select
numbers.reduce((acc, n) => acc + n, 0);   // accumulate
numbers.some(n => n > 3);                 // any true?
numbers.every(n => n > 0);                // all true?
numbers.find(n => n === 3);               // first match
numbers.findIndex(n => n === 3);          // index of match
numbers.slice(1, 3);                      // subarray
numbers.concat([6, 7]);                   // merge arrays
numbers.includes(4);                      // membership
[...numbers];                             // spread copy