# Concept: Creating a Basic Node.js Server (http module)

## What It Is

A Node.js server is a program that listens for incoming network requests and sends responses back using the built-in http module.

## Why It Exists

Applications need a way to receive requests (from browsers, apps, etc.) and respond with data. The server acts as the middle layer that handles this communication.

## When To Use

- When building APIs
- When serving web pages
- When handling client requests (GET, POST, etc.)
- When creating backend logic

## Mental Model

Think of the server like a receptionist:

- It listens for incoming calls (requests)
- Understands what’s being asked
- Sends back the correct response

## Pattern

    const http = require("http")

    const server = http.createServer((req, res) => {
      // handle request
    })

    server.listen(PORT)

## Example

    const http = require("http")

    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.end("Hello from server")
    })

    server.listen(3000)

## Line-by-Line

- line 1: Imports Node’s built-in HTTP module
- line 2: Creates a server instance
- line 3: Defines a callback that runs every time a request comes in
- line 4: Sets HTTP status code to 200 (success)
- line 5: Sends response back to client and ends request
- line 6: Starts server on port 3000

## Common Mistakes

- Forgetting to call res.end()
- Not calling server.listen()
- Using wrong port or one already in use

## What Breaks If Done Wrong

- Request hangs forever (no res.end)
- Server never starts (no listen)
- Browser cannot connect

## Real Use Case

- Backend API responding to frontend requests
- Serving HTML or JSON data
- Handling form submissions

## Mini Practice

    const http = require("http")

    const server = http.createServer((req, res) => {
      res.end("Practice server running")
    })

    server.listen(4000)

## Key Takeaway

A Node server listens for requests and must ALWAYS send a response.

# Additional Concept: Request and Response Objects (req, res)

## What It Is

The req (request) object contains data about the incoming request, and the res (response) object is used to send data back to the client.

## Why It Exists

Without req, you wouldn’t know what the client wants. Without res, you couldn’t send anything back.

## When To Use

- When reading URL paths
- When checking request methods (GET, POST)
- When sending responses

## Mental Model

req = what the client is asking for  
res = how you answer them

## Pattern

    http.createServer((req, res) => {
      console.log(req.url)
      res.end("response")
    })

## Example

    const http = require("http")

    const server = http.createServer((req, res) => {
      console.log(req.url)
      res.end("Hello")
    })

    server.listen(3000)

## Line-by-Line

- line 1: Imports HTTP module
- line 2: Creates server
- line 3: Logs requested URL
- line 4: Sends response back
- line 5: Starts server

## Common Mistakes

- Ignoring req completely
- Not ending response
- Trying to send multiple responses

## What Breaks If Done Wrong

- Cannot route requests
- Errors when sending multiple responses
- Hanging requests

## Real Use Case

- Logging incoming requests
- Routing different URLs
- Building REST APIs

## Mini Practice

    const http = require("http")

    const server = http.createServer((req, res) => {
      console.log(req.method)
      res.end("Done")
    })

    server.listen(3000)

## Key Takeaway

req tells you what the client wants, res is how you respond.

# Additional Concept: Sending Responses (res.write, res.end, headers)

## What It Is

Node provides methods like res.write() and res.end() to send data back to the client, along with headers and status codes.

## Why It Exists

Clients need properly formatted responses (status + data). These methods control how and when data is sent.

## When To Use

- When sending text, HTML, or JSON
- When splitting response into chunks
- When setting headers

## Mental Model

res.write = add pieces to the response  
res.end = send everything and finish

## Pattern

    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.write("Hello ")
    res.end("World")

## Example

    const http = require("http")

    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/plain")

      res.write("Hello ")
      res.write("World")

      res.end()
    })

    server.listen(3000)

## Line-by-Line

- line 1: Sets success status
- line 2: Defines response type
- line 3: Sends first chunk of data
- line 4: Sends second chunk
- line 5: Ends response

## Common Mistakes

- Calling res.write after res.end
- Forgetting headers
- Not ending response

## What Breaks If Done Wrong

- Runtime errors (write after end)
- Browser doesn’t display correctly
- Request never finishes

## Real Use Case

- Streaming data
- Sending HTML pages
- Returning API responses

## Mini Practice

    const http = require("http")

    const server = http.createServer((req, res) => {
      res.write("Part 1 ")
      res.end("Part 2")
    })

    server.listen(3000)

## Key Takeaway

You must finish every response with res.end().

# Additional Concept: Ports and server.listen()

## What It Is

A port is a communication endpoint that allows the server to receive network requests. server.listen() tells Node which port to use.

## Why It Exists

A computer can run multiple programs. Ports allow them to receive requests without conflict.

## When To Use

- Always when starting a server
- When specifying where your app should run

## Mental Model

Port = door number  
Server = building  
Client = visitor knocking on a specific door

## Pattern

    server.listen(3000)

## Example

    const http = require("http")

    const server = http.createServer((req, res) => {
      res.end("Running")
    })

    server.listen(3000)

## Line-by-Line

- line 1: Creates server
- line 2: Sends response
- line 3: Opens port 3000 for requests

## Common Mistakes

- Using a blocked port
- Forgetting to start server
- Hardcoding port in production

## What Breaks If Done Wrong

- Cannot access server
- Port conflicts
- Deployment issues

## Real Use Case

- Local development (3000, 8080)
- Production servers (dynamic ports)

## Mini Practice

    const http = require("http")

    const server = http.createServer((req, res) => {
      res.end("Port test")
    })

    server.listen(5000)

## Key Takeaway

The server must listen on a port to receive requests.

# Additional Concept: Environment Variables (process.env)

## What It Is

Environment variables are external values that configure your app without hardcoding them into your code.

## Why It Exists

Hardcoding values (like ports or API keys) makes apps inflexible and insecure. Environment variables solve this.

## When To Use

- Setting ports
- Managing API keys
- Switching environments (dev vs production)

## Mental Model

Environment variables = settings outside your code that your app reads when it runs

## Pattern

    const PORT = process.env.PORT || 3000

    server.listen(PORT)

## Example

    const http = require("http")

    const PORT = process.env.PORT || 3000

    const server = http.createServer((req, res) => {
      res.end("Env example")
    })

    server.listen(PORT)

## Line-by-Line

- line 1: Reads port from environment or defaults to 3000
- line 2: Creates server
- line 3: Sends response
- line 4: Starts server on chosen port

## Common Mistakes

- Forgetting fallback value
- Typing wrong variable name
- Not setting environment variable

## What Breaks If Done Wrong

- Server fails to start
- Wrong configuration in production
- App crashes due to undefined values

## Real Use Case

- Deployment platforms (Heroku, Vercel)
- Switching between dev and production configs

## Mini Practice

    console.log(process.env.NODE_ENV)

## Key Takeaway

Environment variables make your app flexible, secure, and production-ready.
