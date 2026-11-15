# C Programming: Control Flow

# PART 1 OF 4: Understanding Decision-Making in C

## 1. What Is Control Flow?

Control flow refers to the order in which instructions in a program are executed.

By default, C executes statements from top to bottom. However, real programs often need to make decisions or repeat certain instructions.

For example, imagine a student results management system.

The system might need to:

- Check whether a student has passed or failed.
- Determine whether someone is eligible to register.
- Calculate a discount depending on the purchase amount.
- Repeat a question until the user enters valid information.
- Display different messages depending on a user's choice.

These operations require control flow.

C provides several control flow structures:

| Structure | Purpose |
|---|---|
| `if` | Executes code when a condition is true |
| `if...else` | Chooses between two alternatives |
| `else if` | Checks multiple conditions |
| `switch` | Selects an action based on a value |
| `for` | Repeats instructions a known number of times |
| `while` | Repeats instructions while a condition remains true |
| `do...while` | Executes instructions at least once before checking a condition |
| `break` | Terminates a loop or exits a switch |
| `continue` | Skips the remaining statements in the current loop iteration |
| `goto` | Transfers execution to a labelled statement |

We will study these structures step by step.

---

## 2. Understanding Conditions

A condition is an expression that evaluates to either true or false.

In C, zero represents false, while a nonzero value represents true.

Example:

```c
int age = 20;

age >= 18
```

The condition evaluates to true because 20 is greater than or equal to 18.

Another example:

```c
int age = 15;

age >= 18
```

This condition evaluates to false.

Conditions are commonly created using comparison operators.

## 3. Comparison Operators

Comparison operators compare two values.

| Operator | Meaning | Example |
|---|---|---|
| `==` | Equal to | `a == b` |
| `!=` | Not equal to | `a != b` |
| `>` | Greater than | `a > b` |
| `<` | Less than | `a < b` |
| `>=` | Greater than or equal to | `a >= b` |
| `<=` | Less than or equal to | `a <= b` |

Example:

```c
#include <stdio.h>

int main(void) {
    int age = 20;

    printf("%d\n", age > 18);
    printf("%d\n", age < 18);
    printf("%d\n", age == 20);

    return 0;
}
```

### Line-by-line explanation

`#include <stdio.h>`

Provides the declaration for `printf()`.

`int main(void)`

Defines the main function.

`int age = 20;`

Creates an integer variable containing 20.

`printf("%d\n", age > 18);`

Checks whether age is greater than 18.

The condition is true, so C evaluates it to 1.

`printf("%d\n", age < 18);`

Checks whether age is less than 18.

The condition is false, so C evaluates it to 0.

`printf("%d\n", age == 20);`

Checks whether age equals 20.

The condition is true.

Expected output:

```text
1
0
1
```

In C, comparison expressions produce an integer result of either 0 or 1.

---

## 4. Logical Operators

Logical operators allow you to combine multiple conditions.

C provides three main logical operators.

| Operator | Name | Meaning |
|---|---|---|
| `&&` | Logical AND | Both conditions must be true |
| `||` | Logical OR | At least one condition must be true |
| `!` | Logical NOT | Reverses a condition's truth value |

### A. Logical AND (`&&`)

The AND operator returns true only when both conditions are true.

Example:

```c
int age = 22;
int hasID = 1;

if (age >= 18 && hasID == 1) {
    printf("Access granted.\n");
}
```

Explanation:

- `age >= 18` checks whether the person is at least 18.
- `hasID == 1` checks whether the person has an ID.
- `&&` requires both conditions to be true.
- If both conditions are true, the message is displayed.

### B. Logical OR (`||`)

The OR operator returns true if at least one condition is true.

Example:

```c
int hasTicket = 1;
int hasInvitation = 0;

if (hasTicket == 1 || hasInvitation == 1) {
    printf("You may enter.\n");
}
```

Explanation:

- The first condition is true.
- The second condition is false.
- Because OR requires only one true condition, the entire expression is true.

Expected output:

```text
You may enter.
```

### C. Logical NOT (`!`)

The NOT operator reverses the truth value of an expression.

Example:

```c
int isBlocked = 0;

if (!isBlocked) {
    printf("Account is active.\n");
}
```

Explanation:

- `isBlocked` contains 0, meaning false.
- `!isBlocked` reverses false into true.
- The program displays the message.

Expected output:

```text
Account is active.
```

### Logical Operator Truth Table

| A | B | A && B | A \|\| B |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 |

For NOT:

| A | !A |
|---|---|
| 0 | 1 |
| 1 | 0 |

**Important:** C uses short-circuit evaluation for `&&` and `||`. For `A && B`, if A is false, B is not evaluated. For `A || B`, if A is true, B is not evaluated.

---

## 5. The if Statement

The `if` statement executes a block of code only when a condition is true.

Syntax:

```c
if (condition) {
    // Statements to execute
}
```

Example:

```c
#include <stdio.h>

int main(void) {
    int age = 20;

    if (age >= 18) {
        printf("You are eligible to register.\n");
    }

    return 0;
}
```

### Explanation

`int age = 20;`

Creates a variable storing the age.

`if (age >= 18)`

Checks whether the age is at least 18.

`printf(...)`

Executes only if the condition is true.

Because the age is 20, the condition is true.

Expected output:

```text
You are eligible to register.
```

Now change:

```c
int age = 15;
```

The condition becomes false, so the program does not display the message.

### When is if useful?

The `if` statement is useful when an action should happen only under a particular condition.

Examples include:

- Checking whether a user has sufficient account balance.
- Checking whether a password is valid.
- Checking whether a student qualifies for an examination.
- Checking whether a file exists before processing it.

---

## 6. The if...else Statement

Sometimes a program needs to choose between two alternatives.

The `if...else` statement handles this situation.

Syntax:

```c
if (condition) {
    // Runs when condition is true
} else {
    // Runs when condition is false
}
```

Example: Checking whether a student has passed.

```c
#include <stdio.h>

int main(void) {
    int marks = 65;

    if (marks >= 50) {
        printf("You have passed.\n");
    } else {
        printf("You have failed.\n");
    }

    return 0;
}
```

### Line-by-line explanation

`int marks = 65;`

Stores the student's examination marks.

`if (marks >= 50)`

Checks whether the student scored at least 50.

`printf("You have passed.\n");`

Executes when the condition is true.

`else`

Defines the alternative path when the condition is false.

`printf("You have failed.\n");`

Executes when marks are below 50.

Expected output:

```text
You have passed.
```

If marks were 35, the output would be:

```text
You have failed.
```

Only one of the two branches executes.

---

## 7. The else if Statement

What happens when a program needs to evaluate more than two possible conditions?

For example, a university system may award different grades depending on examination marks.

We can use `else if`.

Syntax:

```c
if (condition1) {
    // First action
} else if (condition2) {
    // Second action
} else if (condition3) {
    // Third action
} else {
    // Default action
}
```

### Practical Example: Student Grading System

```c
#include <stdio.h>

int main(void) {
    int marks = 78;

    if (marks >= 80) {
        printf("Grade: A\n");
    } else if (marks >= 70) {
        printf("Grade: B\n");
    } else if (marks >= 60) {
        printf("Grade: C\n");
    } else if (marks >= 50) {
        printf("Grade: D\n");
    } else {
        printf("Grade: F\n");
    }

    return 0;
}
```

### Line-by-line explanation

`int marks = 78;`

Stores the examination score.

`if (marks >= 80)`

Checks whether the score is at least 80. It is false.

`else if (marks >= 70)`

Checks whether the score is at least 70. It is true.

`printf("Grade: B\n");`

Displays Grade B.

The remaining conditions are skipped because a matching branch has already been found.

Expected output:

```text
Grade: B
```

### Understanding the order of conditions

The order of conditions matters.

Consider:

```c
if (marks >= 50) {
    printf("Grade D\n");
} else if (marks >= 80) {
    printf("Grade A\n");
}
```

If marks are 90, the first condition is already true. The program displays Grade D.

The second condition is never checked.

A better arrangement is to check higher ranges first.

### Improved grading example with validation

```c
#include <stdio.h>

int main(void) {
    int marks = 85;

    if (marks < 0 || marks > 100) {
        printf("Invalid marks.\n");
    } else if (marks >= 80) {
        printf("Grade: A\n");
    } else if (marks >= 70) {
        printf("Grade: B\n");
    } else if (marks >= 60) {
        printf("Grade: C\n");
    } else if (marks >= 50) {
        printf("Grade: D\n");
    } else {
        printf("Grade: F\n");
    }

    return 0;
}
```

The first condition prevents marks outside the 0–100 range from being graded.

---

## 8. Nested if Statements

A nested `if` is an `if` statement placed inside another `if` statement.

It is useful when a second decision should only be considered after the first decision succeeds.

Example:

```c
#include <stdio.h>

int main(void) {
    int age = 22;
    int hasID = 1;

    if (age >= 18) {
        if (hasID == 1) {
            printf("Registration approved.\n");
        } else {
            printf("You need an ID.\n");
        }
    } else {
        printf("You are too young to register.\n");
    }

    return 0;
}
```

### Explanation

First, the program checks whether the age is at least 18.

If the person is an adult, it checks whether they have an ID.

If both requirements are satisfied, registration is approved.

If the person is an adult without an ID, the program requests an ID.

If the person is under 18, the inner condition is never reached.

Expected output:

```text
Registration approved.
```

### When are nested if statements useful?

- User authentication.
- Access-control systems.
- Registration processes.
- Banking applications.
- Eligibility checking.

Avoid unnecessary nesting when a simpler logical expression can make the program clearer.

---

## 9. The Conditional (Ternary) Operator

C provides a shorter way to select between two expressions.

This is called the conditional or ternary operator.

Syntax:

```c
condition ? expression_if_true : expression_if_false;
```

Example:

```c
#include <stdio.h>

int main(void) {
    int age = 20;

    const char *status = age >= 18 ? "Adult" : "Minor";

    printf("%s\n", status);

    return 0;
}
```

Explanation:

- `age >= 18` checks the age.
- `?` separates the condition from the true expression.
- `"Adult"` is selected if the condition is true.
- `:` separates the true and false expressions.
- `"Minor"` is selected if the condition is false.
- `status` stores a pointer to the selected string.

Expected output:

```text
Adult
```

The ternary operator is useful for simple decisions. For complicated logic, ordinary `if...else` statements are usually easier to read.

---

## Part 1 Practice

Answer these questions before continuing.

1. What is control flow in C?
2. What is a condition?
3. What does a comparison operator do?
4. What is the difference between `=` and `==`?
5. What is the purpose of `&&`?
6. What is the purpose of `||`?
7. Explain the difference between `if` and `if...else`.
8. Why is the order of `else if` conditions important?
9. What is a nested `if` statement?
10. What is the ternary operator?

**Progress: Part 1 of 4**

---

# PART 2 OF 4: Repetition and Looping Structures

## 10. What Are Loops?

A loop is a control flow structure that repeats a block of code.

Imagine writing a program that displays numbers from 1 to 100.

Without a loop, you would have to write 100 separate output statements.

That would be inefficient.

Instead, you can use a loop to repeat the same instruction automatically.

Loops are useful for:

- Processing lists of records.
- Repeating calculations.
- Displaying menus.
- Reading multiple user inputs.
- Searching through arrays.
- Running interactive applications.

C provides three main loop structures:

1. `for`
2. `while`
3. `do...while`

---

## 11. The for Loop

The `for` loop is commonly used when you know how many times an operation should repeat.

Syntax:

```c
for (initialization; condition; update) {
    // Repeated statements
}
```

The three main parts are:

| Component | Purpose |
|---|---|
| Initialization | Creates or initializes the loop variable |
| Condition | Determines whether the loop continues |
| Update | Changes the loop variable after each iteration |

### Example: Display Numbers from 1 to 5

```c
#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++) {
        printf("%d\n", i);
    }

    return 0;
}
```

### Line-by-line explanation

`for (int i = 1; i <= 5; i++)`

This creates the loop.

- `int i = 1` starts the counter at 1.
- `i <= 5` allows the loop to continue while i is at most 5.
- `i++` increases i by one after each iteration.

`printf("%d\n", i);`

Displays the current value of the counter.

### Understanding the execution

| Iteration | Value of i | Condition | Output |
|---|---:|---|---:|
| 1 | 1 | True | 1 |
| 2 | 2 | True | 2 |
| 3 | 3 | True | 3 |
| 4 | 4 | True | 4 |
| 5 | 5 | True | 5 |
| Next check | 6 | False | Stops |

Expected output:

```text
1
2
3
4
5
```

The loop stops when `i` becomes 6.

### Example: Counting Backwards

```c
#include <stdio.h>

int main(void) {
    for (int i = 5; i >= 1; i--) {
        printf("%d\n", i);
    }

    return 0;
}
```

Explanation:

- `int i = 5` starts at 5.
- `i >= 1` keeps the loop running until the counter falls below 1.
- `i--` decreases the counter by one each time.

Expected output:

```text
5
4
3
2
1
```

---

## 12. Calculating a Total Using a for Loop

Suppose a student has five examination scores.

We want to calculate their total.

Instead of adding the values manually, we can use a loop.

```c
#include <stdio.h>

int main(void) {
    int total = 0;

    for (int i = 1; i <= 5; i++) {
        int marks;

        printf("Enter marks for subject %d: ", i);

        if (scanf("%d", &marks) != 1) {
            printf("Invalid input.\n");
            return 1;
        }

        total += marks;
    }

    printf("Total marks: %d\n", total);

    return 0;
}
```

### Explanation

`int total = 0;`

Creates a variable that will accumulate the marks.

It starts at zero because no marks have been entered yet.

`for (int i = 1; i <= 5; i++)`

Repeats the input operation five times.

`int marks;`

Declares a variable for the current subject's marks.

`printf(...)`

Displays which subject the user is entering marks for.

`scanf("%d", &marks)`

Reads the entered integer and checks whether the conversion succeeded.

`total += marks;`

Adds the current marks to the running total.

This is equivalent to:

```c
total = total + marks;
```

Finally, the program displays the accumulated total.

Example interaction:

```text
Enter marks for subject 1: 70
Enter marks for subject 2: 80
Enter marks for subject 3: 65
Enter marks for subject 4: 90
Enter marks for subject 5: 75
Total marks: 380
```

This is an example of using a loop to process repeated user input.

---

## 13. The while Loop

The `while` loop repeats statements as long as its condition is true.

Syntax:

```c
while (condition) {
    // Repeated statements
}
```

Unlike a typical `for` loop, the initialization and update are written separately.

Example:

```c
#include <stdio.h>

int main(void) {
    int number = 1;

    while (number <= 5) {
        printf("%d\n", number);

        number++;
    }

    return 0;
}
```

### Line-by-line explanation

`int number = 1;`

Creates a counter starting at 1.

`while (number <= 5)`

Checks whether the counter is less than or equal to 5.

`printf("%d\n", number);`

Displays the current number.

`number++;`

Increases the counter by one.

The loop repeats until the condition becomes false.

Expected output:

```text
1
2
3
4
5
```

### Important: Infinite Loops

An infinite loop occurs when the loop never reaches a condition that stops it.

Incorrect example:

```c
int number = 1;

while (number <= 5) {
    printf("%d\n", number);
}
```

Why is this incorrect?

The variable `number` is never increased.

It remains 1, so `number <= 5` remains true forever.

Correct version:

```c
int number = 1;

while (number <= 5) {
    printf("%d\n", number);
    number++;
}
```

Always make sure a loop's state changes when necessary so that its stopping condition can eventually be reached.

---

## 14. Practical Example: Password Attempts

Imagine a system that allows a user to enter a password.

We can use a `while` loop to keep asking until the user enters the correct password.

For this beginner example, the password is a fixed integer PIN.

```c
#include <stdio.h>

int main(void) {
    int pin = 1234;
    int enteredPin;

    printf("Enter your PIN: ");

    if (scanf("%d", &enteredPin) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    while (enteredPin != pin) {
        printf("Incorrect PIN. Try again: ");

        if (scanf("%d", &enteredPin) != 1) {
            printf("Invalid input.\n");
            return 1;
        }
    }

    printf("Access granted.\n");

    return 0;
}
```

### Explanation

`int pin = 1234;`

Stores the correct PIN.

`int enteredPin;`

Stores the user's input.

The first `scanf()` reads the initial PIN attempt.

`while (enteredPin != pin)`

Checks whether the entered PIN differs from the correct PIN.

If it is incorrect, the loop asks the user to try again.

When the correct PIN is entered, the condition becomes false and the loop ends.

Expected interaction:

```text
Enter your PIN: 1111
Incorrect PIN. Try again: 2222
Incorrect PIN. Try again: 1234
Access granted.
```

This is a teaching example, not secure authentication. Real applications should not store passwords or PINs as plain text in source code.

---

## 15. The do...while Loop

The `do...while` loop is different from the `while` loop.

It executes the body first and checks the condition afterwards.

This means the loop always executes at least once.

Syntax:

```c
do {
    // Statements
} while (condition);
```

Notice the semicolon after the `while` condition.

Example:

```c
#include <stdio.h>

int main(void) {
    int number = 1;

    do {
        printf("%d\n", number);
        number++;
    } while (number <= 5);

    return 0;
}
```

### Explanation

`int number = 1;`

Initializes the counter.

`do`

Begins the loop body.

`printf("%d\n", number);`

Displays the current value.

`number++;`

Increases the counter.

`while (number <= 5);`

Checks whether the loop should repeat.

Expected output:

```text
1
2
3
4
5
```

### Important Difference Between while and do...while

Consider:

```c
int number = 10;

while (number < 5) {
    printf("Hello\n");
}
```

The condition is false immediately.

The message is never displayed.

Now consider:

```c
int number = 10;

do {
    printf("Hello\n");
} while (number < 5);
```

The message is displayed once before the condition is checked.

Expected output:

```text
Hello
```

### When should you use do...while?

It is particularly useful for:

- Menu-driven programs.
- Repeated user prompts.
- Programs that must perform an operation at least once.
- Input processes where the first attempt is mandatory.

---

## 16. Comparing the Three Loop Types

| Feature | for | while | do...while |
|---|---|---|---|
| Condition checked | Before each iteration | Before each iteration | After each iteration |
| Executes at least once? | No | No | Yes |
| Best suited for | Known repetitions | Condition-based repetition | At-least-once execution |
| Initialization location | Usually in loop header | Before loop | Before loop |
| Update location | Usually in loop header | Inside loop | Inside loop |

Example situations:

- Use `for` to display numbers from 1 to 100.
- Use `while` to keep reading data until a condition changes.
- Use `do...while` to display a menu at least once.

---

## 17. Nested Loops

A nested loop is a loop placed inside another loop.

Nested loops are useful when working with rows and columns, tables, patterns, and multidimensional data.

Example: Displaying a 3 × 3 number pattern.

```c
#include <stdio.h>

int main(void) {
    for (int row = 1; row <= 3; row++) {

        for (int column = 1; column <= 3; column++) {
            printf("* ");
        }

        printf("\n");
    }

    return 0;
}
```

### Line-by-line explanation

`for (int row = 1; row <= 3; row++)`

The outer loop controls the number of rows.

It runs three times.

`for (int column = 1; column <= 3; column++)`

The inner loop controls the number of columns.

For each row, it runs three times.

`printf("* ");`

Displays one asterisk for each inner-loop iteration.

`printf("\n");`

Moves to the next line after the inner loop finishes.

Expected output:

```text
* * *
* * *
* * *
```

### Understanding the execution

The outer loop starts with row 1.

The inner loop prints three asterisks.

Then the outer loop moves to row 2 and the inner loop starts again.

This continues until all three rows have been printed.

Nested loops are especially important when working with:
- Two-dimensional arrays.
- Matrix calculations.
- Tables.
- Pattern generation.
- Repeated comparisons.

---

## 18. The break Statement

The `break` statement immediately terminates the nearest enclosing loop or exits a `switch` statement.

Example:

```c
#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 10; i++) {

        if (i == 5) {
            break;
        }

        printf("%d\n", i);
    }

    return 0;
}
```

### Explanation

The loop starts at 1 and normally runs up to 10.

However:

```c
if (i == 5) {
    break;
}
```

Checks whether the counter has reached 5.

When it does, `break` immediately terminates the loop.

The `printf()` statement is not reached during that iteration.

Expected output:

```text
1
2
3
4
```

The loop does not display 5 because the `break` statement executes before `printf()`.

---

## 19. The continue Statement

The `continue` statement skips the remaining statements in the current iteration and proceeds to the next iteration.

Example:

```c
#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++) {

        if (i == 3) {
            continue;
        }

        printf("%d\n", i);
    }

    return 0;
}
```

### Explanation

The loop counts from 1 to 5.

When `i` becomes 3:

```c
continue;
```

Skips the remaining statements in that iteration.

Therefore, `printf()` is not executed for 3.

The loop continues with 4 and 5.

Expected output:

```text
1
2
4
5
```

### Difference Between break and continue

| Statement | Behavior |
|---|---|
| `break` | Ends the nearest loop entirely |
| `continue` | Skips the current iteration and continues looping |

---

## 20. Understanding the goto Statement

C also provides the `goto` statement.

It transfers execution to a labelled statement within the same function.

Example:

```c
#include <stdio.h>

int main(void) {
    int number = 1;

start:
    printf("%d\n", number);

    number++;

    if (number <= 3) {
        goto start;
    }

    return 0;
}
```

### Explanation

`start:`

Defines a label.

`printf("%d\n", number);`

Displays the current number.

`number++;`

Increases the number.

`goto start;`

Returns execution to the labelled statement when the condition is true.

Expected output:

```text
1
2
3
```

Although `goto` is part of C, it should generally be avoided in ordinary control-flow logic because it can make programs difficult to follow.

Loops are usually clearer alternatives.

---

## Part 2 Practice

1. What is a loop?
2. What are the three main loop types in C?
3. Explain the three components of a `for` loop.
4. What causes an infinite loop?
5. What is the main difference between `while` and `do...while`?
6. What is a nested loop?
7. What does `break` do?
8. What does `continue` do?
9. What is the difference between `break` and `continue`?
10. Why is `goto` generally avoided in normal program logic?

**Progress: Part 2 of 4**

---

# PART 3 OF 4: Practical Control Flow Projects

In this section, we will combine decisions and loops to create more realistic C applications.

## 21. Preparing the Project

Create a folder:

```text
C_Control_Flow_Project
```

Create the following files:

```text
C_Control_Flow_Project/
│
├── grading.c
├── calculator.c
├── multiplication.c
├── menu.c
└── login.c
```

Each file will contain a separate practical program.

Compile a program with:

```bash
gcc -std=c17 -Wall -Wextra -pedantic grading.c -o grading
```

Run it using:

```bash
./grading
```

On Windows PowerShell:

```powershell
.\grading.exe
```

---

## 22. Practical Project 1: Examination Grading System

### Objective

Build a program that accepts a student's marks and determines their grade.

Requirements:

- Accept marks from the user.
- Reject marks below 0 or above 100.
- Determine the grade using conditional statements.
- Display the result.

Code:

```c
#include <stdio.h>

int main(void) {
    int marks;

    printf("Enter your examination marks: ");

    if (scanf("%d", &marks) != 1) {
        printf("Invalid input. Enter a whole number.\n");
        return 1;
    }

    if (marks < 0 || marks > 100) {
        printf("Invalid marks. Enter a value from 0 to 100.\n");
    } else if (marks >= 80) {
        printf("Grade: A\n");
    } else if (marks >= 70) {
        printf("Grade: B\n");
    } else if (marks >= 60) {
        printf("Grade: C\n");
    } else if (marks >= 50) {
        printf("Grade: D\n");
    } else {
        printf("Grade: F\n");
    }

    return 0;
}
```

### Line-by-line explanation

`int marks;`

Declares a variable for the student's marks.

`scanf("%d", &marks) != 1`

Attempts to read an integer and checks whether exactly one conversion succeeded.

If the input is not a valid integer, the program reports an error and exits.

`if (marks < 0 || marks > 100)`

Checks whether the marks fall outside the permitted range.

The OR operator is used because either condition makes the marks invalid.

`else if (marks >= 80)`

Checks whether the student qualifies for Grade A.

The following `else if` statements check lower grade boundaries.

`else`

Handles the remaining valid scores below 50.

### Example interaction

```text
Enter your examination marks: 85
Grade: A
```

Another example:

```text
Enter your examination marks: 45
Grade: F
```

Another example:

```text
Enter your examination marks: 120
Invalid marks. Enter a value from 0 to 100.
```

### What you have learned

You have combined:

- User input.
- Comparison operators.
- Logical operators.
- `if`.
- `else if`.
- `else`.
- Input validation.

---

## 23. Practical Project 2: Simple Calculator Using switch

### Objective

Create a calculator that performs addition, subtraction, multiplication, and division.

We will use the `switch` statement to select the operation.

Code:

```c
#include <stdio.h>

int main(void) {
    double num1;
    double num2;
    char operation;

    printf("Enter first number: ");

    if (scanf("%lf", &num1) != 1) {
        printf("Invalid first number.\n");
        return 1;
    }

    printf("Enter an operator (+, -, *, /): ");

    if (scanf(" %c", &operation) != 1) {
        printf("Invalid operator input.\n");
        return 1;
    }

    printf("Enter second number: ");

    if (scanf("%lf", &num2) != 1) {
        printf("Invalid second number.\n");
        return 1;
    }

    switch (operation) {
        case '+':
            printf("Result: %.2f\n", num1 + num2);
            break;

        case '-':
            printf("Result: %.2f\n", num1 - num2);
            break;

        case '*':
            printf("Result: %.2f\n", num1 * num2);
            break;

        case '/':
            if (num2 == 0.0) {
                printf("Error: Cannot divide by zero.\n");
            } else {
                printf("Result: %.2f\n", num1 / num2);
            }
            break;

        default:
            printf("Invalid operator.\n");
    }

    return 0;
}
```

### Understanding the program

First, we declare two numeric variables and one character variable.

```c
double num1;
double num2;
char operation;
```

The two `double` variables store the numbers.

The `char` variable stores the mathematical operator.

### Reading the input

```c
scanf("%lf", &num1);
```

Reads a double-precision floating-point value.

```c
scanf(" %c", &operation);
```

Reads the selected operator.

The leading space tells `scanf()` to skip whitespace before reading the character.

### Understanding switch

```c
switch (operation)
```

Evaluates the value stored in `operation`.

If the operator is `+`, the addition case executes.

If it is `-`, subtraction executes.

If it is `*`, multiplication executes.

If it is `/`, division executes.

### Understanding break

Each case ends with `break`.

This prevents execution from falling through into the following case.

### Understanding default

The `default` branch executes if none of the cases match.

### Why do we check for zero before division?

The program checks:

```c
if (num2 == 0.0)
```

before performing division.

This avoids an invalid mathematical operation in the calculator.

For floating-point arithmetic, division by zero has implementation-defined aspects and can produce infinity or NaN on common implementations. This program deliberately rejects it rather than relying on those results.

### Example interaction

```text
Enter first number: 20
Enter an operator (+, -, *, /): *
Enter second number: 5
Result: 100.00
```

---

## 24. Practical Project 3: Multiplication Table Generator

### Objective

Create a program that accepts a number and displays its multiplication table.

Code:

```c
#include <stdio.h>

int main(void) {
    int number;

    printf("Enter a number: ");

    if (scanf("%d", &number) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    printf("\nMultiplication Table of %d\n", number);

    for (int i = 1; i <= 12; i++) {
        printf("%d x %d = %d\n", number, i, number * i);
    }

    return 0;
}
```

### Line-by-line explanation

`int number;`

Declares a variable to store the user's chosen number.

`scanf("%d", &number)`

Reads the number.

The `if` statement checks whether input conversion succeeded.

`for (int i = 1; i <= 12; i++)`

Creates a loop that repeats twelve times.

`number * i`

Multiplies the chosen number by the current counter.

`printf(...)`

Displays the multiplication result.

### Example interaction

```text
Enter a number: 5

Multiplication Table of 5
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
5 x 11 = 55
5 x 12 = 60
```

### What you have learned

You used a `for` loop to automate repetitive mathematical operations.

This is useful in educational software, scientific calculations, and data processing.

---

## 25. Practical Project 4: Menu-Driven Application

Many applications display menus that allow users to select operations.

Examples include:

- Banking applications.
- Point-of-sale systems.
- Student management systems.
- Inventory management systems.
- Command-line utilities.

Let's build a simple menu.

Code:

```c
#include <stdio.h>

int main(void) {
    int choice;

    do {
        printf("\n===== MAIN MENU =====\n");
        printf("1. View Profile\n");
        printf("2. View Balance\n");
        printf("3. Exit\n");

        printf("Choose an option: ");

        if (scanf("%d", &choice) != 1) {
            printf("Invalid input.\n");
            return 1;
        }

        switch (choice) {
            case 1:
                printf("Displaying your profile...\n");
                break;

            case 2:
                printf("Your balance is KSh 5,000.\n");
                break;

            case 3:
                printf("Thank you for using the application.\n");
                break;

            default:
                printf("Invalid menu option.\n");
        }

    } while (choice != 3);

    return 0;
}
```

### Line-by-line explanation

`int choice;`

Stores the option selected by the user.

`do {`

Begins a loop that executes at least once.

The program displays the menu.

```c
printf("1. View Profile\n");
printf("2. View Balance\n");
printf("3. Exit\n");
```

These statements display the available options.

`scanf("%d", &choice)`

Reads the selected option.

`switch (choice)`

Determines which menu operation to execute.

If the user chooses 1, the profile message is displayed.

If the user chooses 2, the balance message is displayed.

If the user chooses 3, the exit message is displayed.

`while (choice != 3);`

Repeats the menu while the user has not selected option 3.

### Example interaction

```text
===== MAIN MENU =====
1. View Profile
2. View Balance
3. Exit
Choose an option: 1
Displaying your profile...

===== MAIN MENU =====
1. View Profile
2. View Balance
3. Exit
Choose an option: 2
Your balance is KSh 5,000.

===== MAIN MENU =====
1. View Profile
2. View Balance
3. Exit
Choose an option: 3
Thank you for using the application.
```

### What makes this project important?

You have combined:

- `do...while`.
- `switch`.
- `case`.
- `break`.
- User input.
- Repeated menu display.

This is the foundation of many command-line applications.

Note: This version exits when the user enters non-numeric input. A production-quality menu should recover from invalid input and continue displaying the menu.

---

## 26. Practical Project 5: Login Attempt System

### Objective

Create a simple login system that allows a maximum of three attempts.

Code:

```c
#include <stdio.h>

int main(void) {
    int correctPin = 4321;
    int enteredPin;
    int attempts = 0;
    int maxAttempts = 3;

    while (attempts < maxAttempts) {
        printf("Enter your PIN: ");

        if (scanf("%d", &enteredPin) != 1) {
            printf("Invalid input.\n");
            return 1;
        }

        if (enteredPin == correctPin) {
            printf("Login successful.\n");
            return 0;
        } else {
            attempts++;

            printf("Incorrect PIN.\n");
            printf("Attempts remaining: %d\n",
                   maxAttempts - attempts);
        }
    }

    printf("Account temporarily locked.\n");

    return 0;
}
```

### Line-by-line explanation

```c
int correctPin = 4321;
```

Stores the correct PIN for this demonstration.

```c
int enteredPin;
```

Stores the PIN entered by the user.

```c
int attempts = 0;
```

Counts failed attempts.

```c
int maxAttempts = 3;
```

Defines the maximum number of allowed attempts.

```c
while (attempts < maxAttempts)
```

Continues while the number of failed attempts is less than three.

```c
if (enteredPin == correctPin)
```

Checks whether the entered PIN matches the stored PIN.

If it matches, the program displays success and terminates.

```c
attempts++;
```

Increases the failed-attempt counter.

```c
maxAttempts - attempts
```

Calculates the number of attempts remaining.

After three unsuccessful attempts, the loop ends.

The program then displays the lock message.

### Example interaction

```text
Enter your PIN: 1111
Incorrect PIN.
Attempts remaining: 2

Enter your PIN: 2222
Incorrect PIN.
Attempts remaining: 1

Enter your PIN: 4321
Login successful.
```

### Important security lesson

This is only a control-flow exercise.

Real authentication systems require:
- Secure password hashing.
- Proper credential storage.
- Rate limiting.
- Secure session management.
- Protection against automated guessing.
- Appropriate account-lockout policies.

---

## 27. Practical Project 6: Number Classification

### Objective

Create a program that accepts a number and determines whether it is:

- Positive.
- Negative.
- Zero.
- Even or odd, if it is not zero.

Code:

```c
#include <stdio.h>

int main(void) {
    int number;

    printf("Enter an integer: ");

    if (scanf("%d", &number) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (number > 0) {
        printf("The number is positive.\n");
    } else if (number < 0) {
        printf("The number is negative.\n");
    } else {
        printf("The number is zero.\n");
    }

    if (number != 0) {
        if (number % 2 == 0) {
            printf("The number is even.\n");
        } else {
            printf("The number is odd.\n");
        }
    }

    return 0;
}
```

### Explanation

The first decision determines whether the number is positive, negative, or zero.

The second decision checks whether the number is nonzero.

If it is nonzero, the nested `if` statement uses the remainder operator.

```c
number % 2 == 0
```

If dividing the number by 2 leaves a remainder of zero, it is even.

Otherwise, it is odd.

Example:

```text
Enter an integer: 14
The number is positive.
The number is even.
```

Another example:

```text
Enter an integer: -7
The number is negative.
The number is odd.
```

---

## 28. Debugging Control Flow

Understanding errors is an important part of becoming a good programmer.

### Problem 1: Incorrect condition

Incorrect code:

```c
int age = 20;

if (age = 18) {
    printf("Adult\n");
}
```

What is wrong?

The programmer used `=` instead of `==`.

`=` assigns a value.

`==` compares two values.

Correct version:

```c
if (age >= 18) {
    printf("Adult\n");
}
```

### Problem 2: Incorrect loop condition

Incorrect code:

```c
for (int i = 1; i >= 5; i++) {
    printf("%d\n", i);
}
```

What is wrong?

The counter starts at 1, but the condition requires it to be at least 5.

The condition is false immediately.

Correct version:

```c
for (int i = 1; i <= 5; i++) {
    printf("%d\n", i);
}
```

### Problem 3: Infinite loop

Incorrect code:

```c
int i = 1;

while (i <= 5) {
    printf("%d\n", i);
}
```

What is wrong?

The variable `i` never changes.

Correct version:

```c
int i = 1;

while (i <= 5) {
    printf("%d\n", i);
    i++;
}
```

### Problem 4: Missing break in switch

Incorrect code:

```c
switch (choice) {
    case 1:
        printf("Profile\n");

    case 2:
        printf("Balance\n");

    default:
        printf("Invalid choice\n");
}
```

What is wrong?

Without `break`, execution can fall through into the following cases.

Correct version:

```c
switch (choice) {
    case 1:
        printf("Profile\n");
        break;

    case 2:
        printf("Balance\n");
        break;

    default:
        printf("Invalid choice\n");
}
```

---

## 29. Independent Practical Exercises

Complete these programs without copying the previous examples.

### Exercise 1: Age Eligibility Checker

Write a program that accepts a user's age.

Requirements:

- If age is below 18, display "Not eligible".
- If age is 18 or above, display "Eligible".
- Reject negative ages.

### Exercise 2: Number Counter

Write a program using a `for` loop that displays numbers from 1 to 50.

### Exercise 3: Sum of Even Numbers

Write a program that calculates the sum of even numbers from 1 to 100.

Hint:

Use a loop and check:

```c
if (number % 2 == 0)
```

### Exercise 4: Multiplication Table

Write a program that accepts a number and displays its multiplication table from 1 to 20.

### Exercise 5: Menu Application

Create a menu with these options:

1. Calculate square of a number.
2. Calculate cube of a number.
3. Exit.

Use `switch` and `do...while`.

### Exercise 6: Login System

Create a login system that allows three attempts.

Requirements:

- Store a demonstration username and password.
- Ask the user to enter their credentials.
- Compare the entered credentials with the stored ones.
- Display successful or unsuccessful login messages.
- Stop after three unsuccessful attempts.

For real password strings, use character arrays and `strcmp()` from `<string.h>` rather than comparing strings with `==`.

### Exercise 7: Debugging

Correct the following program:

```c
#include <stdio.h>

int main(void) {
    int number = 1;

    while (number <= 5) {
        printf("%d\n", number);
    }

    return 0;
}
```

Explain why the original program does not terminate.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## C Programming: Control Flow

Welcome to your assessment.

This assessment evaluates your ability to make decisions, repeat instructions, use loops, select operations, and solve programming problems using C control flow.

Answer all questions and submit your practical programs to Kai for evaluation.

## Section A: Multiple Choice Questions

**Question 1**

What is control flow?

A. The process of installing a compiler.  
B. The order in which instructions execute in a program.  
C. The process of creating variables.  
D. A method of storing information.

**Question 2**

Which statement executes code only when a condition is true?

A. `for`  
B. `switch`  
C. `if`  
D. `break`

**Question 3**

Which operator checks whether two values are equal?

A. `=`  
B. `==`  
C. `!=`  
D. `>=`

**Question 4**

What does the logical AND operator `&&` require?

A. At least one condition to be true.  
B. Both conditions to be true.  
C. Both conditions to be false.  
D. No condition to be evaluated.

**Question 5**

Which loop is guaranteed to execute at least once?

A. `for`  
B. `while`  
C. `do...while`  
D. None of them.

**Question 6**

Which loop is commonly used when the number of repetitions is known?

A. `for`  
B. `switch`  
C. `if`  
D. `goto`

**Question 7**

What does `break` do inside a loop?

A. Skips one iteration.  
B. Restarts the loop.  
C. Terminates the nearest enclosing loop.  
D. Increases the loop counter.

**Question 8**

What does `continue` do?

A. Terminates the entire program.  
B. Skips the rest of the current iteration.  
C. Ends all loops.  
D. Repeats the current statement forever.

**Question 9**

Which statement is used to select among multiple constant cases based on an expression?

A. `if`  
B. `switch`  
C. `while`  
D. `continue`

**Question 10**

What is an infinite loop?

A. A loop that executes exactly once.  
B. A loop that never starts.  
C. A loop that does not reach a stopping condition.  
D. A loop that contains a `break` statement.

## Section B: Short Answer Questions

**Question 11**

Explain the difference between `if` and `if...else`.

**Question 12**

What is the purpose of an `else if` statement?

**Question 13**

Explain the difference between logical AND (`&&`) and logical OR (`||`).

**Question 14**

What is the difference between `while` and `do...while`?

**Question 15**

Explain how a nested loop works.

**Question 16**

What is the difference between `break` and `continue`?

**Question 17**

What is short-circuit evaluation in C?

**Question 18**

Why should `goto` generally be avoided in ordinary program logic?

## Section C: Predict the Output

**Question 19**

Study this program:

```c
#include <stdio.h>

int main(void) {
    int number = 10;

    if (number > 5) {
        printf("A\n");
    } else {
        printf("B\n");
    }

    return 0;
}
```

What is the output? Explain why.

**Question 20**

Study the program:

```c
#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 4; i++) {
        printf("%d ", i);
    }

    return 0;
}
```

Write the exact output.

**Question 21**

Study the program:

```c
#include <stdio.h>

int main(void) {
    int i = 1;

    while (i <= 5) {
        if (i == 3) {
            i++;
            continue;
        }

        printf("%d ", i);
        i++;
    }

    return 0;
}
```

What is the output? Explain why 3 is not displayed.

**Question 22**

Study the program:

```c
#include <stdio.h>

int main(void) {
    int number = 7;

    if (number > 10) {
        printf("Large\n");
    } else if (number > 5) {
        printf("Medium\n");
    } else {
        printf("Small\n");
    }

    return 0;
}
```

What is the output?

**Question 23**

Study the program:

```c
#include <stdio.h>

int main(void) {
    int i = 1;

    do {
        printf("%d ", i);
        i++;
    } while (i <= 3);

    return 0;
}
```

What is the output? How many times does the loop execute?

## Section D: Practical Programming Questions

**Question 24: Grade Calculator**

Write a C program that accepts examination marks and assigns grades using these rules:

- 80–100: A
- 70–79: B
- 60–69: C
- 50–59: D
- Below 50: F

Your program must reject marks outside the range 0–100.

**Question 25: Number Sum Calculator**

Write a program using a loop to calculate the sum of all integers from 1 to 100.

Display the final sum.

**Question 26: Even and Odd Checker**

Write a program that accepts an integer and determines whether it is even or odd.

**Question 27: Menu-Driven Calculator**

Create a calculator using `switch`.

It should support:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Your program should also handle invalid operators and prevent division by zero.

**Question 28: Login Attempts**

Write a program that gives the user three opportunities to enter the correct PIN.

If the PIN is correct, display a success message.

If all attempts fail, display an account-lock message.

**Question 29: Multiplication Table**

Write a program that accepts a number and uses a loop to display its multiplication table from 1 to 12.

## Section E: Final Practical Challenge

### Project: Student Management and Results System

Build a command-line student management program using the control flow structures covered in this lesson.

Your program should display the following menu:

```text
================================
      STUDENT MANAGEMENT
================================

1. Register Student
2. Calculate Student Grade
3. Display Grading Information
4. Exit

Choose an option:
```

### Requirements

**1. Menu system**

Use a `do...while` loop to repeatedly display the menu.

**2. Menu selection**

Use `switch` to execute the selected operation.

**3. Student registration**

Ask for:
- Student name.
- Student age.
- Student registration number.

Validate the age so that it is not negative.

**4. Grade calculation**

Accept examination marks and calculate the grade using `if`, `else if`, and `else`.

**5. Input validation**

Reject marks below 0 or above 100.

**6. Repetition**

Allow the user to return to the main menu after completing an operation.

**7. Exit**

Terminate the program when the user selects option 4.

### Example interaction

```text
================================
      STUDENT MANAGEMENT
================================

1. Register Student
2. Calculate Student Grade
3. Display Grading Information
4. Exit

Choose an option: 2

Enter examination marks: 85

Student Grade: A

================================
      STUDENT MANAGEMENT
================================

1. Register Student
2. Calculate Student Grade
3. Display Grading Information
4. Exit

Choose an option: 4

Thank you for using the system.
```

### Technical requirements

- Use meaningful variable names.
- Use appropriate data types.
- Use `if`, `else if`, and `else`.
- Use `switch`.
- Use `do...while`.
- Use at least one `for` or `while` loop where appropriate.
- Include comments explaining important operations.
- Check input conversions.
- Compile the program using GCC.
- Test valid and invalid inputs.

### Important programming challenge

For a more advanced version, store multiple students in an array of structures and use loops to display their records.

You will explore structures and arrays in later lessons.

## Submission to Kai

Submit your answers to Questions 1–29 and your completed Student Management and Results System.

Kai should evaluate your work using these criteria:

| Assessment area | What is evaluated |
|---|---|
| Control flow concepts | Understanding of execution order |
| Conditional statements | Correct use of `if`, `else`, and `switch` |
| Logical expressions | Correct use of comparison and logical operators |
| Looping | Correct use of `for`, `while`, and `do...while` |
| Loop control | Appropriate use of `break` and `continue` |
| Problem-solving | Ability to translate requirements into code |
| Debugging | Identification and correction of control flow errors |
| Final project | Correct implementation of the student management system |

## Lesson Completion Checklist

Before moving to the next lesson, confirm that you can:

- [ ] Explain control flow.
- [ ] Use comparison operators.
- [ ] Combine conditions using logical operators.
- [ ] Write `if` statements.
- [ ] Write `if...else` statements.
- [ ] Use multiple `else if` conditions.
- [ ] Create nested conditional statements.
- [ ] Use the ternary operator.
- [ ] Create `for` loops.
- [ ] Create `while` loops.
- [ ] Create `do...while` loops.
- [ ] Work with nested loops.
- [ ] Use `switch` statements.
- [ ] Apply `break` and `continue`.
- [ ] Identify infinite loops.
- [ ] Build menu-driven applications.
- [ ] Debug control flow errors.

**Part 4 of 4 — Lesson Complete**

**Next recommended lesson: C Programming: Functions and Reusable Code**