Concept: Vite Basics (React Project Setup + Tooling)

## What It Is

Vite is a modern build tool that helps you quickly create and run React applications.

It handles:

- project setup
- development server
- bundling code
- optimizing production builds

## Why It Exists

Without tools like Vite:

- you would manually configure bundlers (Webpack)
- setup would be slow and complex
- development would be harder

Vite solves:

- fast project setup
- instant reload during development
- automatic configuration (Babel, bundler, etc.)
- optimized production builds

## When To Use

- when starting a new React project
- when you want fast development feedback
- when using modern JavaScript features (ES modules)

## Mental Model

Vite =
👉 “Pre-built React environment”

Instead of building everything yourself, Vite gives you a ready-to-go setup.

---

## Pattern (Basic React Setup Without Vite)

```javascript
<script type="text/jsx">
  function Switch(props) {
    return null;
  }

  ReactDOM.render(
    <>
      <Switch title="Happy" color="blue" isActive={true} />
      <Switch title="Love" color="orange" isActive={false} />
      <Switch title="Taco" color="green" isActive={false} />
    </>,
    document.querySelector("#root")
  );
</script>
```

---

## Example (With Imports Using Vite)

```javascript
import React from "react";
import ReactDOM from "react-dom";

function Switch(props) {
  return null;
}

ReactDOM.render(
  <>
    <Switch title="Happy" color="blue" isActive={true} />
    <Switch title="Love" color="orange" isActive={false} />
    <Switch title="Taco" color="green" isActive={false} />
  </>,
  document.querySelector("#root"),
);
```

---

## Line-by-Line

- line 1: imports React library
- line 2: imports ReactDOM for rendering
- line 4: defines component
- line 8: starts rendering React app
- line 9–11: renders multiple components
- line 9–11: passes props into components
- line 13: attaches app to DOM element

---

## Common Mistakes

- forgetting to import React or ReactDOM
- not understanding what imports do
- thinking `<script>` approach scales well
- not separating code into modules

---

## What Breaks If Done Wrong

- app won’t run
- components won’t render
- errors about undefined React/ReactDOM

---

## Real Use Case

- creating modern React apps
- organizing code into files
- scaling applications
- using third-party libraries

---

## Mini Practice

```javascript
// TASK:
// Rewrite this code using imports instead of <script>:

<script type="text/jsx">
  function Button(props) {
    return <button>{props.text}</button>;
  }

  ReactDOM.render(
    <Button text="Click me" />,
    document.querySelector("#root")
  );
</script>

// Your goal:
// - remove <script>
// - use import React and ReactDOM
// - keep functionality the same
```

---

## Key Takeaway

Vite removes setup complexity and lets you focus on building your React app.

---

## Additional Concept: Imports

### What It Is

Imports allow you to bring code from other files or libraries into your file.

### Pattern

```javascript
import Something from "library";
```

### Example

```javascript
import React from "react";
import ReactDOM from "react-dom";
```

### Line-by-Line

- line 1: imports React
- line 2: imports ReactDOM

### Common Mistakes

- forgetting imports
- incorrect file paths
- mixing default vs named imports

### What Breaks If Done Wrong

- module not found errors
- undefined variables

### Key Takeaway

Imports allow modular, organized code.

---

## Additional Concept: Why Vite is Fast

### Reason

- uses native ES modules
- avoids heavy bundling during development
- updates only changed modules

### Key Takeaway

Vite is faster than older tools like Webpack.

---

## Additional Concept: Development vs Production

### Development

- fast refresh
- debugging enabled

### Production

- optimized build
- smaller bundle size

### Pattern

```bash
npm run dev
npm run build
```

### Key Takeaway

Vite provides both development and production environments.

---

## Additional Concept: Why Not Use Script Tags

### Problem

```html
<script type="text/jsx">
```

- not scalable
- hard to organize code
- no module system

### Solution

Use imports + Vite project structure.

### Key Takeaway

Modern React apps do NOT use script tags — they use modules.

---

## Final Key Takeaway

Vite is a tool that sets up, runs, and optimizes your React app so you can focus on writing components instead of configuring everything manually.
