# Concept: CORS (Cross-Origin Resource Sharing)

## What It Is

CORS is a browser security feature that controls which websites are allowed to make requests to your server.

## Why It Exists

Without CORS, any website could make requests to your API, leading to serious security risks like data theft.

## When To Use

- When frontend and backend are on different domains
- When building full-stack apps (React + Node)
- When working with APIs from different origins

## Mental Model

Browser asks server:

"Can I access this?"

Server responds:

"Yes (allowed)" OR "No (blocked)"

## Pattern

    app.use(cors())

## Example

    const express = require("express")
    const cors = require("cors")

    const app = express()

    app.use(cors())

    app.get("/api", (req, res) => {
      res.json({ message: "CORS enabled" })
    })

    app.listen(3000)

## Line-by-Line

- line 1: Import Express
- line 2: Import CORS package
- line 3: Create server app
- line 5: Enable CORS for all requests
- line 7: Create API route
- line 8: Send JSON response
- line 10: Start server

## Common Mistakes

- Forgetting to enable CORS
- Allowing all origins in production
- Thinking CORS is a backend-only issue

## What Breaks If Done Wrong

- Frontend gets blocked by browser
- Errors like "Access-Control-Allow-Origin missing"
- API becomes unusable from frontend

## Real Use Case

- React app (localhost:3000) calling API (localhost:5000)
- Frontend hosted separately from backend

## Mini Practice

    app.use(cors())

## Key Takeaway

CORS controls which domains can access your server.

# Additional Concept: Same-Origin Policy

## What It Is

A browser rule that blocks requests between different origins unless allowed.

## Why It Exists

Prevents malicious websites from accessing sensitive data.

## When To Use

- Always active in browsers
- Relevant for frontend-backend communication

## Mental Model

Origin = protocol + domain + port

Different origin = blocked

## Pattern

    http://example.com !== http://api.example.com

## Example

    // frontend
    fetch("http://api.site.com/data")

## Line-by-Line

- line 1: Request from different origin → blocked without CORS

## Common Mistakes

- Not understanding what counts as "different origin"

## What Breaks If Done Wrong

- Requests silently fail in browser

## Real Use Case

- React frontend + Node backend

## Mini Practice

    fetch("http://localhost:5000")

## Key Takeaway

Browsers block cross-origin requests by default.

# Additional Concept: Enabling CORS (Allow All Origins)

## What It Is

Allows any domain to access your API.

## Why It Exists

Useful for development and testing.

## When To Use

- Development environment
- Public APIs (with caution)

## Mental Model

"Everyone can access my API"

## Pattern

    app.use(cors())

## Example

    app.use(cors())

## Line-by-Line

- line 1: Enable access from all domains

## Common Mistakes

- Using this in production without restrictions

## What Breaks If Done Wrong

- Security vulnerabilities

## Real Use Case

- Testing APIs
- Public endpoints

## Mini Practice

    app.use(cors())

## Key Takeaway

Allow-all CORS is simple but risky.

# Additional Concept: Restricting Origins (Whitelist)

## What It Is

Allows only specific domains to access your API.

## Why It Exists

Improves security by limiting access.

## When To Use

- Production apps
- Private APIs

## Mental Model

"Only trusted websites can access my API"

## Pattern

    app.use(cors({ origin: ["allowed-site.com"] }))

## Example

    const allowedOrigins = [
      "http://localhost:3000",
      "https://my-site.com"
    ]

    app.use(cors({ origin: allowedOrigins }))

## Line-by-Line

- line 1-4: Define allowed domains
- line 6: Apply restriction using cors config

## Common Mistakes

- Forgetting to include correct frontend URL
- Misconfiguring origin array

## What Breaks If Done Wrong

- Legit requests get blocked

## Real Use Case

- Production frontend + backend

## Mini Practice

    app.use(cors({ origin: ["http://localhost:3000"] }))

## Key Takeaway

Whitelist only trusted domains in production.

# Additional Concept: Preflight Requests

## What It Is

A browser sends an OPTIONS request before certain requests to check permissions.

## Why It Exists

Ensures the server allows the request before sending real data.

## When To Use

- PUT, PATCH, DELETE requests
- Requests with custom headers

## Mental Model

Browser asks first:

"Is this request allowed?"

## Pattern

    OPTIONS /api

## Example

    // handled automatically by cors package

## Line-by-Line

- line 1: Browser sends OPTIONS request
- line 2: Server responds with allowed methods

## Common Mistakes

- Not handling OPTIONS requests

## What Breaks If Done Wrong

- Requests fail before reaching server logic

## Real Use Case

- Auth APIs
- Complex requests

## Mini Practice

    app.options("*", handler)

## Key Takeaway

Preflight checks happen before certain requests.

# Additional Concept: CORS Headers

## What It Is

Headers sent by the server to define CORS rules.

## Why It Exists

Browsers rely on headers to enforce CORS policies.

## When To Use

- Custom CORS setups
- Debugging

## Mental Model

Headers = rules for browser

## Pattern

    Access-Control-Allow-Origin: *

## Example

    res.setHeader("Access-Control-Allow-Origin", "*")

## Line-by-Line

- line 1: Allow all origins

## Common Mistakes

- Missing headers
- Incorrect values

## What Breaks If Done Wrong

- Browser blocks request

## Real Use Case

- Manual API setup
- Debugging issues

## Mini Practice

    res.setHeader("Access-Control-Allow-Origin", "*")

## Key Takeaway

CORS headers tell browsers what’s allowed.

# Additional Concept: cors Package (Node.js Middleware)

## What It Is

A Node.js middleware that simplifies handling CORS.

## Why It Exists

Manually setting headers is error-prone.

## When To Use

- Express apps
- APIs

## Mental Model

cors() = automatic CORS setup

## Pattern

    const cors = require("cors")
    app.use(cors())

## Example

    const cors = require("cors")
    app.use(cors())

## Line-by-Line

- line 1: Import package
- line 2: Enable middleware

## Common Mistakes

- Not installing package
- Misplacing middleware

## What Breaks If Done Wrong

- CORS not applied

## Real Use Case

- Express APIs

## Mini Practice

    app.use(cors())

## Key Takeaway

Use cors middleware to handle CORS easily.
