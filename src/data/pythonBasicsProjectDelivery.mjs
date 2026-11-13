const delivery = {
  "type": "authored",
  "version": 1,
  "sections": [
    {
      "id": "python-basics-project-part-1",
      "title": "PART 1: PROJECT INTRODUCTION AND PLANNING",
      "description": "Part 1 of 4",
      "blocks": [
      {
        "type": "heading",
        "text": "PYTHON BASICS PROJECT"
      },
        {
          "type": "heading",
          "text": "1. What Is a Programming Project?"
        },
        {
          "type": "text",
          "text": "A programming project is an application developed to solve a particular problem using programming concepts and instructions."
        },
        {
          "type": "text",
          "text": "So far, you have learned individual Python concepts, including:"
        },
        {
          "type": "bullets",
          "items": [
            "Variables and data types.",
            "Input and output.",
            "Operators.",
            "Conditional statements.",
            "Loops.",
            "Lists and dictionaries.",
            "Functions.",
            "File handling.",
            "Modules."
          ]
        },
        {
          "type": "text",
          "text": "In this project, you will combine these concepts to build one working application."
        },
        {
          "type": "heading",
          "text": "2. Project Overview"
        },
        {
          "type": "heading",
          "text": "Project Name: Student Management System"
        },
        {
          "type": "text",
          "text": "We are going to build a simple command-line application that allows a user to manage student records."
        },
        {
          "type": "text",
          "text": "The application will allow users to:"
        },
        {
          "type": "numbered",
          "items": [
            "Register new students.",
            "View all registered students.",
            "Search for a student.",
            "Calculate student grades.",
            "Display student performance.",
            "Save student records.",
            "Load previously saved records.",
            "Exit the application."
          ]
        },
        {
          "type": "heading",
          "text": "Example of the application"
        },
        {
          "type": "text",
          "text": "When someone runs the program, they should see:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "================================\n     STUDENT MANAGEMENT SYSTEM\n================================\n\n1. Register Student\n2. View All Students\n3. Search Student\n4. Calculate Student Grade\n5. Exit\n\nEnter your choice:"
        },
        {
          "type": "text",
          "text": "The user selects an option, and the application performs the requested operation."
        },
        {
          "type": "heading",
          "text": "3. Understanding the Problem"
        },
        {
          "type": "text",
          "text": "Before writing code, a software developer should understand the problem being solved."
        },
        {
          "type": "text",
          "text": "Imagine a lecturer who manages 100 students."
        },
        {
          "type": "text",
          "text": "Without a management system, the lecturer might have to:"
        },
        {
          "type": "bullets",
          "items": [
            "Write student information manually.",
            "Calculate marks individually.",
            "Search through several pages to find a student.",
            "Recalculate grades whenever needed."
          ]
        },
        {
          "type": "text",
          "text": "Our application will simplify these activities."
        },
        {
          "type": "heading",
          "text": "Project requirements"
        },
        {
          "type": "table",
          "columns": [
            "Requirement",
            "Python concept"
          ],
          "rows": [
            [
              "Store student names",
              "Variables"
            ],
            [
              "Collect user information",
              "`input()`"
            ],
            [
              "Calculate average marks",
              "Operators"
            ],
            [
              "Determine grades",
              "`if`, `elif`, `else`"
            ],
            [
              "Store multiple students",
              "Lists and dictionaries"
            ],
            [
              "Repeat the menu",
              "Loops"
            ],
            [
              "Organize operations",
              "Functions"
            ],
            [
              "Save student information",
              "File handling"
            ],
            [
              "Organize code",
              "Modules"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "4. Designing the Project Structure"
        },
        {
          "type": "text",
          "text": "Create a folder named:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_basics_project/"
        },
        {
          "type": "text",
          "text": "Inside it, create:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_basics_project/\n│\n├── main.py\n├── student.py\n├── grading.py\n├── storage.py\n└── students.json"
        },
        {
          "type": "heading",
          "text": "What each file will do"
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
              "Runs the application and displays the menu"
            ],
            [
              "`student.py`",
              "Handles student registration and searching"
            ],
            [
              "`grading.py`",
              "Calculates averages and grades"
            ],
            [
              "`storage.py`",
              "Saves and loads student records"
            ],
            [
              "`students.json`",
              "Stores student information"
            ]
          ]
        },
        {
          "type": "text",
          "text": "The `students.json` file will be created automatically if it does not exist."
        },
        {
          "type": "heading",
          "text": "5. Preparing Your Development Environment"
        },
        {
          "type": "text",
          "text": "You need:"
        },
        {
          "type": "bullets",
          "items": [
            "Python installed on your computer.",
            "Visual Studio Code or another Python editor.",
            "A terminal for running your program."
          ]
        },
        {
          "type": "text",
          "text": "Open your project folder in Visual Studio Code."
        },
        {
          "type": "text",
          "text": "To confirm that Python is installed, run:"
        },
        {
          "type": "code",
          "language": "bash",
          "code": "python --version"
        },
        {
          "type": "text",
          "text": "You should see a Python version displayed."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Python 3.x.x"
        },
        {
          "type": "text",
          "text": "Your exact version may be different."
        },
        {
          "type": "heading",
          "text": "6. Part 1 Summary"
        },
        {
          "type": "text",
          "text": "You have:"
        },
        {
          "type": "bullets",
          "items": [
            "Understood what a programming project is.",
            "Identified the problem we are solving.",
            "Defined the application requirements.",
            "Designed the project structure.",
            "Prepared your development environment."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 1 of 4"
        }
      ]
    },
    {
      "id": "python-basics-project-part-2",
      "title": "PART 2: BUILDING THE APPLICATION",
      "description": "Part 2 of 4",
      "blocks": [
        {
          "type": "text",
          "text": "In this part, we will create the main functionality of the application."
        },
        {
          "type": "heading",
          "text": "1. Creating the Student Registration Module"
        },
        {
          "type": "text",
          "text": "Open `student.py`."
        },
        {
          "type": "text",
          "text": "Add:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = []\n\n\ndef register_student():\n    print(\"\\n--- REGISTER STUDENT ---\")\n\n    name = input(\"Enter student name: \")\n    registration_number = input(\"Enter registration number: \")\n    course = input(\"Enter course: \")\n\n    student = {\n        \"name\": name,\n        \"registration_number\": registration_number,\n        \"course\": course,\n        \"marks\": []\n    }\n\n    students.append(student)\n\n    print(\"Student registered successfully!\")"
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
          "code": "students = []"
        },
        {
          "type": "text",
          "text": "Creates an empty list called `students`."
        },
        {
          "type": "text",
          "text": "We will use this list to store multiple student records."
        },
        {
          "type": "text",
          "text": "**Line 2**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def register_student():"
        },
        {
          "type": "text",
          "text": "Defines a function called `register_student`."
        },
        {
          "type": "text",
          "text": "A function is a reusable block of code that performs a particular task."
        },
        {
          "type": "text",
          "text": "**Line 3**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"\\n--- REGISTER STUDENT ---\")"
        },
        {
          "type": "text",
          "text": "Displays a heading for the registration section."
        },
        {
          "type": "text",
          "text": "**Line 4**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = input(\"Enter student name: \")"
        },
        {
          "type": "text",
          "text": "Requests the student's name and stores it in the `name` variable."
        },
        {
          "type": "text",
          "text": "**Line 5**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "registration_number = input(\"Enter registration number: \")"
        },
        {
          "type": "text",
          "text": "Requests the student's registration number."
        },
        {
          "type": "text",
          "text": "**Line 6**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "course = input(\"Enter course: \")"
        },
        {
          "type": "text",
          "text": "Requests the student's course."
        },
        {
          "type": "text",
          "text": "**Lines 7–12**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student = {\n    \"name\": name,\n    \"registration_number\": registration_number,\n    \"course\": course,\n    \"marks\": []\n}"
        },
        {
          "type": "text",
          "text": "Creates a dictionary representing one student."
        },
        {
          "type": "text",
          "text": "A dictionary stores information using key-value pairs."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "bullets",
          "items": [
            "`\"name\"` is a key.",
            "`name` is its value.",
            "`\"course\"` is another key.",
            "`course` is its value."
          ]
        },
        {
          "type": "text",
          "text": "The `\"marks\"` key initially contains an empty list."
        },
        {
          "type": "text",
          "text": "**Line 13**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "students.append(student)"
        },
        {
          "type": "text",
          "text": "Adds the new student's dictionary to the students list."
        },
        {
          "type": "text",
          "text": "**Line 14**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Student registered successfully!\")"
        },
        {
          "type": "text",
          "text": "Displays a confirmation message."
        },
        {
          "type": "heading",
          "text": "2. Creating the Grading Module"
        },
        {
          "type": "text",
          "text": "Open `grading.py`."
        },
        {
          "type": "text",
          "text": "Add:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate_average(marks):\n    if len(marks) == 0:\n        return 0\n\n    total = sum(marks)\n\n    average = total / len(marks)\n\n    return average\n\n\ndef calculate_grade(average):\n    if average >= 70:\n        return \"A\"\n\n    elif average >= 60:\n        return \"B\"\n\n    elif average >= 50:\n        return \"C\"\n\n    elif average >= 40:\n        return \"D\"\n\n    else:\n        return \"E\""
        },
        {
          "type": "heading",
          "text": "Understanding the code"
        },
        {
          "type": "text",
          "text": "**Function 1: calculate_average()**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate_average(marks):"
        },
        {
          "type": "text",
          "text": "Defines a function that receives a list of marks."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "[80, 70, 90]"
        },
        {
          "type": "text",
          "text": "**Next:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if len(marks) == 0:\n    return 0"
        },
        {
          "type": "text",
          "text": "Checks whether the marks list is empty."
        },
        {
          "type": "text",
          "text": "`len()` returns the number of items in a list."
        },
        {
          "type": "text",
          "text": "If there are no marks, the function returns zero instead of attempting division by zero."
        },
        {
          "type": "text",
          "text": "**Next:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "total = sum(marks)"
        },
        {
          "type": "text",
          "text": "Adds all the marks together."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "marks = [80, 70, 90]"
        },
        {
          "type": "text",
          "text": "The total becomes:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "240"
        },
        {
          "type": "text",
          "text": "**Next:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "average = total / len(marks)"
        },
        {
          "type": "text",
          "text": "Calculates the average."
        },
        {
          "type": "text",
          "text": "There are three marks, so:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "240 / 3 = 80"
        },
        {
          "type": "text",
          "text": "**Next:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "return average"
        },
        {
          "type": "text",
          "text": "Sends the calculated average back to the part of the program that called the function."
        },
        {
          "type": "heading",
          "text": "Function 2: calculate_grade()"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def calculate_grade(average):"
        },
        {
          "type": "text",
          "text": "Creates a function that receives the student's average."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if average >= 70:\n    return \"A\""
        },
        {
          "type": "text",
          "text": "If the average is 70 or above, the student receives grade A."
        },
        {
          "type": "code",
          "language": "python",
          "code": "elif average >= 60:\n    return \"B\""
        },
        {
          "type": "text",
          "text": "If the first condition is false, Python checks whether the average is at least 60."
        },
        {
          "type": "code",
          "language": "python",
          "code": "elif average >= 50:\n    return \"C\""
        },
        {
          "type": "text",
          "text": "Checks whether the average is at least 50."
        },
        {
          "type": "code",
          "language": "python",
          "code": "elif average >= 40:\n    return \"D\""
        },
        {
          "type": "text",
          "text": "Checks whether the average is at least 40."
        },
        {
          "type": "code",
          "language": "python",
          "code": "else:\n    return \"E\""
        },
        {
          "type": "text",
          "text": "If none of the previous conditions is true, the student receives grade E."
        },
        {
          "type": "text",
          "text": "These are example grading thresholds for this project. Actual grading systems may use different thresholds."
        },
        {
          "type": "heading",
          "text": "3. Adding Marks to Students"
        },
        {
          "type": "text",
          "text": "We need a way to enter student marks."
        },
        {
          "type": "text",
          "text": "Return to `student.py` and add this function below the registration function:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def add_marks():\n    registration_number = input(\"Enter registration number: \")\n\n    for student in students:\n\n        if student[\"registration_number\"] == registration_number:\n\n            mark = float(input(\"Enter student mark: \"))\n\n            if 0 <= mark <= 100:\n                student[\"marks\"].append(mark)\n                print(\"Mark added successfully!\")\n            else:\n                print(\"Mark must be between 0 and 100.\")\n\n            return\n\n    print(\"Student not found.\")"
        },
        {
          "type": "heading",
          "text": "Line-by-line explanation"
        },
        {
          "type": "code",
          "language": "python",
          "code": "registration_number = input(\"Enter registration number: \")"
        },
        {
          "type": "text",
          "text": "Requests the registration number of the student whose marks we want to update."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for student in students:"
        },
        {
          "type": "text",
          "text": "Loops through all student records in the list."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if student[\"registration_number\"] == registration_number:"
        },
        {
          "type": "text",
          "text": "Checks whether the current student's registration number matches the one entered by the user."
        },
        {
          "type": "code",
          "language": "python",
          "code": "mark = float(input(\"Enter student mark: \"))"
        },
        {
          "type": "text",
          "text": "Requests a mark and converts it into a floating-point number."
        },
        {
          "type": "text",
          "text": "We use `float()` because marks may contain decimal values."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if 0 <= mark <= 100:"
        },
        {
          "type": "text",
          "text": "Checks whether the mark is between zero and 100, inclusive."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student[\"marks\"].append(mark)"
        },
        {
          "type": "text",
          "text": "Adds the mark to the student's marks list."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Mark added successfully!\")"
        },
        {
          "type": "text",
          "text": "Confirms that the operation was successful."
        },
        {
          "type": "code",
          "language": "python",
          "code": "return"
        },
        {
          "type": "text",
          "text": "Stops the function because the correct student has been found and processed."
        },
        {
          "type": "text",
          "text": "If the loop finishes without finding a matching student:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Student not found.\")"
        },
        {
          "type": "text",
          "text": "Displays an error message."
        },
        {
          "type": "heading",
          "text": "4. Viewing Student Records"
        },
        {
          "type": "text",
          "text": "Still inside `student.py`, add:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def view_students():\n    if len(students) == 0:\n        print(\"No students registered.\")\n        return\n\n    for student in students:\n        print(\"\\n-------------------\")\n        print(\"Name:\", student[\"name\"])\n        print(\"Registration:\", student[\"registration_number\"])\n        print(\"Course:\", student[\"course\"])\n        print(\"Marks:\", student[\"marks\"])"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`if len(students) == 0` checks whether there are registered students.",
            "`print()` displays a message if the list is empty.",
            "`return` stops the function when there is nothing to display.",
            "`for student in students` loops through each student.",
            "The remaining statements display the student's information."
          ]
        },
        {
          "type": "heading",
          "text": "5. Part 2 Summary"
        },
        {
          "type": "text",
          "text": "You have now created:"
        },
        {
          "type": "bullets",
          "items": [
            "A student registration function.",
            "A grading module.",
            "An average calculation function.",
            "A mark registration function.",
            "A student records display function."
          ]
        },
        {
          "type": "text",
          "text": "Progress: Part 2 of 4"
        }
      ]
    },
    {
      "id": "python-basics-project-part-3",
      "title": "PART 3: FILE STORAGE, INTEGRATION AND TESTING",
      "description": "Part 3 of 4",
      "blocks": [
        {
          "type": "text",
          "text": "Now we will connect the different modules and make the application save information permanently."
        },
        {
          "type": "heading",
          "text": "1. Creating the Storage Module"
        },
        {
          "type": "text",
          "text": "Open `storage.py`."
        },
        {
          "type": "text",
          "text": "Add:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import json\n\nfrom student import students\n\n\ndef save_students():\n    with open(\"students.json\", \"w\") as file:\n        json.dump(students, file, indent=4)\n\n    print(\"Student records saved.\")\n\n\ndef load_students():\n    try:\n        with open(\"students.json\", \"r\") as file:\n            saved_students = json.load(file)\n\n            students.extend(saved_students)\n\n    except FileNotFoundError:\n        print(\"No previous records found.\")"
        },
        {
          "type": "heading",
          "text": "Understanding the code"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import json"
        },
        {
          "type": "text",
          "text": "Imports Python's JSON module."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from student import students"
        },
        {
          "type": "text",
          "text": "Imports the student list from `student.py`."
        },
        {
          "type": "text",
          "text": "This allows the storage module to work with the same list used by the registration functions."
        },
        {
          "type": "heading",
          "text": "Saving records"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def save_students():"
        },
        {
          "type": "text",
          "text": "Defines the function responsible for saving records."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.json\", \"w\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the JSON file in write mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "json.dump(students, file, indent=4)"
        },
        {
          "type": "text",
          "text": "Converts the student list into JSON and saves it."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Student records saved.\")"
        },
        {
          "type": "text",
          "text": "Displays a confirmation message."
        },
        {
          "type": "heading",
          "text": "Loading records"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def load_students():"
        },
        {
          "type": "text",
          "text": "Defines the function for loading previously saved records."
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Starts an exception-handling block."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.json\", \"r\") as file:"
        },
        {
          "type": "text",
          "text": "Attempts to open the JSON file."
        },
        {
          "type": "code",
          "language": "python",
          "code": "saved_students = json.load(file)"
        },
        {
          "type": "text",
          "text": "Reads the JSON data and converts it into Python data."
        },
        {
          "type": "code",
          "language": "python",
          "code": "students.extend(saved_students)"
        },
        {
          "type": "text",
          "text": "Adds the loaded records to the existing students list."
        },
        {
          "type": "code",
          "language": "python",
          "code": "except FileNotFoundError:"
        },
        {
          "type": "text",
          "text": "Handles the situation where the JSON file does not exist."
        },
        {
          "type": "text",
          "text": "The application can therefore start without previous records."
        },
        {
          "type": "heading",
          "text": "2. Creating the Main Application"
        },
        {
          "type": "text",
          "text": "Open `main.py`."
        },
        {
          "type": "text",
          "text": "Add:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from student import register_student, add_marks, view_students\nfrom grading import calculate_average, calculate_grade\nfrom storage import save_students, load_students\n\n\ndef search_student():\n    registration_number = input(\"Enter registration number: \")\n\n    for student in students:\n        if student[\"registration_number\"] == registration_number:\n            print(\"Name:\", student[\"name\"])\n            print(\"Course:\", student[\"course\"])\n            print(\"Marks:\", student[\"marks\"])\n            return\n\n    print(\"Student not found.\")\n\n\ndef show_grades():\n    registration_number = input(\"Enter registration number: \")\n\n    for student in students:\n        if student[\"registration_number\"] == registration_number:\n\n            average = calculate_average(student[\"marks\"])\n\n            grade = calculate_grade(average)\n\n            print(\"Student:\", student[\"name\"])\n            print(\"Average:\", average)\n            print(\"Grade:\", grade)\n\n            return\n\n    print(\"Student not found.\")\n\n\ndef main():\n    load_students()\n\n    while True:\n        print(\"\\n==============================\")\n        print(\"    STUDENT MANAGEMENT SYSTEM\")\n        print(\"==============================\")\n        print(\"1. Register Student\")\n        print(\"2. Add Student Marks\")\n        print(\"3. View All Students\")\n        print(\"4. Search Student\")\n        print(\"5. Calculate Student Grade\")\n        print(\"6. Save Records\")\n        print(\"7. Exit\")\n\n        choice = input(\"Enter your choice: \")\n\n        if choice == \"1\":\n            register_student()\n\n        elif choice == \"2\":\n            add_marks()\n\n        elif choice == \"3\":\n            view_students()\n\n        elif choice == \"4\":\n            search_student()\n\n        elif choice == \"5\":\n            show_grades()\n\n        elif choice == \"6\":\n            save_students()\n\n        elif choice == \"7\":\n            save_students()\n            print(\"Thank you for using the system.\")\n            break\n\n        else:\n            print(\"Invalid choice. Try again.\")\n\n\nif __name__ == \"__main__\":\n    main()"
        },
        {
          "type": "heading",
          "text": "Important: Add the missing students import"
        },
        {
          "type": "text",
          "text": "The two functions `search_student()` and `show_grades()` use the `students` list."
        },
        {
          "type": "text",
          "text": "Therefore, add `students` to the first import statement:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from student import students, register_student, add_marks, view_students"
        },
        {
          "type": "text",
          "text": "Use this updated import statement in `main.py`."
        },
        {
          "type": "heading",
          "text": "Understanding the main application"
        },
        {
          "type": "text",
          "text": "**Importing functionality**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "from student import students, register_student, add_marks, view_students"
        },
        {
          "type": "text",
          "text": "Imports the student list and the functions needed from `student.py`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from grading import calculate_average, calculate_grade"
        },
        {
          "type": "text",
          "text": "Imports the two grading functions."
        },
        {
          "type": "code",
          "language": "python",
          "code": "from storage import save_students, load_students"
        },
        {
          "type": "text",
          "text": "Imports the functions responsible for saving and loading student records."
        },
        {
          "type": "text",
          "text": "**Searching for students**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def search_student():"
        },
        {
          "type": "text",
          "text": "Creates a function for searching."
        },
        {
          "type": "code",
          "language": "python",
          "code": "registration_number = input(\"Enter registration number: \")"
        },
        {
          "type": "text",
          "text": "Collects the registration number."
        },
        {
          "type": "code",
          "language": "python",
          "code": "for student in students:"
        },
        {
          "type": "text",
          "text": "Checks each student in the list."
        },
        {
          "type": "code",
          "language": "python",
          "code": "if student[\"registration_number\"] == registration_number:"
        },
        {
          "type": "text",
          "text": "Compares the entered registration number with the stored one."
        },
        {
          "type": "text",
          "text": "If they match, the application displays the student's information."
        },
        {
          "type": "text",
          "text": "**Calculating grades**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def show_grades():"
        },
        {
          "type": "text",
          "text": "Creates the grade display function."
        },
        {
          "type": "code",
          "language": "python",
          "code": "average = calculate_average(student[\"marks\"])"
        },
        {
          "type": "text",
          "text": "Calls the average calculation function from `grading.py`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "grade = calculate_grade(average)"
        },
        {
          "type": "text",
          "text": "Uses the calculated average to determine the grade."
        },
        {
          "type": "text",
          "text": "The next statements display the student's name, average and grade."
        },
        {
          "type": "text",
          "text": "**The main function**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def main():"
        },
        {
          "type": "text",
          "text": "Defines the main function that controls the application."
        },
        {
          "type": "code",
          "language": "python",
          "code": "load_students()"
        },
        {
          "type": "text",
          "text": "Loads previous records when the application starts."
        },
        {
          "type": "code",
          "language": "python",
          "code": "while True:"
        },
        {
          "type": "text",
          "text": "Creates an infinite loop."
        },
        {
          "type": "text",
          "text": "This keeps displaying the menu until the user chooses to exit."
        },
        {
          "type": "text",
          "text": "**The menu**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "choice = input(\"Enter your choice: \")"
        },
        {
          "type": "text",
          "text": "Collects the user's selection."
        },
        {
          "type": "text",
          "text": "The `if`, `elif` and `else` statements determine which operation should execute."
        },
        {
          "type": "text",
          "text": "For example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if choice == \"1\":\n    register_student()"
        },
        {
          "type": "text",
          "text": "If the user enters 1, the registration function runs."
        },
        {
          "type": "code",
          "language": "python",
          "code": "elif choice == \"2\":\n    add_marks()"
        },
        {
          "type": "text",
          "text": "If the user enters 2, the application allows them to add marks."
        },
        {
          "type": "text",
          "text": "The remaining options work in the same way."
        },
        {
          "type": "text",
          "text": "**Exiting the application**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "elif choice == \"7\":\n    save_students()\n    print(\"Thank you for using the system.\")\n    break"
        },
        {
          "type": "text",
          "text": "This saves the records, displays a message and stops the menu loop."
        },
        {
          "type": "text",
          "text": "Finally:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if __name__ == \"__main__\":\n    main()"
        },
        {
          "type": "text",
          "text": "This checks whether `main.py` is being executed directly."
        },
        {
          "type": "text",
          "text": "If it is, Python calls the `main()` function."
        },
        {
          "type": "heading",
          "text": "3. Running the Project"
        },
        {
          "type": "text",
          "text": "Open the terminal in your project directory."
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
          "text": "You should see:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "==============================\n    STUDENT MANAGEMENT SYSTEM\n==============================\n1. Register Student\n2. Add Student Marks\n3. View All Students\n4. Search Student\n5. Calculate Student Grade\n6. Save Records\n7. Exit\n\nEnter your choice:"
        },
        {
          "type": "heading",
          "text": "Test 1: Register a student"
        },
        {
          "type": "text",
          "text": "Enter:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1"
        },
        {
          "type": "text",
          "text": "Then:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter student name: Brian\nEnter registration number: BBIT001\nEnter course: BBIT"
        },
        {
          "type": "text",
          "text": "Expected response:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Student registered successfully!"
        },
        {
          "type": "heading",
          "text": "Test 2: Add marks"
        },
        {
          "type": "text",
          "text": "Enter:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "2"
        },
        {
          "type": "text",
          "text": "Then:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter registration number: BBIT001\nEnter student mark: 80"
        },
        {
          "type": "text",
          "text": "Expected response:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Mark added successfully!"
        },
        {
          "type": "text",
          "text": "Repeat the process to add two more marks:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "70\n90"
        },
        {
          "type": "heading",
          "text": "Test 3: Calculate the grade"
        },
        {
          "type": "text",
          "text": "Select:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "5"
        },
        {
          "type": "text",
          "text": "Enter:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "BBIT001"
        },
        {
          "type": "text",
          "text": "Expected output:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Student: Brian\nAverage: 80.0\nGrade: A"
        },
        {
          "type": "text",
          "text": "The calculation is:"
        },
        {
          "type": "text",
          "text": "(80 + 70 + 90) / 3 = 80"
        },
        {
          "type": "text",
          "text": "Since 80 is greater than or equal to 70, the student receives grade A."
        },
        {
          "type": "heading",
          "text": "Test 4: View students"
        },
        {
          "type": "text",
          "text": "Select:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "3"
        },
        {
          "type": "text",
          "text": "The application should display the registered student and their information."
        },
        {
          "type": "heading",
          "text": "Test 5: Save and reload records"
        },
        {
          "type": "text",
          "text": "Select:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "6"
        },
        {
          "type": "text",
          "text": "The application saves the student records in `students.json`."
        },
        {
          "type": "text",
          "text": "You can now close the program and run it again."
        },
        {
          "type": "text",
          "text": "The application should load the previously saved student records."
        },
        {
          "type": "heading",
          "text": "4. Important Improvements to Consider"
        },
        {
          "type": "text",
          "text": "Our application works as a beginner project, but a professional application would require additional improvements."
        },
        {
          "type": "text",
          "text": "Consider these enhancements:"
        },
        {
          "type": "table",
          "columns": [
            "Improvement",
            "Purpose"
          ],
          "rows": [
            [
              "Input validation",
              "Prevent invalid information"
            ],
            [
              "Duplicate checking",
              "Prevent duplicate registration numbers"
            ],
            [
              "Update student details",
              "Allow users to correct information"
            ],
            [
              "Delete student",
              "Remove unwanted records"
            ],
            [
              "Better error handling",
              "Prevent unexpected crashes"
            ],
            [
              "Database integration",
              "Manage larger amounts of information"
            ],
            [
              "Authentication",
              "Restrict access to authorized users"
            ]
          ]
        },
        {
          "type": "text",
          "text": "Also note that this beginner implementation uses a JSON file and is designed for a single local application. A larger multi-user system would need stronger data validation, safer file updates and a database."
        },
        {
          "type": "heading",
          "text": "5. Part 3 Summary"
        },
        {
          "type": "text",
          "text": "You have successfully combined:"
        },
        {
          "type": "bullets",
          "items": [
            "Variables and data types.",
            "User input and output.",
            "Dictionaries and lists.",
            "Conditional statements.",
            "Loops.",
            "Functions.",
            "Modules.",
            "JSON file handling.",
            "Exception handling."
          ]
        },
        {
          "type": "text",
          "text": "You have built a working command-line student management application."
        },
        {
          "type": "text",
          "text": "Progress: Part 3 of 4"
        }
      ]
    },
    {
      "id": "python-basics-project-part-4",
      "title": "PART 4: KAI PROJECT ASSESSMENT",
      "description": "Part 4 of 4",
      "blocks": [
        {
          "type": "text",
          "text": "This assessment tests your understanding of the Python concepts used to build the project."
        },
        {
          "type": "heading",
          "text": "Section A: Python Fundamentals"
        },
        {
          "type": "heading",
          "text": "Question 1"
        },
        {
          "type": "text",
          "text": "Which Python data structure did we use to store multiple student records?"
        },
        {
          "type": "text",
          "text": "A. Integer"
        },
        {
          "type": "text",
          "text": "B. List"
        },
        {
          "type": "text",
          "text": "C. Boolean"
        },
        {
          "type": "text",
          "text": "D. String"
        },
        {
          "type": "heading",
          "text": "Question 2"
        },
        {
          "type": "text",
          "text": "What is the purpose of the `append()` method?"
        },
        {
          "type": "text",
          "text": "A. To remove an item from a list."
        },
        {
          "type": "text",
          "text": "B. To add an item to a list."
        },
        {
          "type": "text",
          "text": "C. To sort a list."
        },
        {
          "type": "text",
          "text": "D. To delete a file."
        },
        {
          "type": "heading",
          "text": "Question 3"
        },
        {
          "type": "text",
          "text": "Why did we use a dictionary to represent each student?"
        },
        {
          "type": "text",
          "text": "A. To store related student information using key-value pairs."
        },
        {
          "type": "text",
          "text": "B. To execute a loop."
        },
        {
          "type": "text",
          "text": "C. To create a new Python file."
        },
        {
          "type": "text",
          "text": "D. To calculate mathematical operations automatically."
        },
        {
          "type": "heading",
          "text": "Question 4"
        },
        {
          "type": "text",
          "text": "What does `while True` do?"
        },
        {
          "type": "text",
          "text": "A. Executes the code exactly once."
        },
        {
          "type": "text",
          "text": "B. Creates a loop that continues until it is stopped."
        },
        {
          "type": "text",
          "text": "C. Deletes the current function."
        },
        {
          "type": "text",
          "text": "D. Automatically closes the application."
        },
        {
          "type": "heading",
          "text": "Section B: Application Development"
        },
        {
          "type": "heading",
          "text": "Question 5"
        },
        {
          "type": "text",
          "text": "In our project, what is the responsibility of `grading.py`?"
        },
        {
          "type": "text",
          "text": "A. Saving student records."
        },
        {
          "type": "text",
          "text": "B. Displaying the menu."
        },
        {
          "type": "text",
          "text": "C. Calculating student averages and grades."
        },
        {
          "type": "text",
          "text": "D. Registering student names."
        },
        {
          "type": "heading",
          "text": "Question 6"
        },
        {
          "type": "text",
          "text": "What is the purpose of `json.dump()` in our project?"
        },
        {
          "type": "text",
          "text": "A. To save Python data into a JSON file."
        },
        {
          "type": "text",
          "text": "B. To delete student information."
        },
        {
          "type": "text",
          "text": "C. To import a module."
        },
        {
          "type": "text",
          "text": "D. To calculate grades."
        },
        {
          "type": "heading",
          "text": "Question 7"
        },
        {
          "type": "text",
          "text": "What is the purpose of this statement?"
        },
        {
          "type": "code",
          "language": "python",
          "code": "if __name__ == \"__main__\":\n    main()"
        },
        {
          "type": "text",
          "text": "A. It deletes the main file."
        },
        {
          "type": "text",
          "text": "B. It runs the main function when the file is executed directly."
        },
        {
          "type": "text",
          "text": "C. It creates a dictionary."
        },
        {
          "type": "text",
          "text": "D. It imports every Python module."
        },
        {
          "type": "heading",
          "text": "Question 8: Practical Programming Challenge"
        },
        {
          "type": "text",
          "text": "Modify the student management system to include a new feature called **Delete Student**."
        },
        {
          "type": "text",
          "text": "Your function should:"
        },
        {
          "type": "numbered",
          "items": [
            "Request a student's registration number.",
            "Search through the student records.",
            "Identify the matching student.",
            "Remove the student from the list.",
            "Display a success message.",
            "Display an appropriate message if the student does not exist."
          ]
        },
        {
          "type": "text",
          "text": "Submit your code to Kai for review."
        },
        {
          "type": "heading",
          "text": "Project Completion Criteria"
        },
        {
          "type": "text",
          "text": "Before considering the project complete, verify that you can:"
        },
        {
          "type": "bullets",
          "items": [
            "Register multiple students.",
            "Add marks to students.",
            "View all registered students.",
            "Search for a student.",
            "Calculate averages and grades.",
            "Save student records.",
            "Reload saved records after restarting the application.",
            "Explain how the different modules communicate."
          ]
        },
        {
          "type": "text",
          "text": "**Part 4 of 4 — Project Complete**"
        },
        {
          "type": "heading",
          "text": "What You Have Accomplished"
        },
        {
          "type": "text",
          "text": "You have moved beyond writing isolated Python examples."
        },
        {
          "type": "text",
          "text": "You have used Python fundamentals to develop an application with multiple files, reusable functions, structured data and persistent storage."
        },
        {
          "type": "text",
          "text": "**Recommended next project:** Python Expense Tracker — an application for recording income, expenses, calculating balances and generating spending summaries."
        }
      ]
    }
  ]
};

export default delivery;
