# GAME ENGINE: INTERFACES AND EXTENSIBILITY

# PART 1 OF 4: UNDERSTANDING INTERFACES

### Learning objectives

By the end of this part, you will be able to:

- Explain what an interface is and why games use them.
- Declare and implement interfaces in C#.
- Use polymorphism to treat different objects in the same way.
- Compare interfaces, abstract classes, and inheritance.
- Explain coupling and why depending on abstractions helps.
- Describe why composition is often preferred over deep inheritance.
- Design small, focused interfaces.

## 1. Introduction to Extensibility

A game engine is never finished. New enemies, weapons, levels, and features are added throughout development, and sometimes by other people (mods, expansion packs, or teammates).

**Extensibility** is the ability to add new features without rewriting the code that already works.

Imagine an engine that applies damage like this:

```csharp
void ApplyDamage(object target, int amount)
{
    if (target is Player p)
    {
        p.Health -= amount;
    }
    else if (target is Enemy e)
    {
        e.Health -= amount;
    }
    else if (target is Crate c)
    {
        c.Durability -= amount;
    }
}
```

This works, but every time you add a new damageable thing (a door, a barrel, a boss), you must come back and edit this method. In a large project, that edit might be needed in dozens of places. Each edit risks breaking something that already works.

An **interface** solves this by letting the engine say, "I don't care what you are. I only care that you can take damage."

---

## 2. What Is an Interface?

An **interface** is a contract. It lists members (methods, properties, events) that a type promises to provide, without saying how they work.

```csharp
interface IDamageable
{
    bool IsDestroyed { get; }
    void TakeDamage(int amount);
}
```

Key points:

- Declared with the `interface` keyword.
- By convention, the name starts with `I`.
- Members have no body here. They only describe **what** must exist.
- You cannot create an object directly from an interface. You create a class that implements it.

Think of an interface as a job description. It says what the worker must be able to do, not who the worker is or how they do it.

### Without and with an interface

```text
WITHOUT AN INTERFACE            WITH AN INTERFACE

  Engine                          Engine
   |  |  |                         |
   v  v  v                         v
 Player Enemy Crate           [ IDamageable ]
 (engine knows each one)         ^    ^    ^
                                 |    |    |
                              Player Enemy Crate
                              (engine knows only the contract)
```

With the interface, a new `Barrel` class can be added without touching the engine.

---

## 3. Implementing Interfaces

A class implements an interface by listing it after a colon and providing every member.

```csharp
class Crate : IDamageable
{
    private int durability = 30;

    public bool IsDestroyed => durability <= 0;

    public void TakeDamage(int amount)
    {
        if (amount < 0 || IsDestroyed) return;
        durability = Math.Max(0, durability - amount);
    }
}
```

If the class leaves out any member, the compiler reports an error. That is a strength: the contract is enforced before the game runs.

### Multiple interfaces

A class can implement several interfaces:

```csharp
class Enemy : IDamageable, IMovable, IResettable
{
    // must provide members from all three
}
```

A C# class can inherit from **only one** base class, but it can implement **many** interfaces. This makes interfaces ideal for describing separate abilities.

---

## 4. Polymorphism

**Polymorphism** means "many forms." In practice: code written against an interface works with any type that implements it, and each type responds in its own way.

```csharp
List<IDamageable> targets = new();
targets.Add(new Player());
targets.Add(new Enemy());
targets.Add(new Crate());

foreach (IDamageable target in targets)
{
    target.TakeDamage(10);   // each type handles damage its own way
}
```

The loop does not know or care which concrete type each item is. A player might flash red, an enemy might play a sound, and a crate might crack. The caller just says `TakeDamage`.

Notice that the `if / else if` chain from Section 1 is gone.

---

## 5. Interface, Abstract Class, or Inheritance?

C# gives you several ways to share behavior.

| | Interface | Abstract class | Regular (concrete) base class |
|---|---|---|---|
| Holds shared code | Not normally | Yes | Yes |
| Holds fields (data) | No | Yes | Yes |
| Objects can be created directly | No | No | Yes |
| Classes can use several | Yes | No (only one base class) | No (only one base class) |
| Best for | Describing a capability | A shared base with some required overrides | A real "is-a" relationship with shared code |

### Guidelines

- Use an **interface** when different, unrelated types share an ability (`IDamageable`, `IInteractable`).
- Use an **abstract class** when related types share real code and data (for example, all enemies share health handling).
- Avoid long chains of inheritance (`Enemy` -> `FlyingEnemy` -> `ExplodingFlyingEnemy` -> ...). They become rigid and confusing.

---

## 6. Coupling and Abstraction

**Coupling** describes how strongly one piece of code depends on another.

- **Tight coupling:** the engine knows the exact classes it uses. Changing one often forces changes in the other.
- **Loose coupling:** the engine knows only an interface. Implementations can be replaced freely.

### Tight coupling

```csharp
class Fighter
{
    private Sword weapon = new Sword();   // locked to one weapon

    public void Attack() => weapon.Swing();
}
```

To use a bow, you must edit `Fighter`.

### Loose coupling

```csharp
class Fighter
{
    private IWeapon weapon;

    public Fighter(IWeapon weapon)
    {
        this.weapon = weapon;
    }

    public void Attack() => weapon.Use();
}
```

`Fighter` works with any weapon. This idea is often summarized as: **depend on abstractions, not concrete classes.**

---

## 7. Composition over Inheritance

**Inheritance** says a thing *is a* kind of another thing. **Composition** says a thing *has* abilities.

Suppose your game has enemies that can walk, fly, shoot, or explode, in many combinations.

### With inheritance (the explosion of classes)

```text
Enemy
 +-- WalkingEnemy
 |     +-- ShootingWalkingEnemy
 |     +-- ExplodingWalkingEnemy
 +-- FlyingEnemy
       +-- ShootingFlyingEnemy
       +-- ExplodingFlyingEnemy
       +-- ShootingExplodingFlyingEnemy ...
```

Each new ability multiplies the number of classes.

### With composition

```text
Enemy  =  [ Health ] + [ Mover ] + [ Shooter ] + [ Exploder ]
```

You build each enemy by choosing the parts it needs. Adding a new ability means writing one new component, not rewriting a class tree. You will build this in Part 3.

---

## 8. Designing Good Interfaces

A good interface is **small, focused, and named after a capability**.

| Good | Why |
|---|---|
| `IDamageable` | One clear ability |
| `IInteractable` | One clear ability |
| `IResettable` | One clear ability |

A poor design:

```csharp
interface IEnemy
{
    void Walk();
    void Fly();
    void Swim();
    void Shoot();
    void Explode();
}
```

A slime that only crawls is forced to implement `Fly`, `Swim`, and `Shoot`. It ends up with empty methods or code that throws errors.

A better design splits the interface by capability:

```csharp
interface IWalker  { void Walk(); }
interface IFlyer   { void Fly(); }
interface IShooter { void Shoot(); }
```

Each class implements only what it can really do.

Guidelines:

1. Name the interface after what the object **can do**.
2. Keep members few. If implementers leave members empty, split the interface.
3. Add a member only when at least one caller needs it.
4. Think about the caller, not the implementer. "What does the code using this need?"

### Part 1 summary

You have learned:

- Why extensibility matters in game development.
- What an interface is and how to declare and implement one.
- How polymorphism lets one piece of code work with many types.
- The differences between interfaces, abstract classes, and base classes.
- The difference between tight and loose coupling.
- Why composition often beats deep inheritance.
- How to design small, focused interfaces.

**Progress: Part 1 of 4**

---

# PART 2 OF 4: PATTERNS FOR EXTENSIBLE GAMES

### Learning objectives

By the end of this part, you will be able to:

- Describe the SOLID principles that apply to interfaces.
- Explain the Strategy pattern.
- Explain dependency injection and why it helps testing.
- Explain the observer pattern and C# events.
- Describe component-based architecture.
- Explain registries, modules, and data-driven design.
- Explain how to change a contract safely.
- Recognize the trade-offs of abstraction.

## 9. Design Principles: SOLID

SOLID is a set of five guidelines for flexible code. Four apply directly to this lesson.

| Letter | Principle | Meaning in games |
|---|---|---|
| S | Single Responsibility | A class has one reason to change. A `Player` class should not also save files and play sounds. |
| O | Open/Closed | Code should be **open for extension** but **closed for modification**. Add a new enemy without editing the engine. |
| L | Liskov Substitution | Any implementation should work wherever the interface is expected, without surprises. |
| I | Interface Segregation | Prefer several small interfaces over one large one. |
| D | Dependency Inversion | Depend on abstractions (interfaces), not concrete classes. |

These are guidelines, not laws. They are tools for keeping code easy to change.

---

## 10. The Strategy Pattern

The **Strategy pattern** lets you swap an algorithm at run time by placing each version behind an interface.

Examples in games:

- Weapons that calculate damage differently.
- Enemy movement styles (patrol, wander, chase).
- Different difficulty rules.

```text
        Fighter
           |
           v
      [ IWeapon ]
      /    |     \
  Sword   Bow   Staff
```

`Fighter` holds an `IWeapon` and calls it. Giving the fighter a different weapon changes its behavior without changing the `Fighter` class.

This pattern replaces long `switch` statements on a "type" value.

---

## 11. Dependency Injection

**Dependency injection (DI)** means giving a class the things it needs from outside, instead of letting it create them itself.

```csharp
// Not injected: the class creates its own dependency
class CombatSystem
{
    private Random random = new Random();
}

// Injected: the dependency is supplied
class CombatSystem
{
    private readonly IRandomSource random;

    public CombatSystem(IRandomSource random)
    {
        this.random = random;
    }
}
```

The most common form is **constructor injection**, shown above.

Why it matters:

- **Flexibility:** swap implementations without editing the class.
- **Testing:** a test can supply a fake `IRandomSource` that always returns the same number, so results are predictable. Testing code that uses real randomness is difficult.
- **Clarity:** the constructor lists everything the class needs.

---

## 12. Events and the Observer Pattern

Sometimes one part of the game must tell others that something happened, without knowing who is listening.

- When health changes, the HUD updates, a sound plays, and the screen flashes.
- When an enemy dies, the score increases, a door opens, and an achievement unlocks.

The **observer pattern** handles this. A **publisher** announces an event. **Subscribers** register to be told.

```text
HealthComponent  ---- HealthChanged ---->  HUD bar
   (publisher)                        |->  Sound effects
                                      |->  Screen flash
```

In C#, this is built in with `event`:

```csharp
public event Action<int, int>? HealthChanged;   // old value, new value
```

- Subscribers add a handler with `+=`.
- The publisher raises the event with `HealthChanged?.Invoke(old, current)`.
- The `?.` check means nothing happens if nobody subscribed.

The health component does not know the HUD exists. You can add or remove subscribers without editing it.

**Warning:** a subscriber that is no longer needed must **unsubscribe** with `-=`. The publisher holds a reference to every subscriber, so a forgotten subscription keeps that object alive in memory (the garbage collector cannot free it) and the handler may still run on an object you thought was gone.

---

## 13. Component-Based Architecture

Many engines, including Unity, build game objects from **components** rather than deep inheritance.

```text
GameObject: "Goblin"
 +-- Health component
 +-- Mover component
 +-- Regeneration component
```

Each component does one job and implements a shared interface such as `IComponent`. The game object keeps a list of its components and updates each one every frame.

Benefits:

- Behavior is assembled, not inherited.
- Components can be reused by many kinds of objects.
- Designers can combine components without programmer help.

Components sometimes need each other (Regeneration needs Health). A game object can offer a method such as `Get<T>()` to find a sibling component.

---

## 14. Registries, Modules, and Data-Driven Design

To let new content appear without changing the engine, use a **registry**: a lookup table that maps an ID to a way of creating something.

```text
"goblin"  -->  create a Goblin
"slime"   -->  create a Slime
"dragon"  -->  create a Dragon    (added later by a module)
```

A **module** (or plugin) is a package of content that adds entries to the registry when loaded.

```text
Engine starts
  -> loads Core module        (registers goblin, slime)
  -> loads Dragon Pack module (registers dragon)
  -> engine code is unchanged
```

### Data-driven design

Another approach is to move values out of code and into data files that the engine reads.

```text
{
  "id": "goblin",
  "health": 30,
  "speed": 2.5,
  "weapon": "Sword"
}
```

Designers can then change health or speed by editing a file, without recompiling. Combining a registry (for behavior) with data files (for values) is a common way to build mod-friendly games.

---

## 15. Changing Contracts Safely

Once other code depends on an interface, changing it is risky.

If you add a new member to `IWeapon`, **every class that implements it stops compiling** until it provides that member. In a game with mods, you cannot fix other people's code.

Safer options:

| Option | How it works |
|---|---|
| Create a new interface | Add `IWeaponV2` that extends or complements `IWeapon`. Old code still works. |
| Default interface member | Provide a default body inside the interface (C# 8 and later). Existing classes keep compiling. |
| Deprecate before removing | Mark old members with `[Obsolete]` for a while before deleting them. |

```csharp
interface IWeapon
{
    string Name { get; }
    int CalculateDamage(int distance);

    // added later with a default body so old weapons still compile
    string Describe() => $"{Name}";
}
```

Default members are called through the interface type (`IWeapon w = ...; w.Describe();`). Use them sparingly. They are a safety net, not a replacement for good design.

The best protection is to **design small interfaces carefully at the start**, because small interfaces rarely need to change.

---

## 16. Costs and Trade-offs

Abstraction is useful, but it is not free.

**Over-engineering.** Not everything needs an interface. If there will only ever be one implementation and nothing needs to replace it, a plain class is simpler. A good rule: add an interface when you have a second implementation or a clear need to substitute one (such as testing).

**Performance.** Calling a method through an interface is very slightly slower than calling a concrete method. For almost all game code the difference is too small to matter, but avoid interface calls inside the tightest loops that run millions of times per frame.

**Boxing.** A `struct` is a value type. If you store a struct in a variable of an interface type, C# **boxes** it, meaning it copies the value onto the heap as an object. As you learned in the previous lesson, repeated heap allocation feeds the garbage collector.

```csharp
struct Bullet : IUpdatable { /* ... */ }

IUpdatable u = new Bullet();   // boxing: allocates on the heap
```

Using generics with constraints (`where T : IUpdatable`) avoids this in performance-sensitive code.

**Complexity.** More interfaces mean more files and more indirection. Aim for the simplest design that handles the changes you realistically expect.

### Part 2 summary

You have learned:

- The SOLID principles relevant to extensible design.
- How the Strategy pattern swaps behavior at run time.
- How dependency injection supports flexibility and testing.
- How events implement the observer pattern.
- How component-based architecture builds objects from parts.
- How registries, modules, and data files add content without changing the engine.
- How to change contracts safely.
- The costs of abstraction, including over-engineering and boxing.

**Progress: Part 2 of 4**

---

# PART 3 OF 4: PRACTICAL INTERFACES WITH C#

### Learning objectives

By the end of this part, you will have implemented:

- A shared interface used by different game objects.
- Swappable weapons with the Strategy pattern.
- A health component that notifies subscribers through events.
- A component-based game object.
- A module system that adds enemies without changing the engine.
- Dependency injection with a fake for predictable testing.

## 17. Practical Setup

Create a new console project:

```bash
dotnet new console -n GameInterfaces
cd GameInterfaces
```

Open `Program.cs` and delete the generated code. Replace the contents of `Program.cs` for each example.

**Important:** in a top-level-statements file, put executable code at the **top** and all `interface`, `class`, `struct`, `record`, and `enum` definitions at the **bottom** of the file.

---

## 18. Practical Example 1: A Shared Interface

### Complete code

```csharp
List<IDamageable> targets = new()
{
    new Player("Aria", 100),
    new Enemy("Goblin", 40),
    new Crate(30)
};

foreach (IDamageable target in targets)
{
    target.TakeDamage(35);

    if (target.IsDestroyed)
    {
        Console.WriteLine("  -> destroyed");
    }
}

interface IDamageable
{
    bool IsDestroyed { get; }
    void TakeDamage(int amount);
}

class Player : IDamageable
{
    public string Name { get; }
    public int Health { get; private set; }
    public bool IsDestroyed => Health <= 0;

    public Player(string name, int health)
    {
        Name = name;
        Health = health;
    }

    public void TakeDamage(int amount)
    {
        if (amount < 0 || IsDestroyed) return;
        Health = Math.Max(0, Health - amount);
        Console.WriteLine($"Player {Name} takes {amount} damage. Health: {Health}");
    }
}

class Enemy : IDamageable
{
    public string Name { get; }
    public int Health { get; private set; }
    public bool IsDestroyed => Health <= 0;

    public Enemy(string name, int health)
    {
        Name = name;
        Health = health;
    }

    public void TakeDamage(int amount)
    {
        if (amount < 0 || IsDestroyed) return;
        Health = Math.Max(0, Health - amount);
        Console.WriteLine($"Enemy {Name} takes {amount} damage. Health: {Health}");
    }
}

class Crate : IDamageable
{
    public int Durability { get; private set; }
    public bool IsDestroyed => Durability <= 0;

    public Crate(int durability)
    {
        Durability = durability;
    }

    public void TakeDamage(int amount)
    {
        if (amount < 0 || IsDestroyed) return;
        Durability = Math.Max(0, Durability - amount);
        Console.WriteLine($"Crate takes {amount} damage. Durability: {Durability}");
    }
}
```

### Explanation

- `IDamageable` is the contract: a destroyed state and a `TakeDamage` method.
- `Player`, `Enemy`, and `Crate` are different classes with different internal data (health versus durability), but all implement the same contract.
- The loop is written once, against `IDamageable`. It never checks the type of each target.
- To add a `Barrel`, you write one new class and add it to the list. The loop does not change.

### Expected output

```text
Player Aria takes 35 damage. Health: 65
Enemy Goblin takes 35 damage. Health: 5
Crate takes 35 damage. Durability: 0
  -> destroyed
```

---

## 19. Practical Example 2: Swappable Weapons (Strategy)

### Complete code

```csharp
Fighter hero = new("Aria", new Sword());

hero.Attack("Goblin", 1);

hero.Weapon = new Bow();
hero.Attack("Goblin", 12);

hero.Weapon = new Sword();
hero.Attack("Goblin", 12);

hero.Weapon = new Staff();
hero.Attack("Goblin", 6);

interface IWeapon
{
    string Name { get; }
    int CalculateDamage(int distance);
}

class Sword : IWeapon
{
    public string Name => "Sword";
    public int CalculateDamage(int distance) => distance <= 2 ? 20 : 0;
}

class Bow : IWeapon
{
    public string Name => "Bow";
    public int CalculateDamage(int distance) => distance <= 20 ? 15 : 0;
}

class Staff : IWeapon
{
    public string Name => "Staff";
    public int CalculateDamage(int distance) => distance <= 8 ? 25 : 0;
}

class Fighter
{
    public string Name { get; }
    public IWeapon Weapon { get; set; }

    public Fighter(string name, IWeapon weapon)
    {
        Name = name;
        Weapon = weapon;
    }

    public void Attack(string target, int distance)
    {
        int damage = Weapon.CalculateDamage(distance);

        if (damage == 0)
        {
            Console.WriteLine($"{Name} attacks {target} with {Weapon.Name} but is out of range.");
        }
        else
        {
            Console.WriteLine($"{Name} attacks {target} with {Weapon.Name} for {damage} damage.");
        }
    }
}
```

### Explanation

- Each weapon decides its own damage and range inside `CalculateDamage`.
- `Fighter` stores an `IWeapon` and never mentions `Sword`, `Bow`, or `Staff`.
- `hero.Weapon = new Bow();` swaps the behavior at run time. The `Fighter` class is unchanged.
- The distance values in the program decide whether each attack lands.

### Expected output

```text
Aria attacks Goblin with Sword for 20 damage.
Aria attacks Goblin with Bow for 15 damage.
Aria attacks Goblin with Sword but is out of range.
Aria attacks Goblin with Staff for 25 damage.
```

---

## 20. Practical Example 3: Events with a Health Component

### Complete code

```csharp
HealthComponent health = new(100);

health.HealthChanged += (oldValue, newValue) =>
    Console.WriteLine($"[HUD] Health bar: {newValue}/{health.Max}");

health.HealthChanged += (oldValue, newValue) =>
{
    if (newValue < oldValue)
    {
        Console.WriteLine("[Audio] Play hurt sound");
    }
};

health.Died += () => Console.WriteLine("[UI] Show game over screen");

health.Damage(30);
health.Damage(80);
health.Damage(10);

class HealthComponent
{
    public int Max { get; }
    public int Current { get; private set; }

    public event Action<int, int>? HealthChanged;
    public event Action? Died;

    public HealthComponent(int max)
    {
        Max = max;
        Current = max;
    }

    public void Damage(int amount)
    {
        if (amount <= 0 || Current <= 0) return;

        int oldValue = Current;
        Current = Math.Max(0, Current - amount);

        HealthChanged?.Invoke(oldValue, Current);

        if (Current == 0)
        {
            Died?.Invoke();
        }
    }
}
```

### Explanation

- `HealthComponent` declares two events but knows nothing about the HUD, audio, or UI.
- The program subscribes handlers with `+=`. Each handler is a small lambda (an inline function).
- `HealthChanged?.Invoke(...)` calls every subscriber. The `Died` event fires only when health reaches zero.
- The third `Damage(10)` call is ignored because the component is already dead, so nothing prints.
- Adding a new reaction (a screen flash) means subscribing one more handler. The component is not edited.

### Expected output

```text
[HUD] Health bar: 70/100
[Audio] Play hurt sound
[HUD] Health bar: 0/100
[Audio] Play hurt sound
[UI] Show game over screen
```

---

## 21. Practical Example 4: A Component-Based Game Object

### Complete code

```csharp
GameObject goblin = new("Goblin");
goblin.Add(new Health(50, 40));
goblin.Add(new Mover(2));
goblin.Add(new Regeneration(5));

for (int frame = 1; frame <= 3; frame++)
{
    Console.WriteLine($"Frame {frame}");
    goblin.Update();
}

interface IComponent
{
    void Update(GameObject owner);
}

class GameObject
{
    private readonly List<IComponent> components = new();

    public string Name { get; }
    public int X { get; set; }

    public GameObject(string name)
    {
        Name = name;
    }

    public void Add(IComponent component)
    {
        components.Add(component);
    }

    public T? Get<T>() where T : class, IComponent
    {
        return components.OfType<T>().FirstOrDefault();
    }

    public void Update()
    {
        foreach (IComponent component in components)
        {
            component.Update(this);
        }
    }
}

class Health : IComponent
{
    public int Max { get; }
    public int Current { get; private set; }

    public Health(int max, int current)
    {
        Max = max;
        Current = current;
    }

    public void Heal(int amount)
    {
        Current = Math.Min(Max, Current + amount);
    }

    public void Update(GameObject owner)
    {
        // Health has no per-frame behavior of its own
    }
}

class Mover : IComponent
{
    public int Speed { get; }

    public Mover(int speed)
    {
        Speed = speed;
    }

    public void Update(GameObject owner)
    {
        owner.X += Speed;
        Console.WriteLine($"  {owner.Name} moves to X={owner.X}");
    }
}

class Regeneration : IComponent
{
    public int AmountPerFrame { get; }

    public Regeneration(int amountPerFrame)
    {
        AmountPerFrame = amountPerFrame;
    }

    public void Update(GameObject owner)
    {
        Health? health = owner.Get<Health>();

        if (health != null)
        {
            health.Heal(AmountPerFrame);
            Console.WriteLine($"  {owner.Name} health: {health.Current}");
        }
    }
}
```

### Explanation

- `GameObject` is just a container with a name, a position, and a list of components.
- Each component implements `IComponent` and does one job.
- `Update()` calls every component once per frame.
- `Get<T>()` finds a sibling component. `Regeneration` uses it to reach `Health`. The `where T : class, IComponent` part limits `T` to component classes.
- Regeneration checks `health != null`, so it works safely on objects that have no `Health`.
- Health is capped at its maximum by `Math.Min`.
- Giving an object new behavior means adding one more component, with no new subclasses.

### Expected output

```text
Frame 1
  Goblin moves to X=2
  Goblin health: 45
Frame 2
  Goblin moves to X=4
  Goblin health: 50
Frame 3
  Goblin moves to X=6
  Goblin health: 50
```

---

## 22. Practical Example 5: Modules That Extend the Engine

### Complete code

```csharp
EnemyRegistry registry = new();

List<IGameModule> modules = new()
{
    new CoreModule(),
    new DragonPackModule()
};

foreach (IGameModule module in modules)
{
    Console.WriteLine($"Loading module: {module.Name}");
    module.Register(registry);
}

foreach (string id in new[] { "goblin", "slime", "dragon", "ghost" })
{
    IEnemy? enemy = registry.Create(id);

    if (enemy == null)
    {
        Console.WriteLine($"Unknown enemy id: {id}");
    }
    else
    {
        Console.WriteLine($"{id}: {enemy.Describe()}");
    }
}

interface IEnemy
{
    string Describe();
}

interface IGameModule
{
    string Name { get; }
    void Register(EnemyRegistry registry);
}

class EnemyRegistry
{
    private readonly Dictionary<string, Func<IEnemy>> factories = new();

    public void Register(string id, Func<IEnemy> factory)
    {
        factories[id] = factory;
    }

    public IEnemy? Create(string id)
    {
        if (factories.TryGetValue(id, out Func<IEnemy>? factory))
        {
            return factory();
        }

        return null;
    }
}

class SimpleEnemy : IEnemy
{
    private readonly string name;
    private readonly int health;

    public SimpleEnemy(string name, int health)
    {
        this.name = name;
        this.health = health;
    }

    public string Describe() => $"{name} (Health {health})";
}

class Dragon : IEnemy
{
    public string Describe() => "Dragon (Health 200, breathes fire)";
}

class CoreModule : IGameModule
{
    public string Name => "Core";

    public void Register(EnemyRegistry registry)
    {
        registry.Register("goblin", () => new SimpleEnemy("Goblin", 30));
        registry.Register("slime", () => new SimpleEnemy("Slime", 15));
    }
}

class DragonPackModule : IGameModule
{
    public string Name => "Dragon Pack";

    public void Register(EnemyRegistry registry)
    {
        registry.Register("dragon", () => new Dragon());
    }
}
```

### Explanation

- `EnemyRegistry` stores a dictionary from an ID to a **factory**: a small function (`Func<IEnemy>`) that creates a new enemy when called.
- Each module implements `IGameModule` and adds its enemies to the registry in `Register`.
- The engine's loop only knows `IGameModule`, `EnemyRegistry`, and `IEnemy`. It never mentions `Dragon`.
- `Dragon Pack` adds a whole new enemy type, and no existing engine code changes. This is the Open/Closed Principle in action.
- `TryGetValue` avoids a crash for unknown IDs. `"ghost"` is handled by returning `null`.

In a larger project, modules can be loaded from separate files (DLLs) at start-up, which is how true mod support works. That technique is beyond this lesson.

### Expected output

```text
Loading module: Core
Loading module: Dragon Pack
goblin: Goblin (Health 30)
slime: Slime (Health 15)
dragon: Dragon (Health 200, breathes fire)
Unknown enemy id: ghost
```

---

## 23. Practical Example 6: Dependency Injection and Testing

### Complete code

```csharp
CombatSystem forcedCritical = new(new FixedRandom(0.05));
CombatSystem forcedNormal = new(new FixedRandom(0.95));
CombatSystem live = new(new SystemRandom());

Console.WriteLine($"Forced critical: {forcedCritical.CalculateDamage(20)}");
Console.WriteLine($"Forced normal:   {forcedNormal.CalculateDamage(20)}");
Console.WriteLine($"Live roll:       {live.CalculateDamage(20)}");

interface IRandomSource
{
    double NextDouble();
}

class SystemRandom : IRandomSource
{
    public double NextDouble() => Random.Shared.NextDouble();
}

class FixedRandom : IRandomSource
{
    private readonly double value;

    public FixedRandom(double value)
    {
        this.value = value;
    }

    public double NextDouble() => value;
}

class CombatSystem
{
    private const double CriticalChance = 0.2;
    private readonly IRandomSource random;

    public CombatSystem(IRandomSource random)
    {
        this.random = random;
    }

    public int CalculateDamage(int baseDamage)
    {
        bool isCritical = random.NextDouble() < CriticalChance;
        return isCritical ? baseDamage * 2 : baseDamage;
    }
}
```

### Explanation

- `CombatSystem` needs random numbers but does not create its own `Random`. It receives an `IRandomSource` through its constructor.
- In the real game, you pass `SystemRandom`, which produces unpredictable values.
- For testing, you pass `FixedRandom`, which always returns the same number. A value of `0.05` is below the 20% critical chance, so the hit is critical. A value of `0.95` is above it, so the hit is normal.
- Now you can test critical hits and normal hits every time, without waiting for luck.

### Expected output

```text
Forced critical: 40
Forced normal:   20
Live roll:       20
```

The last line is either `20` or `40`, because it uses real randomness.

---

## 24. Unity Version: Interactable Objects

In Unity, interfaces and components work together. Any object can become interactable by implementing one interface.

```csharp
using UnityEngine;

public interface IInteractable
{
    void Interact(GameObject user);
}

public class Door : MonoBehaviour, IInteractable
{
    private bool isOpen;

    public void Interact(GameObject user)
    {
        isOpen = !isOpen;
        Debug.Log(isOpen ? "Door opened." : "Door closed.");
    }
}

public class Chest : MonoBehaviour, IInteractable
{
    public void Interact(GameObject user)
    {
        Debug.Log("Chest opened. You found a potion.");
    }
}

public class PlayerInteractor : MonoBehaviour
{
    [SerializeField] private float range = 2f;

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.E))
        {
            TryInteract();
        }
    }

    private void TryInteract()
    {
        Collider[] hits = Physics.OverlapSphere(transform.position, range);

        foreach (Collider hit in hits)
        {
            if (hit.TryGetComponent(out IInteractable interactable))
            {
                interactable.Interact(gameObject);
                return;
            }
        }
    }
}
```

- Each script goes in its own file named after its class, inside `Assets/Scripts/`.
- `PlayerInteractor` works with doors, chests, levers, or anything new that implements `IInteractable`.
- `TryGetComponent` searches for a component of a given type or interface on the hit object.
- Unity does not show interface-typed fields in the Inspector, so searching with `TryGetComponent` is the usual approach.
- `Physics.OverlapSphere` allocates a new array each call. This is acceptable here because it only runs when the key is pressed. For per-frame checks, use the non-allocating version.

### Part 3 summary

You have now implemented:

1. A shared `IDamageable` interface for unrelated objects.
2. Swappable weapons with the Strategy pattern.
3. A health component that notifies subscribers with events.
4. A component-based game object.
5. A module system that adds enemies without editing the engine.
6. Dependency injection with a fake random source for testing.

**Progress: Part 3 of 4**

---

# PART 4 OF 4: KAI ASSESSMENT

## 25. Assessment Instructions

This assessment checks your understanding of interfaces, extensibility patterns, and the systems built in this lesson.

For programming questions, write complete code where requested and explain the important statements. An answer key is provided in Section 27.

## Section A: Multiple-Choice Questions

**1. What is an interface in C#?**

A. A class that can create objects.

B. A contract that declares members a type must provide.

C. A type of loop.

D. A window that displays graphics.

**2. Which keyword declares an interface?**

A. `class`

B. `contract`

C. `interface`

D. `implements`

**3. Which statement about C# classes is true?**

A. A class can inherit from many classes but implement one interface.

B. A class can inherit from one base class and implement many interfaces.

C. A class can neither inherit nor implement anything.

D. A class must always implement at least five interfaces.

**4. What does the Open/Closed Principle say?**

A. Classes should be closed for extension and open for modification.

B. A class should have only one method.

C. Software should be open for extension but closed for modification.

D. Every class must be abstract.

**5. What is dependency injection?**

A. Deleting unused objects.

B. Creating every dependency with `new` inside the class.

C. Storing dependencies only in static variables.

D. Supplying a class's dependencies from outside, usually through its constructor.

**6. What is the main benefit of using events?**

A. They make variables faster.

B. A publisher can notify subscribers without knowing who they are.

C. They remove the need for classes.

D. They automatically save the game.

**7. What does the Interface Segregation Principle recommend?**

A. Prefer small, focused interfaces over large ones.

B. Put every method in one large interface.

C. Never use interfaces.

D. Make all interfaces public.

**8. What does polymorphism allow?**

A. Variables to change their names.

B. Code to run without being compiled.

C. Different types to be used through a shared interface, each responding in its own way.

D. Memory to be freed automatically.

## Section B: Short-Answer Questions

**9.** What is extensibility, and why does it matter in game development?

**10.** Explain the difference between tight coupling and loose coupling, with a game example.

**11.** Why can a class implement many interfaces but inherit from only one base class? Why is this useful?

**12.** Explain the Strategy pattern and give two game examples.

**13.** Explain how dependency injection makes code easier to test.

**14.** Why must a subscriber unsubscribe from an event it no longer needs?

**15.** Explain the difference between composition and inheritance. Why is composition often preferred for game objects?

## Section C: Practical Programming

**16. Shared interface**

Write an interface `IHealable` with a `Heal(int amount)` method and a `Current` property. Implement it in two classes: `Player` and `Companion`. Reject negative healing, and cap health at a maximum of 100. Write a loop that heals a list of `IHealable` objects.

**17. Strategy pattern**

Create an interface `IMovementStyle` with a method `Move(int position)` that returns the new position. Implement `WalkStyle` (adds 1), `RunStyle` (adds 3), and `SneakStyle` (adds 1 only on even-numbered calls, using a counter). Write a `Character` class that can switch its movement style at run time.

**18. Events**

Create a `ScoreSystem` class with an event that fires when the score changes. Subscribe two handlers: one that prints a message for the HUD and one that prints "New high score!" if the score exceeds 100.

**19. Extending without modifying**

Explain how you would add a new enemy type called "Ghost" to the module system from Section 22 without editing the engine code. List the classes you would write and the steps you would take.

## Section D: Debugging and Reasoning

**20. This code does not compile. Explain why, and correct it.**

```csharp
interface IHealable
{
    int Current { get; }
    void Heal(int amount);
}

class Potion : IHealable
{
    public void Heal(int amount)
    {
        Console.WriteLine("Healed");
    }
}
```

**21. A game object is destroyed when its level ends, but its sound effect keeps playing every time the player takes damage. The sound object subscribed to the player's `HealthChanged` event when the level began. Explain the cause and the fix.**

**22. A developer writes one large interface for all enemies:**

```csharp
interface IEnemy
{
    void Walk();
    void Fly();
    void Shoot();
}
```

**A `Slime` can only crawl, so the developer fills `Fly()` and `Shoot()` with `throw new NotImplementedException();`. Explain what is wrong with this design and redesign it.**

## 26. Final Practical Project: Build a Mod-Friendly Mini Engine

Build a small game framework in C# or Unity that can be extended without editing its core.

### Project objective

Create a framework where new enemies, weapons, and reactions can be added through interfaces, events, and modules, and prove it by adding new content without changing existing engine files.

### Requirements

**1. Shared interface**

At least one capability interface (such as `IDamageable`) with at least three different implementations.

**2. Strategy pattern**

At least three swappable weapons or behaviors that can be changed at run time.

**3. Components**

A component-based game object with at least three components, where at least one component uses another.

**4. Events**

At least one event with at least two subscribers, and a demonstration of unsubscribing.

**5. Registry and modules**

An enemy registry with at least two modules. One module must be added **after** the engine is finished, to demonstrate extension without modification.

**6. Dependency injection**

At least one class that receives a dependency through its constructor, with a fake used for a predictable demonstration.

**7. Reporting**

Print or display what happens so each behavior can be observed.

### Recommended project structure

```text
ModFriendlyEngine/
│
├── Program.cs
├── Interfaces/
│   ├── IDamageable.cs
│   ├── IWeapon.cs
│   ├── IComponent.cs
│   ├── IEnemy.cs
│   └── IGameModule.cs
├── Engine/
│   ├── GameObject.cs
│   ├── EnemyRegistry.cs
│   └── CombatSystem.cs
├── Content/
│   ├── CoreModule.cs
│   └── ExpansionModule.cs
└── Tests/
    └── FixedRandom.cs
```

For Unity, place the scripts in `Assets/Scripts/` and attach them to GameObjects.

### Suggested implementation stages

1. Define the interfaces.
2. Build the engine classes that use only interfaces.
3. Implement the core content and register it in a module.
4. Add weapons and test swapping them.
5. Add events and subscribers.
6. Add the injected dependency and its fake.
7. Write the expansion module last, and confirm that no engine file changed.

### What to submit to Kai

- Your source code.
- A screenshot or recording of your program running.
- A list of the files you added for the expansion module, showing that engine files were not edited.
- A short explanation of how your design follows the Open/Closed Principle.
- Your assessment answers.
- A description of one bug you encountered and how you corrected it.

### Evaluation criteria

| Area | Evaluation |
|---|---|
| Interface design | Small, focused, named after capabilities |
| Polymorphism | Engine code depends on interfaces, not concrete types |
| Patterns | Correct use of Strategy, events, and components |
| Extensibility | Expansion module added without editing engine code |
| Dependency injection | Dependency supplied through the constructor |
| Event handling | Subscribers added and removed correctly |
| Performance awareness | Avoids unnecessary allocations and boxing |
| Testing | Demonstrates each behavior and a predictable test |

---

## 27. Answer Key

**Multiple choice:** 1-B, 2-C, 3-B, 4-C, 5-D, 6-B, 7-A, 8-C.

**9.** Extensibility is the ability to add features without rewriting existing code. It matters because games grow throughout development, and each edit to working code risks introducing bugs. It also allows teammates and modders to add content safely.

**10.** Tight coupling means one piece of code depends on specific concrete classes (a `Fighter` that creates its own `Sword`), so changes ripple. Loose coupling means it depends only on an interface (a `Fighter` that holds an `IWeapon`), so implementations can be swapped freely.

**11.** Inheriting from several classes can cause ambiguity about which inherited data and code to use, so C# allows only one base class. Interfaces carry no state, so a class can safely implement many of them. This is useful for describing several independent abilities (`IDamageable`, `IMovable`, `IResettable`).

**12.** The Strategy pattern places interchangeable algorithms behind an interface so the user of the interface can swap them at run time. Examples: weapons that calculate damage differently; enemy movement styles (patrol, chase); difficulty rules.

**13.** With injection, a test can supply a fake dependency with predictable behavior (such as a random source that always returns the same value). Without it, the class creates its own real dependency and tests cannot control it.

**14.** The publisher holds a reference to every subscriber. If a subscriber is not removed with `-=`, the garbage collector cannot free it, and its handler may still run after the object should be gone, causing leaks and bugs.

**15.** Inheritance models "is-a" relationships and shares code through a base class. Composition builds an object from parts it "has." Composition is preferred for game objects because abilities combine freely (shooting, flying, exploding) without a rapidly growing class tree, and new abilities are added as new components.

**16.** A correct answer has: an `IHealable` interface with `int Current { get; }` and `void Heal(int amount)`; both classes reject `amount < 0`, use `Math.Min(100, Current + amount)`, and a `foreach (IHealable h in list) h.Heal(...)` loop.

**17.** A correct answer has: `interface IMovementStyle { int Move(int position); }`; `WalkStyle` returns `position + 1`; `RunStyle` returns `position + 3`; `SneakStyle` increments a counter and adds 1 only when the counter is even; `Character` has a settable `IMovementStyle` property and a method that calls it.

**18.** A correct answer has: `public event Action<int>? ScoreChanged;`, a method that changes the score and calls `ScoreChanged?.Invoke(Score)`, and two handlers added with `+=` (one printing the HUD message, one printing "New high score!" when the score is above 100).

**19.** Write a `Ghost` class that implements `IEnemy` (with its own `Describe()`), and a new `GhostPackModule` class that implements `IGameModule`. In its `Register` method, call `registry.Register("ghost", () => new Ghost());`. Add the module to the list of modules loaded at start-up. The engine, registry, and existing modules do not change.

**20.** `Potion` does not implement the `Current` property, and a class must provide every member of an interface (compiler error CS0535). Fix:

```csharp
class Potion : IHealable
{
    public int Current { get; private set; } = 0;

    public void Heal(int amount)
    {
        Current += amount;
        Console.WriteLine("Healed");
    }
}
```

**21.** The sound object subscribed to the event but never unsubscribed. The player (publisher) still holds a reference to it, so it stays alive and its handler keeps running. Fix: unsubscribe with `-=` when the level ends (or when the object is destroyed), for example in `Dispose` or `OnDestroy`.

**22.** The interface is too large and forces implementers to provide abilities they do not have. `NotImplementedException` methods are a sign of this and cause run-time crashes if called. This violates the Interface Segregation Principle (and can break Liskov Substitution, since a `Slime` is not safely usable wherever `IEnemy` is expected). Redesign with small interfaces:

```csharp
interface IWalker  { void Walk(); }
interface IFlyer   { void Fly(); }
interface IShooter { void Shoot(); }

class Slime : IWalker
{
    public void Walk() { Console.WriteLine("The slime crawls."); }
}

class Archer : IWalker, IShooter
{
    public void Walk() { Console.WriteLine("The archer walks."); }
    public void Shoot() { Console.WriteLine("The archer fires an arrow."); }
}
```

---

## 28. Lesson Completion Checklist

Before completing this lesson, make sure you can:

- [ ] Define extensibility and explain why games need it.
- [ ] Explain what an interface is and declare one.
- [ ] Implement one or several interfaces in a class.
- [ ] Use polymorphism to work with different types through an interface.
- [ ] Compare interfaces, abstract classes, and base classes.
- [ ] Explain tight and loose coupling.
- [ ] Explain why composition is often better than deep inheritance.
- [ ] Design small, focused interfaces.
- [ ] Explain the SOLID principles covered in this lesson.
- [ ] Implement the Strategy pattern.
- [ ] Use constructor dependency injection and fakes for testing.
- [ ] Use events, and unsubscribe correctly.
- [ ] Build a component-based game object.
- [ ] Build a registry and modules that extend an engine without modifying it.
- [ ] Explain how to change a contract safely.
- [ ] Describe the trade-offs of abstraction, including boxing.
- [ ] Build a mod-friendly mini engine in C# or Unity.

# LESSON COMPLETE

**Game Engine: Interfaces and Extensibility**

You have learned how interfaces let different objects share abilities, how patterns such as Strategy, events, components, and registries keep a game easy to change, and how to add new content without rewriting what already works.

The important idea is that a flexible game is built on contracts. When the engine depends on what an object can do instead of what it is, new