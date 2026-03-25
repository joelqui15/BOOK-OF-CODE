# Concept: Lifecycle of Class Components

## What It Is

The lifecycle of a class component is the sequence of stages a component goes through:

- mounting (created and added to the DOM)
- updating (re-rendering when data changes)
- unmounting (removed from the DOM)

Each stage has built-in methods that React calls automatically.

## Why It Exists

Without lifecycle methods:

- you wouldn’t know when a component appears or disappears
- you couldn’t run code at the right time (like fetching data or cleaning up)

This solves:

- running logic at specific times
- handling side effects (timers, API calls)
- controlling component behavior

## When To Use

- when you need to run code on load
- when reacting to state/prop changes
- when cleaning up resources (timers, listeners)

## Mental Model

Component lifecycle =
👉 “Born → Updated → Destroyed”

React gives you hooks (methods) at each stage.

---

## Pattern

```javascript
class ComponentName extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return <div />;
  }
}
```

---

## Example

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  tick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  componentDidMount() {
    this.counter = setInterval(() => this.tick(), 1000);
    console.log("Component mounted!");
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
    clearInterval(this.counter);
  }

  render() {
    console.log("Component rendered!");
    return <h1>{this.state.count}</h1>;
  }
}
```

---

## Line-by-Line

- line 1: defines class component
- line 2: constructor runs on creation
- line 3: passes props to parent
- line 5: initializes state
- line 6: count starts at 0
- line 9: tick function updates state
- line 10–14: increments count using previous state
- line 17: runs AFTER component is mounted
- line 18: sets interval to update count every second
- line 19: logs mount message
- line 22: runs AFTER every update
- line 23: logs update message
- line 26: runs BEFORE component is removed
- line 27: logs unmount message
- line 28: clears interval (cleanup)
- line 31: render method
- line 32: logs render message
- line 33: displays current count

---

## Common Mistakes

- forgetting to clear intervals or listeners
- updating state incorrectly (not using prevState)
- putting side effects inside render()
- misunderstanding when lifecycle methods run

---

## What Breaks If Done Wrong

- memory leaks (interval keeps running)
- UI updates incorrectly
- performance issues
- unexpected behavior

---

## Real Use Case

- timers and counters
- fetching API data when component loads
- updating UI when data changes
- cleaning up subscriptions or listeners

---

## Mini Practice

```javascript
// TASK:
// Create a class component called Timer
// Requirements:
// - state should have time starting at 0
// - increment time every 1 second
// - display the time
// - stop the timer when the component unmounts

// Build it yourself — do NOT copy from above
```

---

## Key Takeaway

Lifecycle methods let you run code when a component mounts, updates, and unmounts.

---

## Additional Concept: Mounting Phase

### What It Is

Mounting happens when the component is first added to the DOM.

### Method

```javascript
componentDidMount();
```

### Use Case

- start timers
- fetch data
- initialize things

### Key Takeaway

Runs ONCE after the component appears.

---

## Additional Concept: Updating Phase

### What It Is

Updating happens when:

- state changes
- props change

### Method

```javascript
componentDidUpdate();
```

### Use Case

- respond to data changes
- trigger side effects

### Key Takeaway

Runs after every update.

---

## Additional Concept: Unmounting Phase

### What It Is

Unmounting happens when the component is removed from the DOM.

### Method

```javascript
componentWillUnmount();
```

### Use Case

- cleanup timers
- remove event listeners
- cancel subscriptions

### Key Takeaway

Runs right before component is destroyed.

---

## Additional Concept: setState with prevState

### Pattern

```javascript
this.setState((prevState) => ({
  count: prevState.count + 1,
}));
```

### Why It Matters

State updates are asynchronous, so you must use previous state safely.

### Key Takeaway

Use `prevState` when new state depends on old state.

---

## Final Key Takeaway

React class lifecycle methods control WHEN your code runs during a component’s life, making it possible to manage side effects, updates, and cleanup correctly.
