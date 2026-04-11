# Concept: Adding a Route with React Router

## What It Is

Adding a route means telling React which component to show when the browser URL matches a specific path.

## Why It Exists

In a real app, users need to move between different pages or views like:

- home
- about
- reviews
- profile

Without routes:

- everything would have to be shown on one page
- users couldn’t navigate with URLs
- the app would not feel like a real website

Routing solves:

- showing different views for different URLs
- organizing app structure
- making navigation possible without a full page reload

## When To Use

- when your app has more than one page/view
- when you want `/`, `/about`, `/reviews`, etc.
- when you want the browser URL to control what renders
- in almost every multi-page React app

## Mental Model

A route is like an if statement for the URL.

Think:

- if URL is `/` → show Dashboard
- if URL is `/reviews` → show Reviews
- if URL is `/about` → show About

React Router watches the URL and decides which component to render.

## Pattern

In `main.jsx`, wrap the app with `BrowserRouter`:

    import React from "react";
    import ReactDOM from "react-dom/client";
    import { BrowserRouter } from "react-router-dom";
    import App from "./components/App/App";

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );

In `App.jsx`, add `Routes` and `Route`:

    import { Routes, Route } from "react-router-dom";
    import Dashboard from "../Dashboard/Dashboard";

    function App() {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      );
    }

    export default App;

## Example

    // main.jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { BrowserRouter } from "react-router-dom";
    import App from "./components/App/App";
    import "./index.css";

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );

    // App.jsx
    import { Routes, Route } from "react-router-dom";
    import Header from "../Header/Header";
    import Dashboard from "../Dashboard/Dashboard";
    import "./App.css";

    function App() {
      return (
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      );
    }

    export default App;

## Line-by-Line

- `import { BrowserRouter } from "react-router-dom";`
  → imports the router wrapper that enables routing in the app

- `ReactDOM.createRoot(document.getElementById("root")).render(`
  → starts rendering the React app into the HTML root element

- `<React.StrictMode>`
  → development helper that checks for common React issues

- `<BrowserRouter>`
  → wraps the app so React Router can track the browser URL

- `<App />`
  → renders the main app component inside the router

- `import { Routes, Route } from "react-router-dom";`
  → imports the components used to define routes

- `import Header from "../Header/Header";`
  → imports the header component

- `import Dashboard from "../Dashboard/Dashboard";`
  → imports the page component that should show for `/`

- `function App() {`
  → defines the main app component

- `<div className="App">`
  → wrapper element for the app layout

- `<Header />`
  → renders the header above the routed content

- `<Routes>`
  → container that holds all route definitions

- `<Route path="/" element={<Dashboard />} />`
  → says: when the URL is `/`, render the `Dashboard` component

- `export default App;`
  → allows other files to import and use the `App` component

## Common Mistakes

- forgetting to wrap the app in `BrowserRouter`
- importing `Route` but forgetting `Routes`
- using `component=` instead of `element=`
- forgetting that `element` needs JSX like `<Dashboard />`
- putting `Route` outside of `Routes`
- using the wrong path string
- forgetting to import the component you want to render

## What Breaks If Done Wrong

- routes do not render at all
- you get router errors in the console
- URL changes but nothing appears
- component never shows because the path is wrong
- React Router complains if `Route` is not inside `Routes`

Example broken code:

    import { Route } from "react-router-dom";
    import Dashboard from "../Dashboard/Dashboard";

    function App() {
      return (
        <div>
          <Route path="/" element={<Dashboard />} />
        </div>
      );
    }

Why this breaks:

- `Route` must be inside `Routes`

Correct version:

    import { Routes, Route } from "react-router-dom";
    import Dashboard from "../Dashboard/Dashboard";

    function App() {
      return (
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      );
    }

## Real Use Case

Real apps use routes for things like:

- `/` → dashboard or homepage
- `/reviews` → reviews page
- `/about` → about page
- `/profile` → user profile
- `/settings` → settings page

In your project, this means users can click nav links and React shows the correct page without refreshing the entire site.

## Mini Practice

    // TASK:
    // Add two more routes to App.jsx:
    // /reviews should render Reviews
    // /about should render About

    import { Routes, Route } from "react-router-dom";
    import Header from "../Header/Header";
    import Dashboard from "../Dashboard/Dashboard";
    import Reviews from "../Reviews/Reviews";
    import About from "../About/About";

    function App() {
      return (
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      );
    }

Possible solution:

    import { Routes, Route } from "react-router-dom";
    import Header from "../Header/Header";
    import Dashboard from "../Dashboard/Dashboard";
    import Reviews from "../Reviews/Reviews";
    import About from "../About/About";

    function App() {
      return (
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      );
    }

## Key Takeaway

To add a route in React Router, wrap your app in `BrowserRouter`, then use `Routes` and `Route` to match a URL path to a component.

## Additional Concept: What `BrowserRouter` Actually Does

### What It Is

`BrowserRouter` is the component that connects React Router to the browser’s address bar and navigation history.

### Why It Matters

Without it:

- React Router cannot watch the URL
- route matching will not work
- navigation won’t behave like a real web app

### Mental Model

`BrowserRouter` =
👉 the manager watching the browser URL

It keeps track of:

- current path
- back/forward browser history
- navigation changes

### Pattern

    import { BrowserRouter } from "react-router-dom";

    <BrowserRouter>
      <App />
    </BrowserRouter>

### Key Takeaway

`BrowserRouter` is the outer wrapper that gives your React app routing powers.

## Additional Concept: `Routes` vs `Route`

### What It Is

`Routes` is the container.  
`Route` is one individual rule.

### Mental Model

- `Routes` = the folder holding all route rules
- `Route` = one rule inside that folder

### Pattern

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

### Key Takeaway

Use `Routes` to group routes, and `Route` to define each path/component pair.

## Additional Concept: `path` and `element`

### What It Is

Each `Route` needs:

- `path` → the URL to match
- `element` → the component to render

### Example

    <Route path="/about" element={<About />} />

Meaning:

- if the URL is `/about`
- render the `About` component

### Common Mistake

Wrong:

    <Route path="/about" element={About} />

Why wrong:

- `element` expects JSX, not just a component name

Correct:

    <Route path="/about" element={<About />} />

### Key Takeaway

`path` is the URL rule, and `element` is the JSX React should render when that rule matches.
