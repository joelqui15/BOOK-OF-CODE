# Concept: Server-Side Engineering with Node.js

## What It Is

Server-side engineering is the part of development where code runs on a server to process requests, interact with databases, and send responses back to the client. Node.js is a JavaScript runtime that allows JavaScript to run on the server.

## Why It Exists

Browsers (client-side) can only handle UI and user interaction. They cannot securely access databases or perform heavy processing. Server-side engineering exists to handle logic, data storage, authentication, and communication between systems.

## When To Use

- When you need to store or retrieve data (database)
- When handling user authentication (login/signup)
- When processing API requests
- When performing operations that should not be exposed to the browser

## Mental Model

Think of the server as a restaurant kitchen:

- The client (browser) is the customer placing an order
- The server is the kitchen preparing the food
- The response is the finished dish sent back

The client never cooks — it just requests.

## Pattern

    client -> request -> server
    server -> process logic (DB/API/files)
    server -> response -> client

## Example

    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => console.log(data))

## Line-by-Line

- line 1: Sends a request from the client to a server endpoint
- line 2: Converts the response into usable JSON data
- line 3: Logs the received data to the console

## Common Mistakes

- Thinking the browser can directly access databases
- Not understanding that fetch is talking to a server, not data itself
- Assuming server logic runs instantly (it depends on processing)

## What Breaks If Done Wrong

- Security risks (exposing sensitive data)
- Failed requests (wrong endpoints or missing auth)
- App crashes due to bad server responses

## Real Use Case

- A social media app fetching posts from a database
- A weather app calling an API for live data
- A login system verifying credentials

## Mini Practice

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => {
        console.log(posts.length)
      })

## Key Takeaway

The server handles data and logic — the client only requests and displays.

# Additional Concept: What is a Server

## What It Is

A server is a computer or program that listens for incoming requests and sends back responses.

## Why It Exists

Without servers, there would be no way to share data between users or store persistent information.

## When To Use

- Anytime your app needs external data
- Anytime multiple users need shared data
- Anytime logic must be centralized

## Mental Model

A server is like a worker waiting for tasks:

- It waits
- Receives a request
- Does the work
- Sends back the result

## Pattern

    request -> server
    server -> validate request
    server -> fetch/process data
    server -> return response

## Example

    fetch("https://around-api.en.tripleten-services.com/v1/boards", {
      headers: {
        authorization: "token"
      }
    })
    .then(res => res.json())

## Line-by-Line

- line 1: Sends a request to a server endpoint
- line 2: Includes headers for authorization
- line 3: Converts the server response into JSON

## Common Mistakes

- Forgetting authentication headers
- Assuming server always returns valid data
- Not handling errors

## What Breaks If Done Wrong

- Unauthorized errors (401)
- Broken UI due to bad data
- Failed API calls

## Real Use Case

- Fetching user profiles from a backend
- Getting product listings in an e-commerce app

## Mini Practice

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => console.log(users[0].name))

## Key Takeaway

A server is the middleman between your app and the data.

# Additional Concept: Blocking vs Non-Blocking (Node.js Core Idea)

## What It Is

Blocking means tasks are handled one at a time in order. Non-blocking means tasks can run without stopping others, using asynchronous operations.

## Why It Exists

Blocking systems slow down under heavy load. Node.js uses non-blocking to handle many users efficiently.

## When To Use

- When handling many users at once
- When dealing with APIs, databases, or file systems
- Anytime performance matters

## Mental Model

Blocking = one cashier, long line  
Non-blocking = one cashier taking orders, cooks handle tasks in background

## Pattern

    start task
    continue execution
    handle result later (callback/promise)

## Example

    console.log("Start")

    setTimeout(() => {
      console.log("Async task done")
    }, 2000)

    console.log("End")

## Line-by-Line

- line 1: Logs "Start"
- line 2: Starts an async task (does NOT block)
- line 3: Logs "Async task done" after 2 seconds
- line 4: Logs "End" immediately without waiting

## Common Mistakes

- Expecting async code to run in order
- Not using .then or await
- Forgetting that async results come later

## What Breaks If Done Wrong

- Undefined data (because it hasn't returned yet)
- Race conditions
- UI rendering before data is ready

## Real Use Case

- Fetching data from APIs
- Reading files
- Handling multiple users in a web server

## Mini Practice

    console.log("A")

    setTimeout(() => {
      console.log("B")
    }, 1000)

    console.log("C")

## Key Takeaway

Node.js handles many tasks at once by NOT waiting — it runs things asynchronously.
