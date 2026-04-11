# Project Notes

# useEffect and global events

- example applying escape button using useEffect
  -But Escape is different:

the user might be focused on an input
te key press happens at the document/window level
you want the modal to close no matter which inner field is active

So you attach a listener to:

document.addEventListener("keydown", handleEscape);

That is not JSX.
That is a manual side effect.

And when you manually touch the outside world like:

document
window
timers
subscriptions
API listeners

that is exactly what useEffect is for.

# example :

useEffect(() => {
//You use e only when you need information about the event itself.
if (!isOpen) return;
function handleEscape(e) {
if (e.key === "Escape") {
onClose();
}
}
document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };

}, [isOpen, onClose]);

- pay attention to the cleanup very important so listner does not linger and cause
  bugs
- isOpen and onClose in the array

useEffect is not needed just because something closes the modal.

It is needed because Escape key listening is a side effect on document.

Overlay click does not need useEffect because it is just a regular React onClick on an element you rendered.

event: In your code:
❌ No event needed
<button onClick={onClose}>

Why?

Because you don’t care:

what was clicked
where it was clicked
anything about the event

You just want:
👉 “run this function”

Event needed
function handleCloseClick(e) {
if (e.target === e.currentTarget) {
onClose();
}
}

Why?

Because now you care about:

what exactly was clicked

You’re asking:

“Did the user click the overlay, or something inside it?”

That requires event data → so you use e.

The dependency array ensures your Escape listener is added/removed at the right time (isOpen) and always uses the correct close function (onClose).
