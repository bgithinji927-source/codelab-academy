# JAVASCRIPT LESSON 2: VARIABLES (`let`, `const`, `var`)

# PART 1 OF 4: UNDERSTANDING JAVASCRIPT VARIABLES

## 1. What Is a Variable?

A **variable** is a named identifier that allows a program to store and access a value.

When developing software, applications need to work with different kinds of information.

For example, a student management system might need to store:

- Student names.
- Student ages.
- Course names.
- Registration numbers.
- Examination marks.

Instead of writing these values repeatedly throughout a program, we assign them to variables.

Example:

```javascript
let studentName = "Brian";
let age = 21;
let course = "BBIT";

console.log(studentName);
console.log(age);
console.log(course);
```

Output:

```text
Brian
21
BBIT
```

### Understanding the Code

**Line 1:**

```javascript
let studentName = "Brian";
```

- `let` declares a variable.
- `studentName` is the variable's name.
- `=` is the assignment operator.
- `"Brian"` is the value being assigned.
- `;` marks the end of the statement.

**Line 2:**

```javascript
let age = 21;
```

Creates another variable and stores the number `21`.

**Line 3:**

```javascript
let course = "BBIT";
```

Creates a variable containing the course name.

**Lines 5–7:**

```javascript
console.log(studentName);
console.log(age);
console.log(course);
```

Display the values stored in the three variables.

The important concept is that a variable gives you a way to refer to information using a meaningful name.

## 2. Why Are Variables Important?

Variables make programs flexible and easier to maintain.

Imagine creating a shopping application.

A customer purchases three keyboards, each costing KSh 1,500.

Without variables, you might write:

```javascript
console.log(1500 * 3);
```

This works, but it does not clearly explain what the numbers represent.

Using variables:

```javascript
let productPrice = 1500;
let quantity = 3;

let total = productPrice * quantity;

console.log(total);
```

Output:

```text
4500
```

Now the program is easier to understand.

If the price or quantity changes, you only need to update the relevant variable.

Variables are therefore important for:

1. Storing application data.
2. Performing calculations.
3. Managing user information.
4. Processing API responses.
5. Tracking application states.
6. Updating information while a program runs.

## 3. Declaring and Initializing Variables

There are two important terms you should understand.

**Variable declaration** means introducing a variable to JavaScript.

Example:

```javascript
let username;
```

Here, we have declared a variable called `username`.

However, we have not assigned it a value.

**Variable initialization** means assigning an initial value to a variable.

Example:

```javascript
let username = "Brian";
```

Here, the variable is both declared and initialized.

You can also declare a variable first and initialize it later:

```javascript
let username;

username = "Brian";

console.log(username);
```

Output:

```text
Brian
```

Explanation:

- The first statement declares `username`.
- The second statement assigns `"Brian"` to it.
- The third statement displays its value.

This distinction is important when working with variables whose values become available later.

## 4. Understanding the Three Variable Keywords

JavaScript provides three traditional variable declaration keywords:

1. `let`
2. `const`
3. `var`

Although they all declare variables, they behave differently.

Let's examine each one.

## 5. The `let` Keyword

`let` is used to declare a variable whose value may change during program execution.

Example:

```javascript
let age = 20;

console.log(age);

age = 21;

console.log(age);
```

Output:

```text
20
21
```

### Explanation

```javascript
let age = 20;
```

Creates a variable called `age` and assigns it the value `20`.

```javascript
console.log(age);
```

Displays the current value.

```javascript
age = 21;
```

Updates the existing variable.

Notice that we do not write `let` again because the variable has already been declared in the same scope.

```javascript
console.log(age);
```

Displays the updated value.

### When Should You Use `let`?

Use `let` when a variable needs to be reassigned.

Examples include:

- A shopping cart quantity.
- A user's current score.
- A running total.
- A counter.
- A current page number.
- A user's selected option.

Example:

```javascript
let cartQuantity = 1;

cartQuantity = 2;
cartQuantity = 5;

console.log(cartQuantity);
```

Output:

```text
5
```

The variable changes as the application updates the shopping cart.

## 6. The `const` Keyword

`const` is used to declare a variable that cannot be reassigned after initialization.

Example:

```javascript
const country = "Kenya";

console.log(country);
```

Output:

```text
Kenya
```

Now consider:

```javascript
const country = "Kenya";

country = "Uganda";

console.log(country);
```

This produces a `TypeError`.

Why?

Because `country` was declared using `const`.

JavaScript does not allow you to assign a different value to that variable.

### Important: `const` Must Be Initialized

Incorrect:

```javascript
const username;
```

This produces a `SyntaxError`.

Correct:

```javascript
const username = "Brian";
```

A `const` declaration must have an initial value.

### When Should You Use `const`?

Use `const` when you do not intend to reassign the variable.

Examples:

```javascript
const university = "Kirinyaga University";

const taxRate = 0.16;

const applicationName = "BConnect";

const apiBaseUrl = "https://api.example.com";
```

These examples represent values that the program does not intend to reassign.

However, remember that a constant variable does not make every object or array it references completely immutable.

We will examine this shortly.

## 7. The `var` Keyword

`var` is the older keyword used to declare variables in JavaScript.

Example:

```javascript
var username = "Brian";

console.log(username);
```

Output:

```text
Brian
```

You can reassign a `var` variable:

```javascript
var age = 20;

age = 25;

console.log(age);
```

Output:

```text
25
```

Unlike `let` and `const`, `var` also allows redeclaration within the same scope.

Example:

```javascript
var name = "Brian";

var name = "John";

console.log(name);
```

Output:

```text
John
```

The second declaration replaces the value.

This behaviour can sometimes cause unexpected bugs in larger applications.

Modern JavaScript developers generally prefer `let` and `const`.

## 8. Comparing `let`, `const`, and `var`

| Feature | `let` | `const` | `var` |
|---|---|---|---|
| Can be reassigned? | Yes | No | Yes |
| Can be redeclared in the same scope? | No | No | Yes |
| Must be initialized immediately? | No | Yes | No |
| Block-scoped? | Yes | Yes | No |
| Function-scoped? | No | No | Yes |
| Hoisted? | Yes | Yes | Yes |
| Initialized before declaration? | No | No | Yes, with `undefined` |

### Which One Should You Use?

A useful modern JavaScript convention is:

- Use `const` by default.
- Use `let` when reassignment is necessary.
- Avoid `var` in most modern JavaScript code.

For example:

```javascript
const studentName = "Brian";

let studentMarks = 75;

studentMarks = 85;

console.log(studentName);
console.log(studentMarks);
```

Output:

```text
Brian
85
```

The student's name is not reassigned, so `const` is appropriate.

The marks change, so `let` is appropriate.

## Part 1 Summary

You should now understand:

1. What a variable is.
2. Why variables are important.
3. The difference between declaration and initialization.
4. How `let` works.
5. How `const` works.
6. How `var` works.
7. The differences between the three keywords.
8. When to use each keyword.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: VARIABLE SCOPE, REDECLARATION AND HOISTING

## 1. What Is Variable Scope?

Scope determines where a variable can be accessed in a JavaScript program.

In simple terms, scope defines the area of your code where a variable is available.

Why is this important?

Imagine developing a large application with hundreds of variables.

You do not want every variable to be accessible everywhere.

Scope helps organize variables and prevents accidental interference between different parts of a program.

JavaScript has several types of scope:

1. Global scope.
2. Function scope.
3. Block scope.
4. Module scope.

Let's examine them.

## 2. Global Scope

A variable declared outside functions and blocks is generally available throughout its accessible program scope.

Example:

```javascript
const applicationName = "BConnect";

function displayApplication() {
    console.log(applicationName);
}

displayApplication();

console.log(applicationName);
```

Output:

```text
BConnect
BConnect
```

### Explanation

```javascript
const applicationName = "BConnect";
```

Declares a variable outside the function.

This makes it available to code in the surrounding scope.

```javascript
function displayApplication() {
```

Creates a function.

```javascript
console.log(applicationName);
```

Accesses the variable declared outside the function.

```javascript
displayApplication();
```

Calls the function.

The final statement accesses the same variable outside the function.

Both accesses work because the variable is available in the global scope of this script.

**Real-world application:**

A JavaScript application might have shared configuration values that multiple functions need to access.

However, avoid placing too much application data in the global scope because it can make large programs harder to maintain.

## 3. Function Scope

A variable declared inside a function is generally accessible only within that function.

Example:

```javascript
function registerUser() {

    let username = "Brian";

    console.log(username);
}

registerUser();
```

Output:

```text
Brian
```

Now consider:

```javascript
function registerUser() {

    let username = "Brian";

}

console.log(username);
```

This produces a `ReferenceError`.

Why?

Because `username` was declared inside the function.

It is not available outside that function.

### Understanding Function Scope

The variable:

```javascript
let username = "Brian";
```

belongs to the `registerUser()` function's scope.

Code outside the function cannot directly access it.

This helps prevent variables used internally by one function from interfering with other parts of an application.

## 4. Block Scope

A block is a section of code enclosed by curly braces `{}`.

Examples include:

- `if` statements.
- `for` loops.
- `while` loops.
- Standalone code blocks.

Variables declared using `let` and `const` are block-scoped.

Example:

```javascript
if (true) {

    let message = "Welcome to JavaScript";

    console.log(message);
}
```

Output:

```text
Welcome to JavaScript
```

The variable is accessible inside the block.

However:

```javascript
if (true) {

    let message = "Welcome to JavaScript";

}

console.log(message);
```

This produces a `ReferenceError`.

The variable exists only inside the block.

### Another Example Using `const`

```javascript
if (true) {

    const country = "Kenya";

    console.log(country);
}
```

The variable `country` is accessible inside the block.

It is not accessible outside it.

## 5. Why `var` Behaves Differently

Unlike `let` and `const`, `var` is not block-scoped.

It is function-scoped.

Example:

```javascript
if (true) {

    var username = "Brian";

}

console.log(username);
```

Output:

```text
Brian
```

Why does this work?

Because `var` ignores ordinary block scope.

The variable is available outside the `if` block, provided it remains within the same function or script scope.

Compare this with `let`:

```javascript
if (true) {

    let username = "Brian";

}

console.log(username);
```

This produces a `ReferenceError`.

### Scope Comparison

| Declaration | Global scope | Function scope | Block scope |
|---|---|---|---|
| `var` | Yes | Yes | No |
| `let` | Yes, when declared at script level | Yes | Yes |
| `const` | Yes, when declared at script level | Yes | Yes |

More precisely, `let` and `const` follow lexical scope rules, meaning their accessibility is determined by where they are written in the code.

## 6. Understanding Redeclaration and Reassignment

These are two different operations.

**Reassignment** means changing the value of an existing variable.

Example:

```javascript
let score = 50;

score = 80;

console.log(score);
```

Output:

```text
80
```

**Redeclaration** means declaring a variable with the same identifier again in the same scope.

Example:

```javascript
let score = 50;

let score = 80;
```

This produces a `SyntaxError`.

You cannot redeclare a `let` variable in the same scope.

### Redeclaration with `const`

Incorrect:

```javascript
const country = "Kenya";

const country = "Uganda";
```

This also produces a `SyntaxError`.

### Redeclaration with `var`

Example:

```javascript
var country = "Kenya";

var country = "Uganda";

console.log(country);
```

Output:

```text
Uganda
```

`var` allows redeclaration within the same scope.

This is one reason modern developers prefer `let` and `const`.

## 7. Understanding Hoisting

Hoisting is a JavaScript behaviour where declarations are processed before the code executes.

This affects how variables behave when referenced before their declaration.

However, `var`, `let`, and `const` behave differently.

### A. Hoisting with `var`

Consider:

```javascript
console.log(username);

var username = "Brian";
```

Output:

```text
undefined
```

Why does this happen?

JavaScript processes the `var` declaration before executing the statements.

Conceptually, the code behaves like:

```javascript
var username;

console.log(username);

username = "Brian";
```

The variable exists when the first `console.log()` executes, but its value has not yet been assigned.

Therefore, JavaScript displays `undefined`.

### B. Hoisting with `let`

Consider:

```javascript
console.log(username);

let username = "Brian";
```

This produces a `ReferenceError`.

The declaration is hoisted, but the variable cannot be accessed before its declaration is evaluated.

### C. Hoisting with `const`

The same principle applies to `const`.

```javascript
console.log(country);

const country = "Kenya";
```

This produces a `ReferenceError`.

### What Is the Temporal Dead Zone?

The **Temporal Dead Zone (TDZ)** is the period between entering a scope and the point where a `let` or `const` declaration is evaluated.

During this period, the variable cannot be accessed.

Example:

```javascript
{
    // Temporal Dead Zone begins.

    console.log(username);

    let username = "Brian";

    // Temporal Dead Zone ends.
}
```

The `console.log()` attempts to access `username` before its declaration is evaluated.

Therefore, JavaScript throws a `ReferenceError`.

### Hoisting Comparison

| Keyword | Declaration hoisted? | Initial state before declaration executes | Can be accessed before declaration? |
|---|---|---|---|
| `var` | Yes | `undefined` | Yes, but value is `undefined` |
| `let` | Yes | Uninitialized | No |
| `const` | Yes | Uninitialized | No |

**Important:** Although JavaScript hoists declarations, it is good practice to declare variables before using them.

## 8. Variables Inside Loops

Loops are used to repeat instructions.

Variables declared with `let` inside a loop are scoped to the loop block.

Example:

```javascript
for (let number = 1; number <= 3; number++) {

    console.log(number);

}
```

Output:

```text
1
2
3
```

Explanation:

```javascript
let number = 1;
```

Creates a loop variable starting at 1.

```javascript
number <= 3;
```

Checks whether the loop should continue.

```javascript
number++;
```

Increases the number after each iteration.

The variable `number` belongs to the loop's scope.

Trying to access it outside the loop produces a `ReferenceError`.

Example:

```javascript
for (let number = 1; number <= 3; number++) {
    console.log(number);
}

console.log(number);
```

The final statement fails because `number` is not accessible outside the loop.

## 9. Module Scope

JavaScript also supports modules.

A module is a JavaScript file that can export information and import information from other files.

In modern JavaScript, top-level variables declared in a module belong to that module's scope rather than automatically becoming global variables.

Example:

`config.js`

```javascript
export const applicationName = "BConnect";
```

`main.js`

```javascript
import { applicationName } from "./config.js";

console.log(applicationName);
```

Output:

```text
BConnect
```

The `export` keyword makes the variable available to other modules.

The `import` keyword brings it into another file.

We will study JavaScript modules in a later lesson.

## Part 2 Summary

You should now understand:

1. What variable scope means.
2. Global scope.
3. Function scope.
4. Block scope.
5. The difference between `var` and `let`/`const` scope.
6. Redeclaration versus reassignment.
7. JavaScript hoisting.
8. The Temporal Dead Zone.
9. Variables inside loops.
10. Module scope.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL APPLICATIONS OF JAVASCRIPT VARIABLES

In this section, we will build practical programs to demonstrate how variables are used in real software development.

## 1. Setting Up the Project

Create a folder named:

```text
javascript_variables_project/
```

Inside it, create:

```text
main.js
```

Project structure:

```text
javascript_variables_project/
│
└── main.js
```

Open the folder in Visual Studio Code.

Run your programs using:

```bash
node main.js
```

## 2. Practical Example One: Student Management System

Let's create a program that stores and displays student information.

Code:

```javascript
const studentName = "Brian";

let age = 21;

const course = "BBIT";

let marks = 75;

console.log("STUDENT INFORMATION");

console.log("Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Marks:", marks);

marks = 85;

console.log("Updated Marks:", marks);
```

Output:

```text
STUDENT INFORMATION
Name: Brian
Age: 21
Course: BBIT
Marks: 75
Updated Marks: 85
```

### Line-by-Line Explanation

```javascript
const studentName = "Brian";
```

Creates a constant variable containing the student's name.

We use `const` because the program does not intend to reassign it.

```javascript
let age = 21;
```

Stores the student's age.

We use `let` because it could change.

```javascript
const course = "BBIT";
```

Stores the course name.

```javascript
let marks = 75;
```

Stores the student's marks.

```javascript
console.log("STUDENT INFORMATION");
```

Displays a heading.

The next statements display each student's detail.

```javascript
marks = 85;
```

Updates the student's marks from 75 to 85.

We use `let` because reassignment is allowed.

The final statement displays the updated marks.

**Real-world application:**

A student management system uses variables to hold information received from forms, databases, and APIs.

## 3. Practical Example Two: Shopping Cart System

Let's build a simple shopping cart calculation.

Code:

```javascript
const productName = "Laptop";

const price = 65000;

let quantity = 1;

let total = price * quantity;

console.log("PRODUCT:", productName);
console.log("PRICE:", price);
console.log("QUANTITY:", quantity);
console.log("TOTAL:", total);

quantity = 2;

total = price * quantity;

console.log("UPDATED QUANTITY:", quantity);
console.log("UPDATED TOTAL:", total);
```

Output:

```text
PRODUCT: Laptop
PRICE: 65000
QUANTITY: 1
TOTAL: 65000
UPDATED QUANTITY: 2
UPDATED TOTAL: 130000
```

### Explanation

```javascript
const productName = "Laptop";
```

Stores the product name.

```javascript
const price = 65000;
```

Stores the product price.

```javascript
let quantity = 1;
```

Stores the number of products initially selected.

```javascript
let total = price * quantity;
```

Calculates the initial purchase total.

The next statements display the purchase details.

```javascript
quantity = 2;
```

Updates the quantity.

```javascript
total = price * quantity;
```

Recalculates the total using the new quantity.

The updated total becomes KSh 130,000.

**Why are these variables important?**

In an actual shopping application, customers can increase or decrease product quantities.

The application must update the total whenever the quantity changes.

## 4. Practical Example Three: Bank Account Balance

Let's create a simple program that tracks a bank account balance.

Code:

```javascript
const accountHolder = "Brian";

let balance = 5000;

console.log("Account Holder:", accountHolder);

console.log("Initial Balance:", balance);

let deposit = 2000;

balance = balance + deposit;

console.log("After Deposit:", balance);

let withdrawal = 1500;

balance = balance - withdrawal;

console.log("After Withdrawal:", balance);
```

Output:

```text
Account Holder: Brian
Initial Balance: 5000
After Deposit: 7000
After Withdrawal: 5500
```

### Explanation

```javascript
const accountHolder = "Brian";
```

Stores the account holder's name.

```javascript
let balance = 5000;
```

Stores the starting balance.

```javascript
let deposit = 2000;
```

Stores the amount being deposited.

```javascript
balance = balance + deposit;
```

Adds the deposit to the existing balance.

The new balance becomes 7,000.

```javascript
let withdrawal = 1500;
```

Stores the amount to withdraw.

```javascript
balance = balance - withdrawal;
```

Subtracts the withdrawal from the balance.

The remaining balance becomes 5,500.

**Important:** This is an educational calculation. Real banking systems require secure server-side transaction processing, authentication, authorization, transaction records, and database consistency. A frontend variable must never be treated as the authoritative account balance.

## 5. Practical Example Four: Understanding `const` with Objects

One of the most misunderstood concepts in JavaScript is how `const` works with objects.

Consider:

```javascript
const user = {
    name: "Brian",
    age: 21
};

user.age = 22;

console.log(user);
```

Output:

```text
{ name: 'Brian', age: 22 }
```

Why does this work?

Because `const` prevents reassignment of the variable itself.

It does not automatically prevent changes to the object's properties.

Let's examine the difference.

**Allowed:**

```javascript
const user = {
    name: "Brian"
};

user.name = "John";

console.log(user.name);
```

Output:

```text
John
```

**Not allowed:**

```javascript
const user = {
    name: "Brian"
};

user = {
    name: "John"
};
```

This produces a `TypeError`.

The second example attempts to assign a completely different object to the constant variable.

### Understanding the Same Behaviour with Arrays

Example:

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);
```

Output:

```text
[ 'Apple', 'Banana', 'Orange' ]
```

The `push()` method adds an element to the existing array.

This works because the array itself has not been reassigned.

However:

```javascript
const fruits = ["Apple", "Banana"];

fruits = ["Mango", "Orange"];
```

This produces a `TypeError`.

**Key lesson:** `const` prevents reassignment, not all mutation.

If you need to prevent changes to an object's own properties, JavaScript provides `Object.freeze()` for shallow freezing.

Example:

```javascript
const user = Object.freeze({
    name: "Brian",
    age: 21
});

user.age = 25;

console.log(user.age);
```

In ordinary non-strict execution, the attempted modification is ignored and the output remains:

```text
21
```

In strict mode, the attempted modification throws a `TypeError`.

`Object.freeze()` is shallow: nested objects are not automatically frozen.

## 6. Practical Example Five: Variable Scope in an Application

Let's create a program that demonstrates global and local variables.

Code:

```javascript
const applicationName = "BConnect";

function displayDashboard() {

    let username = "Brian";

    console.log("Application:", applicationName);

    console.log("User:", username);

}

displayDashboard();
```

Output:

```text
Application: BConnect
User: Brian
```

### Explanation

```javascript
const applicationName = "BConnect";
```

Creates a variable outside the function.

The function can access it.

```javascript
function displayDashboard() {
```

Defines a function.

```javascript
let username = "Brian";
```

Creates a local variable inside the function.

```javascript
console.log("Application:", applicationName);
```

Accesses the outer variable.

```javascript
console.log("User:", username);
```

Accesses the local variable.

```javascript
displayDashboard();
```

Executes the function.

Now try adding:

```javascript
console.log(username);
```

after the function call.

It will produce a `ReferenceError` because `username` is only accessible inside the function.

## 7. Practical Example Six: `var` vs `let` Inside a Loop

Let's examine how different declaration keywords behave in loops.

### Using `let`

```javascript
for (let number = 1; number <= 3; number++) {

    console.log(number);

}
```

Output:

```text
1
2
3
```

Now try:

```javascript
console.log(number);
```

outside the loop.

It produces a `ReferenceError` because `number` is block-scoped.

### Using `var`

```javascript
for (var number = 1; number <= 3; number++) {

    console.log(number);

}

console.log("Final Number:", number);
```

Output:

```text
1
2
3
Final Number: 4
```

Why does the final statement work?

Because `var` is not block-scoped.

It remains accessible outside the loop in the surrounding function or script scope.

This difference is particularly important when writing loops and callbacks.

## 8. Practical Example Seven: Building a User Registration Data Structure

Let's combine variables and objects to represent registration information.

Code:

```javascript
const username = "Brian";

const email = "brian@example.com";

let age = 21;

let isRegistered = false;

const user = {
    username: username,
    email: email,
    age: age,
    isRegistered: isRegistered
};

console.log("USER REGISTRATION");

console.log(user);

isRegistered = true;

console.log("Registration Status:", isRegistered);
```

Output:

```text
USER REGISTRATION
{
  username: 'Brian',
  email: 'brian@example.com',
  age: 21,
  isRegistered: false
}
Registration Status: true
```

### Explanation

The first four declarations store registration information.

```javascript
const user = {
    username: username,
    email: email,
    age: age,
    isRegistered: isRegistered
};
```

Creates an object containing the values of the variables.

For example:

```javascript
username: username
```

The first `username` is the object's property name.

The second `username` refers to the variable containing `"Brian"`.

The same principle applies to the other properties.

```javascript
isRegistered = true;
```

Updates the original variable.

However, this does not automatically update the value already copied into the object's `isRegistered` property.

That is why the object still contains `false`.

To update the object too, write:

```javascript
user.isRegistered = true;
```

This demonstrates an important concept: primitive values assigned to object properties are stored as their values at that time.

## 9. Common Mistakes in Variable Management

### Mistake 1: Using `const` for a Value That Must Change

Incorrect:

```javascript
const score = 50;

score = 80;
```

This produces a `TypeError`.

Correct:

```javascript
let score = 50;

score = 80;

console.log(score);
```

### Mistake 2: Redeclaring `let` in the Same Scope

Incorrect:

```javascript
let username = "Brian";

let username = "John";
```

This produces a `SyntaxError`.

Correct:

```javascript
let username = "Brian";

username = "John";

console.log(username);
```

### Mistake 3: Accessing a Block-Scoped Variable Outside Its Block

Incorrect:

```javascript
if (true) {
    let age = 21;
}

console.log(age);
```

Correct:

```javascript
let age;

if (true) {
    age = 21;
}

console.log(age);
```

The corrected example declares the variable outside the block, so it is accessible afterward.

### Mistake 4: Confusing `undefined` with `null`

Example:

```javascript
let username;

let selectedProduct = null;

console.log(username);
console.log(selectedProduct);
```

Output:

```text
undefined
null
```

`undefined` usually indicates that no value has been assigned.

`null` represents an intentional absence of a value.

### Mistake 5: Declaring Variables Without Meaningful Names

Poor naming:

```javascript
let x = 5000;
let y = 2000;

let z = x + y;
```

Better naming:

```javascript
let accountBalance = 5000;
let depositAmount = 2000;

let updatedBalance = accountBalance + depositAmount;
```

Meaningful variable names make programs easier to understand and maintain.

## 10. Practical Exercises

Complete these exercises in your `main.js` file.

### Exercise 1: Variable Declaration

Create three variables:

- `firstName`
- `age`
- `course`

Use appropriate declaration keywords and display their values.

### Exercise 2: Reassignment

Create a variable called `accountBalance` with an initial value of 5,000.

Increase it by 2,000.

Display the updated balance.

### Exercise 3: Constant Variables

Create three constant variables:

- `country`
- `university`
- `applicationName`

Display their values.

Explain why `const` is appropriate.

### Exercise 4: Shopping Cart

Create variables for:

- Product name.
- Product price.
- Quantity.
- Total price.

Calculate the total.

Then change the quantity and recalculate.

Choose the appropriate declaration keyword for each variable.

### Exercise 5: Scope

Create a function called `displayUser()`.

Inside it, declare a variable called `username`.

Display the variable inside the function.

Then try to display it outside the function and explain the result.

### Exercise 6: Object Mutation

Create a constant object called `student`.

Give it these properties:

- Name.
- Age.
- Course.

Change the student's age.

Display the updated object.

Explain why modifying the age works even though the object was declared using `const`.

### Exercise 7: Loop Scope

Create a `for` loop using `let` that displays numbers from 1 to 5.

Try accessing the loop variable outside the loop.

Repeat the exercise using `var`.

Explain the difference.

### Exercise 8: Debugging Variables

Identify and correct the errors in this program:

```javascript
const username = "Brian";

username = "John";

let age = 21;

let age = 25;

console.log(UserName);

console.log(age);
```

Explain why each error occurs.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

You have completed JavaScript Lesson 2: Variables (`let`, `const`, `var`).

Now test your understanding.

## SECTION A: MULTIPLE-CHOICE QUESTIONS

### Question 1

What is a variable in JavaScript?

A. A command used to close a program.

B. A named identifier used to store and access a value.

C. A tool used to install packages.

D. A function used to create databases.

### Question 2

Which keyword should generally be used when a variable needs to be reassigned?

A. `const`

B. `let`

C. `static`

D. `final`

### Question 3

What happens when you try to reassign a `const` variable?

A. The variable automatically changes.

B. JavaScript restarts the program.

C. A TypeError occurs.

D. The value becomes undefined.

### Question 4

Which keyword is function-scoped rather than block-scoped?

A. `let`

B. `const`

C. `var`

D. All three.

### Question 5

What is the output?

```javascript
var number = 10;

var number = 20;

console.log(number);
```

A. 10

B. 20

C. undefined

D. SyntaxError.

### Question 6

What does the Temporal Dead Zone refer to?

A. The time when a program is loading.

B. The period when a `let` or `const` variable cannot be accessed before its declaration is evaluated.

C. The time when a variable is deleted.

D. The period when JavaScript stops executing.

## SECTION B: CONCEPTUAL QUESTIONS

### Question 7

Explain the difference between variable declaration, initialization, reassignment, and redeclaration.

Provide a JavaScript example for each.

### Question 8

Explain the difference between global scope, function scope, and block scope.

### Question 9

Why does this program display `undefined`?

```javascript
console.log(name);

var name = "Brian";
```

Explain how hoisting affects the program.

### Question 10

Why does this program work?

```javascript
const student = {
    name: "Brian",
    age: 21
};

student.age = 22;

console.log(student);
```

Explain what `const` prevents and what it allows.

## SECTION C: PRACTICAL PROGRAMMING

### Question 11: Student Management

Create a program that stores:

- Student name.
- Registration number.
- Course.
- Age.
- Marks.

Choose appropriate declaration keywords.

Display the information.

Then update the student's marks and display the new value.

### Question 12: Shopping Cart

Create a shopping cart program using variables.

Store:

- Product name.
- Product price.
- Quantity.
- Total cost.

Calculate the total.

Then increase the quantity and recalculate the total.

### Question 13: Variable Scope

Write a program containing:

1. A global variable.
2. A function with a local variable.
3. An `if` block with a block-scoped variable.

Display the variables where they are accessible.

Explain what happens when you try to access each variable outside its scope.

### Question 14: Debugging Challenge

Find and correct all the errors in this program:

```javascript
const applicationName = "BConnect";

applicationName = "Firebox";

let balance = 5000;

let balance = 7000;

if (true) {

    let username = "Brian";

}

console.log(username);

console.log(balance);
```

Explain each problem and provide the corrected program.

## SUBMIT YOUR ASSESSMENT TO KAI

Submit your answers to Kai, your AI instructor.

Kai should:

1. Evaluate the multiple-choice questions.
2. Review your explanations.
3. Inspect your JavaScript code.
4. Identify syntax errors.
5. Identify incorrect variable declarations.
6. Explain scope-related mistakes.
7. Test the practical programs.
8. Provide corrected solutions.
9. Give you an overall score and feedback.
10. Recommend what to study next.

## LESSON COMPLETION CHECKLIST

Before moving to the next lesson, ensure that you can:

- [ ] Explain what variables are.
- [ ] Declare and initialize variables.
- [ ] Use `let` correctly.
- [ ] Use `const` correctly.
- [ ] Explain how `var` works.
- [ ] Distinguish between reassignment and redeclaration.
- [ ] Explain global scope.
- [ ] Explain function scope.
- [ ] Explain block scope.
- [ ] Understand hoisting.
- [ ] Explain the Temporal Dead Zone.
- [ ] Understand `const` with objects and arrays.
- [ ] Debug common variable-related errors.

**Part 4 of 4 — Lesson Complete**

**Recommended Next Lesson: JavaScript Data Types**

In the next lesson, we will explore JavaScript data types in depth, including strings, numbers, Booleans, undefined, null, objects, arrays, BigInt, and Symbol. We will also examine primitive and reference values, type conversion, and type coercion.