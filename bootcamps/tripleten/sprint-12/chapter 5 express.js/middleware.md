# Concept: Middleware in Express

## What It Is

Middleware is a function that runs during the lifecycle of a request before the final response is sent.

## Why It Exists

Without middleware, all logic would be crammed inside route handlers, making code messy and hard to maintain. Middleware lets you reuse logic across multiple routes.

## When To Use

- Validating data (checking if user exists)
- Logging requests
- Authentication (checking if user is allowed)
- Transforming request data

## Mental Model

Middleware = checkpoint before reaching the final destination

Request → Middleware → Middleware → Route Handler → Response

## Pattern

    (req, res, next) => {
      // do something
      next()
    }

## Example

    const logger = (req, res, next) => {
      console.log("Request received")
      next()
    }

    app.use(logger)

## Line-by-Line

- line 1: Create middleware function
- line 2: Log message when request comes in
- line 3: Call next() to continue
- line 4: Attach middleware to app

## Common Mistakes

- Forgetting to call next()
- Sending response AND calling next()
- Not handling errors

## What Breaks If Done Wrong

- Request hangs forever (no next())
- Multiple responses error
- Logic stops unexpectedly

## Real Use Case

- Logging all incoming requests
- Checking authentication tokens
- Parsing request data

## Mini Practice

    const testMiddleware = (req, res, next) => {
      console.log("Hello middleware")
      next()
    }

## Key Takeaway

Middleware runs before your route handler and controls the request flow.

# Additional Concept: next() (Passing Control)

## What It Is

next() is a function that tells Express to move to the next middleware or route handler.

## Why It Exists

Express processes requests in a chain. next() moves the request forward in that chain.

## When To Use

- After middleware logic is complete
- When you want the request to continue

## Mental Model

next() = “continue to the next step”

## Pattern

    next()

## Example

    const check = (req, res, next) => {
      console.log("Checking...")
      next()
    }

## Line-by-Line

- line 1: Define middleware
- line 2: Run logic
- line 3: Continue execution

## Common Mistakes

- Forgetting next()
- Calling next() after sending response

## What Breaks If Done Wrong

- Request never finishes
- Duplicate responses

## Real Use Case

- Validation middleware
- Authentication checks

## Mini Practice

    next()

## Key Takeaway

next() moves the request forward through middleware.

# Additional Concept: Route-Level Middleware

## What It Is

Middleware that runs only for a specific route instead of globally.

## Why It Exists

Not all routes need the same logic.

## When To Use

- Validating specific routes
- Checking permissions for certain endpoints

## Mental Model

Attach middleware directly to a route

## Pattern

    app.get("/route", middleware, handler)

## Example

    const checkUser = (req, res, next) => {
      if (!req.params.id) {
        res.send("No ID")
        return
      }
      next()
    }

    app.get("/users/:id", checkUser, (req, res) => {
      res.send("User found")
    })

## Line-by-Line

- line 1: Middleware checks condition
- line 2–4: Send response if invalid
- line 5: Continue if valid
- line 6: Attach middleware to route
- line 7: Final handler runs

## Common Mistakes

- Not returning after res.send()
- Forgetting next()

## What Breaks If Done Wrong

- Multiple responses
- Incorrect logic flow

## Real Use Case

- Protecting routes
- Validating IDs

## Mini Practice

    app.get("/test", middleware, handler)

## Key Takeaway

Route middleware runs only on specific routes.

# Additional Concept: Chaining Multiple Middleware Functions

## What It Is

You can attach multiple middleware functions to a single route, executed in order.

## Why It Exists

Complex logic is easier when broken into smaller reusable pieces.

## When To Use

- Validation + authentication + processing
- Step-by-step request handling

## Mental Model

Pipeline of functions

Middleware1 → Middleware2 → Middleware3 → Handler

## Pattern

    app.get("/route", m1, m2, handler)

## Example

    const checkUser = (req, res, next) => {
      if (!req.params.id) {
        res.send("No ID")
        return
      }
      next()
    }

    const logRequest = (req, res, next) => {
      console.log("Logging request")
      next()
    }

    app.get("/users/:id", checkUser, logRequest, (req, res) => {
      res.send("Done")
    })

## Line-by-Line

- line 1–5: First middleware checks ID
- line 6–9: Second middleware logs
- line 10: Route defined with both middleware
- line 11: Final handler sends response

## Common Mistakes

- Wrong order of middleware
- Not calling next()

## What Breaks If Done Wrong

- Logic runs incorrectly
- Requests stop early

## Real Use Case

- Auth → Validation → Controller
- Logging → Processing → Response

## Mini Practice

    app.get("/a", m1, m2, handler)

## Key Takeaway

Middleware runs in sequence — order matters.

# Additional Concept: Global Middleware with app.use()

## What It Is

Middleware applied to every request in your app.

## Why It Exists

Some logic should run for all routes (logging, parsing, security).

## When To Use

- Logging all requests
- Parsing JSON
- Global authentication

## Mental Model

Global middleware = runs on every request

## Pattern

    app.use(middleware)

## Example

    const logger = (req, res, next) => {
      console.log("Request logged")
      next()
    }

    app.use(logger)

## Line-by-Line

- line 1: Define middleware
- line 2: Log message
- line 3: Continue request
- line 4: Apply globally

## Common Mistakes

- Placing app.use() after routes
- Forgetting next()

## What Breaks If Done Wrong

- Middleware doesn’t run
- Request hangs

## Real Use Case

- Logging systems
- Security layers
- Request parsing

## Mini Practice

    app.use((req, res, next) => {
      next()
    })

## Key Takeaway

Global middleware affects every incoming request.

# Additional Concept: Separating Middleware Logic

## What It Is

Moving reusable logic out of route handlers into separate middleware functions.

## Why It Exists

Keeps code clean, reusable, and easier to manage.

## When To Use

- Repeated logic across routes
- Validation or checks reused often

## Mental Model

Don’t repeat logic → extract into middleware

## Pattern

    const middleware = (req, res, next) => {}

## Example

    const doesUserExist = (req, res, next) => {
      if (!users[req.params.id]) {
        res.send("User doesn't exist")
        return
      }
      next()
    }

    const sendUser = (req, res) => {
      const { name, age } = users[req.params.id]
      res.send(`User ${name}, ${age}`)
    }

    app.get("/users/:id", doesUserExist, sendUser)

## Line-by-Line

- line 1–5: Check if user exists
- line 6: Stop if not found
- line 7: Continue if valid
- line 8–10: Send user data
- line 11: Attach middleware + handler

## Common Mistakes

- Mixing logic in one function
- Not reusing middleware

## What Breaks If Done Wrong

- Messy code
- Hard to scale app

## Real Use Case

- Validation layers
- Authorization checks
- Clean architecture

## Mini Practice

    const check = (req, res, next) => {
      next()
    }

## Key Takeaway

Middleware helps you write clean, reusable backend logic.
