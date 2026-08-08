# HTML Elements 

> **Goal:** Learn the HTML elements that are actually important for interviews and real web development.
>
> **Method:** For each element, understand **purpose → syntax → important attributes → use case → interview trap**.

---

# 1. HTML Elements: The Big Picture

HTML elements can be grouped according to what they represent:

```text
HTML ELEMENTS
│
├── Text
│   ├── h1 - h6
│   ├── p
│   ├── strong
│   ├── em
│   ├── b
│   ├── i
│   └── span
│
├── Navigation
│   └── a
│
├── Media
│   ├── img
│   ├── audio
│   ├── video
│   └── picture
│
├── Lists
│   ├── ul
│   ├── ol
│   └── dl
│
├── Tables
│   ├── table
│   ├── tr
│   ├── th
│   └── td
│
├── Containers
│   ├── div
│   └── span
│
├── Interactive
│   ├── button
│   └── details
│
└── Embedded
    ├── iframe
    ├── svg
    └── canvas
```

---

# 2. Headings: `<h1>` to `<h6>`

HTML provides six heading levels:

```html
<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Level 4 Heading</h4>
<h5>Level 5 Heading</h5>
<h6>Level 6 Heading</h6>
```

Conceptually:

```text
h1
│
├── h2
│   ├── h3
│   │   └── h4
│   └── h3
│
└── h2
```

### Important

Heading levels represent **document hierarchy**, not simply font sizes.

CSS controls the visual size.

### Interview Question

**Q: Should `<h1>` only be used because it is the largest heading?**

No.

Its primary purpose is to represent the most important heading level in the document structure.

---

# 3. `<p>` — Paragraph

Used for paragraphs of text.

```html
<p>
    HTML is used to structure web pages.
</p>
```

Multiple paragraphs:

```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
```

Do not use `<p>` merely to create spacing. CSS should handle layout spacing.

---

# 4. Text Formatting Elements

HTML provides elements that communicate meaning or presentation.

## `<strong>`

Indicates strong importance.

```html
<p>
    <strong>Warning:</strong> Do not share your password.
</p>
```

Browsers commonly display it in bold.

### Important

`<strong>` provides semantic meaning.

---

## `<b>`

Draws attention to text without necessarily indicating strong importance.

```html
<p>
    This is <b>important-looking</b> text.
</p>
```

### Interview Trap

Do not simply say:

> `<strong>` is bold and `<b>` is also bold.

The important difference is **semantics**.

---

# 5. `<em>` vs `<i>`

## `<em>`

Represents emphasis.

```html
<p>
    This is <em>very</em> important.
</p>
```

## `<i>`

Represents text set apart from the surrounding content, often used for alternate voice, technical terms, idioms, etc.

```html
<p>
    The term <i>in vitro</i> is commonly used.
</p>
```

Browsers commonly render both as italic by default, but their semantic purposes differ.

### Interview Rule

```text
<strong> → strong importance
<b>      → attention without that semantic importance

<em>     → emphasis
<i>      → alternate voice/term/style distinction
```

---

# 6. `<mark>`

Highlights text.

```html
<p>
    Search result: <mark>JavaScript</mark>
</p>
```

Useful when indicating relevant/highlighted content.

---

# 7. `<small>`

Represents side comments or smaller print.

```html
<p>
    Price: ₹999
    <small>Terms and conditions apply.</small>
</p>
```

Do not confuse the element's semantics with merely making text visually smaller.

---

# 8. `<br>` — Line Break

Creates a line break.

```html
Hello<br>
World
```

Output conceptually:

```text
Hello
World
```

`<br>` is a void element.

### Interview Trap

Don't use dozens of `<br>` elements for page layout.

Use CSS for layout and spacing.

---

# 9. `<hr>` — Thematic Break

Represents a thematic break between sections of content.

```html
<h2>Education</h2>

<p>My education details...</p>

<hr>

<h2>Projects</h2>
```

It is also a void element.

---

# 10. `<a>` — Anchor Element

Used to create hyperlinks.

```html
<a href="https://example.com">
    Visit Example
</a>
```

Important attribute:

```text
href
```

### Absolute URL

```html
<a href="https://example.com/about">
    About
</a>
```

### Relative URL

```html
<a href="/about">
    About
</a>
```

---

# 11. Opening Links in a New Tab

```html
<a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Open Example
</a>
```

### Important

`target="_blank"` requests opening the link in a new browsing context.

For external links, `rel="noopener noreferrer"` is a common security/privacy consideration.

---

# 12. Fragment / Anchor Links

You can navigate to an element within the same page.

```html
<a href="#projects">
    Go to Projects
</a>

<section id="projects">
    <h2>Projects</h2>
</section>
```

Flow:

```text
Click link
    │
    ▼
href="#projects"
    │
    ▼
Find element with id="projects"
    │
    ▼
Navigate/scroll to it
```

---

# 13. `<img>` — Images

Basic syntax:

```html
<img
    src="profile.jpg"
    alt="Profile photo"
>
```

Important attributes:

```text
src
alt
width
height
loading
```

### `src`

Specifies the image resource.

### `alt`

Provides alternative text.

```html
<img
    src="cat.jpg"
    alt="A cat sitting on a chair"
>
```

`alt` is important for accessibility and when the image cannot be displayed.

---

# 14. Why `alt` Matters

Suppose:

```html
<img src="logo.png" alt="Company logo">
```

If the image cannot be loaded, the alternative text can communicate what the image represents.

Screen readers can also use it.

### Interview Question

**Q: Why is `alt` important?**

> It provides alternative text for an image, improving accessibility and providing useful information when the image cannot be displayed.

---

# 15. Decorative Images

If an image is purely decorative and provides no meaningful information, its alternative text can be empty:

```html
<img src="decoration.png" alt="">
```

This tells assistive technology that the image does not need to be announced as meaningful content.

---

# 16. `<figure>` and `<figcaption>`

Used to associate media/content with a caption.

```html
<figure>
    <img
        src="architecture.jpg"
        alt="Modern building with glass walls"
    >

    <figcaption>
        Modern glass architecture.
    </figcaption>
</figure>
```

Structure:

```text
figure
│
├── image
│
└── figcaption
```

Useful for:

- images
- diagrams
- illustrations
- code examples
- other referenced content

---

# 17. Responsive Images: `srcset`

For different screen sizes/resolutions, HTML supports responsive image selection.

Example:

```html
<img
    src="small.jpg"
    srcset="
        small.jpg 480w,
        medium.jpg 800w,
        large.jpg 1200w
    "
    alt="Mountain landscape"
>
```

The browser can select an appropriate resource.

You don't need to memorize every `srcset` rule yet, but understand the purpose:

> Provide the browser with multiple image resources so it can choose an appropriate one.

---

# 18. `<picture>`

Used when you need more control over which image resource is used.

```html
<picture>

    <source
        media="(max-width: 600px)"
        srcset="mobile.jpg"
    >

    <img
        src="desktop.jpg"
        alt="Mountain landscape"
    >

</picture>
```

Conceptual flow:

```text
             <picture>
                 │
          Check conditions
                 │
        ┌────────┴────────┐
        ▼                 ▼
     Mobile             Other
        │                 │
        ▼                 ▼
  mobile.jpg        desktop.jpg
```

---

# 19. Lists

HTML provides three major list types:

```text
Unordered
Ordered
Description
```

---

# 20. Unordered List — `<ul>`

Used when order doesn't matter.

```html
<ul>
    <li>Python</li>
    <li>JavaScript</li>
    <li>Go</li>
</ul>
```

Conceptually:

```text
• Python
• JavaScript
• Go
```

Each item uses `<li>`.

---

# 21. Ordered List — `<ol>`

Used when order matters.

```html
<ol>
    <li>Install Node.js</li>
    <li>Create project</li>
    <li>Run application</li>
</ol>
```

Conceptually:

```text
1. Install Node.js
2. Create project
3. Run application
```

---

# 22. `<ol>` Attributes

Example:

```html
<ol start="5">
    <li>Item</li>
    <li>Item</li>
</ol>
```

Can also use:

```html
<ol reversed>
```

or:

```html
<ol type="A">
```

Know that these attributes control list presentation/order behavior.

---

# 23. Description List — `<dl>`

Used for terms and their descriptions.

```html
<dl>

    <dt>HTML</dt>
    <dd>Markup language for web structure.</dd>

    <dt>CSS</dt>
    <dd>Stylesheet language for presentation.</dd>

</dl>
```

Structure:

```text
<dl>
│
├── <dt> Term
│
├── <dd> Description
│
├── <dt> Term
│
└── <dd> Description
```

### Interview Question

**Q: When would you use `<dl>`?**

For a set of terms and their associated descriptions/values, such as a glossary or metadata list.

---

# 24. Nested Lists

Lists can contain other lists.

```html
<ul>

    <li>
        Frontend

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>

    <li>
        Backend
    </li>

</ul>
```

Conceptually:

```text
Frontend
├── HTML
├── CSS
└── JavaScript

Backend
```

---

# 25. Tables

Tables represent **tabular data**.

Basic structure:

```html
<table>

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>Aadi</td>
        <td>21</td>
    </tr>

</table>
```

Conceptually:

```text
table
│
├── tr
│   ├── th
│   └── th
│
└── tr
    ├── td
    └── td
```

---

# 26. Important Table Elements

```text
<table>   → table
<tr>      → table row
<th>      → header cell
<td>      → data cell
<thead>   → header section
<tbody>   → body section
<tfoot>   → footer section
<caption> → table caption
```

---

# 27. Semantic Table Structure

A better table:

```html
<table>

    <caption>
        Student Marks
    </caption>

    <thead>
        <tr>
            <th>Name</th>
            <th>Marks</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Aadi</td>
            <td>85</td>
        </tr>

        <tr>
            <td>Rahul</td>
            <td>91</td>
        </tr>
    </tbody>

</table>
```

The structure communicates meaning more clearly.

---

# 28. `th` vs `td`

### `<th>`

Represents a header cell.

```html
<th>Name</th>
```

### `<td>`

Represents ordinary data.

```html
<td>Aadi</td>
```

### Interview Question

**Q: Why use `<th>` instead of `<td>` for headers?**

Because `<th>` semantically identifies a header cell and allows browsers and assistive technologies to understand table relationships more effectively.

---

# 29. `colspan` and `rowspan`

### `colspan`

Makes a cell span multiple columns.

```html
<td colspan="2">
    Total
</td>
```

Diagram:

```text
Normal:

┌──────┬──────┐
│  A   │  B   │
└──────┴──────┘


colspan="2":

┌──────────────┐
│    Total     │
└──────────────┘
```

### `rowspan`

Makes a cell span multiple rows.

```html
<td rowspan="2">
    A
</td>
```

---

# 30. `<button>`

Creates a button.

```html
<button>
    Submit
</button>
```

Important attribute:

```html
<button type="submit">
    Submit
</button>
```

Common button types:

```text
submit
button
reset
```

### Very Important Interview Trap

Inside a form, a `<button>` without an explicit `type` generally behaves as a submit button.

So when you want a normal interactive button that should not submit the form:

```html
<button type="button">
    Open Menu
</button>
```

---

# 31. `<div>` as a Container

```html
<div class="card">
    <h2>Product</h2>
    <p>Description</p>
</div>
```

`div` is a generic container.

It has no inherent semantic meaning.

Prefer a semantic element when one accurately represents the content.

For example:

```html
<article class="card">
```

may be more meaningful than:

```html
<div class="card">
```

depending on the content.

---

# 32. `<span>` as an Inline Container

```html
<p>
    Price:
    <span class="price">₹999</span>
</p>
```

Useful when you need to target a small piece of inline content.

---

# 33. `<audio>`

Embeds audio content.

```html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>
```

Common attribute:

```text
controls
```

Other important concepts include:

```text
autoplay
loop
muted
preload
```

Be careful with autoplay because browsers commonly restrict autoplay with sound.

---

# 34. `<video>`

Embeds video.

```html
<video controls width="600">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support video.
</video>
```

Common attributes:

```text
controls
autoplay
muted
loop
poster
preload
width
height
```

---

# 35. `<iframe>`

Embeds another browsing context/document.

Example:

```html
<iframe
    src="https://example.com"
    title="Example website"
>
</iframe>
```

Common uses:

- maps
- videos
- external documents
- embedded applications

### Security

For potentially untrusted embedded content, understand that `sandbox` can restrict iframe capabilities.

Example:

```html
<iframe
    src="..."
    sandbox
    title="Embedded content"
></iframe>
```

We will revisit iframe security in the web-security section.

---

# 36. SVG

SVG means **Scalable Vector Graphics**.

Example:

```html
<svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
>
    <circle
        cx="50"
        cy="50"
        r="40"
    />
</svg>
```

SVG is useful for:

- icons
- logos
- diagrams
- vector illustrations

Unlike raster images, SVG graphics are based on vector descriptions and can scale without the same pixelation problem.

---

# 37. Canvas

Canvas provides a drawing surface that JavaScript can manipulate.

```html
<canvas
    id="myCanvas"
    width="400"
    height="200"
>
</canvas>
```

JavaScript can draw on it.

```text
Canvas
   │
   ▼
JavaScript
   │
   ▼
Drawing operations
   │
   ▼
Pixels on canvas
```

### SVG vs Canvas

| SVG | Canvas |
|---|---|
| Vector graphics | Drawing surface |
| Elements exist in DOM | Drawing is not represented as individual DOM elements |
| Good for scalable graphics | Good for frequent/dynamic drawing |
| Individual elements can be targeted | Drawing is generally manipulated through JS APIs |

---

# 38. `<details>` and `<summary>`

Useful for expandable content.

```html
<details>

    <summary>
        What is HTML?
    </summary>

    <p>
        HTML is a markup language.
    </p>

</details>
```

Conceptually:

```text
▶ What is HTML?

Click

▼ What is HTML?
    HTML is a markup language.
```

This can provide native disclosure behavior without requiring JavaScript for the basic interaction.

---

# 39. `<dialog>`

HTML also provides a dialog element.

```html
<dialog id="myDialog">
    <p>Hello!</p>
</dialog>
```

JavaScript can open it.

```javascript
myDialog.showModal();
```

You should know that HTML has native dialog capabilities, although many production applications also use component libraries/custom modal implementations.

---

# 40. Common Element Comparison Questions

## `<b>` vs `<strong>`

```text
b
↓
attention/style distinction

strong
↓
strong importance
```

---

## `<i>` vs `<em>`

```text
i
↓
alternate voice/term/style distinction

em
↓
emphasis
```

---

## `<div>` vs `<span>`

```text
div
↓
generic block-level container by default

span
↓
generic inline container by default
```

---

## `<ol>` vs `<ul>`

```text
ol
↓
order matters

ul
↓
order does not matter
```

---

## `<th>` vs `<td>`

```text
th
↓
header cell

td
↓
data cell
```

---

## `<img>` vs `<picture>`

```text
img
↓
display an image

picture
↓
provide multiple possible image sources/conditions
```

---

## SVG vs Canvas

```text
SVG
↓
vector document/elements

Canvas
↓
scriptable drawing surface
```

---

# 41. Common Interview Traps

### Trap 1: Heading size

Wrong:

> `<h1>` is used because it is the biggest font.

Better:

> `<h1>` represents the highest heading level; CSS controls its visual appearance.

---

### Trap 2: `<b>` vs `<strong>`

Wrong:

> Both are exactly the same.

Better:

> They may look similar by default, but `<strong>` carries semantic meaning of strong importance while `<b>` is for drawing attention without that specific importance.

---

### Trap 3: `<br>` for spacing

Wrong:

```html
<br><br><br>
```

to create page spacing.

Use CSS for layout.

---

### Trap 4: Tables for layout

Don't use `<table>` to build an entire webpage layout.

Tables should represent **tabular data**.

---

### Trap 5: Missing `alt`

For meaningful images, don't casually omit `alt`.

```html
<img src="profile.jpg" alt="Profile photo">
```

---

### Trap 6: Button inside form

Remember:

```html
<button type="button">
```

for a button that should not submit the form.

---

# 42. Interview Questions

## Text

1. What is the difference between `<strong>` and `<b>`?
2. What is the difference between `<em>` and `<i>`?
3. What is `<mark>` used for?
4. Why should `<br>` not be used for layout?

## Links

5. What is the `<a>` element?
6. What is the difference between an absolute and relative URL?
7. What does `target="_blank"` do?
8. Why might `rel="noopener noreferrer"` be used?
9. How do you create an anchor link within the same page?

## Images

10. Why is `alt` important?
11. What is the difference between `src` and `srcset`?
12. What is `<picture>` used for?
13. What is `<figure>` used for?
14. What is `<figcaption>`?

## Lists

15. Difference between `<ol>` and `<ul>`?
16. What is `<dl>`?
17. Can lists be nested?

## Tables

18. What is `<tr>`?
19. `<th>` vs `<td>`?
20. What are `<thead>`, `<tbody>`, and `<tfoot>`?
21. What is `colspan`?
22. What is `rowspan>`?
23. Why shouldn't tables be used for page layout?

## Media

24. How do you embed audio?
25. How do you embed video?
26. What is an iframe?
27. What is SVG?
28. SVG vs Canvas?

---

# 43. Practical Tasks

Before moving forward, implement these without copying.

## Task 1 — Portfolio

Create:

```text
My Portfolio
│
├── About
├── Skills
├── Projects
└── Contact
```

Use:

- headings
- paragraphs
- links
- lists
- images
- buttons

---

## Task 2 — Student Table

Create a table:

```text
Student | Branch | CGPA
A       | IT     | 8.2
B       | CSE    | 8.7
C       | ECE    | 7.9
```

Use proper:

- `<caption>`
- `<thead>`
- `<tbody>`
- `<th>`
- `<td>`

---

## Task 3 — Product Card

Create:

```text
┌─────────────────────────┐
│        Product Image    │
│                         │
│ Product Name            │
│ Description             │
│ ₹999                    │
│                         │
│      [ Buy Now ]        │
└─────────────────────────┘
```

Use only HTML for now. CSS comes later.

---

# 44. One-Minute Revision

```text
HTML ELEMENTS
│
├── Text
│   ├── h1-h6
│   ├── p
│   ├── strong / b
│   ├── em / i
│   ├── mark
│   └── small
│
├── Links
│   └── a
│
├── Images
│   ├── img
│   ├── figure
│   ├── figcaption
│   ├── picture
│   └── srcset
│
├── Lists
│   ├── ul → unordered
│   ├── ol → ordered
│   └── dl → description
│
├── Tables
│   ├── table
│   ├── thead
│   ├── tbody
│   ├── tfoot
│   ├── tr
│   ├── th
│   └── td
│
├── Media
│   ├── audio
│   ├── video
│   ├── iframe
│   ├── SVG
│   └── canvas
│
└── Generic
    ├── div
    └── span
```

---

# 45. Progress

```text
HTML
├── ✅ 01 HTML Basics
├── ✅ 02 HTML Elements
├── ⬜ 03 HTML Forms
├── ⬜ 04 Semantic HTML
├── ⬜ 05 Accessibility
└── ⬜ 06 HTML Interview Questions
```

## Next

`03-html-forms.md`

We will cover forms in depth:

```text
<form>
   │
   ├── input
   │    ├── text
   │    ├── email
   │    ├── password
   │    ├── radio
   │    ├── checkbox
   │    ├── file
   │    └── number
   │
   ├── label
   ├── textarea
   ├── select
   ├── option
   ├── button
   │
   └── Validation
        ├── required
        ├── pattern
        ├── min/max
        └── minlength/maxlength
```

This is an especially important section because HTML forms connect directly to **HTTP, JavaScript, validation, accessibility, and backend APIs**.
