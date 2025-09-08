
## 1) Difference between `var`, `let`, and `const`
- `var` is function-scoped, can be redeclared and reassigned.  
- `let` is block-scoped, can be reassigned but not redeclared.  
- `const` is block-scoped, cannot be redeclared or reassigned, and must be initialized.

```javascript
var x = 10;
x = 20;
var x = 30;

let y = 5;
y = 10;
// let y = 15; // Error

const z = 100;
// z = 200; // Error
```

## 2) Difference between map(), forEach(), and filter()

- **forEach()** → Loops through an array for side-effects, returns nothing.  
- **map()** → Transforms each element and returns a new array.  
- **filter()** → Returns a new array with elements that satisfy a condition.  

```javascript
const arr = [1, 2, 3, 4];

arr.forEach(x => console.log(x));       
const doubled = arr.map(x => x * 2);    // [2, 4, 6, 8]
const evens = arr.filter(x => x % 2 === 0); // [2, 4]
```

## 3) Arrow Functions

- **Arrow functions** provide a shorter syntax for defining functions.  
- They do not have their own `this`; instead, they inherit it from the enclosing scope.  

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

const square = x => x * x;
console.log(square(4)); // 16

const greet = () => console.log("Hello");
greet(); // Hello
```

## 4) Destructuring Assignment in ES6

- Destructuring allows unpacking values from **arrays** or **objects** into separate variables.  


```javascript
// Array destructuring
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b); // 1 2

// Object destructuring
const person = { name: "Saimum", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25

// Renaming and default values
const { name: username, gender = "unknown" } = person;
console.log(username, gender); // Saimum unknown
```

## 5) Template Literals in ES6

- Template literals are strings enclosed in backticks (`` ` ``).  
- They support **interpolation** using `${expression}` and allow **multi-line strings**.  
- They are cleaner and more readable than traditional string concatenation with `+`.  

```javascript
const name = "Saimum";
const age = 25;

// Using template literals with interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); 
// Output: Hello, my name is Saimum and I am 25 years old.

// Multi-line string with backticks
const text = `This is line 1
This is line 2`;
console.log(text);
```
