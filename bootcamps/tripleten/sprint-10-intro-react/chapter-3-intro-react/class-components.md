# Concept: Class Components (State + Lifecycle Basics)

## What It Is

A class component is a React component built using ES6 classes instead of functions.

It extends `React.Component` and uses:

- `render()` to return JSX
- `this.props` to access props
- `this.state` to store internal data

## Why It Exists

Before hooks:

- class components were the ONLY way to manage state

They solve:

- storing internal component data (state)
- updating UI when state changes
- organizing component logic with methods

## When To Use

- understanding legacy React code
- learning how React state works under the hood
- when working with older projects

(Modern React prefers functional components + hooks)

## Mental Model

Class Component =
👉 Object with data (state) + behavior (methods)

React says:
“When state changes → re-render UI”

---

## Pattern

```javascript
class ComponentName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleAction = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.handleAction}>Click</button>
      </div>
    );
  }
}
```

---

## Example

```javascript
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }

  handleLike = () => {
    this.setState({ rating: 1 });
  };

  handleDislike = () => {
    this.setState({ rating: -1 });
  };

  render() {
    return (
      <div>
        <img src={`https://example.com/avatar/${this.props.id}`} width="75" />
        <p>{this.props.name}</p>

        <div className="rating">
          <button onClick={this.handleLike}>👍</button>
          {this.state.rating}
          <button onClick={this.handleDislike}>👎</button>
        </div>
      </div>
    );
  }
}
```

---

## Line-by-Line

- line 1: defines class component
- line 1: extends React.Component (inherits React behavior)
- line 2: constructor runs when component is created
- line 3: receives props
- line 4: super(props) passes props to parent class
- line 6: defines component state
- line 7: rating stored inside state
- line 10: defines like handler
- line 11: updates state using setState
- line 14: defines dislike handler
- line 15: updates state again
- line 18: render method returns JSX
- line 20: image using props
- line 21: displays props.name
- line 23: wrapper for rating UI
- line 24: button triggers like handler
- line 25: shows current state
- line 26: button triggers dislike handler

---

## Common Mistakes

- forgetting `super(props)`
- trying to use `this` without binding or arrow functions
- mutating state directly (`this.state.value = 1`)
- forgetting to use `setState`
- confusing `props` and `state`

---

## What Breaks If Done Wrong

- component won’t initialize correctly
- state updates won’t trigger re-render
- UI becomes out of sync
- runtime errors with `this`

---

## Real Use Case

- rating systems (like/dislike)
- counters
- forms with internal state
- interactive UI components

---

## Mini Practice

```javascript
// TASK:
// Build a class component called Counter
// It should:
// - start at count = 0
// - have a button that increases count by 1
// - display the current count

// DO NOT look at the solution — write it yourself
```

---

## Key Takeaway

Class components store data in `this.state` and update UI using `setState`.

---

## Additional Concept: State

### What It Is

State is internal data that belongs to a component and can change over time.

### Pattern

```javascript
this.state = {
  value: 0,
};
```

### Key Takeaway

State controls what the UI shows.

---

## Additional Concept: setState

### What It Is

`setState` updates the component’s state and tells React to re-render.

### Pattern

```javascript
this.setState({ value: newValue });
```

### Example

```javascript
handleClick = () => {
  this.setState({ value: this.state.value + 1 });
};
```

### Line-by-Line

- reads current state
- creates new state
- triggers re-render

### Common Mistakes

- directly modifying state
- forgetting setState is async

### What Breaks If Done Wrong

- UI does not update

### Key Takeaway

Always use `setState` to update state.

---

## Additional Concept: Event Handlers in Classes

### Pattern

```javascript
handleClick = () => {
  console.log("clicked");
};
```

### Why Arrow Functions?

- keeps correct `this` context

### Common Mistakes

- using regular functions and losing `this`

### Key Takeaway

Use arrow functions for class event handlers.

---

## Additional Concept: Props vs State

### Props

- passed into component
- read-only

### State

- internal to component
- can change

### Key Takeaway

Props = external data  
State = internal data

---

## Additional Concept: Class vs Functional Components

### Difference

Class Components:

- use this.state
- use setState
- more verbose

Functional Components:

- use hooks (useState, useEffect)
- simpler and modern

### Key Takeaway

👉 Class components are legacy  
👉 Functional components are the modern standard

---

## Final Key Takeaway

Class components manage internal state and behavior, but modern React uses functional components with hooks instead.
