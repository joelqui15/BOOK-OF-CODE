# Conditional Rendering Pattern

## Purpose

Show different UI based on conditions.

## When To Use

- auth UI
- loading states
- toggles

## Pattern

```javascript
{
  condition ? <A /> : <B />;
}
```

## Example

```javascript
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

## Line-by-Line

- condition evaluated
- renders correct component

## Common Mistakes

- using if instead of ternary
- forgetting {}

## What Breaks If Done Wrong

- syntax errors

## Notes

- JSX must use expressions
