# JavaScript: Input and Output

# PART 1 OF 4 — UNDERSTANDING INPUT AND OUTPUT

## 1. What Is Input and Output?

In programming, **input and output (I/O)** describe how a program receives information and communicates results.

A program normally performs three major activities:

1. Receives input.
2. Processes the input.
3. Produces output.

This is commonly called the Input–Process–Output (IPO) cycle.

### Example: A Simple Calculator

Imagine creating a calculator.

- **Input:** The user enters two numbers.
- **Processing:** JavaScript adds the numbers.
- **Output:** The program displays the answer.

For example:

```text
First number: 20
Second number: 10

Result: 30
```

The program receives two values, processes them using an arithmetic operator, and displays the result.

## 2. Types of Input and Output in JavaScript

JavaScript applications can run in different environments.

The two common environments are:

1. Web browsers.
2. Node.js.

Each environment provides different ways of receiving input and displaying output.

| Environment | Input methods | Output methods |
|---|---|---|
| Browser | `prompt()`, HTML forms, input fields | `console.log()`, `alert()`, DOM |
| Node.js | `readline`, standard input (`stdin`) | `console.log()`, standard output (`stdout`) |

Let's understand each method.

## 3. Output Using `console.log()`

The `console.log()` method displays information in the developer console or terminal.

It is one of the most commonly used output methods in JavaScript.

Example:

```javascript
console.log("Hello, World!");
```

Output:

```text
Hello, World!
```

**Explanation:**

- `console` refers to the environment's console object.
- `log()` is a method used to display information.
- `"Hello, World!"` is the message being displayed.
- The semicolon ends the statement.

You can display different types of values.

```javascript
console.log("JavaScript");
console.log(100);
console.log(true);
```

Output:

```text
JavaScript
100
true
```

You can also display multiple values in one statement.

```javascript
let name = "Brian";
let age = 22;

console.log(name, age);
```

Output:

```text
Brian 22
```

JavaScript displays the values separated by spaces.

### Displaying Text and Variables Together

You can combine text and variables using commas.

```javascript
let username = "Brian";

console.log("Welcome", username);
```

Output:

```text
Welcome Brian
```

Another approach is using template literals.

```javascript
let username = "Brian";

console.log(`Welcome ${username}`);
```

Output:

```text
Welcome Brian
```

Template literals make it easier to construct messages containing variables.

## 4. Other Console Output Methods

JavaScript provides several console methods for different purposes.

| Method | Purpose |
|---|---|
| `console.log()` | Displays general information |
| `console.error()` | Displays error messages |
| `console.warn()` | Displays warnings |
| `console.info()` | Displays informational messages |
| `console.table()` | Displays data in a table format |

### Example: Using Different Console Methods

```javascript
let username = "Brian";

console.log("User:", username);

console.warn("This is a warning");

console.error("This is an error");

console.info("Application started");
```

These methods help developers understand what is happening inside their applications.

For example, when debugging a login system, you might use `console.log()` to inspect a variable and `console.error()` to display an error.

### Using `console.table()`

Suppose you have several students.

```javascript
let students = [
    { name: "Brian", marks: 80 },
    { name: "John", marks: 75 },
    { name: "Mary", marks: 90 }
];

console.table(students);
```

The console displays the records in a table-like format.

This is useful when inspecting arrays of objects.

## 5. Output Using `alert()`

The `alert()` function displays a message in a browser popup.

Example:

```javascript
alert("Welcome to JavaScript!");
```

When this code runs in a browser, a popup appears containing:

```text
Welcome to JavaScript!
```

Unlike `console.log()`, which displays information in the developer console, `alert()` displays a message directly to the user.

### When Should You Use Alert?

You can use alerts to:
- Display simple notifications.
- Inform users about an action.
- Show basic messages.

However, alerts interrupt the user's interaction with the page. Modern applications often use custom notifications or messages inside the webpage instead.

**Important:** `alert()` is a browser feature. It is not available by default in Node.js.

## 6. Output Using `document.write()`

JavaScript can also write content directly into a webpage using `document.write()`.

Example:

```javascript
document.write("Welcome to my website!");
```

The text appears on the webpage.

You can also display variables:

```javascript
let course = "Software Development";

document.write(course);
```

Output on the webpage:

```text
Software Development
```

Although this method is useful for learning, it is generally not recommended for modern application development.

Calling `document.write()` after a page has loaded can replace the entire document.

Modern developers usually use DOM manipulation instead, which we will study later.

## Part 1 Summary

You have learned:

- The meaning of input and output.
- The Input–Process–Output cycle.
- The difference between browser and Node.js environments.
- Output using `console.log()`.
- Other console methods.
- Browser output using `alert()`.
- Basic output using `document.write()`.

**Progress: Part 1 of 4**

---

# PART 2 OF 4 — RECEIVING USER INPUT

## 1. What Is User Input?

User input refers to information provided to a program by a person or another source.

Examples include:

- A username entered during registration.
- A password entered during login.
- A product quantity entered in a shopping application.
- A search term entered into a search bar.
- A number entered into a calculator.

JavaScript can receive this information in several ways.

## 2. Receiving Input Using `prompt()`

The `prompt()` function allows a browser application to request information from a user.

Example:

```javascript
let username = prompt("Enter your username:");

console.log(username);
```

When this program runs in a browser, a popup appears asking:

```text
Enter your username:
```

Suppose the user enters:

```text
Brian
```

The program displays:

```text
Brian
```

### Understanding the Code Line by Line

**Line 1:**

```javascript
let username = prompt("Enter your username:");
```

- `let username` creates a variable.
- `prompt()` displays a popup requesting input.
- `"Enter your username:"` is the message shown to the user.
- Whatever the user enters is returned by `prompt()`.
- The returned value is stored in `username`.

**Line 2:**

```javascript
console.log(username);
```

Displays the value entered by the user in the console.

### Important: Prompt Returns a String

One of the most important things to understand is that `prompt()` returns a string, even when the user enters a number.

Consider:

```javascript
let age = prompt("Enter your age:");

console.log(typeof age);
```

If the user enters `22`, the output is:

```text
string
```

Why?

Because the input received from `prompt()` is text.

If you want to perform mathematical calculations, you should convert the input into a number.

## 3. Converting User Input into Numbers

JavaScript provides several methods for converting strings into numbers.

Common methods include:

- `Number()`
- `parseInt()`
- `parseFloat()`

### A. Using `Number()`

The `Number()` function converts a value into a number when possible.

Example:

```javascript
let age = prompt("Enter your age:");

let convertedAge = Number(age);

console.log(convertedAge);
console.log(typeof convertedAge);
```

Suppose the user enters `22`.

Output:

```text
22
number
```

**Explanation:**

1. `prompt()` receives the age as text.
2. `Number(age)` converts the text into a number.
3. The converted value is stored in `convertedAge`.
4. `console.log()` displays the value.
5. `typeof` confirms that it is now a number.

### B. Using `parseInt()`

`parseInt()` converts a string into an integer.

An integer is a whole number without a decimal component.

Example:

```javascript
let quantity = parseInt("25", 10);

console.log(quantity);
```

Output:

```text
25
```

The second argument, `10`, specifies the decimal numbering system (base 10).

Another example:

```javascript
let value = parseInt("25.75", 10);

console.log(value);
```

Output:

```text
25
```

The decimal portion is not included.

### C. Using `parseFloat()`

`parseFloat()` converts a string into a floating-point number, allowing decimal values.

Example:

```javascript
let price = parseFloat("250.75");

console.log(price);
```

Output:

```text
250.75
```

This is useful when receiving prices, measurements, and other decimal values.

### Comparing Number Conversion Methods

| Method | Purpose | Example | Result |
|---|---|---|---|
| `Number()` | Converts the entire value | `Number("25.5")` | `25.5` |
| `parseInt()` | Extracts an integer from the beginning | `parseInt("25.5", 10)` | `25` |
| `parseFloat()` | Extracts a decimal number from the beginning | `parseFloat("25.5")` | `25.5` |

Be careful: these methods do not behave identically with invalid input.

For example:

```javascript
console.log(Number("hello"));
console.log(parseInt("hello", 10));
```

Output:

```text
NaN
NaN
```

`NaN` means Not-a-Number. It indicates that a valid numeric result could not be produced.

You can check for invalid numeric input using:

```javascript
let value = Number("hello");

console.log(Number.isNaN(value));
```

Output:

```text
true
```

## 4. Receiving Input Using HTML Forms

In real-world web applications, developers commonly use HTML forms to collect information.

For example, a registration form may request:

- Full name.
- Email address.
- Password.

HTML provides elements such as:

- `<input>`
- `<textarea>`
- `<select>`
- `<button>`

JavaScript reads the values entered into these elements.

### Example: Simple Name Input

Create an HTML file named `index.html`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>User Input</title>
</head>
<body>

    <h2>Enter Your Name</h2>

    <input type="text" id="username" placeholder="Your name">

    <button id="submitBtn">Submit</button>

    <p id="result"></p>

    <script src="script.js"></script>

</body>
</html>
```

Now create another file named `script.js`.

```javascript
let button = document.getElementById("submitBtn");

button.addEventListener("click", function() {

    let username = document.getElementById("username").value;

    document.getElementById("result").textContent =
        `Welcome, ${username}!`;

});
```

### Understanding the HTML

**The heading:**

```html
<h2>Enter Your Name</h2>
```

Displays a heading on the webpage.

**The input field:**

```html
<input type="text" id="username" placeholder="Your name">
```

Creates a text field where the user can enter their name.

The `id="username"` gives the element an identifier JavaScript can use to find it.

**The button:**

```html
<button id="submitBtn">Submit</button>
```

Creates a button that the user can click.

**The paragraph:**

```html
<p id="result"></p>
```

Creates an empty area where JavaScript will display the result.

**The JavaScript file:**

```html
<script src="script.js"></script>
```

Connects the external JavaScript file to the HTML document.

### Understanding the JavaScript Line by Line

**Line 1:**

```javascript
let button = document.getElementById("submitBtn");
```

`document.getElementById()` searches the webpage for an element with the specified ID.

It finds the Submit button and stores its reference in the `button` variable.

**Lines 3–4:**

```javascript
button.addEventListener("click", function() {
```

This tells JavaScript to wait for the user to click the button.

When the click happens, the function executes.

**Line 5:**

```javascript
let username = document.getElementById("username").value;
```

This finds the input field and retrieves the value entered by the user.

The `.value` property contains the current input value.

**Lines 7–8:**

```javascript
document.getElementById("result").textContent =
    `Welcome, ${username}!`;
```

This finds the paragraph with the ID `result` and changes its text.

If the user enters Brian, the webpage displays:

```text
Welcome, Brian!
```

**Final line:**

```javascript
});
```

Closes the event listener and its function.

### Important Concepts

| Term | Meaning |
|---|---|
| `document` | Represents the webpage |
| `getElementById()` | Finds an HTML element using its ID |
| `addEventListener()` | Listens for an event |
| `"click"` | The event being monitored |
| `.value` | Retrieves an input field's value |
| `.textContent` | Changes or reads an element's text |

This is one of the most important ways JavaScript interacts with HTML.

## 5. Handling Empty Input

Users may submit forms without entering anything.

You should validate the input before processing it.

Example:

```javascript
let username = document.getElementById("username").value;

if (username.trim() === "") {
    console.log("Please enter your name.");
} else {
    console.log(`Welcome, ${username}!`);
}
```

Explanation:

- `.trim()` removes whitespace from the beginning and end of a string.
- `=== ""` checks whether the resulting string is empty.
- If it is empty, JavaScript displays an error message.
- Otherwise, it welcomes the user.

This helps prevent users from submitting blank names.

## Part 2 Summary

You have learned:

- What user input means.
- How to receive input using `prompt()`.
- Why prompt input is returned as a string.
- How to convert strings into numbers.
- The difference between `Number()`, `parseInt()`, and `parseFloat()`.
- How to receive input through HTML forms.
- How JavaScript reads input using `.value`.
- How to display results using `.textContent`.
- How to validate empty input.

**Progress: Part 2 of 4**

---

# PART 3 OF 4 — PRACTICAL INPUT AND OUTPUT PROJECTS

## 1. Understanding Input and Output in Node.js

So far, we have looked at input and output in the browser.

However, JavaScript can also run outside the browser using Node.js.

Node.js is a JavaScript runtime environment that allows developers to execute JavaScript programs on a computer or server.

For example, you can use Node.js to build:

- Backend applications.
- APIs.
- Command-line tools.
- Automation scripts.
- Server-side applications.

In Node.js, one common way of receiving terminal input is through the built-in `readline` module.

## 2. Receiving Terminal Input Using `readline`

The `readline` module allows a Node.js application to receive information from the terminal.

Let's create a simple program that asks for a user's name.

### Step 1: Create a project folder

Create a folder:

```text
javascript-input-output
```

Inside it, create a file:

```text
main.js
```

### Step 2: Write the code

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function(name) {

    console.log(`Hello, ${name}!`);

    rl.close();

});
```

### Step 3: Understand the Code Line by Line

**Line 1:**

```javascript
const readline = require("node:readline");
```

Imports the built-in Node.js `readline` module.

`require()` loads a module so that its functionality can be used in the program.

**Lines 3–6:**

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

Creates a readline interface.

It has two important properties:

- `process.stdin` receives input from the terminal.
- `process.stdout` sends output to the terminal.

The interface is stored in a variable called `rl`.

**Line 8:**

```javascript
rl.question("Enter your name: ", function(name) {
```

Displays a question and waits for the user to enter a response.

When the user submits the input, the entered text is passed to the function as `name`.

**Line 10:**

```javascript
console.log(`Hello, ${name}!`);
```

Displays a greeting containing the name entered by the user.

**Line 12:**

```javascript
rl.close();
```

Closes the readline interface after receiving the input.

Closing it is important because it allows the program to finish instead of waiting for more input.

### Step 4: Run the Program

Open your terminal inside the project folder.

Run:

```bash
node main.js
```

Expected interaction:

```text
Enter your name: Brian
Hello, Brian!
```

You have now created a JavaScript program that receives input directly from the terminal.

## 3. Practical Project: Terminal Calculator

Let's build a calculator that receives two numbers from the user and performs mathematical calculations.

### Step 1: Create the file

Create:

```text
calculator.js
```

### Step 2: Write the program

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", function(firstInput) {

    rl.question("Enter the second number: ", function(secondInput) {

        const firstNumber = Number(firstInput);
        const secondNumber = Number(secondInput);

        const total = firstNumber + secondNumber;

        console.log(`The result is: ${total}`);

        rl.close();

    });

});
```

### Step 3: Understand the Program

**First, import the module:**

```javascript
const readline = require("node:readline");
```

This gives the program access to Node.js terminal input functionality.

**Create the interface:**

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

This connects the application to terminal input and output.

**Ask for the first number:**

```javascript
rl.question("Enter the first number: ", function(firstInput) {
```

The program displays a question and stores the user's response in `firstInput`.

**Ask for the second number:**

```javascript
rl.question("Enter the second number: ", function(secondInput) {
```

The program requests another value and stores it in `secondInput`.

Notice that the second question is inside the first callback. This ensures that the second question is asked after the first one has been answered.

**Convert the values:**

```javascript
const firstNumber = Number(firstInput);
const secondNumber = Number(secondInput);
```

The terminal input is text, so `Number()` converts both values into numbers.

Without conversion, using `+` could join two strings instead of adding two numbers.

For example:

```javascript
console.log("20" + "10");
```

Output:

```text
2010
```

But:

```javascript
console.log(Number("20") + Number("10"));
```

Output:

```text
30
```

**Calculate the result:**

```javascript
const total = firstNumber + secondNumber;
```

Adds the two converted numbers.

**Display the result:**

```javascript
console.log(`The result is: ${total}`);
```

Displays the calculated answer.

**Close the interface:**

```javascript
rl.close();
```

Stops accepting input.

### Step 4: Run the Program

```bash
node calculator.js
```

Example interaction:

```text
Enter the first number: 20
Enter the second number: 10
The result is: 30
```

## 4. Improving the Calculator with Input Validation

What happens if someone enters:

```text
Enter the first number: hello
```

The conversion produces `NaN`.

We should prevent the program from treating invalid input as a valid calculation.

Here is an improved version:

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", function(firstInput) {

    rl.question("Enter the second number: ", function(secondInput) {

        const firstNumber = Number(firstInput);
        const secondNumber = Number(secondInput);

        if (
            firstInput.trim() === "" ||
            secondInput.trim() === "" ||
            !Number.isFinite(firstNumber) ||
            !Number.isFinite(secondNumber)
        ) {
            console.log("Please enter two valid numbers.");
        } else {

            const total = firstNumber + secondNumber;

            console.log(`The result is: ${total}`);
        }

        rl.close();

    });

});
```

### Understanding the Validation

The important part is:

```javascript
if (
    firstInput.trim() === "" ||
    secondInput.trim() === "" ||
    !Number.isFinite(firstNumber) ||
    !Number.isFinite(secondNumber)
)
```

The program checks four things:

1. Is the first input empty?
2. Is the second input empty?
3. Is the first converted value not a finite number?
4. Is the second converted value not a finite number?

`Number.isFinite()` checks whether a value is a finite number.

The `!` operator reverses the result.

If any of these conditions is true, the program displays an error message.

Otherwise, it performs the calculation.

This is an example of input validation, which is important in real-world software development.

## 5. Practical Project: Student Registration System

Let's build a small registration program that receives a student's name and age.

It will then display a registration summary.

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your full name: ", function(name) {

    rl.question("Enter your age: ", function(ageInput) {

        const age = Number(ageInput);

        if (name.trim() === "" || !Number.isInteger(age) || age <= 0) {

            console.log("Invalid registration details.");

        } else {

            console.log("\nREGISTRATION SUMMARY");
            console.log("--------------------");
            console.log(`Name: ${name}`);
            console.log(`Age: ${age}`);
            console.log("Registration received successfully.");

        }

        rl.close();

    });

});
```

### How the Program Works

1. It imports the readline module.
2. It creates a terminal input/output interface.
3. It requests the student's full name.
4. It requests the student's age.
5. It converts the age into a number.
6. It checks whether the name is empty or the age is invalid.
7. If the information is valid, it displays a registration summary.
8. It closes the input interface.

`Number.isInteger(age)` checks whether the age is a whole number.

For example:
- `22` is an integer.
- `22.5` is not an integer.
- `NaN` is not an integer.

### Example Interaction

```text
Enter your full name: Brian Njogu
Enter your age: 22

REGISTRATION SUMMARY
--------------------
Name: Brian Njogu
Age: 22
Registration received successfully.
```

**Important:** This is a learning project. A real registration system would also need server-side validation, secure data storage, and appropriate protection of personal information.

## 6. Practical Exercises

Complete these exercises to test your understanding.

### Exercise 1: Greeting Program

Create a program that asks a user for their name and displays:

```text
Welcome, [name]. You are learning JavaScript!
```

Use `prompt()` in a browser or `readline` in Node.js.

### Exercise 2: Age Calculator

Create a program that:
1. Requests the user's birth year.
2. Converts the input into a number.
3. Calculates their approximate age using the current year.
4. Displays the result.

### Exercise 3: Addition Calculator

Ask the user for two numbers and display their sum.

Remember to convert the input into numbers.

### Exercise 4: Shopping Calculator

Ask the user for:
- Product name.
- Product price.
- Quantity.

Calculate the total cost and display a purchase summary.

### Exercise 5: Student Registration

Create a program that requests a student's name, registration number, and age.

Display all the information in a formatted registration summary.

### Exercise 6: Input Validation Challenge

Improve your calculator so that it rejects:
- Empty input.
- Text entered instead of numbers.
- Invalid numeric values.

### Exercise 7: Browser Input and Output

Create an HTML page containing:
- A name input field.
- A button.
- An empty paragraph.

Use JavaScript to retrieve the entered name and display a greeting when the button is clicked.

**Progress: Part 3 of 4**

---

# PART 4 OF 4 — KAI ASSESSMENT

## 1. Assessment Instructions

You have completed the lesson on JavaScript Input and Output.

This assessment checks whether you understand how JavaScript receives information, processes it, and displays results.

Answer the questions independently before submitting them to Kai.

## Section A: Multiple Choice Questions

**Question 1**

What does input mean in programming?

A. Displaying information to users.  
B. Receiving information from a user or another source.  
C. Deleting program files.  
D. Closing an application.

**Question 2**

Which method displays information in the JavaScript console?

A. `prompt()`  
B. `alert()`  
C. `console.log()`  
D. `document.input()`

**Question 3**

Which function can receive input from a user in a browser?

A. `prompt()`  
B. `console.log()`  
C. `typeof`  
D. `Math.random()`

**Question 4**

What data type does `prompt()` normally return when the user enters information?

A. Number  
B. Boolean  
C. String  
D. Array

**Question 5**

Which function converts a valid numeric string into a number?

A. `String()`  
B. `Number()`  
C. `Boolean()`  
D. `typeof`

## Section B: Understanding Concepts

**Question 6**

Explain the Input–Process–Output cycle using a real-world example.

**Question 7**

Explain the difference between `console.log()` and `alert()`.

**Question 8**

Why is it important to convert user input into numbers before performing mathematical calculations?

**Question 9**

Explain the difference between `Number()`, `parseInt()`, and `parseFloat()`.

**Question 10**

What is the purpose of the `.value` property when working with HTML input fields?

## Section C: Practical Programming

**Question 11**

Write a JavaScript program that requests a user's name and displays a personalized welcome message.

**Question 12**

Write a program that receives two numbers from the user and calculates their product.

**Question 13**

Write a Node.js program using the `readline` module that asks a user for their age and displays it in the terminal.

**Question 14**

Study the following code:

```javascript
let firstNumber = prompt("Enter first number:");
let secondNumber = prompt("Enter second number:");

let result = firstNumber + secondNumber;

console.log(result);
```

If the user enters `10` and `20`, the result may be `1020` instead of `30`.

Explain why this happens and correct the program.

**Question 15**

Create a simple browser-based form that:
- Accepts a user's name.
- Has a Submit button.
- Displays a welcome message when the button is clicked.
- Displays an error message if the user submits an empty name.

## 2. Submit Your Answers to Kai

Once you finish, submit your answers to Kai for assessment.

Kai should:
- Mark your multiple-choice answers.
- Evaluate your explanations.
- Test your practical code.
- Identify errors and explain how to correct them.
- Recommend additional exercises based on your performance.

## 3. Lesson Completion Checklist

Before moving forward, confirm that you can:

- Explain the Input–Process–Output cycle.
- Display information using `console.log()`.
- Use `alert()` in browser applications.
- Receive input using `prompt()`.
- Convert user input into numbers.
- Explain `Number()`, `parseInt()`, and `parseFloat()`.
- Receive information using HTML forms.
- Read HTML input values using `.value`.
- Display webpage content using `.textContent`.
- Receive terminal input using Node.js `readline`.
- Validate user input before processing it.
- Build simple input/output applications.

**Part 4 of 4 — Lesson Complete**

**Next lesson: JavaScript Conditional Statements — `if`, `else if`, `else`, and `switch`.**