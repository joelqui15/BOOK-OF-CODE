# Concept: Lifting State (Sharing State Between Components)

## What It Is

Lifting state means moving state from a child component up to a parent component so multiple components can share and use that same data.

## Why It Exists

Sometimes multiple components need the same data.

Without lifting state:

- each component has its own separate state
- data becomes inconsistent
- components can’t communicate properly

Lifting state solves:

- sharing data between components
- keeping a single source of truth
- syncing UI across components

## When To Use

- when multiple components need the same state
- when a child needs to update parent data
- when state affects multiple parts of the UI
- when building controlled components

## Mental Model

Lifting state =
👉 “Move the data UP so everyone can use it”

Instead of:

- Child owns state ❌

Do:

- Parent owns state ✅
- Children receive it via props

---

## Pattern

Before (state in child):

    function Child() {
      const [value, setValue] = React.useState("");

      return <input onChange={(e) => setValue(e.target.value)} />;
    }

After (state lifted to parent):

    function Parent() {
      const [value, setValue] = React.useState("");

      function handleChange(e) {
        setValue(e.target.value);
      }

      return <Child onChange={handleChange} />;
    }

    function Child(props) {
      return <input onChange={props.onChange} />;
    }

---

## Example

    // App.jsx (parent)
    function App() {
      const [theme, setTheme] = React.useState("day");

      function handleThemeChange(e) {
        setTheme(e.target.value);
      }

      return (
        <div className={theme}>
          <h2>Welcome</h2>

          <ThemeIcon theme={theme} />
          <ThemeSelect onChange={handleThemeChange} theme={theme} />
        </div>
      );
    }

    // ThemeSelect.jsx (child)
    function ThemeSelect(props) {
      return (
        <select onChange={props.onChange}>
          <option value="day">Day</option>
          <option value="night">Night</option>
        </select>
      );
    }

    // ThemeIcon.jsx (child)
    function ThemeIcon(props) {
      return (
        <div>
          {props.theme === "day" ? "☀️" : "🌙"}
        </div>
      );
    }

---

## Line-by-Line

- `const [theme, setTheme] = React.useState("day");`
  → creates shared state in parent

- `function handleThemeChange(e)`
  → function to update state

- `setTheme(e.target.value)`
  → updates theme based on user input

- `<div className={theme}>`
  → applies theme class to entire app

- `<ThemeIcon theme={theme} />`
  → passes state down to child

- `<ThemeSelect onChange={handleThemeChange} theme={theme} />`
  → passes handler + state to child

- `props.onChange`
  → child triggers parent function

- `props.theme`
  → child receives current state

---

## Common Mistakes

- keeping state in child when multiple components need it
- forgetting to pass props down
- not passing handler functions
- mutating state directly
- confusing prop drilling with state ownership

---

## What Breaks If Done Wrong

- components show different data (out of sync)
- UI doesn’t update correctly
- changes don’t propagate
- bugs from duplicated state

Example bug:

    function ThemeSelect() {
      const [theme, setTheme] = useState("day");
    }

    function ThemeIcon() {
      const [theme, setTheme] = useState("day");
    }

Why wrong:

- two separate states → not synced

---

## Real Use Case

- form inputs shared across components
- theme toggles (dark/light mode)
- user authentication state
- shopping cart data

---

## Mini Practice

    // TASK:
    // Move count state to parent so both components use it

    function CounterDisplay() {
      return <p>Count: ?</p>;
    }

    function CounterButton() {
      return <button>Increment</button>;
    }

Solution:

    function App() {
      const [count, setCount] = React.useState(0);

      function handleClick() {
        setCount(count + 1);
      }

      return (
        <>
          <CounterDisplay count={count} />
          <CounterButton onClick={handleClick} />
        </>
      );
    }

    function CounterDisplay(props) {
      return <p>Count: {props.count}</p>;
    }

    function CounterButton(props) {
      return <button onClick={props.onClick}>Increment</button>;
    }

---

## Key Takeaway

Lift state to the closest common parent so multiple components can share and stay in sync.

---

## Additional Concept: Props = Data Flow Down

### What It Is

Props are how parent components pass data and functions to children.

### Example

    <Child value={value} onChange={handleChange} />

### Why It Matters

- children don’t own shared state
- they receive it from parent

### Key Takeaway

Data flows DOWN from parent to child via props.

---

## Additional Concept: Single Source of Truth

### What It Is

There should only be ONE place where state lives.

### Why It Matters

- avoids duplicated state
- prevents bugs
- keeps UI consistent

### Key Takeaway

Always store shared state in ONE component (usually the parent).

---

## Additional Concept: Passing Functions as Props

### What It Is

You pass functions to children so they can update parent state.

### Example

    function Parent() {
      function handleClick() {}
      return <Child onClick={handleClick} />;
    }

### Key Takeaway

Children don’t change state directly — they call parent functions.
