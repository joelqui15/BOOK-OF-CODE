# Engineering Knowledge Base

This repo stores my learning across bootcamps, computer science, and professional development.

## Structure

- bootcamps = course-based notes
- computer-science = theory and degree material
- professional = workplace knowledge
- patterns = reusable coding patterns
- glossary = definitions and key terms
- references = commands, setup notes, links

## Rules

- 1 concept = 1 file
- 1 sprint = 1 cheat sheet
- notes support coding, not replace it
- keep notes short and code-first

For Bootcamps

Open the sprint folder.
Create chapter folder.
Create section files as you go.
Update cheat-sheet.md at the end of each chapter or day.
Add bugs to bugs.md.
Add useful reusable syntax to patterns.

That means you’re not just storing notes. You’re building:

course notes
debugging notes
reusable syntax library
long-term engineering reference

One rule to keep it from turning into a mess

Every note should fit one of these buckets:

lesson note
cheat sheet
bug log
pattern
glossary
reference

If it doesn’t fit one, don’t create a random file yet.

## folders

1. bugs.md inside every sprint

This is huge.

Example:

bootcamps/tripleten/sprint-10/bugs.md

Inside it, log:

bug
why it happened
how you fixed it
what rule you learned

That becomes your personal debugging history. When you hit a similar bug, you can check your notes and say, “Oh yeah, I had that before. Here’s how I fixed it.” It’s like having a personal bug encyclopedia.

2. projects.md inside every sprint

Track:

project name
concepts used
what was hard
what you’d do better next time

3. glossary folder

This helps a ton because bootcamp lessons throw around words fast.

Example:

render
prop
state
side effect
promise
endpoint

4. references/commands.md

Store repeat-use commands like:

git commands
npm commands
deployment commands
webpack/vite commands later

5. patterns folder

This is one of the most valuable parts.

Not lesson notes. Not theory. Just reusable code shapes.

Examples:

fetch pattern
controlled input pattern
modal open/close pattern
map render pattern
form submit pattern

## example file structure

engineering-knowledge-base
│
├── bootcamps
│ └── tripleten
│ ├── sprint-10
│ │ ├── chapter-01
│ │ │ ├── section-01.md
│ │ │ ├── section-02.md
│ │ │ └── section-03.md
│ │ ├── chapter-02
│ │ │ ├── section-01.md
│ │ │ └── section-02.md
│ │ ├── cheat-sheet.md
│ │ ├── bugs.md
│ │ └── projects.md
│ ├── sprint-11
│ └── sprint-12
│
├── computer-science
│ ├── algorithms
│ │ ├── big-o.md
│ │ ├── sorting.md
│ │ └── recursion.md
│ ├── data-structures
│ │ ├── arrays.md
│ │ ├── linked-lists.md
│ │ └── trees.md
│ ├── systems
│ │ ├── operating-systems.md
│ │ ├── networking.md
│ │ └── databases.md
│ └── cheat-sheets
│
├── professional
│ ├── frontend
│ │ ├── react.md
│ │ ├── performance.md
│ │ └── accessibility.md
│ ├── backend
│ │ ├── apis.md
│ │ ├── auth.md
│ │ └── databases.md
│ ├── debugging
│ │ ├── common-errors.md
│ │ ├── devtools.md
│ │ └── troubleshooting-workflow.md
│ ├── system-design
│ │ ├── caching.md
│ │ ├── load-balancing.md
│ │ └── queues.md
│ └── workplace
│ ├── code-reviews.md
│ ├── git-workflow.md
│ └── tickets.md
│
├── patterns
│ ├── javascript
│ │ ├── fetch-pattern.md
│ │ ├── promise-pattern.md
│ │ └── array-method-patterns.md
│ ├── react
│ │ ├── state-pattern.md
│ │ ├── props-pattern.md
│ │ └── effect-pattern.md
│ └── general
│ ├── debugging-pattern.md
│ └── problem-solving-pattern.md
│
├── glossary
│ ├── javascript-terms.md
│ ├── react-terms.md
│ └── cs-terms.md
│
├── references
│ ├── useful-links.md
│ ├── commands.md
│ └── setup-notes.md
│
└── README.md
