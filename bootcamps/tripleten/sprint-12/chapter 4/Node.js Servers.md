# Concept: Node.js HTTP Server — Full Request/Response Cycle

## What It Is

A Node.js HTTP server is a program that listens for requests, gives you access to request data (req), and lets you build and send a response (res) back to the client.

## Why It Exists

Without a server, your app cannot communicate over the network. The server handles incoming requests, processes them, and returns meaningful responses (HTML, JSON, text, etc.).

## When To Use

- Building APIs
- Handling routes (GET, POST, etc.)
- Sending data to frontend apps
- Processing incoming requests

## Mental Model

Client (browser) → knocks (request)  
Server → reads request (req)  
Server → prepares answer  
Server → sends answer (res)

## Pattern

    const http = require("http")

    const server = http.createServer((req, res) => {
      // inspect req
      // build response
      res.end()
    })

    server.listen(3000)

## Example

    const http = require("http")

    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/plain")

      res.write("Hello, ")
      res.write("World!")

      res.end()
    })

    server.listen(3000)

## Line-by-Line

- line 1: Import Node HTTP module
- line 2: Create server instance
- line 3: Callback runs on every request
- line 4: Set HTTP status code
- line 5: Define response type
- line 6: Send first chunk
- line 7: Send second chunk
- line 8: End response (VERY IMPORTANT)
- line 9: Start listening on port 3000

## Common Mistakes

- Forgetting res.end()
- Sending data after res.end()
- Not setting headers when needed
- Ignoring req entirely

## What Breaks If Done Wrong

- Request hangs forever
- Runtime error: "write after end"
- Browser shows nothing or incorrect data

## Real Use Case

- Backend API returning JSON
- Serving HTML pages
- Handling client requests dynamically

## Mini Practice

    const http = require("http")

    const server = http.createServer((req, res) => {
      res.write("Node ")
      res.end("Server")
    })

    server.listen(3000)

## Key Takeaway

A Node server must receive a request and ALWAYS complete the response with res.end().

# Additional Concept: Inspecting the Request (req object)

## What It Is

The req object contains all incoming request data like URL, method, headers, and body.

## Why It Exists

The server needs to know what the client is asking for to respond correctly.

## When To Use

- Routing requests
- Checking request type (GET, POST)
- Debugging incoming traffic

## Mental Model

req = the full details of the client's request

## Pattern

    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)

## Example

    const server = http.createServer((req, res) => {
      console.log(req.url)
      console.log(req.method)
      console.log(req.headers)

      res.end("Logged request")
    })

## Line-by-Line

- line 1: Logs requested path
- line 2: Logs HTTP method (GET, POST)
- line 3: Logs request headers
- line 4: Ends response

## Common Mistakes

- Expecting req.body to exist immediately
- Ignoring request method
- Not handling different routes

## What Breaks If Done Wrong

- Wrong route logic
- Cannot process requests properly
- Bugs in API behavior

## Real Use Case

- API routing (/users, /posts)
- Logging traffic
- Conditional responses

## Mini Practice

    if (req.method === "GET") {
      console.log("GET request received")
    }

## Key Takeaway

req tells you EVERYTHING about the incoming request.

# Additional Concept: Building a Proper Response (res object)

## What It Is

The res object is used to construct and send a response, including status, headers, and body.

## Why It Exists

Clients expect structured responses. The res object lets you control exactly what gets sent.

## When To Use

- Sending text, HTML, or JSON
- Setting response status codes
- Controlling headers

## Mental Model

res = your answer builder

## Pattern

    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.write("data")
    res.end()

## Example

    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/plain")

      res.write("Hello, ")
      res.end("World!")
    })

## Line-by-Line

- line 1: Set status code
- line 2: Set content type
- line 3: Send partial response
- line 4: Finish response

## Common Mistakes

- Writing after ending response
- Forgetting headers
- Sending multiple responses

## What Breaks If Done Wrong

- Server crashes
- Incorrect output
- Response never completes

## Real Use Case

- API responses
- Serving HTML pages
- Returning JSON data

## Mini Practice

    res.end("Done")

## Key Takeaway

You control the response completely using res.

# Additional Concept: res.write() vs res.end()

## What It Is

res.write() sends chunks of data, while res.end() finalizes and sends the complete response.

## Why It Exists

Some responses need to be streamed or built in parts instead of all at once.

## When To Use

- write() → when sending multiple chunks
- end() → always, to finish response

## Mental Model

write = add to response  
end = send and close

## Pattern

    res.write("part 1")
    res.write("part 2")
    res.end()

## Example

    res.write("Hello ")
    res.end("World")

## Line-by-Line

- line 1: Sends first part
- line 2: Sends final part and closes response

## Common Mistakes

- Calling write after end
- Forgetting end
- Thinking write finishes response

## What Breaks If Done Wrong

- "write after end" error
- Hanging requests

## Real Use Case

- Streaming data
- Large responses
- Incremental output

## Mini Practice

    res.write("A")
    res.end("B")

## Key Takeaway

res.end() is REQUIRED to finish every response.

# Additional Concept: writeHead() (Status + Headers Together)

## What It Is

writeHead() sets both the status code and headers in one call.

## Why It Exists

Cleaner and more efficient way to configure responses.

## When To Use

- When setting multiple headers
- When defining response status + type

## Mental Model

writeHead = configure response upfront

## Pattern

    res.writeHead(200, {
      "Content-Type": "text/html"
    })

## Example

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    })

    res.end("<h1>Hello</h1>")

## Line-by-Line

- line 1: Set status + headers
- line 2: Send HTML response

## Common Mistakes

- Using both setHeader and writeHead incorrectly
- Forgetting encoding

## What Breaks If Done Wrong

- Incorrect response format
- Encoding issues

## Real Use Case

- Sending HTML pages
- API responses with headers

## Mini Practice

    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("OK")

## Key Takeaway

writeHead is a shortcut for setting status + headers together.

# Additional Concept: Environment Variables for Ports

## What It Is

Environment variables allow dynamic configuration like setting the server port without hardcoding it.

## Why It Exists

Hardcoding values makes apps inflexible and unsafe in production.

## When To Use

- Setting PORT
- Managing environment (dev vs prod)
- Configuring secrets

## Mental Model

Environment variables = external settings injected at runtime

## Pattern

    const PORT = process.env.PORT || 3000

    server.listen(PORT)

## Example

    const PORT = process.env.PORT || 3000

    const server = http.createServer((req, res) => {
      res.end("Running")
    })

    server.listen(PORT)

## Line-by-Line

- line 1: Read environment variable or fallback
- line 2: Create server
- line 3: Send response
- line 4: Start server

## Common Mistakes

- Forgetting fallback value
- Typo in variable name
- Not setting variable in terminal

## What Breaks If Done Wrong

- Server won’t start
- Wrong port used
- Deployment failures

## Real Use Case

- Hosting on cloud platforms
- Switching between dev and production

## Mini Practice

    console.log(process.env.PORT)

## Key Takeaway

Never hardcode important values — use environment variables.
