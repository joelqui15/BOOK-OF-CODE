# Concept: HTTP Methods (CRUD Operations in APIs)

## What It Is

HTTP methods are actions that define what you want to do with a resource on a server (like get, create, update, or delete data).

## Why It Exists

Without methods, the server wouldn’t know what action to perform on a resource. HTTP methods provide a standard way to communicate intent.

## When To Use

- Building REST APIs
- Communicating with servers
- Performing CRUD operations (Create, Read, Update, Delete)

## Mental Model

URL = WHAT  
Method = WHAT ACTION

Example:
GET /users → get users  
POST /users → create user

## Pattern

    GET /resource
    POST /resource
    PUT /resource/:id
    PATCH /resource/:id
    DELETE /resource/:id

## Example

    app.get("/books", (req, res) => {
      res.send("All books")
    })

## Line-by-Line

- line 1: Define GET request
- line 2: Send response
- line 3: End request

## Common Mistakes

- Using GET for everything
- Not matching method to action
- Confusing PUT vs PATCH

## What Breaks If Done Wrong

- Incorrect API behavior
- Confusing frontend logic
- Violates REST principles

## Real Use Case

- Fetching data (GET)
- Creating users (POST)
- Updating profiles (PUT/PATCH)
- Deleting items (DELETE)

## Mini Practice

    app.get("/items", (req, res) => {
      res.send([])
    })

## Key Takeaway

HTTP methods define the action you want to perform on a resource.

# Additional Concept: GET (Read Data)

## What It Is

GET retrieves data from the server.

## Why It Exists

Clients need a way to request and read data.

## When To Use

- Fetching lists
- Retrieving a specific item

## Mental Model

GET = “give me data”

## Pattern

    GET /resource
    GET /resource/:id

## Example

    app.get("/users", (req, res) => {
      res.send([{ name: "Joel" }])
    })

## Line-by-Line

- line 1: Define route
- line 2: Send data

## Common Mistakes

- Sending body data with GET
- Modifying data using GET

## What Breaks If Done Wrong

- Unexpected behavior
- Violates REST rules

## Real Use Case

- Fetch users
- Load dashboard data

## Mini Practice

    app.get("/products", handler)

## Key Takeaway

GET is for reading data only.

# Additional Concept: POST (Create Data)

## What It Is

POST creates a new resource on the server.

## Why It Exists

Clients need to send data to be stored or processed.

## When To Use

- Creating users
- Submitting forms
- Adding new records

## Mental Model

POST = “create something new”

## Pattern

    POST /resource

## Example

    app.post("/users", (req, res) => {
      res.send("User created")
    })

## Line-by-Line

- line 1: Define POST route
- line 2: Create resource

## Common Mistakes

- Using GET instead of POST
- Not sending request body

## What Breaks If Done Wrong

- Data not saved
- Incorrect API usage

## Real Use Case

- Signup forms
- Adding products

## Mini Practice

    app.post("/items", handler)

## Key Takeaway

POST is used to create new resources.

# Additional Concept: PUT (Replace Data)

## What It Is

PUT replaces an entire resource with new data.

## Why It Exists

Sometimes you want to completely overwrite existing data.

## When To Use

- Updating full records
- Replacing entire objects

## Mental Model

PUT = “replace everything”

## Pattern

    PUT /resource/:id

## Example

    app.put("/users/:id", (req, res) => {
      res.send("User replaced")
    })

## Line-by-Line

- line 1: Define PUT route
- line 2: Replace resource

## Common Mistakes

- Using PUT for partial updates
- Not sending full data

## What Breaks If Done Wrong

- Data loss
- Incomplete updates

## Real Use Case

- Updating full user profile

## Mini Practice

    app.put("/items/:id", handler)

## Key Takeaway

PUT replaces the entire resource.

# Additional Concept: PATCH (Partial Update)

## What It Is

PATCH updates part of a resource instead of replacing the whole thing.

## Why It Exists

Updating entire objects is inefficient when only small changes are needed.

## When To Use

- Updating one field
- Partial edits

## Mental Model

PATCH = “update only what changed”

## Pattern

    PATCH /resource/:id

## Example

    app.patch("/users/:id", (req, res) => {
      res.send("User updated partially")
    })

## Line-by-Line

- line 1: Define PATCH route
- line 2: Update resource

## Common Mistakes

- Using PUT instead of PATCH
- Confusing partial vs full update

## What Breaks If Done Wrong

- Overwriting data unintentionally

## Real Use Case

- Updating username only
- Changing one field

## Mini Practice

    app.patch("/items/:id", handler)

## Key Takeaway

PATCH updates only part of a resource.

# Additional Concept: DELETE (Remove Data)

## What It Is

DELETE removes a resource from the server.

## Why It Exists

Clients need a way to remove data.

## When To Use

- Deleting users
- Removing items

## Mental Model

DELETE = “remove this”

## Pattern

    DELETE /resource/:id

## Example

    app.delete("/users/:id", (req, res) => {
      res.send("User deleted")
    })

## Line-by-Line

- line 1: Define DELETE route
- line 2: Delete resource

## Common Mistakes

- Using GET to delete
- Not handling missing resources

## What Breaks If Done Wrong

- Data inconsistency
- Security issues

## Real Use Case

- Removing posts
- Deleting accounts

## Mini Practice

    app.delete("/items/:id", handler)

## Key Takeaway

DELETE removes resources from the server.

# Additional Concept: Less Common Methods (HEAD & OPTIONS)

## What It Is

HEAD retrieves headers only, and OPTIONS tells what methods are allowed.

## Why It Exists

They provide additional control and metadata about requests.

## When To Use

- Checking server capabilities
- Debugging APIs

## Mental Model

HEAD = preview  
OPTIONS = “what can I do?”

## Pattern

    HEAD /resource
    OPTIONS /resource

## Example

    // handled automatically by many servers

## Line-by-Line

- line 1: HEAD request gets headers
- line 2: OPTIONS returns allowed methods

## Common Mistakes

- Ignoring these methods completely

## What Breaks If Done Wrong

- Limited API understanding

## Real Use Case

- API debugging
- Browser preflight requests

## Mini Practice

    console.log("HEAD and OPTIONS exist")

## Key Takeaway

HEAD and OPTIONS support advanced API behavior.

# Additional Concept: Express Route Methods

## What It Is

Express provides methods that match HTTP methods (app.get, app.post, etc.).

## Why It Exists

It maps HTTP actions directly to code.

## When To Use

- Building APIs in Express
- Handling requests

## Mental Model

app.method = handle that type of request

## Pattern

    app.get()
    app.post()
    app.put()
    app.patch()
    app.delete()

## Example

    app.get("/books", getBooks)
    app.post("/books", createBook)
    app.put("/books/:id", replaceBook)
    app.patch("/books/:id", updateBook)
    app.delete("/books/:id", deleteBook)

## Line-by-Line

- line 1: GET all books
- line 2: Create book
- line 3: Replace book
- line 4: Update book
- line 5: Delete book

## Common Mistakes

- Using wrong method
- Mixing logic

## What Breaks If Done Wrong

- Incorrect behavior
- API inconsistency

## Real Use Case

- Full CRUD backend
- REST APIs

## Mini Practice

    app.get("/test", handler)

## Key Takeaway

Express directly maps HTTP methods to route handlers.
