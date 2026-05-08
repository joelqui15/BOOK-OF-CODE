# Concept: Node.js Modules (require & module.exports)

## What It Is

A module in Node.js is a separate file that contains code (functions, variables, logic) which can be exported and reused in other files.

## Why It Exists

Without modules, all code would live in one file, making it hard to manage, reuse, and scale. Modules allow you to organize code into smaller, reusable pieces.

## When To Use

- Splitting large codebases into smaller files
- Reusing logic across multiple files
- Organizing backend structure (routes, controllers, utils)

## Mental Model

Each file = its own box  
Exports = what you allow others to take from the box  
require = how you open another box

## Pattern

    // export (inside file)
    module.exports = something

    // import (in another file)
    const something = require("./file")

## Example

    // utils.js
    const greet = () => {
      console.log("Hello")
    }

    module.exports = greet

    // index.js
    const greet = require("./utils")

    greet()

## Line-by-Line

- line 1: Create a function inside utils file
- line 2: Export the function
- line 3: Import the function into another file
- line 4: Call the function

## Common Mistakes

- Forgetting to export
- Wrong file path
- Missing "./" for local files
- Trying to access something not exported

## What Breaks If Done Wrong

- require returns undefined
- Functions cannot be called
- Runtime errors

## Real Use Case

- Utility functions (formatting, validation)
- Database logic
- API route handlers

## Mini Practice

    // math.js
    const add = (a, b) => a + b
    module.exports = add

    // index.js
    const add = require("./math")
    console.log(add(2, 3))

## Key Takeaway

Modules let you split and reuse code — export what you need, require where you need it.

# Additional Concept: Importing Modules (require paths)

## What It Is

The require() function loads modules into your file using file paths or module names.

## Why It Exists

Your app needs a way to access code defined in other files or installed packages.

## When To Use

- Importing your own files
- Importing Node built-in modules
- Importing npm packages

## Mental Model

require = “go get that file/code for me”

## Pattern

    const module = require("module-name")      // built-in or npm
    const local = require("./file")            // same folder
    const parent = require("../file")          // parent folder

## Example

    const http = require("http")
    const utils = require("./utils")
    const helpers = require("../helpers")

## Line-by-Line

- line 1: Import built-in module
- line 2: Import local file
- line 3: Import file from parent directory

## Common Mistakes

- Missing "./" for local files
- Wrong relative path
- Case sensitivity issues

## What Breaks If Done Wrong

- Module not found error
- App crashes at startup

## Real Use Case

- Importing Express
- Importing config files
- Importing helper functions

## Mini Practice

    const fs = require("fs")

## Key Takeaway

Paths matter — "./" means current folder, "../" means go up one level.

# Additional Concept: Exporting Multiple Values

## What It Is

You can export multiple variables/functions using the module.exports object.

## Why It Exists

You often need to share more than one piece of functionality from a module.

## When To Use

- Exporting multiple functions
- Sharing config values
- Creating utility libraries

## Mental Model

module.exports = a container of everything you want to share

## Pattern

    const a = 1
    const b = 2

    module.exports = {
      a,
      b
    }

## Example

    // utils.js
    const greet = () => "Hi"
    const number = 42

    module.exports = {
      greet,
      number
    }

    // index.js
    const utils = require("./utils")

    console.log(utils.greet())
    console.log(utils.number)

## Line-by-Line

- line 1: Define function
- line 2: Define variable
- line 3: Export both inside object
- line 4: Import module
- line 5: Access function
- line 6: Access variable

## Common Mistakes

- Overwriting module.exports accidentally
- Forgetting to include all values in object
- Incorrect property access

## What Breaks If Done Wrong

- Missing values in import
- Undefined properties

## Real Use Case

- Utility libraries
- Config files
- Shared constants

## Mini Practice

    module.exports = {
      x: 10,
      y: 20
    }

## Key Takeaway

Use an object to export multiple values cleanly.

# Additional Concept: Destructuring Imports

## What It Is

You can extract specific values from a module using destructuring instead of accessing them via object properties.

## Why It Exists

Cleaner syntax and easier access to exported values.

## When To Use

- When importing specific functions or variables
- When working with multiple exports

## Mental Model

Instead of grabbing the whole box, grab only what you need

## Pattern

    const { a, b } = require("./file")

## Example

    const { greet, number } = require("./utils")

    console.log(greet())
    console.log(number)

## Line-by-Line

- line 1: Import only needed values
- line 2: Call function
- line 3: Log variable

## Common Mistakes

- Misspelling export names
- Destructuring non-existent values

## What Breaks If Done Wrong

- Undefined variables
- Runtime errors

## Real Use Case

- Cleaner imports in large apps
- Avoiding repetitive object access

## Mini Practice

    const { readFile } = require("fs")

## Key Takeaway

Destructuring keeps imports clean and focused.

# Additional Concept: ES Modules (import / export)

## What It Is

ES Modules are a modern way of importing and exporting using import and export instead of require.

## Why It Exists

Standardized JavaScript module system used in browsers and modern Node.js apps.

## When To Use

- Modern projects
- Frontend frameworks (React, etc.)
- When using "type": "module" or .mjs files

## Mental Model

require/export = old system  
import/export = modern system

## Pattern

    export const value = 1

    import { value } from "./file.js"

## Example

    // test.mjs
    export const greet = (name) => {
      return "Hello " + name
    }

    // index.mjs
    import { greet } from "./test.mjs"

    console.log(greet("Joel"))

## Line-by-Line

- line 1: Export function
- line 2: Import function
- line 3: Call function

## Common Mistakes

- Forgetting file extensions (.js/.mjs)
- Not enabling module mode
- Mixing require and import

## What Breaks If Done Wrong

- Syntax errors
- Import failures
- Module not recognized

## Real Use Case

- React apps
- Modern Node APIs
- Frontend + backend shared code

## Mini Practice

    export const x = 5

## Key Takeaway

ES Modules are the modern standard for structuring JavaScript code.
