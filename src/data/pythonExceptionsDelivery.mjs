const delivery = {
  "type": "authored",
  "version": 1,
  "intro": "PYTHON: EXCEPTION HANDLING",
  "sections": [
    {
      "id": "python-exception-handling-part-1",
      "title": "PART 1 OF 4: UNDERSTANDING EXCEPTION HANDLING",
      "description": "Part 1 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 1 OF 4: UNDERSTANDING EXCEPTION HANDLING"
        },
        {
          "type": "heading",
          "text": "1. What Is Exception Handling?"
        },
        {
          "type": "text",
          "text": "Exception handling is a Python programming technique used to detect and manage errors that occur while a program is running."
        },
        {
          "type": "text",
          "text": "An exception is an event that interrupts the normal execution of a program because something unexpected has happened."
        },
        {
          "type": "text",
          "text": "For example, imagine creating a calculator that asks users to divide two numbers."
        },
        {
          "type": "text",
          "text": "If someone enters:"
        },
        {
          "type": "bullets",
          "items": [
            "First number: 20",
            "Second number: 0"
          ]
        },
        {
          "type": "text",
          "text": "Python will produce a `ZeroDivisionError` because division by zero is not allowed."
        },
        {
          "type": "text",
          "text": "Without exception handling, the program may terminate unexpectedly."
        },
        {
          "type": "text",
          "text": "Exception handling allows us to detect this problem and display a meaningful message instead of allowing the program to crash."
        },
        {
          "type": "heading",
          "text": "2. Why Is Exception Handling Important?"
        },
        {
          "type": "text",
          "text": "Exception handling is important because real-world applications interact with unpredictable situations."
        },
        {
          "type": "text",
          "text": "Consider these examples:"
        },
        {
          "type": "table",
          "columns": [
            "Application",
            "Possible problem",
            "How exception handling helps"
          ],
          "rows": [
            [
              "Banking system",
              "Invalid withdrawal amount",
              "Displays an appropriate error"
            ],
            [
              "Login system",
              "Missing or invalid input",
              "Requests valid information"
            ],
            [
              "File management system",
              "File does not exist",
              "Handles the missing file"
            ],
            [
              "E-commerce system",
              "Invalid product quantity",
              "Prevents unexpected termination"
            ],
            [
              "Student management system",
              "Invalid marks entered",
              "Requests correct input"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Without proper exception handling, one unexpected error could interrupt an entire application."
        },
        {
          "type": "heading",
          "text": "3. Understanding Exceptions Through an Example"
        },
        {
          "type": "text",
          "text": "Consider this program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number1 = 20\nnumber2 = 0\n\nresult = number1 / number2\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "**Explanation line by line:**"
        },
        {
          "type": "text",
          "text": "**Line 1:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number1 = 20"
        },
        {
          "type": "text",
          "text": "Creates a variable called `number1` and stores the value `20`."
        },
        {
          "type": "text",
          "text": "**Line 2:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number2 = 0"
        },
        {
          "type": "text",
          "text": "Creates another variable and stores `0`."
        },
        {
          "type": "text",
          "text": "**Line 3:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = number1 / number2"
        },
        {
          "type": "text",
          "text": "Attempts to divide 20 by 0."
        },
        {
          "type": "text",
          "text": "This operation is invalid in Python, so an exception occurs."
        },
        {
          "type": "text",
          "text": "**Line 4:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(result)"
        },
        {
          "type": "text",
          "text": "This line is never executed because the exception interrupts the program before Python reaches it."
        },
        {
          "type": "text",
          "text": "**Error produced:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "ZeroDivisionError: division by zero"
        },
        {
          "type": "heading",
          "text": "4. The Main Exception Handling Keywords"
        },
        {
          "type": "text",
          "text": "Python provides several keywords for handling exceptions."
        },
        {
          "type": "table",
          "columns": [
            "Keyword",
            "Purpose"
          ],
          "rows": [
            [
              "`try`",
              "Contains code that might produce an exception"
            ],
            [
              "`except`",
              "Handles an exception when it occurs"
            ],
            [
              "`else`",
              "Executes when no exception occurs in the `try` block"
            ],
            [
              "`finally`",
              "Executes whether an exception occurs or not"
            ],
            [
              "`raise`",
              "Manually generates an exception"
            ]
          ]
        },
        {
          "type": "text",
          "text": "We will study each keyword in detail."
        },
        {
          "type": "heading",
          "text": "5. The Basic Structure of Exception Handling"
        },
        {
          "type": "text",
          "text": "The basic syntax is:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    # Code that might produce an exception\n\nexcept:\n    # Code that handles the exception"
        },
        {
          "type": "text",
          "text": "The `try` block contains statements that might fail."
        },
        {
          "type": "text",
          "text": "The `except` block contains instructions that Python should execute if an exception occurs."
        },
        {
          "type": "text",
          "text": "Let's correct our division example."
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number1 = 20\n    number2 = 0\n\n    result = number1 / number2\n\n    print(result)\n\nexcept:\n    print(\"Something went wrong!\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "numbered",
          "items": [
            "Python enters the `try` block.",
            "It creates the two variables.",
            "It attempts to divide 20 by 0.",
            "A `ZeroDivisionError` occurs.",
            "Python stops executing the remaining statements inside the `try` block.",
            "Python moves to the `except` block.",
            "The error message is displayed."
          ]
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Something went wrong!"
        },
        {
          "type": "text",
          "text": "Notice that the application does not terminate with an unhandled exception."
        },
        {
          "type": "text",
          "text": "However, using a general `except` without specifying the error type is not always recommended. It can hide unexpected problems."
        },
        {
          "type": "text",
          "text": "We will learn how to handle specific exceptions in Part 2."
        },
        {
          "type": "heading",
          "text": "6. Important Rules About try and except"
        },
        {
          "type": "bullets",
          "items": [
            "A `try` block must be followed by at least one `except` block or a `finally` block.",
            "The `except` block executes only when a matching exception occurs.",
            "If no exception occurs, Python skips the `except` block.",
            "Once an exception occurs inside a `try` block, the remaining statements in that block are skipped."
          ]
        },
        {
          "type": "heading",
          "text": "Real-World Application"
        },
        {
          "type": "text",
          "text": "Imagine a mobile banking application."
        },
        {
          "type": "text",
          "text": "A user wants to withdraw KSh 5,000 but accidentally enters letters instead of numbers."
        },
        {
          "type": "text",
          "text": "Without exception handling, the application may produce an error and stop processing."
        },
        {
          "type": "text",
          "text": "With exception handling, it can display:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Invalid amount. Please enter numbers only."
        },
        {
          "type": "text",
          "text": "This makes the application easier and safer to use."
        },
        {
          "type": "text",
          "text": "**Part 1 Progress: 1 of 4**"
        },
        {
          "type": "text",
          "text": "---"
        }
      ]
    },
    {
      "id": "python-exception-handling-part-2",
      "title": "PART 2 OF 4: TYPES OF EXCEPTIONS AND ADVANCED HANDLING",
      "description": "Part 2 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 2 OF 4: TYPES OF EXCEPTIONS AND ADVANCED HANDLING"
        },
        {
          "type": "heading",
          "text": "1. Understanding Specific Exceptions"
        },
        {
          "type": "text",
          "text": "Python has different exception types for different problems."
        },
        {
          "type": "text",
          "text": "Instead of using one general `except` block, we can identify the exact exception and handle it appropriately."
        },
        {
          "type": "text",
          "text": "Here are common Python exceptions:"
        },
        {
          "type": "table",
          "columns": [
            "Exception",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "`ZeroDivisionError`",
              "Dividing a number by zero",
              "`10 / 0`"
            ],
            [
              "`ValueError`",
              "A value has an inappropriate format",
              "`int(\"hello\")`"
            ],
            [
              "`TypeError`",
              "An operation uses an incompatible data type",
              "`\"5\" + 5`"
            ],
            [
              "`NameError`",
              "Using a variable that has not been defined",
              "`print(age)` when `age` does not exist"
            ],
            [
              "`IndexError`",
              "Accessing a list position that does not exist",
              "`numbers[10]`"
            ],
            [
              "`KeyError`",
              "Accessing a dictionary key that does not exist",
              "`student[\"age\"]` when the key is missing"
            ],
            [
              "`FileNotFoundError`",
              "Trying to open a file that does not exist",
              "Opening a missing file"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Let's examine some of them."
        },
        {
          "type": "heading",
          "text": "2. Handling ZeroDivisionError"
        },
        {
          "type": "text",
          "text": "Consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    result = 50 / 0\n\nexcept ZeroDivisionError:\n    print(\"You cannot divide by zero.\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`try:` tells Python that the following code may produce an exception.",
            "`result = 50 / 0` attempts an invalid division.",
            "`except ZeroDivisionError:` catches that particular exception.",
            "`print()` displays a helpful message."
          ]
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "You cannot divide by zero."
        },
        {
          "type": "heading",
          "text": "3. Handling ValueError"
        },
        {
          "type": "text",
          "text": "A `ValueError` occurs when a function receives a value of the correct general type but an inappropriate value."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = int(\"hello\")"
        },
        {
          "type": "text",
          "text": "The `int()` function converts a value into an integer."
        },
        {
          "type": "text",
          "text": "However, `\"hello\"` cannot be converted into an integer."
        },
        {
          "type": "text",
          "text": "Let's handle it:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    age = int(\"hello\")\n    print(age)\n\nexcept ValueError:\n    print(\"Please enter a valid number.\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "Python attempts to convert `\"hello\"` into an integer.",
            "The conversion fails.",
            "A `ValueError` occurs.",
            "The `except` block catches it.",
            "A meaningful message is displayed."
          ]
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Please enter a valid number."
        },
        {
          "type": "heading",
          "text": "4. Handling Multiple Exceptions"
        },
        {
          "type": "text",
          "text": "Sometimes a program can produce different types of exceptions."
        },
        {
          "type": "text",
          "text": "For example, a calculator can encounter:"
        },
        {
          "type": "bullets",
          "items": [
            "`ValueError` when the user enters letters instead of numbers.",
            "`ZeroDivisionError` when the user divides by zero."
          ]
        },
        {
          "type": "text",
          "text": "Python allows us to use multiple `except` blocks."
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number1 = int(input(\"Enter first number: \"))\n    number2 = int(input(\"Enter second number: \"))\n\n    result = number1 / number2\n\n    print(\"Result:\", result)\n\nexcept ValueError:\n    print(\"Please enter numbers only.\")\n\nexcept ZeroDivisionError:\n    print(\"You cannot divide by zero.\")"
        },
        {
          "type": "text",
          "text": "**Explanation line by line:**"
        },
        {
          "type": "text",
          "text": "**Line 1:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Begins the block containing operations that might fail."
        },
        {
          "type": "text",
          "text": "**Line 2:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number1 = int(input(\"Enter first number: \"))"
        },
        {
          "type": "text",
          "text": "Requests the first number from the user."
        },
        {
          "type": "text",
          "text": "`input()` receives text, while `int()` attempts to convert that text into an integer."
        },
        {
          "type": "text",
          "text": "**Line 3:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number2 = int(input(\"Enter second number: \"))"
        },
        {
          "type": "text",
          "text": "Requests the second number and converts it into an integer."
        },
        {
          "type": "text",
          "text": "**Line 4:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = number1 / number2"
        },
        {
          "type": "text",
          "text": "Divides the first number by the second."
        },
        {
          "type": "text",
          "text": "**Line 5:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Result:\", result)"
        },
        {
          "type": "text",
          "text": "Displays the calculation result if the operation succeeds."
        },
        {
          "type": "text",
          "text": "**Line 6:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ValueError:"
        },
        {
          "type": "text",
          "text": "Handles invalid numeric input."
        },
        {
          "type": "text",
          "text": "**Line 7:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Please enter numbers only.\")"
        },
        {
          "type": "text",
          "text": "Displays a message when the user enters something that cannot be converted into an integer."
        },
        {
          "type": "text",
          "text": "**Line 8:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ZeroDivisionError:"
        },
        {
          "type": "text",
          "text": "Handles division by zero."
        },
        {
          "type": "text",
          "text": "**Line 9:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"You cannot divide by zero.\")"
        },
        {
          "type": "text",
          "text": "Displays a message explaining the problem."
        },
        {
          "type": "text",
          "text": "**Example execution 1:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter first number: 20\nEnter second number: 5\nResult: 4.0"
        },
        {
          "type": "text",
          "text": "**Example execution 2:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter first number: twenty\nPlease enter numbers only."
        },
        {
          "type": "text",
          "text": "**Example execution 3:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter first number: 20\nEnter second number: 0\nYou cannot divide by zero."
        },
        {
          "type": "heading",
          "text": "5. Understanding the else Block"
        },
        {
          "type": "text",
          "text": "The `else` block executes only when the `try` block completes without an exception."
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
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "Python requests a number.",
            "If conversion fails, the `except` block executes.",
            "If conversion succeeds, the `else` block executes.",
            "The program displays the entered number."
          ]
        },
        {
          "type": "text",
          "text": "**Example output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter a number: 25\nYou entered: 25"
        },
        {
          "type": "text",
          "text": "The `else` block helps separate successful operations from error-handling instructions."
        },
        {
          "type": "heading",
          "text": "6. Understanding the finally Block"
        },
        {
          "type": "text",
          "text": "The `finally` block executes whether an exception occurs or not."
        },
        {
          "type": "text",
          "text": "It is commonly used for cleanup operations, such as closing files or releasing resources."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = int(input(\"Enter a number: \"))\n\nexcept ValueError:\n    print(\"Invalid number.\")\n\nfinally:\n    print(\"Program execution completed.\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "The `try` block attempts to convert the input into an integer.",
            "If the conversion fails, the `except` block handles the problem.",
            "The `finally` block executes regardless of whether the conversion succeeds or fails."
          ]
        },
        {
          "type": "text",
          "text": "**Example output when the user enters text:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter a number: hello\nInvalid number.\nProgram execution completed."
        },
        {
          "type": "text",
          "text": "**Example output when the user enters a number:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter a number: 15\nProgram execution completed."
        },
        {
          "type": "heading",
          "text": "7. Combining try, except, else and finally"
        },
        {
          "type": "text",
          "text": "All four structures can be used together."
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number1 = int(input(\"Enter first number: \"))\n    number2 = int(input(\"Enter second number: \"))\n\n    result = number1 / number2\n\nexcept ValueError:\n    print(\"Invalid input. Enter numbers only.\")\n\nexcept ZeroDivisionError:\n    print(\"Division by zero is not allowed.\")\n\nelse:\n    print(\"The result is:\", result)\n\nfinally:\n    print(\"Thank you for using the calculator.\")"
        },
        {
          "type": "text",
          "text": "**How the program works:**"
        },
        {
          "type": "numbered",
          "items": [
            "The `try` block collects two numbers and performs division.",
            "The first `except` handles invalid numeric input.",
            "The second `except` handles division by zero.",
            "The `else` block displays the result if no exception occurs.",
            "The `finally` block displays its message regardless of the outcome."
          ]
        },
        {
          "type": "heading",
          "text": "8. Understanding the raise Keyword"
        },
        {
          "type": "text",
          "text": "The `raise` keyword allows a programmer to deliberately generate an exception when a particular condition is not met."
        },
        {
          "type": "text",
          "text": "For example, imagine a student registration system where a student's age must be at least 16."
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = 14\n\nif age < 16:\n    raise ValueError(\"Student must be at least 16 years old.\")\n\nprint(\"Registration successful.\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "text",
          "text": "**Line 1:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = 14"
        },
        {
          "type": "text",
          "text": "Stores the student's age."
        },
        {
          "type": "text",
          "text": "**Line 2:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if age < 16:"
        },
        {
          "type": "text",
          "text": "Checks whether the age is below the minimum requirement."
        },
        {
          "type": "text",
          "text": "**Line 3:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "raise ValueError(\"Student must be at least 16 years old.\")"
        },
        {
          "type": "text",
          "text": "Manually raises a `ValueError` because the condition is not satisfied."
        },
        {
          "type": "text",
          "text": "**Line 4:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Registration successful.\")"
        },
        {
          "type": "text",
          "text": "This line will not execute because the exception is raised first."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "ValueError: Student must be at least 16 years old."
        },
        {
          "type": "text",
          "text": "You can also combine `raise` with `try` and `except`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    age = 14\n\n    if age < 16:\n        raise ValueError(\"Age requirement not met.\")\n\nexcept ValueError as error:\n    print(\"Registration failed:\", error)"
        },
        {
          "type": "text",
          "text": "Here, `as error` stores the exception object in a variable called `error`, allowing us to display its message."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Registration failed: Age requirement not met."
        },
        {
          "type": "heading",
          "text": "9. What Is a Custom Exception?"
        },
        {
          "type": "text",
          "text": "Python allows developers to create their own exception classes."
        },
        {
          "type": "text",
          "text": "This is useful when building applications with rules that require specific error types."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class InsufficientBalanceError(Exception):\n    pass"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`class` defines a new class.",
            "`InsufficientBalanceError` is the name of our custom exception.",
            "`(Exception)` means our class inherits from Python's built-in exception class.",
            "`pass` means the class currently has no additional implementation."
          ]
        },
        {
          "type": "text",
          "text": "We can now use this custom exception:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "balance = 1000\nwithdrawal = 1500\n\ntry:\n    if withdrawal > balance:\n        raise InsufficientBalanceError(\"Insufficient account balance.\")\n\nexcept InsufficientBalanceError as error:\n    print(error)"
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Insufficient account balance."
        },
        {
          "type": "text",
          "text": "Custom exceptions make large applications easier to understand because they allow developers to identify application-specific problems."
        },
        {
          "type": "heading",
          "text": "10. Important Exception Handling Practices"
        },
        {
          "type": "numbered",
          "items": [
            "Catch specific exceptions whenever possible.",
            "Avoid empty `except` blocks.",
            "Do not use exceptions to replace ordinary condition checks.",
            "Display messages that help users understand what went wrong.",
            "Avoid exposing passwords, private information, or sensitive system details in error messages.",
            "Use `finally` or appropriate resource-management tools to clean up resources."
          ]
        },
        {
          "type": "text",
          "text": "**Part 2 Progress: 2 of 4**"
        },
        {
          "type": "text",
          "text": "---"
        }
      ]
    },
    {
      "id": "python-exception-handling-part-3",
      "title": "PART 3 OF 4: PRACTICAL PYTHON EXCEPTION HANDLING",
      "description": "Part 3 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 3 OF 4: PRACTICAL PYTHON EXCEPTION HANDLING"
        },
        {
          "type": "text",
          "text": "In this part, we will build practical programs that demonstrate how exception handling works in real applications."
        },
        {
          "type": "heading",
          "text": "1. Prepare Your Development Environment"
        },
        {
          "type": "text",
          "text": "Create a folder named:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_exception_handling"
        },
        {
          "type": "text",
          "text": "Inside it, create a Python file:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "main.py"
        },
        {
          "type": "text",
          "text": "You can use Visual Studio Code or another Python editor."
        },
        {
          "type": "text",
          "text": "Open the terminal inside the project folder."
        },
        {
          "type": "text",
          "text": "To run your program, use:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python main.py"
        },
        {
          "type": "text",
          "text": "On some Windows installations, you may need:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "py main.py"
        },
        {
          "type": "heading",
          "text": "2. Practical Example: Safe Calculator"
        },
        {
          "type": "text",
          "text": "We will build a calculator that accepts two numbers and performs division without crashing when the user enters invalid input."
        },
        {
          "type": "text",
          "text": "**Code:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    first_number = float(input(\"Enter first number: \"))\n    second_number = float(input(\"Enter second number: \"))\n\n    result = first_number / second_number\n\nexcept ValueError:\n    print(\"Error: Please enter valid numbers.\")\n\nexcept ZeroDivisionError:\n    print(\"Error: You cannot divide by zero.\")\n\nelse:\n    print(\"Calculation successful!\")\n    print(\"Result:\", result)\n\nfinally:\n    print(\"Calculator operation finished.\")"
        },
        {
          "type": "text",
          "text": "**Detailed explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Begins the section containing operations that might produce exceptions."
        },
        {
          "type": "code",
          "language": "python",
          "code": "first_number = float(input(\"Enter first number: \"))"
        },
        {
          "type": "text",
          "text": "Requests the first number."
        },
        {
          "type": "text",
          "text": "We use `float()` rather than `int()` because the calculator should accept decimal numbers such as `10.5`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "second_number = float(input(\"Enter second number: \"))"
        },
        {
          "type": "text",
          "text": "Requests the second number and converts it into a decimal-compatible numeric value."
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = first_number / second_number"
        },
        {
          "type": "text",
          "text": "Performs division and stores the answer in `result`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ValueError:"
        },
        {
          "type": "text",
          "text": "Catches an exception if the user enters something that cannot be converted into a number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Error: Please enter valid numbers.\")"
        },
        {
          "type": "text",
          "text": "Displays a helpful error message."
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ZeroDivisionError:"
        },
        {
          "type": "text",
          "text": "Catches the exception that occurs when the second number is zero."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Error: You cannot divide by zero.\")"
        },
        {
          "type": "text",
          "text": "Explains why the calculation could not be completed."
        },
        {
          "type": "code",
          "language": "python",
          "code": "else:"
        },
        {
          "type": "text",
          "text": "Runs only when no exception occurred."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Calculation successful!\")\nprint(\"Result:\", result)"
        },
        {
          "type": "text",
          "text": "Displays the successful calculation and its result."
        },
        {
          "type": "code",
          "language": "python",
          "code": "finally:"
        },
        {
          "type": "text",
          "text": "Introduces instructions that must run regardless of the outcome."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Calculator operation finished.\")"
        },
        {
          "type": "text",
          "text": "Displays a completion message."
        },
        {
          "type": "text",
          "text": "**Example successful output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter first number: 50\nEnter second number: 5\nCalculation successful!\nResult: 10.0\nCalculator operation finished."
        },
        {
          "type": "heading",
          "text": "3. Practical Example: Student Marks Management"
        },
        {
          "type": "text",
          "text": "Imagine creating a student management system."
        },
        {
          "type": "text",
          "text": "The application should accept marks between 0 and 100."
        },
        {
          "type": "text",
          "text": "However, users might:"
        },
        {
          "type": "bullets",
          "items": [
            "Enter letters instead of numbers.",
            "Enter negative marks.",
            "Enter marks above 100."
          ]
        },
        {
          "type": "text",
          "text": "We can use exception handling and conditional validation to manage these situations."
        },
        {
          "type": "text",
          "text": "**Code:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    marks = float(input(\"Enter student marks: \"))\n\n    if marks < 0 or marks > 100:\n        raise ValueError(\"Marks must be between 0 and 100.\")\n\nexcept ValueError as error:\n    print(\"Invalid marks:\", error)\n\nelse:\n    print(\"Marks recorded successfully.\")\n\n    if marks >= 70:\n        print(\"Grade: A\")\n\n    elif marks >= 60:\n        print(\"Grade: B\")\n\n    elif marks >= 50:\n        print(\"Grade: C\")\n\n    elif marks >= 40:\n        print(\"Grade: D\")\n\n    else:\n        print(\"Grade: E\")"
        },
        {
          "type": "text",
          "text": "**Explanation of the important sections:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = float(input(\"Enter student marks: \"))"
        },
        {
          "type": "text",
          "text": "Accepts the student's marks and converts them into a number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if marks < 0 or marks > 100:"
        },
        {
          "type": "text",
          "text": "Checks whether the marks are outside the permitted range."
        },
        {
          "type": "text",
          "text": "The `or` operator means either condition can make the entire expression true."
        },
        {
          "type": "code",
          "language": "python",
          "code": "raise ValueError(\"Marks must be between 0 and 100.\")"
        },
        {
          "type": "text",
          "text": "Generates an exception when the marks are invalid."
        },
        {
          "type": "code",
          "language": "python",
          "code": "except ValueError as error:"
        },
        {
          "type": "text",
          "text": "Catches invalid numeric input and the custom validation error raised by our program."
        },
        {
          "type": "code",
          "language": "python",
          "code": "else:"
        },
        {
          "type": "text",
          "text": "Allows the grading process to continue only if the marks are valid."
        },
        {
          "type": "text",
          "text": "The remaining `if`, `elif` and `else` statements determine the student's grade."
        },
        {
          "type": "text",
          "text": "**Example output 1:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter student marks: 85\nMarks recorded successfully.\nGrade: A"
        },
        {
          "type": "text",
          "text": "**Example output 2:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter student marks: 120\nInvalid marks: Marks must be between 0 and 100."
        },
        {
          "type": "text",
          "text": "**Example output 3:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter student marks: hello\nInvalid marks: could not convert string to float: 'hello'"
        },
        {
          "type": "text",
          "text": "Notice that the application handles both conversion errors and invalid marks."
        },
        {
          "type": "heading",
          "text": "4. Practical Example: Handling Missing Files"
        },
        {
          "type": "text",
          "text": "Suppose you are developing an application that reads student records from a file."
        },
        {
          "type": "text",
          "text": "What happens if the file does not exist?"
        },
        {
          "type": "text",
          "text": "Python produces a `FileNotFoundError`."
        },
        {
          "type": "text",
          "text": "We can handle it:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    file = open(\"students.txt\", \"r\")\n\n    content = file.read()\n\n    print(content)\n\n    file.close()\n\nexcept FileNotFoundError:\n    print(\"The student records file was not found.\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")"
        },
        {
          "type": "text",
          "text": "Attempts to open a file named `students.txt`."
        },
        {
          "type": "text",
          "text": "The `\"r\"` means read mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "content = file.read()"
        },
        {
          "type": "text",
          "text": "Reads the contents of the file."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(content)"
        },
        {
          "type": "text",
          "text": "Displays the information."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.close()"
        },
        {
          "type": "text",
          "text": "Closes the file after reading."
        },
        {
          "type": "code",
          "language": "python",
          "code": "except FileNotFoundError:"
        },
        {
          "type": "text",
          "text": "Handles the situation where the requested file does not exist."
        },
        {
          "type": "text",
          "text": "**Expected output if the file is missing:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "The student records file was not found."
        },
        {
          "type": "text",
          "text": "**A better approach: Using with**"
        },
        {
          "type": "text",
          "text": "Python provides the `with` statement for managing files."
        },
        {
          "type": "text",
          "text": "It automatically closes the file when the block finishes, even if an exception occurs."
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    with open(\"students.txt\", \"r\") as file:\n        content = file.read()\n        print(content)\n\nexcept FileNotFoundError:\n    print(\"The student records file was not found.\")"
        },
        {
          "type": "text",
          "text": "Here:"
        },
        {
          "type": "bullets",
          "items": [
            "`with` manages the file resource.",
            "`open()` opens the file.",
            "`as file` assigns the opened file to a variable.",
            "`file.read()` retrieves its contents.",
            "Python automatically closes the file when execution leaves the `with` block."
          ]
        },
        {
          "type": "text",
          "text": "This is generally preferred over manually calling `close()`."
        },
        {
          "type": "heading",
          "text": "5. Practical Example: Banking Withdrawal System"
        },
        {
          "type": "text",
          "text": "Let's create a simple banking program that prevents invalid withdrawals."
        },
        {
          "type": "text",
          "text": "**Code:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class InsufficientBalanceError(Exception):\n    pass\n\n\nbalance = 5000\n\ntry:\n    amount = float(input(\"Enter withdrawal amount: \"))\n\n    if amount <= 0:\n        raise ValueError(\"Withdrawal amount must be greater than zero.\")\n\n    if amount > balance:\n        raise InsufficientBalanceError(\"Insufficient balance.\")\n\n    balance -= amount\n\nexcept ValueError as error:\n    print(\"Invalid withdrawal:\", error)\n\nexcept InsufficientBalanceError as error:\n    print(\"Transaction failed:\", error)\n\nelse:\n    print(\"Withdrawal successful.\")\n    print(\"Remaining balance:\", balance)\n\nfinally:\n    print(\"Thank you for banking with us.\")"
        },
        {
          "type": "text",
          "text": "**Understanding the program:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class InsufficientBalanceError(Exception):\n    pass"
        },
        {
          "type": "text",
          "text": "Creates a custom exception for situations where a customer attempts to withdraw more money than their available balance."
        },
        {
          "type": "code",
          "language": "python",
          "code": "balance = 5000"
        },
        {
          "type": "text",
          "text": "Stores the customer's starting balance."
        },
        {
          "type": "code",
          "language": "python",
          "code": "amount = float(input(\"Enter withdrawal amount: \"))"
        },
        {
          "type": "text",
          "text": "Requests the withdrawal amount."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if amount <= 0:"
        },
        {
          "type": "text",
          "text": "Checks whether the requested withdrawal is zero or negative."
        },
        {
          "type": "code",
          "language": "python",
          "code": "raise ValueError(\"Withdrawal amount must be greater than zero.\")"
        },
        {
          "type": "text",
          "text": "Rejects invalid withdrawal amounts."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if amount > balance:"
        },
        {
          "type": "text",
          "text": "Checks whether the customer is requesting more money than is available."
        },
        {
          "type": "code",
          "language": "python",
          "code": "raise InsufficientBalanceError(\"Insufficient balance.\")"
        },
        {
          "type": "text",
          "text": "Raises our custom banking exception."
        },
        {
          "type": "code",
          "language": "python",
          "code": "balance -= amount"
        },
        {
          "type": "text",
          "text": "Subtracts the withdrawal amount from the available balance."
        },
        {
          "type": "text",
          "text": "This is shorthand for:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "balance = balance - amount"
        },
        {
          "type": "text",
          "text": "The `except` blocks handle the two different problems."
        },
        {
          "type": "text",
          "text": "The `else` block confirms the transaction only if all operations succeed."
        },
        {
          "type": "text",
          "text": "The `finally` block displays a closing message."
        },
        {
          "type": "text",
          "text": "**Example output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter withdrawal amount: 2000\nWithdrawal successful.\nRemaining balance: 3000.0\nThank you for banking with us."
        },
        {
          "type": "text",
          "text": "If the user enters `7000`, the output becomes:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter withdrawal amount: 7000\nTransaction failed: Insufficient balance.\nThank you for banking with us."
        },
        {
          "type": "text",
          "text": "**Important:** This is an educational example. A real banking application would also need secure authentication, database transactions, concurrent balance protection, audit records and additional financial controls."
        },
        {
          "type": "heading",
          "text": "6. Common Exception Handling Mistakes"
        },
        {
          "type": "text",
          "text": "**Mistake 1: Using the wrong exception type**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = int(\"hello\")\n\nexcept ZeroDivisionError:\n    print(\"Error occurred.\")"
        },
        {
          "type": "text",
          "text": "Problem: The program produces a `ValueError`, not a `ZeroDivisionError`."
        },
        {
          "type": "text",
          "text": "Correct version:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = int(\"hello\")\n\nexcept ValueError:\n    print(\"Please enter a valid integer.\")"
        },
        {
          "type": "text",
          "text": "**Mistake 2: Putting important code outside the try block**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = int(input(\"Enter number: \"))\n\nexcept ValueError:\n    print(\"Invalid input.\")\n\nresult = 100 / number"
        },
        {
          "type": "text",
          "text": "Problem: If conversion fails, `number` may never be created. The division outside the `try` block can then produce another exception."
        },
        {
          "type": "text",
          "text": "The division should also be protected where appropriate."
        },
        {
          "type": "text",
          "text": "**Mistake 3: Using an empty except block**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = int(input(\"Enter number: \"))\n\nexcept:\n    pass"
        },
        {
          "type": "text",
          "text": "Problem: The application silently ignores the error. This makes problems difficult to identify."
        },
        {
          "type": "text",
          "text": "Better:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    number = int(input(\"Enter number: \"))\n\nexcept ValueError:\n    print(\"Please enter a valid integer.\")"
        },
        {
          "type": "heading",
          "text": "7. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete these exercises in your `main.py` file or create separate Python files for each task."
        },
        {
          "type": "text",
          "text": "**Exercise 1: Age Validation**"
        },
        {
          "type": "text",
          "text": "Write a program that:"
        },
        {
          "type": "numbered",
          "items": [
            "Requests a user's age.",
            "Converts the input into an integer.",
            "Handles invalid input.",
            "Rejects negative ages.",
            "Displays the age if it is valid."
          ]
        },
        {
          "type": "text",
          "text": "**Exercise 2: Division Calculator**"
        },
        {
          "type": "text",
          "text": "Write a program that:"
        },
        {
          "type": "numbered",
          "items": [
            "Requests two numbers.",
            "Divides the first number by the second.",
            "Handles `ValueError`.",
            "Handles `ZeroDivisionError`.",
            "Displays the result when successful."
          ]
        },
        {
          "type": "text",
          "text": "**Exercise 3: File Management**"
        },
        {
          "type": "text",
          "text": "Write a program that attempts to open a file called `records.txt`."
        },
        {
          "type": "text",
          "text": "If the file does not exist, display an appropriate error message."
        },
        {
          "type": "text",
          "text": "If it exists, display its contents."
        },
        {
          "type": "text",
          "text": "**Exercise 4: Banking Validation**"
        },
        {
          "type": "text",
          "text": "Create a program that starts with a balance of KSh 10,000."
        },
        {
          "type": "text",
          "text": "Allow the user to withdraw money."
        },
        {
          "type": "text",
          "text": "Your program should:"
        },
        {
          "type": "bullets",
          "items": [
            "Reject negative withdrawal amounts.",
            "Reject zero withdrawal amounts.",
            "Reject withdrawals greater than the balance.",
            "Use a custom exception for insufficient balance.",
            "Display the remaining balance after a successful withdrawal."
          ]
        },
        {
          "type": "text",
          "text": "**Part 3 Progress: 3 of 4**"
        },
        {
          "type": "text",
          "text": "---"
        }
      ]
    },
    {
      "id": "python-exception-handling-part-4",
      "title": "PART 4 OF 4: KAI ASSESSMENT",
      "description": "Part 4 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 4 OF 4: KAI ASSESSMENT"
        },
        {
          "type": "text",
          "text": "You have completed the lesson on Python Exception Handling."
        },
        {
          "type": "text",
          "text": "Before moving to the next topic, demonstrate your understanding through this assessment."
        },
        {
          "type": "heading",
          "text": "Assessment Instructions"
        },
        {
          "type": "bullets",
          "items": [
            "Answer all eight questions.",
            "Read each question carefully.",
            "Use your understanding of the lesson rather than guessing.",
            "Submit your answers to Kai for marking and feedback."
          ]
        },
        {
          "type": "heading",
          "text": "Question 1: Understanding Exceptions"
        },
        {
          "type": "quiz",
          "question": "What is an exception in Python?",
          "options": [
            "A. A command used to create variables.",
            "B. An event that interrupts the normal execution of a program.",
            "C. A function used to display output.",
            "D. A method of creating Python packages."
          ],
          "answer": "B. An event that interrupts the normal execution of a program.",
          "explanation": "Use the exception-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 2: The try Block"
        },
        {
          "type": "quiz",
          "question": "What is the main purpose of the `try` block?",
          "options": [
            "A. To define a class.",
            "B. To repeat code.",
            "C. To contain code that might produce an exception.",
            "D. To automatically delete errors."
          ],
          "answer": "C. To contain code that might produce an exception.",
          "explanation": "Use the exception-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 3: Specific Exceptions"
        },
        {
          "type": "quiz",
          "question": "Which exception occurs when a program attempts to divide a number by zero?",
          "options": [
            "A. `ValueError`",
            "B. `TypeError`",
            "C. `ZeroDivisionError`",
            "D. `NameError`"
          ],
          "answer": "C. `ZeroDivisionError`",
          "explanation": "Use the exception-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 4: Handling Invalid Input"
        },
        {
          "type": "quiz",
          "question": "What exception is commonly produced when converting `\"hello\"` into an integer using `int()`?",
          "options": [
            "A. `ValueError`",
            "B. `IndexError`",
            "C. `KeyError`",
            "D. `FileNotFoundError`"
          ],
          "answer": "A. `ValueError`",
          "explanation": "Use the exception-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 5: Understanding else"
        },
        {
          "type": "quiz",
          "question": "When does the `else` block execute in a try-except structure?",
          "options": [
            "A. Whenever an exception occurs.",
            "B. Only when no exception occurs in the `try` block.",
            "C. Before the `try` block.",
            "D. Whenever Python starts."
          ],
          "answer": "B. Only when no exception occurs in the `try` block.",
          "explanation": "Use the exception-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 6: Understanding finally"
        },
        {
          "type": "quiz",
          "question": "What is the purpose of the `finally` block?",
          "options": [
            "A. It executes only when a `ValueError` occurs.",
            "B. It executes only when the program crashes.",
            "C. It executes after the try-except process whether an exception occurs or not.",
            "D. It creates custom exceptions."
          ],
          "answer": "C. It executes after the try-except process whether an exception occurs or not.",
          "explanation": "Use the exception-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 7: The raise Keyword"
        },
        {
          "type": "quiz",
          "question": "What does the `raise` keyword do?",
          "options": [
            "A. Displays a variable.",
            "B. Creates a loop.",
            "C. Manually generates an exception.",
            "D. Imports a module."
          ],
          "answer": "C. Manually generates an exception.",
          "explanation": "Use the exception-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 8: Practical Programming"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    age = int(input(\"Enter age: \"))\n\nexcept ValueError:\n    print(\"Invalid age.\")\n\nelse:\n    print(\"Your age is:\", age)\n\nfinally:\n    print(\"Program finished.\")"
        },
        {
          "type": "quiz",
          "question": "If the user enters `twenty`, what will happen?",
          "options": [
            "A. The program displays the age as twenty.",
            "B. The program displays `Invalid age.` followed by `Program finished.`",
            "C. The program displays only `Program finished.`",
            "D. The program automatically converts twenty into 20."
          ],
          "answer": "B. The program displays `Invalid age.` followed by `Program finished.`",
          "explanation": "When conversion raises ValueError, the except block prints Invalid age. The finally block still runs, so Program finished. is printed too."
        },
        {
          "type": "heading",
          "text": "Practical Challenge: Build a Registration Validator"
        },
        {
          "type": "text",
          "text": "Create a Python program that registers a student."
        },
        {
          "type": "text",
          "text": "Your program should:"
        },
        {
          "type": "numbered",
          "items": [
            "Request the student's name.",
            "Request the student's age.",
            "Convert the age into an integer.",
            "Reject ages below 16.",
            "Reject empty names.",
            "Use exception handling to manage invalid input.",
            "Display a registration success message when all information is valid.",
            "Use `finally` to display a completion message."
          ]
        },
        {
          "type": "text",
          "text": "**Submit your eight assessment answers and practical challenge to Kai for marking, corrections and feedback.**"
        },
        {
          "type": "heading",
          "text": "LESSON COMPLETE"
        },
        {
          "type": "text",
          "text": "You have now covered:"
        },
        {
          "type": "bullets",
          "items": [
            "Meaning and importance of exception handling.",
            "The `try` and `except` blocks.",
            "Common Python exception types.",
            "Handling multiple exceptions.",
            "The `else` and `finally` blocks.",
            "The `raise` keyword.",
            "Creating custom exceptions.",
            "Practical exception handling in calculators, student systems, file management and banking applications."
          ]
        },
        {
          "type": "text",
          "text": "**Part 4 of 4 — Lesson Complete**"
        },
        {
          "type": "text",
          "text": "**Recommended next lesson:** Python Lambda Functions."
        }
      ]
    }
  ]
};

export default delivery;
