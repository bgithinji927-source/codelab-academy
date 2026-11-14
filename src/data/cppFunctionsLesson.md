# C++: Functions and Reusable Logic

## Learning Objectives

By the end of this lesson, you should be able to:

1. Explain what functions are and why programmers use them.
2. Understand function declarations, definitions, and function calls.
3. Create functions that accept parameters.
4. Understand arguments and return values.
5. Use `void` and value-returning functions.
6. Understand local and global variables.
7. Pass arguments by value and by reference.
8. Use default arguments.
9. Understand function overloading.
10. Use recursion to solve problems.
11. Organize programs using multiple functions and source files.
12. Build practical C++ applications using reusable logic.

# PART 1 OF 4: INTRODUCTION TO FUNCTIONS

## 1. What Is a Function?

A function is a named, reusable block of code designed to perform a particular task.

Instead of writing the same instructions repeatedly, you can place them inside a function and call that function whenever you need it.

Consider a calculator application.

It may need to perform:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Instead of writing all the calculation instructions inside `main()`, you can create separate functions for each operation.

For example:

```cpp
int add(int a, int b) {
    return a + b;
}
```

This function receives two integers, adds them, and returns the result.

You can call it whenever you need to add two numbers.

## 2. Why Are Functions Important?

Functions make programs easier to develop, understand, test, and maintain.

### A. Code Reusability

You can write a function once and use it multiple times.

Without a function:

```cpp
int result1 = 10 + 20;
int result2 = 30 + 40;
int result3 = 50 + 60;
```

With a function:

```cpp
int add(int a, int b) {
    return a + b;
}
```

You can now reuse it:

```cpp
int result1 = add(10, 20);
int result2 = add(30, 40);
int result3 = add(50, 60);
```

The addition logic exists in one place.

### B. Code Organization

Functions allow you to divide a large program into smaller tasks.

For example, a student management application could contain:

```text
Student Management System
│
├── registerStudent()
├── calculateGrade()
├── displayStudent()
├── searchStudent()
└── deleteStudent()
```

Each function handles a particular responsibility.

This makes the application easier to understand.

### C. Easier Debugging

Suppose a calculator produces incorrect multiplication results.

If multiplication is handled by a separate function, you can inspect that function instead of searching through the entire application.

### D. Easier Maintenance

If you need to change how grades are calculated, you can update the grading function without rewriting every part of the application that uses it.

### E. Team Development

In larger software projects, different developers can work on separate functions or modules, provided their interfaces are agreed upon.

## 3. Understanding the Structure of a Function

Consider this example:

```cpp
int add(int a, int b) {
    return a + b;
}
```

Let's break it down.

| Component | Example | Meaning |
|---|---|---|
| Return type | `int` | Specifies the type of value returned. |
| Function name | `add` | Identifies the function. |
| Parameters | `int a, int b` | Values the function receives. |
| Function body | `{ }` | Contains the instructions. |
| Return statement | `return a + b;` | Sends the result back to the caller. |

### A. Return Type

The return type specifies what kind of value the function produces.

Examples:

```cpp
int
double
float
char
bool
std::string
void
```

For example:

```cpp
int getAge() {
    return 20;
}
```

This function returns an integer.

Another example:

```cpp
double calculatePrice() {
    return 150.75;
}
```

This function returns a decimal value.

### B. Function Name

The function name identifies the operation.

Examples:

```cpp
calculateTotal()
displayMessage()
getStudentName()
findMaximum()
```

Choose descriptive names that explain what the function does.

### C. Parameters

Parameters are variables declared in the function definition to receive information.

Example:

```cpp
int add(int a, int b) {
    return a + b;
}
```

Here, `a` and `b` are parameters.

They receive the values supplied when the function is called.

### D. Function Body

The function body contains the instructions that perform the task.

```cpp
{
    return a + b;
}
```

### E. Return Statement

The `return` statement sends a result back to the part of the program that called the function.

For example:

```cpp
int add(int a, int b) {
    return a + b;
}
```

If you call:

```cpp
int result = add(10, 5);
```

The function calculates 15 and returns it.

The variable `result` receives 15.

## 4. Your First C++ Function

Let's create a complete program.

```cpp
#include <iostream>

void greet() {
    std::cout << "Welcome to C++ functions!";
}

int main() {

    greet();

    return 0;
}
```

### Line-by-line explanation

**Line 1:**

```cpp
#include <iostream>
```

Includes the library required for displaying output.

**Line 2:**

```cpp
void greet() {
```

Defines a function named `greet`.

The keyword `void` means this function does not return a value.

The parentheses indicate that the function does not receive any parameters.

**Line 3:**

```cpp
std::cout << "Welcome to C++ functions!";
```

Displays a message when the function is executed.

**Line 4:**

```cpp
}
```

Marks the end of the function body.

**Inside `main()`:**

```cpp
greet();
```

Calls the function.

This tells the program to execute the instructions inside `greet()`.

Output:

```text
Welcome to C++ functions!
```

### Important concept: Defining versus calling

These are two different operations.

Function definition:

```cpp
void greet() {
    std::cout << "Hello";
}
```

Function call:

```cpp
greet();
```

Defining a function creates it.

Calling a function executes it.

A function does not automatically execute simply because you have defined it.

## 5. Understanding `void` Functions

A `void` function performs an operation without returning a value.

Example:

```cpp
#include <iostream>

void displayInformation() {
    std::cout << "Student Name: Brian\n";
    std::cout << "Course: BBIT\n";
    std::cout << "Institution: Kirinyaga University\n";
}

int main() {

    displayInformation();

    return 0;
}
```

### Explanation

The function `displayInformation()` contains three output instructions.

When called from `main()`, all three instructions execute.

Output:

```text
Student Name: Brian
Course: BBIT
Institution: Kirinyaga University
```

Notice that the function does not calculate or return a result.

It simply performs an action.

### When should you use `void`?

Use a `void` function when the main purpose is to perform an operation, such as:

- Displaying information.
- Printing a menu.
- Showing a welcome message.
- Recording an action in a log.
- Updating an object's state.

A `void` function can use `return;` to exit early, but it cannot return a value.

Example:

```cpp
void checkAge(int age) {

    if (age < 0) {
        std::cout << "Invalid age";
        return;
    }

    std::cout << "Age accepted";
}
```

The `return;` statement stops the function when the age is invalid.

## 6. Functions That Return Values

Sometimes a function must calculate something and send the result back.

Example:

```cpp
#include <iostream>

int multiply(int a, int b) {
    return a * b;
}

int main() {

    int result = multiply(5, 4);

    std::cout << "Result: " << result;

    return 0;
}
```

### Explanation

The function:

```cpp
int multiply(int a, int b)
```

Receives two integer parameters.

The function body:

```cpp
return a * b;
```

Multiplies the values and returns the result.

Inside `main()`:

```cpp
int result = multiply(5, 4);
```

Calls the function with arguments 5 and 4.

The returned value is stored in `result`.

Output:

```text
Result: 20
```

### Why return values are useful

Imagine developing a university application.

You create a function:

```cpp
double calculateAverage(double total, int subjects) {
    return total / subjects;
}
```

Other parts of the application can use the returned average.

For example:

```cpp
double average = calculateAverage(350, 5);
```

The result is 70.

The function can now be reused wherever an average needs to be calculated.

## 7. Function Parameters and Arguments

These two terms are related, but they do not mean exactly the same thing.

**Parameters** are the variables declared in a function definition.

**Arguments** are the actual values supplied when calling the function.

Example:

```cpp
int subtract(int first, int second) {
    return first - second;
}

int main() {

    int result = subtract(20, 8);

    return 0;
}
```

In the function definition:

```cpp
int subtract(int first, int second)
```

`first` and `second` are parameters.

In the function call:

```cpp
subtract(20, 8);
```

20 and 8 are arguments.

The values are passed into the function.

The calculation becomes:

```cpp
20 - 8
```

The function returns 12.

## 8. Multiple Parameters

A function can receive more than one parameter.

Example:

```cpp
double calculateTotal(double price, int quantity, double tax) {

    double subtotal = price * quantity;

    double total = subtotal + (subtotal * tax);

    return total;
}
```

Suppose you call:

```cpp
double amount = calculateTotal(100, 2, 0.16);
```

The values represent:

- Price: 100.
- Quantity: 2.
- Tax rate: 0.16, representing 16%.

Calculation:

```text
Subtotal = 100 × 2
Subtotal = 200

Tax = 200 × 0.16
Tax = 32

Total = 200 + 32
Total = 232
```

The function returns 232.

This is useful in billing systems, shopping applications, and financial software.

## 9. Function Declaration and Function Definition

C++ allows you to declare a function before defining its implementation.

This is especially useful when functions are written below `main()` or organized across different files.

### Function declaration

A declaration tells the compiler that a function exists.

Example:

```cpp
int add(int a, int b);
```

This tells the compiler:

- The function is named `add`.
- It receives two integers.
- It returns an integer.

### Function definition

A definition provides the actual implementation.

```cpp
int add(int a, int b) {
    return a + b;
}
```

### Complete example

```cpp
#include <iostream>

// Function declaration
int add(int a, int b);

int main() {

    int result = add(10, 20);

    std::cout << result;

    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}
```

### Why does the declaration appear before `main()`?

The compiler processes the program and needs to know that `add()` exists before it encounters the function call inside `main()`.

The declaration provides that information.

The implementation can appear later.

### Declaration versus definition

| Declaration | Definition |
|---|---|
| Announces the function to the compiler. | Provides the implementation. |
| Usually ends with a semicolon. | Contains a function body. |
| Can appear in a header file. | Usually appears in a source file. |

## 10. Function Prototypes

A function prototype is another name commonly used for a function declaration that specifies its interface.

Example:

```cpp
double calculateArea(double length, double width);
```

The parameter names can also be omitted:

```cpp
double calculateArea(double, double);
```

Both declarations describe a function that accepts two `double` values and returns a `double`.

Parameter names are useful because they make the function's purpose clearer.

## 11. Part 1 Summary

You have learned:

- What functions are.
- Why functions are important.
- Function structure.
- Return types.
- Function names.
- Parameters and arguments.
- Function calls.
- `void` functions.
- Value-returning functions.
- Function declarations and definitions.

### Part 1 Knowledge Check

1. What is a function in C++?
2. Give four reasons programmers use functions.
3. What does the `void` keyword mean?
4. What is the purpose of a return type?
5. Differentiate between function parameters and arguments.
6. What is a function call?
7. What happens when a function returns a value?
8. Differentiate between a function declaration and definition.
9. Why might a function prototype be placed above `main()`?
10. Can a function be defined without being called?

**Progress: Part 1 of 4**

---

# PART 2 OF 4: WORKING WITH FUNCTIONS IN DEPTH

## 1. Understanding Function Execution

When a function is called, the program temporarily transfers execution to that function.

After the function finishes, execution returns to the point immediately after the function call.

Consider:

```cpp
#include <iostream>

void first() {
    std::cout << "First function\n";
}

void second() {
    std::cout << "Second function\n";
}

int main() {

    std::cout << "Program started\n";

    first();

    second();

    std::cout << "Program finished\n";

    return 0;
}
```

### Execution order

1. The program enters `main()`.
2. It displays `Program started`.
3. It calls `first()`.
4. The first function displays its message.
5. Execution returns to `main()`.
6. It calls `second()`.
7. The second function displays its message.
8. Execution returns to `main()`.
9. It displays `Program finished`.

Output:

```text
Program started
First function
Second function
Program finished
```

This process is important when understanding how larger applications operate.

## 2. Local Variables

A local variable is declared inside a function or another block of code.

It is generally accessible only within the block where it is declared.

Example:

```cpp
#include <iostream>

void calculate() {

    int number = 10;

    std::cout << number;
}

int main() {

    calculate();

    return 0;
}
```

The variable `number` belongs to the `calculate()` function.

It can be accessed inside that function.

You cannot directly access it from `main()`.

For example:

```cpp
int main() {

    calculate();

    std::cout << number;

    return 0;
}
```

This produces a compilation error because `number` is not declared within the scope of `main()`.

### Why use local variables?

Local variables:

- Keep data limited to where it is needed.
- Reduce accidental modification.
- Make functions easier to understand.
- Help prevent naming conflicts.

## 3. Global Variables

A global variable is declared outside all functions.

It can be accessed by functions within its scope, subject to normal declaration and visibility rules.

Example:

```cpp
#include <iostream>

int score = 100;

void displayScore() {
    std::cout << score;
}

int main() {

    displayScore();

    return 0;
}
```

The variable `score` is declared outside the functions.

Therefore, `displayScore()` can access it.

Output:

```text
100
```

### Local versus global variables

| Local variable | Global variable |
|---|---|
| Declared inside a function or block. | Declared outside functions. |
| Limited to its scope. | Can be accessed from multiple functions when visible. |
| Usually exists for the lifetime of its block or according to its storage duration. | Normally has static storage duration. |
| Helps isolate data. | Can create shared-state problems. |

### Should you use global variables?

Global variables can be useful in some situations, but excessive use can make applications difficult to maintain.

For example, if five functions can modify the same global balance, it may become difficult to identify where an incorrect value originated.

Prefer passing required information through parameters or using appropriate objects to manage related state.

## 4. Passing Arguments by Value

By default, C++ passes ordinary function parameters by value.

This means the function receives a copy of the argument.

Changes to the parameter do not change the original variable.

Example:

```cpp
#include <iostream>

void changeNumber(int number) {

    number = 50;

    std::cout << "Inside function: " << number << "\n";
}

int main() {

    int value = 10;

    changeNumber(value);

    std::cout << "Outside function: " << value;

    return 0;
}
```

### Explanation

First:

```cpp
int value = 10;
```

Creates a variable containing 10.

Next:

```cpp
changeNumber(value);
```

Calls the function and passes the value of `value`.

The function receives its own copy named `number`.

Inside the function:

```cpp
number = 50;
```

Changes the local copy.

It does not modify the original `value`.

Output:

```text
Inside function: 50
Outside function: 10
```

This is pass-by-value.

### Why is pass-by-value useful?

It protects the original variable from unintended changes.

It is commonly used when a function only needs to read or calculate using a value.

## 5. Passing Arguments by Reference

Sometimes you want a function to modify the original variable.

C++ allows this through references.

A reference parameter is declared using `&`.

Example:

```cpp
#include <iostream>

void changeNumber(int& number) {

    number = 50;
}

int main() {

    int value = 10;

    changeNumber(value);

    std::cout << value;

    return 0;
}
```

### Explanation

The function declaration:

```cpp
void changeNumber(int& number)
```

Uses `int&`.

This means `number` is a reference to the original integer supplied by the caller.

When you execute:

```cpp
number = 50;
```

You modify the original variable.

Therefore, after the function call:

```cpp
changeNumber(value);
```

`value` becomes 50.

Output:

```text
50
```

### Pass-by-value versus pass-by-reference

| Feature | Pass-by-value | Pass-by-reference |
|---|---|---|
| Syntax | `int number` | `int& number` |
| Receives | A copy | An alias to the original variable |
| Modifies original? | No | Yes, if modified |
| Typical purpose | Read or calculate | Modify caller's data |
| Copy required? | Yes for the value | No separate value copy |

## 6. Using `const` References

Sometimes a function needs to access an object without modifying it.

Passing a large object by value may create an unnecessary copy.

A constant reference can avoid that copy while preventing modification through the parameter.

Example:

```cpp
#include <iostream>
#include <string>

void displayName(const std::string& name) {

    std::cout << "Student: " << name;
}

int main() {

    std::string studentName = "Alex";

    displayName(studentName);

    return 0;
}
```

### Understanding the parameter

```cpp
const std::string& name
```

Contains three important parts:

- `std::string`: the parameter represents text.
- `&`: the parameter refers to the original string.
- `const`: the function cannot modify the string through this reference.

This is a common C++ technique for passing large objects efficiently and safely.

## 7. Returning Multiple Results

A normal function returns one value directly.

However, sometimes a function needs to produce several related results.

C++ offers several approaches, including:

- References as output parameters.
- Structures.
- Tuples.
- Returning custom objects.

Let's start with references.

### Example: Calculating Sum and Difference

```cpp
#include <iostream>

void calculate(int a, int b, int& sum, int& difference) {

    sum = a + b;

    difference = a - b;
}

int main() {

    int total;
    int result;

    calculate(20, 5, total, result);

    std::cout << "Sum: " << total << "\n";
    std::cout << "Difference: " << result;

    return 0;
}
```

### Explanation

The function receives four parameters.

The first two:

```cpp
int a, int b
```

Receive the numbers to calculate with.

The other two:

```cpp
int& sum, int& difference
```

Refer to variables belonging to the caller.

Inside the function:

```cpp
sum = a + b;
```

Stores the sum in the original variable.

Then:

```cpp
difference = a - b;
```

Stores the difference.

Output:

```text
Sum: 25
Difference: 15
```

This approach works, but for larger applications, returning a structure may make the interface clearer.

### Returning a structure

```cpp
#include <iostream>

struct Results {
    int sum;
    int difference;
};

Results calculate(int a, int b) {

    Results result;

    result.sum = a + b;
    result.difference = a - b;

    return result;
}

int main() {

    Results answer = calculate(20, 5);

    std::cout << "Sum: " << answer.sum << "\n";
    std::cout << "Difference: " << answer.difference;

    return 0;
}
```

Here, the function returns one `Results` object containing two values.

This is often a clean approach when multiple results belong together.

## 8. Default Arguments

C++ allows functions to define default values for parameters.

These values are used when the caller does not supply corresponding arguments.

Example:

```cpp
#include <iostream>

void greet(std::string name = "Guest") {

    std::cout << "Welcome, " << name;
}

int main() {

    greet();

    std::cout << "\n";

    greet("Alex");

    return 0;
}
```

### Explanation

The function declaration:

```cpp
void greet(std::string name = "Guest")
```

Specifies `"Guest"` as the default value.

When you call:

```cpp
greet();
```

No argument is supplied.

Therefore, the function uses `"Guest"`.

When you call:

```cpp
greet("Alex");
```

The supplied argument replaces the default value.

Output:

```text
Welcome, Guest
Welcome, Alex
```

### Important rule

Default arguments are normally specified for trailing parameters.

Correct:

```cpp
void calculate(int a, int b = 10);
```

Incorrect:

```cpp
void calculate(int a = 10, int b);
```

You cannot provide a default for an earlier parameter while leaving a later parameter without one in this way.

## 9. Function Overloading

Function overloading allows multiple functions to have the same name but different parameter lists.

This is useful when the same operation needs to work with different types or numbers of inputs.

Example:

```cpp
#include <iostream>

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {

    std::cout << add(10, 20) << "\n";

    std::cout << add(2.5, 3.5) << "\n";

    std::cout << add(1, 2, 3);

    return 0;
}
```

### Explanation

The first function:

```cpp
int add(int a, int b)
```

Accepts two integers.

The second:

```cpp
double add(double a, double b)
```

Accepts two decimal values.

The third:

```cpp
int add(int a, int b, int c)
```

Accepts three integers.

All three functions are named `add`, but their parameter lists differ.

The compiler determines which function to call based on the supplied arguments.

Output:

```text
30
6
6
```

### What makes overloaded functions different?

A function overload must have a different parameter list.

You can change:

- The number of parameters.
- The parameter types.
- The order of parameter types.

You cannot overload functions based only on different return types.

For example, these two functions cannot coexist as overloads:

```cpp
int calculate(int number);
double calculate(int number);
```

They have identical parameter lists.

The compiler would not know which one to select based on the return type alone.

## 10. Recursion

Recursion occurs when a function calls itself.

It is useful for solving problems that can be broken into smaller versions of the same problem.

Examples include:

- Calculating factorials.
- Traversing tree structures.
- Processing nested directories.
- Certain mathematical algorithms.
- Divide-and-conquer algorithms.

### Understanding factorials

The factorial of a positive integer is the product of all positive integers up to that number.

For example:

```text
5! = 5 × 4 × 3 × 2 × 1
5! = 120
```

Mathematically:

```text
n! = n × (n - 1)!
```

And:

```text
0! = 1
```

The second rule is the base case.

### Recursive factorial function

```cpp
#include <iostream>

int factorial(int number) {

    if (number <= 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

int main() {

    std::cout << factorial(5);

    return 0;
}
```

### Line-by-line explanation

The function begins:

```cpp
int factorial(int number)
```

It accepts an integer and returns an integer.

Next:

```cpp
if (number <= 1) {
    return 1;
}
```

This is the base case.

It tells the recursive function when to stop calling itself.

Then:

```cpp
return number * factorial(number - 1);
```

The function multiplies the current number by the factorial of the previous number.

For `factorial(5)`, the calls are:

```text
factorial(5)
    5 × factorial(4)
        4 × factorial(3)
            3 × factorial(2)
                2 × factorial(1)
                    1
```

The calls then return their results:

```text
factorial(1) = 1
factorial(2) = 2 × 1 = 2
factorial(3) = 3 × 2 = 6
factorial(4) = 4 × 6 = 24
factorial(5) = 5 × 24 = 120
```

Output:

```text
120
```

### What happens without a base case?

A recursive function without a suitable stopping condition may continue calling itself until the program runs out of call-stack space.

This can cause a stack overflow.

Always design recursion with a reachable base case.

### Recursion versus iteration

| Recursion | Iteration |
|---|---|
| Function calls itself. | Uses loops. |
| Uses function-call stack space. | Usually uses less call-stack space. |
| Can make recursive problems easier to express. | Often more straightforward for simple repetition. |
| Needs a base case. | Needs a loop stopping condition. |

Both approaches are useful. Recursion is not automatically better than a loop.

## 11. Inline Functions

C++ supports inline functions.

The `inline` keyword can be used when defining a function.

Example:

```cpp
inline int square(int number) {
    return number * number;
}
```

The keyword historically suggested that the compiler substitute the function body at the call location.

Modern compilers make their own optimization decisions, so `inline` does not guarantee that substitution will happen.

It is also useful for allowing suitable function definitions to appear in multiple translation units, subject to the One Definition Rule.

You will encounter this more often when working with header files.

## 12. Lambda Functions: An Introduction

A lambda is an anonymous function that can be created directly inside an expression.

It is useful when a small operation is needed temporarily.

Example:

```cpp
#include <iostream>

int main() {

    auto add = [](int a, int b) {
        return a + b;
    };

    std::cout << add(10, 5);

    return 0;
}
```

### Explanation

```cpp
auto add
```

Creates a variable that stores the lambda.

```cpp
[](int a, int b)
```

Defines the lambda's parameter list.

```cpp
return a + b;
```

Calculates and returns the result.

The lambda is called using:

```cpp
add(10, 5);
```

Output:

```text
15
```

The empty square brackets `[]` represent the lambda's capture list.

Later, you will learn how lambdas can capture variables from their surrounding scope and how they work with algorithms and callbacks.

## 13. Part 2 Summary

You have learned:

- How function calls execute.
- Local and global variables.
- Pass-by-value.
- Pass-by-reference.
- Constant references.
- Returning multiple results.
- Default arguments.
- Function overloading.
- Recursion.
- Inline functions.
- Lambda functions.

### Part 2 Knowledge Check

1. What happens when a function is called?
2. What is a local variable?
3. What is a global variable?
4. Why should excessive global variables be avoided?
5. Explain pass-by-value.
6. Explain pass-by-reference.
7. What does `const` do when used with a reference parameter?
8. What are default arguments?
9. What is function overloading?
10. Can two functions be overloaded using only different return types?
11. What is recursion?
12. What is a base case?
13. What can happen if recursion never reaches its base case?
14. What is a lambda function?

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL C++ FUNCTION PROJECTS

In this section, you will apply functions to realistic programming problems.

You will learn how to separate application responsibilities, reuse logic, and organize a C++ project across multiple files.

## 1. Preparing Your Project

Create a folder named:

```text
cpp-functions
```

Inside it, create:

```text
cpp-functions/
    main.cpp
```

Open the folder in your preferred C++ editor.

You can compile your programs using GCC.

For example:

```bash
g++ main.cpp -o main
```

Then execute:

Windows:

```bash
.\main.exe
```

Linux/macOS:

```bash
./main
```

## 2. Practical Project One: Reusable Calculator

### Project description

Create a calculator that uses separate functions for:

- Addition.
- Subtraction.
- Multiplication.
- Division.

### Complete code

```cpp
#include <iostream>

double add(double a, double b) {
    return a + b;
}

double subtract(double a, double b) {
    return a - b;
}

double multiply(double a, double b) {
    return a * b;
}

double divide(double a, double b) {

    if (b == 0) {
        std::cout << "Error: Division by zero is not allowed.\n";
        return 0;
    }

    return a / b;
}

int main() {

    double number1, number2;

    std::cout << "Enter first number: ";
    std::cin >> number1;

    std::cout << "Enter second number: ";
    std::cin >> number2;

    std::cout << "Addition: " << add(number1, number2) << "\n";

    std::cout << "Subtraction: " << subtract(number1, number2) << "\n";

    std::cout << "Multiplication: " << multiply(number1, number2) << "\n";

    std::cout << "Division: " << divide(number1, number2) << "\n";

    return 0;
}
```

### Understanding the functions

**Addition:**

```cpp
double add(double a, double b) {
    return a + b;
}
```

Receives two decimal values and returns their sum.

**Subtraction:**

```cpp
double subtract(double a, double b) {
    return a - b;
}
```

Subtracts the second value from the first.

**Multiplication:**

```cpp
double multiply(double a, double b) {
    return a * b;
}
```

Multiplies the two values.

**Division:**

```cpp
double divide(double a, double b)
```

Receives two values.

Before dividing, it checks whether the second value is zero.

```cpp
if (b == 0)
```

If the value is zero, the function displays an error and returns zero as a fallback result.

Otherwise:

```cpp
return a / b;
```

Returns the division result.

**Inside `main()`:**

The application collects two numbers.

It then calls each calculation function and displays the returned values.

### Example output

```text
Enter first number: 20
Enter second number: 5

Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4
```

### Why is this design better?

Imagine that you want to change how division works.

You only need to modify the `divide()` function.

The rest of the application does not need to contain another copy of the division logic.

**A production improvement:** Returning zero for a failed division is ambiguous because zero can also be a valid result. A larger application should represent failure separately, for example using `std::optional`, an error result, or an exception.

## 3. Practical Project Two: Student Grade Calculator

### Project description

Build a program that calculates a student's average and assigns a grade.

Use separate functions for:

1. Calculating the average.
2. Determining the grade.
3. Displaying the result.

### Complete code

```cpp
#include <iostream>
#include <string>

double calculateAverage(double marks1, double marks2, double marks3) {

    return (marks1 + marks2 + marks3) / 3;
}

std::string calculateGrade(double average) {

    if (average >= 70) {
        return "A";
    }
    else if (average >= 60) {
        return "B";
    }
    else if (average >= 50) {
        return "C";
    }
    else if (average >= 40) {
        return "D";
    }
    else {
        return "Fail";
    }
}

void displayResult(double average, std::string grade) {

    std::cout << "Average: " << average << "\n";

    std::cout << "Grade: " << grade << "\n";
}

int main() {

    double marks1, marks2, marks3;

    std::cout << "Enter marks for three subjects:\n";

    std::cin >> marks1 >> marks2 >> marks3;

    double average = calculateAverage(marks1, marks2, marks3);

    std::string grade = calculateGrade(average);

    displayResult(average, grade);

    return 0;
}
```

### Understanding the design

The program has three separate responsibilities.

**Function 1: Calculate average**

```cpp
double calculateAverage(double marks1, double marks2, double marks3)
```

Accepts three marks.

It calculates their total and divides by three.

For example:

```text
80 + 70 + 90 = 240

240 / 3 = 80
```

The function returns 80.

**Function 2: Calculate grade**

```cpp
std::string calculateGrade(double average)
```

Receives the average.

It evaluates the average using conditional statements.

If the average is 80, the function returns `"A"`.

**Function 3: Display result**

```cpp
void displayResult(double average, std::string grade)
```

Receives the average and grade.

It displays them.

Because this function only displays information, its return type is `void`.

### How the functions work together

Inside `main()`:

```cpp
double average = calculateAverage(marks1, marks2, marks3);
```

First, the average is calculated.

Then:

```cpp
std::string grade = calculateGrade(average);
```

The calculated average is passed to the grading function.

Finally:

```cpp
displayResult(average, grade);
```

The result is displayed.

### Example output

```text
Enter marks for three subjects:
80 70 90

Average: 80
Grade: A
```

### Why this approach matters

The average calculation can be reused in other parts of the application.

The grading function can also be used independently.

This is an example of separating responsibilities in software development.

**Important improvement:** This example assumes the marks are valid. A complete university system should validate each mark before calculating the average.

## 4. Practical Project Three: Bank Account Operations

### Project description

Create a simple program that allows a user to:

- View an account balance.
- Deposit money.
- Withdraw money.

Instead of writing every operation inside `main()`, use separate functions.

### Complete code

```cpp
#include <iostream>

void displayBalance(double balance) {

    std::cout << "Current balance: " << balance << "\n";
}

double depositMoney(double balance, double amount) {

    if (amount <= 0) {
        std::cout << "Invalid deposit amount.\n";
        return balance;
    }

    balance += amount;

    std::cout << "Deposit successful.\n";

    return balance;
}

double withdrawMoney(double balance, double amount) {

    if (amount <= 0) {
        std::cout << "Invalid withdrawal amount.\n";
        return balance;
    }

    if (amount > balance) {
        std::cout << "Insufficient funds.\n";
        return balance;
    }

    balance -= amount;

    std::cout << "Withdrawal successful.\n";

    return balance;
}

int main() {

    double balance = 5000;

    displayBalance(balance);

    balance = depositMoney(balance, 2000);

    displayBalance(balance);

    balance = withdrawMoney(balance, 1500);

    displayBalance(balance);

    return 0;
}
```

### Understanding the functions

**Display balance**

```cpp
void displayBalance(double balance)
```

Receives the current balance and displays it.

It does not modify the original balance.

**Deposit money**

```cpp
double depositMoney(double balance, double amount)
```

Receives the current balance and the amount to deposit.

If the amount is invalid, it returns the original balance.

Otherwise, it adds the deposit and returns the updated balance.

**Withdraw money**

```cpp
double withdrawMoney(double balance, double amount)
```

Checks whether the amount is valid.

It also checks whether enough money is available.

If the withdrawal is successful, it returns the updated balance.

### Why do we write this?

```cpp
balance = depositMoney(balance, 2000);
```

The function returns the updated balance.

The assignment stores that returned value back in `balance`.

This is important because the functions receive their balance parameter by value.

They operate on a copy and communicate the updated result through the return value.

### Example output

```text
Current balance: 5000
Deposit successful.
Current balance: 7000
Withdrawal successful.
Current balance: 5500
```

This example demonstrates how functions can manage operations without relying on global variables.

For real financial software, use an appropriate monetary representation, such as integer minor currency units or a carefully designed decimal-money type, rather than relying on binary floating-point values.

## 5. Practical Project Four: Function Overloading Calculator

### Project description

Create overloaded functions that can add:

- Two integers.
- Three integers.
- Two decimal numbers.

### Complete code

```cpp
#include <iostream>

int add(int a, int b) {

    return a + b;
}

int add(int a, int b, int c) {

    return a + b + c;
}

double add(double a, double b) {

    return a + b;
}

int main() {

    std::cout << "Two integers: " << add(10, 20) << "\n";

    std::cout << "Three integers: " << add(10, 20, 30) << "\n";

    std::cout << "Decimal values: " << add(2.5, 3.5) << "\n";

    return 0;
}
```

### Explanation

All functions have the same name: `add`.

However, they accept different parameter lists.

When you write:

```cpp
add(10, 20);
```

The compiler selects the two-integer version.

When you write:

```cpp
add(10, 20, 30);
```

It selects the three-integer version.

When you write:

```cpp
add(2.5, 3.5);
```

It selects the decimal version.

Output:

```text
Two integers: 30
Three integers: 60
Decimal values: 6
```

This is function overloading.

## 6. Practical Project Five: Recursion and Factorial Calculator

### Project description

Build a program that calculates the factorial of a number using recursion.

### Complete code

```cpp
#include <iostream>

unsigned long long factorial(int number) {

    if (number < 0) {
        return 0;
    }

    if (number <= 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

int main() {

    int number;

    std::cout << "Enter a non-negative integer: ";

    std::cin >> number;

    if (number < 0) {
        std::cout << "Factorial is not defined for negative integers.";
    }
    else if (number > 20) {
        std::cout << "Number is too large for this example.";
    }
    else {
        std::cout << "Factorial: " << factorial(number);
    }

    return 0;
}
```

### Explanation

The function uses `unsigned long long` because factorial results grow quickly.

The first condition:

```cpp
if (number < 0)
```

Rejects negative numbers.

The next condition:

```cpp
if (number <= 1)
```

Handles the base case.

Both zero and one have a factorial of one.

The recursive statement:

```cpp
return number * factorial(number - 1);
```

Multiplies the current number by the factorial of the previous number.

The `main()` function also checks the input.

For this example, the program accepts numbers from 0 to 20.

### Why limit the number to 20?

The result of 21 factorial is too large for the maximum value of a typical 64-bit `unsigned long long`.

For 20:

```text
20! = 2432902008176640000
```

This fits in the usual 64-bit `unsigned long long` range.

### Example output

```text
Enter a non-negative integer: 5
Factorial: 120
```

## 7. Organizing Functions Across Multiple Files

As C++ projects become larger, placing everything in one file becomes difficult.

A common approach is to separate declarations and implementations.

Let's organize a calculator into three files.

### Project structure

Create:

```text
cpp-calculator/
│
├── main.cpp
├── Calculator.hpp
└── Calculator.cpp
```

### File 1: Calculator.hpp

```cpp
#ifndef CALCULATOR_HPP
#define CALCULATOR_HPP

double add(double a, double b);

double subtract(double a, double b);

double multiply(double a, double b);

double divide(double a, double b);

#endif
```

### Explanation

The header file contains function declarations.

For example:

```cpp
double add(double a, double b);
```

Tells other source files that the `add()` function exists.

The preprocessor directives:

```cpp
#ifndef CALCULATOR_HPP
#define CALCULATOR_HPP
```

Prevent the header's declarations from being processed repeatedly within the same translation unit.

The final:

```cpp
#endif
```

Closes the header guard.

### File 2: Calculator.cpp

```cpp
#include <iostream>
#include "Calculator.hpp"

double add(double a, double b) {

    return a + b;
}

double subtract(double a, double b) {

    return a - b;
}

double multiply(double a, double b) {

    return a * b;
}

double divide(double a, double b) {

    if (b == 0) {
        std::cout << "Cannot divide by zero.\n";
        return 0;
    }

    return a / b;
}
```

### Explanation

First:

```cpp
#include "Calculator.hpp"
```

Includes the declarations from the header file.

The implementation of each function follows.

Each function performs its operation and returns the result.

### File 3: main.cpp

```cpp
#include <iostream>
#include "Calculator.hpp"

int main() {

    double a = 20;
    double b = 5;

    std::cout << "Addition: " << add(a, b) << "\n";

    std::cout << "Subtraction: " << subtract(a, b) << "\n";

    std::cout << "Multiplication: " << multiply(a, b) << "\n";

    std::cout << "Division: " << divide(a, b) << "\n";

    return 0;
}
```

### Explanation

The main file includes the calculator header.

It can now call the functions declared there.

The actual implementations are stored in `Calculator.cpp`.

This separation makes the project easier to expand.

### Compile the project

Open the terminal inside the project folder.

Run:

```bash
g++ main.cpp Calculator.cpp -o calculator
```

This command:

- Compiles `main.cpp`.
- Compiles `Calculator.cpp`.
- Links the compiled code together.
- Produces an executable named `calculator`.

On Windows:

```bash
.\calculator.exe
```

On Linux/macOS:

```bash
./calculator
```

Expected output:

```text
Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4
```

### Why use separate files?

This structure is common in professional C++ development.

It provides:

- Better organization.
- Reusable interfaces.
- Easier maintenance.
- Separation between declarations and implementations.
- Improved collaboration.

In larger projects, you may also encounter namespaces, classes, libraries, and build systems such as CMake.

## 8. Common Function Errors

### Error 1: Calling a function before the compiler knows about it

Incorrect:

```cpp
int main() {

    greet();

    return 0;
}

void greet() {
    std::cout << "Hello";
}
```

The compiler has not encountered a declaration for `greet()` when it sees the call.

Correct:

```cpp
#include <iostream>

void greet();

int main() {

    greet();

    return 0;
}

void greet() {
    std::cout << "Hello";
}
```

The declaration informs the compiler that the function exists.

### Error 2: Forgetting the return statement

Incorrect:

```cpp
int add(int a, int b) {

    int result = a + b;
}
```

The function promises to return an integer but does not return a value.

Correct:

```cpp
int add(int a, int b) {

    int result = a + b;

    return result;
}
```

### Error 3: Using the wrong argument type

Consider:

```cpp
int add(int a, int b) {
    return a + b;
}
```

Calling:

```cpp
add(10, 20);
```

is straightforward.

However, calling:

```cpp
add("Hello", "World");
```

is invalid because the function expects integers.

Arguments must be compatible with the parameter types.

### Error 4: Confusing value and reference parameters

Incorrect assumption:

```cpp
void change(int number) {
    number = 100;
}
```

You might expect this to change the original variable.

It does not.

To modify the original variable:

```cpp
void change(int& number) {
    number = 100;
}
```

### Error 5: Defining two identical functions

Incorrect:

```cpp
int calculate(int number) {
    return number * 2;
}

double calculate(int number) {
    return number * 2.5;
}
```

These functions have identical parameter lists.

Changing only the return type does not create a valid overload.

## 9. Part 3 Practical Exercises

Complete the following exercises independently.

### Exercise 1: Welcome Function

Create a function named `welcome()`.

It should display:

```text
Welcome to C++ programming.
```

Call it from `main()`.

### Exercise 2: Addition Function

Create a function named `add()` that accepts two integers and returns their sum.

Call it with different arguments and display the results.

### Exercise 3: Maximum Number

Create a function named `findMaximum()` that accepts two integers and returns the larger value.

Example:

```text
Input: 20, 45
Output: 45
```

### Exercise 4: Even or Odd Function

Create a function named `isEven()`.

It should accept an integer and return a Boolean value.

Return `true` if the number is even and `false` otherwise.

Use the modulus operator.

### Exercise 5: Temperature Converter

Create two functions:

```cpp
double celsiusToFahrenheit(double celsius);
double fahrenheitToCelsius(double fahrenheit);
```

Use the following formulas:

```text
F = (C × 9/5) + 32

C = (F - 32) × 5/9
```

Allow the user to select which conversion to perform.

### Exercise 6: Pass-by-Reference

Create a function named `doubleValue()`.

It should accept an integer reference and multiply the original value by two.

Demonstrate that the original variable changes after the function call.

### Exercise 7: Function Overloading

Create three functions named `area()`.

They should calculate:

- The area of a square.
- The area of a rectangle.
- The area of a circle.

Use different parameter lists to overload the function.

### Exercise 8: Recursive Countdown

Create a recursive function named `countdown()`.

It should display numbers from a given positive integer down to 1.

Ensure that the function has a base case.

### Exercise 9: Debugging

Find and correct the errors:

```cpp
#include <iostream>

int multiply(int a, int b) {

    int result = a * b;

}

int main() {

    int answer = multiply(5, 4);

    std::cout << answer;

    return 0;
}
```

Explain why the function does not correctly return its calculated result.

### Exercise 10: Multiple-File Calculator

Recreate the calculator using:

- `main.cpp`
- `Calculator.hpp`
- `Calculator.cpp`

Implement addition, subtraction, multiplication, and division.

Compile all files together.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## Assessment Introduction

You have completed the lesson on C++ Functions and Reusable Logic.

This assessment evaluates whether you can design reusable functions, pass information between functions, return results, and organize a program into smaller components.

Answer independently and submit your work to Kai for evaluation.

# SECTION A: MULTIPLE-CHOICE QUESTIONS

Choose the correct answer.

**Question 1**

What is a function in C++?

A. A variable that stores text.

B. A reusable block of code designed to perform a task.

C. A type of loop.

D. A compiler instruction.

**Question 2**

Which keyword indicates that a function does not return a value?

A. `int`

B. `return`

C. `void`

D. `const`

**Question 3**

What is the purpose of a function parameter?

A. To terminate a function.

B. To receive information passed into a function.

C. To create a header file.

D. To compile a program.

**Question 4**

What is the difference between a parameter and an argument?

A. They mean exactly the same thing.

B. A parameter is declared in the function; an argument is supplied during the call.

C. An argument is always a string.

D. A parameter must always be global.

**Question 5**

What does a function declaration do?

A. Executes a function.

B. Announces the function's interface to the compiler.

C. Deletes a function.

D. Creates a loop.

**Question 6**

Which statement returns a value from a function?

A. `break`

B. `continue`

C. `return`

D. `switch`

**Question 7**

What happens when an ordinary integer parameter is passed by value?

A. The original variable is automatically changed.

B. The function receives a copy.

C. The program stops.

D. The parameter becomes global.

**Question 8**

Which syntax passes an integer by reference?

A. `int number`

B. `int* number`

C. `int& number`

D. `const number`

**Question 9**

What is function overloading?

A. Calling a function repeatedly.

B. Creating multiple functions with the same name but different parameter lists.

C. Defining a function without a body.

D. Calling a function inside a loop.

**Question 10**

What is recursion?

A. A function calling itself.

B. A function returning a string.

C. A variable calling another variable.

D. A program importing a library.

**Question 11**

What is a base case in recursion?

A. The first variable in a program.

B. The condition that stops further recursive calls.

C. A function declaration.

D. A global variable.

**Question 12**

Which parameter is suitable when a function needs to read a large string without modifying it?

A. `std::string`

B. `std::string&`

C. `const std::string&`

D. `void`

# SECTION B: CONCEPTUAL QUESTIONS

Answer using clear explanations.

**Question 13**

Explain what functions are and why they are important in software development.

**Question 14**

Explain the components of this function:

```cpp
int calculate(int a, int b) {
    return a + b;
}
```

Identify the return type, function name, parameters, function body, and return statement.

**Question 15**

Differentiate between:

- Function declaration.
- Function definition.
- Function call.

**Question 16**

Explain the difference between `void` functions and value-returning functions.

Give an example of where each would be useful.

**Question 17**

Explain local and global variables.

Why is it generally better to limit unnecessary global variables?

**Question 18**

Differentiate between pass-by-value and pass-by-reference.

Use a code example to support your explanation.

**Question 19**

What are default arguments?

Explain how they work when a function is called without supplying every argument.

**Question 20**

Explain function overloading.

Why can't C++ overload functions using only different return types?

**Question 21**

Explain recursion.

What is a base case, and why is it important?

**Question 22**

What is the purpose of a header file in a multi-file C++ project?

# SECTION C: PRACTICAL PROGRAMMING QUESTIONS

Write complete C++ programs.

**Question 23: Reusable Addition Function**

Create a function named `add()` that:

1. Accepts two integers.
2. Calculates their sum.
3. Returns the result.

Call the function from `main()` and display the result.

**Question 24: Student Grade Function**

Create a function named `calculateGrade()` that accepts a student's marks and returns the appropriate grade.

Use these rules:

| Marks | Grade |
|---|---|
| 70–100 | A |
| 60–69 | B |
| 50–59 | C |
| 40–49 | D |
| Below 40 | Fail |

Your program must reject invalid marks.

**Question 25: Pass-by-Reference**

Create a function named `increaseSalary()`.

It should accept a salary by reference and increase it by 10%.

Demonstrate that the original salary variable changes after calling the function.

**Question 26: Function Overloading**

Create overloaded functions named `area()` to calculate:

- The area of a square.
- The area of a rectangle.
- The area of a circle.

Use the appropriate formulas.

**Question 27: Recursive Factorial**

Write a recursive function that calculates the factorial of a non-negative integer.

Your program should:

1. Accept user input.
2. Reject negative values.
3. Calculate the factorial recursively.
4. Display the result.

Use a suitable numeric type and explain its range limitations.

**Question 28: Multi-Function Banking Application**

Create a banking application with separate functions for:

- Displaying the balance.
- Depositing money.
- Withdrawing money.
- Displaying the menu.

Your `main()` function should coordinate the operations.

Use appropriate return types and parameters.

# SECTION D: CODE ANALYSIS AND DEBUGGING

**Question 29**

Study the program:

```cpp
#include <iostream>

int calculate(int number) {

    number = number * 2;

    return number;
}

int main() {

    int value = 10;

    calculate(value);

    std::cout << value;

    return 0;
}
```

Answer:

1. What is the output?
2. Why does the original variable remain unchanged?
3. How could you modify the function to change the original variable?

**Question 30**

Identify and correct the errors:

```cpp
#include <iostream>

int add(int a, int b);

int main() {

    int result = add(10, 20);

    std::cout << result;

    return 0;
}

double add(int a, int b) {

    return a + b;
}
```

Explain why the declaration and definition are incompatible.

**Question 31**

Study the recursive function:

```cpp
int factorial(int number) {

    return number * factorial(number - 1);
}
```

Answer:

1. What is missing?
2. Why can this function cause a stack overflow?
3. Write a corrected version.

---

# FINAL PRACTICAL PROJECT: STUDENT MANAGEMENT SYSTEM

## Project Description

Build a small student management application using reusable C++ functions.

The application should allow users to:

1. Register a student's basic information.
2. Calculate the student's average.
3. Determine the student's grade.
4. Display the student's information.
5. Exit the application.

## Required Functions

Your program should contain functions similar to:

```cpp
void displayMenu();

void registerStudent();

double calculateAverage(double mark1, double mark2, double mark3);

std::string calculateGrade(double average);

void displayStudent();
```

You may improve the design by passing information through parameters or using a structure to represent a student.

## Suggested Program Flow

```text
===== STUDENT MANAGEMENT SYSTEM =====

1. Register Student
2. Calculate Average
3. Display Student
4. Exit

Choose an option:
```

### Option 1: Register Student

Ask the user to enter:

- Student name.
- Registration number.
- Marks for three subjects.

Store the information.

### Option 2: Calculate Average

Call the average calculation function.

Calculate the average using the three subject marks.

### Option 3: Display Student

Call the appropriate function to display the student's information, average, and grade.

### Option 4: Exit

Display a closing message and terminate the program.

## Technical Requirements

Your application must demonstrate:

- Function declarations.
- Function definitions.
- Function calls.
- `void` functions.
- Functions that return values.
- Parameters and arguments.
- Pass-by-value or pass-by-reference.
- Local variables.
- Conditional statements.
- Loops.
- Appropriate input validation.

## Project Submission

Submit the following to Kai:

1. Complete source code.
2. A brief explanation of each function.
3. Sample output from at least three operations.
4. An explanation of how information moves between functions.
5. A description of how you organized your application.

---

# SUBMISSION TO KAI

Submit your answers and project for evaluation.

Kai should assess:

| Assessment area | What Kai checks |
|---|---|
| Function concepts | Understanding of reusable code. |
| Function structure | Correct declarations and definitions. |
| Parameters and arguments | Correct passing of information. |
| Return values | Correct use of return statements. |
| Scope | Understanding of local and global variables. |
| References | Correct use of pass-by-reference. |
| Overloading | Correct implementation of overloaded functions. |
| Recursion | Correct base cases and recursive logic. |
| Code organization | Appropriate separation of responsibilities. |
| Practical project | Ability to build a working student management system. |

## Lesson Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain what functions are.
- [ ] Explain why functions are useful.
- [ ] Create a function.
- [ ] Call a function.
- [ ] Use `void` functions.
- [ ] Create value-returning functions.
- [ ] Understand parameters and arguments.
- [ ] Write function declarations.
- [ ] Write function definitions.
- [ ] Understand local and global variables.
- [ ] Pass arguments by value.
- [ ] Pass arguments by reference.
- [ ] Use constant references.
- [ ] Use default arguments.
- [ ] Implement function overloading.
- [ ] Understand recursion.
- [ ] Write recursive functions with base cases.
- [ ] Understand lambda functions.
- [ ] Organize functions across multiple files.
- [ ] Build an application using reusable functions.

**Part 4 of 4 — Lesson Complete**

# NEXT LESSON

### C++: Arrays and Collections

In the next lesson, you will learn how to store and manage multiple values using arrays, multidimensional arrays, `std::array`, `std::vector`, and other collection types.

You will also learn how to access, modify, search, and process collections using loops and functions.