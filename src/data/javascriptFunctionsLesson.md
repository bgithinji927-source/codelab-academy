# JAVASCRIPT PROGRAMMING
# Lesson: Functions

# PART 1 OF 4: INTRODUCTION TO FUNCTIONS

## 1. What Is a Function?

A **function** is a reusable block of code designed to perform a particular task.

Instead of writing the same instructions repeatedly throughout a program, you can put those instructions inside a function and execute them whenever needed.

For example, imagine you are developing a banking application.

You need to perform the following operations:

- Calculate account balances.
- Deposit money.
- Withdraw money.
- Display account information.

Instead of writing the calculation instructions every time, you can create functions for these operations.

A function allows you to organize your code into smaller, reusable sections.

### 2. Why Are Functions Important?

Functions are important because they help developers:

1. Reuse code instead of repeating instructions.
2. Organize large programs into smaller components.
3. Make code easier to read and understand.
4. Simplify debugging and maintenance.
5. Separate different responsibilities within an application.
6. Build scalable software systems.

### Real-World Applications

| Application | How functions are used |
|---|---|
| Banking systems | Depositing and withdrawing money. |
| E-commerce | Calculating shopping cart totals. |
| School systems | Calculating student grades. |
| Authentication systems | Validating login information. |
| APIs | Processing incoming requests. |
| Cybersecurity tools | Performing scanning and validation operations. |

For example, a shopping application might use a function called `calculateTotal()` whenever it needs to calculate the total cost of a customer's cart.

---

## 3. Creating Your First JavaScript Function

JavaScript provides several ways to create functions.

Let's begin with a function declaration.

### Syntax

```javascript
function functionName() {
    // Instructions to execute
}
```

The syntax contains three important parts:

| Component | Meaning |
|---|---|
| `function` | JavaScript keyword used to declare a function. |
| `functionName` | The name used to identify and call the function. |
| `{ }` | Contains the instructions that belong to the function. |

### Example

```javascript
function greet() {
    console.log("Welcome to CodeLab Academy!");
}
```

This creates a function called `greet`.

However, creating a function does not automatically execute its instructions.

To execute it, you must **call the function**.

```javascript
greet();
```

Complete program:

```javascript
function greet() {
    console.log("Welcome to CodeLab Academy!");
}

greet();
```

Output:

```text
Welcome to CodeLab Academy!
```

### 4. Understanding Every Line

**Line 1:**

```javascript
function greet() {
```

- `function` tells JavaScript that you are declaring a function.
- `greet` is the function's name.
- `()` contains the parameters, if any.
- `{` begins the function body.

**Line 2:**

```javascript
console.log("Welcome to CodeLab Academy!");
```

This is the instruction the function performs when called.

It displays a welcome message in the terminal.

**Line 3:**

```javascript
}
```

Closes the function body.

**Line 5:**

```javascript
greet();
```

Calls the function.

The parentheses tell JavaScript to execute the function.

### Important: Declaration vs Function Call

These are two different operations.

**Declaration:**

```javascript
function greet() {
    console.log("Hello!");
}
```

This creates the function.

**Calling:**

```javascript
greet();
```

This executes the function.

You can call the same function multiple times:

```javascript
function greet() {
    console.log("Hello!");
}

greet();
greet();
greet();
```

Output:

```text
Hello!
Hello!
Hello!
```

The same instructions execute three times without needing to be rewritten.

---

## 5. Function Parameters

Sometimes a function needs information before it can perform its task.

This information can be passed into a function through **parameters**.

A parameter is a variable listed in a function's definition that receives information when the function is called.

Example:

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("Brian");
```

Output:

```text
Hello, Brian
```

### Explanation

**Function declaration:**

```javascript
function greet(name) {
```

Creates a function named `greet`.

The parameter `name` is a variable that will receive information from whoever calls the function.

**Function body:**

```javascript
console.log("Hello, " + name);
```

Combines the text `"Hello, "` with the value stored in `name`.

**Function call:**

```javascript
greet("Brian");
```

Calls the function and passes `"Brian"` as an argument.

The value `"Brian"` is assigned to the parameter `name`.

Therefore:

```javascript
name = "Brian";
```

JavaScript then executes the function body.

### 6. Parameters vs Arguments

These terms are related but have different meanings.

**Parameters** are variables defined when creating a function.

**Arguments** are the actual values supplied when calling a function.

Example:

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

In this example:

- `a` and `b` are parameters.
- `10` and `20` are arguments.

When the function executes:

```text
a = 10
b = 20
```

The addition becomes:

```text
10 + 20 = 30
```

Output:

```text
30
```

### 7. Functions With Multiple Parameters

A function can accept multiple parameters.

Example:

```javascript
function calculateArea(length, width) {
    const area = length * width;

    console.log("Area:", area);
}

calculateArea(10, 5);
```

Output:

```text
Area: 50
```

Explanation:

- `length` receives 10.
- `width` receives 5.
- The function multiplies the two values.
- The result is displayed.

The calculation:

```text
10 × 5 = 50
```

You can call the function with different values:

```javascript
calculateArea(20, 10);
calculateArea(8, 4);
calculateArea(15, 6);
```

Each call performs the same operation using different information.

---

## 8. Returning Values From Functions

So far, our functions have displayed results using `console.log()`.

However, sometimes you need a function to calculate something and send the result back to the part of the program that called it.

This is where the `return` statement becomes important.

A **return statement** sends a value back from a function.

Example:

```javascript
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

### Understanding the Program

**Function declaration:**

```javascript
function add(a, b) {
```

Creates a function called `add` with two parameters.

**Calculation:**

```javascript
return a + b;
```

Adds the two values and returns the result to the caller.

**Function call:**

```javascript
const result = add(10, 20);
```

Calls the function with 10 and 20.

The returned result is stored inside the variable `result`.

Therefore:

```javascript
result = 30;
```

**Display:**

```javascript
console.log(result);
```

Displays the returned result.

### 9. Difference Between `console.log()` and `return`

This is one of the most important distinctions in JavaScript functions.

| `console.log()` | `return` |
|---|---|
| Displays information in the console. | Sends a value back to the caller. |
| Does not automatically provide a result for further calculations. | Allows the result to be stored or reused. |
| Mainly useful for displaying and debugging. | Useful for building reusable program logic. |

Consider these two functions:

```javascript
function addAndDisplay(a, b) {
    console.log(a + b);
}

function addAndReturn(a, b) {
    return a + b;
}
```

The first function displays the result.

The second function returns the result.

You can reuse the second function's result:

```javascript
const total = addAndReturn(10, 20);

const finalAmount = total + 50;

console.log(finalAmount);
```

Output:

```text
80
```

This works because the returned value can participate in another calculation.

### 10. What Happens After `return`?

When JavaScript executes a `return` statement, the function immediately stops executing.

Example:

```javascript
function test() {
    console.log("First");

    return;

    console.log("Second");
}

test();
```

Output:

```text
First
```

The second message never appears because the function has already returned.

A function can also return without specifying a value:

```javascript
function greet() {
    console.log("Hello");
    return;
}
```

A function that reaches its closing brace without a return statement also returns `undefined`.

---

## 11. Default Parameters

A default parameter provides a fallback value when an argument is omitted or explicitly passed as `undefined`.

Example:

```javascript
function greet(name = "Guest") {
    console.log("Welcome, " + name);
}

greet("Brian");
greet();
```

Output:

```text
Welcome, Brian
Welcome, Guest
```

Explanation:

```javascript
function greet(name = "Guest") {
```

Defines a parameter called `name` with a default value of `"Guest"`.

When a name is provided, JavaScript uses that name.

When the argument is omitted, the default value is used.

This is useful when building applications where some information is optional.

For example, a user registration system might allow an optional display name.

---

## 12. Practical Example: Simple Calculator Functions

Let's combine what we have learned.

```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
console.log(divide(10, 0));
```

Output:

```text
15
5
50
2
Cannot divide by zero
```

### Understanding the Logic

Each function performs one mathematical operation.

For example:

```javascript
function multiply(a, b) {
    return a * b;
}
```

The function receives two numbers, multiplies them, and returns the result.

The division function includes additional validation:

```javascript
if (b === 0) {
    return "Cannot divide by zero";
}
```

This prevents the program from performing an invalid division according to our calculator's rules.

The calculator is divided into smaller functions, making each operation easier to understand and maintain.

### Part 1 Exercises

1. Create a function called `welcome()` that displays a welcome message.
2. Create a function called `greetUser(name)` that accepts a name and displays a personalized greeting.
3. Create a function called `square(number)` that returns the square of a number.
4. Create a function called `calculateArea(length, width)` that returns the area of a rectangle.
5. Explain the difference between parameters and arguments.
6. Explain the difference between `return` and `console.log()`.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: DIFFERENT TYPES OF FUNCTIONS IN JAVASCRIPT

JavaScript supports several ways of defining and using functions.

Understanding these different forms is important because modern software applications use them in different situations.

## 13. Function Expressions

A **function expression** is a function created and assigned to a variable.

Example:

```javascript
const greet = function() {
    console.log("Hello from a function expression!");
};

greet();
```

Output:

```text
Hello from a function expression!
```

### Explanation

**Line 1:**

```javascript
const greet = function() {
```

Creates an anonymous function and assigns it to a constant named `greet`.

An anonymous function is a function without its own declared name.

**Line 2:**

```javascript
console.log("Hello from a function expression!");
```

Contains the instructions to execute.

**Line 3:**

```javascript
};
```

Closes the function expression.

Notice the semicolon after the closing brace. It terminates the variable assignment.

**Line 5:**

```javascript
greet();
```

Calls the function through the variable that stores it.

### 14. Function Declaration vs Function Expression

Both can perform the same tasks, but they differ in how they are created and initialized.

Function declaration:

```javascript
function greet() {
    console.log("Hello");
}
```

Function expression:

```javascript
const greet = function() {
    console.log("Hello");
};
```

One important difference concerns hoisting.

Function declarations are available before their position in the code within their scope.

Example:

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

This works.

However, this does not work:

```javascript
greet();

const greet = function() {
    console.log("Hello");
};
```

The variable `greet` cannot be accessed before initialization.

This is because `const` variables are subject to the temporal dead zone.

---

## 15. Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions.

They were introduced in ECMAScript 2015 (ES6).

Example:

```javascript
const greet = () => {
    console.log("Hello from an arrow function!");
};

greet();
```

Output:

```text
Hello from an arrow function!
```

### Understanding Arrow Function Syntax

```javascript
const greet = () => {
```

Breakdown:

- `const greet` creates a variable to store the function.
- `()` represents the parameter list.
- `=>` is the arrow-function operator.
- `{}` contains the function body.

### 16. Arrow Functions With Parameters

Example:

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

Output:

```text
30
```

The function accepts two parameters, adds them, and returns the result.

### 17. Shorter Arrow Function Syntax

When an arrow function contains only one expression, you can remove the curly braces and the `return` keyword.

Example:

```javascript
const add = (a, b) => a + b;

console.log(add(10, 20));
```

Output:

```text
30
```

This is called an **implicit return**.

JavaScript automatically returns the result of the expression.

Compare:

```javascript
const square = (number) => {
    return number * number;
};
```

With:

```javascript
const square = number => number * number;
```

Both return the square of a number.

When there is exactly one parameter, its parentheses can be omitted.

However, using parentheses is also perfectly valid and can improve consistency.

### 18. Arrow Functions With No Parameters

If an arrow function has no parameters, you must use empty parentheses.

```javascript
const sayHello = () => {
    console.log("Hello!");
};

sayHello();
```

### 19. Returning an Object From an Arrow Function

There is an important syntax detail when returning an object using an implicit return.

Incorrect:

```javascript
const createUser = () => {
    name: "Brian",
    age: 22
};
```

JavaScript interprets the braces as a function body rather than an object literal.

Correct:

```javascript
const createUser = () => ({
    name: "Brian",
    age: 22
});

console.log(createUser());
```

Output:

```text
{ name: 'Brian', age: 22 }
```

The parentheses around the object tell JavaScript that the expression is an object being returned.

---

## 20. Important Difference: Arrow Functions and Regular Functions

Arrow functions are not simply shorter versions of every regular function.

They have some different behavior.

One major difference is how they handle `this`.

A regular function can have its own `this` value depending on how it is called.

An arrow function does not create its own `this`. It uses `this` from its surrounding lexical context.

Example:

```javascript
const user = {
    name: "Brian",

    regularFunction: function() {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};

user.regularFunction();
user.arrowFunction();
```

The regular function accesses the object's `name` property through `this`.

The arrow function does not get `this` from `user`, so it will not reliably produce the same result.

The exact arrow-function output depends on the surrounding environment.

**Important rule:** Regular methods are generally a better choice when you need a method's `this` to refer to the object receiving the method call.

Arrow functions are useful for callbacks and functions that intentionally inherit `this` from their surrounding scope.

Other differences:

| Feature | Regular function | Arrow function |
|---|---|---|
| Own `this` | Yes, depending on how it is called | No |
| Can be used with `new` | Yes, if constructible | No |
| Has its own `arguments` object | Yes | No |
| Short syntax | No | Yes |
| Suitable for object methods needing their own `this` | Yes | Usually no |

---

## 21. Anonymous Functions

An **anonymous function** is a function without an explicit name.

Example:

```javascript
const calculate = function(a, b) {
    return a + b;
};
```

The function itself has no name, although it is stored in the variable `calculate`.

Anonymous functions are frequently used in:

- Event handlers.
- Callbacks.
- Function expressions.
- Array methods.

---

## 22. Callback Functions

A **callback function** is a function passed into another function as an argument so that it can be called by that function.

This is an important concept in JavaScript.

Example:

```javascript
function processUser(name, callback) {
    console.log("Processing user:", name);

    callback();
}

function completed() {
    console.log("User processing completed.");
}

processUser("Brian", completed);
```

Output:

```text
Processing user: Brian
User processing completed.
```

### Explanation

First, we create:

```javascript
function processUser(name, callback) {
```

The function accepts two parameters.

- `name` receives the user's name.
- `callback` receives another function.

Inside the function:

```javascript
console.log("Processing user:", name);
```

Displays the user's name.

Then:

```javascript
callback();
```

Calls the function that was passed as an argument.

Next, we define:

```javascript
function completed() {
    console.log("User processing completed.");
}
```

This function contains the completion message.

Finally:

```javascript
processUser("Brian", completed);
```

Passes the `completed` function into `processUser`.

Notice that we write:

```javascript
completed
```

not:

```javascript
completed()
```

We are passing the function itself, not calling it immediately.

### 23. Using an Anonymous Callback

You do not always need to create a separately named function.

Example:

```javascript
function processTask(callback) {
    console.log("Task started.");

    callback();
}

processTask(function() {
    console.log("Task completed.");
});
```

The anonymous function is passed directly as the callback.

Arrow functions are also commonly used:

```javascript
processTask(() => {
    console.log("Task completed.");
});
```

### 24. Why Are Callbacks Important?

Callbacks are useful when one operation needs to trigger another operation.

Examples include:

- Executing code after a button is clicked.
- Processing information after a file is read.
- Running code after a timer finishes.
- Responding after an API request completes.
- Processing results from asynchronous operations.

A callback is not necessarily asynchronous. It can be executed immediately, as in our previous example.

---

## 25. Understanding Higher-Order Functions

A **higher-order function** is a function that either:

1. Accepts another function as an argument.
2. Returns another function.

Callbacks and higher-order functions are closely related.

Example:

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
```

Output:

```text
15
50
```

### Explanation

The `calculate()` function receives three arguments.

- The first number.
- The second number.
- A function that determines the operation.

```javascript
return operation(a, b);
```

Executes the function provided through the `operation` parameter.

When we pass `add`, the program performs addition.

When we pass `multiply`, the program performs multiplication.

The same `calculate()` function can therefore perform different operations without needing to know the exact operation in advance.

This is an important principle used in reusable software design.

---

## 26. Functions That Return Other Functions

A function can also create and return another function.

Example:

```javascript
function createMultiplier(multiplier) {

    return function(number) {
        return number * multiplier;
    };

}

const double = createMultiplier(2);

console.log(double(5));
```

Output:

```text
10
```

### Understanding the Program

```javascript
function createMultiplier(multiplier) {
```

Creates a function that accepts a multiplier.

```javascript
return function(number) {
```

Returns another function that accepts a number.

```javascript
return number * multiplier;
```

Multiplies the supplied number by the multiplier from the outer function.

```javascript
const double = createMultiplier(2);
```

Calls the outer function with 2 and stores the returned function in `double`.

```javascript
console.log(double(5));
```

Calls the returned function with 5.

The calculation is:

```text
5 × 2 = 10
```

The returned function remembers the `multiplier` value from the surrounding function. This behavior is related to **closures**, which will be explored further in a later lesson.

---

## 27. Immediately Invoked Function Expressions (IIFE)

An IIFE is a function expression that executes immediately after it is created.

Example:

```javascript
(function() {
    console.log("This function runs immediately.");
})();
```

Output:

```text
This function runs immediately.
```

### Explanation

The function is placed inside parentheses:

```javascript
(function() {
    // Instructions
})
```

The final parentheses:

```javascript
();
```

Immediately call the function.

IIFEs were historically useful for creating private scopes before modern JavaScript modules became widely used.

They are still valid, although many modern applications use modules and other scope-management techniques.

---

## 28. Function Scope and Local Variables

Variables declared inside a function are generally local to that function.

Example:

```javascript
function calculateTotal() {
    let total = 500;
    console.log(total);
}

calculateTotal();
```

Output:

```text
500
```

The variable `total` is declared inside the function.

Trying to access it outside:

```javascript
console.log(total);
```

produces a `ReferenceError` because `total` is not available in the outer scope.

Now consider:

```javascript
let name = "Brian";

function greet() {
    console.log(name);
}

greet();
```

Output:

```text
Brian
```

The function can access the variable `name` because it is declared in an outer scope.

This behavior is part of JavaScript's lexical scoping system.

---

## 29. Choosing the Right Function Type

| Function type | Common purpose |
|---|---|
| Function declaration | General reusable functions. |
| Function expression | Assigning functions to variables. |
| Arrow function | Concise callbacks and functions. |
| Anonymous function | Functions used without an explicit name. |
| Callback function | Passing behavior into another function. |
| Higher-order function | Working with functions as values. |
| IIFE | Executing a function immediately. |

### Part 2 Exercises

1. Create a function expression that calculates the square of a number.
2. Rewrite it as an arrow function.
3. Create an arrow function that calculates the area of a rectangle.
4. Explain the difference between regular functions and arrow functions.
5. Create a function that accepts another function as an argument.
6. Create a higher-order function that accepts two numbers and an operation.
7. Write an IIFE that displays a welcome message.
8. Explain what a callback function is and give a practical example.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL APPLICATIONS OF FUNCTIONS

In this section, you will use functions to build practical programs similar to those used in real software applications.

## 30. Project 1: Student Grade Calculator

We will create a program that:

1. Accepts a student's marks.
2. Calculates the grade.
3. Determines whether the student has passed.
4. Displays the result.

Create a file:

```text
grade-calculator.js
```

Code:

```javascript
function calculateGrade(marks) {

    if (marks < 0 || marks > 100) {
        return "Invalid marks";
    }

    if (marks >= 70) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

function checkPassStatus(marks) {

    if (marks >= 40 && marks <= 100) {
        return "PASS";
    }

    return "FAIL";
}

function displayResult(name, marks) {

    const grade = calculateGrade(marks);
    const status = checkPassStatus(marks);

    console.log("STUDENT RESULT");
    console.log("Name:", name);
    console.log("Marks:", marks);
    console.log("Grade:", grade);
    console.log("Status:", status);
}

displayResult("Brian", 78);
```

Output:

```text
STUDENT RESULT
Name: Brian
Marks: 78
Grade: A
Status: PASS
```

### Understanding the Program

We have created three functions.

**Function 1: `calculateGrade()`**

This function receives examination marks and determines the grade.

```javascript
function calculateGrade(marks) {
```

The parameter `marks` receives the student's examination score.

The function first checks whether the marks are valid:

```javascript
if (marks < 0 || marks > 100) {
    return "Invalid marks";
}
```

If the marks are below zero or above 100, the function returns an error message.

The remaining conditions determine the grade.

For example:

```javascript
if (marks >= 70) {
    return "A";
}
```

If the student scores 70 or more, the function returns grade A.

The following `else if` statements check the remaining grade ranges.

**Function 2: `checkPassStatus()`**

This function determines whether the student has passed.

```javascript
if (marks >= 40 && marks <= 100) {
    return "PASS";
}
```

A score between 40 and 100 receives a PASS status.

Otherwise, the function returns FAIL.

**Function 3: `displayResult()`**

This function combines the results from the other two functions.

```javascript
const grade = calculateGrade(marks);
```

Calls the grade-calculation function and stores the returned grade.

```javascript
const status = checkPassStatus(marks);
```

Calls the pass-status function and stores its result.

Finally, the function displays all the information.

**Important:** In this example, the grading thresholds are illustrative. An actual institution must use its approved grading policy.

---

## 31. Project 2: Banking System Using Functions

Now let's create a simplified banking program.

It will support:

- Checking account balance.
- Depositing money.
- Withdrawing money.
- Displaying account information.

Create:

```text
bank.js
```

Code:

```javascript
let balance = 10000;

function checkBalance() {
    console.log("Current Balance: KSh", balance);
}

function deposit(amount) {

    if (amount <= 0) {
        console.log("Invalid deposit amount.");
        return;
    }

    balance += amount;

    console.log("Deposit successful.");
    console.log("New Balance: KSh", balance);
}

function withdraw(amount) {

    if (amount <= 0) {
        console.log("Invalid withdrawal amount.");
        return;
    }

    if (amount > balance) {
        console.log("Insufficient funds.");
        return;
    }

    balance -= amount;

    console.log("Withdrawal successful.");
    console.log("New Balance: KSh", balance);
}

checkBalance();

deposit(5000);

withdraw(3000);

checkBalance();
```

Output:

```text
Current Balance: KSh 10000
Deposit successful.
New Balance: KSh 15000
Withdrawal successful.
New Balance: KSh 12000
Current Balance: KSh 12000
```

### Understanding the Program

**Step 1: Create the account balance**

```javascript
let balance = 10000;
```

Creates a variable that stores the current account balance.

It is declared outside the functions so that the functions can access and update it.

**Step 2: Create the balance function**

```javascript
function checkBalance() {
    console.log("Current Balance: KSh", balance);
}
```

Displays the current account balance.

**Step 3: Create the deposit function**

```javascript
function deposit(amount) {
```

Accepts the amount the customer wants to deposit.

Validation:

```javascript
if (amount <= 0) {
    console.log("Invalid deposit amount.");
    return;
}
```

Prevents zero or negative deposits.

Next:

```javascript
balance += amount;
```

Adds the deposit amount to the existing balance.

For example:

```text
10,000 + 5,000 = 15,000
```

**Step 4: Create the withdrawal function**

```javascript
function withdraw(amount) {
```

Accepts the amount the customer wants to withdraw.

The first validation checks whether the amount is valid.

The second validation checks whether sufficient money is available:

```javascript
if (amount > balance) {
    console.log("Insufficient funds.");
    return;
}
```

If the requested amount exceeds the account balance, the withdrawal stops.

Otherwise:

```javascript
balance -= amount;
```

Subtracts the withdrawal amount from the balance.

**Step 5: Execute the operations**

```javascript
checkBalance();

deposit(5000);

withdraw(3000);

checkBalance();
```

Calls the functions in sequence.

### Important Real-World Consideration

This is an educational banking simulation.

Real banking applications require:

- Secure user authentication.
- Server-side authorization.
- Database-backed balances.
- Transaction records.
- Atomic financial operations.
- Audit trails.
- Fraud monitoring.

A production banking system must not rely on a JavaScript variable in a user's browser to store account balances.

---

## 32. Project 3: User Registration and Validation

Functions are also useful when validating user information.

Create:

```text
registration.js
```

Code:

```javascript
function validateUsername(username) {

    if (username.trim() === "") {
        return "Username cannot be empty.";
    }

    if (username.length < 3) {
        return "Username must contain at least 3 characters.";
    }

    return "Username is valid.";
}

function validateEmail(email) {

    if (!email.includes("@")) {
        return "Invalid email address.";
    }

    return "Email format check passed.";
}

function registerUser(username, email) {

    const usernameResult = validateUsername(username);
    const emailResult = validateEmail(email);

    console.log(usernameResult);
    console.log(emailResult);
}

registerUser("Brian", "brian@example.com");
```

Output:

```text
Username is valid.
Email format check passed.
```

### Understanding the Program

We have separated validation into two functions.

`validateUsername()` checks the username.

```javascript
username.trim()
```

Removes whitespace from the beginning and end of the string.

This prevents someone from entering only spaces as a username.

```javascript
username.length < 3
```

Checks whether the username contains fewer than three characters.

`validateEmail()` performs a basic check for the `@` character.

This is only a simple demonstration, not complete email validation.

`registerUser()` combines the two validation functions.

It calls each one, receives its result, and displays the messages.

This demonstrates an important programming principle: **one function can call other functions to complete a larger task.**

---

## 33. Project 4: Using Functions With Arrays

JavaScript arrays have built-in methods that accept callback functions.

Three particularly useful methods are:

- `map()`
- `filter()`
- `forEach()`

These are higher-order array methods.

### A. `forEach()`

The `forEach()` method executes a callback function once for each array element.

Example:

```javascript
const names = ["Brian", "Mary", "John"];

names.forEach(function(name) {
    console.log(name);
});
```

Output:

```text
Brian
Mary
John
```

The callback receives each array value.

The method is useful when you want to perform an action for every element, such as displaying information.

Arrow-function version:

```javascript
names.forEach(name => {
    console.log(name);
});
```

### B. `map()`

The `map()` method creates a new array by transforming each element of the original array.

Example:

```javascript
const prices = [100, 200, 300];

const discountedPrices = prices.map(function(price) {
    return price * 0.9;
});

console.log(discountedPrices);
```

Output:

```text
[90, 180, 270]
```

Explanation:

- `prices` contains the original prices.
- `map()` visits each price.
- The callback calculates 90% of that price.
- `return` provides the transformed value.
- `map()` collects those returned values into a new array.

The original array remains unchanged.

Arrow-function version:

```javascript
const discountedPrices = prices.map(price => price * 0.9);
```

### C. `filter()`

The `filter()` method creates a new array containing elements that satisfy a condition.

Example:

```javascript
const marks = [35, 60, 80, 42, 90];

const passedStudents = marks.filter(function(mark) {
    return mark >= 50;
});

console.log(passedStudents);
```

Output:

```text
[60, 80, 90]
```

Explanation:

The callback checks every mark.

```javascript
return mark >= 50;
```

If the condition is true, that mark is included in the new array.

If it is false, that mark is excluded.

Arrow-function version:

```javascript
const passedStudents = marks.filter(mark => mark >= 50);
```

### Comparison

| Method | Purpose | Returns |
|---|---|---|
| `forEach()` | Performs an operation for every element. | `undefined` |
| `map()` | Transforms every element. | A new array |
| `filter()` | Selects elements matching a condition. | A new array |

These methods are widely used in modern JavaScript applications.

---

## 34. Project 5: Product Management Using Functions and Array Methods

Let's combine functions with `map()`, `filter()`, and `reduce()`.

The `reduce()` method processes array elements and combines them into one accumulated result.

Create:

```text
products.js
```

Code:

```javascript
const products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 18000 }
];

function displayProducts() {

    products.forEach(product => {
        console.log(product.name, "- KSh", product.price);
    });

}

function getExpensiveProducts() {

    return products.filter(product => product.price >= 5000);

}

function calculateTotal() {

    return products.reduce((total, product) => {
        return total + product.price;
    }, 0);

}

displayProducts();

console.log("Expensive Products:", getExpensiveProducts());

console.log("Total Value: KSh", calculateTotal());
```

Output:

```text
Laptop - KSh 65000
Mouse - KSh 800
Keyboard - KSh 1500
Monitor - KSh 18000

Expensive Products: [
  { name: 'Laptop', price: 65000 },
  { name: 'Monitor', price: 18000 }
]

Total Value: KSh 85300
```

### Understanding the Program

**The product array**

Stores four product objects.

**The `displayProducts()` function**

Uses `forEach()` to display each product.

**The `getExpensiveProducts()` function**

Uses `filter()` to select products costing at least KSh 5,000.

**The `calculateTotal()` function**

Uses `reduce()` to calculate the total value of all products.

The important part is:

```javascript
return total + product.price;
```

- `total` stores the accumulated value.
- `product.price` is the current product's price.
- The function returns the updated total.

The final argument:

```javascript
}, 0);
```

Sets the initial accumulated value to zero.

This example demonstrates how functions and array methods can work together to process application data.

---

## 35. How Functions Are Used in Software Development

Functions are not only used in small programs. They are fundamental to building larger applications.

Consider an online shopping application.

Its backend might contain functions responsible for:

```text
registerUser()
loginUser()
getProducts()
addToCart()
removeFromCart()
calculateTotal()
processPayment()
createOrder()
sendConfirmationEmail()
```

Each function handles a particular responsibility.

When a customer places an order, different functions work together to complete the process.

For example:

```javascript
function placeOrder(cart) {

    const total = calculateTotal(cart);

    const order = createOrder(cart, total);

    processPayment(order);

    sendConfirmationEmail(order);

}
```

This is a simplified illustration of how functions can organize a larger workflow. Actual payment processing requires asynchronous handling, secure server-side verification, and careful error management.

### Part 3 Exercises

**Exercise 1: Basic Functions**

Create a function that accepts two numbers and returns their sum.

**Exercise 2: Arrow Functions**

Convert the following function into an arrow function:

```javascript
function multiply(a, b) {
    return a * b;
}
```

**Exercise 3: Student Management**

Create a function called `calculateAverage()` that accepts an array of marks and returns the average.

**Exercise 4: Banking Application**

Create functions for:

- Checking balance.
- Depositing money.
- Withdrawing money.

Ensure that invalid transactions are rejected.

**Exercise 5: User Validation**

Create separate functions for validating:

- Username.
- Email.
- Password length.

Create another function that calls all three validation functions.

**Exercise 6: Array Methods**

Given:

```javascript
const numbers = [10, 20, 30, 40, 50];
```

Use:

- `forEach()` to display the numbers.
- `map()` to double every number.
- `filter()` to select numbers greater than 25.

**Exercise 7: Callback Functions**

Create a function called `performOperation()` that accepts two numbers and a callback function.

Use it to perform addition and multiplication.

**Exercise 8: Product Calculator**

Create an array of products and write a function that calculates their combined value using `reduce()`.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

## 36. Lesson Review

Before starting the assessment, make sure you understand these concepts.

| Concept | What you should understand |
|---|---|
| Function | A reusable block of code. |
| Function declaration | A function defined using the `function` keyword. |
| Function expression | A function assigned to a variable. |
| Arrow function | A function written using `=>`. |
| Parameter | A variable listed in a function definition. |
| Argument | A value passed when calling a function. |
| Return | Sends a value back to the caller. |
| Default parameter | Provides a fallback when an argument is omitted or `undefined`. |
| Callback | A function passed to another function. |
| Higher-order function | A function that accepts or returns another function. |
| IIFE | A function expression executed immediately. |
| Scope | Determines where variables can be accessed. |

---

## 37. Kai Assessment

Complete all sections.

### SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is a function in JavaScript?

A. A type of variable.

B. A reusable block of code.

C. A database.

D. A loop.

**Question 2**

Which keyword is used to declare a traditional JavaScript function?

A. `create`

B. `define`

C. `function`

D. `method`

**Question 3**

What is the purpose of calling a function?

A. To delete it.

B. To execute it.

C. To rename it.

D. To convert it into a variable.

**Question 4**

What is a parameter?

A. A variable defined in a function's parameter list.

B. A result displayed in the terminal.

C. A JavaScript operator.

D. A database record.

**Question 5**

What does the `return` statement do?

A. Repeats the function.

B. Sends a value back to the caller.

C. Creates a loop.

D. Declares an object.

**Question 6**

Which of the following is an arrow function?

A.

```javascript
function add(a, b) {
    return a + b;
}
```

B.

```javascript
const add = (a, b) => a + b;
```

C.

```javascript
let add = 10 + 20;
```

D.

```javascript
console.log(add);
```

**Question 7**

What is a callback function?

A. A function that cannot execute.

B. A function passed to another function.

C. A function without parameters only.

D. A function that always returns a number.

**Question 8**

Which array method creates a new array by transforming each element?

A. `forEach()`

B. `map()`

C. `console.log()`

D. `return()`

### SECTION B: CONCEPTUAL QUESTIONS

**Question 9**

Explain the difference between function declarations and function expressions.

**Question 10**

Differentiate between parameters and arguments using an example.

**Question 11**

Explain the difference between `return` and `console.log()`.

**Question 12**

What is the difference between regular functions and arrow functions, particularly regarding `this`?

**Question 13**

Explain what callback functions and higher-order functions are.

### SECTION C: PRACTICAL PROGRAMMING

**Question 14: Calculator**

Create a function called `calculate()` that accepts two numbers and an operator.

It should support:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Return the result.

Your program should also handle division by zero.

**Question 15: Student Results**

Create a function called `calculateAverage()` that accepts an array of marks and returns the average.

Then create another function that determines whether the student has passed or failed.

**Question 16: Array Processing**

Given:

```javascript
const numbers = [5, 10, 15, 20, 25, 30];
```

Use `filter()` to select numbers greater than 15.

Use `map()` to multiply every selected number by 2.

Display the final array.

### SECTION D: DEBUGGING

**Question 17**

Identify and correct the error:

```javascript
function add(a, b) {
    console.log(a + b);
}

const result = add(10, 20);

console.log(result + 5);
```

Explain why the final result is not what the programmer expects.

**Question 18**

Study this program:

```javascript
const greet = (name) => {
    return "Hello " + name;
};

console.log(greet());
```

Answer:

1. What will the program display?
2. Why does it display that result?
3. How would you modify the function to provide a default name?

---

## 38. Final Practical Challenge: Build a Mini Management System

Build a small management system using JavaScript functions.

Your application should manage student records.

Each student should have:

- Name.
- Registration number.
- Course.
- Examination marks.

Your program must contain separate functions for:

1. Adding a student.
2. Displaying all students.
3. Calculating an individual student's average.
4. Determining a student's pass or fail status.
5. Searching for a student by registration number.
6. Displaying all students who passed.

### Requirements

- Store student information in an array of objects.
- Use function parameters where necessary.
- Use `return` when a function needs to provide a result.
- Use loops or array methods to process records.
- Avoid repeating the same code unnecessarily.

This challenge combines functions, objects, arrays, conditions, and loops from previous lessons.

---

## 39. Submit Your Work to Kai

When you finish, submit your assessment answers and practical project to Kai.

Kai should:

1. Mark your multiple-choice answers.
2. Evaluate your conceptual explanations.
3. Review your JavaScript functions.
4. Identify syntax errors.
5. Identify incorrect function logic.
6. Explain mistakes and provide corrections.
7. Test the practical challenge against the requirements.
8. Award a final score.
9. Recommend areas requiring improvement.

## 40. Lesson Completion Checklist

Before completing this lesson, confirm that you can:

- [ ] Explain what functions are.
- [ ] Declare and call functions.
- [ ] Use parameters and arguments.
- [ ] Return values from functions.
- [ ] Use default parameters.
- [ ] Create function expressions.
- [ ] Write arrow functions.
- [ ] Explain the differences between regular and arrow functions.
- [ ] Create anonymous functions.
- [ ] Use callback functions.
- [ ] Understand higher-order functions.
- [ ] Create IIFEs.
- [ ] Understand local and global scope.
- [ ] Use `forEach()`, `map()`, and `filter()`.
- [ ] Build programs using multiple reusable functions.

**Part 4 of 4 — Lesson Complete**

---

## 41. What Comes Next?

**Next Lesson: JavaScript Arrays**

You will learn how JavaScript stores and manages collections of data.

Topics will include:

- Creating arrays.
- Accessing array elements.
- Array indexes.
- Adding and removing elements.
- Updating array elements.
- Array length.
- Searching arrays.
- Sorting arrays.
- Multidimensional arrays.
- Array destructuring.
- Practical array-based projects.

You will also learn how arrays work together with functions and loops to process large collections of information.