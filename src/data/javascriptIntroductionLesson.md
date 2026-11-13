# JAVASCRIPT LESSON 1: INTRODUCTION TO JAVASCRIPT

# PART 1 OF 4: UNDERSTANDING JAVASCRIPT

## 1. What Is JavaScript?

**JavaScript is a high-level programming language used to make applications interactive, dynamic, and functional.**

It is one of the most widely used programming languages in software development.

JavaScript allows developers to create applications that respond to user actions, process information, communicate with servers, and update content.

For example, imagine visiting an online shopping website.

You can:

- Click buttons to add products to your cart.
- Search for products.
- Calculate the total cost of your purchases.
- Log in to your account.
- Make payments.
- Receive notifications.
- View information without reloading the entire page.

JavaScript can help implement these features.

Without JavaScript, many websites would have limited interaction.

## 2. Where Is JavaScript Used?

JavaScript is not limited to websites. It can be used in several areas of software development.

### A. Frontend Development

Frontend development involves building the part of an application that users see and interact with.

JavaScript works alongside HTML and CSS.

For example, consider a login page.

- HTML creates the username field, password field, and login button.
- CSS controls the appearance of the login page.
- JavaScript handles interactions such as validating the form and responding when the user clicks Login.

### B. Backend Development

JavaScript can also run on servers using technologies such as Node.js.

This means developers can use JavaScript to build backend applications.

For example, a backend server might:

1. Receive a login request.
2. Validate the submitted information.
3. communicate with a database.
4. Verify the user's credentials.
5. Return a response to the frontend.

### C. Mobile Application Development

JavaScript can be used to build mobile applications with frameworks such as React Native.

These applications can run on Android and iOS.

### D. Desktop Application Development

JavaScript can also be used to develop desktop applications using technologies such as Electron.

### E. Game Development

JavaScript can be used to build browser-based games and interactive experiences.

## 3. JavaScript, HTML, and CSS: Understanding the Difference

These three technologies are commonly used together in frontend development.

| Technology | Main responsibility | Example |
|---|---|---|
| HTML | Structure | Creating a button |
| CSS | Presentation | Making the button blue |
| JavaScript | Behaviour | Making the button respond to clicks |

Imagine building a house.

- HTML represents the structure of the house.
- CSS represents its appearance and decoration.
- JavaScript represents the mechanisms that make things happen.

For example, a website button:

**HTML:**

```html
<button>Click Me</button>
```

This creates a button.

**CSS:**

```css
button {
    background-color: blue;
    color: white;
}
```

This makes the button blue with white text.

**JavaScript:**

```javascript
alert("Button clicked!");
```

This displays a message when the JavaScript statement executes.

We will learn how to connect these technologies in later lessons.

## 4. How Does JavaScript Work?

JavaScript needs an environment in which its instructions can be executed.

Two common environments are:

**A. Web browsers**

Browsers such as Google Chrome, Firefox, and Microsoft Edge include JavaScript engines.

These engines execute JavaScript code.

For example, when you open a website containing JavaScript, the browser can execute that code.

**B. Node.js**

Node.js allows JavaScript to run outside the browser.

It provides an environment for executing JavaScript on computers and servers.

For example, you can use Node.js to build:

- Backend APIs.
- Authentication systems.
- Database applications.
- Command-line tools.
- Real-time applications.

### What Is a JavaScript Engine?

A JavaScript engine is software responsible for executing JavaScript code.

Different environments use different engines.

Examples:

| Engine | Commonly used in |
|---|---|
| V8 | Google Chrome and Node.js |
| SpiderMonkey | Firefox |
| JavaScriptCore | Safari |

When you write JavaScript, the engine processes the code and executes its instructions.

## 5. Is JavaScript the Same as Java?

No.

Despite their similar names, JavaScript and Java are different programming languages.

| JavaScript | Java |
|---|---|
| Commonly used in frontend and backend development | Commonly used in enterprise, backend, and Android-related development |
| Dynamically typed | Statically typed |
| Commonly executed by JavaScript engines | Commonly compiled to JVM bytecode |
| Uses `.js` files | Uses `.java` source files |

For example, JavaScript:

```javascript
let age = 20;
```

Java:

```java
int age = 20;
```

JavaScript allows a variable to hold different types of values during execution, while Java generally requires a declared variable type.

They are separate languages with different ecosystems.

## 6. Why Should You Learn JavaScript?

Learning JavaScript gives you the ability to develop different types of software.

Some important advantages include:

1. **Versatility:** You can use it for frontend, backend, mobile, and desktop development.
2. **Large ecosystem:** It has many libraries, frameworks, and development tools.
3. **Browser support:** Modern browsers already include JavaScript engines.
4. **Backend development:** Node.js allows you to develop server-side applications.
5. **Career opportunities:** JavaScript is widely used in the software development industry.
6. **API integration:** JavaScript can communicate with backend services and external APIs.

## Part 1 Summary

You should now understand:

1. What JavaScript is.
2. Where JavaScript is used.
3. The relationship between HTML, CSS, and JavaScript.
4. How JavaScript executes.
5. What JavaScript engines are.
6. The difference between JavaScript and Java.
7. Why JavaScript is important in software development.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: JAVASCRIPT ENVIRONMENT, SYNTAX AND BASIC CONCEPTS

## 1. Setting Up Your JavaScript Development Environment

Before writing JavaScript programs, you need an environment where you can write and execute your code.

You can use:

- Visual Studio Code as your code editor.
- Google Chrome or another modern browser.
- Node.js to execute JavaScript outside a browser.

### Step 1: Install Visual Studio Code

Download and install Visual Studio Code.

Official website:

https://code.visualstudio.com/

Visual Studio Code is a code editor that helps you write, organize, and manage programming projects.

### Step 2: Install Node.js

Download Node.js from:

https://nodejs.org/

Node.js allows you to execute JavaScript directly from your computer's terminal.

After installation, open your terminal and execute:

```bash
node -v
```

This checks the installed Node.js version.

Then execute:

```bash
npm -v
```

This checks the installed npm version.

**What is npm?**

npm is a package manager commonly used in the JavaScript ecosystem.

It allows developers to install and manage external packages that provide additional functionality.

We will explore npm in a later lesson.

### Step 3: Create Your First JavaScript Project

Create a folder named:

```text
javascript_introduction
```

Inside the folder, create a file:

```text
index.js
```

Your project should look like this:

```text
javascript_introduction/
│
└── index.js
```

You are now ready to write your first JavaScript program.

## 2. Your First JavaScript Program

Open `index.js` and write:

```javascript
console.log("Hello, JavaScript!");
```

Run the program using your terminal:

```bash
node index.js
```

Output:

```text
Hello, JavaScript!
```

Let's understand the statement.

```javascript
console.log("Hello, JavaScript!");
```

- `console` refers to the console object.
- `log()` is a method used to display information in the console.
- `"Hello, JavaScript!"` is the text being displayed.
- The semicolon marks the end of the statement.

The `console.log()` method is commonly used to display information and inspect program behaviour while developing applications.

## 3. Understanding JavaScript Syntax

Syntax refers to the rules that determine how JavaScript code should be written.

Programming languages have syntax rules that developers must follow.

Consider this example:

```javascript
let name = "Brian";

console.log(name);
```

Output:

```text
Brian
```

Let's understand each line.

**Line 1:**

```javascript
let name = "Brian";
```

This creates a variable called `name` and stores the text `"Brian"` inside it.

**Line 2:**

```javascript
console.log(name);
```

This displays the value stored in the variable.

Notice that we do not put quotation marks around `name`.

Without quotation marks, JavaScript treats `name` as a variable reference.

With quotation marks, `"name"` would be treated as ordinary text.

## 4. JavaScript Is Case-Sensitive

JavaScript distinguishes between uppercase and lowercase letters.

For example:

```javascript
let username = "Brian";

console.log(username);
```

This works.

However:

```javascript
let username = "Brian";

console.log(UserName);
```

This produces a `ReferenceError` because `UserName` and `username` are different identifiers.

JavaScript developers must use consistent naming.

## 5. JavaScript Comments

Comments are explanations written inside source code.

JavaScript ignores comments when executing a program.

There are two main types.

### A. Single-Line Comments

Use two forward slashes:

```javascript
// This is a single-line comment

console.log("Welcome");
```

Everything after `//` on that line is treated as a comment.

### B. Multi-Line Comments

Use `/*` to begin and `*/` to end:

```javascript
/*
This program displays
a welcome message.
*/

console.log("Welcome to JavaScript");
```

Multi-line comments are useful when documenting larger sections of code.

## 6. Understanding Variables

A variable is a named storage location used to reference information in a program.

For example:

```javascript
let studentName = "Brian";
let age = 21;
```

The first variable stores a student's name.

The second variable stores an age.

Variables allow programs to work with information without repeatedly writing the same values.

JavaScript provides three common ways to declare variables:

- `let`
- `const`
- `var`

### A. The `let` Keyword

`let` declares a variable whose value can be reassigned.

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

Explanation:

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

Changes the value stored in the variable to `21`.

The second `console.log()` displays the updated value.

### B. The `const` Keyword

`const` declares a variable that cannot be reassigned.

Example:

```javascript
const country = "Kenya";

console.log(country);
```

Output:

```text
Kenya
```

However, attempting to reassign it:

```javascript
const country = "Kenya";

country = "Uganda";
```

Produces a `TypeError`.

Use `const` when you do not intend to reassign the variable.

**Important:** A `const` variable holding an object or array cannot be reassigned, but its contents may still be modified. We will explore this later.

### C. The `var` Keyword

`var` is an older way of declaring variables.

Example:

```javascript
var course = "BBIT";

console.log(course);
```

Output:

```text
BBIT
```

Unlike `let` and `const`, `var` is function-scoped rather than block-scoped.

Modern JavaScript development generally prefers `let` and `const`.

### Comparison of `let`, `const`, and `var`

| Feature | let | const | var |
|---|---|---|---|
| Can be reassigned | Yes | No | Yes |
| Can be redeclared in the same scope | No | No | Yes |
| Block-scoped | Yes | Yes | No |
| Common in modern JavaScript | Yes | Yes | Less preferred |

## 7. JavaScript Data Types

A data type describes the kind of value a variable contains.

JavaScript has several built-in data types.

### A. String

A string represents text.

Example:

```javascript
let name = "Brian";

console.log(name);
```

Output:

```text
Brian
```

Strings can be written using:

```javascript
let first = "Hello";
let second = 'World';
let third = `JavaScript`;
```

All three represent strings.

### B. Number

The number type represents numeric values, including integers and decimal numbers.

Example:

```javascript
let age = 21;
let price = 150.50;

console.log(age);
console.log(price);
```

Output:

```text
21
150.5
```

JavaScript uses one primary `Number` type for ordinary integer and floating-point numbers.

### C. Boolean

A Boolean represents one of two values:

- `true`
- `false`

Example:

```javascript
let isLoggedIn = true;

console.log(isLoggedIn);
```

Output:

```text
true
```

Booleans are useful when making decisions in programs.

For example, an application may check whether a user is logged in before allowing access to a dashboard.

### D. Undefined

A variable declared without an assigned value normally contains `undefined`.

Example:

```javascript
let username;

console.log(username);
```

Output:

```text
undefined
```

This means the variable exists but does not currently have an assigned value.

### E. Null

`null` represents an intentional absence of a value.

Example:

```javascript
let selectedProduct = null;

console.log(selectedProduct);
```

Output:

```text
null
```

This can be useful when an application has not yet selected a product.

### F. Object

Objects allow developers to group related information using key-value pairs.

Example:

```javascript
let student = {
    name: "Brian",
    age: 21,
    course: "BBIT"
};

console.log(student);
```

Output:

```text
{ name: 'Brian', age: 21, course: 'BBIT' }
```

Here:

- `name` is a property.
- `"Brian"` is its value.
- `age` is another property.
- `21` is its value.
- `course` is another property.
- `"BBIT"` is its value.

Objects are important when building applications that manage users, products, transactions, and other structured records.

### G. Array

An array stores multiple values in an ordered collection.

Example:

```javascript
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
```

Output:

```text
[ 'Apple', 'Banana', 'Orange' ]
```

You can access individual elements using their indexes.

```javascript
console.log(fruits[0]);
```

Output:

```text
Apple
```

JavaScript array indexing begins at zero.

Therefore:

| Index | Value |
|---|---|
| 0 | Apple |
| 1 | Banana |
| 2 | Orange |

Arrays will be covered in more detail in a later lesson.

### H. BigInt and Symbol

JavaScript also provides two additional primitive types.

**BigInt** represents integers larger than the range safely represented by the ordinary `Number` type.

Example:

```javascript
let largeNumber = 12345678901234567890n;

console.log(largeNumber);
```

The `n` at the end identifies a BigInt literal.

**Symbol** creates a unique primitive value.

Example:

```javascript
let id = Symbol("userId");

console.log(id);
```

Symbols are useful in specialized programming situations, including creating unique object property keys.

We will explore these types when needed.

### Checking Data Types with `typeof`

JavaScript provides the `typeof` operator to inspect the type of a value.

Example:

```javascript
let name = "Brian";
let age = 21;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
```

Output:

```text
string
number
boolean
```

One important detail:

```javascript
console.log(typeof null);
```

Output:

```text
object
```

This is a historical JavaScript behaviour. Although the result is `"object"`, `null` is a primitive value, not an object.

## 8. Basic JavaScript Operators

Operators are symbols used to perform operations on values.

### A. Arithmetic Operators

These operators perform mathematical calculations.

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 5` | 15 |
| `-` | Subtraction | `10 - 5` | 5 |
| `*` | Multiplication | `10 * 5` | 50 |
| `/` | Division | `10 / 5` | 2 |
| `%` | Remainder | `10 % 3` | 1 |
| `**` | Exponentiation | `2 ** 3` | 8 |

Example:

```javascript
let firstNumber = 20;
let secondNumber = 5;

let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
```

Output:

```text
25
15
100
4
```

Explanation:

- `firstNumber` stores 20.
- `secondNumber` stores 5.
- The addition operation adds both values.
- The subtraction operation finds their difference.
- The multiplication operation multiplies both values.
- The division operation divides 20 by 5.
- Each result is stored in a separate variable and displayed.

### B. Comparison Operators

Comparison operators compare two values and return a Boolean result.

| Operator | Meaning |
|---|---|
| `==` | Equal value after type conversion |
| `===` | Strict equality: same value and type |
| `!=` | Not equal after type conversion |
| `!==` | Strict inequality |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

Example:

```javascript
let age = 21;

console.log(age > 18);
console.log(age < 18);
console.log(age === 21);
```

Output:

```text
true
false
true
```

The first comparison checks whether 21 is greater than 18.

The second checks whether 21 is less than 18.

The third checks whether 21 is strictly equal to 21.

**Important:**

```javascript
console.log(5 == "5");
console.log(5 === "5");
```

Output:

```text
true
false
```

The `==` operator performs type conversion in this comparison.

The `===` operator does not perform that type conversion and therefore considers the number `5` different from the string `"5"`.

Modern JavaScript development generally prefers `===` and `!==` to avoid unexpected type conversions.

### C. Assignment Operators

Assignment operators assign values to variables.

Example:

```javascript
let total = 10;

total += 5;

console.log(total);
```

Output:

```text
15
```

The statement:

```javascript
total += 5;
```

is equivalent to:

```javascript
total = total + 5;
```

Other examples include:

- `-=`
- `*=`
- `/=`
- `%=`

### D. Logical Operators

Logical operators combine or reverse Boolean conditions.

| Operator | Meaning |
|---|---|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

Example:

```javascript
let age = 21;
let hasID = true;

console.log(age >= 18 && hasID);
```

Output:

```text
true
```

Explanation:

- `age >= 18` checks whether the person is at least 18.
- `hasID` checks whether the person has identification.
- `&&` requires both conditions to be true.
- Since both conditions are true, the final result is true.

These operators are frequently used in login systems, access controls, and application validation.

## Part 2 Summary

You should now understand:

1. How to set up a JavaScript development environment.
2. How to create and run a JavaScript file.
3. Basic JavaScript syntax.
4. Comments and case sensitivity.
5. Variables using `let`, `const`, and `var`.
6. JavaScript data types.
7. How to check data types using `typeof`.
8. Arithmetic, comparison, assignment, and logical operators.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL JAVASCRIPT PROGRAMMING

Now that you understand JavaScript's basic concepts, let's use them to create small programs.

All the examples in this section can be written in your `index.js` file.

You can run each program using:

```bash
node index.js
```

For clarity, replace the previous example when moving to a new program, or comment out the code you are not currently testing.

## 1. Practical Example One: Personal Information Program

Let's create a program that stores and displays information about a student.

Code:

```javascript
let name = "Brian";
let age = 21;
let course = "BBIT";
let university = "Kirinyaga University";

console.log("STUDENT INFORMATION");
console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);
console.log("University:", university);
```

Output:

```text
STUDENT INFORMATION
Name: Brian
Age: 21
Course: BBIT
University: Kirinyaga University
```

### Understanding the Code

```javascript
let name = "Brian";
```

Creates a variable called `name` and stores the student's name.

```javascript
let age = 21;
```

Stores the student's age as a number.

```javascript
let course = "BBIT";
```

Stores the course name as a string.

```javascript
let university = "Kirinyaga University";
```

Stores the university name.

The remaining statements display the information.

**Real-world application:**

A student management system could use similar variables to store information about a student before sending it to a backend API.

## 2. Practical Example Two: Simple Calculator

Let's create a calculator that performs basic arithmetic operations.

Code:

```javascript
let number1 = 20;
let number2 = 10;

let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;

console.log("ADDITION:", addition);
console.log("SUBTRACTION:", subtraction);
console.log("MULTIPLICATION:", multiplication);
console.log("DIVISION:", division);
```

Output:

```text
ADDITION: 30
SUBTRACTION: 10
MULTIPLICATION: 200
DIVISION: 2
```

### Understanding the Code

The first two variables store the numbers used in the calculations.

For example:

```javascript
let number1 = 20;
let number2 = 10;
```

The addition statement:

```javascript
let addition = number1 + number2;
```

Adds 20 and 10, producing 30.

The subtraction statement:

```javascript
let subtraction = number1 - number2;
```

Subtracts 10 from 20, producing 10.

The multiplication statement:

```javascript
let multiplication = number1 * number2;
```

Multiplies the two values, producing 200.

The division statement:

```javascript
let division = number1 / number2;
```

Divides 20 by 10, producing 2.

The final statements display the calculated results.

## 3. Practical Example Three: Product Price Calculator

Imagine you are building an online shopping application.

A customer selects a product and enters the quantity they want to purchase.

Your program should calculate the total cost.

Code:

```javascript
let productName = "Keyboard";
let price = 1500;
let quantity = 3;

let total = price * quantity;

console.log("PRODUCT:", productName);
console.log("PRICE:", price);
console.log("QUANTITY:", quantity);
console.log("TOTAL:", total);
```

Output:

```text
PRODUCT: Keyboard
PRICE: 1500
QUANTITY: 3
TOTAL: 4500
```

### Understanding the Code

```javascript
let productName = "Keyboard";
```

Stores the product name.

```javascript
let price = 1500;
```

Stores the price of one keyboard.

```javascript
let quantity = 3;
```

Stores the number of keyboards being purchased.

```javascript
let total = price * quantity;
```

Multiplies the unit price by the quantity.

The calculation is:

1500 × 3 = 4500.

The final statements display the purchase information.

**Real-world application:**

An e-commerce application uses similar calculations when determining the value of products in a shopping cart.

For real financial applications, developers must also handle currency precision, validation, and server-side price verification.

## 4. Practical Example Four: Working with Objects

Objects are important because applications frequently need to manage related information.

Let's create a product object.

Code:

```javascript
let product = {
    name: "Laptop",
    brand: "HP",
    price: 65000,
    inStock: true
};

console.log(product.name);
console.log(product.brand);
console.log(product.price);
console.log(product.inStock);
```

Output:

```text
Laptop
HP
65000
true
```

### Understanding the Code

```javascript
let product = {
```

Creates a variable called `product` and assigns an object to it.

```javascript
name: "Laptop",
```

Creates a property called `name` with the value `"Laptop"`.

```javascript
brand: "HP",
```

Stores the product's brand.

```javascript
price: 65000,
```

Stores the product's price.

```javascript
inStock: true
```

Stores whether the product is currently available.

The closing brace ends the object.

For example:

```javascript
console.log(product.name);
```

Accesses the `name` property and displays its value.

This is called **dot notation**.

Objects will become especially important when we start building applications that communicate with APIs.

## 5. Practical Example Five: Working with Arrays

Imagine you are developing an application that stores a list of products.

You can use an array.

Code:

```javascript
let products = [
    "Laptop",
    "Keyboard",
    "Mouse",
    "Monitor"
];

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);
```

Output:

```text
Laptop
Keyboard
Mouse
Monitor
```

### Understanding the Code

```javascript
let products = [
```

Creates an array called `products`.

Each value is stored as an element.

The array contains four product names.

```javascript
console.log(products[0]);
```

Displays the first element.

Remember that array indexing begins at zero.

Therefore:

- `products[0]` retrieves Laptop.
- `products[1]` retrieves Keyboard.
- `products[2]` retrieves Mouse.
- `products[3]` retrieves Monitor.

## 6. Practical Example Six: Using Template Literals

JavaScript provides template literals to make it easier to combine text and variable values.

Template literals use backticks:

```javascript
let name = "Brian";
let course = "BBIT";
let university = "Kirinyaga University";

let message = `My name is ${name}. I study ${course} at ${university}.`;

console.log(message);
```

Output:

```text
My name is Brian. I study BBIT at Kirinyaga University.
```

### Understanding the Code

```javascript
let name = "Brian";
```

Stores the student's name.

```javascript
let course = "BBIT";
```

Stores the course.

```javascript
let university = "Kirinyaga University";
```

Stores the university.

The important part is:

```javascript
let message = `My name is ${name}. I study ${course} at ${university}.`;
```

The backticks allow us to write a string containing variables.

`${name}` inserts the value of the `name` variable.

`${course}` inserts the course.

`${university}` inserts the university.

This technique is called **string interpolation**.

It is useful when generating messages, displaying user information, and constructing text dynamically.

## 7. Practical Example Seven: Getting User Input with Node.js

So far, our programs have used values that we entered directly into the source code.

However, real applications often need information from users.

Node.js provides the built-in `readline` module for reading terminal input.

Let's create a program that asks for a user's name.

Code:

```javascript
const readline = require("node:readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter your name: ", function(name) {

    console.log(`Welcome, ${name}!`);

    input.close();

});
```

Run the program:

```bash
node index.js
```

Example interaction:

```text
Enter your name: Brian
Welcome, Brian!
```

### Understanding the Code

**Line 1:**

```javascript
const readline = require("node:readline");
```

Imports Node.js's built-in `readline` module.

This module provides functionality for reading information from the terminal.

**Lines 3–6:**

```javascript
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

Creates an interface for receiving and displaying terminal information.

- `process.stdin` represents the standard input stream.
- `process.stdout` represents the standard output stream.
- `createInterface()` creates the input interface.

**Line 8:**

```javascript
input.question("Enter your name: ", function(name) {
```

Displays a question and waits for the user to enter information.

When the user submits the answer, the callback function receives it through the `name` parameter.

**Line 10:**

```javascript
console.log(`Welcome, ${name}!`);
```

Displays a welcome message using the value entered by the user.

**Line 12:**

```javascript
input.close();
```

Closes the input interface because the program has finished receiving information.

This example introduces callbacks, which we will study in a later lesson.

**Important:** This is a Node.js terminal input example. Browser applications use different methods for receiving user input, such as HTML forms and input elements.

## 8. Common JavaScript Mistakes

### Mistake 1: Using a Variable Before Declaring It

Incorrect:

```javascript
console.log(username);

let username = "Brian";
```

This produces a `ReferenceError` because a `let` variable cannot be accessed before its declaration.

Correct:

```javascript
let username = "Brian";

console.log(username);
```

Declare the variable before accessing it.

### Mistake 2: Confusing `=` and `===`

Incorrect understanding:

```javascript
let age = 20;

console.log(age = 18);
```

The `=` operator assigns a value. It does not compare two values.

Correct:

```javascript
let age = 20;

console.log(age === 18);
```

This compares the value of `age` with 18.

Output:

```text
false
```

### Mistake 3: Reassigning a `const` Variable

Incorrect:

```javascript
const country = "Kenya";

country = "Uganda";
```

This produces a `TypeError`.

Correct:

```javascript
let country = "Kenya";

country = "Uganda";

console.log(country);
```

Use `let` when reassignment is required.

### Mistake 4: Forgetting That Arrays Start at Zero

Incorrect:

```javascript
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[3]);
```

This produces `undefined` because there is no element at index 3.

Correct:

```javascript
console.log(fruits[2]);
```

Output:

```text
Orange
```

### Mistake 5: Confusing Strings and Numbers

Consider:

```javascript
let first = "10";
let second = 5;

console.log(first + second);
```

Output:

```text
105
```

Why?

The first value is a string. In this operation, JavaScript converts the second value to text and joins them.

To perform addition, convert the string to a number:

```javascript
let first = "10";
let second = 5;

console.log(Number(first) + second);
```

Output:

```text
15
```

This is called type conversion.

### 9. Practical Exercises

Complete the following exercises using your JavaScript environment.

**Exercise 1: Personal Information**

Create a program that stores:

- Your name.
- Your age.
- Your course.
- Your university.

Display all the information using `console.log()`.

**Exercise 2: Simple Calculator**

Create two numeric variables and calculate:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Display all four results.

**Exercise 3: Product Management**

Create an object representing a product.

Include:

- Product name.
- Brand.
- Price.
- Quantity.
- Availability.

Display each property.

**Exercise 4: Shopping Cart**

Create an array containing five product names.

Display the first, third, and fifth products using their indexes.

**Exercise 5: Student Results**

Create variables for:

- Student name.
- Mathematics marks.
- Programming marks.
- Database marks.

Calculate the total marks and average.

Display the student's name, total, and average.

**Exercise 6: User Input**

Using Node.js and the `readline` module, create a program that asks the user for their name and displays a welcome message.

**Exercise 7: Type Checking**

Create variables containing a string, number, Boolean, undefined value, and null.

Use `typeof` to inspect each variable.

Explain the output.

## Part 3 Summary

You have now learned how to:

1. Set up and run JavaScript projects.
2. Display information using `console.log()`.
3. Store and manipulate information using variables.
4. Work with JavaScript data types.
5. Perform calculations using operators.
6. Create and access objects.
7. Create and access arrays.
8. Use template literals.
9. Receive terminal input using Node.js.
10. Identify common JavaScript errors.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

You have completed JavaScript Lesson 1: Introduction to JavaScript.

Now it is time to test your understanding.

The assessment checks your knowledge of JavaScript fundamentals, syntax, variables, data types, operators, and basic programming.

## SECTION A: MULTIPLE-CHOICE QUESTIONS

### Question 1

What is JavaScript primarily used for?

A. Designing computer hardware.

B. Making applications interactive and implementing application logic.

C. Replacing computer operating systems.

D. Creating database tables only.

### Question 2

Which technology is primarily responsible for structuring the content of a webpage?

A. CSS.

B. JavaScript.

C. HTML.

D. Node.js.

### Question 3

Which JavaScript keyword declares a variable that cannot be reassigned?

A. `let`

B. `var`

C. `const`

D. `change`

### Question 4

What is the output of this program?

```javascript
let number = 10;

number = 20;

console.log(number);
```

A. 10

B. 20

C. undefined

D. Error

### Question 5

Which operator checks strict equality in JavaScript?

A. `=`

B. `==`

C. `===`

D. `=>`

### Question 6

What is the output?

```javascript
let value = "25";

console.log(typeof value);
```

A. number

B. string

C. boolean

D. object

## SECTION B: UNDERSTANDING JAVASCRIPT

### Question 7

Explain the difference between `let`, `const`, and `var`.

Your explanation should include:

- Whether each can be reassigned.
- Their scope differences.
- Which ones are generally preferred in modern JavaScript.

### Question 8

Explain the difference between HTML, CSS, and JavaScript.

Give an example of how the three technologies work together when building an interactive webpage.

## SECTION C: PRACTICAL PROGRAMMING

### Question 9: Student Information Program

Create a JavaScript program that stores:

- Student name.
- Age.
- Course.
- University.

Display the information using `console.log()`.

### Question 10: Calculator

Create a calculator using two variables.

Your program should calculate and display:

- Addition.
- Subtraction.
- Multiplication.
- Division.

### Question 11: Product Object

Create an object called `product`.

It should contain:

- `name`
- `price`
- `quantity`
- `inStock`

Display each property individually.

### Question 12: Data Types

Create five variables containing:

- A string.
- A number.
- A Boolean.
- An undefined value.
- A null value.

Use `typeof` to inspect each variable and explain the results.

## SUBMIT YOUR ASSESSMENT TO KAI

Once you complete the questions, submit your answers to Kai, your AI instructor.

Kai should:

1. Evaluate your answers.
2. Mark the multiple-choice questions.
3. Review your explanations.
4. Inspect your JavaScript programs.
5. Identify syntax and logical errors.
6. Explain incorrect answers.
7. Provide corrected code where necessary.
8. Give you an overall performance assessment.
9. Recommend the next lesson based on your understanding.

## LESSON COMPLETION CHECKLIST

Before moving to the next lesson, ensure that you can:

- [ ] Explain what JavaScript is.
- [ ] Identify where JavaScript is used.
- [ ] Explain the relationship between HTML, CSS, and JavaScript.
- [ ] Explain how JavaScript executes.
- [ ] Create and execute a JavaScript file using Node.js.
- [ ] Use `console.log()`.
- [ ] Declare variables using `let`, `const`, and `var`.
- [ ] Identify JavaScript data types.
- [ ] Use arithmetic and comparison operators.
- [ ] Understand logical operators.
- [ ] Create basic objects and arrays.
- [ ] Use template literals.
- [ ] Receive input through the Node.js terminal.

**Part 4 of 4 — Lesson Complete**

**Recommended Next Lesson: JavaScript Variables and Data Types**

In the next lesson, we will explore variables and data types in much greater depth, including type conversion, dynamic typing, primitive values, reference values, scope, and the differences between `null` and `undefined`.