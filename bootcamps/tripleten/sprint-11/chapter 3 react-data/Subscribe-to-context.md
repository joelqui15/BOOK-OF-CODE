# Concept: Subscribing to a Context (`useContext`)

## What It Is

Subscribing to a context means connecting a component to a context so it can read its value and automatically re-render when that value changes.

## Why It Exists

Creating context alone is not enough.

Without subscribing:

- components cannot access context data
- UI won’t update when context changes

Subscribing solves:

- accessing shared global data
- automatic re-rendering when data updates
- connecting components to global state

## When To Use

- when you need to read context data inside a component
- when using React Context for global state
- when you want automatic updates on state change

## Mental Model

Subscribing to context =
👉 “Listen to global data and update when it changes”

Like:

- Provider → sends data
- Component → listens (subscribes)

---

## Pattern

    import { useContext } from "react";

    const value = useContext(MyContext);

---

## Example

    import React from "react";
    import { TranslationContext } from "./translationContext";

    function Header() {
      const translation = React.useContext(TranslationContext);

      return (
        <h1>{translation.greeting}</h1>
      );
    }

---

## Line-by-Line

- `import { TranslationContext }`
  → imports the context object

- `React.useContext(TranslationContext)`
  → subscribes to the context

- `const translation = ...`
  → stores context value in variable

- `{translation.greeting}`
  → accesses data from context

- component re-renders automatically when context changes

---

## Common Mistakes

- using context without Provider
- forgetting to import the context
- trying to access properties on undefined
- confusing context object vs value

---

## What Breaks If Done Wrong

- `undefined` errors
- UI doesn’t update
- app crashes when accessing properties
- incorrect data displayed

Example bug:

    const value = useContext(MyContext);

Why broken:

- no Provider wrapping component

---

## Real Use Case

- displaying user data globally
- language translation (i18n)
- theme switching
- authentication state

---

## Mini Practice

    // TASK:
    // Display current user name from context

    const UserContext = React.createContext();

    function App() {
      return (
        <UserContext.Provider value={{ name: "Joel" }}>
          <Profile />
        </UserContext.Provider>
      );
    }

    function Profile() {
      const user = React.useContext(UserContext);

      return <h2>{user.name}</h2>;
    }

---

## Key Takeaway

`useContext` lets components subscribe to global data and automatically update when it changes.

---

## Additional Concept: Multiple Contexts

### What It Is

A component can subscribe to multiple contexts.

### Example

    const translation = useContext(TranslationContext);
    const user = useContext(UserContext);

### Why It Matters

- apps often have multiple global states
- allows combining data sources

### Key Takeaway

You can use multiple `useContext` calls in one component.

---

## Additional Concept: Multiple Providers

### What It Is

You can wrap your app with multiple providers.

### Example

    <TranslationContext.Provider value={translations}>
      <UserContext.Provider value={user}>
        <App />
      </UserContext.Provider>
    </TranslationContext.Provider>

### Why It Matters

- separates concerns
- keeps data organized

### Key Takeaway

Each context has its own provider.

---

## Additional Concept: Class Components (`contextType`)

### What It Is

Class components use `contextType` instead of `useContext`.

### Example

    class Header extends React.Component {
      static contextType = TranslationContext;

      render() {
        return <h1>{this.context.greeting}</h1>;
      }
    }

### Why It Matters

- older React pattern
- still used in legacy code

### Key Takeaway

Functional components use `useContext`, classes use `contextType`.
