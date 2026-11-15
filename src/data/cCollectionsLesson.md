# C Programming: Collections and Data

# PART 1 OF 4: UNDERSTANDING COLLECTIONS AND DATA STORAGE

## 1. Introduction

In C programming, programs often need to work with more than one piece of data at a time.

Imagine developing a student management system. You may need to store:

- Names of 100 students.
- Their admission numbers.
- Their examination marks.
- Their courses.
- Their registration status.

Creating a separate variable for every student would be inefficient.

Instead, C provides different ways to organize related data.

These include:

1. Arrays.
2. Multidimensional arrays.
3. Strings.
4. Structures.
5. Enumerations.
6. Unions.
7. Pointers and dynamically allocated collections.
8. Linked lists.

Each provides a different way of storing and accessing information.

## 2. Arrays in C

An array is a collection of elements of the same data type stored in consecutive memory locations.

For example, instead of declaring five separate variables:

```c
int mark1 = 75;
int mark2 = 82;
int mark3 = 68;
int mark4 = 90;
int mark5 = 77;
```

We can store the marks in one array:

```c
int marks[5] = {75, 82, 68, 90, 77};
```

Let's understand each part:

- `int` specifies the type of data stored in the array.
- `marks` is the array name.
- `[5]` specifies that the array contains five elements.
- `{75, 82, 68, 90, 77}` provides the initial values.

### Accessing array elements

C uses zero-based indexing.

This means the first element has index `0`, not `1`.

| Index | Value |
|---|---:|
| 0 | 75 |
| 1 | 82 |
| 2 | 68 |
| 3 | 90 |
| 4 | 77 |

To access an element:

```c
printf("%d", marks[0]);
```

Output:

```text
75
```

The expression `marks[0]` retrieves the first element.

To access the fourth element:

```c
printf("%d", marks[3]);
```

Output:

```text
90
```

### Changing array elements

Array elements can be modified after declaration.

```c
marks[1] = 95;
```

This changes the second element from `82` to `95`.

The array now contains:

```text
75 95 68 90 77
```

### Declaring arrays without initial values

You can declare an array first and assign its values later.

```c
int numbers[5];

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
```

Notice that each element is assigned individually.

For an array declared inside a function without an initializer, its elements are not automatically initialized to zero. Do not assume they contain meaningful values until you assign them.

## 3. Processing Arrays with Loops

Arrays become especially useful when combined with loops.

Consider printing five examination marks.

```c
#include <stdio.h>

int main(void) {
    int marks[5] = {75, 82, 68, 90, 77};

    for (int i = 0; i < 5; i++) {
        printf("%d\n", marks[i]);
    }

    return 0;
}
```

### Line-by-line explanation

**Line 1**

```c
#include <stdio.h>
```

Provides declarations for standard input and output functions such as `printf()`.

**Line 2**

```c
int main(void) {
```

Defines the main function, where program execution begins.

**Line 3**

```c
int marks[5] = {75, 82, 68, 90, 77};
```

Creates an integer array containing five examination marks.

**Line 4**

```c
for (int i = 0; i < 5; i++) {
```

Creates a loop that starts at index `0` and continues while `i` is less than `5`.

The variable `i` increases by one after every iteration.

**Line 5**

```c
printf("%d\n", marks[i]);
```

Prints the array element at the current index.

**Line 6**

```c
}
```

Ends the loop.

**Line 7**

```c
return 0;
```

Indicates that the program completed successfully.

### Expected output

```text
75
82
68
90
77
```

The loop makes it possible to process every element without writing five separate `printf()` statements.

## 4. Finding the Size of an Array

The `sizeof` operator determines how many bytes an object occupies in memory.

For an array, it can help calculate the number of elements.

```c
int numbers[] = {10, 20, 30, 40, 50};

int count = sizeof(numbers) / sizeof(numbers[0]);
```

Explanation:

- `sizeof(numbers)` returns the total number of bytes occupied by the array.
- `sizeof(numbers[0])` returns the number of bytes occupied by one element.
- Dividing the total array size by the size of one element gives the number of elements.

For example, if an integer occupies four bytes on the system:

```text
Total array size = 20 bytes
One element size = 4 bytes

Number of elements = 20 / 4

Number of elements = 5
```

The exact size of an integer depends on the implementation.

**Important:** This technique works where `numbers` is still an actual array. When an array is passed to a function, its parameter is adjusted to a pointer, so `sizeof` on that parameter does not reveal the original array length. Pass the length separately.

## 5. Multidimensional Arrays

A multidimensional array is an array containing other arrays.

The most common example is a two-dimensional array.

It is useful for representing tables, matrices, examination results, and other grid-based information.

Example:

```c
int marks[3][2] = {
    {70, 80},
    {65, 90},
    {85, 75}
};
```

This array contains three rows and two columns.

| Student | Subject 1 | Subject 2 |
|---|---:|---:|
| Student 1 | 70 | 80 |
| Student 2 | 65 | 90 |
| Student 3 | 85 | 75 |

To access the first student's second mark:

```c
printf("%d", marks[0][1]);
```

Output:

```text
80
```

The first index identifies the row, while the second identifies the column.

### Processing a two-dimensional array

```c
#include <stdio.h>

int main(void) {
    int marks[3][2] = {
        {70, 80},
        {65, 90},
        {85, 75}
    };

    for (int row = 0; row < 3; row++) {
        for (int column = 0; column < 2; column++) {
            printf("%d ", marks[row][column]);
        }

        printf("\n");
    }

    return 0;
}
```

The outer loop moves through the rows.

The inner loop moves through the columns of the current row.

The expression:

```c
marks[row][column]
```

retrieves the value at the current row and column.

Output:

```text
70 80
65 90
85 75
```

## 6. Common Array Mistakes

### Mistake 1: Accessing an invalid index

```c
int numbers[3] = {10, 20, 30};

printf("%d", numbers[3]);
```

This is incorrect.

The valid indexes are `0`, `1`, and `2`.

Accessing `numbers[3]` causes undefined behavior.

### Mistake 2: Forgetting that indexing starts at zero

```c
numbers[1]
```

Accesses the second element, not the first.

### Mistake 3: Assuming arrays grow automatically

A normal fixed-size array does not automatically increase its capacity when more elements are added.

If you need a collection that can grow, you can use dynamic memory allocation or a data structure such as a linked list.

## 7. When Should You Use Arrays?

Arrays are suitable when:

- You know how many elements you need.
- All elements share the same data type.
- You need fast access using indexes.
- You want to process data using loops.
- You are working with tables or matrices.

Examples include:

- Examination marks.
- Monthly sales figures.
- Temperature records.
- Product quantities.
- Numerical calculations.

**Part 1 Summary**

You have learned:

- What arrays are.
- How to declare and initialize arrays.
- How to access and modify elements.
- How to process arrays using loops.
- How to calculate array length.
- How two-dimensional arrays work.
- Common array errors.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: STRINGS, STRUCTURES, ENUMERATIONS AND UNIONS

## 1. Strings in C

A string is a sequence of characters ending with a special character called the null terminator.

The null terminator is written as:

```c
'\0'
```

Unlike some other programming languages, C does not have a built-in string data type.

Instead, strings are represented using arrays of characters.

Example:

```c
char name[] = "Brian";
```

C stores this string approximately as:

| Position | Character |
|---|---|
| 0 | B |
| 1 | r |
| 2 | i |
| 3 | a |
| 4 | n |
| 5 | `\0` |

Notice that the array needs six character positions, even though the visible name contains five characters.

The final position stores the null terminator.

### Declaring a character array

```c
char city[20] = "Kutus";
```

This creates an array that can hold up to 19 ordinary characters plus the terminating null character.

### Printing strings

```c
#include <stdio.h>

int main(void) {
    char name[] = "Brian";

    printf("Name: %s\n", name);

    return 0;
}
```

The `%s` format specifier tells `printf()` to print a null-terminated string.

Output:

```text
Name: Brian
```

## 2. Reading Strings from the User

One way to read a single word is with `scanf()`:

```c
char name[30];

scanf("%29s", name);
```

The width `29` prevents reading more than 29 characters into this 30-character array, leaving room for `'\0'`.

However, `%s` stops reading when it encounters whitespace.

For example, entering:

```text
Brian Njogu
```

would only read:

```text
Brian
```

For complete names and sentences, `fgets()` is generally more suitable.

Example:

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char name[50];

    printf("Enter your full name: ");

    if (fgets(name, sizeof(name), stdin) != NULL) {
        name[strcspn(name, "\n")] = '\0';

        printf("Welcome, %s!\n", name);
    }

    return 0;
}
```

### Understanding the code

```c
char name[50];
```

Creates space for a string of up to 49 characters plus the null terminator.

```c
fgets(name, sizeof(name), stdin)
```

Reads a line from standard input.

- `name` is where the characters will be stored.
- `sizeof(name)` specifies the maximum buffer size.
- `stdin` identifies keyboard input.

```c
name[strcspn(name, "\n")] = '\0';
```

Removes the newline character if one was captured.

The `strcspn()` function finds the position of the first newline character. Replacing it with `'\0'` terminates the string at that position.

### Expected interaction

```text
Enter your full name: Brian Njogu
Welcome, Brian Njogu!
```

## 3. Important String Functions

C provides useful string-handling functions through:

```c
#include <string.h>
```

Some common functions include:

| Function | Purpose |
|---|---|
| `strlen()` | Calculates string length, excluding `'\0'` |
| `strcpy()` | Copies one string into another |
| `strcat()` | Appends one string to another |
| `strcmp()` | Compares two strings |
| `strchr()` | Finds a character in a string |
| `strstr()` | Finds a substring inside another string |
| `strcspn()` | Finds the length of the initial segment containing none of the specified characters |

### Example: Finding string length

```c
char name[] = "Brian";

printf("%zu", strlen(name));
```

Output:

```text
5
```

The null terminator is not included in the result.

### Example: Comparing strings

```c
char password1[] = "hello123";
char password2[] = "hello123";

if (strcmp(password1, password2) == 0) {
    printf("Passwords match.");
}
```

Output:

```text
Passwords match.
```

`strcmp()` returns zero when the strings are equal.

It does not compare strings using `==`.

**Important:** Functions such as `strcpy()` and `strcat()` require enough destination capacity. They do not automatically resize the destination array.

## 4. Structures in C

An array stores multiple values of the same data type.

But what happens when you want to store different types of information about one person?

For example, a student may have:

- A name.
- An admission number.
- An age.
- An examination mark.

These values have different data types.

C provides structures to solve this problem.

A structure groups related variables, which may have different data types, into one user-defined type.

### Declaring a structure

```c
struct Student {
    char name[50];
    int age;
    float marks;
};
```

Let's understand the declaration:

- `struct` introduces a structure declaration.
- `Student` is the structure tag.
- `name` stores a character array.
- `age` stores an integer.
- `marks` stores a floating-point value.

The structure defines the layout of the data. It does not create a student variable by itself.

### Creating a structure variable

```c
struct Student student1;
```

This creates a variable called `student1` using the structure type.

### Assigning structure members

```c
#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int age;
    float marks;
};

int main(void) {
    struct Student student1;

    strcpy(student1.name, "Brian");
    student1.age = 22;
    student1.marks = 85.5f;

    printf("Name: %s\n", student1.name);
    printf("Age: %d\n", student1.age);
    printf("Marks: %.2f\n", student1.marks);

    return 0;
}
```

### Line-by-line explanation

```c
struct Student student1;
```

Creates a structure variable.

```c
strcpy(student1.name, "Brian");
```

Copies the string `"Brian"` into the name array.

We use `strcpy()` because character arrays cannot be assigned a new string using ordinary array assignment.

```c
student1.age = 22;
```

Assigns the student's age.

```c
student1.marks = 85.5f;
```

Assigns the examination mark.

The `f` suffix identifies the literal as a `float`.

```c
printf("Name: %s\n", student1.name);
```

Displays the student's name.

The dot operator `.` accesses a member of a structure variable.

Output:

```text
Name: Brian
Age: 22
Marks: 85.50
```

## 5. Initializing Structures

You can initialize a structure when declaring it.

```c
struct Student student1 = {"Brian", 22, 85.5f};
```

The values are assigned according to the order of the members.

You can also use designated initializers:

```c
struct Student student1 = {
    .name = "Brian",
    .age = 22,
    .marks = 85.5f
};
```

Designated initializers make the code easier to understand because each value is associated with its member name.

## 6. Arrays of Structures

One of the most useful applications of structures is creating collections of records.

For example, a student management system may store several students.

```c
struct Student students[3];
```

This creates an array containing three structure variables.

Each element can hold a complete student record.

Example:

```c
struct Student students[2] = {
    {"Brian", 22, 85.5f},
    {"Mary", 21, 91.0f}
};
```

Accessing the first student's name:

```c
printf("%s", students[0].name);
```

Accessing the second student's marks:

```c
printf("%.2f", students[1].marks);
```

This is useful when developing:

- Student registration systems.
- Employee databases.
- Inventory systems.
- Banking applications.
- Hospital record systems.

## 7. Pointers to Structures

A pointer can store the address of a structure variable.

Example:

```c
struct Student student1 = {"Brian", 22, 85.5f};

struct Student *ptr = &student1;
```

Here:

- `ptr` is a pointer to a `struct Student`.
- `&student1` obtains the address of the structure.

To access a member through the pointer:

```c
printf("%s", ptr->name);
```

The `->` operator accesses a structure member through a pointer.

This is equivalent to:

```c
printf("%s", (*ptr).name);
```

The arrow operator is simply more convenient.

## 8. Enumerations (enum)

An enumeration defines a set of named integer constants.

It is useful when a variable should represent one value from a known group of options.

For example, an order may have these statuses:

- Pending.
- Processing.
- Shipped.
- Delivered.

Instead of using unexplained numbers, we can define an enumeration.

```c
enum OrderStatus {
    PENDING,
    PROCESSING,
    SHIPPED,
    DELIVERED
};
```

By default, these enumerators have integer values starting at zero.

| Enumerator | Default value |
|---|---:|
| PENDING | 0 |
| PROCESSING | 1 |
| SHIPPED | 2 |
| DELIVERED | 3 |

Using an enumeration:

```c
enum OrderStatus status = SHIPPED;
```

Checking the status:

```c
if (status == SHIPPED) {
    printf("Your order has been shipped.");
}
```

Output:

```text
Your order has been shipped.
```

You can also assign explicit values:

```c
enum OrderStatus {
    PENDING = 1,
    PROCESSING = 2,
    SHIPPED = 3,
    DELIVERED = 4
};
```

Enumerations make code more readable because they replace unexplained numeric values with meaningful names.

## 9. Unions in C

A union is another user-defined data type.

It allows different members to share the same memory location.

Consider:

```c
union Data {
    int number;
    float decimal;
    char letter;
};
```

Unlike a structure, where each member has its own storage, union members overlap in memory.

The size of a union is sufficient for its largest member, with any necessary alignment requirements.

Example:

```c
#include <stdio.h>

union Data {
    int number;
    float decimal;
    char letter;
};

int main(void) {
    union Data value;

    value.number = 100;
    printf("Number: %d\n", value.number);

    value.decimal = 25.5f;
    printf("Decimal: %.2f\n", value.decimal);

    return 0;
}
```

The first assignment stores an integer.

The second assignment writes to the same shared storage, replacing the previous value.

You should not expect `value.number` to retain its original value after assigning `value.decimal`.

### Structure versus union

| Feature | Structure | Union |
|---|---|---|
| Memory | Separate storage for each member | Members share storage |
| Member values | Can hold values simultaneously | Typically one active value at a time |
| Size | Includes storage for all members and padding | Large enough for its largest member and alignment |
| Common use | Records | Alternative representations of data |

Unions are useful when data can take different forms but only one form is needed at a time.

A common pattern is to combine an enum tag with a union so the program knows which member is currently valid.

## 10. Typedef

The `typedef` keyword creates an alternative name for an existing type.

For example:

```c
typedef struct {
    char name[50];
    int age;
} Student;
```

You can now declare a student using:

```c
Student student1;
```

Instead of:

```c
struct Student student1;
```

Notice that the structure declaration above does not define a `Student` tag. It defines the alias through `typedef`.

You can also use `typedef` with other types:

```c
typedef unsigned int uint;

uint age = 22;
```

## 11. Choosing the Correct Data Collection

| Data structure | Best use |
|---|---|
| Array | Multiple values of the same type |
| Two-dimensional array | Tables and matrices |
| Character array | Strings |
| Structure | Related values of different types |
| Array of structures | Multiple records |
| Enumeration | A fixed set of named options |
| Union | Different data representations sharing memory |

**Part 2 Summary**

You have learned:

- How strings are represented in C.
- How to read and manipulate strings.
- How to use common string functions.
- How structures organize related information.
- How arrays of structures store multiple records.
- How structure pointers work.
- How enumerations represent named constants.
- How unions share memory.
- How `typedef` creates type aliases.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: DYNAMIC COLLECTIONS AND PRACTICAL APPLICATIONS

## 1. Understanding the Limitations of Fixed Arrays

Consider this declaration:

```c
int marks[5];
```

The array has a capacity of five integers.

But imagine developing a student system where you do not know how many students will register.

You may have:

- 5 students today.
- 50 students next month.
- 500 students next year.

A fixed-size array may not be suitable if the required capacity changes at runtime.

C provides dynamic memory allocation to help solve this problem.

## 2. Dynamic Memory Allocation

Dynamic memory allocation allows a program to request memory while it is running.

The main functions are provided through:

```c
#include <stdlib.h>
```

Important functions:

| Function | Purpose |
|---|---|
| `malloc()` | Allocates a block of memory without initializing its contents |
| `calloc()` | Allocates memory for multiple elements and initializes all allocated bytes to zero |
| `realloc()` | Changes the size of an existing allocated memory block |
| `free()` | Releases dynamically allocated memory |

### Understanding malloc()

Example:

```c
int *numbers = malloc(5 * sizeof(int));
```

Explanation:

- `int *numbers` declares a pointer to an integer.
- `malloc()` requests a block of memory.
- `5 * sizeof(int)` calculates the number of bytes required for five integers.
- The returned pointer identifies the allocated memory, or `NULL` if allocation fails.

A safer version checks the result:

```c
int *numbers = malloc(5 * sizeof *numbers);

if (numbers == NULL) {
    printf("Memory allocation failed.\n");
    return 1;
}
```

Using `sizeof *numbers` calculates the size of the object that the pointer refers to. It also avoids repeating the type name.

### Assigning values

```c
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
```

Although `numbers` is a pointer, allocated memory can be accessed using array indexing.

### Releasing memory

After using the allocated memory:

```c
free(numbers);
numbers = NULL;
```

`free()` releases the memory.

Setting the pointer to `NULL` helps prevent accidental use of the old address through that pointer.

## 3. Complete Dynamic Array Example

Let's create a program that asks the user how many marks they want to enter, allocates memory, stores the marks, and calculates their average.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int count;
    int total = 0;

    printf("How many marks do you want to enter? ");

    if (scanf("%d", &count) != 1 || count <= 0) {
        printf("Invalid number of students.\n");
        return 1;
    }

    int *marks = malloc((size_t)count * sizeof *marks);

    if (marks == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    for (int i = 0; i < count; i++) {
        printf("Enter mark %d: ", i + 1);

        if (scanf("%d", &marks[i]) != 1) {
            printf("Invalid mark entered.\n");
            free(marks);
            return 1;
        }

        total += marks[i];
    }

    double average = (double)total / count;

    printf("Total marks: %d\n", total);
    printf("Average marks: %.2f\n", average);

    free(marks);

    return 0;
}
```

### Understanding the important sections

**Section 1: Variables**

```c
int count;
int total = 0;
```

`count` stores the number of marks to enter.

`total` accumulates all the marks. It starts at zero.

**Section 2: Input validation**

```c
if (scanf("%d", &count) != 1 || count <= 0)
```

The program checks whether an integer was successfully entered and whether the number is positive.

If either condition fails, the program reports an error.

**Section 3: Memory allocation**

```c
int *marks = malloc((size_t)count * sizeof *marks);
```

The program requests enough memory to store the number of integers specified by the user.

The cast to `size_t` makes the count an appropriate unsigned size value after the positive-count check.

**Section 4: Allocation validation**

```c
if (marks == NULL)
```

Checks whether memory allocation failed.

A program should never assume that memory allocation always succeeds.

**Section 5: Entering marks**

```c
for (int i = 0; i < count; i++)
```

Repeats the input process once for every mark.

```c
scanf("%d", &marks[i])
```

Stores each entered mark in the allocated memory.

The program also checks whether the input conversion succeeded.

**Section 6: Calculating the average**

```c
double average = (double)total / count;
```

The cast converts the total to `double` before division.

This prevents integer division from discarding the fractional part.

**Section 7: Memory cleanup**

```c
free(marks);
```

Releases the allocated memory.

This is important because memory that is no longer needed should be returned to the memory allocator.

### Example interaction

```text
How many marks do you want to enter? 4

Enter mark 1: 70
Enter mark 2: 80
Enter mark 3: 90
Enter mark 4: 60

Total marks: 300
Average marks: 75.00
```

**Important:** This example assumes the marks and total fit within the range of `int`. A production application should validate mark ranges and consider overflow when accumulating large collections.

## 4. Resizing Collections with realloc()

Sometimes you need to increase or decrease the size of a dynamically allocated array.

The `realloc()` function can resize an allocated memory block.

Example:

```c
int *numbers = malloc(3 * sizeof *numbers);

if (numbers == NULL) {
    return 1;
}

int *temporary = realloc(numbers, 5 * sizeof *numbers);

if (temporary != NULL) {
    numbers = temporary;
} else {
    printf("Unable to resize memory.\n");
}

free(numbers);
```

### Explanation

Initially:

```c
malloc(3 * sizeof *numbers);
```

Allocates space for three integers.

Then:

```c
realloc(numbers, 5 * sizeof *numbers);
```

Requests space for five integers.

The result is stored in `temporary` rather than directly overwriting `numbers`.

Why?

If `realloc()` fails, it returns `NULL` while the original allocated block remains valid.

If you directly wrote:

```c
numbers = realloc(numbers, 5 * sizeof *numbers);
```

and allocation failed, you would lose the original pointer and would no longer have a way to release that original allocation.

**Important:** When `realloc()` succeeds, the returned pointer must be used. The block may have moved, and the old pointer must no longer be used. Any additional memory created by expanding the block is uninitialized.

## 5. Linked Lists

Arrays store elements in consecutive memory locations.

Linked lists use a different approach.

A linked list is a collection of nodes where each node stores:

1. Data.
2. A pointer to another node.

A basic singly linked list looks like this:

```text
HEAD
 |
 v
[10 | next] ---> [20 | next] ---> [30 | NULL]
```

Each node contains a value and the address of the next node.

The final node points to `NULL`, indicating that there is no next node.

### Defining a linked-list node

```c
struct Node {
    int data;
    struct Node *next;
};
```

Explanation:

- `data` stores the value.
- `next` stores the address of another node.
- `struct Node *next` is a pointer to a structure of the same type.

This is called a self-referential structure.

### Creating the first node

```c
struct Node *head = malloc(sizeof *head);

if (head == NULL) {
    return 1;
}

head->data = 10;
head->next = NULL;
```

Here:

- `malloc()` allocates memory for one node.
- `head` stores its address.
- `head->data` stores the value `10`.
- `head->next = NULL` indicates that the list currently contains only one node.

### Adding another node

```c
struct Node *second = malloc(sizeof *second);

if (second == NULL) {
    free(head);
    return 1;
}

second->data = 20;
second->next = NULL;

head->next = second;
```

Now the list looks like:

```text
HEAD
 |
 v
[10 | address] ---> [20 | NULL]
```

The first node points to the second node.

## 6. Traversing a Linked List

Traversal means visiting each node in a collection.

Example:

```c
struct Node *current = head;

while (current != NULL) {
    printf("%d ", current->data);
    current = current->next;
}
```

Explanation:

```c
struct Node *current = head;
```

Creates a pointer that starts at the first node.

```c
while (current != NULL)
```

Continues while the pointer refers to a valid node.

```c
printf("%d ", current->data);
```

Prints the current node's value.

```c
current = current->next;
```

Moves to the next node.

Without this final statement, the loop would never move forward.

## 7. Complete Linked List Program

Let's put everything together.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

int main(void) {
    struct Node *head = malloc(sizeof *head);

    if (head == NULL) {
        return 1;
    }

    struct Node *second = malloc(sizeof *second);

    if (second == NULL) {
        free(head);
        return 1;
    }

    struct Node *third = malloc(sizeof *third);

    if (third == NULL) {
        free(second);
        free(head);
        return 1;
    }

    head->data = 10;
    head->next = second;

    second->data = 20;
    second->next = third;

    third->data = 30;
    third->next = NULL;

    struct Node *current = head;

    printf("Linked list: ");

    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }

    printf("\n");

    free(third);
    free(second);
    free(head);

    return 0;
}
```

### Expected output

```text
Linked list: 10 20 30
```

### What this program teaches

The program:

1. Defines a node structure.
2. Dynamically allocates three nodes.
3. Stores values in each node.
4. Connects the nodes using pointers.
5. Traverses the list.
6. Prints the values.
7. Releases all allocated memory.

The nodes do not need to be stored next to one another in memory.

They are connected through their pointers.

## 8. Arrays versus Linked Lists

| Feature | Array | Linked List |
|---|---|---|
| Memory layout | Consecutive elements | Nodes can be located anywhere |
| Access | Direct index access | Sequential traversal |
| Resizing | Fixed capacity unless dynamically managed | Nodes can be added and removed dynamically |
| Insertion | May require shifting elements | Can be efficient when the insertion position is already known |
| Memory overhead | Usually lower | Extra memory for pointers |
| Searching | Linear without special algorithms | Linear in a basic linked list |

A linked list is not automatically faster than an array.

For example, accessing the 500th element of an array is direct, while a linked list must normally visit earlier nodes to reach it.

## 9. Other Important Data Structures

C does not provide built-in high-level collection classes like some languages, but programmers can implement many data structures using arrays, structures, and pointers.

### Stack

A stack follows the Last In, First Out (LIFO) principle.

The last element added is the first one removed.

Example:

```text
Push 10
Push 20
Push 30

Top: 30

Pop removes 30 first.
```

Common uses:

- Function call management.
- Undo operations.
- Expression evaluation.
- Browser navigation history.

### Queue

A queue follows the First In, First Out (FIFO) principle.

The first element added is the first one removed.

Example:

```text
10 ---> 20 ---> 30

Remove 10 first.
```

Common uses:

- Printer job management.
- Customer service systems.
- Task scheduling.
- Network packet processing.

### Trees

A tree is a hierarchical data structure made up of nodes.

Example:

```text
          50
         /  \
       30    70
      / \    / \
    20  40  60  80
```

Trees are useful for:

- Searching.
- Hierarchical information.
- File-system representation.
- Database indexing.

### Hash Tables

A hash table stores key-value pairs and uses a hash function to determine where data should be stored.

Example:

```text
Key: student_101
Value: Brian
```

Hash tables are useful for:

- Fast lookups.
- Caches.
- Symbol tables.
- User records.

These data structures are not built into standard C as ready-made collection classes. They are implemented using C's existing language features.

## 10. Practical Project: Student Records Manager

Now let's combine arrays, strings, structures, loops, and functions.

### Project objective

Build a simple program that:

- Accepts student records.
- Stores names and marks.
- Displays all students.
- Calculates the class average.

### Step 1: Create the project

Create a folder:

```text
StudentRecords
```

Inside it, create:

```text
main.c
```

### Step 2: Write the program

```c
#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 3

struct Student {
    char name[50];
    float marks;
};

void displayStudents(struct Student students[], int count) {
    printf("\n--- STUDENT RECORDS ---\n");

    for (int i = 0; i < count; i++) {
        printf("Name: %s\n", students[i].name);
        printf("Marks: %.2f\n", students[i].marks);
        printf("-------------------\n");
    }
}

float calculateAverage(struct Student students[], int count) {
    float total = 0.0f;

    for (int i = 0; i < count; i++) {
        total += students[i].marks;
    }

    return total / count;
}

int main(void) {
    struct Student students[MAX_STUDENTS];

    for (int i = 0; i < MAX_STUDENTS; i++) {
        printf("Enter student %d name: ", i + 1);

        if (fgets(students[i].name,
                  sizeof students[i].name,
                  stdin) == NULL) {
            return 1;
        }

        students[i].name[
            strcspn(students[i].name, "\n")
        ] = '\0';

        printf("Enter marks: ");

        if (scanf("%f", &students[i].marks) != 1 ||
            students[i].marks < 0.0f ||
            students[i].marks > 100.0f) {
            printf("Invalid marks entered.\n");
            return 1;
        }

        int character;

        while ((character = getchar()) != '\n' &&
               character != EOF) {
        }
    }

    displayStudents(students, MAX_STUDENTS);

    printf("Class average: %.2f\n",
           calculateAverage(students, MAX_STUDENTS));

    return 0;
}
```

### Step 3: Understand the program

**The constant**

```c
#define MAX_STUDENTS 3
```

Defines a constant representing the maximum number of student records.

This makes it easier to change the collection size later.

**The structure**

```c
struct Student {
    char name[50];
    float marks;
};
```

Defines the information stored for each student.

Every student has a name and a mark.

**The display function**

```c
void displayStudents(struct Student students[], int count)
```

Receives the student collection and the number of records.

It uses a loop to display every student's information.

**The average function**

```c
float calculateAverage(struct Student students[], int count)
```

Receives the collection and calculates the average mark.

The statement:

```c
total += students[i].marks;
```

Adds each student's marks to the running total.

The final statement:

```c
return total / count;
```

Returns the calculated average.

**The main function**

```c
struct Student students[MAX_STUDENTS];
```

Creates an array capable of holding three student records.

The input loop collects each student's name and mark.

`fgets()` reads the full name.

`strcspn()` removes the newline character.

`scanf()` reads the mark.

The validation condition ensures that the mark is between zero and 100.

The `getchar()` loop consumes the remaining characters on the input line so that the next call to `fgets()` starts with a fresh line.

Finally, the program displays all records and calculates the average.

### Step 4: Compile and run

Open the terminal in the project folder.

Compile:

```bash
gcc -std=c17 -Wall -Wextra -pedantic main.c -o students
```

Run on Linux or macOS:

```bash
./students
```

On Windows using MinGW:

```bash
students.exe
```

### Example interaction

```text
Enter student 1 name: Brian
Enter marks: 85

Enter student 2 name: Mary
Enter marks: 90

Enter student 3 name: James
Enter marks: 75

--- STUDENT RECORDS ---
Name: Brian
Marks: 85.00
-------------------
Name: Mary
Marks: 90.00
-------------------
Name: James
Marks: 75.00
-------------------

Class average: 83.33
```

### Project limitations

This is an introductory project.

It does not yet:

- Save records permanently to a file.
- Support unlimited students.
- Edit or delete records.
- Search for students.
- Protect records using authentication.

Those features can be introduced in later lessons.

## 11. Independent Practical Exercises

### Exercise 1: Array Calculator

Write a program that:

1. Accepts ten integers.
2. Stores them in an array.
3. Calculates their sum.
4. Finds the largest number.
5. Finds the smallest number.

### Exercise 2: String Analyzer

Create a program that accepts a sentence and calculates:

- Number of characters.
- Number of spaces.
- Number of vowels.
- Number of words.

Remember that `strlen()` counts characters before the null terminator, including spaces.

### Exercise 3: Employee Records

Create a structure called `Employee` containing:

- Employee ID.
- Full name.
- Department.
- Salary.

Create an array of five employees and display their details.

### Exercise 4: Dynamic Collection

Write a program that:

1. Asks the user how many numbers they want to enter.
2. Allocates memory dynamically.
3. Accepts the numbers.
4. Calculates their average.
5. Releases the allocated memory.

### Exercise 5: Linked List

Create a singly linked list containing five integer nodes.

Display all the values and release all allocated memory.

**Part 3 Summary**

You have learned:

- How dynamic memory allocation works.
- How to use `malloc()`, `calloc()`, `realloc()`, and `free()`.
- How linked lists store connected nodes.
- How to traverse a linked list.
- The differences between arrays and linked lists.
- The basic principles of stacks, queues, trees, and hash tables.
- How to build a practical student records manager.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND PRACTICAL EVALUATION

## 1. Assessment Instructions

Welcome to the C Programming Collections and Data assessment.

This assessment evaluates whether you understand how C organizes, stores, retrieves, and manages collections of information.

You should attempt the questions without copying answers directly from the lesson.

The assessment contains:

- Multiple-choice questions.
- Conceptual questions.
- Code interpretation.
- Debugging tasks.
- Practical programming challenges.

Submit your answers to Kai for marking and feedback.

---

## SECTION A: MULTIPLE-CHOICE QUESTIONS

Choose the correct answer.

**Question 1**

What is an array in C?

A. A collection of different programs.

B. A collection of elements of the same data type.

C. A function that stores variables.

D. A special type of pointer.

**Question 2**

What is the index of the first element in a C array?

A. 1

B. -1

C. 0

D. 2

**Question 3**

What does the following declaration create?

```c
int numbers[10];
```

A. An array containing ten integers.

B. A variable containing ten arrays.

C. An array containing ten characters.

D. A pointer to ten functions.

**Question 4**

Which character marks the end of a C string?

A. `'\n'`

B. `'\0'`

C. `'\t'`

D. `' '`

**Question 5**

Which function calculates the length of a string?

A. `strcpy()`

B. `strcmp()`

C. `strlen()`

D. `strcat()`

**Question 6**

What is the main purpose of a structure?

A. To group related variables, potentially of different data types.

B. To repeat a program.

C. To terminate a program.

D. To allocate memory automatically.

**Question 7**

Which operator accesses a structure member through a pointer?

A. `.`

B. `->`

C. `&`

D. `*`

**Question 8**

What does `malloc()` do?

A. Deletes an array.

B. Prints memory contents.

C. Allocates memory dynamically.

D. Compares two strings.

**Question 9**

Which function releases dynamically allocated memory?

A. `remove()`

B. `delete()`

C. `free()`

D. `clear()`

**Question 10**

What principle does a stack follow?

A. FIFO

B. LIFO

C. Random access only

D. Sequential sorting

**Question 11**

What principle does a queue follow?

A. LIFO

B. FIFO

C. Reverse sorting

D. Binary searching

**Question 12**

What is the main difference between a structure and a union?

A. Structures cannot store integers.

B. Unions cannot store characters.

C. Structure members have separate storage, while union members share storage.

D. Structures only store strings.

---

## SECTION B: CONCEPTUAL QUESTIONS

Answer in your own words.

**Question 13**

Explain what an array is and give three real-world applications.

**Question 14**

Why does C use zero-based indexing?

**Question 15**

Explain the difference between a one-dimensional array and a two-dimensional array.

**Question 16**

What is the purpose of the null terminator in a C string?

**Question 17**

Explain why `fgets()` is generally more appropriate than an unrestricted `%s` conversion when reading a full name.

**Question 18**

What is a structure, and why would a student management system benefit from using structures?

**Question 19**

Explain the difference between accessing structure members using `.` and `->`.

**Question 20**

What is dynamic memory allocation, and why is it useful?

**Question 21**

Explain why programmers should check whether `malloc()` returns `NULL`.

**Question 22**

What is a linked list, and how does it differ from an array?

---

## SECTION C: CODE INTERPRETATION

Study the code and answer the questions.

**Question 23**

```c
#include <stdio.h>

int main(void) {
    int numbers[4] = {5, 10, 15, 20};

    printf("%d", numbers[2]);

    return 0;
}
```

Answer:

1. What is the output?
2. How many elements does the array contain?
3. What is the index of the last element?

**Question 24**

```c
#include <stdio.h>

struct Employee {
    int id;
    float salary;
};

int main(void) {
    struct Employee employee1 = {101, 45000.0f};

    printf("%d\n", employee1.id);
    printf("%.2f\n", employee1.salary);

    return 0;
}
```

Answer:

1. What is the output?
2. What is the purpose of `struct Employee`?
3. What does `employee1.salary` access?

**Question 25**

Study the following code:

```c
int *numbers = malloc(5 * sizeof *numbers);
```

Answer:

1. What does the pointer `numbers` store?
2. How many integers is the allocation intended to hold?
3. What should the programmer check after calling `malloc()`?
4. Which function should be used when the memory is no longer needed?

---

## SECTION D: DEBUGGING

Identify the problem and explain how to correct it.

**Question 26**

```c
int numbers[3] = {10, 20, 30};

printf("%d", numbers[3]);
```

Explain why this code is incorrect.

**Question 27**

```c
char name[10] = "Brian";

name = "James";
```

Why does this assignment fail in C? Show an appropriate correction.

**Question 28**

```c
int *numbers = malloc(5 * sizeof *numbers);

numbers[0] = 10;
```

What important safety check is missing?

**Question 29**

```c
int *numbers = malloc(5 * sizeof *numbers);

/* Use the allocated memory. */
```

What memory-management problem exists if the program finishes without releasing the allocated memory?

**Question 30**

```c
struct Student {
    char name[50];
    int age;
};

struct Student *student;

printf("%s", student->name);
```

What is wrong with this code, and what must happen before accessing `student->name`?

---

## SECTION E: PRACTICAL PROGRAMMING CHALLENGES

Complete the following tasks using C.

### Challenge 1: Examination Results

Develop a program that:

1. Accepts marks for five students.
2. Stores the marks in an array.
3. Calculates the total.
4. Calculates the average.
5. Identifies the highest mark.
6. Identifies the lowest mark.

Your program should use loops rather than processing each mark individually.

### Challenge 2: Student Information System

Create a structure called `Student` containing:

- Registration number.
- Full name.
- Age.
- Course.
- Examination marks.

Create an array of five students.

Your program should display all student records.

### Challenge 3: Dynamic Memory Management

Develop a program that asks the user how many numbers they want to store.

Your program should:

1. Allocate memory dynamically.
2. Accept the numbers.
3. Calculate their sum.
4. Calculate their average.
5. Release allocated memory.

### Challenge 4: Linked List Implementation

Implement a singly linked list that:

1. Creates at least five nodes.
2. Stores an integer in each node.
3. Connects the nodes.
4. Traverses and displays all values.
5. Releases all allocated nodes.

### Challenge 5: Mini Inventory Management System

Develop an inventory program using structures.

Each product should contain:

- Product ID.
- Product name.
- Quantity.
- Unit price.

Your program should:

1. Register at least five products.
2. Display all products.
3. Calculate the total inventory value.
4. Identify the product with the highest quantity.
5. Identify the product with the lowest quantity.

---

## SECTION F: FINAL PROJECT

### Project: Student Records Management System

Build a more complete student records application.

Your application must support:

**1. Register Students**

Allow the user to enter:

- Student ID.
- Full name.
- Age.
- Course.
- Examination marks.

**2. Display Students**

Display all registered students in a readable format.

**3. Search for a Student**

Allow the user to search using a student ID.

**4. Calculate Results**

Calculate the average mark for all registered students.

**5. Identify Performance**

Display the student with the highest mark.

**6. Dynamic Storage**

Use dynamic memory allocation so the collection can grow as students are added.

**7. Memory Management**

Use appropriate memory-management practices and release allocated memory when the program no longer needs it.

**8. Menu System**

Your program should display a menu similar to:

```text
================================
      STUDENT MANAGEMENT SYSTEM
================================

1. Register Student
2. Display All Students
3. Search Student
4. Calculate Class Average
5. Display Top Student
6. Exit

Choose an option:
```

You should organize your code using functions instead of placing all the program logic inside `main()`.

### Suggested project structure

```text
StudentManagement/
│
├── main.c
├── student.h
├── student.c
└── README.md
```

You may use this structure when you are ready to separate your program into multiple source files.

---

## 2. Submission to Kai

When you finish, submit your answers and practical project to Kai for assessment.

Kai should evaluate:

| Assessment area | What Kai should check |
|---|---|
| Arrays | Declaration, indexing and traversal |
| Strings | String storage and manipulation |
| Structures | Correct use of members and records |
| Enumerations | Understanding named constants |
| Unions | Understanding shared memory |
| Dynamic memory | Allocation, validation and release |
| Linked lists | Node creation and traversal |
| Problem-solving | Correctness of program logic |
| Code quality | Naming, organization and readability |
| Debugging | Ability to identify and correct errors |

### Completion checklist

Before marking the lesson complete, confirm that you can:

- [ ] Declare and initialize arrays.
- [ ] Access and modify array elements.
- [ ] Process arrays using loops.
- [ ] Work with multidimensional arrays.
- [ ] Create and manipulate strings.
- [ ] Use common functions from `<string.h>`.
- [ ] Define and use structures.
- [ ] Create arrays of structures.
- [ ] Access structure members using pointers.
- [ ] Use enumerations and unions.
- [ ] Explain dynamic memory allocation.
- [ ] Use `malloc()`, `calloc()`, `realloc()` and `free()`.
- [ ] Create and traverse linked lists.
- [ ] Understand stacks, queues, trees and hash tables.
- [ ] Build a practical application using collections and data structures.

## 3. Lesson Completion

Congratulations!

You have completed **C Programming: Collections and Data**.

You have progressed from storing individual variables to organizing complex collections of information.

These concepts are essential when developing:

- Management systems.
- Database applications.
- Operating systems.
- Embedded software.
- Game engines.
- Compilers.
- Networking applications.
- High-performance software.

The next lesson is:

# C Programming: Pointers and Memory Management

In that lesson, you will explore memory addresses, pointer arithmetic, pointer relationships with arrays, pointer parameters, dynamic memory management, and how C programs interact directly with memory.

**Part 4 of 4 — Lesson Complete**