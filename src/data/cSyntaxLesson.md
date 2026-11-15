# C PROGRAMMING: SYNTAX AND PROGRAM STRUCTURE

# PART 1 OF 4: INTRODUCTION TO C AND ITS SYNTAX

## 1. What Is C Programming?

C is a general-purpose, procedural programming language used to develop software that interacts closely with computer hardware and system resources.

It is one of the most influential programming languages in computing.

C was developed by Dennis Ritchie at Bell Laboratories in the early 1970s.

C is widely used in:

- Operating systems.
- Embedded systems.
- Device drivers.
- Compilers.
- Database engines.
- Networking software.
- System utilities.
- Performance-critical applications.

For example, parts of the Linux kernel are written in C.

### Why learn C?

C helps you understand how software interacts with computer memory and hardware.

It also teaches programming fundamentals that are useful when learning other languages.

Some important characteristics include:

| Feature | Explanation |
|---|---|
| Procedural | Programs are organized around functions and procedures. |
| Compiled | Source code is translated into machine code before execution. |
| Statically typed | Variables have declared data types. |
| Portable | C programs can be compiled for different platforms, subject to platform differences. |
| Efficient | C allows relatively direct control over memory and system resources. |
| Structured | Programs can be divided into functions and smaller components. |
| Low-level capabilities | C supports pointers and direct memory manipulation. |

---

## 2. Understanding the Difference Between C and C++

You have already studied C++ in CodeLab Academy. C and C++ are related, but they are different programming languages.

C is primarily a procedural language.

C++ supports procedural programming as well as object-oriented and generic programming.

### Comparison

| Feature | C | C++ |
|---|---|---|
| Programming approach | Primarily procedural | Multi-paradigm |
| Classes and objects | Not built into the language | Supported |
| Inheritance | Not built into the language | Supported |
| Function overloading | Not supported | Supported |
| Templates | Not supported | Supported |
| Pointers | Supported | Supported |
| Structures | Supported | Supported |
| Memory management | `malloc()`, `calloc()`, `realloc()`, `free()` | Also supports `new` and `delete` |
| Standard input/output | `printf()` and `scanf()` | `cout` and `cin`, as well as C-style I/O |

### Example: Displaying text in C

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");

    return 0;
}
```

### Example: Displaying text in C++

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;

    return 0;
}
```

Both programs display the same message, but they use different input/output systems.

In this C course, we will use C syntax and C standard libraries.

---

## 3. Understanding C Program Structure

Every C program follows a structure that tells the compiler how to interpret the instructions.

Consider this program:

```c
#include <stdio.h>

int main() {
    printf("Welcome to C Programming!\n");

    return 0;
}
```

This is a basic C program.

Let's understand every part.

### A. The Preprocessor Directive

```c
#include <stdio.h>
```

This is a preprocessor directive.

It tells the C preprocessor to include declarations from the standard input/output header.

The header provides functions such as:

- `printf()` — displays formatted output.
- `scanf()` — reads formatted input.
- `getchar()` — reads a character.
- `putchar()` — displays a character.
- `fgets()` — reads a line of text.

Without the appropriate declaration for `printf()`, the compiler may report a diagnostic or warning depending on the compilation mode and compiler.

### B. The main() Function

```c
int main() {
```

The `main()` function is the entry point of a hosted C program.

When the program starts, execution begins inside `main()`.

Let's break it down:

- `int` means the function returns an integer.
- `main` is the function name.
- `()` indicates that this version takes no arguments.
- `{` begins the function body.

The program's main instructions are placed inside this function.

### C. The Function Body

```c
printf("Welcome to C Programming!\n");
```

This instruction displays a message on the screen.

`printf()` is a standard library function declared in `<stdio.h>`.

The text inside quotation marks is called a string literal.

The `\n` character moves the cursor to a new line after printing.

### D. The Return Statement

```c
return 0;
```

This ends the `main()` function and returns an integer status to the operating system.

A return value of `0` conventionally indicates successful execution.

### E. Closing Braces

```c
}
```

The closing brace marks the end of the function body.

### Complete program structure

```c
#include <stdio.h>

int main() {

    // Program instructions go here

    return 0;
}
```

This is the basic structure you will use in many beginner C programs.

---

## 4. Understanding C Syntax

Syntax refers to the rules that determine how instructions must be written in a programming language.

Just as natural languages have grammar, C has its own syntax rules.

If you break these rules, the compiler may report syntax errors.

### Rule 1: Every statement normally ends with a semicolon

Correct:

```c
printf("Hello");
```

Incorrect:

```c
printf("Hello")
```

The semicolon marks the end of a statement.

However, not every line requires one. For example, preprocessor directives do not end with semicolons.

### Rule 2: C is case-sensitive

C treats uppercase and lowercase letters as different characters.

For example:

```c
int age = 20;
```

This is different from:

```c
int Age = 20;
```

The variable `age` and the variable `Age` are two different identifiers.

Similarly:

```c
printf("Hello");
```

is correct, while:

```c
Printf("Hello");
```

does not refer to the standard library function `printf()`.

### Rule 3: Use braces to group instructions

Braces define blocks of code.

Example:

```c
int main() {
    printf("First statement\n");
    printf("Second statement\n");

    return 0;
}
```

Both `printf()` statements belong to the `main()` function.

### Rule 4: Strings require quotation marks

Correct:

```c
printf("Learning C is interesting");
```

Incorrect:

```c
printf(Learning C is interesting);
```

A string literal must be enclosed in double quotation marks.

### Rule 5: Instructions execute in order

Consider:

```c
#include <stdio.h>

int main() {

    printf("First\n");
    printf("Second\n");
    printf("Third\n");

    return 0;
}
```

Output:

```text
First
Second
Third
```

The statements execute sequentially unless control-flow instructions change the order.

---

## 5. Comments in C

Comments are notes written inside source code to explain what the program does.

The compiler ignores comments when compiling the program.

C supports two main comment styles.

### A. Single-line comments

Use `//` to write a comment on one line.

```c
// This program displays a welcome message

printf("Welcome");
```

The compiler ignores the text following `//` on that line.

### B. Multi-line comments

Use `/*` to begin a comment and `*/` to end it.

```c
/*
This program demonstrates
how multi-line comments work.
*/

printf("Hello");
```

This is useful when explaining larger sections of code.

### Why are comments important?

Comments help programmers:

- Explain complicated logic.
- Document functions.
- Make code easier to understand.
- Maintain larger projects.
- Work collaboratively.

### Important distinction

Comments are not instructions.

For example:

```c
// printf("This will not execute");

printf("This will execute");
```

Only the second statement is executed.

---

## 6. Understanding Identifiers

An identifier is a name used to identify a programming element.

Examples include:

- Variable names.
- Function names.
- Array names.
- Structure names.

Consider:

```c
int studentAge = 21;
```

Here, `studentAge` is an identifier.

### Rules for naming identifiers

1. An identifier can contain letters.
2. It can contain digits, but cannot begin with a digit.
3. It can contain underscores.
4. It cannot contain spaces.
5. It cannot be a reserved C keyword.
6. C identifiers are case-sensitive.

### Valid identifiers

```c
age
studentAge
student_age
number1
totalMarks
```

### Invalid identifiers

```c
1student
student age
total-marks
int
```

Why are these invalid?

- `1student` begins with a digit.
- `student age` contains a space.
- `total-marks` contains a hyphen.
- `int` is a reserved keyword.

### Good naming practices

Use names that communicate purpose.

Less descriptive:

```c
int x = 20;
```

More descriptive:

```c
int studentAge = 20;
```

Descriptive names make programs easier to maintain.

---

## 7. Reserved Keywords in C

Keywords are words that have special meanings in the C language.

You cannot use them as ordinary variable or function names.

Examples include:

| Keyword | Purpose |
|---|---|
| `int` | Declares an integer type |
| `char` | Declares a character type |
| `float` | Declares a floating-point type |
| `double` | Declares a higher-precision floating-point type |
| `if` | Starts a conditional statement |
| `else` | Provides an alternative branch |
| `for` | Starts a loop |
| `while` | Starts a condition-controlled loop |
| `return` | Returns from a function |
| `void` | Represents no value or no parameters in certain contexts |
| `struct` | Defines a structure type |
| `typedef` | Creates a type alias |
| `switch` | Starts a multi-branch selection statement |
| `break` | Exits a loop or switch |
| `continue` | Skips to the next loop iteration |

For example, this is invalid:

```c
int return = 10;
```

The word `return` is reserved by the language.

A valid alternative is:

```c
int result = 10;
```

---

## 8. Whitespace and Formatting

C generally ignores extra whitespace between tokens where whitespace is permitted.

For example:

```c
int age = 20;
```

and:

```c
int     age     =     20;
```

Both are valid.

However, formatting is important because it improves readability.

Compare:

```c
#include <stdio.h>
int main(){int age=20;printf("%d",age);return 0;}
```

With:

```c
#include <stdio.h>

int main() {

    int age = 20;

    printf("%d\n", age);

    return 0;
}
```

The second version is easier to understand and maintain.

### Recommended formatting habits

- Indent instructions inside functions.
- Put spaces around operators.
- Separate logical sections with blank lines.
- Use meaningful variable names.
- Keep braces consistent.
- Avoid writing an entire program on one line.

---

## 9. Part 1 Knowledge Check

Answer these questions before moving to the next part.

1. What is C programming?
2. Who developed C and where was it developed?
3. What is the purpose of `#include <stdio.h>`?
4. What is the role of the `main()` function?
5. Why does `return 0;` appear in many C programs?
6. What is a semicolon used for?
7. Explain why C is case-sensitive.
8. What is an identifier?
9. What are reserved keywords?
10. Differentiate between single-line and multi-line comments.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: THE COMPILATION PROCESS AND PROGRAM EXECUTION

## 1. What Is a Compiler?

A compiler is a software tool that translates source code written in a programming language into another form that a computer can execute.

C is a compiled language.

This means you normally write your C code in a source file and compile it before running the resulting executable program.

For example:

```c
printf("Hello World");
```

The computer does not directly execute this C statement as written.

The compiler translates the program into machine code suitable for the target system.

### Examples of C compilers

- GCC.
- Clang.
- Microsoft C compiler (MSVC).

For this course, we will use GCC.

---

## 2. Understanding C Source Files

C source files commonly use the `.c` extension.

Examples:

```text
main.c
calculator.c
student.c
inventory.c
```

A C header file commonly uses the `.h` extension.

Examples:

```text
student.h
calculator.h
```

A source file contains program implementation.

A header file commonly contains declarations that can be shared across source files.

### Example

Create a file named:

```text
main.c
```

Write:

```c
#include <stdio.h>

int main() {

    printf("My first C program\n");

    return 0;
}
```

The `.c` extension identifies this as a C source file.

---

## 3. Understanding the Compilation Process

The C compilation process involves several stages.

The main stages are:

1. Preprocessing.
2. Compilation.
3. Assembly.
4. Linking.

Let's examine each stage.

### Stage 1: Preprocessing

The preprocessor handles directives such as:

```c
#include <stdio.h>
```

It processes header inclusions and macros before the compiler translates the resulting source code.

Example:

```c
#define PI 3.14159

#include <stdio.h>

int main() {
    printf("%f", PI);

    return 0;
}
```

The preprocessor expands `PI` wherever the macro is used.

The expression:

```c
printf("%f", PI);
```

is effectively processed as:

```c
printf("%f", 3.14159);
```

This is a simplified illustration of macro expansion.

### Stage 2: Compilation

The compiler analyzes the preprocessed source code.

It checks language rules and translates the program into assembly language or an intermediate representation before further processing.

For example, the compiler checks:

- Whether statements are valid.
- Whether variables are declared.
- Whether functions are used correctly.
- Whether types are compatible.

### Stage 3: Assembly

The assembler translates assembly instructions into machine-code object files.

An object file contains machine code and information needed by the linker.

Common object-file extensions include:

- `.o` on many Unix-like systems.
- `.obj` on Windows toolchains.

### Stage 4: Linking

The linker combines object files and resolves references to required functions and libraries.

For example, your program calls:

```c
printf("Hello");
```

The linker helps connect the program with the implementation of the standard library function.

The result is an executable program.

### Compilation flow

```text
C Source Code
      |
      v
Preprocessor
      |
      v
Compiler
      |
      v
Assembler
      |
      v
Object File
      |
      v
Linker
      |
      v
Executable Program
      |
      v
Program Execution
```

---

## 4. Compiling Your First C Program

Assume your source file is named:

```text
main.c
```

Open a terminal in the directory containing the file.

Run:

```bash
gcc main.c -o main
```

Let's understand the command.

| Command part | Meaning |
|---|---|
| `gcc` | Runs the GCC compiler |
| `main.c` | Specifies the source file |
| `-o` | Specifies the output filename |
| `main` | Names the resulting executable |

On Windows, GCC may produce:

```text
main.exe
```

On Linux, the executable may be named:

```text
main
```

### Running on Windows

```bash
.\main.exe
```

### Running on Linux

```bash
./main
```

If compilation succeeds, you should see:

```text
My first C program
```

### Using stricter compiler options

You can compile with additional warnings:

```bash
gcc -std=c17 -Wall -Wextra -pedantic main.c -o main
```

Explanation:

- `-std=c17` selects the C17 language standard.
- `-Wall` enables many useful warnings.
- `-Wextra` enables additional warnings.
- `-pedantic` requests diagnostics for certain non-standard language extensions.
- `-o main` names the output executable.

Warnings are useful because a program can compile successfully while still containing suspicious or potentially incorrect code.

---

## 5. Understanding Compiler Errors

A compiler error occurs when the source code violates a rule that prevents successful compilation.

Consider:

```c
#include <stdio.h>

int main() {

    printf("Hello World")

    return 0;
}
```

This program is missing a semicolon after the `printf()` statement.

Correct version:

```c
#include <stdio.h>

int main() {

    printf("Hello World");

    return 0;
}
```

### Common compiler errors

| Error | Possible cause |
|---|---|
| Expected `;` | Missing semicolon |
| Undeclared identifier | Using a name that has not been declared |
| Expected `)` | Missing closing parenthesis |
| Expected `}` | Missing closing brace |
| Conflicting types | Incompatible declarations |
| Undefined reference | A required function or object was not linked correctly |

### Example: Undeclared variable

Incorrect:

```c
#include <stdio.h>

int main() {

    printf("%d", age);

    return 0;
}
```

The variable `age` has not been declared.

Correct:

```c
#include <stdio.h>

int main() {

    int age = 20;

    printf("%d", age);

    return 0;
}
```

The declaration creates the variable before it is used.

---

## 6. Understanding Runtime Errors

A runtime error occurs while a program is executing.

A program can compile successfully and still fail during execution.

For example:

```c
#include <stdio.h>

int main() {

    int numbers[3] = {10, 20, 30};

    printf("%d", numbers[10]);

    return 0;
}
```

The array contains only three elements.

Valid indexes are:

```text
0, 1, 2
```

Accessing index `10` is outside the array.

This is undefined behavior in C. The program may display an unexpected value, crash, or appear to work.

### Another example: Division by zero

```c
#include <stdio.h>

int main() {

    int result = 10 / 0;

    printf("%d", result);

    return 0;
}
```

Integer division by zero has undefined behavior in C.

A safer approach is to check the divisor before performing division.

```c
#include <stdio.h>

int main() {

    int number = 10;
    int divisor = 0;

    if (divisor != 0) {
        printf("%d", number / divisor);
    } else {
        printf("Cannot divide by zero.");
    }

    return 0;
}
```

This program checks the divisor before performing the calculation.

---

## 7. Understanding Logical Errors

A logical error occurs when a program executes but produces an incorrect result because its logic is wrong.

Example:

```c
#include <stdio.h>

int main() {

    int length = 10;
    int width = 5;

    int area = length + width;

    printf("Area: %d", area);

    return 0;
}
```

This program compiles and runs.

However, it calculates the area incorrectly.

The area of a rectangle is:

```text
Area = Length × Width
```

Correct version:

```c
int area = length * width;
```

Output:

```text
Area: 50
```

### Three important error categories

| Error category | When it happens | Example |
|---|---|---|
| Syntax/compile-time error | During compilation | Missing semicolon |
| Runtime error or undefined behavior | During execution | Invalid memory access |
| Logical error | Program runs but gives incorrect results | Wrong formula |

---

## 8. Understanding the Link Between Source Code and Executables

A source file is not the same as an executable.

Consider:

```text
project/
│
├── main.c
└── main.exe
```

`main.c` contains human-readable C source code.

`main.exe` contains executable program instructions for Windows.

You normally edit the source file and recompile it to create an updated executable.

The executable is platform-specific. A Windows executable is not normally run directly on Linux, for example.

---

## 9. Basic Program Organization

As programs become larger, placing everything in one file becomes difficult.

C allows programs to be divided into multiple source files and header files.

Example:

```text
calculator/
│
├── main.c
├── calculator.c
└── calculator.h
```

### main.c

```c
#include <stdio.h>
#include "calculator.h"

int main() {

    int result = add(10, 20);

    printf("Result: %d\n", result);

    return 0;
}
```

### calculator.h

```c
#ifndef CALCULATOR_H
#define CALCULATOR_H

int add(int a, int b);

#endif
```

### calculator.c

```c
#include "calculator.h"

int add(int a, int b) {

    return a + b;
}
```

### Understanding the files

**main.c**

This contains the `main()` function and calls the addition function.

**calculator.h**

This contains the function declaration.

The declaration informs other source files that the function exists and describes its interface.

The preprocessor directives:

```c
#ifndef CALCULATOR_H
#define CALCULATOR_H

#endif
```

form an include guard.

They help prevent the header's contents from being included multiple times in the same translation unit.

**calculator.c**

This contains the actual implementation of the addition function.

### Compiling multiple files

Run:

```bash
gcc main.c calculator.c -o calculator
```

The compiler processes both source files and links them into one executable.

This organization makes larger programs easier to maintain.

---

## 10. Part 2 Knowledge Check

1. What is a compiler?
2. Name three C compilers.
3. What is the difference between source code and executable code?
4. Explain the four major stages of compilation.
5. What does the `-o` option do in GCC?
6. What is the purpose of `-Wall`?
7. Differentiate between compiler errors and runtime errors.
8. What is a logical error?
9. What is the purpose of a header file?
10. Why should large C programs be divided into multiple files?

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL C PROGRAMMING

In this part, you will create and run real C programs.

You will learn how to:

- Set up a C project.
- Compile and execute programs.
- Display information.
- Accept user input.
- Organize code.
- Create reusable functions.
- Identify basic errors.

## 1. Setting Up Your C Development Environment

Create a project folder:

```text
CProgramming/
```

Inside it, create:

```text
CProgramming/
│
├── hello.c
├── personal_info.c
├── calculator.c
├── temperature.c
├── functions.c
└── project/
```

You can use Visual Studio Code as your code editor.

Install or configure GCC so that the terminal recognizes the `gcc` command.

Verify the installation:

```bash
gcc --version
```

If GCC is correctly installed, the terminal should display compiler version information.

---

## 2. Practical One: Your First C Program

Create:

```text
hello.c
```

Write:

```c
#include <stdio.h>

int main() {

    printf("Hello, World!\n");
    printf("Welcome to C Programming.\n");
    printf("I am learning software development.\n");

    return 0;
}
```

### Understanding the program

**First line**

```c
#include <stdio.h>
```

Includes the standard input/output declarations.

**Second line**

```c
int main() {
```

Defines the program's entry point.

**First output statement**

```c
printf("Hello, World!\n");
```

Displays the first message and moves to a new line.

**Second output statement**

```c
printf("Welcome to C Programming.\n");
```

Displays another message.

**Third output statement**

```c
printf("I am learning software development.\n");
```

Displays the final message.

**Return statement**

```c
return 0;
```

Indicates successful program termination.

### Compile

```bash
gcc hello.c -o hello
```

### Run on Windows

```bash
.\hello.exe
```

### Run on Linux

```bash
./hello
```

Expected output:

```text
Hello, World!
Welcome to C Programming.
I am learning software development.
```

---

## 3. Practical Two: Understanding printf()

`printf()` is used to display formatted output.

It can display:

- Text.
- Integers.
- Decimal numbers.
- Characters.
- Other formatted values.

### Example

```c
#include <stdio.h>

int main() {

    int age = 21;
    float height = 1.75f;
    char grade = 'A';

    printf("Age: %d\n", age);
    printf("Height: %.2f meters\n", height);
    printf("Grade: %c\n", grade);

    return 0;
}
```

### Line-by-line explanation

**1. Declare an integer**

```c
int age = 21;
```

Creates an integer variable named `age`.

It stores the value `21`.

**2. Declare a floating-point number**

```c
float height = 1.75f;
```

Creates a floating-point variable named `height`.

The `f` suffix identifies the floating-point constant as a `float`.

**3. Declare a character**

```c
char grade = 'A';
```

Creates a character variable containing the letter `A`.

Character constants use single quotation marks.

**4. Display the integer**

```c
printf("Age: %d\n", age);
```

`%d` is the conversion specifier for an integer.

The value of `age` replaces `%d` in the output.

**5. Display the decimal number**

```c
printf("Height: %.2f meters\n", height);
```

`%f` is used to display a floating-point value.

`.2` specifies two digits after the decimal point.

**6. Display the character**

```c
printf("Grade: %c\n", grade);
```

`%c` is used to display a character.

### Expected output

```text
Age: 21
Height: 1.75 meters
Grade: A
```

### Common conversion specifiers

| Specifier | Purpose |
|---|---|
| `%d` | Integer |
| `%i` | Integer |
| `%f` | Floating-point value |
| `%lf` | Double when used with `scanf()` |
| `%c` | Character |
| `%s` | String represented by a character array |
| `%u` | Unsigned integer |
| `%x` | Unsigned integer in hexadecimal |

**Important:** In `printf()`, a `float` argument is automatically promoted to `double`, so `%f` is used to print both `float` and `double` values.

---

## 4. Practical Three: Accepting User Input with scanf()

Programs become more useful when they can accept information from users.

C provides `scanf()` for formatted input.

### Example: Personal Information Program

Create:

```text
personal_info.c
```

Write:

```c
#include <stdio.h>

int main() {

    int age;
    float height;
    char initial;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your height: ");
    scanf("%f", &height);

    printf("Enter your first initial: ");
    scanf(" %c", &initial);

    printf("\nYOUR INFORMATION\n");

    printf("Age: %d\n", age);
    printf("Height: %.2f\n", height);
    printf("Initial: %c\n", initial);

    return 0;
}
```

### Line-by-line explanation

**1. Declare the variables**

```c
int age;
float height;
char initial;
```

These variables will store information entered by the user.

**2. Ask for the age**

```c
printf("Enter your age: ");
```

Displays a prompt.

**3. Read the age**

```c
scanf("%d", &age);
```

- `%d` tells `scanf()` to read an integer.
- `&age` provides the memory address where the entered value should be stored.

The `&` operator obtains the address of a variable.

**4. Read the height**

```c
scanf("%f", &height);
```

This reads a floating-point value and stores it in `height`.

**5. Read the initial**

```c
scanf(" %c", &initial);
```

The leading space before `%c` tells `scanf()` to skip leading whitespace, including leftover newline characters.

This is useful when reading a character after other input.

**6. Display the information**

The final `printf()` statements display the values entered by the user.

### Example interaction

```text
Enter your age: 21
Enter your height: 1.75
Enter your first initial: B

YOUR INFORMATION
Age: 21
Height: 1.75
Initial: B
```

### Important: Why does scanf() use &?

Consider:

```c
scanf("%d", &age);
```

The function needs to know where in memory to store the input.

`&age` provides the address of the variable.

For a character array used as a string, the array name generally converts to a pointer to its first element, so you normally do not write `&` before the array name when using `%s`.

Also, always check the return value of `scanf()` in production code to determine whether input conversion succeeded.

---

## 5. Practical Four: Creating a Simple Calculator

Now combine output, input, variables, operators, and conditional statements.

Create:

```text
calculator.c
```

Write:

```c
#include <stdio.h>

int main() {

    double firstNumber;
    double secondNumber;

    printf("Enter the first number: ");
    scanf("%lf", &firstNumber);

    printf("Enter the second number: ");
    scanf("%lf", &secondNumber);

    printf("\nCALCULATOR RESULTS\n");

    printf("Addition: %.2f\n",
           firstNumber + secondNumber);

    printf("Subtraction: %.2f\n",
           firstNumber - secondNumber);

    printf("Multiplication: %.2f\n",
           firstNumber * secondNumber);

    if (secondNumber != 0) {
        printf("Division: %.2f\n",
               firstNumber / secondNumber);
    } else {
        printf("Division is not possible.\n");
    }

    return 0;
}
```

### Explanation

**1. Declare two variables**

```c
double firstNumber;
double secondNumber;
```

Both variables store decimal values.

**2. Accept the first number**

```c
scanf("%lf", &firstNumber);
```

`%lf` is used to read a `double` using `scanf()`.

**3. Accept the second number**

```c
scanf("%lf", &secondNumber);
```

Stores the second input value.

**4. Perform addition**

```c
firstNumber + secondNumber
```

Adds the two values.

**5. Perform subtraction**

```c
firstNumber - secondNumber
```

Subtracts the second number from the first.

**6. Perform multiplication**

```c
firstNumber * secondNumber
```

Multiplies the two numbers.

**7. Check division**

```c
if (secondNumber != 0)
```

Checks whether the second number is not zero.

Division by zero must be avoided.

**8. Perform division**

```c
firstNumber / secondNumber
```

Calculates the division when the divisor is not zero.

### Example output

```text
Enter the first number: 20
Enter the second number: 5

CALCULATOR RESULTS
Addition: 25.00
Subtraction: 15.00
Multiplication: 100.00
Division: 4.00
```

**Important improvement:** This beginner example assumes the user enters valid numbers. A more robust calculator should check the return values of `scanf()` and handle invalid input.

---

## 6. Practical Five: Temperature Converter

Create:

```text
temperature.c
```

The program will convert temperatures from Celsius to Fahrenheit.

The formula is:

```text
Fahrenheit = (Celsius × 9/5) + 32
```

### Complete program

```c
#include <stdio.h>

int main() {

    double celsius;
    double fahrenheit;

    printf("Enter temperature in Celsius: ");

    scanf("%lf", &celsius);

    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;

    printf("Temperature in Fahrenheit: %.2f\n",
           fahrenheit);

    return 0;
}
```

### Explanation

**1. Declare the variables**

```c
double celsius;
double fahrenheit;
```

The program needs one variable for the input and another for the result.

**2. Request input**

```c
printf("Enter temperature in Celsius: ");
```

Displays a prompt.

**3. Read the temperature**

```c
scanf("%lf", &celsius);
```

Stores the user's input.

**4. Apply the conversion formula**

```c
fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
```

The calculation follows the mathematical conversion formula.

Using `9.0` and `5.0` ensures floating-point arithmetic.

**5. Display the result**

```c
printf("Temperature in Fahrenheit: %.2f\n", fahrenheit);
```

Displays the converted temperature with two decimal places.

### Example output

```text
Enter temperature in Celsius: 30
Temperature in Fahrenheit: 86.00
```

---

## 7. Practical Six: Creating and Calling Functions

C supports functions that allow programmers to divide a program into reusable sections.

Consider a function that adds two integers.

```c
#include <stdio.h>

int add(int a, int b) {

    return a + b;
}

int main() {

    int result = add(10, 20);

    printf("Result: %d\n", result);

    return 0;
}
```

### Understanding the function

```c
int add(int a, int b)
```

This declares and defines a function named `add`.

- `int` specifies the return type.
- `add` is the function name.
- `int a` is the first parameter.
- `int b` is the second parameter.

### Understanding the return statement

```c
return a + b;
```

Adds the two parameters and returns the result.

### Calling the function

```c
int result = add(10, 20);
```

This calls the function with the arguments `10` and `20`.

The function returns `30`, which is stored in `result`.

### Expected output

```text
Result: 30
```

Functions make programs easier to organize, test, and maintain.

---

## 8. Practical Seven: Understanding the Difference Between Syntax and Logic Errors

Consider this program:

```c
#include <stdio.h>

int main() {

    int first = 10;
    int second = 5;

    int result = first + second;

    printf("Multiplication: %d\n", result);

    return 0;
}
```

The program compiles successfully.

However, the output is:

```text
Multiplication: 15
```

Why?

Because the calculation uses addition:

```c
first + second
```

The programmer intended multiplication.

Correct it:

```c
int result = first * second;
```

Now the output becomes:

```text
Multiplication: 50
```

This is a logical error, not a syntax error.

---

## 9. Practical Exercises

Complete the following tasks without copying the earlier programs directly.

### Exercise 1: Welcome Program

Write a C program that displays:

- Your name.
- Your course.
- Your institution.
- Your programming goal.

Use separate `printf()` statements.

### Exercise 2: Personal Information

Write a program that accepts:

- Full name.
- Age.
- Height.
- Year of study.

Display all the information.

For the full name, use a character array and `fgets()` so that spaces are accepted.

### Exercise 3: Basic Calculator

Write a program that accepts two numbers and calculates:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Make sure division by zero is handled.

### Exercise 4: Area Calculator

Write a program that accepts the length and width of a rectangle and calculates its area.

Formula:

```text
Area = Length × Width
```

### Exercise 5: Function Practice

Create a function named `square()` that accepts an integer and returns its square.

Call the function from `main()`.

### Exercise 6: Debugging Practice

Find and correct the errors:

```c
#include <stdio.h>

int main() {

    int age = 20

    Printf("Age: %d\n", age);

    return 0;
}
```

Explain why each correction is necessary.

### Exercise 7: Multiple Statements

Write a program that displays five different messages.

Each message should appear on a separate line.

---

## 10. Mini Project: Personal Information System

Build a simple program that accepts personal information and displays a formatted profile.

### Required features

1. Accept a person's full name.
2. Accept their age.
3. Accept their course.
4. Accept their year of study.
5. Display the information in a formatted profile.

### Suggested output

```text
========== STUDENT PROFILE ==========

Name: Brian Njogu
Age: 21
Course: BBIT
Year of Study: Second Year

=====================================
```

### Suggested source structure

```text
student_profile/
│
└── main.c
```

### Development requirements

- Use appropriate data types.
- Use `fgets()` for text containing spaces.
- Use `scanf()` carefully for numeric input.
- Use `printf()` to display the profile.
- Organize the program with clear indentation.
- Handle invalid input where appropriate.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT — C PROGRAMMING SYNTAX AND PROGRAM STRUCTURE

## Assessment Instructions

You have completed the foundational lesson on C programming syntax and program structure.

Now demonstrate your understanding by completing the following assessment.

The assessment covers:

- C programming fundamentals.
- Program structure.
- Syntax rules.
- Identifiers and keywords.
- Compilation.
- Errors.
- Input and output.
- Functions.
- Practical programming.

Submit your answers to Kai for marking and feedback.

---

## SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

Who developed the C programming language?

A. James Gosling.

B. Dennis Ritchie.

C. Bjarne Stroustrup.

D. Guido van Rossum.

**Question 2**

What is the purpose of `#include <stdio.h>`?

A. It starts the program.

B. It declares standard input/output functions.

C. It creates a variable.

D. It ends the program.

**Question 3**

Which function is the entry point of a hosted C program?

A. `start()`.

B. `printf()`.

C. `main()`.

D. `execute()`.

**Question 4**

What does `return 0;` usually indicate in `main()`?

A. The program failed.

B. The program executed successfully.

C. The program should restart.

D. The program should wait for input.

**Question 5**

Which symbol terminates a normal C statement?

A. `:`

B. `.`

C. `;`

D. `,`

**Question 6**

Which of the following is a valid identifier?

A. `2student`

B. `student name`

C. `student_name`

D. `int`

**Question 7**

Which function displays formatted output in C?

A. `cout`.

B. `print()`.

C. `printf()`.

D. `display()`.

**Question 8**

Which operator is used to obtain the address of a variable?

A. `*`

B. `&`

C. `%`

D. `#`

**Question 9**

Which command compiles `main.c` using GCC and produces an executable named `main`?

A. `gcc main.c -o main`

B. `run main.c`

C. `compile main`

D. `gcc -run main.c`

**Question 10**

Which error occurs when a program runs but produces the wrong result because the calculation is incorrect?

A. Syntax error.

B. Logical error.

C. Linking error.

D. Header error.

---

## SECTION B: CONCEPTUAL QUESTIONS

Answer in your own words.

**Question 11**

Define C programming and explain four areas where it is used.

**Question 12**

Explain the difference between C and C++.

**Question 13**

Describe the purpose of each component in the following program:

```c
#include <stdio.h>

int main() {

    printf("Hello");

    return 0;
}
```

**Question 14**

What is a preprocessor directive? Give two examples.

**Question 15**

Explain why C is described as a case-sensitive language.

**Question 16**

What are identifiers? Explain four rules used when creating identifiers.

**Question 17**

Differentiate between single-line and multi-line comments.

**Question 18**

Explain the four major stages of C program compilation.

**Question 19**

Differentiate between syntax errors, runtime errors, and logical errors.

**Question 20**

What is the purpose of a header file in C programming?

---

## SECTION C: CODE INTERPRETATION

Study this program:

```c
#include <stdio.h>

int main() {

    int number1 = 10;
    int number2 = 5;

    int sum = number1 + number2;

    printf("Sum: %d\n", sum);

    return 0;
}
```

Answer the following:

**Question 21**

What is the purpose of `number1` and `number2`?

**Question 22**

What does the expression `number1 + number2` calculate?

**Question 23**

What is the value stored in `sum`?

**Question 24**

What will the program display?

---

## SECTION D: DEBUGGING

**Question 25**

Identify and correct the errors in this program:

```c
#include <stdio.h>

int main() {

    int age = 20

    Printf("Age: %d\n", age);

    return 0;
}
```

Explain each error.

**Question 26**

Study this program:

```c
#include <stdio.h>

int main() {

    int length = 10;
    int width = 5;

    int area = length + width;

    printf("Area: %d\n", area);

    return 0;
}
```

The program compiles successfully but calculates the wrong area.

Identify the logical error and correct it.

---

## SECTION E: PRACTICAL PROGRAMMING

**Question 27: Welcome Program**

Write a C program that displays five lines of information about yourself.

**Question 28: User Input**

Write a C program that accepts a user's name and age and displays both values.

**Question 29: Calculator**

Create a calculator that accepts two decimal numbers and performs addition, subtraction, multiplication, and division.

Your program must handle division by zero.

**Question 30: Temperature Converter**

Write a program that converts Celsius to Fahrenheit.

Use:

```text
Fahrenheit = (Celsius × 9/5) + 32
```

**Question 31: Functions**

Create a function named `multiply()` that accepts two integers and returns their product.

Call it from `main()` and display the result.

---

## SECTION F: FINAL PROJECT

### Project: Student Information Management System

Build a simple student information system using C.

The application should accept information from the user and display it in an organized format.

### Required features

**1. Register a student**

Accept:

- Full name.
- Age.
- Registration number.
- Course.
- Year of study.

**2. Display student information**

Show the entered details in a formatted output.

**3. Calculate age next year**

Display the student's age after one year.

**4. Validate input**

Check that the entered age is a valid positive number and that required text fields are not empty.

**5. Provide a menu**

Your program should provide the following menu:

```text
======= STUDENT INFORMATION SYSTEM =======

1. Register Student
2. Display Student Information
3. Calculate Age Next Year
4. Exit

Enter your choice:
```

### Technical requirements

Your program must demonstrate:

- Correct use of `#include`.
- Correct `main()` structure.
- Appropriate data types.
- Meaningful identifiers.
- `printf()` and input functions.
- Conditional statements.
- At least one reusable function.
- Comments where appropriate.
- Proper compilation and execution.

### Suggested project structure

```text
StudentInformationSystem/
│
├── main.c
└── README.md
```

### Submission requirements

Submit:

1. Your complete C source code.
2. A screenshot or captured output showing successful execution.
3. Your answers to the conceptual questions.
4. A short explanation of how your program works.

---

## KAI'S FINAL EVALUATION CHECKLIST

Before submitting, confirm that you can:

- [ ] Explain what C programming is.
- [ ] Explain the difference between C and C++.
- [ ] Understand the structure of a C program.
- [ ] Use preprocessor directives.
- [ ] Understand the role of `main()`.
- [ ] Apply C syntax rules.
- [ ] Create valid identifiers.
- [ ] Use comments correctly.
- [ ] Compile C programs using GCC.
- [ ] Understand the compilation process.
- [ ] Identify syntax and logical errors.
- [ ] Use `printf()` and `scanf()`.
- [ ] Create and call functions.
- [ ] Organize a basic C project.
- [ ] Build and execute a small C application.

## SUBMISSION TO KAI

Submit your answers and final project to Kai for assessment.

Kai should evaluate your:

1. Understanding of C fundamentals.
2. Knowledge of program structure.
3. Correct use of syntax.
4. Ability to compile and execute programs.
5. Understanding of errors and debugging.
6. Ability to write and organize basic C programs.

Kai should provide corrections and explanations for incorrect answers rather than simply displaying the correct answer.

**Part 4 of 4 — Lesson Complete**

---

# LESSON SUMMARY

In this lesson, you learned the foundations of C programming.

You covered:

| Topic | What you learned |
|---|---|
| Introduction to C | What C is and where it is used |
| C vs C++ | Differences between the two languages |
| Program structure | Headers, `main()`, statements, and return values |
| Syntax | Semicolons, braces, quotation marks, and case sensitivity |
| Identifiers | Rules for naming variables and functions |
| Keywords | Reserved words in C |
| Comments | Writing explanations inside source code |
| Compilation | How C source code becomes an executable |
| GCC | Compiling and running C programs |
| Errors | Syntax, runtime, and logical errors |
| Input/output | Using `printf()` and `scanf()` |
| Functions | Creating and calling reusable functions |

**The key lesson:** C programming begins with understanding how source code is structured, how instructions are written, and how the compiler transforms those instructions into an executable program.

Once you understand these foundations, you can move into variables, data types, operators, conditions, loops, functions, arrays, pointers, and more advanced C programming concepts.