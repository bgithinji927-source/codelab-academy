# JAVASCRIPT: CONDITIONAL STATEMENTS

# PART 1 OF 4 — INTRODUCTION TO CONDITIONAL STATEMENTS

## 1. What Are Conditional Statements?

Conditional statements are programming structures that allow a program to make decisions based on specific conditions.

In everyday life, we make decisions depending on different situations.

For example:

- If it rains, carry an umbrella.
- If a student scores 50 marks or more, they pass.
- If a person is 18 or older, they may qualify for an age-restricted service.
- If a password is correct, allow the user to continue.

JavaScript uses conditional statements to implement this type of decision-making.

### Example: Checking Examination Results

Imagine developing a student management system.

The system needs to determine whether a student has passed or failed.

The rule is:

- Marks of 50 or above: Pass.
- Marks below 50: Fail.

JavaScript can implement this rule using an `if` statement.

```javascript
let marks = 75;

if (marks >= 50) {
    console.log("Congratulations! You passed.");
}
```

**Output:**

```text
Congratulations! You passed.
```

### Understanding the Code Line by Line

**Line 1:**

```javascript
let marks = 75;
```

Creates a variable named `marks` and stores the student's examination score.

**Line 2:**

```javascript
if (marks >= 50) {
```

This is the conditional statement.

- `if` tells JavaScript to evaluate a condition.
- `marks >= 50` checks whether the marks are greater than or equal to 50.
- The condition evaluates to `true` because 75 is greater than 50.
- The opening curly bracket `{` marks the beginning of the code block.

**Line 3:**

```javascript
console.log("Congratulations! You passed.");
```

This statement executes because the condition is true.

**Line 4:**

```javascript
}
```

Closes the `if` block.

### What Happens When the Condition Is False?

Consider changing the marks to 35.

```javascript
let marks = 35;

if (marks >= 50) {
    console.log("Congratulations! You passed.");
}
```

There is no output.

Why?

Because `35 >= 50` evaluates to `false`.

JavaScript skips the instructions inside the `if` block.

This is the basic behavior of conditional statements.

---

## 2. The `if` Statement

The `if` statement executes a block of code only when a specified condition is true.

### Syntax

```javascript
if (condition) {
    // Code executes if the condition is true
}
```

The condition must produce a value that JavaScript evaluates as truthy or falsy.

### Example: Checking a User's Age

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are eligible.");
}
```

Output:

```text
You are eligible.
```

The program checks whether the age is at least 18.

Since the condition is true, the message is displayed.

### Example: Checking Account Balance

```javascript
let balance = 5000;

if (balance > 1000) {
    console.log("You have sufficient funds.");
}
```

Output:

```text
You have sufficient funds.
```

This type of condition can be useful in financial applications.

However, real financial transactions must also be validated securely on the server.

---

## 3. The `if...else` Statement

Sometimes a program needs to execute one action when a condition is true and another action when it is false.

This is where `if...else` becomes useful.

### Syntax

```javascript
if (condition) {
    // Executes when condition is true
} else {
    // Executes when condition is false
}
```

### Example: Pass or Fail

```javascript
let marks = 42;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

Output:

```text
Fail
```

### Explanation

1. JavaScript creates the variable `marks` and stores 42.
2. The `if` statement checks whether marks are at least 50.
3. Since 42 is below 50, the condition evaluates to false.
4. JavaScript skips the `if` block.
5. It executes the `else` block.
6. `"Fail"` is displayed.

The important difference is that `else` executes when the preceding `if` condition is false.

### Example: Checking Even and Odd Numbers

```javascript
let number = 8;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
```

Output:

```text
Even number
```

**Understanding the logic:**

- `%` is the modulus operator.
- `number % 2` calculates the remainder after dividing by 2.
- An even number has a remainder of zero.
- `=== 0` checks whether the remainder is exactly zero.

Since 8 divided by 2 has a remainder of zero, JavaScript displays `"Even number"`.

---

## 4. The `if...else if...else` Statement

What if a program needs to check several possible conditions?

For example, an examination system might classify students using these grades:

| Marks | Grade |
|---|---|
| 80–100 | A |
| 70–79 | B |
| 60–69 | C |
| 50–59 | D |
| Below 50 | Fail |

Using only `if...else` would not be enough to handle all these categories conveniently.

JavaScript provides `else if`.

### Syntax

```javascript
if (condition1) {
    // Executes if condition1 is true
} else if (condition2) {
    // Executes if condition2 is true
} else if (condition3) {
    // Executes if condition3 is true
} else {
    // Executes if none of the conditions is true
}
```

### Example: Student Grading System

```javascript
let marks = 76;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else {
    console.log("Fail");
}
```

Output:

```text
Grade B
```

### Understanding the Program Step by Step

The student scored 76.

JavaScript evaluates the conditions in order.

**First condition:**

```javascript
if (marks >= 80)
```

Checks whether 76 is at least 80.

Result: `false`.

JavaScript moves to the next condition.

**Second condition:**

```javascript
else if (marks >= 70)
```

Checks whether 76 is at least 70.

Result: `true`.

JavaScript executes:

```javascript
console.log("Grade B");
```

It then skips the remaining conditions.

### Why Does JavaScript Stop Checking?

An `if...else if...else` chain executes only the first matching branch.

Once JavaScript finds a true condition, it executes that block and skips the remaining branches.

This is why the order of conditions matters.

### Important: Check the Range Carefully

Consider this incorrect example:

```javascript
let marks = 85;

if (marks >= 50) {
    console.log("Grade D");
} else if (marks >= 80) {
    console.log("Grade A");
}
```

Output:

```text
Grade D
```

Why?

Because 85 is already greater than 50.

JavaScript executes the first block and never checks the second condition.

The correct arrangement is:

```javascript
let marks = 85;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 50) {
    console.log("Grade D");
}
```

Output:

```text
Grade A
```

When conditions overlap, arrange them carefully so that the most specific or highest threshold is checked first.

---

## 5. Nested Conditional Statements

A nested conditional statement is an `if` statement placed inside another conditional statement.

This allows a program to make a decision within another decision.

### Example: Login Eligibility

Imagine a system that checks whether a user can access an application.

The rules are:

1. The user must have an account.
2. The account must be active.

```javascript
let hasAccount = true;
let accountActive = true;

if (hasAccount) {

    if (accountActive) {
        console.log("Welcome! You can access the system.");
    } else {
        console.log("Your account is inactive.");
    }

} else {
    console.log("Please create an account first.");
}
```

Output:

```text
Welcome! You can access the system.
```

### Understanding the Logic

The first condition checks whether the user has an account.

```javascript
if (hasAccount)
```

Because the value is true, JavaScript enters the first block.

Inside that block is another condition:

```javascript
if (accountActive)
```

This checks whether the account is active.

Since it is also true, the welcome message is displayed.

If the account is inactive, the inner `else` block executes.

If the user does not have an account, the outer `else` block executes.

Nested conditions are useful when a decision depends on several stages.

---

## 6. Combining Conditions with Logical Operators

Conditional statements often work together with logical operators.

Remember:

| Operator | Meaning |
|---|---|
| `&&` | AND — all conditions must be true |
| `||` | OR — at least one condition must be true |
| `!` | NOT — reverses a condition |

### Example: Course Registration

A student can register for an advanced course if:

- They are at least 18.
- They have completed the beginner course.

```javascript
let age = 22;
let beginnerCompleted = true;

if (age >= 18 && beginnerCompleted === true) {
    console.log("Registration successful.");
} else {
    console.log("You do not meet the requirements.");
}
```

Output:

```text
Registration successful.
```

Both conditions must be satisfied.

### Example: Access Through Different Roles

Suppose either an administrator or a manager can access a management dashboard.

```javascript
let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}
```

Output:

```text
Access granted.
```

Only one condition needs to be true.

---

## PART 1 SUMMARY

You have learned:

- What conditional statements are.
- How the `if` statement works.
- How `if...else` handles two possible outcomes.
- How `else if` handles multiple conditions.
- How nested conditional statements work.
- How to combine conditions using logical operators.
- Why condition order matters.

**Progress: Part 1 of 4**

---

# PART 2 OF 4 — THE SWITCH STATEMENT AND ADVANCED CONDITIONAL LOGIC

## 1. What Is the `switch` Statement?

The `switch` statement is another way of making decisions in JavaScript.

It is useful when a program needs to compare one expression against several possible values.

For example, imagine developing a system that displays a message depending on the selected day of the week.

You could write many `if...else if` statements, but `switch` can make the code easier to organize.

### Syntax

```javascript
switch (expression) {

    case value1:
        // Code for value1
        break;

    case value2:
        // Code for value2
        break;

    case value3:
        // Code for value3
        break;

    default:
        // Code when no case matches

}
```

Let's understand the components.

| Keyword | Purpose |
|---|---|
| `switch` | Starts the selection structure |
| `case` | Defines a possible matching value |
| `break` | Exits the switch block |
| `default` | Runs when no case matches |

## 2. Example: Days of the Week

```javascript
let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}
```

Output:

```text
Wednesday
```

### Understanding the Code Line by Line

**Line 1:**

```javascript
let day = 3;
```

Creates a variable storing the number 3.

**Line 3:**

```javascript
switch (day) {
```

Tells JavaScript to evaluate the value stored in `day`.

**First case:**

```javascript
case 1:
    console.log("Monday");
    break;
```

Checks whether `day` matches 1.

It does not, so JavaScript moves to the next case.

**Second case:**

```javascript
case 2:
    console.log("Tuesday");
    break;
```

The value does not match 2 either.

**Third case:**

```javascript
case 3:
    console.log("Wednesday");
    break;
```

The value matches 3.

JavaScript executes the message.

**The `break` keyword:**

```javascript
break;
```

Stops the switch statement from continuing into the following cases.

**The `default` block:**

```javascript
default:
    console.log("Invalid day");
```

This executes only when no case matches.

Since case 3 matched, the default block is skipped.

---

## 3. Understanding the Importance of `break`

The `break` keyword is important because JavaScript switch statements normally continue executing subsequent cases when a matching case does not exit the switch.

This behavior is called fall-through.

Consider this example:

```javascript
let number = 2;

switch (number) {

    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

    default:
        console.log("Finished");
}
```

Output:

```text
Two
Three
Finished
```

Why?

The value matches case 2.

However, there are no `break` statements.

JavaScript therefore continues executing the following statements.

### Correct Version

```javascript
let number = 2;

switch (number) {

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

    default:
        console.log("Finished");
}
```

Output:

```text
Two
```

Now JavaScript exits the switch after finding the matching case.

---

## 4. Using Multiple Cases for the Same Result

Sometimes different values should produce the same output.

For example, a program may classify Saturday and Sunday as weekends.

You can group cases together.

```javascript
let day = "Saturday";

switch (day) {

    case "Saturday":
    case "Sunday":
        console.log("It is the weekend.");
        break;

    default:
        console.log("It is a weekday.");
}
```

Output:

```text
It is the weekend.
```

Both cases lead to the same block of code.

This is another useful feature of `switch`.

---

## 5. Using `switch` with Strings

A switch statement is not limited to numbers.

It can also compare strings.

### Example: User Roles

```javascript
let role = "admin";

switch (role) {

    case "admin":
        console.log("You have full administrative access.");
        break;

    case "editor":
        console.log("You can edit content.");
        break;

    case "viewer":
        console.log("You can view content.");
        break;

    default:
        console.log("Unknown user role.");
}
```

Output:

```text
You have full administrative access.
```

This is useful when developing applications with different user roles.

**Important:** Switch cases use strict matching. For example, the number `1` does not match the string `"1"`.

---

## 6. Difference Between `if...else` and `switch`

Both conditional structures allow JavaScript to make decisions, but they are useful in different situations.

| Feature | `if...else` | `switch` |
|---|---|---|
| Main purpose | Checks conditions | Compares an expression against values |
| Range comparisons | Yes | Not directly through ordinary case labels |
| Multiple conditions | Yes | Usually compares one expression |
| Exact value matching | Yes | Yes |
| Best suited for | Complex conditions and ranges | Multiple fixed choices |

### Example: When to Use `if...else`

Suppose you want to check whether a student has passed.

```javascript
let marks = 75;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

This is appropriate because the program checks a numerical range.

### Example: When to Use `switch`

Suppose a user selects a payment method.

```javascript
let paymentMethod = "mpesa";

switch (paymentMethod) {

    case "mpesa":
        console.log("M-Pesa selected");
        break;

    case "card":
        console.log("Card payment selected");
        break;

    case "bank":
        console.log("Bank transfer selected");
        break;

    default:
        console.log("Unsupported payment method");
}
```

This is appropriate because the program compares one variable against several fixed options.

---

## 7. Conditional Statements and the Ternary Operator

You previously learned about the ternary operator.

It provides a shorter way to express a simple conditional decision.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
let age = 20;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

Output:

```text
Adult
```

The ternary operator is suitable for simple two-outcome decisions.

For complicated conditions, use `if...else` because it is generally easier to read.

---

## 8. Truthy and Falsy Conditions

JavaScript conditions do not always need explicit Boolean values.

For example:

```javascript
let username = "Brian";

if (username) {
    console.log("Username exists.");
} else {
    console.log("Username is missing.");
}
```

Output:

```text
Username exists.
```

The non-empty string is truthy.

Now consider:

```javascript
let username = "";

if (username) {
    console.log("Username exists.");
} else {
    console.log("Username is missing.");
}
```

Output:

```text
Username is missing.
```

An empty string is falsy.

### Common Falsy Values

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

Other values, including empty arrays `[]` and empty objects `{}`, are truthy.

Understanding truthy and falsy values is important when validating input and controlling application behavior.

---

## 9. Conditional Statements in Real Applications

Conditional statements are used throughout software development.

Here are some practical examples.

| Application | Conditional logic |
|---|---|
| Login system | Check whether credentials are valid |
| Banking application | Check whether sufficient funds are available |
| E-commerce system | Check whether a product is in stock |
| Student management system | Determine examination results |
| Property management system | Check whether rent has been paid |
| Learning platform | Check whether a learner completed a lesson |
| Admin dashboard | Check the user's role and permissions |

For example, a shopping application might check whether a product is available:

```javascript
let stock = 0;

if (stock > 0) {
    console.log("Product available.");
} else {
    console.log("Product out of stock.");
}
```

Output:

```text
Product out of stock.
```

Conditional statements make applications responsive to different situations.

---

## PART 2 SUMMARY

You have learned:

- What the `switch` statement is.
- How `case`, `break`, and `default` work.
- What fall-through means.
- How to group multiple cases.
- How to use switch with strings and numbers.
- Differences between `if...else` and `switch`.
- How the ternary operator fits into conditional logic.
- How truthy and falsy values affect conditions.
- How conditional statements are used in real applications.

**Progress: Part 2 of 4**

---

# PART 3 OF 4 — PRACTICAL CONDITIONAL STATEMENT PROJECTS

Now let's apply what you have learned by creating complete JavaScript programs.

These projects will help you understand how conditional statements are used to solve real problems.

## PROJECT 1: Student Grading System

### Objective

Build a program that receives a student's marks and determines their grade.

The grading rules are:

| Marks | Grade |
|---|---|
| 80–100 | A |
| 70–79 | B |
| 60–69 | C |
| 50–59 | D |
| 0–49 | Fail |

The program should also reject invalid marks.

### Step 1: Create the project

Create a folder:

```text
javascript-conditional-projects
```

Inside it, create:

```text
grading.js
```

### Step 2: Write the program

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter student's marks: ", function(input) {

    const marks = Number(input);

    if (!Number.isFinite(marks) || marks < 0 || marks > 100) {

        console.log("Invalid marks. Enter a value between 0 and 100.");

    } else if (marks >= 80) {

        console.log("Grade A");

    } else if (marks >= 70) {

        console.log("Grade B");

    } else if (marks >= 60) {

        console.log("Grade C");

    } else if (marks >= 50) {

        console.log("Grade D");

    } else {

        console.log("Fail");

    }

    rl.close();

});
```

### Step 3: Understand the Code

**Importing readline:**

```javascript
const readline = require("node:readline");
```

Imports the Node.js module that allows the program to receive terminal input.

**Creating the interface:**

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

Connects the program to the terminal.

**Receiving marks:**

```javascript
rl.question("Enter student's marks: ", function(input) {
```

Displays a question and receives the user's answer.

The answer is stored in `input`.

**Converting the input:**

```javascript
const marks = Number(input);
```

Converts the text entered by the user into a number.

**Validating the marks:**

```javascript
if (!Number.isFinite(marks) || marks < 0 || marks > 100)
```

Checks whether:

- The input is not a finite number.
- The marks are below zero.
- The marks are above 100.

The OR operator (`||`) means that any one of these conditions is enough to make the input invalid.

**Checking the grades:**

```javascript
else if (marks >= 80)
```

Checks whether the student qualifies for grade A.

If not, JavaScript moves to the next condition.

The same process continues for grades B, C, and D.

**Final else:**

```javascript
else {
    console.log("Fail");
}
```

If none of the previous grade conditions is true, the student has scored below 50 and therefore fails.

**Closing the interface:**

```javascript
rl.close();
```

Closes the terminal input interface.

### Step 4: Run the Program

```bash
node grading.js
```

Example:

```text
Enter student's marks: 85
Grade A
```

Another example:

```text
Enter student's marks: 45
Fail
```

Invalid input:

```text
Enter student's marks: 120
Invalid marks. Enter a value between 0 and 100.
```

---

## PROJECT 2: Simple Banking System

### Objective

Create a program that allows a user to select a banking operation.

The available operations are:

1. Check balance.
2. Deposit money.
3. Withdraw money.
4. Exit.

The program will use a `switch` statement to determine the selected operation.

### Step 1: Create the file

Create:

```text
banking.js
```

### Step 2: Write the program

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let balance = 5000;

console.log("WELCOME TO SIMPLE BANKING");
console.log("1. Check Balance");
console.log("2. Deposit Money");
console.log("3. Withdraw Money");
console.log("4. Exit");

rl.question("Select an option: ", function(choice) {

    switch (choice) {

        case "1":
            console.log(`Your balance is KSh ${balance}`);
            break;

        case "2":

            rl.question("Enter deposit amount: ", function(input) {

                const amount = Number(input);

                if (Number.isFinite(amount) && amount > 0) {

                    balance += amount;

                    console.log(`Deposit successful. New balance: KSh ${balance}`);

                } else {

                    console.log("Invalid deposit amount.");

                }

                rl.close();

            });

            return;

        case "3":

            rl.question("Enter withdrawal amount: ", function(input) {

                const amount = Number(input);

                if (!Number.isFinite(amount) || amount <= 0) {

                    console.log("Invalid withdrawal amount.");

                } else if (amount > balance) {

                    console.log("Insufficient funds.");

                } else {

                    balance -= amount;

                    console.log(`Withdrawal successful. New balance: KSh ${balance}`);

                }

                rl.close();

            });

            return;

        case "4":
            console.log("Thank you for using our banking service.");
            break;

        default:
            console.log("Invalid selection.");

    }

    rl.close();

});
```

### Step 3: Understand the Program

**Starting balance:**

```javascript
let balance = 5000;
```

Creates a variable containing the initial account balance.

**Displaying the menu:**

```javascript
console.log("1. Check Balance");
console.log("2. Deposit Money");
console.log("3. Withdraw Money");
console.log("4. Exit");
```

Displays the operations available to the user.

**Receiving the choice:**

```javascript
rl.question("Select an option: ", function(choice) {
```

Receives the option selected by the user.

Because terminal input is text, the cases use strings such as `"1"` and `"2"`.

**Using switch:**

```javascript
switch (choice)
```

Checks the selected option against the available cases.

**Checking the balance:**

```javascript
case "1":
    console.log(`Your balance is KSh ${balance}`);
    break;
```

If the user selects 1, the current balance is displayed.

**Depositing money:**

```javascript
balance += amount;
```

Adds the deposit amount to the existing balance.

**Withdrawing money:**

```javascript
balance -= amount;
```

Subtracts the withdrawal amount from the balance after checking that sufficient funds exist.

**The `return` statements:**

The deposit and withdrawal cases ask additional questions asynchronously.

The `return` statements stop the outer callback from reaching its final `rl.close()` while those additional questions are still running. The nested callbacks close the interface after processing their input.

This is a single-operation demonstration. A complete banking application would require persistent storage, authentication, transaction records, server-side validation, and secure transaction processing. The balance here resets whenever the program restarts.

### Step 4: Run the Program

```bash
node banking.js
```

Example:

```text
WELCOME TO SIMPLE BANKING
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

Select an option: 2
Enter deposit amount: 1000
Deposit successful. New balance: KSh 6000
```

---

## PROJECT 3: User Access Control System

### Objective

Build a simple access-control program that determines what a user can access based on their role.

The application supports three roles:

- Admin
- Editor
- Viewer

Each role receives different permissions.

### Step 1: Create the file

```text
access.js
```

### Step 2: Write the program

```javascript
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your role: ", function(role) {

    switch (role.toLowerCase()) {

        case "admin":
            console.log("Welcome, Administrator.");
            console.log("You can manage users and system settings.");
            break;

        case "editor":
            console.log("Welcome, Editor.");
            console.log("You can create and edit content.");
            break;

        case "viewer":
            console.log("Welcome, Viewer.");
            console.log("You can view available content.");
            break;

        default:
            console.log("Unknown role. Access denied.");

    }

    rl.close();

});
```

### Step 3: Understand the Program

**Receiving the role:**

```javascript
rl.question("Enter your role: ", function(role) {
```

Asks the user to enter their role.

**Converting the role to lowercase:**

```javascript
switch (role.toLowerCase())
```

The `.toLowerCase()` method converts the entered text into lowercase.

For example:

- `ADMIN` becomes `admin`.
- `Admin` becomes `admin`.
- `admin` remains `admin`.

This makes the comparison more consistent.

**Checking the administrator role:**

```javascript
case "admin":
```

If the entered role is `admin`, the administrator messages are displayed.

**Checking other roles:**

The editor and viewer cases work in the same way.

**Default case:**

If the role does not match any supported option, JavaScript executes the default block.

### Example Output

```text
Enter your role: admin

Welcome, Administrator.
You can manage users and system settings.
```

**Important security lesson:** This project only demonstrates conditional logic. A real access-control system must enforce permissions on the backend. Hiding or showing frontend options does not provide security by itself.

---

## PROJECT 4: Simple Login Eligibility Checker

### Objective

Build a program that checks whether a user meets basic login requirements.

The program should check:

- Username is not empty.
- Password is not empty.
- Account is active.

### Code

```javascript
let username = "brian";
let password = "12345";
let accountActive = true;

if (username.trim() === "") {

    console.log("Username is required.");

} else if (password.trim() === "") {

    console.log("Password is required.");

} else if (!accountActive) {

    console.log("Your account is inactive.");

} else {

    console.log("Login requirements satisfied.");

}
```

### Understanding the Logic

The program checks the requirements one at a time.

First:

```javascript
if (username.trim() === "")
```

Checks whether the username is empty.

Second:

```javascript
else if (password.trim() === "")
```

Checks whether the password is empty.

Third:

```javascript
else if (!accountActive)
```

Checks whether the account is inactive.

The `!` operator reverses the Boolean value.

If all three checks are passed, the final `else` block executes.

**Security note:** This does not authenticate a user. A real login system must verify credentials securely on the server, use password hashing, and apply appropriate session or token management.

---

## 5. Practical Exercises

Complete the following exercises.

### Exercise 1: Positive, Negative or Zero

Create a program that checks whether a number is:

- Positive.
- Negative.
- Zero.

Use `if...else if...else`.

### Exercise 2: Voting Eligibility

Create a program that stores a person's age.

If the age is 18 or above, display:

`You are eligible to vote.`

Otherwise, display:

`You are not eligible to vote.`

### Exercise 3: Student Grading System

Create a program that accepts marks and assigns grades using the following categories:

| Marks | Grade |
|---|---|
| 80–100 | A |
| 70–79 | B |
| 60–69 | C |
| 50–59 | D |
| Below 50 | Fail |

Reject marks outside the range of 0–100.

### Exercise 4: Day Selector

Use a `switch` statement to display the name of a day based on a number from 1 to 7.

For example:

```text
Input: 1
Output: Monday
```

### Exercise 5: Simple Calculator

Create a calculator that asks the user to select an operation:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Use a `switch` statement to perform the selected operation.

Make sure the program does not allow division by zero.

### Exercise 6: User Role Checker

Create a program that accepts a role and displays the permissions associated with that role.

Support:

- Admin.
- Manager.
- Employee.

Use `switch`.

### Exercise 7: Nested Conditions

Create a program that checks whether a student qualifies for an advanced course.

Requirements:

- The student must be at least 18.
- The student must have completed the beginner course.

Use nested `if` statements.

### Exercise 8: Challenge — Mini ATM

Build a small ATM program with these options:

1. Check balance.
2. Deposit money.
3. Withdraw money.
4. Exit.

Requirements:

- Start with an account balance of KSh 10,000.
- Reject invalid deposit amounts.
- Reject negative withdrawal amounts.
- Prevent withdrawals exceeding the balance.
- Display the updated balance after successful transactions.

Use a `switch` statement and conditional statements.

**Progress: Part 3 of 4**

---

# PART 4 OF 4 — KAI ASSESSMENT

## 1. Assessment Instructions

You have completed the lesson on JavaScript Conditional Statements.

This assessment tests your understanding of how programs make decisions using `if`, `else`, `else if`, and `switch`.

Answer all questions before submitting your work to Kai.

## SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is the main purpose of conditional statements?

A. To store data permanently.  
B. To make decisions based on conditions.  
C. To create variables only.  
D. To display images.

**Question 2**

Which keyword executes when an `if` condition is false?

A. `case`  
B. `break`  
C. `else`  
D. `switch`

**Question 3**

What happens when a condition in an `if...else if` chain evaluates to true?

A. Every remaining block executes.  
B. JavaScript executes the matching block and skips the remaining branches.  
C. The program always stops.  
D. JavaScript executes the default block.

**Question 4**

Which statement is most suitable when comparing one value against several fixed options?

A. `switch`  
B. `while`  
C. `for`  
D. `console.log`

**Question 5**

What is the purpose of `break` inside a switch statement?

A. To restart the program.  
B. To stop the current switch execution.  
C. To create a variable.  
D. To check whether a condition is true.

## SECTION B: CONCEPTUAL QUESTIONS

**Question 6**

Explain what a conditional statement is and give two real-world examples of where it can be used.

**Question 7**

Explain the difference between `if`, `if...else`, and `if...else if...else`.

**Question 8**

What is a nested conditional statement? Give an example of a situation where it would be useful.

**Question 9**

Explain the purpose of `switch`, `case`, `break`, and `default`.

**Question 10**

What is fall-through in a JavaScript switch statement? Why can forgetting `break` cause unexpected output?

**Question 11**

Explain the difference between using `if...else` and `switch`. When would you choose each?

## SECTION C: PRACTICAL PROGRAMMING

**Question 12**

Write a JavaScript program that checks whether a number is positive, negative, or zero.

**Question 13**

Write a student grading program that accepts marks and assigns grades using `if...else if...else`.

**Question 14**

Create a program using `switch` that accepts a number from 1 to 7 and displays the corresponding day of the week.

**Question 15**

Find and correct the mistake in the following program:

```javascript
let marks = 85;

if (marks >= 50) {
    console.log("Pass");
} else if (marks >= 80) {
    console.log("Grade A");
} else {
    console.log("Fail");
}
```

Explain why the original program does not produce the expected grade for a student scoring 85.

**Question 16**

Create a simple login eligibility checker.

The program should check whether:

- The username is not empty.
- The password is not empty.
- The account is active.

Display an appropriate message for each situation.

## 2. Submit Your Answers to Kai

After completing the assessment, submit your answers to Kai.

Kai should:

- Mark your multiple-choice answers.
- Evaluate your conceptual explanations.
- Review your JavaScript programs.
- Identify syntax and logical errors.
- Explain why incorrect solutions fail.
- Provide corrected code.
- Recommend additional practice based on your performance.

## 3. Lesson Completion Checklist

Before proceeding, make sure you can:

- Explain conditional statements.
- Write an `if` statement.
- Use `if...else`.
- Use `else if` for multiple conditions.
- Create nested conditional statements.
- Combine conditions using logical operators.
- Use the `switch` statement.
- Explain `case`, `break`, and `default`.
- Understand switch fall-through.
- Choose between `if...else` and `switch`.
- Use conditional statements in practical applications.

**PART 4 OF 4 — LESSON COMPLETE**

**NEXT LESSON: JavaScript Loops — `for`, `while`, and `do...while`.**