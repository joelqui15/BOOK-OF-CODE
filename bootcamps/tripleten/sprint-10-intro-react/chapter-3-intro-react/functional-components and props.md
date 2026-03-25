# Concept: Functional Components and Props

## What It Is

A functional component is a JavaScript function that returns JSX.

Props (short for "properties") are objects passed into components that allow you to customize what they display.

## Why It Exists

Without components:

- UI would be one giant file
- no reuse of UI pieces

Without props:

- components would always display the same data
- no flexibility or dynamic behavior

This solves:

- reusable UI
- dynamic content inside components
- separation of concerns

## When To Use

- when building reusable UI (cards, buttons, profiles)
- when passing data into components
- when customizing component behavior

## Mental Model

Component:
👉 “A reusable UI function”

Props:
👉 “Inputs to that function”

So:
Component + Props = Dynamic UI

---

## Pattern

```javascript
function ComponentName(props) {
  return <div>{props.value}</div>;
}
```

---

## Example

```javascript
function User(props) {
  return (
    <div>
      <img src="https://example.com/avatar.png" />
      <p>{props.name}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h2>My imaginary friends</h2>
      <User id="1" name="Gregory" />
      <User id="2" name="James" />
      <User id="3" name="Allison" />
    </>
  );
}
```

---

## Line-by-Line

- line 1: defines reusable component
- line 2: receives props object
- line 4: JSX wrapper
- line 5: image element
- line 6: displays dynamic data from props
- line 10: main App component
- line 13: renders User component
- line 13: passes props (id and name)
- line 14–15: renders multiple instances with different data

---

## Common Mistakes

- forgetting to use props inside component
- misspelling prop names
- expecting props to update automatically without re-render
- not passing required props

---

## What Breaks If Done Wrong

- undefined values appear in UI
- components show incorrect data
- UI does not update as expected

---

## Real Use Case

- user profile cards
- product listings
- reusable buttons
- comment components
- dashboard widgets

---

## Mini Practice

```javascript
function Product(props) {
  return <p>{props.name}</p>;
}

function App() {
  return (
    <div>
      <Product name="Shoes" />
      <Product name="Hat" />
    </div>
  );
}
```

---

## Key Takeaway

Functional components are reusable UI functions, and props allow you to pass data into them.

---

## Additional Concept: JSX Behind the Scenes

### What It Is

JSX is converted into JavaScript function calls behind the scenes.

### Pattern

```javascript
<CustomButton title="Click me!" onClick={handleClick} />
```

Becomes:

```javascript
const propsObject = {
  title: "Click me!",
  onClick: handleClick,
};

const jsxElement = CustomButton(propsObject);
```

### Key Takeaway

JSX components are just functions being called with a props object.

---

## Additional Concept: children Prop

### What It Is

`props.children` is a special prop that represents whatever is placed inside a component’s opening and closing tags.

---

## Pattern

```javascript
function Wrapper(props) {
  return <div>{props.children}</div>;
}
```

---

## Example

```javascript
function WrapperComponent(props) {
  console.log(props.children);

  return (
    <div>
      <h1>Hello Children!</h1>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <WrapperComponent>
      <div>
        <span>Here's some content!</span>
      </div>
    </WrapperComponent>
  );
}
```

---

## Line-by-Line

- line 1: defines wrapper component
- line 2: logs children content
- line 5: JSX wrapper
- line 7: renders whatever is passed inside component
- line 12: uses wrapper component
- line 13–16: content passed becomes props.children

---

## Common Mistakes

- forgetting that children must be inside opening/closing tags
- trying to access children without using props.children

---

## What Breaks If Done Wrong

- content does not render
- undefined values appear

---

## Real Use Case

- layout wrappers
- modals
- dialog components
- reusable containers

---

## Mini Practice

```javascript
function Box(props) {
  return <div>{props.children}</div>;
}

function App() {
  return (
    <Box>
      <p>Hello inside box</p>
    </Box>
  );
}
```

---

## Key Takeaway

`props.children` allows components to wrap and display nested content.

---

## Additional Concept: Using children for UI Control

### Example

```javascript
function ConfirmationDialog(props) {
  return (
    <div className="dialog">
      <div className="dialog-body">{props.children}</div>
      <button onClick={props.onConfirm}>Confirm</button>
      <button onClick={props.onCancel}>Cancel</button>
    </div>
  );
}

function App() {
  return (
    <ConfirmationDialog
      onConfirm={() => alert("Order confirmed!")}
      onCancel={() => alert("Order cancelled!")}
    >
      Do you really want to place this order?
    </ConfirmationDialog>
  );
}
```

---

## Line-by-Line

- line 1: defines dialog component
- line 4: renders children content
- line 5: confirm button using prop function
- line 6: cancel button using prop function
- line 11: uses component
- line 12–13: passes functions as props
- line 15: passes content as children

---

## Common Mistakes

- forgetting to pass functions correctly
- calling functions immediately instead of passing them

---

## What Breaks If Done Wrong

- buttons don’t work
- UI behaves incorrectly

---

## Real Use Case

- confirmation dialogs
- modal popups
- reusable UI containers

---

## Mini Practice

```javascript
function AlertBox(props) {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
}

function App() {
  return <AlertBox>Warning!</AlertBox>;
}
```

---

## Key Takeaway

You can combine props + children to create powerful, flexible components.

---

## Final Key Takeaway

React components are reusable functions, props pass data into them, and `children` lets you pass entire chunks of UI inside them.
