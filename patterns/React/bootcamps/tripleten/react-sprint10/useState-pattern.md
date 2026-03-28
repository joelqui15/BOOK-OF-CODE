# useState Pattern

## Purpose

Store and update local component state.

## When To Use

- counters
- toggles
- form inputs
- UI state

## Pattern

```javascript
const [value, setValue] = React.useState(initialValue);
```

## Example

```javascript
function Counter() {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Line-by-Line

- line 2: initializes state
- line 4: button click updates state
- setCount triggers re-render
- UI reflects new value

## Common Mistakes

- modifying state directly
- forgetting setter
- expecting immediate update

## What Breaks If Done Wrong

- UI doesn’t update
- inconsistent state

## Notes

- state updates trigger re-render
