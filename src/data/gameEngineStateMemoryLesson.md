# GAME ENGINE: STATE AND MEMORY

# PART 1 OF 4: UNDERSTANDING GAME STATE

## 1. Introduction to Game State

A game state represents the current condition of a game or one of its components at a particular moment.

It describes what is happening in the game and the information needed to determine its behavior.

For example, imagine a racing game.

At a particular moment, the game might have the following information:

```text
Player Position: (10, 5, 20)
Player Health: 100
Player Score: 450
Current Level: 3
Race Time: 02:35
Game Status: Running
```

Together, these values describe part of the current game state.

If the player collects a reward, the score changes.

If the player crashes, health or vehicle condition may change.

If the player finishes the race, the game status changes.

The game engine continuously updates relevant state information as gameplay progresses.

### Why is game state important?

Game state allows a game to:

- Remember the player's current health.
- Track scores and achievements.
- Know which level is active.
- Determine whether a game is running or paused.
- Track enemy positions.
- Remember collected items.
- Control animations and interactions.
- Save and restore progress.

Without state management, the game would have difficulty maintaining consistent behavior.

---

## 2. Types of Game State

Game state can be divided into different categories depending on what information is being tracked.

### A. Global Game State

Global game state contains information about the overall game.

Examples:

- Current level.
- Game status.
- Total score.
- Remaining time.
- Current difficulty.
- Number of lives.

Example:

```csharp
int currentLevel = 3;
int totalScore = 500;
int remainingLives = 2;
bool isGameRunning = true;
```

These variables represent information about the overall game.

### B. Player State

Player state stores information about the player character.

Examples:

- Health.
- Position.
- Movement speed.
- Inventory.
- Current weapon.
- Experience points.
- Current animation state.

Example:

```csharp
int playerHealth = 100;
int playerLevel = 5;
int ammunition = 30;
bool isJumping = false;
```

The game uses this information to determine what the player can do.

### C. Enemy State

Enemy state stores information about non-player characters.

Examples:

- Enemy health.
- Current behavior.
- Position.
- Attack strength.
- Detection status.
- Patrol destination.

Example:

```csharp
int enemyHealth = 60;
bool playerDetected = true;
string enemyBehavior = "Chasing";
```

The game uses this information to control enemy behavior.

### D. Object State

Game objects also have states.

For example, a door may be:

- Open.
- Closed.
- Locked.
- Unlocked.

A treasure chest may be:

- Unopened.
- Opened.
- Empty.

A weapon may be:

- Loaded.
- Empty.
- Reloading.

Example:

```csharp
bool doorOpen = false;
bool doorLocked = true;
```

The game uses these values to determine whether the player can interact with the door.

### E. UI State

UI means User Interface.

UI state represents the condition of interface elements.

Examples:

- Main menu visible.
- Inventory open.
- Pause menu active.
- Health bar updated.
- Settings screen displayed.

Example:

```csharp
bool inventoryOpen = false;
bool pauseMenuVisible = true;
```

The interface changes according to the game's current state.

---

## 3. State Changes During Gameplay

Game state is not permanent.

It changes whenever an event or game operation modifies stored information.

Consider a player with 100 health.

Initially:

```text
Health = 100
```

An enemy attacks and causes 20 damage.

The new state becomes:

```text
Health = 80
```

The player collects a health item that restores 15 points.

The new state becomes:

```text
Health = 95
```

This process is called a state transition: the game moves from one condition to another.

### State transition example

```text
INITIAL STATE
Health = 100
    |
    v
ENEMY ATTACKS
Damage = 20
    |
    v
NEW STATE
Health = 80
    |
    v
PLAYER COLLECTS HEALTH ITEM
Recovery = 15
    |
    v
NEW STATE
Health = 95
```

### C# example

```csharp
int health = 100;

Console.WriteLine($"Initial Health: {health}");

health -= 20;

Console.WriteLine($"After Attack: {health}");

health += 15;

Console.WriteLine($"After Healing: {health}");
```

Explanation:

```csharp
int health = 100;
```

Creates the player's health variable.

```csharp
health -= 20;
```

Subtracts 20 from the current health.

```csharp
health += 15;
```

Adds 15 to the current health.

Expected output:

```text
Initial Health: 100
After Attack: 80
After Healing: 95
```

This example demonstrates how game state changes when actions occur.

**Important:** A real game should normally enforce health limits so that health cannot fall below zero or exceed its maximum.

---

## 4. Game States and State Machines

Many games use specific states to control the overall gameplay experience.

For example:

```text
Main Menu
    |
    v
Loading
    |
    v
Playing
    |
    +------> Paused
    |           |
    |           v
    |         Playing
    |
    v
Game Over
    |
    v
Results
```

The game may have the following states:

| State | Meaning |
|---|---|
| Main Menu | Player is viewing the main menu |
| Loading | Game resources are being prepared |
| Playing | Active gameplay |
| Paused | Gameplay is temporarily stopped |
| Game Over | Player has lost |
| Results | Final score or performance is displayed |

### Implementing game states using an enum

```csharp
enum GameState
{
    MainMenu,
    Loading,
    Playing,
    Paused,
    GameOver,
    Results
}
```

Explanation:

- `enum` defines a collection of named values.
- `GameState` is the name of the enumeration.
- Each entry represents a possible game state.

Now create a variable:

```csharp
GameState currentState = GameState.MainMenu;
```

This means the game currently starts at the main menu.

We can use a switch statement:

```csharp
switch (currentState)
{
    case GameState.MainMenu:
        Console.WriteLine("Displaying Main Menu");
        break;

    case GameState.Loading:
        Console.WriteLine("Loading Game...");
        break;

    case GameState.Playing:
        Console.WriteLine("Game is Running");
        break;

    case GameState.Paused:
        Console.WriteLine("Game is Paused");
        break;

    case GameState.GameOver:
        Console.WriteLine("Game Over");
        break;

    case GameState.Results:
        Console.WriteLine("Displaying Results");
        break;
}
```

The switch statement checks the current game state and executes the appropriate behavior.

### Why use states instead of many Boolean variables?

Imagine managing a game using these variables:

```csharp
bool isPlaying = true;
bool isPaused = true;
bool isGameOver = false;
bool isLoading = true;
```

This creates a problem.

Several variables may accidentally be true at the same time.

For example, the game could incorrectly appear to be playing, paused, and loading simultaneously.

An enumeration helps represent mutually exclusive states more clearly.

However, some game systems legitimately use independent Boolean values. For example, a game may be playing while an inventory window is open. The correct representation depends on the relationship between the conditions.

---

## 5. Game State and the Game Loop

The game loop repeatedly updates the game while it is running.

During each update, the engine reads input, processes game logic, updates relevant state, and prepares the next frame.

A simplified process:

```text
        START GAME
             |
             v
      READ PLAYER INPUT
             |
             v
       UPDATE GAME STATE
             |
             v
       UPDATE PHYSICS
             |
             v
       UPDATE ANIMATIONS
             |
             v
       RENDER THE FRAME
             |
             v
       REPEAT THE LOOP
```

For example:

1. The player presses the movement key.
2. The input system detects the action.
3. The game updates the player's movement state.
4. The player's position changes.
5. The engine renders the updated position.

This cycle repeats while the game runs.

### Important distinction: Update and rendering

The game state and the rendered image are related, but they are not the same thing.

Game state contains the information about what is happening.

Rendering produces the visual representation shown on the screen.

For example:

```text
Game State:
Player Position = (10, 0, 5)

Rendered Result:
Player character appears at that location.
```

The renderer uses state information to produce the image.

---

## 6. Temporary and Persistent Game State

Not all game information needs to exist for the same amount of time.

Some information is temporary.

Other information must survive after the game closes.

### A. Temporary state

Temporary state exists during a particular gameplay session or operation.

Examples:

- Current animation frame.
- Temporary damage effect.
- Current enemy target.
- Mouse movement.
- Current button press.
- Temporary explosion effect.

This information may disappear when the game scene changes or the application closes.

### B. Persistent state

Persistent state is information that should remain available after a game session ends.

Examples:

- Saved player level.
- Unlocked achievements.
- Game settings.
- Completed missions.
- Purchased items.
- Saved campaign progress.

This information is normally stored using files, databases, cloud storage, or platform-specific save systems.

### Comparison

| Temporary state | Persistent state |
|---|---|
| Current movement direction | Unlocked levels |
| Temporary damage effect | Player achievements |
| Current enemy target | Saved player progress |
| Current animation frame | Game settings |
| Temporary interaction | Completed missions |

### Part 1 summary

You have learned:

- What game state means.
- Different types of game state.
- How state changes during gameplay.
- How state machines organize game behavior.
- How game state interacts with the game loop.
- The difference between temporary and persistent information.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: MEMORY IN GAME ENGINES

## 7. What Is Memory?

Memory is the storage area a computer uses to hold information while programs execute.

A game engine needs memory to store information about:

- Game objects.
- Player data.
- Enemy data.
- Textures.
- Audio.
- Animations.
- Physics calculations.
- Scripts.
- Game scenes.

When a game runs, it loads and accesses information in memory so that the processor can work with it.

For example, when a player enters a new level, the engine may load:

- The level geometry.
- Textures.
- Sound effects.
- Characters.
- Lighting information.
- Environmental objects.

These resources consume memory.

If memory is used inefficiently, the game may experience performance problems.

---

## 8. Types of Computer Memory Relevant to Games

### A. RAM

RAM stands for Random Access Memory.

It provides temporary working storage for programs.

When a game runs, many of its active resources and data structures are stored in RAM.

Examples include:

- Current player information.
- Active enemy objects.
- Loaded scene data.
- Temporary calculations.
- Game logic data.

RAM is generally volatile, meaning its contents are not preserved when power is removed.

### B. VRAM

VRAM is video memory associated with a graphics processing unit.

It is used to store graphics-related data.

Examples include:

- Textures.
- Frame buffers.
- Rendering resources.
- Some geometry and shader-related data.

A game with very high-resolution textures may require substantial graphics memory.

If available VRAM is insufficient, the game may experience performance problems, depending on the hardware and engine.

### C. Storage

Storage refers to long-term data storage devices such as:

- SSDs.
- HDDs.
- External drives.

Game files are stored here.

Examples include:

- Executable files.
- Textures.
- Audio files.
- Level files.
- Saved progress.
- Configuration files.

When a game needs a resource, the engine may load it from storage into RAM or graphics memory.

### Comparison

| Memory/storage | Main purpose | Example |
|---|---|---|
| RAM | Active program data | Player and enemy information |
| VRAM | Graphics-related resources | Textures and frame buffers |
| SSD/HDD | Long-term storage | Game files and saved progress |

---

## 9. How Game Engines Use Memory

Consider a game containing a player, enemies, and an environment.

The engine needs to represent each active object.

For example:

```text
GAME MEMORY

Player
    Position
    Health
    Speed
    Inventory

Enemy 1
    Position
    Health
    Behavior

Enemy 2
    Position
    Health
    Behavior

Environment
    Terrain
    Textures
    Lighting

Audio
    Music
    Sound Effects
```

The game accesses this information while processing gameplay.

### Object creation

When a game creates an object, it needs memory to represent that object and its associated data.

For example:

```csharp
Player player = new Player();
```

The `new` operator creates a new instance of the `Player` class.

The variable `player` stores a reference to that object.

The object has memory requirements for its fields and other runtime information.

### Object modification

The game changes stored information as gameplay progresses.

For example:

```csharp
player.Health -= 20;
```

This modifies the health field of the existing player object.

### Object destruction and cleanup

When an object is no longer needed, the game should release the resources associated with it.

In managed environments such as C#, the garbage collector can reclaim memory occupied by objects that are no longer reachable.

However, resources such as textures, audio clips, file handles, and other native resources may require explicit cleanup or unloading through engine-specific APIs.

---

## 10. Stack and Heap Memory in C#

C# programs use managed memory and runtime mechanisms to manage objects.

Two important memory concepts are the stack and the managed heap.

### A. Stack

The stack stores method execution information, including local variables and other data required for method calls.

Each method call creates an execution frame.

When a method finishes, its frame is removed from the stack.

Example:

```csharp
void CalculateScore()
{
    int score = 100;
}
```

The local variable `score` belongs to the method's execution context.

### B. Heap

The managed heap stores objects allocated by managed code.

Example:

```csharp
Player player = new Player();
```

The `new Player()` expression creates a Player object.

The local variable `player` holds a reference to the object.

The object itself is stored in managed memory.

### Important distinction

Do not assume that every value type is always stored on the stack and every reference type is always stored on the heap.

Actual storage depends on context.

For example:

- A local value-type variable may be stored in a method's stack frame.
- A value-type field inside a reference-type object is stored as part of that object.
- A reference-type local variable holds a reference to an object, but the actual object is stored separately in managed memory.

### Example

```csharp
class Player
{
    public int Health = 100;
}

void StartGame()
{
    Player player = new Player();

    Console.WriteLine(player.Health);
}
```

Explanation:

```csharp
class Player
```

Defines a reference type.

```csharp
public int Health = 100;
```

Defines a field belonging to each Player object.

```csharp
Player player = new Player();
```

Creates a Player object and stores its reference in the local variable `player`.

```csharp
Console.WriteLine(player.Health);
```

Uses the reference to access the object's health.

Expected output:

```text
100
```

---

## 11. Garbage Collection

Garbage collection is an automatic memory-management process used by the .NET runtime.

It identifies managed objects that are no longer reachable and reclaims their memory.

### Why is garbage collection needed?

Imagine a game that creates hundreds of temporary objects during gameplay.

Some objects may no longer be needed after an effect finishes.

If their memory is never reclaimed, memory usage can continue growing.

This can eventually affect performance or cause memory exhaustion.

The garbage collector helps manage this problem.

### Example

```csharp
class Explosion
{
    public void Play()
    {
        Console.WriteLine("Explosion effect playing.");
    }
}
```

Creating an object:

```csharp
Explosion effect = new Explosion();

effect.Play();
```

The variable `effect` references the Explosion object.

When the object is no longer reachable through any active reference, it becomes eligible for garbage collection.

### Important: Eligible does not mean immediately collected

Garbage collection does not necessarily happen immediately when an object becomes unreachable.

The runtime decides when to perform collection.

Developers generally should not manually force garbage collection during ordinary gameplay.

### Unity and garbage collection

Unity uses managed memory for C# objects and has a garbage collector.

Frequent temporary allocations can produce garbage collection activity.

If collection causes a noticeable pause, the game may experience a frame-time spike.

For this reason, developers often try to reduce unnecessary allocations in frequently executed methods such as `Update()`.

---

## 12. Memory Leaks and Resource Management

A memory leak occurs when memory or resources that are no longer needed remain allocated or retained unnecessarily.

In managed languages, an object may remain in memory if something still references it.

For example, a static collection might keep references to objects that should have been removed.

### Example of unnecessary object retention

```csharp
static List<Player> oldPlayers = new List<Player>();
```

Suppose the game adds every player object to this list.

Even when a player leaves the game, the list may still reference that object.

As long as the reference remains, the garbage collector cannot reclaim the object.

A better approach is to remove references when the objects are no longer needed:

```csharp
oldPlayers.Clear();
```

This removes the list's references to its elements.

It does not guarantee that every referenced object is immediately collected.

### Common causes of memory problems

- Keeping unnecessary references.
- Creating too many temporary objects.
- Loading large assets without unloading them.
- Forgetting to dispose of resources.
- Keeping unused event subscriptions.
- Storing large amounts of unnecessary data.

### Resource cleanup

Some resources require explicit cleanup.

For example:

```csharp
using System.IO;

using (FileStream file = File.OpenRead("save.dat"))
{
    Console.WriteLine($"File length: {file.Length}");
}
```

The `using` statement ensures that the file stream is disposed of when execution leaves the block, including when an exception occurs.

In Unity, developers also use engine-specific operations to release or unload assets when appropriate.

---

## 13. Memory Optimization in Game Development

Memory optimization means reducing unnecessary memory usage while preserving the required game functionality.

Several techniques are commonly used.

### A. Object Pooling

Object pooling reuses objects instead of repeatedly creating and destroying them.

For example, a shooting game may create hundreds of bullets.

Instead of creating a new bullet object for every shot, the game can maintain a collection of reusable bullets.

Simplified process:

```text
BULLET POOL
     |
     v
GET AVAILABLE BULLET
     |
     v
ACTIVATE BULLET
     |
     v
BULLET TRAVELS
     |
     v
BULLET EXPIRES
     |
     v
RETURN TO POOL
     |
     v
REUSE LATER
```

This reduces repeated object creation.

### B. Asset Loading and Unloading

Games should avoid loading every possible asset into memory at startup if it is not necessary.

Instead, resources can be loaded when needed and unloaded when they are no longer required.

For example, a game may load the resources for Level 1 and release them when moving to Level 2.

### C. Texture Optimization

Large textures consume substantial graphics memory.

Developers can use:

- Appropriate texture resolutions.
- Texture compression.
- Mipmaps.
- Texture atlases.
- Platform-specific texture formats.

### D. Efficient Data Structures

Choose suitable data structures for the task.

For example:

- Arrays for fixed-size collections.
- Lists for dynamically sized collections.
- Dictionaries for efficient key-based lookup.
- Queues for first-in-first-out processing.

### E. Avoid Unnecessary Allocations

Avoid creating unnecessary temporary objects inside methods that execute frequently.

For example, Unity's `Update()` may run many times per second.

Repeated allocations inside it can increase garbage collection pressure.

---

## 14. Understanding Memory Usage and Performance

Memory affects game performance in different ways.

| Problem | Possible effect |
|---|---|
| Excessive memory usage | High RAM or VRAM consumption |
| Frequent garbage collection | Frame-time spikes |
| Large textures | Increased graphics memory requirements |
| Repeated object creation | More allocation and cleanup work |
| Unloaded resources retained | Unnecessary memory consumption |

A game may have high memory usage without immediately running slowly, but excessive usage can eventually create performance and stability problems.

### Part 2 summary

You have learned:

- What computer memory is.
- The roles of RAM, VRAM, and storage.
- How game engines allocate and access memory.
- Stack and heap concepts in C#.
- How garbage collection works.
- What memory leaks are.
- How object pooling and resource management improve performance.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL GAME STATE AND MEMORY WITH C#

We will now implement systems that store, update, and preserve game information.

## 15. Setting Up the Practical Environment

Create a new C# console project:

```bash
dotnet new console -n GameStateMemory
```

Enter the project directory:

```bash
cd GameStateMemory
```

Open the `Program.cs` file.

We will create several small systems.

---

## 16. Practical Example 1: Creating a Player State System

We will create a player whose health, score, level, and position are stored in a C# class.

### Complete code

```csharp
class Player
{
    public string Name = "Hero";
    public int Health = 100;
    public int Score = 0;
    public int Level = 1;

    public void DisplayStatus()
    {
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Health: {Health}");
        Console.WriteLine($"Score: {Score}");
        Console.WriteLine($"Level: {Level}");
    }
}

Player player = new Player();

player.Score += 50;
player.Health -= 20;
player.Level = 2;

player.DisplayStatus();
```

### Line-by-line explanation

**Create the Player class:**

```csharp
class Player
```

Defines a class named `Player`.

A class is a blueprint used to create objects.

**Create the player information:**

```csharp
public string Name = "Hero";
```

Stores the player's name.

```csharp
public int Health = 100;
```

Stores the player's current health.

```csharp
public int Score = 0;
```

Stores the player's score.

```csharp
public int Level = 1;
```

Stores the player's current level.

These fields represent part of the player's state.

**Create a method:**

```csharp
public void DisplayStatus()
```

Defines a method responsible for displaying the player's information.

The statements inside it print each field.

**Create a player object:**

```csharp
Player player = new Player();
```

Creates an instance of the Player class.

The variable `player` stores a reference to that object.

**Modify the player's state:**

```csharp
player.Score += 50;
```

Adds 50 points to the score.

```csharp
player.Health -= 20;
```

Reduces health by 20.

```csharp
player.Level = 2;
```

Changes the player's level to 2.

**Display the state:**

```csharp
player.DisplayStatus();
```

Calls the method that displays the updated player information.

### Expected output

```text
Name: Hero
Health: 80
Score: 50
Level: 2
```

This example demonstrates how a class can organize related game state.

---

## 17. Practical Example 2: Managing Game States

We will create a system that allows a game to move between different states.

### Complete code

```csharp
enum GameState
{
    MainMenu,
    Playing,
    Paused,
    GameOver
}

GameState currentState = GameState.MainMenu;

Console.WriteLine($"Current State: {currentState}");

currentState = GameState.Playing;

Console.WriteLine($"Current State: {currentState}");

currentState = GameState.Paused;

Console.WriteLine($"Current State: {currentState}");

currentState = GameState.GameOver;

Console.WriteLine($"Current State: {currentState}");
```

### Explanation

```csharp
enum GameState
```

Creates an enumeration containing the possible game states.

```csharp
GameState currentState = GameState.MainMenu;
```

Creates a variable that stores the current state.

The game starts at the main menu.

```csharp
currentState = GameState.Playing;
```

Changes the game state to Playing.

```csharp
currentState = GameState.Paused;
```

Changes the state to Paused.

```csharp
currentState = GameState.GameOver;
```

Changes the state to GameOver.

Each assignment represents a state transition.

### Expected output

```text
Current State: MainMenu
Current State: Playing
Current State: Paused
Current State: GameOver
```

### Practical improvement

In a real game, developers should control which transitions are allowed.

For example, the game should not normally transition directly from MainMenu to GameOver without starting gameplay.

A transition-validation method can help enforce the rules.

---

## 18. Practical Example 3: Creating an Object Pool

We will create a simple bullet pool using C#.

The idea is to reuse bullet objects instead of repeatedly creating new ones.

### Complete code

```csharp
using System.Collections.Generic;

class Bullet
{
    public bool IsActive = false;

    public void Activate()
    {
        IsActive = true;
        Console.WriteLine("Bullet activated.");
    }

    public void Deactivate()
    {
        IsActive = false;
        Console.WriteLine("Bullet returned to pool.");
    }
}

List<Bullet> bulletPool = new();

for (int i = 0; i < 3; i++)
{
    bulletPool.Add(new Bullet());
}

Bullet? GetBullet()
{
    foreach (Bullet bullet in bulletPool)
    {
        if (!bullet.IsActive)
        {
            return bullet;
        }
    }

    return null;
}

Bullet? selectedBullet = GetBullet();

if (selectedBullet != null)
{
    selectedBullet.Activate();
    selectedBullet.Deactivate();
}
else
{
    Console.WriteLine("No available bullets.");
}
```

### Detailed explanation

**Import collections:**

```csharp
using System.Collections.Generic;
```

Provides access to collection types such as `List<T>`.

**Define the Bullet class:**

```csharp
class Bullet
```

Creates a class representing a bullet object.

```csharp
public bool IsActive = false;
```

Stores whether the bullet is currently being used.

Initially, it is inactive.

**Activate the bullet:**

```csharp
public void Activate()
{
    IsActive = true;
    Console.WriteLine("Bullet activated.");
}
```

Changes the bullet's state to active and displays a message.

**Deactivate the bullet:**

```csharp
public void Deactivate()
{
    IsActive = false;
    Console.WriteLine("Bullet returned to pool.");
}
```

Changes the bullet's state back to inactive.

It can now be reused.

**Create the pool:**

```csharp
List<Bullet> bulletPool = new();
```

Creates a list that stores reusable Bullet objects.

**Create three bullets:**

```csharp
for (int i = 0; i < 3; i++)
{
    bulletPool.Add(new Bullet());
}
```

The loop executes three times.

Each iteration creates a new Bullet object and adds it to the list.

This creates the pool at initialization.

**Find an available bullet:**

```csharp
Bullet? GetBullet()
```

Defines a method that returns a Bullet reference or `null` if no bullet is available.

```csharp
foreach (Bullet bullet in bulletPool)
```

Examines every bullet in the pool.

```csharp
if (!bullet.IsActive)
```

Checks whether the bullet is inactive.

The `!` operator means NOT.

```csharp
return bullet;
```

Returns the first available bullet.

```csharp
return null;
```

Returns null if every bullet is already active.

**Use the bullet:**

```csharp
Bullet? selectedBullet = GetBullet();
```

Requests an available bullet.

```csharp
if (selectedBullet != null)
```

Checks whether a bullet was found.

If one exists, the program activates and deactivates it.

### Expected output

```text
Bullet activated.
Bullet returned to pool.
```

### Why is pooling useful?

In a real shooting game, bullets may be created and destroyed frequently.

Pooling allows the engine to reuse existing objects.

This can reduce repeated allocations and improve performance, especially when many objects are created frequently.

**Important:** This simplified example does not implement bullet positions, movement, collision, or automatic pool expansion. It demonstrates the reuse principle.

---

## 19. Practical Example 4: Saving and Loading Game Progress

A game should often remember progress after the player closes it.

We will create a simple save system using JSON.

JSON is a common format for storing structured information.

### Step 1: Create a PlayerData class

```csharp
class PlayerData
{
    public string Name { get; set; } = "Hero";
    public int Level { get; set; } = 1;
    public int Score { get; set; } = 0;
    public int Health { get; set; } = 100;
}
```

This class defines the information we want to save.

Properties allow the program to read and update the player's data.

### Step 2: Write the save and load program

```csharp
using System;
using System.IO;
using System.Text.Json;

class PlayerData
{
    public string Name { get; set; } = "Hero";
    public int Level { get; set; } = 1;
    public int Score { get; set; } = 0;
    public int Health { get; set; } = 100;
}

string savePath = "player-save.json";

PlayerData player = new PlayerData();

player.Name = "Alex";
player.Level = 4;
player.Score = 850;
player.Health = 75;

string json = JsonSerializer.Serialize(
    player,
    new JsonSerializerOptions { WriteIndented = true }
);

File.WriteAllText(savePath, json);

Console.WriteLine("Game progress saved.");

string savedJson = File.ReadAllText(savePath);

PlayerData? loadedPlayer =
    JsonSerializer.Deserialize<PlayerData>(savedJson);

if (loadedPlayer != null)
{
    Console.WriteLine($"Name: {loadedPlayer.Name}");
    Console.WriteLine($"Level: {loadedPlayer.Level}");
    Console.WriteLine($"Score: {loadedPlayer.Score}");
    Console.WriteLine($"Health: {loadedPlayer.Health}");
}
```

### Detailed explanation

**Import required namespaces:**

```csharp
using System;
using System.IO;
using System.Text.Json;
```

- `System` provides common C# functionality.
- `System.IO` provides file operations.
- `System.Text.Json` provides JSON serialization and deserialization.

**Create the save location:**

```csharp
string savePath = "player-save.json";
```

Defines the file where the save data will be stored.

This relative path refers to the application's working directory.

**Create player data:**

```csharp
PlayerData player = new PlayerData();
```

Creates a player data object.

**Modify the data:**

```csharp
player.Name = "Alex";
player.Level = 4;
player.Score = 850;
player.Health = 75;
```

Updates the information that should be saved.

**Convert the object into JSON:**

```csharp
string json = JsonSerializer.Serialize(
    player,
    new JsonSerializerOptions { WriteIndented = true }
);
```

Serialization converts the C# object into a JSON string.

`WriteIndented = true` makes the JSON easier to read.

The resulting JSON looks similar to:

```json
{
  "Name": "Alex",
  "Level": 4,
  "Score": 850,
  "Health": 75
}
```

**Write the data to a file:**

```csharp
File.WriteAllText(savePath, json);
```

Creates or replaces the save file and writes the JSON data.

**Read the saved file:**

```csharp
string savedJson = File.ReadAllText(savePath);
```

Reads the file contents into a string.

**Deserialize the JSON:**

```csharp
PlayerData? loadedPlayer =
    JsonSerializer.Deserialize<PlayerData>(savedJson);
```

Converts the JSON string back into a PlayerData object.

**Check the loaded object:**

```csharp
if (loadedPlayer != null)
```

Ensures that the deserialization returned an object before accessing its properties.

The program then displays the recovered player information.

### Expected output

```text
Game progress saved.
Name: Alex
Level: 4
Score: 850
Health: 75
```

### What have we achieved?

We have demonstrated the complete save-and-load process:

```text
PLAYER OBJECT
     |
     v
SERIALIZATION
     |
     v
JSON DATA
     |
     v
SAVE FILE
     |
     v
READ FILE
     |
     v
DESERIALIZATION
     |
     v
RESTORED PLAYER OBJECT
```

### Important production considerations

A real game save system should also consider:

- Missing or corrupted save files.
- File access errors.
- Save versioning.
- Data validation.
- Backup saves.
- Secure storage of important information.
- Platform-specific save locations.

A local JSON file is useful for learning, but it should not be trusted as a secure authority for valuable online game progress. Players may be able to modify local files.

---

## 20. Practical Example 5: Building a Game Session Manager

Now we will combine player state, game state, and decisions.

### Complete code

```csharp
class GameSession
{
    public int PlayerHealth { get; private set; } = 100;
    public int PlayerScore { get; private set; } = 0;

    public bool IsGameOver { get; private set; } = false;

    public void TakeDamage(int damage)
    {
        if (IsGameOver || damage < 0)
        {
            return;
        }

        PlayerHealth -= damage;

        if (PlayerHealth < 0)
        {
            PlayerHealth = 0;
        }

        if (PlayerHealth == 0)
        {
            IsGameOver = true;
        }
    }

    public void AddScore(int points)
    {
        if (!IsGameOver && points > 0)
        {
            PlayerScore += points;
        }
    }

    public void DisplayStatus()
    {
        Console.WriteLine($"Health: {PlayerHealth}");
        Console.WriteLine($"Score: {PlayerScore}");
        Console.WriteLine($"Game Over: {IsGameOver}");
    }
}

GameSession game = new GameSession();

game.AddScore(100);
game.TakeDamage(30);
game.DisplayStatus();
```

### Understanding the code

```csharp
class GameSession
```

Defines a class representing one game session.

```csharp
public int PlayerHealth { get; private set; } = 100;
```

Creates a property for player health.

The public getter allows other code to read the health.

The private setter prevents external code from directly changing it.

The class controls health updates through its own methods.

```csharp
public int PlayerScore { get; private set; } = 0;
```

Stores the score.

```csharp
public bool IsGameOver { get; private set; } = false;
```

Tracks whether the session has ended.

### The damage method

```csharp
public void TakeDamage(int damage)
```

Defines a method that accepts incoming damage.

```csharp
if (IsGameOver || damage < 0)
{
    return;
}
```

Stops the operation if the game is already over or the damage value is invalid.

```csharp
PlayerHealth -= damage;
```

Subtracts the damage.

```csharp
if (PlayerHealth < 0)
{
    PlayerHealth = 0;
}
```

Prevents negative health.

```csharp
if (PlayerHealth == 0)
{
    IsGameOver = true;
}
```

Ends the game session when health reaches zero.

### The score method

```csharp
public void AddScore(int points)
```

Defines a method for increasing the score.

```csharp
if (!IsGameOver && points > 0)
```

Allows points to be added only when the game is active and the points value is positive.

```csharp
PlayerScore += points;
```

Updates the player's score.

### Displaying the state

```csharp
game.DisplayStatus();
```

Displays the current information.

Expected output:

```text
Health: 70
Score: 100
Game Over: False
```

This design is more controlled than allowing every part of the game to modify player health directly.

---

## 21. Practical Exercises

### Exercise 1: Player State

Create a C# class called `Player`.

It should store:

- Name.
- Health.
- Score.
- Level.
- Current weapon.

Create an object and modify its information during gameplay.

### Exercise 2: Game State Manager

Create an enumeration containing:

- MainMenu.
- Playing.
- Paused.
- GameOver.

Write a program that changes between these states and displays the current state.

### Exercise 3: Object Pooling

Create a pool containing five reusable enemy objects.

Your program should:

- Create five objects at initialization.
- Find an inactive object.
- Activate it.
- Deactivate it.
- Reuse it later.

### Exercise 4: Save and Load

Create a save system that stores:

- Player name.
- Level.
- Score.
- Health.

Save the data to a JSON file and load it again.

### Exercise 5: Memory Awareness

Explain what could happen if a game creates thousands of temporary objects every frame.

Suggest two techniques that could reduce the problem.

### Part 3 summary

You have now implemented:

- A player state system.
- A game state manager.
- A simple object pool.
- A JSON save-and-load system.
- A game session manager.

You have also seen how C# classes, properties, collections, and files can be used to manage game information.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## 22. Assessment Instructions

This assessment evaluates your understanding of game state, memory, object management, and save systems.

Answer each question carefully.

For programming questions, provide complete code and explain your implementation.

## Section A: Multiple-Choice Questions

**1. What does game state represent?**

A. Only the game's graphics.

B. The current condition and information of the game.

C. Only the sound system.

D. The computer's operating system.

**2. Which of the following is an example of persistent game state?**

A. Current mouse movement.

B. A temporary explosion effect.

C. An unlocked achievement.

D. A temporary animation frame.

**3. What is the primary role of RAM?**

A. Permanent storage of game files.

B. Temporary working storage for active programs.

C. Rendering images directly to the screen.

D. Controlling internet connectivity.

**4. What is VRAM commonly used for?**

A. Graphics-related resources.

B. Saving player passwords.

C. Storing C# source files permanently.

D. Managing keyboard input.

**5. What does the `new` keyword do when creating a reference-type object in C#?**

A. Deletes an object.

B. Creates a new instance.

C. Saves the object to a file.

D. Ends the application.

**6. What is garbage collection?**

A. A method for deleting game levels.

B. Automatic reclamation of memory occupied by unreachable managed objects.

C. A graphics-rendering technique.

D. A way of increasing player health.

**7. What is object pooling?**

A. Reusing objects instead of repeatedly creating new ones.

B. Deleting every game object.

C. Increasing the size of textures.

D. Saving every object to a database.

**8. What does serialization do?**

A. Converts structured objects into a format suitable for storage or transmission.

B. Deletes the game state.

C. Changes the player's position.

D. Renders a scene.

**9. Which C# class is commonly used to serialize objects into JSON using the built-in JSON library?**

A. `JsonSerializer`

B. `GameObject`

C. `Console`

D. `Random`

**10. Why should developers avoid unnecessary allocations in frequently executed game methods?**

A. They prevent the game from loading.

B. They can increase memory pressure and garbage collection activity.

C. They disable player input.

D. They remove textures automatically.

## Section B: Short-Answer Questions

**11.** Explain the meaning of game state and give five examples.

**12.** Explain the difference between global game state, player state, enemy state, and UI state.

**13.** What is a state transition? Give an example involving a player character.

**14.** Explain the difference between temporary and persistent game information.

**15.** Describe the roles of RAM, VRAM, and storage in a game.

**16.** Explain the difference between stack and heap memory in C#.

**17.** What makes an object eligible for garbage collection?

**18.** Explain what a memory leak is and give two possible causes in game development.

**19.** Explain how object pooling can improve game performance.

**20.** Describe the difference between serialization and deserialization.

## Section C: Practical Programming

**21. Player state system**

Create a C# class called `Player` that stores:

- Player name.
- Health.
- Score.
- Level.

Add methods that allow the player to:

- Receive damage.
- Recover health.
- Add score.
- Display current information.

Ensure health cannot fall below zero or exceed its maximum.

**22. Game state manager**

Create an enumeration containing:

- MainMenu.
- Loading.
- Playing.
- Paused.
- GameOver.

Write a program that changes the current state and displays the corresponding message.

**23. Object pooling**

Create a simple object pool containing at least three reusable objects.

Your program should find an inactive object, activate it, deactivate it, and make it available for reuse.

**24. Save and load system**

Create a JSON save system that stores:

- Player name.
- Level.
- Score.
- Health.

Write the data to a file and load it back into a new object.

Explain how serialization and deserialization work.

## Section D: Debugging and Reasoning

**25. Find the error in this code:**

```csharp
int health = 100;

health -= 120;

if (health == 0)
{
    Console.WriteLine("Player is dead.");
}
else
{
    Console.WriteLine("Player is alive.");
}
```

The player receives 120 damage.

Explain why the death condition is not satisfied and correct the code.

**26. Consider this object management code:**

```csharp
List<Player> players = new();

while (true)
{
    players.Add(new Player());
}
```

Explain why this could cause a serious memory problem.

Suggest a better design for a game that needs to create and reuse many player-like objects.

**27. A game saves player progress only in a local JSON file. What risks should developers consider before relying on this file for important online game progress?**

**28. A game experiences short freezes every few seconds, even though its average frame rate looks good. Explain how frequent garbage collection could contribute to this problem and suggest possible improvements.**

---

## 23. Final Practical Project: Build a Game State and Save System

Create a small game session management system.

### Project objective

Build a system that can track a player's progress, manage gameplay states, and save information so that it can be restored later.

### Requirements

**1. Player information**

Your system must store:

- Player name.
- Health.
- Score.
- Level.
- Inventory.

**2. Game state**

Support:

- Main Menu.
- Playing.
- Paused.
- Game Over.

**3. State updates**

The player must be able to:

- Receive damage.
- Recover health.
- Earn points.
- Complete a level.
- Lose the game when health reaches zero.

**4. Saving**

Save the player's progress to a JSON file.

**5. Loading**

Load previously saved progress and restore the player's information.

**6. Validation**

Handle:

- Missing save files.
- Invalid data.
- Negative health.
- Invalid score updates.
- Corrupted save files.

**7. Memory management**

Explain how you would avoid unnecessary object creation and resource retention in a larger version of the game.

### Suggested project structure

```text
GameStateProject/
│
├── Program.cs
│
├── Models/
│   ├── PlayerData.cs
│   └── GameState.cs
│
├── Systems/
│   ├── GameManager.cs
│   ├── SaveManager.cs
│   └── PlayerManager.cs
│
└── Saves/
    └── player-save.json
```

### What to submit to Kai

- Complete C# source code.
- A sample JSON save file.
- Screenshots showing the game state changing.
- Evidence that saved progress can be loaded.
- Your answers to the assessment questions.
- A short explanation of your memory-management decisions.

### Evaluation criteria

| Area | What Kai evaluates |
|---|---|
| State management | Correct tracking of game conditions |
| C# programming | Correct use of classes, properties, and methods |
| Memory understanding | Correct explanation of memory concepts |
| Object management | Proper reuse and cleanup of objects |
| Saving and loading | Correct serialization and deserialization |
| Validation | Appropriate handling of invalid data |
| Project organization | Clear separation of responsibilities |

---

## 24. Lesson Completion Checklist

Before marking the lesson complete, confirm that you can:

- [ ] Define game state.
- [ ] Identify different types of game state.
- [ ] Explain state transitions.
- [ ] Understand game state machines.
- [ ] Distinguish temporary and persistent state.
- [ ] Explain the role of RAM.
- [ ] Explain the role of VRAM.
- [ ] Understand stack and heap memory.
- [ ] Explain garbage collection.
- [ ] Identify possible memory leaks.
- [ ] Explain object pooling.
- [ ] Understand memory optimization.
- [ ] Create player state using C# classes.
- [ ] Manage game states using enumerations.
- [ ] Save and load game information using JSON.
- [ ] Explain serialization and deserialization.
- [ ] Build a basic game state management system.

# LESSON COMPLETE

**Game Engine: State and Memory**

You have learned how game engines maintain information, track changes, manage objects, use memory, and preserve player progress.

Remember these three important ideas:

1. **State** tells the game what is currently happening.
2. **Memory** provides the working space needed to store and process game information.
3. **Persistence** allows important information to survive after the game closes.

Together, these concepts help developers build games that are consistent, efficient, and capable of remembering player progress.

**Progress: Part 4 of 4 — Lesson Complete**