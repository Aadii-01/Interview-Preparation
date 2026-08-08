# HTML Interview Questions — Complete Interview Revision

> **Goal:** Revise HTML from an interview perspective.
>
> This file assumes you have already studied:
> - HTML basics
> - Elements and attributes
> - Forms
> - Semantic HTML
> - Accessibility
>
> Focus on understanding **why**, not just memorizing definitions.

---

# 1. HTML Interview Map

```text
                         HTML INTERVIEW
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
       Basics              Structure          Practical
          │                   │                   │
     ┌────┼────┐         ┌────┼────┐        ┌────┼────┐
     ▼    ▼    ▼         ▼    ▼    ▼        ▼    ▼    ▼
   HTML  DOM  Tags     Semantic Forms    Forms Accessibility
   DOCTYPE             Elements          Tables  SEO
   Attributes          Headings           Media  Scenarios
          │                   │                   │
          └───────────────────┼───────────────────┘
                              ▼
                       Interview Questions
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
              Theory       Tricky         Coding
````

---

# 2. What Is HTML?

HTML stands for:

> **HyperText Markup Language**

HTML is a markup language used to structure content on the web.

It defines things such as:

* Headings
* Paragraphs
* Links
* Images
* Forms
* Tables
* Sections
* Navigation
* Buttons

HTML is **not a programming language**.

It does not provide general-purpose programming constructs such as:

* Loops
* Functions
* Variables
* Conditional execution

Those are provided by programming languages such as JavaScript.

---

# 3. HTML vs CSS vs JavaScript

Very common interview question.

```text
HTML
 ↓
Structure + Meaning

CSS
 ↓
Presentation + Layout

JavaScript
 ↓
Behavior + Logic
```

Example:

```html
<button id="save">
    Save
</button>
```

HTML creates the button.

```css
button {
    padding: 10px;
}
```

CSS controls its appearance.

```javascript
document
    .getElementById("save")
    .addEventListener("click", saveData);
```

JavaScript adds behavior.

---

# 4. What Is an HTML Element?

An element usually consists of:

```html
<p>
    Hello
</p>
```

Conceptually:

```text
<p>Hello</p>
│ │      │
│ │      └── Closing tag
│ └───────── Content
└─────────── Opening tag
```

Some elements are void elements and don't have closing tags.

Example:

```html
<img src="photo.jpg" alt="Profile photo">
```

---

# 5. What Is an HTML Tag?

A tag is the markup syntax used to create an element.

Example:

```html
<p>
```

is an opening tag.

```html
</p>
```

is a closing tag.

The complete structure:

```html
<p>Hello</p>
```

is an element.

### Interview distinction

> A tag is part of the syntax, while an element is the complete HTML construct represented by the tag and its content.

---

# 6. What Are Attributes?

Attributes provide additional information about an element.

Example:

```html
<a
    href="/about"
    target="_blank"
>
    About
</a>
```

Here:

```text
href
target
```

are attributes.

General structure:

```html
<element attribute="value">
```

---

# 7. What Is `id`?

`id` identifies an element uniquely within a document.

Example:

```html
<div id="profile">
    ...
</div>
```

JavaScript can access it:

```javascript
document.getElementById("profile");
```

CSS can target it:

```css
#profile {
    padding: 20px;
}
```

An `id` should generally be unique within the document.

---

# 8. What Is `class`?

`class` groups elements under one or more class names.

Example:

```html
<p class="text">
    Hello
</p>

<p class="text">
    World
</p>
```

CSS:

```css
.text {
    color: black;
}
```

Multiple elements can share the same class.

---

# 9. `id` vs `class`

| `id`                            | `class`                     |
| ------------------------------- | --------------------------- |
| Identifies a particular element | Groups elements             |
| Should generally be unique      | Can be reused               |
| `#profile` in CSS               | `.profile` in CSS           |
| Often useful for unique targets | Common for styling/grouping |

Example:

```html
<div id="profile" class="card">
```

Here:

```text
id
 ↓
Unique identity

class
 ↓
Reusable category
```

---

# 10. What Is `<!DOCTYPE html>`?

It tells the browser that the document should be interpreted using modern HTML standards.

Modern HTML:

```html
<!DOCTYPE html>
```

It helps the browser avoid legacy quirks-mode behavior.

### Interview answer

> `<!DOCTYPE html>` is the HTML document type declaration. In modern HTML it is a simple declaration that tells the browser to use standards mode.

---

# 11. What Is the `<html>` Element?

It is the root element of the HTML document.

Example:

```html
<html lang="en">

    <head>
        ...
    </head>

    <body>
        ...
    </body>

</html>
```

The `lang` attribute identifies the primary language.

---

# 12. Why Use `lang`?

Example:

```html
<html lang="en">
```

It helps:

* Screen readers
* Search engines
* Translation tools
* Browser language handling

Example:

```html
<html lang="fr">
```

for French content.

---

# 13. `<head>` vs `<body>`

## `<head>`

Contains document metadata and resources.

Examples:

```html
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        My Website
    </title>

</head>
```

## `<body>`

Contains the document's visible/application content.

```html
<body>

    <h1>
        Hello
    </h1>

</body>
```

Mental model:

```text
HTML
│
├── HEAD
│   ├── Metadata
│   ├── Title
│   ├── CSS
│   └── Other resources
│
└── BODY
    └── Page content
```

---

# 14. What Is `<title>`?

Defines the document title.

```html
<title>
    My Portfolio
</title>
```

It commonly appears in:

* Browser tabs
* Bookmarks
* Search results

---

# 15. What Is `<meta charset="UTF-8">`?

```html
<meta charset="UTF-8">
```

Specifies the character encoding.

UTF-8 supports a very broad range of characters.

---

# 16. What Is the Viewport Meta Tag?

Common responsive setup:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

It tells mobile browsers how to size and scale the page viewport.

Important for responsive design.

---

# 17. Block vs Inline Elements

This is a traditional interview topic.

Block-level elements generally begin on a new line and can occupy the available width depending on CSS.

Examples:

```text
<div>
<p>
<h1>
<section>
<article>
<header>
<footer>
```

Inline elements generally flow within surrounding text.

Examples:

```text
<span>
<a>
<strong>
<em>
```

However:

> CSS `display` can change how elements participate in layout.

For example:

```css
span {
    display: block;
}
```

So don't treat "block vs inline" as an unchangeable property of HTML tags.

---

# 18. `<div>` vs `<span>`

`div`:

```html
<div>
    Content
</div>
```

Generic block-level container by default.

`span`:

```html
<span>
    Content
</span>
```

Generic inline container by default.

The key difference is their default layout behavior and typical use.

Neither provides meaningful semantics.

---

# 19. What Are Void Elements?

Void elements do not have closing tags.

Examples:

```text
<img>
<input>
<br>
<hr>
<meta>
<link>
<source>
<area>
<base>
<embed>
<param>
<track>
<wbr>
```

Example:

```html
<img
    src="profile.jpg"
    alt="Profile"
>
```

Not:

```html
<img></img>
```

---

# 20. `<br>` vs `<p>`

`<br>` creates a line break.

```html
Hello<br>
World
```

`<p>` represents a paragraph.

```html
<p>
    Hello World
</p>
```

Don't use `<br>` repeatedly to create layout spacing.

Use CSS for layout.

---

# 21. `<hr>`

`<hr>` represents a thematic break.

Example:

```html
<h2>
    Introduction
</h2>

<p>
    ...
</p>

<hr>

<h2>
    Conclusion
</h2>
```

It is not simply "a horizontal line."

---

# 22. What Is Semantic HTML?

Semantic HTML uses elements according to their meaning.

Examples:

```text
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Instead of:

```html
<div class="header">
<div class="navigation">
<div class="main">
```

Semantic HTML improves:

* Structure
* Accessibility
* Maintainability
* Machine interpretation

---

# 23. `<section>` vs `<article>` ⭐⭐⭐

### Section

A thematic grouping.

```html
<section>

    <h2>
        Skills
    </h2>

</section>
```

### Article

Self-contained content.

```html
<article>

    <h2>
        My JavaScript Journey
    </h2>

    <p>
        ...
    </p>

</article>
```

### Interview answer

> A section groups related content around a theme, while an article represents a self-contained composition that could stand independently.

---

# 24. `<main>` vs `<section>`

`main` represents the primary content of the document.

`section` represents a thematic grouping within a document.

Example:

```text
main
│
├── section
│
├── section
│
└── section
```

A page can contain multiple sections inside its main content.

---

# 25. `<article>` vs `<div>`

`article`:

```html
<article>
    ...
</article>
```

communicates self-contained content.

`div`:

```html
<div>
    ...
</div>
```

has no inherent semantic meaning.

Use `div` when no more appropriate semantic element exists.

---

# 26. What Is Accessibility?

Accessibility means making websites usable by people with different abilities and assistive technologies.

Examples:

```text
Screen readers
Keyboard navigation
Captions
Alternative text
Proper labels
Visible focus
```

---

# 27. What Is ARIA?

ARIA stands for:

> Accessible Rich Internet Applications

It provides accessibility-related roles, states, and properties.

Examples:

```html
aria-label
aria-labelledby
aria-describedby
aria-expanded
aria-controls
aria-live
aria-hidden
aria-invalid
```

---

# 28. First Rule of ARIA ⭐⭐⭐

Prefer native HTML when possible.

Good:

```html
<button>
    Save
</button>
```

Usually inferior:

```html
<div
    role="button"
    tabindex="0"
>
    Save
</div>
```

### Interview answer

> ARIA should enhance accessibility where native HTML is insufficient, not replace native HTML unnecessarily.

---

# 29. Why Is `<button>` Better Than Clickable `<div>`?

A native button provides built-in:

* Button semantics
* Keyboard interaction
* Focus behavior
* Accessibility support

A clickable div requires manually recreating these behaviors.

Therefore:

```html
<button>
    Delete
</button>
```

is preferred over:

```html
<div onclick="deleteItem()">
    Delete
</div>
```

---

# 30. Link vs Button ⭐⭐⭐

Use:

```html
<a href="/profile">
    Profile
</a>
```

when navigating somewhere.

Use:

```html
<button>
    Delete
</button>
```

when performing an action.

Mental model:

```text
Go somewhere
    ↓
<a>

Do something
    ↓
<button>
```

---

# 31. What Is Accessibility Tree?

Browsers expose accessibility information derived from the page to assistive technologies.

Conceptually:

```text
DOM
 │
 ▼
Browser
 │
 ▼
Accessibility Tree
 │
 ▼
Screen Reader
 │
 ▼
User
```

It contains information such as:

* Role
* Name
* State
* Properties

---

# 32. Why Is `alt` Important?

For meaningful images:

```html
<img
    src="chart.png"
    alt="Revenue increased from January to June"
>
```

The alternative text communicates useful information when the image itself cannot be perceived.

Decorative images can use:

```html
<img
    src="decoration.png"
    alt=""
>
```

---

# 33. Why Isn't Placeholder a Label?

Bad:

```html
<input
    placeholder="Enter email"
>
```

Better:

```html
<label for="email">
    Email
</label>

<input
    id="email"
    placeholder="you@example.com"
>
```

The placeholder is a hint.

The label identifies the field.

---

# 34. What Is `tabindex`?

`tabindex` controls keyboard focus behavior.

Important values:

```text
0
↓
Normal sequential focus order

-1
↓
Not in Tab order but can receive programmatic focus

Positive values
↓
Generally avoid
```

---

# 35. What Is a Skip Link?

A skip link lets keyboard users bypass repeated navigation.

Example:

```html
<a href="#main">
    Skip to main content
</a>

<nav>
    ...
</nav>

<main id="main">
    ...
</main>
```

This improves keyboard accessibility.

---

# 36. Forms — Basic Structure

Example:

```html
<form action="/register" method="post">

    <label for="name">
        Name
    </label>

    <input
        id="name"
        name="name"
        type="text"
        required
    >

    <button type="submit">
        Register
    </button>

</form>
```

Important concepts:

```text
form
label
input
name
type
required
button
action
method
```

---

# 37. Why Is the `name` Attribute Important?

Consider:

```html
<input
    type="text"
    name="username"
>
```

The `name` identifies the form field when form data is submitted.

Example conceptual data:

```text
username=Aadi
email=aadi@example.com
```

An input without a useful `name` generally won't contribute its value to normal form submission.

---

# 38. GET vs POST

Forms commonly use:

```html
<form method="get">
```

or:

```html
<form method="post">
```

## GET

Data is generally encoded into the URL.

Example:

```text
/search?q=html
```

Useful for:

* Search
* Filtering
* Bookmarkable requests

## POST

Data is sent in the request body.

Useful for:

* Creating resources
* Sending larger form payloads
* Sensitive operations when combined with proper HTTPS and server-side security

Important:

> POST does not automatically make data secure. HTTPS is required for transport confidentiality.

---

# 39. Common Input Types

Know these:

```text
text
email
password
number
tel
url
search
date
time
datetime-local
checkbox
radio
file
hidden
submit
button
reset
range
color
```

Example:

```html
<input
    type="email"
    name="email"
>
```

---

# 40. Radio vs Checkbox

Radio:

```html
<input
    type="radio"
    name="gender"
    value="male"
>

<input
    type="radio"
    name="gender"
    value="female"
>
```

Used when selecting one option from a group.

Checkbox:

```html
<input
    type="checkbox"
    name="terms"
>
```

Used for independent selections or multiple selections.

Mental model:

```text
Radio
 ↓
Usually one choice per group

Checkbox
 ↓
Zero, one, or multiple choices
```

---

# 41. `required`

Example:

```html
<input
    type="email"
    required
>
```

The browser performs built-in constraint validation.

But:

> Client-side validation should not replace server-side validation.

---

# 42. `disabled` vs `readonly` ⭐⭐⭐

## Disabled

```html
<input
    disabled
    value="Aadi"
>
```

Generally:

* Cannot be edited
* Cannot receive normal user interaction
* Disabled form controls are generally not submitted with form data

## Readonly

```html
<input
    readonly
    value="Aadi"
>
```

Generally:

* Cannot be edited
* Can still be focused
* Its value can be submitted as part of normal form submission

Mental model:

```text
disabled
 ↓
Inactive control

readonly
 ↓
Active but not editable
```

---

# 43. `autocomplete`

Helps browsers fill form information.

Example:

```html
<input
    type="email"
    autocomplete="email"
>
```

Common values:

```text
name
email
username
current-password
new-password
street-address
postal-code
```

---

# 44. `placeholder` vs `value`

```html
<input
    placeholder="Enter your name"
>
```

Placeholder:

```text
Hint
```

Whereas:

```html
<input
    value="Aadi"
>
```

provides an initial/current value.

---

# 45. `<select>`

Example:

```html
<label for="country">
    Country
</label>

<select id="country" name="country">

    <option value="in">
        India
    </option>

    <option value="us">
        United States
    </option>

</select>
```

Important:

```text
select
option
optgroup
```

---

# 46. `<textarea>`

Used for multi-line text.

```html
<label for="message">
    Message
</label>

<textarea
    id="message"
    name="message"
    rows="5"
    cols="30"
></textarea>
```

---

# 47. `<button>` Types

Inside forms, know:

```html
<button type="submit">
    Submit
</button>

<button type="button">
    Action
</button>

<button type="reset">
    Reset
</button>
```

Important interview fact:

A `<button>` inside a form can behave as a submit button by default if its type is omitted.

Therefore, for a non-submit button inside a form, explicitly use:

```html
<button type="button">
```

---

# 48. What Is the DOM?

DOM stands for:

> Document Object Model

The browser parses HTML and creates an object representation of the document.

Conceptually:

```text
HTML
 │
 ▼
Parser
 │
 ▼
DOM Tree
 │
 ├── html
 │   ├── head
 │   └── body
 │       ├── h1
 │       └── p
 │
 ▼
JavaScript can manipulate it
```

---

# 49. DOM Example

HTML:

```html
<body>

    <h1>
        Hello
    </h1>

    <p>
        Welcome
    </p>

</body>
```

Conceptually:

```text
Document
│
└── html
    │
    ├── head
    │
    └── body
        │
        ├── h1
        │
        └── p
```

JavaScript can access these nodes.

---

# 50. What Is a DOM Node?

A node is an object in the DOM tree.

Types include:

```text
Document
Element
Text
Comment
```

Example:

```html
<p>
    Hello
</p>
```

Conceptually:

```text
Element node
   │
   └── Text node
        │
        └── "Hello"
```

---

# 51. HTML Parsing

A simplified browser flow:

```text
HTML bytes
    ↓
Characters
    ↓
Tokens
    ↓
DOM tree
    ↓
CSSOM
    ↓
Render tree / rendering process
    ↓
Layout
    ↓
Paint
    ↓
Compositing
    ↓
Screen
```

You do not need to memorize every browser implementation detail.

Understand the general pipeline.

---

# 52. DOM vs HTML

HTML is the source markup.

DOM is the browser's object representation of the document.

Example:

```text
HTML source
    ↓
Browser parser
    ↓
DOM
```

JavaScript modifies the DOM, not the original HTML source file on your server.

---

# 53. What Happens When a Browser Loads a Webpage?

High-level interview answer:

```text
1. Browser requests resource
2. Server responds
3. Browser parses HTML
4. DOM is constructed
5. CSS is parsed into CSSOM
6. Rendering information is combined
7. Layout is calculated
8. Pixels are painted
9. Page is composited/displayed
```

Don't overstate this as one rigid implementation pipeline because browsers optimize and parallelize many steps.

---

# 54. HTML Entities

Entities allow special characters to be represented in HTML.

Examples:

```html
&lt;
&gt;
&amp;
&quot;
&nbsp;
```

Examples:

```text
&lt;  → <
&gt;  → >
&amp; → &
```

---

# 55. Why Escape HTML?

Suppose user input contains:

```html
<script>
    ...
</script>
```

If untrusted input is inserted into HTML unsafely, it can create security problems.

This leads into:

```text
XSS
```

which you will study in the Web Security section.

---

# 56. Absolute vs Relative URLs

Relative:

```html
<a href="/about">
    About
</a>
```

Absolute:

```html
<a href="https://example.com/about">
    About
</a>
```

Relative URLs depend on the current document/base URL.

Absolute URLs contain the full URL.

---

# 57. `<a>` vs `<link>`

`<a>`:

```html
<a href="/about">
    About
</a>
```

Used for user navigation.

`<link>`:

```html
<link
    rel="stylesheet"
    href="styles.css"
>
```

Used to declare relationships between the current document and external resources.

Commonly used for:

* Stylesheets
* Icons
* Preloads
* Other linked resources

---

# 58. `<script>` Placement

Traditional:

```html
<script src="app.js"></script>
```

If placed in the head without special handling, it can block HTML parsing while the script is fetched/executed.

Better modern options include:

```html
<script
    src="app.js"
    defer
></script>
```

or:

```html
<script
    src="app.js"
    async
></script>
```

---

# 59. `defer` vs `async` ⭐⭐⭐

## `defer`

```html
<script
    src="app.js"
    defer
></script>
```

Generally:

```text
HTML parsing
      │
      ├──── script downloads in parallel
      │
      ▼
HTML parsing finishes
      │
      ▼
Deferred scripts execute
```

Deferred scripts preserve document order relative to each other.

## `async`

```html
<script
    src="analytics.js"
    async
></script>
```

The script downloads in parallel and executes as soon as it is ready.

Execution order among multiple async scripts is not guaranteed.

Mental model:

```text
defer
 ↓
Download parallel
 ↓
Execute after parsing
 ↓
Order preserved

async
 ↓
Download parallel
 ↓
Execute when ready
 ↓
Order not guaranteed
```

---

# 60. Why Use `defer`?

It can prevent parser-blocking behavior while still ensuring the script executes after the document has been parsed.

Common for application scripts that need the DOM to exist.

---

# 61. Why Use `async`?

Useful for independent scripts where execution order is not important.

Examples can include:

* Analytics
* Independent third-party scripts

But exact usage depends on the application.

---

# 62. Semantic HTML Question

### Question:

Why is this:

```html
<div onclick="submitForm()">
    Submit
</div>
```

inferior to:

```html
<button type="submit">
    Submit
</button>
```

### Answer:

The button provides native semantics and expected interaction behavior, while the div requires manually recreating keyboard and accessibility behavior.

---

# 63. Tricky Question

### Can `<section>` contain `<article>`?

Yes.

```html
<section>

    <h2>
        Blog Posts
    </h2>

    <article>
        Post 1
    </article>

    <article>
        Post 2
    </article>

</section>
```

---

# 64. Tricky Question

### Can `<article>` contain `<section>`?

Yes.

```html
<article>

    <h2>
        JavaScript
    </h2>

    <section>
        <h3>
            Variables
        </h3>
    </section>

    <section>
        <h3>
            Functions
        </h3>
    </section>

</article>
```

---

# 65. Tricky Question

### Can there be multiple `<header>` elements?

Yes.

A page can have a page-level header and individual article/section headers.

---

# 66. Tricky Question

### Can there be multiple `<footer>` elements?

Yes.

An article can have its own footer while the page has another footer.

---

# 67. Tricky Question

### Is `<b>` the same as `<strong>`?

No.

`<b>` draws attention to text without implying the semantic importance that `<strong>` conveys.

```html
<b>
    Product Name
</b>
```

versus:

```html
<strong>
    Warning
</strong>
```

Similarly:

```html
<i>
```

and:

```html
<em>
```

are not simply interchangeable semantically.

---

# 68. `<b>` vs `<strong>`

```text
<b>
 ↓
Stylistically draws attention

<strong>
 ↓
Strong importance
```

CSS can control visual appearance independently.

---

# 69. `<i>` vs `<em>`

```text
<i>
 ↓
Alternative voice/mood/term/etc.

<em>
 ↓
Semantic emphasis
```

Don't choose them purely because one looks italic in the browser.

---

# 70. What Is Progressive Enhancement?

Build a useful baseline experience using core web technologies, then enhance it for capable browsers/devices.

Conceptually:

```text
Basic HTML
    ↓
Works
    +
CSS
    ↓
Better presentation
    +
JavaScript
    ↓
Enhanced interaction
```

This is an important web-development concept.

---

# 71. Graceful Degradation vs Progressive Enhancement

### Progressive Enhancement

Start with a basic functional experience.

```text
HTML
 ↓
CSS
 ↓
JavaScript enhancements
```

### Graceful Degradation

Start with a richer experience and ensure it remains usable when some capabilities are unavailable.

Interviewers may ask about both.

---

# 72. SEO and HTML

HTML can provide useful structural signals.

Important elements/attributes include:

```text
<title>
<meta description>
<h1>... headings
semantic elements
alt text
canonical link
lang
```

But:

> HTML alone does not determine search ranking.

SEO involves many factors.

---

# 73. What Is the `<meta description>`?

Example:

```html
<meta
    name="description"
    content="Learn HTML for technical interviews."
>
```

It provides a description of the page.

Search engines may use it when generating search result snippets.

It is not a guaranteed ranking factor simply because it exists.

---

# 74. What Is a Canonical URL?

Example:

```html
<link
    rel="canonical"
    href="https://example.com/article"
>
```

It communicates the preferred/canonical URL for substantially duplicate or equivalent content.

Useful for helping search engines understand URL canonicalization.

---

# 75. HTML Accessibility + SEO

Semantic HTML can benefit both:

```text
Semantic HTML
      │
      ├── Accessibility
      │
      └── Better document structure
                    │
                    ▼
             Machine interpretation
```

But:

```text
Semantic HTML
      ≠
Automatic SEO ranking
```

---

# 76. HTML Coding Question #1

Create an accessible login form.

Expected structure:

```html
<form>

    <label for="email">
        Email
    </label>

    <input
        id="email"
        name="email"
        type="email"
        required
    >

    <label for="password">
        Password
    </label>

    <input
        id="password"
        name="password"
        type="password"
        required
    >

    <button type="submit">
        Login
    </button>

</form>
```

Things interviewer is testing:

```text
✓ Labels
✓ IDs
✓ name
✓ input types
✓ required
✓ button type
✓ Semantic form
```

---

# 77. HTML Coding Question #2

Create a semantic blog layout.

Expected structure:

```html
<header>
    <h1>
        My Blog
    </h1>

    <nav>
        <a href="/">
            Home
        </a>

        <a href="/blog">
            Blog
        </a>
    </nav>
</header>

<main>

    <article>

        <header>
            <h2>
                Learning HTML
            </h2>
        </header>

        <p>
            HTML provides document structure.
        </p>

        <footer>
            Published August 2026
        </footer>

    </article>

</main>

<footer>
    Copyright 2026
</footer>
```

---

# 78. HTML Coding Question #3

Create an accessible image.

```html
<img
    src="architecture.png"
    alt="Application architecture showing frontend, API server, and database"
>
```

The important part is that the alternative text communicates the image's purpose.

---

# 79. HTML Coding Question #4

Create an accessible button with an icon.

```html
<button
    type="button"
    aria-label="Close"
>
    ×
</button>
```

Why?

The visible symbol:

```text
×
```

may not communicate the intended action as clearly as:

```text
Close
```

---

# 80. HTML Coding Question #5

Create a radio group.

```html
<fieldset>

    <legend>
        Preferred Language
    </legend>

    <label>
        <input
            type="radio"
            name="language"
            value="javascript"
        >
        JavaScript
    </label>

    <label>
        <input
            type="radio"
            name="language"
            value="python"
        >
        Python
    </label>

</fieldset>
```

The same `name` groups the radio buttons.

---

# 81. Output-Based Question #1

What does this display?

```html
<p>
    Hello
    <strong>
        World
    </strong>
</p>
```

Answer:

```text
Hello World
```

with `World` having strong semantic importance and typically being rendered bold by default.

---

# 82. Output-Based Question #2

What happens?

```html
<button>
    Save
</button>

<button>
    Cancel
</button>
```

Two buttons appear.

Their exact visual appearance is browser-dependent and can be changed using CSS.

---

# 83. Output-Based Question #3

What happens?

```html
<p>
    Hello<br>
    World
</p>
```

The text appears on two lines:

```text
Hello
World
```

---

# 84. Output-Based Question #4

What happens?

```html
<p>
    Hello
</p>

<p>
    World
</p>
```

Two paragraphs are created.

The browser applies default paragraph styling, including vertical margins in common user-agent stylesheets.

---

# 85. Tricky Output Question

What is the problem here?

```html
<label>
    Email
</label>

<input
    type="email"
>
```

The label is not explicitly associated with the input.

Better:

```html
<label for="email">
    Email
</label>

<input
    id="email"
    type="email"
>
```

---

# 86. Tricky Output Question

What is wrong?

```html
<input
    placeholder="Password"
    type="password"
>
```

The placeholder is being used as the only field identification.

Better:

```html
<label for="password">
    Password
</label>

<input
    id="password"
    type="password"
    placeholder="Enter your password"
>
```

---

# 87. Tricky Question

What happens if you omit `type` from a button inside a form?

```html
<form>

    <button>
        Click
    </button>

</form>
```

The button generally behaves as a submit button.

If it should not submit the form:

```html
<button type="button">
    Click
</button>
```

---

# 88. Tricky Question

What is the difference?

```html
<a href="#">
    Delete
</a>
```

vs

```html
<button type="button">
    Delete
</button>
```

If Delete performs an action rather than navigation, the button is semantically appropriate.

---

# 89. Scenario Question

### You need a clickable card.

Should you use:

```html
<div onclick="...">
```

Not automatically.

First determine what the interaction does.

If it navigates:

```html
<a href="/product">
    ...
</a>
```

If it performs an action:

```html
<button type="button">
    ...
</button>
```

Avoid making generic divs interactive unless there is a strong reason and you can provide all necessary semantics and keyboard behavior.

---

# 90. Scenario Question

### You need a navigation menu.

Use:

```html
<nav>
    <a href="/">
        Home
    </a>

    <a href="/about">
        About
    </a>

    <a href="/contact">
        Contact
    </a>
</nav>
```

Not:

```html
<div class="navigation">
```

if the content is actually a navigation region.

---

# 91. Scenario Question

### You need a blog post.

Use:

```html
<article>

    <header>
        <h2>
            My Blog Post
        </h2>
    </header>

    <p>
        Content...
    </p>

    <footer>
        Author information
    </footer>

</article>
```

---

# 92. Scenario Question

### You have a sidebar with related articles.

Use:

```html
<aside>

    <h2>
        Related Articles
    </h2>

    <a href="/html">
        HTML Basics
    </a>

</aside>
```

---

# 93. Scenario Question

### You have a group of radio buttons.

Use:

```html
<fieldset>

    <legend>
        Choose a plan
    </legend>

    ...
    
</fieldset>
```

This communicates that the controls form one logical group.

---

# 94. Scenario Question

### You need a search box.

Use:

```html
<form role="search">

    <label for="search">
        Search
    </label>

    <input
        id="search"
        name="q"
        type="search"
    >

    <button type="submit">
        Search
    </button>

</form>
```

The exact implementation can vary, but semantic form structure and accessible labeling matter.

---

# 95. Scenario Question

### A user cannot use a mouse.

What should work?

```text
Tab
 ↓
Move focus

Shift + Tab
 ↓
Move backward

Enter / Space
 ↓
Activate appropriate controls

Escape
 ↓
Close appropriate dialogs/overlays

Arrow keys
 ↓
Used where component pattern requires them
```

The exact keyboard behavior depends on the component.

---

# 96. Most Common HTML Interview Traps

```text
❌ HTML is a programming language
✓ HTML is a markup language

❌ div is bad
✓ div is a generic container

❌ section replaces every div
✓ section represents a thematic grouping

❌ article means blog post only
✓ article is self-contained content

❌ placeholder replaces label
✓ placeholder is only a hint

❌ clickable div is equivalent to button
✓ native button is preferred

❌ ARIA should be used everywhere
✓ Prefer native HTML semantics

❌ POST means encrypted
✓ HTTPS provides transport encryption

❌ alt should always describe the image visually
✓ alt should communicate the image's purpose/meaning

❌ SEO is solved by semantic HTML
✓ Semantic HTML is only one part of SEO

❌ CSS controls HTML meaning
✓ HTML provides structure/meaning
```

---

# 97. 30 Rapid-Fire Questions

Try answering each in 10–20 seconds.

### 1. What does HTML stand for?

HyperText Markup Language.

### 2. Is HTML a programming language?

No. It is a markup language.

### 3. What is the DOM?

An object representation of the document structure created by the browser.

### 4. What is semantic HTML?

Using elements according to their meaning and purpose.

### 5. What does `<main>` represent?

The primary content of the document.

### 6. What does `<nav>` represent?

A navigation section.

### 7. What does `<article>` represent?

Self-contained content.

### 8. What does `<section>` represent?

A thematic grouping.

### 9. What does `<aside>` represent?

Related or secondary content.

### 10. What is a void element?

An element that doesn't have a closing tag.

### 11. Give examples of void elements.

`img`, `input`, `br`, `meta`, `link`.

### 12. Difference between id and class?

`id` identifies a unique element; classes are reusable groupings.

### 13. What is `alt`?

Alternative text for an image.

### 14. Why is alt important?

It provides an alternative description when the image cannot be perceived.

### 15. Is placeholder a replacement for label?

No.

### 16. What is ARIA?

Accessibility-related roles, states, and properties.

### 17. Should ARIA replace semantic HTML?

Generally no.

### 18. `<a>` vs `<button>`?

Navigation vs action.

### 19. What is tabindex?

Controls keyboard focus behavior.

### 20. What does tabindex="-1" do?

Allows programmatic focus but removes the element from normal sequential Tab navigation.

### 21. Why avoid positive tabindex?

It can create confusing custom focus orders.

### 22. What is `defer`?

Downloads the script while parsing can continue and executes it after parsing, with deferred scripts maintaining order.

### 23. What is `async`?

Downloads in parallel and executes as soon as available, without guaranteeing order between async scripts.

### 24. What is `<label>` used for?

Identifies a form control and improves accessibility.

### 25. Why is `name` important in forms?

It identifies form controls for normal form submission.

### 26. `disabled` vs `readonly`?

Disabled controls are inactive and generally excluded from form submission; readonly controls cannot be edited but generally remain successful form controls.

### 27. What is `<fieldset>`?

Groups related form controls.

### 28. What is `<legend>`?

Provides a caption/name for a fieldset.

### 29. What is `<!DOCTYPE html>`?

HTML document type declaration that triggers standards mode.

### 30. What is progressive enhancement?

Starting with a functional baseline and enhancing it with CSS and JavaScript.

---

# 98. Top 20 Questions You Must Be Able to Answer

If an interviewer asks you HTML questions, these are high-priority:

```text
1. What is HTML?
2. HTML vs HTML5?
3. What is semantic HTML?
4. Why use semantic HTML?
5. div vs span?
6. id vs class?
7. section vs article?
8. main vs section?
9. block vs inline?
10. What are void elements?
11. What is DOM?
12. What happens when browser parses HTML?
13. What is accessibility?
14. Why use alt?
15. Why is label important?
16. Button vs anchor?
17. What is ARIA?
18. tabindex="0" vs "-1"?
19. async vs defer?
20. How would you build an accessible form?
```

---

# 99. Interview Revision Flow

Before an interview, revise HTML in this order:

```text
HTML Basics
     ↓
Elements + Attributes
     ↓
Forms
     ↓
Semantic HTML
     ↓
Accessibility
     ↓
DOM
     ↓
Browser Parsing
     ↓
async / defer
     ↓
SEO basics
     ↓
Interview Questions
     ↓
Coding Questions
     ↓
Output Questions
```

---

# 100. HTML Interview Confidence Checklist

Before moving to CSS, you should be able to explain all of these without looking at notes:

```text
BASICS
□ What is HTML?
□ HTML vs CSS vs JS
□ Elements
□ Tags
□ Attributes
□ id vs class
□ DOCTYPE
□ head vs body
□ meta charset
□ viewport

ELEMENTS
□ div
□ span
□ headings
□ paragraphs
□ links
□ images
□ lists
□ tables
□ forms
□ buttons
□ inputs
□ textarea
□ select

SEMANTIC HTML
□ header
□ nav
□ main
□ section
□ article
□ aside
□ footer
□ figure
□ figcaption
□ address

FORMS
□ label
□ name
□ value
□ required
□ disabled
□ readonly
□ placeholder
□ autocomplete
□ radio
□ checkbox
□ fieldset
□ legend
□ GET
□ POST

ACCESSIBILITY
□ semantic HTML
□ alt
□ labels
□ keyboard navigation
□ tabindex
□ focus
□ ARIA
□ aria-label
□ aria-labelledby
□ aria-describedby
□ aria-expanded
□ aria-controls
□ aria-live
□ skip links

BROWSER
□ DOM
□ DOM tree
□ HTML parsing
□ CSSOM
□ rendering pipeline
□ async
□ defer

SEO
□ title
□ meta description
□ semantic structure
□ headings
□ alt
□ canonical URL

PRACTICAL
□ Build login form
□ Build registration form
□ Build navbar
□ Build blog article
□ Build accessible modal structure
□ Build table
□ Build radio group
□ Refactor div-heavy HTML
```

---

# 101. Final HTML Mental Model

```text
                         HTML
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
          Structure     Meaning      Content
             │            │            │
             │            │            │
          Elements     Semantic       Forms
          Attributes   Elements       Images
          DOM          ARIA           Tables
             │            │            │
             └────────────┼────────────┘
                          ▼
                    Browser Parser
                          │
                          ▼
                         DOM
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
           CSSOM     Accessibility    JS
             │           Tree           │
             │            │             │
             ▼            ▼             ▼
           Layout     Screen Reader   Behavior
             │
             ▼
           Render
```
