# Concept: Dynamic Routing in Express (Route Parameters)

## What It Is

Dynamic routing allows your server to handle URLs with variable values (like IDs) using route parameters (e.g. /users/:id).

## Why It Exists

You cannot create a separate route for every possible user, post, or item. Dynamic routes let one route handle many variations of a URL.

## When To Use

- Fetching a specific resource (/users/123)
- Accessing nested data (/posts/45/comments/2)
- Building REST APIs

## Mental Model

Dynamic route = template for URLs

/users/:id → matches:
/users/1  
/users/42  
/users/joel

## Pattern

    app.get("/path/:param", (req, res) => {
      const value = req.params.param
    })

## Example

    app.get("/users/:id", (req, res) => {
      res.send(req.params)
    })

## Line-by-Line

- line 1: Define dynamic route with parameter
- line 2: Access parameter from req.params
- line 3: Send it back as response

## Common Mistakes

- Forgetting ":" before param name
- Using req.query instead of req.params
- Not validating param existence

## What Breaks If Done Wrong

- Route doesn’t match
- Undefined values
- Incorrect data returned

## Real Use Case

- /users/123 → get user by ID
- /products/55 → get product details

## Mini Practice

    app.get("/items/:id", (req, res) => {
      console.log(req.params.id)
    })

## Key Takeaway

Dynamic routes let one route handle many URLs using parameters.

# Additional Concept: req.params (Accessing Route Parameters)

## What It Is

req.params is an object that contains all dynamic route parameters extracted from the URL.

## Why It Exists

You need access to the dynamic values in the URL to fetch or process the correct data.

## When To Use

- Extracting IDs
- Accessing nested route data
- Building API endpoints

## Mental Model

req.params = values pulled from the URL path

## Pattern

    /users/:id → req.params.id

## Example

    app.get("/users/:id", (req, res) => {
      const { id } = req.params
      res.send(`User ID is ${id}`)
    })

## Line-by-Line

- line 1: Define route with parameter
- line 2: Extract id from params
- line 3: Send response using id

## Common Mistakes

- Misspelling param names
- Not destructuring correctly
- Expecting numbers (they are strings)

## What Breaks If Done Wrong

- Undefined values
- Incorrect logic

## Real Use Case

- Fetching user by ID
- Retrieving specific database records

## Mini Practice

    const { id } = req.params
    console.log(id)

## Key Takeaway

req.params gives you access to dynamic parts of the URL.

# Additional Concept: Nested Route Parameters

## What It Is

Routes can contain multiple dynamic parameters for deeper URL structures.

## Why It Exists

Complex apps often require nested resources (users → albums → photos).

## When To Use

- Nested APIs
- Hierarchical data
- Complex routes

## Mental Model

URL = layered structure of data

/users/:id/albums/:album/photos/:photo

## Pattern

    app.get("/a/:x/b/:y", (req, res) => {
      const { x, y } = req.params
    })

## Example

    app.get("/users/:id/albums/:album/photos/:photo", (req, res) => {
      const { id, album, photo } = req.params
      res.send({ id, album, photo })
    })

## Line-by-Line

- line 1: Define nested route
- line 2: Extract all parameters
- line 3: Send them back

## Common Mistakes

- Forgetting param names
- Mixing order of params

## What Breaks If Done Wrong

- Incorrect mapping of values
- Wrong data returned

## Real Use Case

- Social media (user → post → comment)
- File systems (folder → file)

## Mini Practice

    app.get("/a/:x/b/:y", (req, res) => {
      console.log(req.params)
    })

## Key Takeaway

You can chain multiple parameters for complex routes.

# Additional Concept: Modular Routing with express.Router()

## What It Is

express.Router() allows you to split routing logic into separate files instead of keeping everything in index.js.

## Why It Exists

As apps grow, having all routes in one file becomes messy and hard to manage.

## When To Use

- Medium to large apps
- Organizing routes by feature
- Keeping code clean and maintainable

## Mental Model

Router = mini app inside your app

## Pattern

    const router = require("express").Router()

    router.get("/route", handler)

    module.exports = router

## Example

    // routes.js
    const router = require("express").Router()

    router.get("/users/:id", (req, res) => {
      res.send(req.params.id)
    })

    module.exports = router

    // index.js
    const express = require("express")
    const router = require("./routes")

    const app = express()

    app.use("/", router)

## Line-by-Line

- routes.js line 1: Create router instance
- line 2: Define route
- line 3: Export router
- index.js line 1: Import express
- line 2: Import router
- line 3: Create app
- line 4: Attach router
- line 5: Routes now active

## Common Mistakes

- Forgetting to export router
- Not using app.use()
- Mixing app and router incorrectly

## What Breaks If Done Wrong

- Routes don’t work
- Errors due to undefined router

## Real Use Case

- Separate files for users, products, auth
- Clean backend architecture

## Mini Practice

    const router = require("express").Router()

## Key Takeaway

Routers help you organize and scale your backend cleanly.

# Additional Concept: Using app.use() to Mount Routers

## What It Is

app.use() attaches a router to a base path in your application.

## Why It Exists

It allows grouping related routes under a common prefix.

## When To Use

- Mounting routers (/api, /users)
- Structuring APIs

## Mental Model

app.use = “attach this router at this path”

## Pattern

    app.use("/base", router)

## Example

    app.use("/users", router)

## Line-by-Line

- line 1: All routes inside router now start with /users

## Common Mistakes

- Forgetting base path
- Mounting incorrectly

## What Breaks If Done Wrong

- Routes not found
- Incorrect endpoints

## Real Use Case

- /api/users
- /api/products

## Mini Practice

    app.use("/", router)

## Key Takeaway

app.use connects your router to your app and defines its starting path.
