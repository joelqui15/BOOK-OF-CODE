# Link:

# Concept: Effect Dependencies

## What It Is

Effect dependencies are the values you place in the dependency array of `useEffect` to control when the effect runs again.

They tell React:

- “Run this effect again only if these values changed.”

## Why It Exists

Without dependencies:

- `useEffect` runs after every render
- unnecessary API calls can happen
- performance gets worse
- side effects can run too often

Dependencies solve:

- limiting when effects run
- preventing extra API requests
- syncing effects only to the values that matter

## When To Use

- when fetching data based on a prop or state value
- when an effect should rerun only after a specific change
- when avoiding unnecessary re-renders or repeated side effects

## Mental Model

Dependency array =
👉 “Watch list”

React watches the values inside the array.

If one changes:

- run the effect again

If none change:

- skip the effect

---

## Pattern

```javascript
React.useEffect(() => {
  // side effect
}, [dependency]);
```

---

## Example

```javascript
function MagicWand(props) {
  const [rating, setRating] = React.useState(0);

  React.useEffect(() => {
    fetchMagicWandById(props.selectedId);
  }, [props.selectedId]);

  function handleLike() {
    setRating(1);
  }

  function handleDislike() {
    setRating(-1);
  }

  return (
    <div>
      <p>Rating: {rating}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
    </div>
  );
}
```

---

## Line-by-Line

- line 1: defines the component
- line 2: creates local state for rating
- line 4: starts useEffect
- line 5: fetches wand data using selectedId
- line 6: dependency array tells React to rerun only when props.selectedId changes
- line 8: like handler
- line 9: updates rating to 1
- line 12: dislike handler
- line 13: updates rating to -1
- line 16: returns JSX
- line 17: shows current rating
- line 18: like button
- line 19: dislike button

---

## Common Mistakes

- forgetting the dependency array
- putting the wrong dependency in the array
- leaving out a value used inside the effect
- assuming the effect should rerun when unrelated state changes
- confusing `[]` with “run every render”

---

## What Breaks If Done Wrong

- repeated API calls
- stale data
- incorrect side effects
- bugs caused by effect not rerunning when it should
- performance issues

---

## Real Use Case

- fetch product details when selected product ID changes
- load a user profile when user ID changes
- refetch filtered data when search term changes
- rerun logic when a modal open/close state changes

---

## Mini Practice

```javascript
// TASK:
// Build a component called UserProfile
// Requirements:
// - it receives props.userId
// - it uses useEffect
// - inside the effect, call fetchUserById(props.userId)
// - the effect should run ONLY when props.userId changes

// Write it yourself before moving on
```

---

## Key Takeaway

Dependency arrays control when an effect reruns, so React only performs side effects when the relevant values change.

---

## Additional Concept: No Dependency Array

### What It Is

If you do not provide a dependency array, the effect runs after every render.

### Pattern

```javascript
React.useEffect(() => {
  fetchData();
});
```

### Key Takeaway

No dependency array = run after every render.

---

## Additional Concept: One Dependency

### What It Is

If you pass one dependency, the effect reruns only when that one value changes.

### Pattern

```javascript
React.useEffect(() => {
  fetchMagicWandById(selectedId);
}, [selectedId]);
```

### Key Takeaway

One dependency = rerun only when that specific value changes.

---

## Additional Concept: Multiple Dependencies

### What It Is

You can watch more than one value in the same effect.

### Pattern

```javascript
React.useEffect(() => {
  if (!isFetched) {
    fetchMagicWandById(selectedId);
  }
}, [isFetched, selectedId]);
```

### Line-by-Line

- line 1: starts effect
- line 2: checks another condition before fetching
- line 3: fetches using selectedId
- line 5: effect reruns if either isFetched or selectedId changes

### Common Mistakes

- forgetting one of the used values
- adding unnecessary values that cause too many reruns

### What Breaks If Done Wrong

- effect runs too often
- effect misses updates it should respond to

### Real Use Case

- fetching data only when user is authenticated and ID changes
- rerunning a filter when both search term and sort order change

### Mini Practice

```javascript
// TASK:
// Write a useEffect that runs when either:
// - isLoggedIn changes
// - userId changes
// Inside it, call loadDashboard(userId)
```

### Key Takeaway

Multiple dependencies mean React watches all listed values.

---

## Additional Concept: Empty Dependency Array

### What It Is

An empty dependency array means the effect runs only once after the component mounts.

### Pattern

```javascript
React.useEffect(() => {
  console.log("Mounted once");
}, []);
```

### Why It Matters

This behaves like:

- `componentDidMount()` in class components

If the effect has cleanup, that cleanup runs when the component unmounts.

### Key Takeaway

Empty array = run once on mount.

---

## Additional Concept: Dependency Rule

### What It Is

Every prop or state value used inside the effect callback should usually appear in the dependency array.

### Example

```javascript
React.useEffect(() => {
  fetchMagicWandById(selectedId);
}, [selectedId]);
```

### Why It Matters

If React is using `selectedId` inside the effect, it needs to know when that value changes.

### Key Takeaway

If an effect uses a changing value, that value usually belongs in the dependency array.

---

## Additional Concept: Why Likes Should Not Refetch Here

### What It Is

In the lesson example, the component has local `rating` state and a `selectedId` prop.

If the effect has no dependency array:

- clicking like/dislike causes rerender
- rerender causes effect again
- effect makes another unnecessary API call

### Key Takeaway

The dependency array prevents unrelated state changes from rerunning expensive effects.

---

## Final Key Takeaway

Effect dependencies make `useEffect` precise: React reruns the effect only when the watched values change, which prevents unnecessary work and keeps your app efficient.
