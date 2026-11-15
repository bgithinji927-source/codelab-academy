# C Programming: Variables and Types

## PART 1 OF 4: Understanding Variables and Data Types

### 1. Introduction to Variables

A **variable** is a named storage location in a computer's memory that holds a value while a program is running.

Think of a variable as a labelled container.

For example:
- A container labelled `age` stores someone's age.
- A container labelled `price` stores the price of a product.
- A container labelled `studentName` stores a student's name.

In C, every variable must have a data type. The data type determines what kind of value the variable can store.

Consider this example:

```c
int age = 20;
```

Explanation:

- `int` tells C that the variable will store an integer.
- `age` is the variable's name.
- `=` assigns a value to the variable.
- `20` is the value being stored.
- `;` terminates the statement.

The variable `age` now stores the integer value `20`.

### 2. Declaring Variables

Variable declaration means introducing a variable to the compiler by specifying its data type and name.

General syntax:

```c
data_type variable_name;
```

Example:

```c
int age;
float salary;
char grade;
```

Explanation:

- `int age;` declares an integer variable called `age`.
- `float salary;` declares a floating-point variable called `salary`.
- `char grade;` declares a character variable called `grade`.

At this point, the variables have been declared but have not been assigned values.

Local variables in C are not automatically initialized. Reading an uninitialized local variable produces undefined behavior.

### 3. Initializing Variables

Initialization means giving a variable its first value when it is declared.

Example:

```c
int age = 21;
float height = 1.75f;
char grade = 'A';
```

Explanation:

- `int age = 21;` creates an integer variable and initializes it to `21`.
- `float height = 1.75f;` creates a floating-point variable. The `f` suffix indicates a `float` constant.
- `char grade = 'A';` stores the character `A`.

You can also declare a variable first and assign a value later.

```c
int marks;

marks = 85;
```

The first line declares the variable. The second line assigns it a value.

### 4. Understanding Assignment

The assignment operator `=` stores a value in a variable.

Example:

```c
int number = 10;

number = 25;
```

The first statement stores `10`.

The second statement replaces the existing value with `25`.

If you print `number`, the result will be:

```text
25
```

Important: In C, `=` means assignment, while `==` means comparison.

### 5. Rules for Naming Variables

C has rules that must be followed when naming variables.

| Rule | Explanation | Example |
|---|---|---|
| Use letters | Names can contain letters | `student` |
| Use digits | Digits are allowed after the first character | `student2` |
| No spaces | Spaces are not allowed | `student_name` |
| No special symbols | Most special symbols are not allowed | `total_price` |
| Cannot start with a digit | The first character must be a letter or underscore | `age1` |
| Case-sensitive | Uppercase and lowercase names differ | `Age` and `age` |
| No reserved keywords | C keywords cannot be variable names | `int`, `return` |

Valid names:

```c
int age;
float total_price;
int student2;
char grade;
```

Invalid names:

```c
int 2age;
float total price;
int return;
```

Why are they invalid?

- `2age` begins with a digit.
- `total price` contains a space.
- `return` is a reserved C keyword.

### 6. Understanding Data Types

A data type tells the compiler what kind of data a variable is intended to store.

C has several fundamental data types.

| Data type | Purpose | Example |
|---|---|---|
| `int` | Whole numbers | `25` |
| `float` | Decimal numbers | `12.5f` |
| `double` | Decimal numbers with greater precision than `float` | `12.56789` |
| `char` | A single character | `'A'` |
| `_Bool` | Boolean values: 0 or 1 | `1` |
| `void` | Represents no value | `void display(void)` |

C also supports the Boolean type through the `<stdbool.h>` header in C17.

Example:

```c
#include <stdbool.h>

int main(void) {
    bool isRegistered = true;

    return 0;
}
```

Explanation:

- `#include <stdbool.h>` makes the `bool`, `true`, and `false` names available in C17.
- `bool isRegistered = true;` declares a Boolean variable and initializes it to true.
- `return 0;` indicates successful program termination.

### 7. Understanding Integer Variables

The `int` data type stores whole numbers without decimal fractions.

Example:

```c
int age = 22;
int students = 45;
int temperature = -5;
```

Integers can represent:
- Positive whole numbers.
- Negative whole numbers.
- Zero.

Example program:

```c
#include <stdio.h>

int main(void) {
    int age = 22;

    printf("My age is %d\n", age);

    return 0;
}
```

Line-by-line explanation:

1. `#include <stdio.h>` provides the declaration for `printf()`.
2. `int main(void)` defines the main function, where execution begins.
3. `int age = 22;` creates an integer variable.
4. `printf("My age is %d\n", age);` displays the variable's value.
5. `%d` is the format specifier used for an `int`.
6. `\n` moves the output to a new line.
7. `return 0;` ends the program successfully.

Expected output:

```text
My age is 22
```

### 8. Understanding Float and Double

Both `float` and `double` store floating-point numbers.

A floating-point number contains a fractional component.

Examples:

```c
float price = 150.50f;
double accountBalance = 12500.7589;
```

The main difference is precision and storage requirements.

| Feature | float | double |
|---|---|---|
| Typical storage | 4 bytes | 8 bytes |
| Precision | About 6–7 decimal digits | About 15–16 decimal digits |
| Format specifier in printf | `%f` | `%f` |
| Format specifier in scanf | `%f` | `%lf` |

The storage sizes shown are typical, not guaranteed on every C implementation.

Example:

```c
#include <stdio.h>

int main(void) {
    float price = 150.50f;
    double balance = 12500.7589;

    printf("Price: %.2f\n", price);
    printf("Balance: %.4f\n", balance);

    return 0;
}
```

Explanation:

- `float price = 150.50f;` stores a price as a floating-point value.
- `double balance = 12500.7589;` stores a value using double precision.
- `%.2f` displays two digits after the decimal point.
- `%.4f` displays four digits after the decimal point.

Expected output:

```text
Price: 150.50
Balance: 12500.7589
```

Note: Floating-point values are approximations for many decimal fractions. For applications requiring exact financial decimal arithmetic, additional care or a decimal arithmetic library may be necessary.

### 9. Understanding Character Variables

The `char` data type stores a single character.

Example:

```c
char grade = 'A';
char initial = 'B';
char symbol = '#';
```

Notice that character values use single quotation marks.

```c
char grade = 'A';
```

This is different from:

```c
char grade[] = "A";
```

The first declares a single character. The second declares a character array containing a string.

Example program:

```c
#include <stdio.h>

int main(void) {
    char grade = 'A';

    printf("Your grade is %c\n", grade);

    return 0;
}
```

Explanation:

- `char grade = 'A';` stores one character.
- `%c` tells `printf()` to display a character.
- `grade` supplies the stored character.

Expected output:

```text
Your grade is A
```

### 10. Quick Comparison

| Variable | Data type | Stored value |
|---|---|---|
| `age` | `int` | `20` |
| `price` | `float` | `99.50` |
| `balance` | `double` | `15000.7589` |
| `grade` | `char` | `'A'` |
| `isActive` | `bool` | `true` |

### Part 1 Practice

1. Explain what a variable is.
2. What is the difference between declaration and initialization?
3. Which data type would you use to store someone's age?
4. Which data type would you use to store a product price with decimal places?
5. What is the difference between `float` and `double`?
6. Why does `char grade = 'A';` use single quotation marks?
7. Identify the invalid variable names:
   - `studentName`
   - `2student`
   - `total_marks`
   - `return`
8. What is the difference between `=` and `==`?

**Progress: Part 1 of 4**

---

# PART 2 OF 4: Working with Variables and Types

## 11. Understanding Variable Modification

A variable's value can change while a program is running.

Example:

```c
#include <stdio.h>

int main(void) {
    int score = 50;

    printf("Initial score: %d\n", score);

    score = 75;

    printf("Updated score: %d\n", score);

    return 0;
}
```

Line-by-line explanation:

- `int score = 50;` creates a variable with an initial value of `50`.
- The first `printf()` displays the initial value.
- `score = 75;` replaces the value stored in `score`.
- The second `printf()` displays the updated value.

Expected output:

```text
Initial score: 50
Updated score: 75
```

The variable name remains the same, but its stored value changes.

## 12. Understanding Constants

Sometimes you want a value to remain unchanged throughout a program.

C provides the `const` keyword for this purpose.

Example:

```c
const float PI = 3.14159f;
```

This declares a constant named `PI`.

After initialization, you cannot assign another value to it.

Incorrect:

```c
const int DAYS = 7;

DAYS = 10;
```

This produces a compilation error because the program attempts to modify a constant object.

### Practical Example: Calculating Circle Area

Formula:

Area = π × radius × radius

Program:

```c
#include <stdio.h>

int main(void) {
    const float PI = 3.14159f;
    float radius = 5.0f;

    float area = PI * radius * radius;

    printf("Circle area: %.2f\n", area);

    return 0;
}
```

Line-by-line explanation:

1. `#include <stdio.h>` provides the output function.
2. `int main(void)` defines the main function.
3. `const float PI = 3.14159f;` stores the value of pi as a constant.
4. `float radius = 5.0f;` stores the circle's radius.
5. `float area = PI * radius * radius;` calculates the area.
6. `printf()` displays the result to two decimal places.
7. `return 0;` ends the program successfully.

Expected output:

```text
Circle area: 78.54
```

## 13. Understanding the sizeof Operator

C provides the `sizeof` operator to determine the memory size of a data type or object.

Example:

```c
#include <stdio.h>

int main(void) {
    printf("int: %zu bytes\n", sizeof(int));
    printf("float: %zu bytes\n", sizeof(float));
    printf("double: %zu bytes\n", sizeof(double));
    printf("char: %zu byte\n", sizeof(char));

    return 0;
}
```

Explanation:

- `sizeof(int)` returns the size of an integer.
- `sizeof(float)` returns the size of a float.
- `sizeof(double)` returns the size of a double.
- `sizeof(char)` returns the size of a character.
- `%zu` is the correct format specifier for the `size_t` value returned by `sizeof`.

Typical output on many modern systems:

```text
int: 4 bytes
float: 4 bytes
double: 8 bytes
char: 1 byte
```

Important:

These sizes are common, but C does not require every computer to use exactly these sizes for `int`, `float`, and `double`.

However, `sizeof(char)` is always `1` because C defines a byte as the size of a character unit. A C byte is not necessarily eight bits on every system.

## 14. Understanding Signed and Unsigned Types

Integer types can be signed or unsigned.

A signed integer can represent negative and positive values.

An unsigned integer represents non-negative values only.

Example:

```c
int temperature = -10;
unsigned int students = 50;
```

Explanation:

- `int temperature = -10;` allows a negative number.
- `unsigned int students = 50;` stores a non-negative integer.

Comparison:

| Type | Can store negative values? |
|---|---|
| `int` | Yes |
| `signed int` | Yes |
| `unsigned int` | No |
| `short int` | Yes, unless unsigned |
| `long int` | Yes, unless unsigned |

An unsigned integer can represent a larger positive range than a signed integer of the same width.

Be careful when performing arithmetic with signed and unsigned values together. C's conversion rules can produce surprising results, especially when comparing a negative signed integer with an unsigned integer.

## 15. Other Integer Type Modifiers

C provides additional integer types.

| Data type | Purpose |
|---|---|
| `short int` | Integer type with at least 16 bits |
| `int` | Standard integer type |
| `long int` | Integer type with at least 32 bits |
| `long long int` | Integer type with at least 64 bits |
| `unsigned int` | Non-negative integer type |

Example:

```c
short int smallNumber = 100;
long int population = 5000000L;
long long int distance = 9000000000LL;
```

The suffixes `L` and `LL` indicate the intended integer constant types.

Actual sizes depend on the implementation.

## 16. Understanding Type Conversion

Type conversion means changing a value from one data type to another.

There are two main categories:

1. Implicit conversion.
2. Explicit conversion.

### A. Implicit Conversion

Implicit conversion happens automatically when C converts one type into another.

Example:

```c
int number = 10;
float result = number;
```

Explanation:

- `number` is an integer containing `10`.
- `result` is a float.
- C automatically converts the integer value into a floating-point value when assigning it to `result`.

The resulting value is `10.0`.

### B. Explicit Conversion (Type Casting)

Type casting means manually specifying the type you want a value converted into.

Example:

```c
#include <stdio.h>

int main(void) {
    int total = 5;
    int count = 2;

    float average = (float) total / count;

    printf("Average: %.2f\n", average);

    return 0;
}
```

Line-by-line explanation:

- `int total = 5;` stores the total.
- `int count = 2;` stores the number of items.
- `(float) total` converts `total` into a floating-point value.
- The division is therefore performed using floating-point arithmetic.
- `printf()` displays the result with two decimal places.

Expected output:

```text
Average: 2.50
```

Why is casting important?

Consider:

```c
int result = 5 / 2;
```

The result is:

```text
2
```

Both operands are integers, so C performs integer division and discards the fractional part.

Now consider:

```c
float result = (float) 5 / 2;
```

The result is:

```text
2.50
```

Casting one operand to `float` makes the division floating-point division.

## 17. Understanding Arithmetic with Variables

Variables can be used in mathematical calculations.

Common arithmetic operators:

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication | `a * b` |
| `/` | Division | `a / b` |
| `%` | Remainder | `a % b` |

Example:

```c
#include <stdio.h>

int main(void) {
    int a = 20;
    int b = 6;

    printf("Addition: %d\n", a + b);
    printf("Subtraction: %d\n", a - b);
    printf("Multiplication: %d\n", a * b);
    printf("Division: %d\n", a / b);
    printf("Remainder: %d\n", a % b);

    return 0;
}
```

Explanation:

- `a` stores `20`.
- `b` stores `6`.
- `a + b` calculates `26`.
- `a - b` calculates `14`.
- `a * b` calculates `120`.
- `a / b` calculates `3` because both operands are integers.
- `a % b` calculates `2`, the remainder after dividing `20` by `6`.

Expected output:

```text
Addition: 26
Subtraction: 14
Multiplication: 120
Division: 3
Remainder: 2
```

The remainder operator `%` works with integer operands, not floating-point operands.

## 18. Increment and Decrement Operators

C provides operators for increasing or decreasing a variable by one.

Increment:

```c
number++;
```

Decrement:

```c
number--;
```

Example:

```c
#include <stdio.h>

int main(void) {
    int number = 5;

    number++;
    printf("After increment: %d\n", number);

    number--;
    printf("After decrement: %d\n", number);

    return 0;
}
```

Explanation:

- The variable begins at `5`.
- `number++` increases it to `6`.
- `number--` decreases it back to `5`.

Expected output:

```text
After increment: 6
After decrement: 5
```

There are also prefix and postfix forms.

```c
++number;
number++;
```

Both increase the variable by one when used as standalone statements.

However, their difference matters when used inside larger expressions:

- `++number` increments before producing the expression's value.
- `number++` produces the old value and then increments.

Avoid complicated expressions that modify the same variable multiple times. They can make code difficult to understand and may introduce undefined behavior.

## 19. Understanding Format Specifiers

Format specifiers tell `printf()` how to display values and tell `scanf()` how to read them.

Common format specifiers:

| Format specifier | Data type / purpose |
|---|---|
| `%d` | `int` |
| `%i` | Integer conversion |
| `%u` | `unsigned int` |
| `%f` | Floating-point output |
| `%lf` | `double` input with `scanf()` |
| `%c` | Character |
| `%s` | String |
| `%ld` | `long int` |
| `%lld` | `long long int` |
| `%zu` | `size_t` |

Important distinction:

For `printf()`, `%f` is used for both `float` values (which are promoted to `double`) and `double` values.

For `scanf()`:
- Use `%f` with a `float *`.
- Use `%lf` with a `double *`.

Example:

```c
float price = 99.50f;
double balance = 1500.75;

printf("%f\n", price);
printf("%f\n", balance);
```

Both values can be displayed using `%f`.

## 20. Common Mistakes When Working with Variables

### Mistake 1: Using an undeclared variable

Incorrect:

```c
age = 20;
```

Correct:

```c
int age = 20;
```

Why?

C needs to know the variable's type before it can use it.

### Mistake 2: Using the wrong format specifier

Incorrect:

```c
float price = 50.5f;

printf("%d", price);
```

Correct:

```c
printf("%f", price);
```

Why?

`%d` is intended for an integer, while `%f` is used for floating-point output. A mismatched format specifier can cause undefined behavior.

### Mistake 3: Forgetting the semicolon

Incorrect:

```c
int age = 20
```

Correct:

```c
int age = 20;
```

Why?

C statements generally require semicolons to mark their endings.

### Mistake 4: Confusing character and string values

Incorrect:

```c
char grade = "A";
```

Correct:

```c
char grade = 'A';
```

Why?

A single character uses single quotation marks. A string literal uses double quotation marks.

### Mistake 5: Forgetting integer division

Incorrect if you expect a decimal result:

```c
float average = 5 / 2;
```

Correct:

```c
float average = (float) 5 / 2;
```

Why?

The first expression performs integer division before assigning the result to the float.

### Part 2 Practice

1. What is the purpose of the `const` keyword?
2. What does the `sizeof` operator do?
3. Explain the difference between signed and unsigned integers.
4. What is implicit conversion?
5. What is explicit type casting?
6. Why does `5 / 2` produce `2` when both operands are integers?
7. What is the difference between `++number` and `number++`?
8. Which format specifier should be used to display a `long long int`?
9. Why should uninitialized local variables be avoided?
10. What is the difference between `%f` and `%lf` when using `scanf()`?

**Progress: Part 2 of 4**

---

# PART 3 OF 4: Practical Programming with Variables and Types

In this section, you will create actual C programs that use variables to solve everyday problems.

## 21. Setting Up Your C Project

Create a folder called:

```text
C_Variables_Project
```

Inside it, create a file:

```text
main.c
```

Open the folder using your preferred code editor.

You can use:
- Visual Studio Code.
- Code::Blocks.
- CLion.
- Another C-compatible editor.

Make sure GCC or another C compiler is installed.

For GCC, compile your program using:

```bash
gcc -std=c17 -Wall -Wextra -pedantic main.c -o main
```

This command:

- `gcc` runs the compiler.
- `-std=c17` selects the C17 standard.
- `-Wall` enables many useful warnings.
- `-Wextra` enables additional warnings.
- `-pedantic` requests stricter standard conformance diagnostics.
- `main.c` is the source file.
- `-o main` names the resulting executable `main`.

Run it on Linux or macOS:

```bash
./main
```

On Windows, the executable will commonly be:

```bash
main.exe
```

Run it in PowerShell:

```powershell
.\main.exe
```

## 22. Practical Project 1: Student Information Program

### Objective

Create a program that stores and displays a student's information.

We will use:
- `int` for age.
- `float` for height.
- `char` for grade.

Code:

```c
#include <stdio.h>

int main(void) {
    int age = 21;
    float height = 1.72f;
    char grade = 'A';

    printf("STUDENT INFORMATION\n");
    printf("-------------------\n");

    printf("Age: %d years\n", age);
    printf("Height: %.2f metres\n", height);
    printf("Grade: %c\n", grade);

    return 0;
}
```

### Line-by-line explanation

**Line 1**

```c
#include <stdio.h>
```

Provides the declaration for `printf()`.

**Line 2**

```c
int main(void) {
```

Defines the main function. Program execution begins here.

**Line 3**

```c
int age = 21;
```

Creates an integer variable to store the student's age.

**Line 4**

```c
float height = 1.72f;
```

Creates a floating-point variable for the student's height.

**Line 5**

```c
char grade = 'A';
```

Creates a character variable to store the grade.

**Line 6**

```c
printf("STUDENT INFORMATION\n");
```

Displays the program heading.

**Line 7**

```c
printf("-------------------\n");
```

Displays a separator.

**Line 8**

```c
printf("Age: %d years\n", age);
```

Displays the student's age. `%d` represents the integer value.

**Line 9**

```c
printf("Height: %.2f metres\n", height);
```

Displays the height with two digits after the decimal point.

**Line 10**

```c
printf("Grade: %c\n", grade);
```

Displays the student's grade using `%c`.

**Line 11**

```c
return 0;
```

Indicates that the program completed successfully.

Expected output:

```text
STUDENT INFORMATION
-------------------
Age: 21 years
Height: 1.72 metres
Grade: A
```

### What you have learned

You have used three different data types in one program.

You have also learned that one program can store several types of information at the same time.

---

## 23. Practical Project 2: User Input and Variables

So far, we have assigned values directly inside our programs.

Real applications need to receive information from users.

C provides `scanf()` for formatted input.

Example:

```c
#include <stdio.h>

int main(void) {
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("You are %d years old.\n", age);

    return 0;
}
```

### Line-by-line explanation

**Line 1**

```c
#include <stdio.h>
```

Provides the declarations for `printf()` and `scanf()`.

**Line 2**

```c
int main(void) {
```

Defines the main function.

**Line 3**

```c
int age;
```

Declares an integer variable to hold the user's age.

**Line 4**

```c
printf("Enter your age: ");
```

Displays a message asking the user to enter their age.

**Line 5**

```c
scanf("%d", &age);
```

Reads an integer from the keyboard.

Important:
- `%d` tells `scanf()` to read an integer.
- `&age` gives `scanf()` the memory address where the input should be stored.
- The `&` operator is called the address-of operator.

**Line 6**

```c
printf("You are %d years old.\n", age);
```

Displays the value entered by the user.

Expected interaction:

```text
Enter your age: 22
You are 22 years old.
```

### Why do we use `&` with scanf()?

Consider:

```c
scanf("%d", &age);
```

The function needs to know where to store the value it reads.

`&age` provides the memory address of the variable.

Without the address, the function would not receive the correct pointer argument.

---

## 24. Practical Project 3: Reading Different Data Types

Let's create a program that accepts a student's details.

Code:

```c
#include <stdio.h>

int main(void) {
    int age;
    float marks;
    char grade;

    printf("Enter your age: ");

    if (scanf("%d", &age) != 1) {
        printf("Invalid age.\n");
        return 1;
    }

    printf("Enter your marks: ");

    if (scanf("%f", &marks) != 1) {
        printf("Invalid marks.\n");
        return 1;
    }

    printf("Enter your grade: ");

    if (scanf(" %c", &grade) != 1) {
        printf("Invalid grade.\n");
        return 1;
    }

    printf("\nSTUDENT DETAILS\n");
    printf("Age: %d\n", age);
    printf("Marks: %.2f\n", marks);
    printf("Grade: %c\n", grade);

    return 0;
}
```

### Understanding the program

First, we declare three variables:

```c
int age;
float marks;
char grade;
```

Each variable has a different purpose.

Next:

```c
if (scanf("%d", &age) != 1)
```

This checks whether `scanf()` successfully converted one input value.

If the user enters something that is not a valid integer, the conversion fails and the program displays an error.

For marks:

```c
scanf("%f", &marks)
```

The `%f` specifier reads a `float`.

For grade:

```c
scanf(" %c", &grade)
```

Notice the space before `%c`.

This tells `scanf()` to skip leading whitespace, including the newline left behind after previous input.

Without that space, `%c` could read the leftover newline instead of the character the user intended to enter.

### Expected interaction

```text
Enter your age: 21
Enter your marks: 87.5
Enter your grade: A

STUDENT DETAILS
Age: 21
Marks: 87.50
Grade: A
```

### Important limitation

This example checks whether each input conversion succeeds, but it does not validate whether the values make sense.

For example, an age of `-5` can be read successfully as an integer.

A real system should also check valid ranges.

---

## 25. Practical Project 4: Simple Shopping Calculator

### Objective

Create a program that calculates the total price of purchased items.

Suppose a customer buys:
- 3 notebooks at KSh 50 each.
- 2 pens at KSh 20 each.

We want to calculate the total cost.

Code:

```c
#include <stdio.h>

int main(void) {
    int notebooks = 3;
    int pens = 2;

    float notebookPrice = 50.0f;
    float penPrice = 20.0f;

    float notebookTotal = notebooks * notebookPrice;
    float penTotal = pens * penPrice;

    float total = notebookTotal + penTotal;

    printf("SHOPPING RECEIPT\n");
    printf("----------------\n");

    printf("Notebooks: KSh %.2f\n", notebookTotal);
    printf("Pens: KSh %.2f\n", penTotal);
    printf("Total: KSh %.2f\n", total);

    return 0;
}
```

### Line-by-line explanation

```c
int notebooks = 3;
int pens = 2;
```

These variables store the quantities purchased.

```c
float notebookPrice = 50.0f;
float penPrice = 20.0f;
```

These variables store the unit prices.

```c
float notebookTotal = notebooks * notebookPrice;
```

Calculates the total price of notebooks.

3 × 50 = 150.

```c
float penTotal = pens * penPrice;
```

Calculates the total price of pens.

2 × 20 = 40.

```c
float total = notebookTotal + penTotal;
```

Adds both subtotals.

150 + 40 = 190.

The remaining statements display the receipt.

Expected output:

```text
SHOPPING RECEIPT
----------------
Notebooks: KSh 150.00
Pens: KSh 40.00
Total: KSh 190.00
```

Note: This example uses `float` to teach data types. For a production financial application, consider storing money in integer minor units, such as cents, or using a suitable decimal arithmetic approach to avoid floating-point rounding issues.

---

## 26. Practical Project 5: Temperature Converter

### Objective

Create a program that converts a temperature from Celsius to Fahrenheit.

Formula:

Fahrenheit = (Celsius × 9 / 5) + 32

Code:

```c
#include <stdio.h>

int main(void) {
    float celsius;
    float fahrenheit;

    printf("Enter temperature in Celsius: ");

    if (scanf("%f", &celsius) != 1) {
        printf("Invalid temperature.\n");
        return 1;
    }

    fahrenheit = (celsius * 9.0f / 5.0f) + 32.0f;

    printf("Temperature in Fahrenheit: %.2f\n", fahrenheit);

    return 0;
}
```

### Explanation

```c
float celsius;
float fahrenheit;
```

We declare two floating-point variables.

```c
scanf("%f", &celsius)
```

Reads the Celsius temperature from the user.

```c
fahrenheit = (celsius * 9.0f / 5.0f) + 32.0f;
```

Performs the conversion.

We use `9.0f` and `5.0f` to make the calculation use floating-point arithmetic.

Expected interaction:

```text
Enter temperature in Celsius: 25
Temperature in Fahrenheit: 77.00
```

---

## 27. Practical Project 6: Understanding Type Casting

Let's build a program that calculates the average of three examination scores.

Code:

```c
#include <stdio.h>

int main(void) {
    int score1 = 75;
    int score2 = 82;
    int score3 = 91;

    int total = score1 + score2 + score3;

    float average = (float) total / 3;

    printf("Total marks: %d\n", total);
    printf("Average marks: %.2f\n", average);

    return 0;
}
```

### Explanation

The first three variables store examination scores.

```c
int total = score1 + score2 + score3;
```

Adds all three scores.

75 + 82 + 91 = 248.

```c
float average = (float) total / 3;
```

Converts `total` into a float before dividing it by `3`.

Without the cast, integer division would discard the fractional part.

Expected output:

```text
Total marks: 248
Average marks: 82.67
```

---

## 28. Debugging Practice

A programmer writes the following program:

```c
#include <stdio.h>

int main(void) {
    int age = 20;
    float height = 1.75f;

    printf("Age: %f\n", age);
    printf("Height: %d\n", height);

    return 0;
}
```

### What is wrong?

The format specifiers do not match the argument types.

- `age` is an integer, but `%f` expects a floating-point argument.
- `height` is a float, but `%d` expects an integer.

Corrected version:

```c
#include <stdio.h>

int main(void) {
    int age = 20;
    float height = 1.75f;

    printf("Age: %d\n", age);
    printf("Height: %.2f\n", height);

    return 0;
}
```

Correct output:

```text
Age: 20
Height: 1.75
```

### Why debugging matters

A program can contain syntax errors, type-related mistakes, and logical errors.

A good programmer does not only write code. They also inspect, test, and correct it.

---

## 29. Part 3 Independent Exercises

Complete these exercises in your own `main.c` files.

### Exercise 1: Personal Information

Create a program that declares and displays:
- Your age.
- Your height.
- Your first initial.
- Your course name as a string.

Use appropriate data types.

Hint: A course name requires a character array, not a single `char`.

### Exercise 2: Rectangle Calculator

Create a program that stores:
- Rectangle length.
- Rectangle width.

Calculate:

Area = length × width

Perimeter = 2 × (length + width)

Display both results.

### Exercise 3: Simple Salary Calculator

Declare:
- Basic salary.
- Allowance.
- Deduction.

Calculate:

Net salary = Basic salary + Allowance − Deduction

Display the final salary.

### Exercise 4: Type Conversion

Create a program that:
1. Declares two integer variables.
2. Stores `17` and `4`.
3. Calculates integer division.
4. Calculates floating-point division using type casting.
5. Displays both results.

### Exercise 5: Debug the Program

Correct the following code:

```c
#include <stdio.h>

int main(void) {
    int age = 25;
    float salary = 45000.50f;
    char grade = 'B';

    printf("Age: %f\n", age);
    printf("Salary: %d\n", salary);
    printf("Grade: %d\n", grade);

    return 0;
}
```

Identify every incorrect format specifier and replace it with the correct one.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## C Programming: Variables and Types

Welcome to your assessment.

Kai will evaluate your understanding of variables, data types, declarations, initialization, constants, type conversion, operators, and practical programming.

Answer each question carefully. Do not guess where you can explain your reasoning.

## Section A: Multiple Choice Questions

**Question 1**

What is a variable in C?

A. A function that executes a program  
B. A named storage location used to hold a value  
C. A compiler instruction  
D. A programming language

**Question 2**

Which data type is appropriate for storing a whole number?

A. `float`  
B. `char`  
C. `int`  
D. `void`

**Question 3**

Which data type stores a single character?

A. `int`  
B. `char`  
C. `double`  
D. `float`

**Question 4**

What does the `const` keyword do?

A. Deletes a variable  
B. Makes a variable name invalid  
C. Declares an object that cannot be modified through that identifier  
D. Converts a variable into an integer

**Question 5**

Which is a valid variable declaration?

A. `int 2age;`  
B. `float total price;`  
C. `char grade = 'A';`  
D. `int return;`

**Question 6**

What is the output of this code?

```c
int number = 10;
number = 20;

printf("%d", number);
```

A. 10  
B. 20  
C. 30  
D. Compilation error

**Question 7**

Which format specifier is used to display an integer?

A. `%f`  
B. `%c`  
C. `%d`  
D. `%s`

**Question 8**

What is the result of `5 / 2` when both operands are integers?

A. 2.5  
B. 3  
C. 2  
D. 0

**Question 9**

Which operator gives the remainder of integer division?

A. `/`  
B. `%`  
C. `*`  
D. `+`

**Question 10**

What does `sizeof(int)` return?

A. The value of an integer variable  
B. The number of variables in a program  
C. The size of the integer type in bytes  
D. The maximum integer value

## Section B: Short Answer Questions

**Question 11**

Explain the difference between:
- Variable declaration.
- Variable initialization.
- Variable assignment.

Give one code example for each.

**Question 12**

Explain the difference between `float` and `double`.

**Question 13**

What is the difference between signed and unsigned integers?

**Question 14**

Explain implicit and explicit type conversion. Include a C example of each.

**Question 15**

Why does the following statement use `&`?

```c
scanf("%d", &age);
```

**Question 16**

What is the difference between the following?

```c
char grade = 'A';
```

```c
char grade[] = "A";
```

## Section C: Predict the Output

**Question 17**

Study the program:

```c
#include <stdio.h>

int main(void) {
    int a = 15;
    int b = 4;

    printf("%d\n", a + b);
    printf("%d\n", a / b);
    printf("%d\n", a % b);

    return 0;
}
```

Write the exact output and explain each result.

**Question 18**

Study the program:

```c
#include <stdio.h>

int main(void) {
    float price = 125.50f;
    int quantity = 2;

    float total = price * quantity;

    printf("%.2f\n", total);

    return 0;
}
```

What will the program display? Explain how the result is calculated.

**Question 19**

What is the output?

```c
#include <stdio.h>

int main(void) {
    int number = 8;

    printf("%d\n", number++);

    printf("%d\n", number);

    return 0;
}
```

Explain the behavior of the postfix increment operator.

## Section D: Practical Programming

**Question 20: Personal Information Program**

Write a complete C program that declares and displays:
- Student name.
- Age.
- Course.
- Grade.

Use suitable data types.

**Question 21: Shopping Calculator**

Write a program that:
1. Stores the price of one item.
2. Stores the quantity purchased.
3. Calculates the total cost.
4. Displays the result to two decimal places.

**Question 22: Average Calculator**

Write a program that accepts three integer examination scores from a user and calculates their average as a floating-point value.

Your program must avoid integer division.

**Question 23: Debugging Challenge**

Correct the following program and explain the mistakes:

```c
#include <stdio.h>

int main(void) {
    int age = 20;
    float height = 1.80f;
    char grade = "A";

    printf("Age: %f\n", age);
    printf("Height: %d\n", height);
    printf("Grade: %c\n", grade);

    return 0;
}
```

## Section E: Final Practical Challenge

### Project: Student Results Management Program

Build a small C program that records and displays a student's examination information.

Your program must:

1. Declare a character array for the student's name.
2. Declare an integer variable for age.
3. Declare three integer variables for examination scores.
4. Calculate the total marks.
5. Calculate the average using floating-point division.
6. Declare a character variable for the grade.
7. Display a formatted student report.

Example output:

```text
================================
       STUDENT RESULTS
================================

Student Name: Brian
Age: 21

Mathematics: 80
Programming: 90
Database: 85

Total Marks: 255
Average: 85.00
Grade: A

================================
```

Requirements:

- Use meaningful variable names.
- Choose suitable data types.
- Use appropriate format specifiers.
- Use `fgets()` to read the student's name safely.
- Check whether numeric input conversions succeed.
- Include comments explaining important sections.
- Compile and run your program.
- Test it with different student records.

### Hints

For the student's name:

```c
char name[100];
```

To read a line of text:

```c
fgets(name, sizeof(name), stdin);
```

For calculating the average:

```c
float average = (float) total / 3;
```

For displaying the average:

```c
printf("Average: %.2f\n", average);
```

Remember that `fgets()` may store the newline character if there is enough space. You can remove it using `strcspn()` from `<string.h>`.

## Submission to Kai

When you finish, submit your answers and source code to Kai for assessment.

Kai should evaluate:

| Assessment area | What Kai checks |
|---|---|
| Understanding | Knowledge of variables and data types |
| Syntax | Correct C declarations and statements |
| Data types | Appropriate selection of types |
| Type conversion | Correct use of casting |
| Input and output | Correct use of `scanf()` and `printf()` |
| Calculations | Correct mathematical operations |
| Debugging | Ability to identify and correct errors |
| Practical project | Whether the program meets the requirements |

### Lesson Completion Checklist

Before moving to the next lesson, make sure you can:

- [ ] Explain what variables are.
- [ ] Declare and initialize variables.
- [ ] Choose appropriate C data types.
- [ ] Use `int`, `float`, `double`, and `char`.
- [ ] Declare constants using `const`.
- [ ] Understand signed and unsigned integers.
- [ ] Use the `sizeof` operator.
- [ ] Perform implicit and explicit type conversions.
- [ ] Use arithmetic operators with variables.
- [ ] Use correct format specifiers.
- [ ] Accept user input and display results.
- [ ] Build and debug a complete C program.

**Part 4 of 4 — Lesson Complete**

**Next recommended lesson: C Programming: Operators and Expressions**