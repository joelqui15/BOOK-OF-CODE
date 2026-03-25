# Concept: React + JSX + Rendering

## What It Is

React uses JSX (JavaScript + HTML-like syntax) to describe UI, and renders it into the DOM using ReactDOM.render().

## Why It Exists

Vanilla JS:

- manually updates DOM
- mixes logic everywhere

React + JSX:

- lets you describe UI in one place
- keeps logic and UI connected
- makes updates predictable

## When To Use

- When building any React app
- When rendering UI dynamically
- When UI depends on state (data)
  (real situations)

## Mental Model

React works like this:

- You describe UI using JSX
- React converts JSX → real DOM
- React updates UI when data changes

👉 You don’t touch the DOM directly anymore

(simple explanation / analogy)

## Pattern

ReactDOM.render(

  <h1>Hello, world!</h1>,
  document.querySelector("#root")
);

## Example

let isClicked = false;

function renderAll() {
ReactDOM.render(

<div>
<button>Click me</button>

      <div className={isClicked ? "active" : ""}>
        {isClicked ? "It was clicked!" : "Waiting for click..."}
      </div>
    </div>,
    document.querySelector("#root")

);
}

renderAll();

const button = document.querySelector("button");

button.addEventListener("click", () => {
isClicked = true;
renderAll();
});

```javascript
// small working example
```

## Line-by-Line

(Explain what each line of the example does in plain English)

- line 1: State variable controlling UI
- line 3: Function responsible for rendering UI
- line 4: React renders JSX into DOM
- line 5–12: JSX structure (UI layout)
- line 8: Class changes based on state
- line 9: Text changes based on state
- line 13: Target DOM element (#root)
- line 17: Initial render when page loads
- line 19: Select button from DOM
- line 21: Add click event listener
- line 22: Update state
- line 23: Re-render UI with new state

## Common Mistakes

(List common beginner mistakes)

- Forgetting #root container
- Not calling render after state change
- Trying to manipulate DOM directly instead of re-rendering
- Forgetting className (using class instead)

## What Breaks If Done Wrong

(Explain what bugs, errors, or bad results happen if this is used incorrectly)

- UI won’t update
- React won’t render anything
- State changes won’t reflect on screen
- DOM and UI become inconsistent

## Real Use Case

(Write where this would actually appear in a real app or project)

- Like button toggling
- Form updates
- API data rendering
- Dynamic UI updates based on user actions

## Mini Practice

(Write a tiny practice task for yourself, then do it underneath)

```javascript
// your own example
```

## Key Takeaway

(one sentence summary)

- React renders UI from JSX, and you update the UI by changing state and re-rendering — not by manually changing the DOM.
