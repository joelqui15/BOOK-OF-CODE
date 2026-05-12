# Concept: Express Routing (Handling Client Requests)

## What It Is

Routing in Express is how your server decides what code to run based on the incoming request’s URL and HTTP method (GET, POST, etc.).

## Why It Exists

Without routing, your server wouldn’t know how to respond differently to different requests. Routing lets you map specific URLs to specific logic.

## When To Use

- Building APIs
- Handling different endpoints (/users, /posts)
- Responding to frontend requests
- Filtering or processing data

## Mental Model

Route = “If someone goes HERE, do THIS”

## Pattern

    app.get("path", (req, res) => {
      // handle request
    })

## Example

    app.get("/", (req, res) => {
      res.send("Hello from server")
    })

## Line-by-Line

- line 1: Define GET route for root path
- line 2: Callback runs when route is hit
- line 3: Send response to client

## Common Mistakes

- Forgetting to send a response
- Using wrong HTTP method
- Mismatched route path

## What Breaks If Done Wrong

- Request hangs forever
- 404 errors
- Incorrect data returned

## Real Use Case

- Homepage route (/)
- API endpoint (/users)
- Data fetching routes

## Mini Practice

    app.get("/test", (req, res) => {
      res.send("Test route")
    })

## Key Takeaway

Routing connects URLs to logic in your server.

# Additional Concept: res.send() (Sending Responses in Express)

## What It Is

res.send() is a method used to send a response back to the client in Express.

## Why It Exists

It simplifies sending data by automatically setting headers and formatting the response.

## When To Use

- Sending text
- Sending HTML
- Sending JSON

## Mental Model

res.send = “send this data back to the client”

## Pattern

    res.send(data)

## Example

    app.get("/", (req, res) => {
      res.send("<h1>Hello</h1>")
    })

## Line-by-Line

- line 1: Define route
- line 2: Send HTML response

## Common Mistakes

- Sending multiple responses
- Forgetting to return after sending
- Sending wrong data type

## What Breaks If Done Wrong

- Errors: “Cannot set headers after they are sent”
- Unexpected responses

## Real Use Case

- API responses
- Rendering HTML
- Sending JSON data

## Mini Practice

    res.send("Done")

## Key Takeaway

res.send() is the main way to respond in Express.

# Additional Concept: Setting Status Codes (res.status)

## What It Is

res.status() sets the HTTP status code for a response.

## Why It Exists

Clients need to know if a request succeeded, failed, or had issues.

## When To Use

- Handling errors
- Returning custom responses
- API design

## Mental Model

Status code = message about what happened

## Pattern

    res.status(code).send(data)

## Example

    app.get("/", (req, res) => {
      res.status(404).send("Not Found")
    })

## Line-by-Line

- line 1: Define route
- line 2: Set status code
- line 3: Send response

## Common Mistakes

- Forgetting to chain send()
- Using wrong status code

## What Breaks If Done Wrong

- Misleading responses
- Debugging confusion

## Real Use Case

- 200 → success
- 404 → not found
- 500 → server error

## Mini Practice

    res.status(200).send("OK")

## Key Takeaway

Always use correct status codes to communicate results.

# Additional Concept: Request Query Parameters (req.query)

## What It Is

req.query contains data sent in the URL query string.

## Why It Exists

It allows clients to send small pieces of data with GET requests (filters, options).

## When To Use

- Filtering data
- Searching
- Pagination

## Mental Model

Query params = extra instructions in the URL

## Pattern

    /route?key=value

    req.query.key

## Example

    app.get("/items", (req, res) => {
      res.send(req.query)
    })

## Line-by-Line

- line 1: Define route
- line 2: Access query data
- line 3: Send it back

## Common Mistakes

- Forgetting query values are strings
- Not checking if query exists

## What Breaks If Done Wrong

- Filtering fails
- Unexpected results

## Real Use Case

- /products?category=shoes
- /users?page=2

## Mini Practice

    console.log(req.query.name)

## Key Takeaway

Query parameters let clients customize requests.

# Additional Concept: Filtering Data with Query Params

## What It Is

Using query parameters to filter datasets on the server before sending a response.

## Why It Exists

Clients often need only specific data, not everything.

## When To Use

- Filtering lists
- Searching collections
- API endpoints

## Mental Model

Client says: “Give me ONLY this type of data”

## Pattern

    let result = data

    if (req.query.key) {
      result = result.filter(item => item.key === req.query.key)
    }

    res.send(result)

## Example

    const pokemon = [
      { type: "fire", stage: 1, name: "Charmander" },
      { type: "fire", stage: 2, name: "Charmeleon" },
      { type: "fire", stage: 3, name: "Charizard" }
    ]

    app.get("/pokemon", (req, res) => {
      let result = pokemon

      if (req.query.type) {
        result = result.filter(p => p.type === req.query.type)
      }

      if (req.query.stage) {
        result = result.filter(p => p.stage === Number(req.query.stage))
      }

      res.send(result)
    })

## Line-by-Line

- line 1–5: Define dataset
- line 6: Define route
- line 7: Copy dataset
- line 8–10: Filter by type if provided
- line 11–13: Filter by stage if provided
- line 14: Send filtered result

## Common Mistakes

- Not converting types (string vs number)
- Filtering original data instead of copy
- Not checking if query exists

## What Breaks If Done Wrong

- Wrong filtering results
- Data mutations
- Bugs in API responses

## Real Use Case

- Product filtering (/products?category=shoes)
- Search APIs
- Data dashboards

## Mini Practice

    if (req.query.age) {
      result = result.filter(u => u.age === Number(req.query.age))
    }

## Key Takeaway

Query params + filtering = dynamic APIs that return exactly what the client needs.
