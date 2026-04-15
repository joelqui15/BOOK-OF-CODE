# Concept: Intro to Redux

## What It Is

Redux is a state management library that stores and manages application data in one central place called a store.

## Why It Exists

As apps grow, managing state becomes difficult.

Without Redux:

- state is scattered across components
- hard to track where data changes
- difficult to debug
- inconsistent data across UI

Redux solves:

- centralizing all state
- making state predictable
- improving debugging and testing

## When To Use

- large applications with complex state
- when many components need shared data
- when debugging state changes is difficult
- when Context becomes too complex

## Mental Model

Redux =
👉 “A global database for your app”

Instead of:

- many small states everywhere ❌

You get:

- ONE store (source of truth) ✅

---

## Pattern

Basic Redux flow:

    Action → dispatch → Store → Reducer → New State → UI updates

---

## Example

    // initial state
    const store = {
      greeting: "Hello",
      name: "Gregory"
    };

    // ❌ WRONG (mutation)
    store.name = "James";

    // ✅ CORRECT (immutability)
    const newStore = {
      ...store,
      name: "James"
    };

---

## Line-by-Line

- `const store = { greeting: "Hello", name: "Gregory" }`
  → defines initial state

- `store.name = "James"`
  → directly modifies state (bad)

- `{ ...store, name: "James" }`
  → creates a new object

- `...store`
  → copies existing state

- `name: "James"`
  → overrides specific value

---

## Common Mistakes

- mutating state directly
- not creating a new object
- misunderstanding spread operator
- thinking Redux updates instantly like local state

---

## What Breaks If Done Wrong

- UI may not update
- bugs become hard to trace
- previous state is lost
- debugging tools become useless

---

## Real Use Case

- global user authentication state
- shopping cart data
- app settings (theme, language)
- large dashboards with shared data

---

## Mini Practice

    // TASK:
    // Update state immutably

    const state = {
      user: "Joel",
      score: 10
    };

    // change score to 20 (WITHOUT mutation)

Solution:

    const newState = {
      ...state,
      score: 20
    };

---

## Key Takeaway

Redux stores all app data in one place and requires you to update state immutably.

---

## Additional Concept: Store (Single Source of Truth)

### What It Is

The store is the single object that holds all application state.

### Example

    const store = {
      user: {},
      theme: "dark",
      cart: []
    };

### Why It Matters

- all data lives in one place
- easier to manage and debug

### Key Takeaway

Redux uses ONE store for the entire app.

---

## Additional Concept: Immutability

### What It Is

State cannot be changed directly — you must create a new copy.

### Wrong

    state.name = "New";

### Correct

    const newState = { ...state, name: "New" };

### Why It Matters

- allows tracking changes
- enables time-travel debugging
- prevents bugs

### Key Takeaway

Never mutate state — always return a new copy.

---

## Additional Concept: Redux Flow (How It Works)

### What It Is

Redux follows a strict data flow.

### Steps

1. Action is created
2. Action is dispatched (`dispatch()`)
3. Reducer receives action
4. Reducer returns new state
5. Store updates
6. UI re-renders

### Visual Flow

    Action → Store → Reducer → New State → UI

### Key Takeaway

Redux enforces a predictable, step-by-step state update process.

---

## Additional Concept: Actions

### What It Is

An action is a plain JavaScript object describing what happened.

### Example

    const action = {
      type: "SET_NAME",
      payload: "Joel"
    };

### Why It Matters

- tells Redux what to do
- must have a `type` property

### Key Takeaway

Actions describe state changes.

---

## Additional Concept: Reducers

### What It Is

A reducer is a function that takes current state and an action, then returns a new state.

### Example

    function reducer(state, action) {
      if (action.type === "SET_NAME") {
        return {
          ...state,
          name: action.payload
        };
      }

      return state;
    }

### Why It Matters

- controls how state changes
- must be pure (no side effects)

### Key Takeaway

Reducers update state based on actions.

---

## Additional Concept: Redux with React

### What It Is

Redux is not built into React, but works with it.

### Tools

- `react-redux`
- Provider component
- connect / hooks

### Why It Matters

- connects global state to components

### Key Takeaway

Redux works alongside React to manage global state at scale.
