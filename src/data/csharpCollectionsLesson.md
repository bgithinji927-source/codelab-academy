# C# COLLECTIONS AND DATA

# PART 1: UNDERSTANDING ARRAYS AND COLLECTIONS

## 1. What Are Collections?

In programming, applications frequently need to work with multiple values rather than individual variables.

Imagine developing a student management system.

You might need to store:

- Names of 100 students.
- Their registration numbers.
- Their examination marks.
- Their courses.
- Their academic results.

You could create separate variables for every student:

```csharp
string student1 = "Brian";
string student2 = "Mary";
string student3 = "John";
string student4 = "Peter";
```

This approach becomes difficult to manage when the number of students increases.

Imagine creating 1,000 variables manually.

A better solution is to use a collection.

A **collection** is a structure that stores and organizes multiple values or objects so that a program can work with them efficiently.

C# provides several ways of storing collections of data.

Some important examples include:

| Collection | Purpose |
|---|---|
| Array | Stores a fixed number of elements of the same type. |
| `List<T>` | Stores a dynamically sized collection. |
| `Dictionary<TKey, TValue>` | Stores data as key-value pairs. |
| `HashSet<T>` | Stores unique elements. |
| `Queue<T>` | Stores elements using First In, First Out (FIFO). |
| `Stack<T>` | Stores elements using Last In, First Out (LIFO). |
| `LinkedList<T>` | Stores elements as linked nodes. |
| `SortedDictionary<TKey, TValue>` | Stores key-value pairs ordered by key. |

The `<T>` notation represents a generic type parameter. It allows a collection to work with different data types while maintaining type safety.

For example:

```csharp
List<int> numbers;
List<string> names;
List<double> prices;
```

Each list stores a different type of data.

---

## 2. Understanding Arrays

An array is a collection that stores multiple elements of the same data type.

Unlike a variable that stores one value, an array can store several values under one name.

Example:

```csharp
int[] marks = { 80, 75, 90, 65, 88 };
```

This creates an integer array containing five marks.

### Understanding the Declaration

```csharp
int[] marks
```

Declares an array called `marks` that stores integers.

The square brackets `[]` indicate that the variable is an array.

```csharp
{ 80, 75, 90, 65, 88 }
```

Provides the five values stored in the array.

### Accessing Array Elements

Each element has an index.

An index identifies the position of an element in an array.

**Important:** C# arrays use zero-based indexing.

This means the first element has index `0`, not `1`.

Consider:

```csharp
int[] marks = { 80, 75, 90, 65, 88 };

Console.WriteLine(marks[0]);
Console.WriteLine(marks[1]);
Console.WriteLine(marks[2]);
Console.WriteLine(marks[3]);
Console.WriteLine(marks[4]);
```

Output:

```text
80
75
90
65
88
```

The positions are:

| Index | Value |
|---:|---:|
| 0 | 80 |
| 1 | 75 |
| 2 | 90 |
| 3 | 65 |
| 4 | 88 |

To access the third element, use:

```csharp
marks[2]
```

Because indexing begins at zero.

### Modifying Array Elements

You can change an element by assigning a new value to its index.

Example:

```csharp
int[] marks = { 80, 75, 90, 65, 88 };

marks[1] = 95;

Console.WriteLine(marks[1]);
```

Output:

```text
95
```

Explanation:

- The array initially stores five marks.
- `marks[1]` identifies the second element.
- `marks[1] = 95` replaces the original value of 75.
- `Console.WriteLine()` displays the updated value.

The other elements remain unchanged.

---

## 3. Creating Arrays Using Different Approaches

C# provides several ways to create arrays.

### A. Array Initialization

You can declare and initialize an array in one statement.

```csharp
string[] students = { "Brian", "Mary", "John" };
```

The compiler determines the array length from the supplied values.

### B. Specifying the Array Size

You can specify the number of elements before assigning values.

```csharp
int[] numbers = new int[5];
```

This creates an integer array with five positions.

For an integer array, the initial values are zero.

You can assign values later:

```csharp
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
```

### C. Using the `new` Keyword with Values

```csharp
int[] numbers = new int[] { 10, 20, 30, 40 };
```

Creates and initializes an array containing four elements.

### D. Using Array Inference

You can use `var` when the compiler can determine the array type.

```csharp
var names = new[] { "Brian", "Mary", "John" };
```

The compiler infers that `names` is a `string[]`.

---

## 4. Understanding Array Length

Arrays have a fixed size.

Once an array is created, its length cannot be increased or decreased.

You can find its length using the `Length` property.

Example:

```csharp
int[] numbers = { 10, 20, 30, 40, 50 };

Console.WriteLine(numbers.Length);
```

Output:

```text
5
```

Explanation:

- `numbers` represents the array.
- `.Length` retrieves the total number of elements.
- The array contains five elements.

### Why Is Length Important?

Suppose you want to display every element in an array.

Instead of writing separate statements for each value, you can use a loop.

```csharp
int[] marks = { 80, 75, 90, 65, 88 };

for (int i = 0; i < marks.Length; i++)
{
    Console.WriteLine(marks[i]);
}
```

Explanation:

**Line 1:**

```csharp
int[] marks = { 80, 75, 90, 65, 88 };
```

Creates an array containing five marks.

**Line 2:**

```csharp
for (int i = 0; i < marks.Length; i++)
```

Creates a loop that begins at index zero and continues while the index is smaller than the array length.

**Line 3:**

```csharp
Console.WriteLine(marks[i]);
```

Displays the element at the current index.

**Line 4:**

```csharp
i++
```

Increases the index by one after each iteration.

Output:

```text
80
75
90
65
88
```

This approach allows you to process arrays of different sizes without manually writing additional statements.

---

## 5. The `foreach` Loop with Arrays

C# provides the `foreach` loop for processing every element in a collection.

Example:

```csharp
string[] students = { "Brian", "Mary", "John" };

foreach (string student in students)
{
    Console.WriteLine(student);
}
```

Explanation:

```csharp
foreach (string student in students)
```

Tells C# to retrieve each element from the `students` array.

The current element is temporarily stored in the variable `student`.

```csharp
Console.WriteLine(student);
```

Displays the current student's name.

Output:

```text
Brian
Mary
John
```

### `for` vs `foreach`

| Feature | `for` | `foreach` |
|---|---|---|
| Uses an index | Usually | No |
| Accesses elements sequentially | Yes | Yes |
| Allows easy index-based updates | Yes | Not directly |
| Useful for fixed index ranges | Yes | Less suitable |
| Useful for reading every element | Yes | Yes |

Use `for` when you need to work with indexes.

Use `foreach` when you simply need to process every element.

---

## 6. Multidimensional Arrays

A multidimensional array stores information across multiple dimensions.

A common example is a two-dimensional array.

A two-dimensional array organizes data into rows and columns.

Imagine a table containing student marks for three subjects.

| Student | Mathematics | Programming | Database |
|---|---:|---:|---:|
| Brian | 80 | 90 | 75 |
| Mary | 70 | 85 | 80 |
| John | 65 | 75 | 90 |

This information can be represented using a two-dimensional array.

```csharp
int[,] marks =
{
    { 80, 90, 75 },
    { 70, 85, 80 },
    { 65, 75, 90 }
};
```

The comma inside `[,]` indicates a two-dimensional array.

### Accessing Values

```csharp
Console.WriteLine(marks[0, 0]);
Console.WriteLine(marks[0, 1]);
Console.WriteLine(marks[1, 2]);
```

Output:

```text
80
90
80
```

The first index identifies the row.

The second index identifies the column.

For example:

```csharp
marks[1, 2]
```

Accesses the second row and third column.

### Looping Through a Two-Dimensional Array

```csharp
int[,] marks =
{
    { 80, 90, 75 },
    { 70, 85, 80 },
    { 65, 75, 90 }
};

for (int row = 0; row < marks.GetLength(0); row++)
{
    for (int column = 0; column < marks.GetLength(1); column++)
    {
        Console.Write(marks[row, column] + " ");
    }

    Console.WriteLine();
}
```

Explanation:

```csharp
marks.GetLength(0)
```

Returns the number of rows.

```csharp
marks.GetLength(1)
```

Returns the number of columns.

The outer loop moves through the rows.

The inner loop moves through the columns in the current row.

Output:

```text
80 90 75
70 85 80
65 75 90
```

### Rectangular Arrays vs Jagged Arrays

C# also supports jagged arrays.

A jagged array is an array whose elements are themselves arrays.

Example:

```csharp
int[][] marks =
{
    new int[] { 80, 90 },
    new int[] { 70, 85, 80 },
    new int[] { 65 }
};
```

Each inner array can have a different length.

Comparison:

| Feature | Rectangular array | Jagged array |
|---|---|---|
| Structure | Rows and columns | Array of arrays |
| Row lengths | Equal | Can differ |
| Declaration | `int[,]` | `int[][]` |
| Example | `marks[0, 1]` | `marks[0][1]` |

---

## 7. Limitations of Arrays

Arrays are useful, but they have limitations.

### A. Fixed Size

An array cannot grow or shrink after creation.

```csharp
int[] numbers = new int[3];
```

This array always has three positions.

If you later need to store ten numbers, you must create another array or use a resizable collection.

### B. Inserting Elements

Arrays do not provide a built-in `Add()` method.

### C. Removing Elements

Arrays do not provide a built-in `Remove()` method that changes their length.

You can create a new array or use other operations to manage the data.

### D. Managing Large Datasets

Arrays are not always convenient when information frequently needs to be added, removed, or searched.

This is where collections such as `List<T>` become useful.

**Part 1 Progress: Arrays and fundamental collection concepts completed.**

Progress: Part 1 of 4

---

# PART 2: GENERIC COLLECTIONS AND DATA OPERATIONS

## 8. Understanding Generic Collections

C# provides generic collections that can store different types of information while maintaining type safety.

A generic collection is a collection whose element type is specified when it is declared.

For example:

```csharp
List<int> numbers;
```

This declares a list that stores integers.

```csharp
List<string> students;
```

This declares a list that stores strings.

```csharp
List<decimal> prices;
```

This declares a list that stores decimal values.

The type inside angle brackets is called a type argument.

Generic collections help prevent accidentally storing incompatible data types.

For example:

```csharp
List<int> numbers = new List<int>();

numbers.Add(10);

// numbers.Add("Brian"); // Compilation error
```

The list accepts integers, not strings.

---

## 9. The `List<T>` Collection

A `List<T>` is a dynamically sized collection.

Unlike arrays, lists can grow and shrink as elements are added or removed.

Lists are part of the `System.Collections.Generic` namespace.

Example:

```csharp
using System.Collections.Generic;

List<string> students = new List<string>();

students.Add("Brian");
students.Add("Mary");
students.Add("John");

Console.WriteLine(students.Count);
```

Output:

```text
3
```

### Understanding the Code

```csharp
List<string> students = new List<string>();
```

Creates an empty list that stores strings.

```csharp
students.Add("Brian");
```

Adds Brian to the list.

```csharp
students.Add("Mary");
```

Adds Mary.

```csharp
students.Add("John");
```

Adds John.

```csharp
students.Count
```

Returns the current number of elements.

Unlike an array's `Length`, a list's `Count` changes when elements are added or removed.

### Adding Multiple Elements

You can add several elements using `AddRange()`.

```csharp
List<int> numbers = new List<int>();

numbers.AddRange(new int[] { 10, 20, 30, 40 });

foreach (int number in numbers)
{
    Console.WriteLine(number);
}
```

Output:

```text
10
20
30
40
```

`AddRange()` adds every element from the supplied collection.

---

## 10. Accessing and Updating List Elements

Lists use zero-based indexing, just like arrays.

Example:

```csharp
List<string> students = new List<string>
{
    "Brian",
    "Mary",
    "John"
};

Console.WriteLine(students[0]);
```

Output:

```text
Brian
```

You can update an element by assigning a new value to its index.

```csharp
students[1] = "Peter";

Console.WriteLine(students[1]);
```

Output:

```text
Peter
```

The second element changes from Mary to Peter.

### Important Difference Between `Count` and `Capacity`

A list has two important properties.

**Count**

The number of elements currently stored.

**Capacity**

The number of elements the list can hold before it needs to increase its internal storage.

Example:

```csharp
List<int> numbers = new List<int>();

numbers.Add(10);
numbers.Add(20);

Console.WriteLine(numbers.Count);
Console.WriteLine(numbers.Capacity);
```

The count is 2.

The capacity is at least 2, but its exact value depends on the list's allocation strategy and implementation.

You should use `Count` when checking how many elements are actually stored.

---

## 11. Removing Elements from a List

C# provides several methods for removing list elements.

### A. Remove()

Removes the first matching value.

```csharp
List<string> students = new List<string>
{
    "Brian",
    "Mary",
    "John"
};

students.Remove("Mary");
```

The list now contains Brian and John.

### B. RemoveAt()

Removes an element at a specified index.

```csharp
students.RemoveAt(0);
```

Removes the element at index zero.

### C. RemoveRange()

Removes a specified number of elements starting at a particular index.

```csharp
List<int> numbers = new List<int>
{
    10, 20, 30, 40, 50
};

numbers.RemoveRange(1, 2);
```

This removes two elements starting at index 1.

The removed values are 20 and 30.

The remaining list is:

```text
10
40
50
```

### D. Clear()

Removes all elements.

```csharp
students.Clear();
```

The list becomes empty.

### E. RemoveAll()

Removes every element that satisfies a condition.

Example:

```csharp
List<int> marks = new List<int>
{
    45, 70, 35, 90, 60
};

marks.RemoveAll(mark => mark < 50);
```

This removes all marks below 50.

Remaining values:

```text
70
90
60
```

The expression `mark => mark < 50` is a lambda expression.

It describes the condition used to decide which elements should be removed.

---

## 12. Searching in Lists

You often need to determine whether a particular value exists in a collection.

C# provides several useful methods.

### A. Contains()

Checks whether an element exists.

```csharp
List<string> students = new List<string>
{
    "Brian",
    "Mary",
    "John"
};

bool exists = students.Contains("Mary");

Console.WriteLine(exists);
```

Output:

```text
True
```

### B. IndexOf()

Returns the index of the first matching element.

```csharp
int position = students.IndexOf("John");

Console.WriteLine(position);
```

Output:

```text
2
```

If the element does not exist, `IndexOf()` returns `-1`.

### C. Find()

Returns the first element that matches a condition.

```csharp
List<int> marks = new List<int>
{
    35, 45, 60, 80, 90
};

int result = marks.Find(mark => mark >= 80);

Console.WriteLine(result);
```

Output:

```text
80
```

### D. FindAll()

Returns all elements matching a condition.

```csharp
List<int> marks = new List<int>
{
    35, 45, 60, 80, 90
};

List<int> highMarks = marks.FindAll(mark => mark >= 60);

foreach (int mark in highMarks)
{
    Console.WriteLine(mark);
}
```

Output:

```text
60
80
90
```

### E. Exists()

Checks whether at least one element satisfies a condition.

```csharp
bool hasHighMark = marks.Exists(mark => mark >= 90);

Console.WriteLine(hasHighMark);
```

Output:

```text
True
```

---

## 13. Sorting and Reversing Lists

C# provides methods for organizing collection elements.

### A. Sort()

Sorts elements in ascending order when the element type has a suitable default comparer.

Example:

```csharp
List<int> numbers = new List<int>
{
    50, 10, 40, 20, 30
};

numbers.Sort();

foreach (int number in numbers)
{
    Console.WriteLine(number);
}
```

Output:

```text
10
20
30
40
50
```

### B. Reverse()

Reverses the current order of the elements.

```csharp
numbers.Reverse();
```

The resulting list is:

```text
50
40
30
20
10
```

Notice that `Reverse()` reverses the existing order. It does not independently calculate a descending sort.

### C. Custom Sorting

You can provide your own comparison logic.

Example:

```csharp
List<int> numbers = new List<int>
{
    10, 50, 20, 40, 30
};

numbers.Sort((a, b) => b.CompareTo(a));
```

This sorts the values in descending order.

The comparison function compares two values and determines their relative order.

---

## 14. Understanding Dictionaries

A dictionary stores information as key-value pairs.

Each key identifies an associated value.

Think of a student registration system.

You could store student information using registration numbers as keys.

| Registration Number | Student |
|---|---|
| REG001 | Brian |
| REG002 | Mary |
| REG003 | John |

In C#, this can be represented using a dictionary.

```csharp
Dictionary<string, string> students = new Dictionary<string, string>();

students.Add("REG001", "Brian");
students.Add("REG002", "Mary");
students.Add("REG003", "John");
```

### Understanding the Declaration

```csharp
Dictionary<string, string>
```

The first `string` represents the key type.

The second `string` represents the value type.

Therefore, this dictionary stores string keys associated with string values.

### Retrieving a Value

```csharp
Console.WriteLine(students["REG001"]);
```

Output:

```text
Brian
```

The key identifies the value.

### Updating a Dictionary

You can update an existing value using its key.

```csharp
students["REG002"] = "Mary Wanjiku";
```

The value associated with `REG002` changes.

### Adding or Updating with an Indexer

The indexer can also add an entry if the key does not already exist.

```csharp
students["REG004"] = "Peter";
```

If `REG004` is new, it is added.

If the key already exists, its value is replaced.

### Removing Dictionary Entries

```csharp
students.Remove("REG003");
```

Removes the entry associated with `REG003`.

### Checking Whether a Key Exists

```csharp
if (students.ContainsKey("REG001"))
{
    Console.WriteLine("Student found.");
}
```

`ContainsKey()` checks whether the dictionary contains the specified key.

### Safe Retrieval with TryGetValue()

Directly accessing a missing key using the indexer throws a `KeyNotFoundException`.

A safer approach is:

```csharp
if (students.TryGetValue("REG001", out string? name))
{
    Console.WriteLine(name);
}
else
{
    Console.WriteLine("Student not found.");
}
```

Explanation:

- `TryGetValue()` searches for the specified key.
- If the key exists, its value is assigned to `name`.
- The method returns `true`.
- If the key does not exist, the `else` block executes.

### Important Dictionary Rules

- Keys must be unique.
- Values do not need to be unique.
- Dictionary keys cannot be null for the standard generic `Dictionary<TKey, TValue>`.
- Dictionary values can be null when the value type and nullable annotations permit it.
- Dictionary lookup is typically very fast on average.

---

## 15. Understanding HashSet

A `HashSet<T>` is a collection that stores unique elements.

This means it does not allow duplicate elements according to its equality rules.

Example:

```csharp
HashSet<int> numbers = new HashSet<int>();

numbers.Add(10);
numbers.Add(20);
numbers.Add(30);
numbers.Add(20);

Console.WriteLine(numbers.Count);
```

Output:

```text
3
```

Although 20 was added twice, the set contains only one occurrence.

### Adding Elements

```csharp
numbers.Add(40);
```

Adds 40 if it does not already exist.

The `Add()` method returns a Boolean indicating whether the element was successfully added.

Example:

```csharp
bool added = numbers.Add(20);

Console.WriteLine(added);
```

Output:

```text
False
```

The value already exists.

### Checking for an Element

```csharp
Console.WriteLine(numbers.Contains(30));
```

Output:

```text
True
```

### Removing an Element

```csharp
numbers.Remove(10);
```

Removes the value 10.

### When Is HashSet Useful?

Consider an application that records people who have registered for an event.

You do not want the same registration identifier to be counted twice.

A `HashSet<string>` can help enforce uniqueness.

### HashSet Operations

Hash sets also support mathematical set operations.

Suppose:

```csharp
HashSet<int> first = new HashSet<int>
{
    1, 2, 3, 4
};

HashSet<int> second = new HashSet<int>
{
    3, 4, 5, 6
};
```

**Union**

Combines elements from both sets.

```csharp
first.UnionWith(second);
```

Result:

```text
1, 2, 3, 4, 5, 6
```

**Intersection**

Keeps only elements found in both sets.

```csharp
first.IntersectWith(second);
```

If applied to the original sets, the result in `first` would be:

```text
3, 4
```

**Difference**

Keeps elements in the first set that are not in the second.

```csharp
first.ExceptWith(second);
```

Applied to the original sets, the result would be:

```text
1, 2
```

These operations are useful for comparing groups of data.

**Important:** A `HashSet<T>` does not guarantee a particular iteration order.

---

## 16. Understanding Queue

A queue is a collection that follows the First In, First Out principle.

This is commonly abbreviated as FIFO.

The first element added is the first element removed.

Imagine a customer service system.

Customers join a waiting line. The person who joined first is normally served first.

C# provides `Queue<T>` for this purpose.

Example:

```csharp
Queue<string> customers = new Queue<string>();

customers.Enqueue("Brian");
customers.Enqueue("Mary");
customers.Enqueue("John");
```

### Understanding Enqueue()

`Enqueue()` adds an element to the end of the queue.

The queue now contains:

```text
Brian → Mary → John
```

### Understanding Dequeue()

```csharp
string customer = customers.Dequeue();

Console.WriteLine(customer);
```

Output:

```text
Brian
```

The first customer is removed from the queue.

The remaining queue contains Mary and John.

### Understanding Peek()

`Peek()` returns the next element without removing it.

```csharp
Console.WriteLine(customers.Peek());
```

Output:

```text
Mary
```

Mary remains in the queue.

### Checking the Queue Count

```csharp
Console.WriteLine(customers.Count);
```

Returns the number of elements currently stored.

### Checking Whether a Queue Is Empty

Before calling `Dequeue()` or `Peek()`, check whether the queue contains an element.

```csharp
if (customers.Count > 0)
{
    Console.WriteLine(customers.Dequeue());
}
```

Calling these operations on an empty queue throws an exception.

### Real-World Applications

Queues are useful for:

- Customer service systems.
- Print jobs.
- Task processing.
- Background operations.
- Message processing.
- Scheduling requests.

---

## 17. Understanding Stack

A stack is a collection that follows the Last In, First Out principle.

This is abbreviated as LIFO.

The last element added is the first element removed.

Imagine a stack of plates.

The plate placed at the top is normally the first one removed.

C# provides `Stack<T>`.

Example:

```csharp
Stack<string> pages = new Stack<string>();

pages.Push("Home");
pages.Push("Courses");
pages.Push("Lessons");
```

### Understanding Push()

`Push()` adds an element to the top of the stack.

The stack conceptually looks like:

```text
Top → Lessons
       Courses
       Home
```

### Understanding Pop()

```csharp
string page = pages.Pop();

Console.WriteLine(page);
```

Output:

```text
Lessons
```

The last item added is removed first.

### Understanding Peek()

```csharp
Console.WriteLine(pages.Peek());
```

Returns the current top element without removing it.

### Checking Whether a Stack Is Empty

```csharp
if (pages.Count > 0)
{
    Console.WriteLine(pages.Pop());
}
```

This prevents calling `Pop()` on an empty stack.

### Real-World Applications

Stacks are useful for:

- Undo operations.
- Browser navigation history.
- Expression evaluation.
- Function call management.
- Backtracking algorithms.
- Reversing sequences.

---

## 18. Understanding LinkedList

A `LinkedList<T>` stores elements as nodes.

Each node contains a value and links to other nodes.

In a standard C# `LinkedList<T>`, each node is connected to both its previous and next node.

Example:

```csharp
LinkedList<string> tasks = new LinkedList<string>();

tasks.AddLast("Design database");
tasks.AddLast("Build API");
tasks.AddLast("Test application");
```

The list conceptually looks like:

```text
Design database
       ↓
Build API
       ↓
Test application
```

### Adding at the Beginning

```csharp
tasks.AddFirst("Create project");
```

Adds an item to the beginning.

### Adding at the End

```csharp
tasks.AddLast("Deploy application");
```

Adds an item to the end.

### Removing Elements

```csharp
tasks.Remove("Build API");
```

Removes the first matching value.

### Understanding Nodes

You can work directly with nodes.

```csharp
LinkedListNode<string>? firstNode = tasks.First;

if (firstNode != null)
{
    Console.WriteLine(firstNode.Value);
}
```

`First` returns the first node.

The null check is important because the list might be empty.

### When Is LinkedList Useful?

It can be useful when you need frequent insertion or removal around known nodes.

However, finding an element by value still requires traversal.

A linked list is not automatically faster than a `List<T>` for every insertion or removal. A `List<T>` often performs better for indexed access and many general-purpose operations.

---

## 19. Comparing the Main Collections

| Collection | Stores | Allows duplicates? | Maintains useful ordering? | Main purpose |
|---|---|---|---|---|
| Array | Elements | Yes | Index order | Fixed-size storage |
| `List<T>` | Elements | Yes | Insertion order | Dynamic storage |
| `Dictionary<TKey,TValue>` | Key-value pairs | Keys: No | No guaranteed insertion-order contract | Fast key-based lookup |
| `HashSet<T>` | Unique elements | No | No guaranteed order | Removing duplicates |
| `Queue<T>` | Elements | Yes | FIFO | Processing waiting items |
| `Stack<T>` | Elements | Yes | LIFO | Undo and backtracking |
| `LinkedList<T>` | Linked nodes | Yes | Linked-list order | Node-based insertion and removal |

The best collection depends on the operations your application needs.

For example:

- Use an array for a fixed set of values.
- Use a list for a changing set of students.
- Use a dictionary to retrieve students by registration number.
- Use a hash set to track unique registrations.
- Use a queue to process customer requests.
- Use a stack to implement undo functionality.

---

## 20. Sorting Dictionaries and Sorted Collections

A normal dictionary is designed primarily for key-based lookup, not for maintaining sorted order.

C# provides other collections when sorted keys are required.

### SortedDictionary

```csharp
SortedDictionary<int, string> students =
    new SortedDictionary<int, string>();

students.Add(103, "John");
students.Add(101, "Brian");
students.Add(102, "Mary");
```

When iterating through the dictionary, entries are ordered by key.

Example:

```csharp
foreach (var student in students)
{
    Console.WriteLine($"{student.Key}: {student.Value}");
}
```

Output:

```text
101: Brian
102: Mary
103: John
```

`SortedDictionary<TKey, TValue>` maintains its entries in key order.

### SortedSet

A `SortedSet<T>` stores unique elements in sorted order.

```csharp
SortedSet<int> numbers = new SortedSet<int>
{
    50, 10, 30, 20, 40, 20
};

foreach (int number in numbers)
{
    Console.WriteLine(number);
}
```

Output:

```text
10
20
30
40
50
```

The duplicate 20 is stored only once.

---

## 21. Understanding LINQ

LINQ stands for Language Integrated Query.

It allows you to query, filter, sort, group, and transform data using C# syntax.

LINQ is especially useful when working with collections.

Example:

```csharp
using System.Linq;

List<int> marks = new List<int>
{
    45, 70, 85, 30, 90, 65
};

var passedStudents = marks.Where(mark => mark >= 50);

foreach (int mark in passedStudents)
{
    Console.WriteLine(mark);
}
```

Output:

```text
70
85
90
65
```

### Understanding the Code

```csharp
using System.Linq;
```

Makes LINQ extension methods available.

```csharp
marks.Where(mark => mark >= 50)
```

Filters the collection.

The condition keeps only marks that are at least 50.

```csharp
var passedStudents
```

Stores the result as an enumerable sequence.

The query is generally deferred: filtering happens when the sequence is enumerated.

### Important LINQ Methods

| Method | Purpose |
|---|---|
| `Where()` | Filters elements. |
| `Select()` | Transforms elements. |
| `OrderBy()` | Sorts ascending. |
| `OrderByDescending()` | Sorts descending. |
| `First()` | Returns the first matching element or throws if none exists. |
| `FirstOrDefault()` | Returns the first matching element or the default value. |
| `Single()` | Requires exactly one matching element. |
| `Any()` | Checks whether at least one element matches. |
| `All()` | Checks whether every element matches. |
| `Count()` | Counts matching elements. |
| `Sum()` | Calculates the sum. |
| `Average()` | Calculates the average. |
| `Max()` | Finds the maximum. |
| `Min()` | Finds the minimum. |
| `Distinct()` | Removes duplicate values. |
| `GroupBy()` | Groups elements by a key. |

### Filtering with Where()

```csharp
List<int> numbers = new List<int>
{
    10, 15, 20, 25, 30
};

var evenNumbers = numbers.Where(number => number % 2 == 0);
```

Keeps only even numbers.

### Transforming with Select()

```csharp
var doubledNumbers = numbers.Select(number => number * 2);
```

Creates a sequence where every number is multiplied by two.

### Sorting with OrderBy()

```csharp
var sortedNumbers = numbers.OrderBy(number => number);
```

Produces the numbers in ascending order.

### Calculating an Average

```csharp
double average = numbers.Average();
```

Calculates the average of the values.

### Checking a Condition

```csharp
bool hasLargeNumber = numbers.Any(number => number > 25);
```

Returns true if at least one number is greater than 25.

### Understanding Lambda Expressions

You have seen expressions such as:

```csharp
number => number * 2
```

This is a lambda expression.

It represents a small anonymous function.

The part before `=>` identifies the input parameter.

The part after `=>` describes the operation.

For example:

```csharp
number => number > 10
```

Means: receive a number and check whether it is greater than 10.

---

## 22. Working with Custom Objects in Collections

So far, most examples have stored simple values such as integers and strings.

Real applications often need to store complete records.

For example, a student has:

- A name.
- A registration number.
- An age.
- A course.

You can create a class to represent a student.

```csharp
class Student
{
    public string Name { get; set; }

    public string RegistrationNumber { get; set; }

    public int Age { get; set; }
}
```

Now create a list of students.

```csharp
List<Student> students = new List<Student>
{
    new Student
    {
        Name = "Brian",
        RegistrationNumber = "REG001",
        Age = 22
    },

    new Student
    {
        Name = "Mary",
        RegistrationNumber = "REG002",
        Age = 21
    }
};
```

### Understanding the Code

```csharp
List<Student> students
```

Creates a list that stores Student objects.

```csharp
new Student
```

Creates a new student object.

```csharp
Name = "Brian"
```

Sets the student's name.

The other properties are assigned in the same way.

### Accessing Student Information

```csharp
foreach (Student student in students)
{
    Console.WriteLine(student.Name);
    Console.WriteLine(student.RegistrationNumber);
}
```

Output:

```text
Brian
REG001
Mary
REG002
```

### Searching for a Student

```csharp
Student? foundStudent = students.Find(
    student => student.RegistrationNumber == "REG002"
);

if (foundStudent != null)
{
    Console.WriteLine(foundStudent.Name);
}
```

Output:

```text
Mary
```

The `Find()` method returns the first matching student or null when no matching object is found.

### Why Are Custom Objects Important?

Most software applications manage entities rather than isolated values.

Examples include:

| Application | Objects |
|---|---|
| Banking system | Accounts and transactions |
| School management | Students and teachers |
| E-commerce | Products and orders |
| Hospital system | Patients and appointments |
| Property system | Houses, tenants and landlords |
| Learning platform | Courses, lessons and learners |

Collections allow applications to manage many objects of the same type.

**Part 2 Progress: Generic collections, data operations, and LINQ completed.**

Progress: Part 2 of 4

---

# PART 3: PRACTICAL IMPLEMENTATION

In this part, you will create applications that use collections to solve realistic programming problems.

## 23. Preparing Your Development Environment

Open your terminal.

Create a new console application:

```bash
dotnet new console -n CSharpCollectionsPractice
```

Enter the project directory:

```bash
cd CSharpCollectionsPractice
```

Run the project:

```bash
dotnet run
```

Open `Program.cs` in your editor.

The following practical projects can be tested separately by replacing the contents of `Program.cs`.

---

## 24. Practical Project One: Student Records Management System

### Project objective

Build an application that stores multiple student records.

The application should allow users to:

1. Add students.
2. Display all students.
3. Search for a student.
4. Remove a student.
5. Calculate the average marks.

We will use:

- `List<T>`.
- Custom classes.
- Methods.
- Loops.
- LINQ.
- Input validation.

### Complete Code

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

List<Student> students = new List<Student>();

bool running = true;

while (running)
{
    Console.WriteLine("\n===== STUDENT MANAGEMENT SYSTEM =====");

    Console.WriteLine("1. Add Student");
    Console.WriteLine("2. Display Students");
    Console.WriteLine("3. Search Student");
    Console.WriteLine("4. Remove Student");
    Console.WriteLine("5. Calculate Average Marks");
    Console.WriteLine("6. Exit");

    Console.Write("Select option: ");

    string? input = Console.ReadLine();

    if (!int.TryParse(input, out int choice))
    {
        Console.WriteLine("Invalid selection.");
        continue;
    }

    switch (choice)
    {
        case 1:
            AddStudent(students);
            break;

        case 2:
            DisplayStudents(students);
            break;

        case 3:
            SearchStudent(students);
            break;

        case 4:
            RemoveStudent(students);
            break;

        case 5:
            DisplayAverage(students);
            break;

        case 6:
            running = false;
            Console.WriteLine("Application closed.");
            break;

        default:
            Console.WriteLine("Choose a valid option.");
            break;
    }
}


static void AddStudent(List<Student> students)
{
    Console.Write("Enter student name: ");

    string name = Console.ReadLine() ?? "";

    if (string.IsNullOrWhiteSpace(name))
    {
        Console.WriteLine("Student name cannot be empty.");
        return;
    }

    Console.Write("Enter registration number: ");

    string registration = Console.ReadLine() ?? "";

    if (string.IsNullOrWhiteSpace(registration))
    {
        Console.WriteLine("Registration number cannot be empty.");
        return;
    }

    bool exists = students.Any(
        student => student.RegistrationNumber == registration
    );

    if (exists)
    {
        Console.WriteLine("Registration number already exists.");
        return;
    }

    Console.Write("Enter marks: ");

    if (!double.TryParse(Console.ReadLine(), out double marks)
        || marks < 0
        || marks > 100)
    {
        Console.WriteLine("Invalid marks.");
        return;
    }

    Student newStudent = new Student
    {
        Name = name,
        RegistrationNumber = registration,
        Marks = marks
    };

    students.Add(newStudent);

    Console.WriteLine("Student registered successfully.");
}


static void DisplayStudents(List<Student> students)
{
    if (students.Count == 0)
    {
        Console.WriteLine("No student records found.");
        return;
    }

    foreach (Student student in students)
    {
        Console.WriteLine("\n------------------");

        Console.WriteLine($"Name: {student.Name}");

        Console.WriteLine($"Registration: {student.RegistrationNumber}");

        Console.WriteLine($"Marks: {student.Marks}");
    }
}


static void SearchStudent(List<Student> students)
{
    Console.Write("Enter registration number: ");

    string registration = Console.ReadLine() ?? "";

    Student? student = students.Find(
        item => item.RegistrationNumber == registration
    );

    if (student == null)
    {
        Console.WriteLine("Student not found.");
        return;
    }

    Console.WriteLine($"Name: {student.Name}");

    Console.WriteLine($"Marks: {student.Marks}");
}


static void RemoveStudent(List<Student> students)
{
    Console.Write("Enter registration number: ");

    string registration = Console.ReadLine() ?? "";

    int removed = students.RemoveAll(
        student => student.RegistrationNumber == registration
    );

    if (removed > 0)
    {
        Console.WriteLine("Student removed successfully.");
    }
    else
    {
        Console.WriteLine("Student not found.");
    }
}


static void DisplayAverage(List<Student> students)
{
    if (students.Count == 0)
    {
        Console.WriteLine("No marks available.");
        return;
    }

    double average = students.Average(student => student.Marks);

    Console.WriteLine($"Average marks: {average:F2}");
}


class Student
{
    public string Name { get; set; } = "";

    public string RegistrationNumber { get; set; } = "";

    public double Marks { get; set; }
}
```

### Detailed Explanation

#### A. Creating the collection

```csharp
List<Student> students = new List<Student>();
```

Creates an empty list that stores student objects.

The list can grow whenever a new student is registered.

#### B. Creating the menu loop

```csharp
while (running)
```

Keeps the application running until the user selects exit.

#### C. Adding students

```csharp
AddStudent(students);
```

Calls the `AddStudent()` method.

The existing list is passed into the method.

This allows the method to add a new student to the same collection.

#### D. Validating the registration number

```csharp
bool exists = students.Any(
    student => student.RegistrationNumber == registration
);
```

Checks whether any existing student has the same registration number.

`Any()` returns true if at least one matching record exists.

#### E. Creating a student object

```csharp
Student newStudent = new Student
{
    Name = name,
    RegistrationNumber = registration,
    Marks = marks
};
```

Creates a new student record.

Each property receives its corresponding value.

#### F. Adding the record

```csharp
students.Add(newStudent);
```

Stores the new student in the list.

#### G. Displaying students

```csharp
foreach (Student student in students)
```

Processes every student object stored in the collection.

#### H. Searching for a student

```csharp
Student? student = students.Find(
    item => item.RegistrationNumber == registration
);
```

Searches the list for the first student whose registration number matches the supplied value.

The `?` indicates that the result may be null.

#### I. Removing a student

```csharp
int removed = students.RemoveAll(
    student => student.RegistrationNumber == registration
);
```

Removes records matching the registration number.

The returned integer tells us how many elements were removed.

#### J. Calculating average marks

```csharp
double average = students.Average(student => student.Marks);
```

Uses LINQ to calculate the average of all student marks.

### Example Execution

```text
===== STUDENT MANAGEMENT SYSTEM =====
1. Add Student
2. Display Students
3. Search Student
4. Remove Student
5. Calculate Average Marks
6. Exit

Select option: 1
Enter student name: Brian
Enter registration number: REG001
Enter marks: 85
Student registered successfully.
```

Another student:

```text
Select option: 1
Enter student name: Mary
Enter registration number: REG002
Enter marks: 75
Student registered successfully.
```

Displaying records:

```text
Select option: 2

------------------
Name: Brian
Registration: REG001
Marks: 85

------------------
Name: Mary
Registration: REG002
Marks: 75
```

Calculating the average:

```text
Select option: 5
Average marks: 80.00
```

### What You Have Learned

You have used a collection of custom objects rather than individual variables.

This is a common structure in real-world software applications.

**Important:** This application stores information in memory. Closing the program destroys the records. Permanent storage requires a database or file storage.

---

## 25. Practical Project Two: Inventory Management System

### Project objective

Build a basic inventory application that stores products and their quantities.

It should allow users to:

- Add products.
- Display products.
- Update quantities.
- Search for products.
- Remove products.

We will use a dictionary because each product has a unique product code.

### Complete Code

```csharp
using System;
using System.Collections.Generic;

Dictionary<string, Product> inventory = new Dictionary<string, Product>();

bool running = true;

while (running)
{
    Console.WriteLine("\n===== INVENTORY SYSTEM =====");

    Console.WriteLine("1. Add Product");
    Console.WriteLine("2. Display Products");
    Console.WriteLine("3. Search Product");
    Console.WriteLine("4. Update Quantity");
    Console.WriteLine("5. Remove Product");
    Console.WriteLine("6. Exit");

    Console.Write("Choose option: ");

    if (!int.TryParse(Console.ReadLine(), out int choice))
    {
        Console.WriteLine("Invalid selection.");
        continue;
    }

    switch (choice)
    {
        case 1:

            Console.Write("Product code: ");

            string code = Console.ReadLine() ?? "";

            if (string.IsNullOrWhiteSpace(code))
            {
                Console.WriteLine("Product code is required.");
                break;
            }

            if (inventory.ContainsKey(code))
            {
                Console.WriteLine("Product already exists.");
                break;
            }

            Console.Write("Product name: ");

            string name = Console.ReadLine() ?? "";

            if (string.IsNullOrWhiteSpace(name))
            {
                Console.WriteLine("Product name is required.");
                break;
            }

            Console.Write("Quantity: ");

            if (!int.TryParse(Console.ReadLine(), out int quantity)
                || quantity < 0)
            {
                Console.WriteLine("Invalid quantity.");
                break;
            }

            Console.Write("Price: ");

            if (!decimal.TryParse(Console.ReadLine(), out decimal price)
                || price < 0)
            {
                Console.WriteLine("Invalid price.");
                break;
            }

            inventory.Add(code, new Product
            {
                Name = name,
                Quantity = quantity,
                Price = price
            });

            Console.WriteLine("Product added successfully.");

            break;


        case 2:

            if (inventory.Count == 0)
            {
                Console.WriteLine("Inventory is empty.");
                break;
            }

            foreach (var item in inventory)
            {
                Console.WriteLine(
                    $"{item.Key} | {item.Value.Name} | " +
                    $"Quantity: {item.Value.Quantity} | " +
                    $"Price: KSh {item.Value.Price:N2}"
                );
            }

            break;


        case 3:

            Console.Write("Enter product code: ");

            string searchCode = Console.ReadLine() ?? "";

            if (inventory.TryGetValue(searchCode, out Product? found))
            {
                Console.WriteLine($"Product: {found.Name}");

                Console.WriteLine($"Quantity: {found.Quantity}");

                Console.WriteLine($"Price: {found.Price:N2}");
            }
            else
            {
                Console.WriteLine("Product not found.");
            }

            break;


        case 4:

            Console.Write("Enter product code: ");

            string updateCode = Console.ReadLine() ?? "";

            if (!inventory.TryGetValue(updateCode, out Product? product))
            {
                Console.WriteLine("Product not found.");
                break;
            }

            Console.Write("Enter new quantity: ");

            if (!int.TryParse(Console.ReadLine(), out int newQuantity)
                || newQuantity < 0)
            {
                Console.WriteLine("Invalid quantity.");
                break;
            }

            product.Quantity = newQuantity;

            Console.WriteLine("Quantity updated.");

            break;


        case 5:

            Console.Write("Enter product code: ");

            string removeCode = Console.ReadLine() ?? "";

            if (inventory.Remove(removeCode))
            {
                Console.WriteLine("Product removed.");
            }
            else
            {
                Console.WriteLine("Product not found.");
            }

            break;


        case 6:

            running = false;

            Console.WriteLine("Inventory application closed.");

            break;


        default:

            Console.WriteLine("Invalid option.");

            break;
    }
}


class Product
{
    public string Name { get; set; } = "";

    public int Quantity { get; set; }

    public decimal Price { get; set; }
}
```

### Understanding the Main Collection

```csharp
Dictionary<string, Product> inventory
```

The dictionary uses:

- A string as the product code.
- A `Product` object as the associated value.

For example:

```text
PRD001 → Laptop
PRD002 → Keyboard
PRD003 → Mouse
```

### Adding a Product

```csharp
inventory.Add(code, new Product
{
    Name = name,
    Quantity = quantity,
    Price = price
});
```

Creates a new product object and stores it using the supplied product code.

### Searching for a Product

```csharp
inventory.TryGetValue(searchCode, out Product? found)
```

Attempts to retrieve the product associated with the specified code.

### Updating Quantity

```csharp
product.Quantity = newQuantity;
```

Changes the quantity of the retrieved product.

Because the dictionary stores a reference to the product object, changing its property updates the object held in the dictionary.

### Removing a Product

```csharp
inventory.Remove(removeCode);
```

Removes the product associated with the specified code.

### Example Execution

```text
===== INVENTORY SYSTEM =====
1. Add Product
2. Display Products
3. Search Product
4. Update Quantity
5. Remove Product
6. Exit

Choose option: 1
Product code: PRD001
Product name: Laptop
Quantity: 10
Price: 65000
Product added successfully.
```

Displaying the inventory:

```text
PRD001 | Laptop | Quantity: 10 | Price: KSh 65,000.00
```

This structure is useful in retail systems, warehouse applications, and e-commerce platforms.

---

## 26. Practical Project Three: Customer Service Queue

### Project objective

Create a customer service application that processes customers in the order they arrive.

We will use `Queue<T>`.

### Complete Code

```csharp
using System;
using System.Collections.Generic;

Queue<string> customers = new Queue<string>();

bool running = true;

while (running)
{
    Console.WriteLine("\n===== CUSTOMER SERVICE =====");

    Console.WriteLine("1. Add Customer");
    Console.WriteLine("2. Serve Customer");
    Console.WriteLine("3. View Next Customer");
    Console.WriteLine("4. Display Waiting Customers");
    Console.WriteLine("5. Exit");

    Console.Write("Select option: ");

    if (!int.TryParse(Console.ReadLine(), out int choice))
    {
        Console.WriteLine("Invalid selection.");
        continue;
    }

    switch (choice)
    {
        case 1:

            Console.Write("Enter customer name: ");

            string name = Console.ReadLine() ?? "";

            if (string.IsNullOrWhiteSpace(name))
            {
                Console.WriteLine("Customer name is required.");
                break;
            }

            customers.Enqueue(name);

            Console.WriteLine("Customer added to queue.");

            break;


        case 2:

            if (customers.Count > 0)
            {
                string served = customers.Dequeue();

                Console.WriteLine($"Now serving: {served}");
            }
            else
            {
                Console.WriteLine("No customers waiting.");
            }

            break;


        case 3:

            if (customers.Count > 0)
            {
                Console.WriteLine($"Next customer: {customers.Peek()}");
            }
            else
            {
                Console.WriteLine("Queue is empty.");
            }

            break;


        case 4:

            if (customers.Count == 0)
            {
                Console.WriteLine("No waiting customers.");
            }
            else
            {
                foreach (string customer in customers)
                {
                    Console.WriteLine(customer);
                }
            }

            break;


        case 5:

            running = false;

            Console.WriteLine("Customer service closed.");

            break;


        default:

            Console.WriteLine("Invalid option.");

            break;
    }
}
```

### Understanding the Queue Operations

**Adding customers:**

```csharp
customers.Enqueue(name);
```

Places a new customer at the back of the queue.

**Serving customers:**

```csharp
customers.Dequeue();
```

Removes and returns the customer at the front.

**Checking the next customer:**

```csharp
customers.Peek();
```

Retrieves the next customer without removing them.

### Example Execution

```text
Select option: 1
Enter customer name: Brian
Customer added to queue.

Select option: 1
Enter customer name: Mary
Customer added to queue.

Select option: 1
Enter customer name: John
Customer added to queue.

Select option: 2
Now serving: Brian

Select option: 3
Next customer: Mary
```

Brian is served first because he joined the queue first.

---

## 27. Practical Project Four: Undo System Using Stack

### Project objective

Create a simple text editor simulation that stores previous text states.

When the user makes a change, the previous version is saved.

When the user chooses undo, the application restores the previous version.

We will use `Stack<string>`.

### Complete Code

```csharp
using System;
using System.Collections.Generic;

Stack<string> history = new Stack<string>();

string currentText = "";

bool running = true;

while (running)
{
    Console.WriteLine("\n===== SIMPLE TEXT EDITOR =====");

    Console.WriteLine($"Current text: {currentText}");

    Console.WriteLine("1. Write Text");
    Console.WriteLine("2. Undo");
    Console.WriteLine("3. Exit");

    Console.Write("Select option: ");

    if (!int.TryParse(Console.ReadLine(), out int choice))
    {
        Console.WriteLine("Invalid selection.");
        continue;
    }

    switch (choice)
    {
        case 1:

            history.Push(currentText);

            Console.Write("Enter new text: ");

            currentText = Console.ReadLine() ?? "";

            Console.WriteLine("Text updated.");

            break;


        case 2:

            if (history.Count > 0)
            {
                currentText = history.Pop();

                Console.WriteLine("Previous text restored.");
            }
            else
            {
                Console.WriteLine("Nothing to undo.");
            }

            break;


        case 3:

            running = false;

            Console.WriteLine("Editor closed.");

            break;


        default:

            Console.WriteLine("Invalid option.");

            break;
    }
}
```

### Understanding the Undo Operation

```csharp
history.Push(currentText);
```

Saves the current text before a new version replaces it.

```csharp
currentText = Console.ReadLine() ?? "";
```

Reads the new text.

```csharp
currentText = history.Pop();
```

Retrieves the most recently saved version and removes it from the history stack.

### Example Execution

```text
Current text:

Select option: 1
Enter new text: Hello

Current text: Hello

Select option: 1
Enter new text: Hello World

Current text: Hello World

Select option: 2
Previous text restored.

Current text: Hello
```

This is a simplified undo implementation. Real text editors often use more advanced history structures to support large documents efficiently.

---

## 28. Practical Project Five: Student Performance Analysis Using LINQ

### Project objective

Create a program that analyzes a collection of student marks.

It should:

- Display all marks.
- Identify passing marks.
- Identify failing marks.
- Calculate the average.
- Find the highest mark.
- Find the lowest mark.
- Sort the results.
- Count students who passed.

### Complete Code

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

List<int> marks = new List<int>
{
    45, 80, 65, 90, 35, 75, 55, 95
};

var passed = marks.Where(mark => mark >= 50);

var failed = marks.Where(mark => mark < 50);

var sorted = marks.OrderBy(mark => mark);

double average = marks.Average();

int highest = marks.Max();

int lowest = marks.Min();

int passCount = marks.Count(mark => mark >= 50);


Console.WriteLine("===== STUDENT PERFORMANCE =====");

Console.WriteLine("\nAll Marks:");

foreach (int mark in marks)
{
    Console.WriteLine(mark);
}


Console.WriteLine("\nPassed Students:");

foreach (int mark in passed)
{
    Console.WriteLine(mark);
}


Console.WriteLine("\nFailed Students:");

foreach (int mark in failed)
{
    Console.WriteLine(mark);
}


Console.WriteLine("\nSorted Marks:");

foreach (int mark in sorted)
{
    Console.WriteLine(mark);
}


Console.WriteLine($"\nAverage: {average:F2}");

Console.WriteLine($"Highest: {highest}");

Console.WriteLine($"Lowest: {lowest}");

Console.WriteLine($"Students Passed: {passCount}");
```

### Detailed Explanation

**1. Creating the marks collection**

```csharp
List<int> marks = new List<int>
```

Creates a list that stores student marks.

**2. Filtering passing students**

```csharp
var passed = marks.Where(mark => mark >= 50);
```

Creates a query that selects marks of at least 50.

**3. Filtering failing students**

```csharp
var failed = marks.Where(mark => mark < 50);
```

Creates a query that selects marks below 50.

**4. Sorting marks**

```csharp
var sorted = marks.OrderBy(mark => mark);
```

Creates an ascending ordered sequence.

**5. Calculating the average**

```csharp
double average = marks.Average();
```

Calculates the average of all values.

**6. Finding the highest mark**

```csharp
int highest = marks.Max();
```

Returns the maximum value.

**7. Finding the lowest mark**

```csharp
int lowest = marks.Min();
```

Returns the minimum value.

**8. Counting passing students**

```csharp
int passCount = marks.Count(mark => mark >= 50);
```

Counts how many marks satisfy the passing condition.

### Expected Output

```text
===== STUDENT PERFORMANCE =====

All Marks:
45
80
65
90
35
75
55
95

Passed Students:
80
65
90
75
55
95

Failed Students:
45
35

Sorted Marks:
35
45
55
65
75
80
90
95

Average: 67.50
Highest: 95
Lowest: 35
Students Passed: 6
```

Notice that LINQ allows us to perform several operations without manually implementing every search and calculation.

---

## 29. Important Collection Errors and How to Avoid Them

### Error 1: Accessing an Invalid Array Index

Incorrect:

```csharp
int[] numbers = { 10, 20, 30 };

Console.WriteLine(numbers[5]);
```

The array contains only three elements.

Valid indexes are 0, 1, and 2.

Trying to access index 5 causes an `IndexOutOfRangeException`.

Correct:

```csharp
if (5 < numbers.Length)
{
    Console.WriteLine(numbers[5]);
}
else
{
    Console.WriteLine("Index does not exist.");
}
```

### Error 2: Accessing a Missing Dictionary Key

Incorrect:

```csharp
Dictionary<string, string> students = new Dictionary<string, string>();

Console.WriteLine(students["REG001"]);
```

The key does not exist.

This causes a `KeyNotFoundException`.

Correct:

```csharp
if (students.TryGetValue("REG001", out string? name))
{
    Console.WriteLine(name);
}
else
{
    Console.WriteLine("Student not found.");
}
```

### Error 3: Removing an Item While Using foreach

This is unsafe:

```csharp
foreach (int number in numbers)
{
    if (number < 20)
    {
        numbers.Remove(number);
    }
}
```

Modifying a list during a `foreach` iteration normally invalidates the enumerator and causes an `InvalidOperationException`.

Better approach:

```csharp
numbers.RemoveAll(number => number < 20);
```

Alternatively, use a reverse `for` loop when you need more control over individual removals.

### Error 4: Accessing an Empty Queue

Incorrect:

```csharp
Queue<string> customers = new Queue<string>();

Console.WriteLine(customers.Dequeue());
```

The queue is empty.

Calling `Dequeue()` throws an `InvalidOperationException`.

Correct:

```csharp
if (customers.Count > 0)
{
    Console.WriteLine(customers.Dequeue());
}
```

### Error 5: Accessing an Empty Stack

Incorrect:

```csharp
Stack<int> numbers = new Stack<int>();

Console.WriteLine(numbers.Pop());
```

The stack contains no elements.

Correct:

```csharp
if (numbers.Count > 0)
{
    Console.WriteLine(numbers.Pop());
}
```

### Error 6: Confusing Length and Count

Arrays use:

```csharp
numbers.Length
```

Lists and most generic collections use:

```csharp
numbers.Count
```

Do not confuse the array property with the collection property.

### Error 7: Assuming a List and Array Are the Same

An array has a fixed length.

A `List<T>` can dynamically grow or shrink.

Use the structure that matches the requirements of your application.

---

## 30. Practical Exercises

Complete these exercises independently before moving to the final assessment.

### Exercise 1: Employee Records

Create a program that stores employee names in a list.

Your program should:

1. Add five employees.
2. Display all employees.
3. Search for an employee.
4. Remove an employee.
5. Display the number of remaining employees.

### Exercise 2: Product Price Analyzer

Create a list containing product prices.

Your program should calculate:

- Total value.
- Average price.
- Highest price.
- Lowest price.
- Number of products above KSh 1,000.

### Exercise 3: Unique Email Registration

Use a `HashSet<string>` to store registered email addresses.

Your application should:

- Accept email addresses.
- Prevent duplicate registrations.
- Check whether an email exists.
- Display the number of registered addresses.

### Exercise 4: Hospital Patient Queue

Use a queue to manage patients waiting for service.

Your application should:

- Register a patient.
- Display the next patient.
- Serve the next patient.
- Display all waiting patients.
- Handle an empty queue.

### Exercise 5: Browser History

Use a stack to simulate browser history.

Your application should:

- Add visited pages.
- Return to the previous page.
- Display the current page.
- Handle an empty history.

### Exercise 6: Student Marks Database

Create a list of student objects.

Each student should contain:

- Name.
- Registration number.
- Course.
- Marks.

Your program should search, update, delete, and display student records.

**Part 3 Progress: Practical collection applications completed.**

Progress: Part 3 of 4

---

# PART 4: KAI ASSESSMENT

## 31. Assessment Instructions

You have completed the lesson on C# Collections and Data.

This assessment evaluates your ability to understand collection structures, select appropriate data structures, manipulate records, and build practical applications.

Answer the questions carefully.

---

## SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is a collection in programming?

A. A single variable that stores one value.

B. A structure used to store and organize multiple elements.

C. A programming language.

D. A method that performs calculations.

**Question 2**

Which collection has a fixed size after creation?

A. `List<T>`

B. `Dictionary<TKey, TValue>`

C. Array

D. `Queue<T>`

**Question 3**

What is the index of the first element in a C# array?

A. 1

B. -1

C. 0

D. 10

**Question 4**

Which property returns the number of elements currently stored in a list?

A. `Length`

B. `Count`

C. `Capacity`

D. `Size`

**Question 5**

Which collection stores information as key-value pairs?

A. `Stack<T>`

B. `HashSet<T>`

C. `Dictionary<TKey, TValue>`

D. Array

**Question 6**

Which collection is designed to store unique elements?

A. `HashSet<T>`

B. `List<T>`

C. `Queue<T>`

D. Array

**Question 7**

What does FIFO mean?

A. First In, First Out.

B. First In, Final Out.

C. Fast Input, Fast Output.

D. Final In, First Out.

**Question 8**

Which collection follows the LIFO principle?

A. Queue

B. Stack

C. Dictionary

D. List

**Question 9**

Which method adds an element to a queue?

A. `Push()`

B. `Pop()`

C. `Enqueue()`

D. `Dequeue()`

**Question 10**

Which method retrieves and removes the top element from a stack?

A. `Peek()`

B. `Pop()`

C. `Push()`

D. `Add()`

**Question 11**

Which LINQ method filters elements based on a condition?

A. `Select()`

B. `Where()`

C. `Sum()`

D. `Max()`

**Question 12**

What does `Dictionary.ContainsKey()` do?

A. Removes a dictionary entry.

B. Checks whether a specified key exists.

C. Sorts dictionary values.

D. Counts all dictionary values.

---

## SECTION B: CONCEPTUAL QUESTIONS

**Question 13**

Explain the difference between arrays and lists.

Give at least three differences.

**Question 14**

Explain why a dictionary is useful in a student management system.

Provide an example using registration numbers.

**Question 15**

Explain the difference between a queue and a stack.

Use a real-world example for each.

**Question 16**

What is a generic collection?

Explain the meaning of `List<int>` and `Dictionary<string, int>`.

**Question 17**

What is LINQ?

Explain the purpose of `Where()`, `Select()`, and `OrderBy()`.

**Question 18**

Explain the difference between a rectangular array and a jagged array.

Include a C# example of each.

---

## SECTION C: CODE ANALYSIS AND DEBUGGING

**Question 19**

Study the following code:

```csharp
int[] numbers = { 10, 20, 30, 40 };

Console.WriteLine(numbers[2]);
```

Answer:

1. How many elements are in the array?
2. What is the index of the third element?
3. What will the program display?
4. What happens if you access `numbers[4]`?

**Question 20**

Study this code:

```csharp
List<string> names = new List<string>();

names.Add("Brian");
names.Add("Mary");
names.Add("John");

names.Remove("Mary");

Console.WriteLine(names.Count);
```

Answer:

1. How many names are initially added?
2. Which name is removed?
3. What will `Count` return?
4. Which names remain?

**Question 21**

Study this dictionary:

```csharp
Dictionary<int, string> students = new Dictionary<int, string>();

students.Add(101, "Brian");
students.Add(102, "Mary");

Console.WriteLine(students[102]);
```

Explain:

1. What does the key represent?
2. What does the value represent?
3. What will be displayed?
4. What happens if the program attempts to add another entry with key 102 using `Add()`?

**Question 22**

Identify the problem in this code:

```csharp
Queue<string> customers = new Queue<string>();

customers.Enqueue("Brian");
customers.Enqueue("Mary");

Console.WriteLine(customers.Pop());
```

Tasks:

1. Identify the incorrect method.
2. Explain why it is incorrect.
3. Rewrite the statement correctly.

**Question 23**

Study this LINQ expression:

```csharp
List<int> numbers = new List<int>
{
    10, 15, 20, 25, 30
};

var result = numbers.Where(number => number > 20);
```

Answer:

1. What does `Where()` do?
2. What does `number => number > 20` mean?
3. Which elements satisfy the condition?
4. What type of sequence does the query produce?

---

## SECTION D: PRACTICAL PROGRAMMING

**Question 24: Shopping Cart**

Create a shopping cart using `List<T>`.

Your program should:

- Add products.
- Display all products.
- Remove products.
- Count products.
- Calculate the total price.

Use a suitable class to represent each product.

**Question 25: Student Registration**

Create a student registration system using `Dictionary<string, Student>`.

The registration number should be the key.

The student object should contain:

- Name.
- Age.
- Course.

Your program should:

- Register a student.
- Prevent duplicate registration numbers.
- Search for a student.
- Display all students.
- Remove a student.

**Question 26: Unique Username Checker**

Create a username registration application using `HashSet<string>`.

The application should:

- Accept usernames.
- Prevent duplicate usernames.
- Check whether a username exists.
- Display all registered usernames.
- Display the number of unique users.

**Question 27: Task Processing System**

Create a task processing application using `Queue<string>`.

Requirements:

- Add tasks.
- Process the next task.
- Display the next task without removing it.
- Display all pending tasks.
- Handle an empty queue.

**Question 28: Undo Functionality**

Create a simple undo system using `Stack<string>`.

Requirements:

- Store previous text versions.
- Allow new text to be entered.
- Restore the previous version.
- Display the current text.
- Handle cases where no previous version exists.

---

## SECTION E: FINAL PRACTICAL PROJECT

### Project: CodeLab Academy Learning Management System

Develop a console-based learning management application that manages courses, students, and lesson registrations.

The application should demonstrate your ability to combine multiple collection types.

### 1. Course Management

Create a course class containing:

- Course ID.
- Course name.
- Course description.
- Course fee.

Use a suitable collection to store multiple courses.

### 2. Student Management

Create a student class containing:

- Registration number.
- Student name.
- Email address.
- Enrolled courses.

Use a dictionary to identify students by registration number.

### 3. Course Registration

Allow students to register for available courses.

Prevent duplicate course registrations.

You may use a `HashSet<int>` to store course IDs for each student.

### 4. Student Search

Allow the application to retrieve a student using their registration number.

Display the student's information and registered courses.

### 5. Course Search

Allow users to search for courses using their course IDs.

### 6. Waiting List

Use a queue to manage students waiting to join a course that has reached its enrollment limit.

The first student who joins the waiting list should be processed first when a place becomes available.

### 7. Recent Activity

Use a stack to store recent actions such as:

- Student registered.
- Course created.
- Student enrolled.
- Student removed.

Display the most recent activity first.

### 8. Reports

Use LINQ to generate reports such as:

- Total registered students.
- Total available courses.
- Most popular course.
- Students enrolled in a particular course.
- Courses with no students.
- Recent activities.

### 9. Application Menu

Create a menu with options such as:

1. Register student.
2. Add course.
3. Display courses.
4. Enroll student.
5. Search student.
6. Search course.
7. Manage waiting list.
8. Display recent activities.
9. Generate reports.
10. Exit.

### Technical Requirements

Your application should demonstrate:

| Requirement | Recommended structure |
|---|---|
| Store courses | `List<Course>` |
| Identify students | `Dictionary<string, Student>` |
| Prevent duplicate registrations | `HashSet<T>` |
| Manage waiting students | `Queue<T>` |
| Track recent activities | `Stack<T>` |
| Generate reports | LINQ |
| Store complete records | Custom classes |

You should also explain why you selected each collection and how it supports the application's requirements.

---

## 32. Submit Your Assessment to Kai

Once you complete the assessment, submit your answers and project code to Kai.

Kai should evaluate:

1. Understanding of arrays.
2. Correct array indexing.
3. Understanding of generic collections.
4. Correct use of lists.
5. Dictionary operations.
6. HashSet uniqueness.
7. Queue and stack operations.
8. LinkedList fundamentals.
9. LINQ queries.
10. Collection selection and design.
11. Input validation and error handling.
12. Practical application development.

## Lesson Completion Checklist

Before proceeding to the next lesson, confirm that you can:

- [ ] Explain what collections are.
- [ ] Create and manipulate arrays.
- [ ] Access array elements using indexes.
- [ ] Work with multidimensional arrays.
- [ ] Explain generic collections.
- [ ] Create and modify lists.
- [ ] Search and sort collection elements.
- [ ] Store key-value pairs using dictionaries.
- [ ] Prevent duplicate values using HashSet.
- [ ] Implement FIFO processing using queues.
- [ ] Implement LIFO processing using stacks.
- [ ] Understand LinkedList.
- [ ] Use SortedDictionary and SortedSet.
- [ ] Query collections using LINQ.
- [ ] Store custom objects inside collections.
- [ ] Choose suitable collections for different applications.
- [ ] Build a practical application that manages multiple records.

# PART 4 OF 4 — LESSON COMPLETE

You have completed C# Collections and Data.

**Next lesson: C# Object-Oriented Programming (OOP)**

You will learn how to design software using classes, objects, encapsulation, inheritance, polymorphism, abstraction, and interfaces.