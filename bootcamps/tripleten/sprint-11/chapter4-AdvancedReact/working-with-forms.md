# Concept: Working with Forms in React

## What It Is

Working with forms in React means controlling input values using component state and handling user interactions like typing, submitting, and resetting.

## Why It Exists

In plain HTML:

- inputs manage their own state ❌

Problems:

- hard to access input values
- difficult to control behavior
- not synced with app logic

React solves this by:

- syncing input values with state
- giving full control over form data
- making data predictable and easy to use

## When To Use

- whenever handling user input
- forms (login, signup, search)
- any input fields (text, select, checkbox)
- when you need to store or process user data

## Mental Model

Controlled Input =
👉 “React controls the input, not the browser”

Flow:

User types → onChange fires → state updates → UI updates

---

## Pattern

    const [value, setValue] = React.useState("");

    function handleChange(e) {
      setValue(e.target.value);
    }

    return (
      <input value={value} onChange={handleChange} />
    );

---

## Example

    function Form({ handleFormSubmit }) {
      const [inputValue, setInputValue] = React.useState("");

      function handleChange(event) {
        setInputValue(event.target.value);
      }

      function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(inputValue);
      }

      function handleReset() {
        setInputValue("");
      }

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      );
    }

---

## Line-by-Line

- `const [inputValue, setInputValue] = useState("")`
  → creates state for input

- `handleChange(event)`
  → runs when user types

- `event.target.value`
  → gets input value

- `setInputValue(...)`
  → updates state

- `handleSubmit(event)`
  → runs when form submits

- `event.preventDefault()`
  → stops page reload

- `handleFormSubmit(inputValue)`
  → sends data to parent

- `handleReset()`
  → clears input

- `value={inputValue}`
  → connects input to state

- `onChange={handleChange}`
  → updates state when typing

---

## Common Mistakes

- forgetting `onChange`
- not setting `value`
- forgetting `event.preventDefault()`
- trying to access input without state
- not passing data to parent correctly

---

## What Breaks If Done Wrong

- input becomes uneditable
- form refreshes page unexpectedly
- data is lost or inaccessible
- UI and state become out of sync

---

## Real Use Case

- login/signup forms
- search bars
- comment inputs
- profile forms
- filters and dropdowns

---

## Mini Practice

    // TASK:
    // Build a form with:
    // - one input
    // - controlled state
    // - submit logs value
    // - reset clears input

    function PracticeForm() {
      const [value, setValue] = React.useState("");

      function handleChange(e) {
        setValue(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
        console.log(value);
      }

      function handleReset() {
        setValue("");
      }

      return (
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={handleChange} />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      );
    }

---

## Key Takeaway

Controlled inputs keep form data inside React state, giving you full control over user input.

---

## Additional Concept: Controlled vs Uncontrolled Inputs

### What It Is

Controlled:

- value comes from React state

Uncontrolled:

- value comes from DOM

### Example

Controlled:

    <input value={value} onChange={handleChange} />

Uncontrolled:

    <input type="text" />

### Key Takeaway

React prefers controlled inputs for predictable behavior.

---

## Additional Concept: event.target.value

### What It Is

The value the user typed into the input.

### Example

    function handleChange(e) {
      console.log(e.target.value);
    }

### Key Takeaway

`event.target.value` is how you read user input.

---

## Additional Concept: Lifting State Up (Form Submission)

### What It Is

Passing form data to a parent component.

### Flow

Child:

- collects input
- calls parent function

Parent:

- receives data
- stores or processes it

### Example

Parent:

    function App() {
      function handleFormSubmit(data) {
        console.log(data);
      }

      return <Form handleFormSubmit={handleFormSubmit} />;
    }

Child:

    handleFormSubmit(inputValue);

### Key Takeaway

Forms often send data UP to parent components.

---

## Additional Concept: Form Submission Behavior

### What It Is

Forms reload the page by default.

### Fix

    event.preventDefault();

### Why It Matters

- prevents page refresh
- keeps SPA behavior intact

### Key Takeaway

Always prevent default form submission in React.

---

## Additional Concept: Resetting Inputs

### What It Is

Clearing form values manually.

### Example

    setInputValue("");

### Why It Matters

- resets UI
- improves UX

### Key Takeaway

Reset = just update state back to initial value.
