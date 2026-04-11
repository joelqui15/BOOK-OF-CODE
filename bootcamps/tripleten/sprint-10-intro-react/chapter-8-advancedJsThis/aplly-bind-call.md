# Concept: Explicit `this` Binding (`call`, `apply`, `bind`)

## What It Is

Explicit binding allows you to manually set what `this` refers to when calling a function using `call`, `apply`, or `bind`.

## Why It Exists

Sometimes functions lose their context (`this`) or need to be reused with different objects.

Without explicit binding:

- `this` may become `undefined` or incorrect
- functions cannot easily be reused across different objects

Explicit binding solves:

- controlling exactly what `this` is
- fixing lost context issues
- enabling flexible, reusable functions

## When To Use

- when a function loses its context
- when passing methods as callbacks
- when reusing functions with different objects
- when working with event handlers

## Mental Model

Explicit binding =
👉 “I decide what `this` is”

Unlike implicit binding (object.method), you manually set it.

---

## Pattern

    function fn() {
      console.log(this);
    }

    fn.call(obj);     // calls immediately
    fn.apply(obj);    // calls immediately (arguments as array)
    const newFn = fn.bind(obj); // returns new function

---

## Example

    const car = {
      registrationNumber: "O287AE",
      brand: "Tesla"
    };

    function displayDetails(greeting, name) {
      console.log(greeting + " " + name);
      console.log("Car info: " + this.registrationNumber + " " + this.brand);
    }

    displayDetails.call(car, "Hello", "Matt");

    displayDetails.apply(car, ["Hello", "Matt"]);

    const boundFn = displayDetails.bind(car, "Hello", "Matt");
    boundFn();

---

## Line-by-Line

- line 1:
  creates object `car`

- line 6:
  defines function that uses `this`

- line 7:
  logs greeting and name

- line 8:
  logs car details using `this`

- line 11:
  `call()` invokes function immediately and sets `this` to `car`

- line 13:
  `apply()` invokes function immediately and sets `this` to `car`
  arguments are passed as an array

- line 15:
  `bind()` does NOT call the function
  it returns a new function with `this` permanently set

- line 16:
  calling `boundFn()` executes with `this = car`

---

## Common Mistakes

- thinking `bind()` runs the function immediately
- confusing `call` vs `apply`
- forgetting arguments format (`apply` uses array)
- not using bind when passing functions as callbacks

---

## What Breaks If Done Wrong

- `this` becomes undefined or incorrect
- function uses wrong object data
- callback functions lose context
- unexpected output or errors

Example bug:

    const user = {
      name: "Joel"
    };

    function greet() {
      console.log(this.name);
    }

    const fn = greet;
    fn(); // ❌ undefined

---

## Real Use Case

- fixing `this` in event handlers
- reusing functions across objects
- working with APIs and callbacks
- controlling execution context in complex apps

---

## Mini Practice

    // TASK:
    // Fix this so it logs "Joel"

    const user = {
      name: "Joel"
    };

    function greet() {
      console.log(this.name);
    }

    const greetFn = greet;
    greetFn();

Solution:

    const greetFn = greet.bind(user);
    greetFn(); // ✅ Joel

---

## Key Takeaway

Explicit binding lets you manually control what `this` refers to using call, apply, or bind.

---

## Additional Concept: Difference Between `call`, `apply`, and `bind`

### What It Is

These three methods all set `this`, but behave differently.

### Differences

- call → runs immediately, arguments passed normally
- apply → runs immediately, arguments passed as array
- bind → does NOT run immediately, returns new function

### Example

    fn.call(obj, a, b);
    fn.apply(obj, [a, b]);
    const newFn = fn.bind(obj);

### Key Takeaway

Use `call`/`apply` for immediate execution, and `bind` when you need a reusable function with fixed `this`.
