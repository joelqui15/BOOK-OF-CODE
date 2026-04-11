# Concept: Nested Routing in React Router

## What It Is

Nested routing allows you to define routes inside other routes, so child components render inside a parent component.

## Why It Exists

As apps grow, you need structured navigation.

Without nested routing:

- all routes live at the same level
- harder to organize related pages
- repeated layouts across pages

Nested routing solves:

- grouping related pages (like `/about/*`)
- sharing layout (like headers, sidebars)
- cleaner, scalable routing structure

## When To Use

- when a page has sub-pages (About → Story, Hobbies, Contact)
- when you want shared layout between related views
- when building multi-section pages
- when organizing larger apps

## Mental Model

Nested routes =
👉 “A page inside a page”

Example:

- `/about` → parent page
- `/about/my-story` → child page
- `/about/hobbies` → child page

Parent renders → child renders INSIDE it

---

## Pattern

Parent route with children:

    <Routes>
      <Route path="/about-me" element={<AboutMe />}>
        <Route path="my-story" element={<MyStory />} />
        <Route path="hobbies" element={<Hobbies />} />
      </Route>
    </Routes>

Parent component must include:

    import { Outlet } from "react-router-dom";

    function AboutMe() {
      return (
        <div>
          <h1>About Me</h1>
          <Outlet />
        </div>
      );
    }

---

## Example

    // App.jsx
    import { Routes, Route } from "react-router-dom";
    import AboutMe from "./AboutMe/AboutMe";
    import MyStory from "./AboutMe/MyStory";
    import Hobbies from "./AboutMe/Hobbies";
    import Contact from "./AboutMe/Contact";

    function App() {
      return (
        <Routes>
          <Route path="/about-me" element={<AboutMe />}>
            <Route path="my-story" element={<MyStory />} />
            <Route path="hobbies" element={<Hobbies />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      );
    }

    export default App;

    // AboutMe.jsx
    import { Link, Outlet } from "react-router-dom";

    function AboutMe() {
      return (
        <div>
          <ul>
            <li><Link to="my-story">My Story</Link></li>
            <li><Link to="hobbies">Hobbies</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>

          <p>I’m a simple person. I see emojis. I write reviews.</p>

          <Outlet />
        </div>
      );
    }

    export default AboutMe;

---

## Line-by-Line

- `<Route path="/about-me" element={<AboutMe />}>`
  → defines parent route

- `<Route path="my-story" element={<MyStory />} />`
  → child route (relative path)

- child paths do NOT start with `/`
  → they are relative to parent

- `<Outlet />`
  → placeholder where child routes render

- `<Link to="my-story">`
  → navigates to `/about-me/my-story`

- parent renders first
- child renders inside `<Outlet />`

---

## Common Mistakes

- forgetting to add `<Outlet />`
- using absolute paths (`/my-story`) instead of relative
- not nesting routes properly inside parent
- expecting child routes to render without Outlet
- placing child routes outside parent route

---

## What Breaks If Done Wrong

- child components don’t render
- URL changes but nothing appears
- layout doesn’t update correctly
- navigation feels broken

Example bug:

    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/about-me/my-story" element={<MyStory />} />

Why this is wrong:

- not actually nested
- loses shared layout

Correct:

    <Route path="/about-me" element={<AboutMe />}>
      <Route path="my-story" element={<MyStory />} />
    </Route>

---

## Real Use Case

- profile pages with tabs
- dashboards with sections
- blog pages with categories
- settings pages with sub-sections

Example:

- `/profile`
- `/profile/posts`
- `/profile/settings`

---

## Mini Practice

    // TASK:
    // Add nested routes for:
    // /about-me/my-story
    // /about-me/hobbies

    <Route path="/about-me" element={<AboutMe />}>
      {/* add child routes here */}
    </Route>

Solution:

    <Route path="/about-me" element={<AboutMe />}>
      <Route path="my-story" element={<MyStory />} />
      <Route path="hobbies" element={<Hobbies />} />
    </Route>

---

## Key Takeaway

Nested routes allow you to render child components inside a parent layout using `<Outlet />`.

---

## Additional Concept: Relative Paths

### What It Is

Child routes use relative paths, meaning they don’t start with `/`.

### Example

    <Route path="my-story" element={<MyStory />} />

Final URL:

    /about-me/my-story

### Why It Matters

- keeps routing clean
- avoids repeating parent paths

### Key Takeaway

Child routes are automatically appended to the parent path.

---

## Additional Concept: `<Outlet />`

### What It Is

`<Outlet />` is a placeholder where child routes are rendered.

### Example

    function AboutMe() {
      return (
        <div>
          <h1>About Me</h1>
          <Outlet />
        </div>
      );
    }

### Why It Matters

Without `<Outlet />`:

- child routes will never appear

### Key Takeaway

`<Outlet />` is REQUIRED for nested routes to render.
