# JavaScript — Interview-Focused Revision

> **Goal:** Revise the JavaScript concepts most frequently asked in technical interviews.<br>
> **Focus:** Core concepts, output-based questions, commonly asked differences, and practical understanding.<br>
> **Skip:** Rare/advanced JavaScript features unless they are commonly used in interviews.

---

# 1. JavaScript Basics

## What is JavaScript?

JavaScript is a **high-level, dynamically typed, interpreted/JIT-compiled programming language** primarily used to make web pages interactive.

It can run in:

* Browser
* Node.js
* Deno
* Bun
* Other JavaScript runtimes

### HTML + CSS + JavaScript

```text
              Web Application
                    |
        +-----------+-----------+
        |           |           |
       HTML        CSS      JavaScript
        |           |           |
    Structure     Style      Behavior
```

Example:

```html
<button id="btn">Click Me</button>

<script>
document.getElementById("btn").onclick = function () {
    alert("Hello!");
};
</script>
```

---

# 2. `var`, `let`, and `const`

This is one of the **most frequently asked JavaScript interview questions**.

| Feature       | var      | let   | const |
| ------------- | -------- | ----- | ----- |
| Scope         | Function | Block | Block |
| Redeclaration | Yes      | No    | No    |
| Reassignment  | Yes      | Yes   | No    |
| Hoisted       | Yes      | Yes   | Yes   |
| TDZ           | No       | Yes   | Yes   |

### Example

```javascript
var x = 10;
var x = 20;       // allowed

let y = 10;
// let y = 20;    // Error

const z = 10;
// z = 20;        // Error
```

### Block scope

```javascript
{
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c); // 30

// console.log(a); // Error
// console.log(b); // Error
```

### Interview rule

Prefer:

```javascript
const
```

by default.

Use:

```javascript
let
```

when reassignment is required.

Avoid `var` in modern JavaScript unless there is a specific reason.

---

# 3. Data Types

JavaScript has **primitive** and **non-primitive/reference** types.

```text
JavaScript Data Types
        |
        +-------------------+
        |                   |
    Primitive          Reference
        |                   |
   +----+----+          Object
   |         |             |
 String    Number       Array
 Boolean   BigInt       Function
 Undefined Symbol
 Null
```

## Primitive Types

```javascript
String
Number
Boolean
Undefined
Null
BigInt
Symbol
```

Example:

```javascript
let name = "Aadi";
let age = 21;
let passed = true;
let x;
let y = null;
let big = 12345678901234567890n;
```

---

# 4. `null` vs `undefined`

Very common interview question.

### `undefined`

A variable exists but has not been assigned a value.

```javascript
let x;

console.log(x);
// undefined
```

### `null`

Represents an intentional absence of value.

```javascript
let user = null;
```

### Difference

| `undefined`                    | `null`                           |
| ------------------------------ | -------------------------------- |
| Value not assigned             | Intentional empty value          |
| Usually produced automatically | Usually assigned explicitly      |
| Type is `"undefined"`          | `typeof null` returns `"object"` |

```javascript
console.log(typeof undefined); // "undefined"

console.log(typeof null);      // "object"
```

> `typeof null === "object"` is a famous historical JavaScript quirk.

---

# 5. `==` vs `===`

Extremely common.

## `==`

Loose equality.

It performs **type conversion** before comparison.

```javascript
5 == "5"
```

Result:

```text
true
```

## `===`

Strict equality.

Checks:

```text
value + type
```

```javascript
5 === "5"
```

Result:

```text
false
```

### Comparison

|                 | `==`          | `===` |
| --------------- | ------------- | ----- |
| Type conversion | Yes           | No    |
| Checks type     | No            | Yes   |
| Recommended     | Usually avoid | Yes   |

Example:

```javascript
console.log(0 == false);   // true
console.log(0 === false);  // false

console.log("" == false);  // true
console.log("" === false); // false
```

### Interview answer

> `==` performs type coercion, while `===` compares both type and value without implicit conversion.

---

# 6. Type Coercion

JavaScript can automatically convert one data type into another.

```javascript
console.log("5" + 2);
```

Output:

```text
52
```

Because `+` with a string performs string concatenation.

But:

```javascript
console.log("5" - 2);
```

Output:

```text
3
```

Because `-` converts `"5"` to a number.

### Important examples

```javascript
"5" + 2      // "52"
"5" - 2      // 3
"5" * 2      // 10
"5" / 2      // 2.5
```

---

# 7. Truthy and Falsy Values

JavaScript converts values to Boolean in conditional contexts.

## Falsy values

Remember these:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is generally **truthy**.

Example:

```javascript
if ("hello") {
    console.log("Runs");
}
```

```javascript
if (0) {
    console.log("Doesn't run");
}
```

### Common interview trap

```javascript
Boolean("false")
```

Output:

```text
true
```

Because `"false"` is a non-empty string.

---

# 8. Operators

Important operators for interviews:

### Arithmetic

```javascript
+
-
*
/
%
**
```

### Comparison

```javascript
>
<
>=
<=
==
===
!=
!==
```

### Logical

```javascript
&&
||
!
```

### Nullish coalescing

```javascript
??
```

Example:

```javascript
let name = null;

console.log(name ?? "Guest");
```

Output:

```text
Guest
```

---

# 9. Functions

Functions are one of the most important JavaScript concepts.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
```

Output:

```text
5
```

---

# 10. Function Declaration vs Function Expression

## Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

## Function Expression

```javascript
const greet = function () {
    console.log("Hello");
};
```

### Important difference

Function declarations are hoisted differently from function expressions.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Works.

But:

```javascript
greet();

const greet = function () {
    console.log("Hello");
};
```

Results in an error because `greet` is accessed before initialization.

---

# 11. Arrow Functions

Modern JavaScript frequently uses arrow functions.

Normal:

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Short form:

```javascript
const add = (a, b) => a + b;
```

### Important difference

Arrow functions **do not have their own `this`**.

This is a common interview question.

---

# 12. Callback Functions

A callback is a function passed to another function.

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function done() {
    console.log("Done");
}

greet("Aadi", done);
```

Flow:

```text
greet()
  |
  +--> print Hello
  |
  +--> call callback()
             |
             v
           done()
```

Callbacks are heavily used in:

* Array methods
* Events
* Async programming
* APIs

---

# 13. Higher-Order Functions

A higher-order function either:

1. Takes a function as an argument
2. Returns a function

Example:

```javascript
function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;

console.log(operate(2, 3, add));
```

Output:

```text
5
```

---

# 14. Scope

Scope determines where a variable can be accessed.

Main types:

```text
Scope
 |
 +-- Global Scope
 |
 +-- Function Scope
 |
 +-- Block Scope
```

Example:

```javascript
let global = 10;

function test() {
    let local = 20;

    if (true) {
        let block = 30;
    }
}
```

```text
Global Scope
     |
     v
 test() Function Scope
     |
     v
 if Block Scope
```

---

# 15. Lexical Scope

JavaScript uses **lexical scoping**.

A function can access variables based on where the function was **defined**, not where it is called.

```javascript
let x = 10;

function outer() {
    let y = 20;

    function inner() {
        console.log(x);
        console.log(y);
    }

    inner();
}

outer();
```

`inner()` can access variables from its outer lexical environment.

---

# 16. Closure

One of the **most important JavaScript interview topics**.

A closure occurs when a function remembers variables from its outer scope even after the outer function has finished executing.

Example:

```javascript
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```

### Why does `count` survive?

```text
counter()
   |
   +--> count = 0
   |
   +--> returns inner function
              |
              v
       Closure remembers
       count
              |
              v
       increment()
       increment()
       increment()
```

### Common uses

Closures are useful for:

* Data privacy
* State management
* Function factories
* Callbacks
* Event handlers

### Interview definition

> A closure is a function together with its lexical environment, allowing it to remember and access variables from its outer scope even after the outer function has returned.

---

# 17. Hoisting

JavaScript moves declarations to the top of their applicable scope during the creation phase.

Example:

```javascript
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

Conceptually:

```javascript
var x;

console.log(x);

x = 10;
```

---

## `let` and `const` Hoisting

They are also hoisted, but they remain in the **Temporal Dead Zone (TDZ)** until initialization.

```javascript
console.log(x);

let x = 10;
```

Result:

```text
ReferenceError
```

### Hoisting diagram

```text
JavaScript Execution
        |
        v
Creation Phase
        |
        +--> Variables / Functions registered
        |
        v
Execution Phase
        |
        +--> Code executes
```

---

# 18. Temporal Dead Zone (TDZ)

The TDZ is the period between entering a scope and initializing a `let` or `const` variable.

```javascript
console.log(x); // ReferenceError

let x = 10;
```

```text
Scope starts
    |
    |  TDZ
    |
    v
let x = 10
    |
    v
Variable initialized
```

---

# 19. Execution Context

JavaScript code executes inside an **execution context**.

Main types:

```text
Execution Context
       |
       +-- Global Execution Context
       |
       +-- Function Execution Context
       |
       +-- Eval Context
```

A function call creates a new execution context.

Example:

```javascript
let x = 10;

function add(a, b) {
    return a + b;
}

add(2, 3);
```

Conceptually:

```text
Global Execution Context
          |
          |
        add()
          |
          v
Function Execution Context
          |
       a = 2
       b = 3
          |
          v
       return 5
```

---

# 20. Call Stack

JavaScript uses a **call stack** to keep track of function execution.

```javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

Stack:

```text
        +-----------+
        |   third   |
        +-----------+
        |   second  |
        +-----------+
        |   first   |
        +-----------+
        |   global  |
        +-----------+
```

Functions are removed when they finish.

### LIFO

Call stack follows:

> **Last In, First Out**

---

# 21. JavaScript Runtime

JavaScript itself is single-threaded, but the runtime provides mechanisms for asynchronous operations.

Browser model:

```text
              JavaScript
                  |
             Call Stack
                  |
                  v
        +-------------------+
        | Web APIs / Browser|
        |                   |
        | setTimeout        |
        | DOM Events        |
        | fetch             |
        +-------------------+
                  |
                  v
             Queues
                  |
                  v
             Event Loop
                  |
                  v
             Call Stack
```

---

# 22. Synchronous vs Asynchronous

## Synchronous

Tasks execute one after another.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

## Asynchronous

A task can be started without blocking subsequent JavaScript execution.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
```

Output:

```text
A
C
B
```

---

# 23. Event Loop

This is one of the **most frequently asked JavaScript interview topics**.

The Event Loop coordinates:

* Call Stack
* Web APIs/runtime APIs
* Task queues
* Microtask queue

Basic flow:

```text
             JavaScript Code
                    |
                    v
               Call Stack
                    |
             +------+------+
             |             |
          Complete       Async
             |             |
             |          Web APIs
             |             |
             |             v
             |           Queue
             |             |
             +------< Event Loop
                           |
                           v
                      Call Stack
```

The event loop continuously checks whether the call stack is empty and schedules queued work.

---

# 24. Microtask vs Macrotask

Very common output-based interview question.

### Microtasks

Examples:

```javascript
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()
```

### Macrotasks / Tasks

Common examples:

```javascript
setTimeout()
setInterval()
```

Simplified priority:

```text
Call Stack
    |
    v
Microtask Queue
    |
    v
Task Queue
```

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Why?

```text
1. A executes
2. setTimeout registered
3. Promise callback enters microtask queue
4. D executes
5. Microtask C executes
6. Timer callback B executes
```

---

# 25. Promises

A Promise represents the eventual result of an asynchronous operation.

States:

```text
             Promise
                |
        +-------+-------+
        |       |       |
     Pending  Fulfilled Rejected
                |         |
             Success     Failure
```

Example:

```javascript
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});
```

---

# 26. `.then()`, `.catch()`, `.finally()`

```javascript
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });
```

### Purpose

| Method      | Purpose               |
| ----------- | --------------------- |
| `then()`    | Success               |
| `catch()`   | Error handling        |
| `finally()` | Runs after completion |

---

# 27. `async` / `await`

Modern way of working with Promises.

```javascript
async function getData() {
    const result = await fetch("/api/data");

    console.log(result);
}
```

`await` pauses execution of the **async function** until the Promise settles; it does not block the entire JavaScript runtime.

### Error handling

```javascript
async function getData() {
    try {
        const response = await fetch("/api/data");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
```

---

# 28. Promise vs Async/Await

| Promise                     | Async/Await                         |
| --------------------------- | ----------------------------------- |
| Uses `.then()` / `.catch()` | Looks synchronous                   |
| Can be chained              | Easier to read                      |
| Good for chaining           | Good for sequential async logic     |
| Older style                 | Modern syntax built around Promises |

Important:

> `async/await` does not replace Promises. It is syntax built around Promise-based asynchronous operations.

---

# 29. Arrays

Arrays store ordered collections.

```javascript
const numbers = [1, 2, 3, 4, 5];
```

Important methods:

```text
push()
pop()
shift()
unshift()

map()
filter()
reduce()
forEach()
find()
some()
every()
includes()
sort()
slice()
splice()
```

---

# 30. `map()`

Creates a **new array** by transforming every element.

```javascript
const nums = [1, 2, 3];

const result = nums.map(x => x * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

Diagram:

```text
[1, 2, 3]
    |
   map
    |
    v
[2, 4, 6]
```

---

# 31. `filter()`

Creates a new array containing elements that satisfy a condition.

```javascript
const nums = [1, 2, 3, 4];

const result = nums.filter(x => x % 2 === 0);
```

Output:

```text
[2, 4]
```

```text
[1, 2, 3, 4]
        |
      filter
        |
        v
      [2, 4]
```

---

# 32. `reduce()`

Reduces an array to a single value.

```javascript
const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum);
```

Output:

```text
10
```

Flow:

```text
Initial accumulator = 0

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

---

# 33. `forEach()` vs `map()`

Very common interview question.

| `forEach()`                        | `map()`                          |
| ---------------------------------- | -------------------------------- |
| Executes function for each element | Transforms elements              |
| Returns `undefined`                | Returns new array                |
| Usually used for side effects      | Used to create transformed array |

Example:

```javascript
nums.forEach(x => console.log(x));
```

vs

```javascript
const doubled = nums.map(x => x * 2);
```

---

# 34. `slice()` vs `splice()`

Frequently asked.

## `slice()`

Does not modify original array.

```javascript
const arr = [1, 2, 3, 4];

const result = arr.slice(1, 3);
```

```text
result = [2, 3]
arr    = [1, 2, 3, 4]
```

## `splice()`

Modifies the original array.

```javascript
const arr = [1, 2, 3, 4];

arr.splice(1, 2);
```

Result:

```text
arr = [1, 4]
```

|                   | slice     | splice           |
| ----------------- | --------- | ---------------- |
| Modifies original | No        | Yes              |
| Purpose           | Extract   | Add/remove       |
| Returns           | New array | Removed elements |

---

# 35. Objects

Objects store data as key-value pairs.

```javascript
const user = {
    name: "Aadi",
    age: 21,
    city: "Sangli"
};
```

Access:

```javascript
console.log(user.name);
console.log(user["age"]);
```

---

# 36. Object Destructuring

Instead of:

```javascript
const name = user.name;
const age = user.age;
```

Use:

```javascript
const { name, age } = user;
```

---

# 37. Array Destructuring

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
```

---

# 38. Spread Operator

The spread operator is:

```javascript
...
```

## Arrays

```javascript
const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];
```

Result:

```text
[1, 2, 3, 4]
```

## Objects

```javascript
const user = {
    name: "Aadi"
};

const updatedUser = {
    ...user,
    age: 21
};
```

---

# 39. Rest Parameter

Rest also uses:

```javascript
...
```

but collects remaining values.

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4);
```

Result:

```text
10
```

### Spread vs Rest

```text
Spread
...
Expands values

Rest
...
Collects values
```

---

# 40. `this` Keyword

`this` is one of the most confusing and frequently asked topics.

Its value depends on **how a function is called**.

Example:

```javascript
const user = {
    name: "Aadi",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Aadi
```

Here:

```text
this → user
```

---

# 41. Arrow Function and `this`

Arrow functions do not create their own `this`.

```javascript
const user = {
    name: "Aadi",

    greet: () => {
        console.log(this.name);
    }
};
```

This does **not** behave like a normal method.

Important interview statement:

> Arrow functions inherit `this` from their surrounding lexical scope.

---

# 42. `call()`, `apply()`, and `bind()`

These are commonly asked.

They allow controlling `this` for regular functions.

## `call()`

Arguments passed individually.

```javascript
function greet(city) {
    console.log(this.name, city);
}

const user = {
    name: "Aadi"
};

greet.call(user, "Sangli");
```

---

## `apply()`

Arguments passed as an array.

```javascript
greet.apply(user, ["Sangli"]);
```

---

## `bind()`

Returns a new function.

```javascript
const newFunction = greet.bind(user, "Sangli");

newFunction();
```

### Difference

|                      | call            | apply           | bind         |
| -------------------- | --------------- | --------------- | ------------ |
| Executes immediately | Yes             | Yes             | No           |
| Arguments            | Individual      | Array           | Individual   |
| Returns              | Function result | Function result | New function |

---

# 43. Prototype

JavaScript uses **prototype-based inheritance**.

Objects can inherit properties and methods through their prototype chain.

```text
Object
   |
   v
Prototype
   |
   v
Another Prototype
   |
   v
null
```

Example:

```javascript
const user = {
    name: "Aadi"
};

console.log(user.toString());
```

`toString()` isn't defined directly on `user`; it is available through the prototype chain.

---

# 44. Prototype Chain

When JavaScript tries to access a property:

```javascript
user.name
```

it first checks the object.

If not found:

```text
Object
  |
  | property not found
  v
Prototype
  |
  | not found
  v
Prototype's prototype
  |
  v
null
```

If it reaches `null`, JavaScript returns `undefined` for normal property lookup.

---

# 45. Classes

JavaScript provides class syntax over its prototype-based object model.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

const p = new Person("Aadi");

p.greet();
```

---

# 46. Constructor

The constructor runs when an object is created using `new`.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

```javascript
const p = new Person("Aadi", 21);
```

---

# 47. Inheritance

A class can inherit from another class using `extends`.

```javascript
class Animal {
    speak() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Bark");
    }
}
```

```javascript
const d = new Dog();

d.speak();
d.bark();
```

---

# 48. DOM

DOM = **Document Object Model**.

The browser converts HTML into a tree-like object structure.

HTML:

```html
<body>
    <h1>Hello</h1>
    <p>World</p>
</body>
```

DOM:

```text
Document
   |
  body
   |
   +---- h1
   |      |
   |    Hello
   |
   +---- p
          |
        World
```

JavaScript can manipulate this structure.

---

# 49. Selecting DOM Elements

Common methods:

```javascript
document.getElementById("id");

document.querySelector(".class");

document.querySelector("#id");

document.querySelectorAll("p");
```

Example:

```javascript
const heading = document.querySelector("h1");

heading.textContent = "Hello JavaScript";
```

---

# 50. Events

JavaScript can respond to user actions.

Examples:

```text
click
submit
input
change
keydown
keyup
mouseover
load
```

Example:

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

# 51. Event Bubbling

Events usually propagate from the target upward through ancestors.

```text
       document
          ↑
        body
          ↑
        div
          ↑
       button
          |
        CLICK
```

The event starts at the target and bubbles upward.

---

# 52. Event Capturing

Capturing is the opposite direction.

```text
document
   |
   v
 body
   |
   v
 div
   |
   v
button
```

Event flow:

```text
Capturing
    ↓
Target
    ↓
Bubbling
```

---

# 53. Event Delegation

Instead of attaching listeners to many child elements, attach one to a parent and use event propagation.

Example:

```javascript
document.querySelector("ul").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});
```

Useful when:

* Many child elements exist
* Elements are dynamically created
* You want fewer event listeners

---

# 54. `preventDefault()` vs `stopPropagation()`

Very common.

## `preventDefault()`

Prevents the browser's default action.

```javascript
event.preventDefault();
```

Example:

Preventing a form submission or link navigation.

## `stopPropagation()`

Stops the event from propagating further.

```javascript
event.stopPropagation();
```

### Difference

```text
preventDefault()
      |
      v
Stops browser's default behavior


stopPropagation()
      |
      v
Stops event propagation
```

---

# 55. Local Storage vs Session Storage

Web storage is commonly asked in frontend interviews.

| localStorage                       | sessionStorage                     |
| ---------------------------------- | ---------------------------------- |
| Persists until explicitly cleared  | Usually lasts for the page session |
| Shared across tabs for same origin | Scoped to a particular tab/session |
| Key-value strings                  | Key-value strings                  |

Example:

```javascript
localStorage.setItem("name", "Aadi");

const name = localStorage.getItem("name");
```

Remove:

```javascript
localStorage.removeItem("name");
```

Clear:

```javascript
localStorage.clear();
```

---

# 56. JSON

JSON = JavaScript Object Notation.

Commonly used for API communication.

```javascript
const user = {
    name: "Aadi",
    age: 21
};
```

Convert object → JSON:

```javascript
const json = JSON.stringify(user);
```

Convert JSON → object:

```javascript
const obj = JSON.parse(json);
```

```text
JavaScript Object
       |
 JSON.stringify()
       |
       v
      JSON
       |
 JSON.parse()
       |
       v
JavaScript Object
```

---

# 57. Fetch API

Used to make HTTP requests.

```javascript
fetch("https://example.com/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

With async/await:

```javascript
async function getUsers() {
    try {
        const response = await fetch(
            "https://example.com/api/users"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

---

# 58. Error Handling

Use:

```javascript
try
catch
finally
```

Example:

```javascript
try {
    riskyOperation();
} catch (error) {
    console.log(error);
} finally {
    console.log("Finished");
}
```

You can also throw errors:

```javascript
throw new Error("Something went wrong");
```

---

# 59. Shallow Copy vs Deep Copy

Important interview topic.

## Shallow Copy

Nested objects may still share references.

```javascript
const original = {
    name: "Aadi",
    address: {
        city: "Sangli"
    }
};

const copy = { ...original };
```

The top-level object is copied, but:

```text
original.address
       ↑
       |
     shared
       |
       ↓
copy.address
```

---

## Deep Copy

Nested structures are independently copied.

A modern approach for structured data is:

```javascript
const copy = structuredClone(original);
```

---

# 60. Primitive vs Reference Behavior

Primitive values are copied by value.

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
```

Objects are reference values.

```javascript
const a = {
    value: 10
};

const b = a;

b.value = 20;

console.log(a.value);
```

Output:

```text
20
```

Conceptually:

```text
a ─────┐
       |
       v
    { value: 20 }
       ^
       |
b ─────┘
```

---

# 61. Garbage Collection

JavaScript automatically manages memory.

When an object becomes unreachable, it can eventually be garbage collected.

```text
Create Object
     |
     v
Object reachable
     |
     v
No references
     |
     v
Eligible for Garbage Collection
     |
     v
Memory reclaimed
```

Modern JavaScript engines commonly use tracing garbage collection.

---

# 62. `NaN`

`NaN` means:

> Not a Number

Example:

```javascript
console.log(Number("hello"));
```

Output:

```text
NaN
```

Important:

```javascript
typeof NaN
```

returns:

```text
"number"
```

Also:

```javascript
NaN === NaN
```

returns:

```text
false
```

To test it:

```javascript
Number.isNaN(value)
```

---

# 63. Optional Chaining

Optional chaining:

```javascript
?.
```

Example:

```javascript
const user = {};

console.log(user.address?.city);
```

Instead of throwing an error when `address` is missing, the result is:

```text
undefined
```

---

# 64. Nullish Coalescing

Operator:

```javascript
??
```

Example:

```javascript
const name = null;

console.log(name ?? "Guest");
```

Output:

```text
Guest
```

Important difference from `||`:

```javascript
0 || 10
```

returns:

```text
10
```

but:

```javascript
0 ?? 10
```

returns:

```text
0
```

`??` only falls back for:

```text
null
undefined
```

---

# 65. Modules

JavaScript supports modular code.

Export:

```javascript
export const add = (a, b) => a + b;
```

Import:

```javascript
import { add } from "./math.js";
```

Benefits:

* Code organization
* Reusability
* Maintainability
* Avoiding unnecessary global variables

---

# 66. Common Output-Based Questions

## Question 1

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

---

## Question 2

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

Because of TDZ.

---

## Question 3

```javascript
console.log(1 + "2" + 3);
```

Output:

```text
123
```

---

## Question 4

```javascript
console.log(1 + 2 + "3");
```

Output:

```text
33
```

Evaluation:

```text
1 + 2 = 3
3 + "3" = "33"
```

---

## Question 5

```javascript
console.log(typeof null);
```

Output:

```text
object
```

---

## Question 6

```javascript
console.log([] == false);
```

Output:

```text
true
```

This is due to JavaScript's coercion rules.

---

## Question 7

```javascript
console.log([] === false);
```

Output:

```text
false
```

Different types.

---

## Question 8

```javascript
console.log(typeof NaN);
```

Output:

```text
number
```

---

## Question 9

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

---

## Question 10

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

Output:

```text
A
C
B
```

---

# 67. Most Important Interview Differences

## `var` vs `let` vs `const`

```text
var   → function scoped
let   → block scoped
const → block scoped + no reassignment
```

---

## `==` vs `===`

```text
==  → type coercion
=== → strict comparison
```

---

## `null` vs `undefined`

```text
null      → intentional absence
undefined → value not assigned
```

---

## `map()` vs `forEach()`

```text
map()     → returns new array
forEach() → returns undefined
```

---

## `slice()` vs `splice()`

```text
slice()  → doesn't modify original
splice() → modifies original
```

---

## `call()` vs `apply()` vs `bind()`

```text
call  → execute now, individual args
apply → execute now, array args
bind  → returns new function
```

---

## Promise vs async/await

```text
Promise
  |
  +--> then/catch/finally

async/await
  |
  +--> cleaner syntax for Promise-based code
```

---

## Shallow Copy vs Deep Copy

```text
Shallow → nested references may be shared
Deep    → nested structures copied independently
```

---

# 68. JavaScript Interview Priority

If your interview preparation time is limited, prioritize in this order:

```text
                    JavaScript
                        |
        +---------------+---------------+
        |               |               |
     VERY HIGH        HIGH           MEDIUM
        |               |               |
   var/let/const     DOM            Classes
   == vs ===         Events         Modules
   Hoisting          Fetch          Prototype
   Scope             JSON           Storage
   Closure           Arrays         Error handling
   this              map/filter
   Event Loop        reduce
   Promises          Destructuring
   async/await       Spread/Rest
   Call Stack
   Type Coercion
   Output Questions
```

---

# 69. What You Should Be Able to Explain in an Interview

Before considering JavaScript revision complete, you should be able to answer these without memorizing definitions:

### Core

* What is JavaScript?
* Is JavaScript interpreted or compiled?
* What are JavaScript data types?
* Difference between primitive and reference values?
* `var` vs `let` vs `const`
* `==` vs `===`
* What is type coercion?
* What are truthy/falsy values?
* `null` vs `undefined`
* What is `NaN`?

### Functions

* Function declaration vs expression
* Arrow functions
* Callback functions
* Higher-order functions
* Scope
* Lexical scope
* Closure
* Hoisting
* TDZ
* `this`
* `call`, `apply`, `bind`

### Asynchronous JavaScript

* Synchronous vs asynchronous
* Call stack
* Event loop
* Web APIs/runtime APIs
* Microtask queue
* Task/macrotask queue
* Promise
* `then/catch/finally`
* `async/await`

### Objects

* Objects
* Destructuring
* Spread/rest
* Shallow vs deep copy
* Prototype
* Prototype chain
* Classes
* Inheritance

### Arrays

* `map`
* `filter`
* `reduce`
* `forEach`
* `find`
* `some`
* `every`
* `slice`
* `splice`

### Browser

* DOM
* DOM manipulation
* Events
* Event bubbling
* Event capturing
* Event delegation
* `preventDefault`
* `stopPropagation`
* localStorage
* sessionStorage
* Fetch API

---

# 70. Final JavaScript Interview Mental Model

When you encounter a JavaScript interview question, think through this hierarchy:

```text
                    JavaScript
                        |
        +---------------+----------------+
        |               |                |
      Core           Browser           Async
        |               |                |
   Scope             DOM              Promise
   Hoisting          Events           async/await
   Closure           Storage          Event Loop
   this              Fetch            Queues
   Types             JSON             Call Stack
        |
        v
     Objects
        |
   +----+----+
   |         |
Prototype   Classes
   |
Inheritance

        +
        |
      Arrays
        |
   +----+-----+
   |    |     |
 map filter reduce
```

##  The 15 Topics You Should Definitely Know

If you have very little time, study these first:

1. `var`, `let`, `const`
2. `==` vs `===`
3. Data types + type coercion
4. Scope
5. Hoisting + TDZ
6. Closures
7. `this`
8. Call stack
9. Event loop
10. Promises + async/await
11. `map`, `filter`, `reduce`
12. Objects + destructuring + spread
13. Prototype + inheritance
14. DOM + events + event delegation
15. JavaScript output-based questions

> **Interview strategy:** Don't just memorize definitions. For each of the 15 topics, be able to explain **what it is → why it works → write a small example → predict the output**.
