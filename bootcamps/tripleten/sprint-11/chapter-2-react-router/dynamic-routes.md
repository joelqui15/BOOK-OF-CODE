# Concept: Dynamic Routes in React Router

## What It Is

Dynamic routes allow you to create URLs with variable values (like IDs) so one route can display different data based on the URL.

## Why It Exists

In real apps, you don’t have separate routes for every item.

Without dynamic routes:

- you’d need `/review1`, `/review2`, `/review3`, etc.
- not scalable
- impossible for large datasets

Dynamic routes solve:

- handling many items with one route
- displaying specific data based on URL
- connecting UI to API data

## When To Use

- when displaying individual items (reviews, users, posts)
- when working with API data
- when using IDs or unique identifiers
- when building detail pages

## Mental Model

Dynamic route =
👉 “Same route, different data depending on URL”

Example:

- `/reviews/1`
- `/reviews/2`
- `/reviews/3`

Same component → different content

---

## Pattern

Define dynamic route:

    <Route
      path="/reviews/:reviewId"
      element={<Review reviews={reviews} />}
    />

Access parameter:

    import { useParams } from "react-router-dom";

    const params = useParams();
    const id = params.reviewId;

---

## Example

    // App.jsx
    import { Routes, Route } from "react-router-dom";
    import Reviews from "./Reviews";
    import Review from "./Review";

    <Routes>
      <Route path="/reviews" element={<Reviews reviews={reviews} />} />
      <Route
        path="/reviews/:reviewId"
        element={<Review reviews={reviews} />}
      />
    </Routes>

    // Reviews.jsx
    import { Link } from "react-router-dom";

    function Reviews({ reviews }) {
      return (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <Link to={String(review.id)}>
                {review.title}
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    // Review.jsx
    import { useParams } from "react-router-dom";

    function Review({ reviews }) {
      const params = useParams();
      let id = params.reviewId;

      id = id - 1;

      return (
        <div>
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
        </div>
      );
    }

---

## Line-by-Line

- `path="/reviews/:reviewId"`
  → defines a dynamic segment using `:`

- `:reviewId`
  → placeholder for a value in the URL

- `<Link to={String(review.id)}>`
  → creates dynamic links like `/reviews/1`

- `useParams()`
  → hook to access URL parameters

- `params.reviewId`
  → gets the value from the URL

- `id = id - 1`
  → adjusts for array index (arrays start at 0)

- `reviews[id]?.title`
  → safely accesses review data

---

## Common Mistakes

- forgetting `:` in route path
- not using `useParams`
- treating param as number (it’s a string)
- forgetting to adjust index
- not passing data to component

---

## What Breaks If Done Wrong

- route doesn’t match URL
- data doesn’t render
- undefined errors when accessing array
- wrong item displayed

Example bug:

    <Route path="/reviews/reviewId" element={<Review />} />

Why wrong:

- missing `:` → not dynamic

Correct:

    <Route path="/reviews/:reviewId" element={<Review />} />

---

## Real Use Case

- product pages (`/product/123`)
- user profiles (`/user/45`)
- blog posts (`/post/10`)
- review pages (`/reviews/1`)

---

## Mini Practice

    // TASK:
    // Create a dynamic route for users:
    // /users/:userId

    <Route path="/users/:userId" element={<User />} />

    // inside User component:
    import { useParams } from "react-router-dom";

    function User() {
      const params = useParams();
      console.log(params.userId);
    }

---

## Key Takeaway

Dynamic routes use `:` to capture values from the URL and `useParams()` to access them in your component.

---

## Additional Concept: URL Parameters Are Strings

### What It Is

All values from `useParams()` are strings.

### Example

    const params = useParams();
    console.log(typeof params.reviewId); // "string"

### Why It Matters

- numbers must be converted
- array indexing may break

### Fix

    const id = Number(params.reviewId);

### Key Takeaway

Always treat URL params as strings and convert when needed.

---

## Additional Concept: Optional Chaining (`?.`)

### What It Is

Optional chaining prevents errors when accessing properties on undefined values.

### Example

    reviews[id]?.title

### Why It Matters

- prevents crashes when data isn’t ready yet
- useful with API data

### Key Takeaway

Use `?.` when data might not exist yet.
