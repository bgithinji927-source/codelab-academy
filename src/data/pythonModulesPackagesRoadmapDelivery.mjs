const delivery = {
  "type": "authored",
  "version": 1,
  "sections": [
    {
      "id": "python-modules-packages-roadmap-part-1",
      "title": "PART 1 OF 4: UNDERSTANDING PYTHON MODULES",
      "description": "Part 1 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "PYTHON: MODULES AND PACKAGES"
        },
        {
          "type": "heading",
          "text": "1. What Is a Python Module?"
        },
        {
          "type": "text",
          "text": "A Python module is a file containing Python code that can be reused in other Python programs."
        },
        {
          "type": "text",
          "text": "A module can contain:"
        },
        {
          "type": "bullets",
          "items": [
            "Variables.",
            "Functions.",
            "Classes.",
            "Statements and other Python code."
          ]
        },
        {
          "type": "text",
          "text": "Instead of writing an entire application in one file, you can divide it into smaller files called modules."
        },
        {
          "type": "heading",
          "text": "Example: A program without modules"
        },
        {
          "type": "text",
          "text": "Imagine you are developing a calculator."
        },
        {
          "type": "text",
          "text": "You could write everything in one Python file:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b\n\n\ndef subtract(a, b):\n    return a - b\n\n\ndef multiply(a, b):\n    return a * b\n\n\ndef divide(a, b):\n    return a / b\n\n\nprint(add(10, 5))\nprint(subtract(10, 5))\nprint(multiply(10, 5))\nprint(divide(10, 5))"
        },
        {
          "type": "text",
          "text": "This program works."
        },
        {
          "type": "text",
          "text": "However, imagine developing a large application with hundreds of functions. Keeping everything in one file would make the project difficult to understand, maintain and expand."
        },
        {
          "type": "text",
          "text": "Modules help solve this problem by separating related functionality."
        },
        {
          "type": "heading",
          "text": "2. Why Do We Use Modules?"
        },
        {
          "type": "text",
          "text": "Modules are important because they help developers:"
        },
        {
          "type": "text",
          "text": "**1. Organize code**"
        },
        {
          "type": "text",
          "text": "Related functions can be placed in separate files."
        },
        {
          "type": "text",
          "text": "**2. Reuse code**"
        },
        {
          "type": "text",
          "text": "You can import functions from one module into another without rewriting them."
        },
        {
          "type": "text",
          "text": "**3. Maintain applications**"
        },
        {
          "type": "text",
          "text": "When you need to change a particular feature, you can work on its module."
        },
        {
          "type": "text",
          "text": "**4. Support teamwork**"
        },
        {
          "type": "text",
          "text": "Different developers can work on separate modules of the same application."
        },
        {
          "type": "text",
          "text": "**5. Reduce duplication**"
        },
        {
          "type": "text",
          "text": "You can write a function once and reuse it throughout your application."
        },
        {
          "type": "heading",
          "text": "3. Creating Your First Python Module"
        },
        {
          "type": "text",
          "text": "Let's create a simple project."
        },
        {
          "type": "text",
          "text": "Create a folder called:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "module_project/"
        },
        {
          "type": "text",
          "text": "Inside it, create two files:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "module_project/\n│\n├── calculator.py\n│\n└── main.py"
        },
        {
          "type": "heading",
          "text": "Step 1: Create calculator.py"
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b\n\n\ndef subtract(a, b):\n    return a - b\n\n\ndef multiply(a, b):\n    return a * b"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):"
        },
        {
          "type": "text",
          "text": "Defines a function called `add` that accepts two parameters."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return a + b"
        },
        {
          "type": "text",
          "text": "Adds the two values and returns the result."
        },
        {
          "type": "text",
          "text": "The other functions follow the same approach:"
        },
        {
          "type": "bullets",
          "items": [
            "`subtract()` subtracts two values.",
            "`multiply()` multiplies two values."
          ]
        },
        {
          "type": "text",
          "text": "We have now created a Python module called `calculator`."
        },
        {
          "type": "text",
          "text": "The filename is `calculator.py`, and the module name is `calculator`."
        },
        {
          "type": "heading",
          "text": "Step 2: Import the module"
        },
        {
          "type": "text",
          "text": "Open `main.py`."
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import calculator\n\nresult = calculator.add(10, 5)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "15"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "**Line 1**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import calculator"
        },
        {
          "type": "text",
          "text": "Imports the calculator module into the current Python program."
        },
        {
          "type": "text",
          "text": "**Line 2**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = calculator.add(10, 5)"
        },
        {
          "type": "text",
          "text": "Accesses the `add()` function inside the calculator module."
        },
        {
          "type": "text",
          "text": "The dot (`.`) is used to access functionality belonging to the module."
        },
        {
          "type": "text",
          "text": "The function receives 10 and 5 and returns 15."
        },
        {
          "type": "text",
          "text": "**Line 3**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(result)"
        },
        {
          "type": "text",
          "text": "Displays the returned result."
        },
        {
          "type": "text",
          "text": "This is how two Python files communicate through imports."
        },
        {
          "type": "heading",
          "text": "4. Different Ways of Importing Modules"
        },
        {
          "type": "text",
          "text": "Python provides several ways to import modules."
        },
        {
          "type": "heading",
          "text": "A. Importing an entire module"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import math\n\nresult = math.sqrt(64)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "8.0"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`import math` imports the math module.",
            "`math.sqrt(64)` accesses the square-root function.",
            "`print(result)` displays the answer."
          ]
        },
        {
          "type": "text",
          "text": "The module name is written before the function name."
        },
        {
          "type": "heading",
          "text": "B. Importing a specific function"
        },
        {
          "type": "text",
          "text": "You do not always need to import the entire module."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from math import sqrt\n\nresult = sqrt(81)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "9.0"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`from math import sqrt` imports only the `sqrt` function.",
            "`sqrt(81)` calls the imported function directly.",
            "`print()` displays the result."
          ]
        },
        {
          "type": "text",
          "text": "Notice that we do not need to write `math.sqrt()`."
        },
        {
          "type": "heading",
          "text": "C. Importing multiple functions"
        },
        {
          "type": "text",
          "text": "You can import several functions from the same module."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from math import sqrt, pow\n\nprint(sqrt(25))\nprint(pow(2, 3))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "5.0\n8.0"
        },
        {
          "type": "text",
          "text": "Here:"
        },
        {
          "type": "bullets",
          "items": [
            "`sqrt` calculates a square root.",
            "`pow` raises a number to a specified power."
          ]
        },
        {
          "type": "heading",
          "text": "D. Importing with an alias"
        },
        {
          "type": "text",
          "text": "An alias is an alternative name given to a module or imported function."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import math as m\n\nresult = m.sqrt(100)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "10.0"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`import math as m` imports the math module and gives it the shorter name `m`.",
            "`m.sqrt(100)` uses the alias to access the square-root function.",
            "`print()` displays the result."
          ]
        },
        {
          "type": "text",
          "text": "Aliases can make long module names easier to use."
        },
        {
          "type": "heading",
          "text": "E. Importing everything"
        },
        {
          "type": "text",
          "text": "Python also supports:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from math import *"
        },
        {
          "type": "text",
          "text": "This imports names exposed by the module directly into the current namespace."
        },
        {
          "type": "text",
          "text": "However, this approach is generally discouraged because it can create naming conflicts and make it difficult to identify where functions came from."
        },
        {
          "type": "text",
          "text": "Prefer importing the module or explicitly importing the functions you need."
        },
        {
          "type": "heading",
          "text": "5. Understanding Module Names"
        },
        {
          "type": "text",
          "text": "When you create:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "calculator.py"
        },
        {
          "type": "text",
          "text": "The module name is:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "calculator"
        },
        {
          "type": "text",
          "text": "You normally do not include the `.py` extension when importing it."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import calculator"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import calculator.py"
        },
        {
          "type": "text",
          "text": "Python uses the module name to locate the file through its import system."
        },
        {
          "type": "heading",
          "text": "6. Part 1 Summary"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "bullets",
          "items": [
            "What Python modules are.",
            "Why modules are important.",
            "How to create your own module.",
            "How to import modules.",
            "How to import specific functions.",
            "How to use aliases.",
            "How to access functions inside another Python file."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 1 of 4"
        }
      ]
    },
    {
      "id": "python-modules-packages-roadmap-part-2",
      "title": "PART 2 OF 4: PYTHON PACKAGES AND MODULE ORGANIZATION",
      "description": "Part 2 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "1. What Is a Python Package?"
        },
        {
          "type": "text",
          "text": "A Python package is a way of organizing related Python modules into directories."
        },
        {
          "type": "text",
          "text": "A module is normally a single Python file."
        },
        {
          "type": "text",
          "text": "A package is a directory structure that groups related modules together."
        },
        {
          "type": "text",
          "text": "Think about an application with different responsibilities."
        },
        {
          "type": "text",
          "text": "For example, a school management system might have:"
        },
        {
          "type": "bullets",
          "items": [
            "Student registration.",
            "Student records.",
            "Student payments.",
            "Teacher management.",
            "Examination management."
          ]
        },
        {
          "type": "text",
          "text": "Putting every feature into one file would make the application difficult to maintain."
        },
        {
          "type": "text",
          "text": "Instead, we can organize related modules into packages."
        },
        {
          "type": "heading",
          "text": "2. Understanding the Difference Between Modules and Packages"
        },
        {
          "type": "text",
          "text": "Consider this structure:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "school_system/\n│\n├── main.py\n│\n└── students/\n    │\n    ├── __init__.py\n    ├── registration.py\n    ├── records.py\n    └── performance.py"
        },
        {
          "type": "text",
          "text": "Let's understand the structure."
        },
        {
          "type": "table",
          "columns": [
            "File or folder",
            "Purpose"
          ],
          "rows": [
            [
              "`school_system/`",
              "Main project directory"
            ],
            [
              "`main.py`",
              "Entry point of the application"
            ],
            [
              "`students/`",
              "Package containing student-related modules"
            ],
            [
              "`__init__.py`",
              "Package initialization file"
            ],
            [
              "`registration.py`",
              "Handles student registration"
            ],
            [
              "`records.py`",
              "Handles student records"
            ],
            [
              "`performance.py`",
              "Handles student performance"
            ]
          ]
        },
        {
          "type": "text",
          "text": "In this example:"
        },
        {
          "type": "bullets",
          "items": [
            "`registration.py` is a module.",
            "`records.py` is a module.",
            "`performance.py` is a module.",
            "`students` is a package."
          ]
        },
        {
          "type": "text",
          "text": "A regular Python package commonly contains an `__init__.py` file."
        },
        {
          "type": "text",
          "text": "In modern Python, namespace packages can also exist without this file."
        },
        {
          "type": "heading",
          "text": "3. Creating Your First Package"
        },
        {
          "type": "text",
          "text": "Let's build a simple package from scratch."
        },
        {
          "type": "text",
          "text": "Create this folder structure:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "my_application/\n│\n├── main.py\n│\n└── operations/\n    │\n    ├── __init__.py\n    ├── addition.py\n    └── subtraction.py"
        },
        {
          "type": "heading",
          "text": "Step 1: Create the package directory"
        },
        {
          "type": "text",
          "text": "Create a folder named:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "operations"
        },
        {
          "type": "text",
          "text": "This will contain our mathematical operation modules."
        },
        {
          "type": "heading",
          "text": "Step 2: Create __init__.py"
        },
        {
          "type": "text",
          "text": "Inside `operations`, create:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "__init__.py"
        },
        {
          "type": "text",
          "text": "For now, leave the file empty."
        },
        {
          "type": "text",
          "text": "This marks the directory as a regular Python package."
        },
        {
          "type": "heading",
          "text": "Step 3: Create addition.py"
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b"
        },
        {
          "type": "text",
          "text": "This module contains the addition function."
        },
        {
          "type": "heading",
          "text": "Step 4: Create subtraction.py"
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def subtract(a, b):\n    return a - b"
        },
        {
          "type": "text",
          "text": "This module contains the subtraction function."
        },
        {
          "type": "heading",
          "text": "Step 5: Import the package modules"
        },
        {
          "type": "text",
          "text": "Open `main.py`."
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from operations.addition import add\nfrom operations.subtraction import subtract\n\nprint(add(20, 10))\n\nprint(subtract(20, 10))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "30\n10"
        },
        {
          "type": "heading",
          "text": "Understanding the imports"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from operations.addition import add"
        },
        {
          "type": "text",
          "text": "This means:"
        },
        {
          "type": "bullets",
          "items": [
            "`operations` is the package.",
            "`addition` is the module inside the package.",
            "`add` is the function inside that module."
          ]
        },
        {
          "type": "text",
          "text": "Similarly:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from operations.subtraction import subtract"
        },
        {
          "type": "text",
          "text": "Imports the subtraction function."
        },
        {
          "type": "text",
          "text": "We can now use both functions inside `main.py`."
        },
        {
          "type": "heading",
          "text": "4. Importing an Entire Module from a Package"
        },
        {
          "type": "text",
          "text": "You can also import a module rather than importing a specific function."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import operations.addition\n\nresult = operations.addition.add(15, 5)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "20"
        },
        {
          "type": "text",
          "text": "Notice how we access the function through the package and module names."
        },
        {
          "type": "text",
          "text": "The structure is:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "package.module.function()"
        },
        {
          "type": "text",
          "text": "For this example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "operations.addition.add()"
        },
        {
          "type": "heading",
          "text": "5. Understanding __init__.py"
        },
        {
          "type": "text",
          "text": "The `__init__.py` file is used to initialize a regular Python package."
        },
        {
          "type": "text",
          "text": "It can be empty, or it can contain Python code."
        },
        {
          "type": "text",
          "text": "For example, our package currently contains:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "operations/\n│\n├── __init__.py\n├── addition.py\n└── subtraction.py"
        },
        {
          "type": "text",
          "text": "We can modify `__init__.py`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from .addition import add\nfrom .subtraction import subtract"
        },
        {
          "type": "text",
          "text": "The dot (`.`) means the current package."
        },
        {
          "type": "text",
          "text": "Now, inside `main.py`, we can write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from operations import add, subtract\n\nprint(add(10, 5))\nprint(subtract(10, 5))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "15\n5"
        },
        {
          "type": "text",
          "text": "Why does this work?"
        },
        {
          "type": "text",
          "text": "When Python imports the `operations` package, its `__init__.py` executes and makes the two functions available through the package."
        },
        {
          "type": "text",
          "text": "This is useful when you want to provide a simpler interface for using your package."
        },
        {
          "type": "heading",
          "text": "6. Absolute and Relative Imports"
        },
        {
          "type": "text",
          "text": "Python supports two common styles of importing modules within packages."
        },
        {
          "type": "heading",
          "text": "A. Absolute imports"
        },
        {
          "type": "text",
          "text": "An absolute import uses the full package path."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from operations.addition import add"
        },
        {
          "type": "text",
          "text": "This explicitly identifies the package, module and function."
        },
        {
          "type": "heading",
          "text": "B. Relative imports"
        },
        {
          "type": "text",
          "text": "A relative import uses dots to refer to the current package."
        },
        {
          "type": "text",
          "text": "Suppose `subtraction.py` needs to import `add()` from `addition.py`."
        },
        {
          "type": "text",
          "text": "Inside `subtraction.py`, you could write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from .addition import add"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`.` refers to the current package.",
            "`addition` identifies the module.",
            "`add` identifies the function."
          ]
        },
        {
          "type": "text",
          "text": "Relative imports are useful when organizing related modules inside packages."
        },
        {
          "type": "text",
          "text": "**Important:** Relative imports are designed for package contexts. Running a package module directly as a standalone file can cause import errors. Running the application from its entry point or using `python -m package.module` is usually better."
        },
        {
          "type": "heading",
          "text": "7. Built-in Modules and Third-Party Packages"
        },
        {
          "type": "text",
          "text": "Python developers work with more than just modules they create themselves."
        },
        {
          "type": "text",
          "text": "There are three useful categories to understand."
        },
        {
          "type": "heading",
          "text": "A. Standard library modules"
        },
        {
          "type": "text",
          "text": "These come with Python."
        },
        {
          "type": "text",
          "text": "Examples:"
        },
        {
          "type": "table",
          "columns": [
            "Module",
            "Purpose"
          ],
          "rows": [
            [
              "`math`",
              "Mathematical calculations"
            ],
            [
              "`random`",
              "Random number generation"
            ],
            [
              "`os`",
              "Operating-system operations"
            ],
            [
              "`json`",
              "JSON data processing"
            ],
            [
              "`datetime`",
              "Dates and times"
            ],
            [
              "`pathlib`",
              "File and directory paths"
            ],
            [
              "`statistics`",
              "Statistical calculations"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import random\n\nnumber = random.randint(1, 100)\n\nprint(number)"
        },
        {
          "type": "text",
          "text": "This generates a random integer between 1 and 100."
        },
        {
          "type": "heading",
          "text": "B. Third-party packages"
        },
        {
          "type": "text",
          "text": "These are developed and distributed separately from Python's standard library."
        },
        {
          "type": "text",
          "text": "Examples include:"
        },
        {
          "type": "table",
          "columns": [
            "Package",
            "Purpose"
          ],
          "rows": [
            [
              "`requests`",
              "Making HTTP requests"
            ],
            [
              "`flask`",
              "Building web applications"
            ],
            [
              "`django`",
              "Building larger web applications"
            ],
            [
              "`numpy`",
              "Numerical computing"
            ],
            [
              "`pandas`",
              "Data analysis"
            ],
            [
              "`pytest`",
              "Software testing"
            ]
          ]
        },
        {
          "type": "text",
          "text": "These packages are commonly installed using `pip`."
        },
        {
          "type": "heading",
          "text": "C. Your own modules and packages"
        },
        {
          "type": "text",
          "text": "These are the modules and packages you create for your projects."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "firebox_application/\n│\n├── main.py\n├── authentication/\n├── payments/\n├── users/\n└── notifications/"
        },
        {
          "type": "text",
          "text": "Each package can contain modules responsible for a particular application feature."
        },
        {
          "type": "heading",
          "text": "8. Part 2 Summary"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "bullets",
          "items": [
            "What Python packages are.",
            "The difference between modules and packages.",
            "How to create a package.",
            "The purpose of `__init__.py`.",
            "How to import functions from packages.",
            "Absolute and relative imports.",
            "The difference between standard library modules, third-party packages and custom modules."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 2 of 4"
        }
      ]
    },
    {
      "id": "python-modules-packages-roadmap-part-3",
      "title": "PART 3 OF 4: PRACTICAL MODULE AND PACKAGE DEVELOPMENT",
      "description": "Part 3 of 4",
      "blocks": [
        {
          "type": "text",
          "text": "Now we will build a practical application using modules and packages."
        },
        {
          "type": "heading",
          "text": "1. Project: Simple Banking Application"
        },
        {
          "type": "text",
          "text": "We are going to develop a small command-line banking application."
        },
        {
          "type": "text",
          "text": "The application will support:"
        },
        {
          "type": "numbered",
          "items": [
            "Creating an account.",
            "Depositing money.",
            "Withdrawing money.",
            "Checking account balance.",
            "Displaying account information."
          ]
        },
        {
          "type": "text",
          "text": "Instead of putting everything in one file, we will organize the application into modules and packages."
        },
        {
          "type": "heading",
          "text": "2. Designing the Project Structure"
        },
        {
          "type": "text",
          "text": "Create a folder called:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "banking_project/"
        },
        {
          "type": "text",
          "text": "Organize it as follows:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "banking_project/\n│\n├── main.py\n│\n└── banking/\n    │\n    ├── __init__.py\n    ├── accounts.py\n    ├── transactions.py\n    └── reports.py"
        },
        {
          "type": "heading",
          "text": "Responsibilities"
        },
        {
          "type": "table",
          "columns": [
            "File",
            "Responsibility"
          ],
          "rows": [
            [
              "`main.py`",
              "Runs the application"
            ],
            [
              "`banking/`",
              "Banking package"
            ],
            [
              "`accounts.py`",
              "Creates and stores accounts"
            ],
            [
              "`transactions.py`",
              "Handles deposits and withdrawals"
            ],
            [
              "`reports.py`",
              "Displays account information"
            ],
            [
              "`__init__.py`",
              "Initializes the package"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "3. Creating the Account Module"
        },
        {
          "type": "text",
          "text": "Open:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "banking/accounts.py"
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "accounts = []\n\n\ndef create_account(name, account_number):\n    account = {\n        \"name\": name,\n        \"account_number\": account_number,\n        \"balance\": 0\n    }\n\n    accounts.append(account)\n\n    print(\"Account created successfully!\")"
        },
        {
          "type": "heading",
          "text": "Line-by-line explanation"
        },
        {
          "type": "code",
          "language": "python",
          "code": "accounts = []"
        },
        {
          "type": "text",
          "text": "Creates an empty list that will store bank accounts."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def create_account(name, account_number):"
        },
        {
          "type": "text",
          "text": "Defines a function that accepts a customer's name and account number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "account = {\n    \"name\": name,\n    \"account_number\": account_number,\n    \"balance\": 0\n}"
        },
        {
          "type": "text",
          "text": "Creates a dictionary representing one bank account."
        },
        {
          "type": "text",
          "text": "It contains:"
        },
        {
          "type": "bullets",
          "items": [
            "The customer's name.",
            "The account number.",
            "The starting balance."
          ]
        },
        {
          "type": "code",
          "language": "python",
          "code": "accounts.append(account)"
        },
        {
          "type": "text",
          "text": "Adds the new account to the accounts list."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Account created successfully!\")"
        },
        {
          "type": "text",
          "text": "Displays a confirmation message."
        },
        {
          "type": "heading",
          "text": "4. Creating the Transactions Module"
        },
        {
          "type": "text",
          "text": "Open:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "banking/transactions.py"
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from .accounts import accounts\n\n\ndef deposit(account_number, amount):\n    for account in accounts:\n\n        if account[\"account_number\"] == account_number:\n\n            if amount > 0:\n                account[\"balance\"] += amount\n                print(\"Deposit successful.\")\n            else:\n                print(\"Amount must be greater than zero.\")\n\n            return\n\n    print(\"Account not found.\")\n\n\ndef withdraw(account_number, amount):\n    for account in accounts:\n\n        if account[\"account_number\"] == account_number:\n\n            if amount <= 0:\n                print(\"Amount must be greater than zero.\")\n\n            elif amount <= account[\"balance\"]:\n                account[\"balance\"] -= amount\n                print(\"Withdrawal successful.\")\n\n            else:\n                print(\"Insufficient funds.\")\n\n            return\n\n    print(\"Account not found.\")"
        },
        {
          "type": "heading",
          "text": "Understanding the code"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from .accounts import accounts"
        },
        {
          "type": "text",
          "text": "Imports the `accounts` list from the accounts module."
        },
        {
          "type": "text",
          "text": "The dot indicates that `accounts.py` belongs to the same package."
        },
        {
          "type": "heading",
          "text": "Deposit function"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def deposit(account_number, amount):"
        },
        {
          "type": "text",
          "text": "Creates a function that accepts an account number and deposit amount."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for account in accounts:"
        },
        {
          "type": "text",
          "text": "Loops through the available accounts."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if account[\"account_number\"] == account_number:"
        },
        {
          "type": "text",
          "text": "Checks whether the current account matches the entered account number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if amount > 0:"
        },
        {
          "type": "text",
          "text": "Checks that the deposit amount is positive."
        },
        {
          "type": "code",
          "language": "python",
          "code": "account[\"balance\"] += amount"
        },
        {
          "type": "text",
          "text": "Adds the deposit amount to the current balance."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Previous balance: 1,000\nDeposit:          500\nNew balance:      1,500"
        },
        {
          "type": "code",
          "language": "python",
          "code": "else:\n    print(\"Amount must be greater than zero.\")"
        },
        {
          "type": "text",
          "text": "Rejects zero or negative deposit amounts."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return"
        },
        {
          "type": "text",
          "text": "Stops the function after processing the matching account."
        },
        {
          "type": "text",
          "text": "If no account matches, the final statement displays an account-not-found message."
        },
        {
          "type": "heading",
          "text": "Withdrawal function"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def withdraw(account_number, amount):"
        },
        {
          "type": "text",
          "text": "Defines the withdrawal operation."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if amount <= 0:"
        },
        {
          "type": "text",
          "text": "Prevents zero or negative withdrawal amounts."
        },
        {
          "type": "code",
          "language": "python",
          "code": "elif amount <= account[\"balance\"]:"
        },
        {
          "type": "text",
          "text": "Checks whether the account has enough money."
        },
        {
          "type": "code",
          "language": "python",
          "code": "account[\"balance\"] -= amount"
        },
        {
          "type": "text",
          "text": "Subtracts the withdrawal amount from the balance."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Previous balance: 1,500\nWithdrawal:       500\nNew balance:      1,000"
        },
        {
          "type": "text",
          "text": "If the customer requests more money than the available balance, the program displays:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Insufficient funds."
        },
        {
          "type": "heading",
          "text": "5. Creating the Reports Module"
        },
        {
          "type": "text",
          "text": "Open:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "banking/reports.py"
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from .accounts import accounts\n\n\ndef show_accounts():\n    if len(accounts) == 0:\n        print(\"No accounts available.\")\n        return\n\n    for account in accounts:\n        print(\"\\n----------------------\")\n        print(\"Customer:\", account[\"name\"])\n        print(\"Account:\", account[\"account_number\"])\n        print(\"Balance:\", account[\"balance\"])\n\n\ndef check_balance(account_number):\n    for account in accounts:\n\n        if account[\"account_number\"] == account_number:\n            print(\"Current balance:\", account[\"balance\"])\n            return\n\n    print(\"Account not found.\")"
        },
        {
          "type": "heading",
          "text": "Explanation"
        },
        {
          "type": "text",
          "text": "The `show_accounts()` function displays all available accounts."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if len(accounts) == 0:"
        },
        {
          "type": "text",
          "text": "Checks whether the accounts list is empty."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for account in accounts:"
        },
        {
          "type": "text",
          "text": "Processes every account."
        },
        {
          "type": "text",
          "text": "The following statements display the customer's details."
        },
        {
          "type": "text",
          "text": "The `check_balance()` function searches for a specific account and displays its balance."
        },
        {
          "type": "heading",
          "text": "6. Connecting the Modules in main.py"
        },
        {
          "type": "text",
          "text": "Open `main.py`."
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from banking.accounts import create_account\nfrom banking.transactions import deposit, withdraw\nfrom banking.reports import show_accounts, check_balance\n\n\ndef main():\n\n    while True:\n\n        print(\"\\n===== BANKING SYSTEM =====\")\n        print(\"1. Create Account\")\n        print(\"2. Deposit Money\")\n        print(\"3. Withdraw Money\")\n        print(\"4. Check Balance\")\n        print(\"5. View All Accounts\")\n        print(\"6. Exit\")\n\n        choice = input(\"Enter your choice: \")\n\n        if choice == \"1\":\n\n            name = input(\"Enter customer name: \")\n            account_number = input(\"Enter account number: \")\n\n            create_account(name, account_number)\n\n        elif choice == \"2\":\n\n            account_number = input(\"Enter account number: \")\n            amount = float(input(\"Enter deposit amount: \"))\n\n            deposit(account_number, amount)\n\n        elif choice == \"3\":\n\n            account_number = input(\"Enter account number: \")\n            amount = float(input(\"Enter withdrawal amount: \"))\n\n            withdraw(account_number, amount)\n\n        elif choice == \"4\":\n\n            account_number = input(\"Enter account number: \")\n\n            check_balance(account_number)\n\n        elif choice == \"5\":\n\n            show_accounts()\n\n        elif choice == \"6\":\n\n            print(\"Thank you for using our banking system.\")\n            break\n\n        else:\n\n            print(\"Invalid choice.\")\n\n\nif __name__ == \"__main__\":\n    main()"
        },
        {
          "type": "heading",
          "text": "Understanding the main application"
        },
        {
          "type": "text",
          "text": "**Importing functions**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from banking.accounts import create_account"
        },
        {
          "type": "text",
          "text": "Imports the account creation function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from banking.transactions import deposit, withdraw"
        },
        {
          "type": "text",
          "text": "Imports deposit and withdrawal functions."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from banking.reports import show_accounts, check_balance"
        },
        {
          "type": "text",
          "text": "Imports the reporting functions."
        },
        {
          "type": "text",
          "text": "The main file does not need to contain the internal implementation of these operations. It simply uses the functions provided by the other modules."
        },
        {
          "type": "text",
          "text": "**Creating the main function**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def main():"
        },
        {
          "type": "text",
          "text": "Defines the function responsible for controlling the application."
        },
        {
          "type": "text",
          "text": "**Creating the menu loop**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "while True:"
        },
        {
          "type": "text",
          "text": "Keeps displaying the menu until the user chooses to exit."
        },
        {
          "type": "text",
          "text": "**Collecting the user's selection**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "choice = input(\"Enter your choice: \")"
        },
        {
          "type": "text",
          "text": "Receives the user's menu selection."
        },
        {
          "type": "text",
          "text": "**Handling the selection**"
        },
        {
          "type": "text",
          "text": "The `if`, `elif` and `else` statements determine which function should execute."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if choice == \"1\":"
        },
        {
          "type": "text",
          "text": "If the user enters 1, the application requests the customer's information."
        },
        {
          "type": "code",
          "language": "python",
          "code": "create_account(name, account_number)"
        },
        {
          "type": "text",
          "text": "Calls the function imported from `accounts.py`."
        },
        {
          "type": "text",
          "text": "Similarly:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "deposit(account_number, amount)"
        },
        {
          "type": "text",
          "text": "Calls the deposit function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "withdraw(account_number, amount)"
        },
        {
          "type": "text",
          "text": "Calls the withdrawal function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "check_balance(account_number)"
        },
        {
          "type": "text",
          "text": "Displays the balance of the selected account."
        },
        {
          "type": "code",
          "language": "python",
          "code": "show_accounts()"
        },
        {
          "type": "text",
          "text": "Displays all available accounts."
        },
        {
          "type": "text",
          "text": "**Application entry point**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if __name__ == \"__main__\":\n    main()"
        },
        {
          "type": "text",
          "text": "This ensures that the main function runs when `main.py` is executed directly."
        },
        {
          "type": "heading",
          "text": "7. Running the Application"
        },
        {
          "type": "text",
          "text": "Open your terminal inside the `banking_project` directory."
        },
        {
          "type": "text",
          "text": "Run:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python main.py"
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "===== BANKING SYSTEM =====\n1. Create Account\n2. Deposit Money\n3. Withdraw Money\n4. Check Balance\n5. View All Accounts\n6. Exit\n\nEnter your choice: 1\n\nEnter customer name: Brian\nEnter account number: 1001\n\nAccount created successfully!"
        },
        {
          "type": "text",
          "text": "Deposit money:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter your choice: 2\n\nEnter account number: 1001\nEnter deposit amount: 5000\n\nDeposit successful."
        },
        {
          "type": "text",
          "text": "Check the balance:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter your choice: 4\n\nEnter account number: 1001\n\nCurrent balance: 5000.0"
        },
        {
          "type": "text",
          "text": "The application works by allowing the modules to handle different responsibilities while `main.py` coordinates everything."
        },
        {
          "type": "text",
          "text": "**Important:** This is an educational application. Account information exists only in memory and will disappear when the program closes. It is not a real banking system and does not include authentication, transaction history, persistent storage or production-grade security."
        },
        {
          "type": "heading",
          "text": "8. Installing Third-Party Packages Using pip"
        },
        {
          "type": "text",
          "text": "So far, we have used modules that come with Python and modules we created ourselves."
        },
        {
          "type": "text",
          "text": "Developers also use third-party packages."
        },
        {
          "type": "text",
          "text": "Python provides a package installer called `pip`."
        },
        {
          "type": "text",
          "text": "For example, to install the `requests` package, run:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python -m pip install requests"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`python` runs the Python interpreter.",
            "`-m` tells Python to execute a module.",
            "`pip` is the package installer module.",
            "`install` tells pip to install something.",
            "`requests` is the package name."
          ]
        },
        {
          "type": "text",
          "text": "After installation, you can use it:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import requests\n\nresponse = requests.get(\"https://example.com\")\n\nprint(response.status_code)"
        },
        {
          "type": "text",
          "text": "This example sends an HTTP GET request to a website and displays its HTTP status code."
        },
        {
          "type": "text",
          "text": "The `requests` package is not part of Python's standard library, so it must be installed separately."
        },
        {
          "type": "heading",
          "text": "9. Understanding Virtual Environments"
        },
        {
          "type": "text",
          "text": "When developing multiple Python applications, different projects may require different package versions."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "bullets",
          "items": [
            "Project A may require one version of a package.",
            "Project B may require another version."
          ]
        },
        {
          "type": "text",
          "text": "Installing every package globally can create conflicts."
        },
        {
          "type": "text",
          "text": "A virtual environment provides an isolated Python environment for a project."
        },
        {
          "type": "text",
          "text": "Create one using:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python -m venv venv"
        },
        {
          "type": "text",
          "text": "This creates a virtual environment directory called `venv`."
        },
        {
          "type": "heading",
          "text": "Activating it on Windows"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "venv\\Scripts\\activate"
        },
        {
          "type": "heading",
          "text": "Activating it on Linux or macOS"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "source venv/bin/activate"
        },
        {
          "type": "text",
          "text": "After activation, install packages for that environment:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python -m pip install requests"
        },
        {
          "type": "text",
          "text": "You can record installed dependencies using:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python -m pip freeze > requirements.txt"
        },
        {
          "type": "text",
          "text": "This creates a file called `requirements.txt` containing the installed packages and their versions."
        },
        {
          "type": "text",
          "text": "Another developer can install those dependencies using:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python -m pip install -r requirements.txt"
        },
        {
          "type": "text",
          "text": "This is particularly useful when sharing Python projects with other developers."
        },
        {
          "type": "heading",
          "text": "10. Common Mistakes When Working with Modules and Packages"
        },
        {
          "type": "table",
          "columns": [
            "Mistake",
            "Explanation",
            "Solution"
          ],
          "rows": [
            [
              "Incorrect module name",
              "Python cannot find the file",
              "Check spelling"
            ],
            [
              "Importing with `.py`",
              "The extension is not used in normal imports",
              "Use `import calculator`"
            ],
            [
              "Wrong directory structure",
              "Python may not find the package",
              "Check project organization"
            ],
            [
              "Circular imports",
              "Modules depend on each other in a cycle",
              "Reorganize shared functionality"
            ],
            [
              "Incorrect relative imports",
              "Relative imports require package context",
              "Run the application through its entry point"
            ],
            [
              "Missing third-party package",
              "The package has not been installed",
              "Install it using pip"
            ],
            [
              "Installing globally by mistake",
              "Different projects may have conflicting dependencies",
              "Use virtual environments"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "11. Practical Exercises"
        },
        {
          "type": "heading",
          "text": "Exercise 1: Calculator Package"
        },
        {
          "type": "text",
          "text": "Create a package called `calculator`."
        },
        {
          "type": "text",
          "text": "Inside it, create:"
        },
        {
          "type": "bullets",
          "items": [
            "`addition.py`",
            "`subtraction.py`",
            "`multiplication.py`",
            "`division.py`"
          ]
        },
        {
          "type": "text",
          "text": "Create a `main.py` file that imports and uses all four operations."
        },
        {
          "type": "heading",
          "text": "Exercise 2: Student Management Package"
        },
        {
          "type": "text",
          "text": "Create a package called `students`."
        },
        {
          "type": "text",
          "text": "Include modules for:"
        },
        {
          "type": "bullets",
          "items": [
            "Registering students.",
            "Displaying student information.",
            "Calculating student averages.",
            "Determining student grades."
          ]
        },
        {
          "type": "text",
          "text": "Create a main program that connects all the modules."
        },
        {
          "type": "heading",
          "text": "Exercise 3: Importing Modules"
        },
        {
          "type": "text",
          "text": "Write a program that uses the following standard library modules:"
        },
        {
          "type": "bullets",
          "items": [
            "`math`",
            "`random`",
            "`datetime`"
          ]
        },
        {
          "type": "text",
          "text": "Demonstrate one useful function from each module."
        },
        {
          "type": "heading",
          "text": "Exercise 4: Virtual Environment"
        },
        {
          "type": "text",
          "text": "Create a virtual environment for a Python project."
        },
        {
          "type": "text",
          "text": "Activate it, install a third-party package and generate a `requirements.txt` file."
        },
        {
          "type": "heading",
          "text": "Exercise 5: Project Organization"
        },
        {
          "type": "text",
          "text": "Take an existing Python program and divide it into at least three modules."
        },
        {
          "type": "text",
          "text": "Explain what each module does and demonstrate how they communicate through imports."
        },
        {
          "type": "text",
          "text": "Progress: Part 3 of 4"
        }
      ]
    },
    {
      "id": "python-modules-packages-roadmap-part-4",
      "title": "PART 4 OF 4: KAI ASSESSMENT",
      "description": "Part 4 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "Python: Modules and Packages"
        },
        {
          "type": "text",
          "text": "Test your understanding of the lesson."
        },
        {
          "type": "heading",
          "text": "Question 1"
        },
        {
          "type": "text",
          "text": "What is a Python module?"
        },
        {
          "type": "text",
          "text": "A. A Python file containing reusable code."
        },
        {
          "type": "text",
          "text": "B. A database table."
        },
        {
          "type": "text",
          "text": "C. A type of loop."
        },
        {
          "type": "text",
          "text": "D. A programming language."
        },
        {
          "type": "heading",
          "text": "Question 2"
        },
        {
          "type": "text",
          "text": "What is the main purpose of Python packages?"
        },
        {
          "type": "text",
          "text": "A. To delete Python files."
        },
        {
          "type": "text",
          "text": "B. To organize related modules into directories."
        },
        {
          "type": "text",
          "text": "C. To replace variables."
        },
        {
          "type": "text",
          "text": "D. To execute loops faster."
        },
        {
          "type": "heading",
          "text": "Question 3"
        },
        {
          "type": "text",
          "text": "What does this statement do?"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import math"
        },
        {
          "type": "text",
          "text": "A. Creates a math function."
        },
        {
          "type": "text",
          "text": "B. Imports the math module."
        },
        {
          "type": "text",
          "text": "C. Deletes mathematical operations."
        },
        {
          "type": "text",
          "text": "D. Creates a Python package."
        },
        {
          "type": "heading",
          "text": "Question 4"
        },
        {
          "type": "text",
          "text": "What is the purpose of `__init__.py`?"
        },
        {
          "type": "text",
          "text": "A. To automatically delete modules."
        },
        {
          "type": "text",
          "text": "B. To initialize a regular Python package."
        },
        {
          "type": "text",
          "text": "C. To create a database."
        },
        {
          "type": "text",
          "text": "D. To install Python."
        },
        {
          "type": "heading",
          "text": "Question 5"
        },
        {
          "type": "text",
          "text": "Which command installs a third-party Python package?"
        },
        {
          "type": "text",
          "text": "A. `python install requests`"
        },
        {
          "type": "text",
          "text": "B. `pip remove requests`"
        },
        {
          "type": "text",
          "text": "C. `python -m pip install requests`"
        },
        {
          "type": "text",
          "text": "D. `import pip install requests`"
        },
        {
          "type": "heading",
          "text": "Question 6"
        },
        {
          "type": "text",
          "text": "What is the main purpose of a virtual environment?"
        },
        {
          "type": "text",
          "text": "A. To isolate project dependencies."
        },
        {
          "type": "text",
          "text": "B. To delete Python modules."
        },
        {
          "type": "text",
          "text": "C. To replace Python."
        },
        {
          "type": "text",
          "text": "D. To create HTML pages."
        },
        {
          "type": "heading",
          "text": "Question 7"
        },
        {
          "type": "text",
          "text": "Consider the following project structure:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "project/\n│\n├── main.py\n│\n└── users/\n    │\n    ├── __init__.py\n    └── registration.py"
        },
        {
          "type": "text",
          "text": "Which statement correctly imports the `register()` function from `registration.py`?"
        },
        {
          "type": "text",
          "text": "A."
        },
        {
          "type": "code",
          "language": "python",
          "code": "import users.py.registration"
        },
        {
          "type": "text",
          "text": "B."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from users.registration import register"
        },
        {
          "type": "text",
          "text": "C."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from registration.users import register"
        },
        {
          "type": "text",
          "text": "D."
        },
        {
          "type": "code",
          "language": "python",
          "code": "import register.users"
        },
        {
          "type": "heading",
          "text": "Question 8: Practical Programming Challenge"
        },
        {
          "type": "text",
          "text": "Create a Python package called `finance`."
        },
        {
          "type": "text",
          "text": "Inside it, create three modules:"
        },
        {
          "type": "numbered",
          "items": [
            "`income.py` – contains a function that calculates total income.",
            "`expenses.py` – contains a function that calculates total expenses.",
            "`balance.py` – contains a function that calculates the remaining balance."
          ]
        },
        {
          "type": "text",
          "text": "Create a `main.py` file that imports and uses all three modules."
        },
        {
          "type": "text",
          "text": "Use the following values:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "income = [10000, 5000, 3000]\n\nexpenses = [2000, 1500, 1000]"
        },
        {
          "type": "text",
          "text": "Your application should calculate and display:"
        },
        {
          "type": "bullets",
          "items": [
            "Total income.",
            "Total expenses.",
            "Remaining balance."
          ]
        },
        {
          "type": "text",
          "text": "Submit your code to Kai for marking and feedback."
        },
        {
          "type": "heading",
          "text": "Lesson Completion"
        },
        {
          "type": "text",
          "text": "After submitting your answers, Kai should:"
        },
        {
          "type": "numbered",
          "items": [
            "Mark all eight questions.",
            "Display the correct answers.",
            "Explain incorrect responses.",
            "Review your practical programming challenge.",
            "Calculate your final score.",
            "Recommend areas that need revision."
          ]
        },
        {
          "type": "text",
          "text": "**Part 4 of 4 — Lesson Complete**"
        },
        {
          "type": "heading",
          "text": "Recommended Next Lesson"
        },
        {
          "type": "text",
          "text": "**Python: Lambda Functions**"
        },
        {
          "type": "text",
          "text": "Learn how to write small anonymous functions and use them with `map()`, `filter()` and `sorted()`."
        }
      ]
    }
  ]
};

export default delivery;
