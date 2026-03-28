# useEffect Pattern

## Purpose

Handle side effects (API calls, events, timers).

## When To Use

- fetching data
- event listeners
- timers

## Pattern

```javascript
React.useEffect(() => {
  // effect

  return () => {
    // cleanup
  };
}, [dependencies]);
```

## Example

```javascript
React.useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
```

## Line-by-Line

- runs after render
- cleanup runs before unmount
- [] = run once

## Common Mistakes

- missing dependencies
- no cleanup
- infinite loops

## What Breaks If Done Wrong

- memory leaks
- repeated API calls

## Notes

- dependencies control execution
