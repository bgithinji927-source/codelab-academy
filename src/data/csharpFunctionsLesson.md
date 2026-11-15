# C# FUNCTIONS AND REUSABLE LOGIC

# PART 1: INTRODUCTION TO METHODS AND REUSABLE CODE

## 1. What Are Functions?

A function is a reusable block of code designed to perform a particular task.

In C#, functions are commonly called **methods** because they are defined inside classes, structs, or other types.

A method allows you to write instructions once and execute them whenever necessary.

Consider a program that calculates the total price of products.

Without methods, you might write the same calculation repeatedly:

```csharp
decimal price1 = 1000;
decimal tax1 = price1 * 0.16m;
decimal total1 = price1 + tax1;

decimal price2 = 2000;
decimal tax2 = price2 * 0.16m;
decimal total2 = price2 + tax2;

decimal price3 = 3000;
decimal tax3 = price3 * 0.16m;
decimal total3 = price3 + tax3;
```

Notice that the same calculation is repeated three times.

This creates unnecessary repetition.

Instead, we can create a method that performs the calculation once and reuse it whenever needed.

```csharp
static decimal CalculateTotal(decimal price)
{
    decimal tax = price * 0.16m;

    decimal total = price + tax;

    return total;
}
```

We can now call this method with different prices.

```csharp
Console.WriteLine(CalculateTotal(1000));
Console.WriteLine(CalculateTotal(2000));
Console.WriteLine(CalculateTotal(3000));
```

The method handles the calculation each time it is called.

### Why Are Methods Important?

Methods provide several advantages:

1. **Code reuse:** Write an operation once and use it many times.
2. **Organization:** Divide large programs into smaller sections.
3. **Readability:** Give operations meaningful names.
4. **Maintenance:** Update one method instead of changing repeated code.
5. **Testing:** Individual methods can be tested separately.
6. **Collaboration:** Different developers can work on separate parts of an application.

For example, a banking application might contain methods such as:

- `CreateAccount()`
- `DepositMoney()`
- `WithdrawMoney()`
- `CalculateInterest()`
- `CheckBalance()`

Each method handles a specific responsibility.

---

## 2. Understanding Method Structure

Let's examine a complete method declaration.

```csharp
static int AddNumbers(int firstNumber, int secondNumber)
{
    int result = firstNumber + secondNumber;

    return result;
}
```

A method declaration contains several important components.

### A. Access Modifier

Access modifiers determine where a method can be accessed.

Common access modifiers include:

| Modifier | Meaning |
|---|---|
| `public` | Accessible from other code that can access the containing type. |
| `private` | Accessible only within the containing type. |
| `protected` | Accessible within the containing type and derived types. |
| `internal` | Accessible within the same assembly. |

Example:

```csharp
public static void DisplayMessage()
{
    Console.WriteLine("Welcome to CodeLab Academy.");
}
```

The `public` modifier allows other accessible code to call this method.

### B. Static Keyword

The `static` keyword means the method belongs to the type itself rather than an individual object.

Example:

```csharp
static void Welcome()
{
    Console.WriteLine("Welcome!");
}
```

You can call this method through its containing class without creating an instance of that class.

For example:

```csharp
Welcome();
```

Inside a class called `Program`, another class could call it as:

```csharp
Program.Welcome();
```

This assumes the method is accessible and the class is available.

### C. Return Type

The return type specifies the kind of value a method sends back after performing its task.

Common return types include:

| Return type | Description |
|---|---|
| `int` | Returns a whole number. |
| `double` | Returns a floating-point number. |
| `decimal` | Returns a decimal number. |
| `string` | Returns text. |
| `bool` | Returns true or false. |
| `void` | Does not return a value. |

Example:

```csharp
static int GetAge()
{
    return 21;
}
```

This method returns an integer.

Another example:

```csharp
static string GetName()
{
    return "Brian";
}
```

This method returns a string.

### D. Method Name

A method name identifies the operation that the method performs.

Example:

```csharp
static void CalculateSalary()
{
    Console.WriteLine("Calculating salary...");
}
```

Here, `CalculateSalary` is the method name.

C# convention recommends using PascalCase for method names.

Examples:

- `CalculateTotal()`
- `RegisterStudent()`
- `SendNotification()`
- `ValidatePassword()`

### E. Parameters

Parameters are variables declared inside the method definition. They receive information from the code that calls the method.

Example:

```csharp
static void GreetUser(string name)
{
    Console.WriteLine($"Hello, {name}");
}
```

The parameter is:

```csharp
string name
```

It allows the method to receive a name.

### F. Method Body

The method body contains the instructions that execute when the method is called.

```csharp
{
    Console.WriteLine($"Hello, {name}");
}
```

The curly braces define the method body.

---

## 3. Creating and Calling Methods

Declaring a method does not automatically execute it.

You must call the method.

Example:

```csharp
using System;

DisplayWelcome();

static void DisplayWelcome()
{
    Console.WriteLine("Welcome to CodeLab Academy.");
}
```

Explanation:

**Line 1:**

```csharp
using System;
```

Makes the `Console` functionality available.

**Line 2:**

```csharp
DisplayWelcome();
```

Calls the method.

When the program reaches this statement, execution moves to the method body.

**Line 3:**

```csharp
static void DisplayWelcome()
```

Declares a method named `DisplayWelcome`.

- `static` means it belongs to its containing type.
- `void` means it does not return a value.
- `DisplayWelcome` is its name.

**Line 4:**

```csharp
Console.WriteLine("Welcome to CodeLab Academy.");
```

Displays the welcome message.

Output:

```text
Welcome to CodeLab Academy.
```

### Important: Method Declaration vs Method Call

These two statements have different purposes.

Declaration:

```csharp
static void SayHello()
{
    Console.WriteLine("Hello");
}
```

Call:

```csharp
SayHello();
```

The declaration defines the operation.

The call executes the operation.

---

## 4. Methods with Parameters

A parameter allows a method to receive information.

Imagine developing a system that greets different users.

Instead of creating a separate greeting method for every user, you can create one method that accepts a name.

```csharp
static void GreetUser(string name)
{
    Console.WriteLine($"Welcome, {name}!");
}

GreetUser("Mary");
GreetUser("John");
GreetUser("Brian");
```

Output:

```text
Welcome, Mary!
Welcome, John!
Welcome, Brian!
```

### Understanding Parameters and Arguments

These terms are related but different.

**Parameter:** The variable declared in a method definition.

```csharp
static void GreetUser(string name)
```

Here, `name` is a parameter.

**Argument:** The actual value supplied when calling the method.

```csharp
GreetUser("Mary");
```

Here, `"Mary"` is an argument.

A method can receive multiple parameters.

Example:

```csharp
static void DisplayStudent(string name, int age)
{
    Console.WriteLine($"Name: {name}");
    Console.WriteLine($"Age: {age}");
}

DisplayStudent("Mary", 22);
```

Output:

```text
Name: Mary
Age: 22
```

Explanation:

- `string name` receives the student's name.
- `int age` receives the student's age.
- `"Mary"` supplies the first argument.
- `22` supplies the second argument.

The argument order must match the parameter order when using positional arguments.

---

## 5. Methods That Return Values

Some methods perform an operation and send the result back to the calling code.

These methods use a return type other than `void`.

Example:

```csharp
static int AddNumbers(int a, int b)
{
    int sum = a + b;

    return sum;
}
```

Calling the method:

```csharp
int answer = AddNumbers(10, 20);

Console.WriteLine(answer);
```

Output:

```text
30
```

### Line-by-line explanation

```csharp
static int AddNumbers(int a, int b)
```

Declares a method that:

- Is static.
- Returns an integer.
- Is named `AddNumbers`.
- Accepts two integer parameters.

```csharp
int sum = a + b;
```

Adds the two received values.

```csharp
return sum;
```

Sends the calculated result back to the caller.

```csharp
int answer = AddNumbers(10, 20);
```

Calls the method and stores its returned value in `answer`.

```csharp
Console.WriteLine(answer);
```

Displays the result.

### Why Is `return` Important?

Consider:

```csharp
static int Multiply(int a, int b)
{
    return a * b;
}
```

The returned result can be used in different ways.

```csharp
int result = Multiply(5, 4);

Console.WriteLine(result);
```

Or:

```csharp
Console.WriteLine(Multiply(5, 4));
```

Or even:

```csharp
int finalResult = Multiply(5, 4) + 10;
```

Output of the last calculation:

```text
30
```

The method returns 20, which is then added to 10.

---

## 6. Void Methods vs Methods That Return Values

A `void` method performs an operation without returning a value.

Example:

```csharp
static void DisplayMessage()
{
    Console.WriteLine("Operation completed.");
}
```

A method with a return type sends a value back.

Example:

```csharp
static int GetNumber()
{
    return 100;
}
```

Comparison:

| Feature | `void` method | Returning method |
|---|---|---|
| Returns a value | No | Yes |
| Uses `return value` | No | Yes |
| Can display messages | Yes | Yes |
| Can perform calculations | Yes | Yes |
| Can be used in expressions | Not as a value | Yes |

A `void` method can use a bare `return;` to exit early.

Example:

```csharp
static void CheckAge(int age)
{
    if (age < 18)
    {
        Console.WriteLine("Access denied.");

        return;
    }

    Console.WriteLine("Access granted.");
}
```

When the age is below 18, the method exits before displaying the second message.

---

## 7. Methods and Reusable Logic in Real Applications

Consider a learning management system.

Instead of putting every instruction inside one large block, you can organize the application into methods.

```csharp
static void RegisterStudent()
{
    Console.WriteLine("Registering student...");
}

static void CalculateResults()
{
    Console.WriteLine("Calculating results...");
}

static void DisplayResults()
{
    Console.WriteLine("Displaying results...");
}
```

The application can call each operation when required.

```csharp
RegisterStudent();

CalculateResults();

DisplayResults();
```

This makes the program easier to understand and maintain.

**Part 1 Progress: Method fundamentals completed.**

Progress: Part 1 of 4

---

# PART 2: INTERMEDIATE METHODS AND REUSABLE LOGIC

## 8. Method Overloading

Method overloading allows you to define multiple methods with the same name but different parameter lists.

This is useful when an operation should support different types or numbers of inputs.

Example:

```csharp
static int Add(int a, int b)
{
    return a + b;
}

static int Add(int a, int b, int c)
{
    return a + b + c;
}

static double Add(double a, double b)
{
    return a + b;
}
```

Calling the methods:

```csharp
Console.WriteLine(Add(5, 10));

Console.WriteLine(Add(5, 10, 15));

Console.WriteLine(Add(2.5, 3.5));
```

Output:

```text
15
30
6
```

### How Does C# Choose the Correct Method?

C# examines the arguments supplied in the method call.

For example:

```csharp
Add(5, 10);
```

Matches the method with two integer parameters.

```csharp
Add(5, 10, 15);
```

Matches the method with three integer parameters.

```csharp
Add(2.5, 3.5);
```

Matches the method with two double parameters.

### Important Rule

You cannot overload methods using only different return types.

For example, these declarations are invalid together:

```csharp
static int Calculate(int number)
{
    return number * 2;
}

static double Calculate(int number)
{
    return number * 2.0;
}
```

The parameter lists are identical.

C# cannot distinguish these methods using the return type alone.

---

## 9. Optional Parameters

An optional parameter has a default value.

This allows callers to omit that argument.

Example:

```csharp
static void Greet(string name, string message = "Welcome")
{
    Console.WriteLine($"{message}, {name}!");
}
```

Calling the method:

```csharp
Greet("Mary");

Greet("John", "Good morning");
```

Output:

```text
Welcome, Mary!
Good morning, John!
```

Explanation:

```csharp
string message = "Welcome"
```

Defines a default value for `message`.

When the caller does not provide a second argument, `"Welcome"` is used.

When the caller provides another value, that value replaces the default.

Optional parameters generally appear after required parameters in a method declaration.

---

## 10. Named Arguments

Named arguments allow you to specify parameter names when calling a method.

Example:

```csharp
static void CreateAccount(string username, string email, int age)
{
    Console.WriteLine($"Username: {username}");
    Console.WriteLine($"Email: {email}");
    Console.WriteLine($"Age: {age}");
}
```

Calling the method:

```csharp
CreateAccount(
    age: 22,
    email: "mary@example.com",
    username: "mary22"
);
```

Output:

```text
Username: mary22
Email: mary@example.com
Age: 22
```

The arguments can be written in a different order because their parameter names are explicitly identified.

Named arguments are especially useful when methods contain several parameters.

---

## 11. The `ref` Keyword

The `ref` keyword allows a method to receive a variable by reference.

This means the method can modify the original variable.

Example:

```csharp
static void IncreaseBalance(ref decimal balance)
{
    balance += 500;
}

decimal accountBalance = 1000;

IncreaseBalance(ref accountBalance);

Console.WriteLine(accountBalance);
```

Output:

```text
1500
```

### Explanation

```csharp
static void IncreaseBalance(ref decimal balance)
```

Declares a method that receives a decimal variable by reference.

```csharp
balance += 500;
```

Adds 500 to the variable.

```csharp
decimal accountBalance = 1000;
```

Creates the original balance.

```csharp
IncreaseBalance(ref accountBalance);
```

Passes the original variable by reference.

The `ref` keyword must be used in both the method declaration and the call.

The original variable is modified.

### When Is `ref` Useful?

It is useful when a method needs to modify a variable supplied by its caller.

However, do not use it unnecessarily. Often, returning a new value makes code easier to understand.

---

## 12. The `out` Keyword

The `out` keyword allows a method to return additional values through its parameters.

Unlike `ref`, an `out` parameter does not need to be initialized before being passed to a method.

The method must assign it before returning normally.

Example:

```csharp
static void GetStudentDetails(out string name, out int age)
{
    name = "Brian";

    age = 22;
}

GetStudentDetails(out string studentName, out int studentAge);

Console.WriteLine(studentName);
Console.WriteLine(studentAge);
```

Output:

```text
Brian
22
```

### Explanation

```csharp
static void GetStudentDetails(out string name, out int age)
```

Declares two output parameters.

```csharp
name = "Brian";
```

Assigns a value to the first output parameter.

```csharp
age = 22;
```

Assigns a value to the second output parameter.

```csharp
GetStudentDetails(out string studentName, out int studentAge);
```

Calls the method and receives both values.

### `ref` vs `out`

| Feature | `ref` | `out` |
|---|---|---|
| Must be initialized before the call | Yes | No |
| Must be assigned inside the method | Not necessarily | Yes |
| Can modify the caller's variable | Yes | Yes |
| Common purpose | Modify an existing value | Produce an output value |

You have already encountered `out` in `int.TryParse()`.

For example:

```csharp
if (int.TryParse("100", out int number))
{
    Console.WriteLine(number);
}
```

The parsed integer is placed into `number`.

---

## 13. The `params` Keyword

The `params` keyword allows a method to accept a variable number of arguments.

This is useful when you do not know how many values the caller will supply.

Example:

```csharp
static int CalculateTotal(params int[] numbers)
{
    int total = 0;

    foreach (int number in numbers)
    {
        total += number;
    }

    return total;
}
```

Calling the method:

```csharp
Console.WriteLine(CalculateTotal(10, 20));

Console.WriteLine(CalculateTotal(10, 20, 30));

Console.WriteLine(CalculateTotal(5, 10, 15, 20));
```

Output:

```text
30
60
50
```

### Explanation

```csharp
params int[] numbers
```

Allows the method to receive multiple integer arguments.

```csharp
int total = 0;
```

Creates a variable for storing the sum.

```csharp
foreach (int number in numbers)
```

Processes each supplied number.

```csharp
total += number;
```

Adds each number to the running total.

```csharp
return total;
```

Returns the final sum.

A `params` parameter must be the last parameter in its method declaration.

---

## 14. Local Variables and Method Scope

A local variable is declared inside a method or another code block.

It can only be accessed within its scope.

Example:

```csharp
static void Calculate()
{
    int result = 50;

    Console.WriteLine(result);
}
```

The variable `result` exists within the method's scope.

Trying to access it outside the method produces an error:

```csharp
static void Calculate()
{
    int result = 50;
}

Console.WriteLine(result);
```

The variable is not available outside `Calculate()`.

### Why Scope Matters

Imagine two methods:

```csharp
static void CalculateTax()
{
    decimal tax = 500;
}

static void CalculateSalary()
{
    decimal tax = 300;
}
```

Both methods can have a local variable named `tax`.

They are separate local variables because each belongs to a different method scope.

This helps prevent accidental interference between unrelated operations.

---

## 15. Static Methods and Instance Methods

C# supports both static methods and instance methods.

### Static Method

A static method belongs to the type.

```csharp
class Calculator
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}
```

Calling it:

```csharp
int result = Calculator.Add(10, 20);
```

No object needs to be created.

### Instance Method

An instance method belongs to an object created from a class.

```csharp
class Calculator
{
    public int Multiply(int a, int b)
    {
        return a * b;
    }
}
```

Calling it:

```csharp
Calculator calculator = new Calculator();

int result = calculator.Multiply(5, 4);
```

Here:

```csharp
Calculator calculator = new Calculator();
```

Creates an object of the `Calculator` class.

The method is then called through that object.

### Comparison

| Feature | Static method | Instance method |
|---|---|---|
| Belongs to | Type | Object |
| Requires object creation | No | Yes |
| Accesses instance fields directly | No | Yes |
| Typical use | General calculations and utilities | Object-specific operations |

---

## 16. Recursive Methods

Recursion occurs when a method calls itself.

A recursive method solves a problem by breaking it into smaller versions of the same problem.

A recursive method normally needs:

1. A base case that stops recursion.
2. A recursive case that calls the method again with a smaller or simpler problem.

Example: Calculating a factorial.

The factorial of a positive integer is the product of all positive integers up to that number.

For example:

5! = 5 × 4 × 3 × 2 × 1 = 120

C# implementation:

```csharp
static int Factorial(int number)
{
    if (number <= 1)
    {
        return 1;
    }

    return number * Factorial(number - 1);
}
```

Calling the method:

```csharp
Console.WriteLine(Factorial(5));
```

Output:

```text
120
```

### Understanding the Code

```csharp
static int Factorial(int number)
```

Declares a method that accepts an integer and returns an integer.

```csharp
if (number <= 1)
```

Checks whether the method has reached its stopping condition.

```csharp
return 1;
```

Returns 1 when the number is 1 or smaller.

This is the base case.

```csharp
return number * Factorial(number - 1);
```

Calls the same method again using a smaller number.

For `Factorial(5)`, the calls are conceptually:

```text
Factorial(5)
5 × Factorial(4)
5 × 4 × Factorial(3)
5 × 4 × 3 × Factorial(2)
5 × 4 × 3 × 2 × Factorial(1)
5 × 4 × 3 × 2 × 1
120
```

### Why Is the Base Case Important?

Without a stopping condition, the method could continue calling itself indefinitely until the program runs out of available stack space.

This can cause a `StackOverflowException`.

### When Is Recursion Useful?

Recursion is useful for:

- Processing tree structures.
- Traversing directories.
- Solving mathematical problems.
- Exploring nested data.
- Implementing certain searching and sorting algorithms.

However, recursion is not always the best solution. A loop may be more efficient and easier to understand for simple repetition.

---

## 17. Expression-Bodied Methods

For simple methods, C# allows a shorter syntax using the `=>` operator.

Example using a normal method:

```csharp
static int Square(int number)
{
    return number * number;
}
```

Equivalent expression-bodied method:

```csharp
static int Square(int number) => number * number;
```

Both perform the same operation.

Another example:

```csharp
static bool IsAdult(int age) => age >= 18;
```

Calling it:

```csharp
Console.WriteLine(IsAdult(20));
```

Output:

```text
True
```

Expression-bodied methods are particularly useful for short operations that contain a single expression.

---

## 18. Pure Methods and Side Effects

A pure method is a method that:

1. Produces the same output when given the same inputs.
2. Does not modify external state or cause observable side effects.

Example:

```csharp
static int Add(int a, int b)
{
    return a + b;
}
```

Calling:

```csharp
Add(5, 10);
```

Always produces 15.

The method does not change external variables, files, or application data.

Now consider:

```csharp
static int accountBalance = 1000;

static void Deposit(int amount)
{
    accountBalance += amount;
}
```

This method changes shared state.

It has a side effect because calling it modifies `accountBalance`.

### Why Does This Matter?

Methods with predictable behaviour are easier to test and maintain.

Pure methods are especially valuable in calculations, validation, and data transformations.

Side-effecting methods are still necessary for real applications, such as saving records, sending messages, and updating balances.

---

## 19. Designing Methods with Single Responsibilities

A method should generally have one clear responsibility.

Poor design:

```csharp
static void ProcessStudent()
{
    // Collect student information
    // Validate marks
    // Calculate grade
    // Save student
    // Display results
    // Send notification
}
```

This method handles many unrelated tasks.

A better design separates responsibilities:

```csharp
static string GetStudentName()
{
    Console.Write("Enter student name: ");

    return Console.ReadLine() ?? "";
}

static string CalculateGrade(int marks)
{
    if (marks >= 80)
        return "A";

    if (marks >= 70)
        return "B";

    if (marks >= 60)
        return "C";

    if (marks >= 50)
        return "D";

    return "F";
}

static void DisplayResult(string name, int marks, string grade)
{
    Console.WriteLine($"Name: {name}");
    Console.WriteLine($"Marks: {marks}");
    Console.WriteLine($"Grade: {grade}");
}
```

Each method has a specific responsibility.

This is easier to test, reuse, and improve.

**Part 2 Progress: Intermediate method techniques completed.**

Progress: Part 2 of 4

---

# PART 3: PRACTICAL IMPLEMENTATION

In this part, you will build complete programs that demonstrate how methods work in real applications.

## 20. Preparing the Project

Open your terminal and create a new console project:

```bash
dotnet new console -n CSharpMethodsPractice
```

Enter the directory:

```bash
cd CSharpMethodsPractice
```

Run the application:

```bash
dotnet run
```

Open `Program.cs` in your editor.

We will replace its contents with the following practical programs.

---

## 21. Practical Project One: Student Results Calculator

### Project objective

Build a program that:

- Accepts student information.
- Collects three subject marks.
- Calculates the average.
- Determines the grade.
- Displays the final report.

Instead of placing everything inside one method, we will create separate methods for each task.

### Complete code

```csharp
using System;

string studentName = GetStudentName();

int mathematics = GetMarks("Mathematics");
int programming = GetMarks("Programming");
int database = GetMarks("Database Systems");

double average = CalculateAverage(
    mathematics,
    programming,
    database
);

string grade = CalculateGrade(average);

DisplayReport(studentName, mathematics, programming, database, average, grade);


static string GetStudentName()
{
    Console.Write("Enter student name: ");

    return Console.ReadLine() ?? "";
}


static int GetMarks(string subject)
{
    while (true)
    {
        Console.Write($"Enter {subject} marks: ");

        if (int.TryParse(Console.ReadLine(), out int marks)
            && marks >= 0
            && marks <= 100)
        {
            return marks;
        }

        Console.WriteLine("Enter a valid mark between 0 and 100.");
    }
}


static double CalculateAverage(int first, int second, int third)
{
    return (first + second + third) / 3.0;
}


static string CalculateGrade(double average)
{
    if (average >= 80)
        return "A";

    if (average >= 70)
        return "B";

    if (average >= 60)
        return "C";

    if (average >= 50)
        return "D";

    return "F";
}


static void DisplayReport(
    string name,
    int mathematics,
    int programming,
    int database,
    double average,
    string grade)
{
    Console.WriteLine("\n===== STUDENT REPORT =====");

    Console.WriteLine($"Student: {name}");

    Console.WriteLine($"Mathematics: {mathematics}");

    Console.WriteLine($"Programming: {programming}");

    Console.WriteLine($"Database Systems: {database}");

    Console.WriteLine($"Average: {average:F2}");

    Console.WriteLine($"Grade: {grade}");
}
```

### Detailed explanation

#### A. Collecting student information

```csharp
string studentName = GetStudentName();
```

Calls the `GetStudentName()` method.

The returned name is stored in `studentName`.

```csharp
int mathematics = GetMarks("Mathematics");
```

Calls `GetMarks()` and supplies the subject name as an argument.

The same method is reused for the other subjects:

```csharp
int programming = GetMarks("Programming");
int database = GetMarks("Database Systems");
```

We do not need three separate input methods.

#### B. Validating marks

```csharp
static int GetMarks(string subject)
```

Declares a method that receives the subject name and returns an integer.

```csharp
while (true)
```

Creates a loop that continues until a valid mark is entered.

```csharp
Console.Write($"Enter {subject} marks: ");
```

Displays the subject name dynamically.

```csharp
int.TryParse(Console.ReadLine(), out int marks)
```

Attempts to convert the user's input into an integer.

```csharp
&& marks >= 0
&& marks <= 100
```

Checks that the entered value is between 0 and 100.

```csharp
return marks;
```

Returns the valid mark and exits the method.

If the input is invalid, an error message appears and the loop repeats.

#### C. Calculating the average

```csharp
static double CalculateAverage(int first, int second, int third)
```

Defines a method that accepts three integer marks and returns a double.

```csharp
return (first + second + third) / 3.0;
```

Calculates the average.

We divide by `3.0` instead of `3` to ensure floating-point division rather than integer division.

#### D. Calculating the grade

```csharp
static string CalculateGrade(double average)
```

Accepts the average and returns a grade as text.

Each condition checks a grade boundary.

The method returns immediately when a matching grade is found.

#### E. Displaying the report

```csharp
static void DisplayReport(...)
```

Receives the student's information and displays it.

The method uses `void` because it performs an output operation rather than returning a calculated value.

### Example execution

```text
Enter student name: Brian
Enter Mathematics marks: 80
Enter Programming marks: 90
Enter Database Systems marks: 70

===== STUDENT REPORT =====
Student: Brian
Mathematics: 80
Programming: 90
Database Systems: 70
Average: 80.00
Grade: A
```

### What makes this program reusable?

Imagine adding another subject.

You can reuse `GetMarks()` instead of writing another validation block.

If the grading system changes, you only update `CalculateGrade()`.

If the report format changes, you only update `DisplayReport()`.

This is the advantage of separating responsibilities into methods.

---

## 22. Practical Project Two: Banking Application Using Methods

### Project objective

Create a simple banking application with reusable methods for:

- Depositing money.
- Withdrawing money.
- Checking the balance.
- Displaying the menu.

We will use a class to organize the banking operations.

### Complete code

```csharp
using System;

BankAccount account = new BankAccount();

bool running = true;

while (running)
{
    DisplayMenu();

    Console.Write("Choose an option: ");

    string? input = Console.ReadLine();

    if (!int.TryParse(input, out int choice))
    {
        Console.WriteLine("Invalid selection.");
        continue;
    }

    switch (choice)
    {
        case 1:

            Console.Write("Enter deposit amount: ");

            if (decimal.TryParse(Console.ReadLine(), out decimal deposit))
            {
                account.Deposit(deposit);
            }
            else
            {
                Console.WriteLine("Invalid amount.");
            }

            break;

        case 2:

            Console.Write("Enter withdrawal amount: ");

            if (decimal.TryParse(Console.ReadLine(), out decimal withdrawal))
            {
                account.Withdraw(withdrawal);
            }
            else
            {
                Console.WriteLine("Invalid amount.");
            }

            break;

        case 3:

            account.DisplayBalance();

            break;

        case 4:

            running = false;

            Console.WriteLine("Thank you for banking with us.");

            break;

        default:

            Console.WriteLine("Invalid menu option.");

            break;
    }
}


static void DisplayMenu()
{
    Console.WriteLine("\n===== BANKING SYSTEM =====");

    Console.WriteLine("1. Deposit");

    Console.WriteLine("2. Withdraw");

    Console.WriteLine("3. Check Balance");

    Console.WriteLine("4. Exit");
}


class BankAccount
{
    private decimal balance = 5000m;


    public void Deposit(decimal amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Deposit must be greater than zero.");

            return;
        }

        balance += amount;

        Console.WriteLine("Deposit successful.");
    }


    public void Withdraw(decimal amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Withdrawal must be greater than zero.");

            return;
        }

        if (amount > balance)
        {
            Console.WriteLine("Insufficient funds.");

            return;
        }

        balance -= amount;

        Console.WriteLine("Withdrawal successful.");
    }


    public void DisplayBalance()
    {
        Console.WriteLine($"Current Balance: KSh {balance:N2}");
    }
}
```

### Understanding the program

#### A. Creating a bank account

```csharp
BankAccount account = new BankAccount();
```

Creates an object from the `BankAccount` class.

The object represents a bank account.

#### B. Displaying the menu

```csharp
DisplayMenu();
```

Calls the method responsible for displaying menu options.

The menu is not repeated manually throughout the application.

#### C. Calling deposit

```csharp
account.Deposit(deposit);
```

Calls the `Deposit()` method belonging to the bank account object.

The entered amount is supplied as an argument.

#### D. Calling withdrawal

```csharp
account.Withdraw(withdrawal);
```

Calls the withdrawal operation.

The method checks:

1. Whether the amount is greater than zero.
2. Whether the account has sufficient funds.
3. Whether the transaction can proceed.

#### E. Understanding `private decimal balance`

```csharp
private decimal balance = 5000m;
```

Stores the account balance inside the `BankAccount` class.

The `private` modifier prevents unrelated code from directly changing the balance.

Instead, the program uses methods such as `Deposit()` and `Withdraw()`.

This is an introduction to encapsulation, which will become important in object-oriented programming.

### Example execution

```text
===== BANKING SYSTEM =====
1. Deposit
2. Withdraw
3. Check Balance
4. Exit

Choose an option: 1
Enter deposit amount: 1500
Deposit successful.

===== BANKING SYSTEM =====
1. Deposit
2. Withdraw
3. Check Balance
4. Exit

Choose an option: 3
Current Balance: KSh 6,500.00
```

### What you have learned

This project demonstrates that methods can belong to classes and objects.

It also shows how one application can contain multiple methods, each handling a specific responsibility.

---

## 23. Practical Project Three: Reusable Calculator

### Project objective

Build a calculator that performs different mathematical operations using separate methods.

### Complete code

```csharp
using System;

Console.Write("Enter first number: ");

if (!double.TryParse(Console.ReadLine(), out double firstNumber))
{
    Console.WriteLine("Invalid first number.");
    return;
}

Console.Write("Enter second number: ");

if (!double.TryParse(Console.ReadLine(), out double secondNumber))
{
    Console.WriteLine("Invalid second number.");
    return;
}

Console.WriteLine("\nSelect operation:");

Console.WriteLine("1. Addition");

Console.WriteLine("2. Subtraction");

Console.WriteLine("3. Multiplication");

Console.WriteLine("4. Division");

Console.Write("Choice: ");

string? input = Console.ReadLine();

if (!int.TryParse(input, out int choice))
{
    Console.WriteLine("Invalid operation.");
    return;
}

switch (choice)
{
    case 1:
        Console.WriteLine(Add(firstNumber, secondNumber));
        break;

    case 2:
        Console.WriteLine(Subtract(firstNumber, secondNumber));
        break;

    case 3:
        Console.WriteLine(Multiply(firstNumber, secondNumber));
        break;

    case 4:

        if (secondNumber == 0)
        {
            Console.WriteLine("Cannot divide by zero.");
        }
        else
        {
            Console.WriteLine(Divide(firstNumber, secondNumber));
        }

        break;

    default:
        Console.WriteLine("Invalid operation.");
        break;
}


static double Add(double a, double b)
{
    return a + b;
}


static double Subtract(double a, double b)
{
    return a - b;
}


static double Multiply(double a, double b)
{
    return a * b;
}


static double Divide(double a, double b)
{
    return a / b;
}
```

### Explanation

The program first collects two numbers.

It then asks the user to select an operation.

The `switch` statement determines which method should execute.

For example:

```csharp
case 1:
    Console.WriteLine(Add(firstNumber, secondNumber));
    break;
```

Calls the `Add()` method and displays its returned result.

The addition method:

```csharp
static double Add(double a, double b)
{
    return a + b;
}
```

Receives two numbers and returns their sum.

The subtraction, multiplication, and division methods follow the same structure.

### Why Use Separate Methods?

Imagine changing the division logic in the future.

You only need to modify `Divide()`.

The other operations remain unaffected.

This is easier than maintaining one very large block of calculations.

---

## 24. Practical Project Four: Utility Methods Library

### Project objective

Create a collection of reusable methods that could be used in different applications.

We will build methods for:

- Checking whether a number is even.
- Finding the largest of two numbers.
- Converting Celsius to Fahrenheit.
- Calculating a rectangle's area.
- Validating an email's basic format.

### Complete code

```csharp
using System;

Console.WriteLine(IsEven(10));

Console.WriteLine(FindLargest(20, 35));

Console.WriteLine(ConvertToFahrenheit(25));

Console.WriteLine(CalculateRectangleArea(10, 5));

Console.WriteLine(IsValidEmail("student@example.com"));


static bool IsEven(int number)
{
    return number % 2 == 0;
}


static int FindLargest(int first, int second)
{
    return first > second ? first : second;
}


static double ConvertToFahrenheit(double celsius)
{
    return (celsius * 9 / 5) + 32;
}


static double CalculateRectangleArea(double length, double width)
{
    return length * width;
}


static bool IsValidEmail(string email)
{
    return email.Contains('@') && email.Contains('.');
}
```

### Explanation of Each Method

**Method 1: Checking even numbers**

```csharp
static bool IsEven(int number)
{
    return number % 2 == 0;
}
```

The `%` operator calculates the remainder after division.

An even number has a remainder of zero when divided by two.

The method returns `true` if the number is even.

**Method 2: Finding the largest number**

```csharp
static int FindLargest(int first, int second)
{
    return first > second ? first : second;
}
```

This uses the conditional operator.

It checks whether `first` is greater than `second`.

If true, it returns `first`.

Otherwise, it returns `second`.

**Method 3: Temperature conversion**

```csharp
static double ConvertToFahrenheit(double celsius)
{
    return (celsius * 9 / 5) + 32;
}
```

Uses the standard Celsius-to-Fahrenheit formula.

**Method 4: Rectangle area**

```csharp
static double CalculateRectangleArea(double length, double width)
{
    return length * width;
}
```

Multiplies the length by the width.

**Method 5: Basic email check**

```csharp
static bool IsValidEmail(string email)
{
    return email.Contains('@') && email.Contains('.');
}
```

Checks whether the text contains an `@` symbol and a period.

This is only a simple learning example. Real email validation requires more careful handling and, when necessary, confirmation that the address can receive messages.

### Expected output

```text
True
35
77
50
True
```

These methods can be reused in different programs without rewriting their internal logic.

---

## 25. Common Mistakes When Working with Methods

### Mistake 1: Declaring a method but never calling it

```csharp
static void Welcome()
{
    Console.WriteLine("Welcome!");
}
```

Nothing happens if the method is never called.

Correction:

```csharp
Welcome();
```

### Mistake 2: Returning the wrong data type

Incorrect:

```csharp
static int GetName()
{
    return "Brian";
}
```

The method promises to return an integer but returns a string.

Correct:

```csharp
static string GetName()
{
    return "Brian";
}
```

### Mistake 3: Forgetting a return statement

Incorrect:

```csharp
static int Add(int a, int b)
{
    int result = a + b;
}
```

The method declares an integer return type but does not return an integer.

Correct:

```csharp
static int Add(int a, int b)
{
    int result = a + b;

    return result;
}
```

### Mistake 4: Supplying the wrong number of arguments

Method:

```csharp
static void Greet(string name, int age)
{
    Console.WriteLine($"{name} is {age} years old.");
}
```

Incorrect call:

```csharp
Greet("Mary");
```

The method requires two arguments.

Correct:

```csharp
Greet("Mary", 22);
```

### Mistake 5: Accessing local variables outside their scope

Incorrect:

```csharp
static void Calculate()
{
    int total = 100;
}

Console.WriteLine(total);
```

The variable `total` only exists inside the method.

Correct approach:

```csharp
static int Calculate()
{
    return 100;
}

int total = Calculate();

Console.WriteLine(total);
```

### Mistake 6: Creating methods that do too much

A method that collects information, calculates results, saves data, sends notifications, and displays reports becomes difficult to maintain.

Separate these responsibilities into smaller methods.

### Practical Exercises

**Exercise 1: Area Calculator**

Create methods that calculate:

- Rectangle area.
- Triangle area.
- Circle area.

Each method should accept the necessary measurements and return the calculated result.

**Exercise 2: Temperature Converter**

Create two reusable methods:

- Celsius to Fahrenheit.
- Fahrenheit to Celsius.

Accept input from the user and display the converted temperature.

**Exercise 3: Password Validator**

Create a method called `ValidatePassword()`.

It should check whether a password:

- Contains at least eight characters.
- Contains at least one digit.
- Contains at least one uppercase letter.

Return `true` when all conditions are satisfied.

**Exercise 4: Shopping Calculator**

Create reusable methods to:

- Calculate the subtotal.
- Calculate a discount.
- Calculate the final amount.
- Display the receipt.

**Exercise 5: Recursive Factorial**

Write a recursive method that calculates the factorial of a number.

Test it with 4, 5, and 6.

**Part 3 Progress: Practical programming completed.**

Progress: Part 3 of 4

---

# PART 4: KAI ASSESSMENT

## 26. Assessment Instructions

You have learned how to declare methods, pass parameters, return values, overload methods, use reference parameters, and organize reusable logic.

This assessment checks both your theoretical understanding and your practical programming ability.

Answer all questions and submit your code to Kai for evaluation.

## SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is a method in C#?

A. A variable that stores information.

B. A reusable block of code designed to perform a task.

C. A database table.

D. A programming language.

**Question 2**

Which keyword indicates that a method does not return a value?

A. `int`

B. `return`

C. `void`

D. `static`

**Question 3**

What is the purpose of a parameter?

A. To terminate a method.

B. To receive information supplied when a method is called.

C. To create a database.

D. To repeat a loop.

**Question 4**

What is an argument?

A. The actual value supplied to a method when calling it.

B. The method's return type.

C. A variable that must always be static.

D. A loop condition.

**Question 5**

Which keyword allows multiple methods to have the same name with different parameter lists?

A. `override`

B. `static`

C. Method overloading.

D. `private`

**Question 6**

What does the `return` statement do?

A. Repeats a method.

B. Sends a value back to the caller and exits the method.

C. Creates a new variable.

D. Declares a parameter.

**Question 7**

What is the purpose of the `params` keyword?

A. It allows a method to receive a variable number of arguments.

B. It prevents a method from returning values.

C. It creates a private variable.

D. It terminates recursion.

**Question 8**

What is the main difference between a static method and an instance method?

A. Static methods cannot perform calculations.

B. Instance methods cannot return values.

C. Static methods belong to the type, while instance methods belong to objects.

D. There is no difference.

**Question 9**

What happens when a recursive method has no suitable base case?

A. It automatically stops.

B. It may continue recursively until a stack overflow occurs.

C. It always returns zero.

D. It becomes a static method.

**Question 10**

Which keyword allows a method to modify a variable passed by reference?

A. `return`

B. `out`

C. `ref`

D. `params`

---

## SECTION B: CONCEPTUAL QUESTIONS

**Question 11**

Explain why methods are important in software development.

Give at least four advantages.

**Question 12**

Explain the difference between:

- A method declaration.
- A method call.

Provide a C# example of each.

**Question 13**

Explain the difference between parameters and arguments.

Use an example involving a student registration method.

**Question 14**

What is method overloading?

Write an example of two overloaded methods that calculate the sum of numbers.

**Question 15**

Explain the difference between `ref` and `out`.

When would you use each?

**Question 16**

What is recursion?

Explain why a base case is necessary.

---

## SECTION C: CODE ANALYSIS AND DEBUGGING

**Question 17**

Study this method:

```csharp
static int Multiply(int a, int b)
{
    return a * b;
}
```

Answer:

1. What is the method name?
2. What is its return type?
3. How many parameters does it accept?
4. What values would be returned by `Multiply(5, 6)`?
5. Write a statement that calls the method and stores the result in a variable.

**Question 18**

The following method contains an error:

```csharp
static int CalculateTotal(int price, int quantity)
{
    int total = price * quantity;
}
```

Tasks:

1. Identify the error.
2. Explain why it happens.
3. Rewrite the method correctly.

**Question 19**

Study this code:

```csharp
static void DisplayName(string name)
{
    Console.WriteLine(name);
}

DisplayName("Brian");
DisplayName("Mary");
```

Explain why the same method can display two different names.

**Question 20**

Study the following code:

```csharp
static int Square(int number)
{
    return number * number;
}

int result = Square(7);

Console.WriteLine(result);
```

Explain how the value 49 is produced.

---

## SECTION D: PRACTICAL PROGRAMMING

**Question 21: Employee Salary Calculator**

Build a C# program with separate methods to:

1. Accept an employee's name.
2. Accept their basic salary.
3. Calculate a 10% bonus.
4. Calculate gross salary.
5. Display the employee's salary report.

Your program should use appropriate return types and parameters.

**Question 22: Student Eligibility System**

Create a method called:

```csharp
static bool IsEligible(int marks)
```

The method should return `true` when marks are at least 50 and `false` otherwise.

Call the method with several different values and display the results.

**Question 23: Number Statistics**

Create a method using `params` that accepts multiple integers and returns their sum.

For example:

```csharp
CalculateSum(10, 20, 30, 40);
```

Expected result:

```text
100
```

**Question 24: Method Overloading**

Create overloaded methods called `CalculateArea()`.

They should calculate:

- The area of a rectangle using length and width.
- The area of a square using one side.
- The area of a circle using its radius.

Use appropriate numeric types.

---

## SECTION E: FINAL PRACTICAL PROJECT

### Project: CodeLab Academy Student Management System

Develop a console-based application that manages student information and academic results.

Your application should demonstrate how methods can divide a large application into smaller reusable operations.

### Required functionality

**1. Student registration**

Create a method that collects:

- Student name.
- Registration number.
- Course name.

**2. Marks collection**

Create a method that accepts marks for multiple subjects.

Validate each mark to ensure it is between 0 and 100.

**3. Grade calculation**

Create a reusable method that receives marks and returns the appropriate grade.

Use:

| Marks | Grade |
|---|---|
| 80–100 | A |
| 70–79 | B |
| 60–69 | C |
| 50–59 | D |
| 0–49 | F |

**4. Average calculation**

Create a method that accepts multiple marks and returns the average.

**5. Performance classification**

Create a method that determines whether the student passed or failed.

**6. Report generation**

Create a method that displays:

- Student name.
- Registration number.
- Course.
- Subject marks.
- Average.
- Grade.
- Performance status.

**7. Menu system**

Create a reusable method for displaying the application menu.

The menu should provide options to:

1. Register a student.
2. Enter student marks.
3. Calculate results.
4. Display student report.
5. Exit.

### Technical requirements

Your application must demonstrate:

- At least six custom methods.
- Methods with parameters.
- Methods that return values.
- At least one `void` method.
- Method overloading.
- Input validation.
- Appropriate use of `ref`, `out`, or `params`.
- Clear separation of responsibilities.

You should also explain why you chose each method's return type and parameters.

---

## 27. Submit Your Work to Kai

After completing the assessment, submit your answers and final project code to Kai.

Kai should evaluate:

1. Understanding of methods.
2. Correct method declarations.
3. Correct parameter and argument usage.
4. Return types and returned values.
5. Method overloading.
6. Appropriate use of `ref`, `out`, and `params`.
7. Recursion and stopping conditions.
8. Code organization and reusability.
9. Input validation.
10. Practical implementation.

### Lesson Completion Checklist

- [ ] I understand what methods are.
- [ ] I can declare and call methods.
- [ ] I understand parameters and arguments.
- [ ] I can create methods that return values.
- [ ] I understand `void` methods.
- [ ] I can overload methods.
- [ ] I understand optional and named arguments.
- [ ] I can use `ref` and `out`.
- [ ] I understand the `params` keyword.
- [ ] I understand method scope.
- [ ] I can distinguish static and instance methods.
- [ ] I understand recursion and base cases.
- [ ] I can organize applications into reusable methods.
- [ ] I can build practical applications using custom methods.

# PART 4 OF 4 — LESSON COMPLETE

**Next lesson: C# Collections and Data**

You will learn how to store, organize, retrieve, update, and process groups of information using arrays, lists, dictionaries, queues, stacks, and other collection types.