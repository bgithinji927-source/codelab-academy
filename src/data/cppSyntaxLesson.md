# C++: Syntax and Program Structure

# Part 1 of 4: Introduction to C++ and Its Structure

## 1. What Is C++?

C++ is a general-purpose programming language used to develop different types of software.

It is known for its performance, flexibility, and ability to work closely with computer hardware.

C++ supports several programming approaches, including:

- Procedural programming.
- Object-oriented programming.
- Generic programming.
- Functional programming techniques.

C++ was developed by **Bjarne Stroustrup** at Bell Laboratories. It evolved from the C programming language and introduced additional programming capabilities.

### Where Is C++ Used?

C++ is used in many areas of software development.

| Area | Application |
|---|---|
| Operating systems | System components and low-level software |
| Game development | Game engines and high-performance games |
| Desktop applications | Computer software |
| Embedded systems | Software running on electronic devices |
| Robotics | Robot control systems |
| Financial systems | High-performance financial applications |
| Browsers | Performance-critical browser components |
| Compilers | Programming language tools |

For example, popular technologies such as Unreal Engine use C++ extensively for game development.

## 2. Understanding How C++ Works

Unlike interpreted languages that can execute source code through an interpreter or runtime, traditional C++ development commonly involves compilation.

Compilation is the process of translating human-readable source code into machine code or an intermediate object representation that can be linked into an executable program.

The general process is:

```text
       C++ SOURCE CODE
          main.cpp
              |
              v
          COMPILER
              |
              v
       OBJECT CODE
              |
              v
          LINKER
              |
              v
       EXECUTABLE FILE
              |
              v
       PROGRAM EXECUTION
```

Let's understand each stage.

**1. Source code**

This is the code written by the developer.

Example:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}
```

**2. Compiler**

The compiler translates the source code into machine instructions or object code.

It also identifies many programming errors, such as invalid syntax and incompatible types.

**3. Object code**

The compiler may produce object files containing compiled program components.

**4. Linker**

The linker combines the necessary object files and libraries to produce an executable.

**5. Execution**

The operating system loads and runs the executable program.

---

## 3. Installing a C++ Development Environment

To write and execute C++ programs, you need a code editor and a C++ compiler.

Common choices include:

| Tool | Purpose |
|---|---|
| Visual Studio Code | Code editor |
| GCC | C++ compiler commonly available through MinGW or Linux distributions |
| Clang | C++ compiler |
| Microsoft Visual C++ | Microsoft's C++ compiler |
| Visual Studio | Integrated development environment |

You can use Visual Studio Code with a compiler such as GCC.

### Checking Whether GCC Is Installed

Open your terminal and execute:

```bash
g++ --version
```

Explanation:

- `g++` is the GCC compiler command used for C++.
- `--version` displays the installed compiler version.

If installed, you should see information about the compiler.

If the command is not recognized, the compiler may not be installed or its executable directory may not be included in your system's PATH.

**Important:** Installing Visual Studio Code alone does not install a C++ compiler.

---

## 4. Your First C++ Program

Let's write the traditional first program.

Create a file named:

```text
main.cpp
```

Add:

```cpp
#include <iostream>

int main() {

    std::cout << "Hello, World!";

    return 0;
}
```

### Expected Output

```text
Hello, World!
```

This program displays a message on the terminal.

Now let's understand every line.

### Line 1

```cpp
#include <iostream>
```

This is a preprocessor directive.

It tells the compiler to include the standard input/output stream library.

The `iostream` library provides functionality for:
- Displaying information.
- Receiving input.
- Working with standard input and output streams.

For example, `std::cout` and `std::cin` are provided through this library.

### Line 2

```cpp
int main() {
```

This declares the `main()` function.

The `main()` function is the entry point of a normal hosted C++ application.

When the program starts, execution begins inside `main()`.

Let's break it down:

- `int` indicates that the function returns an integer.
- `main` is the function name.
- `()` contains the function parameters.
- `{` marks the beginning of the function body.

### Line 3

```cpp
std::cout << "Hello, World!";
```

This statement displays information on the terminal.

Let's understand its components:

**`std`**

This represents the C++ standard namespace.

A namespace helps organize names and prevent naming conflicts.

**`::`**

This is the scope resolution operator.

It tells C++ that `cout` belongs to the `std` namespace.

**`cout`**

This is the standard output stream used to display information.

**`<<`**

This is the stream insertion operator.

It sends information into the output stream.

**`"Hello, World!"`**

This is a string literal containing the message to display.

**`;`**

The semicolon marks the end of the statement.

### Line 4

```cpp
return 0;
```

This returns an integer value from `main()`.

Returning `0` conventionally indicates that the program completed successfully.

### Line 5

```cpp
}
```

This closes the body of the `main()` function.

---

## 5. Understanding C++ Statements and Blocks

A statement is an instruction that tells the program to perform an operation.

Example:

```cpp
int age = 22;
```

This statement declares an integer variable named `age` and initializes it with the value `22`.

Another statement:

```cpp
std::cout << age;
```

Displays the value stored in `age`.

### What Is a Code Block?

A code block is a group of statements enclosed in curly braces `{}`.

Example:

```cpp
int main() {

    int age = 22;

    std::cout << age;

    return 0;
}
```

The statements inside the curly braces belong to the `main()` function.

Code blocks are also used with:
- Conditional statements.
- Loops.
- Functions.
- Classes.

### Important Symbols in C++

| Symbol | Purpose |
|---|---|
| `;` | Ends most statements |
| `{ }` | Defines a code block |
| `( )` | Used for function parameters and expressions |
| `[ ]` | Used for arrays and indexing |
| `#` | Introduces preprocessor directives |
| `::` | Scope resolution operator |
| `<<` | Stream insertion operator |
| `>>` | Stream extraction operator |

---

## 6. Understanding Comments

Comments are explanations written inside source code.

The compiler does not treat ordinary comments as executable statements.

C++ supports two main comment styles.

### A. Single-Line Comments

Use `//` to write a comment on one line.

```cpp
// This program displays a greeting

#include <iostream>

int main() {

    std::cout << "Welcome to C++";

    return 0;
}
```

The compiler ignores the comment.

### B. Multi-Line Comments

Use `/*` and `*/` to write comments across multiple lines.

```cpp
/*
This program demonstrates
how to display a message
using C++.
*/

#include <iostream>

int main() {

    std::cout << "Learning C++";

    return 0;
}
```

### Why Are Comments Important?

Comments help developers:

- Explain complicated logic.
- Document important decisions.
- Make code easier to understand.
- Help other developers maintain the application.

However, comments should explain useful information rather than repeat obvious code.

---

## 7. Understanding Namespaces

A namespace is a named scope used to organize identifiers such as functions, variables, and classes.

C++ provides a standard namespace called `std`.

For example:

```cpp
std::cout << "Hello";
```

Here, `cout` belongs to the `std` namespace.

### Using the Namespace Directive

Instead of writing `std::` repeatedly, you can write:

```cpp
#include <iostream>

using namespace std;

int main() {

    cout << "Hello, World!";

    return 0;
}
```

The statement:

```cpp
using namespace std;
```

allows names from the `std` namespace to be used without writing `std::` each time.

However, large projects commonly prefer explicit namespace qualification:

```cpp
std::cout << "Hello";
```

This reduces naming conflicts, especially when multiple libraries contain identifiers with the same name.

---

## Part 1 Summary

You have learned:

- What C++ is.
- Who developed C++.
- Where C++ is used.
- How C++ source code becomes an executable.
- How to identify a C++ development environment.
- The structure of a basic C++ program.
- The purpose of `#include <iostream>`.
- The role of `main()`.
- Statements and code blocks.
- Comments.
- Namespaces.

**Progress: Part 1 of 4**

---

# Part 2 of 4: C++ Syntax Rules and Program Organization

## 1. Understanding C++ Syntax

Syntax refers to the rules that determine how a programming language's instructions must be written.

Every programming language has syntax rules.

For example, Java requires statements to follow specific structures. C++ also has rules that developers must follow.

Consider:

```cpp
#include <iostream>

int main() {

    std::cout << "Learning C++";

    return 0;
}
```

This program follows valid C++ syntax.

However, the following program contains an error:

```cpp
#include <iostream>

int main() {

    std::cout << "Learning C++"

    return 0;
}
```

The output statement is missing a semicolon.

Corrected version:

```cpp
std::cout << "Learning C++";
```

### Important Syntax Rules

1. Most C++ statements end with a semicolon.
2. Code blocks are enclosed in curly braces.
3. String literals are enclosed in quotation marks.
4. C++ is case-sensitive.
5. Identifiers must follow naming rules.
6. Variables must be declared before they are used.
7. Functions must have valid declarations and definitions.

---

## 2. C++ Is Case-Sensitive

Case-sensitive means that uppercase and lowercase letters are treated as different characters.

For example:

```cpp
int age = 20;

int Age = 25;

int AGE = 30;
```

These are three different variable names.

Consider:

```cpp
#include <iostream>

int main() {

    std::cout << "Hello";

    return 0;
}
```

Changing `main` to `Main` is incorrect:

```cpp
int Main() {
    return 0;
}
```

The standard entry-point function is named `main`, using lowercase letters.

Similarly:

- `cout` is different from `Cout`.
- `int` is different from `Int`.
- `return` is different from `Return`.

---

## 3. Understanding Identifiers

An identifier is a name assigned to a programming element.

Examples include:
- Variable names.
- Function names.
- Class names.
- Namespace names.

Example:

```cpp
int studentAge = 22;
```

Here, `studentAge` is an identifier.

### Identifier Rules

An identifier:

- Can contain letters.
- Can contain digits.
- Can contain underscores.
- Cannot begin with a digit.
- Cannot contain spaces.
- Cannot be a reserved C++ keyword.

### Valid and Invalid Identifiers

| Identifier | Valid? | Explanation |
|---|---|---|
| `studentAge` | Yes | Contains letters |
| `student_age` | Yes | Underscore is allowed |
| `age2` | Yes | Digits are allowed after the first character |
| `_count` | Yes | Begins with an underscore, though some underscore patterns are reserved |
| `2age` | No | Cannot begin with a digit |
| `student age` | No | Spaces are not allowed |
| `class` | No | Reserved C++ keyword |

### Naming Conventions

Developers often use naming conventions to make programs easier to read.

Examples:

```cpp
int studentAge;
int totalMarks;
double accountBalance;
```

For classes, developers may use PascalCase:

```cpp
class StudentRecord {
};
```

For functions, developers may use camelCase:

```cpp
void calculateTotal() {
}
```

These are conventions, not mandatory C++ syntax rules.

---

## 4. Understanding Data Types at a Basic Level

C++ uses data types to determine what kind of information a variable can store.

Examples:

```cpp
int age = 22;

double price = 1500.50;

char grade = 'A';

bool isRegistered = true;
```

Explanation:

| Data type | Purpose | Example |
|---|---|---|
| `int` | Whole numbers | `25` |
| `float` | Floating-point numbers | `12.5f` |
| `double` | Floating-point numbers with greater precision | `12.75` |
| `char` | Single characters | `'A'` |
| `bool` | True or false values | `true` |
| `std::string` | Text | `"Hello"` |

For strings, include the appropriate header:

```cpp
#include <iostream>
#include <string>

int main() {

    std::string name = "John";

    std::cout << name;

    return 0;
}
```

You will study C++ data types in greater detail in a later lesson.

---

## 5. Understanding Functions

A function is a reusable block of code that performs a particular task.

C++ programs can contain many functions.

The `main()` function is where execution begins in a normal hosted application.

Consider:

```cpp
#include <iostream>

void greet() {

    std::cout << "Welcome to C++";
}

int main() {

    greet();

    return 0;
}
```

### Understanding the Code

```cpp
void greet() {
```

Declares a function named `greet`.

- `void` means the function does not return a value.
- `greet` is the function name.
- `()` indicates that the function takes no parameters.

```cpp
std::cout << "Welcome to C++";
```

Displays a message.

```cpp
greet();
```

Calls the function.

This causes the statements inside `greet()` to execute.

### Expected Output

```text
Welcome to C++
```

Functions help developers organize programs into smaller, reusable components.

---

## 6. Understanding Header Files

A header file contains declarations that can be included in other source files.

C++ provides standard library headers such as:

| Header | Purpose |
|---|---|
| `<iostream>` | Standard input and output |
| `<string>` | String functionality |
| `<vector>` | Dynamic arrays |
| `<cmath>` | Mathematical functions |
| `<fstream>` | File input and output |
| `<iomanip>` | Input and output formatting |

Example:

```cpp
#include <iostream>
#include <cmath>

int main() {

    double result = std::sqrt(25);

    std::cout << result;

    return 0;
}
```

Explanation:

```cpp
#include <cmath>
```

Includes the mathematical library header.

```cpp
std::sqrt(25)
```

Calls the square-root function.

### Expected Output

```text
5
```

A header provides declarations needed to use library functionality. The corresponding implementation may be provided by the library during compilation and linking.

---

## 7. Understanding Preprocessor Directives

Preprocessor directives are instructions processed before the main compilation stage.

They commonly begin with `#`.

Example:

```cpp
#include <iostream>
```

This tells the preprocessor to include the specified header.

Another example:

```cpp
#define PI 3.14159
```

Defines a macro named `PI`.

A simple program:

```cpp
#include <iostream>

#define PI 3.14159

int main() {

    std::cout << PI;

    return 0;
}
```

**Output:**

```text
3.14159
```

Modern C++ developers often prefer `constexpr` for typed compile-time constants:

```cpp
constexpr double PI = 3.14159;
```

Unlike a macro, `constexpr` creates a properly typed C++ constant.

---

## 8. Understanding Source Files and Header Files

Large C++ programs are usually divided into multiple files.

This makes the application easier to maintain and organize.

Two common file types are:

**Source files**

Usually end with:

```text
.cpp
```

They contain function and class implementations.

**Header files**

Commonly end with:

```text
.h
```

or:

```text
.hpp
```

They commonly contain declarations that other source files can use.

### Example Project Structure

```text
StudentSystem/
│
├── main.cpp
├── Student.cpp
└── Student.hpp
```

Let's understand the role of each file.

**Student.hpp**

Contains the class declaration.

```cpp
#ifndef STUDENT_HPP
#define STUDENT_HPP

#include <string>

class Student {

public:
    void displayName();

};

#endif
```

**Student.cpp**

Contains the method implementation.

```cpp
#include <iostream>
#include "Student.hpp"

void Student::displayName() {

    std::cout << "Student Name: John";
}
```

**main.cpp**

Contains the main function.

```cpp
#include "Student.hpp"

int main() {

    Student student;

    student.displayName();

    return 0;
}
```

### Understanding Header Guards

The following lines:

```cpp
#ifndef STUDENT_HPP
#define STUDENT_HPP
```

Check whether the header guard has already been defined.

If it has not been defined, the header's contents are included.

```cpp
#endif
```

Ends the conditional directive.

Header guards help prevent the same header from being processed repeatedly within one translation unit.

Modern C++ also supports:

```cpp
#pragma once
```

as a widely supported alternative.

### Understanding the Scope Resolution Operator

Look at:

```cpp
void Student::displayName()
```

The `::` operator identifies `displayName()` as a member of the `Student` class.

This is important when implementing class methods outside the class declaration.

You will explore classes and object-oriented programming in later C++ lessons.

---

## Part 2 Summary

You have learned:

- C++ syntax rules.
- Case sensitivity.
- Identifiers and naming conventions.
- Basic data types.
- Functions.
- Header files.
- Preprocessor directives.
- Source files and header files.
- Header guards.
- The scope resolution operator.

**Progress: Part 2 of 4**

---

# Part 3 of 4: Practical C++ Programming and Execution

Now you will build a small C++ application and learn how to compile and execute it.

## 1. Creating Your First C++ Project

Create a folder named:

```text
CppPractice/
```

Inside the folder, create:

```text
main.cpp
```

Open the folder in Visual Studio Code or another C++ development environment.

Add the following code:

```cpp
#include <iostream>
#include <string>

int main() {

    std::string name = "Brian";

    int age = 22;

    std::cout << "Student Information" << std::endl;

    std::cout << "Name: " << name << std::endl;

    std::cout << "Age: " << age << std::endl;

    return 0;
}
```

### Expected Output

```text
Student Information
Name: Brian
Age: 22
```

### Detailed Explanation

```cpp
#include <iostream>
```

Includes functionality for displaying information.

```cpp
#include <string>
```

Includes the standard string library.

We need it because the program uses `std::string`.

```cpp
int main() {
```

Declares the program's entry-point function.

```cpp
std::string name = "Brian";
```

Creates a string variable named `name`.

It stores the text `"Brian"`.

```cpp
int age = 22;
```

Creates an integer variable named `age`.

It stores the number `22`.

```cpp
std::cout << "Student Information" << std::endl;
```

Displays the heading.

`std::endl` inserts a newline and flushes the output stream.

For ordinary line breaks, `'\n'` is often preferred because it does not necessarily flush the stream.

```cpp
std::cout << "Name: " << name << std::endl;
```

Displays the text `Name:` followed by the value stored in `name`.

```cpp
std::cout << "Age: " << age << std::endl;
```

Displays the text `Age:` followed by the value stored in `age`.

```cpp
return 0;
```

Indicates successful program completion.

---

## 2. Compiling Your C++ Program

Open a terminal inside the project folder.

Execute:

```bash
g++ main.cpp -o main
```

Let's understand this command.

- `g++` invokes the C++ compiler.
- `main.cpp` is the source file.
- `-o` specifies the output filename.
- `main` is the name of the executable that will be created.

If compilation succeeds, you should see no error messages.

On Windows, the executable is normally named:

```text
main.exe
```

On Linux and macOS, it is normally:

```text
main
```

### Running on Windows

```bash
.\main.exe
```

### Running on Linux or macOS

```bash
./main
```

The program should display the student information.

---

## 3. Understanding Compiler Errors

Let's deliberately introduce an error.

Change:

```cpp
std::cout << "Hello";
```

To:

```cpp
std::cout << "Hello"
```

The semicolon is missing.

Compile the program again:

```bash
g++ main.cpp -o main
```

The compiler should report an error.

The exact wording depends on your compiler.

### How to Fix It

Restore the semicolon:

```cpp
std::cout << "Hello";
```

Compile again.

This demonstrates an important development workflow:

1. Write source code.
2. Compile the program.
3. Read compiler errors.
4. Correct the errors.
5. Compile again.
6. Execute the program.

---

## 4. Practical Project: Simple Student Registration Display

Let's build a slightly more complete application.

The program will display student information using variables, functions, and output statements.

### Step 1: Create the file

```text
StudentRegistration.cpp
```

### Step 2: Write the program

```cpp
#include <iostream>
#include <string>

void displayStudent(std::string name, int age, std::string course) {

    std::cout << "\n--- Student Details ---\n";

    std::cout << "Name: " << name << '\n';

    std::cout << "Age: " << age << '\n';

    std::cout << "Course: " << course << '\n';
}

int main() {

    std::string studentName = "John";

    int studentAge = 21;

    std::string studentCourse = "Software Development";

    displayStudent(
        studentName,
        studentAge,
        studentCourse
    );

    return 0;
}
```

### Expected Output

```text
--- Student Details ---
Name: John
Age: 21
Course: Software Development
```

### Detailed Explanation

**Header files**

```cpp
#include <iostream>
#include <string>
```

The first header provides output functionality.

The second provides the string type.

**Function declaration and implementation**

```cpp
void displayStudent(std::string name, int age, std::string course) {
```

Creates a function named `displayStudent`.

It receives three parameters:

- `name`: Student's name.
- `age`: Student's age.
- `course`: Student's course.

The return type is `void`, meaning the function does not return a value.

**Displaying the heading**

```cpp
std::cout << "\n--- Student Details ---\n";
```

Displays a heading.

The `\n` escape sequence creates a new line.

**Displaying the name**

```cpp
std::cout << "Name: " << name << '\n';
```

Displays the name received by the function.

**Displaying the age**

```cpp
std::cout << "Age: " << age << '\n';
```

Displays the age.

**Displaying the course**

```cpp
std::cout << "Course: " << course << '\n';
```

Displays the course.

**Main function**

```cpp
int main() {
```

Execution begins here.

```cpp
std::string studentName = "John";
```

Creates a variable holding the student's name.

```cpp
int studentAge = 21;
```

Creates a variable holding the student's age.

```cpp
std::string studentCourse = "Software Development";
```

Creates a variable holding the student's course.

**Calling the function**

```cpp
displayStudent(
    studentName,
    studentAge,
    studentCourse
);
```

Calls the function and supplies the three values.

The function receives these values through its parameters.

---

## 5. Practical Project: Organizing a C++ Application into Multiple Files

Now let's practice organizing code into separate files.

Create the following folder structure:

```text
CppMultiFile/
│
├── main.cpp
├── Calculator.hpp
└── Calculator.cpp
```

### Step 1: Create Calculator.hpp

```cpp
#ifndef CALCULATOR_HPP
#define CALCULATOR_HPP

class Calculator {

public:

    int add(int a, int b);

};

#endif
```

**Explanation**

```cpp
class Calculator {
```

Declares a class named `Calculator`.

```cpp
public:
```

Indicates that the following class members can be accessed from outside the class.

```cpp
int add(int a, int b);
```

Declares a method that receives two integers and returns an integer.

Notice that the method is declared here but not implemented.

### Step 2: Create Calculator.cpp

```cpp
#include "Calculator.hpp"

int Calculator::add(int a, int b) {

    return a + b;
}
```

**Explanation**

```cpp
#include "Calculator.hpp"
```

Includes the class declaration from the header file.

Quotation marks are commonly used for project headers.

```cpp
int Calculator::add(int a, int b) {
```

Defines the `add()` method belonging to the `Calculator` class.

```cpp
return a + b;
```

Adds the two numbers and returns the result.

### Step 3: Create main.cpp

```cpp
#include <iostream>

#include "Calculator.hpp"

int main() {

    Calculator calculator;

    int result = calculator.add(10, 20);

    std::cout << "Result: " << result << '\n';

    return 0;
}
```

**Explanation**

```cpp
#include "Calculator.hpp"
```

Makes the `Calculator` class declaration available to this source file.

```cpp
Calculator calculator;
```

Creates an object of the `Calculator` class.

```cpp
int result = calculator.add(10, 20);
```

Calls the `add()` method and stores the returned value.

```cpp
std::cout << "Result: " << result << '\n';
```

Displays the result.

### Step 4: Compile All Source Files

Run:

```bash
g++ main.cpp Calculator.cpp -o calculator
```

The compiler processes both source files and links them into one executable.

Run on Windows:

```bash
.\calculator.exe
```

Run on Linux or macOS:

```bash
./calculator
```

**Expected Output:**

```text
Result: 30
```

### Why Is This Structure Important?

Imagine building a large application.

You might have:

- User management.
- Payment processing.
- Database operations.
- Authentication.
- Reporting.
- Notifications.

Keeping every implementation inside one source file would make the project difficult to maintain.

Separating declarations and implementations allows developers to organize larger applications more effectively.

---

## 6. Practical Exercises

### Exercise 1: Greeting Program

Create a program named `Greeting.cpp`.

It should:

1. Include the required header.
2. Declare a `main()` function.
3. Display your name.
4. Display a message saying that you are learning C++.
5. Return `0`.

### Exercise 2: Student Information

Create a program that stores:

- Student name.
- Age.
- Course.
- Registration number.

Display all four values.

Use appropriate data types.

### Exercise 3: Function Practice

Create a function named:

```cpp
void displayWelcome()
```

The function should display:

```text
Welcome to CodeLab Academy.
Start learning C++ today.
```

Call the function from `main()`.

### Exercise 4: Multiple-File Program

Create a project with:

```text
main.cpp
Calculator.hpp
Calculator.cpp
```

Implement an addition method and call it from `main()`.

Compile all source files together.

### Exercise 5: Debugging

Find and correct the errors:

```cpp
#include <iostream>

int Main() {

    std::cout << "C++ Programming"

    return 0;
}
```

Identify every syntax or program-structure problem.

---

## Part 3 Summary

You have learned:

- How to create a C++ project.
- How to write a complete C++ program.
- How to compile using GCC.
- How to execute a compiled program.
- How to identify and fix syntax errors.
- How to use functions.
- How to organize C++ code into multiple files.
- How to create header files and source files.
- How to compile a multi-file project.

**Progress: Part 3 of 4**

---

# Part 4 of 4: Kai Assessment

This assessment evaluates your understanding of C++ syntax, program structure, compilation, functions, namespaces, and source-file organization.

Submit your answers and practical work to Kai for marking and feedback.

## Section A: Multiple-Choice Questions

**Question 1**

Who developed C++?

A. James Gosling.

B. Bjarne Stroustrup.

C. Dennis Ritchie.

D. Guido van Rossum.

**Question 2**

Which function is the normal entry point of a hosted C++ application?

A. `start()`

B. `run()`

C. `main()`

D. `execute()`

**Question 3**

What is the purpose of `#include <iostream>`?

A. To create a database.

B. To provide standard input and output functionality.

C. To define a class.

D. To compile the program.

**Question 4**

Which symbol terminates most C++ statements?

A. `:`

B. `,`

C. `;`

D. `.`

**Question 5**

What does `std::cout` represent?

A. Standard output stream.

B. Standard input function.

C. A database connection.

D. A compiler command.

**Question 6**

Which operator is commonly used to send information into `std::cout`?

A. `>>`

B. `<<`

C. `==`

D. `!=`

**Question 7**

Which file extension is commonly used for C++ source files?

A. `.html`

B. `.java`

C. `.cpp`

D. `.css`

**Question 8**

What does the `void` return type indicate?

A. The function returns an integer.

B. The function returns a string.

C. The function does not return a value.

D. The function cannot execute.

**Question 9**

What is the purpose of a header file?

A. To store only executable programs.

B. To provide declarations that can be shared between source files.

C. To replace the compiler.

D. To run programs without compilation.

**Question 10**

What does this command do?

```bash
g++ main.cpp -o main
```

A. Deletes the source file.

B. Compiles the source file and creates an executable named `main`.

C. Opens the database.

D. Creates a Java application.

---

## Section B: Conceptual Questions

**Question 11**

Explain what C++ is and describe five areas where it is used.

**Question 12**

Describe the general process through which C++ source code becomes an executable program.

**Question 13**

Explain the purpose of each of the following:

- `#include <iostream>`
- `int main()`
- `std::cout`
- `return 0`
- Semicolon.
- Curly braces.

**Question 14**

Differentiate between source files and header files.

Give an example of how they work together in a C++ application.

**Question 15**

What is a namespace? Explain why C++ uses namespaces and what `std::` means.

**Question 16**

Explain the difference between single-line and multi-line comments.

**Question 17**

What is an identifier? State five rules that developers should follow when naming identifiers.

**Question 18**

Explain the difference between a statement, a code block, and a function.

---

## Section C: Practical Programming Questions

### Question 19: Basic C++ Program

Write a complete C++ program that displays:

```text
My First C++ Program
Learning Software Development
CodeLab Academy
```

Your program must:
- Include the necessary header.
- Have a valid `main()` function.
- Display all three lines.
- Return `0`.

### Question 20: Student Information Program

Create a program that stores the following information:

| Variable | Value |
|---|---|
| Name | John |
| Age | 22 |
| Course | Software Development |
| Grade | A |

Display the information in a well-organized format.

Use suitable data types.

### Question 21: Function Implementation

Write a function named:

```cpp
void calculateTotal()
```

The function should:
- Declare two integer variables.
- Add their values.
- Display the result.

Call the function from `main()`.

### Question 22: Identify and Correct Errors

Study the following program:

```cpp
#include <iostream>

int Main() {

    std::cout << "Welcome to C++"

    return 0;
}
```

Identify the errors and provide a corrected complete program.

### Question 23: Multi-File Application

Create a simple calculator application using three files:

```text
main.cpp
Calculator.hpp
Calculator.cpp
```

Your application should:

1. Declare a `Calculator` class.
2. Implement an addition method.
3. Create a calculator object in `main()`.
4. Call the addition method.
5. Display the result.

Provide the compilation command.

---

## Section D: Practical Project

### Project: C++ Student Information Management Foundation

Build a small C++ application that demonstrates the program structure and organization techniques covered in this lesson.

The application should contain:

**1. Main program**

Create a valid `main()` function.

**2. Student information**

Store:
- Student name.
- Registration number.
- Age.
- Course.

**3. Display function**

Create a reusable function that displays student information.

**4. Multiple-file organization**

Organize the application using separate source and header files.

Suggested structure:

```text
StudentManagement/
│
├── main.cpp
│
├── Student.hpp
│
└── Student.cpp
```

**5. Compilation**

Compile all source files using GCC.

**6. Documentation**

Create a `README.md` explaining:

- What the program does.
- The purpose of each file.
- How to compile it.
- How to execute it.

### Assessment Expectations

Kai should evaluate:

| Area | Marks |
|---|---:|
| Understanding of C++ syntax | 15 |
| Program structure | 15 |
| Correct use of functions | 15 |
| Header and source file organization | 20 |
| Compilation and execution | 15 |
| Code readability and documentation | 10 |
| Practical implementation | 10 |
| **Total** | **100** |

Kai should provide:
- A score out of 100.
- Corrections for incorrect answers.
- Explanations of syntax errors.
- Feedback on code organization.
- Suggestions for improving the project.
- A recommendation on whether the learner is ready for the next lesson.

## Lesson Completion Checklist

By the end of this lesson, you should be able to:

- [ ] Explain what C++ is.
- [ ] Identify common uses of C++.
- [ ] Explain the C++ compilation process.
- [ ] Set up a C++ development environment.
- [ ] Write a basic C++ program.
- [ ] Understand the purpose of `main()`.
- [ ] Use `std::cout` to display information.
- [ ] Understand statements and code blocks.
- [ ] Write single-line and multi-line comments.
- [ ] Explain namespaces.
- [ ] Follow C++ identifier and naming rules.
- [ ] Understand basic header files.
- [ ] Create and call functions.
- [ ] Organize code into multiple source files.
- [ ] Compile and execute C++ programs using GCC.

# Part 4 of 4 — Lesson Complete