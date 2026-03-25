# Concept: JSX Syntax (Core Rules + Patterns)

## What It Is

JSX is a syntax that lets you write HTML-like code inside JavaScript to describe UI in React.

## Why It Exists

Without JSX:

- UI and logic are separated
- code becomes harder to read and maintain

JSX solves:

- combining UI + logic
- making dynamic interfaces easier
- improving readability

## When To Use

- Every time you build UI in React
- When rendering dynamic content
- When UI depends on conditions or state

## Mental Model

JSX = JavaScript + HTML combined

You are writing UI that reacts to data instead of static HTML.

## Pattern

```javascript
const condition = true;

<div>{condition ? <h1>True</h1> : <h1>False</h1>}</div>;
```

## Example

```javascript
function App() {
  const isDaylight = true;

  return (
    <div>{isDaylight ? <h2>Good morning!</h2> : <h2>Good evening!</h2>}</div>
  );
}
```

## Line-by-Line

- line 1: Defines a React component
- line 2: Variable that controls UI behavior
- line 4: `return` tells React what UI to render
- line 5: JSX container element
- line 6: `{}` allows JavaScript inside JSX
- line 6: Ternary operator decides which element to render
- line 7: Closes container
- line 8: Ends return
- line 9: Ends component

## Common Mistakes

- Forgetting `{}` around JavaScript expressions
- Trying to use `if` inside JSX instead of ternary
- Treating JSX exactly like HTML
- Forgetting JSX must return ONE parent element

## What Breaks If Done Wrong

- Syntax errors
- UI won’t render
- React crashes or throws errors
- Logic doesn’t execute properly

## Real Use Case

- Showing logged-in vs logged-out UI
- Rendering API data
- Conditional UI (loading, success, error)
- Dynamic text or styling

## Mini Practice

```javascript
const isLoggedIn = false;

function App() {
  return <div>{isLoggedIn ? "Welcome" : "Please log in"}</div>;
}
```

## Key Takeaway

JSX lets you combine UI and logic so your interface reacts to data.

## Additional JSX Rules

### Conditional Rendering (&&)

#### Pattern

```javascript
condition && <Element />;
```

#### Example

```javascript
function App() {
  const isLunchTime = true;

  return <div>{isLunchTime && <h2>Time for lunch!</h2>}</div>;
}
```

#### Line-by-Line

- line 2: Condition variable
- line 5: JSX container
- line 6: `&&` renders only if condition is true

#### Common Mistakes

- Expecting else behavior
- Using non-boolean values incorrectly

#### What Breaks If Done Wrong

- Element may not render as expected

#### Real Use Case

- Showing optional UI like alerts or badges

#### Mini Practice

```javascript
const isPremium = true;

function App() {
  return <div>{isPremium && <p>Premium User</p>}</div>;
}
```

#### Key Takeaway

Use `&&` to render something only when a condition is true.

### JSX vs HTML Differences

#### Pattern

```javascript
<div className="box"></div>
```

#### Example

```javascript
function App() {
  return <div className="container">Content</div>;
}
```

#### Line-by-Line

- `className` replaces HTML `class`
- JSX follows JavaScript rules

#### Common Mistakes

- Using `class` instead of `className`

#### What Breaks If Done Wrong

- Styles won’t apply correctly

#### Real Use Case

- Styling React components

#### Mini Practice

```javascript
function App() {
  return <div className="box">Hello</div>;
}
```

#### Key Takeaway

JSX uses `className` instead of `class`.

### Inline Styles in JSX

#### Pattern

```javascript
<div style={{ color: "red", backgroundColor: "black" }}></div>
```

#### Example

```javascript
function App() {
  return (
    <div style={{ width: 300, height: 300, backgroundColor: "blue" }}>Box</div>
  );
}
```

#### Line-by-Line

- outer `{}` enters JavaScript
- inner `{}` defines an object
- camelCase is used for CSS property names

#### Common Mistakes

- Using a string instead of an object
- Using kebab-case instead of camelCase

#### What Breaks If Done Wrong

- Styles won’t apply

#### Real Use Case

- Dynamic styling based on state or props

#### Mini Practice

```javascript
function App() {
  return <div style={{ color: "green" }}>Text</div>;
}
```

#### Key Takeaway

Inline styles use JavaScript objects with camelCase property names.

### Fragments

#### Pattern

```javascript
<>
  <h1>Title</h1>
  <p>Text</p>
</>
```

#### Example

```javascript
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}
```

#### Line-by-Line

- `<>...</>` groups elements without adding an extra `div`

#### Common Mistakes

- Adding unnecessary wrapper divs

#### What Breaks If Done Wrong

- Messy DOM structure
- Extra wrapper elements that can affect layout

#### Real Use Case

- Returning multiple sibling elements from a component cleanly

#### Mini Practice

```javascript
function App() {
  return (
    <>
      <p>A</p>
      <p>B</p>
    </>
  );
}
```

#### Key Takeaway

Fragments avoid unnecessary DOM elements.

### Self-Closing Tags

#### Pattern

```javascript
<img src="image.png" />
```

#### Example

```javascript
function App() {
  return <input type="text" />;
}
```

#### Line-by-Line

- JSX requires all tags to be properly closed

#### Common Mistakes

- Forgetting the `/` in self-closing tags

#### What Breaks If Done Wrong

- Syntax errors
- JSX won’t compile

#### Real Use Case

- Inputs, images, break tags, and React components with no children

#### Mini Practice

```javascript
function App() {
  return <img src="test.png" />;
}
```

#### Key Takeaway

All JSX tags must be properly closed.

## Final Key Takeaway

JSX is JavaScript-driven UI syntax that allows your interface to react to data.
