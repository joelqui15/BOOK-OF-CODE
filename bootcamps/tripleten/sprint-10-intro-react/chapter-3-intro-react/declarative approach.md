# Concept:

Declarative vs Imperative Programming

## What It Is

Two different ways to update UI:

- Imperative → manually control the DOM step-by-step
- Declarative → describe how UI should look based on state

## Why It Exists

Imperative code becomes:

- hard to read
- hard to maintain
- scattered across event handlers

Declarative programming solves this by:

- centralizing logic
- making UI predictable
- simplifying updates

## When To Use

- Imperative → vanilla JavaScript DOM manipulation
- Declarative → React (primary approach)

## Mental Model

Imperative:

“Click → find element → change class → update text”

Declarative:

“If clicked = true → UI should look like this”

You describe the result, not the steps.

## Pattern

// Imperative
const element = document.querySelector("#myElement");

element.addEventListener("click", () => {
const element2 = document.querySelector("#myAnotherElement");
element2.classList.add("active");

const element3 = document.querySelector("#myText");
element3.innerHTML = "It was clicked!";
});

// Declarative (React mindset)
const isClicked = true;

const className = isClicked ? "active" : "";
const text = isClicked ? "It was clicked!" : "Waiting for click...";

## Example

function Example() {
const isClicked = true;

return (

<div className={isClicked ? "active" : ""}>
{isClicked ? "It was clicked!" : "Waiting for click..."}
</div>
);
}

## Line-by-Line

(Explain what each line of the example does in plain English)

- line 1: Define component
- line 2: State/condition controlling UI
- line 5: Container element
- line 5: Class depends on state (declarative logic)
- line 6: Text depends on state
- line 7: Close element

## Common Mistakes

- Using querySelector inside React
- Trying to manually update DOM elements
- Thinking in “steps” instead of “state”

## What Breaks If Done Wrong

- UI becomes inconsistent
- React state and DOM go out of sync
- Bugs become difficult to track

## Real Use Case

- Toggling a like button
- Showing/hiding modals
- Updating UI after API calls
- Conditional rendering of components

## Mini Practice

(Write a tiny practice task for yourself, then do it underneath)

```javascript
// your own example
```

## Key Takeaway

React is declarative — you describe the UI based on state, not how to manually change it.
