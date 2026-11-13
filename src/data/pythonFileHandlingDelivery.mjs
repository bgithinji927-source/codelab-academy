const delivery = {
  "type": "authored",
  "version": 1,
  "intro": "PYTHON: FILE HANDLING",
  "sections": [
    {
      "id": "python-file-handling-part-1",
      "title": "PART 1 OF 4: INTRODUCTION TO FILE HANDLING",
      "description": "Part 1 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 1 OF 4: INTRODUCTION TO FILE HANDLING"
        },
        {
          "type": "heading",
          "text": "1. What Is File Handling?"
        },
        {
          "type": "text",
          "text": "File handling is the process of creating, opening, reading, writing, updating and deleting files using a programming language."
        },
        {
          "type": "text",
          "text": "In Python, file handling allows a program to store information permanently on a computer instead of keeping it only in memory."
        },
        {
          "type": "text",
          "text": "For example, imagine developing a student management system."
        },
        {
          "type": "text",
          "text": "The system collects:"
        },
        {
          "type": "bullets",
          "items": [
            "Student names.",
            "Registration numbers.",
            "Course details.",
            "Examination marks."
          ]
        },
        {
          "type": "text",
          "text": "If the information is stored only in variables, it will normally be lost when the program terminates."
        },
        {
          "type": "text",
          "text": "However, if the information is saved in a file, it can be retrieved later, even after restarting the application."
        },
        {
          "type": "text",
          "text": "**Example:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "student_name = \"Brian\"\nstudent_age = 22"
        },
        {
          "type": "text",
          "text": "These variables store information temporarily while the program is running."
        },
        {
          "type": "text",
          "text": "To save the information in a file, we can use Python's file handling features."
        },
        {
          "type": "heading",
          "text": "2. Why Is File Handling Important?"
        },
        {
          "type": "text",
          "text": "File handling is used in many real-world applications."
        },
        {
          "type": "table",
          "columns": [
            "Application",
            "How file handling is used"
          ],
          "rows": [
            [
              "Student management systems",
              "Saving student records"
            ],
            [
              "Banking applications",
              "Storing reports and transaction exports"
            ],
            [
              "E-commerce systems",
              "Exporting order information"
            ],
            [
              "Hospital systems",
              "Managing documents and reports"
            ],
            [
              "Inventory systems",
              "Saving product records"
            ],
            [
              "Software applications",
              "Reading configuration files"
            ],
            [
              "Cybersecurity tools",
              "Reading scan results and writing logs"
            ]
          ]
        },
        {
          "type": "text",
          "text": "For example, a cybersecurity program may scan a network and save its findings in a file for later analysis."
        },
        {
          "type": "heading",
          "text": "3. Understanding Files and Their Types"
        },
        {
          "type": "text",
          "text": "A file is a named collection of information stored on a computer."
        },
        {
          "type": "text",
          "text": "Files can contain different types of information."
        },
        {
          "type": "text",
          "text": "There are two major categories."
        },
        {
          "type": "text",
          "text": "**A. Text Files**"
        },
        {
          "type": "text",
          "text": "Text files store information in a human-readable format."
        },
        {
          "type": "text",
          "text": "Examples:"
        },
        {
          "type": "bullets",
          "items": [
            "`.txt` — Plain text.",
            "`.csv` — Comma-separated values.",
            "`.json` — Structured text data.",
            "`.py` — Python source code.",
            "`.html` — HTML documents."
          ]
        },
        {
          "type": "text",
          "text": "Example of a text file:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Name: Brian\nAge: 22\nCourse: Software Development"
        },
        {
          "type": "text",
          "text": "**B. Binary Files**"
        },
        {
          "type": "text",
          "text": "Binary files store information as bytes rather than ordinary human-readable text."
        },
        {
          "type": "text",
          "text": "Examples include:"
        },
        {
          "type": "bullets",
          "items": [
            "Images (`.jpg`, `.png`).",
            "Audio files (`.mp3`).",
            "Videos (`.mp4`).",
            "PDF files.",
            "Executable files."
          ]
        },
        {
          "type": "text",
          "text": "Python can handle both text and binary files."
        },
        {
          "type": "text",
          "text": "In this lesson, we will begin with text files before exploring other formats."
        },
        {
          "type": "heading",
          "text": "4. Opening a File in Python"
        },
        {
          "type": "text",
          "text": "Python provides the built-in `open()` function for opening files."
        },
        {
          "type": "text",
          "text": "The basic syntax is:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"filename.txt\", \"mode\")"
        },
        {
          "type": "text",
          "text": "Let's understand the components."
        },
        {
          "type": "bullets",
          "items": [
            "`open()` is the function used to open a file.",
            "`\"filename.txt\"` is the name or path of the file.",
            "`\"mode\"` determines what operation Python should perform.",
            "`file` is the variable that holds the opened file object."
          ]
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")"
        },
        {
          "type": "text",
          "text": "This attempts to open a file called `students.txt` in read mode."
        },
        {
          "type": "text",
          "text": "If the file does not exist, Python raises a `FileNotFoundError`."
        },
        {
          "type": "heading",
          "text": "5. Understanding File Modes"
        },
        {
          "type": "text",
          "text": "A file mode tells Python how a file should be accessed."
        },
        {
          "type": "table",
          "columns": [
            "Mode",
            "Meaning",
            "Purpose"
          ],
          "rows": [
            [
              "`r`",
              "Read",
              "Reads an existing file"
            ],
            [
              "`w`",
              "Write",
              "Creates or overwrites a file"
            ],
            [
              "`a`",
              "Append",
              "Adds information to the end of a file"
            ],
            [
              "`x`",
              "Create",
              "Creates a new file and fails if it already exists"
            ],
            [
              "`r+`",
              "Read and write",
              "Allows reading and writing"
            ],
            [
              "`w+`",
              "Write and read",
              "Allows reading and writing, but overwrites existing content"
            ],
            [
              "`a+`",
              "Append and read",
              "Allows reading and appending"
            ]
          ]
        },
        {
          "type": "text",
          "text": "**Important difference between `w` and `a`:**"
        },
        {
          "type": "text",
          "text": "Suppose a file contains:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Welcome to Python."
        },
        {
          "type": "text",
          "text": "If you open it using `w`, its previous content is erased when writing begins."
        },
        {
          "type": "text",
          "text": "If you open it using `a`, new information is added to the end without deleting the existing content."
        },
        {
          "type": "text",
          "text": "This distinction is very important when building applications that store records."
        },
        {
          "type": "heading",
          "text": "6. Reading a File Using read()"
        },
        {
          "type": "text",
          "text": "The `read()` method retrieves content from an opened file."
        },
        {
          "type": "text",
          "text": "First, create a text file called:"
        },
        {
          "type": "text",
          "text": "`students.txt`"
        },
        {
          "type": "text",
          "text": "Put the following information inside:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nMary\nJohn\nPeter"
        },
        {
          "type": "text",
          "text": "Now create a Python file called `main.py`."
        },
        {
          "type": "text",
          "text": "Write:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")\n\ncontent = file.read()\n\nprint(content)\n\nfile.close()"
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
          "code": "file = open(\"students.txt\", \"r\")"
        },
        {
          "type": "text",
          "text": "Opens the file named `students.txt` in read mode."
        },
        {
          "type": "text",
          "text": "**Line 2:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "content = file.read()"
        },
        {
          "type": "text",
          "text": "Reads the entire contents of the file and stores them in the `content` variable."
        },
        {
          "type": "text",
          "text": "**Line 3:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(content)"
        },
        {
          "type": "text",
          "text": "Displays the retrieved information."
        },
        {
          "type": "text",
          "text": "**Line 4:**"
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
          "type": "text",
          "text": "Closing a file is important because it releases resources used by the application."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nMary\nJohn\nPeter"
        },
        {
          "type": "heading",
          "text": "7. Reading a File Using readline()"
        },
        {
          "type": "text",
          "text": "The `readline()` method reads one line at a time."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")\n\nfirst_line = file.readline()\n\nprint(first_line)\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`open()` opens the file.",
            "`readline()` retrieves the first line from the current file position.",
            "`print()` displays the retrieved line.",
            "`close()` closes the file."
          ]
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian"
        },
        {
          "type": "text",
          "text": "If you call `readline()` again on the same file object, Python reads the next line because the file position has moved."
        },
        {
          "type": "heading",
          "text": "8. Reading All Lines Using readlines()"
        },
        {
          "type": "text",
          "text": "The `readlines()` method reads all lines and returns them as a Python list."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")\n\nstudents = file.readlines()\n\nprint(students)\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "['Brian\\n', 'Mary\\n', 'John\\n', 'Peter\\n']"
        },
        {
          "type": "text",
          "text": "Notice the `\\n` characters."
        },
        {
          "type": "text",
          "text": "They represent newline characters, which separate lines in a text file."
        },
        {
          "type": "text",
          "text": "**Comparison:**"
        },
        {
          "type": "table",
          "columns": [
            "Method",
            "What it returns"
          ],
          "rows": [
            [
              "`read()`",
              "Entire file content as a string"
            ],
            [
              "`readline()`",
              "One line as a string"
            ],
            [
              "`readlines()`",
              "All lines as a list of strings"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "9. Closing a File"
        },
        {
          "type": "text",
          "text": "Whenever you open a file using `open()`, you should ensure it is properly closed."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"r\")\n\ncontent = file.read()\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "If a program forgets to close files, it may waste system resources."
        },
        {
          "type": "text",
          "text": "In the next part, we will learn a better approach using Python's `with` statement."
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
      "title": "PART 2 OF 4: CREATING, WRITING, UPDATING AND DELETING FILES",
      "description": "Part 2 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 2 OF 4: CREATING, WRITING, UPDATING AND DELETING FILES"
        },
        {
          "type": "heading",
          "text": "1. Creating a File"
        },
        {
          "type": "text",
          "text": "Python can create new files using the `open()` function."
        },
        {
          "type": "text",
          "text": "One option is the `x` mode."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"newfile.txt\", \"x\")\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`open()` attempts to create a file called `newfile.txt`.",
            "`\"x\"` means exclusive creation.",
            "If the file already exists, Python raises a `FileExistsError`.",
            "`close()` closes the newly created file."
          ]
        },
        {
          "type": "text",
          "text": "You can also use `w` mode to create a file if it does not exist."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"newfile.txt\", \"w\")\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "However, remember that `w` mode overwrites existing content."
        },
        {
          "type": "heading",
          "text": "2. Writing to a File Using write()"
        },
        {
          "type": "text",
          "text": "Python provides the `write()` method for inserting information into a file."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"w\")\n\nfile.write(\"Brian\")\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "**Explanation line by line:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"w\")"
        },
        {
          "type": "text",
          "text": "Opens the file in write mode."
        },
        {
          "type": "text",
          "text": "If the file does not exist, Python creates it."
        },
        {
          "type": "text",
          "text": "If it already exists, its previous contents are erased."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(\"Brian\")"
        },
        {
          "type": "text",
          "text": "Writes the word `Brian` into the file."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.close()"
        },
        {
          "type": "text",
          "text": "Closes the file."
        },
        {
          "type": "text",
          "text": "If you open `students.txt`, you will find:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian"
        },
        {
          "type": "heading",
          "text": "3. Writing Multiple Lines"
        },
        {
          "type": "text",
          "text": "You can write multiple lines using newline characters."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"w\")\n\nfile.write(\"Brian\\n\")\nfile.write(\"Mary\\n\")\nfile.write(\"John\\n\")\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "The first `write()` stores Brian.",
            "`\\n` moves the next text to a new line.",
            "The second `write()` stores Mary.",
            "The third `write()` stores John."
          ]
        },
        {
          "type": "text",
          "text": "**File content:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nMary\nJohn"
        },
        {
          "type": "text",
          "text": "You can also write multiple lines using `writelines()`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [\"Brian\\n\", \"Mary\\n\", \"John\\n\"]\n\nfile = open(\"students.txt\", \"w\")\n\nfile.writelines(students)\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "The `writelines()` method writes the strings provided in the list."
        },
        {
          "type": "text",
          "text": "It does not automatically insert newline characters, which is why `\\n` is included in each string."
        },
        {
          "type": "heading",
          "text": "4. Appending Information to a File"
        },
        {
          "type": "text",
          "text": "Appending means adding new information without deleting existing content."
        },
        {
          "type": "text",
          "text": "Python uses the `a` mode for this."
        },
        {
          "type": "text",
          "text": "Suppose `students.txt` contains:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nMary"
        },
        {
          "type": "text",
          "text": "We want to add John."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file = open(\"students.txt\", \"a\")\n\nfile.write(\"John\\n\")\n\nfile.close()"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`\"a\"` opens the file in append mode.",
            "`write()` adds John after the existing content.",
            "`\\n` ensures that the next information starts on a new line.",
            "`close()` closes the file."
          ]
        },
        {
          "type": "text",
          "text": "**Updated file content:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Brian\nMary\nJohn"
        },
        {
          "type": "text",
          "text": "Unlike `w` mode, append mode preserves the existing information."
        },
        {
          "type": "heading",
          "text": "5. Understanding the Difference Between Write and Append"
        },
        {
          "type": "table",
          "columns": [
            "Feature",
            "Write (`w`)",
            "Append (`a`)"
          ],
          "rows": [
            [
              "Creates a missing file",
              "Yes",
              "Yes"
            ],
            [
              "Preserves existing content",
              "No",
              "Yes"
            ],
            [
              "Adds information at the end",
              "Yes, after overwriting",
              "Yes"
            ],
            [
              "Suitable for adding records",
              "Not usually",
              "Yes"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "6. Using the with Statement"
        },
        {
          "type": "text",
          "text": "Python provides the `with` statement to manage files more safely."
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
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"r\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the file and assigns the file object to a variable named `file`."
        },
        {
          "type": "text",
          "text": "The `with` statement manages the file's lifetime."
        },
        {
          "type": "code",
          "language": "python",
          "code": "content = file.read()"
        },
        {
          "type": "text",
          "text": "Reads the file contents."
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
          "type": "text",
          "text": "Once execution leaves the `with` block, Python automatically closes the file, even if an exception occurs."
        },
        {
          "type": "text",
          "text": "This is generally the recommended approach."
        },
        {
          "type": "heading",
          "text": "7. Writing Files Using with"
        },
        {
          "type": "text",
          "text": "You can also use `with` when writing."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"w\") as file:\n    file.write(\"Brian\\n\")\n    file.write(\"Mary\\n\")"
        },
        {
          "type": "text",
          "text": "Python automatically closes the file after the block finishes."
        },
        {
          "type": "heading",
          "text": "8. Reading and Writing at the Same Time"
        },
        {
          "type": "text",
          "text": "Python provides modes that support both reading and writing."
        },
        {
          "type": "text",
          "text": "For example, `r+` allows you to read and write an existing file."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"r+\") as file:\n    content = file.read()\n\n    print(\"Existing content:\")\n    print(content)\n\n    file.write(\"\\nNew student: Peter\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`\"r+\"` opens an existing file for reading and writing.",
            "`read()` retrieves the existing content.",
            "`print()` displays it.",
            "`write()` writes new information at the current file position."
          ]
        },
        {
          "type": "text",
          "text": "**Important:** After `read()`, the file position is at the end of the file. That is why the new text is written at the end in this example."
        },
        {
          "type": "text",
          "text": "If you want to write at the beginning, use:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.seek(0)"
        },
        {
          "type": "text",
          "text": "The `seek()` method moves the file position."
        },
        {
          "type": "text",
          "text": "Be careful: writing at the beginning does not automatically insert space or shift existing content. It can overwrite existing characters."
        },
        {
          "type": "heading",
          "text": "9. Deleting a File"
        },
        {
          "type": "text",
          "text": "Python provides the `os` module for file and directory operations."
        },
        {
          "type": "text",
          "text": "To delete a file, we can use `os.remove()`."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\nos.remove(\"students.txt\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os"
        },
        {
          "type": "text",
          "text": "Imports Python's built-in operating system module."
        },
        {
          "type": "code",
          "language": "python",
          "code": "os.remove(\"students.txt\")"
        },
        {
          "type": "text",
          "text": "Deletes the file named `students.txt`."
        },
        {
          "type": "text",
          "text": "If the file does not exist, Python raises a `FileNotFoundError`."
        },
        {
          "type": "text",
          "text": "A safer version is:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\ntry:\n    os.remove(\"students.txt\")\n    print(\"File deleted successfully.\")\n\nexcept FileNotFoundError:\n    print(\"File does not exist.\")"
        },
        {
          "type": "text",
          "text": "Always be careful when deleting files because this operation can permanently remove information."
        },
        {
          "type": "heading",
          "text": "10. Renaming a File"
        },
        {
          "type": "text",
          "text": "Python can rename files using `os.rename()`."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\nos.rename(\"students.txt\", \"student_records.txt\")"
        },
        {
          "type": "text",
          "text": "This changes the filename from `students.txt` to `student_records.txt`."
        },
        {
          "type": "text",
          "text": "The file's contents remain unchanged."
        },
        {
          "type": "heading",
          "text": "11. Checking Whether a File Exists"
        },
        {
          "type": "text",
          "text": "You can use `os.path.exists()` to check whether a file or path exists."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\nif os.path.exists(\"students.txt\"):\n    print(\"File exists.\")\n\nelse:\n    print(\"File not found.\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`import os` imports the operating system module.",
            "`os.path.exists()` checks whether the specified path exists.",
            "`if` executes when the path exists.",
            "`else` executes when it does not."
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
      "title": "PART 3 OF 4: PRACTICAL FILE HANDLING PROJECTS",
      "description": "Part 3 of 4 · Complete curriculum arranged into native lesson blocks.",
      "blocks": [
        {
          "type": "heading",
          "text": "PART 3 OF 4: PRACTICAL FILE HANDLING PROJECTS"
        },
        {
          "type": "text",
          "text": "In this part, we will build practical applications that use file handling to store and retrieve information."
        },
        {
          "type": "heading",
          "text": "1. Understanding Project Structure"
        },
        {
          "type": "text",
          "text": "Create a folder:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_file_handling/"
        },
        {
          "type": "text",
          "text": "Inside it, create:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "python_file_handling/\n│\n├── main.py\n│\n├── students.txt\n│\n└── records/"
        },
        {
          "type": "text",
          "text": "Explanation:"
        },
        {
          "type": "bullets",
          "items": [
            "`main.py` contains our Python code.",
            "`students.txt` stores student information.",
            "`records/` will store additional files generated by the application."
          ]
        },
        {
          "type": "text",
          "text": "We will create some of these files automatically using Python."
        },
        {
          "type": "heading",
          "text": "2. Project One: Student Registration System"
        },
        {
          "type": "text",
          "text": "Let's create a simple registration system that collects student information and saves it permanently."
        },
        {
          "type": "text",
          "text": "**Code for main.py:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "name = input(\"Enter student name: \")\nage = input(\"Enter student age: \")\ncourse = input(\"Enter course: \")\n\nwith open(\"students.txt\", \"a\") as file:\n    file.write(f\"Name: {name}\\n\")\n    file.write(f\"Age: {age}\\n\")\n    file.write(f\"Course: {course}\\n\")\n    file.write(\"--------------------\\n\")\n\nprint(\"Student registered successfully!\")"
        },
        {
          "type": "text",
          "text": "**Explanation line by line:**"
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
          "text": "Notice that we are storing it as text for this basic record-saving example. If we needed to perform mathematical operations on it, we would validate and convert it."
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
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"a\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the file in append mode."
        },
        {
          "type": "text",
          "text": "If the file does not exist, Python creates it."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(f\"Name: {name}\\n\")"
        },
        {
          "type": "text",
          "text": "Writes the student's name into the file."
        },
        {
          "type": "text",
          "text": "The `f` before the string creates an f-string, allowing us to insert variable values using `{}`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(f\"Age: {age}\\n\")"
        },
        {
          "type": "text",
          "text": "Saves the student's age."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(f\"Course: {course}\\n\")"
        },
        {
          "type": "text",
          "text": "Saves the course."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(\"--------------------\\n\")"
        },
        {
          "type": "text",
          "text": "Adds a separator between student records."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Student registered successfully!\")"
        },
        {
          "type": "text",
          "text": "Confirms successful registration."
        },
        {
          "type": "text",
          "text": "**Example execution:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Enter student name: Brian\nEnter student age: 22\nEnter course: BBIT\nStudent registered successfully!"
        },
        {
          "type": "text",
          "text": "Open `students.txt`."
        },
        {
          "type": "text",
          "text": "You should find:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "Name: Brian\nAge: 22\nCourse: BBIT\n--------------------"
        },
        {
          "type": "text",
          "text": "Run the program again with another student."
        },
        {
          "type": "text",
          "text": "The new record will be added without deleting the previous one."
        },
        {
          "type": "heading",
          "text": "3. Project Two: Student Records Viewer"
        },
        {
          "type": "text",
          "text": "Now we need a program that retrieves the saved student records."
        },
        {
          "type": "text",
          "text": "Add this code to another file called `view_students.py`, or temporarily replace the contents of `main.py`."
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:\n    with open(\"students.txt\", \"r\") as file:\n        records = file.read()\n\n    print(\"STUDENT RECORDS\")\n    print(\"--------------------\")\n    print(records)\n\nexcept FileNotFoundError:\n    print(\"No student records found.\")"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "try:"
        },
        {
          "type": "text",
          "text": "Begins the section where an error might occur."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"r\") as file:"
        },
        {
          "type": "text",
          "text": "Attempts to open the student records file in read mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "records = file.read()"
        },
        {
          "type": "text",
          "text": "Retrieves all information stored inside the file."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"STUDENT RECORDS\")"
        },
        {
          "type": "text",
          "text": "Displays a heading."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(records)"
        },
        {
          "type": "text",
          "text": "Displays all saved records."
        },
        {
          "type": "code",
          "language": "python",
          "code": "except FileNotFoundError:"
        },
        {
          "type": "text",
          "text": "Handles the situation where the file does not exist."
        },
        {
          "type": "text",
          "text": "**Expected output:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "STUDENT RECORDS\n--------------------\nName: Brian\nAge: 22\nCourse: BBIT\n--------------------"
        },
        {
          "type": "heading",
          "text": "4. Project Three: Simple Notes Application"
        },
        {
          "type": "text",
          "text": "Let's create an application that allows users to save notes and read them later."
        },
        {
          "type": "text",
          "text": "Create a file called `notes.py`."
        },
        {
          "type": "text",
          "text": "**Code:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def save_note():\n    note = input(\"Write your note: \")\n\n    with open(\"notes.txt\", \"a\") as file:\n        file.write(note + \"\\n\")\n\n    print(\"Note saved successfully.\")\n\n\ndef read_notes():\n    try:\n        with open(\"notes.txt\", \"r\") as file:\n            content = file.read()\n\n        print(\"\\nYOUR NOTES\")\n        print(content)\n\n    except FileNotFoundError:\n        print(\"No notes available.\")\n\n\nprint(\"1. Save note\")\nprint(\"2. Read notes\")\n\nchoice = input(\"Choose an option: \")\n\nif choice == \"1\":\n    save_note()\n\nelif choice == \"2\":\n    read_notes()\n\nelse:\n    print(\"Invalid option.\")"
        },
        {
          "type": "text",
          "text": "**Understanding the program:**"
        },
        {
          "type": "text",
          "text": "First, we create two functions."
        },
        {
          "type": "code",
          "language": "python",
          "code": "def save_note():"
        },
        {
          "type": "text",
          "text": "Defines a function responsible for saving notes."
        },
        {
          "type": "code",
          "language": "python",
          "code": "note = input(\"Write your note: \")"
        },
        {
          "type": "text",
          "text": "Requests information from the user."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"notes.txt\", \"a\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the notes file in append mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "file.write(note + \"\\n\")"
        },
        {
          "type": "text",
          "text": "Adds the note to the file and starts a new line."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(\"Note saved successfully.\")"
        },
        {
          "type": "text",
          "text": "Confirms that the note has been saved."
        },
        {
          "type": "text",
          "text": "The second function:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def read_notes():"
        },
        {
          "type": "text",
          "text": "Defines a function for retrieving saved notes."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"notes.txt\", \"r\") as file:"
        },
        {
          "type": "text",
          "text": "Opens the notes file in read mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "content = file.read()"
        },
        {
          "type": "text",
          "text": "Retrieves the saved notes."
        },
        {
          "type": "code",
          "language": "python",
          "code": "print(content)"
        },
        {
          "type": "text",
          "text": "Displays the notes."
        },
        {
          "type": "text",
          "text": "The `except FileNotFoundError` section handles missing files."
        },
        {
          "type": "text",
          "text": "Finally, the menu allows the user to select an operation."
        },
        {
          "type": "text",
          "text": "**Example execution:**"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1. Save note\n2. Read notes\nChoose an option: 1\nWrite your note: Learn Python file handling.\nNote saved successfully."
        },
        {
          "type": "text",
          "text": "If you run it again:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "1. Save note\n2. Read notes\nChoose an option: 2\n\nYOUR NOTES\nLearn Python file handling."
        },
        {
          "type": "heading",
          "text": "5. Working with Folders"
        },
        {
          "type": "text",
          "text": "File handling also involves managing directories."
        },
        {
          "type": "text",
          "text": "Python provides the `os` module for this purpose."
        },
        {
          "type": "text",
          "text": "**Creating a folder:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\nos.mkdir(\"my_folder\")"
        },
        {
          "type": "text",
          "text": "`os.mkdir()` creates a new directory called `my_folder`."
        },
        {
          "type": "text",
          "text": "If the directory already exists, Python raises a `FileExistsError`."
        },
        {
          "type": "text",
          "text": "**Checking whether a folder exists:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\nif os.path.exists(\"my_folder\"):\n    print(\"Folder exists.\")\n\nelse:\n    print(\"Folder does not exist.\")"
        },
        {
          "type": "text",
          "text": "**Listing files inside a folder:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\nfiles = os.listdir(\"my_folder\")\n\nprint(files)"
        },
        {
          "type": "text",
          "text": "`os.listdir()` returns a list of the entries inside the specified directory."
        },
        {
          "type": "text",
          "text": "**Removing an empty folder:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import os\n\nos.rmdir(\"my_folder\")"
        },
        {
          "type": "text",
          "text": "`os.rmdir()` removes an empty directory."
        },
        {
          "type": "text",
          "text": "It will not remove a directory containing files."
        },
        {
          "type": "heading",
          "text": "6. Understanding File Paths"
        },
        {
          "type": "text",
          "text": "A file path tells Python where a file is located."
        },
        {
          "type": "text",
          "text": "There are two common types."
        },
        {
          "type": "text",
          "text": "**A. Relative Paths**"
        },
        {
          "type": "text",
          "text": "A relative path describes a file's location in relation to the current working directory or another specified base directory."
        },
        {
          "type": "text",
          "text": "Example:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "open(\"students.txt\", \"r\")"
        },
        {
          "type": "text",
          "text": "Python looks for `students.txt` relative to the current working directory."
        },
        {
          "type": "text",
          "text": "A path to a file inside a folder could be:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "open(\"records/students.txt\", \"r\")"
        },
        {
          "type": "text",
          "text": "**B. Absolute Paths**"
        },
        {
          "type": "text",
          "text": "An absolute path specifies the full location of a file."
        },
        {
          "type": "text",
          "text": "Example on Windows:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "open(\"C:/Users/Public/students.txt\", \"r\")"
        },
        {
          "type": "text",
          "text": "Absolute paths identify the file from a specific root location."
        },
        {
          "type": "text",
          "text": "**Important:** The exact paths depend on how your computer is organized."
        },
        {
          "type": "heading",
          "text": "7. Working with CSV Files"
        },
        {
          "type": "text",
          "text": "CSV means Comma-Separated Values."
        },
        {
          "type": "text",
          "text": "It is a common file format for storing structured information in rows and columns."
        },
        {
          "type": "text",
          "text": "Example of a CSV file:"
        },
        {
          "type": "code",
          "language": "csv",
          "code": "name,age,course\nBrian,22,BBIT\nMary,21,Computer Science\nJohn,23,IT"
        },
        {
          "type": "text",
          "text": "Python provides a built-in `csv` module for working with CSV files."
        },
        {
          "type": "text",
          "text": "**Writing CSV data:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import csv\n\nstudents = [\n    [\"Brian\", 22, \"BBIT\"],\n    [\"Mary\", 21, \"Computer Science\"],\n    [\"John\", 23, \"IT\"]\n]\n\nwith open(\"students.csv\", \"w\", newline=\"\") as file:\n    writer = csv.writer(file)\n\n    writer.writerow([\"Name\", \"Age\", \"Course\"])\n\n    writer.writerows(students)"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import csv"
        },
        {
          "type": "text",
          "text": "Imports Python's built-in CSV module."
        },
        {
          "type": "code",
          "language": "python",
          "code": "students = [...]"
        },
        {
          "type": "text",
          "text": "Creates a list containing student records."
        },
        {
          "type": "text",
          "text": "Each inner list represents one student."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.csv\", \"w\", newline=\"\") as file:"
        },
        {
          "type": "text",
          "text": "Opens a CSV file in write mode."
        },
        {
          "type": "text",
          "text": "The `newline=\"\"` argument helps prevent unwanted blank lines between records on some systems."
        },
        {
          "type": "code",
          "language": "python",
          "code": "writer = csv.writer(file)"
        },
        {
          "type": "text",
          "text": "Creates a CSV writer object that knows how to write rows into the file."
        },
        {
          "type": "code",
          "language": "python",
          "code": "writer.writerow([\"Name\", \"Age\", \"Course\"])"
        },
        {
          "type": "text",
          "text": "Writes the column headings."
        },
        {
          "type": "code",
          "language": "python",
          "code": "writer.writerows(students)"
        },
        {
          "type": "text",
          "text": "Writes all student records."
        },
        {
          "type": "text",
          "text": "**Reading CSV data:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import csv\n\nwith open(\"students.csv\", \"r\", newline=\"\") as file:\n    reader = csv.reader(file)\n\n    for row in reader:\n        print(row)"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`csv.reader(file)` creates a reader object.",
            "`for row in reader` goes through each row.",
            "`print(row)` displays each row as a list."
          ]
        },
        {
          "type": "heading",
          "text": "8. Working with JSON Files"
        },
        {
          "type": "text",
          "text": "JSON means JavaScript Object Notation."
        },
        {
          "type": "text",
          "text": "It is a widely used format for storing and exchanging structured data between applications."
        },
        {
          "type": "text",
          "text": "For example, an API might return:"
        },
        {
          "type": "code",
          "language": "json",
          "code": "{\n    \"name\": \"Brian\",\n    \"age\": 22,\n    \"course\": \"BBIT\"\n}"
        },
        {
          "type": "text",
          "text": "Python provides a built-in `json` module."
        },
        {
          "type": "text",
          "text": "**Writing JSON data:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import json\n\nstudent = {\n    \"name\": \"Brian\",\n    \"age\": 22,\n    \"course\": \"BBIT\"\n}\n\nwith open(\"student.json\", \"w\") as file:\n    json.dump(student, file, indent=4)"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import json"
        },
        {
          "type": "text",
          "text": "Imports the JSON module."
        },
        {
          "type": "code",
          "language": "python",
          "code": "student = {...}"
        },
        {
          "type": "text",
          "text": "Creates a Python dictionary containing student information."
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"student.json\", \"w\") as file:"
        },
        {
          "type": "text",
          "text": "Creates or opens a JSON file in write mode."
        },
        {
          "type": "code",
          "language": "python",
          "code": "json.dump(student, file, indent=4)"
        },
        {
          "type": "text",
          "text": "Converts the dictionary into JSON format and writes it to the file."
        },
        {
          "type": "text",
          "text": "The `indent=4` argument makes the JSON output easier to read."
        },
        {
          "type": "text",
          "text": "**Reading JSON data:**"
        },
        {
          "type": "code",
          "language": "python",
          "code": "import json\n\nwith open(\"student.json\", \"r\") as file:\n    student = json.load(file)\n\nprint(student[\"name\"])\nprint(student[\"age\"])\nprint(student[\"course\"])"
        },
        {
          "type": "text",
          "text": "**Explanation:**"
        },
        {
          "type": "bullets",
          "items": [
            "`json.load(file)` reads JSON data from the file and converts it into a Python object.",
            "In this example, the JSON object becomes a Python dictionary.",
            "`student[\"name\"]` retrieves the student's name.",
            "`student[\"age\"]` retrieves the age.",
            "`student[\"course\"]` retrieves the course."
          ]
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
          "type": "heading",
          "text": "9. Text Files vs CSV vs JSON"
        },
        {
          "type": "table",
          "columns": [
            "Feature",
            "TXT",
            "CSV",
            "JSON"
          ],
          "rows": [
            [
              "Main purpose",
              "General text storage",
              "Tabular data",
              "Structured data"
            ],
            [
              "Structure",
              "Usually plain text",
              "Rows and columns",
              "Objects and arrays"
            ],
            [
              "Human-readable",
              "Yes",
              "Yes",
              "Yes"
            ],
            [
              "Common use",
              "Notes and logs",
              "Spreadsheets and records",
              "APIs and application data"
            ],
            [
              "Python module",
              "Built-in file methods",
              "`csv`",
              "`json`"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "10. Common File Handling Errors"
        },
        {
          "type": "table",
          "columns": [
            "Error",
            "Meaning"
          ],
          "rows": [
            [
              "`FileNotFoundError`",
              "The requested file does not exist"
            ],
            [
              "`FileExistsError`",
              "A file or directory already exists when exclusive creation is attempted"
            ],
            [
              "`PermissionError`",
              "The program does not have permission to access a file"
            ],
            [
              "`IsADirectoryError`",
              "An operation expected a file but received a directory"
            ],
            [
              "`NotADirectoryError`",
              "A path component expected to be a directory is not one"
            ],
            [
              "`UnicodeDecodeError`",
              "File bytes cannot be decoded using the selected text encoding"
            ]
          ]
        },
        {
          "type": "text",
          "text": "You can manage these errors using exception handling."
        },
        {
          "type": "heading",
          "text": "11. Practical Exercises"
        },
        {
          "type": "text",
          "text": "**Exercise 1: Create and Write**"
        },
        {
          "type": "text",
          "text": "Write a program that creates `my_info.txt` and saves:"
        },
        {
          "type": "bullets",
          "items": [
            "Your name.",
            "Your course.",
            "Your institution."
          ]
        },
        {
          "type": "text",
          "text": "**Exercise 2: Read a File**"
        },
        {
          "type": "text",
          "text": "Write a program that reads `my_info.txt` and displays its contents."
        },
        {
          "type": "text",
          "text": "**Exercise 3: Append Records**"
        },
        {
          "type": "text",
          "text": "Write a program that asks for a student's name and appends it to `students.txt`."
        },
        {
          "type": "text",
          "text": "Ensure existing records are preserved."
        },
        {
          "type": "text",
          "text": "**Exercise 4: Notes Application**"
        },
        {
          "type": "text",
          "text": "Create a simple application that allows users to save and read notes."
        },
        {
          "type": "text",
          "text": "Use functions and file handling."
        },
        {
          "type": "text",
          "text": "**Exercise 5: CSV Student Records**"
        },
        {
          "type": "text",
          "text": "Create a CSV file containing at least five student records."
        },
        {
          "type": "text",
          "text": "Include their names, ages and courses."
        },
        {
          "type": "text",
          "text": "Then write a program that reads and displays the records."
        },
        {
          "type": "text",
          "text": "**Exercise 6: JSON Student Profile**"
        },
        {
          "type": "text",
          "text": "Create a Python dictionary containing a student's information."
        },
        {
          "type": "text",
          "text": "Save it as `student.json`, then read the file and display the student's details."
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
          "text": "You have completed the lesson on Python File Handling."
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
            "Pay attention to file modes and their differences.",
            "Understand what each file operation does.",
            "Complete the practical challenge.",
            "Submit your answers to Kai for marking and feedback."
          ]
        },
        {
          "type": "heading",
          "text": "Question 1: Understanding File Handling"
        },
        {
          "type": "quiz",
          "question": "What is the main purpose of file handling in Python?",
          "options": [
            "A. To create Python classes.",
            "B. To store, retrieve and manage information in files.",
            "C. To automatically correct syntax errors.",
            "D. To create loops."
          ],
          "answer": "B. To store, retrieve and manage information in files.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 2: Opening Files"
        },
        {
          "type": "quiz",
          "question": "Which Python function is used to open a file?",
          "options": [
            "A. `read()`",
            "B. `file()`",
            "C. `open()`",
            "D. `create()`"
          ],
          "answer": "C. `open()`",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 3: File Modes"
        },
        {
          "type": "quiz",
          "question": "Which file mode opens a file for writing and overwrites existing content?",
          "options": [
            "A. `r`",
            "B. `a`",
            "C. `w`",
            "D. `x`"
          ],
          "answer": "C. `w`",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 4: Reading Files"
        },
        {
          "type": "quiz",
          "question": "What is the difference between `read()` and `readline()`?",
          "options": [
            "A. `read()` reads the entire remaining content, while `readline()` reads one line.",
            "B. Both always read only one character.",
            "C. `read()` deletes a file, while `readline()` creates one.",
            "D. There is no difference."
          ],
          "answer": "A. `read()` reads the entire remaining content, while `readline()` reads one line.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 5: Appending Information"
        },
        {
          "type": "quiz",
          "question": "Which file mode allows you to add new information without overwriting existing content?",
          "options": [
            "A. `r`",
            "B. `w`",
            "C. `a`",
            "D. `x`"
          ],
          "answer": "C. `a`",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 6: The with Statement"
        },
        {
          "type": "quiz",
          "question": "What is an important advantage of using `with open()`?",
          "options": [
            "A. It automatically deletes the file.",
            "B. It automatically closes the file when the block finishes.",
            "C. It converts text into numbers.",
            "D. It prevents all possible file errors."
          ],
          "answer": "B. It automatically closes the file when the block finishes.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 7: CSV and JSON"
        },
        {
          "type": "quiz",
          "question": "Which Python module is used to work with JSON files?",
          "options": [
            "A. `os`",
            "B. `csv`",
            "C. `json`",
            "D. `math`"
          ],
          "answer": "C. `json`",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Question 8: Practical File Handling"
        },
        {
          "type": "code",
          "language": "python",
          "code": "with open(\"students.txt\", \"a\") as file:\n    file.write(\"Brian\\n\")"
        },
        {
          "type": "quiz",
          "question": "What happens when this code executes?",
          "options": [
            "A. It deletes `students.txt`.",
            "B. It adds Brian to the end of the file or creates the file if it does not exist.",
            "C. It reads all student records.",
            "D. It renames the file."
          ],
          "answer": "B. It adds Brian to the end of the file or creates the file if it does not exist.",
          "explanation": "Use the file-handling rule taught in the lesson to choose the answer, then read Kai's feedback after submitting."
        },
        {
          "type": "heading",
          "text": "Practical Challenge: Build a Student Records Manager"
        },
        {
          "type": "text",
          "text": "Create a Python application that manages student records using files."
        },
        {
          "type": "text",
          "text": "Your application must support:"
        },
        {
          "type": "text",
          "text": "**1. Register Student**"
        },
        {
          "type": "bullets",
          "items": [
            "Request the student's name.",
            "Request the student's age.",
            "Request the student's course.",
            "Save the information in a file."
          ]
        },
        {
          "type": "text",
          "text": "**2. View Students**"
        },
        {
          "type": "bullets",
          "items": [
            "Read the saved student records.",
            "Display all registered students."
          ]
        },
        {
          "type": "text",
          "text": "**3. Add More Students**"
        },
        {
          "type": "bullets",
          "items": [
            "Allow multiple student registrations.",
            "Preserve existing records."
          ]
        },
        {
          "type": "text",
          "text": "**4. Handle Errors**"
        },
        {
          "type": "bullets",
          "items": [
            "Handle missing files.",
            "Handle invalid input.",
            "Prevent empty student names.",
            "Validate that the age is a valid positive integer."
          ]
        },
        {
          "type": "text",
          "text": "**5. Organize Your Code**"
        },
        {
          "type": "text",
          "text": "Use functions such as:"
        },
        {
          "type": "code",
          "language": "python",
          "code": "def register_student():\n    pass\n\n\ndef view_students():\n    pass\n\n\ndef main():\n    pass"
        },
        {
          "type": "text",
          "text": "Your application should use a menu similar to:"
        },
        {
          "type": "code",
          "language": "text",
          "code": "===== STUDENT RECORDS MANAGER =====\n\n1. Register Student\n2. View Students\n3. Exit\n\nChoose an option:"
        },
        {
          "type": "text",
          "text": "**Submit your eight answers and completed practical challenge to Kai for marking, corrections and feedback.**"
        },
        {
          "type": "heading",
          "text": "LESSON COMPLETE"
        },
        {
          "type": "text",
          "text": "You have learned:"
        },
        {
          "type": "bullets",
          "items": [
            "What file handling is and why it matters.",
            "How to open and close files.",
            "File modes: `r`, `w`, `a`, `x`, `r+`, `w+` and `a+`.",
            "Reading files using `read()`, `readline()` and `readlines()`.",
            "Writing and appending information.",
            "Using the `with` statement.",
            "Deleting and renaming files.",
            "Managing folders and file paths.",
            "Reading and writing CSV files.",
            "Reading and writing JSON files.",
            "Handling file-related exceptions.",
            "Building practical file-based applications."
          ]
        },
        {
          "type": "text",
          "text": "**Part 4 of 4 — Lesson Complete**"
        },
        {
          "type": "text",
          "text": "**Recommended next lesson: Python Object-Oriented Programming (OOP) — Introduction to Classes and Objects.**"
        }
      ]
    }
  ]
};

export default delivery;
