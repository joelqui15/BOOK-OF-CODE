# Concept: Calling Object Methods (Implicit `this` Binding)

## What It Is

Implicit binding happens when a function is called as a method of an object.  
In this case, `this` refers to the object before the dot.

## Why It Exists

JavaScript needs a way for functions to work with object data.

Without implicit binding:

- methods wouldn’t know which object they belong to
- `this` would not correctly reference object properties

Implicit binding solves:

- connecting functions to objects
- allowing methods to access object data using `this`

## When To Use

- when defining methods inside objects
- when working with object data (user, cart, counter, etc.)
- when calling functions using dot notation (`object.method()`)

## Mental Model

Implicit binding =
👉 “Whatever is to the LEFT of the dot is `this`”

Example:

    user.sayHi()

👉 `this` = `user`

---

## Pattern

    const obj = {
      key: value,
      method() {
        console.log(this.key);
      }
    };

    obj.method(); // implicit binding

---

## Example

    const counter = {
      count: 0,
      increment() {
        this.count++;
        console.log("Count:", this.count);
      }
    };

    counter.increment(); // Count: 1

---

## Line-by-Line

- line 1:
  creates an object `counter`

- line 2:
  `count` property initialized to 0

- line 3:
  defines method `increment`

- line 4:
  `this.count++` increments the `count` property of the object

- line 5:
  logs updated count

- line 8:
  method is called using dot notation

- result:
  `this` refers to `counter`

---

## Common Mistakes

- forgetting to call method with the object
- assigning method to a variable (loses context)
- using `this` inside standalone function instead of method
- assuming `this` is tied to where function is written

---

## What Breaks If Done Wrong

- `this` becomes `undefined` (strict mode)
- or `window` (non-strict mode)
- accessing `this.property` fails
- logic breaks because wrong object is referenced

Example bug:

    const user = {
      name: "Joel",
      greet() {
        console.log(this.name);
      }
    };

    const fn = user.greet;
    fn(); // ❌ undefined

---

## Real Use Case

- updating object state (cart, counter, user profile)
- methods inside classes
- handling UI logic tied to objects
- managing component-like structures

---

## Mini Practice

    // TASK:
    // Fix this so it logs "Joel"

    const user = {
      name: "Joel",
      greet() {
        console.log(this.name);
      }
    };

    const greetFn = user.greet;
    greetFn();

Solution:

    const user = {
      name: "Joel",
      greet() {
        console.log(this.name);
      }
    };

    user.greet(); // ✅ correct call

---

## Key Takeaway

When a function is called as an object method, `this` refers to the object before the dot.

---

## Additional Concept: Loss of Context

### What It Is

Loss of context happens when a method is taken away from its object and called independently.

### Why It Happens

Because implicit binding depends on the call site (object.method).  
If you remove the object, `this` falls back to default binding.

### Example

    const user = {
      username: "Peter",
      auth() {
        console.log(this.username + " has logged in");
      }
    };

    const adminAuth = user.auth;
    adminAuth(); // ❌ undefined has logged in

### What Breaks

- `this` no longer refers to the object
- accessing properties fails

### Fix (Preserve Context)

    const adminAuth = user.auth.bind(user);
    adminAuth(); // ✅ Peter has logged in

---

## Additional Concept: Loss of Context in Callbacks

### What It Is

When passing a method as a callback, it loses its original object context.

### Example

    const sendButton = {
      buttonName: "Send button",
      onClick() {
        console.log("I am the " + this.buttonName);
      }
    };

    const button = document.querySelector(".btn");

    button.addEventListener("click", sendButton.onClick);
    // ❌ "I am the undefined"

### Why It Breaks

- `addEventListener` calls the function itself
- not as a method of `sendButton`
- so `this` refers to the DOM element instead

### Fix

    button.addEventListener("click", function () {
      sendButton.onClick();
    });

### Key Takeaway

If a method is not called through its object, it loses its `this` context.
