# JAVASCRIPT PROGRAMMING
# Lesson: Loops (`for`, `while`, `for...of`, `for...in`)

## PART 1 OF 4: INTRODUCTION TO LOOPS AND THE `for` LOOP

### 1. What Are Loops in JavaScript?

A **loop** is a programming structure that allows a program to execute a block of code repeatedly as long as a specified condition is satisfied.

In normal programming, instructions execute from top to bottom. However, sometimes we need to perform the same operation multiple times.

For example, imagine you want JavaScript to display the following numbers:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Output:

```text
1
2
3
4
5
```

This works, but imagine displaying numbers from 1 to 1,000. Writing 1,000 separate `console.log()` statements would be inefficient.

Instead, we can use a loop:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

The loop automatically repeats the instruction until its condition becomes false.

### 2. Why Are Loops Important?

Loops are important because they help programmers:

1. Reduce code repetition.
2. Process large amounts of data.
3. Perform calculations repeatedly.
4. Read information from arrays and objects.
5. Automate repetitive operations.
6. Build interactive applications.
7. Process records stored in databases.

### Real-World Applications

| Application | How loops are used |
|---|---|
| Banking systems | Processing multiple customer transactions. |
| School management systems | Calculating results for multiple students. |
| E-commerce systems | Displaying products from a database. |
| Social media | Displaying posts and comments. |
| Cybersecurity | Checking multiple ports or analyzing log entries. |
| Financial applications | Processing multiple transactions. |

For example, a school management system might contain 500 student records. A loop can process each student's marks without requiring separate instructions for every student.

---

### 3. Understanding the `for` Loop

The `for` loop is used when you want to repeat a block of code a specific number of times or while a condition remains true.

Syntax:

```javascript
for (initialization; condition; update) {
    // Code to execute repeatedly
}
```

A `for` loop has three important components.

| Component | Purpose |
|---|---|
| Initialization | Creates and initializes the loop variable. |
| Condition | Determines whether the loop should continue. |
| Update | Changes the loop variable after each iteration. |

Let's understand each component.

**Initialization**

This is where the loop begins.

Example:

```javascript
let i = 1;
```

The variable `i` stores the starting value of the loop.

**Condition**

The condition determines whether the loop should execute.

Example:

```javascript
i <= 5
```

This means the loop continues while `i` is less than or equal to 5.

**Update**

The update changes the loop variable after each repetition.

Example:

```javascript
i++
```

This increases `i` by one.

It is equivalent to:

```javascript
i = i + 1;
```

### 4. Your First Practical `for` Loop

Create a file named:

```text
main.js
```

Write the following program:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
```

Output:

```text
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```

#### Explanation of Every Line

**Line 1:**

```javascript
for (let i = 1; i <= 5; i++) {
```

This creates a `for` loop.

- `let i = 1` initializes the loop variable with 1.
- `i <= 5` checks whether the current value is less than or equal to 5.
- `i++` increases the value of `i` after every iteration.
- `{` begins the block of code that will execute repeatedly.

**Line 2:**

```javascript
console.log("Number:", i);
```

This displays the current value of `i` in the terminal.

**Line 3:**

```javascript
}
```

This closes the loop block.

### 5. Understanding Loop Iterations

An **iteration** is one complete execution of a loop.

Let's trace what happens in our previous program.

| Iteration | Value of `i` | Condition `i <= 5` | Action |
|---|---:|---|---|
| 1 | 1 | True | Display 1 |
| 2 | 2 | True | Display 2 |
| 3 | 3 | True | Display 3 |
| 4 | 4 | True | Display 4 |
| 5 | 5 | True | Display 5 |
| 6 | 6 | False | Stop |

When `i` becomes 6, the condition `i <= 5` becomes false. JavaScript stops executing the loop.

This is how JavaScript knows when to stop repeating instructions.

### 6. Counting Backwards

A `for` loop does not have to count upwards. You can also count backwards.

Example:

```javascript
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

Output:

```text
5
4
3
2
1
```

Explanation:

- `let i = 5` starts counting from 5.
- `i >= 1` allows the loop to continue while `i` is at least 1.
- `i--` decreases the value by one after every iteration.
- `console.log(i)` displays the current number.

### 7. Using Different Update Values

You can increase a loop variable by more than one.

Example:

```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

Output:

```text
2
4
6
8
10
```

Here:

```javascript
i += 2;
```

means:

```javascript
i = i + 2;
```

Therefore, the loop increases by two instead of one.

### 8. Calculating the Sum of Numbers

Loops can perform calculations repeatedly.

Suppose you want to calculate the sum of numbers from 1 to 5.

Without a loop:

```javascript
let total = 1 + 2 + 3 + 4 + 5;

console.log(total);
```

Using a loop:

```javascript
let total = 0;

for (let i = 1; i <= 5; i++) {
    total = total + i;
}

console.log("Total:", total);
```

Output:

```text
Total: 15
```

#### Explanation

**Line 1:**

```javascript
let total = 0;
```

Creates a variable called `total` and initializes it to zero.

This variable will store the running sum.

**Line 2:**

```javascript
for (let i = 1; i <= 5; i++) {
```

Starts a loop that counts from 1 to 5.

**Line 3:**

```javascript
total = total + i;
```

Adds the current value of `i` to the existing total.

Let's examine the calculation:

| Iteration | Current `i` | Previous total | New total |
|---|---:|---:|---:|
| 1 | 1 | 0 | 1 |
| 2 | 2 | 1 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 4 | 6 | 10 |
| 5 | 5 | 10 | 15 |

**Line 4:**

```javascript
}
```

Ends the loop.

**Line 5:**

```javascript
console.log("Total:", total);
```

Displays the final result.

### 9. Variable Scope Inside Loops

Consider this program:

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

console.log(i);
```

The final statement produces a `ReferenceError`.

Why?

Because `let` creates a block-scoped variable. The variable `i` exists inside the loop block and cannot be accessed outside it.

This is another reason modern JavaScript developers generally prefer `let` over `var` for loop counters.

### Part 1 Exercises

Try these exercises before moving to the next part.

1. Write a `for` loop that displays numbers from 1 to 20.
2. Write a loop that displays numbers from 10 down to 1.
3. Display all even numbers between 1 and 30.
4. Calculate the sum of numbers from 1 to 100.
5. Write a loop that displays the multiplication table of 5.

**Progress: Part 1 of 4**

---

## PART 2 OF 4: THE `while`, `for...of`, AND `for...in` LOOPS

### 10. Understanding the `while` Loop

A `while` loop repeatedly executes a block of code as long as a specified condition is true.

Unlike the `for` loop, a `while` loop does not have initialization, condition, and update sections together in its syntax.

Syntax:

```javascript
while (condition) {
    // Code to execute
}
```

The loop first checks the condition.

- If the condition is true, the code executes.
- If the condition is false, the loop stops.
- After executing the code, JavaScript checks the condition again.

### 11. Your First `while` Loop

Example:

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

Output:

```text
1
2
3
4
5
```

#### Explanation of Every Line

**Line 1:**

```javascript
let count = 1;
```

Creates a variable called `count` and gives it an initial value of 1.

**Line 2:**

```javascript
while (count <= 5) {
```

Checks whether `count` is less than or equal to 5.

If the condition is true, JavaScript enters the loop.

**Line 3:**

```javascript
console.log(count);
```

Displays the current value of `count`.

**Line 4:**

```javascript
count++;
```

Increases `count` by one.

This statement is important because it moves the loop towards its stopping condition.

**Line 5:**

```javascript
}
```

Closes the loop.

### 12. What Happens If You Forget the Update?

Consider this program:

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
}
```

This program creates an **infinite loop**.

Why?

- `count` starts at 1.
- The condition `count <= 5` is true.
- JavaScript displays 1.
- However, `count` never changes.
- The condition remains true forever.

The loop keeps executing.

To prevent this, update the loop variable:

```javascript
count++;
```

Always ensure that a loop has a way to reach its stopping condition, unless it is intentionally designed to run continuously and has a controlled exit mechanism.

### 13. When Should You Use a `while` Loop?

A `while` loop is useful when you do not know exactly how many times a block of code needs to execute.

For example:

- Waiting for a user to enter valid information.
- Repeating a menu until the user chooses to exit.
- Running a process until a condition changes.
- Repeating a guessing game until the correct answer is entered.

### 14. The `do...while` Loop

JavaScript also provides another loop structure called `do...while`.

It is closely related to the `while` loop.

The difference is that a `do...while` loop executes its code at least once before checking the condition.

Syntax:

```javascript
do {
    // Code to execute
} while (condition);
```

Example:

```javascript
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);
```

Output:

```text
1
2
3
4
5
```

#### Important Difference

Look at this example:

```javascript
let number = 10;

while (number <= 5) {
    console.log(number);
}
```

Output:

```text
```

Nothing is displayed because the condition is false before the loop begins.

Now consider:

```javascript
let number = 10;

do {
    console.log(number);
} while (number <= 5);
```

Output:

```text
10
```

The code executes once before JavaScript checks the condition.

| Loop | When the condition is checked | Guaranteed to execute once? |
|---|---|---|
| `for` | Before each iteration | No |
| `while` | Before each iteration | No |
| `do...while` | After each iteration | Yes |

---

### 15. Understanding the `for...of` Loop

The `for...of` loop is used to iterate over the values of iterable objects.

An iterable is an object that provides a sequence of values that JavaScript can access one at a time.

Common examples include:

- Arrays
- Strings
- Maps
- Sets

Syntax:

```javascript
for (let value of iterable) {
    // Code to execute
}
```

The loop retrieves one value at a time.

### 16. Using `for...of` With Arrays

An array stores multiple values in one variable.

Example:

```javascript
const students = ["Brian", "Mary", "John", "Peter"];

for (let student of students) {
    console.log(student);
}
```

Output:

```text
Brian
Mary
John
Peter
```

#### Explanation of Every Line

**Line 1:**

```javascript
const students = ["Brian", "Mary", "John", "Peter"];
```

Creates an array named `students`.

The array contains four student names.

**Line 2:**

```javascript
for (let student of students) {
```

Starts a `for...of` loop.

JavaScript retrieves each value from the `students` array and temporarily stores it in the variable `student`.

**Line 3:**

```javascript
console.log(student);
```

Displays the current student name.

**Line 4:**

```javascript
}
```

Closes the loop.

Notice that you do not need to manually manage an index variable.

JavaScript retrieves each value automatically.

### 17. Accessing Values From a String

Strings are also iterable.

Example:

```javascript
const word = "CODE";

for (let character of word) {
    console.log(character);
}
```

Output:

```text
C
O
D
E
```

The loop retrieves each character from the string.

This can be useful when checking characters, counting letters, or processing text.

For Unicode text, some visible symbols may consist of multiple code points, so `for...of` should not be confused with every possible way of counting user-perceived characters.

### 18. Calculating the Total of Array Values

Suppose you have an array containing examination marks.

You want to calculate the total marks.

```javascript
const marks = [70, 85, 60, 90, 75];

let total = 0;

for (let mark of marks) {
    total = total + mark;
}

console.log("Total Marks:", total);
```

Output:

```text
Total Marks: 380
```

#### Explanation

```javascript
const marks = [70, 85, 60, 90, 75];
```

Creates an array containing five examination marks.

```javascript
let total = 0;
```

Creates a variable that stores the running total.

```javascript
for (let mark of marks) {
```

Retrieves each mark from the array.

The first iteration gives 70, the second gives 85, and so on.

```javascript
total = total + mark;
```

Adds the current mark to the running total.

The calculations are:

- 0 + 70 = 70
- 70 + 85 = 155
- 155 + 60 = 215
- 215 + 90 = 305
- 305 + 75 = 380

Finally:

```javascript
console.log("Total Marks:", total);
```

Displays the final total.

---

### 19. Understanding the `for...in` Loop

The `for...in` loop is primarily used to iterate over the enumerable property keys of an object.

An object stores information in key-value pairs.

Example:

```javascript
const student = {
    name: "Brian",
    age: 22,
    course: "BBIT"
};
```

The object contains three properties:

| Key | Value |
|---|---|
| name | Brian |
| age | 22 |
| course | BBIT |

The `for...in` loop allows you to retrieve the property keys one at a time.

Syntax:

```javascript
for (let key in object) {
    // Code to execute
}
```

### 20. Your First `for...in` Loop

Example:

```javascript
const student = {
    name: "Brian",
    age: 22,
    course: "BBIT"
};

for (let key in student) {
    console.log(key);
}
```

Output:

```text
name
age
course
```

#### Explanation

**Line 1:**

```javascript
const student = {
```

Creates an object named `student`.

**Lines 2–4:**

```javascript
name: "Brian",
age: 22,
course: "BBIT"
```

These are the properties of the object.

Each property contains a key and its corresponding value.

**Line 6:**

```javascript
for (let key in student) {
```

Starts the loop.

JavaScript retrieves each property key from the object.

**Line 7:**

```javascript
console.log(key);
```

Displays the current property key.

### 21. Retrieving Both Keys and Values

Sometimes you need more than property names. You may also want the values associated with them.

You can access the value using:

```javascript
object[key]
```

Example:

```javascript
const student = {
    name: "Brian",
    age: 22,
    course: "BBIT"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}
```

Output:

```text
name: Brian
age: 22
course: BBIT
```

#### Understanding `student[key]`

Suppose:

```javascript
key = "name";
```

Then:

```javascript
student[key]
```

is equivalent to:

```javascript
student["name"]
```

The result is:

```text
Brian
```

The same happens for `age` and `course`.

This is called **bracket notation**.

It is useful when the property name is stored in a variable.

### 22. Important: Difference Between `for...of` and `for...in`

These two loops are easy to confuse.

Consider an array:

```javascript
const languages = ["JavaScript", "Python", "Java"];
```

Using `for...of`:

```javascript
for (let language of languages) {
    console.log(language);
}
```

Output:

```text
JavaScript
Python
Java
```

Using `for...in`:

```javascript
for (let index in languages) {
    console.log(index);
}
```

Output:

```text
0
1
2
```

Why are the outputs different?

Because:

- `for...of` retrieves the values.
- `for...in` retrieves the enumerable property keys.

For arrays, those keys are normally their indexes.

### Comparison Table

| Feature | `for` | `while` | `for...of` | `for...in` |
|---|---|---|---|---|
| Main purpose | Repetition with a loop counter | Repetition based on a condition | Iterating over values | Iterating over object keys |
| Common use | Counting | Unknown repetitions | Arrays and strings | Objects |
| Retrieves array values directly | No | No | Yes | No |
| Retrieves object property keys | No | No | No | Yes |
| Requires manual counter | Usually | Usually | No | No |

### 23. Important Rules When Using `for...in`

Although `for...in` can work with arrays, it is generally not the recommended way to iterate over array values.

Use `for...of` when you want array values.

Use `for...in` when you want object property keys.

Also, `for...in` can include enumerable properties inherited through an object's prototype chain.

For objects where you only want their own properties, you can check:

```javascript
Object.hasOwn(student, key)
```

Example:

```javascript
for (let key in student) {
    if (Object.hasOwn(student, key)) {
        console.log(key, student[key]);
    }
}
```

Another useful approach for ordinary objects is:

```javascript
Object.entries(student)
```

This returns an array of the object's own enumerable key-value pairs.

### Part 2 Exercises

1. Write a `while` loop that displays numbers from 1 to 10.
2. Create a `do...while` loop that displays numbers from 5 to 1.
3. Create an array of five programming languages and display them using `for...of`.
4. Create a student object and display its property keys using `for...in`.
5. Modify the previous program to display both keys and values.
6. Explain the difference between `for...of` and `for...in`.

**Progress: Part 2 of 4**

---

## PART 3 OF 4: LOOP CONTROL, NESTED LOOPS AND PRACTICAL PROJECTS

### 24. Understanding `break`

The `break` statement immediately terminates a loop.

Even if the loop condition is still true, JavaScript exits the loop when it encounters `break`.

Example:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

#### Explanation

```javascript
for (let i = 1; i <= 10; i++) {
```

Starts a loop that could normally count from 1 to 10.

```javascript
if (i === 5) {
```

Checks whether the current number is 5.

```javascript
break;
```

Stops the loop immediately when the condition becomes true.

```javascript
console.log(i);
```

Displays the number if the loop has not been terminated.

Notice that 5 is not displayed because `break` executes before `console.log()`.

### 25. Understanding `continue`

The `continue` statement skips the current iteration and moves to the next iteration.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

#### Explanation

```javascript
if (i === 3) {
    continue;
}
```

Checks whether the current value is 3.

If it is 3, JavaScript skips the remaining statements in that iteration.

Therefore, `console.log(i)` does not execute for 3.

However, the loop itself continues.

### Difference Between `break` and `continue`

| Statement | What it does |
|---|---|
| `break` | Terminates the entire loop. |
| `continue` | Skips the current iteration and continues with the next one. |

---

### 26. Understanding Nested Loops

A **nested loop** is a loop placed inside another loop.

The outer loop controls the main repetitions, while the inner loop executes during each iteration of the outer loop.

Example:

```javascript
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log("i:", i, "j:", j);
    }

}
```

Output:

```text
i: 1 j: 1
i: 1 j: 2
i: 2 j: 1
i: 2 j: 2
i: 3 j: 1
i: 3 j: 2
```

#### Explanation

The outer loop:

```javascript
for (let i = 1; i <= 3; i++) {
```

Runs three times.

The inner loop:

```javascript
for (let j = 1; j <= 2; j++) {
```

Runs twice for every iteration of the outer loop.

That means:

- When `i = 1`, the inner loop runs twice.
- When `i = 2`, the inner loop runs twice.
- When `i = 3`, the inner loop runs twice.

Total executions:

```text
3 × 2 = 6
```

The inner loop executes six times.

### 27. Practical Uses of Nested Loops

Nested loops are useful when working with:

- Tables and matrices.
- Rows and columns.
- Seating arrangements.
- Timetables.
- Multiple categories of data.
- Comparing elements from two collections.

For example, a school timetable can have multiple days and multiple lessons per day.

An outer loop can represent days, while an inner loop represents lessons.

---

### 28. Practical Project 1: Multiplication Table Generator

Let's create a program that generates a multiplication table for a number entered by the user.

Create a file:

```text
multiplication.js
```

Code:

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {

    const number = Number(input);

    if (!Number.isFinite(number)) {
        console.log("Please enter a valid number.");
        rl.close();
        return;
    }

    console.log(`Multiplication table of ${number}`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }

    rl.close();
});
```

Run it:

```bash
node multiplication.js
```

Example input:

```text
Enter a number: 5
```

Output:

```text
Multiplication table of 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

#### Understanding the Program

**Step 1: Import the readline module**

```javascript
const readline = require("node:readline");
```

Imports Node.js's built-in readline module.

This module allows a program to receive input from the terminal.

**Step 2: Create an input interface**

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

- `readline.createInterface()` creates an interface for terminal communication.
- `process.stdin` represents standard input.
- `process.stdout` represents standard output.

**Step 3: Ask the user for a number**

```javascript
rl.question("Enter a number: ", function(input) {
```

Displays a question and waits for the user to enter information.

The entered value is received through the `input` parameter.

**Step 4: Convert the input**

```javascript
const number = Number(input);
```

Terminal input is received as text.

`Number()` converts it into a JavaScript number.

**Step 5: Validate the input**

```javascript
if (!Number.isFinite(number)) {
```

Checks whether the converted value is a valid finite number.

If the input is invalid, the program displays an error message and closes the interface.

**Step 6: Display the heading**

```javascript
console.log(`Multiplication table of ${number}`);
```

Uses a template literal to display the number selected by the user.

**Step 7: Generate the table**

```javascript
for (let i = 1; i <= 10; i++) {
```

Creates a loop that repeats ten times.

**Step 8: Calculate each multiplication result**

```javascript
console.log(`${number} x ${i} = ${number * i}`);
```

Displays the multiplication expression and calculates its result.

For example, if `number` is 5 and `i` is 3:

```javascript
5 * 3
```

The result is 15.

**Step 9: Close the interface**

```javascript
rl.close();
```

Closes the terminal input interface after the calculation is complete.

---

### 29. Practical Project 2: Student Marks Management System

Now let's use loops to process multiple students.

Our program will:

1. Store student names and marks.
2. Display every student's information.
3. Calculate the total marks.
4. Calculate the average mark.
5. Identify students who scored at least 50 marks.

Create:

```text
students.js
```

Code:

```javascript
const students = [
    { name: "Brian", marks: 78 },
    { name: "Mary", marks: 85 },
    { name: "John", marks: 42 },
    { name: "Peter", marks: 67 }
];

let total = 0;

console.log("STUDENT RESULTS");

for (let student of students) {

    total += student.marks;

    let status = student.marks >= 50 ? "PASS" : "FAIL";

    console.log(
        `${student.name}: ${student.marks} - ${status}`
    );
}

const average = total / students.length;

console.log("-------------------");
console.log("Total Marks:", total);
console.log("Average Marks:", average);
```

Output:

```text
STUDENT RESULTS
Brian: 78 - PASS
Mary: 85 - PASS
John: 42 - FAIL
Peter: 67 - PASS
-------------------
Total Marks: 272
Average Marks: 68
```

#### Understanding the Program

**Step 1: Create the student records**

```javascript
const students = [
    { name: "Brian", marks: 78 },
    { name: "Mary", marks: 85 },
    { name: "John", marks: 42 },
    { name: "Peter", marks: 67 }
];
```

This creates an array of objects.

Each object represents one student.

For example:

```javascript
{ name: "Brian", marks: 78 }
```

Contains two properties:

- `name` stores the student's name.
- `marks` stores the student's examination marks.

**Step 2: Initialize the total**

```javascript
let total = 0;
```

Creates a variable that will accumulate the marks of all students.

**Step 3: Start the loop**

```javascript
for (let student of students) {
```

Uses `for...of` to retrieve one student object at a time.

The first iteration retrieves Brian's record, the second retrieves Mary's record, and so on.

**Step 4: Add the marks**

```javascript
total += student.marks;
```

Adds the current student's marks to the running total.

For Brian:

```text
0 + 78 = 78
```

For Mary:

```text
78 + 85 = 163
```

For John:

```text
163 + 42 = 205
```

For Peter:

```text
205 + 67 = 272
```

**Step 5: Determine the student's status**

```javascript
let status = student.marks >= 50 ? "PASS" : "FAIL";
```

This uses the ternary operator.

If the student's marks are at least 50, the result is `"PASS"`.

Otherwise, the result is `"FAIL"`.

**Step 6: Display the student's information**

```javascript
console.log(
    `${student.name}: ${student.marks} - ${status}`
);
```

Displays the name, marks, and result status.

**Step 7: Calculate the average**

```javascript
const average = total / students.length;
```

- `total` contains the sum of all marks.
- `students.length` gives the number of students.
- Dividing the total by the number of students gives the average.

Calculation:

```text
272 / 4 = 68
```

**Step 8: Display the final results**

```javascript
console.log("Total Marks:", total);
console.log("Average Marks:", average);
```

Displays the total and average marks.

---

### 30. Practical Project 3: Product Inventory System

This project demonstrates how loops can process products in a simple inventory system.

Create:

```text
inventory.js
```

Code:

```javascript
const products = [
    { name: "Laptop", price: 65000, quantity: 3 },
    { name: "Mouse", price: 800, quantity: 10 },
    { name: "Keyboard", price: 1500, quantity: 5 },
    { name: "Monitor", price: 18000, quantity: 2 }
];

let inventoryValue = 0;

console.log("PRODUCT INVENTORY");

for (let product of products) {

    const value = product.price * product.quantity;

    inventoryValue += value;

    console.log(
        `${product.name}: KSh ${value}`
    );
}

console.log("----------------------");
console.log("Total Inventory Value: KSh", inventoryValue);
```

Output:

```text
PRODUCT INVENTORY
Laptop: KSh 195000
Mouse: KSh 8000
Keyboard: KSh 7500
Monitor: KSh 36000
----------------------
Total Inventory Value: KSh 246500
```

#### Explanation

The array contains four product objects.

Each object has:

- `name`: Product name.
- `price`: Price of one unit.
- `quantity`: Number of units available.

The loop retrieves each product.

```javascript
const value = product.price * product.quantity;
```

Calculates the total value of that particular product.

For the laptop:

```text
65,000 × 3 = 195,000
```

Then:

```javascript
inventoryValue += value;
```

Adds the product's value to the overall inventory value.

After processing all four products, the program displays the total inventory value.

This is a simplified example of how inventory applications process product records.

---

### 31. Choosing the Correct Loop

Knowing how to write loops is important, but knowing which loop to use is equally important.

| Situation | Recommended loop | Reason |
|---|---|---|
| Display numbers from 1 to 100 | `for` | You know the counting range. |
| Repeat a menu until the user exits | `while` | You may not know how many times the menu will appear. |
| Display all names in an array | `for...of` | You need the actual values. |
| Display object property names | `for...in` | You need the property keys. |
| Execute an operation at least once | `do...while` | The first execution is guaranteed. |
| Process rows and columns | Nested loops | One loop operates inside another. |

### 32. Common Loop Mistakes

**Mistake 1: Forgetting to update a `while` loop**

Incorrect:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

Problem: The value of `i` never changes.

Correct:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

**Mistake 2: Using the wrong comparison operator**

Consider:

```javascript
for (let i = 1; i < 5; i++) {
    console.log(i);
}
```

This displays 1 to 4, not 1 to 5.

Why?

Because `i < 5` does not include 5.

If you want to include 5, use:

```javascript
i <= 5
```

**Mistake 3: Confusing `for...in` with `for...of`**

Incorrect for displaying array values:

```javascript
const names = ["Brian", "Mary", "John"];

for (let name in names) {
    console.log(name);
}
```

This displays indexes instead of names.

Correct:

```javascript
for (let name of names) {
    console.log(name);
}
```

**Mistake 4: Creating an infinite loop**

A loop without a reachable stopping condition can continue indefinitely.

Always examine:

- The initial value.
- The condition.
- The update.
- Whether the update moves the loop towards termination.

**Mistake 5: Modifying an array while iterating over it**

Changing the length or order of an array while looping through it can cause elements to be skipped or processed unexpectedly.

When removing multiple elements, consider iterating backwards or creating a new filtered array.

---

### Part 3 Practical Exercises

Complete these tasks independently.

**Exercise 1: Number Generator**

Create a program that displays numbers from 1 to 50 using a `for` loop.

**Exercise 2: Even Numbers**

Use a loop to display all even numbers between 1 and 100.

**Exercise 3: Array Processing**

Create an array containing ten examination marks. Use `for...of` to calculate the total and average.

**Exercise 4: Object Processing**

Create an employee object containing:

- Name
- Department
- Salary
- Position

Use `for...in` to display its property names and values.

**Exercise 5: Shopping System**

Create an array of at least five products. Each product should contain a name, price, and quantity.

Use a loop to calculate the total inventory value.

**Exercise 6: Multiplication Tables**

Create a program that asks the user for a number and generates its multiplication table from 1 to 12.

**Exercise 7: Nested Loops**

Use nested loops to display the following pattern:

```text
*
**
***
****
*****
```

**Exercise 8: Debugging**

Identify and correct the problem in this program:

```javascript
let number = 1;

while (number <= 10) {
    console.log(number);
}
```

Explain why the original program does not terminate.

**Progress: Part 3 of 4**

---

## PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

### 33. Lesson Assessment

You have now studied:

- What loops are and why they are important.
- The `for` loop.
- The `while` loop.
- The `do...while` loop.
- The `for...of` loop.
- The `for...in` loop.
- Loop iterations.
- Nested loops.
- `break` and `continue`.
- Practical applications of loops in software development.

Now complete the following assessment.

### Section A: Multiple-Choice Questions

**Question 1**

What is the main purpose of a loop in JavaScript?

A. To create objects.

B. To repeat a block of code.

C. To declare variables.

D. To define functions.

**Question 2**

Which loop is most suitable when you know how many times you want to repeat an operation?

A. `for`

B. `for...in`

C. `while`

D. `for...of`

**Question 3**

What does `i++` mean?

A. Decrease `i` by one.

B. Multiply `i` by one.

C. Increase `i` by one.

D. Reset `i` to zero.

**Question 4**

Which loop is guaranteed to execute its body at least once?

A. `for`

B. `while`

C. `for...of`

D. `do...while`

**Question 5**

What does `for...of` retrieve when used with an array?

A. Array values.

B. Only array indexes.

C. Object property names.

D. Array length.

**Question 6**

What does `for...in` primarily retrieve when used with an object?

A. Property values.

B. Property keys.

C. Array elements.

D. Function results.

**Question 7**

What happens when JavaScript executes `break` inside a loop?

A. It restarts the loop.

B. It skips only one statement.

C. It terminates the loop.

D. It increases the loop counter.

**Question 8**

What does `continue` do?

A. Terminates the entire program.

B. Skips the current iteration.

C. Stops all future iterations.

D. Restarts the application.

### Section B: Understanding Concepts

**Question 9**

Explain the three components of a `for` loop:

- Initialization
- Condition
- Update

**Question 10**

Explain the difference between `while` and `do...while`.

**Question 11**

Differentiate between `for...of` and `for...in`. Give one practical situation where each should be used.

**Question 12**

What is an infinite loop? Explain two ways it can happen.

### Section C: Practical Programming

**Question 13: Counting Program**

Write a JavaScript program that displays numbers from 1 to 20 using a `for` loop.

**Question 14: Array Processing**

Create an array of five student names.

Use `for...of` to display every student's name.

**Question 15: Object Processing**

Create an object representing an employee with:

- Name
- Age
- Department
- Salary

Use `for...in` to display every property and its value.

**Question 16: Debugging**

Study the following program:

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Answer:

1. What will the program display?
2. Why is the number 3 missing?
3. What would happen if `continue` were replaced with `break`?

### Section D: Practical Challenge

**Build a Simple Shopping Cart Calculator**

Create a JavaScript program that stores multiple products in an array.

Each product must have:

- Product name.
- Unit price.
- Quantity purchased.

Your program should:

1. Store at least five products.
2. Use a loop to process each product.
3. Calculate the cost of each product.
4. Calculate the total shopping cost.
5. Display every product and its calculated cost.
6. Display the final amount payable.

Example output:

```text
SHOPPING CART

Laptop: KSh 65000
Mouse: KSh 1600
Keyboard: KSh 3000
Monitor: KSh 18000
USB Cable: KSh 500

-------------------------
TOTAL: KSh 88100
```

You can choose your own products and prices.

### 34. Submit Your Assessment to Kai

After completing the assessment, submit your answers to Kai, your AI instructor.

Kai should:

1. Mark your multiple-choice answers.
2. Evaluate your explanations.
3. Review your JavaScript code.
4. Identify syntax and logical errors.
5. Explain why incorrect answers are wrong.
6. Provide corrected code where necessary.
7. Give you a final assessment score.
8. Recommend areas that need more practice.

### 35. Lesson Completion Checklist

Before marking this lesson as complete, make sure you can:

- [ ] Explain what loops are.
- [ ] Write a `for` loop.
- [ ] Write a `while` loop.
- [ ] Explain how `do...while` works.
- [ ] Use `for...of` to iterate through arrays.
- [ ] Use `for...of` to iterate through strings.
- [ ] Use `for...in` to access object property keys.
- [ ] Explain the difference between `for...of` and `for...in`.
- [ ] Use `break` and `continue`.
- [ ] Create nested loops.
- [ ] Identify and prevent infinite loops.
- [ ] Build programs that process arrays and objects.

### 36. What Comes Next?

**Next Lesson: JavaScript Functions**

In the next lesson, you will learn how to create reusable blocks of code using functions.

You will explore:

- Function declarations.
- Function expressions.
- Arrow functions.
- Function parameters and arguments.
- Return statements.
- Default parameters.
- Local and global scope.
- Callback functions.
- Practical projects using functions.

Functions will help you organize your programs into smaller, reusable components instead of writing all your logic in one large block of code.

**Part 4 of 4 — Lesson Complete**