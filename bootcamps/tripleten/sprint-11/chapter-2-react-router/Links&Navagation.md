# Concept: Links and Navigation in React Router (`Link` and `NavLink`)

## What It Is

`Link` and `NavLink` are React Router components used to navigate between routes without reloading the page.

## Why It Exists

In traditional websites:

- navigation uses `<a>` tags
- clicking reloads the entire page

In React apps:

- we want fast navigation without full reloads
- we want React to control the UI

`Link` and `NavLink` solve:

- client-side navigation
- smoother user experience
- no page refresh

## When To Use

- when navigating between routes in your app
- when building menus or navigation bars
- when linking to `/`, `/reviews`, `/about`, etc.

Use:

- `Link` → basic navigation
- `NavLink` → navigation + active styling

## Mental Model

`Link` =
👉 “Go to another page without refreshing”

`NavLink` =
👉 “Go to another page AND tell me if I’m currently on it”

---

## Pattern

Basic Link:

    import { Link } from "react-router-dom";

    <Link to="/path">Text</Link>

NavLink:

    import { NavLink } from "react-router-dom";

    <NavLink to="/path">Text</NavLink>

---

## Example

    import { Link } from "react-router-dom";

    function Dashboard() {
      return (
        <div>
          <h1>Dashboard</h1>
          <Link to="/reviews">Go to reviews</Link>
        </div>
      );
    }

NavBar with NavLink:

    import { NavLink } from "react-router-dom";

    function NavBar() {
      return (
        <nav className="menu">
          <NavLink to="/" className="menu__link">Home</NavLink>
          <NavLink to="/reviews" className="menu__link">Reviews</NavLink>
          <NavLink to="/about" className="menu__link">About</NavLink>
        </nav>
      );
    }

---

## Line-by-Line

- `import { Link } from "react-router-dom";`
  → imports Link component for navigation

- `<Link to="/reviews">`
  → defines where the link should go

- `to="/reviews"`
  → sets the destination path

- `import { NavLink } from "react-router-dom";`
  → imports NavLink for advanced navigation

- `<NavLink to="/">`
  → creates a navigation link to homepage

- `className="menu__link"`
  → applies styling to links

- NavLink automatically tracks if it is active

---

## Common Mistakes

- using `<a>` instead of `<Link>`
- forgetting to import from `react-router-dom`
- using `href` instead of `to`
- not wrapping app with `BrowserRouter`
- not understanding NavLink active behavior

---

## What Breaks If Done Wrong

- page reloads instead of smooth navigation
- routes don’t work correctly
- navigation feels slow
- active styling doesn’t apply

Example bug:

    <a href="/reviews">Reviews</a> // ❌ full page reload

Correct:

    <Link to="/reviews">Reviews</Link> // ✅ no reload

---

## Real Use Case

- navigation bars (Home, About, Reviews)
- sidebar menus
- buttons that move between pages
- dashboard navigation

---

## Mini Practice

    // TASK:
    // Create a NavBar with 3 links:
    // "/", "/reviews", "/about"

    import { NavLink } from "react-router-dom";

    function NavBar() {
      return (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      );
    }

---

## Key Takeaway

Use `Link` and `NavLink` instead of `<a>` to navigate in React without reloading the page.

---

## Additional Concept: Active Link Styling (`NavLink`)

### What It Is

`NavLink` can apply a special class when the link matches the current URL.

### Pattern

    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "menu__link_active" : "menu__link"
      }
    >
      Home
    </NavLink>

### How It Works

- React Router checks the current URL
- if it matches `to`
- `isActive` becomes true
- class changes automatically

### Key Takeaway

`NavLink` lets you highlight the active page automatically.

---

## Additional Concept: Why Not Use `<a>` Tags

### Problem

    <a href="/about">About</a>

- reloads the entire page
- loses React state
- slower navigation

### Solution

    <Link to="/about">About</Link>

- no reload
- faster navigation
- keeps React state intact

### Key Takeaway

Always use `Link`/`NavLink` in React apps instead of `<a>` tags.
