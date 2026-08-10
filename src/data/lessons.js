// ============================================
// CODELAB ACADEMY - LESSON DATA
// Deep-learning lesson structure for Kai
// ============================================

export const lessons = {
  javascript: [
    {
      id: "js-variables",
      title: "JavaScript Variables",
      description: "Learn how JavaScript stores and manages information.",
      level: "Beginner",
      estimatedTime: "20 min",

      objectives: [
        "Understand what a variable is",
        "Understand let, const, and var",
        "Know when to use let and const",
        "Store different types of values",
        "Modify variable values",
      ],

      sections: [
        {
          type: "explanation",
          title: "What is a Variable?",
          content: `
A variable is a named place where a program can store a value.

Think of a variable like a labeled box.

The label gives the box a name, while the value is what we put inside the box.

For example:

let age = 20;

Here:

- "age" is the variable name.
- 20 is the value.
- let tells JavaScript that we are creating a variable.

Variables allow programs to remember information and use that information later.
          `,
        },

        {
          type: "example",
          title: "Your First Variable",
          code: `let username = "Brian";

console.log(username);`,
          explanation:
            "JavaScript stores the text \"Brian\" inside the username variable. console.log() then reads the value stored in that variable.",
        },

        {
          type: "deepDive",
          title: "Why Do We Need Variables?",
          content: `
Without variables, programs would have to repeatedly write the same values.

Imagine an application needs to display a user's name in ten different places.

Instead of writing the name everywhere, we can store it once:

const username = "Brian";

Then use:

console.log(username);

Variables make programs easier to maintain, understand, and change.
          `,
        },

        {
          type: "concept",
          title: "let vs const",
          content: `
JavaScript commonly uses let and const when creating variables.

Use let when the value may change:

let score = 10;
score = 20;

Use const when the value should not be reassigned:

const country = "Kenya";

country = "Uganda";

The second example causes an error because a const variable cannot be reassigned.
          `,
        },

        {
          type: "example",
          title: "Changing a Variable",
          code: `let score = 10;

console.log(score);

score = 50;

console.log(score);`,
          explanation:
            "The variable starts with the value 10. Later, its value is changed to 50.",
        },

        {
          type: "challenge",
          title: "Try It Yourself",
          instructions: `
Create a variable called username.

Store your name inside it.

Then print the variable using console.log().
          `,
          starterCode: `let username = "";

console.log(username);`,
        },

        {
          type: "quiz",
          title: "Quick Check",
          question: "Which keyword should you normally use for a value that should not be reassigned?",
          options: ["let", "const", "var", "change"],
          answer: "const",
          explanation:
            "const is used when a variable should not be reassigned after it has been created.",
        },

        {
          type: "summary",
          title: "Lesson Summary",
          content: `
You learned that:

1. Variables store information.
2. let creates a variable that can be reassigned.
3. const creates a variable that cannot be reassigned.
4. Variables make programs easier to manage.
5. console.log() can be used to inspect a stored value.

Next, you should learn about JavaScript data types.
          `,
        },
      ],
    },

    {
      id: "js-data-types",
      title: "JavaScript Data Types",
      description: "Understand the different kinds of values JavaScript can work with.",
      level: "Beginner",
      estimatedTime: "25 min",

      objectives: [
        "Understand primitive data types",
        "Understand strings",
        "Understand numbers",
        "Understand booleans",
        "Understand null and undefined",
        "Identify data types using typeof",
      ],

      sections: [
        {
          type: "explanation",
          title: "What is a Data Type?",
          content: `
A data type describes the kind of value stored in a variable.

For example:

const name = "Brian";

The value is text, so JavaScript treats it as a string.

Another example:

const age = 25;

This is a number.

Different types of data behave differently inside a program.
          `,
        },

        {
          type: "example",
          title: "Common Data Types",
          code: `const name = "Brian";
const age = 25;
const isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);`,
          explanation:
            "The variables contain a string, number, and boolean respectively.",
        },

        {
          type: "deepDive",
          title: "Checking a Data Type",
          content: `
JavaScript provides the typeof operator.

Example:

const age = 25;

console.log(typeof age);

The result is:

"number"

You can use typeof when debugging your application and trying to understand what kind of value you are working with.
          `,
        },

        {
          type: "challenge",
          title: "Try It Yourself",
          instructions: `
Create three variables:

name
age
isDeveloper

Give each variable an appropriate value.

Then use typeof to inspect each value.
          `,
          starterCode: `const name = "";
const age = 0;
const isDeveloper = false;

// Check the types here
`,
        },

        {
          type: "quiz",
          title: "Quick Check",
          question: "What data type is the value true?",
          options: ["String", "Number", "Boolean", "Object"],
          answer: "Boolean",
          explanation:
            "true and false are boolean values in JavaScript.",
        },

        {
          type: "summary",
          title: "Lesson Summary",
          content: `
You now understand that JavaScript values have different data types.

Important beginner types include:

- String
- Number
- Boolean
- Undefined
- Null

The typeof operator can help you inspect a value's type.
          `,
        },
      ],
    },
  ],

  python: [
    {
      id: "python-variables",
      title: "Python Variables",
      description: "Learn how to store information in Python.",
      level: "Beginner",
      estimatedTime: "20 min",

      objectives: [
        "Understand Python variables",
        "Store values",
        "Change values",
        "Work with strings and numbers",
      ],

      sections: [
        {
          type: "explanation",
          title: "What is a Variable?",
          content: `
A variable is a name that refers to a value.

For example:

name = "Brian"

Python does not require a special keyword such as let or const to create a normal variable.

The variable name is name and the stored value is "Brian".
          `,
        },

        {
          type: "example",
          title: "Creating a Variable",
          code: `name = "Brian"
age = 25

print(name)
print(age)`,
          explanation:
            "Python stores the values and allows you to use the variable names later.",
        },

        {
          type: "challenge",
          title: "Try It Yourself",
          instructions: `
Create variables for:

- your name
- your age
- your favorite programming language

Then print all three.
          `,
          starterCode: `name = ""
age = 0
language = ""

print(name)
print(age)
print(language)`,
        },
      ],
    },
  ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getLessonsByCourse(courseId) {
  return lessons[courseId] || [];
}

export function getLesson(courseId, lessonId) {
  const courseLessons = lessons[courseId] || [];

  return courseLessons.find(
    (lesson) => lesson.id === lessonId
  );
}

export default lessons;