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
JavaScript Objects & Related Concepts — INDEX
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
JavaScript Objects — Dynamic Keys, Mutability & Destructuring (INDEX)
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
