# C++: Collections and Data

# PART 1 OF 4: UNDERSTANDING COLLECTIONS AND DATA STRUCTURES

## 1. Introduction to Collections

So far, you have learned how to use variables to store individual values.

For example:

```cpp
int age = 20;
double price = 150.50;
string name = "Brian";
```

Each variable stores one value.

But imagine you are developing a student management system with 500 students. Would you create 500 separate variables?

```cpp
string student1 = "Brian";
string student2 = "Mary";
string student3 = "John";
string student4 = "David";
```

That approach would become difficult to manage.

Instead, C++ provides **collections and data structures** that allow you to store multiple related values together.

A collection is a structure that holds multiple elements and provides ways to access, organize, and manipulate them.

For example:

```cpp
vector<string> students = {
    "Brian",
    "Mary",
    "John",
    "David"
};
```

Now, four student names are stored inside one collection.

### Why are collections important?

Collections help programmers:

1. Store large amounts of information.
2. Organize related data.
3. Search for specific information.
4. Add and remove elements.
5. Sort information.
6. Process data efficiently.
7. Build real-world applications.

### Real-world applications

| Application | How collections are used |
|---|---|
| Student management system | Store student records |
| Banking application | Store transaction histories |
| E-commerce website | Store shopping cart products |
| Hospital system | Store patient records |
| Social media | Store posts and comments |
| Inventory system | Store available products |
| Library system | Store books and borrowers |

---

## 2. Understanding C++ Containers

C++ provides a collection of data structures through the Standard Template Library (STL).

The STL is a collection of reusable components that programmers can use instead of implementing everything from scratch.

It includes:

- Containers
- Iterators
- Algorithms
- Function objects

### What are containers?

Containers are data structures that store collections of objects.

For example:

```cpp
vector<int> numbers = {10, 20, 30, 40};
```

Here:

- `vector` is the container type.
- `int` is the data type.
- `numbers` is the collection name.
- `{10, 20, 30, 40}` contains the stored elements.

C++ provides different containers because different applications have different storage and performance requirements.

### Main categories of containers

| Category | Purpose | Examples |
|---|---|---|
| Sequence containers | Store elements in a sequence | vector, array, list, deque |
| Associative containers | Organize elements by keys or ordering | map, set, multimap, multiset |
| Unordered associative containers | Organize elements using hash tables | unordered_map, unordered_set |
| Container adapters | Provide restricted interfaces to other containers | stack, queue, priority_queue |

We will explore these containers throughout this lesson.

---

## 3. Arrays: Storing Multiple Values

An array is a collection that stores multiple elements of the same data type in a fixed-size sequence.

Consider:

```cpp
int marks[5] = {70, 85, 90, 65, 80};
```

This creates an array containing five integers.

### Understanding the declaration

```cpp
int marks[5] = {70, 85, 90, 65, 80};
```

- `int` specifies that the array stores integers.
- `marks` is the array name.
- `[5]` specifies that it contains five elements.
- The values inside `{}` initialize the array.

### Understanding array indexes

Every array element has an index.

C++ indexes begin at `0`, not `1`.

| Index | Value |
|---|---:|
| 0 | 70 |
| 1 | 85 |
| 2 | 90 |
| 3 | 65 |
| 4 | 80 |

To access an element:

```cpp
cout << marks[0];
```

Output:

```text
70
```

The expression `marks[0]` accesses the first element.

To access the third element:

```cpp
cout << marks[2];
```

Output:

```text
90
```

### Modifying array elements

You can change an element after creating an array.

```cpp
marks[1] = 95;
```

This changes the second element from `85` to `95`.

### Looping through an array

Instead of accessing every element manually, use a loop.

```cpp
#include <iostream>
using namespace std;

int main() {
    int marks[5] = {70, 85, 90, 65, 80};

    for (int i = 0; i < 5; i++) {
        cout << marks[i] << endl;
    }

    return 0;
}
```

**Line-by-line explanation:**

1. `#include <iostream>` allows the program to use input and output.
2. `using namespace std;` allows us to write `cout` instead of `std::cout`.
3. `int main()` defines the program's entry point.
4. `int marks[5]` creates an array of five integers.
5. `for (int i = 0; i < 5; i++)` repeats the loop five times.
6. `int i = 0` starts the index at zero.
7. `i < 5` ensures the loop stops before accessing an invalid index.
8. `i++` increases the index after each repetition.
9. `cout << marks[i] << endl;` prints the element at the current index.
10. `return 0;` indicates successful program execution.

Output:

```text
70
85
90
65
80
```

### Limitations of ordinary arrays

Ordinary built-in arrays have some limitations:

- Their size is fixed after creation.
- They do not automatically track their number of elements.
- They do not provide built-in functions for inserting or removing elements.
- Accessing an invalid index can cause undefined behavior.

For more flexible storage, C++ provides `vector`.

---

## 4. The std::array Container

C++ provides `std::array`, a container that offers array-like storage with additional functionality.

Unlike a built-in array, `std::array` works directly with STL algorithms and provides useful member functions.

You need:

```cpp
#include <array>
```

Example:

```cpp
#include <iostream>
#include <array>
using namespace std;

int main() {
    array<int, 5> marks = {70, 85, 90, 65, 80};

    cout << marks[0] << endl;
    cout << marks.size() << endl;

    return 0;
}
```

Output:

```text
70
5
```

### Explanation

`array<int, 5>` creates an array containing five integers.

The expression:

```cpp
marks.size()
```

returns the number of elements in the array.

Other useful operations include:

| Operation | Purpose |
|---|---|
| `marks.size()` | Returns the number of elements |
| `marks.front()` | Returns the first element |
| `marks.back()` | Returns the last element |
| `marks.at(2)` | Accesses an element with bounds checking |
| `marks.fill(0)` | Replaces all elements with zero |

Example:

```cpp
marks.fill(0);
```

After this operation, all five elements contain `0`.

**Important:** `std::array` has a fixed size. If you need a collection that can grow or shrink, use `vector`.

---

## 5. Understanding Vectors

A vector is a dynamic sequence container that can automatically grow or shrink as elements are added or removed.

It is one of the most frequently used containers in modern C++.

You need:

```cpp
#include <vector>
```

Example:

```cpp
vector<int> numbers = {10, 20, 30, 40};
```

Unlike a fixed-size array, a vector can accept additional elements.

### Adding elements

```cpp
numbers.push_back(50);
```

This adds `50` to the end of the vector.

The vector now contains:

```text
10 20 30 40 50
```

### Removing elements

```cpp
numbers.pop_back();
```

This removes the last element.

The vector becomes:

```text
10 20 30 40
```

### Accessing elements

```cpp
cout << numbers[0];
```

This prints the first element.

You can also use:

```cpp
cout << numbers.at(1);
```

The `at()` function checks whether the requested index is valid. If it is not, it throws an `out_of_range` exception.

### Useful vector operations

| Operation | Description |
|---|---|
| `push_back(value)` | Adds an element to the end |
| `pop_back()` | Removes the last element |
| `size()` | Returns the number of elements |
| `empty()` | Checks whether the vector is empty |
| `clear()` | Removes all elements |
| `front()` | Returns the first element |
| `back()` | Returns the last element |
| `at(index)` | Accesses an element with bounds checking |
| `insert()` | Inserts an element at a position |
| `erase()` | Removes an element or range |
| `capacity()` | Returns the allocated storage capacity |
| `reserve(n)` | Requests storage capacity for at least n elements |
| `resize(n)` | Changes the number of elements |

### Example: Adding and removing elements

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {10, 20, 30};

    numbers.push_back(40);
    numbers.push_back(50);

    numbers.pop_back();

    for (int number : numbers) {
        cout << number << " ";
    }

    return 0;
}
```

Output:

```text
10 20 30 40
```

**Explanation:**

1. `vector<int> numbers` creates a vector of integers.
2. `{10, 20, 30}` initializes it with three elements.
3. `push_back(40)` adds `40`.
4. `push_back(50)` adds `50`.
5. `pop_back()` removes the last element, which is `50`.
6. `for (int number : numbers)` visits every remaining element.
7. `cout << number << " ";` prints each element.

### When should you use a vector?

Use a vector when:

- You need a collection that changes size.
- You frequently access elements using indexes.
- You need to store lists of records or values.
- You want convenient integration with STL algorithms.

---

## 6. Comparing Arrays and Vectors

| Feature | Built-in array | std::array | std::vector |
|---|---|---|---|
| Size | Fixed | Fixed | Dynamic |
| Automatic growth | No | No | Yes |
| Index access | Yes | Yes | Yes |
| Size function | No member function | Yes | Yes |
| STL integration | More limited | Yes | Yes |
| Header required | No | `<array>` | `<vector>` |

### Important distinction

A vector can grow dynamically, but this does not mean every insertion is equally expensive.

Adding an element to the end with `push_back()` is usually efficient. Occasionally, the vector must allocate new storage and move or copy its elements when its capacity is exhausted.

---

## 7. Common Mistakes

### Mistake 1: Accessing an invalid array index

Incorrect:

```cpp
int numbers[3] = {10, 20, 30};

cout << numbers[3];
```

The valid indexes are `0`, `1`, and `2`.

Index `3` is outside the array.

### Mistake 2: Forgetting the vector header

Incorrect:

```cpp
vector<int> numbers;
```

If you have not included the appropriate header, the compiler may not recognize `vector`.

Correct:

```cpp
#include <vector>
```

### Mistake 3: Confusing size and capacity

```cpp
vector<int> numbers;

numbers.push_back(10);
numbers.push_back(20);

cout << numbers.size();
cout << numbers.capacity();
```

`size()` tells you how many elements exist.

`capacity()` tells you how many elements can currently fit in the allocated storage before another allocation is needed.

The capacity is implementation-dependent and may be larger than the size.

---

## 8. Part 1 Knowledge Check

1. What is a collection in programming?
2. What is the difference between an array and a vector?
3. Why do array indexes begin at zero?
4. What does `push_back()` do?
5. What does `pop_back()` do?
6. What is the purpose of `size()`?
7. What is the difference between `size()` and `capacity()`?
8. Which container would you choose when the number of elements needs to change frequently?

**Progress: Part 1 of 4**

---

# PART 2 OF 4: ADVANCED CONTAINERS AND DATA ORGANIZATION

## 1. The Deque Container

A deque is a sequence container that supports efficient insertion and removal at both ends.

Deque means **double-ended queue**.

You need:

```cpp
#include <deque>
```

Example:

```cpp
deque<int> numbers = {20, 30, 40};
```

You can add an element to the beginning:

```cpp
numbers.push_front(10);
```

You can also add an element to the end:

```cpp
numbers.push_back(50);
```

The collection becomes:

```text
10 20 30 40 50
```

### Removing elements

```cpp
numbers.pop_front();
```

Removes the first element.

```cpp
numbers.pop_back();
```

Removes the last element.

### Example

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> numbers = {20, 30, 40};

    numbers.push_front(10);
    numbers.push_back(50);

    for (int number : numbers) {
        cout << number << " ";
    }

    return 0;
}
```

Output:

```text
10 20 30 40 50
```

### When is deque useful?

- Managing tasks from both ends.
- Implementing sliding-window algorithms.
- Building systems that need frequent additions and removals at both ends.

Unlike a vector, a deque does not guarantee that all elements occupy one continuous memory block.

---

## 2. The List Container

A list is a doubly linked sequence container.

Unlike a vector, its elements are not stored as one continuous array of values.

Each element is stored in a separate node connected to neighboring nodes.

A simplified representation looks like this:

```text
NULL <- [10] <-> [20] <-> [30] -> NULL
```

Each node connects to the previous and next nodes.

You need:

```cpp
#include <list>
```

Example:

```cpp
list<int> numbers = {10, 20, 30};
```

### Adding elements

```cpp
numbers.push_front(5);
numbers.push_back(40);
```

The collection becomes:

```text
5 10 20 30 40
```

### Removing elements

```cpp
numbers.pop_front();
numbers.pop_back();
```

### Inserting elements

A list does not support direct indexing like a vector.

You use iterators to identify positions.

Example:

```cpp
#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> numbers = {10, 20, 40};

    auto position = numbers.begin();

    ++position;
    ++position;

    numbers.insert(position, 30);

    for (int number : numbers) {
        cout << number << " ";
    }

    return 0;
}
```

Output:

```text
10 20 30 40
```

**Line-by-line explanation:**

1. `list<int> numbers` creates a linked list of integers.
2. `numbers.begin()` returns an iterator pointing to the first element.
3. `auto position` allows the compiler to determine the iterator's type.
4. The first `++position` moves the iterator from `10` to `20`.
5. The second `++position` moves it from `20` to `40`.
6. `numbers.insert(position, 30)` inserts `30` before the element currently referenced by the iterator.
7. The range-based loop prints all elements.

### Advantages of lists

- Efficient insertion and removal when you already have an iterator to the position.
- Iterators and references to other elements generally remain valid after insertion and removal of different elements.

### Disadvantages

- No direct indexing with `numbers[2]`.
- More memory is needed for node links.
- Accessing an element by position requires traversal.

**Important:** A list is not automatically faster than a vector. Finding the position in a list can require traversal, while vectors provide fast indexed access.

---

## 3. The Forward List Container

A forward list is a singly linked list.

Unlike `list`, each node points only to the next node.

Representation:

```text
[10] -> [20] -> [30] -> NULL
```

You need:

```cpp
#include <forward_list>
```

Example:

```cpp
forward_list<int> numbers = {10, 20, 30};
```

Add an element to the beginning:

```cpp
numbers.push_front(5);
```

Result:

```text
5 10 20 30
```

A forward list is useful when you need a lightweight linked list that only requires forward traversal.

It does not provide `push_back()` or direct indexing.

---

## 4. Associative Containers

Sequence containers organize elements according to their position.

Associative containers organize information using keys and ordering.

Two important associative containers are:

- `map`
- `set`

### Understanding Maps

A map stores key-value pairs.

Each key is unique, and its associated value can be accessed through that key.

Imagine a student management system.

You want to associate student registration numbers with student names.

```cpp
map<int, string> students = {
    {101, "Brian"},
    {102, "Mary"},
    {103, "John"}
};
```

Here:

| Key | Value |
|---|---|
| 101 | Brian |
| 102 | Mary |
| 103 | John |

You need:

```cpp
#include <map>
```

### Accessing values

```cpp
cout << students[101];
```

Output:

```text
Brian
```

The key `101` identifies the value `"Brian"`.

### Adding information

```cpp
students[104] = "David";
```

This adds a new key-value pair.

### Updating information

```cpp
students[102] = "Mary Wanjiku";
```

This changes the value associated with key `102`.

### Checking whether a key exists

```cpp
if (students.find(103) != students.end()) {
    cout << "Student found";
}
```

Explanation:

- `find(103)` searches for key `103`.
- `students.end()` represents the position after the last element.
- If the result is not equal to `end()`, the key exists.

### Important warning about operator[]

Consider:

```cpp
cout << students[999];
```

If key `999` does not exist, `operator[]` inserts a new element with that key and a default-initialized value.

For a string, the value will be an empty string.

If you only want to search without inserting, use `find()` or `contains()` in C++20 and later.

### Iterating through a map

```cpp
for (const auto& student : students) {
    cout << student.first << " : "
         << student.second << endl;
}
```

Explanation:

- `const auto& student` accesses each key-value pair without copying it.
- `student.first` represents the key.
- `student.second` represents the value.
- `endl` moves output to a new line.

A map normally stores keys in sorted order.

For integer keys, the default order is ascending.

### Useful map operations

| Operation | Purpose |
|---|---|
| `map[key]` | Access or insert a value |
| `insert()` | Insert a key-value pair |
| `find(key)` | Search for a key |
| `erase(key)` | Remove an element |
| `size()` | Return the number of elements |
| `empty()` | Check whether the map is empty |
| `clear()` | Remove all elements |
| `contains(key)` | Check whether a key exists (C++20+) |

---

## 5. The Set Container

A set stores unique elements in sorted order.

For example:

```cpp
set<int> numbers = {40, 10, 30, 20, 10};
```

The collection automatically organizes the values and removes duplicates.

Stored result:

```text
10 20 30 40
```

You need:

```cpp
#include <set>
```

### Adding elements

```cpp
numbers.insert(50);
```

The set becomes:

```text
10 20 30 40 50
```

### Attempting to add a duplicate

```cpp
numbers.insert(30);
```

The set remains unchanged because `30` already exists.

### Removing an element

```cpp
numbers.erase(20);
```

The value `20` is removed.

### Checking whether an element exists

```cpp
if (numbers.find(30) != numbers.end()) {
    cout << "Number exists";
}
```

### When is set useful?

- Storing unique usernames.
- Keeping unique product codes.
- Removing duplicate values.
- Maintaining sorted collections.
- Checking whether an item already exists.

---

## 6. Unordered Containers

C++ also provides containers that use hash tables instead of maintaining sorted order.

Two common examples are:

- `unordered_map`
- `unordered_set`

### Understanding unordered_map

An unordered map stores key-value pairs like a normal map, but does not maintain keys in sorted order.

You need:

```cpp
#include <unordered_map>
```

Example:

```cpp
unordered_map<string, int> stock = {
    {"Laptop", 10},
    {"Phone", 25},
    {"Tablet", 8}
};
```

This associates product names with stock quantities.

Accessing an item:

```cpp
cout << stock["Laptop"];
```

Output:

```text
10
```

Adding an item:

```cpp
stock["Keyboard"] = 15;
```

The container uses a hash function to determine where elements are stored.

Average search, insertion, and removal operations are typically O(1), although their worst-case complexity can be O(n).

### Understanding unordered_set

An unordered set stores unique values without sorting them.

```cpp
unordered_set<string> usernames = {
    "brian",
    "mary",
    "john"
};
```

Adding a username:

```cpp
usernames.insert("david");
```

Attempting to add `"mary"` again will not create another copy.

### Comparing map and unordered_map

| Feature | map | unordered_map |
|---|---|---|
| Organization | Sorted keys | No sorted order |
| Internal structure | Usually a balanced search tree | Hash table |
| Search | O(log n) | Average O(1) |
| Insertion | O(log n) | Average O(1) |
| Key uniqueness | Yes | Yes |
| Useful for | Sorted key-value data | Fast average lookup |

The actual order of an unordered container should not be relied upon.

---

## 7. Container Adapters: Stack and Queue

Container adapters provide restricted ways of accessing stored elements.

They are useful when an application needs a specific processing order.

### A. Stack

A stack follows the LIFO principle.

LIFO means **Last In, First Out**.

Imagine stacking plates.

The last plate placed on top is the first plate removed.

You need:

```cpp
#include <stack>
```

Example:

```cpp
stack<int> numbers;

numbers.push(10);
numbers.push(20);
numbers.push(30);

cout << numbers.top();
```

Output:

```text
30
```

The last value added is currently at the top.

Remove the top element:

```cpp
numbers.pop();
```

Now `20` becomes the top element.

Useful stack operations:

| Operation | Purpose |
|---|---|
| `push(value)` | Add an element |
| `pop()` | Remove the top element |
| `top()` | Access the top element |
| `empty()` | Check whether the stack is empty |
| `size()` | Return the number of elements |

Real-world applications:

- Undo operations.
- Browser navigation history.
- Function call management.
- Expression evaluation.
- Backtracking algorithms.

### B. Queue

A queue follows the FIFO principle.

FIFO means **First In, First Out**.

Imagine people waiting in a line.

The person who joins first is served first.

You need:

```cpp
#include <queue>
```

Example:

```cpp
queue<string> customers;

customers.push("Brian");
customers.push("Mary");
customers.push("John");

cout << customers.front();
```

Output:

```text
Brian
```

The first customer added is the first customer served.

Remove the first customer:

```cpp
customers.pop();
```

Now Mary is at the front.

Useful queue operations:

| Operation | Purpose |
|---|---|
| `push(value)` | Add an element at the back |
| `pop()` | Remove the front element |
| `front()` | Access the first element |
| `back()` | Access the last element |
| `empty()` | Check whether the queue is empty |
| `size()` | Return the number of elements |

Real-world applications:

- Customer service systems.
- Print job management.
- Task scheduling.
- Message processing.
- Network request handling.

### C. Priority Queue

A priority queue processes elements according to priority rather than their insertion order.

By default, C++ uses a max-heap.

This means the largest element is at the top.

```cpp
priority_queue<int> numbers;

numbers.push(20);
numbers.push(50);
numbers.push(10);

cout << numbers.top();
```

Output:

```text
50
```

Even though `50` was not inserted first, it has the highest priority under the default ordering.

To create a min-priority queue:

```cpp
priority_queue<int, vector<int>, greater<int>> numbers;
```

Now the smallest element has the highest priority.

Priority queues are useful in:

- Task scheduling.
- Emergency service prioritization.
- Shortest-path algorithms.
- Event simulation.

---

## 8. Understanding Pairs and Tuples

Sometimes you need to store related values together without creating an entire custom class.

C++ provides `pair` and `tuple`.

### A. Pair

A pair stores exactly two values.

You need:

```cpp
#include <utility>
```

Example:

```cpp
pair<string, int> student = {"Brian", 85};
```

This pair stores:

- A student's name.
- The student's mark.

Access the values:

```cpp
cout << student.first << endl;
cout << student.second << endl;
```

Output:

```text
Brian
85
```

### B. Tuple

A tuple stores multiple values that may have different data types.

You need:

```cpp
#include <tuple>
```

Example:

```cpp
tuple<string, int, double> student = {
    "Brian",
    21,
    85.5
};
```

The tuple contains:

1. A name.
2. An age.
3. A mark.

Access values using `get()`:

```cpp
cout << get<0>(student) << endl;
cout << get<1>(student) << endl;
cout << get<2>(student) << endl;
```

Output:

```text
Brian
21
85.5
```

**Important:** Pair and tuple are useful for grouping values, but when data represents a meaningful entity with named properties, a `struct` or class may be clearer.

---

## 9. Comparing the Main C++ Containers

| Container | Stores | Allows duplicates? | Maintains order? | Dynamic size? |
|---|---|---|---|---|
| `array` | Sequence | Yes | Insertion order | No |
| `vector` | Sequence | Yes | Insertion order | Yes |
| `deque` | Sequence | Yes | Insertion order | Yes |
| `list` | Linked sequence | Yes | Insertion order | Yes |
| `forward_list` | Singly linked sequence | Yes | Insertion order | Yes |
| `map` | Key-value pairs | Unique keys | Sorted keys | Yes |
| `set` | Unique values | No duplicates | Sorted values | Yes |
| `unordered_map` | Key-value pairs | Unique keys | No guaranteed order | Yes |
| `unordered_set` | Unique values | No duplicates | No guaranteed order | Yes |
| `stack` | Restricted sequence | Yes | LIFO access | Yes |
| `queue` | Restricted sequence | Yes | FIFO access | Yes |
| `priority_queue` | Priority-based elements | Yes | Priority order at top | Yes |

---

## 10. Understanding Time Complexity

Choosing a container is not only about how it stores data. It is also about how quickly you can access and modify it.

Time complexity describes how an algorithm's running time grows as the amount of data increases.

You will frequently encounter:

| Complexity | Meaning |
|---|---|
| O(1) | Constant time |
| O(log n) | Logarithmic time |
| O(n) | Linear time |
| O(n log n) | Linearithmic time |
| O(n²) | Quadratic time |

### Example: Searching a vector

Suppose a vector contains 1,000 elements.

If you search from the beginning one element at a time, you might need to examine all 1,000 elements.

This is O(n) search time.

### Example: Searching a map

A map generally uses a balanced tree.

Searching for a key takes O(log n) time.

### Example: Searching an unordered_map

An unordered map uses hashing.

Its average lookup complexity is O(1), although the worst case is O(n).

### General performance guide

| Container | Access by index | Search by value/key | Insertion at end |
|---|---|---|---|
| vector | O(1) | O(n) | Amortized O(1) |
| array | O(1) | O(n) | Not applicable |
| deque | O(1) | O(n) | O(1) at either end |
| list | O(n) | O(n) | O(1) with a suitable position |
| map | Not applicable | O(log n) | O(log n) |
| set | Not applicable | O(log n) | O(log n) |
| unordered_map | Not applicable | Average O(1) | Average O(1) |

These are general complexity guarantees. Real performance also depends on memory layout, element types, allocation, and workload.

---

## 11. Part 2 Knowledge Check

1. What is the difference between a vector and a deque?
2. How does a linked list store its elements?
3. What is the difference between a list and a forward list?
4. What is a key-value pair?
5. Why does a set remove duplicates?
6. What is the difference between `map` and `unordered_map`?
7. Explain LIFO and FIFO.
8. What is the purpose of a priority queue?
9. What is the difference between a pair and a tuple?
10. What does O(1) mean?
11. Why might a vector be more appropriate than a list for indexed access?

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL COLLECTIONS AND DATA MANAGEMENT

In this part, you will build practical programs using C++ collections.

You will work with:

1. A student marks manager.
2. A product inventory system.
3. A customer service queue.
4. A word frequency counter.
5. A small data processing project.

## 1. Setting Up Your Development Environment

Create a folder named:

```text
CppCollections
```

Inside it, create:

```text
CppCollections/
│
├── main.cpp
├── students.cpp
├── inventory.cpp
├── queue_system.cpp
└── word_counter.cpp
```

You can use Visual Studio Code or another C++ development environment.

Make sure a C++ compiler such as GCC is installed.

To compile a file:

```bash
g++ main.cpp -o main
```

To run it:

On Windows:

```bash
.\main.exe
```

On Linux:

```bash
./main
```

The examples below can be copied into their respective files.

---

## 2. Project One: Student Marks Manager

### Project objective

Create a program that:

- Stores student marks.
- Displays all marks.
- Calculates the average.
- Identifies the highest mark.
- Identifies the lowest mark.

This project uses:

- `vector`
- Loops
- Conditional statements
- Algorithms

### Complete program

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

int main() {

    vector<int> marks = {75, 82, 90, 65, 88};

    cout << "STUDENT MARKS" << endl;

    for (int mark : marks) {
        cout << mark << endl;
    }

    int highest = *max_element(marks.begin(), marks.end());

    int lowest = *min_element(marks.begin(), marks.end());

    int total = accumulate(marks.begin(), marks.end(), 0);

    double average = static_cast<double>(total) / marks.size();

    cout << "Highest mark: " << highest << endl;
    cout << "Lowest mark: " << lowest << endl;
    cout << "Total marks: " << total << endl;
    cout << "Average mark: " << average << endl;

    return 0;
}
```

### Line-by-line explanation

**1. Include the input/output library**

```cpp
#include <iostream>
```

This allows the program to display information using `cout`.

**2. Include the vector library**

```cpp
#include <vector>
```

This makes the `vector` container available.

**3. Include the algorithm library**

```cpp
#include <algorithm>
```

This provides functions such as:

- `max_element()`
- `min_element()`
- `sort()`
- `find()`

**4. Include the numeric library**

```cpp
#include <numeric>
```

This provides `accumulate()`, which can calculate a total.

**5. Create the collection**

```cpp
vector<int> marks = {75, 82, 90, 65, 88};
```

The program stores five student marks in a vector.

**6. Display the heading**

```cpp
cout << "STUDENT MARKS" << endl;
```

This prints a heading before displaying the marks.

**7. Loop through the collection**

```cpp
for (int mark : marks) {
    cout << mark << endl;
}
```

The loop visits every element.

During each iteration, the current value is temporarily stored in `mark`.

**8. Find the highest mark**

```cpp
int highest = *max_element(marks.begin(), marks.end());
```

- `marks.begin()` identifies the beginning of the vector.
- `marks.end()` identifies the position after its last element.
- `max_element()` returns an iterator to the largest element.
- `*` dereferences the iterator to obtain the actual value.

**9. Find the lowest mark**

```cpp
int lowest = *min_element(marks.begin(), marks.end());
```

This works like the previous statement, but finds the smallest value.

**10. Calculate the total**

```cpp
int total = accumulate(marks.begin(), marks.end(), 0);
```

This adds all marks together.

The final `0` is the initial value used by the calculation.

**11. Calculate the average**

```cpp
double average = static_cast<double>(total) / marks.size();
```

The `static_cast<double>` converts the total into a decimal-compatible type before division.

This prevents integer division from discarding the fractional part.

**12. Display the results**

```cpp
cout << "Highest mark: " << highest << endl;
```

The remaining output statements display the lowest mark, total, and average.

### Expected output

```text
STUDENT MARKS
75
82
90
65
88
Highest mark: 90
Lowest mark: 65
Total marks: 400
Average mark: 80
```

### Important improvement

The functions `max_element()`, `min_element()`, and `accumulate()` require the collection to contain elements.

If the vector is empty, you must handle that case before using these calculations.

---

## 3. Project Two: Product Inventory System

### Project objective

Create an inventory system that stores product names and quantities.

The program should:

- Add products.
- Display products.
- Search for a product.
- Update stock quantities.

We will use `map`.

### Complete program

```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {

    map<string, int> inventory = {
        {"Laptop", 10},
        {"Phone", 25},
        {"Tablet", 8}
    };

    inventory["Keyboard"] = 15;

    cout << "PRODUCT INVENTORY" << endl;

    for (const auto& product : inventory) {
        cout << product.first
             << " - Stock: "
             << product.second
             << endl;
    }

    string searchProduct = "Phone";

    auto result = inventory.find(searchProduct);

    if (result != inventory.end()) {
        cout << "Found: "
             << result->first
             << " has "
             << result->second
             << " units." << endl;
    } else {
        cout << "Product not found." << endl;
    }

    inventory["Laptop"] = 12;

    cout << "Updated laptop stock: "
         << inventory["Laptop"] << endl;

    return 0;
}
```

### Line-by-line explanation

**1. Include the required libraries**

```cpp
#include <iostream>
#include <map>
#include <string>
```

- `iostream` handles input and output.
- `map` provides the key-value container.
- `string` allows the program to store product names.

**2. Create the inventory**

```cpp
map<string, int> inventory = {
    {"Laptop", 10},
    {"Phone", 25},
    {"Tablet", 8}
};
```

The map associates each product name with a quantity.

For example:

```text
Laptop -> 10
Phone -> 25
Tablet -> 8
```

**3. Add a new product**

```cpp
inventory["Keyboard"] = 15;
```

This adds Keyboard with a stock quantity of 15.

**4. Display all products**

```cpp
for (const auto& product : inventory)
```

This loops through every key-value pair.

`const auto&` avoids copying each pair and prevents accidental modification through the loop variable.

**5. Display the product name**

```cpp
product.first
```

The `first` member contains the key.

In this example, it is the product name.

**6. Display the quantity**

```cpp
product.second
```

The `second` member contains the value.

In this example, it is the stock quantity.

**7. Search for a product**

```cpp
string searchProduct = "Phone";
```

This defines the product we want to find.

**8. Search the map**

```cpp
auto result = inventory.find(searchProduct);
```

This searches for the key `"Phone"`.

**9. Check the search result**

```cpp
if (result != inventory.end())
```

If the iterator is not equal to `end()`, the product exists.

**10. Access the search result**

```cpp
result->first
result->second
```

The arrow operator accesses the key and value through the iterator.

**11. Update the stock**

```cpp
inventory["Laptop"] = 12;
```

This changes the laptop quantity from 10 to 12.

### Expected output

```text
PRODUCT INVENTORY
Keyboard - Stock: 15
Laptop - Stock: 10
Phone - Stock: 25
Tablet - Stock: 8
Found: Phone has 25 units.
Updated laptop stock: 12
```

Notice that the map displays product names alphabetically because it maintains sorted key order.

---

## 4. Project Three: Customer Service Queue

### Project objective

Create a basic customer service system.

Customers join a queue and are served in the order they arrive.

This demonstrates the FIFO principle.

### Complete program

```cpp
#include <iostream>
#include <queue>
#include <string>

using namespace std;

int main() {

    queue<string> customers;

    customers.push("Brian");
    customers.push("Mary");
    customers.push("John");

    cout << "CUSTOMER SERVICE SYSTEM" << endl;

    while (!customers.empty()) {

        cout << "Now serving: "
             << customers.front()
             << endl;

        customers.pop();
    }

    cout << "All customers have been served." << endl;

    return 0;
}
```

### Line-by-line explanation

**1. Include the queue library**

```cpp
#include <queue>
```

This provides the queue container.

**2. Create the queue**

```cpp
queue<string> customers;
```

This creates a queue that stores customer names.

**3. Add customers**

```cpp
customers.push("Brian");
customers.push("Mary");
customers.push("John");
```

Each customer joins at the back of the queue.

The queue now looks like:

```text
FRONT                  BACK
Brian -> Mary -> John
```

**4. Check whether the queue contains customers**

```cpp
while (!customers.empty())
```

The loop continues while the queue is not empty.

The `!` operator means NOT.

Therefore, `!customers.empty()` means the queue contains at least one element.

**5. Access the first customer**

```cpp
customers.front()
```

This returns the customer at the front of the queue.

**6. Remove the customer**

```cpp
customers.pop();
```

This removes the customer who has just been served.

**7. Repeat**

The loop continues until all customers have been removed.

### Expected output

```text
CUSTOMER SERVICE SYSTEM
Now serving: Brian
Now serving: Mary
Now serving: John
All customers have been served.
```

### Real-world connection

The same principle can be used in:

- Bank customer service.
- Hospital registration.
- Printing systems.
- Online request processing.
- Technical support ticket systems.

---

## 5. Project Four: Word Frequency Counter

### Project objective

Create a program that counts how many times each word appears in a sentence.

For example:

```text
C++ is powerful and C++ is useful
```

Expected word counts:

```text
C++: 2
and: 1
is: 2
powerful: 1
useful: 1
```

We will use `map`.

### Complete program

```cpp
#include <iostream>
#include <map>
#include <sstream>
#include <string>

using namespace std;

int main() {

    string sentence = "C++ is powerful and C++ is useful";

    map<string, int> wordCount;

    string word;

    stringstream input(sentence);

    while (input >> word) {
        wordCount[word]++;
    }

    cout << "WORD FREQUENCIES" << endl;

    for (const auto& item : wordCount) {
        cout << item.first
             << ": "
             << item.second
             << endl;
    }

    return 0;
}
```

### Line-by-line explanation

**1. Include the required libraries**

```cpp
#include <iostream>
#include <map>
#include <sstream>
#include <string>
```

- `iostream` displays results.
- `map` stores words and their counts.
- `sstream` allows us to process a string as an input stream.
- `string` provides text storage.

**2. Store the sentence**

```cpp
string sentence = "C++ is powerful and C++ is useful";
```

This is the text we want to analyze.

**3. Create the word counter**

```cpp
map<string, int> wordCount;
```

Each word will be stored as a key.

Its frequency will be stored as the associated integer value.

**4. Create a variable for each word**

```cpp
string word;
```

This variable temporarily stores the word currently being processed.

**5. Convert the sentence into a stream**

```cpp
stringstream input(sentence);
```

This allows us to extract individual words from the sentence.

**6. Read words one by one**

```cpp
while (input >> word)
```

The extraction operator reads the next word separated by whitespace.

The loop stops when there are no more words.

**7. Increase the word count**

```cpp
wordCount[word]++;
```

This is an important statement.

If a word does not exist in the map, `operator[]` creates it with a default integer value of zero.

Then `++` increases the count.

For example:

First occurrence:

```text
C++ = 1
```

Second occurrence:

```text
C++ = 2
```

**8. Display the results**

```cpp
for (const auto& item : wordCount)
```

This visits every word and its frequency.

`item.first` contains the word.

`item.second` contains the frequency.

### Expected output

```text
WORD FREQUENCIES
C++: 2
and: 1
is: 2
powerful: 1
useful: 1
```

The output is alphabetically sorted because we used `map`.

**Limitation:** This simple example treats punctuation and capitalization as part of a word. For example, `Hello` and `hello` are considered different, and `hello,` differs from `hello`.

A more advanced text-processing program would normalize case and remove punctuation.

---

## 6. Understanding Iterators

An iterator is an object that allows you to move through and access elements inside a container.

Think of an iterator as a position indicator.

Example:

```cpp
vector<int> numbers = {10, 20, 30, 40};

vector<int>::iterator it = numbers.begin();

cout << *it;
```

Output:

```text
10
```

### Understanding the code

```cpp
vector<int>::iterator it
```

Declares an iterator for a vector of integers.

```cpp
numbers.begin()
```

Returns an iterator pointing to the first element.

```cpp
*it
```

Dereferences the iterator to access the value it points to.

### Moving an iterator

```cpp
++it;
```

Moves the iterator to the next element.

Now:

```cpp
cout << *it;
```

prints:

```text
20
```

### Using iterators in a loop

```cpp
for (auto it = numbers.begin(); it != numbers.end(); ++it) {
    cout << *it << endl;
}
```

Explanation:

1. `numbers.begin()` starts at the first element.
2. `it != numbers.end()` checks that the iterator has not reached the end position.
3. `++it` moves to the next element.
4. `*it` retrieves the current value.

Iterators are important because they allow algorithms to work with different container types.

---

## 7. Using C++ Algorithms

C++ provides reusable algorithms through:

```cpp
#include <algorithm>
```

These algorithms help you process collections without writing every operation manually.

### A. Sorting

```cpp
vector<int> numbers = {50, 10, 40, 20, 30};

sort(numbers.begin(), numbers.end());
```

The vector becomes:

```text
10 20 30 40 50
```

To sort in descending order:

```cpp
sort(numbers.begin(), numbers.end(), greater<int>());
```

### B. Searching

```cpp
auto result = find(numbers.begin(), numbers.end(), 30);
```

This searches for the value `30`.

Check whether it was found:

```cpp
if (result != numbers.end()) {
    cout << "Found";
}
```

### C. Counting

```cpp
int total = count(numbers.begin(), numbers.end(), 20);
```

This counts how many times `20` appears.

### D. Reversing

```cpp
reverse(numbers.begin(), numbers.end());
```

This reverses the order of the elements.

### E. Removing values using erase-remove

For a vector, a common way to remove all occurrences of a particular value is:

```cpp
numbers.erase(
    remove(numbers.begin(), numbers.end(), 20),
    numbers.end()
);
```

The `remove()` algorithm rearranges the elements so that the unwanted values are moved to the end of the logical range.

It does not itself reduce the vector's size.

The `erase()` member function then removes that trailing range from the vector.

In C++20, you can also use:

```cpp
erase(numbers, 20);
```

This requires the appropriate standard library support and `<vector>`.

---

## 8. Project Five: Simple Data Processing System

### Project objective

Create a program that:

- Stores numerical data.
- Sorts the values.
- Calculates the total.
- Calculates the average.
- Searches for a value.
- Displays the sorted collection.

### Complete program

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

int main() {

    vector<int> data = {45, 20, 80, 35, 60, 50};

    sort(data.begin(), data.end());

    int total = accumulate(data.begin(), data.end(), 0);

    double average =
        static_cast<double>(total) / data.size();

    int target = 60;

    auto result = find(data.begin(), data.end(), target);

    cout << "SORTED DATA: ";

    for (int value : data) {
        cout << value << " ";
    }

    cout << endl;

    cout << "TOTAL: " << total << endl;

    cout << "AVERAGE: " << average << endl;

    if (result != data.end()) {
        cout << target << " was found." << endl;
    } else {
        cout << target << " was not found." << endl;
    }

    return 0;
}
```

### Understanding the logic

1. The vector stores six values.
2. `sort()` arranges them in ascending order.
3. `accumulate()` calculates their total.
4. The average is calculated by dividing the total by the number of elements.
5. `find()` searches for the target value.
6. The program displays the results.

### Expected output

```text
SORTED DATA: 20 35 45 50 60 80
TOTAL: 290
AVERAGE: 48.3333
60 was found.
```

### Why is this project important?

The same operations are used in real-world applications involving:

- Financial reports.
- Student performance analysis.
- Business statistics.
- Sales analysis.
- Inventory reports.
- Data processing systems.

---

## 9. Practical Exercises

Complete these exercises independently.

### Exercise 1: Vector Operations

Create a vector containing five integers.

Your program should:

1. Display all numbers.
2. Add two new numbers.
3. Remove the last number.
4. Display the updated collection.
5. Display the number of elements.

### Exercise 2: Student Performance

Create a program that stores marks for eight students.

Your program should:

1. Calculate the total.
2. Calculate the average.
3. Find the highest mark.
4. Find the lowest mark.
5. Display the marks in ascending order.

### Exercise 3: Unique Usernames

Create a `set<string>` containing usernames.

Your program should:

1. Add five usernames.
2. Attempt to add a duplicate username.
3. Display all usernames.
4. Search for a particular username.
5. Remove one username.

### Exercise 4: Inventory Management

Create a `map<string, int>` to store product names and stock quantities.

Your program should:

1. Add at least five products.
2. Display all products.
3. Search for a product.
4. Update its stock quantity.
5. Remove a product.

### Exercise 5: Customer Queue

Create a queue of customer names.

Your program should:

1. Add five customers.
2. Display the customer being served.
3. Remove each customer after service.
4. Display the remaining queue size.

### Exercise 6: Word Frequency

Create a program that counts how many times each word appears in a sentence.

Your program should:

1. Accept a sentence from the user.
2. Extract individual words.
3. Count their occurrences.
4. Display each word and its frequency.

---

## 10. Common Programming Errors

### Error 1: Calling front() or back() on an empty container

Incorrect:

```cpp
vector<int> numbers;

cout << numbers.front();
```

An empty vector has no first element.

Correct:

```cpp
if (!numbers.empty()) {
    cout << numbers.front();
}
```

### Error 2: Removing from an empty queue

Incorrect:

```cpp
queue<int> numbers;

numbers.pop();
```

Removing an element from an empty queue is invalid.

Correct:

```cpp
if (!numbers.empty()) {
    numbers.pop();
}
```

### Error 3: Assuming unordered_map is sorted

An `unordered_map` does not guarantee sorted key order.

If sorted output is required, use `map` or explicitly sort the extracted data.

### Error 4: Using an invalid iterator

Do not dereference an iterator equal to `end()`.

Incorrect:

```cpp
auto result = find(numbers.begin(), numbers.end(), 100);

cout << *result;
```

If `100` is not found, dereferencing `result` is invalid.

Correct:

```cpp
auto result = find(numbers.begin(), numbers.end(), 100);

if (result != numbers.end()) {
    cout << *result;
} else {
    cout << "Value not found";
}
```

### Error 5: Confusing pop() with returning a value

For a stack:

```cpp
numbers.pop();
```

This removes the top element but does not return it.

To retrieve and remove the top value:

```cpp
int value = numbers.top();
numbers.pop();
```

The same principle applies to queues: read `front()` before calling `pop()`.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT — C++ COLLECTIONS AND DATA

## Assessment Instructions

You have completed the main teaching and practical sections.

Now you must demonstrate that you understand how C++ collections work and when to use different data structures.

Answer the questions carefully.

The assessment includes:

- Multiple-choice questions.
- Conceptual questions.
- Code interpretation.
- Debugging.
- Practical programming tasks.
- A final project.

Submit your answers to Kai for marking and feedback.

---

## SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is the main purpose of a collection?

A. To execute programs faster in every situation.

B. To store and organize multiple related elements.

C. To replace all variables.

D. To compile C++ programs.

**Question 2**

Which container can automatically grow and shrink?

A. Built-in array.

B. `std::array`.

C. `vector`.

D. None of the above.

**Question 3**

What does `push_back()` do in a vector?

A. Removes the first element.

B. Adds an element to the end.

C. Sorts the vector.

D. Deletes the vector.

**Question 4**

What is the index of the first element in a C++ array?

A. 1.

B. -1.

C. 0.

D. 2.

**Question 5**

Which container stores unique elements in sorted order?

A. `vector`.

B. `set`.

C. `queue`.

D. `deque`.

**Question 6**

Which container stores key-value pairs with sorted keys?

A. `map`.

B. `stack`.

C. `list`.

D. `array`.

**Question 7**

What does FIFO mean?

A. First In, First Out.

B. First In, Final Out.

C. Fast Input, Fast Output.

D. Final In, First Out.

**Question 8**

Which container follows the LIFO principle?

A. Queue.

B. Map.

C. Stack.

D. Set.

**Question 9**

What is the average search complexity of an `unordered_map`?

A. O(n²).

B. O(log n).

C. O(n).

D. O(1).

**Question 10**

Which function returns the number of elements in a vector?

A. `capacity()`.

B. `size()`.

C. `length()`.

D. `countAll()`.

---

## SECTION B: CONCEPTUAL QUESTIONS

Answer in your own words.

**Question 11**

Explain what a C++ container is and why programmers use containers.

**Question 12**

Differentiate between:

- Built-in arrays.
- `std::array`.
- `std::vector`.

**Question 13**

Explain how a vector stores elements and how it handles additional elements when its current capacity is insufficient.

**Question 14**

Differentiate between `map` and `unordered_map`.

**Question 15**

Explain how a stack works using a real-world example.

**Question 16**

Explain how a queue works and describe two situations where it can be used in software development.

**Question 17**

What is an iterator, and why is it useful when working with C++ containers?

**Question 18**

Explain the difference between `pair` and `tuple`.

---

## SECTION C: CODE INTERPRETATION

Study the following code and answer the questions.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {

    vector<int> numbers = {5, 10, 15};

    numbers.push_back(20);

    numbers.pop_back();

    numbers.push_back(25);

    for (int number : numbers) {
        cout << number << " ";
    }

    return 0;
}
```

**Question 19**

What values are initially stored in the vector?

**Question 20**

What happens when `push_back(20)` executes?

**Question 21**

What happens when `pop_back()` executes?

**Question 22**

What is the final output of the program?

---

## SECTION D: DEBUGGING

Identify the errors and provide corrected code.

**Question 23**

```cpp
#include <iostream>
using namespace std;

int main() {

    vector<int> numbers = {10, 20, 30};

    cout << numbers[3];

    return 0;
}
```

Tasks:

1. Identify the missing requirement.
2. Identify the indexing problem.
3. Correct the program.

**Question 24**

```cpp
#include <iostream>
#include <queue>

using namespace std;

int main() {

    queue<int> numbers;

    numbers.pop();

    return 0;
}
```

Tasks:

1. Explain why this program is incorrect.
2. Correct it so that an element is removed safely.

---

## SECTION E: PRACTICAL PROGRAMMING

**Question 25: Student Marks**

Write a C++ program using a vector to store the marks of six students.

Your program must:

1. Store six marks.
2. Display all marks.
3. Calculate the total.
4. Calculate the average.
5. Identify the highest mark.
6. Identify the lowest mark.

**Question 26: Product Inventory**

Create a product inventory using `map<string, int>`.

Your program must:

1. Store at least five products.
2. Display product names and quantities.
3. Search for a product.
4. Update its quantity.
5. Remove one product.

**Question 27: Unique Records**

Create a program using `set<string>`.

Your program must:

1. Store five usernames.
2. Attempt to insert a duplicate.
3. Display the unique usernames.
4. Search for a username.
5. Explain why duplicate values are not stored.

**Question 28: Customer Service**

Create a customer service system using `queue<string>`.

Your program must:

1. Add at least five customers.
2. Display the customer at the front.
3. Serve and remove customers one by one.
4. Display a message when the queue becomes empty.

**Question 29: Data Analysis**

Create a program using a vector and STL algorithms.

Your program must:

1. Store ten integer values.
2. Sort the values in ascending order.
3. Calculate their total.
4. Calculate their average.
5. Search for a value.
6. Display whether the value exists.

---

## SECTION F: FINAL PROJECT

### Project: Student Records Management System

Develop a small student records management system using C++ collections.

Your system must use:

- `map` to associate student registration numbers with student names.
- `vector` to store student marks.
- Functions to organize the program.
- Loops to display records.
- Conditional statements to validate operations.

### Required features

**1. Add a student**

Allow the user to enter:

- Registration number.
- Student name.
- Student mark.

**2. Display students**

Display all registered students and their marks.

**3. Search for a student**

Allow the user to search using a registration number.

**4. Update student marks**

Allow the user to change a student's mark.

**5. Calculate average marks**

Calculate the average of all registered students' marks.

**6. Find the highest-performing student**

Identify the student with the highest mark.

**7. Remove a student**

Allow the user to remove a student's record.

**8. Exit**

Provide a menu that allows the user to exit the program safely.

### Suggested menu

```text
===== STUDENT RECORDS SYSTEM =====

1. Add Student
2. Display Students
3. Search Student
4. Update Student Marks
5. Calculate Average
6. Find Highest Mark
7. Remove Student
8. Exit

Enter your choice:
```

### Development requirements

Your program should:

- Use separate functions for different operations.
- Check whether registration numbers already exist.
- Validate marks before storing them.
- Handle cases where no students are registered.
- Display useful error messages.
- Avoid accessing invalid collection indexes.

### Suggested function structure

```cpp
void addStudent();

void displayStudents();

void searchStudent();

void updateMarks();

void calculateAverage();

void findHighestStudent();

void removeStudent();
```

You may organize the student data using a structure:

```cpp
struct Student {
    string name;
    double mark;
};
```

Then use:

```cpp
map<int, Student> students;
```

This stores each student using their registration number as the key and their record as the value.

You can use this structure instead of maintaining separate collections for names and marks.

---

## KAI'S FINAL EVALUATION CHECKLIST

Before submitting your assessment, confirm that you can:

- [ ] Explain what collections are.
- [ ] Differentiate arrays and vectors.
- [ ] Create and manipulate vectors.
- [ ] Understand deque and linked lists.
- [ ] Store key-value pairs using maps.
- [ ] Store unique elements using sets.
- [ ] Explain unordered containers.
- [ ] Use stacks and queues.
- [ ] Understand pairs and tuples.
- [ ] Work with iterators.
- [ ] Use STL algorithms.
- [ ] Choose an appropriate container for a particular problem.
- [ ] Build a practical student records system.

## SUBMISSION TO KAI

Submit your assessment answers and the source code for your final project to Kai.

Kai should evaluate:

1. Your understanding of collection concepts.
2. Your ability to choose suitable containers.
3. Your C++ syntax and implementation.
4. Your use of loops, functions, and algorithms.
5. Your ability to identify and correct errors.
6. Your final project's functionality and organization.

You should receive feedback explaining incorrect answers, code errors, areas requiring improvement, and concepts you have successfully mastered.

**Part 4 of 4 — Lesson Complete**

---

# LESSON SUMMARY

In this lesson, you learned that C++ collections provide different ways to organize and process data.

The most important containers to remember are:

| Container | Main purpose |
|---|---|
| `array` | Fixed-size sequence |
| `vector` | Dynamic sequence |
| `deque` | Sequence with efficient operations at both ends |
| `list` | Doubly linked sequence |
| `forward_list` | Singly linked sequence |
| `map` | Sorted key-value storage |
| `set` | Sorted unique values |
| `unordered_map` | Hash-based key-value storage |
| `unordered_set` | Hash-based unique values |
| `stack` | Last In, First Out |
| `queue` | First In, First Out |
| `priority_queue` | Priority-based processing |

**The most important programming principle:** Choose your collection based on how your application needs to store, access, search, and modify its data.

C++ collections are essential for developing larger systems such as inventory management applications, student management systems, banking software, and data-processing applications.