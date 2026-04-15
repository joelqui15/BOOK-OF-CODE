# Concept: Pure Components (React.memo & React.PureComponent)

## What It Is

Pure components are components that only re-render when their props change.

## Why It Exists

By default in React:

- when a parent re-renders ❌
- ALL child components re-render ❌

Problem:

- unnecessary renders
- wasted performance
- slower apps

Pure components solve:

- preventing unnecessary re-renders
- improving performance
- reducing wasted work

## When To Use

- when components receive props
- when performance matters
- when lists render many items
- when UI doesn’t need to update every render

## Mental Model

Pure Component =
👉 “Only update if something actually changed”

React asks:

- “Are props the same?”
- YES → skip render
- NO → re-render

---

## Pattern

Functional component:

    const Component = React.memo((props) => {
      return <div>{props.value}</div>;
    });

Class component:

    class Component extends React.PureComponent {
      render() {
        return <div>{this.props.value}</div>;
      }
    }

---

## Example

    const Chat = React.memo((props) => {
      return (
        <div>
          <img src={`img/${props.id}.png`} width="75" />
          <h2>{Math.random()}</h2>
          <p>{props.lastMessageAt}</p>
        </div>
      );
    });

---

## Line-by-Line

- `React.memo(...)`
  → wraps component in optimization

- `(props) => { ... }`
  → functional component

- `Math.random()`
  → used to show re-renders visually

- `props.id`
  → dynamic image

- `props.lastMessageAt`
  → displays message time

---

## Common Mistakes

- assuming React prevents re-renders automatically
- using memo everywhere unnecessarily
- misunderstanding shallow comparison
- passing new objects/functions every render

---

## What Breaks If Done Wrong

- performance does not improve
- components still re-render unexpectedly
- bugs due to stale props
- wasted optimization effort

---

## Real Use Case

- chat apps
- lists of posts/products
- dashboards
- heavy UI components

---

## Mini Practice

    // TASK:
    // Wrap a component with React.memo
    // and verify it only re-renders when props change

    const Item = React.memo((props) => {
      console.log("rendered");
      return <p>{props.name}</p>;
    });

---

## Key Takeaway

Pure components prevent unnecessary re-renders by comparing props.

---

## Additional Concept: Default React Behavior (Re-render Chain)

### What It Is

When a parent renders:

- all children render too

### Example

    function Parent() {
      return <Child />;
    }

Even if Child props don’t change → it still re-renders.

### Key Takeaway

React does NOT optimize re-renders by default.

---

## Additional Concept: React.memo

### What It Is

A higher-order component that memoizes functional components.

### Example

    const Component = React.memo(MyComponent);

### What It Does

- compares previous props vs new props
- skips render if no change

### Key Takeaway

Use `React.memo` to optimize functional components.

---

## Additional Concept: React.PureComponent

### What It Is

A class-based version of React.memo.

### Example

    class MyComponent extends React.PureComponent {}

### Key Takeaway

Use for class components only.

---

## Additional Concept: Shallow Comparison

### What It Is

React compares props using `===`

### Example

    prevProps.name === newProps.name

### Important

Works well for:

- primitives (strings, numbers)

Not good for:

- objects
- arrays
- functions

### Key Takeaway

Shallow comparison checks reference, not deep values.

---

## Additional Concept: Why Objects Break Memo

### What It Is

New objects are created every render.

### Example

    <Component data={{ name: "Joel" }} />

Every render:

- new object ❌
- fails comparison ❌
- causes re-render ❌

### Fix

Store object outside render or in state.

### Key Takeaway

Avoid inline objects when using memo.

---

## Additional Concept: When NOT To Use Memo

### Avoid When

- component is simple/light
- props always change
- no performance issue

### Why

- adds unnecessary complexity
- small components don’t benefit

### Key Takeaway

Optimize ONLY when needed.

---

## Additional Concept: Preventing Render Chains

### Problem

Parent re-renders → children re-render

### Solution

Use memo:

    const Child = React.memo(() => { ... });

### Result

- child skips render if props unchanged

### Key Takeaway

Memo stops render chains.

---

## Additional Concept: Real Performance Impact

### What It Is

Memo reduces:

- DOM updates
- CPU usage

### Example

List of 100 items:

- without memo → 100 renders
- with memo → only changed items render

### Key Takeaway

Pure components improve performance in large apps.
