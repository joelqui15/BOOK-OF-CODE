# Concept: `new` Operator (Constructor `this` Binding)

## What It Is

The `new` operator is used to create a new object from a function, and it sets `this` inside that function to the newly created object.

## Why It Exists

JavaScript needs a way to create multiple objects with the same structure.

Without `new`:

- you’d have to manually create objects every time
- functions wouldn’t automatically connect to new objects
- `this` wouldn’t refer to a new instance

The `new` operator solves:

- object creation
- automatic `this` binding
- reusable object blueprints (constructors)

## When To Use

- when creating multiple similar objects (users, songs, cars)
- when using constructor functions
- when working with classes (under the hood uses `new`)

## Mental Model

`new` =
👉 “Create a new object and make `this` point to it”

Steps JavaScript performs:

1. creates a new empty object
2. sets `this` to that object
3. runs the function
4. returns the object (unless something else is returned)

---

## Pattern

    function Constructor(param) {
      this.key = param;
    }

    const instance = new Constructor(value);

---

## Example

    function createSong(title, artist) {
      this.title = title;
      this.artist = artist;
      this.isLiked = false;
    }

    const song = new createSong("Circles", "Mac Miller");

    console.log(song);
    // { title: "Circles", artist: "Mac Miller", isLiked: false }

---

## Line-by-Line

- line 1:
  defines constructor function

- line 2:
  assigns `title` to the new object using `this`

- line 3:
  assigns `artist` to the new object

- line 4:
  sets default value `isLiked`

- line 7:
  `new` creates a new object

- line 7:
  `this` inside function now refers to that new object

- line 9:
  logs the created object

---

## Common Mistakes

- forgetting to use `new`
- returning your own object manually
- misunderstanding how `this` works inside constructors
- thinking `new` is optional

---

## What Breaks If Done Wrong

- `this` becomes `undefined` (strict mode)
- or `window` (non-strict mode)
- properties don’t attach to a new object
- unexpected return values

Example bug:

    function Person(name) {
      this.name = name;
    }

    const p = Person("Joel"); // ❌ forgot new

    console.log(p); // undefined

---

## Real Use Case

- creating users, products, or data models
- building reusable object blueprints
- instantiating classes in React or other frameworks
- working with OOP-style JavaScript

---

## Mini Practice

    // TASK:
    // Fix this so it correctly creates a user object

    function User(name) {
      this.name = name;
    }

    const user = User("Joel");

Solution:

    const user = new User("Joel"); // ✅ correct

---

## Key Takeaway

The `new` operator creates a new object and binds `this` to it inside the function.

---

## Additional Concept: Returning from Constructors

### What It Is

If a constructor returns a non-object value, it is ignored.  
If it returns an object, that object replaces the one created by `new`.

### Example

    function Plane(model) {
      this.model = model;

      return { model: "TU-134" };
    }

    const airbus = new Plane("Airbus");

    console.log(airbus); // { model: "TU-134" }

### Why This Matters

- returning objects overrides normal behavior
- can lead to unexpected bugs

### Key Takeaway

Avoid returning objects from constructors unless you fully understand the consequences.

---

## Additional Concept: `new` vs `call`, `apply`, `bind`

### What It Is

The `new` operator does NOT work the same way as `call`, `apply`, or `bind`.

### Key Difference

- `new` creates a new object and binds `this`
- `call`, `apply`, `bind` only change `this` — they don’t create objects

### Example

    function Driver(name) {
      this.name = name;
    }

    const driver = new Driver("Henry"); // ✅ works

    // ❌ incorrect usage
    // Driver.call(window, "Henry"); (no new object created)

### Key Takeaway

Use `new` for object creation, not `call`, `apply`, or `bind`.
