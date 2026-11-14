
# JAVA: COLLECTIONS AND DATA

# PART 1 OF 4: INTRODUCTION TO COLLECTIONS AND LISTS

## 1. What Are Collections in Java?

A collection is an object that stores and manages a group of other objects.

In programming, applications often need to work with multiple pieces of information.

For example, consider a student management system containing:

- Student names.
- Student registration numbers.
- Student marks.
- Course names.
- Student email addresses.

You could create separate variables for every student:

```java
String student1 = "Brian";
String student2 = "Mary";
String student3 = "John";
String student4 = "Grace";
```

This works for a small amount of information, but it becomes difficult to manage when an application has hundreds or thousands of students.

Java collections provide a better way to organize this information.

Example:

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> students = new ArrayList<>();

        students.add("Brian");
        students.add("Mary");
        students.add("John");
        students.add("Grace");

        System.out.println(students);

    }
}
```

Output:

```text
[Brian, Mary, John, Grace]
```

Instead of creating four separate variables, we created one collection called `students`.

It stores all four names.

## 2. Why Are Collections Important?

Collections are used in almost every type of software application.

| Application | How collections are used |
|---|---|
| Banking systems | Managing customer accounts and transactions |
| E-commerce systems | Managing products and shopping carts |
| School management systems | Storing student records |
| Social media | Managing followers, posts and comments |
| Hospital systems | Managing patient records |
| Inventory systems | Managing available products |
| Authentication systems | Managing user permissions and roles |

### Advantages of Collections

1. **Dynamic storage:** Some collections can grow or shrink as data changes.
2. **Data organization:** Different collection types organize information differently.
3. **Easy manipulation:** You can add, remove, search and update elements.
4. **Code reuse:** Java provides ready-made collection implementations.
5. **Efficient processing:** Different collections are optimized for different operations.

---

## 3. Understanding the Java Collections Framework

The Java Collections Framework is a collection of interfaces, classes and algorithms designed for managing groups of objects.

It provides standardized ways to store and process data.

The main collection interfaces include:

- `List`
- `Set`
- `Queue`
- `Deque`

The `Map` interface is also part of the Collections Framework, but it is separate from the `Collection` interface.

### Collections Framework Structure

A simplified view:

```text
Java Collections Framework
│
├── Collection
│   │
│   ├── List
│   │   ├── ArrayList
│   │   └── LinkedList
│   │
│   ├── Set
│   │   ├── HashSet
│   │   ├── LinkedHashSet
│   │   └── TreeSet
│   │
│   └── Queue
│       ├── PriorityQueue
│       └── LinkedList
│
└── Map
    ├── HashMap
    ├── LinkedHashMap
    └── TreeMap
```

This is a simplified structure. Some classes implement multiple interfaces.

For example, `LinkedList` implements both `List` and `Deque`.

### Understanding the Main Interfaces

| Interface | Purpose | Allows duplicates? |
|---|---|---|
| `List` | Stores ordered elements | Yes |
| `Set` | Stores unique elements | No |
| `Queue` | Manages elements for processing | Depends on implementation |
| `Deque` | Supports insertion and removal at both ends | Yes |
| `Map` | Stores key-value pairs | Keys must be unique |

Let's study them individually.

---

# 4. Lists in Java

A `List` is a collection that stores elements in a defined order.

It allows:
- Duplicate elements.
- Accessing elements using indexes.
- Updating existing elements.
- Inserting elements at particular positions.
- Removing elements.

For example:

```text
Index:    0       1       2       3
       [Brian] [Mary] [John] [Brian]
```

Notice that Brian appears twice.

A list allows this.

Java provides several List implementations, including:

- `ArrayList`
- `LinkedList`
- `Vector`
- `Stack`

We will focus mainly on `ArrayList` and `LinkedList`.

---

# 5. ArrayList

An `ArrayList` is a resizable array implementation of the `List` interface.

Unlike a normal Java array, an `ArrayList` can automatically grow when more elements are added.

### Creating an ArrayList

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> students = new ArrayList<>();

    }
}
```

Explanation:

```java
import java.util.ArrayList;
```

Imports the `ArrayList` class.

```java
ArrayList<String> students = new ArrayList<>();
```

Creates an ArrayList named `students`.

The `<String>` part specifies that the collection stores String values.

This is an example of **generics**, which we will examine later.

### Adding Elements

Use the `add()` method.

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> students = new ArrayList<>();

        students.add("Brian");
        students.add("Mary");
        students.add("John");

        System.out.println(students);

    }
}
```

Output:

```text
[Brian, Mary, John]
```

Each `add()` operation inserts another element into the list.

### Accessing Elements

Use `get()` to retrieve an element by its index.

```java
ArrayList<String> students = new ArrayList<>();

students.add("Brian");
students.add("Mary");
students.add("John");

System.out.println(students.get(0));
System.out.println(students.get(1));
```

Output:

```text
Brian
Mary
```

Remember that Java indexes start at zero.

Therefore:

- Index 0 contains Brian.
- Index 1 contains Mary.
- Index 2 contains John.

Trying to access an index that does not exist causes an `IndexOutOfBoundsException`.

### Updating Elements

Use `set()` to replace an existing element.

```java
students.set(1, "Grace");
```

This replaces the element at index 1.

Before:

```text
[Brian, Mary, John]
```

After:

```text
[Brian, Grace, John]
```

### Removing Elements

You can remove an element by its index or by its value.

Remove by index:

```java
students.remove(1);
```

Remove by value:

```java
students.remove("Brian");
```

### Finding the Size

Use:

```java
students.size();
```

This returns the number of elements in the list.

### Checking Whether an Element Exists

Use:

```java
students.contains("Brian");
```

It returns `true` if the element exists and `false` otherwise.

### Clearing a List

Use:

```java
students.clear();
```

This removes all elements.

### ArrayList Methods Summary

| Method | Purpose |
|---|---|
| `add()` | Adds an element |
| `get()` | Retrieves an element |
| `set()` | Updates an element |
| `remove()` | Removes an element |
| `size()` | Returns the number of elements |
| `contains()` | Checks whether an element exists |
| `isEmpty()` | Checks whether the list is empty |
| `clear()` | Removes all elements |
| `indexOf()` | Returns the first matching index |
| `lastIndexOf()` | Returns the last matching index |

---

# 6. Looping Through an ArrayList

Collections are often processed using loops.

### Using a Normal for Loop

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> students = new ArrayList<>();

        students.add("Brian");
        students.add("Mary");
        students.add("John");

        for (int i = 0; i < students.size(); i++) {

            System.out.println(students.get(i));

        }

    }
}
```

Output:

```text
Brian
Mary
John
```

Explanation:

- `int i = 0` starts the index counter at zero.
- `i < students.size()` checks whether the index is still valid.
- `i++` increases the counter after each iteration.
- `students.get(i)` retrieves the current element.
- `System.out.println()` displays it.

### Using an Enhanced for Loop

You can also use a for-each loop.

```java
for (String student : students) {

    System.out.println(student);

}
```

Here, Java retrieves each element and temporarily stores it in `student`.

This approach is useful when you only need to read elements and do not need their indexes.

---

# 7. LinkedList

A `LinkedList` is another implementation of the `List` interface.

It stores elements as connected nodes rather than using a resizable array.

Each node contains:
- The stored element.
- A reference to the next node.
- A reference to the previous node.

Conceptually:

```text
[Brian] ⇄ [Mary] ⇄ [John] ⇄ [Grace]
```

The arrows represent connections between nodes.

### Creating a LinkedList

```java
import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {

        LinkedList<String> students = new LinkedList<>();

        students.add("Brian");
        students.add("Mary");
        students.add("John");

        System.out.println(students);

    }
}
```

Output:

```text
[Brian, Mary, John]
```

### Adding Elements at Different Positions

LinkedList supports additional methods for working with both ends of the list.

```java
students.addFirst("Grace");

students.addLast("Peter");
```

The first statement adds Grace at the beginning.

The second adds Peter at the end.

### Removing Elements

```java
students.removeFirst();

students.removeLast();
```

These methods remove the first and last elements respectively.

### Accessing Elements

```java
System.out.println(students.getFirst());

System.out.println(students.getLast());
```

These retrieve the first and last elements.

### ArrayList vs LinkedList

| Feature | ArrayList | LinkedList |
|---|---|---|
| Internal structure | Resizable array | Doubly linked nodes |
| Access by index | Generally fast | Generally slower |
| Adding at the end | Usually efficient | Efficient |
| Adding/removing at the beginning | May require shifting elements | Efficient |
| Memory usage | Usually lower per element | Higher because of node references |
| Best use | Frequent indexed access | Frequent operations at either end |

**Important:** LinkedList is not automatically faster for every insertion or deletion. Finding the position can still require traversing the list. For many ordinary applications, `ArrayList` is a good default choice.

---

## 8. Understanding Generics

Generics allow Java classes, interfaces and methods to work with different data types while maintaining type safety.

Consider:

```java
ArrayList<String> names = new ArrayList<>();
```

The `<String>` declaration tells Java that the list should contain String objects.

This is useful because Java can detect incompatible values during compilation.

For example:

```java
ArrayList<String> names = new ArrayList<>();

names.add("Brian");
names.add("Mary");

// names.add(100); // Compilation error
```

The number 100 cannot be added because the list expects String values.

### Collections With Different Data Types

```java
ArrayList<Integer> numbers = new ArrayList<>();

numbers.add(10);
numbers.add(20);
numbers.add(30);
```

For a collection of decimal values:

```java
ArrayList<Double> prices = new ArrayList<>();

prices.add(150.50);
prices.add(200.00);
```

For boolean values:

```java
ArrayList<Boolean> results = new ArrayList<>();

results.add(true);
results.add(false);
```

### Why Can't We Use int Directly?

Java generics work with reference types, not primitive types.

Therefore, use wrapper classes:

| Primitive | Wrapper class |
|---|---|
| `int` | `Integer` |
| `double` | `Double` |
| `float` | `Float` |
| `char` | `Character` |
| `boolean` | `Boolean` |
| `long` | `Long` |
| `short` | `Short` |
| `byte` | `Byte` |

Java automatically converts between primitive values and their wrapper objects in many situations. This is called autoboxing and unboxing.

Example:

```java
ArrayList<Integer> numbers = new ArrayList<>();

numbers.add(10);
```

Java automatically converts the integer value into an `Integer` object.

### Part 1 Exercises

1. Define a collection in Java.
2. What is the Java Collections Framework?
3. Explain the difference between `List` and `Set`.
4. What is an `ArrayList`?
5. Explain how to add, retrieve and remove ArrayList elements.
6. What is the difference between `ArrayList` and `LinkedList`?
7. What are generics?
8. Why does Java use `Integer` instead of `int` in an `ArrayList`?
9. Write a program that stores five student names in an ArrayList and displays them.
10. Write a program that updates and removes an element from an ArrayList.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: SETS, MAPS AND QUEUES

# 9. Sets in Java

A `Set` is a collection that does not allow duplicate elements.

For example, imagine a system that stores student admission numbers.

Every admission number should be unique.

A Set is useful because it prevents duplicate elements according to its equality rules.

Example:

```java
import java.util.HashSet;

public class Main {

    public static void main(String[] args) {

        HashSet<String> students = new HashSet<>();

        students.add("Brian");
        students.add("Mary");
        students.add("John");
        students.add("Brian");

        System.out.println(students);

    }
}
```

Output contains:

```text
[Brian, Mary, John]
```

Brian appears only once.

**Important:** HashSet does not guarantee the order in which elements are displayed.

The displayed order may differ from the order in which elements were inserted.

---

# 10. HashSet

`HashSet` is an implementation of the `Set` interface.

It uses hashing to organize and locate elements.

### Creating a HashSet

```java
import java.util.HashSet;

public class Main {

    public static void main(String[] args) {

        HashSet<Integer> numbers = new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(20);

        System.out.println(numbers);

    }
}
```

Output contains the unique values:

```text
[10, 20, 30]
```

The order is not guaranteed.

### Checking Whether an Element Exists

```java
System.out.println(numbers.contains(20));
```

Output:

```text
true
```

### Removing an Element

```java
numbers.remove(20);
```

The value 20 is removed.

### Finding the Size

```java
System.out.println(numbers.size());
```

Returns the number of unique elements.

### Important HashSet Characteristics

- Does not allow duplicates.
- Does not guarantee insertion order.
- Supports efficient average-case lookup.
- Allows one `null` element.
- Uses `equals()` and `hashCode()` to determine element equality.

---

# 11. LinkedHashSet

`LinkedHashSet` is a Set implementation that maintains insertion order.

Example:

```java
import java.util.LinkedHashSet;

public class Main {

    public static void main(String[] args) {

        LinkedHashSet<String> languages = new LinkedHashSet<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("JavaScript");
        languages.add("Java");

        System.out.println(languages);

    }
}
```

Output:

```text
[Java, Python, JavaScript]
```

Java appears only once, and the insertion order is maintained.

Use LinkedHashSet when you need unique values while preserving the order in which they were inserted.

---

# 12. TreeSet

`TreeSet` stores unique elements in sorted order according to their natural ordering or a supplied comparator.

Example:

```java
import java.util.TreeSet;

public class Main {

    public static void main(String[] args) {

        TreeSet<Integer> numbers = new TreeSet<>();

        numbers.add(50);
        numbers.add(10);
        numbers.add(40);
        numbers.add(20);
        numbers.add(30);

        System.out.println(numbers);

    }
}
```

Output:

```text
[10, 20, 30, 40, 50]
```

Notice that the elements are displayed in ascending order.

### Additional TreeSet Methods

```java
numbers.first();
```

Returns the smallest element.

```java
numbers.last();
```

Returns the largest element.

```java
numbers.higher(20);
```

Returns the smallest element strictly greater than 20.

```java
numbers.lower(40);
```

Returns the greatest element strictly less than 40.

### Comparing Set Implementations

| Feature | HashSet | LinkedHashSet | TreeSet |
|---|---|---|---|
| Duplicates | Not allowed | Not allowed | Not allowed |
| Insertion order | Not guaranteed | Maintained | Not maintained |
| Sorted order | No | No | Yes |
| Typical implementation | Hash table | Hash table with linked ordering | Balanced search tree |
| Null support | One null allowed | One null allowed | Generally does not allow null with natural ordering |

### When Should You Use Each?

- Use `HashSet` when you need unique values and do not care about their order.
- Use `LinkedHashSet` when you need unique values in insertion order.
- Use `TreeSet` when you need unique values in sorted order.

---

# 13. Maps in Java

A `Map` stores information in key-value pairs.

Unlike a List, where you retrieve elements using indexes, a Map allows you to retrieve values using keys.

For example, imagine a student registration system.

Each student has:
- A registration number.
- A student name.

You could store the registration number as the key and the name as the value.

Example:

```text
Registration Number     Student Name

KU001                   Brian
KU002                   Mary
KU003                   John
```

A Map represents this relationship.

### Understanding Key-Value Pairs

```text
Key       → Value

KU001     → Brian
KU002     → Mary
KU003     → John
```

Important characteristics:

- Keys must be unique.
- Values can be duplicated.
- Each key maps to one value at a time.
- A new value assigned to an existing key replaces its previous value.

---

# 14. HashMap

`HashMap` is one of the most commonly used Map implementations.

It uses hashing to store and retrieve key-value pairs.

### Creating a HashMap

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, String> students = new HashMap<>();

        students.put("KU001", "Brian");
        students.put("KU002", "Mary");
        students.put("KU003", "John");

        System.out.println(students);

    }
}
```

Output will contain:

```text
{KU001=Brian, KU002=Mary, KU003=John}
```

The order is not guaranteed.

### Understanding the Code

```java
HashMap<String, String> students = new HashMap<>();
```

Creates a HashMap.

The first `<String>` represents the key type.

The second `<String>` represents the value type.

```java
students.put("KU001", "Brian");
```

Stores Brian using KU001 as the key.

```java
students.put("KU002", "Mary");
```

Stores Mary using KU002 as the key.

### Retrieving a Value

Use `get()`.

```java
System.out.println(students.get("KU001"));
```

Output:

```text
Brian
```

Java searches for the key and returns its associated value.

### Updating a Value

```java
students.put("KU001", "Brian Njogu");
```

Since KU001 already exists, its previous value is replaced.

### Removing an Entry

```java
students.remove("KU002");
```

Removes the entry associated with KU002.

### Checking Whether a Key Exists

```java
students.containsKey("KU001");
```

Returns `true` if the key exists.

### Checking Whether a Value Exists

```java
students.containsValue("Brian");
```

Returns `true` if the value exists.

### Getting the Number of Entries

```java
students.size();
```

Returns the number of key-value pairs.

---

# 15. Iterating Through a HashMap

Sometimes you need to process all entries stored in a Map.

### Using entrySet()

```java
import java.util.HashMap;
import java.util.Map;

public class Main {

    public static void main(String[] args) {

        HashMap<String, String> students = new HashMap<>();

        students.put("KU001", "Brian");
        students.put("KU002", "Mary");
        students.put("KU003", "John");

        for (Map.Entry<String, String> entry : students.entrySet()) {

            System.out.println(entry.getKey() + " : " + entry.getValue());

        }

    }
}
```

Possible output:

```text
KU001 : Brian
KU002 : Mary
KU003 : John
```

Explanation:

```java
for (Map.Entry<String, String> entry : students.entrySet())
```

Loops through every key-value entry.

```java
entry.getKey()
```

Retrieves the current key.

```java
entry.getValue()
```

Retrieves the value associated with that key.

This is a common way of processing Map entries.

### Iterating Through Keys

```java
for (String key : students.keySet()) {

    System.out.println(key);

}
```

### Iterating Through Values

```java
for (String value : students.values()) {

    System.out.println(value);

}
```

---

# 16. LinkedHashMap

`LinkedHashMap` stores key-value pairs while maintaining insertion order.

Example:

```java
import java.util.LinkedHashMap;

public class Main {

    public static void main(String[] args) {

        LinkedHashMap<Integer, String> products = new LinkedHashMap<>();

        products.put(101, "Laptop");
        products.put(102, "Phone");
        products.put(103, "Tablet");

        System.out.println(products);

    }
}
```

Output:

```text
{101=Laptop, 102=Phone, 103=Tablet}
```

The entries are maintained in insertion order.

Use LinkedHashMap when predictable iteration order is important.

---

# 17. TreeMap

`TreeMap` stores key-value pairs sorted according to the keys.

Example:

```java
import java.util.TreeMap;

public class Main {

    public static void main(String[] args) {

        TreeMap<Integer, String> students = new TreeMap<>();

        students.put(103, "John");
        students.put(101, "Brian");
        students.put(102, "Mary");

        System.out.println(students);

    }
}
```

Output:

```text
{101=Brian, 102=Mary, 103=John}
```

The entries are arranged according to their keys.

### Comparing Map Implementations

| Feature | HashMap | LinkedHashMap | TreeMap |
|---|---|---|---|
| Stores key-value pairs | Yes | Yes | Yes |
| Duplicate keys | Not allowed | Not allowed | Not allowed |
| Insertion order | Not guaranteed | Maintained | No |
| Sorted by key | No | No | Yes |
| Typical lookup | Average O(1) | Average O(1) | O(log n) |
| Null keys | One allowed | One allowed | Generally not with natural ordering |

---

# 18. Queues in Java

A Queue is a collection designed for processing elements in a particular order.

A traditional queue follows the FIFO principle.

FIFO means **First In, First Out**.

The first element inserted is normally the first element removed.

Imagine people waiting in a bank.

```text
First person → Second person → Third person

The first person is served first.
```

Queues are useful in:

- Task scheduling.
- Printer management.
- Customer service systems.
- Message processing.
- Background job execution.

### Creating a Queue

Java provides the `Queue` interface.

A common implementation is `LinkedList`.

Example:

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {

    public static void main(String[] args) {

        Queue<String> customers = new LinkedList<>();

        customers.offer("Brian");
        customers.offer("Mary");
        customers.offer("John");

        System.out.println(customers);

    }
}
```

Output:

```text
[Brian, Mary, John]
```

### Adding Elements

Use:

```java
customers.offer("Grace");
```

This adds an element to the queue when possible.

Another method is `add()`, which may throw an exception if insertion fails.

### Viewing the First Element

Use:

```java
customers.peek();
```

This retrieves the front element without removing it.

### Removing the First Element

Use:

```java
customers.poll();
```

This retrieves and removes the front element.

Example:

```java
System.out.println(customers.poll());
```

Output:

```text
Brian
```

The queue now contains:

```text
[Mary, John]
```

### Queue Methods

| Method | Purpose |
|---|---|
| `offer()` | Adds an element |
| `add()` | Adds an element |
| `peek()` | Retrieves the front element without removing it |
| `poll()` | Retrieves and removes the front element |
| `remove()` | Removes the front element |
| `isEmpty()` | Checks whether the queue is empty |

An important difference is that `peek()` and `poll()` return `null` when the queue is empty, while `element()` and `remove()` throw an exception.

---

# 19. PriorityQueue

A `PriorityQueue` processes elements according to priority rather than ordinary insertion order.

By default, Java's PriorityQueue places the smallest element at the head for naturally ordered values.

Example:

```java
import java.util.PriorityQueue;

public class Main {

    public static void main(String[] args) {

        PriorityQueue<Integer> numbers = new PriorityQueue<>();

        numbers.offer(50);
        numbers.offer(10);
        numbers.offer(30);
        numbers.offer(20);

        while (!numbers.isEmpty()) {

            System.out.println(numbers.poll());

        }

    }
}
```

Output:

```text
10
20
30
50
```

The smallest number is removed first.

**Important:** Iterating over a PriorityQueue does not guarantee sorted output. The ordering guarantee applies when retrieving elements through operations such as `poll()`.

### Part 2 Exercises

1. What is a Set?
2. Explain why HashSet does not store duplicate elements.
3. Differentiate between HashSet, LinkedHashSet and TreeSet.
4. What is a Map?
5. Explain the difference between a key and a value.
6. What happens when you insert an existing key into a HashMap?
7. Differentiate between HashMap and TreeMap.
8. What is a Queue?
9. Explain the FIFO principle.
10. Differentiate between `peek()` and `poll()`.
11. Write a program that stores five unique numbers in a HashSet.
12. Write a program that stores student admission numbers and names in a HashMap.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: COLLECTION OPERATIONS, SORTING AND PRACTICAL APPLICATIONS

# 20. Sorting Collections

Sorting means arranging data according to a particular order.

For example, you may want to arrange:
- Student names alphabetically.
- Product prices from lowest to highest.
- Examination marks from highest to lowest.
- Transaction records according to dates.

Java provides several ways to sort collections.

## Sorting an ArrayList

Java provides the `Collections` utility class.

Example:

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> numbers = new ArrayList<>();

        numbers.add(50);
        numbers.add(10);
        numbers.add(40);
        numbers.add(20);
        numbers.add(30);

        Collections.sort(numbers);

        System.out.println(numbers);

    }
}
```

Output:

```text
[10, 20, 30, 40, 50]
```

Explanation:

```java
Collections.sort(numbers);
```

Arranges the elements in ascending natural order.

### Sorting in Descending Order

```java
Collections.sort(numbers, Collections.reverseOrder());
```

Output:

```text
[50, 40, 30, 20, 10]
```

This sorts the numbers from highest to lowest.

### Sorting Strings

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> names = new ArrayList<>();

        names.add("John");
        names.add("Brian");
        names.add("Mary");

        Collections.sort(names);

        System.out.println(names);

    }
}
```

Output:

```text
[Brian, John, Mary]
```

Strings are sorted according to their natural ordering, which is based on lexicographic comparison of their characters.

For natural-language sorting, locale-aware comparison may be more appropriate.

---

# 21. Using Comparators

A Comparator allows you to define custom sorting rules.

For example, imagine you have a list of students and want to sort them according to their marks.

You can create a Comparator that compares the marks.

Example:

```java
import java.util.ArrayList;
import java.util.Comparator;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> marks = new ArrayList<>();

        marks.add(65);
        marks.add(90);
        marks.add(45);
        marks.add(80);

        marks.sort(Comparator.reverseOrder());

        System.out.println(marks);

    }
}
```

Output:

```text
[90, 80, 65, 45]
```

Explanation:

```java
Comparator.reverseOrder()
```

Provides a comparator that arranges values in reverse natural order.

```java
marks.sort(...)
```

Uses that comparator to sort the list.

Comparators are particularly important when sorting objects using fields such as price, age, name or marks.

---

# 22. Working With Custom Objects in Collections

So far, most of our collections have stored simple data types such as Strings and Integers.

Real applications often need to store complete objects.

For example, a student has:

- Registration number.
- Name.
- Age.
- Course.
- Marks.

Instead of storing these values in separate collections, we can create a Student class.

### Step 1: Create a Student Class

```java
public class Student {

    String registrationNumber;
    String name;
    int age;
    double marks;

    public Student(String registrationNumber, String name, int age, double marks) {

        this.registrationNumber = registrationNumber;
        this.name = name;
        this.age = age;
        this.marks = marks;

    }

    public void displayStudent() {

        System.out.println("Registration: " + registrationNumber);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);

    }

}
```

### Understanding the Class

The fields represent information belonging to each student.

```java
public Student(String registrationNumber, String name, int age, double marks)
```

This is a constructor.

It initializes a new Student object.

```java
this.name = name;
```

Assigns the constructor parameter to the object's field.

The keyword `this` refers to the current object.

```java
public void displayStudent()
```

Defines a method that displays the student's information.

### Step 2: Store Student Objects in an ArrayList

Create another file named `Main.java`.

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Student> students = new ArrayList<>();

        students.add(new Student("KU001", "Brian", 21, 85));
        students.add(new Student("KU002", "Mary", 20, 78));
        students.add(new Student("KU003", "John", 22, 65));

        for (Student student : students) {

            student.displayStudent();

            System.out.println();

        }

    }
}
```

Output:

```text
Registration: KU001
Name: Brian
Age: 21
Marks: 85.0

Registration: KU002
Name: Mary
Age: 20
Marks: 78.0

Registration: KU003
Name: John
Age: 22
Marks: 65.0
```

### Understanding the Collection

```java
ArrayList<Student> students = new ArrayList<>();
```

Creates a collection that stores Student objects.

Unlike `ArrayList<String>`, this collection stores objects created from your own Student class.

```java
students.add(new Student("KU001", "Brian", 21, 85));
```

Creates a Student object and adds it to the collection.

```java
for (Student student : students)
```

Processes each Student object.

```java
student.displayStudent();
```

Calls the display method belonging to the current student object.

This is a very important concept in Java application development.

Collections can store objects created from your own classes.

---

# 23. Searching Collections

Searching means finding whether a particular value or object exists in a collection.

Java provides different approaches depending on the collection type.

### Searching an ArrayList

Use `contains()` when checking for a value.

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> products = new ArrayList<>();

        products.add("Laptop");
        products.add("Phone");
        products.add("Tablet");

        if (products.contains("Phone")) {

            System.out.println("Product found.");

        } else {

            System.out.println("Product not found.");

        }

    }
}
```

Output:

```text
Product found.
```

### Searching Using a Loop

Sometimes you need to search using a particular condition.

Example:

```java
for (String product : products) {

    if (product.startsWith("P")) {

        System.out.println(product);

    }

}
```

Output:

```text
Phone
```

This checks every product and displays those whose names begin with P.

### Searching a HashMap

For a Map, you can search by key:

```java
students.containsKey("KU001");
```

Or by value:

```java
students.containsValue("Brian");
```

---

# 24. Removing Elements Safely During Iteration

One common mistake when working with collections is modifying a collection while looping through it.

For example, this can cause a `ConcurrentModificationException`:

```java
for (String name : students) {

    if (name.equals("Mary")) {

        students.remove(name);

    }

}
```

Why?

The enhanced for loop uses an iterator internally. Directly modifying the collection during iteration can invalidate that iterator.

### Correct Approach: Using Iterator

```java
import java.util.ArrayList;
import java.util.Iterator;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> students = new ArrayList<>();

        students.add("Brian");
        students.add("Mary");
        students.add("John");

        Iterator<String> iterator = students.iterator();

        while (iterator.hasNext()) {

            String name = iterator.next();

            if (name.equals("Mary")) {

                iterator.remove();

            }

        }

        System.out.println(students);

    }
}
```

Output:

```text
[Brian, John]
```

### Understanding the Iterator

```java
Iterator<String> iterator = students.iterator();
```

Creates an iterator for traversing the collection.

```java
iterator.hasNext()
```

Checks whether another element is available.

```java
iterator.next()
```

Retrieves the next element.

```java
iterator.remove()
```

Safely removes the current element through the iterator.

This is useful when you need to remove elements while processing a collection.

---

# 25. The Collections Utility Class

Java provides a utility class called `Collections`.

It contains useful operations for working with collections.

Some important methods include:

| Method | Purpose |
|---|---|
| `Collections.sort()` | Sorts a list |
| `Collections.reverse()` | Reverses a list |
| `Collections.shuffle()` | Randomly rearranges elements |
| `Collections.max()` | Finds the maximum element |
| `Collections.min()` | Finds the minimum element |
| `Collections.frequency()` | Counts occurrences of an element |
| `Collections.unmodifiableList()` | Creates an unmodifiable view of a list |
| `Collections.binarySearch()` | Searches a sorted list |

### Example: Finding the Highest and Lowest Marks

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> marks = new ArrayList<>();

        marks.add(75);
        marks.add(90);
        marks.add(65);
        marks.add(85);

        System.out.println("Highest: " + Collections.max(marks));

        System.out.println("Lowest: " + Collections.min(marks));

    }
}
```

Output:

```text
Highest: 90
Lowest: 65
```

### Counting Repeated Values

```java
int count = Collections.frequency(marks, 75);
```

This counts how many times 75 appears in the collection.

---

# 26. Java Streams: Processing Collection Data

Java Streams provide a way to process data using operations such as filtering, mapping and counting.

A Stream does not store the original data. It processes elements from a source such as a collection.

Consider a list of student marks.

We want to display only marks greater than or equal to 70.

Example:

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> marks = new ArrayList<>();

        marks.add(45);
        marks.add(80);
        marks.add(65);
        marks.add(90);
        marks.add(75);

        marks.stream()
             .filter(mark -> mark >= 70)
             .forEach(System.out::println);

    }
}
```

Output:

```text
80
90
75
```

### Understanding the Stream Operations

```java
marks.stream()
```

Creates a Stream from the collection.

```java
.filter(mark -> mark >= 70)
```

Keeps only elements that satisfy the condition.

The expression `mark -> mark >= 70` is a lambda expression.

It means: take each mark and check whether it is at least 70.

```java
.forEach(System.out::println)
```

Displays each remaining element.

The `::` syntax is called a method reference.

It refers to the `println()` method.

### Collecting Filtered Results

You can also store the filtered results in another collection.

```java
import java.util.List;

List<Integer> passed = marks.stream()
        .filter(mark -> mark >= 50)
        .toList();
```

The resulting list contains marks of 50 or above.

`toList()` returns an unmodifiable list in modern Java.

### Calculating the Average

```java
double average = marks.stream()
        .mapToInt(Integer::intValue)
        .average()
        .orElse(0.0);
```

Explanation:

- `stream()` creates the Stream.
- `mapToInt()` converts the values into an integer stream.
- `average()` calculates the average.
- `orElse(0.0)` supplies a default value if the stream is empty.

---

# 27. Common Collection Mistakes

| Mistake | Explanation | Correction |
|---|---|---|
| Accessing a non-existing list index | The requested index is outside the list | Check `size()` first |
| Adding the wrong data type | Generic type does not match | Use the correct type |
| Expecting HashSet to preserve insertion order | HashSet does not guarantee order | Use LinkedHashSet |
| Expecting HashMap to be sorted | HashMap does not guarantee sorted order | Use TreeMap when needed |
| Expecting a Set to contain duplicates | Sets enforce uniqueness | Use a List if duplicates are required |
| Removing directly during enhanced for iteration | Can cause concurrent modification errors | Use Iterator or another safe approach |
| Confusing Map keys with values | Maps store key-value relationships | Use `getKey()` and `getValue()` when iterating |
| Assuming PriorityQueue iteration is sorted | Its iterator does not guarantee sorted traversal | Repeatedly use `poll()` |

---

# 28. PRACTICAL PROJECT 1: STUDENT RECORD MANAGEMENT

Let's build a simple system that stores and manages student records using an ArrayList.

### Step 1: Create a File

```text
StudentManagement.java
```

### Step 2: Write the Code

```java
import java.util.ArrayList;
import java.util.Scanner;

public class StudentManagement {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        ArrayList<String> students = new ArrayList<>();

        students.add("Brian");
        students.add("Mary");
        students.add("John");

        System.out.println("===== STUDENT MANAGEMENT =====");

        System.out.println("Registered students:");

        for (String student : students) {

            System.out.println(student);

        }

        System.out.print("Enter a new student name: ");

        String newStudent = input.nextLine();

        students.add(newStudent);

        System.out.println("\nUpdated student list:");

        for (String student : students) {

            System.out.println(student);

        }

        input.close();

    }
}
```

### Step 3: Understand the Program

```java
ArrayList<String> students = new ArrayList<>();
```

Creates an ArrayList for student names.

The next three statements add existing students.

```java
for (String student : students)
```

Displays every student already stored.

```java
String newStudent = input.nextLine();
```

Receives a new student name.

```java
students.add(newStudent);
```

Adds the new student to the collection.

The final loop displays the updated list.

### Step 4: Run the Program

Compile:

```bash
javac StudentManagement.java
```

Run:

```bash
java StudentManagement
```

Example:

```text
===== STUDENT MANAGEMENT =====

Registered students:
Brian
Mary
John

Enter a new student name: Grace

Updated student list:
Brian
Mary
John
Grace
```

---

# 29. PRACTICAL PROJECT 2: INVENTORY MANAGEMENT USING HASHMAP

Now let's create a small inventory system.

Each product will have:
- A product code.
- A product name.
- A quantity in stock.

For simplicity, we will use a HashMap where the product code is the key and the product name is the value.

### Step 1: Create a File

```text
InventorySystem.java
```

### Step 2: Write the Code

```java
import java.util.HashMap;
import java.util.Scanner;

public class InventorySystem {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        HashMap<String, String> products = new HashMap<>();

        products.put("P001", "Laptop");
        products.put("P002", "Phone");
        products.put("P003", "Tablet");

        System.out.print("Enter product code: ");

        String code = input.nextLine();

        if (products.containsKey(code)) {

            System.out.println("Product found: " + products.get(code));

        } else {

            System.out.println("Product not found.");

        }

        System.out.println("\nAvailable products:");

        for (String productCode : products.keySet()) {

            System.out.println(
                productCode + " - " + products.get(productCode)
            );

        }

        input.close();

    }
}
```

### Step 3: Understand the Program

```java
HashMap<String, String> products = new HashMap<>();
```

Creates a collection that stores product codes and names.

```java
products.put("P001", "Laptop");
```

Stores Laptop using P001 as its key.

```java
products.containsKey(code)
```

Checks whether the entered product code exists.

```java
products.get(code)
```

Retrieves the product name associated with that code.

```java
products.keySet()
```

Returns a Set containing all the product codes.

The loop processes every product code and retrieves its associated name.

### Step 4: Run the Program

Compile:

```bash
javac InventorySystem.java
```

Run:

```bash
java InventorySystem
```

Example:

```text
Enter product code: P001

Product found: Laptop

Available products:
P001 - Laptop
P002 - Phone
P003 - Tablet
```

**Limitation:** This example stores only product codes and names. A real inventory system would also track quantities, prices, stock changes and database records.

---

# 30. PRACTICAL PROJECT 3: STUDENT MARKS ANALYZER

This project combines ArrayList, loops and Stream operations.

### Step 1: Create a File

```text
MarksAnalyzer.java
```

### Step 2: Write the Code

```java
import java.util.ArrayList;
import java.util.Collections;

public class MarksAnalyzer {

    public static void main(String[] args) {

        ArrayList<Integer> marks = new ArrayList<>();

        marks.add(75);
        marks.add(85);
        marks.add(45);
        marks.add(90);
        marks.add(60);

        int total = 0;

        for (int mark : marks) {

            total += mark;

        }

        double average = (double) total / marks.size();

        int highest = Collections.max(marks);

        int lowest = Collections.min(marks);

        long passed = marks.stream()
                .filter(mark -> mark >= 50)
                .count();

        long failed = marks.stream()
                .filter(mark -> mark < 50)
                .count();

        System.out.println("===== MARKS ANALYSIS =====");

        System.out.println("All marks: " + marks);

        System.out.println("Total: " + total);

        System.out.println("Average: " + average);

        System.out.println("Highest: " + highest);

        System.out.println("Lowest: " + lowest);

        System.out.println("Passed: " + passed);

        System.out.println("Failed: " + failed);

    }
}
```

### Step 3: Understand the Important Operations

**Storing marks**

```java
ArrayList<Integer> marks = new ArrayList<>();
```

Creates a collection for student marks.

**Calculating the total**

```java
int total = 0;

for (int mark : marks) {

    total += mark;

}
```

Starts the total at zero and adds every mark.

**Calculating the average**

```java
double average = (double) total / marks.size();
```

Divides the total by the number of marks.

The cast `(double)` ensures decimal division rather than integer division.

**Finding the highest mark**

```java
int highest = Collections.max(marks);
```

Finds the largest value.

**Finding the lowest mark**

```java
int lowest = Collections.min(marks);
```

Finds the smallest value.

**Counting students who passed**

```java
long passed = marks.stream()
        .filter(mark -> mark >= 50)
        .count();
```

Filters marks of 50 or above and counts them.

**Counting students who failed**

```java
long failed = marks.stream()
        .filter(mark -> mark < 50)
        .count();
```

Counts marks below 50.

### Step 4: Expected Output

```text
===== MARKS ANALYSIS =====

All marks: [75, 85, 45, 90, 60]
Total: 355
Average: 71.0
Highest: 90
Lowest: 45
Passed: 4
Failed: 1
```

---

# 31. Part 3 Practical Exercises

Complete these exercises independently.

### Exercise 1: Shopping List

Create an ArrayList that stores shopping items.

Your program should:
- Add five products.
- Display all products.
- Remove one product.
- Display the updated list.

### Exercise 2: Unique Phone Numbers

Create a HashSet that stores phone numbers.

Add several numbers, including a duplicate.

Display the collection and explain what happens to the duplicate.

### Exercise 3: Student Registration System

Use a HashMap to store student registration numbers and names.

Allow the user to search for a student using their registration number.

### Exercise 4: Sorting Student Marks

Create an ArrayList of marks.

Sort the marks:
- From lowest to highest.
- From highest to lowest.

### Exercise 5: Customer Queue

Create a Queue representing customers waiting for service.

Add five customers and process them one by one.

### Exercise 6: Product Search

Create an ArrayList containing product names.

Allow the user to enter a product name and check whether it exists.

### Exercise 7: Student Objects

Create a Student class containing:
- Name.
- Registration number.
- Marks.

Store multiple Student objects inside an ArrayList and display their information.

### Exercise 8: Marks Analyzer

Create a program that calculates:
- Total marks.
- Average marks.
- Highest mark.
- Lowest mark.
- Number of students who passed.
- Number of students who failed.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

# 32. Lesson Summary

You have studied how Java organizes and processes groups of information.

| Concept | Purpose |
|---|---|
| Collections Framework | Provides interfaces and implementations for managing groups of objects |
| List | Stores ordered elements and permits duplicates |
| ArrayList | Implements a resizable array |
| LinkedList | Implements a doubly linked list |
| Generics | Provides type-safe reusable data structures |
| Set | Stores unique elements |
| HashSet | Stores unique elements without guaranteed ordering |
| LinkedHashSet | Stores unique elements in insertion order |
| TreeSet | Stores unique elements in sorted order |
| Map | Stores key-value pairs |
| HashMap | Stores key-value pairs without guaranteed iteration order |
| LinkedHashMap | Maintains insertion order |
| TreeMap | Sorts entries according to keys |
| Queue | Processes elements according to queue ordering rules |
| PriorityQueue | Processes elements according to priority |
| Iterator | Traverses a collection |
| Collections | Provides utility methods for working with collections |
| Streams | Supports declarative processing of data |

---

# 33. KAI ASSESSMENT

Answer the following questions to demonstrate your understanding.

## SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is the primary purpose of Java Collections?

A. To create graphical interfaces.

B. To store and manage groups of objects.

C. To compile Java programs.

D. To connect Java to the internet.

**Question 2**

Which collection allows duplicate elements and supports indexed access?

A. HashSet.

B. TreeSet.

C. ArrayList.

D. HashMap.

**Question 3**

Which collection does not allow duplicate elements?

A. ArrayList.

B. HashSet.

C. LinkedList.

D. Vector.

**Question 4**

Which collection maintains insertion order while preventing duplicates?

A. HashSet.

B. TreeSet.

C. LinkedHashSet.

D. PriorityQueue.

**Question 5**

Which collection stores data as key-value pairs?

A. ArrayList.

B. HashMap.

C. HashSet.

D. LinkedList.

**Question 6**

Which Map implementation sorts entries according to their keys?

A. HashMap.

B. LinkedHashMap.

C. TreeMap.

D. ArrayList.

**Question 7**

What does FIFO mean?

A. First In, First Out.

B. First In, Final Out.

C. Fast Input, Fast Output.

D. Final In, First Out.

**Question 8**

Which method retrieves and removes the front element of a Queue?

A. `peek()`.

B. `poll()`.

C. `contains()`.

D. `size()`.

**Question 9**

Which Java feature allows collections to enforce data types?

A. Recursion.

B. Generics.

C. Inheritance.

D. Constructors.

**Question 10**

Which class provides utility methods such as sorting and reversing lists?

A. Scanner.

B. Collections.

C. String.

D. System.

## SECTION B: CONCEPTUAL QUESTIONS

**Question 11**

Explain the difference between an ArrayList and a normal Java array.

**Question 12**

Explain the difference between ArrayList and LinkedList.

**Question 13**

What is the purpose of generics?

**Question 14**

Explain the difference between HashSet, LinkedHashSet and TreeSet.

**Question 15**

What is the difference between a List and a Map?

**Question 16**

Explain the relationship between keys and values in a HashMap.

**Question 17**

Why does Java use the FIFO principle in traditional queue processing?

**Question 18**

What is an Iterator, and why is it useful?

**Question 19**

Explain what happens when you add an existing key to a HashMap with a different value.

**Question 20**

What is the purpose of Java Streams?

## SECTION C: PRACTICAL PROGRAMMING

**Question 21: ArrayList**

Create an ArrayList that stores ten integers.

Your program should:
- Add ten numbers.
- Display the numbers.
- Calculate their total.
- Calculate their average.

**Question 22: HashSet**

Create a HashSet that stores programming language names.

Add at least five languages, including a duplicate.

Display the collection.

**Question 23: HashMap**

Create a HashMap that stores product codes and product names.

Your program should:
- Add five products.
- Retrieve a product using its code.
- Update an existing product.
- Remove a product.
- Display all remaining products.

**Question 24: Queue**

Create a customer service queue.

Add five customers and serve them one by one.

Display the customer being served at each stage.

**Question 25: Sorting**

Create a collection of student marks.

Sort them in ascending and descending order.

**Question 26: Student Objects**

Create a Student class and store at least five Student objects in an ArrayList.

Display their names and marks.

## SECTION D: DEBUGGING AND CODE ANALYSIS

**Question 27: Identify the Problem**

Study this code:

```java
ArrayList<String> names = new ArrayList<>();

names.add("Brian");
names.add("Mary");

System.out.println(names.get(5));
```

What is wrong with this code?

Explain how to correct it.

**Question 28: Predict the Output**

What will this program display?

```java
import java.util.HashSet;

public class Main {

    public static void main(String[] args) {

        HashSet<Integer> numbers = new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(10);
        numbers.add(30);

        System.out.println(numbers.size());

    }
}
```

Explain why.

**Question 29: Understand a HashMap**

Study:

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<Integer, String> students = new HashMap<>();

        students.put(1, "Brian");

        students.put(2, "Mary");

        students.put(1, "John");

        System.out.println(students.get(1));

    }
}
```

What will be displayed?

Explain what happens to the original value associated with key 1.

**Question 30: Understand a Queue**

Study:

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {

    public static void main(String[] args) {

        Queue<String> customers = new LinkedList<>();

        customers.offer("Brian");
        customers.offer("Mary");
        customers.offer("John");

        System.out.println(customers.poll());

        System.out.println(customers.peek());

    }
}
```

Write the expected output and explain the difference between `poll()` and `peek()`.

---

# 34. FINAL PRACTICAL CHALLENGE: MINI INVENTORY MANAGEMENT SYSTEM

Build a Java inventory management application that uses multiple collection types.

### Application Requirements

Your system should support:

1. Adding new products.
2. Searching for products using their product codes.
3. Updating product information.
4. Removing products.
5. Displaying all available products.
6. Displaying unique product categories.
7. Sorting products by product code.
8. Exiting the application.

### Collection Requirements

Use:

**HashMap**

Store product codes and their associated product information.

**HashSet**

Store unique product categories.

**ArrayList**

Use a list where appropriate for displaying or processing product records.

### Expected Menu

```text
===== INVENTORY MANAGEMENT SYSTEM =====

1. Add Product
2. Search Product
3. Update Product
4. Remove Product
5. Display All Products
6. Display Categories
7. Sort Product Codes
8. Exit

Select an option:
```

### Technical Requirements

Your application should:

- Use generics.
- Use appropriate collection types.
- Use methods to organize operations.
- Validate user input.
- Prevent duplicate product codes.
- Use loops to keep the menu running.
- Handle searches for missing products.
- Display clear messages.

**Challenge:** Instead of storing only product names, create a `Product` class containing:

- Product code.
- Product name.
- Category.
- Price.
- Quantity.

Then store Product objects in your HashMap.

This is closer to how real inventory applications organize data.

---

# 35. SUBMIT YOUR WORK TO KAI

After completing the assessment and practical challenge, submit your answers and source code to Kai.

Kai should evaluate:

1. Understanding of the Java Collections Framework.
2. Ability to use List implementations.
3. Understanding of Set implementations.
4. Ability to work with Maps.
5. Understanding of Queues.
6. Correct use of generics.
7. Ability to sort and search collections.
8. Ability to store custom objects in collections.
9. Understanding of Iterators and Streams.
10. Ability to develop a practical collection-based application.

Kai should provide:

- Assessment score.
- Correct answers.
- Explanations for incorrect responses.
- Code corrections.
- Suggestions for improvement.
- Practical project feedback.
- Lesson completion status.

---

# 36. LESSON COMPLETION CHECKLIST

Before moving to the next lesson, confirm that you can:

- [ ] Explain the Java Collections Framework.
- [ ] Understand the difference between arrays and collections.
- [ ] Create and manipulate ArrayLists.
- [ ] Work with LinkedLists.
- [ ] Understand generics.
- [ ] Use HashSet.
- [ ] Use LinkedHashSet.
- [ ] Use TreeSet.
- [ ] Create and manipulate HashMaps.
- [ ] Understand LinkedHashMap and TreeMap.
- [ ] Work with Queues.
- [ ] Understand PriorityQueue.
- [ ] Iterate through collections.
- [ ] Sort and search collection data.
- [ ] Store custom objects in collections.
- [ ] Use Iterators safely.
- [ ] Process collections using Streams.
- [ ] Build practical applications using multiple collection types.

# LESSON COMPLETE

**Java: Collections and Data**

You have completed all four parts of this lesson.

**Part 4 of 4 — Lesson Complete**

### Recommended Next Lesson: Java Object-Oriented Programming (OOP)

In the next lesson, we will explore how Java organizes software around objects and classes.

Topics will include:
- Classes and objects.
- Constructors.
- Encapsulation.
- Inheritance.
- Polymorphism.
- Abstraction.
- Interfaces.
- Real-world object-oriented application development.