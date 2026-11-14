# C++: Variables and Data Types

## Learning Objectives

By the end of this lesson, you should be able to:

1. Explain what variables are and why programs need them.
2. Declare, initialize, and update variables in C++.
3. Identify and use common C++ data types.
4. Understand the difference between integers, floating-point numbers, characters, strings, and Boolean values.
5. Apply type conversion and type casting.
6. Use constants to store values that should not change.
7. Identify common variable and data-type errors.
8. Build a practical C++ program that stores and processes information.

# PART 1 OF 4: UNDERSTANDING VARIABLES

## 1. What Is a Variable?

A variable is a named storage location in a computer program that holds a value.

Think of a variable as a labelled container.

For example, imagine a student registration system. The system needs to store:

- Student's name.
- Student's age.
- Course name.
- Examination marks.
- Whether the student has paid fees.

Instead of writing these values repeatedly throughout the program, we store them in variables.

Example:

```cpp
int age = 22;
```

This statement creates a variable called `age` and stores the value `22` inside it.

Let's understand each part:

| Component | Meaning |
|---|---|
| `int` | Specifies the type of information to store. |
| `age` | The variable's name. |
| `=` | Assignment operator. |
| `22` | The value being stored. |
| `;` | Ends the statement. |

The computer can retrieve the value whenever the program needs it.

## 2. Why Do Programs Need Variables?

Variables make programs useful because they allow applications to work with changing information.

Consider a banking application.

A bank account balance can change whenever someone deposits or withdraws money.

Without variables, the application would struggle to maintain the current balance.

Example:

```cpp
double balance = 5000.0;

balance = balance + 1000.0;

std::cout << balance;
```

Explanation:

**Line 1:**
```cpp
double balance = 5000.0;
```
Creates a variable called `balance` and stores 5,000.0 in it.

We use `double` because money calculations may involve decimal values.

**Line 2:**
```cpp
balance = balance + 1000.0;
```
Adds 1,000 to the existing balance.

The original balance was 5,000, so the new balance becomes 6,000.

**Line 3:**
```cpp
std::cout << balance;
```
Displays the updated balance.

Expected output:

```text
6000
```

This demonstrates how variables allow programs to maintain and update information.

## 3. Declaring Variables

Variable declaration means introducing a variable to the program by specifying its data type and name.

General syntax:

```cpp
data_type variable_name;
```

Example:

```cpp
int age;
double salary;
char grade;
```

Here:

- `age` is an integer variable.
- `salary` is a decimal-number variable.
- `grade` is a character variable.

These declarations create variables, but they do not explicitly assign initial values.

You can assign values later:

```cpp
age = 22;
salary = 45000.50;
grade = 'A';
```

A variable can also be declared and initialized in one statement.

```cpp
int age = 22;
double salary = 45000.50;
char grade = 'A';
```

This is often the preferred approach because it gives variables meaningful initial values.

## 4. Understanding Initialization

Initialization means giving a variable its first value when it is created.

C++ supports several initialization styles.

### A. Copy Initialization

```cpp
int age = 22;
```

The value `22` is assigned to `age` during initialization.

### B. Direct Initialization

```cpp
int age(22);
```

The variable is initialized using parentheses.

### C. Brace Initialization

```cpp
int age{22};
```

This uses curly braces.

Brace initialization is particularly useful because it prevents certain unintended conversions.

For example:

```cpp
int age{22.5};
```

This produces a compilation error because a decimal value cannot be safely converted to an integer through this form of initialization.

The compiler helps prevent accidental loss of information.

**Recommendation:** Prefer brace initialization when practical.

## 5. Updating Variables

After creating a variable, you can change its value.

Example:

```cpp
int score = 50;

score = 75;

std::cout << score;
```

The first statement creates `score` with a value of 50.

The second statement replaces the previous value with 75.

The third statement displays the new value.

Output:

```text
75
```

You can also update variables using arithmetic operators.

```cpp
int score = 50;

score += 10;
score -= 5;
score *= 2;
```

The operators mean:

| Expression | Meaning |
|---|---|
| `score += 10` | Add 10 to the current value. |
| `score -= 5` | Subtract 5 from the current value. |
| `score *= 2` | Multiply the current value by 2. |
| `score /= 2` | Divide the current value by 2. |

For the example above:

- Initial score: 50
- After adding 10: 60
- After subtracting 5: 55
- After multiplying by 2: 110

The final value is 110.

## 6. Rules for Naming Variables

C++ has rules that determine valid variable names.

### Valid variable names

```cpp
int age;
int studentAge;
int total_marks;
int number1;
```

### Invalid variable names

```cpp
int 1number;
int student age;
int class;
```

Why are they invalid?

- `1number` starts with a digit.
- `student age` contains a space.
- `class` is a reserved C++ keyword.

### Important naming rules

1. A variable name must begin with a letter or underscore.
2. It cannot begin with a number.
3. It cannot contain spaces.
4. It cannot be a reserved C++ keyword.
5. Variable names are case-sensitive.
6. Meaningful names make programs easier to understand.

For example:

```cpp
int studentAge = 22;
int studentMarks = 85;
```

These names communicate their purpose more clearly than:

```cpp
int x = 22;
int y = 85;
```

## 7. Case Sensitivity

C++ distinguishes between uppercase and lowercase letters.

Consider:

```cpp
int age = 20;

int Age = 25;

int AGE = 30;
```

These are three different variables.

Their names are not interchangeable.

This means:

```cpp
std::cout << age;
```

Displays 20, while:

```cpp
std::cout << Age;
```

Displays 25.

## 8. Variables in Real Applications

Variables are used in almost every software application.

| Application | Example variables |
|---|---|
| Banking system | `accountBalance`, `accountNumber` |
| School management | `studentName`, `studentMarks` |
| E-commerce | `productPrice`, `quantity` |
| Hospital system | `patientName`, `patientAge` |
| Authentication | `username`, `isLoggedIn` |
| Inventory system | `productCode`, `stockQuantity` |

A software developer chooses appropriate variable names and types based on the information the application needs to process.

### Part 1 Knowledge Check

1. What is a variable?
2. Why do programs need variables?
3. What does `int age = 22;` mean?
4. What is the difference between declaring and initializing a variable?
5. Why is `studentAge` a better variable name than `x`?
6. What happens when you assign a new value to an existing variable?
7. Why are `age` and `Age` different in C++?

**Progress: Part 1 of 4**

---

# PART 2 OF 4: UNDERSTANDING C++ DATA TYPES

## 1. What Is a Data Type?

A data type tells C++ what kind of value a variable is expected to store.

Different types of information require different data types.

For example:

- Age is usually stored as a whole number.
- Salary may contain decimal values.
- A student's first initial can be stored as a character.
- A student's name requires text.
- A login status can be represented using true or false.

C++ provides several built-in data types for handling these values.

## 2. Main C++ Data Types

The most commonly used fundamental data types include:

| Data type | Purpose | Example |
|---|---|---|
| `int` | Whole numbers | `25` |
| `float` | Decimal numbers | `12.5f` |
| `double` | Decimal numbers with greater precision than `float` | `1250.75` |
| `char` | A single character | `'A'` |
| `bool` | True or false | `true` |
| `void` | Represents the absence of a value | `void display()` |

C++ also provides several integer variations and other types that you will encounter as you progress.

Let's examine the important ones.

## 3. Integer Type (`int`)

The `int` data type stores whole numbers without decimal portions.

Examples:

```cpp
int age = 22;
int students = 45;
int temperature = -5;
```

Explanation:

- `age` stores 22.
- `students` stores 45.
- `temperature` stores -5.

Integers can be positive, negative, or zero.

They cannot directly represent fractional values.

Example:

```cpp
int price = 150;
```

This is valid.

However:

```cpp
int price = 150.75;
```

The compiler permits this particular assignment but converts the value to an integer, discarding the fractional portion.

The resulting value is:

```text
150
```

This is called a narrowing conversion.

To avoid accidental loss of information, use brace initialization:

```cpp
int price{150.75};
```

This produces a compilation error.

**When should you use `int`?**

Use it for values such as:

- Age in completed years.
- Number of students.
- Quantity of products.
- Number of attempts.
- Number of items in a collection.

## 4. Floating-Point Type (`float`)

The `float` type stores numbers that contain decimal portions.

Example:

```cpp
float height = 1.75f;
```

The value `1.75f` is a floating-point number.

The `f` suffix indicates that the literal is a `float`.

Another example:

```cpp
float temperature = 36.5f;

std::cout << temperature;
```

Output:

```text
36.5
```

A `float` typically provides about 6–7 decimal digits of precision.

It is useful when a program needs decimal values but does not require the additional precision offered by `double`.

## 5. Double Type (`double`)

The `double` type also stores decimal numbers.

However, it normally provides more precision than `float`.

Example:

```cpp
double accountBalance = 15000.75;
```

Here, `accountBalance` stores a decimal value.

A practical example:

```cpp
#include <iostream>

int main() {
    double price = 250.50;
    double quantity = 4;

    double total = price * quantity;

    std::cout << total;

    return 0;
}
```

Let's examine the logic.

**Line 1:**
```cpp
#include <iostream>
```
Includes the input/output library so the program can display information.

**Line 2:**
```cpp
int main() {
```
Defines the main function where execution begins.

**Line 3:**
```cpp
double price = 250.50;
```
Stores the price of one product.

**Line 4:**
```cpp
double quantity = 4;
```
Stores the number of products being purchased.

**Line 5:**
```cpp
double total = price * quantity;
```
Multiplies the price by the quantity.

The calculation is:

250.50 × 4 = 1002.00

**Line 6:**
```cpp
std::cout << total;
```
Displays the calculated amount.

**Line 7:**
```cpp
return 0;
```
Indicates that the program completed successfully.

Expected output:

```text
1002
```

For financial applications requiring exact decimal arithmetic, consider using integer-based minor units or an appropriate decimal library. Binary floating-point types such as `float` and `double` cannot represent every decimal fraction exactly.

## 6. Character Type (`char`)

The `char` type stores a single character.

Examples:

```cpp
char grade = 'A';
char gender = 'M';
char symbol = '#';
```

Notice that character values use single quotation marks.

Correct:

```cpp
char grade = 'A';
```

Incorrect:

```cpp
char grade = "A";
```

Double quotation marks represent string literals rather than individual character literals.

A character can represent:

- A letter.
- A digit character.
- A punctuation symbol.
- A special character.

For example:

```cpp
char letter = 'B';

std::cout << letter;
```

Output:

```text
B
```

**Important:** A character containing the digit `'5'` is different from the integer `5`.

```cpp
char numberCharacter = '5';
int number = 5;
```

The first stores a character. The second stores a numeric value.

## 7. Boolean Type (`bool`)

The `bool` data type stores only two logical values:

- `true`
- `false`

Example:

```cpp
bool isLoggedIn = true;
bool hasPaidFees = false;
```

These variables can represent conditions in applications.

For example:

```cpp
#include <iostream>

int main() {
    bool isLoggedIn = true;

    std::cout << std::boolalpha << isLoggedIn;

    return 0;
}
```

Output:

```text
true
```

The `std::boolalpha` manipulator tells the output stream to display Boolean values as `true` or `false` rather than `1` or `0`.

Without `std::boolalpha`, the default output is normally:

```text
1
```

for `true`, and:

```text
0
```

for `false`.

### Practical applications of Boolean variables

```cpp
bool isAdmin = false;
bool isAvailable = true;
bool paymentCompleted = false;
```

These values can help determine what actions an application should allow.

## 8. String Type (`std::string`)

A string stores a sequence of characters, such as a name, sentence, or address.

To use `std::string`, include the string library.

Example:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string studentName = "Brian";

    std::cout << studentName;

    return 0;
}
```

Explanation:

```cpp
#include <string>
```

Includes the standard string library.

```cpp
std::string studentName = "Brian";
```

Creates a string variable called `studentName` and stores the text `"Brian"`.

```cpp
std::cout << studentName;
```

Displays the stored text.

Output:

```text
Brian
```

Strings use double quotation marks.

You can also store complete sentences:

```cpp
std::string message = "Welcome to C++ programming";
```

### Combining strings

C++ allows you to combine strings using the `+` operator.

Example:

```cpp
std::string firstName = "Brian";
std::string lastName = "Njogu";

std::string fullName = firstName + " " + lastName;

std::cout << fullName;
```

Explanation:

1. `firstName` stores `"Brian"`.
2. `lastName` stores `"Njogu"`.
3. `" "` represents a space.
4. The `+` operator joins the three pieces of text.
5. The combined result is stored in `fullName`.

Output:

```text
Brian Njogu
```

## 9. Understanding Data Type Sizes

Different data types normally occupy different amounts of memory.

You can investigate their sizes using the `sizeof` operator.

Example:

```cpp
#include <iostream>

int main() {
    std::cout << "Integer: " << sizeof(int) << " bytes\n";
    std::cout << "Float: " << sizeof(float) << " bytes\n";
    std::cout << "Double: " << sizeof(double) << " bytes\n";
    std::cout << "Character: " << sizeof(char) << " bytes\n";
    std::cout << "Boolean: " << sizeof(bool) << " bytes\n";

    return 0;
}
```

Explanation:

- `sizeof(int)` returns the size of an integer.
- `sizeof(float)` returns the size of a float.
- `sizeof(double)` returns the size of a double.
- `sizeof(char)` returns the size of a character.
- `sizeof(bool)` returns the size of a Boolean value.

On many modern systems, the output is:

```text
Integer: 4 bytes
Float: 4 bytes
Double: 8 bytes
Character: 1 bytes
Boolean: 1 bytes
```

These are common sizes, not universal guarantees for every implementation.

The C++ standard specifies certain minimum ranges and relationships, but some sizes depend on the compiler and platform.

## 10. Integer Type Modifiers

C++ provides additional integer types for different ranges of values.

Common examples include:

| Type | Purpose |
|---|---|
| `short` | A short integer type |
| `int` | A standard integer type |
| `long` | A longer integer type |
| `long long` | A wider integer type |
| `unsigned int` | A non-negative integer type |

Example:

```cpp
short smallNumber = 100;
int normalNumber = 5000;
long long largeNumber = 9000000000LL;
unsigned int quantity = 250;
```

The `LL` suffix identifies the `9000000000` literal as a `long long`.

An unsigned integer cannot represent negative values.

For example:

```cpp
unsigned int students = 50;
```

It is appropriate when the application needs a non-negative count, although you should still consider how the program handles invalid negative input.

## 11. Type Conversion

Type conversion happens when a value of one data type is converted into another.

There are two important forms.

### A. Implicit Type Conversion

This happens automatically.

Example:

```cpp
int number = 10;

double result = number;

std::cout << result;
```

Explanation:

- `number` stores the integer 10.
- `result` is a `double`.
- C++ automatically converts the integer into a floating-point value.
- The result is displayed as 10.

### B. Explicit Type Conversion

This happens when the programmer deliberately requests a conversion.

Example:

```cpp
double price = 150.75;

int wholePrice = static_cast<int>(price);

std::cout << wholePrice;
```

Explanation:

- `price` stores 150.75.
- `static_cast<int>(price)` converts the value into an integer.
- The fractional part is discarded.
- `wholePrice` stores 150.

Output:

```text
150
```

The recommended C++ style is to use `static_cast` for ordinary explicit conversions.

## 12. Integer Division vs Decimal Division

This is an important concept.

Consider:

```cpp
int result = 5 / 2;

std::cout << result;
```

Output:

```text
2
```

Why?

Both operands are integers. C++ therefore performs integer division, discarding the fractional portion.

To obtain a decimal result, use a floating-point operand:

```cpp
double result = 5.0 / 2;

std::cout << result;
```

Output:

```text
2.5
```

The type of the operands affects the calculation, not just the type of the variable receiving the result.

## 13. Constants in C++

Sometimes a value should not change after initialization.

For example:

- The value of mathematical pi in a calculation.
- A fixed tax rate for a particular calculation.
- A maximum number of login attempts.
- A fixed configuration value.

C++ provides `const` for this purpose.

Example:

```cpp
const double PI = 3.14159;
```

This creates a constant variable.

You can read its value:

```cpp
std::cout << PI;
```

But you cannot assign a new value:

```cpp
PI = 3.14;
```

This produces a compilation error because `PI` is constant.

### Using `constexpr`

C++ also provides `constexpr` for values that can be evaluated at compile time.

Example:

```cpp
constexpr int MAX_STUDENTS = 100;
```

This declares a compile-time constant.

Use `const` when a value should not be modified after initialization.

Use `constexpr` when the value is required to be a compile-time constant.

## 14. Summary: Choosing the Correct Data Type

| Information | Recommended type |
|---|---|
| Student age in completed years | `int` |
| Product quantity | `int` |
| Product price requiring approximate decimal arithmetic | `double` |
| Student grade character | `char` |
| Student's full name | `std::string` |
| Whether a user is logged in | `bool` |
| A very large integer count | `long long` |

Choosing the correct type helps prevent unexpected results and makes the program easier to maintain.

### Part 2 Knowledge Check

1. What is a data type?
2. What is the difference between `int`, `float`, and `double`?
3. Why does `char grade = 'A';` use single quotation marks?
4. What values can a Boolean variable store?
5. Why do we include `<string>`?
6. What is the difference between implicit and explicit conversion?
7. Why does `5 / 2` produce `2`?
8. What does `static_cast<int>(150.75)` produce?
9. What is the purpose of `const`?
10. What does the `sizeof` operator do?

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL C++ PROGRAMMING

In this part, you will apply variables and data types by building programs.

You will learn how to create files, compile programs, accept user input, perform calculations, and identify errors.

## 1. Preparing Your Development Environment

You need:

- A code editor such as Visual Studio Code.
- A C++ compiler such as GCC.
- A terminal or command prompt.

Remember that Visual Studio Code is an editor. It does not automatically provide a C++ compiler.

You must install and configure a compiler separately.

### Create your project

Create a folder called:

```text
cpp-variables
```

Inside it, create:

```text
cpp-variables/
    main.cpp
```

Open `main.cpp` in your editor.

## 2. Practical Project One: Student Information Program

Let's create a program that stores and displays student information.

### Complete code

```cpp
#include <iostream>
#include <string>

int main() {
    std::string studentName = "Brian";
    int studentAge = 22;
    double averageMarks = 85.5;
    char grade = 'A';
    bool isRegistered = true;

    std::cout << "STUDENT INFORMATION\n";

    std::cout << "Name: " << studentName << "\n";
    std::cout << "Age: " << studentAge << "\n";
    std::cout << "Average Marks: " << averageMarks << "\n";
    std::cout << "Grade: " << grade << "\n";

    std::cout << "Registered: "
              << std::boolalpha << isRegistered << "\n";

    return 0;
}
```

### Understanding the program line by line

**Line 1:**
```cpp
#include <iostream>
```

Includes the input/output library.

We need this library because the program uses `std::cout` to display information.

**Line 2:**
```cpp
#include <string>
```

Includes the standard string library.

We need it because the student's name is stored using `std::string`.

**Line 3:**
```cpp
int main() {
```

Defines the main function.

This is where the program starts executing.

**Line 4:**
```cpp
std::string studentName = "Brian";
```

Creates a string variable and stores the student's name.

**Line 5:**
```cpp
int studentAge = 22;
```

Stores the student's age as an integer.

**Line 6:**
```cpp
double averageMarks = 85.5;
```

Stores the student's average marks as a decimal number.

**Line 7:**
```cpp
char grade = 'A';
```

Stores one character representing the student's grade.

**Line 8:**
```cpp
bool isRegistered = true;
```

Stores the student's registration status.

The value is `true`, meaning the student is registered.

**Line 9:**
```cpp
std::cout << "STUDENT INFORMATION\n";
```

Displays a heading.

The `\n` character moves the cursor to a new line.

**Lines 10–13:**

These statements display the student's details.

For example:

```cpp
std::cout << "Name: " << studentName << "\n";
```

Displays the text `"Name: "` followed by the value stored in `studentName`.

**Line 14:**
```cpp
std::cout << "Registered: "
          << std::boolalpha << isRegistered << "\n";
```

Displays the registration status.

`std::boolalpha` ensures the Boolean value appears as `true` or `false`.

**Final line:**
```cpp
return 0;
```

Indicates successful program execution.

### Expected output

```text
STUDENT INFORMATION
Name: Brian
Age: 22
Average Marks: 85.5
Grade: A
Registered: true
```

### What you have learned

This program demonstrates how different data types can work together in one application.

A real student management system could use the same approach to store information about thousands of students.

## 3. Practical Project Two: Accepting User Input

So far, we have assigned values directly inside our programs.

Real applications normally receive information from users.

C++ provides `std::cin` for accepting input.

Let's build a program that asks a user for their name and age.

### Complete code

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    int age;

    std::cout << "Enter your name: ";
    std::cin >> name;

    std::cout << "Enter your age: ";
    std::cin >> age;

    std::cout << "\nHello, " << name << "!\n";
    std::cout << "You are " << age << " years old.\n";

    return 0;
}
```

### Line-by-line explanation

**Line 1:**
```cpp
#include <iostream>
```

Provides input and output functionality.

**Line 2:**
```cpp
#include <string>
```

Allows us to use `std::string`.

**Line 3:**
```cpp
std::string name;
```

Creates an empty string variable called `name`.

We have not assigned a value yet because the user will provide one.

**Line 4:**
```cpp
int age;
```

Creates an integer variable called `age`.

**Line 5:**
```cpp
std::cout << "Enter your name: ";
```

Displays a message asking the user to enter their name.

**Line 6:**
```cpp
std::cin >> name;
```

Receives input from the keyboard and stores it in `name`.

**Line 7:**
```cpp
std::cout << "Enter your age: ";
```

Asks the user to enter their age.

**Line 8:**
```cpp
std::cin >> age;
```

Receives the entered number and stores it in `age`.

**Final output statements:**

These display the values entered by the user.

### Example execution

```text
Enter your name: Brian
Enter your age: 22

Hello, Brian!
You are 22 years old.
```

### Important: The limitation of `std::cin >>`

When reading a string using:

```cpp
std::cin >> name;
```

C++ stops reading at whitespace.

For example, if the user enters:

```text
Brian Njogu
```

Only `Brian` is stored in `name`.

To read a complete line, use `std::getline()`.

Example:

```cpp
std::string fullName;

std::cout << "Enter your full name: ";

std::getline(std::cin, fullName);
```

Now the entire line, including spaces, is stored.

## 4. Practical Project Three: Calculating a Student's Average

Let's create a program that accepts three examination marks and calculates their average.

### Complete code

```cpp
#include <iostream>

int main() {
    double mark1, mark2, mark3;

    std::cout << "Enter first mark: ";
    std::cin >> mark1;

    std::cout << "Enter second mark: ";
    std::cin >> mark2;

    std::cout << "Enter third mark: ";
    std::cin >> mark3;

    double total = mark1 + mark2 + mark3;

    double average = total / 3.0;

    std::cout << "\nTotal Marks: " << total << "\n";
    std::cout << "Average Marks: " << average << "\n";

    return 0;
}
```

### Understanding the calculation

The first three variables store the examination marks.

```cpp
double mark1, mark2, mark3;
```

We use `double` because examination marks may contain decimal values.

Next:

```cpp
double total = mark1 + mark2 + mark3;
```

Adds all three marks together.

For example:

- First mark: 70
- Second mark: 80
- Third mark: 90

The total is:

70 + 80 + 90 = 240

Next:

```cpp
double average = total / 3.0;
```

Divides the total by three.

The calculation becomes:

240 ÷ 3 = 80

We use `3.0` to make the division explicitly floating-point.

Finally, the program displays the total and average.

### Expected output

```text
Enter first mark: 70
Enter second mark: 80
Enter third mark: 90

Total Marks: 240
Average Marks: 80
```

## 5. Practical Project Four: Type Conversion

Let's investigate what happens when C++ converts one data type into another.

Create this program:

```cpp
#include <iostream>

int main() {
    int wholeNumber = 10;

    double decimalNumber = wholeNumber;

    double price = 99.95;

    int convertedPrice = static_cast<int>(price);

    std::cout << "Original integer: " << wholeNumber << "\n";

    std::cout << "Converted to double: "
              << decimalNumber << "\n";

    std::cout << "Original price: " << price << "\n";

    std::cout << "Converted price: "
              << convertedPrice << "\n";

    return 0;
}
```

### Explanation

First:

```cpp
int wholeNumber = 10;
```

Creates an integer containing 10.

Next:

```cpp
double decimalNumber = wholeNumber;
```

Automatically converts the integer into a double.

The value remains numerically equivalent to 10.

Next:

```cpp
double price = 99.95;
```

Stores a decimal value.

Then:

```cpp
int convertedPrice = static_cast<int>(price);
```

Explicitly converts the decimal into an integer.

The fractional portion is discarded.

The result becomes 99.

### Expected output

```text
Original integer: 10
Converted to double: 10
Original price: 99.95
Converted price: 99
```

Notice that converting from `int` to `double` preserves the numeric value, while converting from `double` to `int` loses the fractional portion.

## 6. Practical Project Five: A Simple Shopping Calculator

Now let's combine variables, strings, input, decimal calculations, and output in one small application.

### Complete code

```cpp
#include <iostream>
#include <string>

int main() {
    std::string productName;

    double unitPrice;
    int quantity;

    std::cout << "Enter product name: ";
    std::getline(std::cin, productName);

    std::cout << "Enter unit price: ";
    std::cin >> unitPrice;

    std::cout << "Enter quantity: ";
    std::cin >> quantity;

    double totalCost = unitPrice * quantity;

    std::cout << "\n--- PURCHASE SUMMARY ---\n";

    std::cout << "Product: " << productName << "\n";
    std::cout << "Unit Price: " << unitPrice << "\n";
    std::cout << "Quantity: " << quantity << "\n";
    std::cout << "Total Cost: " << totalCost << "\n";

    return 0;
}
```

### Understanding the design

We need three different pieces of information:

| Information | Variable | Data type |
|---|---|---|
| Product name | `productName` | `std::string` |
| Unit price | `unitPrice` | `double` |
| Quantity | `quantity` | `int` |

The product name is text, the price may contain decimals, and the quantity is a whole number.

The calculation is:

```cpp
double totalCost = unitPrice * quantity;
```

Suppose the user enters:

- Product: Laptop
- Unit price: 65000
- Quantity: 2

The calculation is:

65,000 × 2 = 130,000

Expected output:

```text
Enter product name: Laptop
Enter unit price: 65000
Enter quantity: 2

--- PURCHASE SUMMARY ---
Product: Laptop
Unit Price: 65000
Quantity: 2
Total Cost: 130000
```

This program demonstrates how variables form the foundation of real applications such as inventory systems and e-commerce platforms.

**Important production improvement:** This example assumes that the user enters valid numbers. A production application should validate input, reject negative quantities, and handle invalid numeric input before performing calculations.

## 7. Compiling and Running Your Programs

Save your source code as:

```text
main.cpp
```

Open a terminal inside the project folder.

Compile the program using GCC:

```bash
g++ main.cpp -o main
```

Explanation:

- `g++` calls the C++ compiler.
- `main.cpp` is your source file.
- `-o` specifies the output executable's name.
- `main` is the name of the generated executable.

On Windows, run:

```bash
main.exe
```

On Linux or macOS, run:

```bash
./main
```

If compilation succeeds, the program will execute.

## 8. Common Errors and How to Fix Them

### Error 1: Using the wrong quotation marks

Incorrect:

```cpp
char grade = "A";
```

Correct:

```cpp
char grade = 'A';
```

Explanation:

A character uses single quotation marks. Double quotation marks create a string literal.

### Error 2: Using an undeclared variable

Incorrect:

```cpp
age = 22;
```

If `age` has not been declared, the compiler reports an error.

Correct:

```cpp
int age = 22;
```

### Error 3: Assigning a decimal to an integer unintentionally

Problematic:

```cpp
int price = 99.95;
```

This silently discards the fractional part.

Better:

```cpp
double price = 99.95;
```

### Error 4: Forgetting to include the string library

Incorrect:

```cpp
std::string name = "Brian";
```

If the program has not included the appropriate header, compilation may fail.

Correct:

```cpp
#include <string>
```

### Error 5: Using the wrong variable name

Incorrect:

```cpp
int studentAge = 22;

std::cout << studentage;
```

The compiler cannot find `studentage` because the declared name is `studentAge`.

Correct:

```cpp
std::cout << studentAge;
```

C++ is case-sensitive.

### Error 6: Unexpected integer division

Problematic:

```cpp
int average = 85 / 2;
```

The result is 42 because integer division discards the fractional part.

Correct:

```cpp
double average = 85.0 / 2;
```

The result is 42.5.

## 9. Part 3 Practical Exercises

Complete the following exercises in your editor.

### Exercise 1: Personal Information

Create a program that stores and displays:

- Your full name.
- Your age.
- Your country.
- Your current course.
- Whether you are a student.

Use the correct data type for each value.

### Exercise 2: Rectangle Calculator

Create a program that asks the user for:

- Rectangle length.
- Rectangle width.

Calculate and display the area.

Formula:

Area = Length × Width

Use an appropriate decimal data type.

### Exercise 3: Temperature Converter

Create a program that asks the user to enter a temperature in Celsius.

Convert it into Fahrenheit.

Formula:

Fahrenheit = (Celsius × 9 / 5) + 32

Make sure your calculation uses floating-point arithmetic.

### Exercise 4: Shopping System

Create a program that asks for:

- Product name.
- Product price.
- Quantity purchased.

Calculate and display the total cost.

### Exercise 5: Debugging Challenge

Find and correct the errors in this program:

```cpp
#include <iostream>

int main() {
    int age = 22.5;

    char grade = "A";

    std::string name = "Brian"

    std::cout << "Name: " << studentName << "\n";
    std::cout << "Age: " << age << "\n";
    std::cout << "Grade: " << grade << "\n";

    return 0;
}
```

Identify every error before changing the code.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## Assessment Introduction

You have completed the foundational and practical sections of C++ Variables and Data Types.

Now it is time to demonstrate your understanding.

This assessment checks whether you can:

- Identify appropriate data types.
- Declare and initialize variables.
- Understand type conversion.
- Explain how values are stored and updated.
- Write simple C++ programs.
- Identify and correct programming errors.

Answer all questions independently before submitting your work to Kai.

## SECTION A: MULTIPLE-CHOICE QUESTIONS

Choose the correct answer.

**Question 1**

What is a variable in C++?

A. A command used to terminate a program.

B. A named storage location that holds a value.

C. A tool used to compile code.

D. A function that displays information.

**Question 2**

Which data type is most appropriate for storing a student's age in completed years?

A. `char`

B. `bool`

C. `int`

D. `std::string`

**Question 3**

Which data type stores a single character?

A. `int`

B. `char`

C. `double`

D. `bool`

**Question 4**

What is the output of the following program?

```cpp
int score = 50;
score = 80;

std::cout << score;
```

A. 50

B. 80

C. 130

D. Compilation error

**Question 5**

Which declaration correctly stores a student's full name?

A. `int name = "Brian";`

B. `char name = "Brian";`

C. `std::string name = "Brian";`

D. `bool name = "Brian";`

**Question 6**

What values can a Boolean variable store?

A. Positive and negative numbers.

B. Letters and symbols.

C. `true` and `false`.

D. Decimal numbers only.

**Question 7**

What is the output of this statement?

```cpp
std::cout << 5 / 2;
```

A. 2.5

B. 2

C. 3

D. 5

**Question 8**

What is the purpose of `const`?

A. To declare a variable that cannot be reassigned after initialization.

B. To delete a variable.

C. To convert a string into an integer.

D. To display a variable.

**Question 9**

Which operator is used to obtain the size of a data type or object?

A. `length`

B. `size`

C. `sizeof`

D. `count`

**Question 10**

What does the following conversion produce?

```cpp
int number = static_cast<int>(25.89);
```

A. 25.89

B. 26

C. 25

D. Compilation error

## SECTION B: CONCEPTUAL QUESTIONS

Answer using your own explanations.

**Question 11**

Explain the difference between declaring a variable and initializing a variable.

**Question 12**

Explain why the following declarations use different data types:

```cpp
int age = 22;
double price = 150.75;
char grade = 'A';
std::string name = "Brian";
bool isRegistered = true;
```

**Question 13**

Differentiate between `float` and `double`.

**Question 14**

Explain the difference between implicit and explicit type conversion. Give one example of each.

**Question 15**

Why is it important to choose the correct data type when developing software applications?

## SECTION C: PRACTICAL PROGRAMMING

Write complete C++ programs for the following tasks.

**Question 16: Employee Information**

Create a program that stores and displays:

- Employee name.
- Employee age.
- Monthly salary.
- Employee grade.
- Whether the employee is active.

Use appropriate data types.

**Question 17: Average Calculator**

Write a program that accepts four examination marks from a user.

Calculate and display:

- Total marks.
- Average marks.

Ensure that the average can contain decimal values.

**Question 18: Product Cost Calculator**

Create a program that asks a user for:

- Product name.
- Product price.
- Quantity.

Calculate and display the total purchase cost.

**Question 19: Type Conversion**

Write a program that:

1. Declares an integer variable with the value 45.
2. Converts it into a `double`.
3. Declares a decimal variable with the value 78.95.
4. Converts it into an integer using `static_cast`.
5. Displays all four values.

Explain the results.

## SECTION D: DEBUGGING CHALLENGE

**Question 20**

The following program contains several mistakes.

Identify and correct them.

```cpp
#include <iostream>

int main() {
    int studentAge = 21;

    double marks = 89.5

    char grade = "A";

    bool registered = "true";

    std::cout << "Age: " << studentage << "\n";

    std::cout << "Marks: " << marks << "\n";

    std::cout << "Grade: " << grade << "\n";

    std::cout << "Registered: " << registered << "\n";

    return 0;
}
```

For each mistake:

1. Identify the problematic line.
2. Explain why it is incorrect.
3. Write the corrected version.

---

## FINAL PRACTICAL PROJECT: STUDENT RECORD SYSTEM

Build a small C++ program that collects and displays a student's information.

### Requirements

Your application must:

1. Ask for the student's full name.
2. Ask for the student's age.
3. Ask for the student's registration number.
4. Ask for the student's average marks.
5. Ask for the student's grade.
6. Ask whether the student is registered.
7. Display all the collected information in a well-organized format.

### Technical requirements

Use:

- `std::string` for text.
- `int` for age.
- An appropriate integer or string type for the registration number.
- `double` for average marks.
- `char` for the grade.
- `bool` for registration status.

Use `std::getline()` when accepting full names containing spaces.

Your application should demonstrate that you understand how different data types work together.

For an improved version, validate the user's input and reject invalid values.

---

## SUBMISSION TO KAI

Submit your answers and source code to Kai for assessment.

Kai should evaluate:

- Accuracy of your answers.
- Understanding of variables and data types.
- Correct use of C++ syntax.
- Quality of your practical programs.
- Ability to identify and correct errors.
- Ability to explain your programming decisions.

### Lesson Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain what variables are.
- [ ] Declare and initialize variables.
- [ ] Update existing variable values.
- [ ] Follow C++ variable naming rules.
- [ ] Use `int`, `float`, and `double`.
- [ ] Use `char`, `bool`, and `std::string`.
- [ ] Understand type conversion.
- [ ] Use `static_cast`.
- [ ] Explain integer division.
- [ ] Declare constants using `const` and `constexpr`.
- [ ] Accept user input using `std::cin` and `std::getline()`.
- [ ] Compile and run C++ programs.
- [ ] Build the Student Record System.

**Part 4 of 4 — Lesson Complete**

## NEXT LESSON

### C++: Operators and Expressions

In the next lesson, you will learn how C++ performs calculations, compares values, combines conditions, and evaluates expressions using arithmetic, assignment, comparison, logical, and other operators.