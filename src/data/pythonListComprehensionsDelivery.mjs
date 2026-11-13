const delivery = {
  "type": "authored",
  "version": 1,
  "sections": [
    {
      "id": "python-list-comprehensions-part-1",
      "title": "PART 1 OF 4: INTRODUCTION TO LIST COMPREHENSIONS",
      "description": "Part 1 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "PYTHON: LIST COMPREHENSIONS"
        },
        {
          "type": "heading",
          "text": "1. What Is a List Comprehension?"
        },
        {
          "type": "text",
          "text": "A list comprehension is a shorter way of creating a new list in Python using an existing iterable, such as another list, a range of numbers or a string."
        },
        {
          "type": "text",
          "text": "It allows you to generate lists using a single expression instead of writing several lines of code."
        },
        {
          "type": "text",
          "text": "To understand this, let's first look at how we normally create lists."
        },
        {
          "type": "heading",
          "text": "Example: Creating a list using a for loop"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = []\n\nfor number in range(1, 6):\n    numbers.append(number)\n\nprint(numbers)"
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
          "type": "heading",
          "text": "Understanding the code"
        },
        {
          "type": "text",
          "text": "**Line 1**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = []"
        },
        {
          "type": "text",
          "text": "Creates an empty list called `numbers`."
        },
        {
          "type": "text",
          "text": "**Line 2**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "for number in range(1, 6):"
        },
        {
          "type": "text",
          "text": "Creates a loop that generates numbers from 1 to 5."
        },
        {
          "type": "text",
          "text": "Remember that the ending value in `range()` is excluded."
        },
        {
          "type": "text",
          "text": "**Line 3**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers.append(number)"
        },
        {
          "type": "text",
          "text": "Adds each generated number to the list."
        },
        {
          "type": "text",
          "text": "**Line 4**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(numbers)"
        },
        {
          "type": "text",
          "text": "Displays the completed list."
        },
        {
          "type": "text",
          "text": "This approach works, but Python provides a shorter way to achieve the same result."
        },
        {
          "type": "heading",
          "text": "The same example using list comprehension"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [number for number in range(1, 6)]\n\nprint(numbers)"
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
          "text": "Both programs produce the same result."
        },
        {
          "type": "text",
          "text": "However, the second example uses list comprehension to create the list in one expression."
        },
        {
          "type": "heading",
          "text": "2. Basic Syntax of List Comprehension"
        },
        {
          "type": "text",
          "text": "The general syntax is:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "new_list = [expression for item in iterable]"
        },
        {
          "type": "text",
          "text": "Let's understand each part."
        },
        {
          "type": "table",
          "columns": [
            "Component",
            "Meaning"
          ],
          "rows": [
            [
              "`new_list`",
              "The list being created"
            ],
            [
              "`expression`",
              "What should be stored in the new list"
            ],
            [
              "`item`",
              "The current element being processed"
            ],
            [
              "`iterable`",
              "The collection or sequence being processed"
            ]
          ]
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "squares = [number * number for number in range(1, 6)]\n\nprint(squares)"
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
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`squares` is the new list.",
            "`number * number` is the expression.",
            "`number` represents each number generated.",
            "`range(1, 6)` generates numbers from 1 to 5."
          ]
        },
        {
          "type": "text",
          "text": "Python takes each number, multiplies it by itself and stores the result in the new list."
        },
        {
          "type": "text",
          "text": "The calculation happens as follows:"
        },
        {
          "type": "table",
          "columns": [
            "Number",
            "Calculation",
            "Result"
          ],
          "rows": [
            [
              "1",
              "1 × 1",
              "1"
            ],
            [
              "2",
              "2 × 2",
              "4"
            ],
            [
              "3",
              "3 × 3",
              "9"
            ],
            [
              "4",
              "4 × 4",
              "16"
            ],
            [
              "5",
              "5 × 5",
              "25"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "3. Creating Lists from Existing Lists"
        },
        {
          "type": "text",
          "text": "List comprehensions are particularly useful when processing existing lists."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "names = [\"Brian\", \"John\", \"Mary\", \"Peter\"]\n\nuppercase_names = [name.upper() for name in names]\n\nprint(uppercase_names)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "['BRIAN', 'JOHN', 'MARY', 'PETER']"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "numbered",
          "items": [
            "`names` contains four names.",
            "`for name in names` processes each name.",
            "`name.upper()` converts the current name into uppercase.",
            "The converted names are stored in `uppercase_names`.",
            "`print()` displays the result."
          ]
        },
        {
          "type": "text",
          "text": "The original list remains unchanged."
        },
        {
          "type": "heading",
          "text": "4. Why Use List Comprehensions?"
        },
        {
          "type": "text",
          "text": "List comprehensions offer several advantages."
        },
        {
          "type": "text",
          "text": "**1. Shorter code**"
        },
        {
          "type": "text",
          "text": "They reduce the amount of code needed to create lists."
        },
        {
          "type": "text",
          "text": "**2. Readability**"
        },
        {
          "type": "text",
          "text": "When used appropriately, they make simple list transformations easier to understand."
        },
        {
          "type": "text",
          "text": "**3. Convenient transformations**"
        },
        {
          "type": "text",
          "text": "You can easily convert values, calculate results and filter information."
        },
        {
          "type": "text",
          "text": "**4. Performance**"
        },
        {
          "type": "text",
          "text": "They can be faster than equivalent loops in some situations, although performance depends on the operation."
        },
        {
          "type": "heading",
          "text": "5. Part 1 Summary"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "bullets",
          "items": [
            "What list comprehensions are.",
            "How they compare with ordinary for loops.",
            "The basic syntax.",
            "How to create lists from ranges.",
            "How to transform existing lists.",
            "Why developers use list comprehensions."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 1 of 4"
        }
      ]
    },
    {
      "id": "python-list-comprehensions-part-2",
      "title": "PART 2 OF 4: CONDITIONALS, FILTERING AND ADVANCED LIST COMPREHENSIONS",
      "description": "Part 2 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "1. List Comprehensions with Conditions"
        },
        {
          "type": "text",
          "text": "So far, we have created lists by processing every item."
        },
        {
          "type": "text",
          "text": "But what if we only want specific items?"
        },
        {
          "type": "text",
          "text": "For example, imagine we have a list of numbers and want to create a new list containing only even numbers."
        },
        {
          "type": "text",
          "text": "We can use an `if` condition inside a list comprehension."
        },
        {
          "type": "text",
          "text": "Syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "new_list = [expression for item in iterable if condition]"
        },
        {
          "type": "text",
          "text": "The condition determines which items should be included."
        },
        {
          "type": "heading",
          "text": "Example: Extracting even numbers"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5, 6, 7, 8]\n\neven_numbers = [number for number in numbers if number % 2 == 0]\n\nprint(even_numbers)"
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
          "type": "heading",
          "text": "Understanding the code"
        },
        {
          "type": "text",
          "text": "**Line 1**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5, 6, 7, 8]"
        },
        {
          "type": "text",
          "text": "Creates a list containing eight numbers."
        },
        {
          "type": "text",
          "text": "**Line 2**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "even_numbers = [number for number in numbers if number % 2 == 0]"
        },
        {
          "type": "text",
          "text": "This is the list comprehension."
        },
        {
          "type": "text",
          "text": "Let's break it down:"
        },
        {
          "type": "bullets",
          "items": [
            "`number` is the value that will be added to the new list.",
            "`for number in numbers` processes every number in the original list.",
            "`if number % 2 == 0` checks whether the number is even."
          ]
        },
        {
          "type": "text",
          "text": "The `%` operator calculates the remainder after division."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "8 % 2 = 0\n7 % 2 = 1"
        },
        {
          "type": "text",
          "text": "A number is even when its remainder after division by 2 is zero."
        },
        {
          "type": "text",
          "text": "Only numbers that satisfy the condition are added to `even_numbers`."
        },
        {
          "type": "text",
          "text": "**Line 3**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(even_numbers)"
        },
        {
          "type": "text",
          "text": "Displays the filtered list."
        },
        {
          "type": "heading",
          "text": "2. Extracting Odd Numbers"
        },
        {
          "type": "text",
          "text": "We can use the same approach to extract odd numbers."
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5, 6, 7, 8]\n\nodd_numbers = [number for number in numbers if number % 2 != 0]\n\nprint(odd_numbers)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[1, 3, 5, 7]"
        },
        {
          "type": "text",
          "text": "The condition:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "number % 2 != 0"
        },
        {
          "type": "text",
          "text": "Checks whether the remainder is not equal to zero."
        },
        {
          "type": "text",
          "text": "Therefore, only odd numbers are included."
        },
        {
          "type": "heading",
          "text": "3. Using if and else in List Comprehensions"
        },
        {
          "type": "text",
          "text": "Sometimes, we do not want to remove items. Instead, we want to transform each item differently depending on a condition."
        },
        {
          "type": "text",
          "text": "For this, we can use `if` and `else` in the expression."
        },
        {
          "type": "text",
          "text": "Syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "new_list = [value_if_true if condition else value_if_false for item in iterable]"
        },
        {
          "type": "text",
          "text": "Notice the position of `if` and `else` is different from filtering."
        },
        {
          "type": "heading",
          "text": "Example: Categorizing numbers"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5, 6]\n\nresults = [\"Even\" if number % 2 == 0 else \"Odd\" for number in numbers]\n\nprint(results)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even']"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "Python processes each number.",
            "It checks whether the number is even.",
            "If the condition is true, it stores `\"Even\"`.",
            "Otherwise, it stores `\"Odd\"`."
          ]
        },
        {
          "type": "text",
          "text": "Unlike filtering, this approach produces one result for every item in the original list."
        },
        {
          "type": "heading",
          "text": "Important difference"
        },
        {
          "type": "text",
          "text": "**Filtering:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "[number for number in numbers if number % 2 == 0]"
        },
        {
          "type": "text",
          "text": "This removes numbers that do not satisfy the condition."
        },
        {
          "type": "text",
          "text": "**Conditional transformation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "[\"Even\" if number % 2 == 0 else \"Odd\" for number in numbers]"
        },
        {
          "type": "text",
          "text": "This keeps every item but changes what gets stored."
        },
        {
          "type": "heading",
          "text": "4. Working with Strings"
        },
        {
          "type": "text",
          "text": "List comprehensions can also process individual characters in strings."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "word = \"python\"\n\nletters = [character for character in word]\n\nprint(letters)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "['p', 'y', 't', 'h', 'o', 'n']"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`word` stores a string.",
            "Strings are iterable, meaning Python can process their characters one by one.",
            "`for character in word` processes each character.",
            "Every character is added to the new list."
          ]
        },
        {
          "type": "heading",
          "text": "Extracting vowels"
        },
        {
          "type": "code",
          "language": "python",
          "code": "word = \"programming\"\n\nvowels = [letter for letter in word if letter in \"aeiou\"]\n\nprint(vowels)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "['o', 'a', 'i']"
        },
        {
          "type": "text",
          "text": "The condition:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if letter in \"aeiou\""
        },
        {
          "type": "text",
          "text": "Checks whether the current character exists in the string containing the vowels."
        },
        {
          "type": "heading",
          "text": "5. Nested List Comprehensions"
        },
        {
          "type": "text",
          "text": "A nested list comprehension allows you to use more than one loop inside a list comprehension."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "pairs = [(x, y) for x in range(1, 3) for y in range(1, 3)]\n\nprint(pairs)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[(1, 1), (1, 2), (2, 1), (2, 2)]"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`for x in range(1, 3)` generates 1 and 2.",
            "`for y in range(1, 3)` generates 1 and 2 for each value of `x`.",
            "`(x, y)` creates a tuple containing the two values."
          ]
        },
        {
          "type": "text",
          "text": "The combinations are:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "(1, 1)\n(1, 2)\n(2, 1)\n(2, 2)"
        },
        {
          "type": "text",
          "text": "Nested comprehensions can be useful, but avoid making them unnecessarily complicated."
        },
        {
          "type": "heading",
          "text": "6. Working with Dictionaries"
        },
        {
          "type": "text",
          "text": "Python also has dictionary comprehensions."
        },
        {
          "type": "text",
          "text": "They allow you to create dictionaries using a similar approach."
        },
        {
          "type": "text",
          "text": "Syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "new_dictionary = {key: value for item in iterable}"
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4]\n\nsquares = {number: number ** 2 for number in numbers}\n\nprint(squares)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "{1: 1, 2: 4, 3: 9, 4: 16}"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`numbers` contains the original values.",
            "`number` becomes the dictionary key.",
            "`number ** 2` calculates the square of the number.",
            "The resulting key-value pairs are stored in `squares`."
          ]
        },
        {
          "type": "heading",
          "text": "7. Part 2 Summary"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "bullets",
          "items": [
            "How to filter lists using conditions.",
            "How to extract even and odd numbers.",
            "How to use `if` and `else` together.",
            "How to process strings.",
            "How to use nested list comprehensions.",
            "How to create dictionaries using comprehensions."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 2 of 4"
        }
      ]
    },
    {
      "id": "python-list-comprehensions-part-3",
      "title": "PART 3 OF 4: PRACTICAL APPLICATIONS AND PROGRAMMING",
      "description": "Part 3 of 4",
      "blocks": [
        {
          "type": "text",
          "text": "In this part, we will use list comprehensions to solve practical programming problems."
        },
        {
          "type": "heading",
          "text": "1. Setting Up Your Project"
        },
        {
          "type": "text",
          "text": "Create a folder called:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "list_comprehensions_project/"
        },
        {
          "type": "text",
          "text": "Inside it, create:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "list_comprehensions_project/\n│\n└── main.py"
        },
        {
          "type": "text",
          "text": "Open `main.py` in your Python editor."
        },
        {
          "type": "heading",
          "text": "2. Practical Example: Processing Student Marks"
        },
        {
          "type": "text",
          "text": "Imagine you are developing a student performance system."
        },
        {
          "type": "text",
          "text": "You have a list of student marks:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [45, 78, 32, 90, 65, 28, 85]"
        },
        {
          "type": "text",
          "text": "You want to extract all students who scored at least 50."
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [45, 78, 32, 90, 65, 28, 85]\n\npassing_marks = [mark for mark in marks if mark >= 50]\n\nprint(passing_marks)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[78, 90, 65, 85]"
        },
        {
          "type": "heading",
          "text": "Explanation"
        },
        {
          "type": "bullets",
          "items": [
            "`marks` stores the students' scores.",
            "`for mark in marks` processes every score.",
            "`if mark >= 50` checks whether the score is at least 50.",
            "Passing marks are stored in a new list.",
            "`print()` displays the results."
          ]
        },
        {
          "type": "text",
          "text": "This approach can be used when developing student performance analysis software."
        },
        {
          "type": "heading",
          "text": "3. Practical Example: Calculating Discounts"
        },
        {
          "type": "text",
          "text": "Imagine an online store that wants to apply a 10% discount to all product prices."
        },
        {
          "type": "text",
          "text": "Original prices:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [1000, 2500, 500, 3000]"
        },
        {
          "type": "text",
          "text": "Program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [1000, 2500, 500, 3000]\n\ndiscounted_prices = [price * 0.9 for price in prices]\n\nprint(discounted_prices)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[900.0, 2250.0, 450.0, 2700.0]"
        },
        {
          "type": "heading",
          "text": "Explanation"
        },
        {
          "type": "bullets",
          "items": [
            "`prices` stores the original product prices.",
            "`for price in prices` processes each price.",
            "`price * 0.9` calculates the price after a 10% discount.",
            "The results are stored in `discounted_prices`."
          ]
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1000 × 0.9 = 900"
        },
        {
          "type": "text",
          "text": "The application now has a list of discounted prices."
        },
        {
          "type": "heading",
          "text": "4. Practical Example: Cleaning User Data"
        },
        {
          "type": "text",
          "text": "Imagine an application that receives usernames containing unwanted spaces."
        },
        {
          "type": "text",
          "text": "Original data:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "usernames = [\" Brian \", \" John \", \" Mary \", \" Peter \"]"
        },
        {
          "type": "text",
          "text": "We want to remove the unnecessary spaces."
        },
        {
          "type": "text",
          "text": "Program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "usernames = [\" Brian \", \" John \", \" Mary \", \" Peter \"]\n\nclean_names = [name.strip() for name in usernames]\n\nprint(clean_names)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "['Brian', 'John', 'Mary', 'Peter']"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`usernames` stores the original names.",
            "`for name in usernames` processes each name.",
            "`name.strip()` removes whitespace from the beginning and end of each name.",
            "The cleaned names are stored in a new list."
          ]
        },
        {
          "type": "text",
          "text": "This is useful when processing information received from users."
        },
        {
          "type": "heading",
          "text": "5. Practical Example: Extracting Information from Products"
        },
        {
          "type": "text",
          "text": "Imagine an online shopping application."
        },
        {
          "type": "text",
          "text": "You have product prices:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [500, 1200, 300, 2500, 800, 4000]"
        },
        {
          "type": "text",
          "text": "You want to display products that cost less than KSh 1,000."
        },
        {
          "type": "text",
          "text": "Program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [500, 1200, 300, 2500, 800, 4000]\n\naffordable_prices = [price for price in prices if price < 1000]\n\nprint(affordable_prices)"
        },
        {
          "type": "text",
          "text": "Output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[500, 300, 800]"
        },
        {
          "type": "text",
          "text": "The condition:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if price < 1000"
        },
        {
          "type": "text",
          "text": "ensures that only prices below KSh 1,000 are included."
        },
        {
          "type": "heading",
          "text": "6. Practical Example: Converting Temperatures"
        },
        {
          "type": "text",
          "text": "Suppose you have temperatures in Celsius and want to convert them into Fahrenheit."
        },
        {
          "type": "text",
          "text": "Formula:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Fahrenheit = (Celsius × 9/5) + 32"
        },
        {
          "type": "text",
          "text": "Program:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "celsius = [0, 10, 20, 30, 40]\n\nfahrenheit = [(temperature * 9/5) + 32 for temperature in celsius]\n\nprint(fahrenheit)"
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
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`celsius` stores temperatures.",
            "`for temperature in celsius` processes each value.",
            "`(temperature * 9/5) + 32` converts the current temperature.",
            "The converted values are stored in `fahrenheit`."
          ]
        },
        {
          "type": "heading",
          "text": "7. Practical Project: Student Performance Analyzer"
        },
        {
          "type": "text",
          "text": "Now let's build a small program that uses several list comprehensions together."
        },
        {
          "type": "text",
          "text": "Create a file called `student_analyzer.py`."
        },
        {
          "type": "text",
          "text": "Add:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\n    {\"name\": \"Brian\", \"marks\": 85},\n    {\"name\": \"John\", \"marks\": 45},\n    {\"name\": \"Mary\", \"marks\": 72},\n    {\"name\": \"Peter\", \"marks\": 35},\n    {\"name\": \"Jane\", \"marks\": 90}\n]\n\npassing_students = [\n    student[\"name\"]\n    for student in students\n    if student[\"marks\"] >= 50\n]\n\nfailed_students = [\n    student[\"name\"]\n    for student in students\n    if student[\"marks\"] < 50\n]\n\nstudent_names = [\n    student[\"name\"].upper()\n    for student in students\n]\n\nprint(\"Passing Students:\", passing_students)\nprint(\"Failed Students:\", failed_students)\nprint(\"All Student Names:\", student_names)"
        },
        {
          "type": "heading",
          "text": "Understanding the program"
        },
        {
          "type": "text",
          "text": "**Step 1: Creating student records**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\n    {\"name\": \"Brian\", \"marks\": 85},\n    {\"name\": \"John\", \"marks\": 45},\n    {\"name\": \"Mary\", \"marks\": 72},\n    {\"name\": \"Peter\", \"marks\": 35},\n    {\"name\": \"Jane\", \"marks\": 90}\n]"
        },
        {
          "type": "text",
          "text": "Creates a list of dictionaries."
        },
        {
          "type": "text",
          "text": "Each dictionary contains a student's name and marks."
        },
        {
          "type": "text",
          "text": "**Step 2: Extracting passing students**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "passing_students = [\n    student[\"name\"]\n    for student in students\n    if student[\"marks\"] >= 50\n]"
        },
        {
          "type": "text",
          "text": "This comprehension:"
        },
        {
          "type": "numbered",
          "items": [
            "Processes each student.",
            "Retrieves the student's marks.",
            "Checks whether the marks are at least 50.",
            "Adds the student's name to the new list if the condition is true."
          ]
        },
        {
          "type": "text",
          "text": "**Step 3: Extracting failed students**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "failed_students = [\n    student[\"name\"]\n    for student in students\n    if student[\"marks\"] < 50\n]"
        },
        {
          "type": "text",
          "text": "This performs the opposite operation."
        },
        {
          "type": "text",
          "text": "Only students who scored below 50 are included."
        },
        {
          "type": "text",
          "text": "**Step 4: Converting names into uppercase**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student_names = [\n    student[\"name\"].upper()\n    for student in students\n]"
        },
        {
          "type": "text",
          "text": "Processes every student and converts their name into uppercase."
        },
        {
          "type": "heading",
          "text": "Expected output"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Passing Students: ['Brian', 'Mary', 'Jane']\nFailed Students: ['John', 'Peter']\nAll Student Names: ['BRIAN', 'JOHN', 'MARY', 'PETER', 'JANE']"
        },
        {
          "type": "heading",
          "text": "8. Common Mistakes"
        },
        {
          "type": "table",
          "columns": [
            "Mistake",
            "Explanation",
            "Correction"
          ],
          "rows": [
            [
              "Missing brackets",
              "A list comprehension requires square brackets",
              "Use `[]`"
            ],
            [
              "Incorrect condition placement",
              "Filtering conditions follow the iterable",
              "Put `if` after the `for` clause"
            ],
            [
              "Confusing filtering with `if-else`",
              "They have different structures",
              "Use the appropriate syntax"
            ],
            [
              "Making comprehensions too complicated",
              "Difficult code becomes hard to maintain",
              "Use ordinary loops when necessary"
            ],
            [
              "Modifying the wrong list",
              "A comprehension normally creates a new list",
              "Assign its result to a new variable"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Filtering syntax"
        },
        {
          "type": "code",
          "language": "python",
          "code": "[x for x in numbers if x > 5]"
        },
        {
          "type": "heading",
          "text": "Conditional expression syntax"
        },
        {
          "type": "code",
          "language": "python",
          "code": "[\"Pass\" if x >= 50 else \"Fail\" for x in marks]"
        },
        {
          "type": "text",
          "text": "Remember this difference."
        },
        {
          "type": "heading",
          "text": "9. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete the following exercises."
        },
        {
          "type": "heading",
          "text": "Exercise 1: Square Numbers"
        },
        {
          "type": "text",
          "text": "Given:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5, 6]"
        },
        {
          "type": "text",
          "text": "Use a list comprehension to generate the square of every number."
        },
        {
          "type": "text",
          "text": "Expected output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "[1, 4, 9, 16, 25, 36]"
        },
        {
          "type": "heading",
          "text": "Exercise 2: Filter Numbers"
        },
        {
          "type": "text",
          "text": "Given:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [10, 15, 20, 25, 30, 35, 40]"
        },
        {
          "type": "text",
          "text": "Create a new list containing only numbers greater than 20."
        },
        {
          "type": "heading",
          "text": "Exercise 3: Extract Names"
        },
        {
          "type": "text",
          "text": "Given:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "names = [\"Brian\", \"John\", \"Mary\", \"Peter\", \"Jane\"]"
        },
        {
          "type": "text",
          "text": "Create a list containing names that have more than four characters."
        },
        {
          "type": "heading",
          "text": "Exercise 4: Categorize Marks"
        },
        {
          "type": "text",
          "text": "Given:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [80, 45, 67, 30, 90]"
        },
        {
          "type": "text",
          "text": "Use a list comprehension to produce:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "['Pass', 'Fail', 'Pass', 'Fail', 'Pass']"
        },
        {
          "type": "text",
          "text": "Assume 50 is the passing mark."
        },
        {
          "type": "heading",
          "text": "Exercise 5: Product Filtering"
        },
        {
          "type": "text",
          "text": "Given:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "prices = [500, 1500, 800, 2500, 300, 1200]"
        },
        {
          "type": "text",
          "text": "Create a new list containing prices below 1,000."
        },
        {
          "type": "heading",
          "text": "Exercise 6: Student Performance"
        },
        {
          "type": "text",
          "text": "Create a list of student dictionaries containing names and marks."
        },
        {
          "type": "text",
          "text": "Use list comprehensions to:"
        },
        {
          "type": "numbered",
          "items": [
            "Extract all student names.",
            "Extract students who passed.",
            "Extract students who failed.",
            "Generate a list containing each student's marks increased by five points."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 3 of 4"
        }
      ]
    },
    {
      "id": "python-list-comprehensions-part-4",
      "title": "PART 4 OF 4: KAI ASSESSMENT",
      "description": "Part 4 of 4",
      "blocks": [
        {
          "type": "heading",
          "text": "Python: List Comprehensions"
        },
        {
          "type": "text",
          "text": "Test your understanding of list comprehensions."
        },
        {
          "type": "heading",
          "text": "Question 1"
        },
        {
          "type": "text",
          "text": "What is a list comprehension?"
        },
        {
          "type": "text",
          "text": "A. A way of deleting lists."
        },
        {
          "type": "text",
          "text": "B. A shorter way of creating lists using an iterable and an expression."
        },
        {
          "type": "text",
          "text": "C. A function for sorting dictionaries."
        },
        {
          "type": "text",
          "text": "D. A method for opening files."
        },
        {
          "type": "heading",
          "text": "Question 2"
        },
        {
          "type": "text",
          "text": "What will this code produce?"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [x for x in range(1, 5)]\nprint(numbers)"
        },
        {
          "type": "text",
          "text": "A. `[1, 2, 3, 4, 5]`"
        },
        {
          "type": "text",
          "text": "B. `[1, 2, 3, 4]`"
        },
        {
          "type": "text",
          "text": "C. `[0, 1, 2, 3, 4]`"
        },
        {
          "type": "text",
          "text": "D. `[5]`"
        },
        {
          "type": "heading",
          "text": "Question 3"
        },
        {
          "type": "text",
          "text": "What is the purpose of `if` in a filtering list comprehension?"
        },
        {
          "type": "text",
          "text": "A. To delete the original list."
        },
        {
          "type": "text",
          "text": "B. To determine which items should be included."
        },
        {
          "type": "text",
          "text": "C. To create a function."
        },
        {
          "type": "text",
          "text": "D. To stop Python."
        },
        {
          "type": "heading",
          "text": "Question 4"
        },
        {
          "type": "text",
          "text": "What will this code produce?"
        },
        {
          "type": "code",
          "language": "python",
          "code": "numbers = [1, 2, 3, 4, 5, 6]\n\nresult = [x for x in numbers if x % 2 == 0]\n\nprint(result)"
        },
        {
          "type": "text",
          "text": "A. `[1, 3, 5]`"
        },
        {
          "type": "text",
          "text": "B. `[2, 4, 6]`"
        },
        {
          "type": "text",
          "text": "C. `[1, 2, 3, 4, 5, 6]`"
        },
        {
          "type": "text",
          "text": "D. `[0, 2, 4, 6]`"
        },
        {
          "type": "heading",
          "text": "Question 5"
        },
        {
          "type": "text",
          "text": "Which of the following correctly uses `if` and `else` in a list comprehension?"
        },
        {
          "type": "text",
          "text": "A. `[x for x in numbers if x > 5 else 0]`"
        },
        {
          "type": "text",
          "text": "B. `[x if x > 5 else 0 for x in numbers]`"
        },
        {
          "type": "text",
          "text": "C. `[if x > 5 else x for x in numbers]`"
        },
        {
          "type": "text",
          "text": "D. `[for x in numbers: x]`"
        },
        {
          "type": "heading",
          "text": "Question 6"
        },
        {
          "type": "text",
          "text": "What is the purpose of `name.upper()` in a list comprehension?"
        },
        {
          "type": "text",
          "text": "A. Converts a name to lowercase."
        },
        {
          "type": "text",
          "text": "B. Converts a name to uppercase."
        },
        {
          "type": "text",
          "text": "C. Deletes the name."
        },
        {
          "type": "text",
          "text": "D. Counts the characters."
        },
        {
          "type": "heading",
          "text": "Question 7"
        },
        {
          "type": "text",
          "text": "What is a dictionary comprehension used for?"
        },
        {
          "type": "text",
          "text": "A. Creating dictionaries using an expression and an iterable."
        },
        {
          "type": "text",
          "text": "B. Deleting dictionaries."
        },
        {
          "type": "text",
          "text": "C. Opening files."
        },
        {
          "type": "text",
          "text": "D. Running a Python application."
        },
        {
          "type": "heading",
          "text": "Question 8: Practical Programming Challenge"
        },
        {
          "type": "text",
          "text": "Given:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\n    {\"name\": \"Brian\", \"marks\": 80},\n    {\"name\": \"John\", \"marks\": 40},\n    {\"name\": \"Mary\", \"marks\": 75},\n    {\"name\": \"Peter\", \"marks\": 30}\n]"
        },
        {
          "type": "text",
          "text": "Write three list comprehensions that:"
        },
        {
          "type": "numbered",
          "items": [
            "Extract the names of all students.",
            "Extract the names of students who scored at least 50.",
            "Extract the names of students who scored below 50."
          ]
        },
        {
          "type": "text",
          "text": "Submit your answers and code to Kai for marking."
        },
        {
          "type": "heading",
          "text": "Lesson Completion"
        },
        {
          "type": "text",
          "text": "After submitting your assessment, Kai should:"
        },
        {
          "type": "bullets",
          "items": [
            "Mark all eight questions.",
            "Explain incorrect answers.",
            "Review your practical code.",
            "Identify areas that need improvement.",
            "Provide your final score."
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
          "text": "You will learn how to create small anonymous functions and use them with tools such as `map()`, `filter()` and `sorted()`."
        }
      ]
    }
  ]
};

export default delivery;
