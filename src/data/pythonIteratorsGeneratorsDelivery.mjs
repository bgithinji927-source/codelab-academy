const delivery = {
  "type": "authored",
  "version": 1,
  "intro": "PYTHON: ITERATORS AND GENERATORS",
  "sections": [
    {
      "id": "python-file-handling-part-1",
      "title": "PART 1 OF 4: INTRODUCTION TO ITERATORS",
      "description": "Part 1 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 1 OF 4: INTRODUCTION TO ITERATORS"
        },
        {
          "type": "heading",
          "text": "1. What Are Iterators?"
        },
        {
          "type": "text",
          "text": "An **iterator** is an object in Python that allows you to access elements from a collection one at a time."
        },
        {
          "type": "text",
          "text": "For example, imagine you have a list of students:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\"Brian\", \"John\", \"Mary\", \"Peter\"]"
        },
        {
          "type": "text",
          "text": "You can access each student individually using their index:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(students[0])\nprint(students[1])\nprint(students[2])"
        },
        {
          "type": "text",
          "text": "However, Python provides a more flexible way of accessing elements one at a time: iterators."
        },
        {
          "type": "text",
          "text": "An iterator remembers its current position and knows how to retrieve the next item."
        },
        {
          "type": "heading",
          "text": "2. What Is an Iterable?"
        },
        {
          "type": "text",
          "text": "Before understanding iterators, you need to understand **iterables**."
        },
        {
          "type": "text",
          "text": "An iterable is an object that Python can loop through."
        },
        {
          "type": "text",
          "text": "Examples include:"
        },
        {
          "type": "bullets",
          "items": [
            "Lists",
            "Tuples",
            "Strings",
            "Dictionaries",
            "Sets",
            "Files"
          ]
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nfor fruit in fruits:\n    print(fruit)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Apple\nBanana\nOrange"
        },
        {
          "type": "text",
          "text": "Here is what happens:"
        },
        {
          "type": "numbered",
          "items": [
            "Python receives the `fruits` list.",
            "It obtains an iterator from the list.",
            "The iterator provides the first fruit.",
            "Python executes the loop body.",
            "The iterator provides the next fruit.",
            "This continues until there are no more elements."
          ]
        },
        {
          "type": "text",
          "text": "The important difference:"
        },
        {
          "type": "table",
          "columns": [
            "Iterable",
            "Iterator"
          ],
          "rows": [
            [
              "An object that can provide an iterator",
              "An object that produces values one at a time"
            ],
            [
              "Examples: list, tuple, string",
              "Examples: objects returned by `iter()`"
            ],
            [
              "Can usually be looped through repeatedly",
              "Remembers its current position"
            ],
            [
              "Does not necessarily track iteration progress",
              "Tracks iteration progress"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "3. The `iter()` Function"
        },
        {
          "type": "text",
          "text": "Python provides a built-in function called `iter()`."
        },
        {
          "type": "text",
          "text": "It converts an iterable into an iterator."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [10, 20, 30, 40]\n\nnumber_iterator = iter(numbers)\n\nprint(number_iterator)"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`numbers` creates a list containing four numbers.",
            "`iter(numbers)` obtains an iterator from the list.",
            "`number_iterator` stores that iterator."
          ]
        },
        {
          "type": "text",
          "text": "The output may look similar to:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "<list_iterator object at 0x...>"
        },
        {
          "type": "text",
          "text": "This tells you that Python has created a list iterator."
        },
        {
          "type": "heading",
          "text": "4. The `next()` Function"
        },
        {
          "type": "text",
          "text": "The `next()` function retrieves the next available value from an iterator."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [10, 20, 30, 40]\n\nnumber_iterator = iter(numbers)\n\nprint(next(number_iterator))\nprint(next(number_iterator))\nprint(next(number_iterator))\nprint(next(number_iterator))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "10\n20\n30\n40"
        },
        {
          "type": "text",
          "text": "Understand what happens:"
        },
        {
          "type": "bullets",
          "items": [
            "First `next()` retrieves `10`.",
            "Second `next()` retrieves `20`.",
            "Third `next()` retrieves `30`.",
            "Fourth `next()` retrieves `40`."
          ]
        },
        {
          "type": "text",
          "text": "The iterator remembers where it stopped."
        },
        {
          "type": "text",
          "text": "You do not need to specify an index."
        },
        {
          "type": "heading",
          "text": "5. What Happens When There Are No More Values?"
        },
        {
          "type": "text",
          "text": "What happens if you call `next()` again after retrieving every element?"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [10, 20, 30]\n\nnumber_iterator = iter(numbers)\n\nprint(next(number_iterator))\nprint(next(number_iterator))\nprint(next(number_iterator))\nprint(next(number_iterator))"
        },
        {
          "type": "text",
          "text": "The first three calls work."
        },
        {
          "type": "text",
          "text": "The fourth call produces:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "StopIteration"
        },
        {
          "type": "text",
          "text": "`StopIteration` is an exception that tells Python that the iterator has no more values."
        },
        {
          "type": "text",
          "text": "This is how Python knows when to stop a `for` loop."
        },
        {
          "type": "text",
          "text": "You can handle it using `try` and `except`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [10, 20, 30]\n\nnumber_iterator = iter(numbers)\n\nwhile True:\n    try:\n        number = next(number_iterator)\n        print(number)\n\n    except StopIteration:\n        break"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`iter(numbers)` creates an iterator.",
            "`while True` creates a loop that continues indefinitely unless stopped.",
            "`next(number_iterator)` retrieves the next number.",
            "`print(number)` displays the retrieved number.",
            "`except StopIteration` catches the exception when the iterator is exhausted.",
            "`break` terminates the loop."
          ]
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "10\n20\n30"
        },
        {
          "type": "heading",
          "text": "6. Iterating Through Different Data Types"
        },
        {
          "type": "text",
          "text": "You can create iterators from different iterable objects."
        },
        {
          "type": "text",
          "text": "**Example A: A string**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = \"PYTHON\"\n\nletters = iter(name)\n\nprint(next(letters))\nprint(next(letters))\nprint(next(letters))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "P\nY\nT"
        },
        {
          "type": "text",
          "text": "Each call retrieves one character."
        },
        {
          "type": "text",
          "text": "**Example B: A tuple**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "colors = (\"Red\", \"Green\", \"Blue\")\n\ncolor_iterator = iter(colors)\n\nprint(next(color_iterator))\nprint(next(color_iterator))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Red\nGreen"
        },
        {
          "type": "text",
          "text": "**Example C: A dictionary**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student = {\n    \"name\": \"Brian\",\n    \"course\": \"BBIT\",\n    \"year\": 2\n}\n\nstudent_iterator = iter(student)\n\nprint(next(student_iterator))\nprint(next(student_iterator))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "name\ncourse"
        },
        {
          "type": "text",
          "text": "By default, iterating over a dictionary retrieves its keys."
        },
        {
          "type": "heading",
          "text": "7. Why Are Iterators Important?"
        },
        {
          "type": "text",
          "text": "Iterators are useful when working with data that needs to be processed one item at a time."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "bullets",
          "items": [
            "Reading large files.",
            "Processing database records.",
            "Handling streams of information.",
            "Processing large collections.",
            "Building data-processing applications."
          ]
        },
        {
          "type": "text",
          "text": "Instead of requiring you to manually access every element, iterators provide a standard way of retrieving values sequentially."
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
            "What an iterable is.",
            "What an iterator is.",
            "The difference between iterables and iterators.",
            "How to create an iterator using `iter()`.",
            "How to retrieve values using `next()`.",
            "What `StopIteration` means.",
            "How Python uses iterators inside `for` loops."
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
      "title": "PART 2 OF 4: BUILDING CUSTOM ITERATORS AND UNDERSTANDING GENERATORS",
      "description": "Part 2 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 2 OF 4: BUILDING CUSTOM ITERATORS AND UNDERSTANDING GENERATORS"
        },
        {
          "type": "heading",
          "text": "1. What Is a Custom Iterator?"
        },
        {
          "type": "text",
          "text": "So far, we have used Python's built-in iterators."
        },
        {
          "type": "text",
          "text": "However, Python also allows developers to create their own iterators."
        },
        {
          "type": "text",
          "text": "A custom iterator is an object that defines how values should be produced when someone iterates over it."
        },
        {
          "type": "text",
          "text": "To create a custom iterator, a class normally implements two special methods:"
        },
        {
          "type": "table",
          "columns": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "`__iter__()`",
              "Returns an iterator object"
            ],
            [
              "`__next__()`",
              "Returns the next value"
            ]
          ]
        },
        {
          "type": "text",
          "text": "These methods are part of Python's iterator protocol."
        },
        {
          "type": "heading",
          "text": "2. Creating Your First Custom Iterator"
        },
        {
          "type": "text",
          "text": "Let's create an iterator that returns numbers from 1 to 5."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class CountNumbers:\n\n    def __iter__(self):\n        self.number = 1\n        return self\n\n    def __next__(self):\n\n        if self.number <= 5:\n            current = self.number\n            self.number += 1\n            return current\n\n        else:\n            raise StopIteration\n\n\ncounter = CountNumbers()\n\nfor number in counter:\n    print(number)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1\n2\n3\n4\n5"
        },
        {
          "type": "text",
          "text": "Let's understand every important line."
        },
        {
          "type": "text",
          "text": "**Line 1:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class CountNumbers:"
        },
        {
          "type": "text",
          "text": "Creates a class called `CountNumbers`."
        },
        {
          "type": "text",
          "text": "This class will define our custom iterator."
        },
        {
          "type": "text",
          "text": "**Line 3:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def __iter__(self):"
        },
        {
          "type": "text",
          "text": "Defines the iterator initialization method."
        },
        {
          "type": "text",
          "text": "Python calls this method when it requests an iterator from our object."
        },
        {
          "type": "text",
          "text": "**Line 4:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.number = 1"
        },
        {
          "type": "text",
          "text": "Creates an instance attribute called `number`."
        },
        {
          "type": "text",
          "text": "It starts counting from 1."
        },
        {
          "type": "text",
          "text": "**Line 5:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "return self"
        },
        {
          "type": "text",
          "text": "Returns the current object as the iterator."
        },
        {
          "type": "text",
          "text": "**Line 7:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def __next__(self):"
        },
        {
          "type": "text",
          "text": "Defines how the iterator produces its next value."
        },
        {
          "type": "text",
          "text": "**Line 9:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if self.number <= 5:"
        },
        {
          "type": "text",
          "text": "Checks whether the current number is less than or equal to 5."
        },
        {
          "type": "text",
          "text": "**Line 10:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "current = self.number"
        },
        {
          "type": "text",
          "text": "Stores the current number before changing it."
        },
        {
          "type": "text",
          "text": "**Line 11:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.number += 1"
        },
        {
          "type": "text",
          "text": "Increases the number by one."
        },
        {
          "type": "text",
          "text": "**Line 12:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "return current"
        },
        {
          "type": "text",
          "text": "Returns the stored number to whoever requested the next value."
        },
        {
          "type": "text",
          "text": "**Line 15:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "raise StopIteration"
        },
        {
          "type": "text",
          "text": "Stops iteration when the counter goes beyond 5."
        },
        {
          "type": "text",
          "text": "Finally:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "counter = CountNumbers()"
        },
        {
          "type": "text",
          "text": "Creates an object of our custom iterator class."
        },
        {
          "type": "text",
          "text": "The `for` loop automatically calls the iterator methods to retrieve each number."
        },
        {
          "type": "heading",
          "text": "3. Understanding Generators"
        },
        {
          "type": "text",
          "text": "Now let's introduce another important Python concept: **generators**."
        },
        {
          "type": "text",
          "text": "A generator is a special type of iterator that produces values one at a time."
        },
        {
          "type": "text",
          "text": "Generators make it easier to create iterators without manually implementing `__iter__()` and `__next__()`."
        },
        {
          "type": "text",
          "text": "They are commonly created using:"
        },
        {
          "type": "numbered",
          "items": [
            "Generator functions with `yield`.",
            "Generator expressions."
          ]
        },
        {
          "type": "heading",
          "text": "4. The `yield` Keyword"
        },
        {
          "type": "text",
          "text": "The `yield` keyword is used inside a generator function to produce a value."
        },
        {
          "type": "text",
          "text": "Unlike `return`, which finishes a function, `yield` pauses the function and remembers its execution state."
        },
        {
          "type": "text",
          "text": "When the next value is requested, the function continues from where it stopped."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def generate_numbers():\n\n    yield 1\n    yield 2\n    yield 3\n    yield 4\n    yield 5\n\n\nnumbers = generate_numbers()\n\nprint(next(numbers))\nprint(next(numbers))\nprint(next(numbers))"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1\n2\n3"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "**Line 1:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def generate_numbers():"
        },
        {
          "type": "text",
          "text": "Defines a function called `generate_numbers`."
        },
        {
          "type": "text",
          "text": "**Line 3:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "yield 1"
        },
        {
          "type": "text",
          "text": "Produces the first value, `1`, and pauses the function."
        },
        {
          "type": "text",
          "text": "**Line 4:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "yield 2"
        },
        {
          "type": "text",
          "text": "When another value is requested, execution continues and produces `2`."
        },
        {
          "type": "text",
          "text": "**Line 5:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "yield 3"
        },
        {
          "type": "text",
          "text": "Produces the third value when requested."
        },
        {
          "type": "text",
          "text": "The same process continues for the remaining values."
        },
        {
          "type": "text",
          "text": "**Line 10:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = generate_numbers()"
        },
        {
          "type": "text",
          "text": "Creates a generator object."
        },
        {
          "type": "text",
          "text": "Notice that the function body does not immediately execute all its statements."
        },
        {
          "type": "text",
          "text": "The generator begins producing values when values are requested."
        },
        {
          "type": "heading",
          "text": "5. Difference Between `return` and `yield`"
        },
        {
          "type": "text",
          "text": "This is one of the most important differences to understand."
        },
        {
          "type": "table",
          "columns": [
            "`return`",
            "`yield`"
          ],
          "rows": [
            [
              "Returns a value and ends the function",
              "Produces a value and pauses the function"
            ],
            [
              "Function execution ends",
              "Function execution can continue later"
            ],
            [
              "Usually returns one final result",
              "Can produce multiple values over time"
            ],
            [
              "Does not create a generator by itself",
              "Makes a function a generator function"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Consider these examples."
        },
        {
          "type": "text",
          "text": "Using `return`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def get_numbers():\n    return [1, 2, 3, 4, 5]\n\n\nnumbers = get_numbers()\n\nprint(numbers)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[1, 2, 3, 4, 5]"
        },
        {
          "type": "text",
          "text": "The function creates and returns a list containing all five numbers."
        },
        {
          "type": "text",
          "text": "Using `yield`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def get_numbers():\n\n    yield 1\n    yield 2\n    yield 3\n    yield 4\n    yield 5\n\n\nnumbers = get_numbers()\n\nfor number in numbers:\n    print(number)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1\n2\n3\n4\n5"
        },
        {
          "type": "text",
          "text": "The generator produces values individually as the loop requests them."
        },
        {
          "type": "heading",
          "text": "6. Generator Expressions"
        },
        {
          "type": "text",
          "text": "Python also allows you to create generators using a shorter syntax called a generator expression."
        },
        {
          "type": "text",
          "text": "A generator expression looks similar to a list comprehension, but it uses parentheses instead of square brackets."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "squares = (number ** 2 for number in range(1, 6))\n\nfor square in squares:\n    print(square)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1\n4\n9\n16\n25"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number ** 2"
        },
        {
          "type": "text",
          "text": "Calculates the square of each number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for number in range(1, 6)"
        },
        {
          "type": "text",
          "text": "Produces numbers from 1 to 5."
        },
        {
          "type": "code",
          "language": "python",
          "code": "(...)"
        },
        {
          "type": "text",
          "text": "The parentheses create a generator expression."
        },
        {
          "type": "text",
          "text": "Unlike a list comprehension, this does not immediately create a list containing all the results."
        },
        {
          "type": "heading",
          "text": "7. Generator Functions with Conditions"
        },
        {
          "type": "text",
          "text": "Generators can also contain conditions and calculations."
        },
        {
          "type": "text",
          "text": "Example: Generate only even numbers."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def even_numbers(limit):\n\n    number = 1\n\n    while number <= limit:\n\n        if number % 2 == 0:\n            yield number\n\n        number += 1\n\n\nfor even in even_numbers(10):\n    print(even)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "2\n4\n6\n8\n10"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`even_numbers(limit)` defines a generator function with a limit parameter.",
            "`number = 1` initializes the counter.",
            "`while number <= limit` continues while the counter is within the limit.",
            "`number % 2 == 0` checks whether the number is divisible by 2.",
            "`yield number` produces the number only if it is even.",
            "`number += 1` increases the counter."
          ]
        },
        {
          "type": "heading",
          "text": "8. Why Are Generators Useful?"
        },
        {
          "type": "text",
          "text": "Imagine you need to process one million numbers."
        },
        {
          "type": "text",
          "text": "Using a list:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [number for number in range(1, 1000001)]"
        },
        {
          "type": "text",
          "text": "Python creates a list containing all one million numbers."
        },
        {
          "type": "text",
          "text": "Using a generator:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = (number for number in range(1, 1000001))"
        },
        {
          "type": "text",
          "text": "Python creates a generator that produces the numbers when requested."
        },
        {
          "type": "text",
          "text": "Generators can significantly reduce memory usage when values are processed sequentially rather than stored all at once."
        },
        {
          "type": "text",
          "text": "However, generators are not automatically faster in every situation. Their main advantage is often memory efficiency and lazy evaluation."
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
            "How custom iterators work.",
            "The purpose of `__iter__()` and `__next__()`.",
            "What generators are.",
            "How to use the `yield` keyword.",
            "The difference between `return` and `yield`.",
            "How generator expressions work.",
            "Why generators are useful for processing large amounts of data."
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
      "title": "PART 3 OF 4: PRACTICAL APPLICATIONS OF ITERATORS AND GENERATORS",
      "description": "Part 3 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 3 OF 4: PRACTICAL APPLICATIONS OF ITERATORS AND GENERATORS"
        },
        {
          "type": "text",
          "text": "In this section, you will build practical Python programs that demonstrate how iterators and generators are used in software development."
        },
        {
          "type": "heading",
          "text": "1. Setting Up Your Project"
        },
        {
          "type": "text",
          "text": "Create a folder named:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "iterators_generators_project"
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
          "text": "Your project structure should look like this:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "iterators_generators_project/\n│\n└── main.py"
        },
        {
          "type": "text",
          "text": "Open the folder in Visual Studio Code."
        },
        {
          "type": "text",
          "text": "You will write and execute your programs inside `main.py`."
        },
        {
          "type": "heading",
          "text": "2. Practical Example One: Student Records Iterator"
        },
        {
          "type": "text",
          "text": "Imagine you are developing a student management application."
        },
        {
          "type": "text",
          "text": "The application stores student names, and you want to retrieve them one at a time."
        },
        {
          "type": "text",
          "text": "Code:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\"Brian\", \"Mary\", \"John\", \"Peter\"]\n\nstudent_iterator = iter(students)\n\nwhile True:\n\n    try:\n        student = next(student_iterator)\n        print(\"Student:\", student)\n\n    except StopIteration:\n        break"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Student: Brian\nStudent: Mary\nStudent: John\nStudent: Peter"
        },
        {
          "type": "text",
          "text": "**Understanding the code:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\"Brian\", \"Mary\", \"John\", \"Peter\"]"
        },
        {
          "type": "text",
          "text": "Creates a list containing four student names."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student_iterator = iter(students)"
        },
        {
          "type": "text",
          "text": "Converts the list into an iterator."
        },
        {
          "type": "code",
          "language": "python",
          "code": "while True:"
        },
        {
          "type": "text",
          "text": "Starts a loop that continues until something stops it."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student = next(student_iterator)"
        },
        {
          "type": "text",
          "text": "Requests the next student name."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Student:\", student)"
        },
        {
          "type": "text",
          "text": "Displays the retrieved student."
        },
        {
          "type": "code",
          "language": "python",
          "code": "except StopIteration:"
        },
        {
          "type": "text",
          "text": "Detects when there are no more student names."
        },
        {
          "type": "code",
          "language": "python",
          "code": "break"
        },
        {
          "type": "text",
          "text": "Stops the loop."
        },
        {
          "type": "text",
          "text": "**Where could this be used?**"
        },
        {
          "type": "text",
          "text": "A student management system might use iteration to process student records one at a time."
        },
        {
          "type": "heading",
          "text": "3. Practical Example Two: Generate Student Marks"
        },
        {
          "type": "text",
          "text": "Now let's use a generator to produce student marks."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def generate_marks():\n\n    marks = [78, 65, 90, 45, 82]\n\n    for mark in marks:\n        yield mark\n\n\nfor mark in generate_marks():\n\n    if mark >= 50:\n        print(mark, \"Pass\")\n\n    else:\n        print(mark, \"Fail\")"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "78 Pass\n65 Pass\n90 Pass\n45 Fail\n82 Pass"
        },
        {
          "type": "text",
          "text": "**Line-by-line explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def generate_marks():"
        },
        {
          "type": "text",
          "text": "Defines a generator function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [78, 65, 90, 45, 82]"
        },
        {
          "type": "text",
          "text": "Creates a list containing student marks."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for mark in marks:"
        },
        {
          "type": "text",
          "text": "Loops through each mark."
        },
        {
          "type": "code",
          "language": "python",
          "code": "yield mark"
        },
        {
          "type": "text",
          "text": "Produces one mark at a time."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for mark in generate_marks():"
        },
        {
          "type": "text",
          "text": "Requests values from the generator until it is exhausted."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if mark >= 50:"
        },
        {
          "type": "text",
          "text": "Checks whether the mark is at least 50."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(mark, \"Pass\")"
        },
        {
          "type": "text",
          "text": "Displays the mark and the result if the student passes."
        },
        {
          "type": "text",
          "text": "The `else` block handles marks below 50."
        },
        {
          "type": "text",
          "text": "**Important:** The generator does not calculate the students' marks. It produces existing marks one at a time for the program to process."
        },
        {
          "type": "heading",
          "text": "4. Practical Example Three: Generate Multiplication Tables"
        },
        {
          "type": "text",
          "text": "Let's build a generator that produces multiplication table values."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def multiplication_table(number):\n\n    for multiplier in range(1, 11):\n\n        result = number * multiplier\n\n        yield f\"{number} x {multiplier} = {result}\"\n\n\nfor line in multiplication_table(5):\n    print(line)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def multiplication_table(number):"
        },
        {
          "type": "text",
          "text": "Defines a generator function that accepts a number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for multiplier in range(1, 11):"
        },
        {
          "type": "text",
          "text": "Creates multipliers from 1 to 10."
        },
        {
          "type": "code",
          "language": "python",
          "code": "result = number * multiplier"
        },
        {
          "type": "text",
          "text": "Multiplies the supplied number by the current multiplier."
        },
        {
          "type": "code",
          "language": "python",
          "code": "yield f\"{number} x {multiplier} = {result}\""
        },
        {
          "type": "text",
          "text": "Produces a formatted multiplication statement."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for line in multiplication_table(5):"
        },
        {
          "type": "text",
          "text": "Requests each generated statement for the multiplication table of 5."
        },
        {
          "type": "text",
          "text": "This is useful because the function can generate multiplication tables for different numbers without creating a separate function for each table."
        },
        {
          "type": "heading",
          "text": "5. Practical Example Four: Reading Large Files Using Generators"
        },
        {
          "type": "text",
          "text": "Generators are particularly useful when working with large files."
        },
        {
          "type": "text",
          "text": "Imagine a system that stores thousands of transaction records."
        },
        {
          "type": "text",
          "text": "You may not want to load every record into memory before processing it."
        },
        {
          "type": "text",
          "text": "Python allows you to read files line by line."
        },
        {
          "type": "text",
          "text": "Create a file named:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "transactions.txt"
        },
        {
          "type": "text",
          "text": "Add the following content:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "TX001, 500\nTX002, 1200\nTX003, 750\nTX004, 2000\nTX005, 300"
        },
        {
          "type": "text",
          "text": "Now add this code to `main.py`:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def read_transactions(filename):\n\n    with open(filename, \"r\") as file:\n\n        for line in file:\n            yield line.strip()\n\n\nfor transaction in read_transactions(\"transactions.txt\"):\n    print(transaction)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "TX001, 500\nTX002, 1200\nTX003, 750\nTX004, 2000\nTX005, 300"
        },
        {
          "type": "text",
          "text": "**Understanding the code:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def read_transactions(filename):"
        },
        {
          "type": "text",
          "text": "Defines a generator function that accepts a filename."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(filename, \"r\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the file in read mode."
        },
        {
          "type": "text",
          "text": "The `with` statement ensures the file is properly closed when the block finishes."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for line in file:"
        },
        {
          "type": "text",
          "text": "Reads the file one line at a time."
        },
        {
          "type": "code",
          "language": "python",
          "code": "yield line.strip()"
        },
        {
          "type": "text",
          "text": "Removes surrounding whitespace and produces the current line."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for transaction in read_transactions(\"transactions.txt\"):"
        },
        {
          "type": "text",
          "text": "Requests transaction records from the generator."
        },
        {
          "type": "text",
          "text": "**Why is this important?**"
        },
        {
          "type": "text",
          "text": "Suppose a file contains several million transaction records."
        },
        {
          "type": "text",
          "text": "Reading the entire file into a list could require substantial memory."
        },
        {
          "type": "text",
          "text": "Reading it line by line allows the program to process records sequentially without storing the entire file in memory."
        },
        {
          "type": "heading",
          "text": "6. Practical Example Five: Generate Transaction Reports"
        },
        {
          "type": "text",
          "text": "Let's extend the previous example."
        },
        {
          "type": "text",
          "text": "We will generate transaction records and calculate their total value."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def generate_transactions():\n\n    transactions = [500, 1200, 750, 2000, 300]\n\n    for amount in transactions:\n        yield amount\n\n\ntotal = 0\n\nfor transaction in generate_transactions():\n\n    print(\"Transaction:\", transaction)\n\n    total += transaction\n\n\nprint(\"Total transactions:\", total)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Transaction: 500\nTransaction: 1200\nTransaction: 750\nTransaction: 2000\nTransaction: 300\nTotal transactions: 4750"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`generate_transactions()` defines the generator.",
            "`transactions` stores the transaction amounts.",
            "`for amount in transactions` visits each amount.",
            "`yield amount` produces the current amount.",
            "`total = 0` initializes the total.",
            "The second `for` loop retrieves each generated transaction.",
            "`total += transaction` adds each transaction to the running total.",
            "The final `print()` displays the total."
          ]
        },
        {
          "type": "text",
          "text": "This demonstrates how generators can supply data to another part of an application."
        },
        {
          "type": "heading",
          "text": "7. Practical Example Six: Generator Expression vs List Comprehension"
        },
        {
          "type": "text",
          "text": "Consider a system that calculates the squares of numbers from 1 to 10."
        },
        {
          "type": "text",
          "text": "Using a list comprehension:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "squares = [number ** 2 for number in range(1, 11)]\n\nprint(squares)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]"
        },
        {
          "type": "text",
          "text": "Using a generator expression:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "squares = (number ** 2 for number in range(1, 11))\n\nfor square in squares:\n    print(square)"
        },
        {
          "type": "text",
          "text": "The first version creates a complete list."
        },
        {
          "type": "text",
          "text": "The second version produces each square when requested."
        },
        {
          "type": "table",
          "columns": [
            "Feature",
            "List comprehension",
            "Generator expression"
          ],
          "rows": [
            [
              "Syntax",
              "`[expression for item in iterable]`",
              "`(expression for item in iterable)`"
            ],
            [
              "Produces",
              "A list",
              "A generator"
            ],
            [
              "Evaluation",
              "Eager",
              "Lazy"
            ],
            [
              "Memory",
              "Stores all results",
              "Produces values as requested"
            ],
            [
              "Reuse",
              "Can be iterated over repeatedly",
              "Normally exhausted after one complete iteration"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "8. Common Mistakes"
        },
        {
          "type": "text",
          "text": "**Mistake 1: Calling `next()` on an iterable directly**"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [10, 20, 30]\n\nprint(next(numbers))"
        },
        {
          "type": "text",
          "text": "This produces a `TypeError` because a list is iterable but is not itself an iterator."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [10, 20, 30]\n\nnumber_iterator = iter(numbers)\n\nprint(next(number_iterator))"
        },
        {
          "type": "text",
          "text": "**Mistake 2: Forgetting that a generator can be exhausted**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def get_numbers():\n    yield 1\n    yield 2\n    yield 3\n\n\nnumbers = get_numbers()\n\nfor number in numbers:\n    print(number)\n\nfor number in numbers:\n    print(number)"
        },
        {
          "type": "text",
          "text": "The second loop prints nothing because the generator has already been exhausted."
        },
        {
          "type": "text",
          "text": "To generate the values again, call the function again:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = get_numbers()\n\nfor number in numbers:\n    print(number)"
        },
        {
          "type": "text",
          "text": "**Mistake 3: Using `return` when you intend to produce multiple generator values**"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def numbers():\n    return 1\n    return 2\n    return 3"
        },
        {
          "type": "text",
          "text": "The first `return` ends the function immediately."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def numbers():\n    yield 1\n    yield 2\n    yield 3"
        },
        {
          "type": "text",
          "text": "**Mistake 4: Forgetting to update a custom iterator's state**"
        },
        {
          "type": "text",
          "text": "If a custom iterator does not update its counter or position, it may keep returning the same value indefinitely."
        },
        {
          "type": "text",
          "text": "Always ensure that the iterator moves forward or eventually raises `StopIteration`."
        },
        {
          "type": "heading",
          "text": "9. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete these exercises in your `main.py` file."
        },
        {
          "type": "text",
          "text": "**Exercise 1: Number Generator**"
        },
        {
          "type": "text",
          "text": "Create a generator that produces numbers from 1 to 20."
        },
        {
          "type": "text",
          "text": "Display the generated numbers using a `for` loop."
        },
        {
          "type": "text",
          "text": "**Exercise 2: Odd Numbers**"
        },
        {
          "type": "text",
          "text": "Create a generator that produces only odd numbers between 1 and 30."
        },
        {
          "type": "text",
          "text": "**Exercise 3: Student Names**"
        },
        {
          "type": "text",
          "text": "Create a list of five student names."
        },
        {
          "type": "text",
          "text": "Convert the list into an iterator and retrieve the first three names using `next()`."
        },
        {
          "type": "text",
          "text": "**Exercise 4: Temperature Generator**"
        },
        {
          "type": "text",
          "text": "Create a generator that produces temperatures in Celsius and converts them to Fahrenheit using:"
        },
        {
          "type": "text",
          "text": "`Fahrenheit = (Celsius × 9/5) + 32`"
        },
        {
          "type": "text",
          "text": "**Exercise 5: Transaction Processing**"
        },
        {
          "type": "text",
          "text": "Create a generator that produces transaction amounts."
        },
        {
          "type": "text",
          "text": "Use a loop to calculate the total transaction value."
        },
        {
          "type": "text",
          "text": "**Exercise 6: Custom Iterator**"
        },
        {
          "type": "text",
          "text": "Create a custom iterator class that produces numbers from 1 to 10."
        },
        {
          "type": "text",
          "text": "Implement both `__iter__()` and `__next__()`."
        },
        {
          "type": "heading",
          "text": "Part 3 Summary"
        },
        {
          "type": "text",
          "text": "You have now learned how to:"
        },
        {
          "type": "numbered",
          "items": [
            "Use iterators in practical programs.",
            "Generate student marks.",
            "Create multiplication tables using generators.",
            "Read large files line by line.",
            "Process transaction records.",
            "Compare list comprehensions with generator expressions.",
            "Identify common iterator and generator errors."
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
          "text": "You have completed the lesson on Python Iterators and Generators."
        },
        {
          "type": "text",
          "text": "Now it is time to test your understanding."
        },
        {
          "type": "heading",
          "text": "Section A: Knowledge Questions"
        },
        {
          "type": "heading",
          "text": "Question 1"
        },
        {
          "type": "quiz",
          "question": "What is an iterator in Python?",
          "options": [
            "A. An object that stores only numbers.",
            "B. An object that allows values to be accessed one at a time.",
            "C. A function that creates classes.",
            "D. A command that installs Python packages."
          ],
          "answer": "B. An object that allows values to be accessed one at a time.",
          "explanation": "Use the iterator or generator rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 2"
        },
        {
          "type": "quiz",
          "question": "Which Python function converts an iterable into an iterator?",
          "options": [
            "A. `next()`",
            "B. `yield()`",
            "C. `iter()`",
            "D. `range()`"
          ],
          "answer": "C. `iter()`",
          "explanation": "Use the iterator or generator rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 3"
        },
        {
          "type": "quiz",
          "question": "What is the purpose of the `next()` function?",
          "options": [
            "A. To create a new list.",
            "B. To retrieve the next value from an iterator.",
            "C. To stop a Python program.",
            "D. To define a class."
          ],
          "answer": "B. To retrieve the next value from an iterator.",
          "explanation": "Use the iterator or generator rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 4"
        },
        {
          "type": "quiz",
          "question": "What happens when an iterator has no more values?",
          "options": [
            "A. It automatically restarts.",
            "B. It raises `StopIteration`.",
            "C. It deletes the iterable.",
            "D. It creates another iterator."
          ],
          "answer": "B. It raises `StopIteration`.",
          "explanation": "Use the iterator or generator rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Section B: Understanding Generators"
        },
        {
          "type": "heading",
          "text": "Question 5"
        },
        {
          "type": "text",
          "text": "Explain the difference between `return` and `yield` in Python."
        },
        {
          "type": "heading",
          "text": "Question 6"
        },
        {
          "type": "quiz",
          "question": "What is the main advantage of using generators when processing large amounts of data?",
          "options": [
            "A. They always execute faster than lists.",
            "B. They allow values to be generated on demand, often reducing memory usage.",
            "C. They automatically save data to a database.",
            "D. They prevent all Python errors."
          ],
          "answer": "B. They allow values to be generated on demand, often reducing memory usage.",
          "explanation": "Use the iterator or generator rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Section C: Practical Programming"
        },
        {
          "type": "heading",
          "text": "Question 7"
        },
        {
          "type": "text",
          "text": "Write a generator function called `generate_even_numbers()` that produces even numbers between 2 and 20."
        },
        {
          "type": "text",
          "text": "Display the generated numbers using a `for` loop."
        },
        {
          "type": "heading",
          "text": "Question 8"
        },
        {
          "type": "text",
          "text": "Create a custom iterator class called `Countdown` that counts down from 5 to 1."
        },
        {
          "type": "text",
          "text": "Your class must implement:"
        },
        {
          "type": "bullets",
          "items": [
            "`__iter__()`",
            "`__next__()`"
          ]
        },
        {
          "type": "text",
          "text": "When there are no more numbers, it must raise `StopIteration`."
        },
        {
          "type": "heading",
          "text": "Submit Your Assessment to Kai"
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
            "Evaluate your answers.",
            "Mark your multiple-choice questions.",
            "Review your explanations.",
            "Execute or inspect your Python solutions.",
            "Identify mistakes in your code.",
            "Explain why an answer is incorrect.",
            "Provide corrected code where necessary.",
            "Give you an overall assessment and recommend what to study next."
          ]
        },
        {
          "type": "heading",
          "text": "Lesson Completion Checklist"
        },
        {
          "type": "text",
          "text": "By the end of this lesson, you should be able to:"
        },
        {
          "type": "bullets",
          "items": [
            "[ ] Explain what iterables and iterators are.",
            "[ ] Create iterators using `iter()`.",
            "[ ] Retrieve values using `next()`.",
            "[ ] Explain `StopIteration`.",
            "[ ] Build custom iterator classes.",
            "[ ] Create generator functions using `yield`.",
            "[ ] Create generator expressions.",
            "[ ] Explain the difference between `return` and `yield`.",
            "[ ] Apply generators to file processing and data handling."
          ]
        },
        {
          "type": "text",
          "text": "**Part 4 of 4 — Lesson Complete**"
        },
        {
          "type": "text",
          "text": "**Recommended Next Lesson: Python Decorators**"
        },
        {
          "type": "text",
          "text": "Decorators build on your understanding of functions and generators. They allow you to modify or extend the behaviour of functions without changing their original code."
        }
      ]
    }
  ]
};

export default delivery;
