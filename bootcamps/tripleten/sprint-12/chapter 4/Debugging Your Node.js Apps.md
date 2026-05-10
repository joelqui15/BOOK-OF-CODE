# Concept: Debugging Node.js Applications

## What It Is

Debugging in Node.js is the process of running your code in a controlled way so you can pause execution, inspect variables, and step through logic to find and fix bugs.

## Why It Exists

Code doesn’t always behave as expected. Debugging tools help you understand exactly what your program is doing at each step instead of guessing.

## When To Use

- When your code has bugs or unexpected behavior
- When dealing with loops, conditions, or async logic
- When you need to inspect variable values over time

## Mental Model

Debugging = slowing down time in your program

Instead of code running instantly, you:

- Pause execution
- Step line-by-line
- Watch variables change

## Pattern

    node inspect file.js

    // inside debugger:
    cont   // continue
    next   // next line
    step   // step into function
    out    // step out
    pause  // pause execution

## Example

    console.log("Start")

    function test() {
      let x = 0
      while (x < 3) {
        console.log(x)
        x++
      }
    }

    test()

## Line-by-Line

- line 1: Logs start message
- line 2: Declare function
- line 3: Initialize variable
- line 4: Loop condition
- line 5: Log current value
- line 6: Increment variable
- line 7: Close loop
- line 8: Call function

## Common Mistakes

- Not stepping into functions
- Skipping important lines
- Not watching variables

## What Breaks If Done Wrong

- Bugs remain hidden
- Misunderstanding code flow
- Wasting time guessing instead of observing

## Real Use Case

- Fixing infinite loops
- Debugging API logic
- Tracking variable changes

## Mini Practice

    let x = 0
    while (x < 5) {
      x++
    }

## Key Takeaway

Debugging lets you SEE your code execute instead of guessing what it does.

# Additional Concept: Node Debugger Commands (CLI)

## What It Is

Node provides built-in debugger commands to control execution from the terminal.

## Why It Exists

You need control over how your program runs to inspect it properly.

## When To Use

- Debugging from terminal
- No GUI tools available
- Quick debugging sessions

## Mental Model

Debugger = remote control for your code execution

## Pattern

    cont  → continue
    next  → next line
    step  → step into function
    out   → exit function
    pause → pause execution

## Example

    node inspect app.js

## Line-by-Line

- line 1: Runs file in debug mode

## Common Mistakes

- Using next when you need step
- Skipping function logic
- Not pausing execution

## What Breaks If Done Wrong

- Missing the bug location
- Confusion about flow

## Real Use Case

- Debugging backend scripts
- Investigating runtime issues

## Mini Practice

    node inspect index.js

## Key Takeaway

Debugger commands control how your code executes step-by-step.

# Additional Concept: Debugging an Infinite Loop

## What It Is

Using a debugger to identify why a loop never stops.

## Why It Exists

Infinite loops can crash apps or freeze execution. Debugging helps pinpoint the issue.

## When To Use

- When loops don’t terminate
- When values aren’t updating correctly

## Mental Model

Loop = repeated steps  
Debugger = watch each repetition closely

## Pattern

    let index = 0

    while (index < limit) {
      index = index + 1
      index = index - 1
    }

## Example

    let index = 0

    while (index < 100) {
      index = index + 1
      index = index - 1
    }

## Line-by-Line

- line 1: Initialize index
- line 2: Loop condition
- line 3: Increment index
- line 4: Immediately decrement index (bug)
- line 5: Loop repeats forever

## Common Mistakes

- Undoing your own logic
- Not updating loop condition properly

## What Breaks If Done Wrong

- Infinite loop
- Program never finishes

## Real Use Case

- Data processing loops
- API polling
- Iteration bugs

## Mini Practice

    let i = 0
    while (i < 10) {
      i = i + 1
      i = i - 1
    }

## Key Takeaway

Watch variables — bugs often come from values not changing as expected.

# Additional Concept: Watching Variables (watch)

## What It Is

The watch command lets you track a variable’s value as the program runs.

## Why It Exists

Seeing how values change over time is critical for debugging logic errors.

## When To Use

- Tracking loop variables
- Debugging calculations
- Monitoring state changes

## Mental Model

watch = live tracking of variable values

## Pattern

    watch("variableName")

## Example

    watch("index")

## Line-by-Line

- line 1: Adds variable to watch list

## Common Mistakes

- Watching wrong variable
- Not stepping through code

## What Breaks If Done Wrong

- Missing key bug behavior
- Incorrect assumptions

## Real Use Case

- Debugging loops
- Tracking API response data
- Monitoring counters

## Mini Practice

    watch("x")

## Key Takeaway

Watching variables reveals how your program actually behaves.

# Additional Concept: Debugging with VS Code (Breakpoints)

## What It Is

VS Code provides a visual debugger where you can set breakpoints and control execution with buttons instead of CLI commands.

## Why It Exists

A visual interface makes debugging easier and faster than terminal-based debugging.

## When To Use

- Debugging large applications
- Visualizing code execution
- Working with complex logic

## Mental Model

Breakpoint = pause point in your code

## Pattern

    // click left of line number to set breakpoint
    Run → Start Debugging

## Example

    let x = 5
    x = x + 1  // breakpoint here

## Line-by-Line

- line 1: Declare variable
- line 2: Execution pauses here when debugging

## Common Mistakes

- Not setting breakpoints
- Starting debugger without proper config

## What Breaks If Done Wrong

- Debugger doesn’t pause
- Hard to track issues

## Real Use Case

- Debugging React apps
- Backend debugging
- Full-stack troubleshooting

## Mini Practice

    let count = 0
    count++

## Key Takeaway

Breakpoints let you pause exactly where you need to inspect your code.

# Additional Concept: Debug Control Buttons (VS Code)

## What It Is

VS Code provides buttons to control debugging instead of typing commands.

## Why It Exists

Simplifies debugging workflow with a UI.

## When To Use

- When debugging in VS Code
- When stepping through code visually

## Mental Model

Buttons = actions controlling execution flow

## Pattern

    Continue → run until next breakpoint
    Step Over → next line
    Step Into → enter function
    Step Out → exit function
    Restart → restart program
    Stop → end debugging

## Example

    // use UI buttons in VS Code

## Line-by-Line

- line 1: Continue execution
- line 2: Move to next line
- line 3: Enter function
- line 4: Exit function
- line 5: Restart program
- line 6: Stop debugging

## Common Mistakes

- Confusing step over vs step into
- Skipping important logic

## What Breaks If Done Wrong

- Missing bug location
- Misunderstanding execution flow

## Real Use Case

- Debugging complex logic
- Inspecting nested functions
- Tracking state changes

## Mini Practice

    // set breakpoint and step through code

## Key Takeaway

Debugging tools give you full control over how your code executes.
