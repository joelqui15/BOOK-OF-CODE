# Concept: Creating and Adding Context (React Context API)

## What It Is

Context is a React feature that allows you to share data across multiple components without passing props manually at every level.

## Why It Exists

When lifting state up:

- you often pass props through many components
- even components that don’t need the data

This leads to:

- prop drilling
- messy and hard-to-maintain code

Context solves:

- sharing data globally
- avoiding unnecessary prop passing
- cleaner component structure

## When To Use

- when multiple components need the same data
- when prop drilling becomes excessive
- for global data like:
  - language settings
  - theme
  - user data

## Mental Model

Context =
👉 “A global data pipeline that any component can tap into”

Instead of passing data down manually:

- Parent → Child → Child → Child ❌

You use:

- Provider → Any component can access directly ✅

---

## Pattern

Create context:

    const MyContext = React.createContext();

Provide context:

    <MyContext.Provider value={data}>
      <App />
    </MyContext.Provider>

Consume context:

    const value = React.useContext(MyContext);

---

## Example

    // translationContext.js
    import React from "react";

    export const TranslationContext = React.createContext();

    export const translations = {
      en: {
        greeting: "Hello World",
      },
      ru: {
        greeting: "Привет, мир",
      },
    };

    // App.jsx
    import React from "react";
    import { TranslationContext, translations } from "./translationContext";

    function App() {
      const [lang, setLang] = React.useState("en");

      return (
        <TranslationContext.Provider value={translations[lang]}>
          <Main />
        </TranslationContext.Provider>
      );
    }

    // Main.jsx
    import React from "react";
    import { TranslationContext } from "./translationContext";

    function Main() {
      const context = React.useContext(TranslationContext);

      return <h1>{context.greeting}</h1>;
    }

---

## Line-by-Line

- `React.createContext()`
  → creates a context object

- `export const TranslationContext`
  → makes context usable across files

- `translations = { ... }`
  → stores data for different languages

- `const [lang, setLang] = useState("en")`
  → controls current language

- `<TranslationContext.Provider>`
  → wraps components with context

- `value={translations[lang]}`
  → provides current language data

- `React.useContext(TranslationContext)`
  → accesses context data inside component

- `context.greeting`
  → retrieves value from context

---

## Common Mistakes

- forgetting to wrap components in Provider
- passing wrong value to Provider
- using context outside Provider
- overusing context for small/local state

---

## What Breaks If Done Wrong

- context returns undefined
- components don’t update
- app crashes when accessing properties
- incorrect data displayed

Example bug:

    const context = useContext(TranslationContext);

Why broken:

- component not wrapped in Provider

---

## Real Use Case

- language switching (i18n)
- theme switching (dark/light)
- authentication (user info)
- global settings

---

## Mini Practice

    // TASK:
    // Create a ThemeContext and display current theme

    const ThemeContext = React.createContext();

    function App() {
      const [theme, setTheme] = React.useState("light");

      return (
        <ThemeContext.Provider value={theme}>
          <Display />
        </ThemeContext.Provider>
      );
    }

    function Display() {
      const theme = React.useContext(ThemeContext);

      return <p>{theme}</p>;
    }

---

## Key Takeaway

Context lets you share data globally without passing props through every component.

---

## Additional Concept: Provider Component

### What It Is

The Provider is what makes context data available to child components.

### Example

    <MyContext.Provider value={data}>
      <App />
    </MyContext.Provider>

### Why It Matters

- without Provider → no data access
- defines scope of context

### Key Takeaway

Provider wraps components and supplies the data.

---

## Additional Concept: Dynamic Context Values

### What It Is

Context values can change based on state.

### Example

    value={translations[lang]}

### Why It Matters

- allows dynamic updates (language switching)
- triggers re-render when value changes

### Key Takeaway

Context values can be dynamic and tied to state.

---

## Additional Concept: Context vs Props

### Props

- passed manually
- used for direct parent → child communication

### Context

- global access
- avoids prop drilling

### Key Takeaway

Use props for simple passing, context for shared/global data.
