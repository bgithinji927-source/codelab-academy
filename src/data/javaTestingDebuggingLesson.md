# Java: Testing Strategies and Debugging

# Part 1 of 4: Introduction to Software Testing

## 1. What Is Software Testing?

Software testing is the process of checking a program to determine whether it works as expected.

When developers write Java programs, they cannot simply assume that the code is correct because it compiles or runs without crashing.

A program may:
- Produce incorrect calculations.
- Accept invalid user input.
- Fail when given unexpected data.
- Stop working under certain conditions.
- Produce unexpected results in specific situations.

Testing helps developers discover these problems before software is released to users.

### Example

Imagine you are developing a Java application that calculates the average of three examination marks.

The intended calculation is:

Average = (Mark 1 + Mark 2 + Mark 3) / 3

Suppose a developer writes:

```java
public class AverageCalculator {
    public static void main(String[] args) {
        int average = 60 + 70 + 80 / 3;

        System.out.println("Average: " + average);
    }
}
```

The program compiles successfully, but it produces the wrong result.

Why?

Java follows operator precedence. Division happens before addition.

Therefore, Java evaluates:

```java
60 + 70 + (80 / 3)
```

Instead of:

```java
(60 + 70 + 80) / 3
```

The corrected program is:

```java
public class AverageCalculator {
    public static void main(String[] args) {
        int average = (60 + 70 + 80) / 3;

        System.out.println("Average: " + average);
    }
}
```

**Output:**

```text
Average: 70
```

This demonstrates an important principle:

A program can compile successfully and still contain logical errors. Testing helps identify such errors.

---

## 2. Important Testing Terminology

Before learning testing strategies, understand these terms.

| Term | Meaning |
|---|---|
| Testing | Checking whether software behaves correctly. |
| Test case | A specific input, action, and expected result used to check a program. |
| Expected result | The result that should occur. |
| Actual result | The result produced by the program. |
| Defect/Bug | A problem in the software that causes incorrect behaviour. |
| Failure | When software does not behave as expected during execution. |
| Debugging | Finding, investigating, and correcting the cause of a defect. |
| Test data | Information used when testing a program. |

### Understanding a Test Case

Suppose you have a method that determines whether someone is old enough to register for an account.

The minimum age is 18.

A test case could be:

| Test information | Value |
|---|---|
| Method | checkAge() |
| Input | 20 |
| Expected result | Eligible |
| Actual result | Eligible |
| Status | PASS |

Another test case:

| Test information | Value |
|---|---|
| Method | checkAge() |
| Input | 15 |
| Expected result | Not eligible |
| Actual result | Not eligible |
| Status | PASS |

A test passes when the actual result matches the expected result.

A test fails when the actual result differs from the expected result.

---

## 3. Why Is Software Testing Important?

Testing is important because it helps developers:

### A. Identify defects early

Finding an error while developing a small program is usually easier than finding it after the application has been deployed.

### B. Improve reliability

Users expect applications to behave consistently.

Testing helps ensure that the program produces correct results under different conditions.

### C. Protect data

In systems involving banking, payments, and user accounts, incorrect calculations or operations can cause serious problems.

### D. Improve security

Testing can help reveal weaknesses such as improper input handling, access-control problems, and unexpected application behaviour.

Testing alone does not guarantee security, but it is an important part of secure software development.

### E. Prevent future problems

When developers modify existing code, they can accidentally break features that previously worked.

Automated tests help detect these problems.

---

## 4. Types of Software Testing

There are several testing strategies used in software development.

### A. Unit Testing

Unit testing involves testing individual parts of a program independently.

A unit is usually a small piece of code, such as:
- A method.
- A function.
- A class.

For example, suppose you have a method that adds two numbers.

```java
public static int add(int a, int b) {
    return a + b;
}
```

You can test it using different inputs:

| Input A | Input B | Expected output |
|---:|---:|---:|
| 5 | 3 | 8 |
| 10 | 20 | 30 |
| -5 | 5 | 0 |
| 0 | 0 | 0 |

Each test checks whether the method works correctly.

### B. Integration Testing

Integration testing checks whether different parts of a software application work correctly together.

For example, imagine a banking application containing:

1. A user authentication module.
2. An account management module.
3. A transaction module.
4. A database module.

Integration testing checks whether these components communicate and exchange information correctly.

A transaction module might work correctly on its own but fail when communicating with the account management module.

Integration testing helps identify such problems.

### C. System Testing

System testing checks the complete application as a whole.

For example, after developing a school management system, you may test the entire process:

1. A student registers.
2. The system saves the student's information.
3. The student logs in.
4. The student views examination results.
5. The administrator updates student records.

The purpose is to check whether the complete system satisfies its requirements.

### D. Acceptance Testing

Acceptance testing determines whether software meets the requirements and expectations of its intended users.

For example, a university may request a student management application.

Before accepting the application, university representatives may test whether:
- Students can register.
- Lecturers can upload marks.
- Administrators can manage records.
- Reports can be generated correctly.

### Comparison of Testing Types

| Testing type | Main purpose |
|---|---|
| Unit testing | Test individual methods or components. |
| Integration testing | Test communication between components. |
| System testing | Test the complete application. |
| Acceptance testing | Confirm that the application meets user requirements. |

---

## 5. Manual Testing and Automated Testing

### Manual Testing

Manual testing involves a person interacting with the application and checking the results.

For example, a developer may:
1. Run a Java application.
2. Enter a username.
3. Enter a password.
4. Submit the form.
5. Check whether login succeeds.

Advantages:
- Easy to start.
- Useful for exploring user interfaces.
- Does not always require testing frameworks.

Disadvantages:
- Repetitive.
- Can take a long time.
- Human mistakes may affect results.

### Automated Testing

Automated testing uses code or testing tools to execute test cases and check results.

For example, a Java testing framework can automatically execute a method with several inputs and report which tests pass or fail.

Advantages:
- Tests can be repeated quickly.
- Reduces repetitive manual work.
- Helps detect regressions.
- Useful for large applications.

Disadvantages:
- Requires initial setup.
- Tests must be maintained.
- Poorly designed tests may fail to identify important problems.

**Important:** Manual and automated testing complement each other. Professional software projects often use both.

---

## 6. What Is Regression Testing?

Regression testing checks whether changes made to software have accidentally broken existing functionality.

Imagine you develop a banking application.

Initially, the application supports:
- Depositing money.
- Withdrawing money.
- Checking account balances.

Later, you add a new transaction-history feature.

After making this change, you should test the original features again.

For example:

| Feature | Expected behaviour | Result |
|---|---|---|
| Deposit | Balance increases | PASS |
| Withdrawal | Balance decreases | PASS |
| Balance checking | Correct balance displayed | PASS |
| Transaction history | Previous transactions displayed | PASS |

If the new feature causes withdrawals to stop working, regression testing helps reveal the problem.

---

## Part 1 Summary

In this part, you learned:

- Software testing and its importance.
- Test cases, expected results, actual results, and defects.
- Unit testing.
- Integration testing.
- System testing.
- Acceptance testing.
- Manual and automated testing.
- Regression testing.

**Progress: Part 1 of 4**

---

# Part 2 of 4: Debugging and Finding Errors in Java

## 1. What Is Debugging?

Debugging is the process of identifying, investigating, and correcting errors in a program.

A bug is a defect in the source code or software logic that causes unexpected behaviour.

Developers debug programs when:
- The application crashes.
- Calculations produce incorrect results.
- Variables contain unexpected values.
- Methods do not execute correctly.
- The program behaves differently from what was intended.

Debugging is not simply changing code until it works. It involves understanding why the problem occurred.

---

## 2. Types of Errors in Java

Java programs commonly encounter three broad categories of errors.

### A. Syntax Errors

Syntax errors occur when code violates Java's language rules.

Example:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World")
    }
}
```

The statement is missing a semicolon.

Corrected version:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

**Output:**

```text
Hello World
```

Explanation:

- `public class Main` declares a class named `Main`.
- `main()` is the entry point of this application.
- `System.out.println()` displays text.
- The semicolon terminates the Java statement.

The compiler identifies syntax errors during compilation.

### B. Runtime Errors

Runtime errors occur while a program is executing.

Example:

```java
public class Main {
    public static void main(String[] args) {
        int result = 10 / 0;

        System.out.println(result);
    }
}
```

This code compiles, but execution causes an `ArithmeticException`.

Why?

Integer division by zero is not allowed in Java.

Corrected version:

```java
public class Main {
    public static void main(String[] args) {
        int divisor = 2;

        if (divisor != 0) {
            int result = 10 / divisor;

            System.out.println(result);
        } else {
            System.out.println("Cannot divide by zero.");
        }
    }
}
```

**Output:**

```text
5
```

Explanation:

- `divisor` stores the number used for division.
- `if (divisor != 0)` checks whether the divisor is not zero.
- If the condition is true, the calculation takes place.
- Otherwise, the program displays an error message.

### C. Logical Errors

Logical errors occur when a program runs without crashing but produces an incorrect result.

Example:

```java
public class Main {
    public static void main(String[] args) {
        int price = 1000;
        int discount = 200;

        int finalPrice = price + discount;

        System.out.println(finalPrice);
    }
}
```

The program runs successfully, but the calculation is wrong.

A discount should be subtracted from the original price.

Corrected version:

```java
public class Main {
    public static void main(String[] args) {
        int price = 1000;
        int discount = 200;

        int finalPrice = price - discount;

        System.out.println(finalPrice);
    }
}
```

**Output:**

```text
800
```

### Comparison of Java Errors

| Error type | When it occurs | Example |
|---|---|---|
| Syntax error | During compilation | Missing semicolon |
| Runtime error | During execution | Division by zero |
| Logical error | During execution, when results are incorrect | Adding a discount instead of subtracting it |

---

## 3. Understanding Java Stack Traces

A stack trace is a report generated when an exception occurs.

It helps developers understand:
- What exception occurred.
- Where the exception occurred.
- Which methods were involved.
- How execution reached the problematic code.

Consider:

```java
public class DebugExample {

    public static void main(String[] args) {
        calculate();
    }

    public static void calculate() {
        int result = 10 / 0;

        System.out.println(result);
    }
}
```

When executed, Java reports an `ArithmeticException`.

A simplified stack trace may look like:

```text
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at DebugExample.calculate(DebugExample.java:10)
    at DebugExample.main(DebugExample.java:4)
```

Let's understand it.

**Line 1:**

```text
java.lang.ArithmeticException: / by zero
```

This tells us that the program attempted an invalid division operation.

**Line 2:**

```text
DebugExample.calculate(DebugExample.java:10)
```

This identifies the method and source-code line where the exception occurred.

**Line 3:**

```text
DebugExample.main(DebugExample.java:4)
```

This shows that the `main()` method called `calculate()`.

### How to Use a Stack Trace

When an exception occurs:

1. Read the exception type.
2. Read the exception message.
3. Locate the first relevant line in your own source code.
4. Open that line in your editor.
5. Examine the variables and operations involved.
6. Identify the cause.
7. Correct the code.
8. Run the program again.

Do not immediately assume that the first line of the stack trace is the only problem. Follow the trace to understand how execution reached the failing operation.

---

## 4. Debugging Using Print Statements

One of the simplest debugging techniques is printing variable values.

Consider:

```java
public class Main {
    public static void main(String[] args) {
        int price = 500;
        int quantity = 3;

        int total = price + quantity;

        System.out.println(total);
    }
}
```

The program produces:

```text
503
```

But the expected total should be:

```text
1500
```

We can use print statements to investigate.

```java
public class Main {
    public static void main(String[] args) {
        int price = 500;
        int quantity = 3;

        System.out.println("Price: " + price);
        System.out.println("Quantity: " + quantity);

        int total = price + quantity;

        System.out.println("Total: " + total);
    }
}
```

**Output:**

```text
Price: 500
Quantity: 3
Total: 503
```

Now the problem becomes easier to identify.

The developer used addition instead of multiplication.

Corrected statement:

```java
int total = price * quantity;
```

**Correct output:**

```text
Price: 500
Quantity: 3
Total: 1500
```

Print statements are useful, but they are not the only debugging technique.

---

## 5. Debugging Using Breakpoints

A breakpoint is a marker placed on a line of code to pause program execution during debugging.

Instead of executing the entire program at once, a developer can pause execution and inspect what is happening.

For example:

```java
public class Main {
    public static void main(String[] args) {
        int balance = 5000;

        int withdrawal = 2000;

        int remaining = balance - withdrawal;

        System.out.println(remaining);
    }
}
```

You can place a breakpoint on:

```java
int remaining = balance - withdrawal;
```

When execution reaches that line, the debugger pauses.

You can inspect:
- The current value of `balance`.
- The current value of `withdrawal`.
- The current value of `remaining`, if already assigned.
- The order in which statements execute.

### Common Debugger Controls

| Control | Purpose |
|---|---|
| Continue/Resume | Continue execution until the next breakpoint or program completion. |
| Step Over | Execute the current line without entering a called method. |
| Step Into | Enter a method to inspect its execution. |
| Step Out | Finish the current method and return to its caller. |
| Stop | Terminate the debugging session. |

Most Java development environments, including IntelliJ IDEA and Eclipse, provide graphical debugging tools.

---

## 6. A Systematic Debugging Process

Professional developers use a structured process rather than randomly editing code.

### Step 1: Reproduce the problem

Run the program using the same input or conditions that caused the problem.

### Step 2: Observe the behaviour

Check the actual output, error message, and application behaviour.

### Step 3: Locate the suspected code

Examine the relevant method, class, and stack trace.

### Step 4: Inspect variables

Use print statements or breakpoints to examine variable values.

### Step 5: Identify the root cause

Determine why the incorrect behaviour is occurring.

### Step 6: Correct the problem

Make the smallest appropriate change that addresses the cause.

### Step 7: Test the correction

Run the program again and confirm that the problem is fixed.

### Step 8: Check other functionality

Run relevant existing tests to make sure the correction has not introduced another problem.

---

## Part 2 Summary

You learned:

- What debugging means.
- Syntax, runtime, and logical errors.
- How to understand Java stack traces.
- Debugging with print statements.
- Debugging with breakpoints.
- Common debugger controls.
- A systematic debugging process.

**Progress: Part 2 of 4**

---

# Part 3 of 4: Practical Testing in Java Using Assertions and JUnit

This part introduces practical testing techniques that you can apply to your Java projects.

## 1. What Are Assertions?

An assertion is a statement used to check whether a condition is true.

Java provides the `assert` keyword.

For example:

```java
public class Main {
    public static void main(String[] args) {
        int age = 20;

        assert age >= 18 : "Age must be at least 18";

        System.out.println("Age requirement satisfied.");
    }
}
```

Explanation:

```java
int age = 20;
```

Creates an integer variable containing the age.

```java
assert age >= 18 : "Age must be at least 18";
```

Checks whether the age is at least 18.

If assertions are enabled and the condition is false, Java throws an `AssertionError` containing the specified message.

```java
System.out.println("Age requirement satisfied.");
```

Displays a message after the assertion succeeds.

**Important:** Java assertions are disabled by default. Enable them using the `-ea` option:

```bash
java -ea Main
```

Assertions are useful for checking assumptions during development, but they should not replace normal input validation.

For example, do not use `assert` to enforce a user's age requirement in a production registration system.

---

## 2. Creating a Simple Test Class

You can write tests manually without installing a testing framework.

Let's create a small calculator application.

### Step 1: Create the project folder

Create a folder named:

```text
JavaTesting
```

Inside it, create two files:

```text
JavaTesting/
    Calculator.java
    CalculatorTest.java
```

### Step 2: Create Calculator.java

```java
public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }

        return a / b;
    }
}
```

### Understanding the code

```java
public class Calculator {
```

Declares a class named `Calculator`.

```java
public int add(int a, int b) {
    return a + b;
}
```

Defines a method that receives two integers and returns their sum.

```java
public int subtract(int a, int b) {
    return a - b;
}
```

Subtracts the second number from the first.

```java
public int multiply(int a, int b) {
    return a * b;
}
```

Multiplies two integers.

```java
public int divide(int a, int b) {
```

Defines a method for division.

```java
if (b == 0) {
    throw new IllegalArgumentException("Cannot divide by zero");
}
```

Checks whether the divisor is zero.

If it is, the method throws an exception instead of attempting an invalid division.

```java
return a / b;
```

Returns the division result when the divisor is valid.

---

### Step 3: Create CalculatorTest.java

```java
public class CalculatorTest {

    public static void main(String[] args) {

        Calculator calculator = new Calculator();

        testAddition(calculator);
        testSubtraction(calculator);
        testMultiplication(calculator);
        testDivision(calculator);
    }

    public static void testAddition(Calculator calculator) {

        int result = calculator.add(10, 5);

        if (result == 15) {
            System.out.println("Addition test: PASS");
        } else {
            System.out.println("Addition test: FAIL");
        }
    }

    public static void testSubtraction(Calculator calculator) {

        int result = calculator.subtract(10, 5);

        if (result == 5) {
            System.out.println("Subtraction test: PASS");
        } else {
            System.out.println("Subtraction test: FAIL");
        }
    }

    public static void testMultiplication(Calculator calculator) {

        int result = calculator.multiply(10, 5);

        if (result == 50) {
            System.out.println("Multiplication test: PASS");
        } else {
            System.out.println("Multiplication test: FAIL");
        }
    }

    public static void testDivision(Calculator calculator) {

        int result = calculator.divide(10, 5);

        if (result == 2) {
            System.out.println("Division test: PASS");
        } else {
            System.out.println("Division test: FAIL");
        }
    }
}
```

### Understanding the test class

```java
Calculator calculator = new Calculator();
```

Creates an object of the `Calculator` class.

We need this object because the methods being tested are instance methods.

```java
testAddition(calculator);
```

Calls the addition test and passes the calculator object to it.

Each test method follows the same basic pattern:

1. Execute the method being tested.
2. Store its result.
3. Compare the actual result with the expected result.
4. Report whether the test passed or failed.

For example:

```java
int result = calculator.add(10, 5);
```

Calls the addition method using 10 and 5.

The expected result is 15.

```java
if (result == 15) {
```

Checks whether the actual result equals the expected result.

If it does, the test passes.

Otherwise, it fails.

### Step 4: Compile and run the program

Open your terminal inside the project folder.

Compile both files:

```bash
javac Calculator.java CalculatorTest.java
```

Run the test class:

```bash
java CalculatorTest
```

**Expected output:**

```text
Addition test: PASS
Subtraction test: PASS
Multiplication test: PASS
Division test: PASS
```

You have now created a simple manual testing system.

---

## 3. Testing Invalid Conditions

A good test should not only check whether a method works with normal inputs. It should also check how the method behaves with invalid inputs.

Let's test division by zero.

Add the following method to `CalculatorTest.java`:

```java
public static void testDivisionByZero(Calculator calculator) {

    try {
        calculator.divide(10, 0);

        System.out.println("Division by zero test: FAIL");

    } catch (IllegalArgumentException e) {

        System.out.println("Division by zero test: PASS");
    }
}
```

Call it from the `main()` method:

```java
testDivisionByZero(calculator);
```

### Line-by-line explanation

```java
try {
```

Starts a block containing an operation that may throw an exception.

```java
calculator.divide(10, 0);
```

Attempts to divide 10 by zero.

The calculator method throws an `IllegalArgumentException`.

```java
System.out.println("Division by zero test: FAIL");
```

This statement executes only if the method does not throw the expected exception.

```java
catch (IllegalArgumentException e) {
```

Catches the exception that the calculator is expected to throw.

```java
System.out.println("Division by zero test: PASS");
```

Reports that the method correctly rejected the invalid operation.

This test checks whether the program handles an invalid condition correctly.

---

## 4. Introduction to JUnit

Manual testing is useful when learning, but larger applications may contain hundreds or thousands of test cases.

Writing every test manually can become difficult to maintain.

This is why Java developers use testing frameworks.

One popular Java testing framework is **JUnit**.

JUnit helps developers:
- Write automated tests.
- Execute multiple tests.
- Compare actual and expected results.
- Identify failed tests.
- Organize tests separately from application code.

### Understanding JUnit Assertions

JUnit provides methods such as:

| Assertion | Purpose |
|---|---|
| `assertEquals()` | Checks whether two values are equal. |
| `assertTrue()` | Checks whether a condition is true. |
| `assertFalse()` | Checks whether a condition is false. |
| `assertNull()` | Checks whether a value is null. |
| `assertNotNull()` | Checks whether a value is not null. |
| `assertThrows()` | Checks whether an operation throws an expected exception. |

### Example of a JUnit Test

The following example uses JUnit 5.

```java
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    public void testAddition() {

        Calculator calculator = new Calculator();

        int result = calculator.add(10, 5);

        assertEquals(15, result);
    }
}
```

### Understanding the code

```java
import org.junit.jupiter.api.Test;
```

Imports the JUnit annotation used to identify test methods.

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
```

Imports the `assertEquals()` method so that it can be called directly.

```java
@Test
```

Tells JUnit that the method below is a test method.

```java
public void testAddition() {
```

Declares a method that contains the addition test.

```java
Calculator calculator = new Calculator();
```

Creates the object that will be tested.

```java
int result = calculator.add(10, 5);
```

Executes the addition operation.

```java
assertEquals(15, result);
```

Checks whether the expected result, 15, matches the actual result.

If the values are equal, the assertion passes.

If they are different, JUnit reports a failed test.

**Note:** This example requires JUnit 5 to be included in the project dependencies. It will not compile using only the standard Java library.

For a Maven project, a JUnit 5 dependency can be added to `pom.xml`. A typical setup uses the JUnit Jupiter dependency and a compatible Maven Surefire plugin.

JUnit test classes are commonly placed inside:

```text
src/
    main/
        java/
            Calculator.java
    test/
        java/
            CalculatorTest.java
```

This separates application code from test code.

---

## 5. Test-Driven Development (TDD)

Test-Driven Development is a software development approach in which developers write tests before implementing the actual functionality.

It follows three main stages:

### Stage 1: Red

Write a test for a feature that has not yet been implemented.

The test fails because the required functionality is missing.

### Stage 2: Green

Write the minimum amount of code required to make the test pass.

### Stage 3: Refactor

Improve the code structure while ensuring that the tests continue to pass.

### Example

Suppose you want to create a method that checks whether a number is even.

First, write a test expecting:

```text
isEven(4) → true
isEven(7) → false
```

Then implement the method:

```java
public boolean isEven(int number) {
    return number % 2 == 0;
}
```

Finally, run the tests again.

If they pass, the implementation satisfies the tested requirements.

TDD encourages developers to think about expected behaviour before writing implementation code.

---

## 6. Important Testing Strategies

### A. Positive Testing

Positive testing checks whether software works correctly with valid inputs.

Example:

```text
Age: 25
Expected: Registration allowed
```

### B. Negative Testing

Negative testing checks how software behaves with invalid inputs.

Example:

```text
Age: -5
Expected: Invalid age message
```

### C. Boundary Testing

Boundary testing checks values at the limits of an accepted range.

Suppose an application accepts marks between 0 and 100.

Useful test values include:

| Input | Expected result |
|---:|---|
| -1 | Invalid |
| 0 | Valid |
| 1 | Valid |
| 99 | Valid |
| 100 | Valid |
| 101 | Invalid |

Boundary testing is particularly useful because errors often occur around minimum and maximum values.

### D. Equivalence Partitioning

Equivalence partitioning divides possible inputs into groups that should behave similarly.

For an age-validation system:

| Group | Example input | Expected behaviour |
|---|---:|---|
| Below minimum | 15 | Reject |
| Valid range | 25 | Accept |
| Above allowed range | 150 | Reject |

Instead of testing every possible age, a developer selects representative values from each group.

---

## Part 3 Practical Exercises

### Exercise 1: Calculator Testing

Extend the calculator application to include:
- Modulus.
- Power calculation.
- A test for negative numbers.
- A test for division by zero.

Write a test method for each operation.

### Exercise 2: Student Marks Validator

Create a class called `MarksValidator`.

It should contain a method:

```java
public boolean isValidMark(int mark)
```

The method should return:
- `true` when the mark is between 0 and 100.
- `false` when the mark is below 0 or above 100.

Test these values:

```text
-1
0
45
100
101
```

Record the expected and actual results.

### Exercise 3: Debugging Challenge

Study this code:

```java
public class DiscountCalculator {

    public static void main(String[] args) {

        double price = 2000;
        double discount = 10;

        double finalPrice = price + (price * discount / 100);

        System.out.println("Final price: " + finalPrice);
    }
}
```

Tasks:

1. Identify the logical error.
2. Explain why the result is incorrect.
3. Correct the calculation.
4. State the expected output.

**Progress: Part 3 of 4**

---

# Part 4 of 4: Kai Assessment

This assessment checks your understanding of testing strategies, debugging, Java errors, automated testing, and practical test implementation.

Answer all questions and submit your work to Kai for marking and feedback.

## Section A: Multiple-Choice Questions

**Question 1**

What is the primary purpose of software testing?

A. To make code longer.

B. To identify defects and verify expected behaviour.

C. To replace programming.

D. To increase the number of classes.

**Question 2**

Which testing approach checks individual methods or components independently?

A. System testing.

B. Acceptance testing.

C. Unit testing.

D. Integration testing.

**Question 3**

Which error occurs when a program runs successfully but produces an incorrect result?

A. Syntax error.

B. Logical error.

C. Compilation error.

D. Typographical error.

**Question 4**

What does a breakpoint do during debugging?

A. Deletes a method.

B. Automatically corrects errors.

C. Pauses program execution at a selected line.

D. Terminates the compiler.

**Question 5**

Which Java keyword can be used to check an assumption during development?

A. `assert`

B. `return`

C. `import`

D. `package`

**Question 6**

Which testing framework is commonly used for automated Java testing?

A. HTML.

B. JUnit.

C. CSS.

D. SQL.

**Question 7**

What is regression testing?

A. Testing only newly written programs.

B. Checking whether software changes have broken existing functionality.

C. Removing old application features.

D. Testing without expected results.

**Question 8**

Which JUnit assertion checks whether two values are equal?

A. `assertTrue()`

B. `assertNull()`

C. `assertEquals()`

D. `assertFalse()`

---

## Section B: Conceptual Questions

**Question 9**

Explain the difference between:
- Unit testing.
- Integration testing.
- System testing.
- Acceptance testing.

Give one practical example of each.

**Question 10**

Differentiate between manual testing and automated testing. Explain one advantage and one disadvantage of each.

**Question 11**

What is debugging? Describe at least five steps developers should follow when investigating a program error.

**Question 12**

Explain the difference between positive testing, negative testing, boundary testing, and equivalence partitioning.

**Question 13**

What is a stack trace in Java? Explain how a developer can use it to locate the source of an exception.

**Question 14**

Explain Test-Driven Development and describe its three main stages.

---

## Section C: Practical Java Questions

### Question 15: Identify and Correct a Logical Error

Study this program:

```java
public class SalaryCalculator {

    public static void main(String[] args) {

        double salary = 50000;
        double taxRate = 10;

        double tax = salary * taxRate / 100;

        double netSalary = salary + tax;

        System.out.println("Net salary: " + netSalary);
    }
}
```

Answer:

1. Identify the logical error.
2. Explain why it produces an incorrect result.
3. Correct the code.
4. State the expected output.

### Question 16: Write a Java Test

Create a class called `NumberChecker`.

Implement this method:

```java
public boolean isPositive(int number)
```

The method should return:
- `true` for positive numbers.
- `false` for zero and negative numbers.

Write a separate test class that checks:

```text
10
-5
0
100
-100
```

Your test class should display whether each test passes or fails.

### Question 17: Debugging an Exception

Study the following program:

```java
public class DebugChallenge {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30};

        System.out.println(numbers[3]);
    }
}
```

Answer:

1. What exception will occur?
2. Why does the exception occur?
3. Identify the incorrect statement.
4. Correct the program so that it displays the last element of the array.

---

## Section D: Practical Project

### Project: Java Testing and Debugging Toolkit

Build a small Java application that demonstrates the testing and debugging techniques covered in this lesson.

Your application should contain:

**1. Calculator class**

Implement:
- Addition.
- Subtraction.
- Multiplication.
- Division.

Prevent division by zero.

**2. Marks Validator class**

Implement a method that checks whether a mark is between 0 and 100.

**3. Number Checker class**

Implement methods that:
- Check whether a number is positive.
- Check whether a number is even.
- Check whether a number is negative.

**4. Test classes**

Create separate test classes that check the functionality of your application.

Include:
- Positive test cases.
- Negative test cases.
- Boundary test cases.
- Exception-handling tests.

You may use manual test classes or JUnit 5.

**5. Debugging report**

Document at least three errors you encountered or deliberately introduced during development.

For each error, explain:
- The error type.
- What caused it.
- How you identified it.
- How you corrected it.

### Suggested Project Structure

```text
JavaTestingToolkit/
│
├── src/
│   ├── main/
│   │   └── java/
│   │       ├── Calculator.java
│   │       ├── MarksValidator.java
│   │       └── NumberChecker.java
│   │
│   └── test/
│       └── java/
│           ├── CalculatorTest.java
│           ├── MarksValidatorTest.java
│           └── NumberCheckerTest.java
│
└── README.md
```

---

## Submission to Kai

Submit your assessment answers and project to Kai.

Kai should evaluate your work based on:

| Assessment area | What Kai should check |
|---|---|
| Conceptual understanding | Correct explanations of testing and debugging. |
| Error identification | Ability to identify syntax, runtime, and logical errors. |
| Test design | Appropriate positive, negative, and boundary test cases. |
| Java implementation | Correct use of classes, methods, and exception handling. |
| Debugging | Ability to identify root causes and correct defects. |
| Project quality | Organization, readability, and successful execution. |

Kai should provide:
- A score out of 100.
- Correct answers for incorrectly answered questions.
- Explanations of coding mistakes.
- Suggestions for improving the project.
- A completion recommendation.

## Lesson Completion Checklist

By the end of this lesson, you should be able to:

- [ ] Explain the purpose of software testing.
- [ ] Differentiate between unit, integration, system, and acceptance testing.
- [ ] Explain manual and automated testing.
- [ ] Identify syntax, runtime, and logical errors.
- [ ] Read and interpret Java stack traces.
- [ ] Use print statements to investigate problems.
- [ ] Use breakpoints and debugging controls.
- [ ] Write simple Java test classes.
- [ ] Understand JUnit and its common assertions.
- [ ] Explain Test-Driven Development.
- [ ] Apply positive, negative, boundary, and equivalence testing.
- [ ] Build and test a small Java application.

# Part 4 of 4 — Lesson Complete