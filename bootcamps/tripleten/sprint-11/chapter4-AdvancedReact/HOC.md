# Concept: Higher-Order Components (HOCs)

## What It Is

A Higher-Order Component (HOC) is a function that takes a component and returns a new enhanced component.

## Why It Exists

In large apps:

- multiple components share similar logic ❌
- code gets duplicated ❌

HOCs solve:

- reusing logic across components
- reducing repetition
- keeping components clean

## When To Use

- when multiple components need the same behavior
- adding features like logging, auth, or styling
- wrapping components with shared logic
- abstracting repetitive patterns

## Mental Model

HOC =
👉 “A wrapper that upgrades a component”

Think:

Component → wrapped → enhanced component

---

## Pattern

    function withSomething(Component) {
      return function EnhancedComponent(props) {
        return <Component {...props} />;
      };
    }

---

## Example

    function withLogger(Component) {
      return function EnhancedComponent(props) {
        console.log("Rendering component with props:", props);

        return <Component {...props} />;
      };
    }

    function User(props) {
      return <p>{props.name}</p>;
    }

    const UserWithLogger = withLogger(User);

---

## Line-by-Line

- `withLogger(Component)`
  → HOC function receives a component

- `EnhancedComponent(props)`
  → new component created

- `console.log(...)`
  → adds extra behavior

- `<Component {...props} />`
  → renders original component

- `UserWithLogger`
  → enhanced version of User

---

## Common Mistakes

- forgetting to pass props (`{...props}`)
- modifying original component instead of wrapping
- confusing HOCs with regular components
- overusing HOCs when unnecessary

---

## What Breaks If Done Wrong

- props not passed → component breaks
- logic not applied correctly
- unexpected UI behavior
- harder debugging

---

## Real Use Case

- authentication wrappers
- logging components
- performance optimization (React.memo)
- theming or styling wrappers

---

## Mini Practice

    // TASK:
    // Create an HOC that adds a border to any component

    function withBorder(Component) {
      return function Enhanced(props) {
        return (
          <div style={{ border: "2px solid red" }}>
            <Component {...props} />
          </div>
        );
      };
    }

---

## Key Takeaway

HOCs wrap components to reuse logic and enhance behavior.

---

## Additional Concept: React.memo is an HOC

### What It Is

`React.memo` is a built-in HOC.

### Example

    const Component = React.memo((props) => {
      return <div>{props.value}</div>;
    });

### What It Does

- wraps component
- caches result
- prevents unnecessary re-renders

### Key Takeaway

React.memo is just a special HOC for performance.

---

## Additional Concept: Naming Convention

### What It Is

HOCs usually start with "with"

### Example

    withAuth
    withLogger
    withTheme

### Why

- makes purpose clear
- improves readability

### Key Takeaway

HOCs are commonly named with "withSomething".

---

## Additional Concept: Props Forwarding

### What It Is

Passing props down to wrapped component.

### Example

    <Component {...props} />

### Why It Matters

- ensures original component works correctly

### Key Takeaway

Always forward props in HOCs.

---

## Additional Concept: Reusability

### What It Is

One HOC can wrap many components.

### Example

    const A = withLogger(ComponentA);
    const B = withLogger(ComponentB);

### Key Takeaway

HOCs enable logic reuse across multiple components.

---

## Additional Concept: HOC vs Custom Hook

### Difference

HOC:

- wraps component

Hook:

- shares logic inside component

### Example

HOC:

    withAuth(Component)

Hook:

    const user = useAuth();

### Key Takeaway

Use HOCs for wrapping behavior, hooks for internal logic reuse.
