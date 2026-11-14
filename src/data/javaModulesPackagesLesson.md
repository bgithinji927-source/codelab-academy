# Java: Modules and Packages

## Learning Objectives

By the end of this lesson, you should be able to:

1. Explain what packages and modules are in Java.
2. Understand why Java uses packages.
3. Create and organize custom packages.
4. Import classes from other packages.
5. Understand Java access modifiers.
6. Explain the Java Platform Module System (JPMS).
7. Create and use a Java module with `module-info.java`.
8. Build a small modular Java application.

# PART 1 OF 4: INTRODUCTION TO JAVA PACKAGES

## 1. What Are Packages in Java?

A package in Java is a mechanism for grouping related classes, interfaces, and other Java types together.

Think of a package as a folder that organizes related files in a software project.

For example, imagine you are developing a school management system.

Your application might contain:

- Student management.
- Teacher management.
- Payment management.
- Examination management.

Instead of putting every Java class in one place, you can organize them into packages.

Example:

```text
SchoolManagement/
│
└── src/
    └── school/
        ├── students/
        │   ├── Student.java
        │   └── StudentManager.java
        │
        ├── teachers/
        │   ├── Teacher.java
        │   └── TeacherManager.java
        │
        └── payments/
            ├── Payment.java
            └── PaymentManager.java
```

Each folder represents a package.

The main purpose is to make large applications easier to organize, maintain, and understand.

## 2. Why Are Packages Important?

Packages solve several problems in software development.

### A. Code organization

Packages group related classes together.

For example:

- `school.students` contains student-related classes.
- `school.teachers` contains teacher-related classes.
- `school.payments` contains payment-related classes.

This makes a project easier to navigate.

### B. Avoiding naming conflicts

Imagine two developers create classes with the same name:

```java
public class User {
}
```

One class represents a student, while another represents an administrator.

Without proper organization, identical class names can cause confusion.

Packages allow both classes to exist:

```text
school.students.User
school.admin.User
```

Although both classes are named `User`, their fully qualified names are different.

A fully qualified class name consists of the package name followed by the class name.

### C. Code reusability

You can create a class inside a package and use it in different parts of your application.

For example, a reusable database connection class can be placed inside:

```text
database/
    DatabaseConnection.java
```

Other parts of your application can import and use it.

### D. Access control

Packages work together with Java access modifiers to control which parts of your application can access particular classes and members.

We will examine access modifiers later in this lesson.

## 3. Understanding the `package` Keyword

Java uses the `package` keyword to declare the package to which a class belongs.

Example:

```java
package school.students;

public class Student {

    public void displayName() {
        System.out.println("Student: Brian");
    }

}
```

Let's understand each line.

**Line 1:**

```java
package school.students;
```

This declares that the `Student` class belongs to the `school.students` package.

The directory structure should match the package name:

```text
school/
    students/
        Student.java
```

**Line 2:**

```java
public class Student {
```

This creates a public class named `Student`.

**Line 4:**

```java
public void displayName() {
```

This creates a public method called `displayName()`.

**Line 5:**

```java
System.out.println("Student: Brian");
```

This prints the student's name.

**Important rule:** A package declaration, when present, must appear before imports and class declarations in a Java source file. Comments may appear before it.

## 4. Understanding the `import` Keyword

Suppose you have a class in one package and want to use it in another package.

You can use the `import` keyword.

Example project:

```text
Project/
└── src/
    ├── school/
    │   └── students/
    │       └── Student.java
    │
    └── application/
        └── Main.java
```

The `Student.java` file:

```java
package school.students;

public class Student {

    public void displayName() {
        System.out.println("Student: Brian");
    }

}
```

The `Main.java` file:

```java
package application;

import school.students.Student;

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.displayName();

    }

}
```

### Line-by-line explanation

```java
package application;
```

This places the `Main` class inside the `application` package.

```java
import school.students.Student;
```

This makes the `Student` class available for use by its simple name in this source file.

```java
public class Main {
```

This declares the main application class.

```java
public static void main(String[] args) {
```

This is the entry point of the Java application.

```java
Student student = new Student();
```

This creates an object of the `Student` class.

```java
student.displayName();
```

This calls the method that displays the student's name.

### Expected output

```text
Student: Brian
```

## 5. Different Ways of Importing Classes

Java provides several ways to import classes.

### A. Importing one specific class

```java
import java.util.ArrayList;
```

This imports the `ArrayList` class.

### B. Importing all accessible types in a package

```java
import java.util.*;
```

This allows you to use accessible types in the `java.util` package without writing their full package names.

The asterisk does not import subpackages.

### C. Using a fully qualified class name

You can use a class without importing it by writing its complete package name.

```java
public class Main {

    public static void main(String[] args) {

        java.util.ArrayList<String> names =
                new java.util.ArrayList<>();

        names.add("Brian");

        System.out.println(names);

    }

}
```

Output:

```text
[Brian]
```

This approach is useful when you want to avoid naming conflicts.

## 6. Built-in Java Packages

Java provides many packages that contain ready-made classes and interfaces.

| Package | Purpose | Examples |
|---|---|---|
| `java.lang` | Fundamental Java functionality | String, Math, System |
| `java.util` | Collections and utilities | ArrayList, HashMap, Scanner |
| `java.io` | Input and output operations | File, FileReader |
| `java.nio` | Modern input/output functionality | Path, Files |
| `java.net` | Networking | URL, Socket |
| `java.time` | Date and time operations | LocalDate, LocalTime |
| `java.sql` | Database connectivity | Connection, ResultSet |

### Important: The `java.lang` package

You do not need to import `java.lang` manually.

For example:

```java
public class Main {

    public static void main(String[] args) {

        String name = "Brian";

        System.out.println(name.length());

    }

}
```

Output:

```text
5
```

The `String` class belongs to `java.lang`, which is automatically available.

## 7. Creating Your Own Packages

You are not limited to built-in Java packages.

You can create your own packages based on your application's requirements.

For example:

```text
BankingSystem/
└── src/
    ├── banking/
    │   └── accounts/
    │       └── Account.java
    │
    └── application/
        └── Main.java
```

Inside `Account.java`:

```java
package banking.accounts;

public class Account {

    public void displayBalance() {

        System.out.println("Balance: KSh 5,000");

    }

}
```

Inside `Main.java`:

```java
package application;

import banking.accounts.Account;

public class Main {

    public static void main(String[] args) {

        Account account = new Account();

        account.displayBalance();

    }

}
```

Output:

```text
Balance: KSh 5,000
```

### Part 1 Exercises

1. Define a Java package.
2. Give four reasons why packages are important.
3. What is the purpose of the `package` keyword?
4. What does the `import` keyword do?
5. What is a fully qualified class name?
6. Explain why Java does not require you to import `java.lang`.
7. Create a package named `company.employees`.
8. Create an `Employee` class inside that package.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: ACCESS MODIFIERS AND JAVA MODULES

## 1. Understanding Access Modifiers

Access modifiers control where classes, methods, constructors, and variables can be accessed.

They help protect data and control how different parts of an application interact.

Java has four access levels:

1. `public`
2. `private`
3. `protected`
4. Default access (no modifier)

### A. Public

The `public` modifier makes a class or member accessible wherever the declaring type is accessible.

Example:

```java
package school;

public class Student {

    public String name = "Brian";

}
```

Another package can access the class and its public field:

```java
import school.Student;

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        System.out.println(student.name);

    }

}
```

Output:

```text
Brian
```

Explanation:

- `public class Student` makes the class accessible outside its package.
- `public String name` makes the field accessible to other code that can access the class.

### B. Private

The `private` modifier restricts access to the declaring top-level class.

Example:

```java
public class BankAccount {

    private double balance = 5000;

    public void displayBalance() {

        System.out.println(balance);

    }

}
```

Explanation:

```java
private double balance = 5000;
```

The balance is private. Other classes cannot directly access it.

```java
public void displayBalance() {
```

This creates a public method that allows controlled access to the balance.

The method can be called from another class:

```java
public class Main {

    public static void main(String[] args) {

        BankAccount account = new BankAccount();

        account.displayBalance();

    }

}
```

Output:

```text
5000.0
```

However, this would cause a compilation error:

```java
System.out.println(account.balance);
```

Why?

Because `balance` is private and belongs to `BankAccount`.

This is useful when protecting sensitive application data.

### C. Protected

The `protected` modifier allows access:

- Within the same package.
- In subclasses, including subclasses in other packages, subject to Java's inheritance access rules.

Example:

```java
package school;

public class Person {

    protected String name = "Brian";

}
```

A subclass in another package can access the inherited protected field:

```java
package students;

import school.Person;

public class Student extends Person {

    public void displayName() {

        System.out.println(name);

    }

}
```

The `Student` class inherits from `Person`.

Because `name` is protected, the subclass can access it through inheritance.

### D. Default Access

Default access occurs when you do not specify an access modifier.

Example:

```java
class Student {

    String name = "Brian";

}
```

Neither the class nor the field has an explicit access modifier.

They are accessible only within the same package.

This is also called package-private access.

## 2. Comparing Access Modifiers

| Access modifier | Same class | Same package | Subclass in another package | Unrelated class in another package |
|---|---|---|---|---|
| `public` | Yes | Yes | Yes | Yes |
| `protected` | Yes | Yes | Yes, subject to inheritance rules | No |
| Default | Yes | Yes | No | No |
| `private` | Yes | No | No | No |

**Important:** Top-level classes can normally be declared `public` or package-private. You cannot declare an ordinary top-level class as `private` or `protected`.

## 3. What Are Java Modules?

Packages help organize Java code.

Modules take organization a step further.

A Java module is a named collection of packages and resources that declares which packages it makes available to other modules and which other modules it depends on.

Modules were introduced in Java 9 through the Java Platform Module System (JPMS).

Imagine building a large banking application.

You might have:

- Customer management.
- Account management.
- Payment processing.
- Database access.
- Reporting.

You can organize these into packages and then group related packages into modules.

Example:

```text
BankingApplication/
│
├── customer.module/
│
├── payment.module/
│
├── account.module/
│
└── reporting.module/
```

Each module can have its own responsibilities and dependencies.

### Why are modules important?

**A. Better application organization**

Modules divide large applications into manageable components.

**B. Stronger encapsulation**

A module can control which packages it exposes to other modules.

**C. Explicit dependencies**

A module declares which other modules it needs.

**D. Improved maintainability**

Developers can understand the relationships between different parts of a large application.

**E. More controlled application architecture**

Modules help prevent other modules from accessing internal packages that were not intentionally exposed.

## 4. Understanding `module-info.java`

Every named Java module has a module descriptor called:

```text
module-info.java
```

This file describes the module's name, dependencies, and exported packages.

Example:

```java
module school.management {
    exports school.students;
}
```

Let's understand each line.

```java
module school.management {
```

This declares a module named `school.management`.

```java
exports school.students;
```

This makes the public types in the `school.students` package accessible to other modules that read this module.

```java
}
```

This closes the module declaration.

**Important:** Exporting a package does not make its private members public. Normal Java access modifiers still apply.

## 5. Understanding the `requires` Directive

A module uses `requires` to declare a dependency on another module.

Example:

```java
module school.management {

    requires java.sql;

    exports school.students;

}
```

Explanation:

```java
requires java.sql;
```

This declares that the module depends on the `java.sql` module.

The `java.sql` module provides Java database connectivity APIs.

The dependency allows the module to read the required module's accessible API.

## 6. Understanding `exports` and `opens`

These two directives have different purposes.

| Directive | Purpose |
|---|---|
| `exports` | Makes a package's public types accessible to other modules. |
| `opens` | Allows reflective access to a package at runtime. |

For example:

```java
module school.management {

    exports school.students;

    opens school.internal;

}
```

The `school.students` package is exported for normal access.

The `school.internal` package is opened for reflection.

Reflection is a Java feature that allows programs and frameworks to inspect and interact with classes at runtime.

It is commonly used by frameworks, dependency injection systems, and serialization libraries.

## 7. Understanding `requires transitive`

Sometimes a module depends on another module and wants modules that depend on it to read that dependency as well.

Java provides:

```java
requires transitive another.module;
```

For example:

```java
module school.api {

    requires transitive java.sql;

}
```

A module that reads `school.api` also reads `java.sql` through this transitive dependency.

This should be used when the dependency is part of the API that consumers need.

## 8. Understanding `requires static`

A module can declare an optional compile-time dependency using:

```java
requires static another.module;
```

The dependency is required during compilation but is not necessarily required at runtime.

This is useful for optional tools or annotations that are only needed during compilation.

### Part 2 Exercises

1. What is an access modifier?
2. Differentiate between `public` and `private`.
3. What is package-private access?
4. Explain the purpose of `protected`.
5. What is a Java module?
6. In which Java version was JPMS introduced?
7. What is the purpose of `module-info.java`?
8. Differentiate between `exports` and `opens`.
9. What does `requires` do?
10. Explain `requires transitive`.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL IMPLEMENTATION

In this part, you will create a real Java project containing packages and a named module.

You will build a small student management application.

## Practical 1: Creating and Using Packages

### Step 1: Create a project folder

Create a folder called:

```text
StudentManagement
```

Inside it, create this structure:

```text
StudentManagement/
└── src/
    ├── school/
    │   └── students/
    │       └── Student.java
    │
    └── application/
        └── Main.java
```

### Step 2: Create Student.java

Inside:

```text
src/school/students/Student.java
```

Write:

```java
package school.students;

public class Student {

    private String name;
    private int age;

    public Student(String name, int age) {

        this.name = name;

        this.age = age;

    }

    public void displayDetails() {

        System.out.println("Student Name: " + name);

        System.out.println("Student Age: " + age);

    }

}
```

### Line-by-line explanation

```java
package school.students;
```

This places the class inside the `school.students` package.

```java
public class Student {
```

This declares a public class named `Student`.

```java
private String name;
```

This creates a private variable for storing the student's name.

```java
private int age;
```

This creates another private variable for storing the student's age.

```java
public Student(String name, int age) {
```

This is a constructor.

A constructor initializes an object when it is created.

It receives two values: a name and an age.

```java
this.name = name;
```

The `this` keyword refers to the current object.

The statement assigns the constructor's `name` parameter to the object's `name` field.

```java
this.age = age;
```

This assigns the supplied age to the object's age field.

```java
public void displayDetails() {
```

This creates a public method for displaying student information.

```java
System.out.println("Student Name: " + name);
```

This displays the student's name.

```java
System.out.println("Student Age: " + age);
```

This displays the student's age.

### Step 3: Create Main.java

Inside:

```text
src/application/Main.java
```

Write:

```java
package application;

import school.students.Student;

public class Main {

    public static void main(String[] args) {

        Student student = new Student("Brian", 22);

        student.displayDetails();

    }

}
```

### Explanation

```java
package application;
```

This places the main class inside the `application` package.

```java
import school.students.Student;
```

This imports the `Student` class from the `school.students` package.

```java
Student student = new Student("Brian", 22);
```

This creates a student object.

The constructor receives:

- `"Brian"` as the name.
- `22` as the age.

```java
student.displayDetails();
```

This calls the method that displays the student's information.

### Step 4: Compile and run

Open your terminal inside the `StudentManagement` folder.

Compile:

```bash
javac -d out src/school/students/Student.java src/application/Main.java
```

Explanation:

- `javac` invokes the Java compiler.
- `-d out` tells the compiler to place generated class files in the `out` directory.
- The remaining arguments specify the Java source files.

Run:

```bash
java -cp out application.Main
```

Explanation:

- `java` starts the Java application.
- `-cp out` tells Java where to find the compiled classes.
- `application.Main` specifies the fully qualified name of the main class.

### Expected output

```text
Student Name: Brian
Student Age: 22
```

## Practical 2: Creating a Named Java Module

Now you will convert the application into a modular Java project.

### Step 1: Create the project structure

Create this structure:

```text
ModularSchool/
└── src/
    ├── school.management/
    │   ├── module-info.java
    │   │
    │   └── school/
    │       └── students/
    │           └── Student.java
    │
    └── school.application/
        ├── module-info.java
        │
        └── application/
            └── Main.java
```

There are two modules:

1. `school.management`
2. `school.application`

The first module contains student management functionality.

The second module contains the application entry point.

### Step 2: Create the first module descriptor

Inside:

```text
src/school.management/module-info.java
```

Write:

```java
module school.management {

    exports school.students;

}
```

Explanation:

- `module school.management` declares the module.
- `exports school.students` makes the student package available to other modules that read this module.

### Step 3: Create Student.java

Inside:

```text
src/school.management/school/students/Student.java
```

Write:

```java
package school.students;

public class Student {

    private String name;

    public Student(String name) {

        this.name = name;

    }

    public void display() {

        System.out.println("Student: " + name);

    }

}
```

Explanation:

- The package declaration identifies the package.
- The private field stores the student's name.
- The constructor initializes the field.
- The public method displays the student's name.

### Step 4: Create the second module descriptor

Inside:

```text
src/school.application/module-info.java
```

Write:

```java
module school.application {

    requires school.management;

}
```

Explanation:

```java
module school.application {
```

This declares the application module.

```java
requires school.management;
```

This tells Java that the application module depends on `school.management`.

Without this dependency declaration, the named application module cannot read the management module.

### Step 5: Create Main.java

Inside:

```text
src/school.application/application/Main.java
```

Write:

```java
package application;

import school.students.Student;

public class Main {

    public static void main(String[] args) {

        Student student = new Student("Brian");

        student.display();

    }

}
```

Explanation:

- `package application` identifies the package.
- The import statement brings in the exported `Student` class.
- The main method is the application entry point.
- A student object is created.
- The `display()` method prints the student's name.

### Step 6: Compile the modules

From the `ModularSchool` folder, run:

```bash
javac -d out --module-source-path src -m school.management,school.application
```

Explanation:

- `javac` compiles Java source files.
- `-d out` places compiled module files inside `out`.
- `--module-source-path src` tells the compiler where the module source folders are.
- `-m` specifies which modules should be compiled.
- `school.management,school.application` identifies the two modules.

### Step 7: Run the application

Run:

```bash
java --module-path out -m school.application/application.Main
```

Explanation:

- `--module-path out` tells Java where the compiled modules are stored.
- `-m` identifies the module and its main class.
- `school.application/application.Main` means run the `Main` class inside the `school.application` module.

### Expected output

```text
Student: Brian
```

Congratulations! You have created and executed a modular Java application.

## Practical 3: Understanding Package Access in Practice

Create a file called:

```text
AccessDemo.java
```

Write:

```java
class AccessDemo {

    public String publicMessage = "Public information";

    private String privateMessage = "Private information";

    protected String protectedMessage = "Protected information";

    String defaultMessage = "Package-private information";

    public void display() {

        System.out.println(publicMessage);

        System.out.println(privateMessage);

        System.out.println(protectedMessage);

        System.out.println(defaultMessage);

    }

}
```

### Explanation

The class contains four fields.

- `publicMessage` can be accessed wherever the class is accessible.
- `privateMessage` can only be accessed inside `AccessDemo`.
- `protectedMessage` can be accessed within the same package and by eligible subclasses.
- `defaultMessage` can only be accessed within the same package.

The `display()` method is public, so code that can access the class can call it.

### Test it

Create another file called `AccessMain.java` in the same package:

```java
public class AccessMain {

    public static void main(String[] args) {

        AccessDemo demo = new AccessDemo();

        demo.display();

        System.out.println(demo.publicMessage);

    }

}
```

Expected output:

```text
Public information
Private information
Protected information
Package-private information
Public information
```

Notice that the private field is displayed successfully through the `display()` method.

This is possible because the method belongs to the same class that owns the private field.

However, attempting this from `AccessMain` will cause an error:

```java
System.out.println(demo.privateMessage);
```

The reason is that `privateMessage` is private to `AccessDemo`.

## 4. Common Mistakes When Working with Packages and Modules

### Mistake 1: Package name does not match the directory structure

Incorrect:

```java
package school.students;
```

But the file is stored in:

```text
src/teachers/Student.java
```

This creates a mismatch between the declared package and the source organization.

**Correction:** Store the file in:

```text
src/school/students/Student.java
```

### Mistake 2: Forgetting to import a class

If you use a class from another package without importing it or using its fully qualified name, Java may report that it cannot find the symbol.

**Correction:**

```java
import school.students.Student;
```

### Mistake 3: Accessing private variables directly

Incorrect:

```java
student.name = "Brian";
```

If `name` is private, another class cannot access it directly.

**Correction:** Provide an appropriate public method, such as a setter, or initialize the value through a constructor.

### Mistake 4: Forgetting to export a package

If another named module needs to access a package, but the owning module does not export it, compilation or access can fail.

**Correction:**

```java
module school.management {

    exports school.students;

}
```

### Mistake 5: Forgetting a module dependency

If one named module uses a package from another named module, it must declare the dependency.

**Correction:**

```java
requires school.management;
```

### Mistake 6: Confusing packages with modules

A package groups Java types.

A module groups packages and controls dependencies and package exposure.

They are related but not the same thing.

## 5. Practical Exercises

### Exercise 1: Employee Management

Create a project with this structure:

```text
Company/
└── src/
    ├── company.employees/
    └── company.application/
```

Requirements:

1. Create an `Employee` class inside `company.employees`.
2. Add employee name, employee ID, and salary.
3. Make the fields private.
4. Create a constructor.
5. Create a method that displays employee information.
6. Import and use the class inside `company.application`.

### Exercise 2: Package Organization

Create these packages:

```text
hospital/
    patients/
    doctors/
    payments/
```

Create at least one class in each package.

Explain why each class belongs in its particular package.

### Exercise 3: Modular Application

Create two named modules:

- `company.management`
- `company.application`

The management module should export a package called `company.employees`.

The application module should require `company.management`.

Create and run a program that displays employee details.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

## 1. Lesson Summary

| Concept | Meaning |
|---|---|
| Package | Groups related Java classes and interfaces. |
| `package` | Declares the package of a source file. |
| `import` | Makes accessible types available by their simple names. |
| `public` | Allows access wherever the declaring type is accessible. |
| `private` | Restricts access to the declaring class. |
| `protected` | Allows same-package access and eligible subclass access. |
| Default access | Restricts access to the same package. |
| Module | Groups packages and declares dependencies and exposed APIs. |
| `module-info.java` | Describes a named Java module. |
| `requires` | Declares a module dependency. |
| `exports` | Makes a package available to other modules. |
| `opens` | Allows reflective access to a package. |

## 2. Multiple-Choice Questions

Choose the correct answer.

**Question 1**

What is a Java package?

A. A method used to execute code.

B. A mechanism for grouping related classes and interfaces.

C. A variable used to store data.

D. A Java compiler.

**Question 2**

Which keyword declares a package?

A. `import`

B. `module`

C. `package`

D. `class`

**Question 3**

Which keyword allows you to import a class from another package?

A. `include`

B. `import`

C. `export`

D. `requires`

**Question 4**

Which package contains the `ArrayList` class?

A. `java.io`

B. `java.lang`

C. `java.util`

D. `java.net`

**Question 5**

Which access modifier provides the most restrictive access?

A. `public`

B. `protected`

C. Default

D. `private`

**Question 6**

Which access modifier allows access within the same package and eligible subclasses outside the package?

A. `private`

B. `protected`

C. `public`

D. Default

**Question 7**

In which Java version was the Java Platform Module System introduced?

A. Java 5

B. Java 7

C. Java 8

D. Java 9

**Question 8**

What is the purpose of `module-info.java`?

A. It stores application passwords.

B. It describes a Java module.

C. It creates objects.

D. It runs the Java compiler.

**Question 9**

Which directive declares a module dependency?

A. `exports`

B. `opens`

C. `requires`

D. `package`

**Question 10**

What does the `exports` directive do?

A. Deletes a package.

B. Makes a package's public types accessible to other modules that read the exporting module.

C. Creates a new module.

D. Imports every Java class.

## 3. Conceptual Questions

Answer in your own words.

11. Explain four advantages of using packages in Java.

12. Differentiate between a package and a module.

13. Explain why developers use access modifiers.

14. What is the difference between `private` and default access?

15. Explain the purpose of the `java.lang` package.

16. What is a fully qualified class name? Give an example.

17. Explain the difference between `exports` and `opens`.

18. Why must a named module declare dependencies on other named modules?

## 4. Practical Programming Questions

**Question 19: Creating a Package**

Create a package called:

```text
university.students
```

Inside it, create a class named `Student` with:

- A name.
- A registration number.
- A method that displays student information.

Write the complete Java code.

**Question 20: Importing a Class**

Create another package called:

```text
university.application
```

Import the `Student` class and create a student object.

Display the student's information.

**Question 21: Access Modifiers**

Create a class called `BankAccount` with:

- A private balance variable.
- A public constructor.
- A public method for displaying the balance.
- A public method for depositing money.

Explain why the balance should not be directly accessible from other classes.

**Question 22: Creating Modules**

Create two modules:

```text
university.management
university.application
```

Your answer should include:

1. The project directory structure.
2. The `module-info.java` file for each module.
3. The `Student` class.
4. The main application class.
5. Commands for compiling and running the application.

## 5. Debugging Challenge

Study the following code.

```java
package school.students;

public class Student {

    private String name = "Brian";

}
```

Another class contains:

```java
package application;

import school.students.Student;

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        System.out.println(student.name);

    }

}
```

**Questions:**

23. Identify the error.

24. Explain why the error occurs.

25. Correct the program without making the `name` field public.

26. Explain why your correction works.

## 6. Final Practical Project: University Management System

Build a small Java application using packages and modules.

### Project structure

```text
UniversitySystem/
│
└── src/
    │
    ├── university.management/
    │   ├── module-info.java
    │   │
    │   └── university/
    │       ├── students/
    │       │   └── Student.java
    │       │
    │       └── lecturers/
    │           └── Lecturer.java
    │
    └── university.application/
        ├── module-info.java
        │
        └── application/
            └── Main.java
```

### Requirements

**Student class**

Include:

- Student name.
- Registration number.
- Course.
- A method for displaying student details.

**Lecturer class**

Include:

- Lecturer name.
- Staff number.
- Department.
- A method for displaying lecturer details.

**Module configuration**

The `university.management` module should export:

```text
university.students
university.lecturers
```

The `university.application` module should require:

```text
university.management
```

**Main application**

Your `Main` class should:

1. Create at least two student objects.
2. Create at least one lecturer object.
3. Display all their details.
4. Demonstrate that classes from different packages can work together.

### Expected output example

```text
===== UNIVERSITY MANAGEMENT SYSTEM =====

STUDENT DETAILS

Name: Brian
Registration Number: BBIT/001
Course: Bachelor of Business Information Technology

Name: James
Registration Number: BBIT/002
Course: Bachelor of Business Information Technology

LECTURER DETAILS

Name: Mr. Kamau
Staff Number: LEC/101
Department: Computing and Information Technology
```

Your output can differ depending on the information you enter.

## 7. Submit Your Work to Kai

After completing the assessment, submit your answers and practical project to Kai.

Kai should evaluate:

- Understanding of Java packages.
- Correct use of package declarations and imports.
- Knowledge of access modifiers.
- Understanding of modules and module descriptors.
- Correct use of `requires` and `exports`.
- Ability to create and run modular applications.
- Code organization and problem-solving.

Kai should identify incorrect answers, explain the mistakes, provide corrections, and give you a final assessment score.

## 8. Lesson Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain what Java packages are.
- [ ] Create your own packages.
- [ ] Import classes from other packages.
- [ ] Use fully qualified class names.
- [ ] Identify common Java built-in packages.
- [ ] Explain all four Java access levels.
- [ ] Protect class fields using `private`.
- [ ] Explain what Java modules are.
- [ ] Create a `module-info.java` file.
- [ ] Use `requires` and `exports`.
- [ ] Compile and run a modular Java application.
- [ ] Build a small application using multiple packages.

# PART 4 OF 4 — LESSON COMPLETE