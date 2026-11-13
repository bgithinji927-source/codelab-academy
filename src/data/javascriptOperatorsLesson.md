# JavaScript: Operators

## PART 1 OF 4 — INTRODUCTION TO OPERATORS

### 1. What Are Operators in JavaScript?

Operators are special symbols or keywords used to perform operations on values and variables.

They allow a JavaScript program to:
- Perform mathematical calculations.
- Compare two values.
- Assign values to variables.
- Make logical decisions.
- Combine strings.
- Check the type of a value.

For example:

```javascript
let firstNumber = 20;
let secondNumber = 10;

let result = firstNumber + secondNumber;

console.log(result);
```

**Expected output:**
```text
30
```

**Understanding each line:**

1. `let firstNumber = 20;` creates a variable containing the number `20`.
2. `let secondNumber = 10;` creates another variable containing `10`.
3. `let result = firstNumber + secondNumber;` uses the addition operator (`+`) to add the two values and stores the result.
4. `console.log(result);` displays the answer in the console.

In this example, `+` is an operator, while `firstNumber` and `secondNumber` are operands.

**Operand:** A value or variable on which an operator performs an operation.

### 2. Types of JavaScript Operators

JavaScript provides several categories of operators.

| Operator category | Purpose | Examples |
|---|---|---|
| Arithmetic | Performs mathematical calculations | `+`, `-`, `*`, `/` |
| Assignment | Assigns values to variables | `=`, `+=`, `-=` |
| Comparison | Compares two values | `==`, `===`, `>`, `<` |
| Logical | Combines or reverses conditions | `&&`, `||`, `!` |
| Increment and decrement | Increases or decreases a value by one | `++`, `--` |
| String | Joins strings together | `+`, `+=` |
| Ternary | Makes decisions using a condition | `condition ? value1 : value2` |
| Type | Checks or identifies types | `typeof`, `instanceof` |
| Nullish coalescing | Provides a fallback for `null` or `undefined` | `??` |

We will examine these operators one category at a time.

### 3. Arithmetic Operators

Arithmetic operators perform mathematical calculations.

JavaScript supports the following arithmetic operators:

| Operator | Name | Operation | Example | Result |
|---|---|---|---|---|
| `+` | Addition | Adds values | `10 + 5` | `15` |
| `-` | Subtraction | Subtracts values | `10 - 5` | `5` |
| `*` | Multiplication | Multiplies values | `10 * 5` | `50` |
| `/` | Division | Divides values | `10 / 5` | `2` |
| `%` | Modulus | Returns the remainder | `10 % 3` | `1` |
| `**` | Exponentiation | Raises a number to a power | `2 ** 3` | `8` |

#### Example 1: Performing Mathematical Calculations

```javascript
let price = 500;
let quantity = 3;

let total = price * quantity;

console.log(total);
```

**Expected output:**
```text
1500
```

**Line-by-line explanation:**

- `let price = 500;` stores the price of one item.
- `let quantity = 3;` stores the number of items purchased.
- `let total = price * quantity;` multiplies the price by the quantity.
- `console.log(total);` displays the total cost.

This is useful in shopping systems, billing applications, and payment calculations.

#### Example 2: Understanding the Modulus Operator

The modulus operator (`%`) returns the remainder after division.

```javascript
let number = 10;

let remainder = number % 3;

console.log(remainder);
```

**Expected output:**
```text
1
```

Why?

When 10 is divided by 3:
- 3 goes into 10 three times.
- 3 × 3 = 9.
- 10 − 9 = 1.

Therefore, the remainder is `1`.

One common use of modulus is checking whether a number is even or odd.

```javascript
let number = 8;

console.log(number % 2);
```

Output:
```text
0
```

If a number divided by 2 has a remainder of `0`, it is even. Otherwise, it is odd.

#### Example 3: Exponentiation

The exponentiation operator (`**`) raises a number to a specified power.

```javascript
let result = 2 ** 4;

console.log(result);
```

Output:
```text
16
```

This is because:

`2 × 2 × 2 × 2 = 16`

### 4. Order of Operations

JavaScript follows mathematical precedence rules when multiple arithmetic operators appear in an expression.

For example:

```javascript
let result = 10 + 5 * 2;

console.log(result);
```

Output:
```text
20
```

Why is the answer not `30`?

Multiplication is performed before addition:

1. `5 * 2` gives `10`.
2. `10 + 10` gives `20`.

You can use parentheses to control the order:

```javascript
let result = (10 + 5) * 2;

console.log(result);
```

Output:
```text
30
```

The parentheses tell JavaScript to perform addition first.

### 5. Increment and Decrement Operators

These operators increase or decrease a variable's value by one.

| Operator | Meaning | Example |
|---|---|---|
| `++` | Increase by one | `number++` |
| `--` | Decrease by one | `number--` |

Example:

```javascript
let visitors = 10;

visitors++;

console.log(visitors);

visitors--;

console.log(visitors);
```

Output:
```text
11
10
```

**Explanation:**

1. `let visitors = 10;` creates a variable with an initial value of 10.
2. `visitors++;` increases the value to 11.
3. `console.log(visitors);` displays 11.
4. `visitors--;` decreases the value back to 10.
5. The final statement displays 10.

#### Prefix and Postfix

There are two ways to use increment and decrement operators.

**Postfix:**

```javascript
let number = 5;

let result = number++;

console.log(result);
console.log(number);
```

Output:
```text
5
6
```

With `number++`, JavaScript first uses the current value in the expression and then increases the variable.

**Prefix:**

```javascript
let number = 5;

let result = ++number;

console.log(result);
console.log(number);
```

Output:
```text
6
6
```

With `++number`, JavaScript increases the variable first and then uses the updated value.

### Part 1 Summary

You have learned:
- What operators and operands are.
- The main categories of JavaScript operators.
- Arithmetic operations.
- The modulus and exponentiation operators.
- Mathematical precedence.
- Increment and decrement.
- The difference between prefix and postfix.

**Progress: Part 1 of 4**

---

## PART 2 OF 4 — ASSIGNMENT, COMPARISON AND LOGICAL OPERATORS

### 1. Assignment Operators

Assignment operators are used to assign values to variables.

The most basic assignment operator is:

```javascript
let age = 20;
```

Here, `=` assigns the value `20` to the variable `age`.

However, JavaScript also provides compound assignment operators that combine an operation with assignment.

| Operator | Meaning | Example | Equivalent operation |
|---|---|---|---|
| `=` | Assign | `x = 10` | Assign 10 to x |
| `+=` | Add and assign | `x += 5` | `x = x + 5` |
| `-=` | Subtract and assign | `x -= 5` | `x = x - 5` |
| `*=` | Multiply and assign | `x *= 5` | `x = x * 5` |
| `/=` | Divide and assign | `x /= 5` | `x = x / 5` |
| `%=` | Modulus and assign | `x %= 3` | `x = x % 3` |
| `**=` | Exponentiate and assign | `x **= 2` | `x = x ** 2` |

#### Example: Updating a Bank Account Balance

```javascript
let balance = 1000;

balance += 500;

console.log(balance);

balance -= 200;

console.log(balance);
```

Output:
```text
1500
1300
```

**Explanation:**

- `let balance = 1000;` creates a balance variable.
- `balance += 500;` adds 500 to the existing balance.
- `console.log(balance);` displays 1500.
- `balance -= 200;` subtracts 200 from the balance.
- The final statement displays 1300.

These operators are useful when updating scores, shopping totals, inventory quantities, and other changing values.

### 2. Comparison Operators

Comparison operators compare two values.

They return a Boolean result:

- `true` means the comparison is correct.
- `false` means the comparison is incorrect.

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `==` | Equal value | `5 == "5"` | `true` |
| `===` | Equal value and type | `5 === "5"` | `false` |
| `!=` | Not equal value | `5 != 3` | `true` |
| `!==` | Not equal value or type | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `5 < 10` | `true` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |
| `<=` | Less than or equal | `5 <= 10` | `true` |

#### Understanding `==` and `===`

This is an important distinction in JavaScript.

The double equality operator (`==`) compares values after allowing type conversion in certain situations.

```javascript
console.log(10 == "10");
```

Output:
```text
true
```

JavaScript converts the string `"10"` into a number before comparing.

The strict equality operator (`===`) compares both value and data type.

```javascript
console.log(10 === "10");
```

Output:
```text
false
```

Why?

- `10` is a number.
- `"10"` is a string.
- Their values may look similar, but their types are different.

**Recommended practice:** Use `===` and `!==` in most situations because they make comparisons more predictable.

#### Example: Checking a Student's Marks

```javascript
let marks = 75;

console.log(marks >= 50);
console.log(marks < 50);
```

Output:
```text
true
false
```

Explanation:

- `marks >= 50` checks whether the student scored at least 50.
- `marks < 50` checks whether the score is below 50.

Comparison operators are commonly used in login systems, student management systems, and access-control applications.

### 3. Logical Operators

Logical operators allow you to combine or reverse conditions.

JavaScript has three main logical operators:

| Operator | Name | Meaning |
|---|---|---|
| `&&` | AND | All conditions must be truthy |
| `||` | OR | At least one condition must be truthy |
| `!` | NOT | Reverses a truthy or falsy value |

#### A. Logical AND (`&&`)

The AND operator returns a truthy result only when both conditions are truthy.

Example:

```javascript
let age = 22;
let hasID = true;

let canEnter = age >= 18 && hasID;

console.log(canEnter);
```

Output:
```text
true
```

**Explanation:**

1. `let age = 22;` stores the person's age.
2. `let hasID = true;` indicates that the person has identification.
3. `age >= 18` checks whether the person is at least 18.
4. `&& hasID` checks whether the person also has identification.
5. Both conditions are true, so the final result is true.

If either condition is false, the combined condition will not be satisfied.

#### B. Logical OR (`||`)

The OR operator returns a truthy result if at least one condition is truthy.

```javascript
let isAdmin = false;
let isManager = true;

let canAccess = isAdmin || isManager;

console.log(canAccess);
```

Output:
```text
true
```

The user is not an administrator, but they are a manager. Since one condition is true, access is allowed by this example's rule.

#### C. Logical NOT (`!`)

The NOT operator reverses a Boolean value.

```javascript
let isLoggedIn = false;

console.log(!isLoggedIn);
```

Output:
```text
true
```

The original value is `false`. The `!` operator reverses it to `true`.

### 4. Combining Comparison and Logical Operators

In real applications, operators are often combined.

Consider a student who can access an advanced course if they are at least 18 and have completed the beginner course.

```javascript
let age = 21;
let completedBeginnerCourse = true;

let canJoinAdvancedCourse =
    age >= 18 && completedBeginnerCourse === true;

console.log(canJoinAdvancedCourse);
```

Output:
```text
true
```

The program checks two requirements:

1. The student's age must be at least 18.
2. The student must have completed the beginner course.

The student satisfies both requirements.

### 5. Truthy and Falsy Values

JavaScript does not always require a value to be explicitly `true` or `false` when evaluating conditions.

Some values behave like `true`, while others behave like `false`.

These are called truthy and falsy values.

**Common falsy values:**

| Value | Meaning |
|---|---|
| `false` | Boolean false |
| `0` | Zero |
| `-0` | Negative zero |
| `0n` | BigInt zero |
| `""` | Empty string |
| `null` | Intentionally absent value |
| `undefined` | Value not assigned |
| `NaN` | Not a valid number |

Most other values are truthy, including:

- `"Hello"`
- `"0"`
- `100`
- `-5`
- `[]`
- `{}`

An important point: empty arrays and empty objects are truthy in JavaScript.

Example:

```javascript
let username = "";

if (username) {
    console.log("Username provided");
} else {
    console.log("Username is missing");
}
```

Output:
```text
Username is missing
```

The empty string is falsy, so JavaScript executes the `else` block.

### 6. Short-Circuit Evaluation

Logical operators can stop evaluating an expression once the result is determined.

For example:

```javascript
let isLoggedIn = false;

let access = isLoggedIn && "Welcome";

console.log(access);
```

Output:
```text
false
```

Because the first value is falsy, the AND operator does not need to evaluate the second operand to determine the result.

With OR:

```javascript
let username = "";

let displayName = username || "Guest";

console.log(displayName);
```

Output:
```text
Guest
```

The empty string is falsy, so JavaScript uses `"Guest"`.

### 7. Nullish Coalescing (`??`)

The nullish coalescing operator provides a fallback only when the left-hand value is `null` or `undefined`.

Example:

```javascript
let username = null;

let displayName = username ?? "Guest";

console.log(displayName);
```

Output:
```text
Guest
```

Compare it with the OR operator:

```javascript
let score = 0;

console.log(score || 100);
console.log(score ?? 100);
```

Output:
```text
100
0
```

Why are the answers different?

- `score || 100` uses 100 because zero is falsy.
- `score ?? 100` keeps zero because zero is neither `null` nor `undefined`.

This is especially useful when zero, `false`, or an empty string are valid values that should not be replaced.

### Part 2 Summary

You have learned:
- Assignment and compound assignment operators.
- Comparison operators.
- The difference between `==` and `===`.
- Logical AND, OR, and NOT.
- Combining conditions.
- Truthy and falsy values.
- Short-circuit evaluation.
- Nullish coalescing.

**Progress: Part 2 of 4**

---

## PART 3 OF 4 — STRING, TERNARY AND TYPE OPERATORS: PRACTICAL APPLICATIONS

### 1. String Operators

JavaScript uses the plus operator (`+`) to join strings together. This operation is called concatenation.

Example:

```javascript
let firstName = "Brian";
let lastName = "Njogu";

let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:
```text
Brian Njogu
```

**Line-by-line explanation:**

- `let firstName = "Brian";` stores the first name.
- `let lastName = "Njogu";` stores the last name.
- `firstName + " " + lastName` joins the first name, a space, and the last name.
- The resulting string is stored in `fullName`.
- `console.log(fullName);` displays the complete name.

You can also use the `+=` operator:

```javascript
let message = "Welcome";

message += " to JavaScript";

console.log(message);
```

Output:
```text
Welcome to JavaScript
```

The `+=` operator adds the new string to the existing value.

#### Template Literals

Template literals provide another convenient way to combine strings and variables.

They use backticks rather than ordinary quotation marks.

```javascript
let name = "Brian";
let course = "JavaScript";

let message = `Hello ${name}, welcome to ${course}.`;

console.log(message);
```

Output:
```text
Hello Brian, welcome to JavaScript.
```

The `${}` syntax allows JavaScript to insert variable values or expressions into a string.

Template literals are especially useful when generating messages, reports, and dynamic page content.

### 2. The Ternary Operator

The ternary operator is a shorter way to write a simple conditional expression.

Its structure is:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

It contains three parts:

1. A condition.
2. A value returned when the condition is true.
3. A value returned when the condition is false.

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:
```text
Adult
```

**Explanation:**

- `let age = 20;` stores the person's age.
- `age >= 18` checks whether the person is at least 18.
- `? "Adult"` means return `"Adult"` if the condition is true.
- `: "Minor"` means return `"Minor"` if the condition is false.
- The returned value is stored in `result`.

The ternary operator is useful for short decisions.

For more complex decisions involving several conditions or multiple statements, ordinary `if...else` structures are usually easier to understand.

### 3. Type Operators

JavaScript provides operators that help identify or test data types.

#### A. The `typeof` Operator

The `typeof` operator returns a string describing the type of a value.

Example:

```javascript
let name = "Brian";
let age = 22;
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

Other examples:

```javascript
console.log(typeof undefined);
console.log(typeof 100n);
console.log(typeof Symbol("id"));
```

Output:
```text
undefined
bigint
symbol
```

There are two important JavaScript quirks:

```javascript
console.log(typeof null);
console.log(typeof []);
```

Output:
```text
object
object
```

`typeof null` returning `"object"` is a historical JavaScript behavior. It does not mean that `null` is an ordinary object.

Arrays also return `"object"` when checked using `typeof`.

To identify arrays correctly, use:

```javascript
let subjects = ["Math", "Programming", "Accounting"];

console.log(Array.isArray(subjects));
```

Output:
```text
true
```

#### B. The `instanceof` Operator

The `instanceof` operator checks whether an object belongs to a particular class or constructor's prototype chain.

Example:

```javascript
let currentDate = new Date();

console.log(currentDate instanceof Date);
```

Output:
```text
true
```

Explanation:

- `new Date()` creates a Date object.
- `currentDate` stores that object.
- `instanceof Date` checks whether it is an instance of `Date`.
- The result is `true`.

This operator is particularly useful when working with objects and classes.

### 4. Operator Precedence

When an expression contains several operators, JavaScript follows rules that determine which operation happens first.

Consider:

```javascript
let result = 10 + 5 * 2 > 15 && true;

console.log(result);
```

Output:
```text
true
```

The operations happen in this order:

1. `5 * 2` produces `10`.
2. `10 + 10` produces `20`.
3. `20 > 15` produces `true`.
4. `true && true` produces `true`.

When expressions become complicated, parentheses make the intended order clearer.

### 5. Practical Project: Student Result Calculator

Now let's build a small program that uses several JavaScript operators together.

**Project objective:** Create a program that calculates a student's total marks, average, and pass status.

#### Step 1: Create the project

Create a folder named:

```text
javascript-operators-project
```

Inside it, create a file:

```text
main.js
```

#### Step 2: Write the program

```javascript
// Student marks
let mathematics = 80;
let programming = 75;
let accounting = 65;

// Calculate total marks
let total = mathematics + programming + accounting;

// Calculate average
let average = total / 3;

// Check whether the student passed
let passed = average >= 50;

// Display results
console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Passed:", passed);
```

#### Step 3: Understand the program line by line

**Lines 1–3:**

```javascript
let mathematics = 80;
let programming = 75;
let accounting = 65;
```

These variables store the student's marks in three subjects.

**Lines 5–6:**

```javascript
let total = mathematics + programming + accounting;
```

The addition operator combines the three marks.

The calculation is:

`80 + 75 + 65 = 220`

Therefore, `total` becomes `220`.

**Lines 8–9:**

```javascript
let average = total / 3;
```

The division operator calculates the average.

`220 / 3 = 73.33333333333333`

**Lines 11–12:**

```javascript
let passed = average >= 50;
```

The comparison operator checks whether the average is at least 50.

Since the average is above 50, `passed` becomes `true`.

**Lines 14–16:**

```javascript
console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Passed:", passed);
```

These statements display the results.

#### Step 4: Expected output

```text
Total Marks: 220
Average: 73.33333333333333
Passed: true
```

You can improve the display of the average using the `toFixed()` method:

```javascript
console.log("Average:", average.toFixed(2));
```

Output:

```text
Average: 73.33
```

`toFixed(2)` displays the number with two digits after the decimal point. It returns a string, not a number.

### 6. Practical Project: Simple Shopping Calculator

Let's create another program using arithmetic and assignment operators.

```javascript
let itemPrice = 500;
let quantity = 3;
let discount = 200;

let subtotal = itemPrice * quantity;

let finalPrice = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);
```

**Expected output:**

```text
Subtotal: 1500
Discount: 200
Final Price: 1300
```

**Understanding the logic:**

1. The program stores the price of one item.
2. It stores the number of items purchased.
3. It stores the discount amount.
4. It multiplies the item price by the quantity to calculate the subtotal.
5. It subtracts the discount from the subtotal.
6. It displays the final amount.

This demonstrates how operators can be combined to solve a real-world problem.

### 7. Common Mistakes When Using Operators

| Mistake | Incorrect code | Correct approach |
|---|---|---|
| Using `=` instead of comparison | `age = 18` | `age === 18` |
| Comparing different types loosely | `10 == "10"` | Prefer `10 === 10` when comparing numbers |
| Forgetting operator precedence | `10 + 5 * 2` when you intend to add first | `(10 + 5) * 2` |
| Confusing `&&` and `||` | Using OR when all conditions must pass | Use AND |
| Treating zero as missing | `score || 100` | Use `score ?? 100` when zero is valid |
| Assuming arrays are identified by `typeof` | `typeof []` | `Array.isArray([])` |

### 8. Practical Exercises

Complete these exercises before proceeding to the assessment.

**Exercise 1: Arithmetic**

Create a program that stores two numbers and displays:
- Their sum.
- Their difference.
- Their product.
- Their division result.
- Their remainder.

**Exercise 2: Comparison**

Create a variable named `temperature` and check whether its value is greater than 30.

Display the result.

**Exercise 3: Logical Operators**

A user can access a system only if:
- Their age is at least 18.
- They have a valid account.

Use logical AND to implement this condition.

**Exercise 4: Increment and Decrement**

Create a variable named `score` with an initial value of 10.

Increase it twice and decrease it once. Display the final value.

**Exercise 5: Ternary Operator**

Create a program that checks whether a student scored at least 50 marks.

Display `"Pass"` or `"Fail"` using the ternary operator.

**Exercise 6: Shopping Calculator**

Create a program that calculates the final price of three products after applying a discount.

**Exercise 7: Type Checking**

Create variables containing a string, number, Boolean, and array.

Use `typeof` and `Array.isArray()` to identify their types.

**Exercise 8: Challenge**

Create a simple login eligibility checker.

The user should be allowed to log in only when:
- Their username is not empty.
- Their password is not empty.
- Their account is active.

Use comparison and logical operators.

**Progress: Part 3 of 4**

---

## PART 4 OF 4 — KAI ASSESSMENT

### 1. Assessment Instructions

You have completed the lesson on JavaScript operators.

Now demonstrate your understanding by answering the following questions.

Try answering without copying directly from the lesson.

### Section A: Multiple Choice Questions

**Question 1**

What is the main purpose of operators in JavaScript?

A. To create HTML pages only.  
B. To perform operations on values and variables.  
C. To store images.  
D. To create folders.

**Question 2**

What will this code display?

```javascript
console.log(10 % 3);
```

A. 3  
B. 10  
C. 1  
D. 0

**Question 3**

Which operator checks whether both the value and data type are equal?

A. `=`  
B. `==`  
C. `===`  
D. `!=`

**Question 4**

Which operator represents logical AND?

A. `||`  
B. `&&`  
C. `!`  
D. `++`

**Question 5**

What is the output?

```javascript
let score = 10;

score += 5;

console.log(score);
```

A. 5  
B. 10  
C. 15  
D. 50

### Section B: Understanding Concepts

**Question 6**

Explain the difference between arithmetic operators and comparison operators. Give two examples of each.

**Question 7**

Explain the difference between `==` and `===` in JavaScript.

**Question 8**

What is the difference between logical AND (`&&`) and logical OR (`||`)?

**Question 9**

Explain what truthy and falsy values mean. Give three examples of each.

**Question 10**

What is the difference between the nullish coalescing operator (`??`) and the logical OR operator (`||`)?

### Section C: Practical Programming

**Question 11**

Write a JavaScript program that calculates the total cost of purchasing five items, each costing KSh 200.

**Question 12**

Write a program that checks whether a person is eligible to register for a service.

The person must be at least 18 years old and must have identification.

Use logical AND.

**Question 13**

Study the following code:

```javascript
let number = 5;

let result = number++;

console.log(result);
console.log(number);
```

Explain why the program produces two different values.

**Question 14**

Find and correct the mistake in this code:

```javascript
let age = 20;

if (age = 18) {
    console.log("Eligible");
}
```

Explain why your correction is necessary.

### 2. Submit Your Answers to Kai

After completing the questions, submit your answers to Kai, your AI instructor.

Kai should:
- Mark your answers.
- Explain incorrect answers.
- Identify areas where you need improvement.
- Provide corrections for programming mistakes.
- Recommend additional exercises where necessary.

### 3. Lesson Completion Checklist

Before marking this lesson complete, make sure you can:

- Explain what operators are.
- Use arithmetic operators.
- Use assignment operators.
- Compare values using comparison operators.
- Combine conditions using logical operators.
- Explain truthy and falsy values.
- Use increment and decrement operators.
- Join strings using concatenation and template literals.
- Use ternary expressions.
- Identify data types using `typeof`.
- Apply operators in practical JavaScript programs.

**Part 4 of 4 — Lesson Complete**

**Next lesson: JavaScript Conditional Statements (`if`, `else if`, `else`, and `switch`).**