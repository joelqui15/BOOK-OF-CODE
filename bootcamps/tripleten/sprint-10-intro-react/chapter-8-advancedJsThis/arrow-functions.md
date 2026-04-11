# Concept: Arrow Functions and `this`

## What It Is

Arrow functions are a special type of function in JavaScript that do NOT have their own `this`.  
Instead, they inherit `this` from the surrounding (enclosing) scope.

## Why It Exists

Regular functions determine `this` based on how they are called, which can cause confusion and bugs.

Arrow functions solve this by:

- locking `this` to the surrounding context
- preventing accidental loss of context
- making callbacks easier to write

## When To Use

- when you want to preserve `this` from an outer scope
- when writing callbacks (map, event handlers, etc.)
- when you do NOT need a dynamic `this`

Avoid arrow functions:

- when defining object methods that rely on `this`
- when using constructors (`new`)
- when you need dynamic context

## Mental Model

Arrow function `this` =
👉 “I don’t decide `this`, I inherit it”

Regular function:
→ “Who called me?”

Arrow function:
→ “Where was I created?”

---

## Pattern

    const fn = () => {
      console.log(this);
    };

---

## Example

    const obj = {
      name: "Joel",
      method: () => {
        console.log(this.name);
      }
    };

    obj.method(); // ❌ undefined

Correct approach:

    const obj = {
      name: "Joel",
      method() {
        console.log(this.name);
      }
    };

    obj.method(); // ✅ Joel

---

## Line-by-Line

- line 1:
  creates object `obj`

- line 2:
  defines property `name`

- line 3:
  arrow function assigned as method

- line 4:
  tries to access `this.name`

- result:
  `this` is NOT `obj`, it is inherited from outer scope

- correct version:
  regular function correctly binds `this` to object

---

## Common Mistakes

- using arrow functions as object methods
- expecting `this` to refer to the object
- trying to use arrow functions with `new`
- assuming `call`, `apply`, or `bind` will change `this`

---

## What Breaks If Done Wrong

- `this` becomes undefined or global object
- accessing `this.property` fails
- incorrect data is used
- unexpected behavior in methods

Example bug:

    const obj = {
      value: 10,
      getValue: () => this.value
    };

    console.log(obj.getValue()); // ❌ undefined

---

## Real Use Case

- array methods (`map`, `filter`)
- event callbacks
- preserving `this` inside nested functions
- working inside class/constructor scopes

---

## Mini Practice

    // TASK:
    // Fix this so it logs "Joel"

    function User(name) {
      this.name = name;

      this.sayName = () => {
        console.log(this.name);
      };
    }

    const user = new User("Joel");
    const fn = user.sayName;
    fn();

Answer:

- this already works correctly because arrow function preserves `this`

---

## Key Takeaway

Arrow functions inherit `this` from their surrounding scope and do NOT create their own.

---

## Additional Concept: Arrow Functions Ignore `call`, `apply`, and `bind`

### What It Is

Arrow functions cannot have their `this` changed using `call`, `apply`, or `bind`.

### Example

    function Person() {
      this.name = "Front-end Engineer";

      this.print = () => {
        console.log(this.name);
      };
    }

    const obj = {
      name: "Back-end Engineer"
    };

    const p = new Person();

    p.print.call(obj); // still "Front-end Engineer"

### Why It Matters

- explicit binding methods don’t work on arrow functions
- `this` is permanently tied to where the arrow function was created

### Key Takeaway

Arrow functions lock `this` and cannot be overridden by call, apply, or bind.

---

## Additional Concept: Arrow Functions Cannot Be Used with `new`

### What It Is

Arrow functions cannot be used as constructors.

### Example

    const ArrowFn = () => {
      console.log(this);
    };

    const obj = new ArrowFn(); // ❌ TypeError

### Why It Breaks

- arrow functions do not have their own `this`
- constructors require a new `this` object

### Key Takeaway

Use regular functions (or classes) when you need to create objects with `new`.
