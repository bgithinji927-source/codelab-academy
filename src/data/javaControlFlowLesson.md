
# JAVA: CONTROL FLOW

## PART 1 OF 4: UNDERSTANDING CONTROL FLOW AND DECISION-MAKING

### 1. What Is Control Flow?

Control flow refers to the order in which instructions in a program are executed.

Normally, Java executes statements from top to bottom, one after another. This is called **sequential execution**.

However, sometimes a program needs to make decisions.

For example:
- If a student's marks are 50 or above, display "Pass".
- If a user's age is below 18, deny access.
- If an account balance is sufficient, allow a withdrawal.
- If a password is correct, allow login.

Control flow allows Java to determine which instructions should execute and when.

### 2. Three Main Control Flow Structures

Java has three major control flow structures.

| Structure | Purpose | Examples |
|---|---|---|
| Sequential | Executes instructions one after another | Normal statements |
| Selection | Makes decisions based on conditions | `if`, `else`, `switch` |
| Iteration | Repeats instructions | `for`, `while`, `do-while` |

In this lesson, we will study all three.

### 3. Understanding Conditions

A condition is an expression that evaluates to either `true` or `false`.

Java uses conditions to make decisions.

Example:

```java
int age = 20;

System.out.println(age >= 18);
```

Output:

```text
true
```

Explanation:

- `int age = 20;` creates an integer variable.
- `age >= 18` checks whether age is greater than or equal to 18.
- Since 20 is greater than 18, the expression evaluates to `true`.
- `System.out.println()` displays the result.

Another example:

```java
int marks = 35;

System.out.println(marks >= 50);
```

Output:

```text
false
```

The student's marks are below 50, so the condition is false.

### 4. The if Statement

The `if` statement executes a block of code only when a specified condition is true.

Syntax:

```java
if (condition) {
    // Code executes when condition is true
}
```

Example:

```java
public class Main {
    public static void main(String[] args) {

        int age = 20;

        if (age >= 18) {
            System.out.println("You are eligible to vote.");
        }

    }
}
```

Output:

```text
You are eligible to vote.
```

Line-by-line explanation:

1. `public class Main` declares a Java class named `Main`.
2. `main()` is the entry point of the application.
3. `int age = 20;` stores the person's age.
4. `if (age >= 18)` checks whether the person is at least 18.
5. The condition is true because the age is 20.
6. Java executes the statement inside the curly braces.
7. The message is displayed.

If the age were 15, Java would skip the code inside the `if` block.

### 5. The if-else Statement

Sometimes a program must choose between two possible outcomes.

The `if-else` statement provides two paths.

Syntax:

```java
if (condition) {
    // Executes if condition is true
} else {
    // Executes if condition is false
}
```

Example:

```java
public class Main {
    public static void main(String[] args) {

        int marks = 45;

        if (marks >= 50) {
            System.out.println("Pass");
        } else {
            System.out.println("Fail");
        }

    }
}
```

Output:

```text
Fail
```

Explanation:

- `marks` stores 45.
- Java checks whether `marks >= 50`.
- The condition is false.
- Java skips the `if` block.
- Java executes the `else` block.
- The program displays `Fail`.

**Important:** Java executes only one of these two branches.

### 6. The if-else-if Ladder

What happens when a program has more than two possible outcomes?

For example, a school may classify student performance as follows:

| Marks | Grade |
|---|---|
| 80–100 | A |
| 70–79 | B |
| 60–69 | C |
| 50–59 | D |
| Below 50 | Fail |

We can use an `if-else-if` ladder.

Example:

```java
public class Main {
    public static void main(String[] args) {

        int marks = 75;

        if (marks >= 80) {
            System.out.println("Grade A");
        } else if (marks >= 70) {
            System.out.println("Grade B");
        } else if (marks >= 60) {
            System.out.println("Grade C");
        } else if (marks >= 50) {
            System.out.println("Grade D");
        } else {
            System.out.println("Fail");
        }

    }
}
```

Output:

```text
Grade B
```

How Java processes the conditions:

1. Is 75 greater than or equal to 80? No.
2. Is 75 greater than or equal to 70? Yes.
3. Java displays `Grade B`.
4. Java skips the remaining conditions.

**Important:** Java checks the conditions from top to bottom and executes the first matching branch.

The order of conditions matters.

For example, putting `marks >= 50` first would cause a mark of 85 to match that condition before reaching the higher grades.

### 7. Nested if Statements

A nested `if` statement is an `if` statement placed inside another `if` statement.

It is useful when a decision depends on another decision.

Example: Checking whether a user can access an online banking system.

```java
public class Main {
    public static void main(String[] args) {

        boolean accountActive = true;
        boolean correctPassword = true;

        if (accountActive) {

            if (correctPassword) {
                System.out.println("Login successful.");
            } else {
                System.out.println("Incorrect password.");
            }

        } else {
            System.out.println("Account is inactive.");
        }

    }
}
```

Output:

```text
Login successful.
```

Explanation:

- `accountActive` indicates whether the account is active.
- `correctPassword` indicates whether the password is correct.
- The first `if` checks whether the account is active.
- Only if the account is active does Java check the password.
- If both conditions are true, login succeeds.
- If the account is inactive, Java does not enter the inner `if` statement.

This structure is useful for authentication, permission checks and multi-stage validation.

### 8. Logical Operators in Conditions

Java allows you to combine multiple conditions using logical operators.

| Operator | Name | Meaning |
|---|---|---|
| `&&` | Logical AND | Both conditions must be true |
| `||` | Logical OR | At least one condition must be true |
| `!` | Logical NOT | Reverses a boolean value |

#### Logical AND (`&&`)

Example:

```java
int age = 22;
boolean hasID = true;

if (age >= 18 && hasID) {
    System.out.println("Access granted.");
}
```

Output:

```text
Access granted.
```

Explanation:

- The first condition checks whether age is at least 18.
- The second checks whether the person has identification.
- `&&` requires both conditions to be true.
- Since both are true, access is granted.

#### Logical OR (`||`)

```java
boolean isAdmin = false;
boolean isManager = true;

if (isAdmin || isManager) {
    System.out.println("You can access the dashboard.");
}
```

Output:

```text
You can access the dashboard.
```

Only one condition needs to be true.

#### Logical NOT (`!`)

```java
boolean isBlocked = false;

if (!isBlocked) {
    System.out.println("You can continue.");
}
```

Output:

```text
You can continue.
```

The `!` operator reverses the boolean value. Since `isBlocked` is false, `!isBlocked` becomes true.

### Part 1 Exercises

1. Define control flow.
2. Explain the difference between sequential execution and selection.
3. What is the purpose of an `if` statement?
4. Write an `if-else` statement that checks whether a number is positive.
5. What is a nested `if` statement?
6. Explain the difference between `&&` and `||`.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: SWITCH STATEMENTS AND LOOPS

## 9. The switch Statement

The `switch` statement is another decision-making structure.

It is useful when a variable needs to be compared against several possible values.

For example, imagine developing a banking application with the following menu:

1. Check balance
2. Deposit money
3. Withdraw money
4. Exit

A `switch` statement can determine which operation the user selected.

### Syntax

```java
switch (expression) {

    case value1:
        // Instructions
        break;

    case value2:
        // Instructions
        break;

    default:
        // Instructions when no case matches
}
```

Important components:

- `switch`: starts the decision structure.
- `expression`: the value Java evaluates.
- `case`: defines a possible matching value.
- `break`: exits the switch statement.
- `default`: executes when no case matches.

### Example: Days of the Week

```java
public class Main {
    public static void main(String[] args) {

        int day = 3;

        switch (day) {

            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            case 3:
                System.out.println("Wednesday");
                break;

            case 4:
                System.out.println("Thursday");
                break;

            default:
                System.out.println("Invalid day");
        }

    }
}
```

Output:

```text
Wednesday
```

Line-by-line explanation:

1. `int day = 3;` stores the selected day number.
2. `switch (day)` tells Java to evaluate the value of `day`.
3. `case 1` checks whether the value is 1.
4. `case 2` checks whether the value is 2.
5. `case 3` checks whether the value is 3.
6. Java finds a match at `case 3`.
7. It displays `Wednesday`.
8. `break` stops execution of the switch statement.
9. The `default` block is skipped because a matching case was found.

### 10. Why Is break Important?

The `break` statement prevents Java from continuing into subsequent cases in a traditional switch statement.

Consider this example:

```java
int number = 2;

switch (number) {

    case 1:
        System.out.println("One");

    case 2:
        System.out.println("Two");

    case 3:
        System.out.println("Three");

}
```

Output:

```text
Two
Three
```

Why?

Because there is no `break` after `case 2`.

Java executes the matching case and continues executing subsequent cases. This behavior is called **fall-through**.

To avoid unintended fall-through, use `break` when appropriate.

### 11. The default Case

The `default` block executes when none of the cases match.

Example:

```java
int option = 9;

switch (option) {

    case 1:
        System.out.println("Deposit");
        break;

    case 2:
        System.out.println("Withdraw");
        break;

    default:
        System.out.println("Invalid option");

}
```

Output:

```text
Invalid option
```

### 12. Modern Switch Expressions

Modern Java also supports switch expressions, which can return values.

Example:

```java
int day = 2;

String result = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    default -> "Unknown day";
};

System.out.println(result);
```

Output:

```text
Tuesday
```

Here:

- `switch (day)` evaluates the value of `day`.
- `case 2 -> "Tuesday"` returns the matching value.
- The result is assigned to the `result` variable.
- `System.out.println(result)` displays it.

The arrow syntax avoids traditional fall-through.

---

## 13. Introduction to Loops

A loop is a control flow structure that repeatedly executes a block of code while a specified condition allows it.

Without loops, repeating an instruction would require writing it many times.

For example:

```java
System.out.println("Welcome");
System.out.println("Welcome");
System.out.println("Welcome");
System.out.println("Welcome");
System.out.println("Welcome");
```

This works, but it is inefficient.

A loop can perform the same task with fewer instructions.

Java provides several loop structures:

1. `for`
2. `while`
3. `do-while`
4. Enhanced `for` loop

## 14. The for Loop

A `for` loop is commonly used when you know how many times you want to repeat an operation.

### Syntax

```java
for (initialization; condition; update) {
    // Code to repeat
}
```

The three components:

| Component | Purpose |
|---|---|
| Initialization | Creates or initializes the counter |
| Condition | Determines whether the loop continues |
| Update | Changes the counter after each iteration |

### Example: Counting from 1 to 5

```java
public class Main {
    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

    }
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

Line-by-line explanation:

**1. `int i = 1`**

Creates a counter variable called `i` and starts it at 1.

**2. `i <= 5`**

Checks whether the counter is less than or equal to 5.

**3. `i++`**

Increases the counter by one after each iteration.

**4. `System.out.println(i)`**

Displays the current value of the counter.

### Understanding Each Iteration

| Iteration | Value of `i` | Condition | Output |
|---|---:|---|---:|
| 1 | 1 | True | 1 |
| 2 | 2 | True | 2 |
| 3 | 3 | True | 3 |
| 4 | 4 | True | 4 |
| 5 | 5 | True | 5 |
| 6 | 6 | False | Stops |

When `i` becomes 6, the condition `i <= 5` is false. The loop terminates.

### 15. Counting Backwards

A `for` loop can also count backwards.

```java
for (int i = 5; i >= 1; i--) {
    System.out.println(i);
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

- The counter starts at 5.
- The condition checks whether it is at least 1.
- `i--` decreases the counter by one.
- The loop stops when the counter becomes 0.

### 16. The while Loop

A `while` loop repeatedly executes a block of code as long as its condition remains true.

It is useful when you do not know exactly how many repetitions will be required.

Syntax:

```java
while (condition) {
    // Instructions
}
```

Example:

```java
public class Main {
    public static void main(String[] args) {

        int count = 1;

        while (count <= 5) {

            System.out.println(count);

            count++;
        }

    }
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

Explanation:

1. `int count = 1;` initializes the counter.
2. `while (count <= 5)` checks whether the counter is within the allowed range.
3. `System.out.println(count)` displays its current value.
4. `count++` increases the counter.
5. Java returns to the condition.
6. When the counter reaches 6, the condition becomes false.
7. The loop stops.

**Important:** Always ensure that a condition can eventually become false. Otherwise, you may create an infinite loop.

### 17. The do-while Loop

The `do-while` loop is similar to the `while` loop, but it checks its condition after executing the code.

Syntax:

```java
do {
    // Instructions
} while (condition);
```

Notice the semicolon after the `while` condition.

Example:

```java
public class Main {
    public static void main(String[] args) {

        int number = 1;

        do {

            System.out.println(number);

            number++;

        } while (number <= 5);

    }
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

The difference is that the `do-while` loop executes its body at least once.

Consider:

```java
int number = 10;

do {
    System.out.println(number);
} while (number < 5);
```

Output:

```text
10
```

Even though the condition is false, the body executes once before Java checks it.

Compare this with:

```java
int number = 10;

while (number < 5) {
    System.out.println(number);
}
```

Output:

```text
```

There is no output because the condition is false before the first iteration.

### 18. Enhanced for Loop

The enhanced `for` loop is also called the **for-each loop**.

It is used to process elements in arrays and other iterable collections.

Example:

```java
public class Main {
    public static void main(String[] args) {

        String[] students = {"Brian", "Mary", "John"};

        for (String student : students) {
            System.out.println(student);
        }

    }
}
```

Output:

```text
Brian
Mary
John
```

Explanation:

- `String[] students` creates an array of student names.
- `for (String student : students)` takes each element from the array.
- The current element is temporarily stored in `student`.
- `System.out.println(student)` displays the current name.
- Java repeats this process until every element has been processed.

This loop is particularly useful when you want to read all elements without manually managing an index.

### 19. Comparing Java Loops

| Loop | When to use it | Condition checked |
|---|---|---|
| `for` | When repetitions are known or counter-controlled | Before each iteration |
| `while` | When repetitions depend on a condition | Before each iteration |
| `do-while` | When code must execute at least once | After each iteration |
| Enhanced `for` | When processing array or collection elements | Iterates through available elements |

### Part 2 Exercises

1. What is the purpose of a `switch` statement?
2. Explain the purpose of `break`.
3. What is fall-through?
4. What is the difference between `while` and `do-while`?
5. Write a `for` loop that displays numbers from 10 to 1.
6. Write a `while` loop that displays even numbers from 2 to 10.
7. Explain the purpose of an enhanced `for` loop.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: ADVANCED LOOP CONTROL AND PRACTICAL PROGRAMS

## 20. Nested Loops

A nested loop is a loop placed inside another loop.

Nested loops are useful when working with:
- Tables.
- Matrices.
- Seating arrangements.
- Patterns.
- Multiple levels of data.

Example:

```java
public class Main {
    public static void main(String[] args) {

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= 2; j++) {

                System.out.println("i = " + i + ", j = " + j);

            }

        }

    }
}
```

Output:

```text
i = 1, j = 1
i = 1, j = 2
i = 2, j = 1
i = 2, j = 2
i = 3, j = 1
i = 3, j = 2
```

### How Does It Work?

There are two loops:

- The outer loop uses `i`.
- The inner loop uses `j`.

The outer loop starts with `i = 1`.

The inner loop then executes completely:

- `j = 1`
- `j = 2`

After that, the outer loop moves to `i = 2`.

The inner loop runs again.

This continues until the outer loop finishes.

**Important:** For each iteration of the outer loop, the inner loop completes all its iterations.

## 21. The break Statement in Loops

The `break` statement immediately terminates the loop in which it appears.

Example:

```java
public class Main {
    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            if (i == 5) {
                break;
            }

            System.out.println(i);
        }

    }
}
```

Output:

```text
1
2
3
4
```

Explanation:

- The loop starts at 1.
- Java checks whether `i == 5`.
- When the counter reaches 5, the condition becomes true.
- `break` immediately terminates the loop.
- The statement displaying 5 is never reached.

The loop does not continue to 10.

## 22. The continue Statement

The `continue` statement skips the remaining instructions in the current iteration and moves to the next iteration.

Example:

```java
public class Main {
    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            if (i == 3) {
                continue;
            }

            System.out.println(i);
        }

    }
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

- The loop counts from 1 to 5.
- When `i` becomes 3, the `if` condition is true.
- `continue` skips the `println()` statement for that iteration.
- The loop moves to the next value, which is 4.

### Difference Between break and continue

| Statement | Behaviour |
|---|---|
| `break` | Terminates the loop completely |
| `continue` | Skips the current iteration and continues the loop |

## 23. Infinite Loops

An infinite loop is a loop that continues indefinitely because its termination condition never becomes false.

Example:

```java
while (true) {
    System.out.println("Running...");
}
```

This loop never stops on its own.

Infinite loops are not always mistakes. They can be useful in:
- Server applications.
- Monitoring systems.
- Event-processing applications.
- Programs that wait for user input.

However, they need a suitable exit mechanism.

Example:

```java
int number = 1;

while (true) {

    System.out.println(number);

    if (number == 5) {
        break;
    }

    number++;
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

Here, `break` provides a way to exit the infinite loop.

## 24. Labels in break and continue

Java supports labelled statements, which can be used to control an outer loop from inside a nested loop.

Example:

```java
public class Main {
    public static void main(String[] args) {

        outer:
        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= 3; j++) {

                if (i == 2 && j == 2) {
                    break outer;
                }

                System.out.println(i + ", " + j);
            }
        }

    }
}
```

Output:

```text
1, 1
1, 2
1, 3
2, 1
```

Explanation:

- `outer:` gives the outer loop a label.
- Both loops execute normally until `i` is 2 and `j` is 2.
- `break outer` terminates the entire outer loop.
- Both loops stop.

This feature is useful in certain complex nested-loop situations, but ordinary `break` and `continue` are sufficient for most beginner programs.

---

# 25. Practical Project 1: Student Grade Classification System

We will now combine conditions and user input to build a simple student grading system.

### Step 1: Create the Project

Create a folder named:

```text
JavaControlFlow
```

Inside it, create a file:

```text
GradeSystem.java
```

### Step 2: Write the Code

```java
import java.util.Scanner;

public class GradeSystem {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter student marks: ");
        int marks = input.nextInt();

        if (marks < 0 || marks > 100) {

            System.out.println("Invalid marks.");

        } else if (marks >= 80) {

            System.out.println("Grade A");

        } else if (marks >= 70) {

            System.out.println("Grade B");

        } else if (marks >= 60) {

            System.out.println("Grade C");

        } else if (marks >= 50) {

            System.out.println("Grade D");

        } else {

            System.out.println("Fail");

        }

        input.close();
    }
}
```

### Step 3: Understand the Code

**Importing Scanner**

```java
import java.util.Scanner;
```

This imports the `Scanner` class, which allows the program to receive input from the keyboard.

**Creating the input object**

```java
Scanner input = new Scanner(System.in);
```

This creates a Scanner object named `input`.

`System.in` tells Scanner to read input from the keyboard.

**Requesting marks**

```java
System.out.print("Enter student marks: ");
```

Displays a message asking the user to enter marks.

**Receiving input**

```java
int marks = input.nextInt();
```

Reads the integer entered by the user and stores it in `marks`.

**Checking invalid marks**

```java
if (marks < 0 || marks > 100)
```

Checks whether marks are below zero or above 100.

The `||` operator means that either condition can make the entire expression true.

**Checking the grades**

The remaining `else if` statements check the student's marks against different grade boundaries.

Java stops when it finds the first matching condition.

**Closing Scanner**

```java
input.close();
```

Closes the Scanner after the program has finished using it.

### Step 4: Run the Program

Open a terminal in the project folder.

Compile:

```bash
javac GradeSystem.java
```

Run:

```bash
java GradeSystem
```

Example interaction:

```text
Enter student marks: 85
Grade A
```

Try entering:

```text
Enter student marks: 45
Fail
```

And:

```text
Enter student marks: 120
Invalid marks.
```

**What you have learned:** Conditions, logical operators, user input and decision-making.

---

# 26. Practical Project 2: Simple Banking Menu

A banking application can use a `switch` statement to process customer selections.

### Step 1: Create a File

Create:

```text
BankingMenu.java
```

### Step 2: Write the Code

```java
import java.util.Scanner;

public class BankingMenu {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        double balance = 5000;

        System.out.println("===== BANKING SYSTEM =====");
        System.out.println("1. Check Balance");
        System.out.println("2. Deposit");
        System.out.println("3. Withdraw");
        System.out.println("4. Exit");

        System.out.print("Select an option: ");

        int option = input.nextInt();

        switch (option) {

            case 1:
                System.out.println("Your balance is: " + balance);
                break;

            case 2:
                System.out.print("Enter deposit amount: ");
                double deposit = input.nextDouble();

                if (deposit > 0) {
                    balance += deposit;
                    System.out.println("Deposit successful.");
                    System.out.println("New balance: " + balance);
                } else {
                    System.out.println("Invalid deposit amount.");
                }

                break;

            case 3:
                System.out.print("Enter withdrawal amount: ");
                double withdrawal = input.nextDouble();

                if (withdrawal > 0 && withdrawal <= balance) {
                    balance -= withdrawal;
                    System.out.println("Withdrawal successful.");
                    System.out.println("Remaining balance: " + balance);
                } else {
                    System.out.println("Invalid withdrawal amount or insufficient funds.");
                }

                break;

            case 4:
                System.out.println("Thank you for using our banking system.");
                break;

            default:
                System.out.println("Invalid option.");
        }

        input.close();
    }
}
```

### Step 3: Understand the Important Sections

**Starting balance**

```java
double balance = 5000;
```

Creates a variable representing the customer's account balance.

A `double` allows decimal values.

**Displaying the menu**

The `System.out.println()` statements display the available banking operations.

**Receiving the selection**

```java
int option = input.nextInt();
```

Stores the user's selected option.

**Processing the selection**

```java
switch (option)
```

Checks which banking operation the user selected.

**Depositing money**

```java
balance += deposit;
```

Adds the deposit amount to the existing balance.

It is equivalent to:

```java
balance = balance + deposit;
```

**Withdrawing money**

```java
balance -= withdrawal;
```

Subtracts the withdrawal amount from the balance.

It is equivalent to:

```java
balance = balance - withdrawal;
```

**Validating withdrawals**

```java
withdrawal > 0 && withdrawal <= balance
```

Checks two things:

1. The withdrawal amount must be greater than zero.
2. The withdrawal must not exceed the available balance.

Both conditions must be true.

### Step 4: Run the Program

Compile:

```bash
javac BankingMenu.java
```

Run:

```bash
java BankingMenu
```

Example:

```text
===== BANKING SYSTEM =====
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Select an option: 2
Enter deposit amount: 1000
Deposit successful.
New balance: 6000.0
```

**Important limitation:** This program processes only one menu selection and then exits. The balance is held in memory and is not saved permanently.

A real banking application would need persistent storage, authentication, transaction records and stronger financial safeguards.

---

# 27. Practical Project 3: Multiplication Table Generator

This project demonstrates how to use a `for` loop to perform repeated calculations.

### Step 1: Create a File

```text
MultiplicationTable.java
```

### Step 2: Write the Code

```java
import java.util.Scanner;

public class MultiplicationTable {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = input.nextInt();

        for (int i = 1; i <= 10; i++) {

            int result = number * i;

            System.out.println(number + " x " + i + " = " + result);
        }

        input.close();
    }
}
```

### Step 3: Understand the Logic

```java
int number = input.nextInt();
```

Receives the number whose multiplication table should be generated.

```java
for (int i = 1; i <= 10; i++)
```

Creates a loop that runs ten times.

```java
int result = number * i;
```

Multiplies the selected number by the current loop counter.

```java
System.out.println(number + " x " + i + " = " + result);
```

Displays the multiplication operation and its answer.

### Step 4: Expected Output

If the user enters 5:

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

---

# 28. Common Control Flow Mistakes

| Mistake | Why it happens | Correction |
|---|---|---|
| Using `=` instead of `==` in a comparison | Confusing assignment with equality | Use `==` to compare primitive values |
| Forgetting `break` in a traditional switch | Not understanding fall-through | Add `break` where necessary |
| Forgetting to update a loop counter | The loop condition never changes | Update the counter appropriately |
| Using `<=` instead of `<` unintentionally | Misunderstanding loop boundaries | Check whether the final value should be included |
| Placing conditions in the wrong order | A broad condition matches too early | Test the most specific conditions first |
| Forgetting the semicolon after `do-while` | Syntax mistake | End the condition with `;` |
| Creating an accidental infinite loop | The condition never becomes false | Ensure the loop can terminate |

### Example of a Common Mistake

Incorrect:

```java
int number = 1;

while (number <= 5) {
    System.out.println(number);
}
```

Why is this incorrect?

The variable `number` never changes.

Therefore, the condition remains true forever.

Correct:

```java
int number = 1;

while (number <= 5) {
    System.out.println(number);
    number++;
}
```

Now the counter increases after each iteration, allowing the loop to terminate.

---

# 29. Part 3 Practical Exercises

Complete these exercises yourself.

### Exercise 1: Positive and Negative Number Checker

Write a Java program that:
- Requests a number from the user.
- Checks whether it is positive, negative or zero.
- Displays the appropriate message.

### Exercise 2: Even and Odd Number Checker

Write a program that determines whether an integer is even or odd.

Hint: Use the modulus operator `%`.

### Exercise 3: Number Counter

Use a `while` loop to display all numbers from 1 to 20.

### Exercise 4: Sum of Numbers

Use a `for` loop to calculate the sum of numbers from 1 to 100.

Expected result:

```text
5050
```

### Exercise 5: Menu-Driven Calculator

Create a calculator using a `switch` statement.

It should support:
- Addition.
- Subtraction.
- Multiplication.
- Division.

The user should select an operation and enter two numbers.

Also handle division by zero.

### Exercise 6: Pattern Printing

Use nested loops to produce:

```text
*
**
***
****
*****
```

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

## 30. Lesson Summary

You have studied how Java controls the execution of programs.

| Concept | Purpose |
|---|---|
| Sequential execution | Executes statements in order |
| `if` | Executes code when a condition is true |
| `if-else` | Selects between two alternatives |
| `else-if` | Selects between multiple alternatives |
| Nested `if` | Places decisions inside other decisions |
| `switch` | Selects an operation based on matching values |
| `for` | Repeats instructions using a counter |
| `while` | Repeats while a condition is true |
| `do-while` | Executes at least once before checking |
| Enhanced `for` | Processes array or collection elements |
| Nested loops | Places one loop inside another |
| `break` | Terminates a loop or switch |
| `continue` | Skips the current loop iteration |

## 31. Kai Assessment

Answer the following questions to demonstrate your understanding.

### Section A: Multiple Choice Questions

**Question 1**

What is control flow?

A. The process of creating variables.

B. The order in which program instructions execute.

C. The process of compiling Java.

D. A method of storing information.

**Question 2**

Which statement executes code only when a condition is true?

A. `switch`

B. `for`

C. `if`

D. `break`

**Question 3**

Which operator requires both conditions to be true?

A. `||`

B. `&&`

C. `!`

D. `=`

**Question 4**

Which statement is used to select between multiple matching values?

A. `switch`

B. `while`

C. `continue`

D. `return`

**Question 5**

Which loop executes its body at least once?

A. `for`

B. `while`

C. `do-while`

D. Enhanced `for`

**Question 6**

What does `break` do inside a loop?

A. Restarts the loop.

B. Terminates the loop.

C. Skips only one statement.

D. Increases the counter.

**Question 7**

Which loop is especially useful when processing every element in an array?

A. Enhanced `for`

B. `do-while`

C. `switch`

D. Nested `if`

**Question 8**

What does `continue` do?

A. Terminates the entire program.

B. Stops the current loop permanently.

C. Skips the current iteration.

D. Resets the counter to zero.

### Section B: Understanding Concepts

**Question 9**

Explain the difference between `if` and `if-else`.

**Question 10**

Explain how an `if-else-if` ladder works.

**Question 11**

What is the difference between `while` and `do-while`?

**Question 12**

Explain why the `break` statement is useful in a traditional switch statement.

**Question 13**

What is an infinite loop? Give one example of how it can happen.

**Question 14**

Explain the difference between a nested loop and a normal loop.

### Section C: Practical Programming

**Question 15: Grade Calculator**

Write a Java program that accepts marks and displays:

- 80–100: Excellent
- 70–79: Very Good
- 60–69: Good
- 50–59: Average
- Below 50: Fail

Your program must also reject marks below 0 or above 100.

**Question 16: Counting Program**

Write a `for` loop that displays all even numbers between 1 and 50.

**Question 17: Calculator**

Write a menu-driven calculator using a `switch` statement.

It should perform:
- Addition.
- Subtraction.
- Multiplication.
- Division.

**Question 18: Multiplication Tables**

Write a program that accepts a number and generates its multiplication table from 1 to 12.

### Section D: Debugging

**Question 19: Find the Error**

Consider this program:

```java
int number = 1;

while (number <= 5) {
    System.out.println(number);
}
```

Identify the problem and correct it.

**Question 20: Predict the Output**

What will this program display?

```java
for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    System.out.println(i);
}
```

Explain why.

---

## 32. Final Practical Challenge: Student Management Console

Build a small Java console application that combines the concepts covered in this lesson.

### Requirements

Your application should:

1. Display a menu:
   - 1. Check student grade.
   - 2. Check whether a number is even or odd.
   - 3. Generate a multiplication table.
   - 4. Exit.

2. Use a `switch` statement to process menu selections.

3. Use `if-else` statements for decisions.

4. Use loops to generate multiplication tables.

5. Validate incorrect inputs where appropriate.

6. Display helpful messages to the user.

### Expected Menu

```text
===== STUDENT MANAGEMENT CONSOLE =====

1. Check Student Grade
2. Even or Odd Checker
3. Multiplication Table
4. Exit

Select an option:
```

The application should process the selected operation and display the appropriate result.

**Challenge:** Improve the application so that the menu appears again after completing an operation. You can achieve this using a loop around the menu and exit when the user selects option 4.

This will combine selection, iteration, input and loop control in one application.

---

## 33. Submit Your Work to Kai

After completing the assessment and practical challenge, submit your answers to Kai, your AI instructor.

Kai should evaluate:

- Understanding of control flow concepts.
- Correct use of conditional statements.
- Correct use of switch statements.
- Ability to write and control loops.
- Understanding of `break` and `continue`.
- Correctness of practical programs.
- Ability to identify and correct programming errors.

Kai should provide:
1. Your assessment score.
2. Correct answers for questions you missed.
3. Explanations of programming mistakes.
4. Suggestions for improving your code.
5. A completion status.

## 34. Lesson Completion Checklist

Before moving forward, confirm that you can:

- [ ] Explain what control flow means.
- [ ] Use `if`, `else` and `else-if`.
- [ ] Write nested conditional statements.
- [ ] Combine conditions using logical operators.
- [ ] Use `switch` statements.
- [ ] Explain switch fall-through.
- [ ] Write `for` loops.
- [ ] Write `while` loops.
- [ ] Write `do-while` loops.
- [ ] Use enhanced `for` loops.
- [ ] Create nested loops.
- [ ] Explain and use `break` and `continue`.
- [ ] Build menu-driven Java applications.

# LESSON COMPLETE

**Java: Control Flow**

You have completed all four parts of this lesson.

**Part 4 of 4 — Lesson Complete**

**Recommended Next Lesson: Java Methods (Functions)**

Methods will teach you how to organize Java code into reusable blocks, accept parameters, return values and build more structured applications.