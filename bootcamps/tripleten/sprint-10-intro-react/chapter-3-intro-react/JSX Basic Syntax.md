# Concept: JSX Basic Syntax (Conditional Logic + Rules)

## What It Is

JSX allows you to write HTML-like UI inside JavaScript and control it using JavaScript logic such as conditions and expressions.

## Why It Exists

Without JSX:

- UI is static and harder to control dynamically
- logic and UI are separated

JSX solves:

- writing dynamic UI directly with logic
- describing multiple UI states in one place
- making interfaces reactive and easier to reason about

## When To Use

- when UI depends on conditions (day/night, logged in/out)
- when rendering different content based on state
- when dynamically applying styles or text

## Mental Model

JSX = UI that reacts to variables

👉 “If this condition is true → show this UI”
👉 “If false → show something else”

You describe possibilities, not steps.

---

## Pattern (Ternary Operator)

```javascript
condition ? valueIfTrue : valueIfFalse;
```

---

## Example

```javascript
function App() {
  const isDaylight = true;

  return (
    <div>{isDaylight ? <h2>Good morning!</h2> : <h2>Good evening!</h2>}</div>
  );
}
```

---

## Line-by-Line

- line 1: defines React component
- line 2: variable controlling UI
- line 4: return JSX
- line 5: wrapper element
- line 6: `{}` allows JavaScript inside JSX
- line 6–10: ternary operator decides which UI to render
- line 7: UI when condition is true
- line 9: UI when condition is false
- line 11: closes wrapper

---

## Common Mistakes

- trying to use `if` instead of ternary inside JSX
- forgetting `{}` around JavaScript
- returning multiple elements without wrapping
- overcomplicating conditions

---

## What Breaks If Done Wrong

- syntax errors
- UI not rendering correctly
- incorrect condition output

---

## Real Use Case

- showing “Good morning” vs “Good evening”
- toggling UI based on login state
- showing loading vs data vs error states

---

## Mini Practice

```javascript
const isOnline = true;

function App() {
  return <div>{isOnline ? <p>Online</p> : <p>Offline</p>}</div>;
}
```

---

## Key Takeaway

Use ternary operators in JSX to switch between UI states based on conditions.

---

## Additional JSX Rules

### Logical AND (&&)

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

- line 2: condition variable
- line 5: JSX wrapper
- line 6: renders element only if condition is true

#### Common Mistakes

- expecting an else case
- using non-boolean conditions incorrectly

#### What Breaks If Done Wrong

- element might not render as expected

#### Real Use Case

- showing optional UI like banners, alerts, badges

#### Mini Practice

```javascript
const showMessage = true;

function App() {
  return <div>{showMessage && <p>Hello!</p>}</div>;
}
```

#### Key Takeaway

Use `&&` when you only want to render something if a condition is true.

---

### JSX vs HTML (className)

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

- className replaces HTML class
- JSX follows JavaScript rules

#### Common Mistakes

- using `class` instead of `className`

#### What Breaks If Done Wrong

- styles won’t apply

#### Real Use Case

- applying CSS classes to components

#### Mini Practice

```javascript
function App() {
  return <div className="card">Card</div>;
}
```

#### Key Takeaway

Always use `className` in JSX.

---

### Inline Styles

#### Pattern

```javascript
<div style={{ color: "red" }}></div>
```

#### Example

```javascript
function App() {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "#9b4388",
        color: "black",
      }}
    >
      What planet am I?
    </div>
  );
}
```

#### Line-by-Line

- outer `{}` enters JavaScript
- inner `{}` defines object
- camelCase replaces kebab-case (borderRadius)
- values are JavaScript values (numbers, strings)

#### Common Mistakes

- using string instead of object
- using kebab-case instead of camelCase

#### What Breaks If Done Wrong

- styles won’t render

#### Real Use Case

- dynamic styling based on state

#### Mini Practice

```javascript
function App() {
  return <div style={{ color: "blue" }}>Hello</div>;
}
```

#### Key Takeaway

Inline styles use JavaScript objects with camelCase.

---

### Double Curly Braces

#### Pattern

```javascript
<div style={{ width: 100 }}></div>
```

#### Explanation

- first `{}` → enter JavaScript
- second `{}` → define object

#### Key Takeaway

JSX uses double curly braces when passing objects.

---

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
      <button type="submit">Click me!</button>
      <div>Was it clicked?</div>
      <div>Yes, it was clicked!</div>
    </>
  );
}
```

#### Line-by-Line

- `<>...</>` groups elements without extra div
- allows multiple siblings

#### Common Mistakes

- adding unnecessary wrapper divs

#### What Breaks If Done Wrong

- messy DOM
- unwanted layout issues

#### Real Use Case

- clean component return without extra elements

#### Mini Practice

```javascript
function App() {
  return (
    <>
      <p>One</p>
      <p>Two</p>
    </>
  );
}
```

#### Key Takeaway

Fragments prevent unnecessary wrapper elements.

---

### Self-Closing Tags

#### Pattern

```javascript
<input />
```

#### Example

```javascript
function App() {
  return <img src="image.png" />;
}
```

#### Line-by-Line

- JSX requires all tags to close
- even normally open tags must be self-closed

#### Common Mistakes

- forgetting `/`

#### What Breaks If Done Wrong

- syntax errors

#### Real Use Case

- inputs, images, components without children

#### Mini Practice

```javascript
function App() {
  return <input type="text" />;
}
```

#### Key Takeaway

All JSX tags must be closed.

---

## Final Key Takeaway

JSX lets you write dynamic UI using JavaScript logic directly inside your markup.
