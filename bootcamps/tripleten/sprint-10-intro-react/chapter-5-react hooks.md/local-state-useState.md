# Link: https://youtu.be/O6P86uwfdR0?si=cD4YsGp_B31x_jhQ

# Concept: Local State with useState (Functional Components)

## What It Is

`useState` is a React hook that lets functional components store and manage internal state.

It replaces `this.state` and `setState` from class components.

## Why It Exists

Before hooks:

- only class components could use state

Problems:

- more complex syntax
- harder to read and maintain

useState solves:

- simpler state management
- cleaner functional components
- less boilerplate

## When To Use

- when component needs internal data
- when UI changes over time (clicks, inputs, toggles)
- in ALL modern React apps

## Mental Model

useState =
👉 “a variable + a setter function”

```javascript
const [value, setValue] = useState(initialValue);
```

---

## Pattern

```javascript
const [state, setState] = React.useState(initialValue);
```

---

## Example

```javascript
function User(props) {
  const [rating, setRating] = React.useState(0);

  function handleLike() {
    setRating(1);
  }

  function handleDislike() {
    setRating(-1);
  }

  return (
    <div className="user">
      <img src={`img/${props.id}.png`} width="75" />
      <p>{props.name}</p>

      <div className="rating">
        <button onClick={handleLike} disabled={rating > 0}>
          👍
        </button>
        {rating}
        <button onClick={handleDislike} disabled={rating < 0}>
          👎
        </button>
      </div>
    </div>
  );
}
```

---

## Line-by-Line

- line 2: creates state variable `rating`
- line 2: `setRating` updates state
- line 4: like handler function
- line 5: sets rating to 1
- line 8: dislike handler
- line 9: sets rating to -1
- line 13: JSX container
- line 14: dynamic image using props
- line 15: displays name
- line 18: button triggers like handler
- line 18: disabled when already liked
- line 19: shows rating value
- line 20: button triggers dislike handler
- line 20: disabled when already disliked

---

## Common Mistakes

- forgetting to call setter (setRating)
- trying to modify state directly
- misunderstanding destructuring syntax
- expecting immediate state updates

---

## What Breaks If Done Wrong

- UI won’t update
- state becomes inconsistent
- bugs from stale values

---

## Real Use Case

- like/dislike systems
- counters
- form inputs
- toggles (dark mode, menus)

---

## Mini Practice

```javascript
// TASK:
// Build a functional component called Counter
// Requirements:
// - use useState
// - start count at 0
// - button increments count by 1
// - display count

// Do NOT copy — write it yourself
```

---

## Key Takeaway

useState lets functional components store and update internal data.

---

## Additional Concept: Destructuring

### What It Is

useState returns an array:

- first value = state
- second value = setter

### Pattern

```javascript
const [value, setValue] = React.useState(0);
```

### Key Takeaway

Array destructuring gives names to state and updater.

---

## Additional Concept: Multiple State Values

### Pattern

```javascript
const [rating, setRating] = React.useState(0);
const [isBlocked, setIsBlocked] = React.useState(false);
const [notes, setNotes] = React.useState([]);
```

### Key Takeaway

You can use multiple useState hooks in one component.

---

## Additional Concept: Rules of Hooks

### Rule

Hooks must be called:

- at the top level
- not inside loops or conditions

### Wrong

```javascript
if (condition) {
  useState(0);
}
```

### Correct

```javascript
const [value, setValue] = useState(0);
```

### Key Takeaway

Hooks must run in the same order every render.

---

## Additional Concept: State Updates (Async)

### What It Is

State updates are NOT immediate.

### Example

```javascript
setValue(value + 1);
```

May not update instantly.

### Key Takeaway

Don’t rely on immediate state after calling setter.

---

## Additional Concept: Updating Arrays (NO Mutation)

### Wrong

```javascript
array.push("Four");
setArray(array);
```

### Correct

```javascript
setArray([...array, "Four"]);
```

### Key Takeaway

Always create a NEW array.

---

## Additional Concept: Updating Objects (NO Mutation)

### Wrong

```javascript
object.name = "Gregory";
setObject(object);
```

### Correct

```javascript
setObject({
  ...object,
  name: "Gregory",
});
```

### Key Takeaway

Always create a NEW object.

---

## Final Key Takeaway

useState is the modern way to manage state in React — simple, powerful, and essential for building dynamic UI.
