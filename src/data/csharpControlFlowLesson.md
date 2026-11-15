# C# CONTROL FLOW

## PART 1: UNDERSTANDING CONTROL FLOW

### 1. What Is Control Flow?

Control flow refers to the order in which instructions inside a program are executed.

Normally, a computer executes statements from top to bottom. However, real applications need to make decisions, repeat operations, and sometimes skip certain instructions.

For example, imagine developing a banking application.

The application might need to:

- Check whether a user has sufficient money before making a withdrawal.
- Determine whether a person is eligible for a loan.
- Repeat a transaction until the user chooses to exit.
- Stop an operation when an error occurs.

These operations require control flow.

C# provides several control flow structures:

| Structure | Purpose |
|---|---|
| `if` | Executes code when a condition is true. |
| `if...else` | Chooses between two execution paths. |
| `else if` | Checks multiple conditions. |
| `switch` | Selects an action from multiple alternatives. |
| `for` | Repeats code a known number of times. |
| `while` | Repeats code while a condition remains true. |
| `do...while` | Executes code at least once before checking a condition. |
| `foreach` | Iterates through items in a collection. |
| `break` | Terminates a loop or switch section. |
| `continue` | Skips the current loop iteration. |
| `return` | Exits a method and optionally returns a value. |

---

### 2. Conditions and Boolean Expressions

Control flow structures often depend on conditions.

A condition is an expression that evaluates to either `true` or `false`.

Example:

```csharp
int age = 20;

bool isAdult = age >= 18;

Console.WriteLine(isAdult);
```

Line-by-line explanation:

**Line 1:**
```csharp
int age = 20;
```
Creates an integer variable called `age` and assigns it the value `20`.

**Line 2:**
```csharp
bool isAdult = age >= 18;
```
Checks whether the person's age is at least 18.

The `>=` operator means greater than or equal to.

Since 20 is greater than 18, the expression evaluates to `true`.

The result is stored in `isAdult`.

**Line 3:**
```csharp
Console.WriteLine(isAdult);
```
Displays the Boolean result.

Output:

```text
True
```

### 3. Comparison Operators

Comparison operators are used to compare values.

| Operator | Meaning | Example |
|---|---|---|
| `==` | Equal to | `age == 18` |
| `!=` | Not equal to | `age != 18` |
| `>` | Greater than | `age > 18` |
| `<` | Less than | `age < 18` |
| `>=` | Greater than or equal to | `age >= 18` |
| `<=` | Less than or equal to | `age <= 18` |

Example:

```csharp
int marks = 75;

Console.WriteLine(marks >= 50);
Console.WriteLine(marks == 75);
Console.WriteLine(marks < 40);
```

Output:

```text
True
True
False
```

Explanation:

- `marks >= 50` is true because 75 is greater than 50.
- `marks == 75` is true because both values are equal.
- `marks < 40` is false because 75 is not less than 40.

### 4. Logical Operators

Logical operators allow you to combine multiple conditions.

| Operator | Meaning | Example |
|---|---|---|
| `&&` | AND | `age >= 18 && hasID` |
| `||` | OR | `isStudent || isEmployee` |
| `!` | NOT | `!isBlocked` |

#### Logical AND (`&&`)

Both conditions must be true.

```csharp
int age = 22;
bool hasID = true;

bool canEnter = age >= 18 && hasID;

Console.WriteLine(canEnter);
```

Explanation:

- `age >= 18` checks whether the person is at least 18.
- `hasID` checks whether the person has identification.
- `&&` requires both conditions to be true.
- The final result is `true`.

Output:

```text
True
```

#### Logical OR (`||`)

At least one condition must be true.

```csharp
bool hasTicket = false;
bool isVIP = true;

bool canAccess = hasTicket || isVIP;

Console.WriteLine(canAccess);
```

Output:

```text
True
```

The person can access the area because they are a VIP, even though they do not have a ticket.

#### Logical NOT (`!`)

Reverses a Boolean value.

```csharp
bool isBlocked = false;

Console.WriteLine(!isBlocked);
```

Output:

```text
True
```

The original value is false. Applying `!` reverses it to true.

---

### 5. Why Control Flow Matters in Real Applications

Consider an online learning platform such as CodeLab Academy.

The system might use control flow to:

1. Check whether a learner has completed a lesson.
2. Determine whether the learner passed an assessment.
3. Allow access to the next lesson when requirements are satisfied.
4. Repeat questions until the learner submits an answer.
5. Stop an assessment when the time expires.

Without control flow, applications would have difficulty responding intelligently to different situations.

**Part 1 Progress: Foundational concepts completed.**

Progress: Part 1 of 4

---

# PART 2: DECISION-MAKING AND REPETITION

## 6. The `if` Statement

The `if` statement executes a block of code only when a specified condition is true.

Syntax:

```csharp
if (condition)
{
    // Code executes when condition is true
}
```

Example:

```csharp
int temperature = 35;

if (temperature > 30)
{
    Console.WriteLine("It is a hot day.");
}
```

Explanation:

**Line 1:**
```csharp
int temperature = 35;
```
Creates a variable storing the temperature.

**Line 2:**
```csharp
if (temperature > 30)
```
Checks whether the temperature is greater than 30.

**Line 3:**
```csharp
{
```
Starts the block of code controlled by the `if` statement.

**Line 4:**
```csharp
Console.WriteLine("It is a hot day.");
```
Displays a message because the condition is true.

Output:

```text
It is a hot day.
```

If the temperature were 20, the condition would be false, and the message would not appear.

---

## 7. The `if...else` Statement

Sometimes a program must choose between two possible outcomes.

The `if...else` statement handles this situation.

Syntax:

```csharp
if (condition)
{
    // Executes if true
}
else
{
    // Executes if false
}
```

Example: Checking whether a student has passed.

```csharp
int marks = 42;

if (marks >= 50)
{
    Console.WriteLine("You have passed.");
}
else
{
    Console.WriteLine("You have failed.");
}
```

Explanation:

1. `marks` stores the student's score.
2. `if (marks >= 50)` checks whether the score is at least 50.
3. If the condition is true, the first message is displayed.
4. Otherwise, the `else` block executes.

Output:

```text
You have failed.
```

The score is 42, which is below 50.

---

## 8. The `else if` Statement

What happens when an application needs to evaluate more than two possible conditions?

For example, a grading system may classify students into several categories.

C# provides `else if` for this purpose.

Example:

```csharp
int marks = 76;

if (marks >= 80)
{
    Console.WriteLine("Grade A");
}
else if (marks >= 70)
{
    Console.WriteLine("Grade B");
}
else if (marks >= 60)
{
    Console.WriteLine("Grade C");
}
else if (marks >= 50)
{
    Console.WriteLine("Grade D");
}
else
{
    Console.WriteLine("Grade F");
}
```

Line-by-line explanation:

- `int marks = 76;` stores the student's marks.
- `if (marks >= 80)` checks whether the student scored at least 80. This is false.
- `else if (marks >= 70)` checks whether the student scored at least 70. This is true.
- `Console.WriteLine("Grade B");` displays the grade.
- The remaining conditions are skipped because a matching condition has already been found.
- `else` provides a final outcome if none of the earlier conditions is true.

Output:

```text
Grade B
```

**Important:** C# checks these conditions from top to bottom. Once one condition is true, the remaining branches are skipped.

---

## 9. Nested `if` Statements

A nested `if` statement is an `if` statement placed inside another `if` statement.

This is useful when a decision depends on another decision.

Example: Checking access to a student portal.

```csharp
bool isRegistered = true;
bool hasPaidFees = true;

if (isRegistered)
{
    if (hasPaidFees)
    {
        Console.WriteLine("Access granted.");
    }
    else
    {
        Console.WriteLine("Please clear your fees.");
    }
}
else
{
    Console.WriteLine("Please register first.");
}
```

Explanation:

1. The first variable checks whether the student is registered.
2. The second variable checks whether the student has paid fees.
3. The outer `if` checks registration.
4. If registration is true, the inner `if` checks fee payment.
5. If both conditions are true, access is granted.
6. If the student is registered but has not paid, a payment message appears.
7. If the student is not registered, the outer `else` executes.

Output:

```text
Access granted.
```

Nested decisions are useful in authentication, payments, account management, and permission systems.

---

## 10. The `switch` Statement

A `switch` statement is used when a program must select one action from several possible values.

It can make code easier to read than a long sequence of `else if` statements.

Example: A simple menu.

```csharp
int choice = 2;

switch (choice)
{
    case 1:
        Console.WriteLine("View profile");
        break;

    case 2:
        Console.WriteLine("View courses");
        break;

    case 3:
        Console.WriteLine("View results");
        break;

    default:
        Console.WriteLine("Invalid choice");
        break;
}
```

Explanation:

- `int choice = 2;` stores the selected menu option.
- `switch (choice)` evaluates the value of `choice`.
- `case 1:` represents the first possible value.
- `case 2:` represents the second possible value.
- `case 3:` represents the third possible value.
- `break;` exits the switch section after executing the matching case.
- `default:` executes when no case matches.

Output:

```text
View courses
```

### Understanding `default`

The `default` section works as a fallback.

For example, if `choice` is 9, none of the three cases matches.

The program executes:

```csharp
default:
    Console.WriteLine("Invalid choice");
    break;
```

### Switch Expressions

Modern C# also supports switch expressions.

Example:

```csharp
int choice = 2;

string page = choice switch
{
    1 => "Profile",
    2 => "Courses",
    3 => "Results",
    _ => "Invalid page"
};

Console.WriteLine(page);
```

Explanation:

- `choice switch` evaluates the value of `choice`.
- `1 => "Profile"` produces `"Profile"` when the value is 1.
- `2 => "Courses"` produces `"Courses"` when the value is 2.
- `3 => "Results"` produces `"Results"` when the value is 3.
- `_ => "Invalid page"` handles every other value.
- The selected result is stored in `page`.

Output:

```text
Courses
```

The `_` symbol acts as a discard pattern and provides the fallback result.

---

## 11. The `for` Loop

A loop allows a program to repeat instructions.

A `for` loop is especially useful when the number of repetitions is known.

Syntax:

```csharp
for (initialization; condition; update)
{
    // Repeated instructions
}
```

Example:

```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}
```

Understanding each part:

**Initialization:**
```csharp
int i = 1;
```
Creates a counter variable and starts it at 1.

**Condition:**
```csharp
i <= 5
```
Checks whether the counter is less than or equal to 5.

**Update:**
```csharp
i++
```
Increases the counter by 1 after each iteration.

**Loop body:**
```csharp
Console.WriteLine(i);
```
Displays the current value of the counter.

Output:

```text
1
2
3
4
5
```

### How the loop works

| Iteration | Value of `i` | Condition | Action |
|---|---:|---|---|
| 1 | 1 | True | Prints 1 |
| 2 | 2 | True | Prints 2 |
| 3 | 3 | True | Prints 3 |
| 4 | 4 | True | Prints 4 |
| 5 | 5 | True | Prints 5 |
| 6 | 6 | False | Stops |

The loop terminates when the condition becomes false.

---

## 12. The `while` Loop

A `while` loop repeats a block of code as long as its condition remains true.

Syntax:

```csharp
while (condition)
{
    // Repeated instructions
}
```

Example:

```csharp
int count = 1;

while (count <= 5)
{
    Console.WriteLine(count);

    count++;
}
```

Explanation:

1. `int count = 1;` initializes the counter.
2. `while (count <= 5)` checks whether the counter is still within the allowed range.
3. `Console.WriteLine(count);` displays the current value.
4. `count++;` increases the counter.
5. The program returns to the condition and checks it again.

Output:

```text
1
2
3
4
5
```

**Important:** If you forget `count++`, the condition may remain true forever. This creates an infinite loop.

---

## 13. The `do...while` Loop

A `do...while` loop is different because it executes its body before checking the condition.

This means the code executes at least once.

Syntax:

```csharp
do
{
    // Instructions
}
while (condition);
```

Example:

```csharp
int number = 1;

do
{
    Console.WriteLine(number);

    number++;
}
while (number <= 3);
```

Explanation:

- `number` starts at 1.
- The `do` block executes immediately.
- The current number is printed.
- The number is increased.
- The condition is checked after the block executes.
- The process continues until the condition becomes false.

Output:

```text
1
2
3
```

### Difference Between `while` and `do...while`

Consider these examples.

Using `while`:

```csharp
int number = 10;

while (number < 5)
{
    Console.WriteLine(number);
}
```

Output:

```text
```

Nothing appears because the condition is false before the loop starts.

Using `do...while`:

```csharp
int number = 10;

do
{
    Console.WriteLine(number);
}
while (number < 5);
```

Output:

```text
10
```

The code executes once before checking the condition.

---

## 14. The `foreach` Loop

The `foreach` loop is used to access each item in a collection.

For example, an application may store a list of student names.

```csharp
string[] students = { "Brian", "Mary", "John" };

foreach (string student in students)
{
    Console.WriteLine(student);
}
```

Explanation:

**Line 1:**
```csharp
string[] students = { "Brian", "Mary", "John" };
```
Creates an array containing three student names.

**Line 2:**
```csharp
foreach (string student in students)
```
Instructs C# to access each item in the array one at a time.

The current item is stored in the variable `student`.

**Line 3:**
```csharp
Console.WriteLine(student);
```
Displays the current student's name.

Output:

```text
Brian
Mary
John
```

Unlike a traditional `for` loop, you do not need to manually manage an index when you only need to process each item.

---

## 15. Controlling Loops with `break` and `continue`

### The `break` Statement

The `break` statement immediately terminates the nearest enclosing loop or switch section.

Example:

```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        break;
    }

    Console.WriteLine(i);
}
```

Explanation:

- The loop begins at 1.
- The `if` statement checks whether the counter has reached 5.
- When `i` becomes 5, `break` terminates the loop.
- The `Console.WriteLine` statement is not executed for 5.

Output:

```text
1
2
3
4
```

### The `continue` Statement

The `continue` statement skips the remaining statements in the current iteration and moves to the next iteration.

Example:

```csharp
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue;
    }

    Console.WriteLine(i);
}
```

Output:

```text
1
2
4
5
```

Explanation:

When the counter reaches 3, `continue` skips the printing instruction for that iteration.

The loop continues with 4.

### `break` vs `continue`

| Statement | Behaviour |
|---|---|
| `break` | Terminates the loop completely. |
| `continue` | Skips the current iteration. |

---

## 16. The `return` Statement

The `return` statement terminates the execution of a method.

It can also send a value back to the code that called the method.

Example:

```csharp
static int AddNumbers()
{
    int result = 10 + 20;

    return result;
}
```

Explanation:

- `static int AddNumbers()` declares a method that returns an integer.
- `int result = 10 + 20;` calculates the sum.
- `return result;` sends the calculated value back to the caller and ends the method.

A method can be called like this:

```csharp
int answer = AddNumbers();

Console.WriteLine(answer);
```

Output:

```text
30
```

A method declared with `void` does not return a value. It can still use `return;` to exit early.

---

## 17. Choosing the Right Control Structure

| Situation | Recommended structure |
|---|---|
| Checking whether a user is eligible | `if` |
| Choosing between two outcomes | `if...else` |
| Checking multiple ranges | `else if` |
| Selecting from menu options | `switch` |
| Repeating something a fixed number of times | `for` |
| Repeating while a condition is true | `while` |
| Running an operation at least once | `do...while` |
| Processing every item in an array | `foreach` |
| Stopping a loop early | `break` |
| Skipping a particular iteration | `continue` |
| Leaving a method | `return` |

**Part 2 Progress: Decision-making, loops, and execution control completed.**

Progress: Part 2 of 4

---

# PART 3: PRACTICAL IMPLEMENTATION

In this part, you will build actual C# programs that use control flow.

## 18. Preparing Your Development Environment

You can use Visual Studio, Visual Studio Code with the C# Dev Kit, or the .NET command-line interface.

For a console project, open your terminal and execute:

```bash
dotnet new console -n ControlFlowPractice
```

This creates a new console application called `ControlFlowPractice`.

Enter the project directory:

```bash
cd ControlFlowPractice
```

Run the application:

```bash
dotnet run
```

Open the project in your editor and locate:

```text
Program.cs
```

This is where we will write our programs.

The following examples are separate programs. Replace the contents of `Program.cs` with each example when practising.

---

## 19. Practical Project One: Student Grading System

### Project objective

Create a program that:

1. Accepts a student's marks.
2. Checks whether the marks are valid.
3. Determines the student's grade.
4. Displays whether the student has passed or failed.

### Complete code

```csharp
using System;

Console.Write("Enter student marks: ");

string? input = Console.ReadLine();

if (int.TryParse(input, out int marks))
{
    if (marks >= 0 && marks <= 100)
    {
        if (marks >= 80)
        {
            Console.WriteLine("Grade: A");
        }
        else if (marks >= 70)
        {
            Console.WriteLine("Grade: B");
        }
        else if (marks >= 60)
        {
            Console.WriteLine("Grade: C");
        }
        else if (marks >= 50)
        {
            Console.WriteLine("Grade: D");
        }
        else
        {
            Console.WriteLine("Grade: F");
        }

        if (marks >= 50)
        {
            Console.WriteLine("Status: Passed");
        }
        else
        {
            Console.WriteLine("Status: Failed");
        }
    }
    else
    {
        Console.WriteLine("Marks must be between 0 and 100.");
    }
}
else
{
    Console.WriteLine("Please enter a valid whole number.");
}
```

### Understanding the code line by line

**1. Importing the system namespace**

```csharp
using System;
```

Makes common .NET functionality available. This example uses console input and output.

**2. Requesting marks**

```csharp
Console.Write("Enter student marks: ");
```

Displays a prompt without moving to a new line.

**3. Reading input**

```csharp
string? input = Console.ReadLine();
```

Reads the user's input.

`Console.ReadLine()` returns text, so we initially store the input in a string.

The `?` indicates that the value may be null.

**4. Converting input**

```csharp
if (int.TryParse(input, out int marks))
```

Attempts to convert the input into an integer.

If conversion succeeds, the converted value is stored in `marks`.

If conversion fails, the program executes the outer `else` block.

**5. Validating the range**

```csharp
if (marks >= 0 && marks <= 100)
```

Checks whether the marks fall between 0 and 100.

Both conditions must be true.

**6. Determining the grade**

```csharp
if (marks >= 80)
```

Checks whether the student has achieved grade A.

The following `else if` statements check lower grade boundaries.

**7. Checking the result**

```csharp
if (marks >= 50)
```

Determines whether the student has passed.

A score of at least 50 produces a pass result.

**8. Handling invalid marks**

```csharp
else
{
    Console.WriteLine("Marks must be between 0 and 100.");
}
```

Displays an error when the entered number is outside the accepted range.

**9. Handling invalid input**

```csharp
else
{
    Console.WriteLine("Please enter a valid whole number.");
}
```

Executes when the user enters something that cannot be converted into an integer.

### Expected output

Example 1:

```text
Enter student marks: 85
Grade: A
Status: Passed
```

Example 2:

```text
Enter student marks: 45
Grade: F
Status: Failed
```

Example 3:

```text
Enter student marks: 120
Marks must be between 0 and 100.
```

Example 4:

```text
Enter student marks: hello
Please enter a valid whole number.
```

### What you have learned

This project combines:

- User input.
- `TryParse`.
- Nested `if` statements.
- `else if`.
- Logical AND.
- Input validation.

---

## 20. Practical Project Two: Banking ATM Menu

### Project objective

Build a simple ATM application that allows a user to:

1. Check their balance.
2. Deposit money.
3. Withdraw money.
4. Exit the application.

This project demonstrates `switch`, `while`, `if...else`, and `break`.

### Complete code

```csharp
using System;

decimal balance = 5000m;

bool running = true;

while (running)
{
    Console.WriteLine("\n===== ATM MENU =====");
    Console.WriteLine("1. Check Balance");
    Console.WriteLine("2. Deposit Money");
    Console.WriteLine("3. Withdraw Money");
    Console.WriteLine("4. Exit");

    Console.Write("Choose an option: ");

    string? input = Console.ReadLine();

    if (!int.TryParse(input, out int choice))
    {
        Console.WriteLine("Invalid menu selection.");
        continue;
    }

    switch (choice)
    {
        case 1:
            Console.WriteLine($"Balance: KSh {balance:N2}");
            break;

        case 2:
            Console.Write("Enter deposit amount: ");

            if (decimal.TryParse(Console.ReadLine(), out decimal deposit)
                && deposit > 0)
            {
                balance += deposit;

                Console.WriteLine("Deposit successful.");
            }
            else
            {
                Console.WriteLine("Invalid deposit amount.");
            }

            break;

        case 3:
            Console.Write("Enter withdrawal amount: ");

            if (decimal.TryParse(Console.ReadLine(), out decimal withdrawal)
                && withdrawal > 0)
            {
                if (withdrawal <= balance)
                {
                    balance -= withdrawal;

                    Console.WriteLine("Withdrawal successful.");
                }
                else
                {
                    Console.WriteLine("Insufficient funds.");
                }
            }
            else
            {
                Console.WriteLine("Invalid withdrawal amount.");
            }

            break;

        case 4:
            running = false;

            Console.WriteLine("Thank you for using our ATM.");

            break;

        default:
            Console.WriteLine("Please select an option from 1 to 4.");

            break;
    }
}
```

### Detailed explanation

**1. Creating the balance**

```csharp
decimal balance = 5000m;
```

Creates a variable storing the account balance.

The `decimal` type is suitable for many financial calculations because it represents decimal fractions more appropriately than binary floating-point types.

The `m` suffix identifies the number as a decimal literal.

**2. Creating the running variable**

```csharp
bool running = true;
```

Controls whether the ATM application should continue operating.

When `running` is true, the loop continues.

When it becomes false, the loop terminates.

**3. Starting the loop**

```csharp
while (running)
```

Repeats the ATM menu while the application is active.

**4. Displaying menu options**

```csharp
Console.WriteLine("1. Check Balance");
Console.WriteLine("2. Deposit Money");
Console.WriteLine("3. Withdraw Money");
Console.WriteLine("4. Exit");
```

Displays the available operations.

**5. Reading the user's choice**

```csharp
string? input = Console.ReadLine();
```

Reads the selected option.

**6. Validating the choice**

```csharp
if (!int.TryParse(input, out int choice))
```

Checks whether the input can be converted into an integer.

The `!` reverses the result of `TryParse`.

If conversion fails, the program displays an error and executes:

```csharp
continue;
```

This skips the remaining statements in the current loop iteration and returns to the menu.

**7. Selecting an operation**

```csharp
switch (choice)
```

Checks the selected menu option.

Each `case` represents a different operation.

**8. Checking the balance**

```csharp
case 1:
    Console.WriteLine($"Balance: KSh {balance:N2}");
    break;
```

Displays the current balance.

The `N2` format displays two decimal places with number grouping according to the current culture.

**9. Depositing money**

```csharp
if (decimal.TryParse(Console.ReadLine(), out decimal deposit)
    && deposit > 0)
```

Attempts to convert the entered amount into a decimal.

It also checks that the amount is greater than zero.

**10. Updating the balance**

```csharp
balance += deposit;
```

Adds the deposit to the existing balance.

This is equivalent to:

```csharp
balance = balance + deposit;
```

**11. Withdrawing money**

```csharp
if (withdrawal <= balance)
```

Checks whether the account contains enough money.

If the condition is true:

```csharp
balance -= withdrawal;
```

Subtracts the withdrawal amount from the account balance.

Otherwise, the application displays an insufficient funds message.

**12. Exiting the application**

```csharp
running = false;
```

Changes the loop condition to false.

The loop terminates after the current iteration finishes.

### Example execution

```text
===== ATM MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

Choose an option: 1
Balance: KSh 5,000.00

===== ATM MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

Choose an option: 2
Enter deposit amount: 2000
Deposit successful.

===== ATM MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

Choose an option: 3
Enter withdrawal amount: 1000
Withdrawal successful.

===== ATM MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

Choose an option: 1
Balance: KSh 6,000.00
```

The balance changes because each transaction updates the same variable.

**Important:** This is a learning simulation, not a production banking system. Real banking applications require authentication, transaction records, secure storage, concurrency controls, and server-side validation.

---

## 21. Practical Project Three: Multiplication Table Generator

### Project objective

Create a program that asks the user for a number and generates its multiplication table.

This project focuses on `for` loops.

### Complete code

```csharp
using System;

Console.Write("Enter a number: ");

if (int.TryParse(Console.ReadLine(), out int number))
{
    Console.WriteLine($"\nMultiplication Table for {number}");

    for (int i = 1; i <= 10; i++)
    {
        int result = number * i;

        Console.WriteLine($"{number} x {i} = {result}");
    }
}
else
{
    Console.WriteLine("Please enter a valid number.");
}
```

### Explanation

**1. Requesting a number**

```csharp
Console.Write("Enter a number: ");
```

Asks the user to enter a number.

**2. Validating input**

```csharp
if (int.TryParse(Console.ReadLine(), out int number))
```

Converts the entered text into an integer.

**3. Displaying the heading**

```csharp
Console.WriteLine($"\nMultiplication Table for {number}");
```

Displays the selected number.

The `$` allows the variable `number` to be inserted into the string.

**4. Starting the loop**

```csharp
for (int i = 1; i <= 10; i++)
```

Repeats the instructions from 1 to 10.

**5. Performing multiplication**

```csharp
int result = number * i;
```

Multiplies the user's number by the current loop counter.

**6. Displaying the result**

```csharp
Console.WriteLine($"{number} x {i} = {result}");
```

Displays the multiplication operation and its answer.

### Expected output

```text
Enter a number: 5

Multiplication Table for 5
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

---

## 22. Practical Project Four: Login Attempt System

### Project objective

Create a basic login simulation that allows a user a maximum of three attempts.

The program will use:

- `while`.
- `if...else`.
- `break`.
- Comparison operators.
- A counter variable.

### Complete code

```csharp
using System;

string correctPassword = "CodeLab123";

int attempts = 0;

bool loggedIn = false;

while (attempts < 3)
{
    Console.Write("Enter your password: ");

    string? password = Console.ReadLine();

    attempts++;

    if (password == correctPassword)
    {
        loggedIn = true;

        Console.WriteLine("Login successful.");

        break;
    }
    else
    {
        Console.WriteLine("Incorrect password.");

        Console.WriteLine($"Attempts remaining: {3 - attempts}");
    }
}

if (!loggedIn)
{
    Console.WriteLine("Account temporarily locked.");
}
```

### Detailed explanation

**1. Storing the correct password**

```csharp
string correctPassword = "CodeLab123";
```

Stores the password used for this learning simulation.

**2. Tracking attempts**

```csharp
int attempts = 0;
```

Starts the attempt counter at zero.

**3. Tracking login status**

```csharp
bool loggedIn = false;
```

Indicates whether the user has successfully logged in.

**4. Limiting attempts**

```csharp
while (attempts < 3)
```

Allows the loop to continue while fewer than three attempts have been made.

**5. Reading the password**

```csharp
string? password = Console.ReadLine();
```

Reads the entered password.

**6. Increasing attempts**

```csharp
attempts++;
```

Increases the counter after each submission.

**7. Comparing passwords**

```csharp
if (password == correctPassword)
```

Checks whether the entered password matches the stored password.

**8. Successful login**

```csharp
loggedIn = true;
```

Changes the login status.

```csharp
break;
```

Terminates the loop immediately.

**9. Failed login**

```csharp
Console.WriteLine($"Attempts remaining: {3 - attempts}");
```

Calculates and displays the remaining attempts.

**10. Final check**

```csharp
if (!loggedIn)
```

Checks whether login was unsuccessful after the loop ends.

If so, the account-locked message is displayed.

### Example execution

```text
Enter your password: wrong
Incorrect password.
Attempts remaining: 2

Enter your password: password
Incorrect password.
Attempts remaining: 1

Enter your password: CodeLab123
Login successful.
```

If all three attempts fail:

```text
Enter your password: wrong
Incorrect password.
Attempts remaining: 2

Enter your password: wrong
Incorrect password.
Attempts remaining: 1

Enter your password: wrong
Incorrect password.
Attempts remaining: 0

Account temporarily locked.
```

**Security note:** Real authentication systems should never store plain-text passwords. They should use secure password hashing, server-side authentication, rate limiting, and appropriate account protection.

---

## 23. Common Control Flow Errors

### Error 1: Using `=` instead of `==`

Incorrect:

```csharp
int age = 20;

if (age = 18)
{
    Console.WriteLine("Adult");
}
```

This is incorrect because `=` is an assignment operator, not an equality comparison operator. It also does not produce a Boolean condition.

Correct:

```csharp
if (age == 18)
{
    Console.WriteLine("Age is exactly 18.");
}
```

### Error 2: Creating an infinite loop

Incorrect:

```csharp
int count = 1;

while (count <= 5)
{
    Console.WriteLine(count);
}
```

The value of `count` never changes.

Therefore, the condition remains true forever.

Correct:

```csharp
int count = 1;

while (count <= 5)
{
    Console.WriteLine(count);

    count++;
}
```

### Error 3: Incorrect condition ordering

Incorrect grading example:

```csharp
int marks = 85;

if (marks >= 50)
{
    Console.WriteLine("Pass");
}
else if (marks >= 80)
{
    Console.WriteLine("Excellent");
}
```

The first condition is already true for 85.

The second condition will never be reached for that score.

Correct:

```csharp
if (marks >= 80)
{
    Console.WriteLine("Excellent");
}
else if (marks >= 50)
{
    Console.WriteLine("Pass");
}
else
{
    Console.WriteLine("Fail");
}
```

More specific conditions should be checked before broader conditions when they overlap.

### Error 4: Forgetting `break` in a switch statement

Incorrect:

```csharp
switch (choice)
{
    case 1:
        Console.WriteLine("Profile");
        break;

    case 2:
        Console.WriteLine("Courses");
        break;
}
```

This example is actually correct because each section has a `break`.

In C#, ordinary switch sections cannot simply fall through into the next non-empty section. Missing a required `break`, `return`, or other terminating statement normally causes a compile-time error.

### Error 5: Confusing `break` and `continue`

Remember:

- `break` terminates the loop.
- `continue` skips the current iteration and proceeds to the next one.

### Part 3 Practical Exercises

Complete these tasks independently.

**Exercise 1: Age Eligibility Checker**

Create a program that:

- Asks the user for their age.
- Checks whether the input is valid.
- Displays whether the person is eligible to register for an 18+ service.
- Rejects negative ages.

**Exercise 2: Even Number Generator**

Use a `for` loop to display all even numbers between 1 and 50.

**Exercise 3: Student Results Analyzer**

Create a program that:

- Accepts marks for five students.
- Uses a loop to collect the marks.
- Determines each student's grade.
- Counts the number of students who passed.
- Displays the total number of students who failed.

**Exercise 4: Number Guessing Game**

Create a simple guessing game.

Requirements:

- Store a secret number.
- Allow the player to make guesses.
- Display whether a guess is too high or too low.
- Stop when the correct number is guessed.
- Limit the number of attempts.

**Part 3 Progress: Practical implementation completed.**

Progress: Part 3 of 4

---

# PART 4: KAI ASSESSMENT

## 24. Assessment Instructions

You have completed the foundational concepts, decision-making structures, loops, and practical implementations.

Now demonstrate your understanding.

Answer the questions without immediately looking at the earlier explanations.

Your answers should demonstrate that you understand why particular control structures are used, not simply how to write their syntax.

## SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is control flow in programming?

A. The process of storing information in a database.

B. The order in which instructions are executed in a program.

C. The process of designing a user interface.

D. The process of connecting a computer to the internet.

**Question 2**

Which statement executes code only when a condition is true?

A. `for`

B. `switch`

C. `if`

D. `return`

**Question 3**

Which operator represents logical AND in C#?

A. `||`

B. `&&`

C. `!`

D. `==`

**Question 4**

What is the main difference between `while` and `do...while`?

A. `while` cannot repeat code.

B. `do...while` executes its body at least once.

C. `while` always executes at least once.

D. There is no difference.

**Question 5**

Which loop is most suitable for processing every item in an array?

A. `foreach`

B. `switch`

C. `if`

D. `return`

**Question 6**

What does the `break` statement do inside a loop?

A. Restarts the program.

B. Skips only one statement.

C. Terminates the loop.

D. Creates another loop.

**Question 7**

What does `continue` do?

A. Terminates the application.

B. Skips the current iteration.

C. Stops every loop in the program.

D. Returns a value from a method.

**Question 8**

Which statement is best suited to selecting an operation from a numbered menu?

A. `switch`

B. `continue`

C. `foreach`

D. `while`

---

## SECTION B: UNDERSTANDING CODE

**Question 9**

Study this code:

```csharp
int number = 15;

if (number > 10)
{
    Console.WriteLine("Large");
}
else
{
    Console.WriteLine("Small");
}
```

Answer:

1. Which condition is evaluated?
2. Is the condition true or false?
3. What will the program display?
4. Why is the `else` block not executed?

**Question 10**

Study this loop:

```csharp
for (int i = 2; i <= 8; i += 2)
{
    Console.WriteLine(i);
}
```

Answer:

1. What is the starting value of `i`?
2. What does `i += 2` do?
3. How many times does the loop execute?
4. Write the expected output.

**Question 11**

Study this code:

```csharp
int number = 1;

while (number <= 3)
{
    Console.WriteLine(number);

    number++;
}
```

Explain how the loop works and why it eventually terminates.

**Question 12**

What is the difference between these two statements?

```csharp
int result = 10;
```

```csharp
if (result == 10)
```

Explain the difference between assignment and comparison.

---

## SECTION C: PRACTICAL PROGRAMMING

**Question 13: Electricity Billing System**

Write a C# program that asks a user to enter their electricity units consumed.

Use these fictional billing categories:

| Units consumed | Rate per unit |
|---|---:|
| 0–100 | KSh 5 |
| 101–200 | KSh 8 |
| Above 200 | KSh 12 |

Your program should:

1. Accept the number of units.
2. Validate the input.
3. Reject negative values.
4. Select the appropriate rate using `if...else if`.
5. Calculate the bill.
6. Display the units, rate, and total bill.

For this exercise, apply one rate to all units consumed within the selected category.

**Question 14: Countdown Timer**

Write a program that uses a `for` loop to display numbers from 10 down to 1.

After displaying 1, print:

```text
Countdown complete!
```

**Question 15: Menu-Based Calculator**

Build a calculator that displays:

```text
1. Addition
2. Subtraction
3. Multiplication
4. Division
```

Requirements:

- Ask the user to select an operation.
- Accept two numbers.
- Use `switch` to select the operation.
- Prevent division by zero.
- Display the calculated result.
- Handle invalid menu selections.

**Question 16: Debugging Challenge**

The following program contains a logical error.

```csharp
int marks = 90;

if (marks >= 50)
{
    Console.WriteLine("Grade A");
}
else if (marks >= 80)
{
    Console.WriteLine("Grade B");
}
else
{
    Console.WriteLine("Failed");
}
```

Tasks:

1. Identify the logical error.
2. Explain why a student scoring 90 does not receive the intended grade B.
3. Rewrite the program correctly using appropriate conditions.

---

## SECTION D: FINAL PRACTICAL PROJECT

### Project: Student Performance Management System

Build a console application that manages the results of multiple students.

Your application must include the following functionality:

**1. Student registration**

- Ask for the number of students.
- Collect each student's name.
- Collect their marks.
- Validate all marks to ensure they fall between 0 and 100.

**2. Grade calculation**

Use the following grading system:

| Marks | Grade |
|---|---|
| 80–100 | A |
| 70–79 | B |
| 60–69 | C |
| 50–59 | D |
| 0–49 | F |

**3. Performance classification**

Use conditional statements to determine whether each student passed or failed.

**4. Results display**

Display:

- Student name.
- Marks.
- Grade.
- Performance status.

**5. Class statistics**

Calculate and display:

- Total students.
- Number of students who passed.
- Number of students who failed.
- Average marks.
- Highest marks.
- Lowest marks.

**6. Menu system**

Use a loop and a `switch` statement to provide options such as:

1. Register students.
2. Display results.
3. Display class statistics.
4. Exit.

### Recommended implementation structures

| Requirement | C# structure |
|---|---|
| Validating marks | `if...else` |
| Calculating grades | `else if` |
| Repeating student registration | `for` |
| Displaying menu repeatedly | `while` |
| Selecting menu options | `switch` |
| Processing student records | `foreach` |
| Exiting the application | `break` |

You may use arrays or lists to store student information.

---

## 25. Submit Your Assessment to Kai

When you finish, submit your answers and project code to Kai for evaluation.

Kai should assess:

- Understanding of control flow concepts.
- Correct use of conditions.
- Correct implementation of loops.
- Logical accuracy.
- Input validation.
- Code readability.
- Ability to explain how the program works.

### Lesson Completion Checklist

Before proceeding to the next lesson, confirm that you can:

- [ ] Explain what control flow means.
- [ ] Use comparison and logical operators.
- [ ] Write `if`, `else`, and `else if` statements.
- [ ] Implement nested conditions.
- [ ] Use `switch` statements and switch expressions.
- [ ] Write `for` loops.
- [ ] Write `while` loops.
- [ ] Explain and use `do...while`.
- [ ] Process collections using `foreach`.
- [ ] Apply `break`, `continue`, and `return`.
- [ ] Identify and correct common control flow errors.
- [ ] Build a practical application using multiple control structures.

**Part 4 of 4 — Lesson Complete**

You have completed C# Control Flow.

Your next lesson is:

**C# Functions and Reusable Logic**