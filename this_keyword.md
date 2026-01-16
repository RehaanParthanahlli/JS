// Difference between lexical scope and dynammic scope
//- Lexical (static) scope: Variables are accessible only within the block or function where they are defined, and in any nested blocks/functions inside it.
//- Dynamic scope (contrast): Variables would be resolved based on the call stack at runtime, but most modern languages (like JavaScript, Python, C, Java) use lexical scope.




// 1. Object method shorthand vs. function property
const obj1 = {
  funcName: function() {
    console.log("obj1.funcName -> this:", this);
  }
};
obj1.funcName(); // 'this' is obj1

const standalone = obj1.funcName;
standalone(); // 'this' is undefined (strict mode) or global object (non-strict)


// 2. Nested functions and 'this'
const obj2 = {
  outer: function() {
    console.log("obj2.outer -> this:", this); // obj2

    function inner() {
      console.log("obj2.outer.inner -> this:", this);
    }
    inner(); // 'this' is undefined/global
  }
};
obj2.outer();


// 3. Arrow functions preserve 'this'
const obj3 = {
  outer: function() {
    const inner = () => {
      console.log("obj3.outer.inner (arrow) -> this:", this);
    };
    inner(); // 'this' is obj3
  }
};
obj3.outer();


// 4. Saving reference to 'this'
const obj4 = {
  outer: function() {
    const self = this;
    function inner() {
      console.log("obj4.outer.inner (self) -> self:", self);
    }
    inner(); // 'self' is obj4
  }
};
obj4.outer();


// 5. Using bind to fix 'this'
function inner() {
  console.log("boundInner -> this:", this);
}
const boundInner = inner.bind(obj4);
boundInner(); // 'this' is obj4