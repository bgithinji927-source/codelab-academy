# JAVASCRIPT PROGRAMMING
# Lesson: Strings and String Methods

# PART 1 OF 4: INTRODUCTION TO STRINGS

## 1. What Is a String?

A **string** is a JavaScript data type used to represent text.

Strings can contain:

- Letters.
- Numbers represented as text.
- Spaces.
- Symbols.
- Special characters.
- Sentences and paragraphs.

For example:

```javascript
const name = "Brian";
const course = "Software Development";
const message = "Welcome to CodeLab Academy!";
const phone = "0712345678";
```

All four variables contain strings.

Notice that even though `"0712345678"` contains numbers, JavaScript treats it as text because it is enclosed in quotation marks.

This is useful when storing phone numbers because you generally do not perform mathematical calculations on them.

## 2. Creating Strings in JavaScript

JavaScript provides three main ways to create strings.

### A. Single Quotes

You can create a string using single quotation marks.

```javascript
const name = 'Brian';

console.log(name);
```

Output:

```text
Brian
```

### B. Double Quotes

You can also use double quotation marks.

```javascript
const name = "Brian";

console.log(name);
```

Output:

```text
Brian
```

Both single and double quotation marks work in JavaScript.

### C. Template Literals

Template literals use backticks instead of normal quotation marks.

```javascript
const name = `Brian`;

console.log(name);
```

Output:

```text
Brian
```

Template literals are especially useful when combining text with variables or writing multiline strings.

For example:

```javascript
const name = "Brian";
const course = "Software Development";

const message = `My name is ${name} and I study ${course}.`;

console.log(message);
```

Output:

```text
My name is Brian and I study Software Development.
```

### Understanding `${}`

The expression:

```javascript
${name}
```

allows JavaScript to insert the value of a variable directly into a string.

This is called **string interpolation**.

Without template literals, you could write:

```javascript
const message = "My name is " + name + " and I study " + course + ".";
```

Both approaches work, but template literals are often easier to read.

### Comparison

| String syntax | Example | Purpose |
|---|---|---|
| Single quotes | `'Hello'` | Creating strings |
| Double quotes | `"Hello"` | Creating strings |
| Backticks | `` `Hello` `` | Creating strings with interpolation and multiline text |

---

## 3. Understanding String Length

Every JavaScript string has a property called `length`.

It tells you the number of UTF-16 code units in the string.

Example:

```javascript
const message = "JavaScript";

console.log(message.length);
```

Output:

```text
10
```

Why is the result 10?

Because the word contains ten ordinary English letters.

Let's try another example:

```javascript
const name = "Brian Njogu";

console.log(name.length);
```

Output:

```text
11
```

The space between the two names is also counted.

### Important: `length` Is a Property, Not a Method

Correct:

```javascript
message.length;
```

Incorrect:

```javascript
message.length();
```

You do not add parentheses because `length` is a property.

### Practical Application

Suppose you are developing a registration system that requires usernames to contain at least five characters.

You can use `length` to check the username.

```javascript
const username = "Brian";

if (username.length >= 5) {
    console.log("Username accepted.");
} else {
    console.log("Username is too short.");
}
```

Output:

```text
Username accepted.
```

This allows a program to validate text before accepting it.

---

## 4. Understanding String Indexing

JavaScript strings use zero-based indexing.

This means the first character has an index of 0, not 1.

Consider:

```javascript
const language = "JavaScript";
```

Its character positions are:

| Character | J | a | v | a | S | c | r | i | p | t |
|---|---|---|---|---|---|---|---|---|---|---|
| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |

You can access individual characters using square brackets.

Example:

```javascript
const language = "JavaScript";

console.log(language[0]);
console.log(language[4]);
console.log(language[9]);
```

Output:

```text
J
S
t
```

### Understanding the Code

```javascript
language[0]
```

Accesses the character at index 0.

```javascript
language[4]
```

Accesses the character at index 4.

```javascript
language[9]
```

Accesses the character at index 9.

### Accessing the Last Character

You can use the string's length to access its final character.

```javascript
const word = "JavaScript";

console.log(word[word.length - 1]);
```

Output:

```text
t
```

Why subtract one?

Because indexing starts at zero.

For a string containing ten characters, the final index is 9.

Therefore:

```javascript
word.length - 1
```

returns the final valid index.

You can also use:

```javascript
console.log(word.at(-1));
```

The `at()` method supports negative indexes, where `-1` means the last character.

---

## 5. Strings Are Immutable

An important characteristic of JavaScript strings is that they are **immutable**.

Immutable means that once a string value has been created, its individual characters cannot be changed directly.

Consider:

```javascript
let language = "JavaScript";

language[0] = "P";

console.log(language);
```

Output:

```text
JavaScript
```

The original string remains unchanged.

JavaScript does not allow you to replace individual characters this way.

### How Do You Change a String?

You create a new string and assign it to the variable.

```javascript
let language = "JavaScript";

language = "Python";

console.log(language);
```

Output:

```text
Python
```

The variable now refers to a different string value.

Remember:

- Strings are immutable.
- Variables declared with `let` can be reassigned.
- Variables declared with `const` cannot be reassigned.

---

## 6. Escape Characters

Sometimes you need to include special characters inside strings.

JavaScript uses the backslash (`\`) as an escape character.

For example, what if you want to display quotation marks inside a string?

```javascript
const message = "He said, \"Hello!\"";

console.log(message);
```

Output:

```text
He said, "Hello!"
```

The backslash tells JavaScript to treat the quotation mark as part of the text rather than as the end of the string.

### Common Escape Characters

| Escape character | Meaning |
|---|---|
| `\'` | Single quotation mark |
| `\"` | Double quotation mark |
| `\\` | Backslash |
| `\n` | New line |
| `\t` | Horizontal tab |
| `\r` | Carriage return |

Example using a new line:

```javascript
const message = "Hello\nWelcome to CodeLab Academy";

console.log(message);
```

Output:

```text
Hello
Welcome to CodeLab Academy
```

Example using a tab:

```javascript
console.log("Name:\tBrian");
```

Output:

```text
Name:   Brian
```

The tab creates horizontal spacing.

---

## 7. Multiline Strings

Sometimes you need to store text that occupies multiple lines.

Template literals make this easier.

Example:

```javascript
const message = `Welcome to CodeLab Academy.
Learn JavaScript.
Build real applications.
Develop your programming skills.`;

console.log(message);
```

Output:

```text
Welcome to CodeLab Academy.
Learn JavaScript.
Build real applications.
Develop your programming skills.
```

This is particularly useful when generating:

- Emails.
- Reports.
- Messages.
- HTML templates.
- Application notifications.

---

## 8. Combining Strings

Combining two or more strings is called **string concatenation**.

JavaScript uses the `+` operator to concatenate strings.

Example:

```javascript
const firstName = "Brian";
const lastName = "Njogu";

const fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
Brian Njogu
```

### Understanding the Code

```javascript
const firstName = "Brian";
```

Stores the first name.

```javascript
const lastName = "Njogu";
```

Stores the last name.

```javascript
const fullName = firstName + " " + lastName;
```

Combines the first name, a space, and the last name.

The result is stored in `fullName`.

### Using Template Literals Instead

```javascript
const fullName = `${firstName} ${lastName}`;
```

This produces the same result.

### Part 1 Exercises

1. Create three string variables containing your first name, course, and institution.
2. Display a sentence using template literals.
3. Create a string containing the word `JavaScript` and display its length.
4. Display the first, fifth, and last characters of the word `Programming`.
5. Explain why JavaScript strings are immutable.
6. Create a multiline message using template literals.
7. Explain the difference between string concatenation and string interpolation.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: IMPORTANT JAVASCRIPT STRING METHODS

String methods are built-in operations that allow you to manipulate and process text.

JavaScript provides many string methods for:

- Changing letter case.
- Removing spaces.
- Searching for text.
- Extracting characters.
- Replacing text.
- Splitting strings.
- Checking whether text exists.

Let's explore them individually.

## 9. `toUpperCase()`

The `toUpperCase()` method converts all letters in a string to uppercase.

Example:

```javascript
const name = "brian njogu";

const result = name.toUpperCase();

console.log(result);
```

Output:

```text
BRIAN NJOGU
```

### Explanation

```javascript
const name = "brian njogu";
```

Creates the original string.

```javascript
name.toUpperCase();
```

Converts the letters to uppercase.

```javascript
const result = name.toUpperCase();
```

Stores the new string in `result`.

**Important:** The original string is not modified.

---

## 10. `toLowerCase()`

The `toLowerCase()` method converts all letters in a string to lowercase.

Example:

```javascript
const language = "JAVASCRIPT";

console.log(language.toLowerCase());
```

Output:

```text
javascript
```

### Practical Application

Imagine a login system where a username should be compared without treating uppercase and lowercase letters differently.

You could normalize both values:

```javascript
const storedUsername = "Brian";
const enteredUsername = "BRIAN";

if (storedUsername.toLowerCase() === enteredUsername.toLowerCase()) {
    console.log("Username matches.");
}
```

Output:

```text
Username matches.
```

This approach is suitable for case-insensitive username comparisons if that is the application's intended rule.

Passwords, however, should generally remain case-sensitive.

---

## 11. `trim()`

The `trim()` method removes whitespace from the beginning and end of a string.

Example:

```javascript
const username = "   Brian   ";

const result = username.trim();

console.log(result);
```

Output:

```text
Brian
```

### Understanding the Code

The original string contains spaces before and after the name.

```javascript
username.trim();
```

Creates a new string without the surrounding whitespace.

It does not remove spaces between words.

For example:

```javascript
const name = "   Brian Njogu   ";

console.log(name.trim());
```

Output:

```text
Brian Njogu
```

### Related Methods

**`trimStart()`**

Removes whitespace from the beginning.

```javascript
const text = "   Hello";

console.log(text.trimStart());
```

Output:

```text
Hello
```

**`trimEnd()`**

Removes whitespace from the end.

```javascript
const text = "Hello   ";

console.log(text.trimEnd());
```

Output:

```text
Hello
```

### Practical Application: Form Validation

When users enter information into registration forms, they may accidentally enter unnecessary spaces.

You can clean the input before processing it.

```javascript
const username = "   Brian   ";

const cleanedUsername = username.trim();

if (cleanedUsername === "") {
    console.log("Username is required.");
} else {
    console.log("Username:", cleanedUsername);
}
```

This prevents an input containing only spaces from being accepted as a valid username.

---

## 12. `includes()`

The `includes()` method checks whether a string contains a particular sequence of characters.

It returns a Boolean value:

- `true` if the text exists.
- `false` if it does not.

Example:

```javascript
const message = "Welcome to CodeLab Academy";

console.log(message.includes("CodeLab"));
console.log(message.includes("Python"));
```

Output:

```text
true
false
```

### Explanation

```javascript
message.includes("CodeLab");
```

Checks whether the word `"CodeLab"` exists in the message.

```javascript
message.includes("Python");
```

Checks whether `"Python"` exists.

The method is case-sensitive.

For example:

```javascript
const text = "JavaScript";

console.log(text.includes("java"));
```

Output:

```text
false
```

The lowercase `"java"` does not exactly match the uppercase `"Java"`.

### Practical Application

You can use `includes()` to implement a simple search feature.

```javascript
const products = [
    "Laptop",
    "Keyboard",
    "Mouse",
    "Monitor"
];

const search = "Mouse";

for (const product of products) {
    if (product.includes(search)) {
        console.log("Product found:", product);
    }
}
```

Output:

```text
Product found: Mouse
```

This is a basic exact-case substring search.

---

## 13. `startsWith()`

The `startsWith()` method checks whether a string begins with specified text.

Example:

```javascript
const website = "https://firebox.live";

console.log(website.startsWith("https"));
console.log(website.startsWith("http"));
```

Output:

```text
true
true
```

Both values are prefixes of the string.

### Practical Application

You can use `startsWith()` to check whether a piece of text begins with a particular prefix.

```javascript
const filename = "report.pdf";

if (filename.startsWith("report")) {
    console.log("This is a report file.");
}
```

Output:

```text
This is a report file.
```

Remember that this only checks the text prefix. It does not verify that a file is safe or genuine.

---

## 14. `endsWith()`

The `endsWith()` method checks whether a string ends with specified text.

Example:

```javascript
const filename = "document.pdf";

console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".jpg"));
```

Output:

```text
true
false
```

### Practical Application

You can use it to identify a filename extension.

```javascript
const filename = "lesson.pdf";

if (filename.endsWith(".pdf")) {
    console.log("PDF file detected.");
}
```

This is useful for simple file-name checks, although real file validation should not rely only on extensions.

---

## 15. `indexOf()`

The `indexOf()` method searches for a value inside a string and returns the index of its first occurrence.

Example:

```javascript
const language = "JavaScript";

console.log(language.indexOf("S"));
console.log(language.indexOf("a"));
console.log(language.indexOf("Python"));
```

Output:

```text
4
1
-1
```

### Explanation

```javascript
language.indexOf("S");
```

Finds the first occurrence of `"S"`.

Its position is 4.

```javascript
language.indexOf("a");
```

Finds the first occurrence of `"a"`.

Its position is 1.

```javascript
language.indexOf("Python");
```

The word does not exist, so JavaScript returns `-1`.

### Practical Application

You can use `indexOf()` to check whether text exists.

```javascript
const email = "brian@example.com";

if (email.indexOf("@") !== -1) {
    console.log("An @ symbol exists.");
}
```

A more readable alternative is:

```javascript
email.includes("@");
```

---

## 16. `lastIndexOf()`

The `lastIndexOf()` method returns the index of the last occurrence of a specified value.

Example:

```javascript
const text = "JavaScript is powerful and JavaScript is popular";

console.log(text.indexOf("JavaScript"));
console.log(text.lastIndexOf("JavaScript"));
```

Output:

```text
0
29
```

The first method finds the first occurrence.

The second method finds the last occurrence.

This is useful when searching through text containing repeated words or characters.

---

## 17. `slice()`

The `slice()` method extracts part of a string and returns it as a new string.

Syntax:

```javascript
string.slice(start, end);
```

- `start` is the starting index.
- `end` is the index where extraction stops.
- The character at the ending index is not included.

Example:

```javascript
const language = "JavaScript";

const result = language.slice(0, 4);

console.log(result);
```

Output:

```text
Java
```

### Explanation

The string has these indexes:

| Character | J | a | v | a | S | c | r | i | p | t |
|---|---|---|---|---|---|---|---|---|---|---|
| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |

The expression:

```javascript
language.slice(0, 4);
```

starts at index 0 and stops before index 4.

Therefore, the extracted characters are:

```text
Java
```

### Using Negative Indexes

You can also use negative indexes.

```javascript
const language = "JavaScript";

console.log(language.slice(-6));
```

Output:

```text
Script
```

A negative index counts backwards from the end of the string.

### Practical Application: Extracting a Username

Suppose you have an email address and want to extract the part before the `@` symbol.

```javascript
const email = "brian@example.com";

const position = email.indexOf("@");

const username = email.slice(0, position);

console.log(username);
```

Output:

```text
brian
```

The program first finds the position of `@`.

It then extracts everything before that position.

For real email processing, use proper validation and parsing rather than relying on this simplified example alone.

---

## 18. `substring()`

The `substring()` method also extracts part of a string.

Example:

```javascript
const language = "JavaScript";

console.log(language.substring(0, 4));
```

Output:

```text
Java
```

It looks similar to `slice()`.

However, there are differences.

| Feature | `slice()` | `substring()` |
|---|---|---|
| Extracts part of a string | Yes | Yes |
| Supports negative indexes | Yes | No |
| Negative indexes | Count backwards from the end | Treated as zero |
| If start is greater than end | Returns an empty string | Swaps the two positions |

Example:

```javascript
const word = "JavaScript";

console.log(word.slice(-6));
console.log(word.substring(-6, 4));
```

Output:

```text
Script
Java
```

Both methods are useful, but `slice()` is generally a convenient choice when negative indexes are needed.

---

## 19. `charAt()`

The `charAt()` method returns the character at a specified position.

Example:

```javascript
const language = "JavaScript";

console.log(language.charAt(0));
console.log(language.charAt(4));
```

Output:

```text
J
S
```

It is similar to bracket notation:

```javascript
language[0];
```

One difference is that `charAt()` returns an empty string when the index is out of range, while bracket notation returns `undefined`.

Example:

```javascript
console.log(language.charAt(50));
console.log(language[50]);
```

Output:

```text
undefined
```

The first output is an empty string, so it may appear as a blank line.

The second output is `undefined`.

---

## 20. `replace()`

The `replace()` method searches for text and replaces the first matching occurrence by default.

Example:

```javascript
const message = "I love Python";

const result = message.replace("Python", "JavaScript");

console.log(result);
```

Output:

```text
I love JavaScript
```

### Explanation

```javascript
message.replace("Python", "JavaScript");
```

- `"Python"` is the text being searched for.
- `"JavaScript"` is the replacement text.

The method returns a new string.

The original string remains unchanged.

### Replacing the First Occurrence

```javascript
const text = "Java is popular. Java is powerful.";

console.log(text.replace("Java", "Python"));
```

Output:

```text
Python is popular. Java is powerful.
```

Only the first occurrence is replaced.

### Replacing All Occurrences

You can use `replaceAll()`.

```javascript
const text = "Java is popular. Java is powerful.";

console.log(text.replaceAll("Java", "Python"));
```

Output:

```text
Python is popular. Python is powerful.
```

You can also use a regular expression with the global flag.

---

## 21. `split()`

The `split()` method divides a string into an array of smaller strings.

It uses a specified separator to determine where to divide the text.

Example:

```javascript
const names = "Brian,Mary,John,Peter";

const result = names.split(",");

console.log(result);
```

Output:

```text
[ 'Brian', 'Mary', 'John', 'Peter' ]
```

### Explanation

```javascript
const names = "Brian,Mary,John,Peter";
```

Creates a string containing several names separated by commas.

```javascript
names.split(",");
```

Tells JavaScript to divide the string wherever it finds a comma.

The result is an array.

### Splitting a Sentence

```javascript
const sentence = "JavaScript is powerful";

const words = sentence.split(" ");

console.log(words);
```

Output:

```text
[ 'JavaScript', 'is', 'powerful' ]
```

The separator is a space.

### Splitting Into Individual Characters

```javascript
const language = "CODE";

console.log(language.split(""));
```

Output:

```text
[ 'C', 'O', 'D', 'E' ]
```

For Unicode text containing complex characters, splitting with an empty string can separate characters incorrectly. `Array.from()` or `for...of` is generally better when you want Unicode code points.

### Practical Application

Imagine a registration system that receives a list of skills separated by commas.

```javascript
const skills = "JavaScript,Python,SQL,Node.js";

const skillList = skills.split(",");

console.log(skillList);
```

Output:

```text
[ 'JavaScript', 'Python', 'SQL', 'Node.js' ]
```

The program converts one string into an array that can be processed individually.

---

## 22. `repeat()`

The `repeat()` method creates a new string containing the original text repeated a specified number of times.

Example:

```javascript
const word = "Hello ";

console.log(word.repeat(3));
```

Output:

```text
Hello Hello Hello
```

Another example:

```javascript
const line = "-";

console.log(line.repeat(20));
```

Output:

```text
--------------------
```

This can be useful when generating separators or simple text patterns.

### Part 2 Exercises

1. Convert `"javascript"` into uppercase.
2. Convert `"CODELAB ACADEMY"` into lowercase.
3. Remove unnecessary spaces from `"   Hello World   "`.
4. Check whether `"JavaScript is powerful"` contains `"powerful"`.
5. Extract `"Script"` from `"JavaScript"` using `slice()`.
6. Replace `"Python"` with `"JavaScript"` in a sentence.
7. Split `"HTML,CSS,JavaScript,Python"` into an array.
8. Find the position of the first and last occurrence of `"a"` in `"banana"`.
9. Explain the difference between `slice()` and `substring()`.
10. Explain the difference between `replace()` and `replaceAll()`.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: ADVANCED STRING OPERATIONS AND PRACTICAL PROJECTS

## 23. Understanding String Comparison

JavaScript allows you to compare strings using comparison operators.

Example:

```javascript
const first = "Apple";
const second = "Banana";

console.log(first === second);
```

Output:

```text
false
```

The strings are not equal.

### Case Sensitivity

String comparisons are case-sensitive.

```javascript
console.log("JavaScript" === "javascript");
```

Output:

```text
false
```

The uppercase `J` is different from the lowercase `j`.

To compare strings without considering letter case:

```javascript
const first = "JavaScript";
const second = "JAVASCRIPT";

console.log(first.toLowerCase() === second.toLowerCase());
```

Output:

```text
true
```

### Comparing Strings Alphabetically

JavaScript also supports relational comparisons.

```javascript
console.log("Apple" < "Banana");
```

Output:

```text
true
```

String comparison is based on Unicode code units, not a universal human-language dictionary order.

For language-aware sorting, use `localeCompare()`.

Example:

```javascript
const result = "Apple".localeCompare("Banana");

console.log(result);
```

A negative result indicates that `"Apple"` sorts before `"Banana"` under the selected locale's comparison rules.

---

## 24. The `concat()` Method

The `concat()` method joins strings together.

Example:

```javascript
const firstName = "Brian";
const lastName = "Njogu";

const fullName = firstName.concat(" ", lastName);

console.log(fullName);
```

Output:

```text
Brian Njogu
```

It performs a similar task to the `+` operator.

For most everyday string concatenation, template literals or `+` are usually easier to read.

---

## 25. `padStart()` and `padEnd()`

These methods add characters to the beginning or end of a string until it reaches a specified length.

### A. `padStart()`

Example:

```javascript
const number = "7";

console.log(number.padStart(3, "0"));
```

Output:

```text
007
```

Explanation:

- The original string is `"7"`.
- The required length is 3.
- JavaScript adds zeros at the beginning until the length reaches 3.

### B. `padEnd()`

Example:

```javascript
const number = "7";

console.log(number.padEnd(3, "0"));
```

Output:

```text
700
```

This time, the zeros are added at the end.

### Practical Application

You can use padding to format simple reference numbers.

```javascript
const orderNumber = "42";

const formatted = orderNumber.padStart(6, "0");

console.log(formatted);
```

Output:

```text
000042
```

This is useful for displaying consistently formatted identifiers.

---

## 26. `match()` and Regular Expressions

The `match()` method searches a string using a regular expression.

A **regular expression**, commonly called a regex, is a pattern used to search, validate, or manipulate text.

Example:

```javascript
const message = "My number is 12345";

const result = message.match(/\d+/);

console.log(result);
```

Output includes a match containing:

```text
12345
```

### Understanding the Pattern

```javascript
/\d+/
```

This is a regular expression.

- `\d` matches a digit.
- `+` means one or more occurrences.

Therefore, the pattern searches for a sequence of one or more digits.

### Finding All Matches

```javascript
const text = "I have 10 books and 20 pens.";

const result = text.match(/\d+/g);

console.log(result);
```

Output:

```text
[ '10', '20' ]
```

The `g` flag means global matching, so JavaScript finds all matches rather than stopping at the first one.

### Important Regular Expression Flags

| Flag | Purpose |
|---|---|
| `g` | Find all matches. |
| `i` | Ignore letter case. |
| `m` | Enable multiline anchor behavior. |
| `s` | Allow the dot (`.`) to match line terminators. |

---

## 27. `search()`

The `search()` method returns the index where a regular expression first matches.

Example:

```javascript
const text = "Learning JavaScript";

console.log(text.search(/JavaScript/));
```

Output:

```text
9
```

The word `"JavaScript"` starts at index 9.

If no match is found, the method returns `-1`.

Unlike `match()`, `search()` returns a position rather than the matching text.

---

## 28. `matchAll()`

The `matchAll()` method returns an iterator containing all matches of a regular expression.

It is useful when you need detailed information about multiple matches.

Example:

```javascript
const text = "Order 123 and Order 456";

const matches = text.matchAll(/\d+/g);

for (const match of matches) {
    console.log(match[0]);
}
```

Output:

```text
123
456
```

Explanation:

- `matchAll()` finds all matching digit sequences.
- The regular expression uses `g` to search globally.
- The loop retrieves each match.
- `match[0]` contains the matched text.

---

## 29. `normalize()`

JavaScript strings can represent visually identical Unicode text in different underlying ways.

The `normalize()` method converts a string into a selected Unicode normalization form.

Example:

```javascript
const text = "é";

const normalized = text.normalize("NFC");

console.log(normalized);
```

Output:

```text
é
```

This can be useful when comparing or processing Unicode text.

For example, some accented characters can be represented as one combined character or as a base character followed by a combining mark.

Normalization can help standardize such representations.

---

## 30. `localeCompare()`

The `localeCompare()` method compares strings according to language-sensitive sorting rules.

Example:

```javascript
const names = ["Peter", "Brian", "Mary", "John"];

names.sort((a, b) => a.localeCompare(b));

console.log(names);
```

Output:

```text
[ 'Brian', 'John', 'Mary', 'Peter' ]
```

Explanation:

- `sort()` organizes the array.
- `localeCompare()` compares two names.
- The result determines their sorting order.

This is useful when sorting names, products, and other text records.

---

# PRACTICAL PROJECTS

## 31. Project 1: Username Validation System

Let's create a simple username validation system.

The program will:

1. Accept a username.
2. Remove unnecessary spaces.
3. Check whether it is empty.
4. Check the minimum length.
5. Reject spaces within the username.
6. Display the validation result.

Create a file:

```text
username-validator.js
```

Code:

```javascript
function validateUsername(username) {

    username = username.trim();

    if (username === "") {
        return "Username cannot be empty.";
    }

    if (username.length < 3) {
        return "Username must contain at least 3 characters.";
    }

    if (username.includes(" ")) {
        return "Username cannot contain spaces.";
    }

    return "Username accepted.";
}

console.log(validateUsername("  Brian  "));
console.log(validateUsername("AB"));
console.log(validateUsername("Brian Njogu"));
console.log(validateUsername("   "));
```

Output:

```text
Username accepted.
Username must contain at least 3 characters.
Username cannot contain spaces.
Username cannot be empty.
```

### Understanding the Program

**Step 1: Create the validation function**

```javascript
function validateUsername(username) {
```

Creates a function that accepts a username.

**Step 2: Clean the input**

```javascript
username = username.trim();
```

Removes unnecessary whitespace from both ends.

**Step 3: Check whether the username is empty**

```javascript
if (username === "") {
    return "Username cannot be empty.";
}
```

If the username is empty after trimming, the function immediately returns an error.

**Step 4: Check the length**

```javascript
if (username.length < 3) {
    return "Username must contain at least 3 characters.";
}
```

Rejects usernames that contain fewer than three UTF-16 code units.

**Step 5: Check for spaces**

```javascript
if (username.includes(" ")) {
    return "Username cannot contain spaces.";
}
```

Checks whether the username contains a normal space character.

**Step 6: Return success**

```javascript
return "Username accepted.";
```

If none of the validation conditions fail, the function accepts the username.

This is a basic validation example. A production username system may also need rules for allowed characters, uniqueness, reserved words, and security.

---

## 32. Project 2: Email Text Analyzer

Let's create a program that extracts useful information from an email address.

Create:

```text
email-analyzer.js
```

Code:

```javascript
function analyzeEmail(email) {

    email = email.trim();

    const atPosition = email.indexOf("@");

    if (atPosition === -1) {
        return "Invalid email format.";
    }

    const username = email.slice(0, atPosition);

    const domain = email.slice(atPosition + 1);

    return {
        originalEmail: email,
        username: username,
        domain: domain
    };
}

const result = analyzeEmail("brian@example.com");

console.log(result);
```

Output:

```text
{
  originalEmail: 'brian@example.com',
  username: 'brian',
  domain: 'example.com'
}
```

### Understanding the Program

**Step 1: Create the function**

```javascript
function analyzeEmail(email) {
```

Accepts an email address.

**Step 2: Remove surrounding spaces**

```javascript
email = email.trim();
```

Cleans the supplied text.

**Step 3: Find the `@` symbol**

```javascript
const atPosition = email.indexOf("@");
```

Searches for the position of the `@` symbol.

**Step 4: Check whether the symbol exists**

```javascript
if (atPosition === -1) {
    return "Invalid email format.";
}
```

If `indexOf()` returns `-1`, the symbol was not found.

**Step 5: Extract the username**

```javascript
const username = email.slice(0, atPosition);
```

Extracts everything before the `@` symbol.

**Step 6: Extract the domain**

```javascript
const domain = email.slice(atPosition + 1);
```

Extracts everything after the `@` symbol.

**Step 7: Return an object**

```javascript
return {
    originalEmail: email,
    username: username,
    domain: domain
};
```

Returns the extracted information as an object.

**Important:** This is a text-analysis demonstration, not a complete email validator. Real email validation requires additional syntax checks and, where necessary, verification that the address can receive messages.

---

## 33. Project 3: Searchable Product Catalog

Now let's build a simple product search feature.

Create:

```text
product-search.js
```

Code:

```javascript
const products = [
    "Laptop",
    "Wireless Mouse",
    "Mechanical Keyboard",
    "Monitor",
    "USB Cable",
    "Headphones"
];

function searchProducts(searchTerm) {

    const query = searchTerm.trim().toLowerCase();

    if (query === "") {
        return [];
    }

    return products.filter(product => {
        return product.toLowerCase().includes(query);
    });
}

console.log(searchProducts("mouse"));
console.log(searchProducts("KEYBOARD"));
console.log(searchProducts("monitor"));
```

Output:

```text
[ 'Wireless Mouse' ]
[ 'Mechanical Keyboard' ]
[ 'Monitor' ]
```

### Understanding the Program

**Step 1: Create the product array**

Contains the available products.

**Step 2: Create the search function**

```javascript
function searchProducts(searchTerm) {
```

Accepts the text entered by the user.

**Step 3: Normalize the search text**

```javascript
const query = searchTerm.trim().toLowerCase();
```

- `trim()` removes surrounding spaces.
- `toLowerCase()` converts the search text to lowercase.

**Step 4: Reject empty searches**

```javascript
if (query === "") {
    return [];
}
```

Returns an empty array when the search term is empty.

**Step 5: Search the product array**

```javascript
return products.filter(product => {
    return product.toLowerCase().includes(query);
});
```

This combines several JavaScript concepts.

- `filter()` examines every product.
- `toLowerCase()` makes the product text lowercase.
- `includes()` checks whether the search term exists.
- Matching products are placed in a new array.

This is a basic search system similar to the filtering logic used in shopping applications.

---

## 34. Project 4: Text Statistics Analyzer

Let's create a program that analyzes a sentence.

It will calculate:

- Total characters.
- Total characters excluding spaces.
- Number of words.
- Uppercase version.
- Lowercase version.

Create:

```text
text-analyzer.js
```

Code:

```javascript
function analyzeText(text) {

    const trimmedText = text.trim();

    const words = trimmedText === ""
        ? []
        : trimmedText.split(/\s+/);

    const charactersWithoutSpaces = trimmedText.replace(/\s/g, "");

    return {
        originalText: text,
        totalCharacters: text.length,
        charactersWithoutSpaces: charactersWithoutSpaces.length,
        wordCount: words.length,
        uppercase: text.toUpperCase(),
        lowercase: text.toLowerCase()
    };
}

const result = analyzeText("JavaScript is an amazing language");

console.log(result);
```

Output:

```text
{
  originalText: 'JavaScript is an amazing language',
  totalCharacters: 34,
  charactersWithoutSpaces: 30,
  wordCount: 5,
  uppercase: 'JAVASCRIPT IS AN AMAZING LANGUAGE',
  lowercase: 'javascript is an amazing language'
}
```

### Understanding the Program

**Step 1: Clean the sentence**

```javascript
const trimmedText = text.trim();
```

Removes whitespace from the beginning and end.

**Step 2: Count the words**

```javascript
const words = trimmedText === ""
    ? []
    : trimmedText.split(/\s+/);
```

This uses the ternary operator.

If the trimmed text is empty, it creates an empty array.

Otherwise, it splits the text using a regular expression.

The pattern:

```javascript
/\s+/
```

means one or more whitespace characters.

This allows the program to handle multiple spaces between words.

**Step 3: Remove whitespace**

```javascript
const charactersWithoutSpaces = trimmedText.replace(/\s/g, "");
```

Uses `replace()` to remove whitespace characters.

- `\s` matches whitespace.
- `g` searches globally.
- `""` replaces the matches with nothing.

**Step 4: Return the statistics**

The function returns an object containing all the calculated information.

For example:

```javascript
wordCount: words.length
```

Uses the array's length to determine how many words were identified.

### Important Unicode Note

JavaScript's `length` property counts UTF-16 code units, not necessarily user-perceived characters.

For ordinary English text, this distinction usually does not matter.

For emojis and some other Unicode symbols, it can make a difference.

For example:

```javascript
const emoji = "😀";

console.log(emoji.length);
console.log(Array.from(emoji).length);
```

Output:

```text
2
1
```

The emoji uses two UTF-16 code units but represents one Unicode code point.

If you need to count visible user-perceived characters accurately, Unicode grapheme segmentation using `Intl.Segmenter` is more appropriate.

---

## 35. Common String Programming Mistakes

### Mistake 1: Using `length()` Instead of `length`

Incorrect:

```javascript
const name = "Brian";

console.log(name.length());
```

Correct:

```javascript
console.log(name.length);
```

Reason: `length` is a property, not a method.

### Mistake 2: Forgetting That String Methods Return New Strings

Incorrect expectation:

```javascript
let name = "brian";

name.toUpperCase();

console.log(name);
```

Output:

```text
brian
```

Correct:

```javascript
let name = "brian";

name = name.toUpperCase();

console.log(name);
```

Output:

```text
BRIAN
```

The result must be stored if you want to use the transformed string.

### Mistake 3: Confusing Indexes

Remember that JavaScript starts indexing from zero.

```javascript
const word = "Hello";

console.log(word[0]);
```

Output:

```text
H
```

### Mistake 4: Forgetting That `includes()` Is Case-Sensitive

```javascript
const text = "JavaScript";

console.log(text.includes("javascript"));
```

Output:

```text
false
```

If case-insensitive searching is required, normalize both strings first.

### Mistake 5: Using `split()` With the Wrong Separator

```javascript
const text = "Brian,Mary,John";

console.log(text.split(" "));
```

This does not split the string at commas.

Correct:

```javascript
console.log(text.split(","));
```

### Part 3 Exercises

1. Create a username validator that requires at least five characters.
2. Create a function that extracts the domain from an email address.
3. Create a product search program using `includes()`.
4. Create a function that counts words in a sentence.
5. Create a function that converts a sentence to uppercase.
6. Create a function that replaces all occurrences of a selected word.
7. Create a program that extracts the first name from a full name.
8. Create a text analyzer that counts characters and words.
9. Use `padStart()` to format an order number to six digits.
10. Explain why `"😀".length` returns 2.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT AND LESSON COMPLETION

## 36. Lesson Review

You have learned how JavaScript represents and manipulates text.

Review these important concepts:

| Concept | Meaning |
|---|---|
| String | A data type used to represent text. |
| `length` | Returns the number of UTF-16 code units. |
| Indexing | Accessing characters using their positions. |
| Immutability | Strings cannot be modified character by character. |
| Concatenation | Combining strings. |
| Template literals | Strings using backticks and interpolation. |
| `trim()` | Removes surrounding whitespace. |
| `toUpperCase()` | Converts letters to uppercase. |
| `toLowerCase()` | Converts letters to lowercase. |
| `includes()` | Checks whether text exists. |
| `indexOf()` | Finds the first occurrence of text. |
| `slice()` | Extracts part of a string. |
| `replace()` | Replaces matching text. |
| `split()` | Divides a string into an array. |
| Regular expressions | Patterns used for text matching and processing. |

---

## 37. Kai Assessment

Complete all sections.

### SECTION A: MULTIPLE-CHOICE QUESTIONS

**Question 1**

What is a string in JavaScript?

A. A type of loop.

B. A data type used to represent text.

C. A function.

D. A database.

**Question 2**

Which of the following creates a template literal?

A. `"Hello"`

B. `'Hello'`

C. `` `Hello` ``

D. `[Hello]`

**Question 3**

What does the `length` property return?

A. The number of words only.

B. The number of characters in every possible Unicode interpretation.

C. The number of UTF-16 code units.

D. The number of spaces only.

**Question 4**

What does `toUpperCase()` do?

A. Removes spaces.

B. Converts letters to uppercase.

C. Converts letters to lowercase.

D. Replaces text.

**Question 5**

Which method removes whitespace from both ends of a string?

A. `split()`

B. `trim()`

C. `slice()`

D. `repeat()`

**Question 6**

What does `includes()` return?

A. An array.

B. A string.

C. A Boolean value.

D. A number.

**Question 7**

Which method extracts part of a string?

A. `slice()`

B. `repeat()`

C. `toLowerCase()`

D. `trim()`

**Question 8**

What does `split(",")` do?

A. Deletes commas from a string.

B. Divides a string into an array using commas as separators.

C. Converts a string to uppercase.

D. Counts commas.

### SECTION B: CONCEPTUAL QUESTIONS

**Question 9**

Explain the difference between single quotes, double quotes, and template literals.

**Question 10**

What does it mean when we say JavaScript strings are immutable?

**Question 11**

Explain the difference between `slice()` and `substring()`.

**Question 12**

Differentiate between `indexOf()` and `lastIndexOf()`.

**Question 13**

Explain how `split()` converts a string into an array.

**Question 14**

What is a regular expression, and how is it used when processing strings?

### SECTION C: PRACTICAL PROGRAMMING

**Question 15: String Manipulation**

Create a string containing:

```text
javascript programming
```

Write code to:

1. Convert it to uppercase.
2. Convert it to lowercase.
3. Display its length.
4. Extract the word `"JavaScript"` from the string after converting the text to the appropriate case.

**Question 16: Username Validation**

Create a function that:

1. Accepts a username.
2. Removes surrounding spaces.
3. Checks whether it is empty.
4. Checks whether it contains at least five characters.
5. Returns an appropriate message.

**Question 17: Email Analysis**

Given:

```javascript
const email = "brian@example.com";
```

Extract:

1. The username.
2. The domain.
3. The position of the `@` symbol.

**Question 18: Product Search**

Given:

```javascript
const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones"
];
```

Create a function that accepts a search term and returns all products containing that term.

Your search should be case-insensitive.

### SECTION D: DEBUGGING

**Question 19**

Identify and correct the problem:

```javascript
const name = "brian";

name.toUpperCase();

console.log(name);
```

Why does the program display the original text?

**Question 20**

Study the following code:

```javascript
const language = "JavaScript";

console.log(language.slice(0, 4));
console.log(language.slice(4, 10));
```

Answer:

1. What will each statement display?
2. Why does the first statement not include the character at index 4?
3. How could you extract the final six characters using a negative index?

---

## 38. Final Practical Challenge: Build a Text Processing Application

Build a small application that accepts a sentence and analyzes it.

Your application should contain functions that:

1. Convert the sentence to uppercase.
2. Convert the sentence to lowercase.
3. Count the characters.
4. Count the words.
5. Remove unnecessary surrounding spaces.
6. Search for a word inside the sentence.
7. Replace a selected word with another word.
8. Split the sentence into individual words.

### Requirements

- Use functions to separate the operations.
- Use parameters to pass text into functions.
- Use `return` to provide calculated results.
- Use appropriate string methods.
- Handle empty input.
- Display the results clearly.

Example:

Input:

```text
JavaScript is a powerful programming language
```

Example output:

```text
TEXT ANALYSIS

Uppercase:
JAVASCRIPT IS A POWERFUL PROGRAMMING LANGUAGE

Lowercase:
javascript is a powerful programming language

Character Count:
46

Word Count:
7

Contains "powerful":
true

Words:
[
  "JavaScript",
  "is",
  "a",
  "powerful",
  "programming",
  "language"
]
```

You can use your own sentence for testing.

---

## 39. Submit Your Assessment to Kai

After completing the assessment, submit your answers and practical project to Kai.

Kai should:

1. Mark your multiple-choice answers.
2. Evaluate your conceptual explanations.
3. Review your JavaScript code.
4. Check whether you used string methods correctly.
5. Identify syntax and logical errors.
6. Explain incorrect answers.
7. Provide corrected code where necessary.
8. Test the text-processing application.
9. Award a final assessment score.
10. Recommend areas that require more practice.

---

## 40. Lesson Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain what strings are.
- [ ] Create strings using single quotes, double quotes, and template literals.
- [ ] Use string interpolation.
- [ ] Understand string length and indexing.
- [ ] Access individual characters.
- [ ] Explain string immutability.
- [ ] Use escape characters.
- [ ] Combine strings.
- [ ] Convert strings to uppercase and lowercase.
- [ ] Remove whitespace using `trim()`.
- [ ] Search strings using `includes()` and `indexOf()`.
- [ ] Extract text using `slice()` and `substring()`.
- [ ] Replace text using `replace()` and `replaceAll()`.
- [ ] Split strings into arrays.
- [ ] Use regular expressions for text processing.
- [ ] Build practical text-processing applications.

**Part 4 of 4 — Lesson Complete**

---

## 41. What Comes Next?

**Next Lesson: JavaScript Arrays**

You will explore how JavaScript stores and manages multiple values inside a single variable.

Topics include:

- Creating arrays.
- Accessing array elements.
- Array indexes.
- Modifying array elements.
- Adding and removing elements.
- Array methods.
- Searching arrays.
- Sorting arrays.
- Multidimensional arrays.
- Array destructuring.
- Practical array-based applications.

You will also learn how arrays work together with functions, loops, and strings to build more advanced software applications.