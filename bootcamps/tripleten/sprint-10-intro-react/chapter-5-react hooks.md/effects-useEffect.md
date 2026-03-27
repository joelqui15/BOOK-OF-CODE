# Concept: useEffect Hook (Side Effects in React)

## What It Is

`useEffect` is a React hook that lets you run side effects inside functional components.

Side effects = anything outside rendering UI:

- event listeners
- API calls
- timers
- DOM manipulation

## Why It Exists

Before hooks:

- used lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount)

Problems:

- logic spread across multiple methods
- harder to read and maintain

useEffect solves:

- putting side-effect logic in one place
- cleaner, more readable code
- combining lifecycle behavior

## When To Use

- adding/removing event listeners
- fetching data
- running code after render
- syncing UI with external systems

## Mental Model

useEffect =
👉 “Run this code AFTER render”

Optional:
👉 “Clean it up when component is removed”

---

## Pattern

```javascript
React.useEffect(() => {
  // side effect here

  return () => {
    // cleanup here
  };
}, []);
```

---

## Example

```javascript
function NeonCursor() {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        top: event.pageY,
        left: event.pageX,
      });
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.body.classList.add("no-cursor");

    return () => {
      document.body.classList.remove("no-cursor");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      src="./cursor.png"
      width={30}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        pointerEvents: "none",
      }}
    />
  );
}
```

---

## Line-by-Line

- line 2: creates state for cursor position
- line 4: useEffect runs after render
- line 5: defines event handler
- line 6–9: updates state based on mouse position
- line 12: adds event listener
- line 13: adds CSS class
- line 15: return = cleanup function
- line 16: removes class
- line 17: removes event listener
- line 20: JSX image element
- line 24–27: dynamically positions cursor

---

## Common Mistakes

- forgetting cleanup function
- adding listeners multiple times
- misunderstanding dependency array
- putting logic inside render instead of useEffect

---

## What Breaks If Done Wrong

- memory leaks
- duplicate event listeners
- performance issues
- unexpected behavior

---

## Real Use Case

- tracking mouse movement
- fetching API data
- timers (setInterval)
- animations
- subscriptions

---

## Mini Practice

```javascript
// TASK:
// Build a component that:
// - uses useEffect
// - logs "Mounted!" when component loads
// - logs "Unmounted!" when component is removed

// Do NOT copy — implement it yourself
```

---

## Key Takeaway

useEffect runs side effects after render and can clean them up when needed.

---

## Additional Concept: Cleanup Function

### What It Is

A function returned from useEffect that runs when component unmounts.

### Pattern

```javascript
return () => {
  // cleanup
};
```

### Example

```javascript
React.useEffect(() => {
  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);
```

### Key Takeaway

Always clean up side effects to avoid memory leaks.

---

## Additional Concept: Dependency Array

### What It Is

Controls when useEffect runs.

### Patterns

Run once:

```javascript
useEffect(() => {}, []);
```

Run on change:

```javascript
useEffect(() => {}, [value]);
```

Run every render:

```javascript
useEffect(() => {});
```

### Key Takeaway

Dependency array controls WHEN the effect runs.

---

## Additional Concept: Splitting Effects

### What It Is

You can use multiple useEffect hooks instead of combining logic.

### Example

```javascript
React.useEffect(() => {
  document.addEventListener("mousemove", handleMove);

  return () => {
    document.removeEventListener("mousemove", handleMove);
  };
}, []);

React.useEffect(() => {
  document.body.classList.add("no-cursor");

  return () => {
    document.body.classList.remove("no-cursor");
  };
}, []);
```

### Key Takeaway

Split effects by responsibility for cleaner code.

---

## Additional Concept: useEffect vs Lifecycle

### Equivalent

- componentDidMount → useEffect (with [])
- componentDidUpdate → useEffect (with dependencies)
- componentWillUnmount → cleanup function

### Key Takeaway

useEffect replaces lifecycle methods.

---

## Final Key Takeaway

useEffect lets you control side effects in functional components, replacing lifecycle methods with a cleaner, more flexible approach.
