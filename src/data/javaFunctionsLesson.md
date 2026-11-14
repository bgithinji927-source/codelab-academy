
# JAVA: FUNCTIONS AND REUSABLE LOGIC

# PART 1 OF 4: INTRODUCTION TO METHODS

## 1. What Are Functions and Methods?

A function is a reusable block of code designed to perform a particular task.

In Java, functions defined inside classes are called **methods**.

Instead of writing the same instructions repeatedly, you can place them inside a method and call that method whenever needed.

### Example: Without a Method

Imagine you are developing a student management system and want to display a welcome message three times.

You might write:

```java
public class Main {
    public static void main(String[] args) {

        System.out.println("Welcome to CodeLab Academy");
        System.out.println("Welcome to CodeLab Academy");
        System.out.println("Welcome to CodeLab Academy");

    }
}
```

This works, but imagine repeating the same instructions 100 times.

Your code would become unnecessarily long.

### Example: With a Method

```java
public class Main {

    static void welcome() {
        System.out.println("Welcome to CodeLab Academy");
    }

    public static void main(String[] args) {

        welcome();
        welcome();
        welcome();

    }
}
```

Output:

```text
Welcome to CodeLab Academy
Welcome to CodeLab Academy
Welcome to CodeLab Academy
```

### Understanding the Code

Consider this method:

```java
static void welcome() {
    System.out.println("Welcome to CodeLab Academy");
}
```

- `static`: Allows the method to be called directly from the static `main()` method without creating an object.
- `void`: Means the method does not return a value.
- `welcome`: The name of the method.
- `()`: Contains the method's parameters, if any.
- `{ }`: Defines the body of the method.
- `System.out.println()`: Performs the task assigned to the method.

When we write:

```java
welcome();
```

We are calling the method.

Java executes the instructions inside it.

**Important:** Defining a method does not automatically execute it. You must call it.

---

## 2. Why Are Methods Important?

Methods make programs easier to develop, maintain and understand.

Consider a software application with the following operations:

- User registration.
- User login.
- Password validation.
- Payment processing.
- Generating reports.
- Sending notifications.

Instead of placing every instruction inside `main()`, you can create separate methods for each operation.

For example:

```java
registerUser();
loginUser();
validatePassword();
processPayment();
generateReport();
```

Each method handles a specific responsibility.

### Advantages of Methods

| Advantage | Explanation |
|---|---|
| Code reuse | Write code once and call it multiple times |
| Organization | Divide large programs into smaller sections |
| Maintainability | Update one method instead of changing repeated code |
| Readability | Give meaningful names to operations |
| Testing | Test individual methods separately |
| Reduced duplication | Avoid repeating identical instructions |

---

## 3. Anatomy of a Java Method

A Java method generally follows this structure:

```java
accessModifier static returnType methodName(parameters) {
    // Method body
    return value;
}
```

Let's understand the components.

| Component | Meaning |
|---|---|
| Access modifier | Determines where the method can be accessed |
| `static` | Allows class-level access without an object |
| Return type | Specifies the type of value returned |
| Method name | Identifies the method |
| Parameters | Information received by the method |
| Method body | Instructions executed by the method |
| `return` | Sends a result back to the caller |

Not every method uses all these components. For example, a method does not need to be `static`, and a `void` method does not need a return value.

### Example

```java
public static int calculateTotal() {

    int price = 500;
    int quantity = 3;

    return price * quantity;
}
```

Explanation:

- `public` makes the method accessible from other classes.
- `static` allows it to be called without creating an object.
- `int` means it returns an integer.
- `calculateTotal` is the method name.
- The method calculates the total price.
- `return` sends the calculated result back to the caller.

---

## 4. Creating and Calling a Method

Let's create a method that displays a message.

```java
public class Main {

    static void greet() {

        System.out.println("Hello, welcome!");

    }

    public static void main(String[] args) {

        greet();

    }
}
```

Output:

```text
Hello, welcome!
```

### How Java Executes This Program

1. Java starts executing the `main()` method.
2. It encounters `greet()`.
3. Java moves to the definition of `greet()`.
4. It executes the `System.out.println()` statement.
5. The greeting appears.
6. Java returns to `main()`.
7. The program finishes.

This process is called **method invocation**.

---

## 5. The Difference Between Defining and Calling a Method

These two operations are different.

**Method definition:**

```java
static void greet() {
    System.out.println("Hello");
}
```

This creates the method.

**Method call:**

```java
greet();
```

This executes the method.

If you define a method but never call it, its body will not execute.

---

## 6. Methods Without Return Values: void

A method with the return type `void` performs an operation without returning a result.

Example:

```java
public class Main {

    static void displayMessage() {

        System.out.println("Welcome to Java programming!");

    }

    public static void main(String[] args) {

        displayMessage();

    }
}
```

Output:

```text
Welcome to Java programming!
```

Here, the method only displays a message.

It does not calculate and return a value.

Other examples of tasks suitable for `void` methods include:

- Displaying menus.
- Printing reports.
- Showing notifications.
- Displaying instructions.

---

## 7. Methods With Parameters

A parameter is a variable declared in a method definition to receive information.

Parameters allow methods to work with different values.

Consider a method that displays a user's name.

Without parameters, you might have to create separate methods for different users.

With parameters, one method can serve everyone.

### Example

```java
public class Main {

    static void greet(String name) {

        System.out.println("Hello " + name);

    }

    public static void main(String[] args) {

        greet("Brian");
        greet("Mary");
        greet("John");

    }
}
```

Output:

```text
Hello Brian
Hello Mary
Hello John
```

### Explanation

```java
static void greet(String name)
```

This defines a method named `greet`.

- `String` specifies the parameter's data type.
- `name` is the parameter variable.

When we call:

```java
greet("Brian");
```

The value `"Brian"` is passed into the method.

Inside the method, `name` temporarily holds `"Brian"`.

When we call:

```java
greet("Mary");
```

The same method receives `"Mary"` instead.

### Parameter vs Argument

These terms are related but different.

| Parameter | Argument |
|---|---|
| Variable declared in the method definition | Actual value passed during a method call |
| `String name` | `"Brian"` |
| Receives information | Supplies information |

Example:

```java
static void greet(String name) {
    System.out.println(name);
}

greet("Brian");
```

- `name` is the parameter.
- `"Brian"` is the argument.

---

## 8. Methods With Multiple Parameters

A method can receive multiple pieces of information.

Example: Calculating the total price of purchased products.

```java
public class Main {

    static void calculateTotal(double price, int quantity) {

        double total = price * quantity;

        System.out.println("Total price: " + total);

    }

    public static void main(String[] args) {

        calculateTotal(250.0, 4);

    }
}
```

Output:

```text
Total price: 1000.0
```

### Explanation

```java
static void calculateTotal(double price, int quantity)
```

The method accepts two parameters:

- `price`: The cost of one product.
- `quantity`: The number of products purchased.

When we call:

```java
calculateTotal(250.0, 4);
```

Java assigns:

- `price = 250.0`
- `quantity = 4`

Then:

```java
double total = price * quantity;
```

Calculates:

250 × 4 = 1000.

Finally, the method displays the result.

### Part 1 Exercises

1. Define a method in Java.
2. Explain why methods are important.
3. What does the `void` keyword mean?
4. Differentiate between defining and calling a method.
5. What is a parameter?
6. Differentiate between a parameter and an argument.
7. Write a method named `welcome()` that displays a welcome message.
8. Write a method that accepts a student's name and displays it.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: RETURN VALUES, METHOD OVERLOADING AND SCOPE

## 9. Methods That Return Values

So far, we have created methods that perform tasks without returning results.

However, many programming operations need to calculate something and send the result back to the part of the program that called the method.

For this, Java uses the `return` statement.

Example: A method that adds two numbers.

```java
public class Main {

    static int add(int a, int b) {

        int result = a + b;

        return result;

    }

    public static void main(String[] args) {

        int answer = add(10, 20);

        System.out.println(answer);

    }
}
```

Output:

```text
30
```

### Understanding the Code

```java
static int add(int a, int b)
```

The return type is `int`.

This means the method must return an integer value.

```java
int result = a + b;
```

Adds the two parameters.

When the method receives 10 and 20, the result becomes 30.

```java
return result;
```

Sends 30 back to the calling statement.

```java
int answer = add(10, 20);
```

Calls the method and stores the returned value in `answer`.

Finally:

```java
System.out.println(answer);
```

Displays the result.

### Important Rule

The return type must match the type of value being returned, or be compatible with it.

For example:

```java
static double calculatePrice() {
    return 250.50;
}
```

This method returns a decimal value.

A `void` method does not return a value.

---

## 10. Different Return Types

Java methods can return different data types.

| Return type | Example value | Purpose |
|---|---|---|
| `int` | `25` | Whole numbers |
| `double` | `45.75` | Decimal numbers |
| `boolean` | `true` | Logical results |
| `String` | `"Hello"` | Text |
| `char` | `'A'` | Single character |
| `void` | No value | Performs an operation without returning a result |

### Example 1: Returning a String

```java
public class Main {

    static String getName() {

        return "Brian";

    }

    public static void main(String[] args) {

        String name = getName();

        System.out.println(name);

    }
}
```

Output:

```text
Brian
```

The method returns a `String`, which is stored in the `name` variable.

### Example 2: Returning a Boolean

```java
public class Main {

    static boolean isAdult(int age) {

        return age >= 18;

    }

    public static void main(String[] args) {

        boolean result = isAdult(21);

        System.out.println(result);

    }
}
```

Output:

```text
true
```

The method checks whether the supplied age is at least 18.

It returns either `true` or `false`.

### Example 3: Returning a Double

```java
public class Main {

    static double calculateArea(double length, double width) {

        return length * width;

    }

    public static void main(String[] args) {

        double area = calculateArea(10.5, 5.0);

        System.out.println("Area: " + area);

    }
}
```

Output:

```text
Area: 52.5
```

The method receives two decimal values, multiplies them and returns the result.

---

## 11. Understanding the return Statement

The `return` statement has two important purposes:

1. It sends a value back to the calling method.
2. It immediately ends the current method's execution.

Example:

```java
static int checkNumber() {

    return 10;

    // This statement cannot be reached.
}
```

Once Java executes `return 10`, the method finishes.

You cannot place ordinary executable statements after an unconditional return statement in the same block.

### Returning From a Conditional Statement

```java
public class Main {

    static String checkAge(int age) {

        if (age >= 18) {
            return "Adult";
        }

        return "Minor";
    }

    public static void main(String[] args) {

        System.out.println(checkAge(20));

    }
}
```

Output:

```text
Adult
```

If the condition is true, Java returns `"Adult"` immediately.

Otherwise, it reaches the second return statement and returns `"Minor"`.

---

## 12. Method Overloading

Method overloading occurs when a class contains multiple methods with the same name but different parameter lists.

This allows one method name to perform similar operations using different inputs.

For example, a calculator may need to add:

- Two integers.
- Three integers.
- Two decimal numbers.

Instead of creating unrelated method names, Java allows overloading.

### Example

```java
public class Main {

    static int add(int a, int b) {

        return a + b;

    }

    static int add(int a, int b, int c) {

        return a + b + c;

    }

    static double add(double a, double b) {

        return a + b;

    }

    public static void main(String[] args) {

        System.out.println(add(10, 20));

        System.out.println(add(10, 20, 30));

        System.out.println(add(5.5, 4.5));

    }
}
```

Output:

```text
30
60
10.0
```

### Understanding the Three Methods

**First method:**

```java
static int add(int a, int b)
```

Accepts two integers.

**Second method:**

```java
static int add(int a, int b, int c)
```

Accepts three integers.

**Third method:**

```java
static double add(double a, double b)
```

Accepts two decimal numbers.

Java identifies which method to execute based on the arguments supplied.

### Important Overloading Rule

You cannot overload methods by changing only the return type.

For example, these two methods cannot exist together:

```java
static int calculate(int number) {
    return number;
}

static double calculate(int number) {
    return number;
}
```

Both have the same method name and parameter list.

Java cannot distinguish them based on return type alone.

---

## 13. Static Methods vs Instance Methods

Java supports two important categories of methods.

### Static Methods

A static method belongs to the class rather than an individual object.

It can be called using the class name without creating an object.

Example:

```java
public class Calculator {

    static int add(int a, int b) {

        return a + b;

    }

    public static void main(String[] args) {

        int result = Calculator.add(10, 5);

        System.out.println(result);

    }
}
```

Output:

```text
15
```

Here:

```java
Calculator.add(10, 5);
```

Calls the method using the class name.

### Instance Methods

An instance method belongs to an object created from a class.

Example:

```java
public class Student {

    void introduce() {

        System.out.println("I am a student.");

    }

    public static void main(String[] args) {

        Student student = new Student();

        student.introduce();

    }
}
```

Output:

```text
I am a student.
```

Explanation:

```java
Student student = new Student();
```

Creates an object of the `Student` class.

```java
student.introduce();
```

Calls the instance method using that object.

### Comparison

| Static method | Instance method |
|---|---|
| Belongs to the class | Belongs to an object |
| Can be called without creating an object | Requires an object for normal access |
| Declared using `static` | Does not use `static` |
| Cannot directly access instance fields | Can access instance fields |

**Important:** A static method can access instance members through an object reference, but it cannot directly access instance members as though they belonged to the class.

---

## 14. Variable Scope Inside Methods

Scope determines where a variable can be accessed in a program.

Java has several kinds of variable scope.

### Local Variables

A local variable is declared inside a method or block.

Example:

```java
public class Main {

    static void calculate() {

        int number = 10;

        System.out.println(number);

    }

    public static void main(String[] args) {

        calculate();

    }
}
```

The variable `number` exists inside the `calculate()` method.

You cannot directly access it from outside that method.

### Parameter Variables

Parameters are also local to the method.

Example:

```java
static void greet(String name) {

    System.out.println(name);

}
```

The variable `name` can be used inside `greet()`.

It cannot be directly accessed from another unrelated method.

### Block Scope

Variables declared inside a block are only accessible within that block.

Example:

```java
public class Main {

    public static void main(String[] args) {

        if (true) {

            int age = 20;

            System.out.println(age);

        }

    }
}
```

The variable `age` is accessible inside the `if` block.

It is not accessible outside that block.

### Class-Level Variables

Class-level variables are declared inside a class but outside its methods.

They may be instance variables or static variables.

Example:

```java
public class Student {

    String name = "Brian";

    void displayName() {

        System.out.println(name);

    }

}
```

The variable `name` is an instance field and can be accessed by instance methods of the class.

---

## 15. Passing Arguments to Methods

Java is always **pass-by-value**.

This means a method receives a copy of the argument's value.

For primitive values, the method receives a copy of the actual value.

Example:

```java
public class Main {

    static void changeNumber(int number) {

        number = 100;

    }

    public static void main(String[] args) {

        int value = 10;

        changeNumber(value);

        System.out.println(value);

    }
}
```

Output:

```text
10
```

Why?

1. `value` contains 10.
2. The method receives a copy of 10.
3. The method changes its local parameter to 100.
4. The original variable remains 10.

### What About Objects?

When you pass an object to a method, Java copies the reference value.

The copied reference can still point to the same object.

Example:

```java
public class Main {

    static void changeName(StringBuilder name) {

        name.append(" Njogu");

    }

    public static void main(String[] args) {

        StringBuilder name = new StringBuilder("Brian");

        changeName(name);

        System.out.println(name);

    }
}
```

Output:

```text
Brian Njogu
```

The method received a copy of the reference, but both references point to the same `StringBuilder` object.

Therefore, modifying that object is visible outside the method.

Java is still pass-by-value; it does not pass objects by reference in the same sense as some other languages.

### Part 2 Exercises

1. What is a return value?
2. Explain the purpose of the `return` statement.
3. What happens when a method returns?
4. Define method overloading.
5. Can two Java methods have the same name and identical parameter lists but different return types?
6. Differentiate between static and instance methods.
7. What is variable scope?
8. Explain how Java passes primitive arguments to methods.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: ADVANCED METHODS AND PRACTICAL APPLICATIONS

## 16. Recursion

Recursion occurs when a method calls itself.

Instead of using a loop to repeat an operation, a recursive method solves a problem by repeatedly calling itself with smaller or simpler inputs.

A recursive method must have a **base case** that stops the repeated calls.

Without a proper base case, recursion may continue until Java encounters a `StackOverflowError`.

### Example: Countdown

```java
public class Main {

    static void countdown(int number) {

        if (number == 0) {

            System.out.println("Finished!");

            return;
        }

        System.out.println(number);

        countdown(number - 1);

    }

    public static void main(String[] args) {

        countdown(5);

    }
}
```

Output:

```text
5
4
3
2
1
Finished!
```

### Line-by-Line Explanation

```java
static void countdown(int number)
```

Defines a method that receives an integer.

```java
if (number == 0)
```

Checks whether the countdown has reached zero.

This is the base case.

```java
System.out.println("Finished!");
```

Displays the completion message.

```java
return;
```

Ends the current method call.

```java
System.out.println(number);
```

Displays the current number.

```java
countdown(number - 1);
```

Calls the same method again with a smaller number.

### Understanding the Recursive Calls

| Call | Value received |
|---|---:|
| First call | 5 |
| Second call | 4 |
| Third call | 3 |
| Fourth call | 2 |
| Fifth call | 1 |
| Sixth call | 0 |

When the value becomes zero, the base case is reached and recursion stops.

---

## 17. Recursion vs Iteration

Iteration uses loops to repeat instructions.

Recursion uses method calls to repeat a process.

| Recursion | Iteration |
|---|---|
| Method calls itself | Uses loops |
| Requires a base case | Requires a termination condition |
| Uses the call stack | Usually uses loop variables |
| Can be elegant for recursive problems | Often more memory-efficient |
| May cause stack overflow | Can also run indefinitely if poorly controlled |

Both approaches are useful.

For many simple counting and repetition tasks, loops are generally easier and more memory-efficient.

---

## 18. Varargs: Methods That Accept Multiple Arguments

Sometimes you do not know in advance how many arguments a method will receive.

Java provides variable-length arguments, called **varargs**.

The syntax uses three dots (`...`).

Example:

```java
public class Main {

    static int calculateSum(int... numbers) {

        int total = 0;

        for (int number : numbers) {

            total += number;

        }

        return total;

    }

    public static void main(String[] args) {

        System.out.println(calculateSum(10, 20));

        System.out.println(calculateSum(10, 20, 30));

        System.out.println(calculateSum(5, 10, 15, 20));

    }
}
```

Output:

```text
30
60
50
```

### Explanation

```java
static int calculateSum(int... numbers)
```

Declares a method that can receive any number of integer arguments.

Java treats the varargs parameter as an array inside the method.

```java
int total = 0;
```

Creates a variable for storing the sum.

```java
for (int number : numbers)
```

Processes each integer supplied to the method.

```java
total += number;
```

Adds the current number to the running total.

```java
return total;
```

Returns the final sum.

You can call this method with two, three, four or more integer arguments.

**Important:** A method can have only one varargs parameter, and it must be the final parameter.

---

## 19. Methods Calling Other Methods

One method can call another method.

This is useful for dividing a large operation into smaller responsibilities.

Example:

```java
public class Main {

    static double calculateTotal(double price, int quantity) {

        return price * quantity;

    }

    static double calculateDiscount(double total) {

        return total * 0.10;

    }

    static void displayReceipt(double total, double discount) {

        double finalPrice = total - discount;

        System.out.println("Total: " + total);
        System.out.println("Discount: " + discount);
        System.out.println("Final price: " + finalPrice);

    }

    public static void main(String[] args) {

        double total = calculateTotal(1000, 2);

        double discount = calculateDiscount(total);

        displayReceipt(total, discount);

    }
}
```

Output:

```text
Total: 2000.0
Discount: 200.0
Final price: 1800.0
```

### Understanding the Program

The program has three methods.

**Method 1:**

`calculateTotal()` calculates the original purchase amount.

It receives the product price and quantity.

**Method 2:**

`calculateDiscount()` calculates 10% of the original amount.

**Method 3:**

`displayReceipt()` calculates the final price and displays the receipt.

The `main()` method coordinates these operations.

This is an example of breaking a larger program into smaller methods.

---

## 20. Method Documentation Using JavaDoc

Java supports documentation comments that explain what methods do.

These comments are useful when developing large applications or libraries.

Example:

```java
/**
 * Calculates the total cost of purchased products.
 *
 * @param price the price of one product
 * @param quantity the number of products purchased
 * @return the total cost
 */
static double calculateTotal(double price, int quantity) {

    return price * quantity;

}
```

Explanation:

- `/**` starts a JavaDoc comment.
- `@param` documents a method parameter.
- `@return` documents the returned result.
- `*/` ends the documentation comment.

JavaDoc comments can be processed by the `javadoc` tool to generate HTML documentation.

For example:

```bash
javadoc Main.java
```

---

# 21. PRACTICAL PROJECT 1: REUSABLE CALCULATOR

Let's build a calculator where each mathematical operation has its own method.

### Step 1: Create the Project

Create a folder:

```text
JavaMethods
```

Inside it, create:

```text
Calculator.java
```

### Step 2: Write the Code

```java
import java.util.Scanner;

public class Calculator {

    static double add(double a, double b) {

        return a + b;

    }

    static double subtract(double a, double b) {

        return a - b;

    }

    static double multiply(double a, double b) {

        return a * b;

    }

    static double divide(double a, double b) {

        if (b == 0) {

            System.out.println("Cannot divide by zero.");

            return 0;

        }

        return a / b;

    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double first = input.nextDouble();

        System.out.print("Enter second number: ");
        double second = input.nextDouble();

        System.out.println("Addition: " + add(first, second));

        System.out.println("Subtraction: " + subtract(first, second));

        System.out.println("Multiplication: " + multiply(first, second));

        System.out.println("Division: " + divide(first, second));

        input.close();

    }
}
```

### Step 3: Understand the Methods

**Addition**

```java
static double add(double a, double b) {
    return a + b;
}
```

Receives two decimal values and returns their sum.

**Subtraction**

```java
static double subtract(double a, double b) {
    return a - b;
}
```

Subtracts the second value from the first.

**Multiplication**

```java
static double multiply(double a, double b) {
    return a * b;
}
```

Multiplies the two values.

**Division**

```java
static double divide(double a, double b) {
```

Receives two values for division.

```java
if (b == 0)
```

Checks whether the divisor is zero.

Division by zero is undefined in ordinary arithmetic.

```java
return a / b;
```

Performs division when the divisor is not zero.

### Step 4: Run the Program

Compile:

```bash
javac Calculator.java
```

Run:

```bash
java Calculator
```

Example:

```text
Enter first number: 20
Enter second number: 5

Addition: 25.0
Subtraction: 15.0
Multiplication: 100.0
Division: 4.0
```

**What you have learned:** Creating separate methods for individual operations, passing arguments and returning calculated values.

---

# 22. PRACTICAL PROJECT 2: STUDENT RESULTS MANAGEMENT

Now let's create a program that uses multiple methods to manage student results.

### Step 1: Create a File

```text
StudentResults.java
```

### Step 2: Write the Code

```java
import java.util.Scanner;

public class StudentResults {

    static double calculateAverage(double mark1, double mark2, double mark3) {

        return (mark1 + mark2 + mark3) / 3;

    }

    static String calculateGrade(double average) {

        if (average >= 80) {
            return "A";
        } else if (average >= 70) {
            return "B";
        } else if (average >= 60) {
            return "C";
        } else if (average >= 50) {
            return "D";
        } else {
            return "Fail";
        }

    }

    static void displayResults(String name, double average, String grade) {

        System.out.println("\n===== STUDENT RESULTS =====");

        System.out.println("Student: " + name);

        System.out.println("Average: " + average);

        System.out.println("Grade: " + grade);

    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter student name: ");
        String name = input.nextLine();

        System.out.print("Enter first mark: ");
        double mark1 = input.nextDouble();

        System.out.print("Enter second mark: ");
        double mark2 = input.nextDouble();

        System.out.print("Enter third mark: ");
        double mark3 = input.nextDouble();

        if (mark1 < 0 || mark1 > 100 ||
            mark2 < 0 || mark2 > 100 ||
            mark3 < 0 || mark3 > 100) {

            System.out.println("Invalid marks entered.");

        } else {

            double average = calculateAverage(mark1, mark2, mark3);

            String grade = calculateGrade(average);

            displayResults(name, average, grade);

        }

        input.close();

    }
}
```

### Step 3: Understand the Program Structure

This application has four important methods.

**1. `calculateAverage()`**

Receives three marks and calculates their average.

**2. `calculateGrade()`**

Receives the average and determines the student's grade.

It returns a `String` representing the grade.

**3. `displayResults()`**

Receives the student's name, average and grade.

It displays the results.

**4. `main()`**

Coordinates the entire application.

It:
- Receives input.
- Validates the marks.
- Calls the average calculation method.
- Calls the grade calculation method.
- Calls the display method.

Notice that each method has a specific responsibility.

### Step 4: Run the Program

Compile:

```bash
javac StudentResults.java
```

Run:

```bash
java StudentResults
```

Example:

```text
Enter student name: Brian
Enter first mark: 80
Enter second mark: 75
Enter third mark: 85

===== STUDENT RESULTS =====
Student: Brian
Average: 80.0
Grade: A
```

**What you have learned:** How methods work together to form a complete application.

---

# 23. PRACTICAL PROJECT 3: SIMPLE USER AUTHENTICATION

Methods are also useful in authentication systems.

Let's create a simple program that checks a username and password.

This is an educational example, not production-ready authentication.

### Step 1: Create a File

```text
LoginSystem.java
```

### Step 2: Write the Code

```java
import java.util.Scanner;

public class LoginSystem {

    static boolean authenticate(String username, String password) {

        String correctUsername = "admin";

        String correctPassword = "12345";

        return username.equals(correctUsername) &&
               password.equals(correctPassword);

    }

    static void displayMessage(boolean authenticated) {

        if (authenticated) {

            System.out.println("Login successful.");

        } else {

            System.out.println("Invalid username or password.");

        }

    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Username: ");
        String username = input.nextLine();

        System.out.print("Password: ");
        String password = input.nextLine();

        boolean result = authenticate(username, password);

        displayMessage(result);

        input.close();

    }
}
```

### Step 3: Understand the Methods

**Authentication method**

```java
static boolean authenticate(String username, String password)
```

This method receives a username and password.

Its return type is `boolean`, meaning it returns either `true` or `false`.

```java
return username.equals(correctUsername) &&
       password.equals(correctPassword);
```

Checks whether both credentials match.

Notice that Java uses `.equals()` to compare String contents.

Using `==` for String content comparison would generally be incorrect.

**Display method**

```java
static void displayMessage(boolean authenticated)
```

Receives the authentication result.

If the result is true, it displays a successful login message.

Otherwise, it displays an error message.

### Step 4: Run the Program

Compile:

```bash
javac LoginSystem.java
```

Run:

```bash
java LoginSystem
```

Example:

```text
Username: admin
Password: 12345
Login successful.
```

If incorrect credentials are entered:

```text
Username: user
Password: wrong
Invalid username or password.
```

### Important Security Note

Real authentication systems should not store plain-text passwords in source code.

They should use appropriate password hashing, secure credential storage, access controls, rate limiting and other security protections.

---

# 24. Common Mistakes When Working With Methods

| Mistake | Explanation | Correction |
|---|---|---|
| Calling a method that does not exist | The method name is incorrect or undefined | Define the method or correct its name |
| Using the wrong argument type | The supplied values do not match the parameter types | Pass compatible values |
| Forgetting `return` | A non-void method does not return the required value | Add a valid return statement |
| Using `void` when a value is required | The caller needs a calculated result | Use an appropriate return type |
| Forgetting `static` in a static-context call | Calling an instance method directly from `main()` | Create an object or make the method static when appropriate |
| Overloading with only a different return type | Java cannot distinguish the methods | Change the parameter list |
| Calling a method with the wrong number of arguments | The method signature expects a different number | Supply the correct arguments |
| Forgetting the base case in recursion | Recursive calls do not stop | Add a termination condition |

### Debugging Example

Incorrect code:

```java
static int multiply(int a, int b) {

    int result = a * b;

}
```

Problem:

The method promises to return an integer, but it never returns a value.

Correct code:

```java
static int multiply(int a, int b) {

    int result = a * b;

    return result;

}
```

Now the method returns the calculated result.

---

## 25. Part 3 Practical Exercises

Complete the following tasks independently.

### Exercise 1: Greeting Method

Create a method named `greetUser()` that accepts a person's name and displays a greeting.

### Exercise 2: Maximum Number

Create a method that accepts two integers and returns the larger number.

### Exercise 3: Even or Odd

Create a method named `isEven()` that accepts an integer and returns a boolean.

### Exercise 4: Factorial Calculator

Create a method that calculates the factorial of a number.

For example:

```text
5! = 5 × 4 × 3 × 2 × 1
5! = 120
```

Use a loop inside the method.

### Exercise 5: Method Overloading

Create three methods named `calculateArea()`:

- One calculates the area of a square.
- One calculates the area of a rectangle.
- One calculates the area of a circle.

Use different parameter lists.

### Exercise 6: Temperature Converter

Create methods that convert:
- Celsius to Fahrenheit.
- Fahrenheit to Celsius.

Formulas:

```text
Fahrenheit = (Celsius × 9/5) + 32

Celsius = (Fahrenheit - 32) × 5/9
```

### Exercise 7: Student Management

Create a program with separate methods for:

- Receiving student information.
- Calculating average marks.
- Determining grades.
- Displaying results.

### Exercise 8: Recursive Countdown

Write a recursive method that counts from 10 down to 1 and then displays `"Finished!"`.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

## 26. Lesson Summary

| Concept | Explanation |
|---|---|
| Method | Reusable block of Java code |
| Method definition | Creating a method |
| Method call | Executing a method |
| Parameter | Variable that receives information |
| Argument | Actual value passed into a method |
| `void` | Indicates that a method returns no value |
| `return` | Sends a value back to the caller and ends the current method |
| Method overloading | Creating methods with the same name but different parameter lists |
| Static method | Belongs to the class |
| Instance method | Belongs to an object |
| Recursion | A method calling itself |
| Varargs | Allows a method to receive a variable number of arguments |
| Scope | Determines where variables can be accessed |
| JavaDoc | Documentation system for Java code |

---

## 27. KAI ASSESSMENT

Answer the following questions to demonstrate your understanding.

### SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is a method in Java?

A. A database.

B. A reusable block of code that performs a task.

C. A variable that stores information.

D. A Java compiler.

**Question 2**

Which keyword indicates that a method does not return a value?

A. `return`

B. `static`

C. `void`

D. `int`

**Question 3**

What is the purpose of a parameter?

A. To stop a method.

B. To receive information passed into a method.

C. To compile Java code.

D. To create a package.

**Question 4**

Which statement sends a value back to the calling method?

A. `break`

B. `continue`

C. `return`

D. `static`

**Question 5**

What is method overloading?

A. Creating multiple classes.

B. Defining methods with the same name but different parameter lists.

C. Calling a method repeatedly.

D. Creating an infinite loop.

**Question 6**

Which method can be called directly using a class name without creating an object?

A. Instance method.

B. Static method.

C. Constructor.

D. Abstract object.

**Question 7**

What is recursion?

A. A method calling itself.

B. A method returning a String.

C. A variable calling another variable.

D. A method that cannot accept parameters.

**Question 8**

Which symbol is used for varargs in Java?

A. `**`

B. `...`

C. `&&`

D. `::`

### SECTION B: CONCEPTUAL QUESTIONS

**Question 9**

Explain the difference between a method definition and a method call.

**Question 10**

Differentiate between parameters and arguments using an example.

**Question 11**

Explain the difference between a `void` method and a method that returns a value.

**Question 12**

Why is method overloading useful in Java?

**Question 13**

Explain the difference between static and instance methods.

**Question 14**

What is recursion, and why does a recursive method need a base case?

**Question 15**

Explain Java's pass-by-value mechanism.

### SECTION C: PRACTICAL PROGRAMMING

**Question 16: Addition Method**

Write a method named `addNumbers()` that accepts two integers and returns their sum.

Call it from `main()` and display the result.

**Question 17: Grade Calculator**

Create a method named `calculateGrade()` that accepts marks and returns a grade.

Use the following grading system:

- 80–100: A
- 70–79: B
- 60–69: C
- 50–59: D
- Below 50: Fail

**Question 18: Method Overloading**

Create three overloaded methods named `multiply()`:

- One accepts two integers.
- One accepts three integers.
- One accepts two decimal numbers.

Display their results.

**Question 19: Factorial**

Write a method named `factorial()` that accepts an integer and returns its factorial.

**Question 20: Reusable Calculator**

Build a calculator application using separate methods for:

- Addition.
- Subtraction.
- Multiplication.
- Division.

The program must also prevent division by zero.

### SECTION D: DEBUGGING AND CODE ANALYSIS

**Question 21: Identify the Error**

Study the following method:

```java
static int calculate(int a, int b) {

    int result = a + b;

}
```

What is wrong with this method?

Rewrite it correctly.

**Question 22: Predict the Output**

What will the following program display?

```java
public class Main {

    static int calculate(int number) {

        return number * 2;

    }

    public static void main(String[] args) {

        int result = calculate(10);

        System.out.println(result);

    }
}
```

Explain how Java produces the output.

**Question 23: Understanding Recursion**

Study this method:

```java
static void count(int number) {

    if (number == 0) {
        return;
    }

    System.out.println(number);

    count(number - 1);

}
```

What happens when the method is called using:

```java
count(3);
```

Write the expected output.

---

## 28. FINAL PRACTICAL CHALLENGE: STUDENT MANAGEMENT APPLICATION

Build a small Java student management application using reusable methods.

### Application Requirements

Your program should provide the following operations:

1. Register a student.
2. Calculate average marks.
3. Determine the student's grade.
4. Display student information.
5. Exit the application.

### Method Requirements

Your application should contain separate methods such as:

```java
registerStudent()
calculateAverage()
calculateGrade()
displayStudent()
```

You may create additional methods where necessary.

### Technical Requirements

- Use method parameters.
- Use appropriate return types.
- Use `Scanner` for user input.
- Use conditional statements for grading.
- Use loops to allow repeated menu operations.
- Validate marks.
- Avoid repeating code unnecessarily.

### Expected Application Menu

```text
===== STUDENT MANAGEMENT SYSTEM =====

1. Register Student
2. Calculate Average
3. Determine Grade
4. Display Student
5. Exit

Select an option:
```

The application should be organized so that each method handles a specific responsibility.

The objective is not simply to make the program work. It is to make the program organized, reusable and easier to maintain.

---

## 29. SUBMIT YOUR WORK TO KAI

Once you complete the assessment, submit your answers and practical programs to Kai for evaluation.

Kai should assess:

1. Understanding of Java methods.
2. Ability to define and call methods.
3. Correct use of parameters and arguments.
4. Correct use of return values.
5. Understanding of method overloading.
6. Understanding of static and instance methods.
7. Ability to implement recursion.
8. Ability to divide larger applications into reusable methods.

Kai should provide:
- Assessment score.
- Correct answers.
- Explanations of mistakes.
- Code corrections.
- Suggestions for improvement.
- Lesson completion status.

---

## 30. LESSON COMPLETION CHECKLIST

Before moving forward, confirm that you can:

- [ ] Explain what methods are.
- [ ] Create and call methods.
- [ ] Use `void` methods.
- [ ] Create methods with parameters.
- [ ] Pass arguments into methods.
- [ ] Return values from methods.
- [ ] Work with different return types.
- [ ] Use method overloading.
- [ ] Understand static and instance methods.
- [ ] Understand variable scope.
- [ ] Explain Java's pass-by-value mechanism.
- [ ] Create recursive methods.
- [ ] Use varargs.
- [ ] Make methods call other methods.
- [ ] Organize a program using reusable methods.

# LESSON COMPLETE

**Java: Functions and Reusable Logic**

You have completed all four parts of this lesson.

**Part 4 of 4 — Lesson Complete**

### Recommended Next Lesson: Java Arrays

In the next lesson, you will learn how to store multiple values in a single variable, access elements using indexes, update array elements, loop through arrays and work with multidimensional arrays.