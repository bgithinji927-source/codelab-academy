const delivery = {
  "type": "authored",
  "version": 1,
  "intro": "PYTHON: OBJECT-ORIENTED PROGRAMMING (OOP)",
  "sections": [
    {
      "id": "python-file-handling-part-1",
      "title": "PART 1 OF 4: INTRODUCTION TO OBJECT-ORIENTED PROGRAMMING",
      "description": "Part 1 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 1 OF 4: INTRODUCTION TO OBJECT-ORIENTED PROGRAMMING"
        },
        {
          "type": "heading",
          "text": "1. What Is Object-Oriented Programming?"
        },
        {
          "type": "text",
          "text": "Object-Oriented Programming (OOP) is a programming approach that organizes code around objects rather than relying entirely on separate functions and variables."
        },
        {
          "type": "text",
          "text": "An object represents something that has:"
        },
        {
          "type": "numbered",
          "items": [
            "**Attributes:** Information or characteristics describing the object.",
            "**Methods:** Actions or behaviours that the object can perform."
          ]
        },
        {
          "type": "text",
          "text": "For example, imagine developing a student management system."
        },
        {
          "type": "text",
          "text": "A student has characteristics such as:"
        },
        {
          "type": "bullets",
          "items": [
            "Name",
            "Age",
            "Registration number",
            "Course"
          ]
        },
        {
          "type": "text",
          "text": "A student can also perform actions such as:"
        },
        {
          "type": "bullets",
          "items": [
            "Register for a course.",
            "Display personal information.",
            "Update personal information.",
            "View examination results."
          ]
        },
        {
          "type": "text",
          "text": "In OOP, we can represent a student as an object containing both information and behaviours."
        },
        {
          "type": "heading",
          "text": "2. Understanding OOP Through Real-World Examples"
        },
        {
          "type": "text",
          "text": "Consider a car."
        },
        {
          "type": "text",
          "text": "A car has attributes:"
        },
        {
          "type": "table",
          "columns": [
            "Attribute",
            "Example"
          ],
          "rows": [
            [
              "Brand",
              "Toyota"
            ],
            [
              "Model",
              "Fielder"
            ],
            [
              "Colour",
              "White"
            ],
            [
              "Year",
              "2022"
            ],
            [
              "Speed",
              "80 km/h"
            ]
          ]
        },
        {
          "type": "text",
          "text": "A car also has behaviours:"
        },
        {
          "type": "bullets",
          "items": [
            "Start.",
            "Accelerate.",
            "Brake.",
            "Stop."
          ]
        },
        {
          "type": "text",
          "text": "In programming, we can represent this car using an object."
        },
        {
          "type": "text",
          "text": "Another example is a bank account."
        },
        {
          "type": "text",
          "text": "**Attributes:**"
        },
        {
          "type": "bullets",
          "items": [
            "Account holder.",
            "Account number.",
            "Balance."
          ]
        },
        {
          "type": "text",
          "text": "**Methods:**"
        },
        {
          "type": "bullets",
          "items": [
            "Deposit money.",
            "Withdraw money.",
            "Check balance."
          ]
        },
        {
          "type": "text",
          "text": "The important idea is that OOP combines related information and operations into organized structures."
        },
        {
          "type": "heading",
          "text": "3. Why Is Object-Oriented Programming Important?"
        },
        {
          "type": "text",
          "text": "Before understanding how to create objects, let's understand why developers use OOP."
        },
        {
          "type": "text",
          "text": "Imagine building a banking application with thousands of customer accounts."
        },
        {
          "type": "text",
          "text": "Using only separate variables, you might end up creating:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "customer1_name = \"Brian\"\ncustomer1_balance = 5000\n\ncustomer2_name = \"Mary\"\ncustomer2_balance = 8000\n\ncustomer3_name = \"John\"\ncustomer3_balance = 3000"
        },
        {
          "type": "text",
          "text": "This approach becomes difficult to manage as the number of customers increases."
        },
        {
          "type": "text",
          "text": "You would need to create more variables and functions for every customer."
        },
        {
          "type": "text",
          "text": "OOP provides a better way to organize this information."
        },
        {
          "type": "text",
          "text": "You can create one reusable structure called a class and use it to create many customer objects."
        },
        {
          "type": "text",
          "text": "Benefits of OOP include:"
        },
        {
          "type": "table",
          "columns": [
            "Benefit",
            "Explanation"
          ],
          "rows": [
            [
              "Code reusability",
              "Create a class once and use it to create many objects."
            ],
            [
              "Organization",
              "Keep related data and behaviours together."
            ],
            [
              "Maintainability",
              "Make changes to a class without rewriting every object."
            ],
            [
              "Security and control",
              "Control how an object's data is accessed and modified."
            ],
            [
              "Scalability",
              "Organize large applications into manageable components."
            ],
            [
              "Flexibility",
              "Use inheritance and polymorphism to extend and customize behaviour."
            ]
          ]
        },
        {
          "type": "text",
          "text": "OOP is commonly used in banking systems, inventory management, e-commerce platforms, school management systems, games and enterprise software."
        },
        {
          "type": "heading",
          "text": "4. Understanding Classes and Objects"
        },
        {
          "type": "text",
          "text": "Two of the most important concepts in OOP are classes and objects."
        },
        {
          "type": "text",
          "text": "Let's understand them separately."
        },
        {
          "type": "text",
          "text": "**A. What Is a Class?**"
        },
        {
          "type": "text",
          "text": "A class is a blueprint or template used to create objects."
        },
        {
          "type": "text",
          "text": "It defines the attributes and methods that objects created from it can have."
        },
        {
          "type": "text",
          "text": "Think about a building plan."
        },
        {
          "type": "text",
          "text": "An architect can create one building design and use it as a guide to construct several buildings."
        },
        {
          "type": "text",
          "text": "The design is similar to a class."
        },
        {
          "type": "text",
          "text": "The actual buildings are similar to objects."
        },
        {
          "type": "text",
          "text": "In Python, we define a class using the `class` keyword."
        },
        {
          "type": "text",
          "text": "Basic syntax:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class ClassName:\n    # Attributes and methods\n    pass"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`class` is the Python keyword used to define a class.",
            "`ClassName` is the name of the class.",
            "The colon `:` begins the class body.",
            "`pass` is a placeholder that allows the class to remain empty temporarily."
          ]
        },
        {
          "type": "text",
          "text": "**B. What Is an Object?**"
        },
        {
          "type": "text",
          "text": "An object is an instance of a class."
        },
        {
          "type": "text",
          "text": "This means an object is created using a class as its blueprint."
        },
        {
          "type": "text",
          "text": "For example, if we create a class called `Student`, we can create different student objects from it."
        },
        {
          "type": "text",
          "text": "Each object can hold its own information."
        },
        {
          "type": "heading",
          "text": "5. Creating Your First Python Class"
        },
        {
          "type": "text",
          "text": "Let's create a simple class called `Student`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n    name = \"Brian\"\n    age = 22\n    course = \"BBIT\""
        },
        {
          "type": "text",
          "text": "**Explanation line by line:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:"
        },
        {
          "type": "text",
          "text": "Defines a class called `Student`."
        },
        {
          "type": "text",
          "text": "The class name begins with a capital letter, following the common Python naming convention."
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = \"Brian\""
        },
        {
          "type": "text",
          "text": "Defines a class attribute called `name`."
        },
        {
          "type": "text",
          "text": "It stores the value `\"Brian\"`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "age = 22"
        },
        {
          "type": "text",
          "text": "Defines another class attribute containing the student's age."
        },
        {
          "type": "code",
          "language": "python",
          "code": "course = \"BBIT\""
        },
        {
          "type": "text",
          "text": "Stores the student's course."
        },
        {
          "type": "text",
          "text": "We have now created a class containing three attributes."
        },
        {
          "type": "text",
          "text": "However, defining a class does not automatically display anything."
        },
        {
          "type": "text",
          "text": "We need to create an object."
        },
        {
          "type": "heading",
          "text": "6. Creating an Object"
        },
        {
          "type": "text",
          "text": "Let's create an object from the `Student` class."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n    name = \"Brian\"\n    age = 22\n    course = \"BBIT\"\n\n\nstudent1 = Student()\n\nprint(student1.name)\nprint(student1.age)\nprint(student1.course)"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1 = Student()"
        },
        {
          "type": "text",
          "text": "This creates an object called `student1` from the `Student` class."
        },
        {
          "type": "text",
          "text": "The parentheses indicate that we are creating an instance of the class."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(student1.name)"
        },
        {
          "type": "text",
          "text": "Accesses the `name` attribute through the object."
        },
        {
          "type": "text",
          "text": "The dot `.` is used to access an attribute or method belonging to an object."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(student1.age)"
        },
        {
          "type": "text",
          "text": "Accesses the student's age."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(student1.course)"
        },
        {
          "type": "text",
          "text": "Accesses the student's course."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\n22\nBBIT"
        },
        {
          "type": "text",
          "text": "We can create another object from the same class:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student2 = Student()\n\nprint(student2.name)"
        },
        {
          "type": "text",
          "text": "Both objects initially access the same class attribute values."
        },
        {
          "type": "text",
          "text": "However, this example does not yet demonstrate how each student can have different information. We will solve that using the constructor in Part 2."
        },
        {
          "type": "heading",
          "text": "7. Understanding Attributes"
        },
        {
          "type": "text",
          "text": "An attribute is a variable associated with a class or object."
        },
        {
          "type": "text",
          "text": "Attributes represent the data or characteristics of an object."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Car:\n    brand = \"Toyota\"\n    model = \"Fielder\"\n    colour = \"White\""
        },
        {
          "type": "text",
          "text": "Here:"
        },
        {
          "type": "bullets",
          "items": [
            "`brand` is an attribute.",
            "`model` is an attribute.",
            "`colour` is an attribute."
          ]
        },
        {
          "type": "text",
          "text": "These attributes describe the car."
        },
        {
          "type": "heading",
          "text": "8. Understanding Methods"
        },
        {
          "type": "text",
          "text": "A method is a function defined inside a class."
        },
        {
          "type": "text",
          "text": "Methods describe the actions that an object can perform."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Car:\n\n    def start(self):\n        print(\"The car has started.\")\n\n    def stop(self):\n        print(\"The car has stopped.\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Car:"
        },
        {
          "type": "text",
          "text": "Defines a class called `Car`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def start(self):"
        },
        {
          "type": "text",
          "text": "Defines a method called `start`."
        },
        {
          "type": "text",
          "text": "Because it is inside the class, it is a method rather than an ordinary standalone function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"The car has started.\")"
        },
        {
          "type": "text",
          "text": "Displays a message when the method is executed."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def stop(self):"
        },
        {
          "type": "text",
          "text": "Defines another method called `stop`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"The car has stopped.\")"
        },
        {
          "type": "text",
          "text": "Displays a message when the car is stopped."
        },
        {
          "type": "text",
          "text": "To use these methods, we need to create an object."
        },
        {
          "type": "code",
          "language": "python",
          "code": "car1 = Car()\n\ncar1.start()\ncar1.stop()"
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "The car has started.\nThe car has stopped."
        },
        {
          "type": "text",
          "text": "Notice how we access methods using the object name followed by a dot."
        },
        {
          "type": "heading",
          "text": "9. Difference Between a Class and an Object"
        },
        {
          "type": "table",
          "columns": [
            "Class",
            "Object"
          ],
          "rows": [
            [
              "A blueprint or template",
              "An instance created from a class"
            ],
            [
              "Defines attributes and methods",
              "Uses the attributes and methods defined by the class"
            ],
            [
              "Defines the structure",
              "Represents an actual instance"
            ],
            [
              "Example: `Student`",
              "Example: `student1`"
            ]
          ]
        },
        {
          "type": "text",
          "text": "**Simple illustration:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "             CLASS\n           Student\n              |\n       ----------------\n       |      |       |\n      name   age    course\n              |\n       Creates objects\n              |\n      -------------------\n      |        |        |\n   student1 student2 student3"
        },
        {
          "type": "text",
          "text": "One class can be used to create many objects."
        },
        {
          "type": "text",
          "text": "Each object can represent a different student."
        },
        {
          "type": "heading",
          "text": "10. Naming Conventions in OOP"
        },
        {
          "type": "text",
          "text": "Python has common naming conventions for object-oriented programming."
        },
        {
          "type": "table",
          "columns": [
            "Element",
            "Convention",
            "Example"
          ],
          "rows": [
            [
              "Class",
              "PascalCase",
              "`StudentAccount`"
            ],
            [
              "Object",
              "snake_case",
              "`student_one`"
            ],
            [
              "Method",
              "snake_case",
              "`display_details()`"
            ],
            [
              "Attribute",
              "snake_case",
              "`student_name`"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Following these conventions makes code easier for other developers to understand."
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
      "id": "python-file-handling-part-2",
      "title": "PART 2 OF 4: CONSTRUCTORS, SELF, ATTRIBUTES AND OOP PRINCIPLES",
      "description": "Part 2 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 2 OF 4: CONSTRUCTORS, SELF, ATTRIBUTES AND OOP PRINCIPLES"
        },
        {
          "type": "heading",
          "text": "1. Understanding the Constructor"
        },
        {
          "type": "text",
          "text": "In Part 1, we created a class with predefined attributes."
        },
        {
          "type": "text",
          "text": "However, imagine creating a student management application with 1,000 students."
        },
        {
          "type": "text",
          "text": "We cannot manually create a separate class for every student."
        },
        {
          "type": "text",
          "text": "Instead, we need a way to provide different information whenever we create an object."
        },
        {
          "type": "text",
          "text": "Python provides a special method called `__init__()`."
        },
        {
          "type": "text",
          "text": "This method is commonly called the constructor, although technically it is an initializer that Python calls after creating the instance."
        },
        {
          "type": "text",
          "text": "It allows us to initialize an object's attributes when the object is created."
        },
        {
          "type": "text",
          "text": "**Example:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name, age, course):\n        self.name = name\n        self.age = age\n        self.course = course"
        },
        {
          "type": "text",
          "text": "Let's understand this carefully."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:"
        },
        {
          "type": "text",
          "text": "Defines a class called `Student`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def __init__(self, name, age, course):"
        },
        {
          "type": "text",
          "text": "Defines the special initialization method."
        },
        {
          "type": "text",
          "text": "The `__init__()` method is automatically called when a new object is created."
        },
        {
          "type": "text",
          "text": "It receives three pieces of information:"
        },
        {
          "type": "bullets",
          "items": [
            "`name`",
            "`age`",
            "`course`"
          ]
        },
        {
          "type": "text",
          "text": "It also receives `self`, which refers to the particular object being initialized."
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.name = name"
        },
        {
          "type": "text",
          "text": "Creates an instance attribute called `name` and stores the value passed into the constructor."
        },
        {
          "type": "text",
          "text": "The left side, `self.name`, refers to the object's attribute."
        },
        {
          "type": "text",
          "text": "The right side, `name`, refers to the parameter received by the method."
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.age = age"
        },
        {
          "type": "text",
          "text": "Stores the student's age in the object."
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.course = course"
        },
        {
          "type": "text",
          "text": "Stores the student's course."
        },
        {
          "type": "heading",
          "text": "2. Understanding self"
        },
        {
          "type": "text",
          "text": "The `self` keyword is one of the most important concepts in Python OOP."
        },
        {
          "type": "text",
          "text": "`self` refers to the current object."
        },
        {
          "type": "text",
          "text": "It allows methods to access and modify the attributes belonging to that particular object."
        },
        {
          "type": "text",
          "text": "Consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name):\n        self.name = name\n\n    def introduce(self):\n        print(\"My name is\", self.name)"
        },
        {
          "type": "text",
          "text": "When we create an object:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1 = Student(\"Brian\")"
        },
        {
          "type": "text",
          "text": "Python creates a student object and initializes its `name` attribute with `\"Brian\"`."
        },
        {
          "type": "text",
          "text": "When we call:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1.introduce()"
        },
        {
          "type": "text",
          "text": "Python passes the object to the method automatically as its first argument."
        },
        {
          "type": "text",
          "text": "Conceptually, this is similar to:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "Student.introduce(student1)"
        },
        {
          "type": "text",
          "text": "That is why the method has `self` as its first parameter."
        },
        {
          "type": "text",
          "text": "**Important:** `self` is a naming convention, not a reserved Python keyword. However, Python developers should use it when defining normal instance methods."
        },
        {
          "type": "heading",
          "text": "3. Creating Multiple Objects from One Class"
        },
        {
          "type": "text",
          "text": "Now let's create three students using the same class."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name, age, course):\n        self.name = name\n        self.age = age\n        self.course = course\n\n\nstudent1 = Student(\"Brian\", 22, \"BBIT\")\n\nstudent2 = Student(\"Mary\", 21, \"Computer Science\")\n\nstudent3 = Student(\"John\", 23, \"Information Technology\")\n\n\nprint(student1.name)\nprint(student2.name)\nprint(student3.name)"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1 = Student(\"Brian\", 22, \"BBIT\")"
        },
        {
          "type": "text",
          "text": "Creates the first student object."
        },
        {
          "type": "text",
          "text": "Its attributes become:"
        },
        {
          "type": "bullets",
          "items": [
            "Name: Brian",
            "Age: 22",
            "Course: BBIT"
          ]
        },
        {
          "type": "code",
          "language": "python",
          "code": "student2 = Student(\"Mary\", 21, \"Computer Science\")"
        },
        {
          "type": "text",
          "text": "Creates a second object with different information."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student3 = Student(\"John\", 23, \"Information Technology\")"
        },
        {
          "type": "text",
          "text": "Creates a third object."
        },
        {
          "type": "text",
          "text": "All three objects come from the same class, but they contain different information."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nMary\nJohn"
        },
        {
          "type": "text",
          "text": "This is one of the biggest advantages of OOP: we can reuse a class to create many independent objects."
        },
        {
          "type": "heading",
          "text": "4. Creating Methods with Parameters"
        },
        {
          "type": "text",
          "text": "Methods can receive parameters just like ordinary Python functions."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name):\n        self.name = name\n\n    def study(self, subject):\n        print(self.name, \"is studying\", subject)\n\n\nstudent1 = Student(\"Brian\")\n\nstudent1.study(\"Python\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def study(self, subject):"
        },
        {
          "type": "text",
          "text": "Defines a method called `study()`."
        },
        {
          "type": "text",
          "text": "It accepts the current object through `self` and an additional parameter called `subject`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(self.name, \"is studying\", subject)"
        },
        {
          "type": "text",
          "text": "Displays the student's name and the subject being studied."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1.study(\"Python\")"
        },
        {
          "type": "text",
          "text": "Calls the method and passes `\"Python\"` as the subject."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian is studying Python"
        },
        {
          "type": "heading",
          "text": "5. Modifying Object Attributes"
        },
        {
          "type": "text",
          "text": "Object attributes can be changed after an object has been created."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name, course):\n        self.name = name\n        self.course = course\n\n\nstudent1 = Student(\"Brian\", \"BBIT\")\n\nprint(student1.course)\n\nstudent1.course = \"Computer Science\"\n\nprint(student1.course)"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1 = Student(\"Brian\", \"BBIT\")"
        },
        {
          "type": "text",
          "text": "Creates a student object."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(student1.course)"
        },
        {
          "type": "text",
          "text": "Displays the original course."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1.course = \"Computer Science\""
        },
        {
          "type": "text",
          "text": "Changes the object's course attribute."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(student1.course)"
        },
        {
          "type": "text",
          "text": "Displays the updated course."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "BBIT\nComputer Science"
        },
        {
          "type": "text",
          "text": "We can also create a method that changes an attribute."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name, course):\n        self.name = name\n        self.course = course\n\n    def update_course(self, new_course):\n        self.course = new_course\n        print(\"Course updated successfully.\")\n\n\nstudent1 = Student(\"Brian\", \"BBIT\")\n\nstudent1.update_course(\"Software Engineering\")\n\nprint(student1.course)"
        },
        {
          "type": "text",
          "text": "This approach keeps the update operation inside the class."
        },
        {
          "type": "heading",
          "text": "6. Class Attributes vs Instance Attributes"
        },
        {
          "type": "text",
          "text": "Python supports two important types of attributes."
        },
        {
          "type": "text",
          "text": "**A. Class Attributes**"
        },
        {
          "type": "text",
          "text": "Class attributes belong to the class itself and are shared by instances unless an instance overrides the attribute."
        },
        {
          "type": "text",
          "text": "**B. Instance Attributes**"
        },
        {
          "type": "text",
          "text": "Instance attributes belong to individual objects."
        },
        {
          "type": "text",
          "text": "Let's understand the difference."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    institution = \"Kirinyaga University\"\n\n    def __init__(self, name, course):\n        self.name = name\n        self.course = course\n\n\nstudent1 = Student(\"Brian\", \"BBIT\")\n\nstudent2 = Student(\"Mary\", \"Computer Science\")\n\nprint(student1.institution)\nprint(student2.institution)"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "institution = \"Kirinyaga University\""
        },
        {
          "type": "text",
          "text": "Defines a class attribute."
        },
        {
          "type": "text",
          "text": "Both objects can access this attribute."
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.name = name\nself.course = course"
        },
        {
          "type": "text",
          "text": "Define instance attributes."
        },
        {
          "type": "text",
          "text": "Each object receives its own name and course."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Kirinyaga University\nKirinyaga University"
        },
        {
          "type": "text",
          "text": "Comparison:"
        },
        {
          "type": "table",
          "columns": [
            "Class attribute",
            "Instance attribute"
          ],
          "rows": [
            [
              "Defined in the class body",
              "Usually defined using `self` inside instance methods"
            ],
            [
              "Shared by instances unless overridden",
              "Belongs to an individual object"
            ],
            [
              "Example: institution",
              "Example: student name"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "7. The Four Main Principles of OOP"
        },
        {
          "type": "text",
          "text": "Object-Oriented Programming is commonly explained through four major principles:"
        },
        {
          "type": "numbered",
          "items": [
            "Encapsulation.",
            "Inheritance.",
            "Polymorphism.",
            "Abstraction."
          ]
        },
        {
          "type": "text",
          "text": "These principles help developers build organized, reusable and maintainable software."
        },
        {
          "type": "text",
          "text": "Let's explore each one."
        },
        {
          "type": "heading",
          "text": "8. Encapsulation"
        },
        {
          "type": "text",
          "text": "Encapsulation means combining data and the methods that operate on that data inside a class."
        },
        {
          "type": "text",
          "text": "It also involves controlling how an object's internal data is accessed and modified."
        },
        {
          "type": "text",
          "text": "Consider a bank account."
        },
        {
          "type": "text",
          "text": "We do not want every part of the application to modify the account balance without following the banking rules."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class BankAccount:\n\n    def __init__(self, balance):\n        self.__balance = balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n            print(\"Deposit successful.\")\n\n        else:\n            print(\"Invalid deposit amount.\")\n\n    def check_balance(self):\n        print(\"Balance:\", self.__balance)\n\n\naccount1 = BankAccount(5000)\n\naccount1.deposit(2000)\n\naccount1.check_balance()"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.__balance = balance"
        },
        {
          "type": "text",
          "text": "Creates an attribute using two leading underscores."
        },
        {
          "type": "text",
          "text": "This triggers Python's name-mangling mechanism, which makes accidental direct access from outside the class more difficult."
        },
        {
          "type": "text",
          "text": "It is not absolute security, but it encourages controlled access."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def deposit(self, amount):"
        },
        {
          "type": "text",
          "text": "Defines a method for depositing money."
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
          "code": "self.__balance += amount"
        },
        {
          "type": "text",
          "text": "Updates the balance."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def check_balance(self):"
        },
        {
          "type": "text",
          "text": "Defines a method for displaying the balance."
        },
        {
          "type": "code",
          "language": "python",
          "code": "account1.deposit(2000)"
        },
        {
          "type": "text",
          "text": "Deposits money through the class method instead of directly changing the balance."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Deposit successful.\nBalance: 7000"
        },
        {
          "type": "text",
          "text": "The important lesson is that the class controls how the balance is modified."
        },
        {
          "type": "heading",
          "text": "9. Inheritance"
        },
        {
          "type": "text",
          "text": "Inheritance allows one class to acquire attributes and methods from another class."
        },
        {
          "type": "text",
          "text": "The class being inherited from is called the parent class or base class."
        },
        {
          "type": "text",
          "text": "The class that inherits from it is called the child class or derived class."
        },
        {
          "type": "text",
          "text": "For example, imagine a university system containing different types of users."
        },
        {
          "type": "text",
          "text": "Both students and lecturers may have:"
        },
        {
          "type": "bullets",
          "items": [
            "A name.",
            "An email address.",
            "A method for displaying their details."
          ]
        },
        {
          "type": "text",
          "text": "Instead of writing the same code twice, we can create a parent class called `User`."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class User:\n\n    def __init__(self, name, email):\n        self.name = name\n        self.email = email\n\n    def display_details(self):\n        print(\"Name:\", self.name)\n        print(\"Email:\", self.email)\n\n\nclass Student(User):\n\n    def study(self):\n        print(self.name, \"is studying.\")\n\n\nstudent1 = Student(\"Brian\", \"brian@example.com\")\n\nstudent1.display_details()\n\nstudent1.study()"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class User:"
        },
        {
          "type": "text",
          "text": "Creates the parent class."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def __init__(self, name, email):"
        },
        {
          "type": "text",
          "text": "Initializes the user's information."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def display_details(self):"
        },
        {
          "type": "text",
          "text": "Defines a method that displays the user's information."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student(User):"
        },
        {
          "type": "text",
          "text": "Creates a child class called `Student`."
        },
        {
          "type": "text",
          "text": "The `(User)` means the Student class inherits from User."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def study(self):"
        },
        {
          "type": "text",
          "text": "Defines a new method specific to students."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1 = Student(\"Brian\", \"brian@example.com\")"
        },
        {
          "type": "text",
          "text": "Creates a student object."
        },
        {
          "type": "text",
          "text": "The child class can use the parent's initialization method because it has inherited from `User`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1.display_details()"
        },
        {
          "type": "text",
          "text": "Uses a method inherited from the parent class."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1.study()"
        },
        {
          "type": "text",
          "text": "Uses a method defined directly in the child class."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Name: Brian\nEmail: brian@example.com\nBrian is studying."
        },
        {
          "type": "heading",
          "text": "10. Polymorphism"
        },
        {
          "type": "text",
          "text": "Polymorphism means \"many forms.\""
        },
        {
          "type": "text",
          "text": "In OOP, it allows different objects to respond to the same method call in different ways."
        },
        {
          "type": "text",
          "text": "Consider a university system."
        },
        {
          "type": "text",
          "text": "Students and lecturers can both perform an action called `introduce()`, but the output can differ."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def introduce(self):\n        print(\"I am a student.\")\n\n\nclass Lecturer:\n\n    def introduce(self):\n        print(\"I am a lecturer.\")\n\n\nperson1 = Student()\n\nperson2 = Lecturer()\n\nperson1.introduce()\n\nperson2.introduce()"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "text",
          "text": "The `Student` class defines an `introduce()` method."
        },
        {
          "type": "text",
          "text": "The `Lecturer` class also defines an `introduce()` method."
        },
        {
          "type": "text",
          "text": "However, each class provides its own implementation."
        },
        {
          "type": "text",
          "text": "When we call:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "person1.introduce()"
        },
        {
          "type": "text",
          "text": "Python executes the version belonging to the `Student` object."
        },
        {
          "type": "text",
          "text": "When we call:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "person2.introduce()"
        },
        {
          "type": "text",
          "text": "Python executes the version belonging to the `Lecturer` object."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "I am a student.\nI am a lecturer."
        },
        {
          "type": "text",
          "text": "The same method name produces different behaviours depending on the object."
        },
        {
          "type": "heading",
          "text": "11. Abstraction"
        },
        {
          "type": "text",
          "text": "Abstraction means hiding unnecessary implementation details and exposing only the essential operations that users or other parts of a program need."
        },
        {
          "type": "text",
          "text": "For example, when you use an ATM:"
        },
        {
          "type": "bullets",
          "items": [
            "You insert your card.",
            "Enter your PIN.",
            "Select a transaction.",
            "Receive the requested service."
          ]
        },
        {
          "type": "text",
          "text": "You do not need to understand all the internal banking operations taking place behind the screen."
        },
        {
          "type": "text",
          "text": "In Python, abstraction can be implemented using abstract classes from the `abc` module."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from abc import ABC, abstractmethod\n\n\nclass Payment(ABC):\n\n    @abstractmethod\n    def process_payment(self):\n        pass\n\n\nclass MpesaPayment(Payment):\n\n    def process_payment(self):\n        print(\"Processing M-Pesa payment.\")\n\n\npayment = MpesaPayment()\n\npayment.process_payment()"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from abc import ABC, abstractmethod"
        },
        {
          "type": "text",
          "text": "Imports the tools needed to create abstract classes and methods."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Payment(ABC):"
        },
        {
          "type": "text",
          "text": "Defines an abstract class called `Payment`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "@abstractmethod\ndef process_payment(self):"
        },
        {
          "type": "text",
          "text": "Declares an abstract method."
        },
        {
          "type": "text",
          "text": "Child classes must provide an implementation before they can be instantiated."
        },
        {
          "type": "code",
          "language": "python",
          "code": "class MpesaPayment(Payment):"
        },
        {
          "type": "text",
          "text": "Creates a child class that inherits from `Payment`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def process_payment(self):"
        },
        {
          "type": "text",
          "text": "Implements the payment operation."
        },
        {
          "type": "code",
          "language": "python",
          "code": "payment = MpesaPayment()"
        },
        {
          "type": "text",
          "text": "Creates an object of the concrete child class."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Processing M-Pesa payment."
        },
        {
          "type": "text",
          "text": "You cannot normally create an object directly from `Payment` while it still contains an unimplemented abstract method."
        },
        {
          "type": "heading",
          "text": "12. Summary of the Four OOP Principles"
        },
        {
          "type": "table",
          "columns": [
            "Principle",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "Encapsulation",
              "Organizing data and methods together and controlling access",
              "Protecting a bank account balance"
            ],
            [
              "Inheritance",
              "Reusing features from another class",
              "Student inheriting from User"
            ],
            [
              "Polymorphism",
              "Different objects using the same method name with different behaviours",
              "Student and lecturer introductions"
            ],
            [
              "Abstraction",
              "Hiding implementation details and exposing essential operations",
              "Payment processing interface"
            ]
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
      "id": "python-file-handling-part-3",
      "title": "PART 3 OF 4: PRACTICAL OBJECT-ORIENTED PROGRAMMING",
      "description": "Part 3 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 3 OF 4: PRACTICAL OBJECT-ORIENTED PROGRAMMING"
        },
        {
          "type": "text",
          "text": "Now we will apply OOP concepts by building practical Python applications."
        },
        {
          "type": "heading",
          "text": "1. Prepare Your Development Environment"
        },
        {
          "type": "text",
          "text": "Create a project folder:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_oop_project/"
        },
        {
          "type": "text",
          "text": "Inside it, create:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_oop_project/\n│\n├── main.py\n│\n└── models/"
        },
        {
          "type": "text",
          "text": "For now, we will write our first project inside `main.py`."
        },
        {
          "type": "text",
          "text": "Open the folder in Visual Studio Code."
        },
        {
          "type": "text",
          "text": "Open the terminal and run:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python main.py"
        },
        {
          "type": "heading",
          "text": "2. Practical Project One: Student Management System"
        },
        {
          "type": "text",
          "text": "We will build a student management system that can:"
        },
        {
          "type": "numbered",
          "items": [
            "Create student objects.",
            "Store student information.",
            "Display student details.",
            "Update student information.",
            "Calculate student grades."
          ]
        },
        {
          "type": "text",
          "text": "**Step 1: Create the Student class**"
        },
        {
          "type": "text",
          "text": "Inside `main.py`, write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name, age, course, marks):\n        self.name = name\n        self.age = age\n        self.course = course\n        self.marks = marks"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "text",
          "text": "The class defines the structure of a student."
        },
        {
          "type": "text",
          "text": "The constructor accepts four parameters:"
        },
        {
          "type": "bullets",
          "items": [
            "Name.",
            "Age.",
            "Course.",
            "Marks."
          ]
        },
        {
          "type": "text",
          "text": "Each parameter is stored as an instance attribute."
        },
        {
          "type": "text",
          "text": "**Step 2: Add a method to display student details**"
        },
        {
          "type": "text",
          "text": "Add this method inside the `Student` class:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "    def display_details(self):\n        print(\"STUDENT DETAILS\")\n        print(\"Name:\", self.name)\n        print(\"Age:\", self.age)\n        print(\"Course:\", self.course)\n        print(\"Marks:\", self.marks)"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`display_details()` defines a method for showing student information.",
            "`self.name` retrieves the name of the current student.",
            "`self.age` retrieves the student's age.",
            "`self.course` retrieves the course.",
            "`self.marks` retrieves the marks."
          ]
        },
        {
          "type": "text",
          "text": "**Step 3: Add a grading method**"
        },
        {
          "type": "text",
          "text": "Inside the same class, add:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "    def calculate_grade(self):\n\n        if self.marks >= 70:\n            return \"A\"\n\n        elif self.marks >= 60:\n            return \"B\"\n\n        elif self.marks >= 50:\n            return \"C\"\n\n        elif self.marks >= 40:\n            return \"D\"\n\n        else:\n            return \"E\""
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "The method checks the student's marks and returns a grade."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "bullets",
          "items": [
            "85 returns A.",
            "65 returns B.",
            "55 returns C.",
            "45 returns D.",
            "30 returns E."
          ]
        },
        {
          "type": "text",
          "text": "The `return` keyword sends the calculated grade back to the part of the program that called the method."
        },
        {
          "type": "text",
          "text": "**Step 4: Add a method for updating the course**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "    def update_course(self, new_course):\n        self.course = new_course\n        print(\"Course updated successfully.\")"
        },
        {
          "type": "text",
          "text": "This method receives a new course and updates the current student's course attribute."
        },
        {
          "type": "text",
          "text": "**Step 5: Create student objects**"
        },
        {
          "type": "text",
          "text": "After the class definition, write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1 = Student(\"Brian\", 22, \"BBIT\", 85)\n\nstudent2 = Student(\"Mary\", 21, \"Computer Science\", 67)"
        },
        {
          "type": "text",
          "text": "These statements create two independent student objects."
        },
        {
          "type": "text",
          "text": "**Step 6: Use the methods**"
        },
        {
          "type": "text",
          "text": "Add:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1.display_details()\n\nprint(\"Grade:\", student1.calculate_grade())\n\nstudent2.display_details()\n\nprint(\"Grade:\", student2.calculate_grade())"
        },
        {
          "type": "text",
          "text": "These statements call the methods belonging to the objects."
        },
        {
          "type": "text",
          "text": "**Complete program:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name, age, course, marks):\n        self.name = name\n        self.age = age\n        self.course = course\n        self.marks = marks\n\n    def display_details(self):\n        print(\"\\nSTUDENT DETAILS\")\n        print(\"Name:\", self.name)\n        print(\"Age:\", self.age)\n        print(\"Course:\", self.course)\n        print(\"Marks:\", self.marks)\n\n    def calculate_grade(self):\n\n        if self.marks >= 70:\n            return \"A\"\n\n        elif self.marks >= 60:\n            return \"B\"\n\n        elif self.marks >= 50:\n            return \"C\"\n\n        elif self.marks >= 40:\n            return \"D\"\n\n        else:\n            return \"E\"\n\n    def update_course(self, new_course):\n        self.course = new_course\n        print(\"Course updated successfully.\")\n\n\nstudent1 = Student(\"Brian\", 22, \"BBIT\", 85)\n\nstudent2 = Student(\"Mary\", 21, \"Computer Science\", 67)\n\n\nstudent1.display_details()\n\nprint(\"Grade:\", student1.calculate_grade())\n\n\nstudent2.display_details()\n\nprint(\"Grade:\", student2.calculate_grade())"
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "STUDENT DETAILS\nName: Brian\nAge: 22\nCourse: BBIT\nMarks: 85\nGrade: A\n\nSTUDENT DETAILS\nName: Mary\nAge: 21\nCourse: Computer Science\nMarks: 67\nGrade: B"
        },
        {
          "type": "heading",
          "text": "3. Practical Project Two: Banking System"
        },
        {
          "type": "text",
          "text": "Now let's create a simple banking application using OOP."
        },
        {
          "type": "text",
          "text": "Our application will support:"
        },
        {
          "type": "bullets",
          "items": [
            "Creating a bank account.",
            "Depositing money.",
            "Withdrawing money.",
            "Checking the account balance."
          ]
        },
        {
          "type": "text",
          "text": "**Step 1: Create the BankAccount class**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class BankAccount:\n\n    def __init__(self, account_holder, balance):\n        self.account_holder = account_holder\n        self.balance = balance"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "The class represents a bank account."
        },
        {
          "type": "text",
          "text": "The constructor receives:"
        },
        {
          "type": "bullets",
          "items": [
            "The account holder's name.",
            "The starting balance."
          ]
        },
        {
          "type": "text",
          "text": "It stores these values as instance attributes."
        },
        {
          "type": "text",
          "text": "**Step 2: Create a deposit method**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "    def deposit(self, amount):\n\n        if amount > 0:\n            self.balance += amount\n            print(\"Deposit successful.\")\n\n        else:\n            print(\"Invalid deposit amount.\")"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "The method receives an amount to deposit."
        },
        {
          "type": "text",
          "text": "It checks whether the amount is greater than zero."
        },
        {
          "type": "text",
          "text": "If valid, it adds the amount to the current balance."
        },
        {
          "type": "text",
          "text": "Otherwise, it displays an error message."
        },
        {
          "type": "text",
          "text": "**Step 3: Create a withdrawal method**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "    def withdraw(self, amount):\n\n        if amount <= 0:\n            print(\"Invalid withdrawal amount.\")\n\n        elif amount > self.balance:\n            print(\"Insufficient balance.\")\n\n        else:\n            self.balance -= amount\n            print(\"Withdrawal successful.\")"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "text",
          "text": "The method first checks whether the requested amount is valid."
        },
        {
          "type": "text",
          "text": "It then checks whether the account has enough money."
        },
        {
          "type": "text",
          "text": "If both conditions are satisfied, the amount is deducted from the balance."
        },
        {
          "type": "text",
          "text": "**Step 4: Create a balance-checking method**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "    def check_balance(self):\n        print(\"Account holder:\", self.account_holder)\n        print(\"Current balance:\", self.balance)"
        },
        {
          "type": "text",
          "text": "This method displays the account holder's name and current balance."
        },
        {
          "type": "text",
          "text": "**Step 5: Create and use an account**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "account1 = BankAccount(\"Brian\", 10000)\n\naccount1.check_balance()\n\naccount1.deposit(5000)\n\naccount1.withdraw(3000)\n\naccount1.check_balance()"
        },
        {
          "type": "text",
          "text": "**Complete program:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class BankAccount:\n\n    def __init__(self, account_holder, balance):\n        self.account_holder = account_holder\n        self.balance = balance\n\n    def deposit(self, amount):\n\n        if amount > 0:\n            self.balance += amount\n            print(\"Deposit successful.\")\n\n        else:\n            print(\"Invalid deposit amount.\")\n\n    def withdraw(self, amount):\n\n        if amount <= 0:\n            print(\"Invalid withdrawal amount.\")\n\n        elif amount > self.balance:\n            print(\"Insufficient balance.\")\n\n        else:\n            self.balance -= amount\n            print(\"Withdrawal successful.\")\n\n    def check_balance(self):\n        print(\"\\nAccount holder:\", self.account_holder)\n        print(\"Current balance:\", self.balance)\n\n\naccount1 = BankAccount(\"Brian\", 10000)\n\naccount1.check_balance()\n\naccount1.deposit(5000)\n\naccount1.withdraw(3000)\n\naccount1.check_balance()"
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Account holder: Brian\nCurrent balance: 10000\n\nDeposit successful.\n\nWithdrawal successful.\n\nAccount holder: Brian\nCurrent balance: 12000"
        },
        {
          "type": "text",
          "text": "Notice how the object maintains its balance throughout the program."
        },
        {
          "type": "text",
          "text": "The deposit and withdrawal methods update the same object's balance."
        },
        {
          "type": "text",
          "text": "**Important:** This is an educational example. A real banking system requires secure account access, persistent storage, transaction handling and additional financial safeguards."
        },
        {
          "type": "heading",
          "text": "4. Practical Project Three: Inheritance in an Employee Management System"
        },
        {
          "type": "text",
          "text": "Imagine developing an employee management system."
        },
        {
          "type": "text",
          "text": "Different employees share common information:"
        },
        {
          "type": "bullets",
          "items": [
            "Name.",
            "Employee ID.",
            "Salary."
          ]
        },
        {
          "type": "text",
          "text": "However, different employee types may have different responsibilities."
        },
        {
          "type": "text",
          "text": "We can use inheritance to avoid repeating common code."
        },
        {
          "type": "text",
          "text": "**Step 1: Create a parent class**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Employee:\n\n    def __init__(self, name, employee_id):\n        self.name = name\n        self.employee_id = employee_id\n\n    def display_details(self):\n        print(\"Name:\", self.name)\n        print(\"Employee ID:\", self.employee_id)"
        },
        {
          "type": "text",
          "text": "This class contains the common information and behaviour."
        },
        {
          "type": "text",
          "text": "**Step 2: Create a child class**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Manager(Employee):\n\n    def manage_team(self):\n        print(self.name, \"is managing a team.\")"
        },
        {
          "type": "text",
          "text": "The `Manager` class inherits from `Employee`."
        },
        {
          "type": "text",
          "text": "It receives the parent's attributes and methods."
        },
        {
          "type": "text",
          "text": "It also introduces a new method called `manage_team()`."
        },
        {
          "type": "text",
          "text": "**Step 3: Create an object**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "manager1 = Manager(\"Brian\", \"EMP001\")\n\nmanager1.display_details()\n\nmanager1.manage_team()"
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Name: Brian\nEmployee ID: EMP001\nBrian is managing a team."
        },
        {
          "type": "text",
          "text": "The manager can access both inherited methods and its own methods."
        },
        {
          "type": "heading",
          "text": "5. Practical Project Four: Polymorphism"
        },
        {
          "type": "text",
          "text": "Let's create different payment methods."
        },
        {
          "type": "text",
          "text": "An e-commerce application may support:"
        },
        {
          "type": "bullets",
          "items": [
            "M-Pesa.",
            "Bank transfers.",
            "Card payments."
          ]
        },
        {
          "type": "text",
          "text": "All payment methods perform a similar operation, but their implementations differ."
        },
        {
          "type": "text",
          "text": "**Code:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class MpesaPayment:\n\n    def pay(self, amount):\n        print(\"Paying KSh\", amount, \"using M-Pesa.\")\n\n\nclass BankPayment:\n\n    def pay(self, amount):\n        print(\"Paying KSh\", amount, \"using bank transfer.\")\n\n\nclass CardPayment:\n\n    def pay(self, amount):\n        print(\"Paying KSh\", amount, \"using a card.\")\n\n\npayments = [\n    MpesaPayment(),\n    BankPayment(),\n    CardPayment()\n]\n\n\nfor payment in payments:\n    payment.pay(1000)"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "text",
          "text": "Each class defines a method called `pay()`."
        },
        {
          "type": "text",
          "text": "However, each class implements that method differently."
        },
        {
          "type": "text",
          "text": "The list stores three different payment objects."
        },
        {
          "type": "text",
          "text": "The `for` loop visits each object and calls its `pay()` method."
        },
        {
          "type": "text",
          "text": "Python executes the implementation belonging to the current object."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Paying KSh 1000 using M-Pesa.\nPaying KSh 1000 using bank transfer.\nPaying KSh 1000 using a card."
        },
        {
          "type": "text",
          "text": "This demonstrates polymorphism."
        },
        {
          "type": "text",
          "text": "**Note:** This example demonstrates polymorphic behaviour. It does not connect to real M-Pesa, bank or card payment services."
        },
        {
          "type": "heading",
          "text": "6. Organizing OOP Projects into Multiple Files"
        },
        {
          "type": "text",
          "text": "As applications become larger, placing every class in one Python file becomes difficult to maintain."
        },
        {
          "type": "text",
          "text": "We can organize classes into separate modules."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "school_management/\n│\n├── main.py\n│\n├── student.py\n│\n└── teacher.py"
        },
        {
          "type": "text",
          "text": "**student.py**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name, course):\n        self.name = name\n        self.course = course\n\n    def display(self):\n        print(\"Student:\", self.name)\n        print(\"Course:\", self.course)"
        },
        {
          "type": "text",
          "text": "**teacher.py**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Teacher:\n\n    def __init__(self, name, subject):\n        self.name = name\n        self.subject = subject\n\n    def display(self):\n        print(\"Teacher:\", self.name)\n        print(\"Subject:\", self.subject)"
        },
        {
          "type": "text",
          "text": "**main.py**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from student import Student\nfrom teacher import Teacher\n\n\nstudent1 = Student(\"Brian\", \"BBIT\")\n\nteacher1 = Teacher(\"Mr. James\", \"Python\")\n\n\nstudent1.display()\n\nteacher1.display()"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`from student import Student` imports the Student class.",
            "`from teacher import Teacher` imports the Teacher class.",
            "The program creates objects from both classes.",
            "Each object uses its own `display()` method."
          ]
        },
        {
          "type": "text",
          "text": "This is how OOP works together with Python modules and packages."
        },
        {
          "type": "heading",
          "text": "7. Common OOP Mistakes"
        },
        {
          "type": "text",
          "text": "**Mistake 1: Forgetting self**"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def display():\n        print(\"Student details\")"
        },
        {
          "type": "text",
          "text": "When called through an object, Python automatically passes the object to the method."
        },
        {
          "type": "text",
          "text": "The method has no parameter to receive it."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def display(self):\n        print(\"Student details\")"
        },
        {
          "type": "text",
          "text": "**Mistake 2: Incorrect constructor name**"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def init(self, name):\n        self.name = name"
        },
        {
          "type": "text",
          "text": "Python will not automatically recognize `init()` as the special initialization method."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name):\n        self.name = name"
        },
        {
          "type": "text",
          "text": "The method must have two underscores before and after `init`."
        },
        {
          "type": "text",
          "text": "**Mistake 3: Creating an object incorrectly**"
        },
        {
          "type": "text",
          "text": "Incorrect:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n    pass\n\n\nstudent1 = Student"
        },
        {
          "type": "text",
          "text": "This assigns the class itself to `student1`; it does not create an instance."
        },
        {
          "type": "text",
          "text": "Correct:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student1 = Student()"
        },
        {
          "type": "text",
          "text": "**Mistake 4: Confusing class attributes and instance attributes**"
        },
        {
          "type": "text",
          "text": "Consider:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n    name = \"Brian\""
        },
        {
          "type": "text",
          "text": "Here, `name` is a class attribute."
        },
        {
          "type": "text",
          "text": "For an individual student's name, you would commonly use:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "self.name = name"
        },
        {
          "type": "text",
          "text": "inside the constructor."
        },
        {
          "type": "heading",
          "text": "8. Practical Exercises"
        },
        {
          "type": "text",
          "text": "Complete these exercises to strengthen your understanding."
        },
        {
          "type": "text",
          "text": "**Exercise 1: Create a Car Class**"
        },
        {
          "type": "text",
          "text": "Create a class called `Car`."
        },
        {
          "type": "text",
          "text": "It should have:"
        },
        {
          "type": "bullets",
          "items": [
            "Brand.",
            "Model.",
            "Colour."
          ]
        },
        {
          "type": "text",
          "text": "Create a method called `display_details()`."
        },
        {
          "type": "text",
          "text": "Create at least two car objects with different information."
        },
        {
          "type": "text",
          "text": "**Exercise 2: Create a Calculator Class**"
        },
        {
          "type": "text",
          "text": "Create a class called `Calculator`."
        },
        {
          "type": "text",
          "text": "It should have methods for:"
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
          "text": "Create an object and test all four methods."
        },
        {
          "type": "text",
          "text": "Handle division by zero."
        },
        {
          "type": "text",
          "text": "**Exercise 3: Create a Bank Account Class**"
        },
        {
          "type": "text",
          "text": "Create a class called `BankAccount`."
        },
        {
          "type": "text",
          "text": "It should:"
        },
        {
          "type": "bullets",
          "items": [
            "Accept an account holder's name.",
            "Accept an initial balance.",
            "Allow deposits.",
            "Allow withdrawals.",
            "Display the current balance."
          ]
        },
        {
          "type": "text",
          "text": "Reject invalid deposits and withdrawals."
        },
        {
          "type": "text",
          "text": "**Exercise 4: Practice Inheritance**"
        },
        {
          "type": "text",
          "text": "Create a parent class called `Person`."
        },
        {
          "type": "text",
          "text": "Give it:"
        },
        {
          "type": "bullets",
          "items": [
            "Name.",
            "Age.",
            "A method for displaying personal details."
          ]
        },
        {
          "type": "text",
          "text": "Create two child classes:"
        },
        {
          "type": "bullets",
          "items": [
            "`Student`",
            "`Teacher`"
          ]
        },
        {
          "type": "text",
          "text": "Give each child class an additional method specific to its role."
        },
        {
          "type": "text",
          "text": "**Exercise 5: Practice Polymorphism**"
        },
        {
          "type": "text",
          "text": "Create three classes:"
        },
        {
          "type": "bullets",
          "items": [
            "`Dog`",
            "`Cat`",
            "`Cow`"
          ]
        },
        {
          "type": "text",
          "text": "Each class should have a method called `make_sound()`."
        },
        {
          "type": "text",
          "text": "Give each class a different implementation."
        },
        {
          "type": "text",
          "text": "Create objects and call the same method on each object."
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
          "text": "You have completed the introduction to Python Object-Oriented Programming."
        },
        {
          "type": "text",
          "text": "Now demonstrate your understanding."
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
            "Understand the difference between classes, objects, attributes and methods.",
            "Pay attention to the four principles of OOP.",
            "Submit your answers to Kai for marking and feedback."
          ]
        },
        {
          "type": "heading",
          "text": "Question 1: Understanding OOP"
        },
        {
          "type": "quiz",
          "question": "What is Object-Oriented Programming?",
          "options": [
            "A. A programming approach that organizes code around objects.",
            "B. A method used only for creating loops.",
            "C. A technique for deleting files.",
            "D. A method used only for mathematical calculations."
          ],
          "answer": "A. A programming approach that organizes code around objects.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 2: Classes and Objects"
        },
        {
          "type": "quiz",
          "question": "What is a class in Python?",
          "options": [
            "A. An actual instance of a variable.",
            "B. A blueprint used to create objects.",
            "C. A function that deletes objects.",
            "D. A Python exception."
          ],
          "answer": "B. A blueprint used to create objects.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 3: The Constructor"
        },
        {
          "type": "quiz",
          "question": "What is the purpose of the `__init__()` method?",
          "options": [
            "A. To delete an object.",
            "B. To initialize an object when it is created.",
            "C. To import a module.",
            "D. To stop a Python program."
          ],
          "answer": "B. To initialize an object when it is created.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 4: Understanding self"
        },
        {
          "type": "quiz",
          "question": "What does `self` represent inside a normal instance method?",
          "options": [
            "A. The parent class.",
            "B. The current object.",
            "C. The Python interpreter.",
            "D. A global variable."
          ],
          "answer": "B. The current object.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 5: Encapsulation"
        },
        {
          "type": "quiz",
          "question": "Which OOP principle involves combining data and methods in a class and controlling access to internal data?",
          "options": [
            "A. Inheritance.",
            "B. Polymorphism.",
            "C. Encapsulation.",
            "D. Abstraction."
          ],
          "answer": "C. Encapsulation.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 6: Inheritance"
        },
        {
          "type": "quiz",
          "question": "What is inheritance in OOP?",
          "options": [
            "A. Creating a class that can reuse attributes and methods from another class.",
            "B. Deleting a class after creating an object.",
            "C. Converting a string into an integer.",
            "D. Reading information from a file."
          ],
          "answer": "A. Creating a class that can reuse attributes and methods from another class.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 7: Polymorphism"
        },
        {
          "type": "quiz",
          "question": "What does polymorphism allow?",
          "options": [
            "A. Every object must have exactly the same attributes.",
            "B. Different objects can respond to the same method call in different ways.",
            "C. A class cannot have methods.",
            "D. Objects cannot inherit from other classes."
          ],
          "answer": "B. Different objects can respond to the same method call in different ways.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 8: Understanding Objects"
        },
        {
          "type": "code",
          "language": "python",
          "code": "class Student:\n\n    def __init__(self, name):\n        self.name = name\n\n    def introduce(self):\n        print(\"My name is\", self.name)\n\n\nstudent1 = Student(\"Brian\")\n\nstudent1.introduce()"
        },
        {
          "type": "quiz",
          "question": "What will the program display?",
          "options": [
            "A. `Student`",
            "B. `My name is Brian`",
            "C. `self.name`",
            "D. `My name is student1`"
          ],
          "answer": "B. `My name is Brian`",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Practical Challenge: Build an Employee Management System"
        },
        {
          "type": "text",
          "text": "Create a Python application using Object-Oriented Programming."
        },
        {
          "type": "text",
          "text": "Your application should support the following:"
        },
        {
          "type": "text",
          "text": "**1. Employee Class**"
        },
        {
          "type": "text",
          "text": "Create a class called `Employee`."
        },
        {
          "type": "text",
          "text": "It should contain:"
        },
        {
          "type": "bullets",
          "items": [
            "Employee name.",
            "Employee ID.",
            "Department.",
            "Salary."
          ]
        },
        {
          "type": "text",
          "text": "**2. Employee Methods**"
        },
        {
          "type": "text",
          "text": "Create methods that can:"
        },
        {
          "type": "bullets",
          "items": [
            "Display employee details.",
            "Update the employee's department.",
            "Calculate an annual salary."
          ]
        },
        {
          "type": "text",
          "text": "**3. Inheritance**"
        },
        {
          "type": "text",
          "text": "Create a child class called `Manager` that inherits from `Employee`."
        },
        {
          "type": "text",
          "text": "Give the manager an additional attribute called `team_size`."
        },
        {
          "type": "text",
          "text": "Create a method that displays the number of team members."
        },
        {
          "type": "text",
          "text": "**4. Polymorphism**"
        },
        {
          "type": "text",
          "text": "Create a method called `work()`."
        },
        {
          "type": "text",
          "text": "The normal employee and manager should implement it differently."
        },
        {
          "type": "text",
          "text": "**5. Object Creation**"
        },
        {
          "type": "text",
          "text": "Create at least:"
        },
        {
          "type": "bullets",
          "items": [
            "Two employee objects.",
            "One manager object."
          ]
        },
        {
          "type": "text",
          "text": "Display their information and call their methods."
        },
        {
          "type": "text",
          "text": "**6. Code Organization**"
        },
        {
          "type": "text",
          "text": "Keep your classes organized and use meaningful names."
        },
        {
          "type": "text",
          "text": "You may organize the project into separate Python files."
        },
        {
          "type": "heading",
          "text": "Submission"
        },
        {
          "type": "text",
          "text": "Submit:"
        },
        {
          "type": "numbered",
          "items": [
            "Your answers to all eight assessment questions.",
            "Your completed Employee Management System.",
            "Your Python source code."
          ]
        },
        {
          "type": "text",
          "text": "Kai should evaluate your answers, review your code, identify mistakes, explain corrections and provide feedback."
        },
        {
          "type": "heading",
          "text": "LESSON COMPLETE"
        },
        {
          "type": "text",
          "text": "You have now learned:"
        },
        {
          "type": "bullets",
          "items": [
            "What Object-Oriented Programming is.",
            "Why developers use OOP.",
            "Classes and objects.",
            "Attributes and methods.",
            "Constructors using `__init__()`.",
            "The meaning of `self`.",
            "Creating multiple objects from one class.",
            "Class attributes and instance attributes.",
            "Encapsulation.",
            "Inheritance.",
            "Polymorphism.",
            "Abstraction.",
            "Organizing OOP projects into multiple Python files.",
            "Building practical applications using OOP."
          ]
        },
        {
          "type": "text",
          "text": "**Part 4 of 4 — Lesson Complete**"
        },
        {
          "type": "text",
          "text": "**Recommended next lesson: Python OOP — Advanced Classes, Inheritance and Method Overriding.**"
        }
      ]
    }
  ]
};

export default delivery;
