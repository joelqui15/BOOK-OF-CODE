# Concept: Default `this` Binding (Simple Function Call)

## What It Is

Default `this` binding happens when a function is called by itself (not attached to an object).  
In this case, `this` is determined by the environment and strict mode.

## Why It Exists

JavaScript needs a fallback rule for `this` when no object is calling the function.

Without this rule:

- `this` would be undefined in all cases
- functions would break when used standalone

Default binding provides:

- a consistent fallback behavior
- predictable execution depending on mode

## When To Use

- when calling standalone functions
- when writing utility/helper functions
- when debugging `this` issues
- when working with strict mode vs non-strict mode

## Mental Model

Default binding =
👉 “No one owns this function call”

So JavaScript decides:

- strict mode → `this = undefined`
- non-strict mode → `this = window`

---

## Pattern

    function myFunction() {
      console.log(this);
    }

    myFunction(); // default binding

---

## Example

    function globalFunction() {
      console.log(this);
    }

    globalFunction();

Strict mode version:

    "use strict";

    function strictFunction() {
      console.log(this);
    }

    strictFunction();

---

## Line-by-Line

- line 1:
  defines a standalone function

- line 2:
  logs `this`

- line 5:
  function is called normally (not attached to an object)

- result (non-strict mode):
  `this` refers to the global object (`window` in browser)

- strict mode:
  `this` is `undefined`

---

## Common Mistakes

- assuming `this` always refers to an object
- forgetting strict mode changes behavior
- using `this` inside standalone functions expecting data
- not realizing environment affects `this`

---

## What Breaks If Done Wrong

- `this` becomes `undefined` in strict mode
- accessing properties like `this.name` throws errors
- unexpected bugs in reused functions

Example bug:

    "use strict";

    function test() {
      console.log(this.name); // ❌ TypeError
    }

    test();

---

## Real Use Case

- utility/helper functions
- global scripts
- debugging unexpected `this` values
- functions passed around without context

---

## Mini Practice

    // TASK:
    // Predict the output

    function show() {
      console.log(this);
    }

    show();

Answer:

- in non-strict mode → `window`
- in strict mode → `undefined`

---

## Key Takeaway

When a function is called alone, `this` defaults to `window` (non-strict) or `undefined` (strict mode).
