# Game Engine: Inputs and Representation

# PART 1 OF 4: UNDERSTANDING GAME INPUTS

## 1. Introduction to Game Inputs

A game input is an action or instruction provided by a player to interact with a game.

When a player presses a keyboard key, moves a mouse, touches a screen, or presses a controller button, the game engine receives information about that action.

The engine processes the information and allows the game to respond.

For example:

- Pressing `W` may move a character forward.
- Pressing `Space` may make a character jump.
- Moving a mouse may rotate the camera.
- Pressing a controller trigger may fire a weapon.
- Touching a screen may select an object.

Without input handling, most interactive games would not respond to their players.

### The basic input process

A simplified input process looks like this:

```text
PLAYER ACTION
     |
     v
INPUT DEVICE
     |
     v
GAME ENGINE INPUT SYSTEM
     |
     v
INPUT REPRESENTATION
     |
     v
GAME LOGIC
     |
     v
GAME RESPONSE
```

Let's understand each stage.

**1. Player action**

The player performs an action, such as pressing a button.

**2. Input device**

The device detects the action. It could be a keyboard, mouse, gamepad, or touchscreen.

**3. Game engine input system**

The engine receives and processes the device information.

**4. Input representation**

The engine represents the action in a form that game code can understand, such as a Boolean value, number, vector, or event.

**5. Game logic**

The game decides what should happen based on the input.

**6. Game response**

The character moves, an object rotates, a menu opens, or another action occurs.

---

## 2. Types of Game Input Devices

Different devices provide different ways for players to interact with games.

### A. Keyboard Input

A keyboard allows players to control games by pressing keys.

Common examples include:

| Key | Typical game action |
|---|---|
| W | Move forward |
| S | Move backward |
| A | Move left |
| D | Move right |
| Space | Jump |
| Shift | Sprint |
| E | Interact |
| Esc | Pause or open menu |

Keyboard input is common in computer games.

For example, a first-person game might use:

```text
W = Move forward
S = Move backward
A = Move left
D = Move right
Mouse = Look around
Space = Jump
```

The game engine detects which keys are being pressed and makes that information available to the game.

### B. Mouse Input

A mouse provides two major forms of input:

1. Movement.
2. Button clicks.

Mouse movement can control a camera or pointer.

Mouse buttons can trigger actions.

Examples:

- Moving the mouse rotates the camera.
- Left-clicking fires a weapon.
- Right-clicking aims.
- Scrolling changes a weapon or zoom level.

Mouse movement is usually represented using two values:

```text
X = Horizontal movement
Y = Vertical movement
```

For example:

```text
Mouse movement: X = 5, Y = -3
```

This means the mouse moved horizontally and vertically relative to its previous position. The exact interpretation depends on the engine and input configuration.

### C. Game Controller Input

Game controllers provide buttons, directional pads, analog sticks, and triggers.

A controller may contain:

| Controller component | Typical function |
|---|---|
| Left analog stick | Character movement |
| Right analog stick | Camera movement |
| A / Cross button | Jump or confirm |
| B / Circle button | Cancel or interact |
| Left trigger | Aim |
| Right trigger | Fire |
| D-pad | Menu navigation |

Controllers are especially useful for console games and games designed around analog movement.

### D. Touchscreen Input

Touchscreens allow players to interact directly with objects displayed on a screen.

Common touchscreen actions include:

- Tap.
- Double tap.
- Swipe.
- Drag.
- Pinch.
- Long press.

Examples:

- Tapping a button fires a weapon.
- Swiping moves a character.
- Pinching zooms a camera.
- Dragging moves an object.

Touch input is common in mobile games.

### E. Motion and Other Inputs

Some games support additional input methods:

- Motion sensors.
- Accelerometers.
- Gyroscopes.
- Microphones.
- VR controllers.
- Hand tracking.

For example, tilting a phone can control a racing car.

---

## 3. Input Events and Input States

Game engines commonly represent input in two important ways: events and states.

Understanding the difference is essential.

### A. Input Events

An input event represents something that happened.

Examples:

- A keyboard key was pressed.
- A mouse button was released.
- A touchscreen was tapped.
- A controller button was clicked.

An event is associated with a particular occurrence.

For example:

```text
Event: Space key pressed
Action: Make the player jump
```

The game can respond when the event occurs.

### B. Input States

An input state describes the current condition of an input.

For example:

```text
W key = Pressed
Space key = Released
Mouse left button = Pressed
```

The engine can check these conditions while the game runs.

### Difference between events and states

| Feature | Input event | Input state |
|---|---|---|
| Meaning | Something happened | Current condition |
| Example | Key was pressed | Key is being held |
| Typical use | Trigger an action once | Continuous movement |
| Processing | When event occurs | Checked during updates |

**Example:**

Suppose a player wants to jump.

The game should normally start the jump when the player presses Space, not repeatedly start a new jump every frame while Space remains held.

However, when moving forward, the game should continue moving the player while W remains pressed.

This is why understanding events and states matters.

---

## 4. The Difference Between Pressed, Held and Released

A button can have different conditions during its interaction.

Consider the Space key.

**Pressed**

The moment the player initially presses the key.

**Held**

The key remains down.

**Released**

The moment the player lets go of the key.

A simplified sequence:

```text
Frame 1: Released
Frame 2: Pressed
Frame 3: Held
Frame 4: Held
Frame 5: Released
```

These conditions can be used for different game mechanics.

| Input condition | Possible use |
|---|---|
| Pressed | Start jumping |
| Held | Charge a powerful attack |
| Released | Release a charged attack |

### Why does this matter?

Imagine a racing game.

If the player holds the acceleration key, the car should continue accelerating.

But if the player presses a pause button, the pause action should usually happen once rather than repeatedly every frame.

Different input conditions help developers create appropriate responses.

---

## 5. Input Handling and the Game Loop

Input processing is connected to the game loop.

The game loop repeatedly updates the game while it is running.

A simplified version:

```text
START GAME
    |
    v
READ PLAYER INPUT
    |
    v
UPDATE GAME LOGIC
    |
    v
UPDATE PHYSICS
    |
    v
RENDER FRAME
    |
    v
REPEAT
```

During each iteration, the engine processes available input and updates the game.

For example:

1. The player holds W.
2. The engine detects that W is held.
3. The game calculates movement.
4. The character's position changes.
5. The engine renders the character in the new position.
6. The process repeats.

This creates the appearance of continuous movement.

### Part 1 summary

You have learned:

- What game input means.
- The different input devices.
- How the engine receives player actions.
- The difference between input events and input states.
- The difference between pressed, held, and released.
- How input processing fits into the game loop.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: HOW INPUTS ARE REPRESENTED

## 6. What Is Input Representation?

Input representation is the way a game engine converts physical player actions into data that a program can understand.

A player might move a joystick, but the game code needs numerical information to calculate movement.

A player might press a keyboard button, but the game needs a representation of which button was pressed and its current condition.

Game engines commonly use:

1. Boolean values.
2. Numeric values.
3. Vectors.
4. Enumerations.
5. Events and callbacks.
6. Input actions and mappings.

Let's examine each.

---

## 7. Boolean Representation

A Boolean is a data type that stores one of two values:

```text
true
false
```

Boolean values are useful for representing whether a button is pressed.

For example:

```csharp
bool isJumpPressed = true;
bool isMovingForward = false;
bool isSprinting = true;
```

Explanation:

**Line 1:**
```csharp
bool isJumpPressed = true;
```
Creates a Boolean variable indicating that the jump input is active.

**Line 2:**
```csharp
bool isMovingForward = false;
```
Indicates that the player is not currently moving forward.

**Line 3:**
```csharp
bool isSprinting = true;
```
Indicates that the sprint input is active.

A game can use these values to decide which actions to perform.

Example:

```csharp
bool jumpPressed = true;

if (jumpPressed)
{
    Console.WriteLine("Player jumps!");
}
```

Explanation:

- `bool jumpPressed = true;` creates a Boolean value representing the jump input.
- `if (jumpPressed)` checks whether the value is true.
- The message is printed when the condition is true.

Expected output:

```text
Player jumps!
```

In an actual game engine, the Boolean would normally come from the input system rather than being permanently set to `true`.

---

## 8. Numeric Representation

Some input devices provide numerical values instead of simple pressed or released conditions.

For example, an analog trigger may return a value representing how far it has been pressed.

A simplified range might be:

```text
0.0 = Not pressed
0.5 = Halfway pressed
1.0 = Fully pressed
```

These values allow games to support gradual input.

### Example: Analog acceleration

Imagine a racing game.

The player gradually presses the accelerator.

| Trigger value | Acceleration strength |
|---:|---|
| 0.0 | No acceleration |
| 0.2 | Low acceleration |
| 0.5 | Medium acceleration |
| 0.8 | Strong acceleration |
| 1.0 | Maximum acceleration |

The game can use this value to calculate the force applied to the car.

Example:

```csharp
float acceleratorInput = 0.7f;

float acceleration = acceleratorInput * 100f;

Console.WriteLine(acceleration);
```

Line-by-line explanation:

**Line 1:**
```csharp
float acceleratorInput = 0.7f;
```
Stores the analog input value. The `f` suffix identifies the number as a `float` literal.

**Line 2:**
```csharp
float acceleration = acceleratorInput * 100f;
```
Multiplies the input strength by 100 to calculate a simplified acceleration value.

**Line 3:**
```csharp
Console.WriteLine(acceleration);
```
Displays the calculated result.

Expected output:

```text
70
```

The result represents 70% of the example's maximum acceleration scale.

---

## 9. Vector Representation

Vectors are extremely important in game development.

A vector represents a direction and magnitude using numerical components.

For two-dimensional games, a vector normally contains:

```text
X = Horizontal component
Y = Vertical component
```

For three-dimensional games, a vector normally contains:

```text
X = Horizontal component
Y = Vertical component
Z = Depth component
```

### Two-dimensional input

Consider a character controlled using four keys:

```text
W = Up
S = Down
A = Left
D = Right
```

The engine can represent movement using two numbers.

| Direction | X | Y |
|---|---:|---:|
| Right | 1 | 0 |
| Left | -1 | 0 |
| Up | 0 | 1 |
| Down | 0 | -1 |
| Up-right | 1 | 1 |
| Down-left | -1 | -1 |

For example:

```text
(1, 0)
```

Means movement toward the right.

```text
(0, 1)
```

Means movement upward.

```text
(-1, 0)
```

Means movement toward the left.

### Three-dimensional input

A 3D game can use a vector with three components.

```text
(1, 0, 0)
```

Represents movement along the positive X direction.

```text
(0, 0, 1)
```

Represents movement along the positive Z direction.

The exact meaning of each axis depends on the engine's coordinate convention.

### C# vector example

The following example uses Unity's `Vector2` structure:

```csharp
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    void Update()
    {
        Vector2 movement = new Vector2(1f, 0f);

        Debug.Log(movement);
    }
}
```

Explanation:

**Line 1:**
```csharp
using UnityEngine;
```
Imports Unity's API, which provides game development types such as `MonoBehaviour` and `Vector2`.

**Line 2:**
```csharp
public class PlayerMovement : MonoBehaviour
```
Creates a Unity component named `PlayerMovement`. Inheriting from `MonoBehaviour` allows Unity to attach the script to a GameObject and call its lifecycle methods.

**Line 3:**
```csharp
void Update()
```
Defines a method Unity calls once per rendered frame while the component is enabled.

**Line 4:**
```csharp
Vector2 movement = new Vector2(1f, 0f);
```
Creates a two-dimensional vector representing movement along the positive X axis.

**Line 5:**
```csharp
Debug.Log(movement);
```
Displays the vector in Unity's Console.

**Important:** This example creates a vector directly. It does not yet read a real keyboard or controller. We will connect input to vectors later.

---

## 10. Input Mappings

An input mapping connects a physical input to a game action.

For example:

```text
Keyboard W       ----\
Controller Stick ----- > MOVE FORWARD
Touch Joystick   ----/
```

The player may use different devices, but the game can interpret them as the same action.

This is called input mapping or action mapping.

### Why are mappings useful?

Suppose you are developing a football game.

You might define these actions:

| Game action | Keyboard mapping | Controller mapping |
|---|---|---|
| Move | W, A, S, D | Left stick |
| Pass | E | A button |
| Shoot | Space | B button |
| Sprint | Shift | Right trigger |
| Pause | Esc | Menu button |

Instead of writing separate gameplay logic for every device, you can make the game respond to the actions.

For example:

```text
IF MOVE ACTION IS ACTIVE
    MOVE PLAYER
```

The engine determines whether the action came from the keyboard or controller.

### Unity Input System example

Unity's Input System supports actions that can be connected to different physical controls.

A typical setup could contain:

```text
Action Map: Player

Actions:
    Move
    Jump
    Sprint
    Interact
```

The `Move` action might be connected to:

- Keyboard WASD.
- Controller left stick.
- A virtual joystick on a touchscreen.

This allows multiple devices to control the same gameplay action.

---

## 11. Input Sensitivity and Dead Zones

Analog devices do not always return perfectly neutral values.

For example, a controller stick may report a very small movement even when the player is not touching it.

This can cause unwanted character movement.

A dead zone is a range of input values that the game ignores.

Example:

```text
Input magnitude: 0.02
Dead zone: 0.10

Result: Ignore input
```

Another example:

```text
Input magnitude: 0.65
Dead zone: 0.10

Result: Accept input
```

Dead zones are commonly used with:

- Analog sticks.
- Triggers.
- Motion controllers.

### Input sensitivity

Sensitivity controls how strongly a game responds to input.

For example, mouse sensitivity determines how much the camera rotates when the mouse moves.

High sensitivity:

- Small mouse movement produces a large camera movement.

Low sensitivity:

- The same mouse movement produces a smaller camera movement.

### Part 2 summary

You have learned how game engines represent input using:

- Boolean values.
- Numeric values.
- Two-dimensional and three-dimensional vectors.
- Input mappings.
- Analog sensitivity and dead zones.

You have also seen how physical device actions can become structured data that game logic can use.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL INPUT HANDLING WITH C#

We will now create practical examples that demonstrate how input representation works.

We will begin with ordinary C# console programs to understand the logic, then connect the ideas to Unity.

## 12. Setting Up the Practical Environment

You need:

- Visual Studio, Visual Studio Code, or another C# editor.
- A working .NET SDK.
- A terminal.

Create a project:

```bash
dotnet new console -n GameInputPractice
```

Explanation:

- `dotnet` runs the .NET command-line tool.
- `new console` creates a console application.
- `-n GameInputPractice` names the project.

Enter the project directory:

```bash
cd GameInputPractice
```

Open the project in your editor.

Find the `Program.cs` file. We will write our first program there.

---

## 13. Practical Example 1: Detecting Keyboard Input

We will create a simple program that asks the player to enter a command.

The program will interpret the entered character as a game action.

### Complete code

```csharp
Console.WriteLine("=== GAME INPUT SYSTEM ===");

Console.WriteLine("W - Move Forward");
Console.WriteLine("S - Move Backward");
Console.WriteLine("A - Move Left");
Console.WriteLine("D - Move Right");
Console.WriteLine("Q - Quit");

Console.Write("Enter your command: ");

string? input = Console.ReadLine();

if (string.IsNullOrWhiteSpace(input))
{
    Console.WriteLine("No command entered.");
}
else
{
    char command = char.ToUpper(input[0]);

    if (command == 'W')
    {
        Console.WriteLine("Moving Forward");
    }
    else if (command == 'S')
    {
        Console.WriteLine("Moving Backward");
    }
    else if (command == 'A')
    {
        Console.WriteLine("Moving Left");
    }
    else if (command == 'D')
    {
        Console.WriteLine("Moving Right");
    }
    else if (command == 'Q')
    {
        Console.WriteLine("Exiting Game");
    }
    else
    {
        Console.WriteLine("Invalid Command");
    }
}
```

### Line-by-line explanation

**Display the game controls:**

```csharp
Console.WriteLine("=== GAME INPUT SYSTEM ===");
```

Displays the program heading.

```csharp
Console.WriteLine("W - Move Forward");
Console.WriteLine("S - Move Backward");
Console.WriteLine("A - Move Left");
Console.WriteLine("D - Move Right");
Console.WriteLine("Q - Quit");
```

These statements tell the player which commands are supported.

```csharp
Console.Write("Enter your command: ");
```

Displays an input prompt. Unlike `WriteLine`, `Write` keeps the cursor on the same line.

**Read the player's input:**

```csharp
string? input = Console.ReadLine();
```

Reads the text entered by the player.

The `?` indicates that the variable can contain `null`, because `Console.ReadLine()` may return `null` if no more input is available.

**Validate the input:**

```csharp
if (string.IsNullOrWhiteSpace(input))
```

Checks whether the input is null, empty, or contains only whitespace.

```csharp
Console.WriteLine("No command entered.");
```

Displays a message if the player did not provide a usable command.

**Convert the command to uppercase:**

```csharp
char command = char.ToUpper(input[0]);
```

This line performs two operations:

- `input[0]` accesses the first character of the entered text.
- `char.ToUpper()` converts that character to uppercase.

This means the program treats `w` and `W` as the same command.

**Check the command:**

```csharp
if (command == 'W')
```

Checks whether the command is the letter W.

```csharp
Console.WriteLine("Moving Forward");
```

Displays the corresponding game action.

The `else if` statements perform similar checks for the other movement commands.

**Handle invalid commands:**

```csharp
else
{
    Console.WriteLine("Invalid Command");
}
```

If none of the supported commands matches, the program displays an error message.

### Expected output

If the player enters:

```text
w
```

The output includes:

```text
Moving Forward
```

If the player enters:

```text
x
```

The output includes:

```text
Invalid Command
```

### Important limitation

This is a simplified input simulation.

`Console.ReadLine()` waits for the player to press Enter. It does not continuously detect keyboard states like a real-time game engine.

---

## 14. Practical Example 2: Representing Movement with Vectors

Now we will simulate a player moving in a 2D game.

We will use two numerical values:

- X represents horizontal movement.
- Y represents vertical movement.

### Complete code

```csharp
Console.WriteLine("=== 2D MOVEMENT SYSTEM ===");

Console.Write("Enter horizontal input (-1, 0, 1): ");
int x = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter vertical input (-1, 0, 1): ");
int y = Convert.ToInt32(Console.ReadLine());

Console.WriteLine();

Console.WriteLine($"Movement Vector: ({x}, {y})");

if (x == 1 && y == 0)
{
    Console.WriteLine("Moving Right");
}
else if (x == -1 && y == 0)
{
    Console.WriteLine("Moving Left");
}
else if (x == 0 && y == 1)
{
    Console.WriteLine("Moving Up");
}
else if (x == 0 && y == -1)
{
    Console.WriteLine("Moving Down");
}
else if (x == 0 && y == 0)
{
    Console.WriteLine("Player is Stationary");
}
else
{
    Console.WriteLine("Moving Diagonally");
}
```

### Line-by-line explanation

```csharp
Console.WriteLine("=== 2D MOVEMENT SYSTEM ===");
```

Displays the program heading.

```csharp
int x = Convert.ToInt32(Console.ReadLine());
```

Reads a number representing horizontal input.

Possible values:

- `-1`: Left.
- `0`: No horizontal movement.
- `1`: Right.

```csharp
int y = Convert.ToInt32(Console.ReadLine());
```

Reads the vertical input.

Possible values:

- `-1`: Down.
- `0`: No vertical movement.
- `1`: Up.

These values form a simple two-dimensional movement vector.

```csharp
Console.WriteLine($"Movement Vector: ({x}, {y})");
```

Displays both values together.

The `$` allows C# string interpolation, which inserts variable values into the text.

```csharp
if (x == 1 && y == 0)
```

Checks whether the player is moving right without vertical movement.

The `&&` operator means both conditions must be true.

```csharp
else if (x == -1 && y == 0)
```

Checks for left movement.

```csharp
else if (x == 0 && y == 1)
```

Checks for upward movement.

```csharp
else if (x == 0 && y == -1)
```

Checks for downward movement.

```csharp
else if (x == 0 && y == 0)
```

Checks whether there is no movement on either axis.

The final `else` handles the remaining combinations, including diagonal movement.

### Example input

```text
Horizontal input: 1
Vertical input: 1
```

Expected output:

```text
Movement Vector: (1, 1)
Moving Diagonally
```

### A technical improvement: diagonal normalization

A problem occurs when diagonal movement uses the same speed on both axes.

For example:

```text
Right: (1, 0)
Diagonal: (1, 1)
```

The diagonal vector has a greater magnitude.

Its length is:

```text
√(1² + 1²) = √2 ≈ 1.414
```

This means diagonal movement could be approximately 41% faster if the game multiplies the raw vector directly by speed.

A common solution is to normalize the vector.

Normalization changes the vector's length to 1 while preserving its direction.

In Unity:

```csharp
Vector2 movement = new Vector2(1f, 1f);

movement = movement.normalized;

Debug.Log(movement);
```

The resulting vector is approximately:

```text
(0.707, 0.707)
```

This prevents diagonal input from automatically producing a greater movement magnitude.

---

## 15. Practical Example 3: Creating a Continuous Input Loop

A game needs to process input repeatedly rather than only once.

We can simulate this idea using a console loop.

### Complete code

```csharp
bool running = true;

while (running)
{
    Console.Write("Enter command (W, S, A, D, Q): ");

    string? input = Console.ReadLine();

    if (string.IsNullOrWhiteSpace(input))
    {
        Console.WriteLine("Enter a valid command.");
        continue;
    }

    char command = char.ToUpper(input[0]);

    switch (command)
    {
        case 'W':
            Console.WriteLine("Player moves forward.");
            break;

        case 'S':
            Console.WriteLine("Player moves backward.");
            break;

        case 'A':
            Console.WriteLine("Player moves left.");
            break;

        case 'D':
            Console.WriteLine("Player moves right.");
            break;

        case 'Q':
            running = false;
            Console.WriteLine("Game ended.");
            break;

        default:
            Console.WriteLine("Unknown command.");
            break;
    }
}
```

### Line-by-line explanation

```csharp
bool running = true;
```

Creates a Boolean variable that controls whether the game simulation should continue.

```csharp
while (running)
```

Starts a loop that repeats while `running` is true.

```csharp
Console.Write("Enter command (W, S, A, D, Q): ");
```

Asks the player to enter an action.

```csharp
string? input = Console.ReadLine();
```

Reads the command.

```csharp
if (string.IsNullOrWhiteSpace(input))
```

Checks whether the player entered usable text.

```csharp
continue;
```

Skips the remaining statements in the current loop iteration and starts another iteration.

```csharp
char command = char.ToUpper(input[0]);
```

Converts the first character to uppercase.

```csharp
switch (command)
```

Checks the command against several possible cases.

For example:

```csharp
case 'W':
    Console.WriteLine("Player moves forward.");
    break;
```

If the command is W, the program displays the forward movement message.

`break` exits the switch statement so another case is not executed.

```csharp
case 'Q':
    running = false;
    Console.WriteLine("Game ended.");
    break;
```

When the player enters Q, the program changes `running` to false.

The `while` loop then stops after the current iteration.

### Why is this not a real-time game loop?

This program waits for the player to press Enter before processing each command.

Real game engines use their own frame and input systems to process input continuously without requiring Enter.

However, the example teaches the important idea of repeatedly checking for player actions.

---

## 16. Practical Example 4: Reading Real Keyboard Input in Unity

Now let's connect input handling to an actual game engine.

Unity offers an Input System package with an action-based approach. It also has a legacy input API.

For this example, we will use Unity's legacy `Input.GetAxisRaw` and `Input.GetKeyDown` methods because they make the connection between physical input and game code easy to see.

### Step 1: Create a Unity project

1. Open Unity Hub.
2. Create a 3D project.
3. Open the scene.
4. Create a Cube.
5. Rename the Cube to `Player`.
6. Create a C# script called `PlayerInput`.
7. Attach the script to the Player cube.

### Step 2: Write the code

```csharp
using UnityEngine;

public class PlayerInput : MonoBehaviour
{
    void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        Vector3 movement = new Vector3(
            horizontal,
            0f,
            vertical
        );

        transform.Translate(movement * 5f * Time.deltaTime);

        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log("Jump button pressed!");
        }
    }
}
```

### Detailed explanation

**Import Unity:**

```csharp
using UnityEngine;
```

Provides access to Unity classes and methods.

**Create the component:**

```csharp
public class PlayerInput : MonoBehaviour
```

Defines a script that Unity can attach to a GameObject.

**Create the update method:**

```csharp
void Update()
```

Unity calls this method once per rendered frame while the component is enabled.

**Read horizontal input:**

```csharp
float horizontal = Input.GetAxisRaw("Horizontal");
```

Reads the horizontal input axis.

With the default legacy keyboard mappings:

- A or Left Arrow produces a negative value.
- D or Right Arrow produces a positive value.
- No horizontal input produces zero.

**Read vertical input:**

```csharp
float vertical = Input.GetAxisRaw("Vertical");
```

Reads vertical input.

With the default legacy keyboard mappings:

- S or Down Arrow produces a negative value.
- W or Up Arrow produces a positive value.
- No vertical input produces zero.

**Create a movement vector:**

```csharp
Vector3 movement = new Vector3(
    horizontal,
    0f,
    vertical
);
```

Creates a three-dimensional vector.

The horizontal input becomes X.

The Y component is zero because this example moves the cube along the ground rather than vertically.

The vertical input becomes Z.

**Move the player:**

```csharp
transform.Translate(movement * 5f * Time.deltaTime);
```

This moves the GameObject.

- `transform.Translate()` changes its position.
- `movement` determines the direction.
- `5f` represents the movement speed.
- `Time.deltaTime` adjusts movement according to elapsed time since the previous frame.

This helps keep movement speed consistent across different frame rates.

**Detect the jump button:**

```csharp
if (Input.GetKeyDown(KeyCode.Space))
```

Checks whether the Space key was pressed during the current frame.

```csharp
Debug.Log("Jump button pressed!");
```

Displays a message in the Unity Console.

This example detects the jump command but does not physically make the cube jump.

### Important Unity note

`Input.GetAxisRaw`, `Input.GetKeyDown`, and related `Input` methods belong to Unity's legacy Input Manager API.

For new projects, Unity recommends its newer Input System package. If your project is configured to use only the new Input System, the legacy calls may not work until the Active Input Handling setting is adjusted.

The action-based Input System is particularly useful for games that support keyboards, controllers, and touchscreens.

---

## 17. Practical Exercises

Complete these exercises before moving to the assessment.

### Exercise 1: Keyboard Input

Create a C# program that accepts:

- W for forward.
- S for backward.
- A for left.
- D for right.
- Space for jump.

For this console exercise, represent Space using a text command such as `JUMP`.

Your program should display the selected action.

### Exercise 2: Movement Representation

Create a program that accepts X and Y movement values.

It should identify:

- Left.
- Right.
- Up.
- Down.
- Stationary.
- Diagonal movement.

Reject values outside the range -1 to 1.

### Exercise 3: Input Mapping

Design an input mapping table for a shooting game.

Include at least:

- Movement.
- Jump.
- Reload.
- Shoot.
- Aim.
- Pause.

Provide keyboard and controller mappings.

### Exercise 4: Unity Player Controller

Create a Unity scene containing a Player cube.

Write a script that:

- Reads horizontal input.
- Reads vertical input.
- Converts input into a movement vector.
- Moves the cube.
- Detects when Space is pressed.

Explain every important line of your code.

### Part 3 summary

You have now worked with:

- Keyboard input.
- Input validation.
- Boolean input representation.
- Numeric input.
- Movement vectors.
- Continuous input processing.
- Unity keyboard input.
- Frame-rate-independent movement.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## 18. Assessment Instructions

You have completed the teaching and practical sections.

Now Kai will assess your understanding of game input systems and input representation.

Answer the questions carefully. For programming questions, include code and explain your reasoning.

## Section A: Multiple-Choice Questions

**1. What is game input?**

A. The process of rendering graphics.

B. An action or instruction provided by a player to interact with a game.

C. A method of storing textures.

D. A type of game animation.

**2. Which device is commonly used to control camera movement in a PC first-person game?**

A. Printer.

B. Mouse.

C. Speaker.

D. Scanner.

**3. What does a Boolean input representation store?**

A. Only decimal numbers.

B. Two-dimensional coordinates.

C. True or false.

D. Images.

**4. What is the difference between an input event and an input state?**

A. They mean exactly the same thing.

B. An event represents something that happened, while a state represents a current condition.

C. An event stores graphics.

D. A state only works with controllers.

**5. What does a movement vector `(1, 0)` normally represent in a 2D coordinate system?**

A. Left.

B. Right.

C. Up.

D. Down.

**6. What is the purpose of an input mapping?**

A. To connect physical controls to game actions.

B. To increase screen resolution.

C. To store sound effects.

D. To create textures.

**7. What is a dead zone?**

A. An area where the game renders no graphics.

B. A range of analog input values ignored by the game.

C. A type of collision.

D. A method of saving player progress.

**8. Why is `Time.deltaTime` commonly used in Unity movement calculations?**

A. To increase texture quality.

B. To make movement less dependent on frame rate.

C. To detect mouse clicks.

D. To load game assets.

## Section B: Short-Answer Questions

**9.** Explain the journey of a keyboard input from the moment a player presses a key to the moment the game responds.

**10.** Explain the difference between pressed, held, and released input states. Give one gameplay example for each.

**11.** What is the difference between digital input and analog input?

**12.** Explain why vectors are useful when representing player movement.

**13.** What is the purpose of normalizing a movement vector?

**14.** Explain why input mappings are useful when developing games that support keyboards and controllers.

## Section C: Practical Programming Questions

**15. Keyboard input program**

Write a C# program that accepts W, A, S, and D commands and displays the corresponding movement direction.

Your program must:

- Accept lowercase and uppercase letters.
- Reject unsupported commands.
- Handle empty input.

**16. Movement vector**

Write a C# program that accepts horizontal and vertical input values and represents them as a two-dimensional movement vector.

Explain how the values represent direction.

**17. Unity input detection**

Write a Unity C# script that:

- Reads horizontal input.
- Reads vertical input.
- Creates a `Vector3` movement vector.
- Moves a GameObject.
- Detects when Space is pressed.

Explain the purpose of each important statement.

## Section D: Debugging

**18. Find and correct the error in this code:**

```csharp
bool jumpPressed = true;

if (jumpPressed = false)
{
    Console.WriteLine("Player jumps!");
}
```

Explain why the condition does not work as intended.

**19. Find the problem in this Unity code:**

```csharp
void Update()
{
    float horizontal = Input.GetAxisRaw("Horizontal");
    float vertical = Input.GetAxisRaw("Vertical");

    Vector3 movement = new Vector3(horizontal, 0f, vertical);

    transform.Translate(movement * 5f);
}
```

Explain why movement speed may vary across computers with different frame rates and correct the code.

**20. A player uses an analog controller stick. The stick reports a very small value even when untouched. What problem can this create, and how can a dead zone solve it?**

---

## 19. Final Practical Project: Build a Basic Input Controller

Create a small player input controller using Unity and C#.

### Project requirements

Create a Unity scene containing a player object.

Your controller should support:

1. Moving forward.
2. Moving backward.
3. Moving left.
4. Moving right.
5. Detecting the jump key.
6. Representing movement using a vector.
7. Preventing diagonal movement from being faster than straight movement.

### Expected project structure

```text
GameInputProject/
│
├── Assets/
│   ├── Scenes/
│   │   └── MainScene
│   │
│   ├── Scripts/
│   │   └── PlayerInput.cs
│   │
│   └── Materials/
│
└── ProjectSettings/
```

### Project submission

Submit to Kai:

- Your C# source code.
- A screenshot of your Unity scene.
- A screenshot showing the player moving.
- A brief explanation of how input is received and represented.
- Your answers to the assessment questions.

Kai should evaluate:

| Assessment area | What Kai checks |
|---|---|
| Input understanding | Correct explanation of game input |
| Input representation | Correct use of Boolean, numeric, and vector values |
| Programming | Correct C# syntax and logic |
| Unity implementation | Correct input detection and movement |
| Problem-solving | Ability to identify and correct errors |
| Project completion | Whether all requirements are implemented |

## 20. Lesson Completion Checklist

Before marking this lesson complete, confirm that you can:

- [ ] Explain what game input is.
- [ ] Identify different input devices.
- [ ] Explain input events and states.
- [ ] Distinguish pressed, held, and released.
- [ ] Represent button states using Boolean values.
- [ ] Represent analog input using numbers.
- [ ] Represent movement using vectors.
- [ ] Explain input mappings.
- [ ] Explain dead zones and sensitivity.
- [ ] Read keyboard input using C#.
- [ ] Create a movement vector.
- [ ] Detect input in Unity.
- [ ] Explain why `Time.deltaTime` is important.
- [ ] Build a basic player input controller.

---

# LESSON COMPLETE

**Game Engine: Inputs and Representation**

You have learned how player actions are received, represented, processed, and translated into game behavior.

The next stage is understanding how games turn input into actual movement, interaction, and physical behavior through game objects, transforms, and physics.

**Progress: Part 4 of 4 — Lesson Complete**