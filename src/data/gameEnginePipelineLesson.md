# GAME ENGINE: THE CORE PIPELINE

## PART 1 OF 4: UNDERSTANDING THE GAME ENGINE PIPELINE

### 1. What Is a Game Engine?

A game engine is a software framework that provides the tools and systems needed to create, develop, run, and manage video games.

Instead of building every feature from scratch, developers use a game engine to handle common tasks such as:

- Rendering graphics.
- Processing player input.
- Calculating physics.
- Playing audio.
- Managing game objects.
- Handling animations.
- Loading game assets.
- Managing scenes and levels.
- Running game logic.

Popular game engines include:

| Game Engine | Main Programming Languages | Common Uses |
|---|---|---|
| Unity | C# | 2D, 3D, mobile and desktop games |
| Unreal Engine | C++, Blueprints | High-quality 3D games |
| Godot | GDScript, C#, C++ | 2D and 3D games |
| GameMaker | GML | 2D games |
| CryEngine | C++, Lua | Advanced 3D games |

### 2. What Is the Core Pipeline?

The game engine pipeline is the sequence of processes that transform game resources and player actions into the experience displayed on the screen.

Think about a simple racing game.

When a player presses the accelerator:
1. The engine receives the keyboard or controller input.
2. The game logic interprets the input.
3. The physics system calculates the car's acceleration.
4. The car's position changes.
5. The rendering system draws the updated car position.
6. The audio system may play an engine sound.

These operations happen continuously while the game is running.

A simplified pipeline looks like this:

```text
       GAME ASSETS
            |
            v
      ASSET LOADING
            |
            v
      GAME INITIALIZATION
            |
            v
       GAME LOOP
            |
     +------+------+
     |             |
     v             v
 PLAYER INPUT   GAME LOGIC
     |             |
     +------+------+
            |
            v
        PHYSICS
            |
            v
        ANIMATION
            |
            v
        RENDERING
            |
            v
       AUDIO OUTPUT
            |
            v
       DISPLAY FRAME
            |
            v
       REPEAT LOOP
```

This is a conceptual diagram. Real engines can process some of these systems in different orders or concurrently.

### 3. Understanding Game Assets

Game assets are the resources used to construct a game.

They include:

**A. 3D Models**

These represent objects with width, height, and depth.

Examples:
- Cars.
- Buildings.
- Characters.
- Weapons.
- Trees.

**B. Textures**

Textures are images applied to 3D models to give them surface appearance.

For example, a wall model may look plain without a texture. Applying a brick texture makes it look like a brick wall.

**C. Audio Assets**

These include:
- Background music.
- Footsteps.
- Gunshots.
- Vehicle sounds.
- Environmental sounds.

**D. Animation Assets**

Animations define how objects or characters move.

Examples:
- Walking.
- Running.
- Jumping.
- Attacking.
- Opening doors.

**E. Scripts**

Scripts contain instructions that define how objects behave.

For example, a player movement script may determine how a character responds when the user presses the movement keys.

### 4. Asset Loading and Initialization

Before a game can run, the engine needs to prepare its resources and systems.

This process involves two important stages.

**Asset Loading**

The engine loads required resources, such as models, textures, audio, and animations.

**Initialization**

The engine prepares the game environment.

For example:
- Creating the player object.
- Loading the starting level.
- Initializing the camera.
- Setting the initial player position.
- Preparing physics settings.
- Initializing game variables.

Consider a simple game where the player starts with three lives.

```csharp
int playerLives = 3;
int playerScore = 0;
bool gameStarted = false;
```

Line-by-line explanation:

- `int playerLives = 3;` creates an integer variable that stores the player's starting lives.
- `int playerScore = 0;` initializes the player's score to zero.
- `bool gameStarted = false;` indicates that the game has not started yet.

These variables represent initial game state.

### 5. The Game Loop

The game loop is one of the most important concepts in game engine architecture.

It is a repeating process that keeps the game running and responding to the player.

A simplified game loop:

```csharp
while (gameRunning)
{
    ProcessInput();
    UpdateGame();
    RenderFrame();
}
```

Explanation:

`while (gameRunning)`

The loop continues while the game is running.

`ProcessInput();`

The engine checks whether the player has pressed a key, moved a joystick, or performed another action.

`UpdateGame();`

The game updates its internal state. For example, a character may move, an enemy may attack, or a timer may decrease.

`RenderFrame();`

The engine draws the current state of the game to the screen.

The loop repeats continuously.

### 6. Understanding Frames Per Second (FPS)

FPS means Frames Per Second.

It describes how many images are displayed every second.

| FPS | Meaning |
|---|---|
| 15 FPS | 15 frames displayed per second |
| 30 FPS | 30 frames displayed per second |
| 60 FPS | 60 frames displayed per second |
| 120 FPS | 120 frames displayed per second |

At 60 FPS, the game has approximately:

```text
1 second / 60 frames = 0.0167 seconds per frame
```

That means the engine has about 16.67 milliseconds for each frame.

Higher FPS can make movement appear smoother, although the actual experience also depends on frame pacing, display refresh rate, and performance consistency.

### 7. Why the Pipeline Matters

Understanding the pipeline helps developers identify where problems occur.

For example:

| Problem | Possible System Responsible |
|---|---|
| Character does not move | Input or game logic |
| Character falls through the floor | Physics or collision |
| Object appears invisible | Rendering or asset configuration |
| Character animation does not play | Animation system |
| Sound does not play | Audio system |
| Game takes too long to start | Asset loading or initialization |
| Game freezes | Main loop or performance problem |

### Part 1 Summary

You have learned:

- What a game engine is.
- What the core pipeline means.
- What game assets are.
- How assets are loaded.
- What initialization does.
- How the game loop works.
- What FPS means.
- Why understanding the pipeline helps with debugging.

**Progress: Part 1 of 4**

---

## PART 2 OF 4: EXPLORING THE MAJOR PIPELINE SYSTEMS

### 1. Input Processing

Input processing is responsible for receiving actions from the player.

Inputs may come from:

- Keyboard.
- Mouse.
- Game controller.
- Touchscreen.
- Virtual reality controllers.
- Motion sensors.

Consider a player using the keyboard to move a character.

```text
W = Move Forward
S = Move Backward
A = Move Left
D = Move Right
SPACE = Jump
```

The input system detects these actions and makes the information available to the game logic.

For example, in Unity using C#:

```csharp
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKey(KeyCode.W))
        {
            Debug.Log("Player moving forward");
        }
    }
}
```

Explanation:

- `using UnityEngine;` imports Unity's main programming namespace.
- `public class PlayerMovement : MonoBehaviour` creates a Unity component called `PlayerMovement`.
- `void Update()` defines a method Unity calls once per rendered frame.
- `Input.GetKey(KeyCode.W)` checks whether the W key is currently held down.
- `Debug.Log()` writes a message to the Unity Console.

This example detects input but does not physically move the character.

### 2. Game Logic

Game logic defines the rules and behavior of a game.

Examples include:

- Determining when a player wins.
- Calculating scores.
- Managing player health.
- Controlling enemy behavior.
- Handling missions.
- Managing inventory.
- Tracking objectives.

Consider a simple health system:

```csharp
int health = 100;

void TakeDamage(int damage)
{
    health -= damage;

    if (health <= 0)
    {
        Debug.Log("Player defeated");
    }
}
```

Explanation:

`int health = 100;`

The player begins with 100 health points.

`void TakeDamage(int damage)`

Defines a method that receives the amount of damage.

`health -= damage;`

Subtracts the received damage from the player's health.

`if (health <= 0)`

Checks whether the player's health has reached zero or less.

`Debug.Log("Player defeated");`

Displays a message when the player has been defeated.

### 3. Physics Simulation

Physics simulation makes game objects behave according to physical rules.

It can calculate:

- Gravity.
- Acceleration.
- Velocity.
- Collisions.
- Friction.
- Forces.
- Rigid body movement.

Imagine a ball falling from a building.

Without physics, the developer would need to manually calculate how the ball moves.

With a physics engine, the developer can configure gravity and collision properties, allowing the engine to calculate much of the movement automatically.

A simplified physics relationship is:

```text
Force = Mass × Acceleration
```

Mathematically:

```text
F = m × a
```

Where:

- F represents force.
- m represents mass.
- a represents acceleration.

For example, if a 2 kg object experiences an acceleration of 5 m/s²:

```text
F = 2 × 5

F = 10 Newtons
```

The engine uses physics calculations to simulate object movement and interactions.

### 4. Collision Detection

Collision detection determines whether two or more game objects are touching or overlapping.

Examples:
- A bullet hitting an enemy.
- A character touching a wall.
- A player collecting a coin.
- A vehicle hitting another vehicle.

There are different approaches to collision detection.

**A. Bounding Boxes**

An object is represented by a box that surrounds it.

The engine checks whether the boxes overlap.

**B. Sphere Colliders**

Objects are represented by spherical collision boundaries.

**C. Mesh Colliders**

Collision boundaries follow the shape of a model more closely, depending on the implementation.

**D. Trigger Colliders**

These detect when objects enter or leave an area without necessarily producing a physical collision response.

Example in Unity:

```csharp
using UnityEngine;

public class CoinCollector : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            Debug.Log("Coin collected");
            Destroy(gameObject);
        }
    }
}
```

Explanation:

- `OnTriggerEnter(Collider other)` is called when another collider enters this object's trigger area.
- `other.CompareTag("Player")` checks whether the entering object has the Player tag.
- `Debug.Log()` displays a collection message.
- `Destroy(gameObject)` removes the coin object from the scene.

For this example to work, the coin needs an appropriately configured trigger collider, and the physics setup must satisfy Unity's trigger requirements.

### 5. Animation Processing

Animation controls how characters and objects change their appearance or position over time.

Examples:

- A character walking.
- A door opening.
- A car's wheels rotating.
- An enemy attacking.
- Water flowing.

Animations may be created using:

- Keyframes.
- Skeletal animation.
- Procedural animation.
- Motion capture.
- Animation blending.

**What are keyframes?**

A keyframe defines an object's properties at a particular point in time.

For example:

| Time | Character Position |
|---|---|
| 0 seconds | X = 0 |
| 1 second | X = 5 |
| 2 seconds | X = 10 |

The animation system can interpolate between these positions to produce continuous movement.

### 6. Rendering

Rendering is the process of generating the images that appear on the screen.

It is responsible for transforming the game world's objects into a visible image from the camera's perspective.

Rendering involves several important concepts.

**A. Geometry**

Geometry describes the shape and structure of 3D objects.

**B. Materials**

Materials define how surfaces interact with light.

**C. Lighting**

Lighting determines how objects are illuminated.

**D. Shadows**

Shadows help communicate depth and object positions.

**E. Camera**

The camera determines what part of the game world is visible.

**F. Shaders**

Shaders are programs that control how objects are processed for visual output.

For example, shaders can create:
- Water effects.
- Reflections.
- Glass transparency.
- Fire effects.
- Realistic skin materials.

### 7. Audio Processing

The audio system manages the sounds heard during gameplay.

It handles:

- Background music.
- Sound effects.
- Environmental sounds.
- Character voices.
- Spatial audio.

For example, when a player fires a weapon, the game logic can instruct the audio system to play a gunshot sound.

Audio systems can also consider distance and direction.

A sound coming from the left side of the player may be heard more strongly in the left audio channel.

### 8. Displaying the Final Frame

After the engine processes the game state and rendering commands, the resulting image is presented on the display.

This process repeats throughout gameplay.

A simplified view:

```text
INPUT
  |
  v
GAME LOGIC
  |
  v
PHYSICS
  |
  v
ANIMATION
  |
  v
RENDERING
  |
  v
AUDIO / OTHER SYSTEMS
  |
  v
OUTPUT
```

Remember that audio is not necessarily processed after rendering. Modern engines can run audio and other systems independently or concurrently.

### Part 2 Summary

You now understand the major systems that participate in a game engine pipeline:

- Input processing.
- Game logic.
- Physics simulation.
- Collision detection.
- Animation.
- Rendering.
- Audio processing.
- Frame presentation.

**Progress: Part 2 of 4**

---

## PART 3 OF 4: PRACTICAL PIPELINE IMPLEMENTATION

In this part, we will create a small conceptual game pipeline using C#.

We will use ordinary C# code to understand how the systems communicate.

This is not a complete game engine. It is a simplified simulation of some of the operations that occur inside one.

### 1. Prepare the Development Environment

You can use:

- Visual Studio.
- Visual Studio Code with the C# extension.
- The .NET SDK.

Create a project:

```bash
dotnet new console -n GamePipelineDemo
```

Explanation:

- `dotnet` runs the .NET command-line interface.
- `new console` creates a console application.
- `-n GamePipelineDemo` gives the project its name.

Enter the project folder:

```bash
cd GamePipelineDemo
```

Run the application:

```bash
dotnet run
```

### 2. Create a Basic Game Loop

Open `Program.cs` and replace its contents with:

```csharp
using System;

class Program
{
    static void Main()
    {
        bool gameRunning = true;

        while (gameRunning)
        {
            Console.WriteLine("Game is running");

            Console.WriteLine("Press Q to quit");

            string? input = Console.ReadLine();

            if (input?.ToLower() == "q")
            {
                gameRunning = false;
            }
        }

        Console.WriteLine("Game stopped");
    }
}
```

### Line-by-Line Explanation

`using System;`

Imports the System namespace, which provides features such as Console.

`class Program`

Defines a class called Program.

`static void Main()`

Defines the application's entry point.

`bool gameRunning = true;`

Creates a Boolean variable that controls whether the loop continues.

`while (gameRunning)`

Repeats the code while the variable remains true.

`Console.WriteLine("Game is running");`

Displays a message showing that the game loop is active.

`Console.WriteLine("Press Q to quit");`

Instructs the user how to stop the program.

`string? input = Console.ReadLine();`

Reads a line entered by the user. The question mark indicates that the returned string may be null.

`if (input?.ToLower() == "q")`

Checks whether the input is Q, ignoring letter case. The null-conditional operator prevents an error if input is null.

`gameRunning = false;`

Stops the loop when the user enters Q.

`Console.WriteLine("Game stopped");`

Displays a message after the loop finishes.

### Expected Output

```text
Game is running
Press Q to quit
```

If you enter:

```text
q
```

The program displays:

```text
Game stopped
```

This demonstrates how a game loop continues until a termination condition is reached.

### 3. Add Player Input and Game Logic

Now we will simulate a player moving inside a simple game.

Replace the contents of `Program.cs` with:

```csharp
using System;

class Program
{
    static void Main()
    {
        int playerPosition = 0;
        bool gameRunning = true;

        while (gameRunning)
        {
            Console.WriteLine("Player Position: " + playerPosition);
            Console.WriteLine("Enter A to move left, D to move right, Q to quit");

            string? input = Console.ReadLine();

            switch (input?.ToLower())
            {
                case "a":
                    playerPosition--;
                    break;

                case "d":
                    playerPosition++;
                    break;

                case "q":
                    gameRunning = false;
                    break;

                default:
                    Console.WriteLine("Invalid input");
                    break;
            }
        }

        Console.WriteLine("Game ended");
    }
}
```

### Explanation

`int playerPosition = 0;`

Creates a variable representing the player's position. The player begins at position zero.

`bool gameRunning = true;`

Controls the game loop.

`while (gameRunning)`

Keeps the game running.

`Console.WriteLine("Player Position: " + playerPosition);`

Displays the player's current position.

`Console.ReadLine()`

Receives the player's input.

`switch (input?.ToLower())`

Checks the entered command and selects the matching case.

`case "a":`

Runs when the player enters A.

`playerPosition--;`

Decreases the position by one, representing movement to the left.

`case "d":`

Runs when the player enters D.

`playerPosition++;`

Increases the position by one, representing movement to the right.

`case "q":`

Stops the game when Q is entered.

`default:`

Handles commands that are not recognized.

### Expected Behavior

Suppose the player enters:

```text
d
d
a
```

The position changes as follows:

| Action | Position |
|---|---:|
| Starting position | 0 |
| D | 1 |
| D | 2 |
| A | 1 |

This demonstrates the relationship between player input and game state.

### 4. Add a Health System

Now let's introduce another game system.

Create a health variable and a damage method:

```csharp
using System;

class Program
{
    static void Main()
    {
        int playerHealth = 100;

        TakeDamage(ref playerHealth, 30);

        Console.WriteLine("Remaining Health: " + playerHealth);
    }

    static void TakeDamage(ref int health, int damage)
    {
        health -= damage;

        if (health < 0)
        {
            health = 0;
        }
    }
}
```

### Explanation

`int playerHealth = 100;`

The player starts with 100 health points.

`TakeDamage(ref playerHealth, 30);`

Calls the damage method and passes the player's health by reference.

`static void TakeDamage(ref int health, int damage)`

Defines a method that receives the health variable and damage amount.

`health -= damage;`

Subtracts the damage from the health.

`if (health < 0)`

Checks whether the health has fallen below zero.

`health = 0;`

Prevents health from becoming negative.

### Expected Output

```text
Remaining Health: 70
```

This is an example of game logic modifying the game's state.

### 5. Understand How Rendering Uses Game State

Our console application does not have a graphics renderer. However, we can simulate how rendering reads the current game state.

Consider:

```csharp
int playerPosition = 5;

void RenderPlayer()
{
    Console.WriteLine("Rendering player at position: " + playerPosition);
}
```

The `RenderPlayer()` method reads the player's current position and displays it.

If the position changes:

```csharp
playerPosition = 10;

RenderPlayer();
```

The output becomes:

```text
Rendering player at position: 10
```

In a real game engine, the rendering system uses the current positions, rotations, materials, lighting, and camera information to produce the visible frame.

### 6. Practical Exercise: Build a Mini Game Pipeline

Create a console-based mini game with these requirements:

**Player system**
- Start with 100 health.
- Start at position zero.
- Allow movement left and right.

**Input system**
- A moves left.
- D moves right.
- H simulates receiving damage.
- Q exits the game.

**Game logic**
- Reduce health by 10 whenever H is entered.
- Do not allow health to go below zero.
- End the game when health reaches zero.

**Output system**
Display:
- Current player position.
- Remaining health.
- Whether the game is running or finished.

### 7. Further Practical Challenge

Imagine you are building a simple 3D racing game.

Describe how you would use the following systems:

1. Input processing.
2. Game logic.
3. Physics.
4. Collision detection.
5. Animation.
6. Rendering.
7. Audio.

For example, explain what happens when the player presses the accelerator and crashes into another vehicle.

### Part 3 Summary

You have practically explored:

- Creating a C# console project.
- Implementing a basic game loop.
- Processing player input.
- Updating player position.
- Managing player health.
- Understanding how rendering uses game state.

**Progress: Part 3 of 4**

---

## PART 4 OF 4: KAI ASSESSMENT

### Assessment Instructions

Answer the following questions to demonstrate your understanding of the game engine pipeline.

The assessment covers conceptual knowledge, system identification, programming logic, and practical application.

### SECTION A: MULTIPLE-CHOICE QUESTIONS

**1. What is a game engine?**

A. A computer operating system.

B. A software framework used to develop and run games.

C. A database management system.

D. A programming language.

**2. Which system receives keyboard and controller actions?**

A. Rendering system.

B. Audio system.

C. Input processing system.

D. Animation system.

**3. What is the primary purpose of the game loop?**

A. To install the game.

B. To repeatedly process game operations while the game runs.

C. To store game files permanently.

D. To create 3D models.

**4. What does FPS represent?**

A. Frames Per Second.

B. Files Per System.

C. Functions Per Script.

D. Frame Processing Software.

**5. Which system calculates gravity and physical interactions?**

A. Audio system.

B. Rendering system.

C. Physics system.

D. Asset loading system.

**6. What is the purpose of a texture?**

A. To store player scores.

B. To give a model surface appearance.

C. To control the game loop.

D. To process keyboard input.

**7. Which system generates the images displayed on the screen?**

A. Rendering.

B. Input.

C. Audio.

D. Game logic.

**8. What is collision detection used for?**

A. Detecting when game objects touch or overlap.

B. Loading music.

C. Creating textures.

D. Increasing FPS automatically.

### SECTION B: SHORT-ANSWER QUESTIONS

**9.** Explain the meaning of a game engine pipeline.

**10.** Differentiate between asset loading and game initialization.

**11.** Explain the difference between game logic and physics simulation.

**12.** Identify five types of game assets and explain the purpose of each.

**13.** Why is the game loop important in interactive games?

**14.** Explain the difference between rendering and animation.

### SECTION C: CODE ANALYSIS

Study this C# code:

```csharp
int health = 100;

void DamagePlayer()
{
    health -= 20;

    if (health <= 0)
    {
        Console.WriteLine("Game Over");
    }
}
```

**15.** What is the starting value of health?

**16.** What happens when `DamagePlayer()` is called?

**17.** What condition causes the game to display "Game Over"?

**18.** If the method is called three times, what will the remaining health be?

### SECTION D: DEBUGGING AND APPLICATION

**19.** A character receives keyboard input but does not move. Identify two possible areas of the pipeline that should be investigated.

**20.** A player walks through a wall. Which game engine system is most likely responsible?

**21.** A character moves correctly, but the animation does not play. Which system should be investigated?

**22.** A game has extremely low FPS. Explain two possible causes.

### SECTION E: PRACTICAL PROJECT

**Project: Mini Game Pipeline Simulator**

Create a simple console-based game demonstrating the following:

1. Initialize a player with 100 health.
2. Set the player's starting position to zero.
3. Create a repeating game loop.
4. Receive player commands.
5. Allow movement left and right.
6. Allow the player to receive damage.
7. Display the player's health and position.
8. Stop the game when the player exits or health reaches zero.

Your code must be organized into reusable methods.

Explain how each method represents a part of the game pipeline.

### SUBMISSION TO KAI

Submit your answers and project code to Kai for assessment.

Kai should evaluate:

- Understanding of game engine architecture.
- Knowledge of the pipeline systems.
- Ability to explain how systems communicate.
- Correctness of the C# implementation.
- Ability to identify and explain technical problems.

### COMPLETION CHECKLIST

By the end of this lesson, you should be able to:

- [ ] Explain what a game engine is.
- [ ] Describe the core game engine pipeline.
- [ ] Identify common game assets.
- [ ] Explain asset loading and initialization.
- [ ] Describe the game loop.
- [ ] Explain input processing.
- [ ] Understand game logic and physics.
- [ ] Describe collision detection.
- [ ] Explain animation and rendering.
- [ ] Understand the role of audio.
- [ ] Build a simple game loop using C#.
- [ ] Explain how different game systems work together.

# LESSON COMPLETE

**Part 4 of 4 — Lesson Complete**

Next lesson: **Game Engine: Game Objects, Scenes and Components**