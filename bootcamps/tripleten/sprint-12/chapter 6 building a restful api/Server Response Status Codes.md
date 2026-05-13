# Concept: Server Response Status Codes

## What It Is

HTTP status codes are numbers sent by the server to tell the client the result of a request.

## Why It Exists

Without status codes, the client wouldn’t know if a request succeeded, failed, or needs further action.

## When To Use

- Every server response
- API development
- Error handling

## Mental Model

Think of status codes like signals:

2xx = success  
4xx = your fault (client)  
5xx = server’s fault

## Pattern

    res.status(code).send(data)

## Example

    app.get("/users", (req, res) => {
      res.status(200).send("Success")
    })

## Line-by-Line

- line 1: Define route
- line 2: Set status code to 200 (OK)
- line 2: Send response to client

## Common Mistakes

- Always using 200 for everything
- Not setting status codes
- Using wrong category

## What Breaks If Done Wrong

- Frontend can't detect errors properly
- Debugging becomes difficult
- API becomes unreliable

## Real Use Case

- API responses
- Error handling
- Authentication checks

## Mini Practice

    app.get("/test", (req, res) => {
      res.status(200).send("Working")
    })

## Key Takeaway

Status codes tell the client exactly what happened with a request.

# Additional Concept: 2xx (Success Codes)

## What It Is

Codes that indicate a successful request.

## Why It Exists

Clients need confirmation that operations worked.

## When To Use

- Successful responses
- Data returned correctly

## Mental Model

2xx = everything worked

## Pattern

    res.status(200)
    res.status(201)
    res.status(202)

## Example

    res.status(200).send("OK")

## Line-by-Line

- line 1: Send success response

## Common Mistakes

- Using 200 for creation instead of 201

## What Breaks If Done Wrong

- Misleading API responses

## Real Use Case

- GET requests
- Successful operations

## Mini Practice

    res.status(200).send([])

## Key Takeaway

2xx codes mean success.

# Additional Concept: 200 OK

## What It Is

Standard success response.

## Why It Exists

Indicates request completed successfully.

## When To Use

- GET requests
- General success

## Mental Model

200 = “everything is good”

## Pattern

    res.status(200).send(data)

## Example

    res.status(200).send({ name: "Joel" })

## Line-by-Line

- line 1: Send data with success code

## Common Mistakes

- Using 200 for errors

## What Breaks If Done Wrong

- Frontend assumes success incorrectly

## Real Use Case

- Fetching users
- Loading pages

## Mini Practice

    res.status(200).send("Done")

## Key Takeaway

200 means the request worked.

# Additional Concept: 201 Created

## What It Is

Indicates a resource was successfully created.

## Why It Exists

Distinguishes creation from general success.

## When To Use

- POST requests

## Mental Model

201 = “new thing created”

## Pattern

    res.status(201).send(data)

## Example

    res.status(201).send("User created")

## Line-by-Line

- line 1: Return creation confirmation

## Common Mistakes

- Using 200 instead of 201

## What Breaks If Done Wrong

- Misleading API design

## Real Use Case

- Creating users
- Adding items

## Mini Practice

    res.status(201).send("Created")

## Key Takeaway

201 is for creation.

# Additional Concept: 3xx (Redirection Codes)

## What It Is

Codes that tell the client to go somewhere else.

## Why It Exists

Allows servers to redirect requests.

## When To Use

- URL changes
- Redirects

## Mental Model

3xx = “go over there”

## Pattern

    res.redirect("/new-url")

## Example

    res.redirect("/login")

## Line-by-Line

- line 1: Redirect client

## Common Mistakes

- Not handling redirects properly

## What Breaks If Done Wrong

- Broken navigation

## Real Use Case

- Login redirects
- URL updates

## Mini Practice

    res.redirect("/home")

## Key Takeaway

3xx codes redirect the client.

# Additional Concept: 4xx (Client Errors)

## What It Is

Errors caused by the client (bad request, missing data, etc.).

## Why It Exists

Lets the client know they did something wrong.

## When To Use

- Invalid input
- Missing data
- Unauthorized access

## Mental Model

4xx = “you messed up”

## Pattern

    res.status(400)
    res.status(401)
    res.status(403)
    res.status(404)

## Example

    res.status(404).send("Not found")

## Line-by-Line

- line 1: Send client error

## Common Mistakes

- Using 500 instead of 400 errors

## What Breaks If Done Wrong

- Hard to debug frontend issues

## Real Use Case

- Form validation
- Missing routes

## Mini Practice

    res.status(400).send("Bad request")

## Key Takeaway

4xx means the client caused the error.

# Additional Concept: 400 Bad Request

## What It Is

Request is invalid or malformed.

## Why It Exists

Prevents bad data from being processed.

## When To Use

- Invalid input
- Missing required fields

## Mental Model

400 = “bad input”

## Pattern

    res.status(400).send("Invalid data")

## Example

    res.status(400).send("Missing name")

## Line-by-Line

- line 1: Send error message

## Common Mistakes

- Not validating inputs

## What Breaks If Done Wrong

- Bugs in database
- Unexpected crashes

## Real Use Case

- Form submission errors

## Mini Practice

    res.status(400).send("Error")

## Key Takeaway

400 = client sent bad data.

# Additional Concept: 401 Unauthorized

## What It Is

Request requires authentication.

## Why It Exists

Protects secure routes.

## When To Use

- Login required routes

## Mental Model

401 = “who are you?”

## Pattern

    res.status(401)

## Example

    res.status(401).send("Unauthorized")

## Line-by-Line

- line 1: Deny access

## Common Mistakes

- Confusing with 403

## What Breaks If Done Wrong

- Security issues

## Real Use Case

- Protected APIs

## Mini Practice

    res.status(401).send("Login required")

## Key Takeaway

401 = not authenticated.

# Additional Concept: 403 Forbidden

## What It Is

Client is authenticated but not allowed.

## Why It Exists

Enforces permissions.

## When To Use

- Role-based access control

## Mental Model

401 = not logged in  
403 = not allowed

## Pattern

    res.status(403)

## Example

    res.status(403).send("Forbidden")

## Line-by-Line

- line 1: Deny permission

## Common Mistakes

- Using 401 instead

## What Breaks If Done Wrong

- Incorrect security behavior

## Real Use Case

- Admin-only actions

## Mini Practice

    res.status(403).send("No access")

## Key Takeaway

403 = access denied.

# Additional Concept: 404 Not Found

## What It Is

Resource does not exist.

## Why It Exists

Informs client the resource isn’t available.

## When To Use

- Missing routes
- Missing data

## Mental Model

404 = “doesn’t exist”

## Pattern

    res.status(404)

## Example

    res.status(404).send("User not found")

## Line-by-Line

- line 1: Send not found response

## Common Mistakes

- Returning 200 instead

## What Breaks If Done Wrong

- Frontend confusion

## Real Use Case

- Invalid URLs

## Mini Practice

    res.status(404).send("Not found")

## Key Takeaway

404 = resource not found.

# Additional Concept: 5xx (Server Errors)

## What It Is

Errors caused by the server.

## Why It Exists

Indicates something went wrong internally.

## When To Use

- Crashes
- Unexpected failures

## Mental Model

5xx = “server broke”

## Pattern

    res.status(500)

## Example

    res.status(500).send("Server error")

## Line-by-Line

- line 1: Send server error

## Common Mistakes

- Blaming client instead

## What Breaks If Done Wrong

- Misleading debugging

## Real Use Case

- Database failure
- Code bugs

## Mini Practice

    res.status(500).send("Error")

## Key Takeaway

5xx = server failure.

# Additional Concept: Express Status Chaining

## What It Is

In Express, you can chain status() with send().

## Why It Exists

Cleaner and shorter syntax.

## When To Use

- All responses

## Mental Model

Set status → send response

## Pattern

    res.status(code).send(data)

## Example

    res.status(404).send({ message: "User not found" })

## Line-by-Line

- line 1: Set status
- line 1: Send response

## Common Mistakes

- Forgetting to send after status

## What Breaks If Done Wrong

- Request hangs (no response)

## Real Use Case

- APIs
- Backend services

## Mini Practice

    res.status(200).send("OK")

## Key Takeaway

Always pair status() with send().
