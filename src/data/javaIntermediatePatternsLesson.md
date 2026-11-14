# Java: Intermediate Patterns and Composition

## Learning Objectives

By the end of this lesson, you should be able to:

1. Understand intermediate Java programming patterns.
2. Explain the difference between inheritance and composition.
3. Build classes that contain objects of other classes.
4. Understand the "has-a" relationship.
5. Apply composition to real-world software projects.
6. Understand common design patterns in Java.
7. Implement the Strategy, Factory, and Observer patterns.
8. Write more maintainable and reusable Java applications.

# PART 1 OF 4: UNDERSTANDING COMPOSITION

## 1. What Are Intermediate Programming Patterns?

As applications become larger, writing individual classes and methods is no longer enough.

You need ways to organize how different parts of your application communicate and work together.

For example, imagine building a banking application.

It may contain:

- Customers.
- Bank accounts.
- Transactions.
- Payment methods.
- Notifications.
- Reports.

Each component performs a particular responsibility, but the components must also work together.

Intermediate Java programming introduces techniques for structuring these relationships.

Two important concepts are:

- Composition.
- Design patterns.

## 2. Understanding Composition

Composition is an object-oriented programming technique in which one class contains an object of another class as part of its functionality.

In simple terms:

**Composition represents a HAS-A relationship.**

For example:

- A car has an engine.
- A computer has a processor.
- A school has departments.
- A bank account has transactions.

Consider a car.

A car is not an engine. However, a car has an engine.

This relationship can be represented using composition.

### Without composition

Imagine creating a car class that contains every engine-related operation:

```java
public class Car {

    public void startEngine() {

        System.out.println("Engine started");

    }

    public void stopEngine() {

        System.out.println("Engine stopped");

    }

}
```

This works for a simple example, but it combines two responsibilities:

- Managing the car.
- Managing the engine.

As the application grows, the class can become difficult to maintain.

### With composition

Instead, create separate classes.

**Engine.java**

```java
public class Engine {

    public void start() {

        System.out.println("Engine started");

    }

    public void stop() {

        System.out.println("Engine stopped");

    }

}
```

**Car.java**

```java
public class Car {

    private Engine engine;

    public Car() {

        engine = new Engine();

    }

    public void startCar() {

        engine.start();

        System.out.println("Car is ready to move");

    }

    public void stopCar() {

        engine.stop();

        System.out.println("Car has stopped");

    }

}
```

### Understanding the code

In `Engine.java`:

```java
public class Engine {
```

This creates a separate class responsible for engine operations.

```java
public void start() {
```

This method represents starting the engine.

```java
System.out.println("Engine started");
```

This displays a message when the engine starts.

In `Car.java`:

```java
private Engine engine;
```

This declares a variable that can reference an `Engine` object.

The car now has an engine.

```java
public Car() {
```

This is the car constructor.

It runs when a new car object is created.

```java
engine = new Engine();
```

This creates an engine object and assigns it to the car's `engine` field.

```java
public void startCar() {
```

This method represents starting the car.

```java
engine.start();
```

Instead of implementing engine-starting functionality again, the car delegates that responsibility to the engine object.

```java
System.out.println("Car is ready to move");
```

This displays a message after the engine has started.

### Main.java

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.startCar();

        car.stopCar();

    }

}
```

### Expected output

```text
Engine started
Car is ready to move
Engine stopped
Car has stopped
```

### Why is this better?

The engine and car have separate responsibilities.

If you later change how the engine starts, you only need to update the `Engine` class.

The car can continue using the engine through its methods.

This improves code organization and reuse.

## 3. Understanding the HAS-A Relationship

Composition is based on the relationship between objects.

Consider these examples:

| Main class | Component class | Relationship |
|---|---|---|
| Car | Engine | Car has an engine |
| Computer | Processor | Computer has a processor |
| Student | Address | Student has an address |
| BankAccount | Transaction | Account has transactions |
| Order | Payment | Order has a payment |

For example:

```java
public class Computer {

    private Processor processor;

}
```

The `Computer` class contains a reference to a `Processor` object.

This represents:

**Computer HAS-A Processor.**

## 4. Composition vs Inheritance

Composition and inheritance are both used to establish relationships between classes, but they serve different purposes.

### Inheritance

Inheritance represents an IS-A relationship.

For example:

- A dog is an animal.
- A lecturer is a person.
- A manager is an employee.

Example:

```java
class Animal {

    public void eat() {

        System.out.println("Animal is eating");

    }

}
```

```java
class Dog extends Animal {

    public void bark() {

        System.out.println("Dog is barking");

    }

}
```

The `Dog` class inherits the `eat()` method from `Animal`.

### Composition

Composition represents a HAS-A relationship.

Example:

```java
class Engine {

    public void start() {

        System.out.println("Engine started");

    }

}
```

```java
class Car {

    private Engine engine = new Engine();

    public void startCar() {

        engine.start();

    }

}
```

The car does not inherit from the engine. It contains an engine object.

### Comparison

| Feature | Inheritance | Composition |
|---|---|---|
| Relationship | IS-A | HAS-A |
| Keyword | `extends` | Object references and fields |
| Main purpose | Specializing an existing class | Combining separate objects |
| Reuse | Inherits members | Delegates work to contained objects |
| Flexibility | Can create tighter class relationships | Often allows easier component replacement |
| Example | Dog extends Animal | Car has an Engine |

### Important principle

A commonly used object-oriented design principle is:

**Favor composition over inheritance.**

This does not mean inheritance is bad.

It means that composition is often a better choice when a class needs to use another class's functionality without being a specialized version of that class.

## 5. Composition and Object Ownership

There are different ways objects can be related.

### Strong ownership

In strong composition, an object is responsible for the lifecycle of its component objects.

For example, a house might create and manage its rooms.

```java
class Room {

    public void display() {

        System.out.println("This is a room");

    }

}
```

```java
class House {

    private Room room;

    public House() {

        room = new Room();

    }

}
```

Here, the `House` creates its own `Room`.

### Shared references

An object can also receive an existing object from somewhere else.

For example:

```java
class Engine {

    public void start() {

        System.out.println("Engine started");

    }

}
```

```java
class Car {

    private Engine engine;

    public Car(Engine engine) {

        this.engine = engine;

    }

}
```

The engine is supplied to the car instead of being created inside it.

This is called dependency injection, which we will explore further.

**Important distinction:** In Java, composition and aggregation are conceptual design relationships rather than separate language keywords. The way objects are created, shared, and managed determines the strength of their ownership relationship.

## 6. When Should You Use Composition?

Use composition when:

1. One object needs another object's functionality.
2. You want to divide a large class into smaller components.
3. You want to reuse functionality without inheritance.
4. Different components should be replaceable.
5. You want each class to have a clear responsibility.

### Part 1 Exercises

1. Define composition in Java.
2. What does a HAS-A relationship mean?
3. Give five real-world examples of composition.
4. Differentiate between inheritance and composition.
5. What does `private Engine engine;` represent?
6. Explain why the `Car` class calls `engine.start()`.
7. What does "favor composition over inheritance" mean?
8. Create a simple `Computer` class that contains a `Processor` object.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: ADVANCED COMPOSITION AND DESIGN PRINCIPLES

## 1. Understanding Dependency Injection

Dependency injection is a technique where an object receives the objects it needs from outside instead of creating all of them internally.

A dependency is something a class needs to perform its work.

For example, a payment service may depend on a payment processor.

Consider:

```java
class PaymentProcessor {

    public void process() {

        System.out.println("Processing payment");

    }

}
```

A payment service can use this processor.

### Without dependency injection

```java
class PaymentService {

    private PaymentProcessor processor = new PaymentProcessor();

    public void pay() {

        processor.process();

    }

}
```

The `PaymentService` creates its own processor.

This creates a direct dependency on the concrete `PaymentProcessor` class.

If you want to use a different payment processor, you may need to modify the service.

### With dependency injection

First, create an interface:

```java
interface PaymentMethod {

    void process();

}
```

An interface defines a contract that implementing classes must follow.

Now create two implementations.

```java
class MpesaPayment implements PaymentMethod {

    public void process() {

        System.out.println("Processing M-Pesa payment");

    }

}
```

```java
class CardPayment implements PaymentMethod {

    public void process() {

        System.out.println("Processing card payment");

    }

}
```

Both classes implement `PaymentMethod`.

This means both provide their own implementation of `process()`.

Now create the payment service:

```java
class PaymentService {

    private PaymentMethod paymentMethod;

    public PaymentService(PaymentMethod paymentMethod) {

        this.paymentMethod = paymentMethod;

    }

    public void pay() {

        paymentMethod.process();

    }

}
```

### Understanding the important lines

```java
private PaymentMethod paymentMethod;
```

The service stores a reference to an object that implements `PaymentMethod`.

It does not need to know the exact implementation.

```java
public PaymentService(PaymentMethod paymentMethod) {
```

The constructor receives the payment method from outside.

```java
this.paymentMethod = paymentMethod;
```

The supplied object is assigned to the service's field.

```java
paymentMethod.process();
```

The service calls the implementation provided by the object.

### Main.java

```java
public class Main {

    public static void main(String[] args) {

        PaymentMethod method = new MpesaPayment();

        PaymentService service = new PaymentService(method);

        service.pay();

    }

}
```

Output:

```text
Processing M-Pesa payment
```

To change the payment method, change:

```java
PaymentMethod method = new MpesaPayment();
```

To:

```java
PaymentMethod method = new CardPayment();
```

The output becomes:

```text
Processing card payment
```

The `PaymentService` does not need to change.

This is one of the main advantages of dependency injection.

## 2. Constructor Injection

The previous example used constructor injection.

Constructor injection means supplying dependencies through a class constructor.

Example:

```java
class NotificationService {

    private EmailSender emailSender;

    public NotificationService(EmailSender emailSender) {

        this.emailSender = emailSender;

    }

}
```

The `NotificationService` receives its `EmailSender` when it is created.

This is useful because the object receives the dependency it needs during initialization.

## 3. Understanding Interfaces in Composition

Interfaces make composition more flexible.

Imagine building a notification system.

You want to support:

- Email notifications.
- SMS notifications.
- Push notifications.

Instead of creating a separate notification service for each method, define a common interface.

```java
interface NotificationChannel {

    void send(String message);

}
```

Email implementation:

```java
class EmailNotification implements NotificationChannel {

    public void send(String message) {

        System.out.println("Email: " + message);

    }

}
```

SMS implementation:

```java
class SMSNotification implements NotificationChannel {

    public void send(String message) {

        System.out.println("SMS: " + message);

    }

}
```

Notification service:

```java
class NotificationService {

    private NotificationChannel channel;

    public NotificationService(NotificationChannel channel) {

        this.channel = channel;

    }

    public void notifyUser(String message) {

        channel.send(message);

    }

}
```

The service works with the interface rather than a specific notification implementation.

This makes the system easier to extend.

## 4. Understanding Loose Coupling

Loose coupling means reducing the amount of direct dependency between different classes.

Consider two approaches.

### Tightly coupled

```java
class ReportService {

    private PDFGenerator generator = new PDFGenerator();

}
```

The report service directly creates a specific PDF generator.

### Loosely coupled

```java
interface DocumentGenerator {

    void generate();

}
```

```java
class PDFGenerator implements DocumentGenerator {

    public void generate() {

        System.out.println("Generating PDF");

    }

}
```

```java
class ReportService {

    private DocumentGenerator generator;

    public ReportService(DocumentGenerator generator) {

        this.generator = generator;

    }

}
```

The service depends on an interface.

Another document generator can be introduced without rewriting the service.

**Why does this matter?**

Large applications frequently change.

Payment providers, notification services, databases, and reporting systems may need to be replaced.

Loose coupling makes those changes easier.

## 5. Understanding Common Design Patterns

A design pattern is a reusable solution to a commonly encountered software design problem.

It is not a ready-made program.

It is an established way of organizing classes and objects to solve a particular design challenge.

Java developers use many design patterns.

Some common examples include:

| Pattern | Purpose | Example |
|---|---|---|
| Singleton | Restricts a class to one instance | Shared configuration |
| Factory | Centralizes object creation | Creating payment methods |
| Strategy | Makes algorithms interchangeable | Different payment calculations |
| Observer | Notifies interested objects when something changes | Notification systems |
| Builder | Constructs complex objects step by step | Creating user profiles |

We will implement three of these patterns in Part 3.

## 6. Understanding the Singleton Pattern

The Singleton pattern ensures that a class provides one shared instance through its controlled access point.

Example:

```java
class AppConfig {

    private static AppConfig instance;

    private AppConfig() {

    }

    public static AppConfig getInstance() {

        if (instance == null) {

            instance = new AppConfig();

        }

        return instance;

    }

}
```

### Explanation

```java
private static AppConfig instance;
```

This stores the shared instance.

```java
private AppConfig() {
}
```

The constructor is private.

Other classes cannot create new instances using `new AppConfig()`.

```java
public static AppConfig getInstance() {
```

This provides a public method for accessing the instance.

```java
if (instance == null) {
```

This checks whether an instance has already been created.

```java
instance = new AppConfig();
```

If no instance exists, one is created.

```java
return instance;
```

The existing instance is returned.

### Important thread-safety note

This simple implementation is not thread-safe. Multiple threads could attempt to create the instance simultaneously.

For a simple thread-safe alternative, Java developers often use an enum:

```java
enum AppConfig {

    INSTANCE;

}
```

The enum provides a single instance with built-in serialization and thread-safety guarantees.

Singletons should be used carefully because excessive global shared state can make applications harder to test and maintain.

## 7. Understanding Separation of Responsibilities

A good Java application should not put every responsibility inside one class.

For example, an online shopping application might have:

| Class | Responsibility |
|---|---|
| Product | Stores product information |
| ShoppingCart | Manages selected products |
| PaymentService | Processes payments |
| OrderService | Manages orders |
| NotificationService | Sends notifications |

This approach is closely related to the Single Responsibility Principle.

The principle states that a class should have one primary responsibility and one main reason to change.

### Part 2 Exercises

1. Define dependency injection.
2. What is a dependency?
3. Explain constructor injection.
4. Why are interfaces useful in composition?
5. What is loose coupling?
6. Differentiate between tight coupling and loose coupling.
7. What is a design pattern?
8. Explain the Singleton pattern.
9. Why should developers avoid placing every responsibility inside one class?
10. Give three examples of where dependency injection could be useful in a real application.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL DESIGN PATTERNS IN JAVA

You will now implement three important design patterns:

1. Strategy Pattern.
2. Factory Pattern.
3. Observer Pattern.

These examples will show how intermediate Java concepts are used in actual applications.

## PRACTICAL 1: STRATEGY PATTERN

### 1. What is the Strategy Pattern?

The Strategy pattern allows you to define different algorithms or behaviors and switch between them without changing the class that uses them.

Imagine a payment system supporting:

- M-Pesa.
- Bank transfer.
- Credit card.

Each payment method performs the same general task but uses a different process.

Instead of putting every payment algorithm inside one large class, you create separate strategies.

### Step 1: Create the project structure

```text
StrategyDemo/
    PaymentStrategy.java
    MpesaPayment.java
    CardPayment.java
    BankPayment.java
    PaymentService.java
    Main.java
```

### Step 2: Create PaymentStrategy.java

```java
public interface PaymentStrategy {

    void pay(double amount);

}
```

Explanation:

```java
public interface PaymentStrategy {
```

This defines a contract for payment strategies.

```java
void pay(double amount);
```

Every implementation must provide a `pay()` method that accepts a payment amount.

### Step 3: Create MpesaPayment.java

```java
public class MpesaPayment implements PaymentStrategy {

    public void pay(double amount) {

        System.out.println("Paid KSh " + amount + " using M-Pesa");

    }

}
```

Explanation:

```java
implements PaymentStrategy
```

This means `MpesaPayment` follows the payment strategy contract.

```java
public void pay(double amount)
```

This implements the required method.

```java
System.out.println(...)
```

This displays the payment method and amount.

### Step 4: Create CardPayment.java

```java
public class CardPayment implements PaymentStrategy {

    public void pay(double amount) {

        System.out.println("Paid KSh " + amount + " using a card");

    }

}
```

This provides a different implementation of the same payment contract.

### Step 5: Create BankPayment.java

```java
public class BankPayment implements PaymentStrategy {

    public void pay(double amount) {

        System.out.println("Paid KSh " + amount + " through bank transfer");

    }

}
```

The bank transfer implementation follows the same interface.

### Step 6: Create PaymentService.java

```java
public class PaymentService {

    private PaymentStrategy strategy;

    public PaymentService(PaymentStrategy strategy) {

        this.strategy = strategy;

    }

    public void checkout(double amount) {

        strategy.pay(amount);

    }

}
```

Explanation:

```java
private PaymentStrategy strategy;
```

The service stores a reference to the payment strategy.

```java
public PaymentService(PaymentStrategy strategy)
```

The constructor receives the chosen payment strategy.

```java
this.strategy = strategy;
```

The selected strategy is assigned to the field.

```java
public void checkout(double amount)
```

This method represents the checkout operation.

```java
strategy.pay(amount);
```

The service delegates the payment operation to the selected strategy.

### Step 7: Create Main.java

```java
public class Main {

    public static void main(String[] args) {

        PaymentStrategy payment = new MpesaPayment();

        PaymentService service = new PaymentService(payment);

        service.checkout(2500);

    }

}
```

Explanation:

```java
PaymentStrategy payment = new MpesaPayment();
```

This creates an M-Pesa payment object and stores it in a variable of interface type.

```java
PaymentService service = new PaymentService(payment);
```

This passes the selected payment strategy into the service.

```java
service.checkout(2500);
```

This requests payment of KSh 2,500.

### Expected output

```text
Paid KSh 2500.0 using M-Pesa
```

To use a card instead, change:

```java
PaymentStrategy payment = new MpesaPayment();
```

To:

```java
PaymentStrategy payment = new CardPayment();
```

You do not need to rewrite the payment service.

**This is the main advantage of the Strategy pattern: interchangeable behavior.**

---

## PRACTICAL 2: FACTORY PATTERN

### 1. What is the Factory Pattern?

The Factory pattern centralizes object creation.

Instead of allowing the main application to create every object directly, you create a separate class responsible for deciding which object should be created.

Imagine a notification application.

It supports:

- Email.
- SMS.
- Push notifications.

The application should not need to know the detailed construction process for each notification object.

### Step 1: Create Notification.java

```java
public interface Notification {

    void send(String message);

}
```

This defines the notification contract.

Every notification type must implement `send()`.

### Step 2: Create EmailNotification.java

```java
public class EmailNotification implements Notification {

    public void send(String message) {

        System.out.println("Email sent: " + message);

    }

}
```

This implements email notifications.

### Step 3: Create SMSNotification.java

```java
public class SMSNotification implements Notification {

    public void send(String message) {

        System.out.println("SMS sent: " + message);

    }

}
```

This implements SMS notifications.

### Step 4: Create NotificationFactory.java

```java
public class NotificationFactory {

    public static Notification createNotification(String type) {

        if (type.equalsIgnoreCase("email")) {

            return new EmailNotification();

        }

        if (type.equalsIgnoreCase("sms")) {

            return new SMSNotification();

        }

        throw new IllegalArgumentException("Unknown notification type");

    }

}
```

### Explanation

```java
public static Notification createNotification(String type)
```

This creates a static factory method.

It accepts a notification type and returns an object that implements `Notification`.

```java
if (type.equalsIgnoreCase("email"))
```

This checks whether the requested notification type is email.

`equalsIgnoreCase()` compares strings without considering uppercase or lowercase differences.

```java
return new EmailNotification();
```

If the type is email, the factory creates and returns an email notification object.

The SMS condition works in the same way.

```java
throw new IllegalArgumentException(...)
```

If the requested type is unsupported, the factory throws an exception rather than returning an invalid object.

### Step 5: Create Main.java

```java
public class Main {

    public static void main(String[] args) {

        Notification notification =
                NotificationFactory.createNotification("email");

        notification.send("Your account has been created.");

    }

}
```

Explanation:

```java
Notification notification =
```

This declares a variable using the notification interface.

```java
NotificationFactory.createNotification("email");
```

The factory decides which notification implementation to create.

```java
notification.send(...)
```

This sends the message using the selected notification implementation.

### Expected output

```text
Email sent: Your account has been created.
```

To use SMS, change `"email"` to `"sms"`.

Expected output:

```text
SMS sent: Your account has been created.
```

**The Factory pattern is useful when object creation decisions should be separated from the main application logic.**

---

## PRACTICAL 3: OBSERVER PATTERN

### 1. What is the Observer Pattern?

The Observer pattern allows one object to notify other objects when something changes.

Imagine a user subscribes to notifications from an online learning platform.

When a new lesson is published, all subscribers should receive an update.

Instead of manually notifying each subscriber through unrelated code, the platform can maintain a list of observers.

### Step 1: Create Observer.java

```java
public interface Observer {

    void update(String message);

}
```

This defines what every observer must do when it receives an update.

### Step 2: Create Student.java

```java
public class Student implements Observer {

    private String name;

    public Student(String name) {

        this.name = name;

    }

    public void update(String message) {

        System.out.println(name + " received: " + message);

    }

}
```

Explanation:

- `Student` implements `Observer`.
- The constructor stores the student's name.
- `update()` receives a message.
- The message is displayed with the student's name.

### Step 3: Create LearningPlatform.java

```java
import java.util.ArrayList;
import java.util.List;

public class LearningPlatform {

    private List<Observer> observers = new ArrayList<>();

    public void subscribe(Observer observer) {

        observers.add(observer);

    }

    public void unsubscribe(Observer observer) {

        observers.remove(observer);

    }

    public void publishLesson(String lesson) {

        System.out.println("New lesson published: " + lesson);

        for (Observer observer : observers) {

            observer.update("New lesson available: " + lesson);

        }

    }

}
```

### Explanation

```java
import java.util.ArrayList;
import java.util.List;
```

These import the collection types used to store observers.

```java
private List<Observer> observers = new ArrayList<>();
```

This creates a list that stores subscribers.

Because the list uses the `Observer` interface, it can hold any object that implements that interface.

```java
public void subscribe(Observer observer)
```

This method accepts an observer that wants to subscribe.

```java
observers.add(observer);
```

The observer is added to the list.

```java
public void unsubscribe(Observer observer)
```

This method removes an observer.

```java
public void publishLesson(String lesson)
```

This represents publishing a new lesson.

```java
for (Observer observer : observers)
```

This loop visits every registered observer.

```java
observer.update(...)
```

Each observer receives the notification.

### Step 4: Create Main.java

```java
public class Main {

    public static void main(String[] args) {

        LearningPlatform platform = new LearningPlatform();

        Student student1 = new Student("Brian");

        Student student2 = new Student("James");

        platform.subscribe(student1);

        platform.subscribe(student2);

        platform.publishLesson("Java Design Patterns");

    }

}
```

Explanation:

1. A learning platform object is created.
2. Two student objects are created.
3. Both students subscribe to the platform.
4. A new lesson is published.
5. The platform notifies every subscriber.

### Expected output

```text
New lesson published: Java Design Patterns
Brian received: New lesson available: Java Design Patterns
James received: New lesson available: Java Design Patterns
```

### Where is this pattern useful?

The Observer pattern is useful in:

- Notification systems.
- Event-driven applications.
- Messaging systems.
- Stock price monitoring.
- User interface event handling.
- Subscription platforms.

---

## 4. Comparing the Three Patterns

| Pattern | Main purpose | Example |
|---|---|---|
| Strategy | Switch between different behaviors | M-Pesa and card payments |
| Factory | Centralize object creation | Creating notification objects |
| Observer | Notify multiple objects about changes | Students receiving lesson updates |

## 5. Common Mistakes

### Mistake 1: Forgetting to implement interface methods

If a concrete class implements an interface but does not implement all required abstract methods, Java will report a compilation error.

### Mistake 2: Using the wrong object type

A variable declared as `PaymentStrategy` can reference an object implementing `PaymentStrategy`.

It cannot reference an unrelated class that does not implement that interface.

### Mistake 3: Creating unnecessary dependencies

A class should not depend on many unrelated classes when it only needs a small interface.

### Mistake 4: Forgetting to register observers

An observer will not receive notifications if it has not subscribed.

### Mistake 5: Using Singleton everywhere

Not every class needs a single shared instance.

Using Singleton unnecessarily can make testing and application maintenance harder.

## 6. Practical Exercises

### Exercise 1: Strategy Pattern

Build a discount calculator that supports:

- Student discount.
- Employee discount.
- Regular customer discount.

Each discount should have its own implementation.

Create a `DiscountStrategy` interface and a `DiscountService` class.

### Exercise 2: Factory Pattern

Create a payment factory that supports:

- M-Pesa.
- Bank transfer.
- Card payment.

The factory should return the correct payment object based on the requested type.

### Exercise 3: Observer Pattern

Build a simple news subscription application.

Requirements:

1. Create a `Subscriber` interface.
2. Create at least three subscriber objects.
3. Allow subscribers to subscribe.
4. Allow subscribers to unsubscribe.
5. Publish news.
6. Notify all remaining subscribers.

### Exercise 4: Composition

Create a computer system containing:

- Processor.
- RAM.
- Storage.

Each component should have its own class.

The `Computer` class should combine the components and display their details.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

## 1. Lesson Summary

| Concept | Meaning |
|---|---|
| Composition | Combining objects by making one class contain references to other objects. |
| HAS-A relationship | Describes an object containing or using another object. |
| Inheritance | Establishes an IS-A relationship between classes. |
| Dependency injection | Supplies an object's dependencies from outside. |
| Constructor injection | Provides dependencies through a constructor. |
| Interface | Defines a contract for implementing classes. |
| Loose coupling | Reduces direct dependencies between classes. |
| Design pattern | A reusable approach to a common software design problem. |
| Singleton | Provides one controlled shared instance. |
| Strategy | Allows interchangeable algorithms or behaviors. |
| Factory | Centralizes object creation. |
| Observer | Notifies interested objects when something changes. |

## 2. Multiple-Choice Questions

Choose the correct answer.

**Question 1**

What relationship does composition represent?

A. IS-A

B. HAS-A

C. USES-A only

D. EXTENDS-A

**Question 2**

Which keyword is used to inherit a class?

A. `implements`

B. `import`

C. `extends`

D. `requires`

**Question 3**

What is the main advantage of composition?

A. It removes the need for classes.

B. It allows objects to combine functionality from other objects.

C. It prevents object creation.

D. It replaces all interfaces.

**Question 4**

What is dependency injection?

A. Creating every object inside the same class.

B. Supplying an object with the dependencies it needs.

C. Deleting unused objects.

D. Inheriting multiple classes.

**Question 5**

Which pattern allows interchangeable algorithms?

A. Factory

B. Observer

C. Strategy

D. Singleton

**Question 6**

Which pattern centralizes object creation?

A. Observer

B. Factory

C. Strategy

D. Inheritance

**Question 7**

Which pattern notifies registered objects when something changes?

A. Strategy

B. Factory

C. Singleton

D. Observer

**Question 8**

What does loose coupling mean?

A. Classes have no methods.

B. Classes have fewer direct dependencies on specific implementations.

C. Classes cannot communicate.

D. Every class must inherit from another class.

**Question 9**

Which design pattern provides one controlled shared instance?

A. Factory

B. Observer

C. Singleton

D. Strategy

**Question 10**

Which Java feature allows a class to define a contract without providing ordinary instance implementations for every method?

A. Interface

B. Package

C. Constructor

D. Variable

## 3. Conceptual Questions

Answer in your own words.

11. Explain composition and provide three real-world examples.

12. Differentiate between composition and inheritance.

13. Why is composition often preferred over inheritance?

14. What is dependency injection, and why is it useful?

15. Explain constructor injection.

16. What is loose coupling?

17. Explain the purpose of Java interfaces in application design.

18. What is a design pattern?

19. Explain the difference between the Strategy and Factory patterns.

20. How does the Observer pattern work?

## 4. Practical Programming Assessment

**Question 21: Composition**

Create a `Car` class that contains an `Engine` object.

The engine should have:

- A start method.
- A stop method.

The car should have methods that use the engine.

Write the complete program and explain the relationship between the classes.

**Question 22: Dependency Injection**

Create:

- A `MessageSender` interface.
- An `EmailSender` class.
- An `SMSSender` class.
- A `NotificationService` class.

The notification service should receive its sender through constructor injection.

**Question 23: Strategy Pattern**

Create a payment application supporting:

- M-Pesa.
- Card payment.
- Bank transfer.

Use an interface and a service class to implement the Strategy pattern.

**Question 24: Factory Pattern**

Create a factory that generates different notification objects based on the requested notification type.

Demonstrate its operation using email and SMS notifications.

**Question 25: Observer Pattern**

Create a news subscription application that notifies registered subscribers when new news is published.

Include subscription and unsubscription methods.

## 5. Debugging Questions

Study the code below:

```java
interface PaymentMethod {

    void pay();

}

class MpesaPayment implements PaymentMethod {

}
```

**Question 26**

Identify the problem and explain how to correct it.

Now examine:

```java
class Engine {

    public void start() {

        System.out.println("Engine started");

    }

}

class Car {

    private Engine engine;

    public void startCar() {

        System.out.println("Car starting");

    }

}
```

**Question 27**

The car contains an engine object reference, but the `startCar()` method does not start the engine.

Correct the code and explain your correction.

## 6. Final Practical Project: Modular E-Commerce Application

Build a small e-commerce application using composition and design patterns.

### Project structure

```text
ECommerceSystem/
│
├── Product.java
├── ShoppingCart.java
├── PaymentMethod.java
├── MpesaPayment.java
├── CardPayment.java
├── PaymentFactory.java
├── OrderService.java
├── Observer.java
├── Customer.java
├── OrderNotification.java
└── Main.java
```

### Requirements

**1. Product class**

Store:

- Product ID.
- Product name.
- Price.

**2. ShoppingCart class**

Use composition to manage a collection of products.

Include methods to:

- Add products.
- Remove products.
- Display products.
- Calculate the total.

**3. Payment system**

Use the Strategy pattern to support:

- M-Pesa.
- Card payments.

**4. Payment factory**

Use the Factory pattern to create the selected payment object.

**5. Notification system**

Use the Observer pattern to notify customers when their orders are processed.

**6. OrderService**

Use composition and dependency injection to coordinate the order process.

### Expected application behavior

When the application runs:

1. Products are added to a shopping cart.
2. The cart calculates the total.
3. The customer selects a payment method.
4. The payment is processed.
5. The order is confirmed.
6. Registered customers receive notifications.

Example output:

```text
===== E-COMMERCE APPLICATION =====

PRODUCTS ADDED

Laptop - KSh 75,000
Mouse - KSh 1,500

TOTAL: KSh 76,500

PAYMENT METHOD: M-PESA

Processing M-Pesa payment...

PAYMENT SUCCESSFUL

ORDER CONFIRMED

Notification sent to Brian:
Your order has been processed successfully.

===== TRANSACTION COMPLETE =====
```

Your implementation should demonstrate that the classes have separate responsibilities and communicate through well-defined interfaces.

## 7. Submit Your Work to Kai

Submit your assessment answers and completed e-commerce project to Kai.

Kai should evaluate:

- Understanding of composition.
- Correct use of HAS-A relationships.
- Ability to distinguish composition from inheritance.
- Understanding of dependency injection.
- Correct use of interfaces.
- Understanding of loose coupling.
- Correct implementation of Strategy, Factory, and Observer patterns.
- Code organization and maintainability.
- Ability to solve practical programming problems.

Kai should mark each question, identify errors, explain corrections, and provide a final score.

## 8. Lesson Completion Checklist

- [ ] I understand composition.
- [ ] I can identify HAS-A relationships.
- [ ] I can distinguish composition from inheritance.
- [ ] I can create classes that contain other objects.
- [ ] I understand dependency injection.
- [ ] I can use constructor injection.
- [ ] I understand interfaces in application design.
- [ ] I understand loose coupling.
- [ ] I understand what design patterns are.
- [ ] I can implement the Strategy pattern.
- [ ] I can implement the Factory pattern.
- [ ] I can implement the Observer pattern.
- [ ] I can combine multiple patterns in one application.

# PART 4 OF 4 — LESSON COMPLETE