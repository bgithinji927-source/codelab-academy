const delivery = {
  "type": "authored",
  "version": 1,
  "sections": [
    {
      "id": "python-pythonerrorsdebugging-part-1",
      "title": "PART 1 OF 4: UNDERSTANDING ERRORS IN PYTHON",
      "description": "Part 1 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "PYTHON ERRORS AND DEBUGGING"
        },
        {
          "type": "heading",
          "text": "1. What Is an Error in Programming?"
        },
        {
          "type": "text",
          "text": "An error is a problem in a program that causes it to behave incorrectly or prevents it from executing successfully."
        },
        {
          "type": "text",
          "text": "When writing Python programs, you may make mistakes such as:"
        },
        {
          "type": "bullets",
          "items": [
            "Writing Python instructions incorrectly.",
            "Using a variable that has not been defined.",
            "Performing calculations that are not allowed.",
            "Trying to access information that does not exist.",
            "Writing instructions in the wrong order.",
            "Creating logic that produces an unexpected result."
          ]
        },
        {
          "type": "text",
          "text": "These problems are normal when learning programming."
        },
        {
          "type": "text",
          "text": "Even experienced software developers encounter errors when building applications."
        },
        {
          "type": "text",
          "text": "The important skill is learning how to identify, understand and correct them."
        },
        {
          "type": "heading",
          "text": "2. What Is Debugging?"
        },
        {
          "type": "text",
          "text": "Debugging is the process of finding, understanding and fixing errors in a computer program."
        },
        {
          "type": "text",
          "text": "A programmer who debugs a program investigates why it is not behaving as expected."
        },
        {
          "type": "text",
          "text": "For example, consider this program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = 10\nresult = number + 5\n\nprint(result)"
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
          "text": "The program works correctly."
        },
        {
          "type": "text",
          "text": "Now consider this version:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = 10\nresult = number + \"5\"\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Python produces an error because it cannot directly add an integer and a string."
        },
        {
          "type": "text",
          "text": "The programmer must investigate the error and correct it."
        },
        {
          "type": "text",
          "text": "Corrected version:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = 10\nresult = number + int(\"5\")\n\nprint(result)"
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
          "text": "The `int()` function converts the string `\"5\"` into the integer `5`."
        },
        {
          "type": "text",
          "text": "This allows Python to perform the addition."
        },
        {
          "type": "heading",
          "text": "3. The Three Main Categories of Programming Errors"
        },
        {
          "type": "text",
          "text": "Python errors can be grouped into three important categories:"
        },
        {
          "type": "numbered",
          "items": [
            "Syntax errors.",
            "Runtime errors.",
            "Logical errors."
          ]
        },
        {
          "type": "text",
          "text": "Understanding the difference is important because each category requires a different debugging approach."
        },
        {
          "type": "heading",
          "text": "4. Syntax Errors"
        },
        {
          "type": "heading",
          "text": "What Is a Syntax Error?"
        },
        {
          "type": "text",
          "text": "A syntax error occurs when Python code does not follow the grammatical rules of the Python programming language."
        },
        {
          "type": "text",
          "text": "Python has specific rules for writing instructions."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "bullets",
          "items": [
            "Statements must use valid Python syntax.",
            "Colons are required after certain statements.",
            "Indentation must be correct.",
            "Parentheses and quotation marks must be properly closed."
          ]
        },
        {
          "type": "text",
          "text": "When Python encounters invalid syntax, it cannot successfully parse the program."
        },
        {
          "type": "heading",
          "text": "Example 1: Missing Colon"
        },
        {
          "type": "text",
          "text": "Incorrect code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if age >= 18\n    print(\"You are an adult\")"
        },
        {
          "type": "text",
          "text": "Python reports a syntax error."
        },
        {
          "type": "text",
          "text": "**Understanding the error line by line:**"
        },
        {
          "type": "text",
          "text": "Line 1:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if age >= 18"
        },
        {
          "type": "text",
          "text": "This instruction checks whether the value of `age` is greater than or equal to 18."
        },
        {
          "type": "text",
          "text": "However, Python requires a colon at the end of an `if` statement."
        },
        {
          "type": "text",
          "text": "Line 2:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"You are an adult\")"
        },
        {
          "type": "text",
          "text": "This instruction is intended to execute when the condition is true."
        },
        {
          "type": "text",
          "text": "The problem is not the `print()` instruction. The problem is the missing colon on the previous line."
        },
        {
          "type": "text",
          "text": "Corrected code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if age >= 18:\n    print(\"You are an adult\")"
        },
        {
          "type": "text",
          "text": "The colon tells Python that an indented block of instructions follows."
        },
        {
          "type": "heading",
          "text": "Example 2: Incorrect Indentation"
        },
        {
          "type": "text",
          "text": "Incorrect code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\nprint(\"Hello\")"
        },
        {
          "type": "text",
          "text": "Python reports an `IndentationError`."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "Line 1:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():"
        },
        {
          "type": "text",
          "text": "This defines a function named `greet`."
        },
        {
          "type": "text",
          "text": "Line 2:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Hello\")"
        },
        {
          "type": "text",
          "text": "This instruction belongs inside the function, but it is not indented."
        },
        {
          "type": "text",
          "text": "Python requires the function body to be indented."
        },
        {
          "type": "text",
          "text": "Corrected code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello\")\n\ngreet()"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`def greet():` defines the function.",
            "`print(\"Hello\")` is indented to show that it belongs to the function.",
            "`greet()` calls the function and executes its instructions."
          ]
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Hello"
        },
        {
          "type": "heading",
          "text": "Example 3: Missing Closing Parenthesis"
        },
        {
          "type": "text",
          "text": "Incorrect code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Welcome to Python\""
        },
        {
          "type": "text",
          "text": "The closing parenthesis is missing."
        },
        {
          "type": "text",
          "text": "Corrected code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Welcome to Python\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Welcome to Python"
        },
        {
          "type": "heading",
          "text": "Common Syntax Errors"
        },
        {
          "type": "table",
          "columns": [
            "Error",
            "Meaning"
          ],
          "rows": [
            [
              "`SyntaxError`",
              "Python code does not follow valid syntax."
            ],
            [
              "`IndentationError`",
              "Code is not indented correctly."
            ],
            [
              "`TabError`",
              "Tabs and spaces have been used inconsistently for indentation."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "5. Runtime Errors"
        },
        {
          "type": "heading",
          "text": "What Is a Runtime Error?"
        },
        {
          "type": "text",
          "text": "A runtime error occurs while a program is executing."
        },
        {
          "type": "text",
          "text": "Unlike syntax errors, runtime errors may happen even when the program's syntax is correct."
        },
        {
          "type": "text",
          "text": "For example, a program might attempt to divide a number by zero or access a list position that does not exist."
        },
        {
          "type": "text",
          "text": "Python usually reports runtime errors using exceptions."
        },
        {
          "type": "heading",
          "text": "Example 1: Division by Zero"
        },
        {
          "type": "text",
          "text": "Consider this code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = 10\nresult = number / 0\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Python produces:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "ZeroDivisionError"
        },
        {
          "type": "text",
          "text": "Line-by-line explanation:"
        },
        {
          "type": "text",
          "text": "Line 1:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = 10"
        },
        {
          "type": "text",
          "text": "Creates a variable called `number` and stores the integer `10`."
        },
        {
          "type": "text",
          "text": "Line 2:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = number / 0"
        },
        {
          "type": "text",
          "text": "Attempts to divide 10 by zero."
        },
        {
          "type": "text",
          "text": "Division by zero is mathematically undefined, so Python raises a `ZeroDivisionError`."
        },
        {
          "type": "text",
          "text": "Line 3:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(result)"
        },
        {
          "type": "text",
          "text": "This instruction is not reached because the program stops when the exception occurs."
        },
        {
          "type": "text",
          "text": "Corrected version:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = 10\ndivisor = 2\n\nresult = number / divisor\n\nprint(result)"
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
          "text": "Example 2: NameError"
        },
        {
          "type": "text",
          "text": "Consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(username)"
        },
        {
          "type": "text",
          "text": "Python produces:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "NameError"
        },
        {
          "type": "text",
          "text": "Why?"
        },
        {
          "type": "text",
          "text": "The program attempts to display a variable called `username`, but that variable has not been defined."
        },
        {
          "type": "text",
          "text": "Corrected version:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "username = \"Brian\"\n\nprint(username)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "The first line creates the variable.",
            "The second line accesses and displays its value."
          ]
        },
        {
          "type": "heading",
          "text": "Example 3: TypeError"
        },
        {
          "type": "text",
          "text": "Consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = 20\nmessage = \"My age is \" + age\n\nprint(message)"
        },
        {
          "type": "text",
          "text": "Python produces a `TypeError`."
        },
        {
          "type": "text",
          "text": "Why?"
        },
        {
          "type": "text",
          "text": "The `+` operator is being used to combine a string and an integer."
        },
        {
          "type": "text",
          "text": "Python does not automatically convert the integer into a string in this operation."
        },
        {
          "type": "text",
          "text": "Corrected version:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = 20\n\nmessage = \"My age is \" + str(age)\n\nprint(message)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "My age is 20"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`age = 20` stores an integer.",
            "`str(age)` converts the integer into a string.",
            "The `+` operator joins the two strings.",
            "`print(message)` displays the final message."
          ]
        },
        {
          "type": "heading",
          "text": "Example 4: IndexError"
        },
        {
          "type": "text",
          "text": "Consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\"Brian\", \"James\", \"Mary\"]\n\nprint(students[5])"
        },
        {
          "type": "text",
          "text": "Python produces an `IndexError`."
        },
        {
          "type": "text",
          "text": "Why?"
        },
        {
          "type": "text",
          "text": "The list contains only three elements."
        },
        {
          "type": "text",
          "text": "Python list positions start at zero:"
        },
        {
          "type": "table",
          "columns": [
            "Index",
            "Student"
          ],
          "rows": [
            [
              "0",
              "Brian"
            ],
            [
              "1",
              "James"
            ],
            [
              "2",
              "Mary"
            ]
          ]
        },
        {
          "type": "text",
          "text": "There is no item at index 5."
        },
        {
          "type": "text",
          "text": "Corrected version:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\"Brian\", \"James\", \"Mary\"]\n\nprint(students[2])"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Mary"
        },
        {
          "type": "heading",
          "text": "Common Runtime Errors"
        },
        {
          "type": "table",
          "columns": [
            "Error",
            "Meaning"
          ],
          "rows": [
            [
              "`ZeroDivisionError`",
              "Attempting to divide by zero."
            ],
            [
              "`NameError`",
              "Using a name that has not been defined."
            ],
            [
              "`TypeError`",
              "Performing an operation on incompatible types."
            ],
            [
              "`ValueError`",
              "Supplying a value of the correct type but an inappropriate value."
            ],
            [
              "`IndexError`",
              "Accessing a sequence position that does not exist."
            ],
            [
              "`KeyError`",
              "Accessing a dictionary key that does not exist."
            ],
            [
              "`FileNotFoundError`",
              "Attempting to access a file that cannot be found."
            ],
            [
              "`AttributeError`",
              "Trying to use an attribute or method that an object does not have."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "6. Logical Errors"
        },
        {
          "type": "heading",
          "text": "What Is a Logical Error?"
        },
        {
          "type": "text",
          "text": "A logical error occurs when a program executes successfully but produces an incorrect result because the programmer has written incorrect logic."
        },
        {
          "type": "text",
          "text": "Unlike syntax and runtime errors, logical errors do not necessarily produce an error message."
        },
        {
          "type": "text",
          "text": "They can be difficult to identify because Python may believe everything is correct."
        },
        {
          "type": "heading",
          "text": "Example: Incorrect Calculation"
        },
        {
          "type": "text",
          "text": "Suppose you want to calculate the average of three numbers."
        },
        {
          "type": "text",
          "text": "Incorrect code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number1 = 10\nnumber2 = 20\nnumber3 = 30\n\naverage = number1 + number2 + number3 / 3\n\nprint(average)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "40.0"
        },
        {
          "type": "text",
          "text": "The program executes successfully, but the answer is wrong."
        },
        {
          "type": "text",
          "text": "Why?"
        },
        {
          "type": "text",
          "text": "Python follows operator precedence."
        },
        {
          "type": "text",
          "text": "Division is performed before addition."
        },
        {
          "type": "text",
          "text": "Therefore, Python calculates:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "10 + 20 + (30 / 3)"
        },
        {
          "type": "text",
          "text": "Which gives:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "10 + 20 + 10 = 40"
        },
        {
          "type": "text",
          "text": "The correct formula is to add all three numbers first and then divide the total by three."
        },
        {
          "type": "text",
          "text": "Corrected code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number1 = 10\nnumber2 = 20\nnumber3 = 30\n\naverage = (number1 + number2 + number3) / 3\n\nprint(average)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "20.0"
        },
        {
          "type": "text",
          "text": "The parentheses ensure that Python adds all three numbers before performing the division."
        },
        {
          "type": "heading",
          "text": "Example: Incorrect Condition"
        },
        {
          "type": "text",
          "text": "Suppose a school awards a pass when a student scores 40 marks or more."
        },
        {
          "type": "text",
          "text": "Incorrect code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = 65\n\nif marks > 70:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
        },
        {
          "type": "text",
          "text": "The program displays:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Fail"
        },
        {
          "type": "text",
          "text": "The syntax is correct, but the condition is incorrect."
        },
        {
          "type": "text",
          "text": "The programmer used `> 70` instead of `>= 40`."
        },
        {
          "type": "text",
          "text": "Corrected code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = 65\n\nif marks >= 40:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Pass"
        },
        {
          "type": "heading",
          "text": "Difference Between the Three Main Error Categories"
        },
        {
          "type": "table",
          "columns": [
            "Error category",
            "When it occurs",
            "Example"
          ],
          "rows": [
            [
              "Syntax error",
              "Python cannot correctly interpret the code.",
              "Missing colon."
            ],
            [
              "Runtime error",
              "An exception occurs during execution.",
              "Division by zero."
            ],
            [
              "Logical error",
              "The program runs but produces an incorrect result.",
              "Incorrect average formula."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Part 1 Summary"
        },
        {
          "type": "text",
          "text": "You have learned that programming errors are not all the same."
        },
        {
          "type": "text",
          "text": "Syntax errors prevent Python from interpreting code correctly. Runtime errors occur during execution. Logical errors cause programs to produce incorrect results even when they run successfully."
        },
        {
          "type": "text",
          "text": "**Progress: Part 1 of 4**"
        }
      ]
    },
    {
      "id": "python-pythonerrorsdebugging-part-2",
      "title": "PART 2 OF 4: READING ERROR MESSAGES AND HANDLING EXCEPTIONS",
      "description": "Part 2 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "1. Understanding Python Error Messages"
        },
        {
          "type": "text",
          "text": "When Python encounters an error, it usually displays information describing what went wrong."
        },
        {
          "type": "text",
          "text": "This information is called a traceback."
        },
        {
          "type": "text",
          "text": "A traceback helps programmers identify:"
        },
        {
          "type": "bullets",
          "items": [
            "The type of error.",
            "The location where the error occurred.",
            "The instructions that were being executed.",
            "The reason Python could not continue normally."
          ]
        },
        {
          "type": "text",
          "text": "Consider this program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = 10\nresult = number / 0\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Python produces an error similar to:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Traceback (most recent call last):\n  File \"main.py\", line 2, in <module>\n    result = number / 0\nZeroDivisionError: division by zero"
        },
        {
          "type": "text",
          "text": "Let's understand each part."
        },
        {
          "type": "text",
          "text": "**1. Traceback**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Traceback (most recent call last):"
        },
        {
          "type": "text",
          "text": "This tells you that Python is displaying the sequence of calls and locations associated with the exception."
        },
        {
          "type": "text",
          "text": "**2. File information**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "File \"main.py\", line 2"
        },
        {
          "type": "text",
          "text": "This identifies the file and line where the exception occurred."
        },
        {
          "type": "text",
          "text": "**3. The problematic instruction**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = number / 0"
        },
        {
          "type": "text",
          "text": "This shows the instruction that caused the error."
        },
        {
          "type": "text",
          "text": "**4. Error type**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "ZeroDivisionError"
        },
        {
          "type": "text",
          "text": "This identifies the category of exception."
        },
        {
          "type": "text",
          "text": "**5. Error explanation**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "division by zero"
        },
        {
          "type": "text",
          "text": "This explains why the operation failed."
        },
        {
          "type": "text",
          "text": "Understanding tracebacks makes debugging much easier."
        },
        {
          "type": "heading",
          "text": "2. What Is Exception Handling?"
        },
        {
          "type": "text",
          "text": "Exception handling is the process of managing errors that occur while a program executes."
        },
        {
          "type": "text",
          "text": "Python provides several keywords for exception handling:"
        },
        {
          "type": "bullets",
          "items": [
            "`try`",
            "`except`",
            "`else`",
            "`finally`",
            "`raise`"
          ]
        },
        {
          "type": "text",
          "text": "These keywords help developers build programs that respond appropriately when unexpected situations occur."
        },
        {
          "type": "text",
          "text": "Instead of allowing every error to terminate the program unexpectedly, you can handle anticipated exceptions and provide meaningful messages."
        },
        {
          "type": "heading",
          "text": "3. Understanding try and except"
        },
        {
          "type": "text",
          "text": "The `try` block contains code that might produce an exception."
        },
        {
          "type": "text",
          "text": "The `except` block contains instructions that execute if a matching exception occurs."
        },
        {
          "type": "text",
          "text": "Basic structure:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    # Code that may produce an exception\n\nexcept:\n    # Instructions to handle the exception"
        },
        {
          "type": "heading",
          "text": "Example 1: Handling Division by Zero"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = 10\n    result = number / 0\n\n    print(result)\n\nexcept ZeroDivisionError:\n    print(\"You cannot divide by zero.\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "You cannot divide by zero."
        },
        {
          "type": "text",
          "text": "Line-by-line explanation:"
        },
        {
          "type": "text",
          "text": "Line 1:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Starts a block containing instructions that might produce an exception."
        },
        {
          "type": "text",
          "text": "Line 2:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = 10"
        },
        {
          "type": "text",
          "text": "Creates a variable and stores 10."
        },
        {
          "type": "text",
          "text": "Line 3:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = number / 0"
        },
        {
          "type": "text",
          "text": "Attempts to divide 10 by zero."
        },
        {
          "type": "text",
          "text": "This causes a `ZeroDivisionError`."
        },
        {
          "type": "text",
          "text": "Line 4:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(result)"
        },
        {
          "type": "text",
          "text": "This instruction is skipped because the division raised an exception before the result could be assigned."
        },
        {
          "type": "text",
          "text": "Line 5:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ZeroDivisionError:"
        },
        {
          "type": "text",
          "text": "Tells Python to handle an exception of type `ZeroDivisionError`."
        },
        {
          "type": "text",
          "text": "Line 6:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"You cannot divide by zero.\")"
        },
        {
          "type": "text",
          "text": "Displays a helpful message instead of allowing the exception to remain unhandled."
        },
        {
          "type": "heading",
          "text": "4. Handling Different Types of Exceptions"
        },
        {
          "type": "text",
          "text": "A program can encounter different types of errors."
        },
        {
          "type": "text",
          "text": "Python allows you to use multiple `except` blocks to handle them separately."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = int(input(\"Enter a number: \"))\n\n    result = 100 / number\n\n    print(\"Result:\", result)\n\nexcept ValueError:\n    print(\"Please enter a valid whole number.\")\n\nexcept ZeroDivisionError:\n    print(\"You cannot divide by zero.\")"
        },
        {
          "type": "text",
          "text": "Let's understand the program."
        },
        {
          "type": "text",
          "text": "**Line 1**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Starts the exception-handling block."
        },
        {
          "type": "text",
          "text": "**Line 2**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = int(input(\"Enter a number: \"))"
        },
        {
          "type": "bullets",
          "items": [
            "`input()` collects information from the user.",
            "The input is initially received as a string.",
            "`int()` converts it into an integer.",
            "The converted value is stored in `number`."
          ]
        },
        {
          "type": "text",
          "text": "If the user enters something like `\"hello\"`, Python cannot convert it into an integer. This produces a `ValueError`."
        },
        {
          "type": "text",
          "text": "**Line 3**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = 100 / number"
        },
        {
          "type": "text",
          "text": "Divides 100 by the entered number."
        },
        {
          "type": "text",
          "text": "If the user enters zero, Python raises a `ZeroDivisionError`."
        },
        {
          "type": "text",
          "text": "**Line 4**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Result:\", result)"
        },
        {
          "type": "text",
          "text": "Displays the calculated result if no exception occurs."
        },
        {
          "type": "text",
          "text": "**Line 5**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ValueError:"
        },
        {
          "type": "text",
          "text": "Handles invalid integer input."
        },
        {
          "type": "text",
          "text": "**Line 6**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Please enter a valid whole number.\")"
        },
        {
          "type": "text",
          "text": "Displays an appropriate message."
        },
        {
          "type": "text",
          "text": "**Line 7**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ZeroDivisionError:"
        },
        {
          "type": "text",
          "text": "Handles attempts to divide by zero."
        },
        {
          "type": "text",
          "text": "**Line 8**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"You cannot divide by zero.\")"
        },
        {
          "type": "text",
          "text": "Displays the relevant error message."
        },
        {
          "type": "text",
          "text": "Possible results:"
        },
        {
          "type": "text",
          "text": "If the user enters `20`:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Result: 5.0"
        },
        {
          "type": "text",
          "text": "If the user enters `hello`:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Please enter a valid whole number."
        },
        {
          "type": "text",
          "text": "If the user enters `0`:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "You cannot divide by zero."
        },
        {
          "type": "heading",
          "text": "5. Understanding the else Block"
        },
        {
          "type": "text",
          "text": "The `else` block executes when the `try` block completes without raising an exception."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = int(input(\"Enter a number: \"))\n\nexcept ValueError:\n    print(\"Invalid input.\")\n\nelse:\n    print(\"You entered:\", number)"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`try` attempts to convert the user's input into an integer.",
            "`except` handles invalid input.",
            "`else` executes only when the conversion succeeds."
          ]
        },
        {
          "type": "text",
          "text": "If the user enters `25`, the output is:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "You entered: 25"
        },
        {
          "type": "text",
          "text": "If the user enters `hello`, the output is:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Invalid input."
        },
        {
          "type": "heading",
          "text": "6. Understanding the finally Block"
        },
        {
          "type": "text",
          "text": "The `finally` block executes whether an exception occurs or not, provided control reaches the corresponding `try` statement."
        },
        {
          "type": "text",
          "text": "It is commonly used for cleanup operations."
        },
        {
          "type": "text",
          "text": "For example, closing files or releasing resources."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = 10 / 2\n\n    print(\"Result:\", number)\n\nexcept ZeroDivisionError:\n    print(\"Division error.\")\n\nfinally:\n    print(\"Program operation completed.\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Result: 5.0\nProgram operation completed."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`try` performs the division.",
            "`except` would handle division by zero if it occurred.",
            "`finally` executes after the `try` or exception-handling path."
          ]
        },
        {
          "type": "text",
          "text": "The `finally` block is useful when a program must perform cleanup even if an operation fails."
        },
        {
          "type": "heading",
          "text": "7. Understanding the raise Keyword"
        },
        {
          "type": "text",
          "text": "The `raise` keyword allows a programmer to deliberately trigger an exception."
        },
        {
          "type": "text",
          "text": "This is useful when a program detects invalid conditions that should not be accepted."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = -5\n\nif age < 0:\n    raise ValueError(\"Age cannot be negative.\")"
        },
        {
          "type": "text",
          "text": "Python produces:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "ValueError: Age cannot be negative."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`age = -5` stores a negative value.",
            "`if age < 0` checks whether the age is negative.",
            "`raise ValueError(...)` deliberately raises an exception with a meaningful message."
          ]
        },
        {
          "type": "text",
          "text": "This is useful for enforcing rules in applications."
        },
        {
          "type": "heading",
          "text": "8. Common Exception Handling Mistakes"
        },
        {
          "type": "text",
          "text": "**Mistake 1: Using an empty except block**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    result = 10 / 0\n\nexcept:\n    pass"
        },
        {
          "type": "text",
          "text": "This suppresses the exception without explaining or recording the problem."
        },
        {
          "type": "text",
          "text": "It can make debugging difficult because errors disappear silently."
        },
        {
          "type": "text",
          "text": "It is usually better to catch specific exceptions and handle them appropriately."
        },
        {
          "type": "text",
          "text": "**Mistake 2: Catching the wrong exception**"
        },
        {
          "type": "text",
          "text": "If a program can raise `ValueError`, catching only `ZeroDivisionError` will not handle that invalid input."
        },
        {
          "type": "text",
          "text": "Choose exception types that match the operations being performed."
        },
        {
          "type": "text",
          "text": "**Mistake 3: Assuming exception handling fixes the underlying problem**"
        },
        {
          "type": "text",
          "text": "Exception handling manages failures. It does not automatically correct incorrect calculations, broken logic or insecure program design."
        },
        {
          "type": "heading",
          "text": "Part 2 Summary"
        },
        {
          "type": "text",
          "text": "You have learned how to read Python tracebacks and handle exceptions using `try`, `except`, `else`, `finally` and `raise`."
        },
        {
          "type": "text",
          "text": "Exception handling helps programs respond to expected failures in a controlled way."
        },
        {
          "type": "text",
          "text": "**Progress: Part 2 of 4**"
        }
      ]
    },
    {
      "id": "python-pythonerrorsdebugging-part-3",
      "title": "PART 3 OF 4: PRACTICAL DEBUGGING AND TROUBLESHOOTING",
      "description": "Part 3 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "1. What Is a Debugging Process?"
        },
        {
          "type": "text",
          "text": "Debugging is more than changing code until an error disappears."
        },
        {
          "type": "text",
          "text": "It is a systematic process of investigating a problem, identifying its cause and verifying the correction."
        },
        {
          "type": "text",
          "text": "A useful debugging process involves:"
        },
        {
          "type": "numbered",
          "items": [
            "Reproducing the problem.",
            "Reading the error message.",
            "Locating the problematic instruction.",
            "Understanding why the error occurred.",
            "Making a correction.",
            "Running the program again.",
            "Testing whether the correction works.",
            "Checking that the correction has not introduced another problem."
          ]
        },
        {
          "type": "text",
          "text": "Let's apply this process to practical Python programs."
        },
        {
          "type": "heading",
          "text": "2. Understanding the print() Debugging Technique"
        },
        {
          "type": "text",
          "text": "One of the simplest debugging techniques is using `print()` to inspect the values stored in variables."
        },
        {
          "type": "text",
          "text": "This helps you understand what is happening inside a program."
        },
        {
          "type": "text",
          "text": "Consider the following code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "price = 500\nquantity = 3\n\ntotal = price + quantity\n\nprint(\"Total:\", total)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Total: 503"
        },
        {
          "type": "text",
          "text": "Suppose you expected 1500."
        },
        {
          "type": "text",
          "text": "The program runs successfully, but the calculation is incorrect."
        },
        {
          "type": "text",
          "text": "You can inspect the values using `print()`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "price = 500\nquantity = 3\n\nprint(\"Price:\", price)\nprint(\"Quantity:\", quantity)\n\ntotal = price + quantity\n\nprint(\"Total:\", total)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Price: 500\nQuantity: 3\nTotal: 503"
        },
        {
          "type": "text",
          "text": "Now you can see that the problem is in the calculation."
        },
        {
          "type": "text",
          "text": "You used addition instead of multiplication."
        },
        {
          "type": "text",
          "text": "Corrected code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "price = 500\nquantity = 3\n\ntotal = price * quantity\n\nprint(\"Total:\", total)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Total: 1500"
        },
        {
          "type": "text",
          "text": "**Lesson:** Debugging with `print()` allows you to inspect intermediate values and understand how a program is behaving."
        },
        {
          "type": "heading",
          "text": "3. Using assert Statements for Debugging"
        },
        {
          "type": "text",
          "text": "Python provides the `assert` statement to test assumptions made by a programmer."
        },
        {
          "type": "text",
          "text": "If an assertion is false, Python raises an `AssertionError`."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = 20\n\nassert age >= 0\n\nprint(\"Age is valid.\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Age is valid."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`age = 20` creates a variable.",
            "`assert age >= 0` checks that the age is not negative.",
            "Because the condition is true, execution continues.",
            "`print()` displays the message."
          ]
        },
        {
          "type": "text",
          "text": "Now consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = -5\n\nassert age >= 0\n\nprint(\"Age is valid.\")"
        },
        {
          "type": "text",
          "text": "Python raises:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "AssertionError"
        },
        {
          "type": "text",
          "text": "The assertion fails because the age is negative."
        },
        {
          "type": "text",
          "text": "Assertions are useful for checking assumptions during development. They should not replace proper input validation or security checks."
        },
        {
          "type": "heading",
          "text": "4. Using a Debugger in Visual Studio Code"
        },
        {
          "type": "text",
          "text": "A debugger is a development tool that allows programmers to execute code step by step and inspect what happens inside a program."
        },
        {
          "type": "text",
          "text": "Instead of running the entire program at once, you can pause execution and examine variables."
        },
        {
          "type": "text",
          "text": "Important debugging features include:"
        },
        {
          "type": "text",
          "text": "**Breakpoints**"
        },
        {
          "type": "text",
          "text": "A breakpoint tells the debugger to pause execution at a particular line."
        },
        {
          "type": "text",
          "text": "**Step Over**"
        },
        {
          "type": "text",
          "text": "Executes the current line and moves to the next line without entering a called function."
        },
        {
          "type": "text",
          "text": "**Step Into**"
        },
        {
          "type": "text",
          "text": "Enters a function so that you can inspect its internal instructions."
        },
        {
          "type": "text",
          "text": "**Step Out**"
        },
        {
          "type": "text",
          "text": "Finishes executing the current function and returns to the calling section."
        },
        {
          "type": "text",
          "text": "**Variable Inspection**"
        },
        {
          "type": "text",
          "text": "Allows you to examine the values stored in variables while the program is paused."
        },
        {
          "type": "heading",
          "text": "Practical Example: Debugging With a Breakpoint"
        },
        {
          "type": "text",
          "text": "Create a file called `debug_example.py`."
        },
        {
          "type": "text",
          "text": "Enter:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "price = 200\nquantity = 4\n\ntotal = price * quantity\n\ntax = total * 0.16\n\nfinal_amount = total + tax\n\nprint(\"Final Amount:\", final_amount)"
        },
        {
          "type": "text",
          "text": "To debug this program in Visual Studio Code:"
        },
        {
          "type": "numbered",
          "items": [
            "Open `debug_example.py`.",
            "Click beside the line containing `total = price * quantity` to create a breakpoint.",
            "Open the Run and Debug section.",
            "Start debugging using the Python debugger.",
            "When execution pauses, inspect `price` and `quantity`.",
            "Use Step Over to execute the multiplication.",
            "Inspect the value of `total`.",
            "Continue stepping through the remaining instructions.",
            "Observe how `tax` and `final_amount` are calculated."
          ]
        },
        {
          "type": "text",
          "text": "Expected output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Final Amount: 928.0"
        },
        {
          "type": "text",
          "text": "Understanding the calculation:"
        },
        {
          "type": "bullets",
          "items": [
            "Price = 200.",
            "Quantity = 4.",
            "Total = 200 × 4 = 800.",
            "Tax = 800 × 0.16 = 128.",
            "Final amount = 800 + 128 = 928."
          ]
        },
        {
          "type": "text",
          "text": "A debugger helps you observe these values while the program executes."
        },
        {
          "type": "heading",
          "text": "5. Practical Debugging Project: Student Marks Calculator"
        },
        {
          "type": "text",
          "text": "Now build a small application that calculates a student's average marks and determines the result."
        },
        {
          "type": "text",
          "text": "Create a file named:"
        },
        {
          "type": "text",
          "text": "`student_debugging.py`"
        },
        {
          "type": "heading",
          "text": "Initial Program"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [70, 80, 90]\n\ntotal = 0\n\nfor mark in marks:\n    total = total + mark\n\naverage = total / 2\n\nprint(\"Total:\", total)\nprint(\"Average:\", average)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Total: 240\nAverage: 120.0"
        },
        {
          "type": "text",
          "text": "The program executes without a syntax or runtime error."
        },
        {
          "type": "text",
          "text": "However, the average is incorrect."
        },
        {
          "type": "heading",
          "text": "Debugging the Problem"
        },
        {
          "type": "text",
          "text": "The first step is to inspect the values."
        },
        {
          "type": "text",
          "text": "There are three marks:"
        },
        {
          "type": "bullets",
          "items": [
            "70",
            "80",
            "90"
          ]
        },
        {
          "type": "text",
          "text": "Their total is:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "70 + 80 + 90 = 240"
        },
        {
          "type": "text",
          "text": "The average should be:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "240 / 3 = 80"
        },
        {
          "type": "text",
          "text": "The mistake is in this instruction:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "average = total / 2"
        },
        {
          "type": "text",
          "text": "The programmer divided by 2 even though there are three marks."
        },
        {
          "type": "heading",
          "text": "Corrected Program"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [70, 80, 90]\n\ntotal = 0\n\nfor mark in marks:\n    total = total + mark\n\naverage = total / len(marks)\n\nprint(\"Total:\", total)\nprint(\"Average:\", average)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Total: 240\nAverage: 80.0"
        },
        {
          "type": "heading",
          "text": "Understanding the Correction"
        },
        {
          "type": "text",
          "text": "The important change is:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "average = total / len(marks)"
        },
        {
          "type": "text",
          "text": "The `len()` function counts the number of items in the list."
        },
        {
          "type": "text",
          "text": "Since there are three marks, `len(marks)` returns 3."
        },
        {
          "type": "text",
          "text": "This makes the calculation work even if the number of students changes."
        },
        {
          "type": "heading",
          "text": "6. Practical Debugging Project: User Registration"
        },
        {
          "type": "text",
          "text": "Suppose you are developing a basic registration system."
        },
        {
          "type": "text",
          "text": "The user must enter their name and age."
        },
        {
          "type": "text",
          "text": "The program should reject invalid ages."
        },
        {
          "type": "heading",
          "text": "Initial Program"
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = input(\"Enter your name: \")\n\nage = int(input(\"Enter your age: \"))\n\nif age >= 18:\n    print(name, \"is eligible to register.\")\nelse:\n    print(name, \"is not eligible to register.\")"
        },
        {
          "type": "text",
          "text": "This program works when the user enters a valid integer."
        },
        {
          "type": "text",
          "text": "However, what happens if the user enters:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "twenty"
        },
        {
          "type": "text",
          "text": "Python raises a `ValueError` because the text cannot be converted into an integer."
        },
        {
          "type": "heading",
          "text": "Improved Program"
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = input(\"Enter your name: \")\n\ntry:\n    age = int(input(\"Enter your age: \"))\n\n    if age < 0:\n        print(\"Age cannot be negative.\")\n\n    elif age >= 18:\n        print(name, \"is eligible to register.\")\n\n    else:\n        print(name, \"is not eligible to register.\")\n\nexcept ValueError:\n    print(\"Please enter your age using numbers.\")"
        },
        {
          "type": "heading",
          "text": "Line-by-Line Explanation"
        },
        {
          "type": "text",
          "text": "**Line 1**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = input(\"Enter your name: \")"
        },
        {
          "type": "text",
          "text": "Collects the user's name and stores it in the variable `name`."
        },
        {
          "type": "text",
          "text": "**Line 2**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Starts a block containing operations that might produce an exception."
        },
        {
          "type": "text",
          "text": "**Line 3**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = int(input(\"Enter your age: \"))"
        },
        {
          "type": "text",
          "text": "Collects the user's age and converts it into an integer."
        },
        {
          "type": "text",
          "text": "**Line 4**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if age < 0:"
        },
        {
          "type": "text",
          "text": "Checks whether the entered age is negative."
        },
        {
          "type": "text",
          "text": "**Line 5**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Age cannot be negative.\")"
        },
        {
          "type": "text",
          "text": "Displays a message if the age is invalid."
        },
        {
          "type": "text",
          "text": "**Line 6**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "elif age >= 18:"
        },
        {
          "type": "text",
          "text": "Checks whether the age is at least 18."
        },
        {
          "type": "text",
          "text": "**Line 7**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(name, \"is eligible to register.\")"
        },
        {
          "type": "text",
          "text": "Displays an eligibility message."
        },
        {
          "type": "text",
          "text": "**Line 8**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "else:"
        },
        {
          "type": "text",
          "text": "Handles ages below 18 that are not negative."
        },
        {
          "type": "text",
          "text": "**Line 9**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(name, \"is not eligible to register.\")"
        },
        {
          "type": "text",
          "text": "Displays the alternative result."
        },
        {
          "type": "text",
          "text": "**Line 10**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ValueError:"
        },
        {
          "type": "text",
          "text": "Handles cases where Python cannot convert the user's input into an integer."
        },
        {
          "type": "text",
          "text": "**Line 11**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Please enter your age using numbers.\")"
        },
        {
          "type": "text",
          "text": "Displays a helpful error message."
        },
        {
          "type": "text",
          "text": "This program demonstrates how exception handling makes an application more user-friendly."
        },
        {
          "type": "heading",
          "text": "7. Unit Testing: Checking Whether Functions Work Correctly"
        },
        {
          "type": "text",
          "text": "Testing is an important part of debugging."
        },
        {
          "type": "text",
          "text": "A programmer should not assume that a function works simply because it runs once."
        },
        {
          "type": "text",
          "text": "Unit testing involves testing individual functions or components to verify that they behave as expected."
        },
        {
          "type": "text",
          "text": "Python provides a built-in testing framework called `unittest`."
        },
        {
          "type": "heading",
          "text": "Example: Testing an Addition Function"
        },
        {
          "type": "text",
          "text": "Create two files:"
        },
        {
          "type": "bullets",
          "items": [
            "`calculator.py`",
            "`test_calculator.py`"
          ]
        },
        {
          "type": "text",
          "text": "Inside `calculator.py`, write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`def add(a, b):` defines a function with two parameters.",
            "`return a + b` adds the values and returns the result."
          ]
        },
        {
          "type": "text",
          "text": "Inside `test_calculator.py`, write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import unittest\n\nfrom calculator import add\n\n\nclass TestCalculator(unittest.TestCase):\n\n    def test_addition(self):\n        result = add(10, 5)\n\n        self.assertEqual(result, 15)\n\n\nif __name__ == \"__main__\":\n    unittest.main()"
        },
        {
          "type": "heading",
          "text": "Understanding the Testing Code"
        },
        {
          "type": "text",
          "text": "**Line 1**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import unittest"
        },
        {
          "type": "text",
          "text": "Imports Python's built-in unit testing framework."
        },
        {
          "type": "text",
          "text": "**Line 2**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from calculator import add"
        },
        {
          "type": "text",
          "text": "Imports the `add()` function from `calculator.py`."
        },
        {
          "type": "text",
          "text": "**Line 3**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class TestCalculator(unittest.TestCase):"
        },
        {
          "type": "text",
          "text": "Defines a test class that inherits from `unittest.TestCase`."
        },
        {
          "type": "text",
          "text": "This gives the class access to testing methods provided by the framework."
        },
        {
          "type": "text",
          "text": "**Line 4**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def test_addition(self):"
        },
        {
          "type": "text",
          "text": "Defines a test method."
        },
        {
          "type": "text",
          "text": "Python's `unittest` framework discovers test methods whose names begin with `test`."
        },
        {
          "type": "text",
          "text": "**Line 5**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = add(10, 5)"
        },
        {
          "type": "text",
          "text": "Calls the addition function using 10 and 5."
        },
        {
          "type": "text",
          "text": "The expected result is 15."
        },
        {
          "type": "text",
          "text": "**Line 6**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.assertEqual(result, 15)"
        },
        {
          "type": "text",
          "text": "Checks whether the actual result equals the expected result."
        },
        {
          "type": "text",
          "text": "If the values match, the test passes."
        },
        {
          "type": "text",
          "text": "If they differ, the test fails."
        },
        {
          "type": "text",
          "text": "**Final section**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if __name__ == \"__main__\":\n    unittest.main()"
        },
        {
          "type": "text",
          "text": "This runs the tests when the test file is executed directly."
        },
        {
          "type": "text",
          "text": "Run the test using:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python -m unittest test_calculator.py"
        },
        {
          "type": "text",
          "text": "Expected output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": ".\n----------------------------------------------------------------------\nRan 1 test\n\nOK"
        },
        {
          "type": "text",
          "text": "The dot indicates that the test passed."
        },
        {
          "type": "heading",
          "text": "Why Is Testing Important?"
        },
        {
          "type": "text",
          "text": "Testing helps developers:"
        },
        {
          "type": "bullets",
          "items": [
            "Identify errors before releasing software.",
            "Verify that functions produce correct results.",
            "Prevent existing functionality from breaking after changes.",
            "Improve software reliability.",
            "Confirm that program requirements are satisfied."
          ]
        },
        {
          "type": "heading",
          "text": "8. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete these exercises to test your debugging skills."
        },
        {
          "type": "text",
          "text": "**Exercise 1: Syntax Error**"
        },
        {
          "type": "text",
          "text": "Find and correct the error:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet()\n    print(\"Hello Python\")"
        },
        {
          "type": "text",
          "text": "Explain what was wrong."
        },
        {
          "type": "text",
          "text": "**Exercise 2: Runtime Error**"
        },
        {
          "type": "text",
          "text": "Identify the error and correct the program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number = int(\"Python\")\n\nprint(number)"
        },
        {
          "type": "text",
          "text": "**Exercise 3: Logical Error**"
        },
        {
          "type": "text",
          "text": "A programmer wants to calculate the area of a rectangle."
        },
        {
          "type": "code",
          "language": "python",
          "code": "length = 10\nwidth = 5\n\narea = length + width\n\nprint(area)"
        },
        {
          "type": "text",
          "text": "Find the logical error and correct it."
        },
        {
          "type": "text",
          "text": "**Exercise 4: Exception Handling**"
        },
        {
          "type": "text",
          "text": "Create a program that asks the user for two numbers and divides the first by the second."
        },
        {
          "type": "text",
          "text": "Handle:"
        },
        {
          "type": "bullets",
          "items": [
            "Invalid numeric input.",
            "Division by zero."
          ]
        },
        {
          "type": "text",
          "text": "**Exercise 5: Debugging Challenge**"
        },
        {
          "type": "text",
          "text": "The following program should calculate the average of four marks."
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [60, 70, 80, 90]\n\ntotal = 0\n\nfor mark in marks:\n    total = total + mark\n\naverage = total / 3\n\nprint(\"Average:\", average)"
        },
        {
          "type": "text",
          "text": "Identify the logical error, correct it and explain why your correction works."
        },
        {
          "type": "heading",
          "text": "Part 3 Summary"
        },
        {
          "type": "text",
          "text": "You have learned practical debugging techniques, including:"
        },
        {
          "type": "bullets",
          "items": [
            "Using `print()` to inspect values.",
            "Using `assert` to check assumptions.",
            "Using breakpoints in Visual Studio Code.",
            "Reading and correcting logical errors.",
            "Handling invalid user input.",
            "Testing functions using Python's `unittest` framework."
          ]
        },
        {
          "type": "text",
          "text": "**Progress: Part 3 of 4**"
        }
      ]
    },
    {
      "id": "python-pythonerrorsdebugging-part-4",
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
            "What programming errors are.",
            "The difference between syntax, runtime and logical errors.",
            "How to read Python tracebacks.",
            "Common Python exceptions.",
            "How to use `try` and `except`.",
            "How `else`, `finally` and `raise` work.",
            "How to debug using `print()` and breakpoints.",
            "How assertions work.",
            "The importance of unit testing."
          ]
        },
        {
          "type": "heading",
          "text": "Kai Assessment Instructions"
        },
        {
          "type": "text",
          "text": "Answer all eight questions below."
        },
        {
          "type": "heading",
          "text": "Question 1: What is debugging?"
        },
        {
          "type": "text",
          "text": "A. Writing a program without variables."
        },
        {
          "type": "text",
          "text": "B. Finding, understanding and fixing errors in a program."
        },
        {
          "type": "text",
          "text": "C. Installing Python on a computer."
        },
        {
          "type": "text",
          "text": "D. Deleting unwanted files."
        },
        {
          "type": "heading",
          "text": "Question 2: Which type of error occurs when Python code does not follow the language's grammatical rules?"
        },
        {
          "type": "text",
          "text": "A. Logical error."
        },
        {
          "type": "text",
          "text": "B. Runtime error."
        },
        {
          "type": "text",
          "text": "C. Syntax error."
        },
        {
          "type": "text",
          "text": "D. Network error."
        },
        {
          "type": "heading",
          "text": "Question 3: What type of error occurs when a program executes successfully but produces an incorrect result?"
        },
        {
          "type": "text",
          "text": "A. Syntax error."
        },
        {
          "type": "text",
          "text": "B. Logical error."
        },
        {
          "type": "text",
          "text": "C. Indentation error."
        },
        {
          "type": "text",
          "text": "D. Import error."
        },
        {
          "type": "heading",
          "text": "Question 4: What happens when a Python program attempts to divide a number by zero?"
        },
        {
          "type": "text",
          "text": "A. `NameError`"
        },
        {
          "type": "text",
          "text": "B. `ValueError`"
        },
        {
          "type": "text",
          "text": "C. `ZeroDivisionError`"
        },
        {
          "type": "text",
          "text": "D. `IndexError`"
        },
        {
          "type": "heading",
          "text": "Question 5: What is the main purpose of the `try` block?"
        },
        {
          "type": "text",
          "text": "A. To define a function."
        },
        {
          "type": "text",
          "text": "B. To contain code that might produce an exception."
        },
        {
          "type": "text",
          "text": "C. To delete variables."
        },
        {
          "type": "text",
          "text": "D. To stop a program permanently."
        },
        {
          "type": "heading",
          "text": "Question 6: Which keyword is used to handle an exception?"
        },
        {
          "type": "text",
          "text": "A. `except`"
        },
        {
          "type": "text",
          "text": "B. `repeat`"
        },
        {
          "type": "text",
          "text": "C. `debug`"
        },
        {
          "type": "text",
          "text": "D. `correct`"
        },
        {
          "type": "heading",
          "text": "Question 7: What is the purpose of a breakpoint in debugging?"
        },
        {
          "type": "text",
          "text": "A. To permanently delete a line of code."
        },
        {
          "type": "text",
          "text": "B. To pause program execution at a selected location for inspection."
        },
        {
          "type": "text",
          "text": "C. To automatically correct all errors."
        },
        {
          "type": "text",
          "text": "D. To stop Python from executing functions."
        },
        {
          "type": "heading",
          "text": "Question 8: What is the purpose of unit testing?"
        },
        {
          "type": "text",
          "text": "A. To test individual components of a program and verify their expected behaviour."
        },
        {
          "type": "text",
          "text": "B. To install additional Python packages."
        },
        {
          "type": "text",
          "text": "C. To create user accounts."
        },
        {
          "type": "text",
          "text": "D. To remove all variables from a program."
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
          "text": "Kai will evaluate your understanding, identify incorrect answers, explain why they are incorrect and provide guidance on areas that need improvement."
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
