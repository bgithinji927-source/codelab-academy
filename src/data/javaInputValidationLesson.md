# Java: Input Validation and Failure Cases

## Learning Objectives

By the end of this lesson, you should be able to:

1. Explain input validation and why it matters.
2. Identify invalid, missing, and unexpected input.
3. Validate strings, numbers, and user input.
4. Use conditional statements to prevent invalid operations.
5. Understand exceptions and failure cases.
6. Handle exceptions using `try`, `catch`, and `finally`.
7. Use `throw` and `throws`.
8. Create custom exceptions.
9. Apply defensive programming techniques.
10. Build Java applications that handle errors safely.

# PART 1 OF 4: UNDERSTANDING INPUT VALIDATION

## 1. What Is Input Validation?

Input validation is the process of checking information before allowing an application to use or process it.

When users interact with an application, they provide information through forms, keyboards, APIs, files, and other sources.

However, not all information received is correct.

For example, imagine developing a banking application.

The application asks a customer to enter an amount to deposit.

The customer might enter:

- `5000` — valid amount.
- `-500` — invalid because deposits cannot be negative.
- `0` — invalid if deposits must be greater than zero.
- `hello` — invalid because the application expects a number.
- An empty value — invalid because the amount is missing.

Without validation, incorrect information might cause errors or lead to incorrect calculations.

Input validation helps ensure that data meets the application's requirements before processing begins.

## 2. Why Is Input Validation Important?

### A. Preventing incorrect data

Suppose a student management application accepts examination marks.

The expected marks should be between 0 and 100.

If a student enters:

```text
150
```

The application should reject the value because it exceeds the allowed range.

### B. Preventing application crashes

Suppose an application expects an integer but receives text.

Trying to convert the text directly into an integer can cause an exception.

Validation helps identify the problem before the application performs operations that require valid data.

### C. Protecting application functionality

Imagine an e-commerce application that allows customers to enter quantities.

A customer should not be able to purchase:

- Negative quantities.
- Zero items.
- An unrealistic quantity beyond the application's limits.

Validation ensures that application rules are followed.

### D. Improving security

Input validation is an important part of application security.

It helps prevent unexpected data from reaching sensitive operations.

For example:

- Rejecting malformed identifiers.
- Checking file types before processing uploads.
- Restricting input lengths.
- Validating API request fields.
- Checking that numeric values are within acceptable ranges.

However, input validation alone does not prevent every security vulnerability. Applications must also use techniques such as parameterized database queries, authorization checks, output encoding, and appropriate file-handling controls.

## 3. Types of Invalid Input

Different types of input problems require different validation techniques.

| Input problem | Example | Validation required |
|---|---|---|
| Missing input | Empty username | Check that a value exists |
| Wrong data type | Entering `hello` instead of `25` | Check data format |
| Invalid range | Age entered as `-5` | Check minimum and maximum |
| Incorrect format | Invalid email address | Check format |
| Unexpected value | Unsupported payment method | Check allowed options |
| Excessive input | Username containing thousands of characters | Check length |
| Duplicate data | Existing registration number | Check uniqueness |
| Invalid relationship | End date before start date | Check consistency |

## 4. Understanding Required and Optional Input

Not every field in an application must contain information.

A required field must be provided.

An optional field may be left empty.

Example of a registration form:

| Field | Requirement |
|---|---|
| Full name | Required |
| Email | Required |
| Phone number | Required |
| Middle name | Optional |
| Address | Optional |

A Java application should distinguish between these two situations.

For example:

```java
String name = "";
```

This creates an empty string.

To check whether the user provided a name:

```java
if (name.isEmpty()) {

    System.out.println("Name is required");

}
```

The `isEmpty()` method checks whether the string contains zero characters.

A more defensive check is:

```java
if (name == null || name.isBlank()) {

    System.out.println("Name is required");

}
```

Explanation:

- `name == null` checks whether the variable has no string object assigned.
- `name.isBlank()` checks whether the string is empty or contains only whitespace.
- `||` means OR.
- If either condition is true, the name is rejected.

**Important:** Calling `isBlank()` on `null` would cause a `NullPointerException`. The OR condition prevents that because Java evaluates the right side only when necessary.

## 5. Validating String Input

Strings are commonly used for names, usernames, addresses, and other textual information.

Consider a username that must:

- Not be empty.
- Contain at least 4 characters.
- Contain no more than 20 characters.

Example:

```java
public class Main {

    public static void main(String[] args) {

        String username = "Brian";

        if (username == null || username.isBlank()) {

            System.out.println("Username is required");

        } else if (username.length() < 4) {

            System.out.println("Username is too short");

        } else if (username.length() > 20) {

            System.out.println("Username is too long");

        } else {

            System.out.println("Username accepted");

        }

    }

}
```

### Line-by-line explanation

```java
String username = "Brian";
```

Creates a string variable containing the username.

```java
if (username == null || username.isBlank()) {
```

Checks whether the username is missing or contains only whitespace.

```java
System.out.println("Username is required");
```

Displays an error if the username is missing.

```java
else if (username.length() < 4) {
```

Checks whether the username contains fewer than four characters.

```java
else if (username.length() > 20) {
```

Checks whether the username exceeds the maximum permitted length.

```java
else {
```

Runs when none of the invalid conditions is true.

### Expected output

```text
Username accepted
```

## 6. Validating Numeric Input

Applications frequently request numbers.

Examples include:

- Age.
- Salary.
- Examination marks.
- Product quantities.
- Account balances.

Suppose a student must enter examination marks between 0 and 100.

Example:

```java
public class Main {

    public static void main(String[] args) {

        int marks = 85;

        if (marks < 0 || marks > 100) {

            System.out.println("Invalid marks");

        } else {

            System.out.println("Marks accepted");

        }

    }

}
```

### Explanation

```java
int marks = 85;
```

Stores the examination marks.

```java
if (marks < 0 || marks > 100)
```

Checks whether the marks are below zero or above 100.

```java
System.out.println("Invalid marks");
```

Displays an error when the marks fall outside the permitted range.

```java
else
```

Executes when the marks are valid.

### Expected output

```text
Marks accepted
```

## 7. Validating Multiple Conditions

Sometimes an application requires several conditions to be satisfied.

For example, a user registering for a service must:

- Provide a username.
- Provide a valid age.
- Accept the terms and conditions.

Example:

```java
public class Main {

    public static void main(String[] args) {

        String username = "Brian";

        int age = 22;

        boolean acceptedTerms = true;

        if (username.isBlank()) {

            System.out.println("Username is required");

        } else if (age < 18) {

            System.out.println("You must be at least 18");

        } else if (!acceptedTerms) {

            System.out.println("Accept the terms first");

        } else {

            System.out.println("Registration successful");

        }

    }

}
```

The application checks each condition in order.

The `!` operator means NOT.

Therefore:

```java
!acceptedTerms
```

means the user has not accepted the terms.

### Part 1 Exercises

1. Define input validation.
2. Give five reasons why input validation is important.
3. Differentiate between required and optional input.
4. What is the difference between `isEmpty()` and `isBlank()`?
5. Why should an application validate numeric ranges?
6. Write a Java program that accepts marks between 0 and 100.
7. Write a program that rejects usernames shorter than five characters.
8. Explain the purpose of the `||` and `&&` operators in validation.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: EXCEPTIONS AND FAILURE HANDLING

## 1. What Is an Exception?

An exception is an event that occurs during program execution and interrupts the normal flow of instructions.

Exceptions commonly occur when a program encounters an unexpected situation.

For example:

- Dividing a number by zero.
- Converting invalid text into a number.
- Accessing an array position that does not exist.
- Trying to use a null reference.
- Opening a file that cannot be found.

Consider this program:

```java
public class Main {

    public static void main(String[] args) {

        int result = 10 / 0;

        System.out.println(result);

    }

}
```

This program attempts to divide 10 by zero.

Java throws an `ArithmeticException`.

The statement that prints the result is never executed.

### Expected error

```text
Exception in thread "main" java.lang.ArithmeticException: / by zero
```

This demonstrates why applications must anticipate possible failures.

## 2. Understanding Errors, Exceptions, and Validation

These concepts are related but different.

| Concept | Meaning | Example |
|---|---|---|
| Validation | Checks data before processing | Rejecting negative age |
| Exception | An event that disrupts normal execution | Invalid number conversion |
| Error | A serious problem that applications generally should not try to recover from | `OutOfMemoryError` |
| Failure handling | Managing an unexpected situation safely | Catching an invalid input exception |

A validation failure does not always need to become an exception.

For example, if a username is too short, you can simply display an error message.

Exceptions are more appropriate when an operation cannot proceed normally.

## 3. Types of Exceptions in Java

Java exceptions are generally divided into two major categories.

### A. Checked Exceptions

Checked exceptions are exceptions that the compiler requires you to handle or declare.

They are checked during compilation.

Examples include:

- `IOException`
- `FileNotFoundException`
- `SQLException`

Example:

```java
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        try {

            FileReader reader = new FileReader("data.txt");

            reader.close();

        } catch (IOException e) {

            System.out.println("File operation failed");

        }

    }

}
```

Explanation:

```java
import java.io.FileReader;
```

Imports the class used to read files.

```java
import java.io.IOException;
```

Imports the exception type used for file input/output failures.

```java
try {
```

Begins a block containing code that might throw an exception.

```java
FileReader reader = new FileReader("data.txt");
```

Attempts to open the file named `data.txt`.

If the file does not exist or cannot be opened, an `IOException` may occur.

```java
reader.close();
```

Closes the file reader after use.

```java
catch (IOException e) {
```

Catches an `IOException` if one occurs in the `try` block.

```java
System.out.println("File operation failed");
```

Displays a useful message instead of allowing the exception to go unhandled.

For more reliable resource management, Java provides try-with-resources, which automatically closes resources.

Example:

```java
try (FileReader reader = new FileReader("data.txt")) {

    System.out.println("File opened successfully");

} catch (IOException e) {

    System.out.println("Unable to open file");

}
```

The reader is automatically closed when the try block finishes.

### B. Unchecked Exceptions

Unchecked exceptions are runtime exceptions that the compiler does not require you to catch or declare.

Examples:

| Exception | Cause |
|---|---|
| `ArithmeticException` | Invalid arithmetic operation |
| `NullPointerException` | Using a null reference improperly |
| `ArrayIndexOutOfBoundsException` | Accessing an invalid array index |
| `NumberFormatException` | Converting invalid text into a number |
| `IllegalArgumentException` | Supplying an invalid method argument |
| `ClassCastException` | Performing an invalid type cast |

Example:

```java
public class Main {

    public static void main(String[] args) {

        String value = "hello";

        int number = Integer.parseInt(value);

        System.out.println(number);

    }

}
```

The application attempts to convert `"hello"` into an integer.

This causes a `NumberFormatException`.

The input is not a valid integer representation.

## 4. Understanding `try` and `catch`

Java uses `try` and `catch` to handle exceptions.

The `try` block contains code that might fail.

The `catch` block contains instructions for responding to a particular exception.

Example:

```java
public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

            System.out.println(result);

        } catch (ArithmeticException e) {

            System.out.println("You cannot divide by zero");

        }

        System.out.println("Application continues");

    }

}
```

### Line-by-line explanation

```java
try {
```

Starts the section of code that might produce an exception.

```java
int result = 10 / 0;
```

Attempts an invalid division.

```java
catch (ArithmeticException e) {
```

Catches the arithmetic exception.

The variable `e` represents the exception object.

```java
System.out.println("You cannot divide by zero");
```

Displays an explanation of the problem.

```java
System.out.println("Application continues");
```

Runs after the exception has been handled.

### Expected output

```text
You cannot divide by zero
Application continues
```

The application continues because the exception was handled.

## 5. Understanding Multiple Catch Blocks

One operation can produce different types of exceptions.

Java allows you to use multiple `catch` blocks.

Example:

```java
public class Main {

    public static void main(String[] args) {

        try {

            String value = "25";

            int number = Integer.parseInt(value);

            int result = 100 / number;

            System.out.println(result);

        } catch (NumberFormatException e) {

            System.out.println("Enter a valid number");

        } catch (ArithmeticException e) {

            System.out.println("Cannot divide by zero");

        }

    }

}
```

The first catch block handles invalid number conversion.

The second handles division by zero.

### Important rule

When using multiple catch blocks, more specific exception types should appear before broader exception types.

For example, `NumberFormatException` is a subclass of `IllegalArgumentException`.

Therefore, placing a catch block for `IllegalArgumentException` before one for `NumberFormatException` can make the more specific catch unreachable.

## 6. Understanding `finally`

The `finally` block contains code that runs after the try/catch processing, whether an exception occurred or not in ordinary execution.

It is commonly used for cleanup operations.

Example:

```java
public class Main {

    public static void main(String[] args) {

        try {

            int result = 20 / 2;

            System.out.println(result);

        } catch (ArithmeticException e) {

            System.out.println("Calculation failed");

        } finally {

            System.out.println("Calculation process finished");

        }

    }

}
```

### Expected output

```text
10
Calculation process finished
```

The `finally` block also runs if the calculation throws an exception.

**Important:** `finally` is not an absolute guarantee under every possible situation. For example, abrupt JVM termination can prevent it from running. For closing resources, try-with-resources is generally preferred.

## 7. Understanding `throw`

The `throw` keyword allows a programmer to explicitly throw an exception.

Example:

```java
public class Main {

    public static void main(String[] args) {

        int age = 15;

        if (age < 18) {

            throw new IllegalArgumentException("Age must be at least 18");

        }

        System.out.println("Access granted");

    }

}
```

Explanation:

```java
int age = 15;
```

Stores the user's age.

```java
if (age < 18) {
```

Checks whether the user is below the minimum age.

```java
throw new IllegalArgumentException(...)
```

Creates and throws an exception because the supplied age violates the application's rule.

The program stops normal execution at this point unless the exception is caught by an appropriate handler.

## 8. Understanding `throws`

The `throws` keyword declares that a method may pass an exception to the code that calls it.

Example:

```java
import java.io.FileReader;
import java.io.IOException;

public class Main {

    public static void readFile() throws IOException {

        FileReader reader = new FileReader("data.txt");

        reader.close();

    }

}
```

The method declares that it may throw an `IOException`.

A caller must handle or declare the checked exception.

For example:

```java
public static void main(String[] args) {

    try {

        readFile();

    } catch (IOException e) {

        System.out.println("Unable to read file");

    }

}
```

### Difference between `throw` and `throws`

| `throw` | `throws` |
|---|---|
| Explicitly throws an exception | Declares possible exceptions in a method signature |
| Used inside a method or block | Used in a method declaration |
| Throws an exception object | Lists exception types |
| Example: `throw new IOException()` | Example: `void read() throws IOException` |

## 9. Understanding Custom Exceptions

Java allows developers to create their own exception classes.

This is useful when an application has specific business rules.

For example, a banking application may need an exception for insufficient funds.

Create:

```java
public class InsufficientFundsException extends Exception {

    public InsufficientFundsException(String message) {

        super(message);

    }

}
```

Explanation:

```java
extends Exception
```

This makes the custom exception a checked exception.

```java
public InsufficientFundsException(String message)
```

This is the constructor.

```java
super(message);
```

This passes the error message to the parent `Exception` class.

Now create a banking application:

```java
public class BankAccount {

    private double balance = 5000;

    public void withdraw(double amount)
            throws InsufficientFundsException {

        if (amount <= 0) {

            throw new IllegalArgumentException(
                    "Withdrawal must be greater than zero"
            );

        }

        if (amount > balance) {

            throw new InsufficientFundsException(
                    "Insufficient account balance"
            );

        }

        balance -= amount;

        System.out.println("Withdrawal successful");

    }

}
```

### Understanding the important statements

```java
private double balance = 5000;
```

Creates an account balance of KSh 5,000.

```java
throws InsufficientFundsException
```

Declares that the method may throw the custom checked exception.

```java
if (amount <= 0)
```

Rejects zero or negative withdrawal amounts.

```java
throw new IllegalArgumentException(...)
```

Throws an unchecked exception for an invalid withdrawal amount.

```java
if (amount > balance)
```

Checks whether the requested withdrawal exceeds the available balance.

```java
throw new InsufficientFundsException(...)
```

Throws the custom exception when the account does not have enough money.

```java
balance -= amount;
```

Subtracts the withdrawal amount from the account balance.

This operation only happens after the validations pass.

### Part 2 Exercises

1. Define an exception.
2. Differentiate between checked and unchecked exceptions.
3. Give four examples of unchecked exceptions.
4. What is the purpose of `try`?
5. What does `catch` do?
6. Explain the purpose of `finally`.
7. Differentiate between `throw` and `throws`.
8. What is a custom exception?
9. Create a custom exception called `InvalidAgeException`.
10. Explain why try-with-resources is useful.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL INPUT VALIDATION AND FAILURE HANDLING

In this part, you will build a Java application that accepts user input, validates it, and handles unexpected situations.

## PRACTICAL 1: VALIDATING USER INPUT WITH SCANNER

### Step 1: Create a project

Create a folder:

```text
InputValidation/
    Main.java
```

### Step 2: Write the program

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your age: ");

        if (scanner.hasNextInt()) {

            int age = scanner.nextInt();

            if (age >= 18 && age <= 100) {

                System.out.println("Age accepted");

            } else {

                System.out.println("Age must be between 18 and 100");

            }

        } else {

            System.out.println("Please enter a valid whole number");

        }

        scanner.close();

    }

}
```

### Line-by-line explanation

```java
import java.util.Scanner;
```

Imports the Scanner class for reading keyboard input.

```java
Scanner scanner = new Scanner(System.in);
```

Creates a Scanner object connected to standard input.

```java
System.out.print("Enter your age: ");
```

Displays a prompt.

```java
if (scanner.hasNextInt()) {
```

Checks whether the next input can be interpreted as an integer.

This prevents calling `nextInt()` when the input is text such as `"hello"`.

```java
int age = scanner.nextInt();
```

Reads the integer entered by the user.

```java
if (age >= 18 && age <= 100)
```

Checks whether the age is within the permitted range.

The `&&` operator means both conditions must be true.

```java
System.out.println("Age accepted");
```

Displays a success message when the age is valid.

```java
else
```

Handles ages outside the permitted range.

```java
System.out.println("Please enter a valid whole number");
```

Displays an error when the user enters something that is not an integer.

```java
scanner.close();
```

Closes the Scanner after use.

### Example 1: Valid input

```text
Enter your age: 22
Age accepted
```

### Example 2: Invalid range

```text
Enter your age: 15
Age must be between 18 and 100
```

### Example 3: Wrong data type

```text
Enter your age: hello
Please enter a valid whole number
```

**Important:** This example validates one input attempt. A production application might place the input operation inside a loop so the user can try again.

---

## PRACTICAL 2: BUILDING A STUDENT MARKS VALIDATOR

You will now create a program that accepts marks for three subjects.

The program must:

1. Accept three marks.
2. Ensure each mark is between 0 and 100.
3. Calculate the average.
4. Display the average.
5. Determine the student's grade.

### Step 1: Create Main.java

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter marks for subject 1: ");

        if (!scanner.hasNextDouble()) {

            System.out.println("Invalid input");

            scanner.close();

            return;

        }

        double mark1 = scanner.nextDouble();

        System.out.print("Enter marks for subject 2: ");

        if (!scanner.hasNextDouble()) {

            System.out.println("Invalid input");

            scanner.close();

            return;

        }

        double mark2 = scanner.nextDouble();

        System.out.print("Enter marks for subject 3: ");

        if (!scanner.hasNextDouble()) {

            System.out.println("Invalid input");

            scanner.close();

            return;

        }

        double mark3 = scanner.nextDouble();

        if (mark1 < 0 || mark1 > 100 ||
            mark2 < 0 || mark2 > 100 ||
            mark3 < 0 || mark3 > 100) {

            System.out.println("Marks must be between 0 and 100");

            scanner.close();

            return;

        }

        double average = (mark1 + mark2 + mark3) / 3;

        System.out.println("Average: " + average);

        if (average >= 70) {

            System.out.println("Grade: A");

        } else if (average >= 60) {

            System.out.println("Grade: B");

        } else if (average >= 50) {

            System.out.println("Grade: C");

        } else {

            System.out.println("Grade: D");

        }

        scanner.close();

    }

}
```

### Understanding the program

#### Importing Scanner

```java
import java.util.Scanner;
```

This allows the program to accept keyboard input.

#### Creating the Scanner

```java
Scanner scanner = new Scanner(System.in);
```

This connects the application to the keyboard input stream.

#### Checking the first mark

```java
if (!scanner.hasNextDouble()) {
```

`hasNextDouble()` checks whether the next token can be read as a double.

The `!` operator reverses the result.

Therefore, the condition is true when the input is not a valid double.

#### Returning from the program

```java
return;
```

This exits the `main()` method immediately.

It prevents the program from continuing with invalid input.

#### Reading the marks

```java
double mark1 = scanner.nextDouble();
```

Reads the first mark as a decimal number.

The same process is repeated for the other two subjects.

#### Validating the ranges

```java
if (mark1 < 0 || mark1 > 100 ||
    mark2 < 0 || mark2 > 100 ||
    mark3 < 0 || mark3 > 100)
```

Checks all three marks.

If any mark is below zero or above 100, the condition becomes true.

#### Calculating the average

```java
double average = (mark1 + mark2 + mark3) / 3;
```

Adds the three marks and divides the result by three.

#### Determining the grade

The program uses conditional statements to determine the grade based on the average.

For this example, the grading thresholds are illustrative and can be changed to match an institution's official grading policy.

### Example output

```text
Enter marks for subject 1: 80
Enter marks for subject 2: 75
Enter marks for subject 3: 90

Average: 81.66666666666667
Grade: A
```

### Why is validation performed before calculating the average?

Because invalid marks should never be included in the calculation.

For example, a mark of 150 would produce a misleading average.

Validation protects the correctness of the application's results.

---

## PRACTICAL 3: BANK ACCOUNT WITH EXCEPTION HANDLING

Now build a simple banking application.

It should:

- Store an account balance.
- Accept deposits.
- Accept withdrawals.
- Reject negative amounts.
- Prevent withdrawals exceeding the balance.
- Handle errors without terminating unexpectedly.

### Step 1: Create InsufficientFundsException.java

```java
public class InsufficientFundsException extends Exception {

    public InsufficientFundsException(String message) {

        super(message);

    }

}
```

This creates a custom checked exception for insufficient funds.

### Step 2: Create BankAccount.java

```java
public class BankAccount {

    private double balance;

    public BankAccount(double initialBalance) {

        if (initialBalance < 0) {

            throw new IllegalArgumentException(
                    "Initial balance cannot be negative"
            );

        }

        this.balance = initialBalance;

    }

    public void deposit(double amount) {

        if (!Double.isFinite(amount) || amount <= 0) {

            throw new IllegalArgumentException(
                    "Deposit must be a valid positive amount"
            );

        }

        balance += amount;

    }

    public void withdraw(double amount)
            throws InsufficientFundsException {

        if (!Double.isFinite(amount) || amount <= 0) {

            throw new IllegalArgumentException(
                    "Withdrawal must be a valid positive amount"
            );

        }

        if (amount > balance) {

            throw new InsufficientFundsException(
                    "Insufficient funds"
            );

        }

        balance -= amount;

    }

    public double getBalance() {

        return balance;

    }

}
```

### Explanation

#### The balance field

```java
private double balance;
```

Stores the account balance.

It is private to prevent other classes from changing it directly.

#### The constructor

```java
public BankAccount(double initialBalance)
```

Receives the opening account balance.

#### Initial balance validation

```java
if (initialBalance < 0)
```

Rejects a negative opening balance.

#### Assigning the balance

```java
this.balance = initialBalance;
```

Stores the validated opening balance.

#### Deposit method

```java
public void deposit(double amount)
```

Creates a method for depositing money.

```java
if (!Double.isFinite(amount) || amount <= 0)
```

Rejects values that are not finite numbers, zero, or negative numbers.

This matters because floating-point values can include special values such as `NaN` and infinity.

```java
balance += amount;
```

Adds the deposit to the existing balance.

#### Withdrawal method

```java
public void withdraw(double amount)
        throws InsufficientFundsException
```

Declares that the method may throw an insufficient-funds exception.

```java
if (amount > balance)
```

Checks whether the requested amount exceeds the available balance.

```java
balance -= amount;
```

Subtracts the amount only after all checks pass.

#### Balance getter

```java
public double getBalance()
```

Provides controlled access to the account balance.

**Real-world note:** Financial applications should generally use `BigDecimal` for monetary calculations rather than `double`, because binary floating-point arithmetic cannot represent every decimal amount exactly.

### Step 3: Create Main.java

```java
public class Main {

    public static void main(String[] args) {

        BankAccount account = new BankAccount(5000);

        try {

            account.deposit(2000);

            account.withdraw(1500);

            System.out.println("Transaction successful");

        } catch (InsufficientFundsException e) {

            System.out.println(e.getMessage());

        } catch (IllegalArgumentException e) {

            System.out.println("Invalid transaction: " + e.getMessage());

        }

        System.out.println("Current balance: KSh " + account.getBalance());

    }

}
```

### Explanation

```java
BankAccount account = new BankAccount(5000);
```

Creates an account with KSh 5,000.

```java
try {
```

Starts a block containing banking operations that might fail.

```java
account.deposit(2000);
```

Deposits KSh 2,000.

The balance becomes KSh 7,000.

```java
account.withdraw(1500);
```

Withdraws KSh 1,500.

The balance becomes KSh 5,500.

```java
catch (InsufficientFundsException e)
```

Handles an attempted withdrawal that exceeds the available balance.

```java
catch (IllegalArgumentException e)
```

Handles invalid transaction amounts.

```java
System.out.println("Current balance: KSh " + account.getBalance());
```

Displays the balance after the transaction attempt.

### Expected output

```text
Transaction successful
Current balance: KSh 5500.0
```

If you change the withdrawal amount to `8000`, the output becomes:

```text
Insufficient funds
Current balance: KSh 7000.0
```

Notice that the account balance remains unchanged after the failed withdrawal.

This is an important failure-handling principle: **a failed operation should not leave application data in an incorrect state.**

---

## PRACTICAL 4: INPUT VALIDATION WITH RETRIES

A good application should not always terminate after receiving invalid input.

It can allow the user to try again.

Example:

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int age = -1;

        while (age < 18 || age > 100) {

            System.out.print("Enter your age (18-100): ");

            if (scanner.hasNextInt()) {

                age = scanner.nextInt();

                if (age < 18 || age > 100) {

                    System.out.println("Age is outside the allowed range");

                }

            } else {

                System.out.println("Please enter a whole number");

                scanner.next();

            }

        }

        System.out.println("Accepted age: " + age);

        scanner.close();

    }

}
```

### Understanding the important lines

```java
int age = -1;
```

Initializes the age with a value outside the permitted range.

```java
while (age < 18 || age > 100)
```

Keeps repeating the input process while the age is invalid.

```java
if (scanner.hasNextInt())
```

Checks whether the input is an integer.

```java
age = scanner.nextInt();
```

Reads the integer.

```java
scanner.next();
```

Consumes the invalid token when the user enters something that is not an integer.

This is important because otherwise the invalid token would remain in the Scanner and the loop could repeatedly encounter the same input.

### Example interaction

```text
Enter your age (18-100): hello
Please enter a whole number

Enter your age (18-100): 12
Age is outside the allowed range

Enter your age (18-100): 25
Accepted age: 25
```

The program keeps running until valid input is provided.

---

## 5. Defensive Programming

Defensive programming means writing code that anticipates possible mistakes, invalid conditions, and unexpected situations.

Instead of assuming that every operation will succeed, the program checks important conditions before proceeding.

Examples include:

### A. Checking for null values

```java
if (name == null) {

    System.out.println("Name is missing");

}
```

This prevents operations on a missing reference.

### B. Checking array boundaries

```java
int[] numbers = {10, 20, 30};

int index = 1;

if (index >= 0 && index < numbers.length) {

    System.out.println(numbers[index]);

}
```

This ensures that the requested array position exists.

### C. Checking division

```java
int a = 20;

int b = 0;

if (b != 0) {

    System.out.println(a / b);

} else {

    System.out.println("Cannot divide by zero");

}
```

This prevents an invalid arithmetic operation.

### D. Checking method arguments

```java
public static void registerUser(String username) {

    if (username == null || username.isBlank()) {

        throw new IllegalArgumentException("Username is required");

    }

    System.out.println("User registered");

}
```

The method validates its argument before performing its task.

## 6. Common Input Validation and Exception Handling Mistakes

| Mistake | Why it is a problem | Better approach |
|---|---|---|
| Accepting any input | Invalid data can enter the system | Validate before processing |
| Catching every exception without distinction | Hides the actual problem | Catch appropriate exception types |
| Ignoring exceptions | Makes failures difficult to diagnose | Log or report meaningful errors |
| Using `double` for financial calculations | Can introduce rounding inaccuracies | Prefer `BigDecimal` |
| Forgetting to consume invalid Scanner input | Can create repeated validation failures | Consume invalid tokens |
| Using empty catch blocks | Silently hides failures | Handle or propagate exceptions |
| Exposing internal data | Other code may corrupt application state | Use encapsulation |
| Displaying technical errors directly to users | Can reveal internal details | Show safe, understandable messages |

### Part 3 Exercises

1. Create a program that validates a username and password.
2. Write a program that accepts marks between 0 and 100.
3. Create a program that handles division by zero.
4. Build a banking application that rejects negative deposits.
5. Create a custom exception called `InvalidAgeException`.
6. Write a program that allows users to retry after entering invalid input.
7. Explain the difference between validation and exception handling.
8. Explain why financial applications should avoid using `double` for precise monetary calculations.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

## 1. Lesson Summary

| Topic | Key concept |
|---|---|
| Input validation | Checking data before processing |
| Required input | Information that must be supplied |
| Optional input | Information that may be omitted |
| `isEmpty()` | Checks whether a string has zero characters |
| `isBlank()` | Checks whether a string is empty or whitespace-only |
| `Scanner` | Reads user input |
| `hasNextInt()` | Checks whether the next token is an integer |
| Exception | An event that interrupts normal program execution |
| Checked exception | An exception that must be caught or declared |
| Unchecked exception | A runtime exception not subject to that compiler requirement |
| `try` | Contains code that may throw an exception |
| `catch` | Handles an exception |
| `finally` | Provides cleanup code |
| `throw` | Explicitly throws an exception |
| `throws` | Declares possible exceptions in a method signature |
| Custom exception | An exception created for application-specific conditions |
| Defensive programming | Anticipating and preventing potential failures |

## 2. Multiple-Choice Questions

Choose the correct answer.

**Question 1**

What is input validation?

A. Executing a Java program.

B. Checking information before processing it.

C. Creating Java classes.

D. Importing Java packages.

**Question 2**

Which method checks whether a string contains only whitespace or is empty?

A. `isEmpty()`

B. `isBlank()`

C. `length()`

D. `trim()`

**Question 3**

Which exception occurs when converting invalid text into an integer?

A. `IOException`

B. `ArithmeticException`

C. `NumberFormatException`

D. `NullPointerException`

**Question 4**

Which block contains code that might throw an exception?

A. `catch`

B. `finally`

C. `try`

D. `throw`

**Question 5**

Which keyword explicitly throws an exception?

A. `throws`

B. `throw`

C. `catch`

D. `finally`

**Question 6**

Which keyword declares possible exceptions in a method signature?

A. `throw`

B. `try`

C. `throws`

D. `finally`

**Question 7**

Which of the following is a checked exception?

A. `ArithmeticException`

B. `NumberFormatException`

C. `NullPointerException`

D. `IOException`

**Question 8**

What is the purpose of a custom exception?

A. To create variables.

B. To represent application-specific failure conditions.

C. To remove classes.

D. To replace all Java exceptions.

**Question 9**

Which Scanner method checks whether the next input can be interpreted as an integer?

A. `nextInt()`

B. `hasNextInt()`

C. `nextLine()`

D. `hasNextLine()`

**Question 10**

What is defensive programming?

A. Writing code that anticipates and handles potential problems.

B. Avoiding all methods.

C. Using only private variables.

D. Removing exception handling.

## 3. Conceptual Questions

Answer in your own words.

11. Explain why input validation is important in software applications.

12. Differentiate between valid and invalid input.

13. Explain the difference between required and optional fields.

14. What is an exception?

15. Differentiate between checked and unchecked exceptions.

16. Explain the purpose of `try`, `catch`, and `finally`.

17. Differentiate between `throw` and `throws`.

18. What is a custom exception?

19. Why is it important to prevent a failed banking transaction from changing the account balance?

20. Explain three defensive programming techniques.

## 4. Practical Programming Assessment

**Question 21: Username Validation**

Create a Java program that accepts a username.

Requirements:

- It must not be empty.
- It must contain at least four characters.
- It must not exceed 20 characters.
- Display an appropriate error message when validation fails.

**Question 22: Marks Validation**

Create a program that accepts examination marks.

Requirements:

- Marks must be between 0 and 100.
- Reject text input.
- Calculate the average of three valid marks.
- Display the average.

**Question 23: Exception Handling**

Create a calculator that divides two numbers.

Requirements:

- Accept two numbers.
- Prevent division by zero.
- Handle invalid numeric input.
- Display meaningful error messages.

**Question 24: Custom Exception**

Create an exception called `InsufficientFundsException`.

Build a bank account class that:

- Stores a balance.
- Accepts deposits.
- Allows withdrawals.
- Rejects negative amounts.
- Prevents withdrawals exceeding the balance.

**Question 25: Retry Mechanism**

Create a program that repeatedly asks a user to enter their age until a valid age between 18 and 100 is provided.

The program must handle both invalid numeric formats and out-of-range values.

## 5. Debugging Assessment

Study the following code:

```java
public class Main {

    public static void main(String[] args) {

        String age = "twenty";

        int number = Integer.parseInt(age);

        System.out.println(number);

    }

}
```

**Question 26**

Identify the exception that occurs and explain why.

**Question 27**

Correct the program using exception handling so that it displays a meaningful message instead of terminating with an unhandled exception.

Now examine:

```java
public class Main {

    public static void main(String[] args) {

        int balance = 5000;

        int withdrawal = 7000;

        balance -= withdrawal;

        System.out.println(balance);

    }

}
```

**Question 28**

Identify the application logic problem.

**Question 29**

Correct the program so that a withdrawal cannot exceed the available balance.

**Question 30**

Explain why input validation and exception handling should work together rather than being treated as exactly the same thing.

## 6. Final Practical Project: Secure Banking Input System

Build a small banking application that demonstrates input validation and failure handling.

### Project structure

```text
BankingSystem/
│
├── Main.java
├── BankAccount.java
├── Transaction.java
├── InsufficientFundsException.java
└── InvalidTransactionException.java
```

### Requirements

**1. BankAccount class**

Store:

- Account number.
- Account holder.
- Account balance.

Implement methods for:

- Depositing money.
- Withdrawing money.
- Displaying the balance.

**2. Transaction validation**

The application must:

- Reject negative deposits.
- Reject zero deposits.
- Reject negative withdrawals.
- Reject withdrawals exceeding the balance.
- Reject non-finite or otherwise invalid monetary input.
- Prevent failed transactions from changing the account balance.

**3. Exception handling**

Create:

- `InsufficientFundsException`
- `InvalidTransactionException`

Use appropriate exception handling to manage transaction failures.

**4. User input**

Use `Scanner` to accept:

- Account holder's name.
- Account number.
- Initial deposit.
- Transaction type.
- Transaction amount.

**5. Failure handling**

The program should:

- Handle text entered where a number is expected.
- Allow users to retry invalid input.
- Display meaningful error messages.
- Avoid exposing unnecessary technical details.
- Continue running after recoverable transaction failures.

**6. Transaction history**

Record successful transactions with:

- Transaction type.
- Transaction amount.
- Transaction status.

Failed transactions should not be recorded as successful.

### Example application interaction

```text
===== BANKING SYSTEM =====

Enter account holder name: Brian

Enter account number: 10001

Enter initial deposit: 5000

Account created successfully.

Choose transaction:

1. Deposit
2. Withdraw
3. Check balance
4. Exit

Enter choice: 2

Enter withdrawal amount: 7000

Transaction failed:
Insufficient funds.

Current balance: KSh 5000

Choose transaction:

1. Deposit
2. Withdraw
3. Check balance
4. Exit

Enter choice: 1

Enter deposit amount: 2000

Deposit successful.

Current balance: KSh 7000
```

### Expected technical implementation

Your project should demonstrate:

- Encapsulation.
- Input validation.
- Conditional statements.
- Loops.
- Exception handling.
- Custom exceptions.
- Collections for transaction history.
- Separation of responsibilities between classes.

For a more realistic banking implementation, use `BigDecimal` for monetary amounts and consider transaction atomicity, persistence, authentication, and authorization.

## 7. Submit Your Work to Kai

After completing the assessment and practical project, submit your work to Kai.

Kai should evaluate:

1. Understanding of input validation.
2. Ability to identify invalid input.
3. Correct use of Scanner.
4. Understanding of checked and unchecked exceptions.
5. Correct use of `try`, `catch`, and `finally`.
6. Correct use of `throw` and `throws`.
7. Ability to create custom exceptions.
8. Correct handling of failed transactions.
9. Defensive programming techniques.
10. Code organization and practical problem-solving.

Kai should identify incorrect answers, explain why they are wrong, provide corrections, and award a final assessment score.

## 8. Lesson Completion Checklist

- [ ] I understand input validation.
- [ ] I can validate strings.
- [ ] I can validate numeric input.
- [ ] I can validate required fields.
- [ ] I understand checked exceptions.
- [ ] I understand unchecked exceptions.
- [ ] I can use `try` and `catch`.
- [ ] I understand the `finally` block.
- [ ] I can use `throw` and `throws`.
- [ ] I can create custom exceptions.
- [ ] I can handle invalid Scanner input.
- [ ] I can implement retry mechanisms.
- [ ] I understand defensive programming.
- [ ] I can prevent failed operations from corrupting application data.
- [ ] I can build applications that handle unexpected situations safely.

# PART 4 OF 4 — LESSON COMPLETE