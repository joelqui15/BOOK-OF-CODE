# Concept: JSX Lists and Events

## What It Is

This section covers two important React ideas:

- rendering repeated data with lists
- responding to user actions with events

A list in React means taking an array of data and turning each item into UI. Events in React mean attaching functions to JSX so the interface can react to clicks, mouse movement, and other user actions.

## Why It Exists

Without lists:

- you would have to manually write repeated markup over and over
- your code would become long, repetitive, and hard to update

Without events:

- your UI would look static
- buttons and interactive elements would not respond to the user

This concept solves:

- rendering repeated data from arrays
- connecting data to UI
- making the interface interactive

## When To Use

- when displaying comments, posts, products, users, messages, or cards
- when data comes from an API and you need to render many items
- when a user clicks, hovers, types, submits, or interacts with the page

## Mental Model

Lists:
“I have an array of data, and I want React to build one UI block for each item.”

Events:
“The user does something, and React runs a function in response.”

Together:
data builds the UI, and events make the UI respond.

## Pattern

```javascript
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

function App() {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}

      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

## Example

```javascript
const comments = [
  {
    id: 1,
    author: "Lisa",
    text: "What is love?",
  },
  {
    id: 2,
    author: "James",
    text: "Does anyone know where my sandwich is?",
  },
  {
    id: 3,
    author: "Greg",
    text: "I'm selling a moped.",
  },
];

function handleClick() {
  console.log("Don't click me!");
}

function handleMouseEnter() {
  console.log("Hey, you're in my zone!");
}

function handleMouseLeave() {
  console.log("...where'd you go?");
}

function App() {
  return (
    <div>
      <h2>Messages</h2>

      {comments.map((message) => (
        <div key={message.id}>
          <h3>{message.author}</h3>
          <div>{message.text}</div>
        </div>
      ))}

      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Play with me!
      </button>
    </div>
  );
}
```

## Line-by-Line

- line 1: creates the `comments` array that holds the data
- line 2–15: each object represents one comment/message
- line 3: `id` is a unique identifier for that item
- line 4: `author` stores who wrote the message
- line 5: `text` stores the content of the message
- line 17: defines the click handler function
- line 18: logs a message when the button is clicked
- line 21: defines the mouse enter handler
- line 22: logs a message when the mouse enters the button
- line 25: defines the mouse leave handler
- line 26: logs a message when the mouse leaves the button
- line 29: defines the React component
- line 31: outer wrapper for the component UI
- line 32: renders the heading
- line 34: starts looping through `comments` with `.map()`
- line 34: `message` is the current item being processed in the array
- line 35: creates one wrapper element for one message
- line 35: `key={message.id}` gives React a stable unique identifier
- line 36: renders the author name
- line 36: `{message.author}` inserts JavaScript data into JSX
- line 37: renders the message text
- line 37: `{message.text}` inserts the text into the UI
- line 38: closes the single message block
- line 39: closes the `.map()` rendering block
- line 41: starts the button element
- line 42: `onClick={handleClick}` tells React what function to run on click
- line 43: `onMouseEnter={handleMouseEnter}` runs when the mouse enters
- line 44: `onMouseLeave={handleMouseLeave}` runs when the mouse leaves
- line 46: button text shown to the user
- line 47: closes the button
- line 48: closes the outer wrapper
- line 49: ends the component

## Common Mistakes

- forgetting to use `.map()` when rendering repeated data
- using `.forEach()` instead of `.map()` in JSX
- forgetting the `key` prop
- using a non-unique key
- putting parentheses/braces in the wrong place inside `.map()`
- trying to call the event handler immediately instead of passing the function
- writing HTML-style event names like `onclick` instead of React-style `onClick`
- defining handlers in a place where JSX cannot access them

## What Breaks If Done Wrong

- lists may not render at all
- React may show warnings about missing keys
- UI updates can behave strangely if keys are unstable
- the wrong item may re-render or update
- click/hover events may not work
- the handler may run immediately on render instead of on user action
- your component becomes harder to debug

## Real Use Case

- rendering a feed of posts from an API
- rendering product cards in an online store
- rendering comments under a post
- rendering a list of tasks in a to-do app
- handling button clicks for liking, deleting, opening modals, or submitting forms
- handling hover interactions for menus, tooltips, and previews

## Mini Practice

```javascript
const users = [
  { id: 1, name: "Joel" },
  { id: 2, name: "Maya" },
];

function handleClick() {
  console.log("Button clicked");
}

function App() {
  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}

      <button onClick={handleClick}>Press me</button>
    </div>
  );
}
```

## Key Takeaway

Use `.map()` to turn arrays of data into repeated UI, and use React event props like `onClick` to make that UI respond to the user.

## Additional Concept: The `key` Prop

### What It Is

The `key` prop is a special React attribute used when rendering lists. It helps React identify which item is which across renders.

### Why It Exists

React needs a stable way to track elements in a list. Without keys, React has a harder time figuring out what changed.

### When To Use

- every time you render a list with `.map()`
- whenever JSX creates multiple repeated sibling elements from data

### Mental Model

A `key` is like a name tag for each rendered item.

React looks at the name tag and says:
“Okay, this is still the same item as before.”

### Pattern

```javascript
array.map((item) => <div key={item.id}>{item.name}</div>);
```

### Example

```javascript
const products = [
  { id: 101, name: "Hat" },
  { id: 102, name: "Shirt" },
];

function App() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Line-by-Line

- line 1: array of product data
- line 7: starts mapping through products
- line 8: creates one JSX element per product
- line 8: `key={product.id}` gives React a unique identifier
- line 8: `{product.name}` displays the product name

### Common Mistakes

- using no key at all
- using the array index as the key when stable IDs exist
- using duplicate keys

### What Breaks If Done Wrong

- React warning messages
- incorrect UI updates
- bugs when items are added, removed, or reordered

### Real Use Case

- posts from a database
- comments from an API
- cards in a dashboard
- tasks in a task manager

### Mini Practice

```javascript
const tasks = [
  { id: 1, title: "Study React" },
  { id: 2, title: "Build project" },
];

function App() {
  return (
    <div>
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
}
```

### Key Takeaway

A `key` gives each rendered list item a stable identity so React can update the UI correctly.

## Additional Concept: React Event Naming

### What It Is

React uses camelCase event names in JSX, like `onClick`, `onMouseEnter`, and `onMouseLeave`.

### Why It Exists

JSX follows JavaScript-style naming, not raw HTML attribute naming.

### When To Use

- whenever attaching events inside JSX

### Mental Model

HTML says:

- `onclick`

React says:

- `onClick`

React event props look like JavaScript property names.

### Pattern

```javascript
<button onClick={handleClick}>Click</button>
```

### Example

```javascript
function handleClick() {
  console.log("Clicked");
}

function App() {
  return <button onClick={handleClick}>Click me</button>;
}
```

### Line-by-Line

- line 1: defines the event handler
- line 2: logs a message when called
- line 5: button element
- line 5: `onClick={handleClick}` passes the function to React

### Common Mistakes

- writing `onclick` instead of `onClick`
- calling the function immediately with `handleClick()`
- misspelling camelCase event names

### What Breaks If Done Wrong

- the event may not fire
- the handler may run too early
- React may ignore the bad prop

### Real Use Case

- submit buttons
- modal open/close buttons
- hover-driven menus
- interactive cards

### Mini Practice

```javascript
function handleMouseEnter() {
  console.log("Hovered");
}

function App() {
  return <button onMouseEnter={handleMouseEnter}>Hover me</button>;
}
```

### Key Takeaway

React event names use camelCase, and you pass a function reference to them.
