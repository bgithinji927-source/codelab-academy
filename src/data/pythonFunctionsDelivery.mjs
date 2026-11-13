const delivery = {
  "type": "authored",
  "version": 1,
  "sections": [
    {
      "id": "python-pythonfunctions-part-1",
      "title": "PART 1 OF 4: INTRODUCTION TO FUNCTIONS",
      "description": "Part 1 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "PYTHON PROGRAMMING: FUNCTIONS"
        },
        {
          "type": "heading",
          "text": "1. What Is a Function in Python?"
        },
        {
          "type": "text",
          "text": "A function is a reusable block of code designed to perform a particular task."
        },
        {
          "type": "text",
          "text": "Instead of writing the same instructions repeatedly throughout a program, you can place those instructions inside a function and execute them whenever needed."
        },
        {
          "type": "text",
          "text": "For example, imagine you are developing a student management system. You want your program to display a welcome message whenever a student logs in."
        },
        {
          "type": "text",
          "text": "Without a function, you might write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Welcome to the Student System\")\nprint(\"Welcome to the Student System\")\nprint(\"Welcome to the Student System\")"
        },
        {
          "type": "text",
          "text": "This repeats the same instruction."
        },
        {
          "type": "text",
          "text": "Using a function, you can write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def welcome():\n    print(\"Welcome to the Student System\")"
        },
        {
          "type": "text",
          "text": "You can then execute the function whenever you need it:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "welcome()\nwelcome()\nwelcome()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Welcome to the Student System\nWelcome to the Student System\nWelcome to the Student System"
        },
        {
          "type": "text",
          "text": "The function allows you to reuse the same code without rewriting it."
        },
        {
          "type": "heading",
          "text": "2. Why Are Functions Important?"
        },
        {
          "type": "text",
          "text": "Functions are important because they help programmers:"
        },
        {
          "type": "numbered",
          "items": [
            "**Reuse code:** Write instructions once and use them multiple times.",
            "**Reduce repetition:** Avoid writing the same code repeatedly.",
            "**Organize programs:** Divide large programs into smaller sections.",
            "**Improve readability:** Make programs easier to understand.",
            "**Simplify debugging:** Find and correct errors within specific functions.",
            "**Support teamwork:** Different developers can work on different functions of a project."
          ]
        },
        {
          "type": "text",
          "text": "For example, an online shopping application might have separate functions for:"
        },
        {
          "type": "bullets",
          "items": [
            "Registering users.",
            "Logging in.",
            "Adding products to a cart.",
            "Calculating order totals.",
            "Processing payments.",
            "Sending order confirmations."
          ]
        },
        {
          "type": "text",
          "text": "Each function performs a particular task."
        },
        {
          "type": "heading",
          "text": "3. Creating a Function in Python"
        },
        {
          "type": "text",
          "text": "Python uses the `def` keyword to define a function."
        },
        {
          "type": "text",
          "text": "Basic syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def function_name():\n    # Instructions to execute"
        },
        {
          "type": "text",
          "text": "Let's understand the components."
        },
        {
          "type": "table",
          "columns": [
            "Component",
            "Meaning"
          ],
          "rows": [
            [
              "`def`",
              "Keyword used to define a function."
            ],
            [
              "`function_name`",
              "The name given to the function."
            ],
            [
              "`()`",
              "Parentheses that can contain parameters."
            ],
            [
              "`:`",
              "Indicates the beginning of the function body."
            ],
            [
              "Indented code",
              "Instructions that belong to the function."
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
          "code": "def greet():\n    print(\"Hello, welcome to Python!\")"
        },
        {
          "type": "text",
          "text": "This creates a function called `greet`."
        },
        {
          "type": "text",
          "text": "However, defining a function does not automatically execute its instructions."
        },
        {
          "type": "text",
          "text": "You must call the function."
        },
        {
          "type": "heading",
          "text": "4. Calling a Function"
        },
        {
          "type": "text",
          "text": "Calling a function means instructing Python to execute the code inside that function."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello, welcome to Python!\")\n\ngreet()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Hello, welcome to Python!"
        },
        {
          "type": "text",
          "text": "Notice the difference:"
        },
        {
          "type": "bullets",
          "items": [
            "`def greet():` creates the function.",
            "`greet()` executes the function."
          ]
        },
        {
          "type": "text",
          "text": "A function can be called multiple times."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello!\")\n\ngreet()\ngreet()\ngreet()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Hello!\nHello!\nHello!"
        },
        {
          "type": "heading",
          "text": "5. Functions and Program Execution"
        },
        {
          "type": "text",
          "text": "Consider this program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def first():\n    print(\"First function\")\n\ndef second():\n    print(\"Second function\")\n\nprint(\"Program started\")\n\nsecond()\nfirst()\n\nprint(\"Program finished\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Program started\nSecond function\nFirst function\nProgram finished"
        },
        {
          "type": "text",
          "text": "Python executes instructions in order."
        },
        {
          "type": "text",
          "text": "Defining the functions does not execute their bodies. Their bodies run when they are called."
        },
        {
          "type": "text",
          "text": "This allows programmers to organize functions in one part of a program and call them from another part."
        },
        {
          "type": "heading",
          "text": "6. Types of Functions in Python"
        },
        {
          "type": "text",
          "text": "Python functions can be grouped into two common categories."
        },
        {
          "type": "text",
          "text": "**A. Built-in Functions**"
        },
        {
          "type": "text",
          "text": "These are functions already provided by Python."
        },
        {
          "type": "text",
          "text": "Examples:"
        },
        {
          "type": "table",
          "columns": [
            "Function",
            "Purpose"
          ],
          "rows": [
            [
              "`print()`",
              "Displays information."
            ],
            [
              "`input()`",
              "Accepts user input."
            ],
            [
              "`len()`",
              "Returns the length of an object."
            ],
            [
              "`type()`",
              "Identifies an object's type."
            ],
            [
              "`sum()`",
              "Calculates the sum of values."
            ],
            [
              "`max()`",
              "Returns the largest value."
            ],
            [
              "`min()`",
              "Returns the smallest value."
            ],
            [
              "`range()`",
              "Produces a sequence of numbers."
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
          "code": "numbers = [10, 20, 30, 40]\n\nprint(len(numbers))\nprint(sum(numbers))\nprint(max(numbers))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "4\n100\n40"
        },
        {
          "type": "text",
          "text": "**B. User-Defined Functions**"
        },
        {
          "type": "text",
          "text": "These are functions created by programmers to perform specific tasks."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate_area():\n    length = 10\n    width = 5\n\n    area = length * width\n\n    print(\"Area:\", area)\n\ncalculate_area()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Area: 50"
        },
        {
          "type": "heading",
          "text": "7. Real-World Applications of Functions"
        },
        {
          "type": "text",
          "text": "Functions are used in almost every software application."
        },
        {
          "type": "text",
          "text": "For example, a banking system might contain:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def check_balance():\n    pass\n\ndef deposit_money():\n    pass\n\ndef withdraw_money():\n    pass\n\ndef transfer_money():\n    pass"
        },
        {
          "type": "text",
          "text": "The `pass` keyword is temporarily used because the functions have not yet been implemented."
        },
        {
          "type": "text",
          "text": "A software developer can implement each function separately and connect them to the rest of the application."
        },
        {
          "type": "heading",
          "text": "Part 1 Summary"
        },
        {
          "type": "text",
          "text": "A function is a reusable block of code designed to perform a particular task."
        },
        {
          "type": "text",
          "text": "Python uses the `def` keyword to define functions, and the function name followed by parentheses is used to call them."
        },
        {
          "type": "text",
          "text": "**Progress: Part 1 of 4**"
        }
      ]
    },
    {
      "id": "python-pythonfunctions-part-2",
      "title": "PART 2 OF 4: PARAMETERS, ARGUMENTS AND RETURN VALUES",
      "description": "Part 2 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "1. Understanding Parameters"
        },
        {
          "type": "text",
          "text": "A parameter is a variable listed inside a function's parentheses when the function is defined."
        },
        {
          "type": "text",
          "text": "Parameters allow a function to receive information from outside."
        },
        {
          "type": "text",
          "text": "For example, consider a function that greets a person."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet(name):\n    print(\"Hello\", name)\n\ngreet(\"Brian\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Hello Brian"
        },
        {
          "type": "text",
          "text": "Here:"
        },
        {
          "type": "bullets",
          "items": [
            "`name` is the parameter.",
            "`\"Brian\"` is the argument.",
            "The function uses the received information to produce a result."
          ]
        },
        {
          "type": "text",
          "text": "Without parameters, you would have to create separate functions for different names."
        },
        {
          "type": "text",
          "text": "With parameters, one function can work with many different values."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet(name):\n    print(\"Hello\", name)\n\ngreet(\"Brian\")\ngreet(\"James\")\ngreet(\"Mary\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Hello Brian\nHello James\nHello Mary"
        },
        {
          "type": "heading",
          "text": "2. Understanding Arguments"
        },
        {
          "type": "text",
          "text": "An argument is the actual value passed to a function when it is called."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def welcome(student):\n    print(\"Welcome\", student)\n\nwelcome(\"Peter\")"
        },
        {
          "type": "text",
          "text": "In this example:"
        },
        {
          "type": "bullets",
          "items": [
            "`student` is the parameter.",
            "`\"Peter\"` is the argument."
          ]
        },
        {
          "type": "text",
          "text": "Parameters are defined in the function. Arguments are supplied when calling it."
        },
        {
          "type": "heading",
          "text": "3. Functions With Multiple Parameters"
        },
        {
          "type": "text",
          "text": "A function can receive more than one parameter."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add_numbers(a, b):\n    result = a + b\n    print(\"Sum:\", result)\n\nadd_numbers(10, 20)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Sum: 30"
        },
        {
          "type": "text",
          "text": "The function receives two values:"
        },
        {
          "type": "bullets",
          "items": [
            "`a` receives 10.",
            "`b` receives 20."
          ]
        },
        {
          "type": "text",
          "text": "It then adds them together."
        },
        {
          "type": "text",
          "text": "You can call the same function with different values:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "add_numbers(5, 8)\nadd_numbers(100, 200)\nadd_numbers(12, 15)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Sum: 13\nSum: 300\nSum: 27"
        },
        {
          "type": "heading",
          "text": "4. Understanding Return Values"
        },
        {
          "type": "text",
          "text": "The `return` statement allows a function to send a result back to the part of the program that called it."
        },
        {
          "type": "text",
          "text": "This is different from simply displaying information using `print()`."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add_numbers(a, b):\n    return a + b\n\nresult = add_numbers(10, 20)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "30"
        },
        {
          "type": "text",
          "text": "What happens?"
        },
        {
          "type": "numbered",
          "items": [
            "The function receives 10 and 20.",
            "It calculates their sum.",
            "`return` sends the result back.",
            "The result is stored in the variable `result`.",
            "`print()` displays the stored value."
          ]
        },
        {
          "type": "heading",
          "text": "5. Difference Between print() and return"
        },
        {
          "type": "text",
          "text": "This is one of the most important concepts when learning Python functions."
        },
        {
          "type": "table",
          "columns": [
            "`print()`",
            "`return`"
          ],
          "rows": [
            [
              "Displays information on the screen.",
              "Sends a value back to the caller."
            ],
            [
              "Does not automatically provide a reusable result.",
              "Allows the result to be stored and reused."
            ],
            [
              "Useful for displaying messages and debugging.",
              "Useful for calculations and program logic."
            ]
          ]
        },
        {
          "type": "text",
          "text": "Example using `print()`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate():\n    print(10 + 20)\n\nresult = calculate()\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "30\nNone"
        },
        {
          "type": "text",
          "text": "Why does it display `None`?"
        },
        {
          "type": "text",
          "text": "Because the function displays 30 but does not return a value. Python functions return `None` automatically when no explicit return value is provided."
        },
        {
          "type": "text",
          "text": "Now consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate():\n    return 10 + 20\n\nresult = calculate()\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "30"
        },
        {
          "type": "text",
          "text": "This time, the function returns 30, which can be stored and reused."
        },
        {
          "type": "heading",
          "text": "6. Functions With Default Parameters"
        },
        {
          "type": "text",
          "text": "A default parameter has a value that Python uses when the caller does not provide an argument for that parameter."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet(name=\"Guest\"):\n    print(\"Welcome\", name)\n\ngreet()\ngreet(\"Brian\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Welcome Guest\nWelcome Brian"
        },
        {
          "type": "text",
          "text": "The function uses `\"Guest\"` when no name is provided."
        },
        {
          "type": "text",
          "text": "However, when `\"Brian\"` is supplied, that value is used instead."
        },
        {
          "type": "heading",
          "text": "7. Keyword Arguments"
        },
        {
          "type": "text",
          "text": "Python allows you to specify arguments using parameter names."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def student_info(name, course):\n    print(\"Name:\", name)\n    print(\"Course:\", course)\n\nstudent_info(course=\"Software Development\", name=\"Brian\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Name: Brian\nCourse: Software Development"
        },
        {
          "type": "text",
          "text": "Keyword arguments allow you to provide values by name rather than relying on their position."
        },
        {
          "type": "heading",
          "text": "8. Functions Returning Multiple Values"
        },
        {
          "type": "text",
          "text": "Python allows a function to return multiple values."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate(a, b):\n    total = a + b\n    difference = a - b\n\n    return total, difference\n\nresult = calculate(20, 10)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "(30, 10)"
        },
        {
          "type": "text",
          "text": "You can also store the returned values separately:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "total, difference = calculate(20, 10)\n\nprint(\"Total:\", total)\nprint(\"Difference:\", difference)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Total: 30\nDifference: 10"
        },
        {
          "type": "text",
          "text": "Python returns these values together as a tuple."
        },
        {
          "type": "heading",
          "text": "9. Variable Scope"
        },
        {
          "type": "text",
          "text": "Variable scope describes where a variable can be accessed in a program."
        },
        {
          "type": "text",
          "text": "Two important types are:"
        },
        {
          "type": "text",
          "text": "**Local Variables**"
        },
        {
          "type": "text",
          "text": "A local variable is created inside a function and is normally accessible only within that function."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate():\n    result = 100\n    print(result)\n\ncalculate()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "100"
        },
        {
          "type": "text",
          "text": "The variable `result` belongs to the function."
        },
        {
          "type": "text",
          "text": "Trying to access it outside the function will produce a `NameError`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate():\n    result = 100\n\ncalculate()\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "**Global Variables**"
        },
        {
          "type": "text",
          "text": "A global variable is defined outside functions and can generally be accessed throughout the module."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = \"Brian\"\n\ndef greet():\n    print(\"Hello\", name)\n\ngreet()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Hello Brian"
        },
        {
          "type": "text",
          "text": "A function can read a global variable without declaring it as `global`."
        },
        {
          "type": "text",
          "text": "To reassign a global variable from inside a function, Python requires the `global` keyword."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "count = 0\n\ndef increase():\n    global count\n    count = count + 1\n\nincrease()\n\nprint(count)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1"
        },
        {
          "type": "text",
          "text": "Use global variables carefully. Passing information through function parameters and return values often makes programs easier to maintain."
        },
        {
          "type": "heading",
          "text": "Part 2 Summary"
        },
        {
          "type": "text",
          "text": "Functions can receive information through parameters and arguments. They can calculate results and send those results back using `return`."
        },
        {
          "type": "text",
          "text": "Understanding variable scope also helps you write functions that behave correctly."
        },
        {
          "type": "text",
          "text": "**Progress: Part 2 of 4**"
        }
      ]
    },
    {
      "id": "python-pythonfunctions-part-3",
      "title": "PART 3 OF 4: PRACTICAL APPLICATIONS OF FUNCTIONS",
      "description": "Part 3 of 4",
      "blocks": [
        {
          "type": "text",
          "text": "In this part, you will create real Python programs using functions."
        },
        {
          "type": "heading",
          "text": "1. Setting Up Your Python Project"
        },
        {
          "type": "text",
          "text": "Follow these steps:"
        },
        {
          "type": "numbered",
          "items": [
            "Open Visual Studio Code or another Python editor.",
            "Create a folder named `python_functions`.",
            "Create a file inside it called `functions.py`.",
            "Write your Python code inside the file.",
            "Save the file.",
            "Open the terminal in the project folder."
          ]
        },
        {
          "type": "text",
          "text": "Run your program:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python functions.py"
        },
        {
          "type": "text",
          "text": "If your system uses Python 3 through a separate command:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python3 functions.py"
        },
        {
          "type": "heading",
          "text": "2. Program One: Simple Greeting Function"
        },
        {
          "type": "text",
          "text": "Create a function that displays a welcome message."
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def welcome():\n    print(\"Welcome to CodeLab Academy!\")\n    print(\"Learn Python Programming.\")\n\nwelcome()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Welcome to CodeLab Academy!\nLearn Python Programming."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`def welcome():` defines the function.",
            "The two indented instructions belong to the function.",
            "`welcome()` executes the function."
          ]
        },
        {
          "type": "heading",
          "text": "3. Program Two: Calculator Using Functions"
        },
        {
          "type": "text",
          "text": "A calculator can use separate functions for different mathematical operations."
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    if b == 0:\n        return \"Cannot divide by zero\"\n\n    return a / b\n\n\nprint(\"Addition:\", add(10, 5))\nprint(\"Subtraction:\", subtract(10, 5))\nprint(\"Multiplication:\", multiply(10, 5))\nprint(\"Division:\", divide(10, 5))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Addition: 15\nSubtraction: 5\nMultiplication: 50\nDivision: 2.0"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "Each mathematical operation has its own function."
        },
        {
          "type": "text",
          "text": "This makes the calculator easier to organize and maintain."
        },
        {
          "type": "text",
          "text": "Notice that the division function checks whether the second number is zero before performing division."
        },
        {
          "type": "heading",
          "text": "4. Program Three: Student Grading System"
        },
        {
          "type": "text",
          "text": "Suppose you are building a university system that calculates student grades."
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate_grade(marks):\n\n    if marks < 0 or marks > 100:\n        return \"Invalid marks\"\n\n    if marks >= 70:\n        return \"A\"\n    elif marks >= 60:\n        return \"B\"\n    elif marks >= 50:\n        return \"C\"\n    elif marks >= 40:\n        return \"D\"\n    else:\n        return \"Fail\"\n\n\nstudent_marks = 75\n\ngrade = calculate_grade(student_marks)\n\nprint(\"Marks:\", student_marks)\nprint(\"Grade:\", grade)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Marks: 75\nGrade: A"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "numbered",
          "items": [
            "`calculate_grade()` receives the student's marks.",
            "The function checks whether the marks are valid.",
            "It evaluates the conditions.",
            "It returns the appropriate grade.",
            "The returned grade is stored in `grade`."
          ]
        },
        {
          "type": "heading",
          "text": "5. Program Four: User Input and Functions"
        },
        {
          "type": "text",
          "text": "Functions can also work with information entered by users."
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet_user(name):\n    print(\"Hello\", name)\n    print(\"Welcome to our application!\")\n\n\nusername = input(\"Enter your name: \")\n\ngreet_user(username)"
        },
        {
          "type": "text",
          "text": "Example output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter your name: Brian\nHello Brian\nWelcome to our application!"
        },
        {
          "type": "text",
          "text": "The program collects the user's name and passes it to the function."
        },
        {
          "type": "heading",
          "text": "6. Program Five: Student Management System"
        },
        {
          "type": "text",
          "text": "Now combine several functions to create a small student management program."
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = []\n\n\ndef add_student(name):\n    students.append(name)\n    print(name, \"has been registered.\")\n\n\ndef display_students():\n    print(\"\\nRegistered Students:\")\n\n    for student in students:\n        print(student)\n\n\ndef count_students():\n    return len(students)\n\n\nadd_student(\"Brian\")\nadd_student(\"James\")\nadd_student(\"Mary\")\n\ndisplay_students()\n\nprint(\"\\nTotal Students:\", count_students())"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian has been registered.\nJames has been registered.\nMary has been registered.\n\nRegistered Students:\nBrian\nJames\nMary\n\nTotal Students: 3"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "This program uses three functions:"
        },
        {
          "type": "table",
          "columns": [
            "Function",
            "Responsibility"
          ],
          "rows": [
            [
              "`add_student()`",
              "Adds a student to the list."
            ],
            [
              "`display_students()`",
              "Displays registered students."
            ],
            [
              "`count_students()`",
              "Returns the total number of students."
            ]
          ]
        },
        {
          "type": "text",
          "text": "Each function performs a specific task."
        },
        {
          "type": "text",
          "text": "This is an example of how functions help developers divide a program into manageable components."
        },
        {
          "type": "heading",
          "text": "7. Program Six: Banking Operations"
        },
        {
          "type": "text",
          "text": "Consider a basic banking application."
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "balance = 5000\n\n\ndef check_balance():\n    print(\"Current Balance:\", balance)\n\n\ndef deposit(amount):\n    global balance\n\n    if amount <= 0:\n        print(\"Invalid deposit amount\")\n        return\n\n    balance += amount\n\n    print(\"Deposit successful\")\n\n\ndef withdraw(amount):\n    global balance\n\n    if amount <= 0:\n        print(\"Invalid withdrawal amount\")\n\n    elif amount > balance:\n        print(\"Insufficient funds\")\n\n    else:\n        balance -= amount\n        print(\"Withdrawal successful\")\n\n\ncheck_balance()\n\ndeposit(2000)\n\nwithdraw(1000)\n\ncheck_balance()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Current Balance: 5000\nDeposit successful\nWithdrawal successful\nCurrent Balance: 6000"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "The program has three main functions:"
        },
        {
          "type": "bullets",
          "items": [
            "`check_balance()` displays the current balance.",
            "`deposit()` increases the balance.",
            "`withdraw()` reduces the balance after checking the available funds."
          ]
        },
        {
          "type": "text",
          "text": "This is a simplified learning example. A real banking system requires secure authentication, transaction validation, persistent storage, authorization and audit logging."
        },
        {
          "type": "heading",
          "text": "8. Understanding Function Design"
        },
        {
          "type": "text",
          "text": "When developing larger applications, functions should ideally perform clearly defined responsibilities."
        },
        {
          "type": "text",
          "text": "For example, an e-commerce application could be organized as follows:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def register_user():\n    pass\n\ndef login_user():\n    pass\n\ndef display_products():\n    pass\n\ndef add_to_cart():\n    pass\n\ndef calculate_total():\n    pass\n\ndef process_payment():\n    pass"
        },
        {
          "type": "text",
          "text": "Each function represents a separate responsibility."
        },
        {
          "type": "text",
          "text": "This makes the application easier to test, improve and maintain."
        },
        {
          "type": "heading",
          "text": "9. Common Mistakes When Using Functions"
        },
        {
          "type": "text",
          "text": "**Mistake 1: Forgetting to call a function**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello\")"
        },
        {
          "type": "text",
          "text": "This defines the function but does not execute it."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello\")\n\ngreet()"
        },
        {
          "type": "text",
          "text": "**Mistake 2: Forgetting parentheses when calling a function**"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "greet"
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "greet()"
        },
        {
          "type": "text",
          "text": "**Mistake 3: Forgetting indentation**"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\nprint(\"Hello\")"
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello\")"
        },
        {
          "type": "text",
          "text": "**Mistake 4: Passing the wrong number of arguments**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b\n\nadd(10)"
        },
        {
          "type": "text",
          "text": "This produces a `TypeError` because the function requires two arguments, but only one was provided."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "add(10, 20)"
        },
        {
          "type": "text",
          "text": "**Mistake 5: Confusing print() with return**"
        },
        {
          "type": "text",
          "text": "If you need to use a function's calculated result elsewhere in your program, return the result instead of only printing it."
        },
        {
          "type": "heading",
          "text": "10. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete the following exercises independently."
        },
        {
          "type": "text",
          "text": "**Exercise 1: Greeting Function**"
        },
        {
          "type": "text",
          "text": "Create a function called `greet()` that displays a welcome message."
        },
        {
          "type": "text",
          "text": "**Exercise 2: Addition Function**"
        },
        {
          "type": "text",
          "text": "Create a function that accepts two numbers and returns their sum."
        },
        {
          "type": "text",
          "text": "**Exercise 3: Even or Odd Checker**"
        },
        {
          "type": "text",
          "text": "Create a function called `check_number()` that receives a number and returns whether it is even or odd."
        },
        {
          "type": "text",
          "text": "**Exercise 4: Area Calculator**"
        },
        {
          "type": "text",
          "text": "Create a function that accepts the length and width of a rectangle and returns its area."
        },
        {
          "type": "text",
          "text": "Formula:"
        },
        {
          "type": "text",
          "text": "Area = Length × Width"
        },
        {
          "type": "text",
          "text": "**Exercise 5: Student Grade Calculator**"
        },
        {
          "type": "text",
          "text": "Create a function that receives student marks and returns the appropriate grade."
        },
        {
          "type": "text",
          "text": "**Exercise 6: Simple Calculator**"
        },
        {
          "type": "text",
          "text": "Create separate functions for addition, subtraction, multiplication and division."
        },
        {
          "type": "text",
          "text": "Allow users to enter two numbers and select the operation."
        },
        {
          "type": "heading",
          "text": "Part 3 Summary"
        },
        {
          "type": "text",
          "text": "You have learned how to create practical Python programs using functions."
        },
        {
          "type": "text",
          "text": "You have also applied functions to calculators, student management systems, grading systems and basic banking operations."
        },
        {
          "type": "text",
          "text": "The main objective is to understand how separate functions can work together to build a complete application."
        },
        {
          "type": "text",
          "text": "**Progress: Part 3 of 4**"
        }
      ]
    },
    {
      "id": "python-pythonfunctions-part-4",
      "title": "PART 4 OF 4: KAI ASSESSMENT",
      "description": "Part 4 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "Lesson Review"
        },
        {
          "type": "text",
          "text": "Before taking the assessment, make sure you understand:"
        },
        {
          "type": "bullets",
          "items": [
            "The meaning of a function.",
            "Why functions are important.",
            "How to define and call functions.",
            "The difference between built-in and user-defined functions.",
            "Parameters and arguments.",
            "Return values.",
            "The difference between `print()` and `return`.",
            "Default and keyword arguments.",
            "Local and global variables.",
            "How functions are applied in real programs."
          ]
        },
        {
          "type": "heading",
          "text": "Kai Assessment Instructions"
        },
        {
          "type": "text",
          "text": "Answer all eight questions below. Each question tests your understanding of Python functions."
        },
        {
          "type": "text",
          "text": "**Question 1: What is a function in Python?**"
        },
        {
          "type": "text",
          "text": "A. A reusable block of code designed to perform a task."
        },
        {
          "type": "text",
          "text": "B. A type of database."
        },
        {
          "type": "text",
          "text": "C. A computer operating system."
        },
        {
          "type": "text",
          "text": "D. A variable that stores numbers only."
        },
        {
          "type": "text",
          "text": "**Question 2: Which keyword is used to define a function in Python?**"
        },
        {
          "type": "text",
          "text": "A. `function`"
        },
        {
          "type": "text",
          "text": "B. `def`"
        },
        {
          "type": "text",
          "text": "C. `create`"
        },
        {
          "type": "text",
          "text": "D. `define`"
        },
        {
          "type": "text",
          "text": "**Question 3: What is the purpose of calling a function?**"
        },
        {
          "type": "text",
          "text": "A. To delete the function."
        },
        {
          "type": "text",
          "text": "B. To execute the instructions inside the function."
        },
        {
          "type": "text",
          "text": "C. To rename the function."
        },
        {
          "type": "text",
          "text": "D. To stop Python."
        },
        {
          "type": "text",
          "text": "**Question 4: In the following code, what is `name`?**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet(name):\n    print(\"Hello\", name)"
        },
        {
          "type": "text",
          "text": "A. An argument."
        },
        {
          "type": "text",
          "text": "B. A parameter."
        },
        {
          "type": "text",
          "text": "C. A return value."
        },
        {
          "type": "text",
          "text": "D. A built-in function."
        },
        {
          "type": "text",
          "text": "**Question 5: What is the purpose of the `return` statement?**"
        },
        {
          "type": "text",
          "text": "A. To display information only."
        },
        {
          "type": "text",
          "text": "B. To stop the computer."
        },
        {
          "type": "text",
          "text": "C. To send a value back to the caller."
        },
        {
          "type": "text",
          "text": "D. To define a variable."
        },
        {
          "type": "text",
          "text": "**Question 6: What is the output of this code?**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b\n\nresult = add(5, 10)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "A. 5"
        },
        {
          "type": "text",
          "text": "B. 10"
        },
        {
          "type": "text",
          "text": "C. 15"
        },
        {
          "type": "text",
          "text": "D. 510"
        },
        {
          "type": "text",
          "text": "**Question 7: What happens when a function does not explicitly return a value?**"
        },
        {
          "type": "text",
          "text": "A. Python automatically returns `None`."
        },
        {
          "type": "text",
          "text": "B. Python automatically returns zero."
        },
        {
          "type": "text",
          "text": "C. The program always crashes."
        },
        {
          "type": "text",
          "text": "D. Python deletes the function."
        },
        {
          "type": "text",
          "text": "**Question 8: Why are functions important when developing large applications?**"
        },
        {
          "type": "text",
          "text": "A. They make every program run without errors."
        },
        {
          "type": "text",
          "text": "B. They eliminate the need for variables."
        },
        {
          "type": "text",
          "text": "C. They help organize code, reduce repetition and support code reuse."
        },
        {
          "type": "text",
          "text": "D. They replace programming languages."
        },
        {
          "type": "heading",
          "text": "Assessment Completion"
        },
        {
          "type": "text",
          "text": "Submit your answers to Kai for marking and feedback."
        },
        {
          "type": "text",
          "text": "Kai will evaluate your understanding, explain incorrect answers and identify concepts that need further revision."
        },
        {
          "type": "text",
          "text": "**Progress: Part 4 of 4 — Lesson Complete**"
        }
      ]
    }
  ]
};

export default delivery;
