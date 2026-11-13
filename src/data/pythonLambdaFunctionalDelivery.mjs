const delivery = {
  "type": "authored",
  "version": 1,
  "intro": "PYTHON: LAMBDA FUNCTIONS AND FUNCTIONAL PROGRAMMING",
  "sections": [
    {
      "id": "python-file-handling-part-1",
      "title": "PART 1 OF 4: UNDERSTANDING LAMBDA FUNCTIONS",
      "description": "Part 1 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 1 OF 4: UNDERSTANDING LAMBDA FUNCTIONS"
        },
        {
          "type": "heading",
          "text": "1. What Is a Lambda Function?"
        },
        {
          "type": "text",
          "text": "A **lambda function** is a small anonymous function in Python."
        },
        {
          "type": "text",
          "text": "Anonymous means that the function does not need a conventional name defined using `def`."
        },
        {
          "type": "text",
          "text": "Lambda functions are useful when you need a short function to perform a simple operation."
        },
        {
          "type": "text",
          "text": "Consider a normal Python function:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b\n\n\nresult = add(10, 20)\n\nprint(result)"
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
          "text": "This function:"
        },
        {
          "type": "bullets",
          "items": [
            "Accepts two arguments.",
            "Adds the arguments.",
            "Returns the result."
          ]
        },
        {
          "type": "text",
          "text": "You can perform the same operation using a lambda function:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "add = lambda a, b: a + b\n\nresult = add(10, 20)\n\nprint(result)"
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
          "text": "Both examples perform the same calculation."
        },
        {
          "type": "text",
          "text": "The difference is how the functions are defined."
        },
        {
          "type": "heading",
          "text": "2. Lambda Function Syntax"
        },
        {
          "type": "text",
          "text": "The general syntax is:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "lambda arguments: expression"
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
              "`lambda`",
              "Keyword used to create a lambda function"
            ],
            [
              "`arguments`",
              "Values accepted by the function"
            ],
            [
              "`:`",
              "Separates arguments from the expression"
            ],
            [
              "`expression`",
              "Operation whose result is returned"
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
          "code": "square = lambda number: number ** 2\n\nprint(square(5))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "25"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "lambda number:"
        },
        {
          "type": "text",
          "text": "Creates a lambda function that accepts one argument called `number`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "number ** 2"
        },
        {
          "type": "text",
          "text": "Calculates the square of the supplied number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "square = ..."
        },
        {
          "type": "text",
          "text": "Stores the lambda function in a variable called `square`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "square(5)"
        },
        {
          "type": "text",
          "text": "Calls the function with the value `5`."
        },
        {
          "type": "text",
          "text": "The result is `25`."
        },
        {
          "type": "text",
          "text": "**Important:** Lambda functions contain a single expression, not a block of statements. They return the result of that expression automatically."
        },
        {
          "type": "heading",
          "text": "3. Lambda Functions with Different Numbers of Arguments"
        },
        {
          "type": "text",
          "text": "A lambda function can accept different numbers of arguments."
        },
        {
          "type": "heading",
          "text": "Example A: No arguments"
        },
        {
          "type": "code",
          "language": "python",
          "code": "greet = lambda: \"Welcome to CodeLab Academy\"\n\nprint(greet())"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Welcome to CodeLab Academy"
        },
        {
          "type": "text",
          "text": "The function accepts no arguments and returns a greeting."
        },
        {
          "type": "heading",
          "text": "Example B: One argument"
        },
        {
          "type": "code",
          "language": "python",
          "code": "double = lambda number: number * 2\n\nprint(double(8))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "16"
        },
        {
          "type": "text",
          "text": "The function accepts one number and doubles it."
        },
        {
          "type": "heading",
          "text": "Example C: Two arguments"
        },
        {
          "type": "code",
          "language": "python",
          "code": "multiply = lambda a, b: a * b\n\nprint(multiply(5, 4))"
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
          "text": "The function accepts two numbers and multiplies them."
        },
        {
          "type": "heading",
          "text": "Example D: Three arguments"
        },
        {
          "type": "code",
          "language": "python",
          "code": "calculate_total = lambda price, quantity, discount: (price * quantity) - discount\n\nprint(calculate_total(500, 3, 200))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1300"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`price` receives `500`.",
            "`quantity` receives `3`.",
            "`discount` receives `200`.",
            "`price * quantity` calculates `1500`.",
            "Subtracting `200` gives `1300`."
          ]
        },
        {
          "type": "text",
          "text": "This could be useful in a shopping application when calculating a discounted product total."
        },
        {
          "type": "heading",
          "text": "4. Normal Functions vs Lambda Functions"
        },
        {
          "type": "text",
          "text": "Both are functions, but they are designed for slightly different situations."
        },
        {
          "type": "table",
          "columns": [
            "Normal function (`def`)",
            "Lambda function"
          ],
          "rows": [
            [
              "Uses the `def` keyword",
              "Uses the `lambda` keyword"
            ],
            [
              "Usually has a name",
              "Can be anonymous"
            ],
            [
              "Supports multiple statements",
              "Contains one expression"
            ],
            [
              "Suitable for complex operations",
              "Suitable for short operations"
            ],
            [
              "Can contain loops and conditions",
              "Cannot contain ordinary statement blocks"
            ],
            [
              "Can have documentation strings",
              "Not normally used for documenting complex behaviour"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Consider this comparison."
        },
        {
          "type": "text",
          "text": "Normal function:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate_area(length, width):\n    area = length * width\n    return area\n\n\nprint(calculate_area(10, 5))"
        },
        {
          "type": "text",
          "text": "Lambda function:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "calculate_area = lambda length, width: length * width\n\nprint(calculate_area(10, 5))"
        },
        {
          "type": "text",
          "text": "Both produce:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "50"
        },
        {
          "type": "text",
          "text": "Use a normal function when the logic becomes complex or requires multiple statements."
        },
        {
          "type": "text",
          "text": "Use a lambda function when the operation is short and straightforward."
        },
        {
          "type": "heading",
          "text": "5. Lambda Functions with Conditional Expressions"
        },
        {
          "type": "text",
          "text": "Lambda functions can also contain conditional expressions."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "check_age = lambda age: \"Adult\" if age >= 18 else \"Minor\"\n\nprint(check_age(20))\nprint(check_age(15))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Adult\nMinor"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "age >= 18"
        },
        {
          "type": "text",
          "text": "Checks whether the supplied age is at least 18."
        },
        {
          "type": "code",
          "language": "python",
          "code": "\"Adult\" if age >= 18 else \"Minor\""
        },
        {
          "type": "text",
          "text": "Returns `\"Adult\"` if the condition is true and `\"Minor\"` otherwise."
        },
        {
          "type": "text",
          "text": "**Important:** The conditional expression is different from writing a normal multi-line `if` statement."
        },
        {
          "type": "heading",
          "text": "6. Lambda Functions Inside Other Functions"
        },
        {
          "type": "text",
          "text": "Lambda functions can be returned from other functions."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def create_multiplier(number):\n\n    return lambda value: value * number\n\n\ndouble = create_multiplier(2)\n\ntriple = create_multiplier(3)\n\nprint(double(5))\nprint(triple(5))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "10\n15"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def create_multiplier(number):"
        },
        {
          "type": "text",
          "text": "Defines a normal function that accepts a number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return lambda value: value * number"
        },
        {
          "type": "text",
          "text": "Returns a lambda function that multiplies its argument by the supplied `number`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "double = create_multiplier(2)"
        },
        {
          "type": "text",
          "text": "Creates a multiplier that multiplies values by 2."
        },
        {
          "type": "code",
          "language": "python",
          "code": "triple = create_multiplier(3)"
        },
        {
          "type": "text",
          "text": "Creates another multiplier that multiplies values by 3."
        },
        {
          "type": "text",
          "text": "This example also demonstrates a **closure**: the returned lambda retains access to the `number` variable from the surrounding function even after that function has finished executing."
        },
        {
          "type": "heading",
          "text": "7. When Should You Use Lambda Functions?"
        },
        {
          "type": "text",
          "text": "Lambda functions are especially useful when:"
        },
        {
          "type": "bullets",
          "items": [
            "Performing simple calculations.",
            "Sorting data using a custom rule.",
            "Filtering records.",
            "Transforming data.",
            "Passing small functions into other functions.",
            "Working with functional programming tools."
          ]
        },
        {
          "type": "text",
          "text": "They are commonly used with Python functions such as:"
        },
        {
          "type": "bullets",
          "items": [
            "`map()`",
            "`filter()`",
            "`sorted()`",
            "`reduce()`"
          ]
        },
        {
          "type": "text",
          "text": "You will learn these in the next parts."
        },
        {
          "type": "heading",
          "text": "Part 1 Summary"
        },
        {
          "type": "text",
          "text": "You should now understand:"
        },
        {
          "type": "numbered",
          "items": [
            "What lambda functions are.",
            "How lambda syntax works.",
            "Lambda functions with different arguments.",
            "The difference between `def` and `lambda`.",
            "Conditional expressions in lambda functions.",
            "Returning lambda functions from other functions.",
            "What closures are."
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
      "title": "PART 2 OF 4: INTRODUCTION TO FUNCTIONAL PROGRAMMING",
      "description": "Part 2 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 2 OF 4: INTRODUCTION TO FUNCTIONAL PROGRAMMING"
        },
        {
          "type": "heading",
          "text": "1. What Is Functional Programming?"
        },
        {
          "type": "text",
          "text": "**Functional programming** is a programming approach that emphasizes using functions to process data and produce results."
        },
        {
          "type": "text",
          "text": "Instead of organizing all operations around changing variables and modifying objects, functional programming encourages developers to build smaller functions that transform inputs into outputs."
        },
        {
          "type": "text",
          "text": "For example, imagine you have a list of product prices:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [100, 200, 300, 400]"
        },
        {
          "type": "text",
          "text": "You want to increase every price by 10%."
        },
        {
          "type": "text",
          "text": "One approach is to use a normal loop."
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [100, 200, 300, 400]\n\nupdated_prices = []\n\nfor price in prices:\n\n    new_price = price * 1.10\n\n    updated_prices.append(new_price)\n\n\nprint(updated_prices)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[110.00000000000001, 220.00000000000003, 330.0, 440.00000000000006]"
        },
        {
          "type": "text",
          "text": "Another approach is to use functional programming tools."
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [100, 200, 300, 400]\n\nupdated_prices = list(map(lambda price: price * 1.10, prices))\n\nprint(updated_prices)"
        },
        {
          "type": "text",
          "text": "The result is mathematically the same, although floating-point calculations can display small precision differences."
        },
        {
          "type": "text",
          "text": "The second example uses:"
        },
        {
          "type": "bullets",
          "items": [
            "A lambda function.",
            "The `map()` function.",
            "A functional approach to transforming data."
          ]
        },
        {
          "type": "heading",
          "text": "2. Main Principles of Functional Programming"
        },
        {
          "type": "text",
          "text": "Functional programming is associated with several important principles."
        },
        {
          "type": "heading",
          "text": "A. Pure Functions"
        },
        {
          "type": "text",
          "text": "A pure function is a function that:"
        },
        {
          "type": "numbered",
          "items": [
            "Produces the same output when given the same input.",
            "Does not produce external side effects."
          ]
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add(a, b):\n    return a + b\n\n\nprint(add(10, 5))\nprint(add(10, 5))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "15\n15"
        },
        {
          "type": "text",
          "text": "The same inputs always produce the same result."
        },
        {
          "type": "text",
          "text": "This is a pure function."
        },
        {
          "type": "text",
          "text": "Now consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "total = 0\n\n\ndef add_to_total(number):\n\n    global total\n\n    total += number\n\n    return total"
        },
        {
          "type": "text",
          "text": "This function changes a variable outside itself."
        },
        {
          "type": "text",
          "text": "Its output depends on the previous value of `total`."
        },
        {
          "type": "text",
          "text": "Therefore, it is not a pure function."
        },
        {
          "type": "heading",
          "text": "B. Immutability"
        },
        {
          "type": "text",
          "text": "Immutability means that data is not modified after it has been created."
        },
        {
          "type": "text",
          "text": "In functional programming, developers often prefer creating new results instead of changing existing data."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [100, 200, 300]\n\nupdated_prices = [price * 2 for price in prices]\n\nprint(\"Original:\", prices)\n\nprint(\"Updated:\", updated_prices)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Original: [100, 200, 300]\nUpdated: [200, 400, 600]"
        },
        {
          "type": "text",
          "text": "The original list remains unchanged."
        },
        {
          "type": "text",
          "text": "The new list contains the updated prices."
        },
        {
          "type": "text",
          "text": "**Important:** Python does not force all data to be immutable. Lists and dictionaries are mutable. Functional programming encourages careful management of changes rather than prohibiting them completely."
        },
        {
          "type": "heading",
          "text": "C. Higher-Order Functions"
        },
        {
          "type": "text",
          "text": "A higher-order function is a function that:"
        },
        {
          "type": "bullets",
          "items": [
            "Accepts another function as an argument.",
            "Returns another function.",
            "Or does both."
          ]
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate(function, number):\n\n    return function(number)\n\n\nsquare = lambda value: value ** 2\n\nresult = calculate(square, 5)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "25"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate(function, number):"
        },
        {
          "type": "text",
          "text": "Defines a function that accepts another function and a number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return function(number)"
        },
        {
          "type": "text",
          "text": "Executes the supplied function using the supplied number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "square = lambda value: value ** 2"
        },
        {
          "type": "text",
          "text": "Creates a function that calculates squares."
        },
        {
          "type": "code",
          "language": "python",
          "code": "calculate(square, 5)"
        },
        {
          "type": "text",
          "text": "Passes the square function and the number 5 into `calculate()`."
        },
        {
          "type": "text",
          "text": "This demonstrates a higher-order function."
        },
        {
          "type": "heading",
          "text": "D. Function Composition"
        },
        {
          "type": "text",
          "text": "Function composition means combining multiple functions so that the output of one function becomes the input of another."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def double(number):\n    return number * 2\n\n\ndef add_ten(number):\n    return number + 10\n\n\nresult = add_ten(double(5))\n\nprint(result)"
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
          "text": "Explanation:"
        },
        {
          "type": "numbered",
          "items": [
            "`double(5)` produces `10`.",
            "`add_ten(10)` produces `20`.",
            "The final result is `20`."
          ]
        },
        {
          "type": "text",
          "text": "Function composition helps developers build larger operations from smaller reusable functions."
        },
        {
          "type": "heading",
          "text": "3. The `map()` Function"
        },
        {
          "type": "text",
          "text": "The `map()` function applies a function to every item in an iterable."
        },
        {
          "type": "text",
          "text": "General syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "map(function, iterable)"
        },
        {
          "type": "text",
          "text": "It returns a map iterator, which produces transformed values when requested."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5]\n\nsquares = map(lambda number: number ** 2, numbers)\n\nprint(list(squares))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[1, 4, 9, 16, 25]"
        },
        {
          "type": "text",
          "text": "Let's understand the code."
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5]"
        },
        {
          "type": "text",
          "text": "Creates a list of numbers."
        },
        {
          "type": "code",
          "language": "python",
          "code": "lambda number: number ** 2"
        },
        {
          "type": "text",
          "text": "Creates a function that calculates the square of a number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "map(..., numbers)"
        },
        {
          "type": "text",
          "text": "Applies that function to each number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "list(squares)"
        },
        {
          "type": "text",
          "text": "Consumes the map iterator and converts its results into a list."
        },
        {
          "type": "heading",
          "text": "Practical Example: Converting Temperatures"
        },
        {
          "type": "text",
          "text": "Suppose you have temperatures in Celsius:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "temperatures = [0, 10, 20, 30, 40]"
        },
        {
          "type": "text",
          "text": "You want to convert them into Fahrenheit."
        },
        {
          "type": "text",
          "text": "The formula is:"
        },
        {
          "type": "text",
          "text": "`F = (C × 9/5) + 32`"
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "temperatures = [0, 10, 20, 30, 40]\n\nfahrenheit = map(\n    lambda celsius: (celsius * 9/5) + 32,\n    temperatures\n)\n\nprint(list(fahrenheit))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[32.0, 50.0, 68.0, 86.0, 104.0]"
        },
        {
          "type": "text",
          "text": "The `map()` function applies the conversion to every temperature."
        },
        {
          "type": "heading",
          "text": "Using `map()` with Multiple Iterables"
        },
        {
          "type": "text",
          "text": "`map()` can also accept multiple iterables."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers_a = [10, 20, 30]\n\nnumbers_b = [1, 2, 3]\n\nresults = map(lambda a, b: a + b, numbers_a, numbers_b)\n\nprint(list(results))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[11, 22, 33]"
        },
        {
          "type": "text",
          "text": "Python combines corresponding elements:"
        },
        {
          "type": "bullets",
          "items": [
            "10 + 1 = 11",
            "20 + 2 = 22",
            "30 + 3 = 33"
          ]
        },
        {
          "type": "text",
          "text": "When multiple iterables have different lengths, `map()` stops when the shortest iterable is exhausted."
        },
        {
          "type": "heading",
          "text": "4. The `filter()` Function"
        },
        {
          "type": "text",
          "text": "The `filter()` function selects items from an iterable based on a condition."
        },
        {
          "type": "text",
          "text": "General syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "filter(function, iterable)"
        },
        {
          "type": "text",
          "text": "The function should return `True` or `False`."
        },
        {
          "type": "text",
          "text": "Items for which the function returns `True` are included."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5, 6, 7, 8]\n\neven_numbers = filter(\n    lambda number: number % 2 == 0,\n    numbers\n)\n\nprint(list(even_numbers))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[2, 4, 6, 8]"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number % 2 == 0"
        },
        {
          "type": "text",
          "text": "Checks whether a number is divisible by 2."
        },
        {
          "type": "text",
          "text": "If the condition is true, the number is selected."
        },
        {
          "type": "text",
          "text": "If the condition is false, the number is ignored."
        },
        {
          "type": "heading",
          "text": "Practical Example: Filtering Students Who Passed"
        },
        {
          "type": "text",
          "text": "Imagine a student management system containing student marks."
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [45, 70, 85, 32, 90, 55]\n\npassed = filter(lambda mark: mark >= 50, marks)\n\nprint(list(passed))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[70, 85, 90, 55]"
        },
        {
          "type": "text",
          "text": "The filter selects marks that are at least 50."
        },
        {
          "type": "heading",
          "text": "Filtering Products"
        },
        {
          "type": "code",
          "language": "python",
          "code": "products = [\n    {\"name\": \"Laptop\", \"price\": 65000},\n    {\"name\": \"Mouse\", \"price\": 1200},\n    {\"name\": \"Keyboard\", \"price\": 2500},\n    {\"name\": \"Monitor\", \"price\": 18000}\n]\n\naffordable_products = filter(\n    lambda product: product[\"price\"] < 10000,\n    products\n)\n\nprint(list(affordable_products))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[\n    {'name': 'Mouse', 'price': 1200},\n    {'name': 'Keyboard', 'price': 2500}\n]"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`products` stores dictionaries representing products.",
            "Each dictionary contains a product name and price.",
            "`lambda product` receives one dictionary at a time.",
            "`product[\"price\"] < 10000` checks its price.",
            "`filter()` keeps products that satisfy the condition.",
            "`list()` displays the selected products."
          ]
        },
        {
          "type": "text",
          "text": "This is useful in marketplaces and shopping applications."
        },
        {
          "type": "heading",
          "text": "5. The `reduce()` Function"
        },
        {
          "type": "text",
          "text": "The `reduce()` function repeatedly combines elements of an iterable to produce one final result."
        },
        {
          "type": "text",
          "text": "Unlike `map()`, which transforms individual elements, and `filter()`, which selects elements, `reduce()` combines elements."
        },
        {
          "type": "text",
          "text": "It is available through Python's `functools` module."
        },
        {
          "type": "text",
          "text": "Import it:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import reduce"
        },
        {
          "type": "text",
          "text": "General syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "reduce(function, iterable)"
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5]\n\ntotal = reduce(lambda a, b: a + b, numbers)\n\nprint(total)"
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
          "text": "Let's understand what happens."
        },
        {
          "type": "text",
          "text": "The first two numbers are combined:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1 + 2 = 3"
        },
        {
          "type": "text",
          "text": "The result is combined with the next number:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "3 + 3 = 6"
        },
        {
          "type": "text",
          "text": "Then:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "6 + 4 = 10"
        },
        {
          "type": "text",
          "text": "Finally:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "10 + 5 = 15"
        },
        {
          "type": "text",
          "text": "The final result is 15."
        },
        {
          "type": "heading",
          "text": "Practical Example: Calculating Total Shopping Cost"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import reduce\n\nprices = [1000, 2500, 1500, 3000]\n\ntotal = reduce(\n    lambda first, second: first + second,\n    prices\n)\n\nprint(\"Total:\", total)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Total: 8000"
        },
        {
          "type": "text",
          "text": "The function combines all product prices into one total."
        },
        {
          "type": "heading",
          "text": "Using an Initial Value"
        },
        {
          "type": "text",
          "text": "`reduce()` can also receive an initial value."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import reduce\n\nnumbers = [1, 2, 3, 4]\n\ntotal = reduce(\n    lambda a, b: a + b,\n    numbers,\n    100\n)\n\nprint(total)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "110"
        },
        {
          "type": "text",
          "text": "The calculation starts with 100:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "100 + 1 + 2 + 3 + 4 = 110"
        },
        {
          "type": "heading",
          "text": "6. Comparing `map()`, `filter()` and `reduce()`"
        },
        {
          "type": "table",
          "columns": [
            "Function",
            "Purpose",
            "Result"
          ],
          "rows": [
            [
              "`map()`",
              "Transforms each item",
              "Iterator of transformed values"
            ],
            [
              "`filter()`",
              "Selects items based on a condition",
              "Iterator of selected values"
            ],
            [
              "`reduce()`",
              "Combines items into one result",
              "A final accumulated value"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Think about a student management system:"
        },
        {
          "type": "bullets",
          "items": [
            "`map()` can calculate grades or convert marks.",
            "`filter()` can select students who passed.",
            "`reduce()` can calculate the total marks of all students."
          ]
        },
        {
          "type": "heading",
          "text": "Part 2 Summary"
        },
        {
          "type": "text",
          "text": "You should now understand:"
        },
        {
          "type": "numbered",
          "items": [
            "What functional programming is.",
            "Pure functions.",
            "Immutability.",
            "Higher-order functions.",
            "Function composition.",
            "The `map()` function.",
            "The `filter()` function.",
            "The `reduce()` function.",
            "The difference between transforming, filtering and combining data."
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
      "title": "PART 3 OF 4: PRACTICAL APPLICATIONS OF LAMBDA FUNCTIONS AND FUNCTIONAL PROGRAMMING",
      "description": "Part 3 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 3 OF 4: PRACTICAL APPLICATIONS OF LAMBDA FUNCTIONS AND FUNCTIONAL PROGRAMMING"
        },
        {
          "type": "text",
          "text": "In this section, you will build practical programs similar to those used in software development."
        },
        {
          "type": "heading",
          "text": "1. Setting Up Your Project"
        },
        {
          "type": "text",
          "text": "Create a folder:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "functional_programming_project/\n│\n└── main.py"
        },
        {
          "type": "text",
          "text": "Open the folder in Visual Studio Code."
        },
        {
          "type": "text",
          "text": "All the examples in this section can be tested in `main.py`."
        },
        {
          "type": "heading",
          "text": "2. Practical Example One: Sorting Students by Marks"
        },
        {
          "type": "text",
          "text": "Imagine you are developing a student management system."
        },
        {
          "type": "text",
          "text": "You have a list of students and their marks."
        },
        {
          "type": "text",
          "text": "You want to arrange them from the highest mark to the lowest."
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\n    {\"name\": \"Brian\", \"marks\": 78},\n    {\"name\": \"Mary\", \"marks\": 92},\n    {\"name\": \"John\", \"marks\": 65},\n    {\"name\": \"Peter\", \"marks\": 85}\n]\n\nsorted_students = sorted(\n    students,\n    key=lambda student: student[\"marks\"],\n    reverse=True\n)\n\nfor student in sorted_students:\n\n    print(student[\"name\"], student[\"marks\"])"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Mary 92\nPeter 85\nBrian 78\nJohn 65"
        },
        {
          "type": "heading",
          "text": "Understanding the code"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [...]"
        },
        {
          "type": "text",
          "text": "Creates a list of dictionaries."
        },
        {
          "type": "text",
          "text": "Each dictionary represents one student."
        },
        {
          "type": "code",
          "language": "python",
          "code": "sorted(...)"
        },
        {
          "type": "text",
          "text": "The built-in `sorted()` function creates a new sorted list."
        },
        {
          "type": "text",
          "text": "It does not modify the original list."
        },
        {
          "type": "code",
          "language": "python",
          "code": "key=lambda student: student[\"marks\"]"
        },
        {
          "type": "text",
          "text": "Tells Python which value should determine the sorting order."
        },
        {
          "type": "text",
          "text": "The lambda function retrieves the student's marks."
        },
        {
          "type": "code",
          "language": "python",
          "code": "reverse=True"
        },
        {
          "type": "text",
          "text": "Arranges the results in descending order."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for student in sorted_students:"
        },
        {
          "type": "text",
          "text": "Loops through the sorted students."
        },
        {
          "type": "text",
          "text": "This technique is useful in:"
        },
        {
          "type": "bullets",
          "items": [
            "School management systems.",
            "Examination result systems.",
            "Leaderboards.",
            "Ranking applications."
          ]
        },
        {
          "type": "heading",
          "text": "3. Practical Example Two: Product Management Using `map()` and `filter()`"
        },
        {
          "type": "text",
          "text": "Imagine you are developing an online marketplace."
        },
        {
          "type": "text",
          "text": "The system stores products and their prices."
        },
        {
          "type": "text",
          "text": "You want to:"
        },
        {
          "type": "numbered",
          "items": [
            "Select products costing less than KSh 10,000.",
            "Increase their prices by 5%.",
            "Display the updated products."
          ]
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "products = [\n    {\"name\": \"Laptop\", \"price\": 65000},\n    {\"name\": \"Mouse\", \"price\": 1200},\n    {\"name\": \"Keyboard\", \"price\": 2500},\n    {\"name\": \"Monitor\", \"price\": 18000}\n]\n\n\naffordable = filter(\n    lambda product: product[\"price\"] < 10000,\n    products\n)\n\n\nupdated_products = map(\n    lambda product: {\n        \"name\": product[\"name\"],\n        \"price\": product[\"price\"] * 1.05\n    },\n    affordable\n)\n\n\nfor product in updated_products:\n\n    print(product)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "{'name': 'Mouse', 'price': 1260.0}\n{'name': 'Keyboard', 'price': 2625.0}"
        },
        {
          "type": "heading",
          "text": "Understanding the process"
        },
        {
          "type": "text",
          "text": "**Step 1: Store products**"
        },
        {
          "type": "text",
          "text": "Each product is represented by a dictionary containing its name and price."
        },
        {
          "type": "text",
          "text": "**Step 2: Filter products**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "affordable = filter(\n    lambda product: product[\"price\"] < 10000,\n    products\n)"
        },
        {
          "type": "text",
          "text": "The filter selects products whose prices are below KSh 10,000."
        },
        {
          "type": "text",
          "text": "**Step 3: Transform selected products**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "updated_products = map(\n    lambda product: {\n        \"name\": product[\"name\"],\n        \"price\": product[\"price\"] * 1.05\n    },\n    affordable\n)"
        },
        {
          "type": "text",
          "text": "The map function creates new product dictionaries."
        },
        {
          "type": "text",
          "text": "The product name remains unchanged."
        },
        {
          "type": "text",
          "text": "The price is multiplied by 1.05, increasing it by 5%."
        },
        {
          "type": "text",
          "text": "**Step 4: Display results**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "for product in updated_products:\n    print(product)"
        },
        {
          "type": "text",
          "text": "Retrieves and displays the updated products."
        },
        {
          "type": "text",
          "text": "Notice that the original dictionaries have not been modified."
        },
        {
          "type": "text",
          "text": "This is an example of combining filtering and transformation."
        },
        {
          "type": "heading",
          "text": "4. Practical Example Three: Student Performance Analyzer"
        },
        {
          "type": "text",
          "text": "Let's build a more complete program."
        },
        {
          "type": "text",
          "text": "The application will:"
        },
        {
          "type": "bullets",
          "items": [
            "Store student information.",
            "Calculate average marks.",
            "Select students who passed.",
            "Sort students according to performance.",
            "Calculate the total marks."
          ]
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import reduce\n\n\nstudents = [\n    {\"name\": \"Brian\", \"marks\": [75, 80, 85]},\n    {\"name\": \"Mary\", \"marks\": [90, 95, 88]},\n    {\"name\": \"John\", \"marks\": [40, 45, 50]},\n    {\"name\": \"Peter\", \"marks\": [65, 70, 75]}\n]\n\n\ndef calculate_average(marks):\n\n    total = reduce(lambda a, b: a + b, marks)\n\n    return total / len(marks)\n\n\nstudent_results = map(\n    lambda student: {\n        \"name\": student[\"name\"],\n        \"average\": calculate_average(student[\"marks\"])\n    },\n    students\n)\n\n\nresults = list(student_results)\n\n\npassed_students = filter(\n    lambda student: student[\"average\"] >= 50,\n    results\n)\n\n\npassed_students = sorted(\n    passed_students,\n    key=lambda student: student[\"average\"],\n    reverse=True\n)\n\n\nprint(\"STUDENT PERFORMANCE REPORT\")\n\nfor student in passed_students:\n\n    print(\n        student[\"name\"],\n        \"Average:\",\n        round(student[\"average\"], 2)\n    )"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "STUDENT PERFORMANCE REPORT\nMary Average: 91.0\nBrian Average: 80.0\nPeter Average: 70.0"
        },
        {
          "type": "text",
          "text": "John is not displayed because his average is below 50."
        },
        {
          "type": "heading",
          "text": "Understanding the program"
        },
        {
          "type": "text",
          "text": "**Importing reduce**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import reduce"
        },
        {
          "type": "text",
          "text": "Imports `reduce()` for calculating the sum of marks."
        },
        {
          "type": "text",
          "text": "**Student information**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [...]"
        },
        {
          "type": "text",
          "text": "Stores four students."
        },
        {
          "type": "text",
          "text": "Each student has:"
        },
        {
          "type": "bullets",
          "items": [
            "A name.",
            "A list of marks."
          ]
        },
        {
          "type": "text",
          "text": "**Calculating averages**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate_average(marks):"
        },
        {
          "type": "text",
          "text": "Defines a function that accepts a list of marks."
        },
        {
          "type": "code",
          "language": "python",
          "code": "total = reduce(lambda a, b: a + b, marks)"
        },
        {
          "type": "text",
          "text": "Adds all the marks together."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return total / len(marks)"
        },
        {
          "type": "text",
          "text": "Divides the total by the number of marks."
        },
        {
          "type": "text",
          "text": "**Transforming student information**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student_results = map(...)"
        },
        {
          "type": "text",
          "text": "Applies a transformation to every student."
        },
        {
          "type": "text",
          "text": "The lambda function creates a new dictionary containing:"
        },
        {
          "type": "bullets",
          "items": [
            "The student's name.",
            "Their calculated average."
          ]
        },
        {
          "type": "text",
          "text": "**Converting the results into a list**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "results = list(student_results)"
        },
        {
          "type": "text",
          "text": "Consumes the map iterator and stores its results in a list."
        },
        {
          "type": "text",
          "text": "**Filtering students**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "passed_students = filter(...)"
        },
        {
          "type": "text",
          "text": "Selects students whose averages are at least 50."
        },
        {
          "type": "text",
          "text": "**Sorting the students**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "passed_students = sorted(...)"
        },
        {
          "type": "text",
          "text": "Arranges students according to their average marks."
        },
        {
          "type": "text",
          "text": "`reverse=True` places the highest average first."
        },
        {
          "type": "text",
          "text": "**Displaying the report**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "round(student[\"average\"], 2)"
        },
        {
          "type": "text",
          "text": "Rounds each average to two decimal places."
        },
        {
          "type": "text",
          "text": "This program demonstrates how several functional programming tools can work together."
        },
        {
          "type": "heading",
          "text": "5. Practical Example Four: Processing Online Orders"
        },
        {
          "type": "text",
          "text": "Imagine you are developing an online shopping platform."
        },
        {
          "type": "text",
          "text": "The application receives customer orders."
        },
        {
          "type": "text",
          "text": "You want to calculate the total value of completed orders."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import reduce\n\n\norders = [\n    {\"order_id\": 101, \"amount\": 1500, \"status\": \"completed\"},\n    {\"order_id\": 102, \"amount\": 2500, \"status\": \"pending\"},\n    {\"order_id\": 103, \"amount\": 3000, \"status\": \"completed\"},\n    {\"order_id\": 104, \"amount\": 1000, \"status\": \"completed\"}\n]\n\n\ncompleted_orders = filter(\n    lambda order: order[\"status\"] == \"completed\",\n    orders\n)\n\n\norder_amounts = map(\n    lambda order: order[\"amount\"],\n    completed_orders\n)\n\n\ntotal_revenue = reduce(\n    lambda a, b: a + b,\n    order_amounts,\n    0\n)\n\n\nprint(\"Completed order revenue:\", total_revenue)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Completed order revenue: 5500"
        },
        {
          "type": "heading",
          "text": "How the program works"
        },
        {
          "type": "numbered",
          "items": [
            "`orders` stores customer orders.",
            "`filter()` selects completed orders.",
            "`map()` extracts the amount from each completed order.",
            "`reduce()` adds the extracted amounts.",
            "`print()` displays the total."
          ]
        },
        {
          "type": "text",
          "text": "The pending order worth KSh 2,500 is excluded."
        },
        {
          "type": "text",
          "text": "**Real-world application:** This approach can be used in reporting systems, sales analytics and order management."
        },
        {
          "type": "text",
          "text": "For real financial systems, money should normally be represented using `decimal.Decimal` rather than binary floating-point numbers."
        },
        {
          "type": "heading",
          "text": "6. Practical Example Five: Combining Function Composition"
        },
        {
          "type": "text",
          "text": "Let's say you want to process a customer's name before saving it."
        },
        {
          "type": "text",
          "text": "The application should:"
        },
        {
          "type": "numbered",
          "items": [
            "Remove unnecessary spaces.",
            "Convert the name to uppercase.",
            "Add a welcome message."
          ]
        },
        {
          "type": "text",
          "text": "You can create separate functions."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def clean_name(name):\n\n    return name.strip()\n\n\ndef uppercase_name(name):\n\n    return name.upper()\n\n\ndef welcome_user(name):\n\n    return f\"Welcome, {name}!\"\n\n\nname = \"  brian njogu  \"\n\ncleaned = clean_name(name)\n\nformatted = uppercase_name(cleaned)\n\nmessage = welcome_user(formatted)\n\nprint(message)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Welcome, BRIAN NJOGU!"
        },
        {
          "type": "text",
          "text": "Each function performs one specific operation."
        },
        {
          "type": "text",
          "text": "This makes the application easier to maintain and test."
        },
        {
          "type": "text",
          "text": "You can also compose the functions:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = \"  brian njogu  \"\n\nmessage = welcome_user(\n    uppercase_name(\n        clean_name(name)\n    )\n)\n\nprint(message)"
        },
        {
          "type": "text",
          "text": "The operations happen from the innermost function outward."
        },
        {
          "type": "numbered",
          "items": [
            "`clean_name()` removes surrounding spaces.",
            "`uppercase_name()` converts the result to uppercase.",
            "`welcome_user()` creates the greeting."
          ]
        },
        {
          "type": "heading",
          "text": "7. Practical Example Six: Functional Programming with `any()` and `all()`"
        },
        {
          "type": "text",
          "text": "Python also provides useful functions for evaluating conditions across collections."
        },
        {
          "type": "heading",
          "text": "The `any()` Function"
        },
        {
          "type": "text",
          "text": "`any()` returns `True` if at least one item in an iterable is true."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [30, 45, 80, 25]\n\nhas_passed = any(mark >= 50 for mark in marks)\n\nprint(has_passed)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "True"
        },
        {
          "type": "text",
          "text": "At least one student scored 50 or above."
        },
        {
          "type": "heading",
          "text": "The `all()` Function"
        },
        {
          "type": "text",
          "text": "`all()` returns `True` only if every item in an iterable is true."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [70, 80, 65, 90]\n\nall_passed = all(mark >= 50 for mark in marks)\n\nprint(all_passed)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "True"
        },
        {
          "type": "text",
          "text": "Every student scored at least 50."
        },
        {
          "type": "text",
          "text": "If one mark were below 50, the result would be `False`."
        },
        {
          "type": "text",
          "text": "These functions are useful for:"
        },
        {
          "type": "bullets",
          "items": [
            "Validating user inputs.",
            "Checking application conditions.",
            "Evaluating student results.",
            "Verifying records."
          ]
        },
        {
          "type": "heading",
          "text": "8. Common Mistakes"
        },
        {
          "type": "heading",
          "text": "Mistake 1: Trying to use multiple statements inside a lambda"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "calculate = lambda number:\n    result = number * 2\n    return result"
        },
        {
          "type": "text",
          "text": "This is invalid syntax."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "calculate = lambda number: number * 2"
        },
        {
          "type": "text",
          "text": "For multiple statements, use a normal function."
        },
        {
          "type": "heading",
          "text": "Mistake 2: Forgetting that `map()` returns an iterator"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3]\n\nresult = map(lambda number: number * 2, numbers)\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "This displays a map object rather than the transformed values."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(list(result))"
        },
        {
          "type": "heading",
          "text": "Mistake 3: Confusing `map()` and `filter()`"
        },
        {
          "type": "text",
          "text": "`map()` transforms values."
        },
        {
          "type": "text",
          "text": "`filter()` selects values."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4]\n\ndoubled = map(lambda number: number * 2, numbers)\n\neven = filter(lambda number: number % 2 == 0, numbers)\n\nprint(list(doubled))\nprint(list(even))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[2, 4, 6, 8]\n[2, 4]"
        },
        {
          "type": "heading",
          "text": "Mistake 4: Forgetting to import `reduce()`"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "total = reduce(lambda a, b: a + b, [1, 2, 3])"
        },
        {
          "type": "text",
          "text": "This produces a `NameError` if `reduce` has not been defined or imported."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from functools import reduce"
        },
        {
          "type": "heading",
          "text": "Mistake 5: Writing complicated lambda functions"
        },
        {
          "type": "text",
          "text": "Lambda functions are designed for short expressions."
        },
        {
          "type": "text",
          "text": "If your logic requires multiple statements, error handling or complex conditions, use a normal function."
        },
        {
          "type": "text",
          "text": "Readable code is more important than using lambda everywhere."
        },
        {
          "type": "heading",
          "text": "9. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete the following exercises in your project."
        },
        {
          "type": "text",
          "text": "**Exercise 1: Square Numbers**"
        },
        {
          "type": "text",
          "text": "Create a lambda function that accepts a number and returns its square."
        },
        {
          "type": "text",
          "text": "Test it with 4, 7 and 10."
        },
        {
          "type": "text",
          "text": "**Exercise 2: Even Numbers**"
        },
        {
          "type": "text",
          "text": "Use `filter()` to select even numbers from:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [12, 15, 18, 21, 24, 27, 30]"
        },
        {
          "type": "text",
          "text": "**Exercise 3: Convert Prices**"
        },
        {
          "type": "text",
          "text": "Use `map()` to increase these prices by 15%:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [1000, 2000, 3000, 4000]"
        },
        {
          "type": "text",
          "text": "**Exercise 4: Calculate Total**"
        },
        {
          "type": "text",
          "text": "Use `reduce()` to calculate the sum of:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [10, 20, 30, 40, 50]"
        },
        {
          "type": "text",
          "text": "**Exercise 5: Sort Students**"
        },
        {
          "type": "text",
          "text": "Use `sorted()` and a lambda function to arrange students according to their marks, from highest to lowest."
        },
        {
          "type": "text",
          "text": "**Exercise 6: Product Filtering**"
        },
        {
          "type": "text",
          "text": "Create a list of products and use `filter()` to select products costing less than KSh 5,000."
        },
        {
          "type": "text",
          "text": "**Exercise 7: Student Performance**"
        },
        {
          "type": "text",
          "text": "Build a program that:"
        },
        {
          "type": "bullets",
          "items": [
            "Stores student names and marks.",
            "Calculates their averages.",
            "Selects students who passed.",
            "Sorts the passed students by average marks.",
            "Displays the results."
          ]
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
          "text": "You have completed the lesson on Lambda Functions and Functional Programming."
        },
        {
          "type": "text",
          "text": "Now it is time to test your understanding."
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
          "question": "What is a lambda function in Python?",
          "options": [
            "A. A function that creates a database.",
            "B. A small anonymous function defined using the `lambda` keyword.",
            "C. A function that only works with strings.",
            "D. A function that automatically creates classes."
          ],
          "answer": "B. A small anonymous function defined using the `lambda` keyword.",
          "explanation": "Use the lambda or functional-programming rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 2"
        },
        {
          "type": "quiz",
          "question": "Which function applies another function to every item in an iterable?",
          "options": [
            "A. `filter()`",
            "B. `reduce()`",
            "C. `map()`",
            "D. `sorted()`"
          ],
          "answer": "C. `map()`",
          "explanation": "Use the lambda or functional-programming rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 3"
        },
        {
          "type": "quiz",
          "question": "What does the `filter()` function do?",
          "options": [
            "A. Changes every item.",
            "B. Selects items based on a condition.",
            "C. Adds all numbers together.",
            "D. Sorts a list alphabetically."
          ],
          "answer": "B. Selects items based on a condition.",
          "explanation": "Use the lambda or functional-programming rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 4"
        },
        {
          "type": "quiz",
          "question": "Which module provides the `reduce()` function?",
          "options": [
            "A. `math`",
            "B. `random`",
            "C. `functools`",
            "D. `datetime`"
          ],
          "answer": "C. `functools`",
          "explanation": "Use the lambda or functional-programming rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
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
          "text": "Explain the difference between `map()`, `filter()` and `reduce()`."
        },
        {
          "type": "text",
          "text": "Give one practical example of each."
        },
        {
          "type": "heading",
          "text": "Question 6"
        },
        {
          "type": "text",
          "text": "What is a pure function?"
        },
        {
          "type": "text",
          "text": "Explain why pure functions are useful when developing software."
        },
        {
          "type": "heading",
          "text": "SECTION C: PRACTICAL PROGRAMMING"
        },
        {
          "type": "heading",
          "text": "Question 7: Student Marks"
        },
        {
          "type": "text",
          "text": "Given:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [45, 60, 75, 30, 90, 55, 40]"
        },
        {
          "type": "text",
          "text": "Write a Python program that:"
        },
        {
          "type": "numbered",
          "items": [
            "Uses `filter()` to select students who passed.",
            "Uses `map()` to add 5 marks to every selected mark.",
            "Uses `sorted()` to arrange the updated marks from highest to lowest.",
            "Displays the results."
          ]
        },
        {
          "type": "heading",
          "text": "Question 8: Shopping Application"
        },
        {
          "type": "text",
          "text": "Create a program using a list of product dictionaries."
        },
        {
          "type": "text",
          "text": "Each product should contain:"
        },
        {
          "type": "bullets",
          "items": [
            "Product name.",
            "Price.",
            "Quantity."
          ]
        },
        {
          "type": "text",
          "text": "Your program must:"
        },
        {
          "type": "numbered",
          "items": [
            "Use `map()` to calculate the total value of each product (`price × quantity`).",
            "Use `filter()` to select products whose total value exceeds KSh 5,000.",
            "Use `reduce()` to calculate the combined value of the selected products.",
            "Display the selected products and their combined value."
          ]
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
            "Review your Python programs.",
            "Identify syntax and logical errors.",
            "Explain why incorrect answers are wrong.",
            "Provide corrected code where necessary.",
            "Give you an overall assessment.",
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
            "[ ] Explain what lambda functions are.",
            "[ ] Create lambda functions with different arguments.",
            "[ ] Distinguish between `def` and `lambda`.",
            "[ ] Explain pure functions.",
            "[ ] Understand immutability.",
            "[ ] Explain higher-order functions.",
            "[ ] Understand function composition.",
            "[ ] Use `map()` to transform data.",
            "[ ] Use `filter()` to select data.",
            "[ ] Use `reduce()` to combine data.",
            "[ ] Sort collections using lambda functions.",
            "[ ] Apply functional programming to practical software projects."
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
          "text": "**Python: Regular Expressions (RegEx)**"
        },
        {
          "type": "text",
          "text": "Regular expressions will introduce pattern matching in Python. You will learn how to search, validate, extract and replace text, including email addresses, phone numbers, passwords and other structured information."
        }
      ]
    }
  ]
};

export default delivery;
