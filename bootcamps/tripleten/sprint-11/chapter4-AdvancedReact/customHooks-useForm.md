# Concept: Custom Hooks (useForm)

## What It Is

A custom hook is a reusable JavaScript function that uses React hooks internally to share logic across components. `useForm` is a custom hook that manages form state and behavior in one place.

## Why It Exists

Without custom hooks:

- repetitive state for each input ❌
- multiple change handlers ❌
- messy and hard-to-maintain code ❌

Custom hooks solve:

- code duplication
- scalability issues
- readability problems

## When To Use

- when logic is repeated across components
- when managing multiple form inputs
- when state + handlers grow too large
- when you want cleaner, reusable logic

## Mental Model

Custom Hook =
👉 “A reusable brain for your component”

Instead of rewriting logic:

- you “plug in” a hook

---

## Pattern

    function useSomething() {
      // useState / useEffect inside
      return someValues;
    }

---

## Example

    import { useState } from "react";

    function useForm(defaultValues) {
      const [values, setValues] = useState(defaultValues);

      function handleChange(event) {
        const { name, value } = event.target;

        setValues({
          ...values,
          [name]: value
        });
      }

      function handleReset() {
        setValues(defaultValues);
      }

      return { values, handleChange, setValues, handleReset };
    }

    function RegistrationForm() {
      const { values, handleChange, handleReset } = useForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      function handleSubmit(e) {
        e.preventDefault();
        console.log(values);
      }

      return (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      );
    }

---

## Line-by-Line

- `useForm(defaultValues)`
  → custom hook function

- `useState(defaultValues)`
  → stores all form values in one object

- `{ name, value } = event.target`
  → extracts input name + value

- `[name]: value`
  → dynamic key update (important)

- `...values`
  → keeps previous fields

- `setValues({...})`
  → updates state immutably

- `handleReset()`
  → resets form to initial values

- `return { values, handleChange... }`
  → exposes logic to component

- `const { values, handleChange } = useForm(...)`
  → destructures returned values

- `value={values.name}`
  → connects input to state

- `onChange={handleChange}`
  → updates correct field automatically

---

## Common Mistakes

- forgetting `name` attribute on inputs
- not using `[name]: value`
- mutating state instead of copying
- forgetting to spread previous values
- not returning values from hook

---

## What Breaks If Done Wrong

- inputs stop updating
- state overwrites other fields
- form data becomes incomplete
- unexpected bugs in UI

Example bug:

    setValues({ name: value });

Problem:

- wipes out all other fields

---

## Real Use Case

- registration forms
- login forms
- checkout forms
- dashboards with multiple inputs

---

## Mini Practice

    // TASK:
    // Build a useForm hook that:
    // - stores values in one object
    // - updates fields dynamically
    // - includes reset functionality

    function useForm(defaultValues) {
      const [values, setValues] = React.useState(defaultValues);

      function handleChange(e) {
        const { name, value } = e.target;

        setValues({
          ...values,
          [name]: value
        });
      }

      function handleReset() {
        setValues(defaultValues);
      }

      return { values, handleChange, handleReset };
    }

---

## Key Takeaway

Custom hooks let you reuse logic and keep components clean and scalable.

---

## Additional Concept: Single State Object for Forms

### What It Is

Instead of one state per input, use one object.

### Example

    const [values, setValues] = useState({
      name: "",
      email: ""
    });

### Why It Matters

- reduces repetition
- easier to scale

### Key Takeaway

Use one object for multiple inputs.

---

## Additional Concept: Dynamic Key Updates

### What It Is

Updating object keys based on input name.

### Example

    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });

### Why It Matters

- one handler for all inputs

### Key Takeaway

`[name]` lets you update fields dynamically.

---

## Additional Concept: Hook Naming Rules

### Rule

Custom hooks must:

- start with `use`
- only call hooks at top level

### Example

    function useForm() {}

### Key Takeaway

React recognizes hooks by the `use` prefix.

---

## Additional Concept: Returning Values from Hooks

### What It Is

Hooks return data and functions.

### Example

    return { values, handleChange };

### Why It Matters

- lets components use the logic

### Key Takeaway

Hooks expose logic through return values.

---

## Additional Concept: Reusability

### What It Is

Same hook used across multiple components.

### Example

    const form1 = useForm({...});
    const form2 = useForm({...});

### Why It Matters

- DRY code (Don’t Repeat Yourself)
- scalable architecture

### Key Takeaway

Write logic once, reuse everywhere.
