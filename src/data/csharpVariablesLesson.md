# C# PROGRAMMING: VARIABLES AND TYPES

# PART 1 OF 4: UNDERSTANDING VARIABLES AND DATA TYPES

## 1. Introduction

Every application works with data.

For example, imagine developing a student management system. Your application may need to store:

- Student names.
- Registration numbers.
- Ages.
- Examination marks.
- Course names.
- Registration status.

To work with this information, C# provides variables and data types.

A **variable** is a named storage location used to hold a value that a program can access and potentially change while running.

A **data type** specifies the kind of value a variable can hold and the operations that can be performed on it.

For example:

```csharp
string studentName = "Brian";
int age = 22;
double marks = 85.5;
bool isRegistered = true;
```

These four variables store different kinds of information.

| Variable | Data type | Value |
|---|---|---|
| `studentName` | `string` | `"Brian"` |
| `age` | `int` | `22` |
| `marks` | `double` | `85.5` |
| `isRegistered` | `bool` | `true` |

Choosing the correct data type is important because it affects how information is stored, processed, and validated.

## 2. Declaring Variables in C#

The general syntax for declaring a variable is:

```csharp
dataType variableName = value;
```

For example:

```csharp
int age = 22;
```

Let's break it down.

- `int` specifies the data type.
- `age` is the variable name.
- `=` is the assignment operator.
- `22` is the value being assigned.
- `;` terminates the statement.

You can also declare a variable without assigning a value immediately:

```csharp
int age;

age = 22;
```

The first statement declares the variable.

The second statement assigns its value.

### Declaring multiple variables

You can declare multiple variables of the same type:

```csharp
int age = 22, year = 2026, students = 50;
```

However, declaring variables separately can make programs easier to read:

```csharp
int age = 22;
int year = 2026;
int students = 50;
```

## 3. Naming Variables

C# has rules for naming variables.

A variable name:

- Can contain letters.
- Can contain digits.
- Can contain underscores.
- Cannot begin with a digit.
- Cannot contain spaces.
- Cannot be a reserved keyword unless escaped using `@`.

Valid examples:

```csharp
string studentName = "Brian";
int studentAge = 22;
double examinationMarks = 85.5;
int total_students = 50;
```

Invalid examples:

```csharp
int 2students = 50;
int student age = 22;
int class = 10;
```

The last example is invalid because `class` is a reserved C# keyword.

### Naming conventions

C# commonly uses camelCase for local variables and parameters.

Examples:

```csharp
string studentName;
int studentAge;
double totalMarks;
```

The first word begins with a lowercase letter, while subsequent words begin with uppercase letters.

Good naming makes code easier to understand.

Compare:

```csharp
int x = 22;
```

with:

```csharp
int studentAge = 22;
```

The second version communicates the variable's purpose more clearly.

## 4. Understanding Value Types and Reference Types

C# data types are broadly divided into two categories:

1. Value types.
2. Reference types.

Understanding this distinction is important when working with variables, objects, and memory.

### A. Value types

A value type variable directly contains its value.

Examples include:

- `int`
- `double`
- `float`
- `decimal`
- `bool`
- `char`
- `struct`
- `enum`

Example:

```csharp
int firstNumber = 10;

int secondNumber = firstNumber;

secondNumber = 20;

Console.WriteLine(firstNumber);
Console.WriteLine(secondNumber);
```

Output:

```text
10
20
```

Why?

When `firstNumber` is assigned to `secondNumber`, the value `10` is copied.

Changing `secondNumber` does not change `firstNumber`.

### B. Reference types

A reference type variable stores a reference to an object.

Examples include:

- `string`
- Arrays.
- Classes.
- Interfaces.
- Delegates.

Consider:

```csharp
class Student
{
    public string Name = "";
}
```

Now create two variables:

```csharp
Student student1 = new Student();

student1.Name = "Brian";

Student student2 = student1;

student2.Name = "Mary";

Console.WriteLine(student1.Name);
Console.WriteLine(student2.Name);
```

Output:

```text
Mary
Mary
```

Why?

Both variables refer to the same Student object.

Changing the object's `Name` through `student2` is visible through `student1` because they refer to the same object.

### Value types versus reference types

| Feature | Value type | Reference type |
|---|---|---|
| Variable contains | Its value | A reference to an object |
| Assignment | Copies the value | Copies the reference |
| Examples | `int`, `bool`, `double` | `string`, arrays, classes |
| Null support | Not normally, unless nullable | Yes, if nullable references are permitted |
| Typical use | Simple values | Objects and collections |

**Important:** Do not assume that every value type is always stored on the stack or every reference type is always stored on the heap. Actual storage depends on context and runtime implementation. The important distinction is how values and references behave.

## 5. Integer Data Types

Integer types store whole numbers without fractional parts.

C# provides several integer types.

| Data type | Size | Approximate range |
|---|---:|---|
| `byte` | 8 bits | 0 to 255 |
| `sbyte` | 8 bits | -128 to 127 |
| `short` | 16 bits | -32,768 to 32,767 |
| `ushort` | 16 bits | 0 to 65,535 |
| `int` | 32 bits | -2.1 billion to 2.1 billion |
| `uint` | 32 bits | 0 to approximately 4.29 billion |
| `long` | 64 bits | Approximately -9.22 quintillion to 9.22 quintillion |
| `ulong` | 64 bits | 0 to approximately 18.44 quintillion |

### Example: Using int

```csharp
int studentAge = 22;
int numberOfStudents = 150;
int year = 2026;

Console.WriteLine(studentAge);
Console.WriteLine(numberOfStudents);
Console.WriteLine(year);
```

Output:

```text
22
150
2026
```

`int` is one of the most commonly used integer types.

### Example: Using long

Use `long` when a whole number may exceed the range of `int`.

```csharp
long population = 8500000000L;

Console.WriteLine(population);
```

Output:

```text
8500000000
```

The `L` suffix indicates that the literal is a `long`.

### Example: Using byte

```csharp
byte temperature = 25;

Console.WriteLine(temperature);
```

A `byte` can hold values from 0 to 255.

Attempting to assign 300 to a byte is invalid because the value is outside its range.

## 6. Floating-Point Data Types

Sometimes information contains decimal values.

Examples include:

- Examination marks.
- Measurements.
- Temperatures.
- Scientific calculations.

C# provides `float`, `double`, and `decimal`.

| Type | Size | Precision | Common use |
|---|---:|---|---|
| `float` | 32 bits | About 6–9 decimal digits | Graphics and measurements |
| `double` | 64 bits | About 15–17 decimal digits | General scientific calculations |
| `decimal` | 128 bits | About 28–29 significant decimal digits | Financial calculations |

### A. Float

```csharp
float temperature = 36.5f;

Console.WriteLine(temperature);
```

Output:

```text
36.5
```

The `f` suffix identifies the literal as a `float`.

Without the suffix, a decimal literal is treated as a `double` by default.

### B. Double

```csharp
double distance = 125.75;

Console.WriteLine(distance);
```

Output:

```text
125.75
```

`double` is commonly used for general decimal calculations.

### C. Decimal

```csharp
decimal accountBalance = 15000.75m;

Console.WriteLine(accountBalance);
```

Output:

```text
15000.75
```

The `m` suffix identifies the literal as a `decimal`.

`decimal` is particularly useful for financial calculations because it represents decimal fractions more appropriately than binary floating-point types.

For example, in a banking application, you would generally prefer `decimal` for currency calculations.

**Important:** Decimal arithmetic still needs careful design for currency. You should also define the appropriate rounding rules for the application.

## 7. Boolean Data Type

A Boolean variable stores one of two values:

- `true`
- `false`

Example:

```csharp
bool isLoggedIn = true;
bool hasPaidFees = false;

Console.WriteLine(isLoggedIn);
Console.WriteLine(hasPaidFees);
```

Output:

```text
True
False
```

Boolean values are important when making decisions.

Example:

```csharp
bool isRegistered = true;

if (isRegistered)
{
    Console.WriteLine("Student is registered.");
}
```

Output:

```text
Student is registered.
```

The program checks whether the variable is true before executing the message.

Common applications include:

- User authentication.
- Payment status.
- Account verification.
- Product availability.
- System permissions.

## 8. Character Data Type

The `char` data type stores a single UTF-16 code unit.

A character is written using single quotation marks.

Example:

```csharp
char grade = 'A';

Console.WriteLine(grade);
```

Output:

```text
A
```

Other examples:

```csharp
char letter = 'B';
char symbol = '@';
char digit = '7';
```

Notice:

```csharp
char letter = 'A';
```

is different from:

```csharp
string letter = "A";
```

The first stores a character.

The second stores a string containing one character.

**Important:** Some Unicode characters, such as certain emoji, require more than one UTF-16 code unit. A single `char` cannot represent every Unicode character by itself.

## 9. String Data Type

A string stores a sequence of characters.

Example:

```csharp
string studentName = "Brian Njogu";

Console.WriteLine(studentName);
```

Output:

```text
Brian Njogu
```

Strings are reference types in C#.

They are immutable, meaning that once a string object is created, its contents cannot be modified in place.

For example:

```csharp
string name = "Brian";

name = "Mary";
```

This does not modify the original string object.

Instead, the variable is assigned a reference to another string.

### Combining strings

You can combine strings using the `+` operator.

```csharp
string firstName = "Brian";
string lastName = "Njogu";

string fullName = firstName + " " + lastName;

Console.WriteLine(fullName);
```

Output:

```text
Brian Njogu
```

### String interpolation

A cleaner way to combine text and variables is string interpolation.

```csharp
string name = "Brian";
int age = 22;

Console.WriteLine($"My name is {name} and I am {age} years old.");
```

Output:

```text
My name is Brian and I am 22 years old.
```

The `$` symbol allows expressions inside curly braces to be evaluated and inserted into the string.

## 10. Comparing Common Data Types

| Data type | Example | Purpose |
|---|---|---|
| `int` | `int age = 22;` | Whole numbers |
| `long` | `long population = 8500000000L;` | Large whole numbers |
| `float` | `float temperature = 36.5f;` | Single-precision decimals |
| `double` | `double distance = 15.75;` | Double-precision decimals |
| `decimal` | `decimal price = 250.50m;` | Decimal financial values |
| `bool` | `bool active = true;` | True or false |
| `char` | `char grade = 'A';` | One UTF-16 code unit |
| `string` | `string name = "Brian";` | Text |

**Part 1 Summary**

You have learned:

- What variables and data types are.
- How to declare and initialize variables.
- C# variable naming rules.
- Value types and reference types.
- Integer types.
- Floating-point types.
- Boolean values.
- Character values.
- Strings and string interpolation.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: CONSTANTS, TYPE INFERENCE AND TYPE CONVERSION

## 1. Understanding Constants

A variable can hold a value that changes during program execution.

But sometimes you want to store a value that should not change.

C# provides the `const` keyword.

A constant is a value that cannot be changed after it has been declared.

Example:

```csharp
const double Pi = 3.14159;
```

This declares a constant named `Pi`.

Attempting to change it later:

```csharp
Pi = 3.14;
```

produces a compilation error.

### Practical example

```csharp
using System;

class Program
{
    static void Main()
    {
        const decimal TaxRate = 0.16m;

        decimal productPrice = 1000m;

        decimal tax = productPrice * TaxRate;

        Console.WriteLine($"Tax: {tax}");
    }
}
```

### Line-by-line explanation

```csharp
const decimal TaxRate = 0.16m;
```

Declares a constant decimal value representing a tax rate of 16%.

```csharp
decimal productPrice = 1000m;
```

Stores the product price.

```csharp
decimal tax = productPrice * TaxRate;
```

Calculates the tax by multiplying the product price by the tax rate.

```csharp
Console.WriteLine($"Tax: {tax}");
```

Displays the result.

Output:

```text
Tax: 160.00
```

### When should you use constants?

Constants are useful for values that should remain fixed, such as:

- Mathematical values.
- Fixed conversion factors.
- Application limits.
- Standard configuration values.
- Fixed business rules.

## 2. Understanding readonly

C# also provides the `readonly` keyword.

A readonly field can be assigned:

- When it is declared.
- Inside an instance constructor.
- Inside a static constructor if it is static.

After initialization, it cannot be reassigned.

Example:

```csharp
class Student
{
    public readonly int RegistrationNumber;

    public Student(int number)
    {
        RegistrationNumber = number;
    }
}
```

Here, the registration number is assigned when the Student object is constructed.

Unlike `const`, a readonly field can be initialized using a value determined at runtime.

### const versus readonly

| Feature | const | readonly |
|---|---|---|
| Value | Compile-time constant | Can be determined at runtime |
| Assignment | At declaration | At declaration or constructor |
| Can be changed later? | No | No, after permitted initialization |
| Common use | Fixed values | Object-specific or runtime-initialized values |

## 3. Type Inference with var

C# allows the compiler to determine a variable's type from its initial value.

This is called type inference.

The `var` keyword is used for this purpose.

Example:

```csharp
var age = 22;
var name = "Brian";
var marks = 85.5;
```

The compiler determines:

- `age` is an `int`.
- `name` is a `string`.
- `marks` is a `double`.

The variable still has a specific type.

`var` does not mean that the variable can freely change its type later.

For example:

```csharp
var age = 22;

age = 25;
```

This is valid because both values are integers.

But:

```csharp
var age = 22;

age = "Twenty-two";
```

is invalid because `age` was inferred as an integer.

### Explicit type versus var

Explicit declaration:

```csharp
int age = 22;
```

Type inference:

```csharp
var age = 22;
```

Both create an integer variable.

### When should you use var?

Use `var` when the type is obvious from the assigned expression.

For example:

```csharp
var studentName = "Brian";
```

However, avoid using it when the type is not clear to the reader.

The goal is readability, not reducing the number of characters in your code.

**Important:** A local variable declared with `var` must have an initializer so that the compiler can infer its type.

## 4. Dynamic Type with dynamic

C# also provides the `dynamic` keyword.

Unlike `var`, which determines the type at compile time, `dynamic` allows certain operations to be resolved at runtime.

Example:

```csharp
dynamic value = 100;

Console.WriteLine(value);

value = "Hello";

Console.WriteLine(value);
```

Output:

```text
100
Hello
```

The variable can now hold values of different runtime types.

However, this flexibility comes with risks.

Consider:

```csharp
dynamic value = "Hello";

Console.WriteLine(value.Length);
```

This works because strings have a `Length` property.

But:

```csharp
dynamic value = 100;

Console.WriteLine(value.Length);
```

causes a runtime error because an integer does not have a `Length` property.

### var versus dynamic

| Feature | var | dynamic |
|---|---|---|
| Type determined | At compile time | At runtime for dynamic operations |
| Type changes | No | Can hold different runtime types |
| Error detection | Many type errors found during compilation | Some errors appear during execution |
| Performance | Normal static typing | May involve runtime binding overhead |

Use normal static types in most application code. Use `dynamic` only when runtime flexibility is genuinely necessary.

## 5. Type Conversion

Type conversion means changing a value from one data type to another.

For example, converting an integer to a decimal or a string containing digits into an integer.

There are several ways to perform conversions in C#.

The main approaches include:

1. Implicit conversion.
2. Explicit conversion.
3. Conversion using methods.
4. Parsing strings.
5. Using `Convert` methods.

## 6. Implicit Conversion

Implicit conversion happens automatically when the compiler knows that the destination type can safely represent the source value.

Example:

```csharp
int number = 100;

double result = number;

Console.WriteLine(result);
```

Output:

```text
100
```

Explanation:

```csharp
int number = 100;
```

Creates an integer.

```csharp
double result = number;
```

Converts the integer to a double automatically.

This conversion is safe for all `int` values because the range of `double` is much larger.

Other common implicit conversions include:

- `int` to `long`.
- `int` to `double`.
- `float` to `double`.

## 7. Explicit Conversion (Casting)

Sometimes you need to convert a value manually.

This is called explicit conversion or casting.

Example:

```csharp
double price = 99.99;

int wholePrice = (int)price;

Console.WriteLine(wholePrice);
```

Output:

```text
99
```

Explanation:

```csharp
double price = 99.99;
```

Stores a decimal value.

```csharp
int wholePrice = (int)price;
```

Converts the value into an integer.

The fractional part is discarded.

It does not round the number to the nearest integer.

### Another example

```csharp
int totalMarks = 250;
int students = 3;

double average = (double)totalMarks / students;

Console.WriteLine(average);
```

Output:

```text
83.33333333333333
```

Why use `(double)`?

Without the cast, integer division would discard the fractional part.

For example:

```csharp
int average = 250 / 3;
```

produces:

```text
83
```

The explicit conversion ensures floating-point division is performed.

## 8. Converting Values Using Convert

C# provides the `Convert` class for common conversions.

Examples:

```csharp
int number = Convert.ToInt32("25");

double marks = Convert.ToDouble("85.5");

decimal price = Convert.ToDecimal("1500.75");

string result = Convert.ToString(100);
```

The `Convert` class is useful when converting between common data types.

### Example application

```csharp
using System;

class Program
{
    static void Main()
    {
        string ageInput = "22";

        int age = Convert.ToInt32(ageInput);

        Console.WriteLine($"Age: {age}");
    }
}
```

Output:

```text
Age: 22
```

However, conversion can fail if the input cannot be represented by the destination type.

For example:

```csharp
int age = Convert.ToInt32("Brian");
```

throws a `FormatException`.

## 9. Parsing Strings

Parsing means converting a string representation of a value into a specific data type.

Common methods include:

- `int.Parse()`
- `double.Parse()`
- `decimal.Parse()`
- `bool.Parse()`

Example:

```csharp
string input = "250";

int number = int.Parse(input);

Console.WriteLine(number);
```

Output:

```text
250
```

### Difference between Parse and Convert

Both can convert strings into numbers, but their behavior is not identical in every situation.

For example:

```csharp
int.Parse("25");
```

converts the string `"25"` into an integer.

`Convert.ToInt32()` also converts it.

However, `Convert.ToInt32(null)` returns zero, while `int.Parse(null)` throws an exception.

## 10. Safe Conversion with TryParse

When accepting user input, it is important to handle invalid data.

Instead of assuming that every conversion will succeed, use `TryParse()`.

Example:

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter your age: ");

        string? input = Console.ReadLine();

        if (int.TryParse(input, out int age))
        {
            Console.WriteLine($"Your age is {age}");
        }
        else
        {
            Console.WriteLine("Please enter a valid whole number.");
        }
    }
}
```

### Understanding the code

```csharp
string? input = Console.ReadLine();
```

Reads input from the user.

The `?` indicates that the returned string may be null.

```csharp
int.TryParse(input, out int age)
```

Attempts to convert the input into an integer.

If conversion succeeds:

- The method returns `true`.
- The converted value is stored in `age`.

If conversion fails:

- The method returns `false`.
- The program enters the `else` branch.

### Example interaction

Successful conversion:

```text
Enter your age: 22
Your age is 22
```

Invalid conversion:

```text
Enter your age: twenty-two
Please enter a valid whole number.
```

`TryParse()` is particularly useful in forms, registration systems, calculators, and other applications that receive user input.

## 11. Nullable Value Types

Normally, value types such as `int`, `double`, and `bool` cannot hold `null`.

However, C# allows nullable value types using `?`.

Example:

```csharp
int? age = null;

Console.WriteLine(age.HasValue);
```

Output:

```text
False
```

The declaration:

```csharp
int? age;
```

is equivalent to:

```csharp
Nullable<int> age;
```

A nullable integer can contain:

- An integer value.
- `null`.

### Checking nullable values

```csharp
int? age = 22;

if (age.HasValue)
{
    Console.WriteLine(age.Value);
}
else
{
    Console.WriteLine("Age not provided.");
}
```

Output:

```text
22
```

### Null-coalescing operator

The `??` operator provides a fallback value when an expression is null.

Example:

```csharp
int? age = null;

int actualAge = age ?? 18;

Console.WriteLine(actualAge);
```

Output:

```text
18
```

Because `age` is null, the program uses `18`.

### Nullable reference types

C# also supports nullable reference type annotations.

For example:

```csharp
string name = "Brian";
string? middleName = null;
```

When nullable reference types are enabled, the compiler can warn about potentially unsafe null usage.

These annotations provide compile-time analysis; they do not create entirely different runtime string types.

## 12. Understanding Overflow

Overflow occurs when a calculation produces a value outside the range that a data type can represent.

Example:

```csharp
int number = int.MaxValue;

number = number + 1;

Console.WriteLine(number);
```

In the default unchecked context, integer arithmetic can wrap around.

The result is not the mathematically correct value.

C# provides checked arithmetic to detect certain overflows.

Example:

```csharp
int number = int.MaxValue;

try
{
    checked
    {
        number = number + 1;
    }
}
catch (OverflowException)
{
    Console.WriteLine("Integer overflow detected.");
}
```

Output:

```text
Integer overflow detected.
```

Overflow checking is especially important when handling:

- Financial calculations.
- Large quantities.
- Scientific values.
- Counters.
- User-supplied numerical input.

**Part 2 Summary**

You have learned:

- Constants using `const`.
- Readonly fields.
- Type inference using `var`.
- Dynamic typing using `dynamic`.
- Implicit conversion.
- Explicit casting.
- Conversion using `Convert`.
- Parsing strings.
- Safe conversion using `TryParse`.
- Nullable value types.
- Nullable reference types.
- Overflow detection.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL APPLICATIONS OF VARIABLES AND TYPES

## 1. Project: Student Information Calculator

We will now create an application that collects student information and calculates examination results.

The program will demonstrate:

- Strings.
- Integers.
- Decimal values.
- Boolean values.
- Constants.
- Type conversion.
- Input validation.
- Variables and calculations.

### Step 1: Create a project

Open your terminal.

Run:

```bash
dotnet new console -n StudentCalculator
```

Enter the project directory:

```bash
cd StudentCalculator
```

Open it in your editor:

```bash
code .
```

### Step 2: Open Program.cs

Replace its contents with:

```csharp
using System;

class Program
{
    static void Main()
    {
        const decimal PASS_MARK = 50m;

        Console.Write("Enter student name: ");
        string? name = Console.ReadLine();

        Console.Write("Enter mathematics marks: ");
        string? mathInput = Console.ReadLine();

        Console.Write("Enter programming marks: ");
        string? programmingInput = Console.ReadLine();

        if (string.IsNullOrWhiteSpace(name))
        {
            Console.WriteLine("Student name is required.");
            return;
        }

        if (!decimal.TryParse(mathInput, out decimal mathMarks) ||
            !decimal.TryParse(programmingInput, out decimal programmingMarks))
        {
            Console.WriteLine("Invalid marks entered.");
            return;
        }

        if (mathMarks < 0 || mathMarks > 100 ||
            programmingMarks < 0 || programmingMarks > 100)
        {
            Console.WriteLine("Marks must be between 0 and 100.");
            return;
        }

        decimal total = mathMarks + programmingMarks;

        decimal average = total / 2m;

        bool passed = average >= PASS_MARK;

        Console.WriteLine("\n===== STUDENT RESULTS =====");

        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Mathematics: {mathMarks}");
        Console.WriteLine($"Programming: {programmingMarks}");
        Console.WriteLine($"Total: {total}");
        Console.WriteLine($"Average: {average:F2}");
        Console.WriteLine($"Passed: {passed}");
    }
}
```

## 2. Understanding the Program Line by Line

### Section A: Constant declaration

```csharp
const decimal PASS_MARK = 50m;
```

Defines the minimum average required to pass.

The value is stored as a decimal because the program performs decimal calculations.

The `const` keyword prevents the value from being reassigned.

### Section B: Student name

```csharp
Console.Write("Enter student name: ");

string? name = Console.ReadLine();
```

The first line asks the user to enter a name.

The second reads the input and stores it in a string variable.

The `?` indicates that the value can be null.

### Section C: Collecting marks

```csharp
string? mathInput = Console.ReadLine();
string? programmingInput = Console.ReadLine();
```

These variables initially store text.

We will convert the values into decimals after receiving them.

### Section D: Validating the name

```csharp
if (string.IsNullOrWhiteSpace(name))
```

Checks whether the name is null, empty, or contains only whitespace.

If the condition is true, the program displays an error and stops.

### Section E: Converting marks

```csharp
if (!decimal.TryParse(mathInput, out decimal mathMarks) ||
    !decimal.TryParse(programmingInput, out decimal programmingMarks))
```

Attempts to convert both inputs into decimal values.

The `!` operator reverses a Boolean result.

Therefore, the condition becomes true if either conversion fails.

The `||` operator means OR.

### Section F: Validating the range

```csharp
if (mathMarks < 0 || mathMarks > 100 ||
    programmingMarks < 0 || programmingMarks > 100)
```

Ensures that both examination marks fall between zero and 100.

### Section G: Calculating the total

```csharp
decimal total = mathMarks + programmingMarks;
```

Adds the two marks.

### Section H: Calculating the average

```csharp
decimal average = total / 2m;
```

Divides the total by two.

The `2m` represents a decimal literal.

### Section I: Determining whether the student passed

```csharp
bool passed = average >= PASS_MARK;
```

Compares the average with the minimum passing mark.

The result is either `true` or `false`.

### Section J: Displaying the results

```csharp
Console.WriteLine($"Average: {average:F2}");
```

Displays the average using two decimal places.

The `F2` format specifier controls the number of digits displayed after the decimal point.

## 3. Running the Program

Compile and run:

```bash
dotnet run
```

Example interaction:

```text
Enter student name: Brian
Enter mathematics marks: 85
Enter programming marks: 90

===== STUDENT RESULTS =====
Name: Brian
Mathematics: 85
Programming: 90
Total: 175
Average: 87.50
Passed: True
```

The application demonstrates how different data types work together.

## 4. Project: Simple Banking Balance Calculator

Now let's create a small banking application.

This project demonstrates why choosing the correct numeric data type matters.

For money, we will use `decimal`.

```csharp
using System;

class Program
{
    static void Main()
    {
        decimal balance = 15000.00m;

        Console.Write("Enter deposit amount: ");

        string? input = Console.ReadLine();

        if (!decimal.TryParse(input, out decimal deposit))
        {
            Console.WriteLine("Invalid amount.");
            return;
        }

        if (deposit <= 0)
        {
            Console.WriteLine("Deposit must be greater than zero.");
            return;
        }

        balance += deposit;

        Console.WriteLine($"New balance: KSh {balance:N2}");
    }
}
```

### Understanding the important statements

```csharp
decimal balance = 15000.00m;
```

Creates a decimal variable representing the starting account balance.

```csharp
decimal.TryParse(input, out decimal deposit)
```

Attempts to convert the user's input into a decimal.

```csharp
if (deposit <= 0)
```

Prevents zero or negative deposits.

```csharp
balance += deposit;
```

Adds the deposit to the existing balance.

This is shorthand for:

```csharp
balance = balance + deposit;
```

```csharp
Console.WriteLine($"New balance: KSh {balance:N2}");
```

Displays the balance using a numeric format with two decimal places and grouping separators.

### Example interaction

```text
Enter deposit amount: 2500

New balance: KSh 17,500.00
```

**Important:** This is a learning example, not a production banking system. Real financial applications need transaction records, authorization, concurrency control, persistence, and appropriate rounding and currency rules.

## 5. Project: Temperature Converter

Let's build a temperature converter using floating-point values.

The conversion formula from Celsius to Fahrenheit is:

F = (C × 9 / 5) + 32

Program:

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter temperature in Celsius: ");

        string? input = Console.ReadLine();

        if (double.TryParse(input, out double celsius))
        {
            double fahrenheit = (celsius * 9 / 5) + 32;

            Console.WriteLine($"Fahrenheit: {fahrenheit:F2}");
        }
        else
        {
            Console.WriteLine("Please enter a valid temperature.");
        }
    }
}
```

### Explanation

```csharp
double.TryParse(input, out double celsius)
```

Converts the user's text into a double.

```csharp
double fahrenheit = (celsius * 9 / 5) + 32;
```

Applies the mathematical conversion formula.

```csharp
Console.WriteLine($"Fahrenheit: {fahrenheit:F2}");
```

Displays the result to two decimal places.

Example:

```text
Enter temperature in Celsius: 30
Fahrenheit: 86.00
```

## 6. Understanding Variable Scope

Variable scope determines where a variable can be accessed.

### Local variables

A local variable is declared inside a method or block.

Example:

```csharp
class Program
{
    static void Main()
    {
        int age = 22;

        Console.WriteLine(age);
    }
}
```

The variable `age` is local to Main.

It cannot be accessed directly from an unrelated method.

### Field variables

A field is declared inside a class but outside its methods.

Example:

```csharp
class Student
{
    public string Name = "Brian";

    public void Display()
    {
        Console.WriteLine(Name);
    }
}
```

The field `Name` belongs to the Student object.

It can be accessed by the instance methods of that object.

### Static fields

A static field belongs to the class itself.

Example:

```csharp
class School
{
    public static int TotalStudents = 100;
}
```

It can be accessed using:

```csharp
Console.WriteLine(School.TotalStudents);
```

### Comparing the three

| Variable type | Declared where? | Belongs to |
|---|---|---|
| Local variable | Inside a method or block | The local scope |
| Instance field | Inside a class, outside methods | An object |
| Static field | Inside a class using `static` | The type |

## 7. Common Mistakes When Working with Variables and Types

### Mistake 1: Assigning the wrong data type

Incorrect:

```csharp
int age = "22";
```

Correct:

```csharp
int age = 22;
```

An integer variable cannot directly store a string.

### Mistake 2: Forgetting numeric suffixes

Incorrect:

```csharp
float temperature = 36.5;
```

The literal `36.5` is a double by default.

Correct:

```csharp
float temperature = 36.5f;
```

### Mistake 3: Using int for financial values

Potentially unsuitable:

```csharp
int price = 250.75;
```

Correct:

```csharp
decimal price = 250.75m;
```

### Mistake 4: Converting user input without validation

Risky:

```csharp
int age = int.Parse(Console.ReadLine()!);
```

If the user enters invalid text, the application may throw an exception.

Safer:

```csharp
string? input = Console.ReadLine();

if (int.TryParse(input, out int age))
{
    Console.WriteLine(age);
}
else
{
    Console.WriteLine("Invalid age.");
}
```

### Mistake 5: Confusing var with dynamic

Incorrect understanding:

`var` means a variable can store any type.

Correct understanding:

`var` allows the compiler to infer a fixed type.

### Mistake 6: Ignoring overflow

A calculation may exceed the range of its data type.

Use appropriate types and checked arithmetic where necessary.

## 8. Independent Practical Exercises

### Exercise 1: Personal Information

Create variables to store:

- Full name.
- Age.
- Course.
- Institution.
- Registration status.

Display all the information.

Use appropriate data types.

### Exercise 2: Marks Calculator

Create a program that:

1. Accepts marks for three subjects.
2. Converts the inputs into decimal values.
3. Calculates the total.
4. Calculates the average.
5. Displays the result.

Validate the marks so that they are between zero and 100.

### Exercise 3: Currency Calculator

Create a program that accepts an amount in Kenyan shillings and converts it into another currency using an exchange rate entered by the user.

Use `decimal` for the financial values.

### Exercise 4: Type Conversion

Create a program that:

1. Declares an integer.
2. Converts it into a double.
3. Converts a decimal into an integer using explicit casting.
4. Converts a numeric string into an integer.
5. Explains the difference between each conversion.

### Exercise 5: Constants

Create a program that calculates the area of a circle.

Use:

- A constant for Pi.
- A variable for the radius.
- A variable for the calculated area.

Formula:

Area = π × radius × radius

### Exercise 6: Nullable Variables

Create a nullable integer representing a student's examination mark.

If the mark is null, display:

`No examination mark recorded.`

Otherwise, display the mark.

**Part 3 Summary**

You have learned:

- How to create practical applications using variables.
- How to calculate examination results.
- Why decimal is useful for financial values.
- How to convert and validate user input.
- How to use constants in real applications.
- How variable scope works.
- How to identify common data-type errors.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND PRACTICAL EVALUATION

## 1. Assessment Instructions

Welcome to the C# Programming: Variables and Types assessment.

This assessment evaluates your understanding of variable declaration, data types, constants, type conversion, nullability, and practical data handling.

Attempt each question independently.

Submit your answers and practical programs to Kai for marking and feedback.

---

## SECTION A: MULTIPLE-CHOICE QUESTIONS

Choose the correct answer.

**Question 1**

What is a variable?

A. A command used to terminate a program.

B. A named storage location used to hold a value.

C. A type of loop.

D. A method used to compile code.

**Question 2**

Which data type is suitable for storing a student's age?

A. `string`

B. `bool`

C. `int`

D. `char`

**Question 3**

Which data type is most appropriate for general financial calculations in C#?

A. `bool`

B. `decimal`

C. `char`

D. `byte`

**Question 4**

What is the default type of a decimal numeric literal such as `25.5`?

A. `int`

B. `float`

C. `double`

D. `decimal`

**Question 5**

Which suffix identifies a float literal?

A. `m`

B. `f`

C. `l`

D. `d`

**Question 6**

Which data type stores either `true` or `false`?

A. `int`

B. `string`

C. `bool`

D. `double`

**Question 7**

What does the `const` keyword do?

A. Declares a value that cannot be reassigned.

B. Declares a variable that changes automatically.

C. Creates a class.

D. Converts strings into integers.

**Question 8**

What is the purpose of `var`?

A. To make a variable change type automatically.

B. To allow the compiler to infer the variable's type.

C. To create a constant.

D. To declare a method.

**Question 9**

Which method safely attempts to convert a string into an integer?

A. `int.Display()`

B. `int.TryParse()`

C. `int.Print()`

D. `int.Convert()`

**Question 10**

What does explicit casting do?

A. Converts a value into another type using a specified conversion.

B. Deletes a variable.

C. Creates a new class.

D. Stops program execution.

**Question 11**

What does the `?` in `int? age` indicate?

A. The variable must contain zero.

B. The variable can contain an integer or null.

C. The variable is constant.

D. The variable is a string.

**Question 12**

What is overflow?

A. A variable receiving an invalid name.

B. A value exceeding the range that its data type can represent.

C. A program entering an infinite loop.

D. A method returning a value.

---

## SECTION B: CONCEPTUAL QUESTIONS

Answer in your own words.

**Question 13**

Explain the difference between a variable and a data type.

**Question 14**

Describe the difference between `int`, `float`, `double`, and `decimal`.

**Question 15**

Why is `decimal` commonly recommended for financial calculations?

**Question 16**

Explain the difference between value types and reference types.

**Question 17**

What is the purpose of the `const` keyword?

**Question 18**

Explain the difference between `const` and `readonly`.

**Question 19**

What is type inference, and how does the `var` keyword support it?

**Question 20**

Explain the difference between `var` and `dynamic`.

**Question 21**

What is type conversion? Explain implicit conversion and explicit casting.

**Question 22**

Why is `TryParse()` generally useful when receiving user input?

**Question 23**

What are nullable value types?

**Question 24**

Explain what variable scope means.

---

## SECTION C: CODE INTERPRETATION

Study each example and answer the questions.

**Question 25**

```csharp
int number = 20;

double result = number;

Console.WriteLine(result);
```

Answer:

1. What is the output?
2. What type is `number`?
3. What type is `result`?
4. What type of conversion occurs?

**Question 26**

```csharp
double price = 99.95;

int wholePrice = (int)price;

Console.WriteLine(wholePrice);
```

Answer:

1. What is the output?
2. Why is the fractional part missing?
3. What does `(int)` represent?

**Question 27**

```csharp
string name = "Brian";

int age = 22;

Console.WriteLine($"My name is {name} and I am {age}.");
```

Answer:

1. What is the output?
2. What is string interpolation?
3. Why is `$` used before the string?

**Question 28**

```csharp
int? age = null;

Console.WriteLine(age.HasValue);
```

Answer:

1. What is the output?
2. What does `int?` mean?
3. What does `HasValue` check?

---

## SECTION D: DEBUGGING

Identify the problem and provide a corrected version.

**Question 29**

```csharp
int age = "22";
```

Explain why this assignment is invalid.

**Question 30**

```csharp
float temperature = 36.5;
```

What is wrong with the declaration?

**Question 31**

```csharp
const int MAX_STUDENTS = 100;

MAX_STUDENTS = 150;
```

Why does the second statement fail?

**Question 32**

```csharp
string? input = Console.ReadLine();

int age = int.Parse(input);
```

What can happen if the user enters text that is not a valid integer? Show how to handle the conversion safely.

**Question 33**

```csharp
int first = 10;

int second = first;

second = 50;

Console.WriteLine(first);
```

What is the output? Explain why changing `second` does not change `first`.

---

## SECTION E: PRACTICAL PROGRAMMING CHALLENGES

### Challenge 1: Student Profile

Create a program that stores:

- Student name.
- Age.
- Course.
- Registration number.
- Examination status.

Use suitable data types and display the information.

### Challenge 2: Examination Calculator

Develop a program that:

1. Accepts marks for five subjects.
2. Validates all marks.
3. Calculates the total.
4. Calculates the average.
5. Determines whether the student has passed.

Use `decimal` for the marks and average.

### Challenge 3: Banking Calculator

Create a simple banking calculator that:

1. Stores an initial balance.
2. Accepts a deposit.
3. Accepts a withdrawal.
4. Calculates the remaining balance.
5. Prevents invalid transactions.

Use `decimal` for monetary values.

### Challenge 4: Type Conversion Application

Create an application that demonstrates:

- Implicit conversion.
- Explicit casting.
- `Convert` methods.
- `Parse()`.
- `TryParse()`.

Display the results of each conversion.

### Challenge 5: Temperature Converter

Build an application that accepts temperatures in Celsius and converts them to Fahrenheit.

Validate user input and display the result to two decimal places.

---

## SECTION F: FINAL PROJECT

# Project: Student Information and Results System

Develop a C# console application that manages student information and calculates examination results.

### 1. Student Information

Your application should store:

- Full name.
- Registration number.
- Age.
- Course.
- Examination marks.

### 2. Appropriate Data Types

Use:

- `string` for names and registration numbers.
- `int` for age.
- `decimal` for examination marks.
- `bool` for registration or examination status.

### 3. Constants

Define constants for:

- Maximum examination marks.
- Minimum passing mark.

### 4. Input Validation

Your program should:

- Reject invalid numeric input.
- Prevent negative marks.
- Prevent marks above the maximum.
- Require a valid student name.

### 5. Calculations

Calculate:

- Total marks.
- Average marks.
- Pass or fail status.

### 6. Display Results

Display information in a format similar to:

```text
====================================
       STUDENT RESULTS SYSTEM
====================================

Student Name: Brian Njogu
Registration: BBIT/001/2026
Age: 22
Course: BBIT

Mathematics: 85
Programming: 90
Database Systems: 80

Total Marks: 255
Average: 85.00
Status: PASSED

====================================
```

### 7. Code Organization

Use separate methods for:

- Collecting student information.
- Validating input.
- Calculating results.
- Displaying results.

Use meaningful variable names and appropriate data types throughout the application.

---

## 2. Submission to Kai

Submit your answers and completed project to Kai.

Kai should evaluate:

| Assessment area | What Kai should check |
|---|---|
| Variable declaration | Correct syntax and initialization |
| Data types | Appropriate type selection |
| Value and reference types | Understanding of assignment behavior |
| Constants | Correct use of `const` and `readonly` |
| Type inference | Correct use of `var` |
| Type conversion | Implicit and explicit conversions |
| Parsing | Correct use of `Parse()` and `TryParse()` |
| Nullability | Understanding of nullable values |
| Overflow | Recognition and prevention of overflow |
| Practical programming | Correct application of variables and types |

## 3. Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain what variables are.
- [ ] Declare and initialize variables.
- [ ] Follow C# naming conventions.
- [ ] Understand value types and reference types.
- [ ] Use integer data types.
- [ ] Use floating-point data types.
- [ ] Use Boolean values.
- [ ] Work with characters and strings.
- [ ] Use constants.
- [ ] Understand readonly fields.
- [ ] Use type inference with `var`.
- [ ] Understand `dynamic`.
- [ ] Perform implicit conversions.
- [ ] Perform explicit casting.
- [ ] Use `Convert` methods.
- [ ] Parse strings into numeric values.
- [ ] Validate input using `TryParse()`.
- [ ] Understand nullable types.
- [ ] Detect and prevent overflow.
- [ ] Build applications using appropriate data types.

## 4. Lesson Completion

Congratulations!

You have completed **C# Programming: Variables and Types**.

You now understand how C# stores, represents, converts, and processes information.

These concepts form the foundation for nearly every C# application you will build.

Whether you are developing APIs, desktop applications, games, or enterprise systems, choosing and managing data types correctly is essential.

# NEXT LESSON

**C# Programming: Operators**

In the next lesson, you will learn how to perform arithmetic calculations, compare values, combine Boolean conditions, assign values, and manipulate data using C# operators.

**Part 4 of 4 — Lesson Complete**