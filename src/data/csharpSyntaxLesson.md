# C# PROGRAMMING: SYNTAX AND PROGRAM STRUCTURE

# PART 1 OF 4: INTRODUCTION TO C# AND ITS FUNDAMENTALS

## 1. What Is C#?

C# (pronounced *C-sharp*) is a modern, general-purpose programming language developed by Microsoft.

It is widely used for building different types of software applications.

C# is commonly used in:

- Web application development.
- Desktop application development.
- Mobile application development.
- Game development.
- Cloud applications.
- Enterprise software.
- APIs and backend systems.
- Internet of Things (IoT) applications.

C# is particularly popular because it combines a readable syntax with powerful programming features.

### Real-world applications of C#

C# is used in different software environments:

| Application area | How C# is used |
|---|---|
| Web development | Building APIs and web applications using ASP.NET Core |
| Desktop development | Creating Windows applications |
| Game development | Developing games using Unity |
| Mobile development | Building cross-platform applications with .NET MAUI |
| Cloud computing | Developing cloud services and applications |
| Enterprise systems | Building business and management software |

For example, imagine developing a student management system.

C# can help you build:

- Student registration.
- Examination management.
- Course registration.
- Student authentication.
- Database communication.
- Administrative dashboards.

## 2. Understanding .NET

To understand C#, you also need to understand .NET.

C# is a programming language, while .NET is a development platform used to build and run applications.

.NET provides:

- Runtime services.
- Libraries.
- Development tools.
- Memory management.
- Application frameworks.
- Networking capabilities.
- Database connectivity support.

Think of it this way:

| C# | .NET |
|---|---|
| Programming language | Development platform |
| Defines the syntax used to write code | Provides runtime and libraries |
| Used to express program logic | Helps execute and support applications |
| Contains language features | Contains frameworks and development tools |

### How C# works with .NET

When you write a C# program, the source code is normally compiled into an intermediate representation called Common Intermediate Language (CIL), historically also called MSIL.

The .NET runtime executes the compiled code, typically using Just-In-Time (JIT) compilation to translate it into native machine instructions.

A simplified process looks like this:

```text
C# SOURCE CODE
      |
      v
C# COMPILER
      |
      v
INTERMEDIATE LANGUAGE (CIL)
      |
      v
.NET RUNTIME
      |
      v
JIT COMPILATION
      |
      v
MACHINE INSTRUCTIONS
      |
      v
PROGRAM EXECUTION
```

This process allows C# applications to run on supported platforms where the required .NET runtime is available.

## 3. Installing the Required Tools

To start programming in C#, you need a development environment.

The main tools are:

### A. .NET SDK

The .NET SDK provides the tools required to:

- Create projects.
- Compile C# programs.
- Run applications.
- Manage dependencies.
- Build software.

You can obtain it from the official .NET website:

https://dotnet.microsoft.com/download

### B. Visual Studio Code

Visual Studio Code is a lightweight code editor that supports C# development through extensions.

Official website:

https://code.visualstudio.com/

For C# development, install the official C# Dev Kit extension where available.

### C. Visual Studio

Visual Studio is a full integrated development environment (IDE).

It provides:

- Code editing.
- Debugging.
- Project management.
- Application templates.
- Testing tools.
- Visual development features.

Official website:

https://visualstudio.microsoft.com/

For this course, we will use the .NET SDK with a code editor and terminal.

## 4. Checking Whether .NET Is Installed

After installing the .NET SDK, open your terminal.

Run:

```bash
dotnet --version
```

This command displays the installed SDK version.

You can also run:

```bash
dotnet --info
```

This provides more information about the .NET installation.

If the commands work, your environment is ready for C# development.

## 5. Creating Your First C# Project

Let's create a simple console application.

A console application is a program that interacts with users through a text-based terminal.

### Step 1: Create a project

Open your terminal and execute:

```bash
dotnet new console -n MyFirstApp
```

Explanation:

- `dotnet` invokes the .NET command-line interface.
- `new` tells .NET to create a new project.
- `console` specifies the console application template.
- `-n` specifies the project name.
- `MyFirstApp` is the name of the project.

### Step 2: Enter the project directory

```bash
cd MyFirstApp
```

The `cd` command changes the current working directory.

### Step 3: Examine the project files

A modern .NET console project may look like this:

```text
MyFirstApp/
│
├── MyFirstApp.csproj
├── Program.cs
└── obj/
```

The important files are:

| File | Purpose |
|---|---|
| `Program.cs` | Contains the C# source code |
| `MyFirstApp.csproj` | Contains project configuration |
| `obj/` | Contains intermediate build files |

Other directories and files may appear after building the application.

## 6. Your First C# Program

Open `Program.cs`.

A modern console project may initially contain:

```csharp
Console.WriteLine("Hello, World!");
```

This is a complete program using C# top-level statements.

Run it:

```bash
dotnet run
```

Output:

```text
Hello, World!
```

Congratulations! You have executed your first C# program.

However, to understand how C# programs are traditionally structured, let's examine the explicit form.

## 7. Understanding the Traditional Program Structure

Consider:

```csharp
using System;

namespace MyFirstApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

This example demonstrates several important C# concepts.

### Line-by-line explanation

**Line 1**

```csharp
using System;
```

Imports the `System` namespace.

A namespace groups related classes and other types.

The `System` namespace contains commonly used functionality, including the `Console` class.

**Line 2**

```csharp
namespace MyFirstApp
```

Declares a namespace called `MyFirstApp`.

Namespaces help organize code and avoid naming conflicts.

**Line 3**

```csharp
{
```

Begins the namespace body.

**Line 4**

```csharp
class Program
```

Declares a class named `Program`.

A class is a fundamental building block in C# used to define objects and organize related members.

**Line 5**

```csharp
{
```

Begins the class body.

**Line 6**

```csharp
static void Main(string[] args)
```

Declares the Main method.

In this traditional console application structure, `Main` is the program's entry point.

Let's break it down:

- `static` means the method belongs to the class rather than an individual object.
- `void` means the method does not return a value.
- `Main` is the method name recognized as the entry point.
- `string[] args` represents command-line arguments supplied when starting the program.

**Line 7**

```csharp
{
```

Begins the method body.

**Line 8**

```csharp
Console.WriteLine("Hello, World!");
```

Displays text in the terminal.

`Console` is a class.

`WriteLine()` is a method that prints information and moves to a new line.

**Remaining closing braces**

Each closing brace ends a previously opened block:

- The first closes the Main method.
- The second closes the Program class.
- The final one closes the namespace.

### Expected output

```text
Hello, World!
```

## 8. Understanding Classes and Methods

C# is an object-oriented programming language.

Two important concepts are classes and methods.

### What is a class?

A class is a blueprint used to define objects.

For example, imagine developing a school management system.

You could create a class called `Student`.

```csharp
class Student
{
    string name;
    int age;
}
```

This class defines two fields:

- `name` stores a student's name.
- `age` stores a student's age.

The class describes the data that a student object can contain.

### What is a method?

A method is a named block of code that performs a particular operation.

Example:

```csharp
class Program
{
    static void Greet()
    {
        Console.WriteLine("Welcome to C# programming!");
    }

    static void Main()
    {
        Greet();
    }
}
```

The `Greet()` method displays a welcome message.

Inside `Main()`, the statement:

```csharp
Greet();
```

calls the method.

Output:

```text
Welcome to C# programming!
```

Methods help divide large programs into smaller, manageable operations.

## 9. C# Statements and Semicolons

A statement is an instruction that tells the program to perform an operation.

Most ordinary C# statements end with a semicolon.

Example:

```csharp
int age = 22;
Console.WriteLine(age);
```

The first statement declares and initializes an integer variable.

The second statement prints its value.

If you forget the semicolon:

```csharp
int age = 22
```

The compiler reports a syntax error.

However, not every C# line ends with a semicolon.

For example:

```csharp
if (age >= 18)
{
    Console.WriteLine("Adult");
}
```

The `if` statement uses a block of code enclosed by braces.

## 10. C# Is Case-Sensitive

C# distinguishes between uppercase and lowercase letters.

For example:

```csharp
int age = 22;
int Age = 25;
```

These are two different variable names.

Likewise:

```csharp
Console.WriteLine("Hello");
```

is correct, while:

```csharp
console.writeline("Hello");
```

is incorrect because the class and method names have different capitalization.

Remember:

- `Main` is different from `main`.
- `Student` is different from `student`.
- `Console` is different from `console`.

## 11. Comments in C#

Comments are explanations written inside source code.

The compiler does not execute ordinary comments as program instructions.

C# supports three common comment styles.

### Single-line comments

```csharp
// This program displays a welcome message.

Console.WriteLine("Welcome");
```

Everything after `//` on that line is a comment.

### Multiline comments

```csharp
/*
This is a multiline comment.
It can contain several lines
of explanatory text.
*/

Console.WriteLine("Welcome");
```

Multiline comments begin with `/*` and end with `*/`.

### XML documentation comments

```csharp
/// <summary>
/// Displays a welcome message.
/// </summary>
static void Welcome()
{
    Console.WriteLine("Welcome");
}
```

XML documentation comments can be used to document classes, methods, and other code members.

They can also help development tools display documentation.

## 12. C# Naming Conventions

Good naming makes code easier to read and maintain.

Common C# conventions include:

| Element | Convention | Example |
|---|---|---|
| Class | PascalCase | `StudentManager` |
| Method | PascalCase | `CalculateTotal()` |
| Property | PascalCase | `StudentName` |
| Local variable | camelCase | `studentAge` |
| Parameter | camelCase | `studentId` |
| Constant | Usually PascalCase | `MaxStudents` |
| Namespace | PascalCase | `SchoolManagement` |

These are conventions, not requirements of the language.

Example:

```csharp
class StudentManager
{
    static void DisplayStudent()
    {
        string studentName = "Brian";

        Console.WriteLine(studentName);
    }
}
```

The naming makes the purpose of each element easier to understand.

**Part 1 Summary**

You have learned:

- What C# is.
- Where C# is used.
- The relationship between C# and .NET.
- How C# code is compiled and executed.
- How to install and check the .NET SDK.
- How to create a console application.
- How to structure a traditional C# program.
- Classes and methods.
- Statements and semicolons.
- Case sensitivity.
- Comments and naming conventions.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: PROGRAM STRUCTURE, NAMESPACES AND EXECUTION

## 1. Understanding Top-Level Statements

Modern C# supports top-level statements.

This allows you to write executable statements without explicitly declaring a class or a Main method.

Example:

```csharp
Console.WriteLine("Welcome to C#");
Console.WriteLine("Learning program structure");
```

This is valid in modern C# console projects.

The compiler generates the necessary entry-point structure behind the scenes.

### Why are top-level statements useful?

They:

- Reduce unnecessary boilerplate.
- Make beginner programs easier to write.
- Allow developers to focus on program logic.
- Are convenient for small applications and examples.

However, larger applications often use explicit classes and methods to organize their code.

### Comparing the two styles

**Top-level style**

```csharp
Console.WriteLine("Hello");
```

**Traditional style**

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello");
    }
}
```

Both can produce the same output.

For this course, learn both styles, but practice the traditional structure so that you understand how larger C# applications are organized.

## 2. Understanding the Main Method

The Main method is the entry point of a traditional C# executable application.

A common declaration is:

```csharp
static void Main(string[] args)
{
    Console.WriteLine("Application started.");
}
```

There are several valid Main signatures.

For example:

```csharp
static void Main()
{
}
```

```csharp
static int Main()
{
    return 0;
}
```

```csharp
static int Main(string[] args)
{
    return 0;
}
```

Asynchronous applications can also use `Task` or `Task<int>` as the return type.

### Understanding command-line arguments

Command-line arguments allow users to supply information when launching a program.

Example:

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("First argument:");

        if (args.Length > 0)
        {
            Console.WriteLine(args[0]);
        }
        else
        {
            Console.WriteLine("No argument supplied.");
        }
    }
}
```

Run:

```bash
dotnet run -- Brian
```

Expected output:

```text
First argument:
Brian
```

Explanation:

```csharp
string[] args
```

Defines an array of strings containing the command-line arguments.

```csharp
args.Length
```

Returns the number of arguments supplied.

```csharp
args[0]
```

Accesses the first argument.

The `--` separates arguments intended for your application from options intended for the `dotnet run` command.

## 3. Understanding Namespaces

As applications become larger, they may contain hundreds of classes.

Namespaces help organize these classes.

Consider:

```csharp
namespace SchoolManagement
{
    class Student
    {
    }

    class Teacher
    {
    }
}
```

Both classes belong to the `SchoolManagement` namespace.

A different application area might use:

```csharp
namespace BankingSystem
{
    class Account
    {
    }
}
```

This separation helps prevent naming conflicts.

### Accessing a namespace

Suppose you have:

```csharp
namespace SchoolManagement
{
    class Student
    {
        public string Name = "Brian";
    }
}
```

You can access the class using its full name:

```csharp
SchoolManagement.Student student =
    new SchoolManagement.Student();

Console.WriteLine(student.Name);
```

Alternatively, you can import the namespace:

```csharp
using SchoolManagement;

Student student = new Student();

Console.WriteLine(student.Name);
```

The `using` directive makes names from the namespace easier to reference.

It does not copy the classes into your file.

## 4. Understanding Access Modifiers

Access modifiers control where classes and their members can be accessed.

Common access modifiers include:

| Modifier | Meaning |
|---|---|
| `public` | Accessible wherever the containing type is accessible |
| `private` | Accessible only within the containing type |
| `protected` | Accessible within the containing type and derived types |
| `internal` | Accessible within the same assembly |
| `protected internal` | Accessible within the same assembly or from derived types |
| `private protected` | Accessible within the containing type and derived types in the same assembly |

Example:

```csharp
class Student
{
    public string Name = "Brian";

    private int age = 22;
}
```

The `Name` field is public.

The `age` field is private.

This means external code cannot directly access `age` through a Student object.

Access modifiers are important for encapsulation and controlling access to application data.

## 5. Understanding the static Keyword

The `static` keyword means that a member belongs to the type itself rather than to a particular object instance.

Example:

```csharp
class School
{
    public static string Name = "Green Valley School";
}
```

You can access the field using the class name:

```csharp
Console.WriteLine(School.Name);
```

You do not need to create a `School` object to access this static member.

### Static versus instance members

```csharp
class Student
{
    public string Name;

    public static int TotalStudents = 0;
}
```

Here:

- `Name` is an instance field.
- `TotalStudents` is a static field shared by the type.

Each Student object has its own `Name`, while the static field belongs to the class.

## 6. Understanding the Project File

When you create a C# project using the .NET CLI, a `.csproj` file is generated.

Example:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

</Project>
```

This is an illustrative project configuration for a .NET 10 project. Your installed SDK may create a project targeting a different framework.

Let's understand the important settings.

### OutputType

```xml
<OutputType>Exe</OutputType>
```

Specifies that the project produces an executable application.

### TargetFramework

```xml
<TargetFramework>net10.0</TargetFramework>
```

Specifies the .NET target framework.

### ImplicitUsings

```xml
<ImplicitUsings>enable</ImplicitUsings>
```

Enables commonly used namespace imports to be generated automatically.

This is why modern console projects may use `Console.WriteLine()` without explicitly writing:

```csharp
using System;
```

### Nullable

```xml
<Nullable>enable</Nullable>
```

Enables nullable reference type analysis.

This helps identify possible null-related problems during development.

## 7. Understanding Compilation and Execution

C# applications go through several stages.

A simplified process:

```text
SOURCE CODE (.cs)
       |
       v
C# COMPILER
       |
       v
ASSEMBLY (.dll or .exe)
       |
       v
.NET RUNTIME
       |
       v
PROGRAM EXECUTION
```

### Source code

This is the code written by the programmer.

Example:

```csharp
Console.WriteLine("Hello");
```

### Compilation

The compiler checks the code for errors and produces an assembly containing compiled intermediate language and metadata.

### Runtime

The .NET runtime loads and executes the application.

It provides services such as:

- Memory management.
- Garbage collection.
- Exception handling.
- Type safety.
- Runtime support.

### Execution

The program performs the operations defined in the code.

## 8. Garbage Collection

C# runs on a managed runtime.

One important feature is automatic memory management through garbage collection.

When objects are no longer reachable by the application, the garbage collector can eventually reclaim their memory.

For example:

```csharp
Student student = new Student();
```

This creates a Student object.

The variable `student` refers to that object.

When the object is no longer reachable, it may eventually become eligible for garbage collection.

**Important:** Garbage collection does not mean programmers never need to manage resources.

Files, database connections, network streams, and similar resources should be released appropriately, commonly through `using` statements or `using` declarations when they implement `IDisposable`.

## 9. Debugging and Error Types

Programming errors can be grouped into several categories.

### Syntax errors

These occur when code violates the language's syntax rules.

Example:

```csharp
Console.WriteLine("Hello")
```

The semicolon is missing.

### Runtime errors

These occur while the program is executing.

Example:

```csharp
int number = 10;
int result = number / 0;
```

Integer division by zero throws a `DivideByZeroException` at runtime.

### Logical errors

These occur when the program runs but produces incorrect results.

Example:

```csharp
int length = 10;
int width = 5;

int area = length + width;
```

The program compiles, but the correct area calculation is multiplication:

```csharp
int area = length * width;
```

Learning to distinguish these errors is an important part of software development.

**Part 2 Summary**

You have learned:

- Top-level statements.
- The Main method.
- Command-line arguments.
- Namespaces.
- Access modifiers.
- Static members.
- Project configuration.
- Compilation and execution.
- Garbage collection.
- Syntax, runtime, and logical errors.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: BUILDING PRACTICAL C# APPLICATIONS

## 1. Creating a Project from Scratch

Now we will apply the concepts by creating a small console application.

Our project will be called:

`SchoolApp`

### Step 1: Create the project

```bash
dotnet new console -n SchoolApp
```

### Step 2: Enter the project

```bash
cd SchoolApp
```

### Step 3: Open the project in your editor

If using Visual Studio Code:

```bash
code .
```

### Step 4: Open Program.cs

Replace its contents with the following code.

## 2. Practical Example: Student Welcome Application

```csharp
using System;

namespace SchoolApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("================================");
            Console.WriteLine("       SCHOOL MANAGEMENT");
            Console.WriteLine("================================");

            Console.Write("Enter student name: ");

            string? studentName = Console.ReadLine();

            Console.Write("Enter student age: ");

            string? ageInput = Console.ReadLine();

            if (int.TryParse(ageInput, out int age))
            {
                Console.WriteLine();
                Console.WriteLine("STUDENT INFORMATION");
                Console.WriteLine("--------------------");

                Console.WriteLine($"Name: {studentName}");
                Console.WriteLine($"Age: {age}");

                Console.WriteLine("Registration successful.");
            }
            else
            {
                Console.WriteLine("Invalid age entered.");
            }
        }
    }
}
```

### Understanding the program

**Section 1: Namespace import**

```csharp
using System;
```

Makes types such as `Console` available through the imported namespace.

**Section 2: Namespace declaration**

```csharp
namespace SchoolApp
```

Organizes the program under the SchoolApp namespace.

**Section 3: Class declaration**

```csharp
class Program
```

Defines the Program class.

**Section 4: Entry point**

```csharp
static void Main(string[] args)
```

Defines the entry point for this traditional console application.

**Section 5: Displaying information**

```csharp
Console.WriteLine("SCHOOL MANAGEMENT");
```

Displays a message and moves to a new line.

**Section 6: Reading input**

```csharp
string? studentName = Console.ReadLine();
```

Reads a line from the user.

The `?` indicates that the variable may contain `null`.

This is important because `Console.ReadLine()` can return `null` when the input stream ends.

**Section 7: Reading the age**

```csharp
string? ageInput = Console.ReadLine();
```

Reads the age as text.

We initially receive text because console input is read as a string.

**Section 8: Converting the age**

```csharp
if (int.TryParse(ageInput, out int age))
```

Attempts to convert the input into an integer.

`TryParse()` returns `true` when conversion succeeds and `false` when it fails.

The `out` parameter receives the converted integer.

**Section 9: Displaying the information**

```csharp
Console.WriteLine($"Name: {studentName}");
```

Uses string interpolation to insert a variable's value into a string.

The `$` before the string enables interpolation.

### Example interaction

```text
================================
       SCHOOL MANAGEMENT
================================
Enter student name: Brian
Enter student age: 22

STUDENT INFORMATION
--------------------
Name: Brian
Age: 22
Registration successful.
```

If the user enters:

```text
twenty-two
```

The application displays:

```text
Invalid age entered.
```

## 3. Practical Example: Understanding Methods

Let's organize the application into reusable methods.

```csharp
using System;

class Program
{
    static void DisplayWelcome()
    {
        Console.WriteLine("Welcome to SchoolApp!");
    }

    static void DisplayStudent(string name, int age)
    {
        Console.WriteLine($"Student Name: {name}");
        Console.WriteLine($"Student Age: {age}");
    }

    static void Main()
    {
        DisplayWelcome();

        DisplayStudent("Brian", 22);
    }
}
```

### Explanation

The first method:

```csharp
static void DisplayWelcome()
```

Creates a method that does not receive arguments and does not return a value.

The second method:

```csharp
static void DisplayStudent(string name, int age)
```

Receives two parameters:

- `name`, which is a string.
- `age`, which is an integer.

Inside the method, the values are displayed.

The Main method calls both methods:

```csharp
DisplayWelcome();

DisplayStudent("Brian", 22);
```

The first call displays the welcome message.

The second passes `"Brian"` and `22` to the method.

Output:

```text
Welcome to SchoolApp!
Student Name: Brian
Student Age: 22
```

This demonstrates how methods improve code organization and reuse.

## 4. Practical Example: Creating Objects

C# uses classes to create objects.

Let's define a Student class.

```csharp
using System;

class Student
{
    public string Name { get; set; } = "";

    public int Age { get; set; }

    public void DisplayInformation()
    {
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Age: {Age}");
    }
}

class Program
{
    static void Main()
    {
        Student student1 = new Student();

        student1.Name = "Brian";
        student1.Age = 22;

        student1.DisplayInformation();
    }
}
```

### Explanation

**Class declaration**

```csharp
class Student
```

Defines a class named Student.

**Property declaration**

```csharp
public string Name { get; set; } = "";
```

Creates a property called `Name`.

Properties provide controlled access to an object's data.

The initializer `= ""` gives the property a non-null initial value.

**Age property**

```csharp
public int Age { get; set; }
```

Defines an integer property.

**Method**

```csharp
public void DisplayInformation()
```

Defines a method that displays the student's information.

**Object creation**

```csharp
Student student1 = new Student();
```

Creates a new Student object.

The `new` keyword creates the object and invokes its constructor.

**Assigning values**

```csharp
student1.Name = "Brian";
student1.Age = 22;
```

Assigns information to the object's properties.

**Calling a method**

```csharp
student1.DisplayInformation();
```

Calls the method belonging to the object.

Output:

```text
Name: Brian
Age: 22
```

## 5. Practical Example: Creating a Menu System

Most management applications use menus to allow users to select operations.

Let's create a simple console menu.

```csharp
using System;

class Program
{
    static void Main()
    {
        bool running = true;

        while (running)
        {
            Console.WriteLine("\n===== SCHOOL SYSTEM =====");
            Console.WriteLine("1. Register Student");
            Console.WriteLine("2. View Students");
            Console.WriteLine("3. Exit");

            Console.Write("Choose an option: ");

            string? choice = Console.ReadLine();

            switch (choice)
            {
                case "1":
                    Console.WriteLine("Student registration selected.");
                    break;

                case "2":
                    Console.WriteLine("Viewing students...");
                    break;

                case "3":
                    running = false;
                    Console.WriteLine("Goodbye!");
                    break;

                default:
                    Console.WriteLine("Invalid option.");
                    break;
            }
        }
    }
}
```

### Understanding the program

```csharp
bool running = true;
```

Creates a Boolean variable that controls whether the menu should continue.

```csharp
while (running)
```

Repeats the menu while `running` is true.

```csharp
string? choice = Console.ReadLine();
```

Reads the user's selection.

```csharp
switch (choice)
```

Checks which menu option was selected.

Each `case` handles a particular choice.

```csharp
running = false;
```

Changes the loop condition when the user selects option 3.

This causes the application to exit the loop.

The `default` branch handles selections that do not match any listed option.

### Example interaction

```text
===== SCHOOL SYSTEM =====
1. Register Student
2. View Students
3. Exit

Choose an option: 1

Student registration selected.

===== SCHOOL SYSTEM =====
1. Register Student
2. View Students
3. Exit

Choose an option: 3

Goodbye!
```

This is the foundation of many console-based management systems.

## 6. Understanding the Build and Run Commands

.NET provides several commands for managing C# projects.

| Command | Purpose |
|---|---|
| `dotnet new console` | Creates a console project |
| `dotnet build` | Compiles the project |
| `dotnet run` | Builds and runs the project |
| `dotnet clean` | Removes build outputs |
| `dotnet restore` | Restores project dependencies |
| `dotnet --version` | Displays the SDK version |
| `dotnet --info` | Displays installation details |

### Building the application

```bash
dotnet build
```

This compiles the project and reports any compilation errors.

### Running the application

```bash
dotnet run
```

This builds the project if necessary and runs it.

### Cleaning the project

```bash
dotnet clean
```

Removes generated build outputs.

## 7. Practical Debugging Exercise

Consider the following program:

```csharp
using System;

class Program
{
    static void Main()
    {
        int age = "22";

        Console.WriteLine("Age: " + age)
    }
}
```

There are two problems.

### Problem 1: Incorrect data type

```csharp
int age = "22";
```

The value `"22"` is a string literal, not an integer literal.

Correct version:

```csharp
int age = 22;
```

### Problem 2: Missing semicolon

```csharp
Console.WriteLine("Age: " + age)
```

The statement needs a semicolon.

Correct version:

```csharp
Console.WriteLine("Age: " + age);
```

### Corrected program

```csharp
using System;

class Program
{
    static void Main()
    {
        int age = 22;

        Console.WriteLine("Age: " + age);
    }
}
```

Output:

```text
Age: 22
```

## 8. Independent Practical Exercises

### Exercise 1: Personal Information

Create a C# console application that:

1. Asks the user for their name.
2. Asks for their age.
3. Asks for their course.
4. Displays all the information.

Use meaningful variable names.

### Exercise 2: Welcome Method

Create a method called `DisplayWelcome()`.

It should display:

```text
Welcome to C# programming.
Start building something meaningful.
```

Call the method from Main.

### Exercise 3: Student Class

Create a class called `Student` containing:

- Name.
- Age.
- Course.

Create an object and display its information.

### Exercise 4: Menu Application

Create a menu containing:

1. Display welcome message.
2. Display current application information.
3. Exit.

Use a loop and a switch statement.

### Exercise 5: Command-Line Arguments

Create an application that accepts a user's name through command-line arguments.

Example:

```bash
dotnet run -- Brian
```

Expected output:

```text
Welcome, Brian!
```

**Part 3 Summary**

You have learned:

- How to create and organize a C# project.
- How to read user input.
- How to validate numeric input.
- How to use methods.
- How to create classes and objects.
- How to build a console menu.
- How to compile and run C# applications.
- How to identify and correct common errors.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND PRACTICAL EVALUATION

## 1. Assessment Instructions

Welcome to the C# Programming: Syntax and Program Structure assessment.

This assessment checks your understanding of the language, its execution environment, program structure, and basic application development.

Answer the questions carefully.

Do not simply memorize the code examples. You should understand why each part of a program is written.

Submit your answers and practical work to Kai for marking and feedback.

---

## SECTION A: MULTIPLE-CHOICE QUESTIONS

Choose the correct answer.

**Question 1**

Who developed C#?

A. Google

B. Microsoft

C. Apple

D. Meta

**Question 2**

What is .NET?

A. A programming language.

B. A database.

C. A development platform.

D. A text editor.

**Question 3**

Which file commonly contains the source code of a C# console application?

A. `Program.cs`

B. `Program.html`

C. `Program.sql`

D. `Program.java`

**Question 4**

Which method is the traditional entry point of a C# console application?

A. `Start()`

B. `Run()`

C. `Main()`

D. `Begin()`

**Question 5**

What does the following statement do?

```csharp
Console.WriteLine("Hello");
```

A. Reads user input.

B. Displays text in the console.

C. Creates a class.

D. Terminates the application.

**Question 6**

Which symbol normally terminates a C# statement?

A. `:`

B. `,`

C. `;`

D. `#`

**Question 7**

Is C# case-sensitive?

A. Yes.

B. No.

C. Only for classes.

D. Only for variables.

**Question 8**

What is the purpose of a namespace?

A. To organize related types.

B. To delete variables.

C. To execute loops.

D. To install software.

**Question 9**

Which keyword creates an object?

A. `class`

B. `new`

C. `static`

D. `void`

**Question 10**

What does `static` generally indicate?

A. A member belongs to the type rather than a particular instance.

B. A variable cannot change.

C. A program has stopped.

D. A class cannot contain methods.

**Question 11**

Which command creates a new console project?

A. `dotnet start`

B. `dotnet create`

C. `dotnet new console`

D. `dotnet compile console`

**Question 12**

What is garbage collection?

A. A process that automatically reclaims memory occupied by eligible managed objects.

B. A process that deletes source code.

C. A tool for compiling programs.

D. A method for storing passwords.

---

## SECTION B: CONCEPTUAL QUESTIONS

Answer in your own words.

**Question 13**

Explain what C# is and describe four areas where it is used.

**Question 14**

Explain the difference between C# and .NET.

**Question 15**

Describe the basic process through which C# source code becomes executable instructions.

**Question 16**

What is the purpose of the `Main()` method?

**Question 17**

Explain the difference between a class and a method.

**Question 18**

What is a namespace, and why is it important in large applications?

**Question 19**

Explain the difference between `Console.Write()` and `Console.WriteLine()`.

**Question 20**

What are access modifiers? Explain `public` and `private`.

**Question 21**

What is the purpose of the `static` keyword?

**Question 22**

Explain the difference between syntax errors, runtime errors, and logical errors.

---

## SECTION C: CODE INTERPRETATION

Study each code example carefully.

**Question 23**

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Learning C#");
        Console.WriteLine("Building applications");
    }
}
```

Answer:

1. What is the output?
2. What is the purpose of `using System;`?
3. What does `Main()` represent?
4. Why are there two separate output lines?

**Question 24**

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

Answer:

1. What is the class name?
2. What is the purpose of the `Name` field?
3. What does the `Display()` method do?
4. What does `public` mean here?

**Question 25**

```csharp
string[] args = {"Brian", "22"};

Console.WriteLine(args[0]);
Console.WriteLine(args[1]);
```

Answer:

1. What is the output?
2. What type of collection is `args`?
3. What does `args[0]` access?
4. Why does indexing begin at zero?

---

## SECTION D: DEBUGGING

Identify the error and provide a corrected version.

**Question 26**

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Welcome")
    }
}
```

Identify the syntax error.

**Question 27**

```csharp
class Student
{
    public string Name = "Brian";
}

class Program
{
    static void Main()
    {
        Student student = new Student();

        Console.WriteLine(student.name);
    }
}
```

Identify the problem with the member access.

**Question 28**

```csharp
class Program
{
    static void Main()
    {
        int age = "25";

        Console.WriteLine(age);
    }
}
```

Explain why the assignment is invalid and correct it.

**Question 29**

```csharp
class Program
{
    static void Main()
    {
        DisplayWelcome();
    }

    static void DisplayWelcome()
    {
        Console.WriteLine("Welcome!");
    }
}
```

Assuming the required namespace is available, explain why this program works even though the method is declared after the call.

**Question 30**

```csharp
class Student
{
    public string Name = "Brian";
}

class Program
{
    static void Main()
    {
        Student student;

        Console.WriteLine(student.Name);
    }
}
```

What is wrong with this program? Explain what must happen before the object can be accessed.

---

## SECTION E: PRACTICAL PROGRAMMING CHALLENGES

Complete the following tasks.

### Challenge 1: Personal Profile Application

Build a console application that accepts:

- Full name.
- Age.
- Course.
- Institution.

Display the information in a well-formatted output.

### Challenge 2: Calculator Application

Create a calculator that supports:

- Addition.
- Subtraction.
- Multiplication.
- Division.

Use separate methods for each operation.

Validate numeric input and prevent integer division by zero.

### Challenge 3: Student Class

Create a `Student` class with:

- Name.
- Registration number.
- Age.
- Course.

Create at least three student objects and display their information.

### Challenge 4: School Menu

Create a menu-driven application with these options:

```text
================================
       SCHOOL MANAGEMENT
================================

1. Register Student
2. Display Information
3. About Application
4. Exit

Choose an option:
```

Use a loop and switch statement.

### Challenge 5: Command-Line Application

Create an application that accepts two command-line arguments:

- Student name.
- Course name.

Example:

```bash
dotnet run -- Brian BBIT
```

Expected output:

```text
Student Name: Brian
Course: BBIT
```

If the user does not supply two arguments, display an appropriate message.

---

## SECTION F: FINAL PROJECT

### Project: School Management Console Application

Develop a console application that demonstrates your understanding of C# syntax and program structure.

Your application should contain the following components.

**1. Main Application**

Create a Main method that controls the execution of the application.

**2. Student Class**

Create a class called `Student` containing:

- Student name.
- Registration number.
- Age.
- Course.

**3. Methods**

Create separate methods for:

- Displaying the welcome message.
- Registering a student.
- Displaying student information.
- Displaying application information.

**4. Menu System**

Create a menu with the following options:

```text
================================
      SCHOOL MANAGEMENT SYSTEM
================================

1. Register Student
2. Display Student
3. About
4. Exit

Select an option:
```

**5. Input Validation**

Ensure that numeric input is validated.

**6. Code Organization**

Use appropriate classes, methods, namespaces, and naming conventions.

### Suggested project structure

```text
SchoolManagement/
│
├── SchoolManagement.csproj
│
├── Program.cs
│
├── Models/
│   └── Student.cs
│
├── Services/
│   └── StudentService.cs
│
└── README.md
```

This structure separates student data from the application's main execution logic.

---

## 2. Submission to Kai

Submit your completed assessment and practical project to Kai.

Kai should evaluate your work using the following criteria:

| Assessment area | What Kai should evaluate |
|---|---|
| C# fundamentals | Understanding of the language |
| .NET | Understanding of the development platform |
| Syntax | Correct use of C# syntax |
| Program structure | Correct organization of code |
| Methods | Ability to create and call methods |
| Classes | Understanding of classes and objects |
| Namespaces | Proper code organization |
| Input and output | Correct console interaction |
| Debugging | Ability to identify and fix errors |
| Project organization | Readability and maintainability |

## 3. Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain what C# is.
- [ ] Explain the relationship between C# and .NET.
- [ ] Describe how C# programs are compiled and executed.
- [ ] Install and use the .NET SDK.
- [ ] Create a C# console project.
- [ ] Understand `Program.cs`.
- [ ] Explain the traditional Main method.
- [ ] Understand top-level statements.
- [ ] Use namespaces.
- [ ] Create classes and methods.
- [ ] Understand access modifiers.
- [ ] Understand the `static` keyword.
- [ ] Use console input and output.
- [ ] Create and use objects.
- [ ] Build and run a C# application.
- [ ] Identify and correct basic programming errors.

## 4. Lesson Completion

Congratulations!

You have completed **C# Programming: Syntax and Program Structure**.

You now understand the basic structure of a C# application and how the language works with the .NET platform.

You have also written and executed practical console applications.

These foundations will prepare you for building more advanced applications, including APIs, desktop software, games, and enterprise systems.

# NEXT LESSON

**C# Programming: Variables and Types**

In the next lesson, you will learn how C# stores information using variables, data types, constants, type conversion, and type inference.

**Part 4 of 4 — Lesson Complete**