# Sprint 10 Cheat Sheet

## Concepts

- JSX (syntax + rules)
- Components (functional + class)
- Props
- State (class vs useState)
- useEffect (side effects)
- Effect dependencies
- Virtual DOM
- Vite (project setup)

---

## Pattern

```javascript
function Component(props) {
  const [state, setState] = React.useState(initialValue);

  return <div>{props.value}</div>;
}
```

## Line-by-Line

- line 1: defines functional component
- line 2: creates state variable + setter
- line 4: returns JSX UI
- props.value: dynamic data from parent

---

## Pattern

```javascript
React.useEffect(() => {
  // side effect

  return () => {
    // cleanup
  };
}, [dependency]);
```

## Line-by-Line

- line 1: useEffect runs after render
- line 2: side effect logic
- line 4: cleanup function
- line 6: dependency controls when it reruns

---

## Pattern

```javascript
const [value, setValue] = React.useState(0);
setValue(value + 1);
```

## Line-by-Line

- line 1: initializes state
- line 2: updates state
- triggers re-render

---

## Pattern

```javascript
{
  condition ? <A /> : <B />;
}
```

## Line-by-Line

- condition: determines which UI renders
- <A />: true case
- <B />: false case

---

## Pattern

```javascript
{
  condition && <Component />;
}
```

## Line-by-Line

- renders only if condition is true

---

## Common Mistakes

- forgetting dependency array in useEffect
- mutating state instead of creating new copy
- using class instead of className
- forgetting JSX must return ONE parent
- calling hooks inside conditions
- forgetting cleanup in useEffect
- misunderstanding async state updates

---

## Debugging Notes

- state not updating → check if using setter
- infinite re-render → check useEffect dependencies
- UI not rendering → check JSX return
- event not working → check handler binding
- styles not applying → check className vs class

---

## Real App Use

- dashboards (dynamic UI updates)
- forms (input state)
- API data rendering
- modals and toggles
- live UI (chat, notifications)

---

## Key Takeaways

- React is UI driven by state
- useState replaces class state
- useEffect replaces lifecycle methods
- dependencies control performance
- JSX = JavaScript-driven UI
