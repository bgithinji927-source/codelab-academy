# JAVA PROGRAMMING
# LESSON 1: SYNTAX AND PROGRAM STRUCTURE

# PART 1: INTRODUCTION TO JAVA

## 1. What Is Java?

Java is a high-level, general-purpose programming language used to develop different types of software applications.

It was originally developed by Sun Microsystems and is now maintained by Oracle and the wider Java community.

Java is widely used in:

- Enterprise software systems.
- Banking applications.
- Android application development.
- Web application backends.
- Desktop applications.
- Cloud-based applications.
- Distributed systems.
- Financial and business applications.

For example, a banking system can use Java to process transactions, manage customer accounts, calculate balances, and communicate with databases.

### Why Is Java Important?

Java is popular because of several characteristics.

| Feature | Explanation |
|---|---|
| Platform independent | Java applications can run on different operating systems using a compatible JVM. |
| Object-oriented | Java organizes software around classes and objects. |
| Secure | Java provides features such as bytecode verification and controlled memory access. |
| Robust | Java provides strong type checking and exception handling. |
| Multithreaded | Java supports executing multiple threads concurrently. |
| Portable | Java bytecode can run on compatible Java Virtual Machines. |
| High performance | Modern JVMs use Just-In-Time compilation to improve execution speed. |

## 2. How Java Works

Before writing Java programs, it is important to understand how Java code is executed.

Java does not normally execute source code directly in the same way as a basic interpreted scripting environment.

Java uses a process involving three important components:

1. Java source code.
2. Java compiler.
3. Java Virtual Machine (JVM).

### Understanding the Java Execution Process

Consider this simple Java program:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
```

When you write this program, you save it in a file named:

```text
Main.java
```

The Java execution process works as follows:

**Step 1: Write source code**

You write Java instructions in a `.java` file.

**Step 2: Compile the program**

The Java compiler converts the source code into bytecode.

```bash
javac Main.java
```

This produces:

```text
Main.class
```

The `.class` file contains Java bytecode.

**Step 3: Execute the bytecode**

The JVM loads and executes the compiled bytecode.

```bash
java Main
```

Output:

```text
Hello Java
```

### Understanding JDK, JRE, and JVM

These three terms are important in Java programming.

| Component | Full Name | Purpose |
|---|---|---|
| JDK | Java Development Kit | Provides tools for developing Java applications, including the compiler. |
| JRE | Java Runtime Environment | Provides the runtime components needed to run Java applications. |
| JVM | Java Virtual Machine | Executes Java bytecode. |

Think of them this way:

- **JDK:** Used to develop Java programs.
- **JRE:** Provides the runtime environment.
- **JVM:** Executes Java bytecode.

Modern Java distributions may package runtime components differently, and a separate JRE installation is not always provided.

## 3. Installing Java Development Tools

To develop Java applications, you need a Java Development Kit.

Popular JDK distributions include:

- Oracle JDK.
- Eclipse Temurin.
- Amazon Corretto.
- Microsoft Build of OpenJDK.

You can obtain Java development tools from:

- Oracle: https://www.oracle.com/java/
- Eclipse Temurin: https://adoptium.net/
- OpenJDK: https://openjdk.org/

You can write Java programs using editors and IDEs such as:

- Visual Studio Code.
- IntelliJ IDEA.
- Eclipse.
- NetBeans.

### Checking Whether Java Is Installed

Open your terminal or command prompt.

Run:

```bash
java -version
```

This checks the installed Java runtime version.

Next, run:

```bash
javac -version
```

This checks whether the Java compiler is available.

If both commands return version information, you have the basic tools required to compile and execute Java programs.

If `javac` is not recognized, you may need to install a JDK or configure your system's PATH environment variable.

---

# PART 2: JAVA SYNTAX AND PROGRAM STRUCTURE

## 4. What Is Java Syntax?

Syntax refers to the rules that determine how instructions must be written in a programming language.

Just like natural languages have grammar rules, programming languages have syntax rules.

For example, Java requires:

- Statements to end with semicolons in most cases.
- Classes to be defined using class declarations.
- Code blocks to use curly braces.
- Variables to have declared types.
- Java identifiers to follow naming rules.

If you violate Java syntax rules, the compiler may report an error.

## 5. Your First Java Program

Let's examine a complete Java program.

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Hello, World!");

    }

}
```

Expected output:

```text
Hello, World!
```

Although this program is short, every part has a purpose.

Let's understand it line by line.

### Line 1: Class Declaration

```java
public class Main {
```

This declares a class called `Main`.

Understanding its components:

- `public` is an access modifier. It makes the class accessible from other classes, subject to Java's access rules.
- `class` is a Java keyword used to declare a class.
- `Main` is the class name.
- `{` begins the class body.

A class is a fundamental building block of Java programs.

It provides a structure for defining fields, constructors, and methods.

### Line 2: Main Method

```java
public static void main(String[] args) {
```

This declares the main method.

It is the traditional entry point used when launching a standard Java application.

Let's break it down.

**public**

The method is accessible to the Java launcher.

**static**

The method belongs to the class itself rather than requiring an object to call it.

**void**

This means the method does not return a value.

**main**

This is the method name recognized by the Java launcher for the traditional application entry point.

**String[] args**

This declares an array of strings that can receive command-line arguments.

For example, when executing:

```bash
java Main Brian
```

The value `Brian` can be accessed through `args[0]`.

### Line 3: Printing Output

```java
System.out.println("Hello, World!");
```

This statement displays text in the terminal.

Let's understand its components:

- `System` is a built-in Java class.
- `out` represents the standard output stream.
- `println()` prints information and moves to a new line.
- `"Hello, World!"` is the text being displayed.
- `;` terminates the statement.

### Closing Braces

```java
}
```

Curly braces mark the beginning and end of code blocks.

In this program:

- The first closing brace ends the `main()` method.
- The second closing brace ends the `Main` class.

Java uses braces to organize program structure.

## 6. Understanding Semicolons

Java uses semicolons to terminate most statements.

Correct:

```java
int age = 22;
System.out.println(age);
```

Incorrect:

```java
int age = 22
System.out.println(age)
```

The second example is missing semicolons.

The compiler will report syntax errors.

However, not every Java structure ends with a semicolon.

For example:

```java
public class Main {
}
```

The class declaration itself does not require a semicolon after its closing brace.

## 7. Understanding Curly Braces

Curly braces `{}` define code blocks.

Example:

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Welcome");

    }

}
```

The outer braces define the class body.

The inner braces define the method body.

You will also use curly braces when writing:

- Conditional statements.
- Loops.
- Methods.
- Constructors.
- Other classes.

Example:

```java
if (age >= 18) {
    System.out.println("Adult");
}
```

The braces group the instructions that belong to the condition.

## 8. Java Is Case-Sensitive

Java distinguishes between uppercase and lowercase letters.

For example:

```java
int age = 20;
```

This is different from:

```java
int Age = 20;
```

Java treats `age` and `Age` as two different identifiers.

Consider:

```java
public class Main {
    public static void main(String[] args) {

        int number = 10;

        System.out.println(number);

    }
}
```

This works.

However:

```java
System.out.println(Number);
```

Will produce an error because the declared variable is `number`, not `Number`.

Java keywords are also case-sensitive.

For example:

```java
public
```

is a valid keyword, but:

```java
Public
```

is not.

## 9. Java Comments

Comments are notes written inside source code.

The Java compiler ignores comments when compiling the program.

Comments help developers explain what code does.

Java supports three main comment styles.

### Single-Line Comments

Use `//`.

```java
// This program displays a welcome message

System.out.println("Welcome to Java");
```

Everything after `//` on that line is treated as a comment.

### Multi-Line Comments

Use `/*` and `*/`.

```java
/*
This program demonstrates
how to display information
using Java.
*/

System.out.println("Hello");
```

Everything between the comment markers is ignored by the compiler.

### Documentation Comments

Java also supports documentation comments using `/**` and `*/`.

```java
/**
 * Displays a welcome message.
 */
public static void greet() {
    System.out.println("Welcome");
}
```

These comments can be processed by the Javadoc documentation tool to generate API documentation.

## 10. Java Naming Conventions

Java identifiers are names given to program elements.

Examples include:

- Class names.
- Variable names.
- Method names.
- Constants.

Java has naming conventions that help developers write readable code.

| Element | Convention | Example |
|---|---|---|
| Class names | PascalCase | `StudentManager` |
| Variable names | camelCase | `studentName` |
| Method names | camelCase | `calculateTotal()` |
| Constants | UPPER_SNAKE_CASE | `MAX_USERS` |
| Package names | lowercase | `com.firebox.app` |

### Example

```java
public class StudentManager {

    static final int MAX_STUDENTS = 100;

    public static void main(String[] args) {

        String studentName = "Brian";

        System.out.println(studentName);

    }
}
```

Explanation:

- `StudentManager` follows PascalCase.
- `MAX_STUDENTS` follows the conventional uppercase naming style for constants.
- `studentName` follows camelCase.
- `main` follows the method naming convention.

Remember that naming conventions improve readability, but not every convention is a strict compiler requirement.

## 11. Java Program Structure

A Java program can contain several important components.

A typical Java source file may contain:

1. Package declaration.
2. Import statements.
3. Class declaration.
4. Fields and variables.
5. Constructors.
6. Methods.
7. The main method, when the class is used as an application entry point.

Consider:

```java
package com.firebox.school;

import java.util.Scanner;

public class Student {

    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public static void main(String[] args) {

        Student student = new Student("Brian", 22);

        student.displayDetails();

    }
}
```

This example introduces several concepts that we will study in later lessons.

Let's understand its structure.

### Package Declaration

```java
package com.firebox.school;
```

A package organizes related Java classes.

For example, a school management system might contain packages such as:

```text
com.firebox.school.students
com.firebox.school.teachers
com.firebox.school.payments
```

A package declaration, when present, must appear before import statements and type declarations.

### Import Statement

```java
import java.util.Scanner;
```

An import statement allows you to refer to a class using its simple name rather than its fully qualified name.

Here, `Scanner` is a class used for reading input.

### Class Declaration

```java
public class Student {
```

Defines a class named `Student`.

### Fields

```java
String name;
int age;
```

These are fields.

They store information associated with a student object.

### Constructor

```java
public Student(String name, int age) {
    this.name = name;
    this.age = age;
}
```

A constructor initializes an object when it is created.

We will study constructors in detail when we reach object-oriented programming.

### Method

```java
public void displayDetails() {
    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
}
```

This method displays the student's information.

### Main Method

```java
public static void main(String[] args) {
```

Provides the traditional application entry point.

### Object Creation

```java
Student student = new Student("Brian", 22);
```

Creates a student object.

### Method Call

```java
student.displayDetails();
```

Calls the method to display the student's details.

Expected output:

```text
Name: Brian
Age: 22
```

This example demonstrates how Java classes, fields, constructors, and methods work together.

---

# PART 3: PRACTICAL JAVA PROGRAMMING

## 12. Creating Your First Java Project

Let's create a simple Java project using Visual Studio Code or another Java editor.

### Step 1: Create a project folder

Create a folder named:

```text
JavaLearning
```

Inside it, create a file:

```text
Main.java
```

Your folder should look like this:

```text
JavaLearning/
    Main.java
```

### Step 2: Write the program

Inside `Main.java`, write:

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Welcome to Java Programming");
        System.out.println("I am learning Java at CodeLab Academy");

    }
}
```

### Step 3: Compile the program

Open the terminal inside the project folder.

Execute:

```bash
javac Main.java
```

If compilation succeeds, Java generates:

```text
Main.class
```

### Step 4: Run the program

Execute:

```bash
java Main
```

Expected output:

```text
Welcome to Java Programming
I am learning Java at CodeLab Academy
```

You have successfully created and executed your first Java program.

## 13. Understanding print() and println()

Java provides different methods for displaying information.

### println()

Prints information and moves to a new line.

```java
System.out.println("Hello");
System.out.println("Java");
```

Output:

```text
Hello
Java
```

### print()

Displays information without automatically moving to a new line.

```java
System.out.print("Hello ");
System.out.print("Java");
```

Output:

```text
Hello Java
```

### printf()

Allows formatted output.

```java
String name = "Brian";
int age = 22;

System.out.printf("My name is %s and I am %d years old.%n", name, age);
```

Output:

```text
My name is Brian and I am 22 years old.
```

Explanation:

- `%s` represents a string.
- `%d` represents an integer.
- `%n` inserts a platform-independent line separator.
- `name` and `age` provide the values used in the formatted message.

## 14. Understanding Java Variables

A variable is a named storage location used to hold data.

Java is statically typed, meaning variables have declared types.

Example:

```java
public class Main {

    public static void main(String[] args) {

        String name = "Brian";
        int age = 22;
        double balance = 1500.50;
        boolean isStudent = true;

        System.out.println(name);
        System.out.println(age);
        System.out.println(balance);
        System.out.println(isStudent);

    }
}
```

Output:

```text
Brian
22
1500.5
true
```

Explanation:

| Declaration | Meaning |
|---|---|
| `String name` | Stores text. |
| `int age` | Stores an integer. |
| `double balance` | Stores a decimal number. |
| `boolean isStudent` | Stores true or false. |

We will study Java data types and variables more deeply in the next lessons.

## 15. Practical Project: Student Information System

Let's create a simple program that displays student information.

Create:

```text
StudentInfo.java
```

Program:

```java
public class StudentInfo {

    public static void main(String[] args) {

        String name = "Brian";
        int registrationNumber = 1025;
        String course = "BBIT";
        int year = 2;
        double feeBalance = 12500.50;

        System.out.println("STUDENT INFORMATION");
        System.out.println("-------------------");

        System.out.println("Name: " + name);
        System.out.println("Registration Number: " + registrationNumber);
        System.out.println("Course: " + course);
        System.out.println("Year: " + year);
        System.out.println("Fee Balance: " + feeBalance);

    }
}
```

### Understanding the code

**Student name:**

```java
String name = "Brian";
```

Creates a variable that stores the student's name.

**Registration number:**

```java
int registrationNumber = 1025;
```

Stores an integer registration number.

**Course:**

```java
String course = "BBIT";
```

Stores the course name.

**Year:**

```java
int year = 2;
```

Stores the student's current academic year.

**Fee balance:**

```java
double feeBalance = 12500.50;
```

Stores the outstanding fee balance.

**Displaying information:**

```java
System.out.println("Name: " + name);
```

The `+` operator joins the text `"Name: "` with the value stored in `name`.

### Run the program

Compile:

```bash
javac StudentInfo.java
```

Execute:

```bash
java StudentInfo
```

Expected output:

```text
STUDENT INFORMATION
-------------------
Name: Brian
Registration Number: 1025
Course: BBIT
Year: 2
Fee Balance: 12500.5
```

## 16. Practical Project: Understanding Multiple Classes

Java applications are often organized into multiple classes instead of placing everything inside one class.

Let's create a small project with two classes.

Project structure:

```text
JavaLearning/
    Main.java
    Greeting.java
```

### File 1: Greeting.java

```java
public class Greeting {

    public void sayHello() {

        System.out.println("Welcome to Java Programming!");

    }
}
```

Explanation:

- `public class Greeting` declares a class named `Greeting`.
- `public void sayHello()` declares a method.
- `System.out.println()` displays the message.
- The method can be called from another class.

### File 2: Main.java

```java
public class Main {

    public static void main(String[] args) {

        Greeting greeting = new Greeting();

        greeting.sayHello();

    }
}
```

Explanation:

**Creating an object:**

```java
Greeting greeting = new Greeting();
```

Creates an object of the `Greeting` class.

**Calling the method:**

```java
greeting.sayHello();
```

Calls the method defined inside `Greeting.java`.

### Compile and execute

From the project directory, run:

```bash
javac Main.java Greeting.java
```

Then:

```bash
java Main
```

Output:

```text
Welcome to Java Programming!
```

This demonstrates how multiple classes can work together in one Java application.

## 17. Common Java Syntax Errors

Understanding errors is part of becoming a good programmer.

### Error 1: Missing semicolon

Incorrect:

```java
int age = 22
```

Correct:

```java
int age = 22;
```

Java expects a semicolon at the end of the statement.

### Error 2: Incorrect capitalization

Incorrect:

```java
system.out.println("Hello");
```

Correct:

```java
System.out.println("Hello");
```

Java is case-sensitive.

### Error 3: Incorrect class name and filename

Consider:

```java
public class Student {
}
```

The file should be named:

```text
Student.java
```

A public top-level class must be stored in a source file with the matching name.

### Error 4: Missing curly brace

Incorrect:

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Hello");
```

Correct:

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Hello");

    }
}
```

Each opening brace must have a corresponding closing brace.

### Error 5: Using an undeclared variable

Incorrect:

```java
public class Main {

    public static void main(String[] args) {

        System.out.println(name);

    }
}
```

The variable `name` has not been declared.

Correct:

```java
public class Main {

    public static void main(String[] args) {

        String name = "Brian";

        System.out.println(name);

    }
}
```

## 18. Practical Exercises

Complete the following exercises using Java.

**Exercise 1: Welcome Program**

Create a Java program that displays:

- Your name.
- Your course.
- Your institution.
- A welcome message.

**Exercise 2: Student Details**

Create a class called `StudentDetails`.

Declare variables for:

- Student name.
- Registration number.
- Course.
- Academic year.

Display all the information.

**Exercise 3: Multiple Output Methods**

Create a program demonstrating:

- `System.out.print()`
- `System.out.println()`
- `System.out.printf()`

Explain the difference in their outputs.

**Exercise 4: Multiple Classes**

Create two classes:

- `Main`
- `School`

Inside `School`, create a method that displays the name of your school.

Call that method from `Main`.

**Exercise 5: Debugging**

Correct this program:

```java
public class Main {

    public static void main(String[] args) {

        string name = "Brian"

        system.out.println(name)

    }
}
```

Identify every error and explain why it occurs.

**Progress: Part 3 of 4**

---

# PART 4: KAI ASSESSMENT

This assessment tests your understanding of Java syntax, program structure, compilation, and execution.

Submit your answers and code to Kai for marking and feedback.

## Section A: Multiple-Choice Questions

**Question 1**

What is Java?

A. A database management system.

B. A high-level programming language.

C. An operating system.

D. A web browser.

**Question 2**

Which file extension is used for Java source code?

A. `.js`

B. `.py`

C. `.java`

D. `.class`

**Question 3**

Which command compiles a Java source file?

A. `java Main.java`

B. `javac Main.java`

C. `compile Main`

D. `run Main`

**Question 4**

What is the purpose of the JVM?

A. To write Java source code.

B. To execute Java bytecode.

C. To store database records.

D. To create HTML pages.

**Question 5**

Which method is traditionally used as the entry point of a standard Java application?

A. `start()`

B. `run()`

C. `main()`

D. `execute()`

**Question 6**

What does `void` mean in a method declaration?

A. The method returns an integer.

B. The method returns a string.

C. The method does not return a value.

D. The method is private.

**Question 7**

Which statement displays output and moves to a new line?

A. `System.out.print()`

B. `System.out.println()`

C. `System.input()`

D. `System.read()`

**Question 8**

Why is Java described as case-sensitive?

A. It supports only uppercase letters.

B. It distinguishes uppercase and lowercase identifiers.

C. It does not support lowercase letters.

D. It automatically changes all names to uppercase.

## Section B: Conceptual Questions

**Question 9**

Explain what Java is and describe four areas where it is used.

**Question 10**

Differentiate between JDK, JRE, and JVM.

**Question 11**

Explain how Java source code is converted into executable instructions.

**Question 12**

What is Java syntax? Give three examples of Java syntax rules.

**Question 13**

Explain the purpose of the following components:

- `public`
- `static`
- `void`
- `main`
- `String[] args`

**Question 14**

Differentiate between single-line, multi-line, and documentation comments.

**Question 15**

Explain the purpose of classes and methods in Java.

**Question 16**

What is the difference between `print()` and `println()`?

## Section C: Practical Programming

**Question 17: First Java Program**

Write a Java program that displays:

```text
Welcome to CodeLab Academy
I am learning Java
Java is a programming language
```

**Question 18: Student Information**

Create a Java class called `Student`.

Declare variables for:

- Name.
- Registration number.
- Course.
- Age.

Display all the information using `System.out.println()`.

**Question 19: Multiple Classes**

Create two Java classes.

The first class should contain a method that displays a welcome message.

The second class should contain the `main()` method and call the welcome method.

**Question 20: Formatted Output**

Write a Java program using `printf()` to display a person's name, age, and course.

## Section D: Debugging

**Question 21**

Identify and correct all syntax errors:

```java
public class Main {

    public static void main(String[] args) {

        String name = "Brian"

        System.out.println(name);

    }
}
```

**Question 22**

What is wrong with this program?

```java
public class Student {

    public static void main(String[] args) {

        int age = 22;

        System.out.println(Age);

    }
}
```

Correct the program and explain your answer.

## Final Practical Challenge: Build a Student Profile Application

Create a Java project called:

`StudentProfile`

Your program should:

1. Have a class named `StudentProfile`.
2. Include a `main()` method.
3. Declare variables for student information.
4. Display the student's profile.
5. Use `print()`, `println()`, and `printf()`.
6. Include appropriate comments.
7. Follow Java naming conventions.
8. Compile and execute successfully.

Your final output should resemble:

```text
================================
       STUDENT PROFILE
================================

Name: Brian
Course: BBIT
Registration Number: 1025
Academic Year: 2
Institution: Kirinyaga University

================================
Java Programming - CodeLab Academy
================================
```

## Kai Assessment Instructions

When you complete the lesson:

1. Submit your assessment answers to Kai.
2. Submit your Java source code.
3. Kai should mark each question.
4. Incorrect answers should receive explanations.
5. Programming submissions should be checked for syntax, structure, and expected output.
6. Receive feedback on areas that need improvement.

## Lesson Completion Checklist

- [ ] Understand what Java is.
- [ ] Understand how Java works.
- [ ] Differentiate JDK, JRE, and JVM.
- [ ] Understand Java compilation and execution.
- [ ] Create a Java class.
- [ ] Write the `main()` method.
- [ ] Understand Java statements and semicolons.
- [ ] Use curly braces correctly.
- [ ] Understand Java comments.
- [ ] Follow Java naming conventions.
- [ ] Use `print()`, `println()`, and `printf()`.
- [ ] Create and execute Java programs.
- [ ] Work with multiple Java classes.
- [ ] Identify and correct basic syntax errors.

**Progress: Part 4 of 4 — Lesson Complete**

**Next Lesson: Java Variables and Data Types**

We will explore primitive data types, reference types, variable declarations, type conversion, type casting, constants, and how Java stores different kinds of data.