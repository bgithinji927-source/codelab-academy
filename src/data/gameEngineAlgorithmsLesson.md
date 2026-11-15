# GAME ENGINE: ALGORITHMS AND DECISIONS

# PART 1 OF 4: UNDERSTANDING ALGORITHMS IN GAME DEVELOPMENT

## 1. Introduction to Algorithms

An algorithm is a sequence of well-defined instructions used to solve a problem or perform a task.

In game development, algorithms determine how a game behaves, responds, and makes decisions.

A game engine uses algorithms for tasks such as:

- Moving characters.
- Detecting collisions.
- Controlling enemy behavior.
- Calculating scores.
- Finding paths through environments.
- Selecting animations.
- Managing game difficulty.
- Deciding when a player wins or loses.

For example, imagine a game where an enemy guards a treasure.

The enemy needs to decide what to do when the player approaches.

A simplified algorithm might be:

```text
START
  |
  v
CHECK PLAYER DISTANCE
  |
  v
IS PLAYER NEAR?
  |
  +---- NO ----> CONTINUE PATROLLING
  |
 YES
  |
  v
CHASE PLAYER
  |
  v
IS PLAYER WITHIN ATTACK RANGE?
  |
  +---- NO ----> CONTINUE CHASING
  |
 YES
  |
  v
ATTACK PLAYER
```

This is an example of an algorithm controlling an enemy's behavior.

The enemy does not need human intelligence to make this decision. The developer defines rules that allow the game to respond to different situations.

## 2. Characteristics of a Good Game Algorithm

A good algorithm should have several important characteristics.

### A. Clear instructions

Each step should have a specific purpose.

For example:

```text
1. Read player health.
2. Check whether health is zero.
3. If health is zero, end the game.
4. Otherwise, continue playing.
```

The instructions are understandable and follow a logical order.

### B. Correctness

An algorithm should produce the expected result.

If a player has 100 health and receives 20 damage, the resulting health should be 80.

An incorrect algorithm might subtract the damage twice or produce negative health without handling it.

### C. Efficiency

Games must perform many calculations while running.

An inefficient algorithm can cause:

- Slow performance.
- Frame drops.
- Delayed enemy reactions.
- High CPU usage.

For example, searching through thousands of objects unnecessarily every frame can reduce performance.

### D. Termination

An algorithm should have a condition that determines when it finishes, where appropriate.

For example, a level-completion algorithm should stop checking once the required objectives are completed.

Some game algorithms intentionally run continuously, such as the game loop.

### E. Predictability

The algorithm should behave consistently under the conditions it was designed for.

For example, if the player's health is below 20, a low-health warning should appear.

Predictable behavior makes games easier to test and debug.

---

## 3. Algorithms and Game Logic

Game logic is the collection of rules that determine how a game behaves.

Algorithms are used to implement those rules.

Consider a simple survival game.

The rules might be:

- The player starts with 100 health.
- Enemies can attack the player.
- Each enemy attack causes 10 damage.
- When health reaches zero, the player loses.

The algorithm for receiving damage could be:

```text
RECEIVE DAMAGE
      |
      v
SUBTRACT DAMAGE FROM HEALTH
      |
      v
IS HEALTH BELOW ZERO?
      |
     YES
      |
      v
SET HEALTH TO ZERO
      |
      v
IS HEALTH ZERO?
      |
     YES
      |
      v
PLAYER DIES
```

The algorithm translates the game's rules into executable instructions.

### Algorithm versus game rule

| Game rule | Algorithm |
|---|---|
| Player loses health when attacked | Subtract damage from health |
| Player wins after collecting five keys | Count collected keys and check whether count reaches five |
| Enemy chases the player | Calculate distance and move toward the player |
| Door opens when a key is collected | Check key ownership and change door state |
| Player loses when time expires | Decrease timer and check whether it reaches zero |

A game rule describes what should happen.

An algorithm describes how the game performs the required operation.

---

## 4. Decision-Making in Games

Decision-making is the process of selecting an action based on available information and predefined rules.

Games constantly make decisions.

For example:

- Should an enemy attack or retreat?
- Should a door open or remain locked?
- Should the player receive a reward?
- Should a character jump over an obstacle?
- Should a game display a victory or defeat screen?

Most basic game decisions use conditions.

### Conditional statements

C# provides several conditional structures:

| Statement | Purpose |
|---|---|
| `if` | Executes code when a condition is true |
| `else` | Executes code when the previous condition is false |
| `else if` | Checks another condition |
| `switch` | Selects among multiple cases |
| Ternary operator | Chooses between two expressions |

### Example: Player health decision

```csharp
int health = 25;

if (health <= 0)
{
    Console.WriteLine("Player is dead.");
}
else
{
    Console.WriteLine("Player is alive.");
}
```

Explanation:

```csharp
int health = 25;
```

Creates an integer variable representing the player's health.

```csharp
if (health <= 0)
```

Checks whether health is zero or lower.

The `<=` operator means less than or equal to.

```csharp
Console.WriteLine("Player is dead.");
```

Displays the death message if the condition is true.

```csharp
else
```

Handles the opposite situation.

Since health is 25, the program displays:

```text
Player is alive.
```

This is a simple decision algorithm.

---

## 5. Types of Decisions in Games

Games use different kinds of decision structures.

### A. Binary decisions

A binary decision has two possible outcomes.

Example:

```text
Is the door unlocked?

YES -> Open door
NO  -> Keep door closed
```

C# implementation:

```csharp
bool hasKey = true;

if (hasKey)
{
    Console.WriteLine("Door opened.");
}
else
{
    Console.WriteLine("Door is locked.");
}
```

### B. Multiple decisions

Some situations have more than two possible outcomes.

For example, a character's health might determine the character's condition.

```csharp
int health = 45;

if (health >= 70)
{
    Console.WriteLine("Healthy");
}
else if (health >= 30)
{
    Console.WriteLine("Injured");
}
else if (health > 0)
{
    Console.WriteLine("Critical condition");
}
else
{
    Console.WriteLine("Dead");
}
```

The conditions are checked from top to bottom.

For health of 45:

- `health >= 70` is false.
- `health >= 30` is true.
- The program displays `Injured`.
- The remaining conditions are skipped.

### C. Combined decisions

A game may need to check multiple conditions at once.

For example, a player can enter a restricted area only if they have a key and are alive.

```csharp
bool hasKey = true;
int health = 80;

if (hasKey && health > 0)
{
    Console.WriteLine("Access granted.");
}
else
{
    Console.WriteLine("Access denied.");
}
```

The `&&` operator requires both conditions to be true.

Other important logical operators:

| Operator | Meaning | Example |
|---|---|---|
| `&&` | AND | `health > 0 && hasKey` |
| `||` | OR | `hasKey || hasPassword` |
| `!` | NOT | `!isDead` |

---

## 6. Algorithms That Control Game Difficulty

Game difficulty can also be controlled using algorithms.

Imagine a game where enemies become stronger as the player progresses.

A simple difficulty algorithm could be:

```text
CHECK PLAYER LEVEL

IF LEVEL IS 1-3
    EASY ENEMIES

IF LEVEL IS 4-6
    MEDIUM ENEMIES

IF LEVEL IS ABOVE 6
    HARD ENEMIES
```

C# example:

```csharp
int playerLevel = 5;

if (playerLevel <= 3)
{
    Console.WriteLine("Easy difficulty");
}
else if (playerLevel <= 6)
{
    Console.WriteLine("Medium difficulty");
}
else
{
    Console.WriteLine("Hard difficulty");
}
```

The program determines difficulty from the player's current level.

More advanced games may consider:

- Player performance.
- Time taken to complete levels.
- Number of deaths.
- Available resources.
- Enemy strength.
- Player behavior.

This can be used to create dynamic difficulty systems.

## 7. Pseudocode and Flowcharts

Before writing code, developers often describe algorithms using pseudocode or flowcharts.

### Pseudocode

Pseudocode describes program logic using simple language rather than strict programming syntax.

Example: checking whether a player wins.

```text
START

SET score = 0

WHILE game is running
    RECEIVE PLAYER SCORE

    ADD SCORE TO TOTAL

    IF score >= 100
        DISPLAY "YOU WIN"
        STOP GAME
    END IF
END WHILE

END
```

Pseudocode helps developers understand the logic before implementing it.

### Flowcharts

A flowchart uses shapes and arrows to represent an algorithm.

Common symbols:

| Symbol | Meaning |
|---|---|
| Oval | Start or end |
| Rectangle | Process or instruction |
| Diamond | Decision |
| Parallelogram | Input or output |
| Arrow | Direction of execution |

Example:

```text
       [START]
          |
          v
   [READ PLAYER HEALTH]
          |
          v
    <HEALTH <= 0?>
       /       \
     YES        NO
      |          |
      v          v
 [GAME OVER]  [CONTINUE]
      |          |
      v          v
     [END]    [PLAYING]
```

Flowcharts are especially useful when designing complicated gameplay systems.

### Part 1 summary

You have learned:

- What algorithms are.
- How algorithms implement game rules.
- What decision-making means.
- How conditional statements control game behavior.
- How games use binary, multiple, and combined decisions.
- How algorithms control difficulty.
- How pseudocode and flowcharts help developers plan game logic.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: GAME DECISION ALGORITHMS AND AI

## 8. Understanding Game Artificial Intelligence

Game AI refers to systems that control non-player characters and other intelligent-looking game behaviors.

NPC means Non-Player Character.

Examples include:

- Enemies.
- Friendly characters.
- Guards.
- Shopkeepers.
- Animals.
- Computer-controlled racing opponents.

Game AI does not necessarily use machine learning or advanced artificial intelligence models.

Many game AI systems use ordinary algorithms, conditions, and predefined rules.

For example, a guard may follow these rules:

```text
IF PLAYER IS NOT VISIBLE
    PATROL AREA

IF PLAYER IS VISIBLE
    INVESTIGATE PLAYER

IF PLAYER IS CLOSE
    ATTACK PLAYER

IF HEALTH IS LOW
    RETREAT
```

These rules can make a character appear intelligent.

---

## 9. Finite State Machines

A finite state machine (FSM) is a decision system in which an object can exist in one of a limited number of states.

A state represents the current behavior or condition of an object.

For example, an enemy might have four states:

1. Idle.
2. Patrolling.
3. Chasing.
4. Attacking.

The enemy changes state when certain conditions are satisfied.

### Enemy state machine

```text
             [IDLE]
                |
          PLAYER DETECTED
                |
                v
           [CHASING]
                |
          PLAYER IN RANGE
                |
                v
           [ATTACKING]
                |
         PLAYER OUT OF RANGE
                |
                v
           [CHASING]

If player is lost:
    Return to PATROLLING
```

### Why use a finite state machine?

Without states, enemy behavior can become difficult to manage.

Imagine writing separate conditions for every possible enemy action.

As the number of actions increases, the code becomes complicated.

An FSM organizes behavior into clearly defined states and transitions.

### C# example: Enemy states

```csharp
enum EnemyState
{
    Idle,
    Patrolling,
    Chasing,
    Attacking
}
```

Explanation:

- `enum` defines a collection of named values.
- `EnemyState` is the name of the enumeration.
- `Idle`, `Patrolling`, `Chasing`, and `Attacking` represent possible enemy states.

Now create a variable:

```csharp
EnemyState currentState = EnemyState.Idle;
```

This creates a variable that stores the enemy's current state.

The enemy starts in the Idle state.

We can use a `switch` statement to decide what happens:

```csharp
switch (currentState)
{
    case EnemyState.Idle:
        Console.WriteLine("Enemy is standing still.");
        break;

    case EnemyState.Patrolling:
        Console.WriteLine("Enemy is patrolling.");
        break;

    case EnemyState.Chasing:
        Console.WriteLine("Enemy is chasing the player.");
        break;

    case EnemyState.Attacking:
        Console.WriteLine("Enemy is attacking.");
        break;
}
```

The `switch` statement checks the current state and executes the matching behavior.

This is a simple representation of a state-driven enemy system.

---

## 10. Rule-Based Decision Systems

A rule-based system makes decisions using predefined conditions.

For example, an enemy might use the following rules:

| Condition | Decision |
|---|---|
| Player is far away | Patrol |
| Player is nearby | Investigate |
| Player is within attack range | Attack |
| Enemy health is low | Retreat |

The system does not need to learn these decisions. The developer defines them.

### Practical C# example

```csharp
int enemyHealth = 80;
float playerDistance = 4.5f;

if (enemyHealth < 20)
{
    Console.WriteLine("Enemy retreats.");
}
else if (playerDistance <= 2f)
{
    Console.WriteLine("Enemy attacks.");
}
else if (playerDistance <= 10f)
{
    Console.WriteLine("Enemy chases the player.");
}
else
{
    Console.WriteLine("Enemy patrols.");
}
```

### Explanation

```csharp
int enemyHealth = 80;
```

Stores the enemy's health.

```csharp
float playerDistance = 4.5f;
```

Stores the distance between the enemy and the player.

A `float` is used because distance may contain decimal values.

```csharp
if (enemyHealth < 20)
```

Checks whether the enemy has low health.

This condition is checked first, so retreating takes priority over the other decisions.

```csharp
else if (playerDistance <= 2f)
```

Checks whether the player is close enough for an attack.

```csharp
else if (playerDistance <= 10f)
```

Checks whether the player is close enough to be chased.

```csharp
else
```

If none of the earlier conditions is true, the enemy patrols.

For the provided values, the result is:

```text
Enemy chases the player.
```

This is a basic rule-based AI system.

---

## 11. Distance-Based Decision Algorithms

Games frequently calculate distance between objects.

Distance helps determine:

- Whether an enemy can see the player.
- Whether a weapon can hit a target.
- Whether a player can collect an item.
- Whether a character should interact with another character.
- Whether an object is inside an explosion radius.

For two points in 2D space:

```text
A = (x1, y1)
B = (x2, y2)
```

The distance formula is:

```text
Distance = √((x2 - x1)² + (y2 - y1)²)
```

### Example

Suppose:

```text
Player position = (2, 3)
Enemy position  = (5, 7)
```

Calculate:

```text
Distance = √((5 - 2)² + (7 - 3)²)

Distance = √(3² + 4²)

Distance = √(9 + 16)

Distance = √25

Distance = 5
```

The distance between the player and enemy is 5 units.

### C# implementation

```csharp
using System;

double playerX = 2;
double playerY = 3;

double enemyX = 5;
double enemyY = 7;

double dx = enemyX - playerX;
double dy = enemyY - playerY;

double distance = Math.Sqrt(dx * dx + dy * dy);

Console.WriteLine($"Distance: {distance}");
```

### Explanation

```csharp
double dx = enemyX - playerX;
```

Calculates the horizontal difference between the two positions.

```csharp
double dy = enemyY - playerY;
```

Calculates the vertical difference.

```csharp
double distance = Math.Sqrt(dx * dx + dy * dy);
```

Uses the distance formula.

- `dx * dx` squares the horizontal difference.
- `dy * dy` squares the vertical difference.
- `Math.Sqrt()` calculates the square root.

Expected output:

```text
Distance: 5
```

### Using distance for enemy decisions

```csharp
if (distance <= 2)
{
    Console.WriteLine("Enemy attacks.");
}
else if (distance <= 10)
{
    Console.WriteLine("Enemy follows player.");
}
else
{
    Console.WriteLine("Enemy stays in patrol mode.");
}
```

The distance algorithm provides information that the enemy decision system can use.

In a real game, the calculation would normally use the actual positions of game objects.

---

## 12. Pathfinding Algorithms

Pathfinding is the process of finding a route from one location to another.

Games use pathfinding when characters need to navigate around environments.

For example:

- An enemy needs to reach the player.
- A character needs to navigate a maze.
- A vehicle needs to follow a road.
- An NPC needs to walk to a building.

A pathfinding system considers the environment and identifies a suitable route.

### Example: Maze navigation

Imagine a simple grid:

```text
S = Start
E = End
# = Wall
. = Walkable space

S . . #
# # . #
. . . .
# . # E
```

The character cannot move through walls.

It must find a valid route through the available spaces.

### Common pathfinding algorithms

| Algorithm | Main purpose |
|---|---|
| Breadth-First Search (BFS) | Finds a shortest path in an unweighted graph |
| Depth-First Search (DFS) | Explores paths deeply before backtracking |
| Dijkstra's Algorithm | Finds shortest paths using non-negative edge costs |
| A* (A-Star) | Uses path cost and a heuristic to guide search |

### A. Breadth-First Search

BFS explores nearby nodes before exploring farther nodes.

It is useful for finding shortest paths in graphs where every movement has equal cost.

### B. Depth-First Search

DFS explores one path deeply before returning to explore another path.

It is useful for exploring connected structures, but it does not generally guarantee the shortest path.

### C. Dijkstra's Algorithm

Dijkstra's algorithm considers the cost of travelling between nodes.

It can find the lowest-cost path when edge weights are non-negative.

For example, a game may assign different costs to:

- Grass.
- Mud.
- Water.
- Roads.

A character might prefer a longer route with lower total movement cost.

### D. A* Algorithm

A* combines:

- The cost already travelled.
- An estimate of the remaining distance.

It uses the function:

```text
f(n) = g(n) + h(n)
```

Where:

- `g(n)` is the cost from the starting point to the current node.
- `h(n)` is the estimated cost from the current node to the destination.
- `f(n)` is the estimated total route cost through that node.

A* is widely used in game navigation.

---

## 13. Decision Trees

A decision tree is a structure that represents a series of decisions and possible outcomes.

Each branch represents a possible direction.

For example, an enemy might make decisions like this:

```text
                 PLAYER VISIBLE?
                  /          \
                YES           NO
                |              |
           HEALTH LOW?       PATROL
             /    \
           YES     NO
           |        |
        RETREAT   PLAYER CLOSE?
                   /       \
                 YES        NO
                  |          |
                ATTACK      CHASE
```

This structure helps developers plan complex behavior.

### Decision tree versus finite state machine

| Feature | Decision tree | Finite state machine |
|---|---|---|
| Main structure | Branching decisions | States and transitions |
| Focus | Selecting an outcome | Managing current behavior |
| Typical use | Choosing an action | Controlling behavior over time |
| Example | Attack or retreat? | Idle, chase, attack |

A game can combine both approaches.

For example, an enemy may use a state machine to manage its current behavior and a decision tree to decide which state it should enter next.

---

## 14. Behavior Trees

Behavior trees are hierarchical systems used to organize complex game AI.

They are common in games with sophisticated NPC behavior.

A behavior tree contains different types of nodes.

### A. Sequence node

A sequence runs its children in order.

It succeeds only when all required children succeed.

Example:

```text
SEQUENCE
   |
   +-- Find Player
   |
   +-- Move Towards Player
   |
   +-- Attack Player
```

If a required step fails, the sequence normally fails and stops executing further children for that evaluation.

### B. Selector node

A selector tries its children until one succeeds.

Example:

```text
SELECTOR
   |
   +-- Attack Player
   |
   +-- Chase Player
   |
   +-- Patrol Area
```

The system can try attacking first, then chasing, then patrolling.

### C. Condition node

A condition checks whether something is true.

Examples:

- Is the player visible?
- Is health below 20?
- Is ammunition available?
- Is the enemy close enough to attack?

### D. Action node

An action performs a task.

Examples:

- Move.
- Attack.
- Reload.
- Patrol.
- Open a door.

Behavior trees are useful when NPCs have many possible behaviors and developers need a clear way to organize them.

### Part 2 summary

You have learned:

- How game AI makes decisions.
- How finite state machines organize behavior.
- How rule-based systems work.
- How distance calculations influence gameplay.
- How BFS, DFS, Dijkstra, and A* support pathfinding.
- How decision trees organize choices.
- How behavior trees manage complex NPC behavior.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL GAME ALGORITHMS WITH C#

We will now build small game systems using C#.

The examples will demonstrate how algorithms and decisions work together.

## 15. Practical Setup

Create a new console project:

```bash
dotnet new console -n GameAlgorithms
```

Enter the project:

```bash
cd GameAlgorithms
```

Open `Program.cs`.

We will implement several game algorithms.

---

## 16. Practical Example 1: Player Health and Death Algorithm

We will create a system that tracks player health and decides whether the player is alive or dead.

### Complete code

```csharp
int playerHealth = 100;

Console.WriteLine("=== PLAYER HEALTH SYSTEM ===");

Console.Write("Enter damage received: ");

string? input = Console.ReadLine();

if (int.TryParse(input, out int damage) && damage >= 0)
{
    playerHealth -= damage;

    if (playerHealth < 0)
    {
        playerHealth = 0;
    }

    Console.WriteLine($"Remaining Health: {playerHealth}");

    if (playerHealth == 0)
    {
        Console.WriteLine("GAME OVER: Player has died.");
    }
    else
    {
        Console.WriteLine("Player is still alive.");
    }
}
else
{
    Console.WriteLine("Invalid damage value.");
}
```

### Line-by-line explanation

```csharp
int playerHealth = 100;
```

Creates the player's health variable and gives the player 100 health points.

```csharp
Console.WriteLine("=== PLAYER HEALTH SYSTEM ===");
```

Displays the system heading.

```csharp
Console.Write("Enter damage received: ");
```

Requests the amount of damage.

```csharp
string? input = Console.ReadLine();
```

Reads the player's input as text.

```csharp
if (int.TryParse(input, out int damage) && damage >= 0)
```

This statement performs two checks.

First:

`int.TryParse()` attempts to convert the entered text into an integer.

It returns true when the conversion succeeds.

Second:

`damage >= 0` ensures that the damage is not negative.

The `&&` operator requires both conditions to be true.

```csharp
playerHealth -= damage;
```

Subtracts the damage from the player's health.

It is equivalent to:

```csharp
playerHealth = playerHealth - damage;
```

```csharp
if (playerHealth < 0)
{
    playerHealth = 0;
}
```

Prevents the health value from becoming negative.

```csharp
Console.WriteLine($"Remaining Health: {playerHealth}");
```

Displays the remaining health.

```csharp
if (playerHealth == 0)
```

Checks whether the player has no health remaining.

The program displays the appropriate result.

### Example execution

Input:

```text
Enter damage received: 35
```

Output:

```text
Remaining Health: 65
Player is still alive.
```

If the player receives 120 damage:

```text
Remaining Health: 0
GAME OVER: Player has died.
```

This program demonstrates how a game algorithm uses input, calculations, and decisions.

---

## 17. Practical Example 2: Enemy Decision System

Now we will build a basic enemy AI system.

The enemy will decide whether to:

- Patrol.
- Chase the player.
- Attack the player.
- Retreat.

The decision will depend on health and distance.

### Complete code

```csharp
int enemyHealth = 80;
double playerDistance = 3.5;

Console.WriteLine("=== ENEMY AI SYSTEM ===");

if (enemyHealth <= 0)
{
    Console.WriteLine("Enemy is defeated.");
}
else if (enemyHealth < 20)
{
    Console.WriteLine("Enemy retreats.");
}
else if (playerDistance <= 2)
{
    Console.WriteLine("Enemy attacks the player.");
}
else if (playerDistance <= 10)
{
    Console.WriteLine("Enemy chases the player.");
}
else
{
    Console.WriteLine("Enemy patrols the area.");
}
```

### Line-by-line explanation

```csharp
int enemyHealth = 80;
```

Stores the enemy's health.

```csharp
double playerDistance = 3.5;
```

Stores the distance between the enemy and the player.

```csharp
if (enemyHealth <= 0)
```

Checks whether the enemy has been defeated.

```csharp
else if (enemyHealth < 20)
```

Checks whether the enemy's health is low enough to trigger retreat.

```csharp
else if (playerDistance <= 2)
```

Checks whether the player is within attack distance.

```csharp
else if (playerDistance <= 10)
```

Checks whether the player is within chasing distance.

```csharp
else
```

If none of the previous conditions is satisfied, the enemy patrols.

### Expected output

```text
=== ENEMY AI SYSTEM ===
Enemy chases the player.
```

### Important concept: Decision priority

The order of conditions matters.

If the enemy has 10 health and the player is only one unit away, the enemy retreats because the low-health condition is checked before the attack condition.

If you change the order, the enemy may attack instead.

This is called decision priority.

---

## 18. Practical Example 3: Implementing a Finite State Machine

Now we will create an enemy whose behavior is represented using states.

### Step 1: Define the states

```csharp
enum EnemyState
{
    Idle,
    Patrolling,
    Chasing,
    Attacking,
    Dead
}
```

Each value represents a possible condition of the enemy.

### Step 2: Create the enemy decision program

```csharp
EnemyState currentState = EnemyState.Idle;

int enemyHealth = 100;
double playerDistance = 5;

if (enemyHealth <= 0)
{
    currentState = EnemyState.Dead;
}
else if (playerDistance <= 2)
{
    currentState = EnemyState.Attacking;
}
else if (playerDistance <= 10)
{
    currentState = EnemyState.Chasing;
}
else
{
    currentState = EnemyState.Patrolling;
}

switch (currentState)
{
    case EnemyState.Idle:
        Console.WriteLine("Enemy is idle.");
        break;

    case EnemyState.Patrolling:
        Console.WriteLine("Enemy is patrolling.");
        break;

    case EnemyState.Chasing:
        Console.WriteLine("Enemy is chasing the player.");
        break;

    case EnemyState.Attacking:
        Console.WriteLine("Enemy is attacking.");
        break;

    case EnemyState.Dead:
        Console.WriteLine("Enemy has been defeated.");
        break;
}
```

### Understanding the program

First:

```csharp
EnemyState currentState = EnemyState.Idle;
```

Creates a variable that stores the enemy's current state.

The enemy starts in Idle.

Next:

```csharp
int enemyHealth = 100;
double playerDistance = 5;
```

Provides the information used to make the decision.

The enemy has 100 health, and the player is five units away.

Next:

```csharp
if (enemyHealth <= 0)
```

Checks whether the enemy is dead.

If the enemy is not dead, the remaining conditions determine the behavior.

Because the player is five units away, this condition becomes true:

```csharp
else if (playerDistance <= 10)
{
    currentState = EnemyState.Chasing;
}
```

The enemy enters the Chasing state.

Finally:

```csharp
switch (currentState)
```

Checks the selected state and executes the corresponding behavior message.

Expected output:

```text
Enemy is chasing the player.
```

### What makes this a state machine?

The program does not merely print a decision.

It represents the enemy's behavior using a named state.

A real game would also execute movement, animation, and other actions associated with that state.

---

## 19. Practical Example 4: Creating a Simple Pathfinding Algorithm

We will implement a simplified version of Breadth-First Search (BFS).

BFS explores neighboring positions until it finds a route to the destination.

We will use a small grid.

```text
S . . #
# # . #
. . . E
```

Where:

- `S` is the starting position.
- `E` is the destination.
- `.` is a walkable position.
- `#` is a wall.

### Complete C# code

```csharp
using System;
using System.Collections.Generic;

char[,] grid =
{
    { 'S', '.', '.', '#' },
    { '#', '#', '.', '#' },
    { '.', '.', '.', 'E' }
};

int rows = grid.GetLength(0);
int columns = grid.GetLength(1);

Queue<(int row, int col)> queue = new();

bool[,] visited = new bool[rows, columns];

queue.Enqueue((0, 0));
visited[0, 0] = true;

int[] rowMoves = { -1, 1, 0, 0 };
int[] colMoves = { 0, 0, -1, 1 };

bool found = false;

while (queue.Count > 0)
{
    var current = queue.Dequeue();

    int row = current.row;
    int col = current.col;

    if (grid[row, col] == 'E')
    {
        found = true;
        break;
    }

    for (int i = 0; i < 4; i++)
    {
        int newRow = row + rowMoves[i];
        int newCol = col + colMoves[i];

        bool insideGrid =
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < columns;

        if (!insideGrid)
        {
            continue;
        }

        if (grid[newRow, newCol] == '#')
        {
            continue;
        }

        if (visited[newRow, newCol])
        {
            continue;
        }

        visited[newRow, newCol] = true;

        queue.Enqueue((newRow, newCol));
    }
}

if (found)
{
    Console.WriteLine("A path to the destination exists.");
}
else
{
    Console.WriteLine("No path found.");
}
```

### Understanding the algorithm

This example is longer because pathfinding involves several connected operations.

Let's break it down.

**Step 1: Create the grid**

```csharp
char[,] grid =
{
    { 'S', '.', '.', '#' },
    { '#', '#', '.', '#' },
    { '.', '.', '.', 'E' }
};
```

Creates a two-dimensional character array representing the map.

Each character represents a type of location.

**Step 2: Get the grid dimensions**

```csharp
int rows = grid.GetLength(0);
int columns = grid.GetLength(1);
```

`GetLength(0)` returns the number of rows.

`GetLength(1)` returns the number of columns.

**Step 3: Create a queue**

```csharp
Queue<(int row, int col)> queue = new();
```

Creates a queue that stores grid coordinates.

BFS uses a queue to process locations in the order they were discovered.

This follows the First In, First Out principle.

**Step 4: Track visited positions**

```csharp
bool[,] visited = new bool[rows, columns];
```

Creates a Boolean array.

It records whether each grid position has already been visited.

This prevents the algorithm from repeatedly exploring the same position.

**Step 5: Add the starting location**

```csharp
queue.Enqueue((0, 0));
visited[0, 0] = true;
```

Adds the starting position to the queue.

The starting location is at row zero and column zero.

It is immediately marked as visited.

**Step 6: Define possible movements**

```csharp
int[] rowMoves = { -1, 1, 0, 0 };
int[] colMoves = { 0, 0, -1, 1 };
```

These arrays represent movement in four directions:

1. Up.
2. Down.
3. Left.
4. Right.

The values at matching indexes form a movement pair.

For example, index zero gives:

```text
row change = -1
column change = 0
```

That means moving up.

**Step 7: Start searching**

```csharp
while (queue.Count > 0)
```

Continues searching while there are still positions waiting to be explored.

```csharp
var current = queue.Dequeue();
```

Removes the next position from the queue.

```csharp
int row = current.row;
int col = current.col;
```

Extracts its row and column.

**Step 8: Check whether the destination has been reached**

```csharp
if (grid[row, col] == 'E')
```

Checks whether the current location is the destination.

If it is, the algorithm sets `found` to true and stops searching.

**Step 9: Explore neighboring positions**

```csharp
for (int i = 0; i < 4; i++)
```

Checks all four possible directions.

```csharp
int newRow = row + rowMoves[i];
int newCol = col + colMoves[i];
```

Calculates the neighboring position.

**Step 10: Check grid boundaries**

```csharp
bool insideGrid =
    newRow >= 0 &&
    newRow < rows &&
    newCol >= 0 &&
    newCol < columns;
```

Ensures the new position is inside the grid.

```csharp
if (!insideGrid)
{
    continue;
}
```

If the position is outside the map, the algorithm skips it.

**Step 11: Reject walls**

```csharp
if (grid[newRow, newCol] == '#')
{
    continue;
}
```

Prevents the character from moving through walls.

**Step 12: Avoid revisiting locations**

```csharp
if (visited[newRow, newCol])
{
    continue;
}
```

Skips positions that have already been explored.

**Step 13: Add valid positions**

```csharp
visited[newRow, newCol] = true;

queue.Enqueue((newRow, newCol));
```

Marks the new position as visited and adds it to the queue.

The algorithm will explore it later.

### Expected output

```text
A path to the destination exists.
```

### Important limitation

This program checks whether a path exists. It does not reconstruct and display the actual sequence of positions.

BFS can also find a shortest path in this grid because all valid movements have equal cost.

---

## 20. Practical Example 5: A Complete Mini Game Decision System

Now we will combine several concepts into one small game.

The player must defeat an enemy.

The enemy makes decisions based on its health and the player's distance.

### Complete code

```csharp
int playerHealth = 100;
int enemyHealth = 80;

double distance = 5;

bool gameRunning = true;

Console.WriteLine("=== MINI BATTLE GAME ===");

while (gameRunning)
{
    Console.WriteLine();
    Console.WriteLine($"Player Health: {playerHealth}");
    Console.WriteLine($"Enemy Health: {enemyHealth}");

    if (playerHealth <= 0)
    {
        Console.WriteLine("You lost the battle.");
        gameRunning = false;
        continue;
    }

    if (enemyHealth <= 0)
    {
        Console.WriteLine("You defeated the enemy!");
        gameRunning = false;
        continue;
    }

    if (distance > 2)
    {
        Console.WriteLine("Enemy moves closer.");
        distance -= 1;
    }
    else
    {
        Console.WriteLine("Enemy attacks!");

        playerHealth -= 15;

        if (playerHealth < 0)
        {
            playerHealth = 0;
        }
    }

    Console.WriteLine("Press Enter for the next turn.");
    Console.ReadLine();

    if (distance <= 2)
    {
        Console.Write("Enter damage dealt to enemy: ");

        string? input = Console.ReadLine();

        if (int.TryParse(input, out int damage) && damage >= 0)
        {
            enemyHealth -= damage;

            if (enemyHealth < 0)
            {
                enemyHealth = 0;
            }
        }
        else
        {
            Console.WriteLine("Invalid damage.");
        }
    }
}
```

### How the system works

The player and enemy start with their own health values.

The `while` loop keeps the battle running.

At the beginning of each turn, the program checks whether either character has been defeated.

If the player has no health, the game ends with defeat.

If the enemy has no health, the game ends with victory.

If neither has been defeated, the enemy checks its distance from the player.

When the enemy is far away, it moves closer.

When it is within attack distance, it attacks and reduces the player's health.

The player can enter damage when the enemy is close enough.

This small project combines:

- Variables.
- Conditions.
- Loops.
- Input validation.
- Health calculations.
- Distance-based decisions.
- Game-ending conditions.

### Part 3 summary

You have now implemented:

1. A player health algorithm.
2. A rule-based enemy decision system.
3. A finite state machine.
4. A BFS pathfinding algorithm.
5. A small battle simulation.

You have also learned how separate algorithms can work together to create a playable game system.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## 21. Assessment Instructions

This assessment checks your understanding of algorithms, decisions, game AI, and practical implementation.

Answer each question carefully.

For programming questions, write complete code where requested and explain the important statements.

## Section A: Multiple-Choice Questions

**1. What is an algorithm?**

A. A graphical object in a game.

B. A sequence of instructions used to solve a problem.

C. A type of computer monitor.

D. A sound effect.

**2. Which C# statement is used to execute code when a condition is true?**

A. `class`

B. `namespace`

C. `if`

D. `using`

**3. What does a finite state machine organize?**

A. Game textures.

B. Object behavior through states and transitions.

C. Audio files.

D. Screen resolution.

**4. Which algorithm is commonly used for shortest-path searches in unweighted graphs?**

A. BFS.

B. Binary search.

C. Bubble sort.

D. Linear formatting.

**5. What does the A* algorithm use to estimate the total path cost?**

A. `f(n) = g(n) + h(n)`

B. `f(n) = g(n) - h(n)`

C. `f(n) = g(n) × h(n)`

D. `f(n) = g(n) / h(n)`

**6. What is a decision tree?**

A. A structure representing decisions and possible outcomes.

B. A 3D object.

C. A sound-processing system.

D. A type of animation.

**7. What is the purpose of a behavior tree?**

A. Organizing complex character behaviors.

B. Increasing screen brightness.

C. Storing player passwords.

D. Creating image textures.

**8. Which C# keyword defines a group of named constant values?**

A. `enum`

B. `while`

C. `return`

D. `break`

## Section B: Short-Answer Questions

**9.** Explain the relationship between algorithms and game logic.

**10.** Give four examples of situations where a game uses decision-making algorithms.

**11.** Explain the difference between a rule-based decision system and a finite state machine.

**12.** What is the purpose of calculating the distance between a player and an enemy?

**13.** Explain the difference between BFS and DFS.

**14.** Describe the roles of `g(n)`, `h(n)`, and `f(n)` in the A* algorithm.

**15.** Explain the difference between a decision tree and a behavior tree.

## Section C: Practical Programming

**16. Player health system**

Write a C# program that:

- Starts the player with 100 health.
- Accepts damage from the user.
- Subtracts damage from health.
- Prevents negative health.
- Displays whether the player is alive or dead.

**17. Enemy decision system**

Create an enemy decision algorithm that:

- Attacks when the player is within two units.
- Chases when the player is within ten units.
- Patrols when the player is farther away.
- Retreats when enemy health is below 20.

Make sure that low health has priority over the other decisions.

**18. Finite state machine**

Create an enumeration for these enemy states:

- Idle.
- Patrolling.
- Chasing.
- Attacking.
- Dead.

Write a C# program that selects and displays the enemy's current state based on health and player distance.

**19. Pathfinding**

Explain how BFS explores a grid to find a route from a starting position to a destination.

Your explanation should include:

- The queue.
- Visited positions.
- Neighbor exploration.
- Wall detection.
- Destination detection.

## Section D: Debugging and Reasoning

**20. Find the logical error in this code:**

```csharp
int health = 10;

if (health > 0)
{
    Console.WriteLine("Player is dead.");
}
else
{
    Console.WriteLine("Player is alive.");
}
```

Correct the code and explain why the original version produces the wrong messages.

**21. Consider this enemy decision code:**

```csharp
int enemyHealth = 10;
double distance = 1;

if (distance <= 2)
{
    Console.WriteLine("Enemy attacks.");
}
else if (enemyHealth < 20)
{
    Console.WriteLine("Enemy retreats.");
}
```

The enemy has low health but still attacks.

Explain why this happens and correct the decision priority.

**22. A game has 500 enemies. Each enemy performs an expensive pathfinding calculation every rendered frame. What performance problems might occur, and how could the developer reduce unnecessary calculations?**

## 22. Final Practical Project: Build an Intelligent Enemy System

Build a small game simulation in C# or Unity.

### Project objective

Create an enemy that can make decisions based on the player's position and its own condition.

### Requirements

Your enemy should support the following behaviors:

**1. Idle**

The enemy remains inactive when the player is outside its detection range.

**2. Patrol**

The enemy moves around its assigned area when the player is not detected.

**3. Chase**

The enemy follows the player when the player enters detection range.

**4. Attack**

The enemy attacks when the player enters attack range.

**5. Retreat**

The enemy retreats when its health falls below a defined threshold.

**6. Death**

The enemy stops acting when its health reaches zero.

### Recommended project structure

```text
GameAIProject/
│
├── Assets/
│   ├── Scenes/
│   │   └── MainScene
│   │
│   ├── Scripts/
│   │   ├── EnemyAI.cs
│   │   ├── EnemyState.cs
│   │   ├── PlayerController.cs
│   │   └── GameManager.cs
│   │
│   └── Materials/
│
└── ProjectSettings/
```

### Suggested implementation stages

1. Create the enemy states.
2. Create the enemy health variable.
3. Read the player's position.
4. Calculate the distance between the enemy and player.
5. Create the decision algorithm.
6. Implement movement for each state.
7. Test different health and distance values.
8. Ensure the enemy stops when defeated.

### What to submit to Kai

- Your source code.
- A screenshot of your game scene.
- A screenshot or recording showing enemy behavior.
- A short explanation of your decision algorithm.
- Your assessment answers.
- A description of one bug you encountered and how you corrected it.

### Evaluation criteria

| Area | Evaluation |
|---|---|
| Algorithm design | Correct sequence of instructions |
| Decision-making | Correct use of conditions |
| State management | Appropriate state transitions |
| Game AI | Enemy responds to player conditions |
| Programming | Correct C# implementation |
| Performance awareness | Avoids unnecessary calculations |
| Testing | Demonstrates different enemy behaviors |

---

## 23. Lesson Completion Checklist

Before completing this lesson, make sure you can:

- [ ] Define an algorithm.
- [ ] Explain how algorithms implement game rules.
- [ ] Use conditional statements to make decisions.
- [ ] Design binary and multiple-condition decisions.
- [ ] Explain pseudocode and flowcharts.
- [ ] Describe game AI and NPC behavior.
- [ ] Implement a finite state machine.
- [ ] Create a rule-based enemy system.
- [ ] Calculate distance between game objects.
- [ ] Explain BFS and DFS.
- [ ] Explain Dijkstra's algorithm and A*.
- [ ] Understand decision trees.
- [ ] Understand behavior trees.
- [ ] Implement basic game algorithms using C#.
- [ ] Build an enemy decision system.

# LESSON COMPLETE

**Game Engine: Algorithms and Decisions**

You have learned how algorithms control gameplay, how conditions allow games to make decisions, and how AI systems can control enemies and other non-player characters.

The important idea is that game behavior is not random by default. Developers design algorithms that determine how objects respond to changing conditions.

**Progress: Part 4 of 4 — Lesson Complete**