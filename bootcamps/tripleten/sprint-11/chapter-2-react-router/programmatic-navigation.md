# Concept: Programmatic Navigation (`useNavigate`)

## What It Is

Programmatic navigation allows you to change routes using JavaScript instead of clicking a link, using the `useNavigate` hook.

## Why It Exists

Not all navigation comes from user clicking links.

Without programmatic navigation:

- you couldn’t redirect after actions (submit, login, etc.)
- buttons couldn’t control routing
- logic-based navigation would be impossible

It solves:

- redirecting users after actions
- controlling navigation with logic
- mimicking browser back/forward behavior

## When To Use

- after form submission (login, signup)
- after API actions (create, delete)
- when clicking buttons instead of links
- when navigating conditionally

## Mental Model

`useNavigate` =
👉 “Navigate using code instead of clicking”

Like telling the app:

- go to `/reviews`
- go back one page
- go forward

---

## Pattern

    import { useNavigate } from "react-router-dom";

    function Component() {
      const navigate = useNavigate();

      navigate("/path");
    }

---

## Example

    import { useNavigate } from "react-router-dom";

    function Review() {
      const navigate = useNavigate();

      return (
        <button onClick={() => navigate("/reviews")}>
          Back to reviews
        </button>
      );
    }

---

## Line-by-Line

- `import { useNavigate } from "react-router-dom";`
  → imports the navigation hook

- `const navigate = useNavigate();`
  → initializes navigation function

- `onClick={() => navigate("/reviews")}`
  → when button is clicked, navigate to `/reviews`

- `navigate("/reviews")`
  → changes the URL and renders that route

---

## Common Mistakes

- forgetting to call `useNavigate()` inside component
- calling `navigate` outside of event or effect
- using wrong path string
- confusing navigate with Link

---

## What Breaks If Done Wrong

- navigation doesn’t happen
- wrong route loads
- app crashes if hook is misused
- unexpected navigation behavior

Example bug:

    const navigate = useNavigate;

    navigate("/reviews"); // ❌ not a function

Correct:

    const navigate = useNavigate();
    navigate("/reviews"); // ✅ works

---

## Real Use Case

- redirect after login → `/dashboard`
- redirect after form submit
- “Back” button functionality
- conditional navigation (if user not logged in → `/login`)

---

## Mini Practice

    // TASK:
    // Create a button that navigates to "/about"

    import { useNavigate } from "react-router-dom";

    function GoToAbout() {
      const navigate = useNavigate();

      return (
        <button onClick={() => navigate("/about")}>
          Go to About
        </button>
      );
    }

---

## Key Takeaway

`useNavigate` lets you control navigation using JavaScript instead of links.

---

## Additional Concept: Navigating Back (`-1`)

### What It Is

You can pass a number to `navigate()` to move through browser history.

### Example

    navigate(-1); // go back
    navigate(1);  // go forward

### Why It Matters

- mimics browser back/forward buttons
- useful for “Back” buttons

### Key Takeaway

Use negative numbers to go back in history.

---

## Additional Concept: Fixed vs Relative Navigation

### What It Is

You can navigate to:

- a fixed route (`/reviews`)
- or relative movement (`-1`)

### Example

    navigate("/reviews"); // fixed destination
    navigate(-1);         // go back

### Key Takeaway

Use string paths for specific pages and numbers for history navigation.
