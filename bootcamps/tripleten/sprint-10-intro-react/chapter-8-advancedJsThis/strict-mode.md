# Concept: JavaScript Strict Mode (`"use strict"`)

## What It Is

Strict mode is a special JavaScript setting that makes the engine enforce stricter rules and throw errors for unsafe or sloppy code.

## Why It Exists

Old JavaScript allowed bad practices like:

- using variables without declaring them
- silent errors that didn’t stop execution
- unsafe behavior that caused hidden bugs

Strict mode fixes this by:

- turning silent bugs into real errors
- preventing unsafe actions
- making debugging faster and more reliable

## When To Use

- In all modern JavaScript development
- When writing production-level code
- When debugging issues
- Automatically enabled in React and ES modules

## Mental Model

Strict mode =
👉 JavaScript enforces rules instead of allowing mistakes

Normal mode:
→ allows sloppy behavior

Strict mode:
→ stops execution and forces correctness

---

## Pattern

    "use strict";

    // your code here

Inside a function:

    function example() {
      "use strict";
    }

---

## Example

    "use strict";

    greeting = "Hello"; // ❌ ReferenceError

Correct version:

    "use strict";

    let greeting = "Hello"; // ✅ works

---

## Line-by-Line

- line 1:
  `"use strict";`
  → enables strict mode

- line 3:
  `greeting = "Hello";`
  → tries to assign a variable without declaring it

- result:
  → strict mode throws a ReferenceError

- correct version:
  `let greeting = "Hello";`
  → properly declares the variable

---

## Common Mistakes

- forgetting `let`, `const`, or `var`
- assuming JavaScript auto-creates variables
- using duplicate parameter names
- trying to modify restricted values

---

## What Breaks If Done Wrong

- ReferenceError when using undeclared variables
- SyntaxError for invalid patterns
- execution stops instead of silently failing

Example:

    "use strict";

    function test(a, a) { // ❌ SyntaxError
      console.log(a);
    }

---

## Real Use Case

    "use strict";

    function fetchData() {
      data = fetch("api"); // ❌ error immediately
    }

Without strict mode:
→ bug might go unnoticed

With strict mode:
→ error is caught instantly

---

## Mini Practice

    "use strict";

    // TASK:
    // Fix this code so it works in strict mode

    function sayHi() {
      message = "Hello";
      console.log(message);
    }

Correct solution:

    "use strict";

    function sayHi() {
      let message = "Hello";
      console.log(message);
    }

---

## Key Takeaway

Strict mode forces JavaScript to catch errors early, enforce good practices, and prevent unsafe behavior.
