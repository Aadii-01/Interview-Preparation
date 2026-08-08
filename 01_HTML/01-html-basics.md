# HTML Basics 

> **Goal:** Build interview-ready fundamentals of HTML.  
> **Method:** For every concept, understand **What → Why → How → Example → Interview trap**.

---

## 1. What is HTML?

**HTML (HyperText Markup Language)** is a markup language used to define the **structure and semantic meaning of content** on web pages.

HTML is **not a programming language** because it does not provide programming constructs such as loops, conditions, functions, or algorithms.

### The Web Development Relationship

```text
                WEB PAGE
                   │
       ┌───────────┼───────────┐
       │           │           │
      HTML        CSS      JavaScript
       │           │           │
       ▼           ▼           ▼
   Structure    Styling     Behavior
       │           │           │
       ▼           ▼           ▼
    Content      Layout     Interaction
```

### Example

```html
<h1>My Portfolio</h1>
<p>I am a software developer.</p>
```

HTML tells the browser what the content **is**.

CSS will later tell it how the content **looks**.

JavaScript will tell it how the page **behaves**.

### Interview Answer

> HTML, or HyperText Markup Language, is a markup language used to define the structure and semantic meaning of content on web pages using elements and attributes.

---

# 2. What Does "HyperText" Mean?

**HyperText** means text that can contain links to other resources or documents.

```html
<a href="https://example.com">Visit Example</a>
```

The user can click the link and navigate to another resource.

```text
Text
 │
 └── Link
      │
      ▼
 Another document/resource
```

### Interview Question

**Q: What is HyperText?**

**Answer:** HyperText is text that contains links allowing users to navigate between documents or resources.

---

# 3. What is a Markup Language?

A markup language uses tags or annotations to describe the **structure or meaning of content**.

```html
<h1>My Resume</h1>
<p>I am a software developer.</p>
```

HTML is describing:

```text
<h1> → This is a heading
<p>  → This is a paragraph
```

It is not performing an algorithm or computation.

---

# 4. HTML vs CSS vs JavaScript

| Technology | Main responsibility |
|---|---|
| HTML | Structure and semantics |
| CSS | Styling and layout |
| JavaScript | Behavior and logic |

### Mental Model

```text
                WEB APPLICATION
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      HTML            CSS       JavaScript
        │              │              │
   "What exists?"  "How it looks?" "What it does?"
```

### Example

HTML:

```html
<button id="loginBtn">Login</button>
```

CSS:

```css
button {
    padding: 10px;
}
```

JavaScript:

```javascript
document
    .getElementById("loginBtn")
    .addEventListener("click", () => {
        alert("Login clicked");
    });
```

---

# 5. What is an HTML Tag?

A **tag** is the markup notation used to create or identify an HTML element.

Example:

```html
<p>
```

is an opening tag.

```html
</p>
```

is a closing tag.

---

# 6. What is an HTML Element?

An **element** generally consists of an opening tag, content, and closing tag.

```html
<p>Hello World</p>
```

Breakdown:

```text
        ELEMENT
┌──────────────────────┐
│                      │
│ <p> Hello World </p> │
│  ↑         ↑       ↑ │
│ opening  content  closing
│  tag              tag
└──────────────────────┘
```

### Tag vs Element

```text
<p>                 → Opening tag
</p>                → Closing tag
<p>Hello</p>        → Element
```

### Interview Answer

> A tag is the markup notation such as `<p>` or `</p>`, while an element is the complete construct containing the opening tag, content, and closing tag where applicable.

---

# 7. HTML Attributes

Attributes provide **additional information or configuration** for an HTML element.

Example:

```html
<a href="https://example.com">
    Visit Example
</a>
```

Here:

```text
href
 │
 ▼
Attribute
 │
 ▼
"https://example.com"
Attribute value
```

Another example:

```html
<img src="photo.jpg" alt="Profile photo">
```

Attributes:

- `src`
- `alt`

### Important Rule

Attributes are normally written in the opening tag.

```html
<tag attribute="value">
```

---

# 8. Global Attributes

Global attributes can be used on many different HTML elements.

## `id`

Identifies an element.

```html
<div id="header"></div>
```

An `id` should normally be unique within a document.

---

## `class`

Groups elements for styling or JavaScript selection.

```html
<p class="text">Hello</p>
<p class="text">World</p>
```

Multiple elements can share the same class.

---

## `title`

Provides additional information, often displayed as a tooltip.

```html
<button title="Submit the form">
    Submit
</button>
```

---

## `style`

Adds inline CSS.

```html
<p style="color: red;">
    Hello
</p>
```

Know it for interviews, but prefer external CSS for maintainability in normal projects.

---

## `data-*`

Stores custom data on an element.

```html
<button data-user-id="101">
    Delete
</button>
```

JavaScript can access it through `dataset`:

```javascript
button.dataset.userId
```

---

# 9. Basic HTML Document Structure

A standard HTML5 document looks like this:

```html
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>My Website</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <h1>Hello World</h1>

    <p>Welcome to my website.</p>

</body>

</html>
```

### Structure Diagram

```text
HTML DOCUMENT
│
├── <!DOCTYPE html>
│
└── <html>
    │
    ├── <head>
    │   ├── <meta>
    │   ├── <title>
    │   └── <link>
    │
    └── <body>
        ├── <h1>
        ├── <p>
        ├── images
        ├── forms
        └── other content
```

---

# 10. `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

This is the **DOCTYPE declaration**.

It tells the browser to interpret the document using modern HTML standards / standards mode.

### Important

`<!DOCTYPE html>` is **not an HTML element**.

### Interview Question

**Q: Is DOCTYPE an HTML tag?**

**Answer:** No. It is a document type declaration.

---

# 11. `<html>`

```html
<html lang="en">
```

`<html>` is the **root element** of an HTML document.

Everything else is contained inside it.

```text
<html>
  │
  ├── <head>
  │
  └── <body>
```

The `lang` attribute specifies the primary language of the document.

```html
<html lang="en">
```

---

# 12. `<head>`

The `<head>` contains **metadata and references to resources** about the document.

Example:

```html
<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>My Website</title>

    <link rel="stylesheet" href="style.css">

</head>
```

Common things found inside `<head>`:

```text
<meta>
<title>
<link>
<style>
<script>
```

The `<head>` is different from the visible page content.

---

# 13. `<body>`

The `<body>` contains the document's actual page content.

```html
<body>

    <h1>My Portfolio</h1>

    <p>I am a software developer.</p>

    <button>Contact Me</button>

</body>
```

### Head vs Body

```text
              HTML DOCUMENT
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
        HEAD                BODY
          │                   │
     Metadata             Page content
     Resources            Headings
     Title                Paragraphs
     CSS links            Images
                          Forms
                          Buttons
```

---

# 14. `<meta charset="UTF-8">`

```html
<meta charset="UTF-8">
```

Specifies the character encoding used by the document.

UTF-8 supports a very large range of characters.

Examples:

```text
English
हिन्दी
中文
日本語
é
₹
```

### Interview Answer

> The charset meta tag specifies the character encoding used to interpret the HTML document. UTF-8 is commonly used because it supports a wide range of characters.

---

# 15. Viewport Meta Tag

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

This is important for responsive web pages.

Conceptually:

```text
Desktop screen
      │
      ▼
Browser viewport
      │
      ▼
      CSS layout


Mobile screen
      │
      ▼
Mobile viewport
      │
      ▼
      CSS layout
```

`width=device-width` tells the browser to use the device's viewport width.

`initial-scale=1.0` specifies the initial zoom level.

### Interview Question

**Q: Why is the viewport meta tag important?**

**Answer:**

> It helps pages render appropriately on different screen sizes by controlling the viewport dimensions and initial scaling, which is important for responsive design.

---

# 16. `<title>`

```html
<title>My Portfolio</title>
```

The title is displayed in places such as the browser tab.

It is also useful for:

- identifying the page
- bookmarks
- search-engine presentation

It belongs inside `<head>`.

---

# 17. `<link>`

`<link>` establishes a relationship between the current document and an external resource.

Most commonly:

```html
<link rel="stylesheet" href="style.css">
```

Meaning:

```text
HTML
 │
 │ <link>
 ▼
style.css
 │
 ▼
CSS rules
```

It is commonly used for:

- stylesheets
- favicons
- other linked resources

---

# 18. `<script>`

Used to include or execute JavaScript.

Example:

```html
<script src="app.js"></script>
```

JavaScript can then interact with the page.

```text
HTML
 │
 ├── DOM structure
 │
 └── <script>
          │
          ▼
      JavaScript
          │
          ▼
    Page behavior
```

We will study `async` and `defer` later in the browser section.

For now, remember:

```html
<script src="app.js"></script>
<script defer src="app.js"></script>
<script async src="app.js"></script>
```

---

# 19. HTML Comments

Comments are written as:

```html
<!-- This is a comment -->
```

They are not displayed as normal page content.

### Security Warning

Never put secrets in HTML comments.

Bad:

```html
<!--
admin_password = 123456
-->
```

Anything delivered to the browser can potentially be inspected by the user.

---

# 20. Block vs Inline Elements

HTML elements have default display behavior that commonly falls into block or inline behavior.

### Block-level behavior

Examples:

```html
<div>
<p>
<h1>
<section>
<header>
<footer>
```

They generally start on a new line and occupy available horizontal space by default.

### Inline behavior

Examples:

```html
<span>
<a>
<strong>
<em>
```

They generally participate in the surrounding text flow.

### Diagram

```text
BLOCK

┌──────────────────────────────┐
│        <div>                 │
└──────────────────────────────┘

┌──────────────────────────────┐
│        <p>                   │
└──────────────────────────────┘


INLINE

Text <span>inline</span> content
     └───────────────┘
```

### Important Interview Trap

Do not say:

> "An element is permanently block or inline."

CSS controls layout through the `display` property.

For example:

```css
span {
    display: block;
}
```

So HTML's default behavior and CSS's actual layout behavior are different concepts.

---

# 21. `<div>` vs `<span>`

Both are generic containers and have no semantic meaning by themselves.

### `<div>`

Default behavior: block-level.

```html
<div>
    Content
</div>
```

### `<span>`

Default behavior: inline.

```html
<p>
    Hello <span>World</span>
</p>
```

### Comparison

| Feature | `<div>` | `<span>` |
|---|---|---|
| Default behavior | Block | Inline |
| Semantic meaning | None | None |
| Typical use | Larger/grouped content | Small inline content |
| Can contain other elements? | Yes | Yes, subject to HTML content rules |

### Interview Question

**Q: Why shouldn't we use `<div>` everywhere?**

Because semantic HTML elements such as `<nav>`, `<main>`, `<article>`, and `<button>` communicate meaning to browsers, accessibility tools, search engines, and developers.

We'll cover this deeply in `04-semantic-html.md`.

---

# 22. Void Elements

Some HTML elements do not have closing tags and cannot contain child content.

These are called **void elements**.

Important examples:

```html
<img>
<br>
<hr>
<input>
<meta>
<link>
```

Example:

```html
<img src="profile.jpg" alt="Profile">
```

Not:

```html
<img>
    content
</img>
```

### Interview Question

**Q: What are void elements?**

> Void elements are HTML elements that cannot contain child content and do not have closing tags, such as `<img>`, `<input>`, `<br>`, `<meta>`, and `<link>`.

---

# 23. HTML Entities

Some characters have special meaning in HTML.

Common entities:

| Entity | Displays |
|---|---|
| `&lt;` | `<` |
| `&gt;` | `>` |
| `&amp;` | `&` |
| `&quot;` | `"` |
| `&nbsp;` | non-breaking space |

Example:

```html
<p>5 &lt; 10</p>
```

Browser output:

```text
5 < 10
```

---

# 24. How the Browser Sees HTML

At a high level, the browser parses HTML and constructs the **DOM (Document Object Model)**.

```text
HTML SOURCE
    │
    ▼
HTML Parser
    │
    ▼
DOM Tree
    │
    ├── html
    │    ├── head
    │    │    ├── meta
    │    │    └── title
    │    │
    │    └── body
    │         ├── h1
    │         ├── p
    │         └── button
    │
    ▼
Browser rendering process
```

Example HTML:

```html
<body>
    <h1>Hello</h1>
    <p>Welcome</p>
</body>
```

Conceptual DOM:

```text
body
├── h1
│   └── "Hello"
│
└── p
    └── "Welcome"
```

We will study the DOM deeply in:

`JavaScript/10-dom.md`

---

# 25. Important Interview Traps

### Trap 1

**Q: Is HTML a programming language?**

No. It is a markup language.

---

### Trap 2

**Q: Is `<!DOCTYPE html>` an HTML element?**

No. It is a document type declaration.

---

### Trap 3

**Q: Is `<p>` an element?**

Strictly speaking, `<p>` is a tag. The complete:

```html
<p>Hello</p>
```

is the element.

---

### Trap 4

**Q: Are `<div>` and `<span>` semantic elements?**

No. They are generic containers.

---

### Trap 5

**Q: Are block and inline behaviors permanent?**

No. CSS can change an element's layout behavior through `display`.

---

### Trap 6

**Q: Can HTML comments contain passwords safely?**

No. Client-side HTML is accessible to the user.

---

# 26. Interview Questions

## Basic

1. What is HTML?
2. Why is HTML called a markup language?
3. What is HyperText?
4. Is HTML a programming language?
5. What is the difference between a tag and an element?
6. What are attributes?
7. What are global attributes?
8. What is the purpose of `id`?
9. What is the purpose of `class`?
10. What are `data-*` attributes?

## Document Structure

11. What does `<!DOCTYPE html>` do?
12. Is DOCTYPE a tag?
13. What is the root element of HTML?
14. What is the purpose of `<head>`?
15. What is the purpose of `<body>`?
16. Why do we use `<meta charset="UTF-8">`?
17. Why do we use the viewport meta tag?
18. What is the purpose of `<title>`?
19. What is `<link>` used for?
20. What is `<script>` used for?

## Elements

21. What are void elements?
22. Give examples of void elements.
23. What is the difference between `<div>` and `<span>`?
24. What are block-level elements?
25. What are inline elements?
26. Can CSS change block/inline behavior?
27. What are HTML entities?
28. Why should sensitive information not be placed in HTML comments?

---

# 27. Practical Questions

Try these yourself before looking at the answer.

### Q1. Create a basic HTML5 page

Requirements:

- title: `My Portfolio`
- heading: `Aaditya Shirke`
- paragraph describing yourself
- link to GitHub
- button saying `Contact Me`

---

### Q2. Identify the components

```html
<a href="/about" class="nav-link">
    About
</a>
```

Identify:

- element
- opening tag
- closing tag
- attributes
- attribute values
- content

---

### Q3. Identify the void elements

Which of these are void elements?

```html
<div>
<img>
<p>
<input>
<br>
<section>
<meta>
```

---

# 28. One-Minute Revision

If you have only one minute before an interview, remember:

```text
HTML
 │
 ├── Markup language
 │
 ├── Structure + semantics
 │
 ├── Elements
 │    ├── Tags
 │    └── Attributes
 │
 ├── Document
 │    ├── DOCTYPE
 │    └── html
 │         ├── head
 │         └── body
 │
 ├── Global attributes
 │    ├── id
 │    ├── class
 │    ├── title
 │    └── data-*
 │
 ├── Layout defaults
 │    ├── block
 │    └── inline
 │
 ├── Generic containers
 │    ├── div
 │    └── span
 │
 └── Void elements
      ├── img
      ├── input
      ├── br
      ├── hr
      ├── meta
      └── link
```

---

# 29. Interview Mental Model

When an interviewer asks about HTML, think in this order:

```text
                 HTML
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
    Structure             Meaning
        │                   │
     Elements           Semantics
        │                   │
    Attributes          Accessibility
        │                   │
        └─────────┬─────────┘
                  ▼
                 DOM
                  │
                  ▼
              Browser
```

This mental model will become important when we later connect:

```text
HTML
 ↓
DOM
 ↓
CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
JavaScript interaction
```

---

# 30. Progress

```text
HTML
├── ✅ 01 HTML Basics
├── ⬜ 02 HTML Elements
├── ⬜ 03 HTML Forms
├── ⬜ 04 Semantic HTML
├── ⬜ 05 Accessibility
└── ⬜ 06 HTML Interview Questions
```

## Next File

**`02-html-elements.md`**

We will cover the actual HTML elements you need to know for interviews:

```text
Text
 ↓
Headings
 ↓
Paragraphs
 ↓
Links
 ↓
Images
 ↓
Lists
 ↓
Tables
 ↓
Buttons
 ↓
Audio / Video
 ↓
iframe
 ↓
Containers
```

