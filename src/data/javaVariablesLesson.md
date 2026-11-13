# JAVA PROGRAMMING
# LESSON 2: VARIABLES AND DATA TYPES

# PART 1: UNDERSTANDING JAVA VARIABLES

## 1. What Is a Variable?

A **variable** is a named storage location used to hold data that a program can access and work with.

When developing software, applications need to store different kinds of information.

For example, a school management system may need to store:

- Student names.
- Registration numbers.
- Student ages.
- Examination marks.
- Fee balances.
- Whether a student is registered.

Instead of writing these values directly everywhere in a program, we store them in variables.

Example:

```java
public class Main {

    public static void main(String[] args) {

        String studentName = "Brian";
        int age = 22;
        double feeBalance = 15000.50;
        boolean isRegistered = true;

        System.out.println(studentName);
        System.out.println(age);
        System.out.println(feeBalance);
        System.out.println(isRegistered);

    }
}
```

Output:

```text
Brian
22
15000.5
true
```

Let's understand what happens.

- `String studentName` declares a variable that can store text.
- `"Brian"` is the value assigned to the variable.
- `int age` declares a variable that stores whole numbers.
- `22` is the assigned age.
- `double feeBalance` declares a variable for decimal numbers.
- `15000.50` is the fee balance.
- `boolean isRegistered` declares a variable that stores either `true` or `false`.

Each variable has a name, a data type, and a value.

## 2. Understanding Variable Declaration and Initialization

Two important terms in Java are **declaration** and **initialization**.

### Variable Declaration

Declaration means introducing a variable by specifying its data type and name.

Example:

```java
int age;
```

Explanation:

- `int` specifies the variable's data type.
- `age` is the variable's name.
- `;` terminates the statement.

At this point, the variable has been declared, but no value has been assigned.

### Variable Initialization

Initialization means assigning an initial value to a variable.

```java
int age = 22;
```

Here, the variable is both declared and initialized.

### Declaration First, Initialization Later

Java also allows you to declare a variable and assign its value later.

```java
public class Main {

    public static void main(String[] args) {

        int age;

        age = 22;

        System.out.println(age);

    }
}
```

Output:

```text
22
```

Explanation:

1. `int age;` declares the variable.
2. `age = 22;` assigns a value to it.
3. `System.out.println(age);` displays the stored value.

**Important:** A local variable must be assigned a value before you use it. Otherwise, Java reports a compilation error.

## 3. Changing Variable Values

Variables allow programs to store values that may change while the application runs.

Example:

```java
public class Main {

    public static void main(String[] args) {

        int balance = 1000;

        System.out.println(balance);

        balance = 1500;

        System.out.println(balance);

    }
}
```

Output:

```text
1000
1500
```

Explanation:

- `int balance = 1000;` creates a variable with an initial value of 1000.
- The first `println()` displays 1000.
- `balance = 1500;` replaces the previous value.
- The second `println()` displays 1500.

This is called **reassignment**.

Notice that we did not write `int` again when changing the value.

The variable was already declared.

## 4. Java Variable Naming Rules

Java has rules that determine how variables can be named.

A variable name is also called an identifier.

### Rules

1. A variable name cannot contain spaces.
2. It cannot begin with a number.
3. It can contain letters, numbers, underscores, and dollar signs.
4. Java keywords cannot be used as variable names.
5. Variable names are case-sensitive.

Examples:

| Variable name | Valid? | Explanation |
|---|---|---|
| `studentName` | Yes | Valid identifier |
| `age` | Yes | Valid identifier |
| `student_age` | Yes | Underscore is allowed |
| `student2` | Yes | Numbers are allowed after the first character |
| `2student` | No | Cannot start with a number |
| `student name` | No | Spaces are not allowed |
| `class` | No | Java keyword |
| `totalMarks` | Yes | Valid identifier |

### Naming Conventions

Java developers follow naming conventions to make code readable.

The most common variable naming style is **camelCase**.

Examples:

```java
String studentName;
int registrationNumber;
double accountBalance;
boolean isActive;
```

Notice how the first word starts with a lowercase letter and subsequent words begin with uppercase letters.

Avoid unclear names such as:

```java
int x;
double y;
String a;
```

Unless the meaning is obvious from the context, descriptive names make programs easier to understand and maintain.

## 5. Types of Variables in Java

Java variables can be classified according to where they are declared and how they belong to classes or objects.

Three important categories are:

1. Local variables.
2. Instance variables.
3. Static variables.

### A. Local Variables

A local variable is declared inside a method, constructor, or code block.

Example:

```java
public class Main {

    public static void main(String[] args) {

        int age = 22;

        System.out.println(age);

    }
}
```

Here, `age` is a local variable because it is declared inside the `main()` method.

Local variables can only be accessed within their applicable scope.

They must be initialized before they are used.

### B. Instance Variables

An instance variable is declared inside a class but outside methods, constructors, and initialization blocks.

It belongs to an object created from that class.

Example:

```java
public class Student {

    String name;
    int age;

    public static void main(String[] args) {

        Student student1 = new Student();

        student1.name = "Brian";
        student1.age = 22;

        System.out.println(student1.name);
        System.out.println(student1.age);

    }
}
```

Output:

```text
Brian
22
```

Explanation:

- `String name;` declares an instance variable.
- `int age;` declares another instance variable.
- `new Student()` creates a student object.
- `student1.name` accesses the name belonging to that object.
- `student1.age` accesses its age.

Each object can have its own instance variable values.

For example:

```java
Student student1 = new Student();
Student student2 = new Student();

student1.name = "Brian";
student2.name = "Mary";
```

The two objects have separate names.

### C. Static Variables

A static variable belongs to the class rather than to individual objects.

It is declared using the `static` keyword.

Example:

```java
public class Student {

    static String schoolName = "CodeLab Academy";

    String studentName;

    public static void main(String[] args) {

        Student student1 = new Student();
        Student student2 = new Student();

        student1.studentName = "Brian";
        student2.studentName = "Mary";

        System.out.println(Student.schoolName);
        System.out.println(student1.studentName);
        System.out.println(student2.studentName);

    }
}
```

Output:

```text
CodeLab Academy
Brian
Mary
```

Explanation:

- `static String schoolName` declares a class-level variable.
- `String studentName` declares an instance variable.
- Both students can access the shared school name.
- Each student has a separate student name.
- `Student.schoolName` accesses the static variable using the class name.

### Comparing Variable Types

| Variable type | Where declared | Belongs to | Example |
|---|---|---|---|
| Local | Inside a method or block | That scope's execution | `int age = 22;` |
| Instance | Inside a class, outside methods | An object | `String name;` |
| Static | Inside a class using `static` | The class | `static int count;` |

## 6. Understanding Variable Scope

Scope determines where a variable can be accessed in a program.

Example:

```java
public class Main {

    public static void main(String[] args) {

        int age = 22;

        if (age >= 18) {

            String status = "Adult";

            System.out.println(status);

        }

        System.out.println(age);

    }
}
```

Output:

```text
Adult
22
```

Explanation:

- `age` is declared inside `main()`, so it can be accessed throughout the applicable method body.
- `status` is declared inside the `if` block.
- It can only be accessed within that block.
- Trying to access `status` after the closing brace of the `if` block causes a compilation error.

For example, this is incorrect:

```java
System.out.println(status);
```

because `status` is outside its scope.

## Part 1 Exercises

1. Create a variable called `studentName` and assign your name to it.
2. Declare an integer variable called `age` and initialize it later.
3. Create a variable called `balance`, assign 1000, and change it to 2000.
4. Identify which of these names are valid Java identifiers: `studentName`, `2age`, `total_marks`, `class`, `student name`.
5. Explain the difference between declaration and initialization.
6. Differentiate between local, instance, and static variables.
7. Explain what variable scope means.

**Progress: Part 1 of 4**

---

# PART 2: JAVA DATA TYPES

## 7. What Is a Data Type?

A **data type** specifies the kind of value a variable can store.

Java is a statically typed programming language.

This means you must declare a variable's type before using it, and Java checks whether the values and operations are compatible with that type.

For example:

```java
int age = 22;
```

The variable `age` is an integer.

You cannot assign an ordinary text value to it:

```java
int age = "Brian";
```

This produces a compilation error because `"Brian"` is a string, not an integer.

Java data types are divided into two main categories:

1. Primitive data types.
2. Reference data types.

Let's understand each category.

## 8. Primitive Data Types

Primitive data types are Java's basic built-in types.

Java has eight primitive data types:

1. `byte`
2. `short`
3. `int`
4. `long`
5. `float`
6. `double`
7. `char`
8. `boolean`

They can be grouped into four categories.

### A. Integer Types

Integer types store whole numbers without decimal parts.

Java provides four integer types.

| Data type | Size | Range |
|---|---:|---|
| `byte` | 8 bits | -128 to 127 |
| `short` | 16 bits | -32,768 to 32,767 |
| `int` | 32 bits | -2,147,483,648 to 2,147,483,647 |
| `long` | 64 bits | Approximately -9.22 quintillion to +9.22 quintillion |

Let's understand them individually.

### 1. byte

The `byte` data type stores small whole numbers.

Example:

```java
byte age = 22;

System.out.println(age);
```

Output:

```text
22
```

A byte is useful when working with large collections of small integer values where memory efficiency matters.

However, `int` is generally the default choice for ordinary integer calculations.

### 2. short

The `short` type stores whole numbers within a larger range than `byte`.

Example:

```java
short population = 30000;

System.out.println(population);
```

Output:

```text
30000
```

It occupies 16 bits.

### 3. int

The `int` type is commonly used for whole numbers.

Example:

```java
int students = 500;

System.out.println(students);
```

Output:

```text
500
```

You will frequently use `int` for:

- Ages.
- Quantities.
- Scores.
- Product counts.
- Registration numbers when their numeric representation is appropriate.

Remember that identifiers such as phone numbers and registration codes are often better represented as strings because they are not quantities used for arithmetic.

### 4. long

The `long` type stores very large whole numbers.

Example:

```java
long nationalPopulation = 55000000L;

System.out.println(nationalPopulation);
```

Output:

```text
55000000
```

Notice the `L` at the end.

The suffix `L` identifies the integer literal as a `long`.

It is recommended to use uppercase `L` because lowercase `l` can look like the number `1`.

### Comparing Integer Types

```java
byte smallNumber = 100;
short mediumNumber = 20000;
int normalNumber = 500000;
long largeNumber = 9000000000L;
```

These variables store different ranges of whole numbers.

## 9. Floating-Point Types

Floating-point types store numbers that can have decimal components.

Java has two main floating-point types:

- `float`
- `double`

### 1. float

The `float` type uses 32 bits.

Example:

```java
float temperature = 36.5f;

System.out.println(temperature);
```

Output:

```text
36.5
```

Notice the `f` suffix.

Java treats decimal literals such as `36.5` as `double` by default.

The `f` tells Java that the literal should be treated as a `float`.

Without it, assigning a decimal literal directly to a `float` normally causes a compilation error.

### 2. double

The `double` type uses 64 bits.

Example:

```java
double accountBalance = 15000.75;

System.out.println(accountBalance);
```

Output:

```text
15000.75
```

`double` is generally preferred over `float` for ordinary decimal calculations because it provides greater precision.

However, neither `float` nor `double` represents every decimal fraction exactly.

For financial applications, `BigDecimal` is often preferred because it supports decimal arithmetic with explicit precision and rounding control.

### float versus double

| Feature | float | double |
|---|---|---|
| Size | 32 bits | 64 bits |
| Precision | About 6–7 decimal digits | About 15–16 decimal digits |
| Literal suffix | `f` or `F` | `d` or `D`, usually omitted |
| Typical use | Memory-sensitive numerical work | General decimal calculations |

Example:

```java
float value1 = 25.5f;
double value2 = 25.5;

System.out.println(value1);
System.out.println(value2);
```

## 10. Character Type

The `char` data type stores a single UTF-16 code unit.

It uses 16 bits.

Example:

```java
char grade = 'A';

System.out.println(grade);
```

Output:

```text
A
```

Notice that a character uses single quotation marks.

Correct:

```java
char letter = 'B';
```

Incorrect:

```java
char letter = "B";
```

Double quotation marks represent strings, not character literals.

### Characters Can Also Be Represented Using Unicode

```java
char symbol = '\u0041';

System.out.println(symbol);
```

Output:

```text
A
```

The Unicode escape `\u0041` represents the character A.

**Important:** Java's `char` represents one UTF-16 code unit, not necessarily one complete visible Unicode character. Some characters, such as many emoji, require two `char` values.

## 11. Boolean Type

The `boolean` type stores logical values.

It has two possible values:

- `true`
- `false`

Example:

```java
boolean isLoggedIn = true;
boolean hasPaidFees = false;

System.out.println(isLoggedIn);
System.out.println(hasPaidFees);
```

Output:

```text
true
false
```

Boolean variables are commonly used in conditions and decision-making.

For example:

```java
boolean isAdult = true;

if (isAdult) {
    System.out.println("Access granted");
}
```

Output:

```text
Access granted
```

We will explore conditions in a later Java lesson.

## 12. Understanding All Eight Primitive Types

Here is a complete reference table.

| Type | Category | Size | Example |
|---|---|---:|---|
| `byte` | Integer | 8 bits | `byte age = 22;` |
| `short` | Integer | 16 bits | `short year = 2026;` |
| `int` | Integer | 32 bits | `int marks = 85;` |
| `long` | Integer | 64 bits | `long population = 55000000L;` |
| `float` | Decimal | 32 bits | `float price = 25.5f;` |
| `double` | Decimal | 64 bits | `double balance = 1500.75;` |
| `char` | Character | 16 bits | `char grade = 'A';` |
| `boolean` | Logical | JVM-dependent representation | `boolean active = true;` |

The sizes shown are the language-defined storage widths for the numeric and character primitives. Java does not specify a fixed memory size for a boolean value in every JVM context.

## 13. Reference Data Types

Unlike primitive types, reference types refer to objects.

They include:

- Strings.
- Arrays.
- Classes.
- Interfaces.
- Enums.
- Other object types.

### A. String

A `String` stores a sequence of characters.

Example:

```java
String name = "Brian";

System.out.println(name);
```

Output:

```text
Brian
```

Notice that `String` begins with an uppercase S.

It is not a primitive data type. It is a class provided by Java.

You can store longer text:

```java
String message = "Welcome to Java Programming";

System.out.println(message);
```

### B. Arrays

An array stores multiple values of the same declared component type.

Example:

```java
int[] marks = {80, 75, 90, 85};

System.out.println(marks[0]);
```

Output:

```text
80
```

The array stores four integers.

We will explore Java arrays in a dedicated lesson.

### C. Objects

You can create your own reference types using classes.

Example:

```java
public class Student {

    String name;
    int age;

    public static void main(String[] args) {

        Student student = new Student();

        student.name = "Brian";
        student.age = 22;

        System.out.println(student.name);
        System.out.println(student.age);

    }
}
```

Output:

```text
Brian
22
```

Here:

- `Student` is a class.
- `student` is a reference variable.
- `new Student()` creates an object.
- The variable refers to that object.

### Primitive versus Reference Types

| Feature | Primitive types | Reference types |
|---|---|---|
| Examples | `int`, `double`, `char` | `String`, arrays, objects |
| Stores | A primitive value | A reference to an object or `null` |
| Can be null | No | Yes |
| Methods | No instance methods | Objects can provide methods |
| Examples of declarations | `int age = 22;` | `String name = "Brian";` |

**Important:** A reference variable does not necessarily contain an object. It can contain `null`, meaning it does not currently refer to an object.

## 14. Default Values in Java

Java automatically provides default values for fields when an object or class is initialized.

Example:

```java
public class Main {

    int age;
    double balance;
    boolean active;
    String name;

    public static void main(String[] args) {

        Main example = new Main();

        System.out.println(example.age);
        System.out.println(example.balance);
        System.out.println(example.active);
        System.out.println(example.name);

    }
}
```

Output:

```text
0
0.0
false
null
```

Why?

Java assigns default values to fields.

| Data type | Default value |
|---|---|
| `byte` | `0` |
| `short` | `0` |
| `int` | `0` |
| `long` | `0L` |
| `float` | `0.0f` |
| `double` | `0.0d` |
| `char` | `'\u0000'` |
| `boolean` | `false` |
| Reference types | `null` |

**Important distinction:** Local variables do not automatically receive these default values. They must be initialized before use.

## 15. Using the var Keyword

Modern Java supports local variable type inference using the `var` keyword.

Example:

```java
var name = "Brian";
var age = 22;
var balance = 1500.50;

System.out.println(name);
System.out.println(age);
System.out.println(balance);
```

Java determines the variable types from their initial values.

The compiler infers:

- `name` as `String`.
- `age` as `int`.
- `balance` as `double`.

However, `var` does not make Java dynamically typed.

The type is still determined at compile time.

For example:

```java
var age = 22;

age = 25;
```

This is valid because both values are integers.

But:

```java
var age = 22;

age = "Brian";
```

This causes a compilation error because the variable was inferred as an `int`.

### Rules for var

- It can be used for local variable declarations.
- It must have an initializer.
- It cannot be used as a field type.
- It cannot be used as a method parameter type in an ordinary method declaration.
- It cannot be used as a method return type.

For beginners, explicit types are often clearer:

```java
String name = "Brian";
int age = 22;
```

**Progress: Part 2 of 4**

---

# PART 3: TYPE CONVERSION AND PRACTICAL JAVA PROGRAMMING

## 16. What Is Type Conversion?

Type conversion means changing a value from one data type to another.

For example, you may have an integer and need to use it in a decimal calculation.

Java supports two important forms of conversion:

1. Widening conversion.
2. Narrowing conversion.

## 17. Widening Conversion (Automatic Conversion)

Widening occurs when a value is converted from a smaller compatible numeric type to a larger numeric type.

Java can perform many widening conversions automatically.

Example:

```java
public class Main {

    public static void main(String[] args) {

        int number = 100;

        double result = number;

        System.out.println(number);
        System.out.println(result);

    }
}
```

Output:

```text
100
100.0
```

Explanation:

```java
int number = 100;
```

Creates an integer variable.

```java
double result = number;
```

Converts the integer value into a double automatically.

The result is `100.0`.

### Common Widening Conversions

```text
byte → short → int → long → float → double
```

Also:

```text
char → int → long → float → double
```

These illustrate common widening paths. Java permits certain conversions in this chain, but not every conversion preserves all precision. For example, a very large `long` converted to `float` may lose precision.

## 18. Narrowing Conversion (Manual Conversion)

Narrowing occurs when converting a value into a type with a smaller range or less precision.

Java generally requires an explicit cast.

Example:

```java
public class Main {

    public static void main(String[] args) {

        double price = 99.99;

        int result = (int) price;

        System.out.println(result);

    }
}
```

Output:

```text
99
```

Explanation:

```java
double price = 99.99;
```

Stores a decimal number.

```java
int result = (int) price;
```

The `(int)` tells Java to convert the decimal value into an integer.

The fractional part is discarded.

The result becomes `99`.

**Important:** Casting from a floating-point value to an integer truncates the fractional part. It does not round to the nearest integer.

### Another Example

```java
long population = 5000L;

int result = (int) population;

System.out.println(result);
```

Output:

```text
5000
```

The cast explicitly converts the long into an integer.

However, if the original value is outside the range of `int`, information can be lost.

## 19. Understanding Type Conversion Between char and int

Java allows conversions between characters and integers.

Example:

```java
char letter = 'A';

int code = letter;

System.out.println(code);
```

Output:

```text
65
```

Why?

The character `'A'` has the numeric value 65 in the Unicode character set.

You can also convert a number into a character:

```java
int code = 66;

char letter = (char) code;

System.out.println(letter);
```

Output:

```text
B
```

This is useful when working with character codes.

## 20. Converting Strings into Numbers

When working with user input, information is often received as text.

For example, a user may enter:

```text
500
```

Even though the value looks like a number, it may initially be represented as a string.

Java provides methods for converting strings into numeric values.

### A. Integer.parseInt()

Converts a numeric string into an integer.

```java
public class Main {

    public static void main(String[] args) {

        String ageText = "22";

        int age = Integer.parseInt(ageText);

        System.out.println(age + 5);

    }
}
```

Output:

```text
27
```

Explanation:

- `ageText` stores the string `"22"`.
- `Integer.parseInt(ageText)` converts it into an integer.
- The result is stored in `age`.
- Java adds 5 to the integer.

Without conversion, using the `+` operator with strings could produce concatenation instead of arithmetic.

### B. Double.parseDouble()

Converts a numeric string into a double.

```java
String priceText = "1500.75";

double price = Double.parseDouble(priceText);

System.out.println(price + 100);
```

Output:

```text
1600.75
```

### C. Other Conversion Methods

| Method | Purpose |
|---|---|
| `Byte.parseByte()` | Converts text into a byte |
| `Short.parseShort()` | Converts text into a short |
| `Integer.parseInt()` | Converts text into an int |
| `Long.parseLong()` | Converts text into a long |
| `Float.parseFloat()` | Converts text into a float |
| `Double.parseDouble()` | Converts text into a double |
| `Boolean.parseBoolean()` | Converts text into a boolean |

**Important:** Invalid numeric text causes a `NumberFormatException`.

Example:

```java
String value = "Brian";

int number = Integer.parseInt(value);
```

This fails because `"Brian"` cannot be converted into an integer.

We will study exception handling later.

## 21. Converting Numbers into Strings

Java also allows you to convert numeric values into strings.

One common method is `String.valueOf()`.

Example:

```java
int age = 22;

String ageText = String.valueOf(age);

System.out.println(ageText);
```

Output:

```text
22
```

Although the displayed output looks like a number, `ageText` is now a string.

You can also use:

```java
String ageText = Integer.toString(age);
```

Both approaches are useful when preparing values for text output, file storage, or communication with other systems.

## 22. Understanding Wrapper Classes

Java provides wrapper classes for its primitive data types.

A wrapper class represents a primitive value as an object.

| Primitive type | Wrapper class |
|---|---|
| `byte` | `Byte` |
| `short` | `Short` |
| `int` | `Integer` |
| `long` | `Long` |
| `float` | `Float` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |

Example:

```java
int number = 100;

Integer wrappedNumber = number;

System.out.println(wrappedNumber);
```

Output:

```text
100
```

Java automatically converts the primitive `int` into an `Integer` object.

This process is called **autoboxing**.

### Unboxing

Unboxing is the reverse process.

```java
Integer wrappedNumber = 200;

int number = wrappedNumber;

System.out.println(number);
```

Output:

```text
200
```

Java automatically extracts the primitive value from the wrapper object.

### Why Are Wrapper Classes Important?

They are useful when working with:

- Collections such as `ArrayList<Integer>`.
- Generic programming.
- APIs that require objects.
- Methods provided by wrapper classes.
- Values that may need to represent the absence of a value using `null`.

Remember that a primitive `int` cannot be null, but an `Integer` reference can.

## 23. Constants Using final

Sometimes you want to create a variable whose value cannot be reassigned after initialization.

Java provides the `final` keyword.

Example:

```java
public class Main {

    public static void main(String[] args) {

        final double PI = 3.14159;

        System.out.println(PI);

    }
}
```

Output:

```text
3.14159
```

Explanation:

- `final` marks the variable as non-reassignable.
- `double` specifies its type.
- `PI` is the variable name.
- `3.14159` is its value.

This is valid:

```java
final int MAX_USERS = 100;
```

But this is invalid:

```java
MAX_USERS = 200;
```

Because the variable is final.

By convention, constants are often named using uppercase letters and underscores.

### Important: final with Objects

When a reference variable is declared `final`, you cannot make it refer to another object.

However, the object itself may still be mutable.

Example:

```java
final int[] numbers = {10, 20, 30};

numbers[0] = 50;

System.out.println(numbers[0]);
```

Output:

```text
50
```

This works because the array contents can change even though the reference cannot be reassigned.

## 24. Practical Project 1: Student Marks Calculator

Let's build a program that stores student information and calculates an average.

### Step 1: Create the project

Create a folder:

```text
JavaProjects/
```

Create a file:

```text
StudentMarks.java
```

### Step 2: Write the program

```java
public class StudentMarks {

    public static void main(String[] args) {

        String studentName = "Brian";

        int mathematics = 80;
        int programming = 90;
        int database = 70;

        int totalMarks = mathematics + programming + database;

        double average = totalMarks / 3.0;

        System.out.println("STUDENT RESULTS");
        System.out.println("----------------");

        System.out.println("Name: " + studentName);

        System.out.println("Mathematics: " + mathematics);
        System.out.println("Programming: " + programming);
        System.out.println("Database: " + database);

        System.out.println("Total Marks: " + totalMarks);

        System.out.println("Average: " + average);

    }
}
```

### Step 3: Understand the program

**Student name:**

```java
String studentName = "Brian";
```

Stores the student's name as text.

**Subject marks:**

```java
int mathematics = 80;
int programming = 90;
int database = 70;
```

Stores three examination scores.

We use `int` because these scores are whole numbers.

**Calculating total marks:**

```java
int totalMarks = mathematics + programming + database;
```

Adds all three scores.

Calculation:

```text
80 + 90 + 70 = 240
```

**Calculating the average:**

```java
double average = totalMarks / 3.0;
```

Divides the total by three.

We use `3.0` instead of `3` to ensure floating-point division.

If both operands were integers, Java would perform integer division and discard any fractional part before assigning the result to a double.

### Step 4: Execute

Compile:

```bash
javac StudentMarks.java
```

Run:

```bash
java StudentMarks
```

Expected output:

```text
STUDENT RESULTS
----------------
Name: Brian
Mathematics: 80
Programming: 90
Database: 70
Total Marks: 240
Average: 80.0
```

## 25. Practical Project 2: Simple Banking Balance Calculator

Now let's create a program that demonstrates numeric types and reassignment.

Create:

```text
BankBalance.java
```

Program:

```java
public class BankBalance {

    public static void main(String[] args) {

        String accountHolder = "Brian";

        double balance = 5000.00;

        double deposit = 2000.00;

        double withdrawal = 1500.00;

        balance = balance + deposit;

        balance = balance - withdrawal;

        System.out.println("ACCOUNT SUMMARY");

        System.out.println("Account Holder: " + accountHolder);

        System.out.println("Deposit: " + deposit);

        System.out.println("Withdrawal: " + withdrawal);

        System.out.println("Final Balance: " + balance);

    }
}
```

### Line-by-line explanation

**Account holder:**

```java
String accountHolder = "Brian";
```

Stores the account holder's name.

**Initial balance:**

```java
double balance = 5000.00;
```

Stores the initial account balance.

**Deposit:**

```java
double deposit = 2000.00;
```

Stores the amount deposited.

**Withdrawal:**

```java
double withdrawal = 1500.00;
```

Stores the withdrawal amount.

**Updating the balance:**

```java
balance = balance + deposit;
```

Adds the deposit to the current balance.

New balance:

```text
5000 + 2000 = 7000
```

Next:

```java
balance = balance - withdrawal;
```

Subtracts the withdrawal.

Final balance:

```text
7000 - 1500 = 5500
```

Expected output:

```text
ACCOUNT SUMMARY
Account Holder: Brian
Deposit: 2000.0
Withdrawal: 1500.0
Final Balance: 5500.0
```

This is a basic learning example. Real banking software requires stronger validation, precise financial calculations, transaction controls, and secure database operations.

## 26. Practical Project 3: Type Conversion Calculator

Let's demonstrate how Java converts text into numbers.

Create:

```text
TypeConversion.java
```

Program:

```java
public class TypeConversion {

    public static void main(String[] args) {

        String firstNumber = "100";
        String secondNumber = "50";

        int number1 = Integer.parseInt(firstNumber);

        int number2 = Integer.parseInt(secondNumber);

        int total = number1 + number2;

        double decimalTotal = total;

        String result = String.valueOf(decimalTotal);

        System.out.println("First Number: " + number1);

        System.out.println("Second Number: " + number2);

        System.out.println("Total: " + total);

        System.out.println("Decimal Total: " + decimalTotal);

        System.out.println("String Result: " + result);

    }
}
```

### Understanding the conversion process

First:

```java
String firstNumber = "100";
String secondNumber = "50";
```

The numbers are initially stored as strings.

Next:

```java
int number1 = Integer.parseInt(firstNumber);
int number2 = Integer.parseInt(secondNumber);
```

Converts both strings into integers.

Next:

```java
int total = number1 + number2;
```

Adds the values.

The result is 150.

Next:

```java
double decimalTotal = total;
```

Automatically converts the integer into a double.

Finally:

```java
String result = String.valueOf(decimalTotal);
```

Converts the double into a string.

Expected output:

```text
First Number: 100
Second Number: 50
Total: 150
Decimal Total: 150.0
String Result: 150.0
```

## 27. Common Java Variable and Data Type Mistakes

### Mistake 1: Assigning the wrong data type

Incorrect:

```java
int age = "22";
```

Why it fails:

`"22"` is a string, while `int` expects an integer.

Correct:

```java
int age = 22;
```

Alternatively:

```java
String ageText = "22";

int age = Integer.parseInt(ageText);
```

### Mistake 2: Forgetting the float suffix

Incorrect:

```java
float price = 25.5;
```

Correct:

```java
float price = 25.5f;
```

The decimal literal `25.5` is a double by default.

### Mistake 3: Using double quotation marks for char

Incorrect:

```java
char grade = "A";
```

Correct:

```java
char grade = 'A';
```

A character literal uses single quotation marks.

### Mistake 4: Using a local variable before initialization

Incorrect:

```java
public static void main(String[] args) {

    int age;

    System.out.println(age);

}
```

Correct:

```java
public static void main(String[] args) {

    int age = 22;

    System.out.println(age);

}
```

Local variables must be initialized before use.

### Mistake 5: Performing integer division unintentionally

Incorrect:

```java
int total = 5;
int count = 2;

double average = total / count;

System.out.println(average);
```

Output:

```text
2.0
```

Why?

Both operands are integers, so Java performs integer division first.

Correct:

```java
double average = (double) total / count;

System.out.println(average);
```

Output:

```text
2.5
```

The cast converts `total` to a double before division.

### Mistake 6: Losing information during narrowing conversion

```java
double amount = 150.75;

int result = (int) amount;

System.out.println(result);
```

Output:

```text
150
```

The decimal portion is discarded.

If you need rounding, use an appropriate rounding method instead of casting.

## Part 3 Practical Exercises

### Exercise 1: Personal Information System

Create a program that stores:

- Full name.
- Age.
- Course.
- Height.
- Whether the student is registered.

Use the correct Java data types.

Display all information.

### Exercise 2: Data Type Demonstration

Create variables for all eight primitive types.

Assign suitable values and display each variable.

### Exercise 3: Employee Salary Calculator

Create a program that stores:

- Employee name.
- Basic salary.
- Allowance.
- Tax amount.

Calculate the final salary:

```text
Final Salary = Basic Salary + Allowance - Tax
```

Use suitable data types.

### Exercise 4: Type Conversion

Create a program that:

1. Stores an integer as a string.
2. Converts it into an integer.
3. Adds another integer.
4. Converts the result into a double.
5. Converts the final value into a string.
6. Displays every stage.

### Exercise 5: Banking Application

Create a program that stores an account balance.

Perform:

1. A deposit.
2. A withdrawal.
3. A balance update.
4. Display of the final balance.

Use suitable numeric data types.

### Exercise 6: Debugging

Correct the following program:

```java
public class Main {

    public static void main(String[] args) {

        int age = "22";

        float price = 150.50;

        char grade = "A";

        int total = 5;
        int count = 2;

        double average = total / count;

        System.out.println(age);
        System.out.println(price);
        System.out.println(grade);
        System.out.println(average);

    }
}
```

Identify every mistake and explain why it happens.

**Progress: Part 3 of 4**

---

# PART 4: KAI ASSESSMENT AND LESSON COMPLETION

This assessment evaluates your understanding of Java variables, primitive types, reference types, variable scope, type conversion, and practical programming.

Answer all questions and submit your work to Kai for marking and feedback.

## SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is a variable in Java?

A. A command used to terminate a program.

B. A named storage location used to hold data.

C. A Java compiler.

D. A method used to print information.

**Question 2**

Which of the following is a valid Java variable declaration?

A. `int age = 22;`

B. `age int = 22;`

C. `int = age 22;`

D. `22 = int age;`

**Question 3**

Which data type stores whole numbers?

A. `String`

B. `boolean`

C. `int`

D. `char`

**Question 4**

Which Java data type stores true or false values?

A. `double`

B. `boolean`

C. `float`

D. `String`

**Question 5**

How many primitive data types does Java have?

A. 4

B. 6

C. 8

D. 10

**Question 6**

Which data type is commonly used for decimal values?

A. `int`

B. `char`

C. `boolean`

D. `double`

**Question 7**

Which of the following is a reference type?

A. `int`

B. `boolean`

C. `String`

D. `double`

**Question 8**

What does the `final` keyword do when used with a variable?

A. Deletes the variable.

B. Prevents reassignment.

C. Converts it into a string.

D. Makes it global.

**Question 9**

Which method converts a numeric string into an integer?

A. `Double.parseDouble()`

B. `String.valueOf()`

C. `Integer.parseInt()`

D. `Boolean.parseBoolean()`

**Question 10**

What is the result of this conversion?

```java
double price = 99.99;

int result = (int) price;
```

A. 100

B. 99

C. 99.99

D. Compilation error

## SECTION B: CONCEPTUAL QUESTIONS

**Question 11**

Explain what a variable is and why variables are important in software development.

**Question 12**

Differentiate between variable declaration, initialization, and reassignment.

**Question 13**

Explain the difference between local, instance, and static variables.

**Question 14**

What is variable scope? Give an example.

**Question 15**

Explain the difference between primitive and reference data types.

**Question 16**

List all eight Java primitive data types and explain what each one stores.

**Question 17**

Why does Java use `double` by default for decimal literals?

**Question 18**

Explain the difference between widening and narrowing conversion.

**Question 19**

What are wrapper classes? Give four examples.

**Question 20**

Explain the purpose of the `final` keyword.

## SECTION C: PRACTICAL PROGRAMMING QUESTIONS

**Question 21: Student Profile**

Create a Java program that stores:

- Student name.
- Age.
- Registration number.
- Course.
- Fee balance.
- Registration status.

Choose the correct data types and display all the information.

**Question 22: Primitive Data Types**

Write a Java program demonstrating all eight primitive data types.

Declare, initialize, and display each variable.

**Question 23: Type Conversion**

Write a program that:

1. Stores `"250"` as a string.
2. Converts it into an integer.
3. Adds 50.
4. Converts the result into a double.
5. Displays the final value.

**Question 24: Salary Calculator**

Create a program that calculates an employee's salary.

Store:

- Employee name.
- Basic salary.
- Allowance.
- Deductions.

Calculate and display the final salary.

**Question 25: Banking Application**

Create a Java program that:

1. Stores an initial account balance.
2. Stores a deposit.
3. Stores a withdrawal.
4. Updates the balance.
5. Displays the final balance.

Use appropriate data types.

## SECTION D: DEBUGGING QUESTIONS

**Question 26**

Identify and correct all errors:

```java
public class Main {

    public static void main(String[] args) {

        int age = "25";

        double balance = 1500;

        char grade = "A";

        boolean active = "true";

        System.out.println(age);
        System.out.println(balance);
        System.out.println(grade);
        System.out.println(active);

    }
}
```

Explain why each incorrect declaration causes a problem.

**Question 27**

Examine this program:

```java
public class Main {

    public static void main(String[] args) {

        int number1 = 10;
        int number2 = 3;

        double result = number1 / number2;

        System.out.println(result);

    }
}
```

Answer:

1. What output will this program produce?
2. Why does it produce that result?
3. Correct the program so that it displays the decimal result.

**Question 28**

Examine the following code:

```java
public class Main {

    public static void main(String[] args) {

        final int MAX_USERS = 100;

        MAX_USERS = 200;

        System.out.println(MAX_USERS);

    }
}
```

Explain why the program fails to compile and correct it.

---

## FINAL PRACTICAL CHALLENGE: BUILD A SIMPLE STUDENT MANAGEMENT PROGRAM

Build a Java application that stores and displays information about students.

Create a file named:

```text
StudentManagement.java
```

### Requirements

Your application must:

1. Declare variables for student information.
2. Use appropriate primitive data types.
3. Use at least one reference data type.
4. Demonstrate variable initialization.
5. Demonstrate variable reassignment.
6. Use a constant declared with `final`.
7. Demonstrate at least one widening conversion.
8. Demonstrate at least one narrowing conversion.
9. Convert a numeric string into an integer.
10. Display a formatted student report.

### Example Output

```text
==================================
       STUDENT MANAGEMENT
==================================

Student Name: Brian
Age: 22
Course: BBIT
Registration Number: 1025
Mathematics Marks: 80
Programming Marks: 90
Database Marks: 70

Total Marks: 240
Average Marks: 80.0

Registration Status: Active

==================================
```

The goal is not simply to produce the output. You must understand why each variable has its particular data type and how Java processes the values.

## KAI ASSESSMENT INSTRUCTIONS

After completing the assessment:

1. Submit your answers to Kai.
2. Submit your practical Java programs.
3. Kai should evaluate each answer.
4. Incorrect answers should receive explanations and corrected solutions.
5. Programming submissions should be checked for syntax, data types, logic, and expected output.
6. Review the feedback before proceeding to the next lesson.

## LESSON COMPLETION CHECKLIST

- [ ] Understand what variables are.
- [ ] Understand declaration and initialization.
- [ ] Understand variable reassignment.
- [ ] Follow Java variable naming conventions.
- [ ] Understand local variables.
- [ ] Understand instance variables.
- [ ] Understand static variables.
- [ ] Understand variable scope.
- [ ] Identify all eight primitive data types.
- [ ] Understand reference data types.
- [ ] Understand default values.
- [ ] Understand the `var` keyword.
- [ ] Perform widening conversions.
- [ ] Perform narrowing conversions.
- [ ] Convert strings into numbers.
- [ ] Convert numbers into strings.
- [ ] Understand wrapper classes.
- [ ] Use the `final` keyword.
- [ ] Build programs using different data types.

**NEXT LESSON: JAVA OPERATORS**

We will explore arithmetic operators, assignment operators, comparison operators, logical operators, unary operators, bitwise operators, operator precedence, and how Java uses operators to perform calculations and make decisions.

**Progress: Part 4 of 4 — Lesson Complete**