# C Programming: Functions and Reusable Logic

# PART 1 OF 4: Understanding Functions in C

## 1. What Is a Function?

A function is a named, reusable block of code designed to perform a particular task.

Instead of writing every instruction inside the `main()` function, you can create separate functions to handle different operations.

For example, imagine building a student management system.

The application might need to:

- Register students.
- Calculate examination averages.
- Determine student grades.
- Display student information.
- Calculate fees.

You could write all these operations inside `main()`, but the program would quickly become difficult to manage.

Instead, you can create separate functions:

```c
void registerStudent(void);
float calculateAverage(float marks1, float marks2);
char calculateGrade(float average);
void displayStudent(void);
```

Each function has a specific responsibility.

This approach is called **modular programming**.

### Why Are Functions Important?

Functions provide several benefits:

| Benefit | Explanation |
|---|---|
| Code reusability | Write a function once and call it multiple times |
| Organization | Divide large programs into smaller sections |
| Readability | Make programs easier to understand |
| Maintenance | Update one function without rewriting the entire application |
| Testing | Test individual operations separately |
| Collaboration | Different developers can work on different functions |

For example, if several parts of your application need to calculate an average, you can reuse one function rather than writing the same calculation repeatedly.

---

## 2. Understanding the main() Function

Every standard hosted C program starts execution through a function called `main()`.

Example:

```c
#include <stdio.h>

int main(void) {
    printf("Hello, C Programming!\n");

    return 0;
}
```

Explanation:

- `#include <stdio.h>` provides the declaration for `printf()`.
- `int main(void)` defines the main function.
- `printf()` displays a message.
- `return 0;` indicates successful program termination.

The `main()` function is special because it is the program's entry point.

However, it is still a function.

You can create additional functions and call them from `main()`.

---

## 3. Anatomy of a Function

A C function generally has four important elements:

1. Return type.
2. Function name.
3. Parameters.
4. Function body.

Consider:

```c
int add(int a, int b) {
    return a + b;
}
```

Let's understand each part.

### A. Return Type

```c
int
```

This tells the compiler that the function returns an integer value.

Other possible return types include:

- `void`
- `float`
- `double`
- `char`
- Other valid object and pointer types.

### B. Function Name

```c
add
```

This is the name used to call the function.

A good function name should describe what the function does.

Examples:

```c
calculateTotal()
displayResults()
registerStudent()
checkPassword()
```

### C. Parameters

```c
int a, int b
```

Parameters are variables that receive values when the function is called.

In this example, the function accepts two integer values.

### D. Function Body

```c
{
    return a + b;
}
```

The body contains the instructions executed when the function is called.

The function adds the two values and returns the result.

---

## 4. Function Declaration, Definition, and Calling

These are three important concepts in C.

### A. Function Declaration (Prototype)

A function declaration informs the compiler about a function before it is used.

Example:

```c
int add(int a, int b);
```

This tells the compiler:

- The function is called `add`.
- It accepts two integer arguments.
- It returns an integer.

The declaration does not contain the function's implementation.

### B. Function Definition

The definition contains the actual implementation.

```c
int add(int a, int b) {
    return a + b;
}
```

### C. Function Call

A function call executes the function.

```c
int result = add(10, 20);
```

The function receives 10 and 20, calculates their sum, and returns 30.

### Complete Example

```c
#include <stdio.h>

int add(int a, int b);

int main(void) {
    int result = add(10, 20);

    printf("Result: %d\n", result);

    return 0;
}

int add(int a, int b) {
    return a + b;
}
```

### Line-by-Line Explanation

**Line 1**

```c
#include <stdio.h>
```

Provides the declaration for `printf()`.

**Line 2**

```c
int add(int a, int b);
```

Declares the function before `main()` uses it.

This is called a function prototype.

**Line 3**

```c
int main(void) {
```

Defines the program's entry point.

**Line 4**

```c
int result = add(10, 20);
```

Calls the `add()` function.

The values 10 and 20 are passed as arguments.

The function returns 30, which is stored in `result`.

**Line 5**

```c
printf("Result: %d\n", result);
```

Displays the returned result.

**Line 6**

```c
return 0;
```

Terminates the program successfully.

**Function definition**

```c
int add(int a, int b) {
    return a + b;
}
```

This contains the implementation of the addition operation.

Expected output:

```text
Result: 30
```

### Important Difference

| Term | Meaning |
|---|---|
| Declaration | Announces the function to the compiler |
| Definition | Provides the actual function implementation |
| Call | Executes the function |

---

## 5. Understanding Parameters and Arguments

These two terms are related but have different meanings.

**Parameters** are variables listed in a function's declaration or definition.

**Arguments** are the actual values supplied when the function is called.

Example:

```c
int multiply(int number1, int number2) {
    return number1 * number2;
}
```

Here:

- `number1` is a parameter.
- `number2` is a parameter.

Now call the function:

```c
int result = multiply(5, 4);
```

Here:

- `5` is an argument.
- `4` is an argument.

The function receives the arguments through its parameters.

The calculation is:

5 × 4 = 20.

Expected result:

```text
20
```

---

## 6. Functions That Return Values

A function can calculate something and send the result back to the statement that called it.

The `return` statement performs this operation.

Example:

```c
int square(int number) {
    return number * number;
}
```

The function accepts an integer and returns its square.

Complete program:

```c
#include <stdio.h>

int square(int number);

int main(void) {
    int answer = square(6);

    printf("Square: %d\n", answer);

    return 0;
}

int square(int number) {
    return number * number;
}
```

### Explanation

`int square(int number);`

Declares a function that accepts an integer and returns an integer.

`int answer = square(6);`

Calls the function with the value 6.

Inside the function:

```c
return number * number;
```

Multiplies 6 by 6 and returns 36.

The returned value is stored in `answer`.

Expected output:

```text
Square: 36
```

### Important

The return type must be compatible with the value returned.

For example:

```c
float calculatePrice(void) {
    return 150.50f;
}
```

This function returns a floating-point value.

---

## 7. Understanding void Functions

Not every function needs to return a value.

A function declared with `void` as its return type does not return a value to its caller.

Example:

```c
#include <stdio.h>

void greet(void);

int main(void) {
    greet();

    return 0;
}

void greet(void) {
    printf("Welcome to C Programming!\n");
}
```

Explanation:

```c
void greet(void);
```

Declares a function that:
- Returns no value.
- Accepts no parameters.

```c
greet();
```

Calls the function.

Inside the function:

```c
printf("Welcome to C Programming!\n");
```

Displays the greeting.

Expected output:

```text
Welcome to C Programming!
```

### When Should You Use void?

Use `void` as the return type when a function performs an action but does not need to return a result.

Examples:

```c
void displayMenu(void);
void printReceipt(void);
void showWelcomeMessage(void);
void clearScreen(void);
```

A `void` function can still perform calculations internally. It simply does not return a value through a return expression.

---

## 8. Functions Without Parameters

A function does not always need to receive information.

Example:

```c
#include <stdio.h>

void showWelcome(void) {
    printf("Welcome to Firebox Community!\n");
}

int main(void) {
    showWelcome();

    return 0;
}
```

The function `showWelcome()` does not receive any arguments.

It simply performs its task.

In C, writing `(void)` explicitly indicates that the function accepts no parameters.

---

## 9. Functions With Parameters but No Return Value

A function can receive information without returning a result.

Example:

```c
#include <stdio.h>

void displayAge(int age) {
    printf("Your age is %d\n", age);
}

int main(void) {
    displayAge(22);

    return 0;
}
```

Explanation:

- `void displayAge(int age)` declares a function that accepts an integer.
- `displayAge(22)` passes 22 into the function.
- The function displays the value.
- No result is returned.

Expected output:

```text
Your age is 22
```

---

## 10. Four Common Function Categories

Functions can be classified according to whether they accept parameters and whether they return values.

| Category | Parameters | Return value |
|---|---|---|
| Type 1 | None | None |
| Type 2 | Yes | None |
| Type 3 | None | Yes |
| Type 4 | Yes | Yes |

Examples:

### Type 1: No Parameters, No Return Value

```c
void greet(void) {
    printf("Hello!\n");
}
```

### Type 2: Parameters, No Return Value

```c
void displayNumber(int number) {
    printf("%d\n", number);
}
```

### Type 3: No Parameters, Returns a Value

```c
int getDefaultAge(void) {
    return 18;
}
```

### Type 4: Parameters and Returns a Value

```c
int add(int a, int b) {
    return a + b;
}
```

Understanding these categories helps you choose the correct function design for different tasks.

---

## 11. Variable Scope: Local and Global Variables

Scope determines where a variable can be accessed.

C commonly uses local and file-scope variables.

### A. Local Variables

A local variable is declared inside a function or block.

Example:

```c
#include <stdio.h>

void calculate(void) {
    int number = 10;

    printf("Number: %d\n", number);
}

int main(void) {
    calculate();

    return 0;
}
```

The variable `number` belongs to the block inside `calculate()`.

It cannot be accessed directly from `main()`.

For example, this would be incorrect:

```c
int main(void) {
    calculate();

    printf("%d\n", number);

    return 0;
}
```

The compiler does not know `number` inside `main()` because it is local to another function.

### B. File-Scope Variables

A variable declared outside all functions has file scope.

Example:

```c
#include <stdio.h>

int applicationVersion = 1;

void displayVersion(void) {
    printf("Version: %d\n", applicationVersion);
}

int main(void) {
    displayVersion();

    return 0;
}
```

`applicationVersion` is declared outside the functions.

It can be accessed by functions in the same source file after its declaration, subject to normal C linkage and declaration rules.

### Local vs File-Scope Variables

| Feature | Local variable | File-scope variable |
|---|---|---|
| Declaration | Inside a function or block | Outside all functions |
| Visibility | Within its enclosing block | From its declaration to the end of its translation unit |
| Lifetime | Depends on storage duration | Normally entire program execution |
| Typical use | Temporary calculations | Shared state when necessary |

Global or file-scope mutable variables should be used carefully because they can make programs harder to test and maintain.

---

## 12. Understanding the Call Stack

When one function calls another, C must keep track of where execution should return.

The runtime environment commonly uses a call stack to manage function calls and their automatic local variables.

Consider:

```c
#include <stdio.h>

void third(void) {
    printf("Inside third\n");
}

void second(void) {
    printf("Inside second\n");
    third();
}

void first(void) {
    printf("Inside first\n");
    second();
}

int main(void) {
    first();

    return 0;
}
```

Execution order:

1. `main()` calls `first()`.
2. `first()` calls `second()`.
3. `second()` calls `third()`.
4. `third()` finishes and returns to `second()`.
5. `second()` finishes and returns to `first()`.
6. `first()` finishes and returns to `main()`.

Expected output:

```text
Inside first
Inside second
Inside third
```

The call stack helps the program remember where each function should return.

---

## Part 1 Practice

1. What is a function in C?
2. Why are functions important in software development?
3. Explain the difference between function declaration, definition, and calling.
4. What is a function prototype?
5. What is the difference between parameters and arguments?
6. What is the purpose of the `return` statement?
7. What does `void` mean as a function return type?
8. Explain the four common categories of functions.
9. What is the difference between local and file-scope variables?
10. What is the purpose of the call stack?

**Progress: Part 1 of 4**

---

# PART 2 OF 4: Advanced Function Concepts and Reusable Logic

## 13. Passing Arguments to Functions

C passes ordinary function arguments by value.

This means the function receives its own parameter value rather than directly receiving the caller's variable.

Example:

```c
#include <stdio.h>

void changeNumber(int number) {
    number = 100;
}

int main(void) {
    int value = 20;

    changeNumber(value);

    printf("Value: %d\n", value);

    return 0;
}
```

### Line-by-line explanation

`int value = 20;`

Creates a variable in `main()`.

`changeNumber(value);`

Calls the function and passes the value 20.

`void changeNumber(int number)`

Receives a copy of the value in its parameter.

`number = 100;`

Changes the function's local parameter.

It does not change the original variable in `main()`.

Expected output:

```text
Value: 20
```

### Why Does This Happen?

The parameter `number` and the variable `value` are separate objects.

The function changes its own copy.

When the function finishes, its local parameter ceases to exist.

---

## 14. Using Pointers to Modify Original Variables

Although C passes arguments by value, you can pass a pointer to a variable.

The function then receives a copy of the address and can use it to modify the original object.

Example:

```c
#include <stdio.h>

void changeNumber(int *number) {
    *number = 100;
}

int main(void) {
    int value = 20;

    changeNumber(&value);

    printf("Value: %d\n", value);

    return 0;
}
```

### Line-by-line explanation

`void changeNumber(int *number)`

The parameter is a pointer to an integer.

`int value = 20;`

Creates the original integer variable.

`changeNumber(&value);`

Passes the memory address of `value`.

`*number = 100;`

Dereferences the pointer and modifies the integer stored at that address.

The original variable is now 100.

Expected output:

```text
Value: 100
```

### Important Pointer Operators

| Operator | Meaning |
|---|---|
| `&` | Obtains the address of an object |
| `*` | Dereferences a pointer to access the pointed-to object |

C does not have true pass-by-reference parameter semantics. Passing a pointer is the usual way to let a function modify an object owned by the caller.

---

## 15. Returning Multiple Results Through Pointers

A C function can directly return one value.

However, sometimes you need to produce multiple results.

You can use pointer parameters.

Example: Calculating the sum and difference of two numbers.

```c
#include <stdio.h>

void calculate(int a, int b, int *sum, int *difference) {
    *sum = a + b;
    *difference = a - b;
}

int main(void) {
    int total;
    int resultDifference;

    calculate(20, 5, &total, &resultDifference);

    printf("Sum: %d\n", total);
    printf("Difference: %d\n", resultDifference);

    return 0;
}
```

### Explanation

The function receives four parameters.

- `a` stores the first number.
- `b` stores the second number.
- `sum` points to the location where the sum should be stored.
- `difference` points to the location where the difference should be stored.

Inside the function:

```c
*sum = a + b;
```

Stores the sum in the caller's `total` variable.

```c
*difference = a - b;
```

Stores the difference in the caller's `resultDifference` variable.

Expected output:

```text
Sum: 25
Difference: 15
```

For real programs, ensure pointer arguments are valid before dereferencing them.

---

## 16. Function Overloading in C

Function overloading means defining multiple functions with the same name but different parameter lists.

Some programming languages, such as C++, support function overloading.

Standard C does not.

For example, you cannot define these as separate functions in C:

```c
int calculate(int a, int b);

float calculate(float a, float b);
```

They have the same function name, which creates a conflicting declaration in C.

Instead, use different names:

```c
int calculateInteger(int a, int b) {
    return a + b;
}

float calculateFloat(float a, float b) {
    return a + b;
}
```

This is a common way to handle operations involving different data types.

---

## 17. Recursive Functions

Recursion occurs when a function calls itself.

A recursive function solves a problem by reducing it into smaller versions of the same problem.

Every properly designed recursive process needs:

1. A base case.
2. A recursive case.

The base case stops recursion.

The recursive case moves the problem toward the base case.

### Example: Factorial Calculation

The factorial of a positive integer is the product of all positive integers up to that number.

For example:

5! = 5 × 4 × 3 × 2 × 1 = 120.

Mathematically:

- 0! = 1.
- n! = n × (n − 1)! for n > 0.

C program:

```c
#include <stdio.h>

unsigned long long factorial(unsigned int n) {
    if (n == 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

int main(void) {
    unsigned int number = 5;

    printf("Factorial: %llu\n", factorial(number));

    return 0;
}
```

### Line-by-line explanation

`unsigned long long factorial(unsigned int n)`

Defines a function that receives a non-negative integer and returns an unsigned long long integer.

`if (n == 0)`

Checks the base case.

When n is zero, the function returns 1.

```c
return n * factorial(n - 1);
```

Calls the same function using a smaller value.

For factorial of 5, the calls become:

```text
factorial(5)
    5 * factorial(4)
        4 * factorial(3)
            3 * factorial(2)
                2 * factorial(1)
                    1 * factorial(0)
```

The base case returns 1.

The results then work backwards:

```text
factorial(0) = 1
factorial(1) = 1
factorial(2) = 2
factorial(3) = 6
factorial(4) = 24
factorial(5) = 120
```

Expected output:

```text
Factorial: 120
```

### Why Is the Base Case Important?

Without a base case, the function could continue calling itself indefinitely until the program exhausts its available call stack resources.

### Important Limitation

The factorial result grows quickly.

Even `unsigned long long` has a limited range. This example is suitable only for values that fit in that type.

---

## 18. Static Local Variables

A local variable normally has automatic storage duration.

Its lifetime is limited to the execution of its enclosing block.

However, you can use `static` to give a local variable static storage duration.

Example:

```c
#include <stdio.h>

void counter(void) {
    static int count = 0;

    count++;

    printf("Count: %d\n", count);
}

int main(void) {
    counter();
    counter();
    counter();

    return 0;
}
```

### Explanation

`static int count = 0;`

Creates a local variable whose value is preserved between function calls.

`count++;`

Increases the stored value.

Each call to `counter()` uses the same variable.

Expected output:

```text
Count: 1
Count: 2
Count: 3
```

If `static` were removed, `count` would be initialized to zero on each function call, and the output would be 1 every time.

---

## 19. Using Functions to Organize Large Programs

Imagine a banking application.

Without functions, all operations could be placed inside one large `main()` function.

A better approach is to separate responsibilities.

```c
void displayMenu(void);

double deposit(double balance, double amount);

double withdraw(double balance, double amount);

void displayBalance(double balance);
```

Each function handles one operation.

### Example: Banking Functions

```c
#include <stdio.h>

double deposit(double balance, double amount) {
    if (amount > 0) {
        balance += amount;
    }

    return balance;
}

double withdraw(double balance, double amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
    }

    return balance;
}

void displayBalance(double balance) {
    printf("Current balance: KSh %.2f\n", balance);
}

int main(void) {
    double balance = 5000.0;

    balance = deposit(balance, 1500.0);
    balance = withdraw(balance, 1000.0);

    displayBalance(balance);

    return 0;
}
```

### Understanding the program

The `deposit()` function receives a balance and deposit amount.

It checks whether the amount is positive.

If valid, it adds the amount to the balance and returns the updated value.

The `withdraw()` function checks two conditions:

- The withdrawal amount must be positive.
- The withdrawal amount must not exceed the available balance.

If both conditions are true, it subtracts the withdrawal amount.

The `displayBalance()` function displays the current balance.

Expected output:

```text
Current balance: KSh 5500.00
```

### Why Is This Design Better?

Each function performs one responsibility.

If the withdrawal rules change, you can update the `withdraw()` function without rewriting the display or deposit logic.

This is an example of separation of concerns.

Note: This program uses `double` for demonstration. Real financial systems should use appropriate exact monetary representations and carefully designed transaction handling.

---

## 20. Function Design Principles

Good functions should be designed carefully.

### A. Single Responsibility

A function should have one clear primary responsibility.

Good:

```c
double calculateAverage(int total, int count);
```

Less clear:

```c
void calculateAverageAndPrintStudentAndUpdateDatabase(void);
```

The second function combines several responsibilities.

### B. Meaningful Names

Use names that describe what the function does.

Good:

```c
calculateTotal()
validateAge()
displayReceipt()
```

Avoid unclear names:

```c
doThing()
abc()
function1()
```

### C. Avoid Unnecessary Global State

Prefer passing information through parameters and returning results.

This makes functions easier to test and reuse.

### D. Validate Inputs

A function should handle invalid inputs where appropriate.

For example, an average calculation must account for a count of zero.

### E. Keep Functions Manageable

A function should be easy to understand without reading hundreds of lines.

Large operations can be divided into smaller helper functions.

---

## 21. Common Function Errors

### Error 1: Calling a function without declaring it first

Problematic example:

```c
int main(void) {
    int result = add(2, 3);

    return 0;
}

int add(int a, int b) {
    return a + b;
}
```

In modern C, calling a function without a prior declaration is invalid.

Correct version:

```c
int add(int a, int b);

int main(void) {
    int result = add(2, 3);

    return 0;
}

int add(int a, int b) {
    return a + b;
}
```

### Error 2: Incorrect return type

Incorrect:

```c
int calculatePrice(void) {
    return 50.75;
}
```

The function declares an integer return type but returns a floating-point value.

Correct:

```c
double calculatePrice(void) {
    return 50.75;
}
```

### Error 3: Incorrect number of arguments

Function:

```c
int add(int a, int b);
```

Incorrect call:

```c
add(10);
```

The function requires two arguments.

Correct:

```c
add(10, 20);
```

### Error 4: Forgetting to return a value

Incorrect:

```c
int add(int a, int b) {
    int result = a + b;
}
```

The function declares that it returns an integer but does not return a value.

Correct:

```c
int add(int a, int b) {
    int result = a + b;

    return result;
}
```

### Error 5: Returning the address of a local variable

Dangerous example:

```c
int *getNumber(void) {
    int number = 10;

    return &number;
}
```

The local variable ceases to exist when the function returns. Returning its address creates a dangling pointer.

A safer alternative is to return the integer itself:

```c
int getNumber(void) {
    int number = 10;

    return number;
}
```

---

## Part 2 Practice

1. Explain how C passes ordinary function arguments.
2. What is the difference between a parameter and a pointer parameter?
3. How can a function modify a variable belonging to its caller?
4. Why does C not support function overloading?
5. What is recursion?
6. What is a base case?
7. What can happen if a recursive function has no valid stopping condition?
8. What is the purpose of a static local variable?
9. Explain separation of concerns.
10. Why should functions avoid unnecessary global state?

**Progress: Part 2 of 4**

---

# PART 3 OF 4: Practical Projects Using Functions

This section focuses on building complete programs using reusable functions.

You will create a calculator, a student grading application, and a menu-driven banking program.

## 22. Preparing Your Project

Create a folder:

```text
C_Functions_Project/
│
├── calculator.c
├── grading.c
├── banking.c
├── recursion.c
└── student_system.c
```

Open the folder in your code editor.

Compile your programs with:

```bash
gcc -std=c17 -Wall -Wextra -pedantic calculator.c -o calculator
```

Run on Linux or macOS:

```bash
./calculator
```

On Windows PowerShell:

```powershell
.\calculator.exe
```

---

## 23. Practical Project 1: Calculator Using Functions

### Objective

Create a calculator that performs:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Instead of placing all calculations inside `main()`, create a separate function for each operation.

### Complete Program

```c
#include <stdio.h>

double add(double a, double b);
double subtract(double a, double b);
double multiply(double a, double b);
double divide(double a, double b);

int main(void) {
    double num1;
    double num2;
    char operation;

    printf("Enter first number: ");

    if (scanf("%lf", &num1) != 1) {
        printf("Invalid number.\n");
        return 1;
    }

    printf("Enter an operator (+, -, *, /): ");

    if (scanf(" %c", &operation) != 1) {
        printf("Invalid operator input.\n");
        return 1;
    }

    printf("Enter second number: ");

    if (scanf("%lf", &num2) != 1) {
        printf("Invalid number.\n");
        return 1;
    }

    switch (operation) {
        case '+':
            printf("Result: %.2f\n", add(num1, num2));
            break;

        case '-':
            printf("Result: %.2f\n", subtract(num1, num2));
            break;

        case '*':
            printf("Result: %.2f\n", multiply(num1, num2));
            break;

        case '/':
            if (num2 == 0.0) {
                printf("Cannot divide by zero.\n");
            } else {
                printf("Result: %.2f\n", divide(num1, num2));
            }
            break;

        default:
            printf("Invalid operator.\n");
    }

    return 0;
}

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
    return a / b;
}
```

### Understanding the Program

First, we declare four function prototypes:

```c
double add(double a, double b);
double subtract(double a, double b);
double multiply(double a, double b);
double divide(double a, double b);
```

These inform the compiler about the functions before they are called.

Each function:

- Accepts two `double` values.
- Returns one `double` result.

### Understanding main()

The `main()` function handles user interaction.

It reads two numbers and an operator.

The `switch` statement selects the correct operation.

For addition:

```c
add(num1, num2)
```

Calls the addition function.

For subtraction:

```c
subtract(num1, num2)
```

Calls the subtraction function.

The same approach is used for multiplication and division.

### Understanding the Function Definitions

```c
double add(double a, double b) {
    return a + b;
}
```

Receives two values, adds them, and returns the result.

The other functions follow the same structure but perform different operations.

### Example Interaction

```text
Enter first number: 25
Enter an operator (+, -, *, /): +
Enter second number: 15
Result: 40.00
```

### What You Have Learned

You have separated the calculation logic from the user interaction.

This makes the calculator easier to maintain and extend.

---

## 24. Practical Project 2: Student Grading System Using Functions

### Objective

Create a program that:

1. Accepts a student's marks.
2. Calculates the average.
3. Determines the grade.
4. Displays the results.

We will use separate functions for each responsibility.

### Complete Program

```c
#include <stdio.h>

float calculateAverage(int marks1, int marks2, int marks3);
char calculateGrade(float average);
void displayResult(float average, char grade);

int main(void) {
    int marks1;
    int marks2;
    int marks3;

    printf("Enter marks for subject 1: ");

    if (scanf("%d", &marks1) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Enter marks for subject 2: ");

    if (scanf("%d", &marks2) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Enter marks for subject 3: ");

    if (scanf("%d", &marks3) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (marks1 < 0 || marks1 > 100 ||
        marks2 < 0 || marks2 > 100 ||
        marks3 < 0 || marks3 > 100) {

        printf("Marks must be between 0 and 100.\n");
        return 1;
    }

    float average = calculateAverage(marks1, marks2, marks3);

    char grade = calculateGrade(average);

    displayResult(average, grade);

    return 0;
}

float calculateAverage(int marks1, int marks2, int marks3) {
    int total = marks1 + marks2 + marks3;

    return (float) total / 3;
}

char calculateGrade(float average) {
    if (average >= 80) {
        return 'A';
    } else if (average >= 70) {
        return 'B';
    } else if (average >= 60) {
        return 'C';
    } else if (average >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

void displayResult(float average, char grade) {
    printf("\nSTUDENT RESULTS\n");
    printf("----------------\n");

    printf("Average: %.2f\n", average);
    printf("Grade: %c\n", grade);
}
```

### Understanding the Functions

#### Function 1: calculateAverage()

```c
float calculateAverage(int marks1, int marks2, int marks3) {
    int total = marks1 + marks2 + marks3;

    return (float) total / 3;
}
```

This function:

- Accepts three integer scores.
- Adds them together.
- Converts the total to `float`.
- Divides by 3.
- Returns the average.

#### Function 2: calculateGrade()

```c
char calculateGrade(float average) {
    if (average >= 80) {
        return 'A';
    } else if (average >= 70) {
        return 'B';
    } else if (average >= 60) {
        return 'C';
    } else if (average >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}
```

This function accepts the calculated average.

It checks the average against the grade boundaries and returns the appropriate character.

#### Function 3: displayResult()

```c
void displayResult(float average, char grade) {
    printf("\nSTUDENT RESULTS\n");
    printf("----------------\n");

    printf("Average: %.2f\n", average);
    printf("Grade: %c\n", grade);
}
```

This function receives the average and grade and displays them.

It does not return a value because its purpose is to display information.

### Example Interaction

```text
Enter marks for subject 1: 80
Enter marks for subject 2: 90
Enter marks for subject 3: 85

STUDENT RESULTS
----------------
Average: 85.00
Grade: A
```

### What You Have Learned

You have divided one application into three independent operations.

Each function has a clear responsibility.

---

## 25. Practical Project 3: Banking System Using Functions

### Objective

Build a simple banking application that allows a user to:

- Deposit money.
- Withdraw money.
- Check the account balance.
- Exit the application.

### Complete Program

```c
#include <stdio.h>

void displayMenu(void);
double deposit(double balance);
double withdraw(double balance);
void displayBalance(double balance);

int main(void) {
    double balance = 5000.0;
    int choice;

    do {
        displayMenu();

        printf("Choose an option: ");

        if (scanf("%d", &choice) != 1) {
            printf("Invalid input.\n");
            return 1;
        }

        switch (choice) {
            case 1:
                balance = deposit(balance);
                break;

            case 2:
                balance = withdraw(balance);
                break;

            case 3:
                displayBalance(balance);
                break;

            case 4:
                printf("Thank you for banking with us.\n");
                break;

            default:
                printf("Invalid option.\n");
        }

    } while (choice != 4);

    return 0;
}

void displayMenu(void) {
    printf("\n===== BANKING SYSTEM =====\n");
    printf("1. Deposit\n");
    printf("2. Withdraw\n");
    printf("3. Check Balance\n");
    printf("4. Exit\n");
}

double deposit(double balance) {
    double amount;

    printf("Enter deposit amount: ");

    if (scanf("%lf", &amount) != 1) {
        printf("Invalid amount.\n");
        return balance;
    }

    if (amount <= 0) {
        printf("Deposit amount must be positive.\n");
        return balance;
    }

    balance += amount;

    printf("Deposit successful.\n");

    return balance;
}

double withdraw(double balance) {
    double amount;

    printf("Enter withdrawal amount: ");

    if (scanf("%lf", &amount) != 1) {
        printf("Invalid amount.\n");
        return balance;
    }

    if (amount <= 0) {
        printf("Withdrawal amount must be positive.\n");
    } else if (amount > balance) {
        printf("Insufficient funds.\n");
    } else {
        balance -= amount;

        printf("Withdrawal successful.\n");
    }

    return balance;
}

void displayBalance(double balance) {
    printf("Available balance: KSh %.2f\n", balance);
}
```

### Understanding the Structure

The application is divided into five functions.

| Function | Responsibility |
|---|---|
| `main()` | Controls the application |
| `displayMenu()` | Displays menu options |
| `deposit()` | Processes deposits |
| `withdraw()` | Processes withdrawals |
| `displayBalance()` | Displays account balance |

### Understanding the Deposit Function

```c
double deposit(double balance)
```

Receives the current account balance and returns the updated balance.

The function asks for the deposit amount.

It validates the amount before updating the balance.

```c
balance += amount;
```

Adds the deposit amount.

Finally:

```c
return balance;
```

Sends the updated balance back to `main()`.

The assignment:

```c
balance = deposit(balance);
```

stores the returned balance.

### Understanding the Withdrawal Function

The withdrawal function checks whether:

- The amount is positive.
- The amount does not exceed the available balance.

If both requirements are met, the amount is deducted.

Otherwise, the balance remains unchanged.

### Understanding the Menu

The `main()` function repeatedly calls `displayMenu()`.

It then uses `switch` to select the appropriate function.

The application continues until option 4 is selected.

### Example Interaction

```text
===== BANKING SYSTEM =====
1. Deposit
2. Withdraw
3. Check Balance
4. Exit
Choose an option: 1

Enter deposit amount: 2000
Deposit successful.

===== BANKING SYSTEM =====
1. Deposit
2. Withdraw
3. Check Balance
4. Exit
Choose an option: 3

Available balance: KSh 7000.00

===== BANKING SYSTEM =====
1. Deposit
2. Withdraw
3. Check Balance
4. Exit
Choose an option: 4

Thank you for banking with us.
```

### Important Design Lesson

The `main()` function does not need to know the internal details of depositing or withdrawing money.

It simply calls the appropriate function and receives the updated balance.

This is the benefit of modular programming.

---

## 26. Practical Project 4: Recursive Factorial Calculator

### Objective

Build a program that calculates factorials using recursion.

Code:

```c
#include <stdio.h>

unsigned long long factorial(unsigned int number) {
    if (number == 0) {
        return 1;
    }

    return number * factorial(number - 1);
}

int main(void) {
    unsigned int number;

    printf("Enter a non-negative integer: ");

    if (scanf("%u", &number) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (number > 20) {
        printf("Number is too large for this example.\n");
        return 1;
    }

    printf("Factorial: %llu\n", factorial(number));

    return 0;
}
```

### Understanding the Program

The function calls itself using a smaller number.

When the number reaches zero, the base case returns 1.

The function then calculates the final answer as the calls return.

The program limits the input to 20 because `20!` fits in a typical 64-bit `unsigned long long`, while `21!` does not.

Example:

```text
Enter a non-negative integer: 6
Factorial: 720
```

---

## 27. Practical Project 5: Building a Reusable Utility Library

Real software applications often contain functions that are reused in several places.

Let's create a small collection of mathematical utility functions.

### File 1: math_utils.h

```c
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
double calculateAverage(int a, int b, int c);

#endif
```

### Understanding the Header

The header file contains function declarations.

```c
#ifndef MATH_UTILS_H
#define MATH_UTILS_H
```

These are include guards.

They prevent the header's declarations from being processed repeatedly within the same translation unit.

The declarations describe which functions are available.

```c
#endif
```

Ends the include guard.

### File 2: math_utils.c

```c
#include "math_utils.h"

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

double calculateAverage(int a, int b, int c) {
    int total = a + b + c;

    return (double) total / 3;
}
```

This file contains the function implementations.

### File 3: main.c

```c
#include <stdio.h>
#include "math_utils.h"

int main(void) {
    printf("Addition: %d\n", add(10, 5));
    printf("Subtraction: %d\n", subtract(10, 5));
    printf("Multiplication: %d\n", multiply(10, 5));

    printf("Average: %.2f\n",
           calculateAverage(70, 80, 90));

    return 0;
}
```

This file uses the functions from the utility library.

### Compiling the Project

Place all three files in one folder:

```text
MathProject/
│
├── main.c
├── math_utils.c
└── math_utils.h
```

Compile:

```bash
gcc -std=c17 -Wall -Wextra -pedantic main.c math_utils.c -o math_project
```

Run:

```bash
./math_project
```

Expected output:

```text
Addition: 15
Subtraction: 5
Multiplication: 50
Average: 80.00
```

### Why Is This Important?

You have now moved beyond writing every function inside one source file.

You have separated:

- Function declarations into a header.
- Function implementations into a source file.
- Program execution into `main.c`.

This is a common approach in larger C applications.

---

## 28. Practical Project 6: Debugging Function Errors

Study this program:

```c
#include <stdio.h>

int multiply(int a, int b) {
    int result = a * b;
}

int main(void) {
    int answer = multiply(5, 4);

    printf("Answer: %d\n", answer);

    return 0;
}
```

### Identify the Problem

The function declares an integer return type:

```c
int multiply(int a, int b)
```

However, it does not return a value.

This is incorrect because the caller expects a valid integer result.

### Corrected Version

```c
#include <stdio.h>

int multiply(int a, int b) {
    int result = a * b;

    return result;
}

int main(void) {
    int answer = multiply(5, 4);

    printf("Answer: %d\n", answer);

    return 0;
}
```

Expected output:

```text
Answer: 20
```

### Another Debugging Challenge

Incorrect:

```c
void displayNumber(int number);

int main(void) {
    int result = displayNumber(10);

    return 0;
}

void displayNumber(int number) {
    printf("%d\n", number);
}
```

The problem is that `displayNumber()` returns `void`.

You cannot assign its result to an integer variable.

Correct:

```c
int main(void) {
    displayNumber(10);

    return 0;
}
```

The function should simply be called because it does not return a value.

---

## 29. Independent Practical Exercises

Complete the following tasks.

### Exercise 1: Addition Function

Create a function called `addNumbers()`.

Requirements:

- Accept two integers.
- Calculate their sum.
- Return the result.
- Call the function from `main()`.

### Exercise 2: Maximum Number

Create a function called `findMaximum()`.

Requirements:

- Accept two integers.
- Determine which is larger.
- Return the larger value.

### Exercise 3: Even or Odd Function

Create a function called `isEven()`.

Requirements:

- Accept an integer.
- Return 1 if the number is even.
- Return 0 if the number is odd.

Use the result inside `main()` to display the appropriate message.

### Exercise 4: Student Average

Create a function called `calculateAverage()`.

Requirements:

- Accept four examination scores.
- Calculate the average.
- Return the average as a floating-point value.

### Exercise 5: Recursive Sum

Create a recursive function that calculates the sum of integers from 1 to n.

For example:

```text
Input: 5
Output: 15
```

Because:

5 + 4 + 3 + 2 + 1 = 15.

Include a base case.

### Exercise 6: Temperature Converter

Create two functions:

```c
double celsiusToFahrenheit(double celsius);

double fahrenheitToCelsius(double fahrenheit);
```

Each function should accept a temperature and return the converted value.

### Exercise 7: Mini Banking Application

Create a banking application using separate functions for:

- Deposit.
- Withdrawal.
- Balance display.
- Menu display.

Use a loop to keep the application running until the user exits.

### Exercise 8: Multi-File Project

Create a small mathematics utility project using:

- `main.c`
- `math_utils.c`
- `math_utils.h`

Include at least three mathematical functions and compile all source files together.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

# C Programming: Functions and Reusable Logic

Welcome to your assessment.

This assessment evaluates your understanding of function declarations, definitions, parameters, arguments, return values, scope, pointers, recursion, and modular programming.

Answer all questions and submit your practical source code to Kai.

## SECTION A: Multiple Choice Questions

**Question 1**

What is a function in C?

A. A variable that stores multiple values.  
B. A reusable block of code designed to perform a task.  
C. A compiler command.  
D. A data type.

**Question 2**

What is the purpose of a function prototype?

A. To execute a function immediately.  
B. To inform the compiler about a function's interface.  
C. To delete a function.  
D. To create a global variable.

**Question 3**

Which keyword indicates that a function returns no value?

A. `int`  
B. `return`  
C. `void`  
D. `static`

**Question 4**

What is a parameter?

A. A value printed by a function.  
B. A variable listed in a function's parameter list.  
C. A compiler warning.  
D. A return statement.

**Question 5**

What does the following function return?

```c
int add(int a, int b) {
    return a + b;
}
```

A. A character.  
B. A floating-point value.  
C. An integer.  
D. No value.

**Question 6**

How does C pass ordinary function arguments?

A. Always by reference.  
B. By value.  
C. By global variable.  
D. By copying the entire program.

**Question 7**

Which operator obtains the address of a variable?

A. `*`  
B. `%`  
C. `&`  
D. `!`

**Question 8**

What is recursion?

A. A function calling itself.  
B. A variable calling another variable.  
C. A compiler executing a loop.  
D. A function returning nothing.

**Question 9**

What is the purpose of a base case in recursion?

A. To make recursion continue forever.  
B. To stop recursive calls when the stopping condition is reached.  
C. To declare a global variable.  
D. To create a function prototype.

**Question 10**

What does a static local variable do?

A. It disappears immediately after each statement.  
B. It retains its stored value between function calls.  
C. It becomes a pointer automatically.  
D. It cannot be initialized.

## SECTION B: Short Answer Questions

**Question 11**

Explain the difference between function declaration, definition, and calling.

**Question 12**

Differentiate between parameters and arguments.

**Question 13**

Explain the four common categories of functions based on parameters and return values.

**Question 14**

What is the difference between local and file-scope variables?

**Question 15**

Why does changing a normal function parameter not automatically change the original variable in the caller?

**Question 16**

Explain how pointers can allow a function to modify an original variable.

**Question 17**

Why does C not support function overloading?

**Question 18**

Explain recursion and why a base case is necessary.

**Question 19**

What is the purpose of a header file in a multi-file C project?

**Question 20**

Explain the benefits of separating a large application into smaller functions.

## SECTION C: Predict the Output

**Question 21**

Study this program:

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main(void) {
    int result = add(10, 15);

    printf("%d\n", result);

    return 0;
}
```

What is the output?

Explain how the function produces the result.

**Question 22**

Study this program:

```c
#include <stdio.h>

void change(int number) {
    number = 100;
}

int main(void) {
    int value = 20;

    change(value);

    printf("%d\n", value);

    return 0;
}
```

What is displayed?

Explain why.

**Question 23**

Study this program:

```c
#include <stdio.h>

void counter(void) {
    static int number = 0;

    number++;

    printf("%d\n", number);
}

int main(void) {
    counter();
    counter();
    counter();

    return 0;
}
```

Write the exact output and explain the behavior of the static variable.

**Question 24**

Study the following recursive function:

```c
int sum(int number) {
    if (number == 0) {
        return 0;
    }

    return number + sum(number - 1);
}
```

What does `sum(4)` return?

Show the sequence of recursive calls.

## SECTION D: Practical Programming Questions

**Question 25: Calculator Functions**

Write a C program that uses separate functions for:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Each function should accept two numbers and return the result.

**Question 26: Maximum Number**

Write a function that accepts three integers and returns the largest.

Call the function from `main()` and display the result.

**Question 27: Student Average**

Write a function that accepts three examination scores and returns their average.

Make sure the calculation uses floating-point division.

**Question 28: Recursive Factorial**

Write a recursive function that calculates the factorial of a non-negative integer.

Include a base case and prevent inputs that exceed the supported range.

**Question 29: Pointer Modification**

Write a function that accepts a pointer to an integer and changes the original variable's value.

Demonstrate the change inside `main()`.

**Question 30: Debugging**

Correct the following program and explain every error:

```c
#include <stdio.h>

int calculate(int a, int b) {
    int result = a + b;
}

int main(void) {
    int answer = calculate(10);

    printf("Answer: %d\n", answer);

    return 0;
}
```

## SECTION E: FINAL PRACTICAL PROJECT

# Project: Student Management System Using Reusable Functions

Build a command-line student management application using the function concepts covered in this lesson.

Your program should support the following operations:

```text
====================================
       STUDENT MANAGEMENT SYSTEM
====================================

1. Register Student
2. Enter Examination Marks
3. Calculate Average
4. Determine Grade
5. Display Student Report
6. Exit

Choose an option:
```

### Functional Requirements

**1. Display Menu**

Create:

```c
void displayMenu(void);
```

This function should display the available options.

**2. Register Student**

Create a function responsible for collecting:

- Student name.
- Age.
- Registration number.

**3. Enter Examination Marks**

Create a function that collects three examination scores.

Validate that each score is between 0 and 100.

**4. Calculate Average**

Create:

```c
float calculateAverage(int mark1, int mark2, int mark3);
```

This function should calculate and return the average.

**5. Determine Grade**

Create:

```c
char calculateGrade(float average);
```

This function should return the appropriate grade.

Use these grading rules:

| Average | Grade |
|---|---|
| 80–100 | A |
| 70–79.99 | B |
| 60–69.99 | C |
| 50–59.99 | D |
| Below 50 | F |

**6. Display Student Report**

Create a function that displays:

- Student name.
- Age.
- Registration number.
- Examination marks.
- Total marks.
- Average.
- Grade.

**7. Main Menu**

The `main()` function should control the application.

Use a loop to keep the program running until the user chooses Exit.

Use `switch` to select the operations.

### Suggested Function Structure

Your program should contain functions similar to:

```c
void displayMenu(void);

void registerStudent(void);

void enterMarks(void);

float calculateAverage(int mark1, int mark2, int mark3);

char calculateGrade(float average);

void displayReport(void);
```

You may modify the function parameters to make your implementation more effective.

### Technical Requirements

- Use meaningful function names.
- Declare function prototypes where needed.
- Use appropriate return types.
- Pass information through parameters.
- Return calculated results.
- Use pointers where appropriate.
- Avoid unnecessary global variables.
- Validate user input.
- Organize your code into manageable functions.
- Compile and test your program.

### Advanced Extension

Once the basic system works, improve it by:

1. Supporting multiple students.
2. Storing student records in an array of structures.
3. Creating a function to search for a student by registration number.
4. Creating a function to display all registered students.
5. Separating declarations and implementations into header and source files.

This extension introduces concepts that will become useful when studying arrays, structures, and file handling.

---

## Submission to Kai

Submit your answers to Questions 1–30 and the complete source code for your Student Management System.

Kai should evaluate:

| Assessment area | Evaluation |
|---|---|
| Function fundamentals | Understanding of declarations, definitions, and calls |
| Parameters and arguments | Correct passing of information |
| Return values | Correct use of return types |
| Scope | Understanding local and file-scope variables |
| Pointers | Ability to modify caller-owned data |
| Recursion | Correct base and recursive cases |
| Reusability | Appropriate separation of program operations |
| Modular design | Effective organization of functions |
| Debugging | Ability to identify and correct function errors |
| Final project | Working implementation of the student system |

## Lesson Completion Checklist

Before moving to the next lesson, make sure you can:

- [ ] Explain what functions are.
- [ ] Create function prototypes.
- [ ] Define and call functions.
- [ ] Use parameters and arguments.
- [ ] Return values from functions.
- [ ] Write `void` functions.
- [ ] Understand the four common function categories.
- [ ] Distinguish local and file-scope variables.
- [ ] Explain how C passes arguments.
- [ ] Use pointers to modify caller-owned variables.
- [ ] Understand recursive functions.
- [ ] Use static local variables.
- [ ] Design reusable program components.
- [ ] Organize code into multiple source files.
- [ ] Build a complete application using functions.

**Part 4 of 4 — Lesson Complete**

**Next recommended lesson: C Programming: Arrays and Strings**