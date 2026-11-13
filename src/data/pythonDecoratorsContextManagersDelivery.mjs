const delivery = {
  "type": "authored",
  "version": 1,
  "intro": "PYTHON: DECORATORS AND CONTEXT MANAGERS",
  "sections": [
    {
      "id": "python-file-handling-part-1",
      "title": "PART 1 OF 4: UNDERSTANDING DECORATORS",
      "description": "Part 1 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 1 OF 4: UNDERSTANDING DECORATORS"
        },
        {
          "type": "heading",
          "text": "1. What Is a Decorator?"
        },
        {
          "type": "text",
          "text": "A **decorator** is a Python feature that allows you to modify or extend the behaviour of an existing function or class without directly changing its original code."
        },
        {
          "type": "text",
          "text": "In simple terms, a decorator adds extra functionality to another function."
        },
        {
          "type": "text",
          "text": "For example, imagine you are developing a banking application."
        },
        {
          "type": "text",
          "text": "You already have a function that transfers money between accounts. You now want to add functionality that records when the transfer happens."
        },
        {
          "type": "text",
          "text": "You could modify the original function, but decorators allow you to add this functionality separately."
        },
        {
          "type": "text",
          "text": "Decorators are commonly used for:"
        },
        {
          "type": "bullets",
          "items": [
            "Logging activities.",
            "Measuring execution time.",
            "Authentication and authorization.",
            "Checking permissions.",
            "Caching results.",
            "Validating inputs.",
            "Monitoring application performance."
          ]
        },
        {
          "type": "heading",
          "text": "2. Understanding Functions as Objects"
        },
        {
          "type": "text",
          "text": "Before understanding decorators, you need to understand an important Python concept: functions are objects."
        },
        {
          "type": "text",
          "text": "This means you can:"
        },
        {
          "type": "bullets",
          "items": [
            "Store functions in variables.",
            "Pass functions as arguments.",
            "Return functions from other functions."
          ]
        },
        {
          "type": "text",
          "text": "Consider this example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello, welcome to Python!\")\n\n\nmessage = greet\n\nmessage()"
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
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():"
        },
        {
          "type": "text",
          "text": "Defines a function called `greet`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "message = greet"
        },
        {
          "type": "text",
          "text": "Assigns the function itself to another variable."
        },
        {
          "type": "text",
          "text": "Notice that we did not write `greet()`."
        },
        {
          "type": "text",
          "text": "Without parentheses, we are referring to the function rather than executing it."
        },
        {
          "type": "code",
          "language": "python",
          "code": "message()"
        },
        {
          "type": "text",
          "text": "Calls the function through the new variable."
        },
        {
          "type": "text",
          "text": "This ability to treat functions as objects is one of the foundations of decorators."
        },
        {
          "type": "heading",
          "text": "3. Passing Functions as Arguments"
        },
        {
          "type": "text",
          "text": "Python allows you to pass one function into another function."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello, developer!\")\n\n\ndef execute_function(function):\n    function()\n\n\nexecute_function(greet)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Hello, developer!"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "**First function:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello, developer!\")"
        },
        {
          "type": "text",
          "text": "Creates a function that displays a greeting."
        },
        {
          "type": "text",
          "text": "**Second function:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def execute_function(function):"
        },
        {
          "type": "text",
          "text": "Defines another function that accepts a parameter called `function`."
        },
        {
          "type": "text",
          "text": "This parameter will receive another function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "function()"
        },
        {
          "type": "text",
          "text": "Executes the function received as an argument."
        },
        {
          "type": "text",
          "text": "Finally:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "execute_function(greet)"
        },
        {
          "type": "text",
          "text": "Passes the `greet` function into `execute_function`."
        },
        {
          "type": "text",
          "text": "This demonstrates that Python functions can be passed around like other objects."
        },
        {
          "type": "heading",
          "text": "4. Understanding Nested Functions"
        },
        {
          "type": "text",
          "text": "A nested function is a function defined inside another function."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def outer_function():\n\n    print(\"This is the outer function.\")\n\n    def inner_function():\n        print(\"This is the inner function.\")\n\n    inner_function()\n\n\nouter_function()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "This is the outer function.\nThis is the inner function."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def outer_function():"
        },
        {
          "type": "text",
          "text": "Defines the outer function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def inner_function():"
        },
        {
          "type": "text",
          "text": "Defines another function inside the outer function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "inner_function()"
        },
        {
          "type": "text",
          "text": "Calls the inner function."
        },
        {
          "type": "text",
          "text": "An important point: the inner function is normally accessible within the scope where it is defined, not as a normal global function."
        },
        {
          "type": "text",
          "text": "Nested functions are frequently used when implementing decorators."
        },
        {
          "type": "heading",
          "text": "5. Returning Functions from Other Functions"
        },
        {
          "type": "text",
          "text": "A function can also return another function."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def outer_function():\n\n    def inner_function():\n        print(\"Function returned successfully.\")\n\n    return inner_function\n\n\nresult = outer_function()\n\nresult()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Function returned successfully."
        },
        {
          "type": "text",
          "text": "Let's understand what happens."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def outer_function():"
        },
        {
          "type": "text",
          "text": "Creates the outer function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def inner_function():"
        },
        {
          "type": "text",
          "text": "Defines an inner function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return inner_function"
        },
        {
          "type": "text",
          "text": "Returns the inner function itself, without executing it."
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = outer_function()"
        },
        {
          "type": "text",
          "text": "Calls the outer function and stores the returned function in `result`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "result()"
        },
        {
          "type": "text",
          "text": "Executes the returned function."
        },
        {
          "type": "text",
          "text": "These concepts form the foundation of decorators."
        },
        {
          "type": "heading",
          "text": "6. Creating Your First Decorator"
        },
        {
          "type": "text",
          "text": "Let's create a simple decorator."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def my_decorator(function):\n\n    def wrapper():\n\n        print(\"Before function execution.\")\n\n        function()\n\n        print(\"After function execution.\")\n\n    return wrapper\n\n\n@my_decorator\ndef greet():\n    print(\"Hello, developer!\")\n\n\ngreet()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Before function execution.\nHello, developer!\nAfter function execution."
        },
        {
          "type": "text",
          "text": "This is your first decorator."
        },
        {
          "type": "text",
          "text": "Let's understand each section."
        },
        {
          "type": "heading",
          "text": "Step 1: Define the decorator"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def my_decorator(function):"
        },
        {
          "type": "text",
          "text": "Creates a decorator function."
        },
        {
          "type": "text",
          "text": "It receives another function as an argument."
        },
        {
          "type": "heading",
          "text": "Step 2: Define the wrapper"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def wrapper():"
        },
        {
          "type": "text",
          "text": "Creates an inner function that will control how the original function executes."
        },
        {
          "type": "heading",
          "text": "Step 3: Add functionality before execution"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Before function execution.\")"
        },
        {
          "type": "text",
          "text": "Displays a message before the original function runs."
        },
        {
          "type": "heading",
          "text": "Step 4: Execute the original function"
        },
        {
          "type": "code",
          "language": "python",
          "code": "function()"
        },
        {
          "type": "text",
          "text": "Calls the original function passed into the decorator."
        },
        {
          "type": "heading",
          "text": "Step 5: Add functionality after execution"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"After function execution.\")"
        },
        {
          "type": "text",
          "text": "Displays another message after the original function finishes."
        },
        {
          "type": "heading",
          "text": "Step 6: Return the wrapper"
        },
        {
          "type": "code",
          "language": "python",
          "code": "return wrapper"
        },
        {
          "type": "text",
          "text": "Returns the new function that contains the original function plus the additional functionality."
        },
        {
          "type": "heading",
          "text": "Step 7: Apply the decorator"
        },
        {
          "type": "code",
          "language": "python",
          "code": "@my_decorator"
        },
        {
          "type": "text",
          "text": "This is decorator syntax."
        },
        {
          "type": "text",
          "text": "It is equivalent to writing:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet():\n    print(\"Hello, developer!\")\n\n\ngreet = my_decorator(greet)"
        },
        {
          "type": "text",
          "text": "When you call `greet()`, you are actually executing the wrapper."
        },
        {
          "type": "text",
          "text": "**Important:** A decorator does not necessarily have to execute the original function. It can also choose to block execution, modify arguments, or modify the returned result."
        },
        {
          "type": "heading",
          "text": "7. Why Use Decorators?"
        },
        {
          "type": "text",
          "text": "Imagine you have five functions:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def create_account():\n    print(\"Account created.\")\n\n\ndef deposit_money():\n    print(\"Money deposited.\")\n\n\ndef withdraw_money():\n    print(\"Money withdrawn.\")\n\n\ndef check_balance():\n    print(\"Balance checked.\")\n\n\ndef transfer_money():\n    print(\"Money transferred.\")"
        },
        {
          "type": "text",
          "text": "Suppose you want to record every time one of these functions executes."
        },
        {
          "type": "text",
          "text": "Without decorators, you might repeat logging code inside every function."
        },
        {
          "type": "text",
          "text": "This creates unnecessary repetition."
        },
        {
          "type": "text",
          "text": "With decorators, you can write the logging functionality once and apply it wherever necessary."
        },
        {
          "type": "heading",
          "text": "8. Decorators with Multiple Functions"
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def log_activity(function):\n\n    def wrapper():\n\n        print(\"Activity started.\")\n\n        function()\n\n        print(\"Activity completed.\")\n\n    return wrapper\n\n\n@log_activity\ndef login():\n    print(\"User logged in.\")\n\n\n@log_activity\ndef logout():\n    print(\"User logged out.\")\n\n\nlogin()\n\nprint()\n\nlogout()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Activity started.\nUser logged in.\nActivity completed.\n\nActivity started.\nUser logged out.\nActivity completed."
        },
        {
          "type": "text",
          "text": "The same decorator works with different functions."
        },
        {
          "type": "text",
          "text": "This is one of the major advantages of decorators."
        },
        {
          "type": "heading",
          "text": "9. Part 1 Summary"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "numbered",
          "items": [
            "What decorators are.",
            "Why decorators are useful.",
            "How functions behave as objects.",
            "How to pass functions as arguments.",
            "How nested functions work.",
            "How functions return other functions.",
            "How to create a basic decorator.",
            "How to apply decorators using `@`."
          ]
        },
        {
          "type": "text",
          "text": "**Progress: Part 1 of 4**"
        },
        {
          "type": "text",
          "text": "---"
        }
      ]
    },
    {
      "id": "python-file-handling-part-2",
      "title": "PART 2 OF 4: ADVANCED DECORATORS AND CONTEXT MANAGERS",
      "description": "Part 2 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 2 OF 4: ADVANCED DECORATORS AND CONTEXT MANAGERS"
        },
        {
          "type": "heading",
          "text": "SECTION A: ADVANCED DECORATORS"
        },
        {
          "type": "heading",
          "text": "1. Decorators with Function Arguments"
        },
        {
          "type": "text",
          "text": "Our first decorator worked with functions that did not accept arguments."
        },
        {
          "type": "text",
          "text": "But what happens when the original function requires parameters?"
        },
        {
          "type": "text",
          "text": "Consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def greet(name):\n    print(f\"Hello, {name}!\")\n\n\ngreet(\"Brian\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Hello, Brian!"
        },
        {
          "type": "text",
          "text": "If we use our earlier decorator, it will fail because its wrapper does not accept arguments."
        },
        {
          "type": "text",
          "text": "We need a more flexible decorator."
        },
        {
          "type": "heading",
          "text": "2. Using `*args` and `**kwargs`"
        },
        {
          "type": "text",
          "text": "Python provides:"
        },
        {
          "type": "bullets",
          "items": [
            "`*args` for collecting positional arguments.",
            "`**kwargs` for collecting keyword arguments."
          ]
        },
        {
          "type": "text",
          "text": "We can use them to create decorators that work with different function signatures."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def my_decorator(function):\n\n    def wrapper(*args, **kwargs):\n\n        print(\"Function is starting.\")\n\n        result = function(*args, **kwargs)\n\n        print(\"Function has finished.\")\n\n        return result\n\n    return wrapper\n\n\n@my_decorator\ndef greet(name):\n    print(f\"Hello, {name}!\")\n\n\ngreet(\"Brian\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Function is starting.\nHello, Brian!\nFunction has finished."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def wrapper(*args, **kwargs):"
        },
        {
          "type": "text",
          "text": "Allows the wrapper to accept any number of positional and keyword arguments."
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = function(*args, **kwargs)"
        },
        {
          "type": "text",
          "text": "Passes those arguments to the original function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return result"
        },
        {
          "type": "text",
          "text": "Returns the original function's result."
        },
        {
          "type": "text",
          "text": "This makes the decorator more reusable."
        },
        {
          "type": "heading",
          "text": "3. Decorators with Return Values"
        },
        {
          "type": "text",
          "text": "Consider a function that calculates the total price of products."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate_total(price, quantity):\n    return price * quantity\n\n\nprint(calculate_total(500, 3))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1500"
        },
        {
          "type": "text",
          "text": "Now let's create a decorator that displays the result."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def show_result(function):\n\n    def wrapper(*args, **kwargs):\n\n        result = function(*args, **kwargs)\n\n        print(\"Calculation completed.\")\n\n        return result\n\n    return wrapper\n\n\n@show_result\ndef calculate_total(price, quantity):\n    return price * quantity\n\n\ntotal = calculate_total(500, 3)\n\nprint(\"Total:\", total)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Calculation completed.\nTotal: 1500"
        },
        {
          "type": "text",
          "text": "The decorator does not replace the calculation."
        },
        {
          "type": "text",
          "text": "It adds extra functionality while preserving the original result."
        },
        {
          "type": "heading",
          "text": "4. Preserving Function Information with `functools.wraps`"
        },
        {
          "type": "text",
          "text": "When a decorator replaces a function with a wrapper, Python may expose the wrapper's name and documentation instead of the original function's metadata."
        },
        {
          "type": "text",
          "text": "For example, this can affect:"
        },
        {
          "type": "bullets",
          "items": [
            "Debugging.",
            "Documentation tools.",
            "Frameworks that inspect function names.",
            "Development tools."
          ]
        },
        {
          "type": "text",
          "text": "Python provides `functools.wraps` to preserve this information."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import wraps\n\n\ndef my_decorator(function):\n\n    @wraps(function)\n    def wrapper(*args, **kwargs):\n\n        print(\"Executing function.\")\n\n        return function(*args, **kwargs)\n\n    return wrapper\n\n\n@my_decorator\ndef greet():\n    \"\"\"Displays a greeting.\"\"\"\n    print(\"Hello!\")\n\n\ngreet()\n\nprint(greet.__name__)\nprint(greet.__doc__)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Executing function.\nHello!\ngreet\nDisplays a greeting."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import wraps"
        },
        {
          "type": "text",
          "text": "Imports the `wraps` decorator from Python's standard library."
        },
        {
          "type": "code",
          "language": "python",
          "code": "@wraps(function)"
        },
        {
          "type": "text",
          "text": "Copies important metadata from the original function to the wrapper."
        },
        {
          "type": "text",
          "text": "This is considered a good practice when writing reusable decorators."
        },
        {
          "type": "heading",
          "text": "5. Decorators with Their Own Arguments"
        },
        {
          "type": "text",
          "text": "Decorators can also receive configuration arguments."
        },
        {
          "type": "text",
          "text": "For example, imagine you want a decorator that allows a function to execute a specific number of times."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def repeat(times):\n\n    def decorator(function):\n\n        def wrapper(*args, **kwargs):\n\n            for _ in range(times):\n                function(*args, **kwargs)\n\n        return wrapper\n\n    return decorator\n\n\n@repeat(3)\ndef greet():\n    print(\"Hello!\")\n\n\ngreet()"
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
          "type": "text",
          "text": "Understand the three levels:"
        },
        {
          "type": "text",
          "text": "**First level:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def repeat(times):"
        },
        {
          "type": "text",
          "text": "Receives the number of repetitions."
        },
        {
          "type": "text",
          "text": "**Second level:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def decorator(function):"
        },
        {
          "type": "text",
          "text": "Receives the function that needs to be decorated."
        },
        {
          "type": "text",
          "text": "**Third level:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def wrapper(*args, **kwargs):"
        },
        {
          "type": "text",
          "text": "Controls how the original function executes."
        },
        {
          "type": "text",
          "text": "The `for` loop executes the function three times."
        },
        {
          "type": "text",
          "text": "This is an example of a decorator factory: a function that creates and returns a configured decorator."
        },
        {
          "type": "heading",
          "text": "6. Practical Decorator: Measuring Execution Time"
        },
        {
          "type": "text",
          "text": "Software developers often need to measure how long a function takes to execute."
        },
        {
          "type": "text",
          "text": "Python provides the `time` module."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import time\nfrom functools import wraps\n\n\ndef measure_time(function):\n\n    @wraps(function)\n    def wrapper(*args, **kwargs):\n\n        start = time.perf_counter()\n\n        result = function(*args, **kwargs)\n\n        end = time.perf_counter()\n\n        duration = end - start\n\n        print(f\"Execution time: {duration:.6f} seconds\")\n\n        return result\n\n    return wrapper\n\n\n@measure_time\ndef calculate():\n\n    total = 0\n\n    for number in range(1, 1000000):\n        total += number\n\n    return total\n\n\nprint(\"Result:\", calculate())"
        },
        {
          "type": "text",
          "text": "The output will look similar to:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Execution time: 0.0xxxxx seconds\nResult: 499999500000"
        },
        {
          "type": "text",
          "text": "The exact execution time depends on the computer."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`time.perf_counter()` gets a high-resolution performance counter.",
            "`start` records the starting time.",
            "`function(*args, **kwargs)` executes the original function.",
            "`end` records the ending time.",
            "`duration` calculates the difference.",
            "`:.6f` formats the duration to six decimal places.",
            "The result is returned to the caller."
          ]
        },
        {
          "type": "text",
          "text": "This technique is useful when investigating slow application functions."
        },
        {
          "type": "text",
          "text": "---"
        },
        {
          "type": "heading",
          "text": "SECTION B: UNDERSTANDING CONTEXT MANAGERS"
        },
        {
          "type": "heading",
          "text": "7. What Is a Context Manager?"
        },
        {
          "type": "text",
          "text": "A **context manager** is a Python object that manages resources by setting them up before a block of code executes and cleaning them up afterward."
        },
        {
          "type": "text",
          "text": "Resources include:"
        },
        {
          "type": "bullets",
          "items": [
            "Files.",
            "Database connections.",
            "Network connections.",
            "Locks.",
            "Other objects that require controlled setup and cleanup."
          ]
        },
        {
          "type": "text",
          "text": "The most common way to use a context manager is through the `with` statement."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"notes.txt\", \"w\") as file:\n    file.write(\"Learning Python Context Managers.\")"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with"
        },
        {
          "type": "text",
          "text": "Starts a managed resource operation."
        },
        {
          "type": "code",
          "language": "python",
          "code": "open(\"notes.txt\", \"w\")"
        },
        {
          "type": "text",
          "text": "Opens a file in write mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "as file"
        },
        {
          "type": "text",
          "text": "Assigns the opened file object to the variable `file`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(...)"
        },
        {
          "type": "text",
          "text": "Writes text into the file."
        },
        {
          "type": "text",
          "text": "When the `with` block finishes, Python automatically closes the file."
        },
        {
          "type": "text",
          "text": "You do not need to call `file.close()` manually."
        },
        {
          "type": "heading",
          "text": "8. Why Are Context Managers Important?"
        },
        {
          "type": "text",
          "text": "Imagine opening a file manually:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"notes.txt\", \"w\")\n\nfile.write(\"Hello Python!\")\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "This works, but what happens if an error occurs before `file.close()`?"
        },
        {
          "type": "text",
          "text": "The cleanup statement might never execute."
        },
        {
          "type": "text",
          "text": "This can leave resources open longer than necessary."
        },
        {
          "type": "text",
          "text": "Using a context manager:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"notes.txt\", \"w\") as file:\n\n    file.write(\"Hello Python!\")"
        },
        {
          "type": "text",
          "text": "Python ensures that the file is closed when the managed block exits, including when an exception occurs."
        },
        {
          "type": "text",
          "text": "Context managers make resource handling safer and cleaner."
        },
        {
          "type": "heading",
          "text": "9. The Context Manager Protocol"
        },
        {
          "type": "text",
          "text": "Just as iterators have special methods, context managers also have special methods."
        },
        {
          "type": "text",
          "text": "The two main methods are:"
        },
        {
          "type": "table",
          "columns": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "`__enter__()`",
              "Performs setup and returns the resource or managed object"
            ],
            [
              "`__exit__()`",
              "Performs cleanup when the block exits"
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
          "code": "class MyContext:\n\n    def __enter__(self):\n\n        print(\"Entering the context.\")\n\n        return self\n\n    def __exit__(self, exc_type, exc_value, traceback):\n\n        print(\"Leaving the context.\")\n\n\nwith MyContext():\n    print(\"Inside the context.\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Entering the context.\nInside the context.\nLeaving the context."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "**The class:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class MyContext:"
        },
        {
          "type": "text",
          "text": "Defines a custom context manager."
        },
        {
          "type": "text",
          "text": "**The entry method:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def __enter__(self):"
        },
        {
          "type": "text",
          "text": "Python calls this when entering the `with` block."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return self"
        },
        {
          "type": "text",
          "text": "Returns the object that can optionally be assigned using `as`."
        },
        {
          "type": "text",
          "text": "**The exit method:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def __exit__(self, exc_type, exc_value, traceback):"
        },
        {
          "type": "text",
          "text": "Python calls this when leaving the `with` block."
        },
        {
          "type": "text",
          "text": "Its three arguments provide information about an exception, if one occurred."
        },
        {
          "type": "bullets",
          "items": [
            "`exc_type`: The exception's type.",
            "`exc_value`: The exception instance.",
            "`traceback`: The traceback object."
          ]
        },
        {
          "type": "text",
          "text": "If no exception occurs, all three values are `None`."
        },
        {
          "type": "heading",
          "text": "10. Handling Exceptions in Context Managers"
        },
        {
          "type": "text",
          "text": "Context managers can also respond to exceptions."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class SafeOperation:\n\n    def __enter__(self):\n\n        print(\"Operation started.\")\n\n        return self\n\n    def __exit__(self, exc_type, exc_value, traceback):\n\n        if exc_type is not None:\n\n            print(\"An error occurred:\", exc_value)\n\n        print(\"Cleaning up.\")\n\n        return False\n\n\nwith SafeOperation():\n\n    print(\"Performing operation.\")\n\n    raise ValueError(\"Something went wrong.\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Operation started.\nPerforming operation.\nAn error occurred: Something went wrong.\nCleaning up.\nTraceback ...\nValueError: Something went wrong."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if exc_type is not None:"
        },
        {
          "type": "text",
          "text": "Checks whether an exception occurred inside the `with` block."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"An error occurred:\", exc_value)"
        },
        {
          "type": "text",
          "text": "Displays the exception message."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return False"
        },
        {
          "type": "text",
          "text": "Tells Python not to suppress the exception."
        },
        {
          "type": "text",
          "text": "The exception therefore continues to propagate after cleanup."
        },
        {
          "type": "text",
          "text": "**Important:** Returning `True` from `__exit__()` tells Python to suppress the exception. This should only be done intentionally."
        },
        {
          "type": "heading",
          "text": "11. Using `contextlib`"
        },
        {
          "type": "text",
          "text": "Python provides a standard library module called `contextlib`."
        },
        {
          "type": "text",
          "text": "It allows you to create context managers using a generator function and the `@contextmanager` decorator."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from contextlib import contextmanager\n\n\n@contextmanager\ndef my_context():\n\n    print(\"Entering context.\")\n\n    yield\n\n    print(\"Leaving context.\")\n\n\nwith my_context():\n    print(\"Inside context.\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Entering context.\nInside context.\nLeaving context."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from contextlib import contextmanager"
        },
        {
          "type": "text",
          "text": "Imports the `contextmanager` decorator."
        },
        {
          "type": "code",
          "language": "python",
          "code": "@contextmanager"
        },
        {
          "type": "text",
          "text": "Converts the generator function into a context manager."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Entering context.\")"
        },
        {
          "type": "text",
          "text": "Runs before the managed block."
        },
        {
          "type": "code",
          "language": "python",
          "code": "yield"
        },
        {
          "type": "text",
          "text": "Pauses the generator and allows the body of the `with` block to execute."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Leaving context.\")"
        },
        {
          "type": "text",
          "text": "Runs when the managed block exits, including when an exception occurs, provided execution is allowed to continue through the generator's cleanup section."
        },
        {
          "type": "text",
          "text": "For more advanced resource management, use `try` and `finally` around the `yield`."
        },
        {
          "type": "heading",
          "text": "Part 2 Summary"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "numbered",
          "items": [
            "Decorators with arguments.",
            "Decorators with return values.",
            "`*args` and `**kwargs`.",
            "`functools.wraps`.",
            "Decorator factories.",
            "Measuring function execution time.",
            "What context managers are.",
            "How the `with` statement works.",
            "The context manager protocol.",
            "How to create context managers using `contextlib`."
          ]
        },
        {
          "type": "text",
          "text": "**Progress: Part 2 of 4**"
        },
        {
          "type": "text",
          "text": "---"
        }
      ]
    },
    {
      "id": "python-file-handling-part-3",
      "title": "PART 3 OF 4: PRACTICAL APPLICATIONS",
      "description": "Part 3 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 3 OF 4: PRACTICAL APPLICATIONS"
        },
        {
          "type": "text",
          "text": "In this section, you will combine decorators and context managers to build features commonly used in software applications."
        },
        {
          "type": "heading",
          "text": "1. Project Setup"
        },
        {
          "type": "text",
          "text": "Create a folder:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "decorators_context_managers_project/\n│\n├── main.py\n│\n├── activity.log\n│\n└── records.txt"
        },
        {
          "type": "text",
          "text": "Open the project in Visual Studio Code."
        },
        {
          "type": "text",
          "text": "Create the Python files and run the examples from `main.py`."
        },
        {
          "type": "heading",
          "text": "2. Practical Example One: User Activity Logger Using a Decorator"
        },
        {
          "type": "text",
          "text": "Imagine you are developing an application with user registration and login functionality."
        },
        {
          "type": "text",
          "text": "You want to record whenever a user performs an action."
        },
        {
          "type": "text",
          "text": "Instead of writing logging code inside every function, create a reusable decorator."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import wraps\nfrom datetime import datetime\n\n\ndef log_activity(function):\n\n    @wraps(function)\n    def wrapper(*args, **kwargs):\n\n        current_time = datetime.now()\n\n        print(f\"[{current_time}] Executing: {function.__name__}\")\n\n        result = function(*args, **kwargs)\n\n        print(f\"[{current_time}] Completed: {function.__name__}\")\n\n        return result\n\n    return wrapper\n\n\n@log_activity\ndef register_user(username):\n\n    print(f\"User {username} registered successfully.\")\n\n\n@log_activity\ndef login_user(username):\n\n    print(f\"User {username} logged in successfully.\")\n\n\nregister_user(\"Brian\")\n\nprint()\n\nlogin_user(\"Brian\")"
        },
        {
          "type": "text",
          "text": "Possible output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[2026-11-13 22:00:00] Executing: register_user\nUser Brian registered successfully.\n[2026-11-13 22:00:00] Completed: register_user\n\n[2026-11-13 22:00:00] Executing: login_user\nUser Brian logged in successfully.\n[2026-11-13 22:00:00] Completed: login_user"
        },
        {
          "type": "text",
          "text": "The actual date and time will depend on when the program runs."
        },
        {
          "type": "heading",
          "text": "Understanding the program"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import wraps"
        },
        {
          "type": "text",
          "text": "Imports the tool used to preserve the original function's metadata."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from datetime import datetime"
        },
        {
          "type": "text",
          "text": "Imports `datetime`, which provides date and time information."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def log_activity(function):"
        },
        {
          "type": "text",
          "text": "Defines the decorator."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def wrapper(*args, **kwargs):"
        },
        {
          "type": "text",
          "text": "Allows the decorator to work with different function arguments."
        },
        {
          "type": "code",
          "language": "python",
          "code": "current_time = datetime.now()"
        },
        {
          "type": "text",
          "text": "Gets the current date and time."
        },
        {
          "type": "code",
          "language": "python",
          "code": "function.__name__"
        },
        {
          "type": "text",
          "text": "Retrieves the original function's name."
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = function(*args, **kwargs)"
        },
        {
          "type": "text",
          "text": "Executes the original function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return result"
        },
        {
          "type": "text",
          "text": "Preserves the original function's return value."
        },
        {
          "type": "text",
          "text": "The decorator can now be applied to any compatible function."
        },
        {
          "type": "text",
          "text": "**Real-world application:** Activity logging in account management systems, administrative dashboards and business applications."
        },
        {
          "type": "text",
          "text": "Note that this example prints logs to the terminal. Production applications should normally use Python's `logging` module and avoid recording passwords or sensitive user information."
        },
        {
          "type": "heading",
          "text": "3. Practical Example Two: Authentication Decorator"
        },
        {
          "type": "text",
          "text": "Imagine an application where certain operations should only be performed by authenticated users."
        },
        {
          "type": "text",
          "text": "You can create a decorator that checks whether a user is logged in."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import wraps\n\n\ndef require_login(function):\n\n    @wraps(function)\n    def wrapper(*args, **kwargs):\n\n        logged_in = True\n\n        if logged_in:\n\n            return function(*args, **kwargs)\n\n        else:\n\n            print(\"Access denied. Please log in.\")\n\n    return wrapper\n\n\n@require_login\ndef view_dashboard():\n\n    print(\"Welcome to your dashboard.\")\n\n\nview_dashboard()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Welcome to your dashboard."
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def require_login(function):"
        },
        {
          "type": "text",
          "text": "Creates a decorator that accepts another function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "logged_in = True"
        },
        {
          "type": "text",
          "text": "Simulates an authenticated user's status."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if logged_in:"
        },
        {
          "type": "text",
          "text": "Checks whether the user is authenticated."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return function(*args, **kwargs)"
        },
        {
          "type": "text",
          "text": "Allows the original function to execute when the user is logged in."
        },
        {
          "type": "code",
          "language": "python",
          "code": "else:\n    print(\"Access denied. Please log in.\")"
        },
        {
          "type": "text",
          "text": "Blocks execution when the user is not logged in."
        },
        {
          "type": "text",
          "text": "**Important security lesson:** This is only a demonstration. A real authentication decorator must check a trusted authentication mechanism, such as a verified server-side session or validated token. A hardcoded Boolean is not security."
        },
        {
          "type": "heading",
          "text": "4. Practical Example Three: Function Execution Timer"
        },
        {
          "type": "text",
          "text": "Let's build a reusable timer for application functions."
        },
        {
          "type": "code",
          "language": "python",
          "code": "import time\nfrom functools import wraps\n\n\ndef timer(function):\n\n    @wraps(function)\n    def wrapper(*args, **kwargs):\n\n        start = time.perf_counter()\n\n        result = function(*args, **kwargs)\n\n        finish = time.perf_counter()\n\n        print(\"Time taken:\", finish - start, \"seconds\")\n\n        return result\n\n    return wrapper\n\n\n@timer\ndef process_data():\n\n    total = 0\n\n    for number in range(1, 500000):\n        total += number\n\n    return total\n\n\nresult = process_data()\n\nprint(\"Final result:\", result)"
        },
        {
          "type": "text",
          "text": "Output will look similar to:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Time taken: 0.0xxxxx seconds\nFinal result: 124999750000"
        },
        {
          "type": "text",
          "text": "The execution time depends on the computer."
        },
        {
          "type": "heading",
          "text": "What is happening?"
        },
        {
          "type": "numbered",
          "items": [
            "The timer decorator receives `process_data`.",
            "The wrapper records the starting time.",
            "The original function performs its calculation.",
            "The wrapper records the finishing time.",
            "The difference is displayed.",
            "The original result is returned."
          ]
        },
        {
          "type": "text",
          "text": "This technique is useful when optimizing software."
        },
        {
          "type": "heading",
          "text": "5. Practical Example Four: File Management with Context Managers"
        },
        {
          "type": "text",
          "text": "Let's build a simple application that writes and reads user records."
        },
        {
          "type": "text",
          "text": "First, create a file named `records.txt`."
        },
        {
          "type": "text",
          "text": "Now add this code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def save_record(name, course):\n\n    with open(\"records.txt\", \"a\") as file:\n\n        file.write(f\"{name}, {course}\\n\")\n\n\ndef read_records():\n\n    with open(\"records.txt\", \"r\") as file:\n\n        for record in file:\n\n            print(record.strip())\n\n\nsave_record(\"Brian\", \"BBIT\")\nsave_record(\"Mary\", \"Computer Science\")\n\nprint(\"Student Records:\")\n\nread_records()"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Student Records:\nBrian, BBIT\nMary, Computer Science"
        },
        {
          "type": "heading",
          "text": "Understanding the code"
        },
        {
          "type": "text",
          "text": "**The saving function:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def save_record(name, course):"
        },
        {
          "type": "text",
          "text": "Creates a function that accepts a student's name and course."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"records.txt\", \"a\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the file in append mode."
        },
        {
          "type": "text",
          "text": "Append mode adds new information without deleting existing content."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(f\"{name}, {course}\\n\")"
        },
        {
          "type": "text",
          "text": "Writes the student's details into the file."
        },
        {
          "type": "text",
          "text": "`\\n` moves the next record to a new line."
        },
        {
          "type": "text",
          "text": "**The reading function:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def read_records():"
        },
        {
          "type": "text",
          "text": "Defines a function for reading saved records."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"records.txt\", \"r\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the file in read mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for record in file:"
        },
        {
          "type": "text",
          "text": "Reads each record one line at a time."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(record.strip())"
        },
        {
          "type": "text",
          "text": "Displays the record without surrounding whitespace or the newline character."
        },
        {
          "type": "text",
          "text": "The context manager automatically closes the file after each operation."
        },
        {
          "type": "heading",
          "text": "6. Practical Example Five: Building a Custom Database Connection Manager"
        },
        {
          "type": "text",
          "text": "Imagine you are developing an application that needs to manage database connections."
        },
        {
          "type": "text",
          "text": "A context manager can help control when a connection is opened and closed."
        },
        {
          "type": "text",
          "text": "For demonstration, we will simulate a database connection without connecting to a real database."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class DatabaseConnection:\n\n    def __enter__(self):\n\n        print(\"Connecting to database.\")\n\n        self.connection = \"Database connection active\"\n\n        return self.connection\n\n    def __exit__(self, exc_type, exc_value, traceback):\n\n        print(\"Closing database connection.\")\n\n        return False\n\n\nwith DatabaseConnection() as connection:\n\n    print(connection)\n\n    print(\"Executing database operations.\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Connecting to database.\nDatabase connection active\nExecuting database operations.\nClosing database connection."
        },
        {
          "type": "heading",
          "text": "Explanation"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class DatabaseConnection:"
        },
        {
          "type": "text",
          "text": "Defines a custom context manager."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def __enter__(self):"
        },
        {
          "type": "text",
          "text": "Runs when the application enters the `with` block."
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.connection = \"Database connection active\""
        },
        {
          "type": "text",
          "text": "Simulates creating a connection."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return self.connection"
        },
        {
          "type": "text",
          "text": "Makes the connection available through the `connection` variable."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def __exit__(self, exc_type, exc_value, traceback):"
        },
        {
          "type": "text",
          "text": "Runs when the block finishes."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Closing database connection.\")"
        },
        {
          "type": "text",
          "text": "Simulates closing the connection."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return False"
        },
        {
          "type": "text",
          "text": "Allows any exception from the managed block to propagate."
        },
        {
          "type": "text",
          "text": "In a real application, the setup and cleanup methods would call the actual database driver's connection and close methods."
        },
        {
          "type": "heading",
          "text": "7. Practical Example Six: Context Manager Using `contextlib`"
        },
        {
          "type": "text",
          "text": "Let's create a reusable context manager that measures how long an operation takes."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from contextlib import contextmanager\nimport time\n\n\n@contextmanager\ndef measure_operation():\n\n    start = time.perf_counter()\n\n    print(\"Operation started.\")\n\n    try:\n\n        yield\n\n    finally:\n\n        finish = time.perf_counter()\n\n        print(\"Operation completed.\")\n\n        print(\"Duration:\", finish - start, \"seconds\")\n\n\nwith measure_operation():\n\n    total = 0\n\n    for number in range(1, 1000000):\n\n        total += number"
        },
        {
          "type": "text",
          "text": "Possible output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Operation started.\nOperation completed.\nDuration: 0.0xxxxx seconds"
        },
        {
          "type": "heading",
          "text": "Understanding the program"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from contextlib import contextmanager"
        },
        {
          "type": "text",
          "text": "Imports the decorator that creates a context manager from a generator."
        },
        {
          "type": "code",
          "language": "python",
          "code": "@contextmanager"
        },
        {
          "type": "text",
          "text": "Converts `measure_operation()` into a context manager."
        },
        {
          "type": "code",
          "language": "python",
          "code": "start = time.perf_counter()"
        },
        {
          "type": "text",
          "text": "Records the starting time."
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Starts a protected section."
        },
        {
          "type": "code",
          "language": "python",
          "code": "yield"
        },
        {
          "type": "text",
          "text": "Hands control to the body of the `with` statement."
        },
        {
          "type": "code",
          "language": "python",
          "code": "finally:"
        },
        {
          "type": "text",
          "text": "Defines cleanup code that executes whether the managed block completes normally or raises an exception."
        },
        {
          "type": "code",
          "language": "python",
          "code": "finish = time.perf_counter()"
        },
        {
          "type": "text",
          "text": "Records the finishing time."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Duration:\", finish - start, \"seconds\")"
        },
        {
          "type": "text",
          "text": "Displays how long the operation took."
        },
        {
          "type": "text",
          "text": "This example demonstrates how context managers can control operations beyond file handling."
        },
        {
          "type": "heading",
          "text": "8. Combining Decorators and Context Managers"
        },
        {
          "type": "text",
          "text": "These two concepts can work together in the same application."
        },
        {
          "type": "text",
          "text": "Consider a system that:"
        },
        {
          "type": "bullets",
          "items": [
            "Uses a decorator to log a function's execution.",
            "Uses a context manager to manage a file.",
            "Writes information to the file.",
            "Closes the file automatically."
          ]
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import wraps\n\n\ndef log_execution(function):\n\n    @wraps(function)\n    def wrapper(*args, **kwargs):\n\n        print(\"Executing:\", function.__name__)\n\n        result = function(*args, **kwargs)\n\n        print(\"Execution completed.\")\n\n        return result\n\n    return wrapper\n\n\n@log_execution\ndef save_message(message):\n\n    with open(\"activity.log\", \"a\") as file:\n\n        file.write(message + \"\\n\")\n\n    print(\"Message saved.\")\n\n\nsave_message(\"User completed a Python lesson.\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Executing: save_message\nMessage saved.\nExecution completed."
        },
        {
          "type": "text",
          "text": "The decorator handles function execution messages."
        },
        {
          "type": "text",
          "text": "The context manager handles the file resource."
        },
        {
          "type": "text",
          "text": "Each feature has a separate responsibility."
        },
        {
          "type": "text",
          "text": "This separation makes software easier to maintain."
        },
        {
          "type": "heading",
          "text": "9. Common Mistakes"
        },
        {
          "type": "heading",
          "text": "Mistake 1: Forgetting to return the wrapper"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def decorator(function):\n\n    def wrapper():\n        function()"
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def decorator(function):\n\n    def wrapper():\n        function()\n\n    return wrapper"
        },
        {
          "type": "text",
          "text": "Without `return wrapper`, the decorator does not return the replacement function."
        },
        {
          "type": "heading",
          "text": "Mistake 2: Forgetting to pass function arguments"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def decorator(function):\n\n    def wrapper():\n        return function()\n\n    return wrapper"
        },
        {
          "type": "text",
          "text": "This only supports functions that do not require arguments."
        },
        {
          "type": "text",
          "text": "A more flexible version:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def decorator(function):\n\n    def wrapper(*args, **kwargs):\n        return function(*args, **kwargs)\n\n    return wrapper"
        },
        {
          "type": "heading",
          "text": "Mistake 3: Forgetting to close resources"
        },
        {
          "type": "text",
          "text": "Manual resource handling can become unreliable when exceptions occur."
        },
        {
          "type": "text",
          "text": "Prefer:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"records.txt\", \"r\") as file:\n    content = file.read()"
        },
        {
          "type": "heading",
          "text": "Mistake 4: Confusing `yield` and `return` in a context manager"
        },
        {
          "type": "text",
          "text": "When using `@contextmanager`, the `yield` statement separates the setup code from the managed block and the cleanup code."
        },
        {
          "type": "text",
          "text": "A context manager built this way normally has one `yield` statement."
        },
        {
          "type": "heading",
          "text": "Mistake 5: Accidentally suppressing exceptions"
        },
        {
          "type": "text",
          "text": "Returning `True` from a custom context manager's `__exit__()` method suppresses an exception."
        },
        {
          "type": "text",
          "text": "If you do not intend to suppress it, return `False` or `None`."
        },
        {
          "type": "heading",
          "text": "10. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete the following exercises."
        },
        {
          "type": "text",
          "text": "**Exercise 1: Logging Decorator**"
        },
        {
          "type": "text",
          "text": "Create a decorator called `log_function` that displays a message before and after a function executes."
        },
        {
          "type": "text",
          "text": "Apply it to two different functions."
        },
        {
          "type": "text",
          "text": "**Exercise 2: Execution Timer**"
        },
        {
          "type": "text",
          "text": "Create a decorator that measures the execution time of a function."
        },
        {
          "type": "text",
          "text": "Test it with a function that calculates the sum of numbers from 1 to 1,000,000."
        },
        {
          "type": "text",
          "text": "**Exercise 3: Authentication Decorator**"
        },
        {
          "type": "text",
          "text": "Create a decorator that checks whether a user is authenticated before allowing access to a dashboard function."
        },
        {
          "type": "text",
          "text": "Use a variable to simulate authentication."
        },
        {
          "type": "text",
          "text": "**Exercise 4: File Context Manager**"
        },
        {
          "type": "text",
          "text": "Write a program that creates a file, saves three student names and reads them back using `with open()`."
        },
        {
          "type": "text",
          "text": "**Exercise 5: Custom Context Manager**"
        },
        {
          "type": "text",
          "text": "Create a class called `FileManager` that implements `__enter__()` and `__exit__()`."
        },
        {
          "type": "text",
          "text": "Use it to manage a file."
        },
        {
          "type": "text",
          "text": "**Exercise 6: Operation Timer Context Manager**"
        },
        {
          "type": "text",
          "text": "Use `@contextmanager` to create a context manager that measures how long a block of code takes to execute."
        },
        {
          "type": "text",
          "text": "**Progress: Part 3 of 4**"
        },
        {
          "type": "text",
          "text": "---"
        }
      ]
    },
    {
      "id": "python-file-handling-part-4",
      "title": "PART 4 OF 4: KAI ASSESSMENT",
      "description": "Part 4 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 4 OF 4: KAI ASSESSMENT"
        },
        {
          "type": "text",
          "text": "You have completed the lesson on Decorators and Context Managers."
        },
        {
          "type": "text",
          "text": "This assessment evaluates whether you understand the concepts and can apply them in Python programs."
        },
        {
          "type": "heading",
          "text": "SECTION A: MULTIPLE-CHOICE QUESTIONS"
        },
        {
          "type": "heading",
          "text": "Question 1"
        },
        {
          "type": "quiz",
          "question": "What is the main purpose of a Python decorator?",
          "options": [
            "A. To create database tables.",
            "B. To extend or modify the behaviour of a function or class.",
            "C. To install Python packages.",
            "D. To create loops."
          ],
          "answer": "B. To extend or modify the behaviour of a function or class.",
          "explanation": "Use the decorator or context-manager rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 2"
        },
        {
          "type": "quiz",
          "question": "Which symbol is commonly used to apply a decorator?",
          "options": [
            "A. `#`",
            "B. `$`",
            "C. `@`",
            "D. `&`"
          ],
          "answer": "C. `@`",
          "explanation": "Use the decorator or context-manager rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 3"
        },
        {
          "type": "quiz",
          "question": "What is the purpose of `*args` and `**kwargs` in a decorator?",
          "options": [
            "A. To delete function arguments.",
            "B. To support different positional and keyword arguments.",
            "C. To create Python classes.",
            "D. To close files."
          ],
          "answer": "B. To support different positional and keyword arguments.",
          "explanation": "Use the decorator or context-manager rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 4"
        },
        {
          "type": "quiz",
          "question": "Which special method is called when entering a custom context manager?",
          "options": [
            "A. `__start__()`",
            "B. `__init__()`",
            "C. `__enter__()`",
            "D. `__next__()`"
          ],
          "answer": "C. `__enter__()`",
          "explanation": "Use the decorator or context-manager rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "SECTION B: UNDERSTANDING THE CONCEPTS"
        },
        {
          "type": "heading",
          "text": "Question 5"
        },
        {
          "type": "text",
          "text": "Explain the difference between a decorator and a context manager."
        },
        {
          "type": "text",
          "text": "Include one practical example of each."
        },
        {
          "type": "heading",
          "text": "Question 6"
        },
        {
          "type": "text",
          "text": "Explain what happens when Python executes the following code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"r\") as file:\n    content = file.read()"
        },
        {
          "type": "text",
          "text": "Why is using `with` important?"
        },
        {
          "type": "heading",
          "text": "SECTION C: PRACTICAL PROGRAMMING"
        },
        {
          "type": "heading",
          "text": "Question 7: Create a Decorator"
        },
        {
          "type": "text",
          "text": "Write a decorator called `uppercase_output` that:"
        },
        {
          "type": "numbered",
          "items": [
            "Receives a function.",
            "Executes the original function.",
            "Converts its returned string to uppercase.",
            "Returns the modified result."
          ]
        },
        {
          "type": "text",
          "text": "Apply it to a function that returns:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "welcome to codelab academy"
        },
        {
          "type": "text",
          "text": "The final output should be:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "WELCOME TO CODELAB ACADEMY"
        },
        {
          "type": "heading",
          "text": "Question 8: Create a Context Manager"
        },
        {
          "type": "text",
          "text": "Create a custom context manager called `OperationManager`."
        },
        {
          "type": "text",
          "text": "It should:"
        },
        {
          "type": "numbered",
          "items": [
            "Display `Starting operation` when entering the context.",
            "Display `Operation running` inside the context.",
            "Display `Cleaning up resources` when leaving the context."
          ]
        },
        {
          "type": "text",
          "text": "Implement `__enter__()` and `__exit__()`."
        },
        {
          "type": "heading",
          "text": "SUBMIT YOUR ASSESSMENT TO KAI"
        },
        {
          "type": "text",
          "text": "Submit your answers to Kai, your AI instructor."
        },
        {
          "type": "text",
          "text": "Kai should:"
        },
        {
          "type": "numbered",
          "items": [
            "Mark the multiple-choice questions.",
            "Evaluate your explanations.",
            "Review your Python code.",
            "Identify syntax and logical errors.",
            "Explain why incorrect answers are wrong.",
            "Provide corrected code.",
            "Give you an overall score.",
            "Recommend the next lesson based on your performance."
          ]
        },
        {
          "type": "heading",
          "text": "LESSON COMPLETION CHECKLIST"
        },
        {
          "type": "text",
          "text": "By the end of this lesson, you should be able to:"
        },
        {
          "type": "bullets",
          "items": [
            "[ ] Explain what decorators are.",
            "[ ] Explain how functions can be passed as arguments.",
            "[ ] Create nested functions.",
            "[ ] Create basic decorators.",
            "[ ] Use `@` decorator syntax.",
            "[ ] Create decorators that accept arguments.",
            "[ ] Use `*args` and `**kwargs`.",
            "[ ] Preserve function metadata using `functools.wraps`.",
            "[ ] Explain what context managers are.",
            "[ ] Use the `with` statement.",
            "[ ] Implement `__enter__()` and `__exit__()`.",
            "[ ] Create context managers using `contextlib`.",
            "[ ] Combine decorators and context managers in practical applications."
          ]
        },
        {
          "type": "text",
          "text": "**PART 4 OF 4 — LESSON COMPLETE**"
        },
        {
          "type": "heading",
          "text": "RECOMMENDED NEXT LESSON"
        },
        {
          "type": "text",
          "text": "**Python: Advanced Functions and Functional Programming**"
        },
        {
          "type": "text",
          "text": "This lesson will introduce concepts such as closures, lambda functions, `map()`, `filter()`, `reduce()`, and functional programming principles."
        }
      ]
    }
  ]
};

export default delivery;
