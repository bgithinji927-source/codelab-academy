const delivery = {
  "type": "authored",
  "version": 1,
  "sections": [
    {
      "id": "python-pythonfilesmodules-part-1",
      "title": "PART 1 OF 4: INTRODUCTION TO FILE HANDLING",
      "description": "Part 1 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "PYTHON FILES AND MODULES"
        },
        {
          "type": "heading",
          "text": "1. What Is File Handling?"
        },
        {
          "type": "text",
          "text": "File handling in Python refers to the process of creating, opening, reading, writing, updating, and deleting files using Python code."
        },
        {
          "type": "text",
          "text": "Normally, when a Python program runs, the data stored in its variables exists temporarily in memory."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student_name = \"Brian\"\nstudent_age = 22"
        },
        {
          "type": "text",
          "text": "These variables store information while the program is running. However, when the program closes, the values are not automatically saved for the next execution."
        },
        {
          "type": "text",
          "text": "File handling allows us to save information permanently so that it can be accessed later."
        },
        {
          "type": "heading",
          "text": "Real-world applications"
        },
        {
          "type": "text",
          "text": "File handling is useful in:"
        },
        {
          "type": "bullets",
          "items": [
            "Student management systems for storing student records.",
            "Banking applications for maintaining transaction records.",
            "Inventory systems for saving product information.",
            "Websites for storing uploaded files.",
            "Software applications for saving settings and logs."
          ]
        },
        {
          "type": "heading",
          "text": "2. Types of Files in Python"
        },
        {
          "type": "text",
          "text": "There are two common categories of files:"
        },
        {
          "type": "table",
          "columns": [
            "File type",
            "Description",
            "Examples"
          ],
          "rows": [
            [
              "Text files",
              "Store readable text",
              "`.txt`, `.csv`, `.json`, `.py`"
            ],
            [
              "Binary files",
              "Store data in binary format",
              "`.jpg`, `.png`, `.mp3`, `.pdf`"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Text files"
        },
        {
          "type": "text",
          "text": "A text file contains readable characters."
        },
        {
          "type": "text",
          "text": "For example, a file named `students.txt` could contain:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nJohn\nMary\nPeter"
        },
        {
          "type": "heading",
          "text": "Binary files"
        },
        {
          "type": "text",
          "text": "Binary files store information in a format that is not normally readable as plain text."
        },
        {
          "type": "text",
          "text": "Examples include photographs, audio files and PDF documents."
        },
        {
          "type": "text",
          "text": "Python can work with both text and binary files."
        },
        {
          "type": "heading",
          "text": "3. Opening Files in Python"
        },
        {
          "type": "text",
          "text": "Python provides the built-in `open()` function to open files."
        },
        {
          "type": "text",
          "text": "Syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "open(\"filename\", \"mode\")"
        },
        {
          "type": "text",
          "text": "There are two main arguments:"
        },
        {
          "type": "bullets",
          "items": [
            "`filename`: The name or path of the file.",
            "`mode`: Specifies what you want to do with the file."
          ]
        },
        {
          "type": "heading",
          "text": "Common file modes"
        },
        {
          "type": "table",
          "columns": [
            "Mode",
            "Meaning"
          ],
          "rows": [
            [
              "`\"r\"`",
              "Read an existing file"
            ],
            [
              "`\"w\"`",
              "Write to a file, replacing existing content"
            ],
            [
              "`\"a\"`",
              "Append information to a file"
            ],
            [
              "`\"x\"`",
              "Create a new file, failing if it already exists"
            ],
            [
              "`\"b\"`",
              "Open a file in binary mode"
            ],
            [
              "`\"t\"`",
              "Open a file in text mode (default)"
            ],
            [
              "`\"r+\"`",
              "Read and write without initially truncating the file"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Example: Opening a file"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`file` is a variable that holds the opened file object.",
            "`open()` is the built-in Python function used to open files.",
            "`\"students.txt\"` is the file we want to open.",
            "`\"r\"` tells Python that we want to read the file."
          ]
        },
        {
          "type": "text",
          "text": "The file must exist when using read mode. Otherwise, Python raises a `FileNotFoundError`."
        },
        {
          "type": "heading",
          "text": "4. Reading Files"
        },
        {
          "type": "text",
          "text": "Python provides different methods for reading file contents."
        },
        {
          "type": "heading",
          "text": "A. read()"
        },
        {
          "type": "text",
          "text": "The `read()` method reads the contents of a file."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")\n\ncontent = file.read()\n\nprint(content)\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "Line-by-line explanation:"
        },
        {
          "type": "numbered",
          "items": [
            "`file = open(\"students.txt\", \"r\")` opens the file in reading mode.",
            "`content = file.read()` reads the entire file and stores its contents in the `content` variable.",
            "`print(content)` displays the information.",
            "`file.close()` closes the file after reading."
          ]
        },
        {
          "type": "text",
          "text": "If `students.txt` contains:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nJohn\nMary"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nJohn\nMary"
        },
        {
          "type": "heading",
          "text": "B. readline()"
        },
        {
          "type": "text",
          "text": "The `readline()` method reads one line at a time."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")\n\nfirst_line = file.readline()\n\nprint(first_line)\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "The file is opened in reading mode.",
            "`readline()` reads the first line from the file.",
            "The first line is stored in `first_line`.",
            "`print()` displays it.",
            "`close()` closes the file."
          ]
        },
        {
          "type": "heading",
          "text": "C. readlines()"
        },
        {
          "type": "text",
          "text": "The `readlines()` method reads all lines and returns them as a list."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")\n\nlines = file.readlines()\n\nprint(lines)\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "Possible output:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "['Brian\\n', 'John\\n', 'Mary\\n']"
        },
        {
          "type": "text",
          "text": "Notice that each line may contain `\\n`, which represents a newline character."
        },
        {
          "type": "heading",
          "text": "5. Writing to Files"
        },
        {
          "type": "text",
          "text": "Python uses write mode (`\"w\"`) to write information into a file."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"w\")\n\nfile.write(\"Brian\\n\")\nfile.write(\"John\\n\")\nfile.write(\"Mary\\n\")\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "numbered",
          "items": [
            "Open `students.txt` in write mode.",
            "Write `Brian` into the file.",
            "Write `John` on a new line.",
            "Write `Mary` on another new line.",
            "Close the file."
          ]
        },
        {
          "type": "text",
          "text": "The `\\n` character moves the next text to a new line."
        },
        {
          "type": "text",
          "text": "**Important:** Write mode replaces the existing contents of a file. If the file does not exist, Python creates it."
        },
        {
          "type": "heading",
          "text": "6. Appending Information to Files"
        },
        {
          "type": "text",
          "text": "Sometimes we want to add new information without deleting existing information."
        },
        {
          "type": "text",
          "text": "This is where append mode (`\"a\"`) becomes useful."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"a\")\n\nfile.write(\"Peter\\n\")\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`\"a\"` opens the file in append mode.",
            "`write()` adds Peter after the existing content.",
            "`close()` closes the file."
          ]
        },
        {
          "type": "text",
          "text": "If the file previously contained:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nJohn\nMary"
        },
        {
          "type": "text",
          "text": "It will now contain:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nJohn\nMary\nPeter"
        },
        {
          "type": "heading",
          "text": "7. Using with to Open Files"
        },
        {
          "type": "text",
          "text": "Python provides a safer and cleaner way to handle files using the `with` statement."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"r\") as file:\n    content = file.read()\n    print(content)"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "numbered",
          "items": [
            "`with` opens the file and manages its lifecycle.",
            "`open()` opens `students.txt` in reading mode.",
            "`as file` assigns the opened file object to the variable `file`.",
            "`content = file.read()` reads the file.",
            "`print(content)` displays the information."
          ]
        },
        {
          "type": "text",
          "text": "The important advantage is that Python automatically closes the file when the `with` block finishes, even if an exception occurs."
        },
        {
          "type": "text",
          "text": "This is generally the recommended approach."
        },
        {
          "type": "heading",
          "text": "8. Part 1 Summary"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "bullets",
          "items": [
            "What file handling means.",
            "The difference between text and binary files.",
            "How to open files using `open()`.",
            "How to read files using `read()`, `readline()` and `readlines()`.",
            "How to write information using `\"w\"`.",
            "How to append information using `\"a\"`.",
            "How to manage files using `with`."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 1 of 4"
        }
      ]
    },
    {
      "id": "python-pythonfilesmodules-part-2",
      "title": "PART 2 OF 4: ADVANCED FILE HANDLING AND PYTHON MODULES",
      "description": "Part 2 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "1. Reading and Writing Files Together"
        },
        {
          "type": "text",
          "text": "Python allows you to open files using different combinations of reading and writing modes."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"r+\") as file:\n    content = file.read()\n    print(content)\n\n    file.write(\"\\nNew Student\")"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`\"r+\"` opens the existing file for reading and writing.",
            "`file.read()` reads the existing content.",
            "`print(content)` displays it.",
            "`file.write()` writes additional text at the current file position."
          ]
        },
        {
          "type": "text",
          "text": "Because reading moves the file position to the end, this example writes after the existing content."
        },
        {
          "type": "heading",
          "text": "2. Closing and Managing Files"
        },
        {
          "type": "text",
          "text": "When working with files, proper resource management is important."
        },
        {
          "type": "text",
          "text": "An opened file uses system resources. If too many files remain open, an application may experience problems."
        },
        {
          "type": "text",
          "text": "The `with` statement helps prevent this by automatically closing files."
        },
        {
          "type": "text",
          "text": "You can also check whether a file is closed:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")\n\nprint(file.closed)\n\nfile.close()\n\nprint(file.closed)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "False\nTrue"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "Before closing, `file.closed` returns `False`.",
            "After calling `close()`, it returns `True`."
          ]
        },
        {
          "type": "heading",
          "text": "3. Handling File Errors"
        },
        {
          "type": "text",
          "text": "A program should not crash unexpectedly when a file is missing or inaccessible."
        },
        {
          "type": "text",
          "text": "Python provides exception handling for this."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    with open(\"students.txt\", \"r\") as file:\n        content = file.read()\n        print(content)\n\nexcept FileNotFoundError:\n    print(\"The file does not exist.\")"
        },
        {
          "type": "text",
          "text": "Line-by-line explanation:"
        },
        {
          "type": "numbered",
          "items": [
            "`try:` tells Python to execute code that might cause an exception.",
            "`with open(...)` attempts to open the file.",
            "`content = file.read()` reads the information.",
            "`print(content)` displays it.",
            "`except FileNotFoundError:` catches the specific error if the file cannot be found.",
            "`print()` displays a helpful message instead of allowing the exception to terminate the program."
          ]
        },
        {
          "type": "heading",
          "text": "4. Deleting Files"
        },
        {
          "type": "text",
          "text": "Python can delete files using the `os` module."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\nif os.path.exists(\"students.txt\"):\n    os.remove(\"students.txt\")\n    print(\"File deleted successfully.\")\nelse:\n    print(\"File does not exist.\")"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`import os` imports Python's operating-system functionality.",
            "`os.path.exists()` checks whether the specified file exists.",
            "`os.remove()` deletes the file.",
            "The `if` and `else` statements determine which message to display."
          ]
        },
        {
          "type": "text",
          "text": "**Warning:** Deleting a file using `os.remove()` is destructive. Make sure the path is correct before deleting anything."
        },
        {
          "type": "heading",
          "text": "5. What Is a Python Module?"
        },
        {
          "type": "text",
          "text": "A Python module is a file containing Python code that can be reused in another Python program."
        },
        {
          "type": "text",
          "text": "A module may contain:"
        },
        {
          "type": "bullets",
          "items": [
            "Variables.",
            "Functions.",
            "Classes.",
            "Executable statements."
          ]
        },
        {
          "type": "text",
          "text": "For example, imagine you are developing a student management system."
        },
        {
          "type": "text",
          "text": "You may have separate functions for:"
        },
        {
          "type": "bullets",
          "items": [
            "Calculating student averages.",
            "Registering students.",
            "Displaying student information.",
            "Calculating grades."
          ]
        },
        {
          "type": "text",
          "text": "Instead of writing everything in one large Python file, you can separate related functionality into modules."
        },
        {
          "type": "text",
          "text": "This makes programs easier to maintain, test and reuse."
        },
        {
          "type": "heading",
          "text": "6. Creating Your Own Python Module"
        },
        {
          "type": "text",
          "text": "Let's create a simple module."
        },
        {
          "type": "text",
          "text": "Create a folder named:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_modules"
        },
        {
          "type": "text",
          "text": "Inside it, create two Python files:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_modules/\n│\n├── calculator.py\n│\n└── main.py"
        },
        {
          "type": "heading",
          "text": "Step 1: Create calculator.py"
        },
        {
          "type": "text",
          "text": "Write the following code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b\n\n\ndef subtract(a, b):\n    return a - b\n\n\ndef multiply(a, b):\n    return a * b"
        },
        {
          "type": "text",
          "text": "Line-by-line explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`def add(a, b):` defines a function called `add` that accepts two arguments.",
            "`return a + b` calculates and returns their sum.",
            "`def subtract(a, b):` defines another function.",
            "`return a - b` subtracts the second value from the first.",
            "`def multiply(a, b):` defines a multiplication function.",
            "`return a * b` multiplies the two values."
          ]
        },
        {
          "type": "text",
          "text": "We have created a module containing three reusable functions."
        },
        {
          "type": "heading",
          "text": "Step 2: Create main.py"
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import calculator\n\nresult1 = calculator.add(10, 5)\nresult2 = calculator.subtract(10, 5)\nresult3 = calculator.multiply(10, 5)\n\nprint(result1)\nprint(result2)\nprint(result3)"
        },
        {
          "type": "text",
          "text": "Line-by-line explanation:"
        },
        {
          "type": "numbered",
          "items": [
            "`import calculator` imports the calculator module.",
            "`calculator.add(10, 5)` accesses the `add()` function inside the module.",
            "`calculator.subtract(10, 5)` accesses the subtraction function.",
            "`calculator.multiply(10, 5)` accesses the multiplication function.",
            "The three `print()` statements display the results."
          ]
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "15\n5\n50"
        },
        {
          "type": "text",
          "text": "**Important:** Both files are in the same directory, so Python can find the module using this simple import."
        },
        {
          "type": "heading",
          "text": "7. Different Ways of Importing Modules"
        },
        {
          "type": "text",
          "text": "Python provides different ways to import code."
        },
        {
          "type": "heading",
          "text": "A. Import the entire module"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import math\n\nprint(math.sqrt(25))"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`import math` imports the math module.",
            "`math.sqrt(25)` calls the square-root function.",
            "`print()` displays the result."
          ]
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "5.0"
        },
        {
          "type": "heading",
          "text": "B. Import a specific function"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from math import sqrt\n\nprint(sqrt(36))"
        },
        {
          "type": "text",
          "text": "Here:"
        },
        {
          "type": "bullets",
          "items": [
            "`from math import sqrt` imports only the `sqrt` function.",
            "You can call `sqrt()` directly without writing `math.sqrt()`."
          ]
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "6.0"
        },
        {
          "type": "heading",
          "text": "C. Import using an alias"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import math as m\n\nprint(m.sqrt(49))"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`import math as m` gives the math module a shorter name.",
            "`m.sqrt(49)` uses that alias to access the square-root function."
          ]
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "7.0"
        },
        {
          "type": "heading",
          "text": "8. Built-in Python Modules"
        },
        {
          "type": "text",
          "text": "Python comes with many modules that provide ready-made functionality."
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
              "Mathematical operations"
            ],
            [
              "`random`",
              "Generating random values"
            ],
            [
              "`datetime`",
              "Working with dates and times"
            ],
            [
              "`os`",
              "Operating-system operations"
            ],
            [
              "`json`",
              "Working with JSON data"
            ],
            [
              "`statistics`",
              "Statistical calculations"
            ],
            [
              "`pathlib`",
              "Working with filesystem paths"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Example using the `random` module:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import random\n\nnumber = random.randint(1, 10)\n\nprint(number)"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`import random` imports the random module.",
            "`random.randint(1, 10)` generates a random integer between 1 and 10, including both endpoints.",
            "`print(number)` displays the generated number."
          ]
        },
        {
          "type": "text",
          "text": "The output may differ each time you execute the program."
        },
        {
          "type": "heading",
          "text": "9. Part 2 Summary"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "bullets",
          "items": [
            "How to read and write using combined modes.",
            "How to handle file-related errors.",
            "How to delete files.",
            "What Python modules are.",
            "How to create your own modules.",
            "How to import entire modules or specific functions.",
            "How to use aliases.",
            "Examples of built-in Python modules."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 2 of 4"
        }
      ]
    },
    {
      "id": "python-pythonfilesmodules-part-3",
      "title": "PART 3 OF 4: PRACTICAL FILE HANDLING AND MODULE DEVELOPMENT",
      "description": "Part 3 of 4",
      "blocks": [
        {
          "type": "text",
          "text": "This part focuses on building actual programs using files and modules."
        },
        {
          "type": "heading",
          "text": "1. Setting Up Your Project"
        },
        {
          "type": "text",
          "text": "Open Visual Studio Code or another Python code editor."
        },
        {
          "type": "text",
          "text": "Create a folder called:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "files_and_modules_project"
        },
        {
          "type": "text",
          "text": "Inside it, create these files:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "files_and_modules_project/\n│\n├── student_manager.py\n├── student_operations.py\n└── main.py"
        },
        {
          "type": "text",
          "text": "Our goal is to build a simple student management program that can:"
        },
        {
          "type": "numbered",
          "items": [
            "Register students.",
            "Save student information in a file.",
            "Display registered students.",
            "Reuse functions through a separate module."
          ]
        },
        {
          "type": "heading",
          "text": "2. Building the Student Management Module"
        },
        {
          "type": "text",
          "text": "Open `student_operations.py`."
        },
        {
          "type": "text",
          "text": "Add this code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def register_student(name, age, course):\n    with open(\"students.txt\", \"a\") as file:\n        file.write(f\"{name},{age},{course}\\n\")\n\n    print(\"Student registered successfully!\")\n\n\ndef display_students():\n    try:\n        with open(\"students.txt\", \"r\") as file:\n            students = file.readlines()\n\n            for student in students:\n                print(student.strip())\n\n    except FileNotFoundError:\n        print(\"No student records found.\")"
        },
        {
          "type": "heading",
          "text": "Understanding the code line by line"
        },
        {
          "type": "text",
          "text": "**Function 1: register_student()**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def register_student(name, age, course):"
        },
        {
          "type": "text",
          "text": "Creates a function that accepts a student's name, age and course."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"a\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the student records file in append mode."
        },
        {
          "type": "text",
          "text": "If the file does not exist, Python creates it."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(f\"{name},{age},{course}\\n\")"
        },
        {
          "type": "text",
          "text": "Saves the student's information in the file."
        },
        {
          "type": "text",
          "text": "The `f` before the quotation marks creates an f-string. It allows us to insert variable values directly into a string."
        },
        {
          "type": "text",
          "text": "For example, if:"
        },
        {
          "type": "bullets",
          "items": [
            "name = Brian",
            "age = 22",
            "course = BBIT"
          ]
        },
        {
          "type": "text",
          "text": "The saved line becomes:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian,22,BBIT"
        },
        {
          "type": "text",
          "text": "The `\\n` moves the next student's record to a new line."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Student registered successfully!\")"
        },
        {
          "type": "text",
          "text": "Displays a success message."
        },
        {
          "type": "text",
          "text": "**Function 2: display_students()**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def display_students():"
        },
        {
          "type": "text",
          "text": "Defines a function responsible for displaying student records."
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Begins an exception-handling block."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"r\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the student file in reading mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = file.readlines()"
        },
        {
          "type": "text",
          "text": "Reads all student records and stores them in a list."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for student in students:"
        },
        {
          "type": "text",
          "text": "Loops through each student record."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(student.strip())"
        },
        {
          "type": "text",
          "text": "Displays the record after removing surrounding whitespace, including the newline character."
        },
        {
          "type": "code",
          "language": "python",
          "code": "except FileNotFoundError:"
        },
        {
          "type": "text",
          "text": "Handles the situation where the records file does not exist."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"No student records found.\")"
        },
        {
          "type": "text",
          "text": "Displays a helpful message."
        },
        {
          "type": "heading",
          "text": "3. Connecting the Module to the Main Program"
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
          "code": "import student_operations\n\nprint(\"STUDENT MANAGEMENT SYSTEM\")\n\nname = input(\"Enter student name: \")\nage = input(\"Enter student age: \")\ncourse = input(\"Enter student course: \")\n\nstudent_operations.register_student(name, age, course)\n\nprint(\"\\nREGISTERED STUDENTS\")\n\nstudent_operations.display_students()"
        },
        {
          "type": "heading",
          "text": "Line-by-line explanation"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import student_operations"
        },
        {
          "type": "text",
          "text": "Imports our custom module."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"STUDENT MANAGEMENT SYSTEM\")"
        },
        {
          "type": "text",
          "text": "Displays the application title."
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = input(\"Enter student name: \")"
        },
        {
          "type": "text",
          "text": "Requests the student's name and stores the response."
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = input(\"Enter student age: \")"
        },
        {
          "type": "text",
          "text": "Requests the student's age."
        },
        {
          "type": "text",
          "text": "The input is initially stored as text. If you needed to perform mathematical operations on the age, you would convert it to an integer using `int()`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "course = input(\"Enter student course: \")"
        },
        {
          "type": "text",
          "text": "Requests the student's course."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student_operations.register_student(name, age, course)"
        },
        {
          "type": "text",
          "text": "Calls the registration function from our module and passes the collected information."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"\\nREGISTERED STUDENTS\")"
        },
        {
          "type": "text",
          "text": "Displays a heading. `\\n` creates a blank line before the heading."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student_operations.display_students()"
        },
        {
          "type": "text",
          "text": "Calls the function that reads and displays the saved student records."
        },
        {
          "type": "heading",
          "text": "Running the program"
        },
        {
          "type": "text",
          "text": "Open the terminal inside your project folder."
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
          "text": "Example interaction:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "STUDENT MANAGEMENT SYSTEM\nEnter student name: Brian\nEnter student age: 22\nEnter student course: BBIT\n\nStudent registered successfully!\n\nREGISTERED STUDENTS\nBrian,22,BBIT"
        },
        {
          "type": "text",
          "text": "Run the program again and register another student."
        },
        {
          "type": "text",
          "text": "The previous student's record will remain because we used append mode."
        },
        {
          "type": "heading",
          "text": "4. Working with JSON Files"
        },
        {
          "type": "text",
          "text": "JSON stands for JavaScript Object Notation."
        },
        {
          "type": "text",
          "text": "It is a data format commonly used to exchange and store structured information."
        },
        {
          "type": "text",
          "text": "Python provides the built-in `json` module to work with JSON."
        },
        {
          "type": "text",
          "text": "Example JSON data:"
        },
        {
          "type": "code",
          "language": "json",
          "code": "{\n    \"name\": \"Brian\",\n    \"age\": 22,\n    \"course\": \"BBIT\"\n}"
        },
        {
          "type": "heading",
          "text": "Saving information in JSON"
        },
        {
          "type": "text",
          "text": "Create a file called `json_example.py`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "import json\n\nstudent = {\n    \"name\": \"Brian\",\n    \"age\": 22,\n    \"course\": \"BBIT\"\n}\n\nwith open(\"student.json\", \"w\") as file:\n    json.dump(student, file, indent=4)\n\nprint(\"Student information saved.\")"
        },
        {
          "type": "text",
          "text": "Line-by-line explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`import json` imports Python's JSON module.",
            "`student = {...}` creates a Python dictionary containing student information.",
            "`open(\"student.json\", \"w\")` creates or replaces the JSON file.",
            "`json.dump(student, file, indent=4)` converts the dictionary into JSON and writes it into the file.",
            "`indent=4` formats the JSON with four spaces of indentation.",
            "`print()` displays a confirmation message."
          ]
        },
        {
          "type": "text",
          "text": "The generated file will contain:"
        },
        {
          "type": "code",
          "language": "json",
          "code": "{\n    \"name\": \"Brian\",\n    \"age\": 22,\n    \"course\": \"BBIT\"\n}"
        },
        {
          "type": "heading",
          "text": "Reading information from JSON"
        },
        {
          "type": "text",
          "text": "Add this code to another file or run it after the saving example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import json\n\nwith open(\"student.json\", \"r\") as file:\n    student = json.load(file)\n\nprint(student[\"name\"])\nprint(student[\"age\"])\nprint(student[\"course\"])"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`import json` imports the JSON module.",
            "`open()` opens the JSON file.",
            "`json.load(file)` reads the JSON data and converts it into a Python dictionary.",
            "`student[\"name\"]` accesses the name value.",
            "`student[\"age\"]` accesses the age.",
            "`student[\"course\"]` accesses the course."
          ]
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\n22\nBBIT"
        },
        {
          "type": "text",
          "text": "**Important distinction:**"
        },
        {
          "type": "table",
          "columns": [
            "Function",
            "Purpose"
          ],
          "rows": [
            [
              "`json.dump()`",
              "Writes Python data into a JSON file"
            ],
            [
              "`json.load()`",
              "Reads JSON data from a file"
            ],
            [
              "`json.dumps()`",
              "Converts Python data into a JSON string"
            ],
            [
              "`json.loads()`",
              "Converts a JSON string into Python data"
            ]
          ]
        },
        {
          "type": "text",
          "text": "JSON is especially useful when building applications that exchange data through APIs."
        },
        {
          "type": "heading",
          "text": "5. Understanding Python Packages"
        },
        {
          "type": "text",
          "text": "A Python package is a way of organizing related modules into directories."
        },
        {
          "type": "text",
          "text": "Imagine a large application containing hundreds of functions. Keeping everything in one file would make the application difficult to manage."
        },
        {
          "type": "text",
          "text": "You can organize your modules into packages."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "school_system/\n│\n├── main.py\n│\n└── student/\n    │\n    ├── __init__.py\n    ├── registration.py\n    └── records.py"
        },
        {
          "type": "text",
          "text": "Here:"
        },
        {
          "type": "bullets",
          "items": [
            "`school_system` is the main project directory.",
            "`student` is a package.",
            "`registration.py` is a module for registering students.",
            "`records.py` is a module for managing student records.",
            "`__init__.py` marks the directory as a regular Python package and can contain package initialization code."
          ]
        },
        {
          "type": "text",
          "text": "In modern Python, some package structures can also work without `__init__.py`, using namespace packages."
        },
        {
          "type": "heading",
          "text": "Importing from a package"
        },
        {
          "type": "text",
          "text": "Suppose `registration.py` contains:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def register(name):\n    print(f\"{name} registered successfully.\")"
        },
        {
          "type": "text",
          "text": "You can access this function from `main.py`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from student.registration import register\n\nregister(\"Brian\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian registered successfully."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`from student.registration import register` imports the function from the registration module inside the student package.",
            "`register(\"Brian\")` executes the function."
          ]
        },
        {
          "type": "heading",
          "text": "6. Common Mistakes When Working with Files and Modules"
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
              "Using `\"r\"` for a missing file",
              "Reading mode requires an existing file",
              "Create the file or handle `FileNotFoundError`"
            ],
            [
              "Using `\"w\"` accidentally",
              "Existing contents are replaced",
              "Use `\"a\"` when adding records"
            ],
            [
              "Forgetting to close files",
              "Resources may remain occupied",
              "Use `with`"
            ],
            [
              "Incorrect module name",
              "Python cannot find the module",
              "Check spelling and project structure"
            ],
            [
              "Circular imports",
              "Modules depend on each other in a cycle",
              "Reorganize shared code"
            ],
            [
              "Running from the wrong directory",
              "Relative file paths may point somewhere unexpected",
              "Run from the project directory or use reliable paths"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "7. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete these exercises using your Python environment."
        },
        {
          "type": "heading",
          "text": "Exercise 1: Personal Information File"
        },
        {
          "type": "text",
          "text": "Write a Python program that:"
        },
        {
          "type": "numbered",
          "items": [
            "Requests the user's name.",
            "Requests their age.",
            "Saves the information in `personal.txt`.",
            "Reads and displays the saved information."
          ]
        },
        {
          "type": "heading",
          "text": "Exercise 2: Student Records"
        },
        {
          "type": "text",
          "text": "Create a program that:"
        },
        {
          "type": "numbered",
          "items": [
            "Registers at least three students.",
            "Saves their information in a text file.",
            "Reads all saved records.",
            "Displays each student separately."
          ]
        },
        {
          "type": "heading",
          "text": "Exercise 3: Calculator Module"
        },
        {
          "type": "text",
          "text": "Create a module called `calculator.py` containing functions for:"
        },
        {
          "type": "bullets",
          "items": [
            "Addition.",
            "Subtraction.",
            "Multiplication.",
            "Division."
          ]
        },
        {
          "type": "text",
          "text": "Create a separate `main.py` that imports and uses those functions."
        },
        {
          "type": "text",
          "text": "Make sure division by zero is handled properly."
        },
        {
          "type": "heading",
          "text": "Exercise 4: JSON Student Record"
        },
        {
          "type": "text",
          "text": "Create a program that stores student information in JSON format and reads it back."
        },
        {
          "type": "heading",
          "text": "Exercise 5: Organizing a Project"
        },
        {
          "type": "text",
          "text": "Create a Python package with separate modules for:"
        },
        {
          "type": "bullets",
          "items": [
            "Student registration.",
            "Student records.",
            "Student calculations."
          ]
        },
        {
          "type": "text",
          "text": "Import the functions into a main program and demonstrate that they work."
        },
        {
          "type": "heading",
          "text": "8. Part 3 Summary"
        },
        {
          "type": "text",
          "text": "You have now built programs that:"
        },
        {
          "type": "bullets",
          "items": [
            "Save and retrieve student information.",
            "Separate application functionality into modules.",
            "Import and reuse functions.",
            "Store structured information in JSON.",
            "Organize modules into packages."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 3 of 4"
        }
      ]
    },
    {
      "id": "python-pythonfilesmodules-part-4",
      "title": "PART 4 OF 4: KAI ASSESSMENT",
      "description": "Part 4 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "Python: Files and Modules"
        },
        {
          "type": "text",
          "text": "You have completed the lesson. Now test your understanding."
        },
        {
          "type": "text",
          "text": "Answer the following eight questions. Submit your answers to Kai for marking and feedback."
        },
        {
          "type": "heading",
          "text": "Question 1"
        },
        {
          "type": "text",
          "text": "What is the main purpose of file handling in Python?"
        },
        {
          "type": "text",
          "text": "A. To change Python syntax."
        },
        {
          "type": "text",
          "text": "B. To store, retrieve and manage information in files."
        },
        {
          "type": "text",
          "text": "C. To automatically correct errors."
        },
        {
          "type": "text",
          "text": "D. To create programming languages."
        },
        {
          "type": "heading",
          "text": "Question 2"
        },
        {
          "type": "text",
          "text": "Which file mode is used to add information without replacing existing content?"
        },
        {
          "type": "text",
          "text": "A. `\"r\"`"
        },
        {
          "type": "text",
          "text": "B. `\"w\"`"
        },
        {
          "type": "text",
          "text": "C. `\"a\"`"
        },
        {
          "type": "text",
          "text": "D. `\"x\"`"
        },
        {
          "type": "heading",
          "text": "Question 3"
        },
        {
          "type": "text",
          "text": "What does the `read()` method do?"
        },
        {
          "type": "text",
          "text": "A. Deletes a file."
        },
        {
          "type": "text",
          "text": "B. Reads the contents of a file."
        },
        {
          "type": "text",
          "text": "C. Creates a Python module."
        },
        {
          "type": "text",
          "text": "D. Renames a file."
        },
        {
          "type": "heading",
          "text": "Question 4"
        },
        {
          "type": "text",
          "text": "What is the advantage of using the `with` statement when opening files?"
        },
        {
          "type": "text",
          "text": "A. It automatically closes the file when the block finishes."
        },
        {
          "type": "text",
          "text": "B. It automatically deletes the file."
        },
        {
          "type": "text",
          "text": "C. It prevents all programming errors."
        },
        {
          "type": "text",
          "text": "D. It converts files into modules."
        },
        {
          "type": "heading",
          "text": "Question 5"
        },
        {
          "type": "text",
          "text": "What is a Python module?"
        },
        {
          "type": "text",
          "text": "A. A folder containing images."
        },
        {
          "type": "text",
          "text": "B. A Python file containing reusable code."
        },
        {
          "type": "text",
          "text": "C. A type of database."
        },
        {
          "type": "text",
          "text": "D. A Python error."
        },
        {
          "type": "heading",
          "text": "Question 6"
        },
        {
          "type": "text",
          "text": "Consider this code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import math\n\nprint(math.sqrt(64))"
        },
        {
          "type": "text",
          "text": "What will be displayed?"
        },
        {
          "type": "text",
          "text": "A. 6"
        },
        {
          "type": "text",
          "text": "B. 8.0"
        },
        {
          "type": "text",
          "text": "C. 64"
        },
        {
          "type": "text",
          "text": "D. 16"
        },
        {
          "type": "heading",
          "text": "Question 7"
        },
        {
          "type": "text",
          "text": "What is the difference between a Python module and a package?"
        },
        {
          "type": "text",
          "text": "A. A module is a Python file, while a package organizes related modules."
        },
        {
          "type": "text",
          "text": "B. A module stores images, while a package stores videos."
        },
        {
          "type": "text",
          "text": "C. They are exactly the same."
        },
        {
          "type": "text",
          "text": "D. A package is a Python variable."
        },
        {
          "type": "heading",
          "text": "Question 8"
        },
        {
          "type": "text",
          "text": "What does `json.dump()` do?"
        },
        {
          "type": "text",
          "text": "A. Deletes JSON data."
        },
        {
          "type": "text",
          "text": "B. Converts JSON into a Python function."
        },
        {
          "type": "text",
          "text": "C. Writes Python data into a JSON file."
        },
        {
          "type": "text",
          "text": "D. Creates a Python package."
        },
        {
          "type": "heading",
          "text": "Lesson Completion"
        },
        {
          "type": "text",
          "text": "After answering all eight questions, submit your answers to Kai."
        },
        {
          "type": "text",
          "text": "Kai should:"
        },
        {
          "type": "numbered",
          "items": [
            "Mark each answer.",
            "Show the correct answers.",
            "Explain any incorrect responses.",
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
          "text": "**Python: Object-Oriented Programming (OOP)**"
        },
        {
          "type": "text",
          "text": "You will learn about classes, objects, attributes, methods, constructors and how to organize larger Python applications."
        }
      ]
    }
  ]
};

export default delivery;
