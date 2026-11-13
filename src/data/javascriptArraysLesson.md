# JavaScript Arrays and Array Methods

# PART 1: Understanding Arrays

## 1. What Is an Array?

An **array** is a special JavaScript data structure used to store multiple values in a single variable.

Without arrays, you might need separate variables for every student:

```javascript
const student1 = "Brian";
const student2 = "Mary";
const student3 = "John";
const student4 = "Peter";
```

This works, but imagine managing 100 students. Creating a separate variable for every student would become difficult.

Arrays solve this problem.

```javascript
const students = ["Brian", "Mary", "John", "Peter"];
```

Let's understand this code:

- `const` declares a variable that cannot be reassigned.
- `students` is the variable name.
- `=` assigns a value to the variable.
- `[]` creates an array.
- `"Brian"`, `"Mary"`, `"John"`, and `"Peter"` are the elements stored inside the array.

An array allows us to manage related information together.

### Real-world applications of arrays

Arrays are used in many software systems:

| Application | How arrays are used |
|---|---|
| School management system | Store student names and results |
| E-commerce platform | Store shopping cart products |
| Banking application | Store transaction records |
| Social media | Store comments and posts |
| Movie platform | Store movie information |
| Learning platform | Store courses and lessons |

For example, CineVault could use an array to hold a collection of movie titles.

```javascript
const movies = ["Inception", "Avatar", "Interstellar"];
```

## 2. Creating Arrays

There are different ways of creating arrays in JavaScript.

### Method 1: Array literal

This is the recommended and most common method.

```javascript
const fruits = ["Mango", "Orange", "Banana"];
```

The square brackets create the array, while the values inside are its elements.

### Method 2: Using the Array constructor

```javascript
const numbers = new Array(10, 20, 30);
```

This creates an array containing three numbers.

Be careful with this alternative:

```javascript
const numbers = new Array(5);
```

This creates an array with five empty slots, not an array containing the number `5`.

For beginners, prefer array literals.

### Method 3: Creating an empty array

```javascript
const users = [];
```

This creates an empty array.

You can add elements to it later.

```javascript
const users = [];

users.push("Brian");
users.push("Mary");

console.log(users);
```

Output:

```text
["Brian", "Mary"]
```

Explanation:

1. `const users = []` creates an empty array.
2. `users.push("Brian")` adds Brian to the end.
3. `users.push("Mary")` adds Mary after Brian.
4. `console.log(users)` displays the array.

## 3. Understanding Array Elements and Indexes

Every element in an array has a position called an **index**.

JavaScript arrays use zero-based indexing.

This means the first element has index `0`, not `1`.

Consider:

```javascript
const languages = ["Python", "JavaScript", "Java", "C++"];
```

| Element | Index |
|---|---:|
| Python | 0 |
| JavaScript | 1 |
| Java | 2 |
| C++ | 3 |

You can access an element using its index.

```javascript
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);
```

Output:

```text
Python
JavaScript
Java
```

### Accessing the last element

You can use the array's `length` property.

```javascript
const languages = ["Python", "JavaScript", "Java", "C++"];

console.log(languages[languages.length - 1]);
```

Output:

```text
C++
```

Why do we subtract one?

The array contains four elements, but its indexes are `0`, `1`, `2`, and `3`.

Therefore:

```javascript
languages.length // 4
languages.length - 1 // 3
```

You can also use `.at(-1)`:

```javascript
console.log(languages.at(-1));
```

This returns the last element.

## 4. Modifying Array Elements

Unlike strings, JavaScript arrays are mutable.

**Mutable** means that their contents can be changed after creation.

Example:

```javascript
const fruits = ["Mango", "Orange", "Banana"];

fruits[1] = "Pineapple";

console.log(fruits);
```

Output:

```text
["Mango", "Pineapple", "Banana"]
```

Explanation:

- `fruits[1]` accesses the second element.
- `= "Pineapple"` replaces its previous value.
- The original array is modified.

### Important: const and arrays

You can modify an array declared with `const`.

```javascript
const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
```

This works because `const` prevents reassignment of the variable, not modification of the array's contents.

However, this will cause an error:

```javascript
const numbers = [10, 20, 30];

numbers = [40, 50, 60];
```

You are attempting to assign a completely new array to a constant variable.

## 5. Arrays Can Store Different Data Types

JavaScript arrays can contain different types of values.

```javascript
const user = [
    "Brian",
    22,
    true,
    null
];
```

This array contains:

- A string: `"Brian"`
- A number: `22`
- A boolean: `true`
- A null value: `null`

However, when building applications, it is often better to keep arrays organized around related information.

For example:

```javascript
const products = ["Laptop", "Phone", "Tablet"];
```

You can also store objects inside arrays:

```javascript
const students = [
    { name: "Brian", marks: 85 },
    { name: "Mary", marks: 90 },
    { name: "John", marks: 75 }
];
```

This is especially useful when developing real software systems.

## 6. Checking Whether a Value Is an Array

JavaScript has a method called `Array.isArray()`.

```javascript
const fruits = ["Mango", "Orange"];
const name = "Brian";

console.log(Array.isArray(fruits));
console.log(Array.isArray(name));
```

Output:

```text
true
false
```

Explanation:

- `Array.isArray(fruits)` checks whether `fruits` is an array.
- `Array.isArray(name)` checks whether `name` is an array.
- It returns `true` or `false`.

Do not depend on `typeof` to identify arrays.

```javascript
console.log(typeof fruits);
```

Output:

```text
object
```

Arrays are objects in JavaScript, so `Array.isArray()` is the correct test.

## Part 1 Exercises

1. Create an array containing five programming languages.
2. Display the first and third elements.
3. Display the last element using `length`.
4. Change the second element.
5. Create an empty array and add three names.
6. Create an array containing a string, number, boolean, and null.
7. Use `Array.isArray()` to check whether two variables are arrays.

**Progress: Part 1 of 4**

---

# PART 2: Essential Array Methods

JavaScript provides built-in methods that make working with arrays easier.

An **array method** is a built-in function that performs an operation on an array.

For example, you can use array methods to:

- Add elements.
- Remove elements.
- Search for elements.
- Sort values.
- Reverse an array.
- Extract portions of an array.
- Transform array data.

Let's examine the most important methods.

## 1. push() — Adding Elements to the End

The `push()` method adds one or more elements to the end of an array.

```javascript
const fruits = ["Mango", "Orange"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```text
["Mango", "Orange", "Banana"]
```

Explanation:

1. Create an array containing Mango and Orange.
2. Call `push("Banana")`.
3. JavaScript adds Banana at the end.
4. Display the updated array.

You can add multiple elements:

```javascript
fruits.push("Pineapple", "Apple");
```

`push()` modifies the original array and returns its new length.

## 2. pop() — Removing the Last Element

The `pop()` method removes the last element from an array.

```javascript
const fruits = ["Mango", "Orange", "Banana"];

const removedFruit = fruits.pop();

console.log(fruits);
console.log(removedFruit);
```

Output:

```text
["Mango", "Orange"]
Banana
```

Explanation:

- `fruits.pop()` removes Banana.
- The removed value is stored in `removedFruit`.
- The first `console.log()` displays the updated array.
- The second displays the removed element.

`pop()` modifies the original array.

## 3. unshift() — Adding Elements to the Beginning

The `unshift()` method adds elements at the beginning of an array.

```javascript
const numbers = [20, 30, 40];

numbers.unshift(10);

console.log(numbers);
```

Output:

```text
[10, 20, 30, 40]
```

The new element is placed at index `0`, and the other elements move to higher indexes.

## 4. shift() — Removing the First Element

The `shift()` method removes the first element.

```javascript
const numbers = [10, 20, 30, 40];

numbers.shift();

console.log(numbers);
```

Output:

```text
[20, 30, 40]
```

The element `10` is removed.

### Understanding the four methods

| Method | Operation | Position |
|---|---|---|
| `push()` | Adds an element | End |
| `pop()` | Removes an element | End |
| `unshift()` | Adds an element | Beginning |
| `shift()` | Removes an element | Beginning |

These methods are particularly useful when implementing shopping carts, task lists, and queues.

## 5. splice() — Adding, Removing, and Replacing Elements

The `splice()` method is one of the most powerful array methods.

It can:

1. Remove elements.
2. Insert elements.
3. Replace existing elements.

### Removing elements

```javascript
const fruits = ["Mango", "Orange", "Banana", "Apple"];

fruits.splice(1, 2);

console.log(fruits);
```

Output:

```text
["Mango", "Apple"]
```

Explanation:

```javascript
fruits.splice(1, 2);
```

- The first argument, `1`, is the starting index.
- The second argument, `2`, is the number of elements to remove.
- JavaScript removes Orange and Banana.

### Adding elements

```javascript
const fruits = ["Mango", "Banana"];

fruits.splice(1, 0, "Orange");

console.log(fruits);
```

Output:

```text
["Mango", "Orange", "Banana"]
```

Explanation:

- `1` means start at index 1.
- `0` means remove zero elements.
- `"Orange"` is inserted at that position.

### Replacing elements

```javascript
const fruits = ["Mango", "Orange", "Banana"];

fruits.splice(1, 1, "Pineapple");

console.log(fruits);
```

Output:

```text
["Mango", "Pineapple", "Banana"]
```

Here, JavaScript removes one element at index 1 and inserts Pineapple.

**Important:** `splice()` changes the original array.

## 6. slice() — Extracting Array Elements

The `slice()` method extracts part of an array without modifying the original array.

```javascript
const languages = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "PHP"
];

const selectedLanguages = languages.slice(1, 4);

console.log(selectedLanguages);
console.log(languages);
```

Output:

```text
["JavaScript", "Java", "C++"]

["Python", "JavaScript", "Java", "C++", "PHP"]
```

Explanation:

```javascript
languages.slice(1, 4);
```

- `1` is the starting index.
- `4` is the ending index.
- The ending index is excluded.
- Elements at indexes 1, 2, and 3 are returned.

### Negative indexes

You can use negative indexes to count from the end.

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(-2));
```

Output:

```text
[40, 50]
```

This extracts the last two elements.

### Difference between slice() and splice()

| Feature | slice() | splice() |
|---|---|---|
| Extracts elements | Yes | Can remove and return elements |
| Adds elements | No | Yes |
| Removes elements | No | Yes |
| Modifies original array | No | Yes |

Remember:

- `slice()` creates a new array.
- `splice()` modifies the existing array.

## 7. indexOf() — Finding an Element's Position

The `indexOf()` method searches for an element and returns its first index.

```javascript
const fruits = ["Mango", "Orange", "Banana"];

console.log(fruits.indexOf("Orange"));
```

Output:

```text
1
```

If the element does not exist, JavaScript returns `-1`.

```javascript
console.log(fruits.indexOf("Apple"));
```

Output:

```text
-1
```

You can use this method to check whether an item exists.

```javascript
if (fruits.indexOf("Mango") !== -1) {
    console.log("Fruit found");
}
```

## 8. includes() — Checking Whether an Element Exists

The `includes()` method checks whether an array contains a particular value.

```javascript
const users = ["Brian", "Mary", "John"];

console.log(users.includes("Mary"));
console.log(users.includes("Peter"));
```

Output:

```text
true
false
```

Unlike `indexOf()`, this method returns a boolean.

It is often easier to use when you only need to check whether something exists.

## 9. join() — Converting an Array into a String

The `join()` method combines array elements into a single string.

```javascript
const languages = ["Python", "JavaScript", "Java"];

const result = languages.join(", ");

console.log(result);
```

Output:

```text
Python, JavaScript, Java
```

Explanation:

- `join(", ")` combines the elements.
- `", "` specifies the separator.
- The result is a string, not an array.

You can use different separators:

```javascript
languages.join(" - ");
languages.join(" | ");
languages.join(" ");
```

## 10. concat() — Combining Arrays

The `concat()` method combines two or more arrays into a new array.

```javascript
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Python", "PHP"];

const technologies = frontend.concat(backend);

console.log(technologies);
```

Output:

```text
["HTML", "CSS", "JavaScript", "Node.js", "Python", "PHP"]
```

Explanation:

1. Create the frontend array.
2. Create the backend array.
3. Use `concat()` to combine them.
4. Store the result in `technologies`.

The original arrays remain unchanged.

You can also use the spread operator:

```javascript
const technologies = [...frontend, ...backend];
```

This creates a new array containing elements from both arrays.

## 11. reverse() — Reversing an Array

The `reverse()` method reverses the order of elements.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers);
```

Output:

```text
[5, 4, 3, 2, 1]
```

**Important:** `reverse()` modifies the original array.

To reverse without modifying the original:

```javascript
const reversed = [...numbers].reverse();
```

This creates a shallow copy before reversing it.

## 12. sort() — Sorting Array Elements

The `sort()` method sorts elements in place.

For strings:

```javascript
const fruits = ["Orange", "Apple", "Mango", "Banana"];

fruits.sort();

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango", "Orange"]
```

### Sorting numbers

Be careful when sorting numbers.

```javascript
const numbers = [100, 5, 20, 3];

numbers.sort();

console.log(numbers);
```

This does not produce the expected numerical order because the default sort compares string representations.

Use a comparison function:

```javascript
const numbers = [100, 5, 20, 3];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

```text
[3, 5, 20, 100]
```

Explanation:

- `a` represents one element.
- `b` represents another element.
- `a - b` determines their numerical order.
- A negative result places `a` before `b`.
- A positive result places `a` after `b`.
- Zero means their order is equivalent for this comparison.

For descending order:

```javascript
numbers.sort((a, b) => b - a);
```

Output:

```text
[100, 20, 5, 3]
```

## Part 2 Exercises

1. Create an array of five names and add another name using `push()`.
2. Remove the last name using `pop()`.
3. Add a new name at the beginning using `unshift()`.
4. Remove the first name using `shift()`.
5. Use `splice()` to replace the third element.
6. Extract the first three elements using `slice()`.
7. Check whether a particular name exists using `includes()`.
8. Convert an array of names into a string using `join()`.
9. Combine two arrays using `concat()`.
10. Sort an array of numbers in ascending and descending order.

**Progress: Part 2 of 4**

---

# PART 3: Advanced Array Methods and Practical Applications

In this part, we will learn methods that are especially important when developing real-world applications.

These methods allow you to process large collections of information without manually writing loops for every operation.

## 1. forEach() — Performing an Operation on Every Element

The `forEach()` method executes a function once for each element in an array.

Example:

```javascript
const students = ["Brian", "Mary", "John"];

students.forEach(function(student) {
    console.log(student);
});
```

Output:

```text
Brian
Mary
John
```

Let's understand each line.

```javascript
const students = ["Brian", "Mary", "John"];
```

Creates an array containing three student names.

```javascript
students.forEach(function(student) {
```

- Calls `forEach()` on the students array.
- `function(student)` defines a callback function.
- `student` represents the current element being processed.

```javascript
console.log(student);
```

Displays the current student's name.

The callback executes once for every element.

You can also use an arrow function:

```javascript
students.forEach((student) => {
    console.log(student);
});
```

### Accessing the index

`forEach()` can provide both the element and its index.

```javascript
students.forEach((student, index) => {
    console.log(index, student);
});
```

Output:

```text
0 Brian
1 Mary
2 John
```

**Important:** `forEach()` returns `undefined`. It is designed for performing actions, not creating a transformed array.

## 2. map() — Transforming Array Elements

The `map()` method creates a new array by transforming every element in the original array.

Imagine you have prices in dollars and want to convert them into another currency using a fixed example exchange rate.

```javascript
const prices = [10, 20, 30];

const increasedPrices = prices.map((price) => {
    return price * 2;
});

console.log(increasedPrices);
```

Output:

```text
[20, 40, 60]
```

Explanation:

```javascript
const prices = [10, 20, 30];
```

Creates an array of three prices.

```javascript
prices.map((price) => {
```

Calls `map()` and processes every price.

```javascript
return price * 2;
```

Multiplies the current price by two.

```javascript
const increasedPrices = ...
```

Stores the new array returned by `map()`.

The original array remains unchanged.

### Another example: Extracting student names

```javascript
const students = [
    { name: "Brian", marks: 85 },
    { name: "Mary", marks: 90 },
    { name: "John", marks: 75 }
];

const names = students.map((student) => {
    return student.name;
});

console.log(names);
```

Output:

```text
["Brian", "Mary", "John"]
```

This is useful when an application needs only specific information from a collection of objects.

## 3. filter() — Selecting Elements Based on a Condition

The `filter()` method creates a new array containing only elements that satisfy a condition.

Example:

```javascript
const ages = [12, 18, 25, 15, 30, 16];

const adults = ages.filter((age) => {
    return age >= 18;
});

console.log(adults);
```

Output:

```text
[18, 25, 30]
```

Explanation:

- `ages` contains six values.
- `filter()` examines each value.
- `age >= 18` checks whether the current age is at least 18.
- Values that satisfy the condition are included.
- Values that fail the condition are excluded.

The original array remains unchanged.

### Practical example: Filtering available products

```javascript
const products = [
    { name: "Laptop", price: 80000, available: true },
    { name: "Phone", price: 30000, available: false },
    { name: "Tablet", price: 45000, available: true }
];

const availableProducts = products.filter((product) => {
    return product.available === true;
});

console.log(availableProducts);
```

The result contains the Laptop and Tablet because their `available` property is `true`.

This method is useful in e-commerce platforms when displaying products that are in stock.

## 4. find() — Finding the First Matching Element

The `find()` method returns the first element that satisfies a condition.

```javascript
const users = [
    { id: 1, name: "Brian" },
    { id: 2, name: "Mary" },
    { id: 3, name: "John" }
];

const user = users.find((user) => {
    return user.id === 2;
});

console.log(user);
```

Output:

```text
{ id: 2, name: "Mary" }
```

Explanation:

1. The array contains three user objects.
2. `find()` checks each object.
3. `user.id === 2` searches for the user whose ID is 2.
4. Mary is the first matching user.
5. The method returns that object.

If no element matches, `find()` returns `undefined`.

### Difference between find() and filter()

| Method | Result |
|---|---|
| `find()` | Returns the first matching element |
| `filter()` | Returns all matching elements |

For example:

```javascript
const numbers = [10, 20, 30, 20];

console.log(numbers.find((number) => number === 20));
console.log(numbers.filter((number) => number === 20));
```

Output:

```text
20
[20, 20]
```

## 5. findIndex() — Finding the Index of an Element

The `findIndex()` method returns the index of the first element that satisfies a condition.

```javascript
const students = [
    { name: "Brian", marks: 80 },
    { name: "Mary", marks: 90 },
    { name: "John", marks: 70 }
];

const index = students.findIndex((student) => {
    return student.name === "Mary";
});

console.log(index);
```

Output:

```text
1
```

If no matching element exists, it returns `-1`.

## 6. some() — Checking Whether At Least One Element Matches

The `some()` method checks whether at least one element satisfies a condition.

```javascript
const marks = [45, 55, 80, 35];

const hasPassed = marks.some((mark) => {
    return mark >= 50;
});

console.log(hasPassed);
```

Output:

```text
true
```

At least one student has marks greater than or equal to 50.

The method returns:

- `true` if at least one element matches.
- `false` if no element matches.

## 7. every() — Checking Whether All Elements Match

The `every()` method checks whether all elements satisfy a condition.

```javascript
const marks = [60, 70, 80, 90];

const allPassed = marks.every((mark) => {
    return mark >= 50;
});

console.log(allPassed);
```

Output:

```text
true
```

Every mark is at least 50.

Consider:

```javascript
const marks = [60, 40, 80, 90];

const allPassed = marks.every((mark) => mark >= 50);

console.log(allPassed);
```

Output:

```text
false
```

One student scored 40, so the condition is not satisfied by every element.

### some() versus every()

| Method | Meaning |
|---|---|
| `some()` | At least one element must match |
| `every()` | All elements must match |

## 8. reduce() — Reducing an Array to One Value

The `reduce()` method processes array elements and combines them into a single accumulated result.

It is commonly used for:

- Calculating totals.
- Calculating averages.
- Counting occurrences.
- Building summary objects.
- Calculating shopping cart totals.

Example:

```javascript
const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);
```

Output:

```text
600
```

Let's understand it carefully.

```javascript
prices.reduce((sum, price) => {
```

- `reduce()` processes every array element.
- `sum` is the accumulated value.
- `price` is the current element.

```javascript
return sum + price;
```

Adds the current price to the accumulated total.

```javascript
}, 0);
```

The `0` is the initial value of the accumulator.

The process looks like this:

| Step | sum before | price | sum after |
|---|---:|---:|---:|
| 1 | 0 | 100 | 100 |
| 2 | 100 | 200 | 300 |
| 3 | 300 | 300 | 600 |

The final result is `600`.

### Calculating the average

```javascript
const marks = [70, 80, 90, 60];

const total = marks.reduce((sum, mark) => {
    return sum + mark;
}, 0);

const average = total / marks.length;

console.log(average);
```

Output:

```text
75
```

First, `reduce()` calculates the total. Then the program divides the total by the number of marks.

## 9. flat() — Flattening Nested Arrays

Sometimes arrays contain other arrays.

These are called nested arrays.

```javascript
const numbers = [1, 2, [3, 4], [5, 6]];

console.log(numbers.flat());
```

Output:

```text
[1, 2, 3, 4, 5, 6]
```

The `flat()` method removes one level of nesting by default.

You can specify the depth:

```javascript
const numbers = [1, [2, [3, [4]]]];

console.log(numbers.flat(2));
```

Output:

```text
[1, 2, 3, [4]]
```

The argument `2` tells JavaScript to flatten two levels.

Use `flat(Infinity)` when you want to flatten all nested levels.

## 10. flatMap() — Mapping and Flattening

The `flatMap()` method performs a mapping operation and then flattens the result by one level.

Example:

```javascript
const numbers = [1, 2, 3];

const result = numbers.flatMap((number) => {
    return [number, number * 2];
});

console.log(result);
```

Output:

```text
[1, 2, 2, 4, 3, 6]
```

Explanation:

- The first number, `1`, produces `[1, 2]`.
- The second number, `2`, produces `[2, 4]`.
- The third number, `3`, produces `[3, 6]`.
- `flatMap()` combines the resulting arrays into one array.

## 11. Array.from() — Creating an Array from an Iterable or Array-like Value

`Array.from()` creates a new array from an iterable or array-like object.

For example:

```javascript
const name = "Brian";

const letters = Array.from(name);

console.log(letters);
```

Output:

```text
["B", "r", "i", "a", "n"]
```

It can also generate values using a mapping function.

```javascript
const numbers = Array.from({ length: 5 }, (_, index) => {
    return index + 1;
});

console.log(numbers);
```

Output:

```text
[1, 2, 3, 4, 5]
```

Explanation:

- `{ length: 5 }` describes an array-like object with five positions.
- `Array.from()` creates an array from those positions.
- `index` represents each position, starting at zero.
- `index + 1` generates values from 1 to 5.

## 12. at() — Accessing Elements Using Positive and Negative Indexes

The `at()` method allows you to access an array element by its index.

```javascript
const languages = ["Python", "JavaScript", "Java"];

console.log(languages.at(0));
console.log(languages.at(-1));
```

Output:

```text
Python
Java
```

Positive indexes count from the beginning, while negative indexes count from the end.

## 13. Modern Non-Mutating Array Methods

Many traditional array methods modify the original array.

Modern JavaScript also provides methods that return modified copies.

| Method | Purpose |
|---|---|
| `toReversed()` | Returns a reversed copy |
| `toSorted()` | Returns a sorted copy |
| `toSpliced()` | Returns a copy with elements added or removed |
| `with()` | Returns a copy with one element replaced |

Example:

```javascript
const numbers = [30, 10, 20];

const sortedNumbers = numbers.toSorted((a, b) => a - b);

console.log(sortedNumbers);
console.log(numbers);
```

Output:

```text
[10, 20, 30]
[30, 10, 20]
```

The original array remains unchanged.

These methods are useful when you want to preserve existing application data.

They are supported in modern JavaScript environments. Check compatibility if your application needs to support older browsers or runtimes.

## 14. Mutating and Non-Mutating Methods

Understanding which methods change the original array is important.

| Mutating methods | Non-mutating methods |
|---|---|
| `push()` | `map()` |
| `pop()` | `filter()` |
| `shift()` | `slice()` |
| `unshift()` | `concat()` |
| `splice()` | `flat()` |
| `sort()` | `toSorted()` |
| `reverse()` | `toReversed()` |

This distinction helps prevent accidental changes to application data.

---

## 15. Practical Project 1: Student Results Management System

Now let's build a simple program that manages student marks.

### Step 1: Create a project folder

Create a folder:

```text
array-projects
```

Inside it, create:

```text
student-results.js
```

### Step 2: Write the program

```javascript
const students = [
    { name: "Brian", marks: 85 },
    { name: "Mary", marks: 92 },
    { name: "John", marks: 45 },
    { name: "Peter", marks: 67 }
];

const passedStudents = students.filter((student) => {
    return student.marks >= 50;
});

const studentNames = passedStudents.map((student) => {
    return student.name;
});

const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

const average = totalMarks / students.length;

console.log("Passed Students:", studentNames);
console.log("Total Marks:", totalMarks);
console.log("Class Average:", average);
```

### Step 3: Understand the program

**First section:**

```javascript
const students = [
    { name: "Brian", marks: 85 },
    { name: "Mary", marks: 92 },
    { name: "John", marks: 45 },
    { name: "Peter", marks: 67 }
];
```

Creates an array of student objects.

Each object contains:

- `name`: The student's name.
- `marks`: The student's score.

**Second section:**

```javascript
const passedStudents = students.filter((student) => {
    return student.marks >= 50;
});
```

Filters students whose marks are at least 50.

John is excluded because he scored 45.

**Third section:**

```javascript
const studentNames = passedStudents.map((student) => {
    return student.name;
});
```

Extracts the names of students who passed.

**Fourth section:**

```javascript
const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);
```

Adds all student marks together.

The total is:

```text
85 + 92 + 45 + 67 = 289
```

**Fifth section:**

```javascript
const average = totalMarks / students.length;
```

Divides the total marks by the number of students.

```text
289 / 4 = 72.25
```

### Step 4: Run the program

Open your terminal in the project folder and execute:

```bash
node student-results.js
```

Expected output:

```text
Passed Students: [ 'Brian', 'Mary', 'Peter' ]
Total Marks: 289
Class Average: 72.25
```

## 16. Practical Project 2: Shopping Cart Calculator

Let's create a simple shopping cart that calculates the total amount a customer should pay.

Create a file:

```text
shopping-cart.js
```

Program:

```javascript
const cart = [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 1500, quantity: 2 },
    { name: "Keyboard", price: 3000, quantity: 1 }
];

const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);

console.log("Shopping Cart Summary");

cart.forEach((item) => {
    console.log(
        item.name,
        "x",
        item.quantity,
        "=",
        item.price * item.quantity
    );
});

console.log("Total Amount:", total);
```

### Line-by-line explanation

**1. Creating the cart**

```javascript
const cart = [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 1500, quantity: 2 },
    { name: "Keyboard", price: 3000, quantity: 1 }
];
```

Each object represents a product in the shopping cart.

It stores the product name, unit price, and quantity.

**2. Calculating the total**

```javascript
const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);
```

For every product:

- `item.price` gets its price.
- `item.quantity` gets the number purchased.
- Multiplication calculates the product subtotal.
- `sum` accumulates all subtotals.

Calculation:

| Product | Price | Quantity | Subtotal |
|---|---:|---:|---:|
| Laptop | 80,000 | 1 | 80,000 |
| Mouse | 1,500 | 2 | 3,000 |
| Keyboard | 3,000 | 1 | 3,000 |
| **Total** | | | **86,000** |

**3. Displaying the products**

```javascript
cart.forEach((item) => {
```

Processes every item in the cart.

```javascript
console.log(
    item.name,
    "x",
    item.quantity,
    "=",
    item.price * item.quantity
);
```

Displays the product name, quantity, and subtotal.

**4. Displaying the final total**

```javascript
console.log("Total Amount:", total);
```

Displays the total amount.

Expected output:

```text
Shopping Cart Summary
Laptop x 1 = 80000
Mouse x 2 = 3000
Keyboard x 1 = 3000
Total Amount: 86000
```

This is a simplified example. A real shopping system would also handle currency formatting, discounts, taxes, inventory, and server-side price verification.

## 17. Practical Project 3: Product Search System

Imagine you are developing an e-commerce application.

Customers should be able to search for products by name.

Create:

```text
product-search.js
```

Program:

```javascript
const products = [
    { name: "HP Laptop", price: 75000 },
    { name: "Dell Laptop", price: 85000 },
    { name: "Samsung Phone", price: 35000 },
    { name: "Apple Tablet", price: 60000 }
];

const searchTerm = "laptop";

const results = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
});

console.log("Search Results:");

results.forEach((product) => {
    console.log(product.name, "-", product.price);
});
```

### Explanation

The search term is:

```javascript
const searchTerm = "laptop";
```

This is what the customer wants to find.

The filtering operation:

```javascript
products.filter((product) => {
```

Checks each product.

The condition:

```javascript
product.name.toLowerCase().includes(searchTerm.toLowerCase());
```

Does two important things:

1. Converts the product name into lowercase.
2. Checks whether the search term exists inside the name.

This makes the search case-insensitive.

The final `forEach()` displays matching products.

Expected output:

```text
Search Results:
HP Laptop - 75000
Dell Laptop - 85000
```

## 18. Practical Project 4: Task Management System

Let's build a simple task management program.

```javascript
const tasks = [
    { title: "Complete JavaScript lesson", completed: true },
    { title: "Practice array methods", completed: false },
    { title: "Build a project", completed: false },
    { title: "Review variables", completed: true }
];

const completedTasks = tasks.filter((task) => {
    return task.completed === true;
});

const pendingTasks = tasks.filter((task) => {
    return task.completed === false;
});

console.log("Completed Tasks:");

completedTasks.forEach((task) => {
    console.log(task.title);
});

console.log("Pending Tasks:");

pendingTasks.forEach((task) => {
    console.log(task.title);
});

console.log("Total Tasks:", tasks.length);
console.log("Completed:", completedTasks.length);
console.log("Pending:", pendingTasks.length);
```

This program demonstrates how arrays can be used to organize and manage tasks.

The `filter()` method separates completed and pending tasks.

The `forEach()` method displays their titles.

The `length` property counts the total number of tasks in each collection.

## 19. Common Array Mistakes

### Mistake 1: Using an incorrect index

```javascript
const fruits = ["Mango", "Orange"];

console.log(fruits[2]);
```

Output:

```text
undefined
```

There is no element at index 2.

Correct approach:

```javascript
console.log(fruits[1]);
```

### Mistake 2: Forgetting that indexes start at zero

```javascript
const names = ["Brian", "Mary", "John"];

console.log(names[1]);
```

This displays Mary, not Brian.

The first element is at index 0.

### Mistake 3: Confusing slice() and splice()

```javascript
const numbers = [10, 20, 30];

numbers.slice(1, 2);

console.log(numbers);
```

The original array remains unchanged.

If you want to remove an element, use:

```javascript
numbers.splice(1, 1);
```

### Mistake 4: Using map() without returning a value

Incorrect:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((number) => {
    number * 2;
});
```

This returns:

```text
[undefined, undefined, undefined]
```

Why?

The callback does not return the calculated value.

Correct:

```javascript
const result = numbers.map((number) => {
    return number * 2;
});
```

### Mistake 5: Forgetting that sort() changes the original array

```javascript
const numbers = [30, 10, 20];

numbers.sort((a, b) => a - b);
```

The original array is modified.

If you want to preserve it:

```javascript
const sorted = numbers.toSorted((a, b) => a - b);
```

### Mistake 6: Using reduce() incorrectly

Incorrect:

```javascript
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
    return sum + number;
});
```

This works for this non-empty array, but there is no explicit initial value.

A safer and clearer approach is:

```javascript
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

Providing `0` makes the intended starting value explicit and allows the calculation to work with an empty array.

## Part 3 Practical Exercises

### Exercise 1: Employee Management

Create an array containing five employees.

Each employee should have:

- Name
- Department
- Salary

Tasks:

1. Display all employees.
2. Use `filter()` to find employees earning more than KSh 50,000.
3. Use `map()` to extract employee names.
4. Use `reduce()` to calculate the total salary.
5. Calculate the average salary.

### Exercise 2: Number Processor

Create an array:

```javascript
const numbers = [12, 5, 20, 8, 30, 15, 3];
```

Tasks:

1. Find numbers greater than 10.
2. Double every number using `map()`.
3. Find the first number greater than 15.
4. Check whether at least one number is greater than 25.
5. Check whether all numbers are positive.
6. Calculate the sum using `reduce()`.

### Exercise 3: Course Management

Create an array of courses containing:

- Course name
- Instructor
- Number of students
- Whether the course is active

Tasks:

1. Display all courses.
2. Find active courses.
3. Extract course names.
4. Find the course with the largest number of students.
5. Calculate the total number of students across all courses.

### Exercise 4: Mini Shopping Application

Create a shopping cart containing at least five products.

Implement:

1. Adding a product.
2. Removing the last product.
3. Searching for a product.
4. Filtering products below KSh 10,000.
5. Calculating the total cart value.
6. Sorting products by price.

**Progress: Part 3 of 4**

---

# PART 4: Kai Assessment and Lesson Completion

This assessment evaluates your understanding of JavaScript arrays, array indexing, array methods, and practical array manipulation.

Answer all questions and submit your responses to Kai for marking and feedback.

## Section A: Multiple-Choice Questions

**Question 1**

What is an array in JavaScript?

A. A function that performs calculations.

B. A structure used to store multiple values in one variable.

C. A method used to display messages.

D. A programming language.

**Question 2**

What is the index of the first element in a JavaScript array?

A. 1

B. -1

C. 0

D. 2

**Question 3**

Which method adds an element to the end of an array?

A. `pop()`

B. `push()`

C. `shift()`

D. `slice()`

**Question 4**

What does `pop()` do?

A. Adds an element at the beginning.

B. Removes the first element.

C. Removes the last element.

D. Sorts an array.

**Question 5**

Which method creates a new array containing elements that satisfy a condition?

A. `filter()`

B. `push()`

C. `reverse()`

D. `join()`

**Question 6**

What does `map()` do?

A. Removes all elements.

B. Transforms elements and creates a new array.

C. Sorts elements alphabetically.

D. Finds only the first element.

**Question 7**

Which method returns the first element that satisfies a condition?

A. `filter()`

B. `find()`

C. `every()`

D. `reduce()`

**Question 8**

What is the purpose of `reduce()`?

A. To reverse an array.

B. To add elements only at the beginning.

C. To combine array elements into an accumulated result.

D. To check whether an array is empty.

**Question 9**

What does `includes()` return?

A. An array.

B. A number.

C. A boolean.

D. An object.

**Question 10**

Which method checks whether every element satisfies a condition?

A. `some()`

B. `find()`

C. `every()`

D. `map()`

## Section B: Conceptual Questions

**Question 11**

Explain what an array is and give three real-world applications.

**Question 12**

Explain zero-based indexing. Why does JavaScript use index 0 for the first element?

**Question 13**

Differentiate between `slice()` and `splice()`.

**Question 14**

Explain the difference between `map()` and `forEach()`.

**Question 15**

Differentiate between `find()` and `filter()`.

**Question 16**

Explain the difference between `some()` and `every()`.

**Question 17**

What does it mean when an array is mutable? Give an example.

**Question 18**

Explain the difference between mutating and non-mutating array methods.

## Section C: Practical Programming Questions

**Question 19: Array Creation and Manipulation**

Create an array containing five programming languages.

Write a program that:

1. Displays the array.
2. Adds a language using `push()`.
3. Removes the last language using `pop()`.
4. Changes the second language.
5. Displays the final array.

**Question 20: Filtering and Mapping**

Given:

```javascript
const numbers = [10, 15, 20, 25, 30, 35, 40];
```

Write a program that:

1. Filters numbers greater than 20.
2. Doubles every number using `map()`.
3. Calculates the sum using `reduce()`.

**Question 21: Student Results**

Create an array containing at least four student objects.

Each student must have a name and marks.

Write a program that:

1. Displays all students.
2. Finds students who scored at least 50.
3. Extracts the names of students who passed.
4. Calculates the class average.
5. Finds the student with the highest marks.

**Question 22: Shopping Cart**

Create a shopping cart containing at least three products.

Each product should have a name, price, and quantity.

Write a program that:

1. Calculates the subtotal for each product.
2. Calculates the total shopping cart value.
3. Displays the products and their subtotals.
4. Identifies products costing more than KSh 10,000.

## Section D: Debugging Questions

**Question 23**

Identify and correct the mistake:

```javascript
const numbers = [10, 20, 30];

const doubled = numbers.map((number) => {
    number * 2;
});

console.log(doubled);
```

Explain why the original program does not produce the expected result.

**Question 24**

Identify and correct the mistake:

```javascript
const prices = [100, 20, 5, 300];

prices.sort();

console.log(prices);
```

The developer expects the numbers to be sorted numerically in ascending order.

Explain why the result is incorrect and provide the corrected code.

---

## Final Practical Challenge: Build a Mini Data Management System

Your final challenge is to combine the array methods you have learned.

Create a program called:

```text
data-management.js
```

Your application should manage a collection of products.

Each product should contain:

- Product ID
- Product name
- Category
- Price
- Stock quantity

### Requirements

Your application must:

1. Store at least six products in an array.
2. Display all products using `forEach()`.
3. Find a product using `find()`.
4. Filter products by category using `filter()`.
5. Extract product names using `map()`.
6. Calculate the total stock value using `reduce()`.
7. Check whether any product is out of stock using `some()`.
8. Check whether all products have a positive price using `every()`.
9. Sort products by price using `toSorted()`.
10. Display a summary of the inventory.

### Expected skills

By completing this challenge, you should demonstrate that you can:

- Create and manipulate arrays.
- Store objects inside arrays.
- Access and modify elements.
- Search and filter data.
- Transform collections.
- Calculate totals.
- Process structured information.
- Build practical programs using array methods.

## Kai Assessment Instructions

When you finish:

1. Submit your answers to Kai.
2. Submit your practical code.
3. Kai should evaluate your answers against the lesson objectives.
4. Incorrect answers should receive explanations and corrections.
5. Practical projects should be checked for correctness, code structure, and output.

## Lesson Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain what arrays are.
- [ ] Create empty and populated arrays.
- [ ] Access elements using indexes.
- [ ] Modify array elements.
- [ ] Use `push()`, `pop()`, `shift()`, and `unshift()`.
- [ ] Understand `slice()` and `splice()`.
- [ ] Search using `indexOf()`, `includes()`, and `find()`.
- [ ] Combine arrays using `concat()`.
- [ ] Sort and reverse arrays.
- [ ] Use `forEach()` and `map()`.
- [ ] Filter data using `filter()`.
- [ ] Use `reduce()` to calculate totals.
- [ ] Understand `some()` and `every()`.
- [ ] Work with arrays of objects.
- [ ] Build practical applications using array methods.

**Next recommended lesson: JavaScript Loops (`for`, `while`, `do...while`, `for...of`, and `for...in`).**

Progress: Part 4 of 4 — Lesson Complete