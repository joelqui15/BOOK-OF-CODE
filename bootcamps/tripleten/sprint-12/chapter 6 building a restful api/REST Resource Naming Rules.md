# Concept: REST Resource Naming Rules

## What It Is

REST resource naming rules are guidelines for structuring API URLs so they are clear, consistent, and easy to understand.

## Why It Exists

Poor naming leads to confusing APIs. Good naming makes your API predictable, readable, and easier to use and maintain.

## When To Use

- Designing API endpoints
- Structuring backend routes
- Building RESTful services

## Mental Model

URL = clear description of the resource

Good API:
/users/123/posts

Bad API:
/getUserPostsNow

## Pattern

    /resources
    /resources/:id
    /resources/:id/sub-resources

## Example

    app.get("/users", (req, res) => {
      res.send("All users")
    })

## Line-by-Line

- line 1: Define route using plural resource name
- line 2: Return all users

## Common Mistakes

- Using verbs in URLs
- Inconsistent naming
- Mixing singular and plural

## What Breaks If Done Wrong

- Confusing API usage
- Hard-to-maintain backend
- Poor developer experience

## Real Use Case

- /users
- /orders
- /products

## Mini Practice

    app.get("/books", handler)

## Key Takeaway

Use clear, consistent naming for resources in your API.

# Additional Concept: Use Plural Nouns

## What It Is

Resources should almost always be named using plural nouns.

## Why It Exists

Plural names represent collections of resources.

## When To Use

- Naming endpoints
- Designing APIs

## Mental Model

/users = collection  
/users/1 = single item

## Pattern

    /users
    /orders
    /products

## Example

    GET /users

## Line-by-Line

- line 1: Represents all users

## Common Mistakes

- Using singular (/user)
- Mixing plural and singular

## What Breaks If Done Wrong

- Inconsistent API
- Confusion for developers

## Real Use Case

- /users
- /posts

## Mini Practice

    GET /items

## Key Takeaway

Always use plural resource names.

# Additional Concept: Use Hierarchical Structure

## What It Is

URLs should represent relationships between resources using slashes (/).

## Why It Exists

It clearly shows how resources are related.

## When To Use

- Nested data
- Related resources

## Mental Model

Parent → Child relationship

## Pattern

    /users/:id/posts

## Example

    GET /users/123/posts

## Line-by-Line

- line 1: Access posts belonging to user 123

## Common Mistakes

- Flattening everything into one level
- Using unclear relationships

## What Breaks If Done Wrong

- Hard-to-understand API
- Poor structure

## Real Use Case

- Social media posts
- Orders for a user

## Mini Practice

    GET /users/1/comments

## Key Takeaway

Use URL structure to show relationships.

# Additional Concept: Avoid Verbs in URLs

## What It Is

URLs should represent resources (nouns), not actions (verbs).

## Why It Exists

HTTP methods already define actions.

## When To Use

- Designing routes
- Building REST APIs

## Mental Model

Method = action  
URL = resource

## Pattern

    GET /users
    POST /users

## Example

    // GOOD
    GET /users

    // BAD
    GET /getUsers

## Line-by-Line

- line 1: Proper REST design
- line 2: Incorrect naming

## Common Mistakes

- Using verbs like get, create, delete

## What Breaks If Done Wrong

- Redundant APIs
- Confusing design

## Real Use Case

- REST APIs
- Backend services

## Mini Practice

    GET /products

## Key Takeaway

Let HTTP methods define actions, not URLs.

# Additional Concept: Use Hyphens Instead of Underscores

## What It Is

Use hyphens (-) to separate words in URLs instead of underscores (\_).

## Why It Exists

Hyphens are more readable and consistent across platforms.

## When To Use

- Multi-word resource names

## Mental Model

Hyphens = spaces in URLs

## Pattern

    /user-profiles
    /order-items

## Example

    GET /users/123/user-posts

## Line-by-Line

- line 1: Hyphen separates words

## Common Mistakes

- Using underscores
- Combining words

## What Breaks If Done Wrong

- Hard-to-read URLs

## Real Use Case

- SEO-friendly URLs
- Public APIs

## Mini Practice

    GET /blog-posts

## Key Takeaway

Use hyphens for readability.

# Additional Concept: Use Lowercase Letters

## What It Is

All URLs should be lowercase.

## Why It Exists

URLs are case-sensitive — uppercase can cause errors.

## When To Use

- All API routes

## Mental Model

Lowercase = consistency

## Pattern

    /users
    /posts

## Example

    // GOOD
    /users/123/posts

    // BAD
    /Users/123/Posts

## Line-by-Line

- line 1: Correct lowercase
- line 2: Incorrect uppercase

## Common Mistakes

- Mixing uppercase and lowercase

## What Breaks If Done Wrong

- Routes not found
- Bugs

## Real Use Case

- APIs
- Web apps

## Mini Practice

    GET /items

## Key Takeaway

Always use lowercase URLs.

# Additional Concept: Avoid Trailing Slashes

## What It Is

Do not add a slash at the end of URLs unless necessary.

## Why It Exists

Trailing slashes can create duplicate or confusing routes.

## When To Use

- API design
- Route consistency

## Mental Model

/users ≠ /users/

## Pattern

    /users   // correct
    /users/  // avoid

## Example

    GET /users

## Line-by-Line

- line 1: Correct route

## Common Mistakes

- Adding unnecessary slashes

## What Breaks If Done Wrong

- Duplicate routes
- Confusion

## Real Use Case

- API endpoints

## Mini Practice

    GET /products

## Key Takeaway

Avoid trailing slashes for consistency.

# Additional Concept: Don’t Include HTTP Methods in Names

## What It Is

You should not include method names (get, create, delete) in URLs.

## Why It Exists

HTTP methods already define the action.

## When To Use

- Designing endpoints

## Mental Model

Method handles action, URL handles resource

## Pattern

    GET /users
    POST /users

## Example

    // GOOD
    GET /users

    // BAD
    GET /get-users

## Line-by-Line

- line 1: Correct REST design
- line 2: Incorrect naming

## Common Mistakes

- Naming routes like /getUsers

## What Breaks If Done Wrong

- Redundant design
- Confusion

## Real Use Case

- REST APIs
- Backend services

## Mini Practice

    POST /items

## Key Takeaway

Never include actions in resource names.

# Concept: REST Resource Naming Rules

## What It Is

REST resource naming rules are guidelines for structuring API URLs so they are clear, consistent, and easy to understand.

## Why It Exists

Poor naming leads to confusing APIs. Good naming makes your API predictable, readable, and easier to use and maintain.

## When To Use

- Designing API endpoints
- Structuring backend routes
- Building RESTful services

## Mental Model

URL = clear description of the resource

Good API:
/users/123/posts

Bad API:
/getUserPostsNow

## Pattern

    /resources
    /resources/:id
    /resources/:id/sub-resources

## Example

    app.get("/users", (req, res) => {
      res.send("All users")
    })

## Line-by-Line

- line 1: Define route using plural resource name
- line 2: Return all users

## Common Mistakes

- Using verbs in URLs
- Inconsistent naming
- Mixing singular and plural

## What Breaks If Done Wrong

- Confusing API usage
- Hard-to-maintain backend
- Poor developer experience

## Real Use Case

- /users
- /orders
- /products

## Mini Practice

    app.get("/books", handler)

## Key Takeaway

Use clear, consistent naming for resources in your API.

# Additional Concept: Use Plural Nouns

## What It Is

Resources should almost always be named using plural nouns.

## Why It Exists

Plural names represent collections of resources.

## When To Use

- Naming endpoints
- Designing APIs

## Mental Model

/users = collection  
/users/1 = single item

## Pattern

    /users
    /orders
    /products

## Example

    GET /users

## Line-by-Line

- line 1: Represents all users

## Common Mistakes

- Using singular (/user)
- Mixing plural and singular

## What Breaks If Done Wrong

- Inconsistent API
- Confusion for developers

## Real Use Case

- /users
- /posts

## Mini Practice

    GET /items

## Key Takeaway

Always use plural resource names.

# Additional Concept: Use Hierarchical Structure

## What It Is

URLs should represent relationships between resources using slashes (/).

## Why It Exists

It clearly shows how resources are related.

## When To Use

- Nested data
- Related resources

## Mental Model

Parent → Child relationship

## Pattern

    /users/:id/posts

## Example

    GET /users/123/posts

## Line-by-Line

- line 1: Access posts belonging to user 123

## Common Mistakes

- Flattening everything into one level
- Using unclear relationships

## What Breaks If Done Wrong

- Hard-to-understand API
- Poor structure

## Real Use Case

- Social media posts
- Orders for a user

## Mini Practice

    GET /users/1/comments

## Key Takeaway

Use URL structure to show relationships.

# Additional Concept: Avoid Verbs in URLs

## What It Is

URLs should represent resources (nouns), not actions (verbs).

## Why It Exists

HTTP methods already define actions.

## When To Use

- Designing routes
- Building REST APIs

## Mental Model

Method = action  
URL = resource

## Pattern

    GET /users
    POST /users

## Example

    // GOOD
    GET /users

    // BAD
    GET /getUsers

## Line-by-Line

- line 1: Proper REST design
- line 2: Incorrect naming

## Common Mistakes

- Using verbs like get, create, delete

## What Breaks If Done Wrong

- Redundant APIs
- Confusing design

## Real Use Case

- REST APIs
- Backend services

## Mini Practice

    GET /products

## Key Takeaway

Let HTTP methods define actions, not URLs.

# Additional Concept: Use Hyphens Instead of Underscores

## What It Is

Use hyphens (-) to separate words in URLs instead of underscores (\_).

## Why It Exists

Hyphens are more readable and consistent across platforms.

## When To Use

- Multi-word resource names

## Mental Model

Hyphens = spaces in URLs

## Pattern

    /user-profiles
    /order-items

## Example

    GET /users/123/user-posts

## Line-by-Line

- line 1: Hyphen separates words

## Common Mistakes

- Using underscores
- Combining words

## What Breaks If Done Wrong

- Hard-to-read URLs

## Real Use Case

- SEO-friendly URLs
- Public APIs

## Mini Practice

    GET /blog-posts

## Key Takeaway

Use hyphens for readability.

# Additional Concept: Use Lowercase Letters

## What It Is

All URLs should be lowercase.

## Why It Exists

URLs are case-sensitive — uppercase can cause errors.

## When To Use

- All API routes

## Mental Model

Lowercase = consistency

## Pattern

    /users
    /posts

## Example

    // GOOD
    /users/123/posts

    // BAD
    /Users/123/Posts

## Line-by-Line

- line 1: Correct lowercase
- line 2: Incorrect uppercase

## Common Mistakes

- Mixing uppercase and lowercase

## What Breaks If Done Wrong

- Routes not found
- Bugs

## Real Use Case

- APIs
- Web apps

## Mini Practice

    GET /items

## Key Takeaway

Always use lowercase URLs.

# Additional Concept: Avoid Trailing Slashes

## What It Is

Do not add a slash at the end of URLs unless necessary.

## Why It Exists

Trailing slashes can create duplicate or confusing routes.

## When To Use

- API design
- Route consistency

## Mental Model

/users ≠ /users/

## Pattern

    /users   // correct
    /users/  // avoid

## Example

    GET /users

## Line-by-Line

- line 1: Correct route

## Common Mistakes

- Adding unnecessary slashes

## What Breaks If Done Wrong

- Duplicate routes
- Confusion

## Real Use Case

- API endpoints

## Mini Practice

    GET /products

## Key Takeaway

Avoid trailing slashes for consistency.

# Additional Concept: Don’t Include HTTP Methods in Names

## What It Is

You should not include method names (get, create, delete) in URLs.

## Why It Exists

HTTP methods already define the action.

## When To Use

- Designing endpoints

## Mental Model

Method handles action, URL handles resource

## Pattern

    GET /users
    POST /users

## Example

    // GOOD
    GET /users

    // BAD
    GET /get-users

## Line-by-Line

- line 1: Correct REST design
- line 2: Incorrect naming

## Common Mistakes

- Naming routes like /getUsers

## What Breaks If Done Wrong

- Redundant design
- Confusion

## Real Use Case

- REST APIs
- Backend services

## Mini Practice

    POST /items

## Key Takeaway

Never include actions in resource names.
