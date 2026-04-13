# Concept: Creating a 404 Page (Catch-All Route)

## What It Is

A 404 page is a fallback route that displays when a user navigates to a URL that does not exist in your app.

## Why It Exists

Users can type incorrect URLs or visit outdated links.

Without a 404 page:

- users see a blank screen
- app appears broken
- bad user experience

A 404 route solves:

- handling unknown routes
- guiding users back to valid pages
- improving UX and professionalism

## When To Use

- in every multi-page React app
- when handling invalid URLs
- when building production-ready apps
- when improving navigation experience

## Mental Model

404 route =
👉 “If no routes match, show this page”

It acts as a safety net for your app.

---

## Pattern

Create a catch-all route using `*`:

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

---

## Example

    // PageNotFound.jsx
    import "./PageNotFound.css";

    function PageNotFound() {
      return (
        <div className="not-found">
          <h3>404 - Page Not Found</h3>
          <p>Uh oh! There’s nothing here... sorry.</p>
        </div>
      );
    }

    export default PageNotFound;

    // App.jsx
    import { Routes, Route } from "react-router-dom";
    import PageNotFound from "./PageNotFound/PageNotFound";

    function App() {
      return (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reviews" element={<Reviews />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      );
    }

---

## Line-by-Line

- `<Route path="*">`
  → wildcard route that matches anything not defined

- `element={<PageNotFound />}`
  → renders 404 component

- order matters:
  → catch-all should be last

- `PageNotFound` component:
  → displays message for invalid routes

---

## Common Mistakes

- forgetting the `*` wildcard
- placing 404 route above other routes
- not creating a fallback page
- not importing the component

---

## What Breaks If Done Wrong

- invalid routes show blank page
- users get stuck with no navigation
- app feels broken
- routes may not match correctly

Example bug:

    <Route path="*" element={<PageNotFound />} />
    <Route path="/" element={<Home />} />

Why wrong:

- wildcard catches everything first

Correct:

    <Route path="/" element={<Home />} />
    <Route path="*" element={<PageNotFound />} />

---

## Real Use Case

- handling invalid URLs
- redirecting users back to homepage
- preventing navigation dead ends
- improving app reliability

---

## Mini Practice

    // TASK:
    // Add a 404 route and a button to go back home

    function PageNotFound() {
      return (
        <div>
          <h3>404 - Page Not Found</h3>
          <button>Go Home</button>
        </div>
      );
    }

Solution:

    import { useNavigate } from "react-router-dom";

    function PageNotFound() {
      const navigate = useNavigate();

      return (
        <div>
          <h3>404 - Page Not Found</h3>
          <button onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
      );
    }

---

## Key Takeaway

Use a wildcard `*` route to catch all unknown URLs and display a 404 page.

---

## Additional Concept: Catch-All Route Order

### What It Is

React Router checks routes in order.

### Why It Matters

- wildcard matches everything
- must be placed last

### Example

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

### Key Takeaway

Always place the 404 route at the bottom of your routes list.

---

## Additional Concept: Handling Invalid Dynamic Routes

### What It Is

Dynamic routes can still receive invalid data (like `/reviews/bad-id`).

### Problem

- app may crash or show undefined data

### Solution

Check if data exists:

    if (!reviews[id]) {
      return <PageNotFound />;
    }

### Key Takeaway

Even with dynamic routes, validate data and show 404 when needed.
