# C++: Control Flow

## Learning Objectives

By the end of this lesson, you should be able to:

1. Explain control flow and why it is important in programming.
2. Understand sequential execution.
3. Use `if`, `else if`, and `else` statements.
4. Apply nested conditional statements.
5. Use the `switch` statement for multiple choices.
6. Understand and use `for`, `while`, and `do-while` loops.
7. Control loops using `break` and `continue`.
8. Avoid infinite loops and common control-flow errors.
9. Build practical C++ programs that use decision-making and repetition.

# PART 1 OF 4: UNDERSTANDING CONTROL FLOW

## 1. What Is Control Flow?

Control flow refers to the order in which instructions are executed in a program.

When a program runs, the computer needs to know:

- Which instruction should execute first?
- Should a particular instruction execute?
- Should the program repeat an instruction?
- Should the program skip some instructions?
- When should the program stop executing a particular section?

Control flow provides the structures that answer these questions.

Consider a banking application.

When a user attempts to withdraw money, the application must make decisions:

1. Check whether the account exists.
2. Check whether the account has sufficient funds.
3. If sufficient funds exist, process the withdrawal.
4. Otherwise, reject the transaction.

Without control flow, the application would not know how to respond differently to different situations.

## 2. Types of Control Flow

C++ provides several structures for controlling program execution.

| Control structure | Purpose |
|---|---|
| Sequential execution | Executes instructions one after another. |
| Conditional statements | Make decisions based on conditions. |
| Loops | Repeat instructions. |
| Jump statements | Change the normal execution path. |

Let's understand each category.

## 3. Sequential Execution

Sequential execution means that instructions execute in the order in which they appear.

Consider this program:

```cpp
#include <iostream>

int main() {
    int number1 = 10;
    int number2 = 20;

    int total = number1 + number2;

    std::cout << total;

    return 0;
}
```

### Explanation

**Line 1:**

```cpp
#include <iostream>
```

Includes the input/output library.

**Line 2:**

```cpp
int main() {
```

Defines the main function.

**Line 3:**

```cpp
int number1 = 10;
```

Creates the first integer variable.

**Line 4:**

```cpp
int number2 = 20;
```

Creates the second integer variable.

**Line 5:**

```cpp
int total = number1 + number2;
```

Adds the two numbers and stores the result in `total`.

**Line 6:**

```cpp
std::cout << total;
```

Displays the calculated result.

**Final line:**

```cpp
return 0;
```

Indicates successful program completion.

Output:

```text
30
```

The instructions execute from top to bottom. This is sequential execution.

However, real applications often need more than sequential execution. They need to make decisions.

# 4. Conditional Statements

Conditional statements allow a program to execute different instructions depending on whether a condition is true or false.

For example, imagine a university grading system.

The application might use these rules:

- Marks of 70 and above: Grade A.
- Marks of 60–69: Grade B.
- Marks of 50–59: Grade C.
- Marks below 50: Fail.

The application must evaluate the student's marks and choose the appropriate result.

C++ provides several conditional structures.

## 5. The `if` Statement

The `if` statement executes a block of code only when a specified condition is true.

### Syntax

```cpp
if (condition) {
    // Code executes if condition is true
}
```

Example:

```cpp
#include <iostream>

int main() {
    int age = 20;

    if (age >= 18) {
        std::cout << "You are eligible to vote.";
    }

    return 0;
}
```

### Explanation

**Line 1:**

```cpp
int age = 20;
```

Creates an integer variable containing the value 20.

**Line 2:**

```cpp
if (age >= 18) {
```

Checks whether the person's age is greater than or equal to 18.

The `>=` operator compares the two values.

Since 20 is greater than 18, the condition evaluates to `true`.

**Line 3:**

```cpp
std::cout << "You are eligible to vote.";
```

Because the condition is true, this statement executes.

Output:

```text
You are eligible to vote.
```

### What if the condition is false?

Consider:

```cpp
int age = 15;

if (age >= 18) {
    std::cout << "You are eligible to vote.";
}
```

The condition is false.

Therefore, the message is not displayed.

The program continues to the next instruction after the `if` block.

## 6. Comparison Operators

Conditional statements frequently use comparison operators.

These operators compare two values and produce a Boolean result.

| Operator | Meaning | Example |
|---|---|---|
| `==` | Equal to | `age == 18` |
| `!=` | Not equal to | `age != 18` |
| `>` | Greater than | `age > 18` |
| `<` | Less than | `age < 18` |
| `>=` | Greater than or equal to | `age >= 18` |
| `<=` | Less than or equal to | `age <= 18` |

Example:

```cpp
int number = 10;

std::cout << (number > 5);
```

The condition is true because 10 is greater than 5.

By default, the output is:

```text
1
```

You can display the word `true` instead:

```cpp
std::cout << std::boolalpha << (number > 5);
```

Output:

```text
true
```

### Important: `=` and `==` are different

This is one of the most common mistakes made by beginners.

Assignment:

```cpp
int age = 20;
```

The `=` operator assigns a value.

Comparison:

```cpp
age == 20
```

The `==` operator checks whether two values are equal.

These operators perform different tasks.

## 7. The `if-else` Statement

Sometimes a program needs to execute one block when a condition is true and another block when it is false.

The `if-else` statement handles this situation.

### Syntax

```cpp
if (condition) {
    // Executes if condition is true
}
else {
    // Executes if condition is false
}
```

Example:

```cpp
#include <iostream>

int main() {
    int age = 16;

    if (age >= 18) {
        std::cout << "You are an adult.";
    }
    else {
        std::cout << "You are a minor.";
    }

    return 0;
}
```

### Explanation

The program checks whether `age` is at least 18.

Since the age is 16, the condition is false.

Therefore, the `else` block executes.

Output:

```text
You are a minor.
```

Only one of the two blocks executes.

## 8. The `else if` Statement

What happens when a program has more than two possible outcomes?

For example, a grading system may have five different results.

Using several separate `if` statements is possible, but `else if` creates a clear decision chain.

### Syntax

```cpp
if (condition1) {
    // First result
}
else if (condition2) {
    // Second result
}
else if (condition3) {
    // Third result
}
else {
    // Default result
}
```

Example:

```cpp
#include <iostream>

int main() {
    int marks = 75;

    if (marks >= 70) {
        std::cout << "Grade A";
    }
    else if (marks >= 60) {
        std::cout << "Grade B";
    }
    else if (marks >= 50) {
        std::cout << "Grade C";
    }
    else {
        std::cout << "Fail";
    }

    return 0;
}
```

### Explanation

The program evaluates conditions from top to bottom.

First:

```cpp
if (marks >= 70)
```

Checks whether marks are at least 70.

The condition is true because the student scored 75.

Therefore, the program displays:

```text
Grade A
```

The remaining conditions are skipped.

### Why is the order important?

Suppose you write:

```cpp
if (marks >= 50) {
    std::cout << "Grade C";
}
else if (marks >= 70) {
    std::cout << "Grade A";
}
```

For a student scoring 75, the first condition is already true.

The program displays Grade C and never checks the second condition.

Therefore, conditions should be arranged carefully.

For grading systems, it is usually best to check the highest range first.

## 9. Nested `if` Statements

A nested `if` statement is an `if` statement placed inside another `if` statement.

It is useful when one decision depends on another decision.

Consider a university registration system.

A student may register for a course only if:

1. The student has an active account.
2. The student has paid the required fees.

Example:

```cpp
#include <iostream>

int main() {
    bool accountActive = true;
    bool feesPaid = true;

    if (accountActive) {

        if (feesPaid) {
            std::cout << "Registration successful.";
        }
        else {
            std::cout << "Please pay your fees.";
        }

    }
    else {
        std::cout << "Your account is inactive.";
    }

    return 0;
}
```

### Explanation

The first condition checks whether the account is active.

```cpp
if (accountActive)
```

Because the value is true, the program enters the first block.

Inside that block, another condition is evaluated:

```cpp
if (feesPaid)
```

Since fees have been paid, the program displays:

```text
Registration successful.
```

If the account were inactive, the inner condition would never be checked.

Nested conditions are useful when decisions depend on earlier decisions.

However, too many nested conditions can make programs difficult to understand. Later, you will learn ways to simplify complex conditions.

## 10. Logical Operators

Logical operators allow you to combine multiple conditions.

C++ provides three main logical operators.

| Operator | Name | Meaning |
|---|---|---|
| `&&` | Logical AND | All conditions must be true. |
| `||` | Logical OR | At least one condition must be true. |
| `!` | Logical NOT | Reverses a Boolean value. |

### A. Logical AND (`&&`)

The AND operator returns true only when both conditions are true.

Example:

```cpp
int age = 22;
bool hasID = true;

if (age >= 18 && hasID) {
    std::cout << "Access granted.";
}
```

The program checks:

- Is the age at least 18?
- Does the user have identification?

Both conditions must be true.

Truth table:

| Condition A | Condition B | A && B |
|---|---|---|
| True | True | True |
| True | False | False |
| False | True | False |
| False | False | False |

### B. Logical OR (`||`)

The OR operator returns true when at least one condition is true.

Example:

```cpp
bool isStudent = true;
bool isStaff = false;

if (isStudent || isStaff) {
    std::cout << "You qualify for campus access.";
}
```

The user qualifies because at least one condition is true.

Truth table:

| Condition A | Condition B | A \|\| B |
|---|---|---|
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | False |

### C. Logical NOT (`!`)

The NOT operator reverses a Boolean value.

Example:

```cpp
bool isBlocked = false;

if (!isBlocked) {
    std::cout << "You can continue.";
}
```

Since `isBlocked` is false, `!isBlocked` becomes true.

The program displays:

```text
You can continue.
```

### Real-world application

An authentication system might use:

```cpp
if (usernameCorrect && passwordCorrect) {
    std::cout << "Login successful.";
}
else {
    std::cout << "Invalid login details.";
}
```

Both conditions must be satisfied before login succeeds.

**Security note:** This is a simplified illustration. Real authentication systems must verify credentials securely, use password hashing, and protect against other attacks.

## 11. Part 1 Summary

You have learned:

- Sequential execution.
- Conditional execution.
- `if` statements.
- `if-else` statements.
- `else if` chains.
- Nested conditions.
- Comparison operators.
- Logical operators.

These structures allow a program to make decisions based on information.

### Part 1 Knowledge Check

1. What is control flow?
2. What is sequential execution?
3. What happens when an `if` condition evaluates to false?
4. What is the difference between `if` and `if-else`?
5. Why is the order of `else if` conditions important?
6. What is a nested `if` statement?
7. What does the `&&` operator do?
8. What is the difference between `&&` and `||`?
9. What does the `!` operator do?
10. Explain the difference between `=` and `==`.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: SWITCH STATEMENTS AND LOOPS

Conditional statements help programs make decisions. However, sometimes we need to repeat instructions.

For example:

- A program may need to display numbers from 1 to 100.
- A banking application may repeatedly ask for a transaction.
- A login system may allow several attempts.
- A menu-driven application may continue running until the user chooses to exit.

C++ provides loops for these situations.

## 1. The `switch` Statement

The `switch` statement is used when a program needs to select one action from several possible options based on a value.

Imagine an application menu:

1. View balance.
2. Deposit money.
3. Withdraw money.
4. Exit.

A `switch` statement can handle these choices.

### Syntax

```cpp
switch (expression) {
    case value1:
        // Instructions
        break;

    case value2:
        // Instructions
        break;

    default:
        // Default instructions
}
```

### Example

```cpp
#include <iostream>

int main() {
    int choice = 2;

    switch (choice) {

        case 1:
            std::cout << "View balance";
            break;

        case 2:
            std::cout << "Deposit money";
            break;

        case 3:
            std::cout << "Withdraw money";
            break;

        case 4:
            std::cout << "Exit";
            break;

        default:
            std::cout << "Invalid choice";
    }

    return 0;
}
```

### Explanation

The variable `choice` contains 2.

The switch statement evaluates that value.

It checks the available cases:

- `case 1` does not match.
- `case 2` matches.
- The corresponding message is displayed.
- `break` terminates the switch statement.

Output:

```text
Deposit money
```

### What does `break` do here?

The `break` statement exits the switch structure.

Without it, execution can continue into subsequent case labels. This behaviour is called fall-through.

For example:

```cpp
switch (choice) {
    case 1:
        std::cout << "One ";

    case 2:
        std::cout << "Two ";

    default:
        std::cout << "Other";
}
```

If `choice` is 1, the program displays:

```text
One Two Other
```

This happens because there are no `break` statements.

Fall-through can sometimes be intentional, but it should be used carefully.

### The `default` Case

The `default` block executes when none of the specified cases match.

For example, if `choice` is 9, the program displays:

```text
Invalid choice
```

The `switch` statement is particularly useful for menu-driven programs.

**Important:** Traditional `switch` statements support integral and enumeration values, including characters. They do not directly support `std::string` cases.

## 2. The Ternary Operator

C++ also provides a shorter way to make simple conditional decisions.

It is called the conditional or ternary operator.

Its symbol is:

```cpp
? :
```

### Syntax

```cpp
condition ? value_if_true : value_if_false;
```

Example:

```cpp
#include <iostream>

int main() {
    int age = 20;

    std::string result = (age >= 18) ? "Adult" : "Minor";

    std::cout << result;

    return 0;
}
```

Explanation:

The condition checks whether age is at least 18.

If true, the expression returns `"Adult"`.

If false, it returns `"Minor"`.

Since the age is 20, the output is:

```text
Adult
```

The ternary operator is useful for short decisions.

Avoid using deeply nested ternary expressions because they can make code difficult to read.

# 3. Understanding Loops

A loop is a control structure that repeats a block of instructions while a specified condition allows it to continue.

Consider a program that displays numbers from 1 to 5.

Without loops, you might write:

```cpp
std::cout << 1 << "\n";
std::cout << 2 << "\n";
std::cout << 3 << "\n";
std::cout << 4 << "\n";
std::cout << 5 << "\n";
```

This works, but it is repetitive.

A loop can perform the same operation more efficiently.

C++ provides three main loop structures:

1. `for` loop.
2. `while` loop.
3. `do-while` loop.

## 4. The `for` Loop

A `for` loop is commonly used when the number of repetitions is known or can be controlled using a counter.

### Syntax

```cpp
for (initialization; condition; update) {
    // Instructions to repeat
}
```

There are three important components.

| Component | Purpose |
|---|---|
| Initialization | Creates or initializes the loop counter. |
| Condition | Determines whether the loop continues. |
| Update | Changes the counter after each iteration. |

### Example: Display Numbers 1 to 5

```cpp
#include <iostream>

int main() {

    for (int i = 1; i <= 5; i++) {
        std::cout << i << "\n";
    }

    return 0;
}
```

### Understanding the loop

**Initialization:**

```cpp
int i = 1;
```

Creates a counter variable and starts it at 1.

**Condition:**

```cpp
i <= 5;
```

Checks whether the counter is less than or equal to 5.

If true, the loop body executes.

**Loop body:**

```cpp
std::cout << i << "\n";
```

Displays the current counter value.

**Update:**

```cpp
i++;
```

Increases the counter by one.

### Execution process

| Iteration | Value of `i` | Condition | Output |
|---|---:|---|---:|
| 1 | 1 | True | 1 |
| 2 | 2 | True | 2 |
| 3 | 3 | True | 3 |
| 4 | 4 | True | 4 |
| 5 | 5 | True | 5 |
| 6 | 6 | False | Stops |

Expected output:

```text
1
2
3
4
5
```

The loop stops when `i` becomes 6 because the condition is no longer true.

## 5. Understanding Increment and Decrement

The `for` loop frequently uses increment and decrement operators.

### Increment (`++`)

Increases a variable by one.

```cpp
int number = 5;

number++;

std::cout << number;
```

Output:

```text
6
```

### Decrement (`--`)

Decreases a variable by one.

```cpp
int number = 5;

number--;

std::cout << number;
```

Output:

```text
4
```

### Other ways to update variables

```cpp
number += 2;
number -= 2;
number *= 2;
number /= 2;
```

These operators are useful when controlling loops.

## 6. The `while` Loop

A `while` loop repeats instructions as long as its condition remains true.

It is useful when the number of repetitions is not necessarily known in advance.

### Syntax

```cpp
while (condition) {
    // Instructions to repeat
}
```

### Example: Display Numbers 1 to 5

```cpp
#include <iostream>

int main() {
    int number = 1;

    while (number <= 5) {

        std::cout << number << "\n";

        number++;
    }

    return 0;
}
```

### Explanation

First:

```cpp
int number = 1;
```

Creates the counter and initializes it to 1.

Next:

```cpp
while (number <= 5)
```

Checks whether the counter is still within the required range.

If true, the loop body executes.

Then:

```cpp
std::cout << number << "\n";
```

Displays the current number.

Finally:

```cpp
number++;
```

Increases the counter.

The condition is checked again.

This process continues until the condition becomes false.

Output:

```text
1
2
3
4
5
```

### Important: The condition is checked first

A `while` loop might execute zero times if its condition is initially false.

Example:

```cpp
int number = 10;

while (number < 5) {
    std::cout << number;
}
```

The condition is false from the beginning.

Therefore, the loop body never executes.

## 7. The `do-while` Loop

The `do-while` loop is similar to the `while` loop.

However, it checks its condition after executing the loop body.

This means it always executes at least once.

### Syntax

```cpp
do {
    // Instructions to execute
}
while (condition);
```

Notice the semicolon after the `while` condition.

### Example

```cpp
#include <iostream>

int main() {
    int number = 10;

    do {
        std::cout << number << "\n";

        number++;

    } while (number < 5);

    return 0;
}
```

### Explanation

The program initializes `number` to 10.

It enters the `do` block immediately and displays 10.

Next, the value increases to 11.

Only after that does the program check:

```cpp
number < 5
```

The condition is false.

The loop stops.

Output:

```text
10
```

Even though the condition was false from the beginning, the loop body executed once.

### When should you use `do-while`?

It is useful when an operation must happen at least once.

For example, a program may need to display a menu before asking the user whether they want to continue.

## 8. Comparing the Three Main Loops

| Feature | `for` | `while` | `do-while` |
|---|---|---|---|
| Condition checked | Before execution | Before execution | After execution |
| Minimum executions | Zero | Zero | One |
| Common use | Known repetition | Condition-controlled repetition | At least one execution |
| Initialization | Often inside loop | Usually before loop | Usually before loop |
| Update | Often inside loop header | Usually inside body | Usually inside body |

### Choosing the correct loop

Use a `for` loop when counting through a known range.

Use a `while` loop when repetition depends on a condition.

Use a `do-while` loop when the body must execute at least once.

All three loops can often solve the same problem. The choice should make the program easier to understand.

## 9. Infinite Loops

An infinite loop is a loop that continues indefinitely because its stopping condition is never reached.

Example:

```cpp
int number = 1;

while (number <= 5) {
    std::cout << number << "\n";
}
```

What is wrong?

The counter is never increased.

The value remains 1.

Therefore, the condition `number <= 5` always remains true.

The loop never stops.

### Corrected version

```cpp
int number = 1;

while (number <= 5) {
    std::cout << number << "\n";

    number++;
}
```

Now the counter increases after each iteration.

The loop eventually terminates.

**Important:** Infinite loops are sometimes intentional, particularly in servers and event-driven applications. However, they must have a suitable exit mechanism or stopping condition.

## 10. The `break` Statement

The `break` statement immediately terminates the nearest enclosing loop or switch statement.

Example:

```cpp
#include <iostream>

int main() {

    for (int i = 1; i <= 10; i++) {

        if (i == 5) {
            break;
        }

        std::cout << i << "\n";
    }

    return 0;
}
```

### Explanation

The loop starts at 1.

Each iteration checks whether `i` is equal to 5.

When `i` reaches 5, the condition becomes true.

The `break` statement terminates the loop immediately.

Output:

```text
1
2
3
4
```

The number 5 is not displayed because the `break` statement executes before the output statement.

## 11. The `continue` Statement

The `continue` statement skips the remaining instructions in the current loop iteration and proceeds to the next iteration.

Example:

```cpp
#include <iostream>

int main() {

    for (int i = 1; i <= 5; i++) {

        if (i == 3) {
            continue;
        }

        std::cout << i << "\n";
    }

    return 0;
}
```

### Explanation

The loop starts at 1 and continues up to 5.

When `i` becomes 3, the condition is true.

The `continue` statement skips the output statement for that iteration.

The loop then proceeds to the next iteration.

Output:

```text
1
2
4
5
```

The number 3 is skipped, but the loop continues.

### Difference between `break` and `continue`

| Statement | Behaviour |
|---|---|
| `break` | Terminates the nearest enclosing loop. |
| `continue` | Skips the current iteration and continues with the next one. |

## 12. Nested Loops

A nested loop is a loop placed inside another loop.

Nested loops are useful for working with:

- Tables.
- Matrices.
- Grids.
- Multiplication tables.
- Two-dimensional data.

Example:

```cpp
#include <iostream>

int main() {

    for (int row = 1; row <= 3; row++) {

        for (int column = 1; column <= 3; column++) {

            std::cout << row << "," << column << "   ";
        }

        std::cout << "\n";
    }

    return 0;
}
```

### Understanding the program

The outer loop controls the rows.

```cpp
for (int row = 1; row <= 3; row++)
```

It runs three times.

The inner loop controls the columns.

```cpp
for (int column = 1; column <= 3; column++)
```

For every outer-loop iteration, the inner loop runs three times.

The output statement:

```cpp
std::cout << row << "," << column << "   ";
```

Displays the current row and column values.

The newline statement:

```cpp
std::cout << "\n";
```

Moves to the next output row after the inner loop finishes.

Expected output:

```text
1,1   1,2   1,3
2,1   2,2   2,3
3,1   3,2   3,3
```

Notice that the inner loop completes all its iterations before the outer loop moves to its next iteration.

## 13. Part 2 Summary

You have learned:

- `switch` statements.
- The ternary operator.
- `for` loops.
- `while` loops.
- `do-while` loops.
- Increment and decrement.
- Infinite loops.
- `break` and `continue`.
- Nested loops.

### Part 2 Knowledge Check

1. What is a `switch` statement?
2. What is the purpose of `break` inside a switch?
3. What is the default case?
4. What does the ternary operator do?
5. What are the three components of a `for` loop?
6. What is the main difference between a `while` loop and a `do-while` loop?
7. What is an infinite loop?
8. What is the difference between `break` and `continue`?
9. What is a nested loop?
10. Give one real-world application of loops.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL C++ CONTROL FLOW PROJECTS

In this section, you will use control flow to develop programs that make decisions and repeat operations.

You will build a grading system, a calculator, a login attempt system, and a menu-driven banking application.

## 1. Preparing Your Project

Create a folder:

```text
cpp-control-flow
```

Inside it, create:

```text
cpp-control-flow/
    main.cpp
```

Open `main.cpp` in your code editor.

## 2. Practical Project One: Student Grading System

### Project description

A school needs a program that determines a student's grade based on examination marks.

The grading rules are:

| Marks | Grade |
|---|---|
| 70–100 | A |
| 60–69 | B |
| 50–59 | C |
| 40–49 | D |
| Below 40 | Fail |

The program should accept marks from the user and display the appropriate grade.

### Complete code

```cpp
#include <iostream>

int main() {
    double marks;

    std::cout << "Enter student marks: ";
    std::cin >> marks;

    if (marks < 0 || marks > 100) {
        std::cout << "Invalid marks entered.";
    }
    else if (marks >= 70) {
        std::cout << "Grade: A";
    }
    else if (marks >= 60) {
        std::cout << "Grade: B";
    }
    else if (marks >= 50) {
        std::cout << "Grade: C";
    }
    else if (marks >= 40) {
        std::cout << "Grade: D";
    }
    else {
        std::cout << "Grade: Fail";
    }

    return 0;
}
```

### Line-by-line explanation

**Line 1:**

```cpp
#include <iostream>
```

Provides input and output functionality.

**Line 2:**

```cpp
int main() {
```

Defines the main function.

**Line 3:**

```cpp
double marks;
```

Creates a variable to store examination marks.

We use `double` to allow decimal values.

**Line 4:**

```cpp
std::cout << "Enter student marks: ";
```

Asks the user to enter their marks.

**Line 5:**

```cpp
std::cin >> marks;
```

Receives the entered value.

**Line 6:**

```cpp
if (marks < 0 || marks > 100)
```

Checks whether the marks are outside the allowed range.

The `||` operator means that either condition can make the entire expression true.

If marks are negative or greater than 100, the program displays an error message.

**Following conditions:**

```cpp
else if (marks >= 70)
```

Checks whether the student scored at least 70.

If true, the grade is A.

The next condition checks whether marks are at least 60.

Because the higher range has already been checked, this represents marks from 60 up to, but not including, 70.

The remaining conditions work in the same way.

**Final `else`:**

```cpp
else {
    std::cout << "Grade: Fail";
}
```

Handles all remaining valid marks below 40.

### Example execution

```text
Enter student marks: 85
Grade: A
```

Another example:

```text
Enter student marks: 55
Grade: C
```

Another example:

```text
Enter student marks: 120
Invalid marks entered.
```

### What you learned

You used:

- User input.
- Variables.
- Comparison operators.
- Logical OR.
- `if`.
- `else if`.
- `else`.

This is a simple example of decision-making in school management software.

**Note:** The grading rules are illustrative. Actual institutions may use different grading policies.

## 3. Practical Project Two: Simple Calculator Using `switch`

### Project description

Build a calculator that allows users to perform:

1. Addition.
2. Subtraction.
3. Multiplication.
4. Division.

The user chooses an operation, enters two numbers, and receives the result.

### Complete code

```cpp
#include <iostream>

int main() {
    double number1, number2;
    char operation;

    std::cout << "Enter first number: ";
    std::cin >> number1;

    std::cout << "Enter operator (+, -, *, /): ";
    std::cin >> operation;

    std::cout << "Enter second number: ";
    std::cin >> number2;

    switch (operation) {

        case '+':
            std::cout << "Result: " << number1 + number2;
            break;

        case '-':
            std::cout << "Result: " << number1 - number2;
            break;

        case '*':
            std::cout << "Result: " << number1 * number2;
            break;

        case '/':
            if (number2 != 0) {
                std::cout << "Result: " << number1 / number2;
            }
            else {
                std::cout << "Error: Cannot divide by zero.";
            }
            break;

        default:
            std::cout << "Invalid operator.";
    }

    return 0;
}
```

### Understanding the code

First:

```cpp
double number1, number2;
char operation;
```

Creates two numeric variables and one character variable.

The numbers are stored as `double` because calculations may produce decimal results.

The operator is stored as a character.

Next, the program accepts the first number, operator, and second number.

For example:

```text
Enter first number: 20
Enter operator (+, -, *, /): +
Enter second number: 10
```

The switch statement examines the operator.

If the user enters `+`, this case executes:

```cpp
case '+':
    std::cout << "Result: " << number1 + number2;
    break;
```

It adds the numbers and displays the result.

If the user enters `-`, subtraction is performed.

If the user enters `*`, multiplication is performed.

If the user enters `/`, the program first checks whether the second number is zero.

### Why check for zero?

Division by zero is not a valid arithmetic operation in ordinary real-number arithmetic.

The program therefore checks:

```cpp
if (number2 != 0)
```

If the second number is not zero, division proceeds.

Otherwise, an error message is displayed.

### Example output

```text
Enter first number: 20
Enter operator (+, -, *, /): *
Enter second number: 5
Result: 100
```

### What you learned

This project demonstrates how `switch` statements can simplify applications with multiple menu options.

You also learned how to combine `switch` with an `if` statement.

## 4. Practical Project Three: Login Attempt System

### Project description

Create a simple login system that allows a user three attempts to enter a correct PIN.

If the user enters the correct PIN, access is granted.

If all three attempts fail, access is denied.

### Complete code

```cpp
#include <iostream>

int main() {
    const int correctPin = 1234;

    int enteredPin;
    int attempts = 0;

    while (attempts < 3) {

        std::cout << "Enter your PIN: ";
        std::cin >> enteredPin;

        if (enteredPin == correctPin) {
            std::cout << "Access granted.";
            break;
        }
        else {
            attempts++;

            std::cout << "Incorrect PIN.\n";

            if (attempts < 3) {
                std::cout << "Attempts remaining: "
                          << 3 - attempts << "\n";
            }
        }
    }

    if (attempts == 3 && enteredPin != correctPin) {
        std::cout << "Access denied. Too many attempts.";
    }

    return 0;
}
```

### Understanding the program

**Line 1:**

```cpp
const int correctPin = 1234;
```

Creates a constant containing the correct PIN.

Because it is declared using `const`, its value cannot be reassigned.

**Line 2:**

```cpp
int enteredPin;
```

Stores the PIN entered by the user.

**Line 3:**

```cpp
int attempts = 0;
```

Tracks how many incorrect attempts have been made.

**Line 4:**

```cpp
while (attempts < 3)
```

Keeps the login process running while fewer than three incorrect attempts have occurred.

**Line 5:**

```cpp
std::cin >> enteredPin;
```

Accepts the user's PIN.

**Line 6:**

```cpp
if (enteredPin == correctPin)
```

Compares the entered PIN with the correct PIN.

If they match, access is granted.

**Line 7:**

```cpp
break;
```

Immediately exits the loop after successful authentication.

**Incorrect PIN branch:**

```cpp
attempts++;
```

Increases the number of failed attempts.

Then the program displays how many attempts remain.

**Final condition:**

```cpp
if (attempts == 3 && enteredPin != correctPin)
```

Checks whether the user has exhausted all attempts without entering the correct PIN.

If both conditions are true, access is denied.

### Example execution: Successful login

```text
Enter your PIN: 1111
Incorrect PIN.
Attempts remaining: 2

Enter your PIN: 1234
Access granted.
```

### Example execution: Failed login

```text
Enter your PIN: 1111
Incorrect PIN.
Attempts remaining: 2

Enter your PIN: 2222
Incorrect PIN.
Attempts remaining: 1

Enter your PIN: 3333
Incorrect PIN.
Access denied. Too many attempts.
```

### Important security limitation

This is a teaching example, not a production authentication system.

Real authentication systems should never store sensitive PINs in plain text. They need secure credential storage, rate limiting, appropriate logging, and protections against automated attacks.

## 5. Practical Project Four: Multiplication Table Generator

### Project description

Build a program that asks the user for a number and generates its multiplication table from 1 to 10.

### Complete code

```cpp
#include <iostream>

int main() {
    int number;

    std::cout << "Enter a number: ";
    std::cin >> number;

    for (int i = 1; i <= 10; i++) {

        std::cout << number << " x " << i
                  << " = " << number * i << "\n";
    }

    return 0;
}
```

### Explanation

First:

```cpp
int number;
```

Creates a variable to store the number entered by the user.

Next:

```cpp
std::cin >> number;
```

Accepts the number.

Then:

```cpp
for (int i = 1; i <= 10; i++)
```

Creates a loop that starts at 1 and continues up to 10.

For each iteration, the program calculates:

```cpp
number * i
```

The result is displayed alongside the multiplication expression.

### Example execution

```text
Enter a number: 5

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

This is an example of using a `for` loop when the number of repetitions is known.

## 6. Practical Project Five: Menu-Driven Banking Application

Now let's combine several control-flow structures into one program.

### Project description

Create a small banking application that allows a user to:

1. Check their balance.
2. Deposit money.
3. Withdraw money.
4. Exit the application.

The application should continue displaying the menu until the user chooses to exit.

### Complete code

```cpp
#include <iostream>

int main() {
    double balance = 5000.0;

    int choice;

    do {
        std::cout << "\n===== BANKING MENU =====\n";
        std::cout << "1. Check Balance\n";
        std::cout << "2. Deposit Money\n";
        std::cout << "3. Withdraw Money\n";
        std::cout << "4. Exit\n";

        std::cout << "Choose an option: ";
        std::cin >> choice;

        switch (choice) {

            case 1:
                std::cout << "Current Balance: "
                          << balance << "\n";
                break;

            case 2: {
                double deposit;

                std::cout << "Enter deposit amount: ";
                std::cin >> deposit;

                if (deposit > 0) {
                    balance += deposit;

                    std::cout << "Deposit successful.\n";
                }
                else {
                    std::cout << "Invalid deposit amount.\n";
                }

                break;
            }

            case 3: {
                double withdrawal;

                std::cout << "Enter withdrawal amount: ";
                std::cin >> withdrawal;

                if (withdrawal <= 0) {
                    std::cout << "Invalid withdrawal amount.\n";
                }
                else if (withdrawal <= balance) {
                    balance -= withdrawal;

                    std::cout << "Withdrawal successful.\n";
                }
                else {
                    std::cout << "Insufficient funds.\n";
                }

                break;
            }

            case 4:
                std::cout << "Thank you for banking with us.\n";
                break;

            default:
                std::cout << "Invalid menu option.\n";
        }

    } while (choice != 4);

    return 0;
}
```

### Understanding the application

This program combines several concepts.

**Initial balance:**

```cpp
double balance = 5000.0;
```

Creates a variable to store the account balance.

**Menu loop:**

```cpp
do {
```

Begins a `do-while` loop.

This ensures that the menu appears at least once.

**Menu options:**

The `std::cout` statements display the available actions.

**User choice:**

```cpp
std::cin >> choice;
```

Accepts the selected menu option.

**Switch statement:**

```cpp
switch (choice)
```

Determines which banking operation should execute.

### Option 1: Check balance

```cpp
case 1:
    std::cout << "Current Balance: " << balance << "\n";
    break;
```

Displays the current balance.

The balance is not changed.

### Option 2: Deposit money

```cpp
double deposit;
```

Creates a variable to store the deposit amount.

The program asks the user to enter an amount.

Then:

```cpp
if (deposit > 0)
```

Checks whether the amount is positive.

If valid:

```cpp
balance += deposit;
```

Adds the deposit to the existing balance.

Otherwise, an error message is displayed.

### Option 3: Withdraw money

The program first accepts the withdrawal amount.

It then checks three possible situations.

**First condition:**

```cpp
if (withdrawal <= 0)
```

Rejects zero or negative amounts.

**Second condition:**

```cpp
else if (withdrawal <= balance)
```

Checks whether the account has enough money.

If sufficient funds exist:

```cpp
balance -= withdrawal;
```

Subtracts the withdrawal amount from the balance.

**Final `else`:**

If the withdrawal is greater than the available balance, the program displays an insufficient funds message.

### Option 4: Exit

```cpp
case 4:
    std::cout << "Thank you for banking with us.\n";
    break;
```

Displays an exit message.

The `do-while` loop checks:

```cpp
while (choice != 4);
```

When the user chooses 4, the condition becomes false and the loop terminates.

### Example execution

```text
===== BANKING MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Choose an option: 1

Current Balance: 5000

===== BANKING MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Choose an option: 2

Enter deposit amount: 2000
Deposit successful.

===== BANKING MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Choose an option: 1

Current Balance: 7000

===== BANKING MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Choose an option: 4

Thank you for banking with us.
```

### Important design detail: Why are there curly braces after some cases?

For example:

```cpp
case 2: {
    double deposit;

    // Deposit instructions

    break;
}
```

The braces create a local scope for the variable `deposit`.

This prevents problems associated with declaring variables directly across switch labels and makes it easier to keep each case's variables separate.

### Production improvements

A real banking application would need more features:

- Input validation.
- Secure user authentication.
- Transaction records.
- Database storage.
- Currency handling with appropriate decimal precision.
- Transaction limits.
- Error handling.
- Protection against invalid or interrupted operations.

The current application is an educational demonstration of control flow.

## 7. Common Control-Flow Errors

### Error 1: Using assignment instead of comparison

Incorrect:

```cpp
int age = 20;

if (age = 18) {
    std::cout << "Eligible";
}
```

The expression assigns 18 to `age`. The resulting integer value is then treated as true.

Correct:

```cpp
if (age == 18) {
    std::cout << "Eligible";
}
```

Use `==` when comparing values.

### Error 2: Forgetting to update a loop counter

Incorrect:

```cpp
int i = 1;

while (i <= 5) {
    std::cout << i;
}
```

The counter never changes, so the loop never ends.

Correct:

```cpp
int i = 1;

while (i <= 5) {
    std::cout << i << "\n";
    i++;
}
```

### Error 3: Forgetting `break` in a switch

Incorrect:

```cpp
switch (choice) {
    case 1:
        std::cout << "One";

    case 2:
        std::cout << "Two";
}
```

The program may execute more than one case because of fall-through.

Correct:

```cpp
switch (choice) {
    case 1:
        std::cout << "One";
        break;

    case 2:
        std::cout << "Two";
        break;
}
```

### Error 4: Incorrect condition order

Incorrect:

```cpp
if (marks >= 40) {
    std::cout << "Pass";
}
else if (marks >= 70) {
    std::cout << "Excellent";
}
```

A score of 85 satisfies the first condition, so the second condition is never reached.

Correct:

```cpp
if (marks >= 70) {
    std::cout << "Excellent";
}
else if (marks >= 40) {
    std::cout << "Pass";
}
```

### Error 5: Forgetting the semicolon after `do-while`

Incorrect:

```cpp
do {
    std::cout << "Hello";
}
while (false)
```

Correct:

```cpp
do {
    std::cout << "Hello";
}
while (false);
```

The `do-while` statement ends with a semicolon.

### Error 6: Creating an accidental infinite loop with `continue`

Consider:

```cpp
int i = 0;

while (i < 5) {
    if (i == 2) {
        continue;
    }

    std::cout << i;
    i++;
}
```

When `i` becomes 2, `continue` skips the increment statement.

The value remains 2 forever.

Correct version:

```cpp
int i = 0;

while (i < 5) {
    int current = i;
    i++;

    if (current == 2) {
        continue;
    }

    std::cout << current << "\n";
}
```

Now the counter is updated before the `continue` statement can skip the remaining instructions.

## 8. Part 3 Practical Exercises

Complete these exercises in your C++ editor.

### Exercise 1: Positive, Negative or Zero

Write a program that asks a user to enter a number.

Determine whether the number is:

- Positive.
- Negative.
- Zero.

Use `if`, `else if`, and `else`.

### Exercise 2: Even or Odd

Write a program that accepts an integer and determines whether it is even or odd.

Hint:

Use the modulus operator `%`.

A number is even if its remainder after division by 2 is zero.

### Exercise 3: Number Counter

Write a `for` loop that displays numbers from 1 to 100.

Modify the program to display only even numbers.

### Exercise 4: Multiplication Tables

Write a program that asks the user for a number and displays its multiplication table from 1 to 12.

Use a `for` loop.

### Exercise 5: Password Attempts

Create a simple program that gives a user three attempts to enter a correct password.

Display:

- Access granted when the password is correct.
- An incorrect password message after a failed attempt.
- Access denied after three failed attempts.

Use a loop and conditional statements.

### Exercise 6: Menu-Driven Calculator

Create a calculator with the following menu:

```text
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
```

The program should continue running until the user selects option 5.

Use a `do-while` loop and a `switch` statement.

### Exercise 7: Debugging

Identify and correct the errors in this program:

```cpp
#include <iostream>

int main() {

    int number = 1;

    while (number <= 10) {

        if (number = 5) {
            break;
        }

        std::cout << number << "\n";
    }

    return 0;
}
```

Explain:

1. Why the condition is incorrect.
2. Why the loop may not behave as intended.
3. How to correct the program.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## Assessment Introduction

You have completed the lesson on C++ Control Flow.

This assessment evaluates your ability to make decisions, repeat instructions, and control the execution of C++ programs.

Answer the questions independently.

Kai will assess your understanding, code accuracy, and ability to explain your solutions.

# SECTION A: MULTIPLE-CHOICE QUESTIONS

Choose the correct answer.

**Question 1**

What does control flow determine?

A. The colour of the program interface.

B. The order in which program instructions execute.

C. The size of variables.

D. The name of the compiler.

**Question 2**

Which statement is used to execute code only when a condition is true?

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

What does the `else` block do?

A. Repeats a loop.

B. Executes when the preceding `if` condition is false and no earlier branch has matched.

C. Terminates the program.

D. Declares a variable.

**Question 5**

Which logical operator requires both conditions to be true?

A. `||`

B. `!`

C. `&&`

D. `==`

**Question 6**

Which statement is commonly used to select an action from multiple fixed choices?

A. `switch`

B. `while`

C. `continue`

D. `sizeof`

**Question 7**

Which loop always executes its body at least once?

A. `for`

B. `while`

C. `do-while`

D. None of them

**Question 8**

What does the `break` statement do inside a loop?

A. Restarts the loop.

B. Skips only one instruction.

C. Terminates the nearest enclosing loop.

D. Increases the loop counter.

**Question 9**

What does `continue` do?

A. Terminates the entire program.

B. Skips the remaining instructions in the current iteration.

C. Stops all loops permanently.

D. Repeats the current instruction forever.

**Question 10**

Which loop is generally suitable when the number of iterations is known?

A. `for`

B. `switch`

C. `if`

D. `break`

# SECTION B: CONCEPTUAL QUESTIONS

Answer using clear explanations.

**Question 11**

Explain the meaning of control flow in C++ and why it is important.

**Question 12**

Differentiate between:

- `if`
- `if-else`
- `else if`

**Question 13**

Explain the difference between the assignment operator `=` and the equality operator `==`.

**Question 14**

Explain the difference between the logical AND operator (`&&`) and logical OR operator (`||`).

**Question 15**

Compare the `for`, `while`, and `do-while` loops.

Your answer should explain when each loop is appropriate.

**Question 16**

What is an infinite loop? Give an example and explain how to correct it.

**Question 17**

Differentiate between `break` and `continue`.

**Question 18**

What is a nested loop? Give an example of where nested loops are useful in real software applications.

# SECTION C: PRACTICAL PROGRAMMING QUESTIONS

Write complete C++ programs for the following tasks.

**Question 19: Even or Odd Checker**

Write a program that:

1. Accepts an integer from the user.
2. Checks whether the number is even or odd.
3. Displays the appropriate message.

Use the modulus operator and a conditional statement.

**Question 20: Student Grading Application**

Create a program that accepts a student's marks and assigns a grade using the following rules:

| Marks | Grade |
|---|---|
| 70–100 | A |
| 60–69 | B |
| 50–59 | C |
| 40–49 | D |
| Below 40 | Fail |

Reject marks outside the range of 0–100.

**Question 21: Multiplication Table**

Write a program that accepts a number and displays its multiplication table from 1 to 12.

Use a `for` loop.

**Question 22: Login Attempt System**

Create a program that:

1. Stores a predefined PIN.
2. Allows the user three attempts.
3. Grants access if the PIN is correct.
4. Displays an error for incorrect attempts.
5. Denies access after three failed attempts.

Use a loop and conditional statements.

**Question 23: Menu-Driven Application**

Create a menu-driven application that allows a user to:

1. View their balance.
2. Deposit money.
3. Withdraw money.
4. Exit.

Use:

- A `do-while` loop.
- A `switch` statement.
- Conditional statements.
- Appropriate variables.

# SECTION D: CODE ANALYSIS AND DEBUGGING

**Question 24**

Study the following program:

```cpp
#include <iostream>

int main() {

    for (int i = 1; i <= 5; i++) {

        if (i == 3) {
            continue;
        }

        std::cout << i << "\n";
    }

    return 0;
}
```

Answer:

1. How many times does the loop execute?
2. Which number is skipped?
3. What is the final output?
4. Why does the loop continue after skipping the number?

**Question 25**

Find and correct all errors in the following program:

```cpp
#include <iostream>

int main() {

    int marks = 85;

    if (marks = 70) {
        std::cout << "Grade A";
    }
    else if (marks >= 60) {
        std::cout << "Grade B";
    }

    return 0;
}
```

Explain why the original program does not perform the intended comparison.

---

# FINAL PRACTICAL PROJECT: UNIVERSITY MANAGEMENT MENU

Build a small university management application using C++ control-flow structures.

## Project Requirements

When the program starts, display:

```text
===== UNIVERSITY MANAGEMENT SYSTEM =====

1. Check Student Status
2. Calculate Grade
3. Display Numbers
4. Exit

Choose an option:
```

### Option 1: Check Student Status

Ask the user to enter their examination marks.

Determine whether the student has passed or failed.

For this exercise:

- Marks of 40 and above: Pass.
- Marks below 40: Fail.

Reject invalid marks outside 0–100.

### Option 2: Calculate Grade

Ask the user to enter examination marks.

Use conditional statements to assign a grade.

### Option 3: Display Numbers

Ask the user for a number.

Use a loop to display numbers from 1 up to that number.

### Option 4: Exit

Display a message and terminate the application.

## Technical Requirements

Your application must demonstrate:

- Variables.
- User input and output.
- `if` statements.
- `if-else` statements.
- `else if` chains.
- `switch` statements.
- `for` or `while` loops.
- `do-while` loops.
- `break` where appropriate.
- Input validation.

## Project Submission

Submit:

1. Your complete `main.cpp` source code.
2. A short explanation of how your program works.
3. Sample output from at least three different operations.
4. A brief explanation of where you used conditional statements and loops.

---

# SUBMISSION TO KAI

Submit your assessment answers and practical project to Kai for marking.

Kai should evaluate the following areas:

| Assessment area | What Kai checks |
|---|---|
| Conceptual understanding | Whether you understand control flow. |
| Conditional statements | Correct use of `if`, `else`, and `switch`. |
| Logical operators | Correct combination of conditions. |
| Loops | Correct use of `for`, `while`, and `do-while`. |
| Loop control | Appropriate use of `break` and `continue`. |
| Programming accuracy | Correct syntax and expected program behaviour. |
| Debugging | Ability to identify and fix errors. |
| Practical application | Ability to build the university management system. |

## Lesson Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain control flow.
- [ ] Understand sequential execution.
- [ ] Use `if` statements.
- [ ] Use `if-else` statements.
- [ ] Use `else if` chains.
- [ ] Write nested conditional statements.
- [ ] Apply comparison operators.
- [ ] Apply logical operators.
- [ ] Use `switch` statements.
- [ ] Understand the ternary operator.
- [ ] Write `for` loops.
- [ ] Write `while` loops.
- [ ] Write `do-while` loops.
- [ ] Identify and prevent infinite loops.
- [ ] Use `break` and `continue`.
- [ ] Write nested loops.
- [ ] Build a menu-driven C++ application.

**Part 4 of 4 — Lesson Complete**

## NEXT LESSON

### C++: Functions and Reusable Logic

In the next lesson, you will learn how to divide programs into reusable blocks of code using functions, parameters, return values, function declarations, function definitions, and function overloading.