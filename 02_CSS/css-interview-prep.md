# CSS Interview Preparation — High-Frequency Topics

## 1. What is CSS?

**CSS (Cascading Style Sheets)** is used to control the presentation and layout of HTML elements.

It handles:

* Colors
* Fonts
* Spacing
* Borders
* Layout
* Responsive design
* Animations
* Positioning

### HTML vs CSS

```text
HTML
  │
  ├── Structure
  │   ├── Heading
  │   ├── Paragraph
  │   ├── Button
  │   └── Image
  │
  ▼
CSS
  │
  ├── Appearance
  ├── Layout
  ├── Spacing
  ├── Colors
  └── Responsiveness
```

Example:

```html
<button class="btn">Login</button>
```

```css
.btn {
    background-color: blue;
    color: white;
    padding: 10px 20px;
}
```

---

# 2. How CSS is Applied

There are three ways to apply CSS.

### 1. Inline CSS

```html
<p style="color: red;">Hello</p>
```

### 2. Internal CSS

```html
<style>
    p {
        color: red;
    }
</style>
```

### 3. External CSS

```html
<link rel="stylesheet" href="style.css">
```

### Interview Question

**Which method is preferred in real projects?**

**Answer:** External CSS because it improves:

* Maintainability
* Reusability
* Separation of concerns
* Caching

---

# 3. CSS Syntax

```css
selector {
    property: value;
}
```

Example:

```css
p {
    color: red;
    font-size: 20px;
}
```

Breakdown:

```text
        selector
           │
           ▼
        ┌─────┐
p {     │     │
        │     │
color: red;
font-size: 20px;
        │     │
        └─────┘
          │
       declarations
```

---

# 4. CSS Selectors ⭐⭐⭐

One of the most frequently asked topics.

## Element Selector

```css
p {
    color: red;
}
```

Selects all `<p>` elements.

---

## Class Selector

```css
.container {
    width: 500px;
}
```

HTML:

```html
<div class="container"></div>
```

---

## ID Selector

```css
#header {
    background: black;
}
```

HTML:

```html
<div id="header"></div>
```

IDs should generally be unique within a page.

---

## Universal Selector

```css
* {
    margin: 0;
    padding: 0;
}
```

Selects everything.

---

## Group Selector

```css
h1, h2, p {
    color: blue;
}
```

---

## Descendant Selector

```css
div p {
    color: red;
}
```

Selects every `<p>` inside `<div>`.

```text
div
 │
 ├── p       ← selected
 │
 └── section
      └── p  ← selected
```

---

## Child Selector

```css
div > p {
    color: red;
}
```

Only direct children.

```text
div
 │
 ├── p       ← selected
 │
 └── section
      └── p  ← NOT selected
```

---

## Attribute Selector

```css
input[type="text"] {
    border: 1px solid black;
}
```

---

# 5. Pseudo-classes ⭐⭐⭐

Pseudo-classes represent a **state of an element**.

Common examples:

```css
button:hover {
    background-color: blue;
}

input:focus {
    border: 2px solid green;
}

a:visited {
    color: purple;
}

li:first-child {
    color: red;
}

li:last-child {
    color: blue;
}
```

Common interview examples:

* `:hover`
* `:focus`
* `:active`
* `:visited`
* `:first-child`
* `:last-child`
* `:nth-child()`
* `:not()`

Example:

```css
li:nth-child(2) {
    color: red;
}
```

---

# 6. Pseudo-elements ⭐⭐⭐

Pseudo-elements style a **specific part of an element**.

Common ones:

```css
::before
::after
::first-letter
::first-line
```

Example:

```css
p::first-letter {
    font-size: 30px;
}
```

Example:

```css
button::before {
    content: "→ ";
}
```

### Pseudo-class vs Pseudo-element

| Pseudo-class     | Pseudo-element             |
| ---------------- | -------------------------- |
| Represents state | Represents part of element |
| `:hover`         | `::before`                 |
| `:focus`         | `::after`                  |
| `:nth-child()`   | `::first-letter`           |

### Interview Question

**Difference between `:` and `::`?**

Usually:

```text
:   → pseudo-class
::  → pseudo-element
```

---

# 7. CSS Cascade ⭐⭐⭐⭐⭐

This is extremely important for interviews.

**Cascade** determines which CSS rule wins when multiple rules target the same element.

The simplified decision process is:

```text
Multiple CSS Rules
       │
       ▼
Importance
       │
       ▼
Origin
       │
       ▼
Specificity
       │
       ▼
Source Order
       │
       ▼
Winning Rule
```

In practical interviews, the most important concept is **specificity**.

---

# 8. CSS Specificity ⭐⭐⭐⭐⭐

Specificity determines which selector has higher priority.

A simplified priority model:

```text
Inline styles
     ↓
ID
     ↓
Class / Attribute / Pseudo-class
     ↓
Element / Pseudo-element
```

Example:

```css
p {
    color: blue;
}

.text {
    color: green;
}

#paragraph {
    color: red;
}
```

```html
<p id="paragraph" class="text">
    Hello
</p>
```

Result:

```text
red
```

because:

```text
#paragraph
   ↑
  ID
```

has higher specificity.

### Specificity Calculation

Think of specificity as:

```text
Inline → ID → Class → Element
```

For example:

```css
#box .text p {
    color: red;
}
```

Specificity:

```text
ID       = 1
Class    = 1
Element  = 1

→ 1-1-1
```

Another:

```css
.box p {
    color: blue;
}
```

```text
ID       = 0
Class    = 1
Element  = 1

→ 0-1-1
```

Therefore:

```text
1-1-1 > 0-1-1
```

---

# 9. `!important` ⭐⭐⭐

```css
p {
    color: red !important;
}
```

`!important` gives a declaration very high priority.

However, **avoid unnecessary use** because it makes CSS difficult to maintain and override.

Interview answer:

> `!important` should generally be avoided unless there is a specific reason because it makes the cascade harder to manage.

---

# 10. CSS Box Model ⭐⭐⭐⭐⭐

One of the **most important CSS interview topics**.

Every HTML element can be understood as a box.

```text
┌───────────────────────────────┐
│            Margin             │
│  ┌─────────────────────────┐  │
│  │         Border          │  │
│  │  ┌───────────────────┐  │  │
│  │  │      Padding      │  │  │
│  │  │  ┌─────────────┐  │  │  │
│  │  │  │   Content   │  │  │  │
│  │  │  └─────────────┘  │  │  │
│  │  └───────────────────┘  │  │
│  └─────────────────────────┘  │
└───────────────────────────────┘
```

Order:

```text
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

### Content

Actual text/image/etc.

### Padding

Space between content and border.

### Border

Boundary around padding/content.

### Margin

Space outside the element.

---

# 11. `box-sizing` ⭐⭐⭐⭐⭐

By default:

```css
box-sizing: content-box;
```

Suppose:

```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid;
}
```

With `content-box`:

```text
Total width
= width + left/right padding + left/right border

= 200 + 40 + 10

= 250px
```

---

## `border-box`

```css
box-sizing: border-box;
```

Now:

```text
Total width = 200px
```

The padding and border are included within the declared width.

Common reset:

```css
* {
    box-sizing: border-box;
}
```

### Interview Question

**Why is `border-box` commonly used?**

Because it makes layout calculations more predictable.

---

# 12. `display` Property ⭐⭐⭐⭐⭐

Common values:

```css
display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;
```

---

## Block

Examples:

```html
<div>
<p>
<h1>
<section>
```

Characteristics:

```text
Block
│
├── Starts on new line
├── Usually takes full available width
└── Width/height can be set
```

---

## Inline

Examples:

```html
<span>
<a>
<strong>
```

Characteristics:

```text
Inline
│
├── Does not start new line
├── Takes content width
└── width/height generally don't apply as expected
```

---

## Inline-block

Combines properties of inline and block.

```css
display: inline-block;
```

```text
Inline-block
│
├── Sits inline
└── Can have width/height
```

---

## `display: none`

```css
display: none;
```

Element:

* Doesn't appear
* Doesn't occupy layout space

---

# 13. `visibility: hidden` vs `display: none` ⭐⭐⭐⭐

```css
display: none;
```

```text
Element removed from layout
```

Whereas:

```css
visibility: hidden;
```

```text
Element invisible
BUT
space remains
```

Diagram:

```text
display:none

[A] [B] [C]
    ↓
[A] [C]


visibility:hidden

[A] [B] [C]
    ↓
[A] [ ] [C]
```

---

# 14. Positioning ⭐⭐⭐⭐⭐

CSS provides:

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

---

## Static

Default.

```css
position: static;
```

`top`, `left`, `right`, `bottom` don't apply in the usual positioning sense.

---

## Relative

```css
position: relative;
top: 20px;
left: 10px;
```

The element moves relative to its normal position.

```text
Normal position
      │
      ▼
   [Element]
      │
      │ top:20px
      ▼
   [Element]
```

Its original layout space remains reserved.

---

## Absolute ⭐⭐⭐⭐⭐

```css
position: absolute;
```

The element is removed from normal document flow and positioned relative to its containing block.

Common pattern:

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    right: 0;
}
```

```text
Parent
┌─────────────────────────┐
│                     [X] │ ← absolute child
│                         │
│                         │
└─────────────────────────┘
```

---

## Fixed

```css
position: fixed;
```

Positioned relative to the viewport and remains fixed during scrolling.

Common use:

* Floating buttons
* Fixed navbar
* Chat button

---

## Sticky ⭐⭐⭐⭐

```css
position: sticky;
top: 0;
```

Acts like relative positioning until a scroll threshold is reached, then behaves like a fixed element within its containing context.

Common use:

```text
Page
│
├── Header
├── Content
│
└── Sticky navbar
        ↓
      stays
      at top
      while scrolling
```

---

# 15. Flexbox ⭐⭐⭐⭐⭐

One of the **highest-priority CSS interview topics**.

Flexbox is mainly used for **one-dimensional layouts**.

```text
Flexbox
   │
   ├── Row
   │
   └── Column
```

Enable it:

```css
.container {
    display: flex;
}
```

---

# 16. Main Axis vs Cross Axis

If:

```css
flex-direction: row;
```

then:

```text
Main Axis
──────────────────────────────→

Cross Axis
│
│
↓
```

If:

```css
flex-direction: column;
```

then:

```text
Cross Axis ─────────────→

Main Axis
│
│
│
↓
```

This is essential for understanding `justify-content` and `align-items`.

---

# 17. Important Flexbox Properties ⭐⭐⭐⭐⭐

### `flex-direction`

```css
flex-direction: row;
flex-direction: column;
```

---

### `justify-content`

Controls alignment along the **main axis**.

Common values:

```css
justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

---

### `align-items`

Controls alignment along the **cross axis**.

```css
align-items: center;
```

---

### `flex-wrap`

```css
flex-wrap: wrap;
```

Allows items to move to another line.

---

### `gap`

```css
gap: 20px;
```

Adds spacing between flex/grid items.

---

# 18. Centering an Element ⭐⭐⭐⭐⭐

Very common interview/coding question.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

For a container with known height:

```css
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Remember:

```text
justify-content → main axis
align-items     → cross axis
```

---

# 19. `align-items` vs `align-content`

Frequently confused.

### `align-items`

Aligns items within a flex line.

```css
align-items: center;
```

### `align-content`

Controls spacing/alignment between **multiple flex lines** when wrapping occurs.

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
```

Interview tip:

> `align-content` becomes relevant when there are multiple flex lines.

---

# 20. `flex` Property

You may see:

```css
flex: 1;
```

It is shorthand involving:

```text
flex-grow
flex-shrink
flex-basis
```

Example:

```css
.item {
    flex: 1;
}
```

Common interpretation:

```text
grow = 1
shrink = 1
basis = 0%
```

---

# 21. CSS Grid ⭐⭐⭐⭐⭐

Grid is mainly used for **two-dimensional layouts**.

```text
Flexbox
→ 1 dimension

Grid
→ 2 dimensions
```

Enable:

```css
.container {
    display: grid;
}
```

Example:

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
```

Diagram:

```text
┌───────┬───────┬───────┐
│       │       │       │
│   1   │   2   │   3   │
│       │       │       │
├───────┼───────┼───────┤
│       │       │       │
│   4   │   5   │   6   │
│       │       │       │
└───────┴───────┴───────┘
```

---

# 22. Flexbox vs Grid ⭐⭐⭐⭐⭐

| Flexbox                 | Grid                     |
| ----------------------- | ------------------------ |
| One-dimensional         | Two-dimensional          |
| Row OR column           | Rows AND columns         |
| Component-level layouts | Page-level layouts       |
| Content-driven layouts  | Structure-driven layouts |

Simple rule:

```text
Need row/column alignment?
        ↓
      Flexbox

Need rows + columns?
        ↓
       Grid
```

---

# 23. CSS Units ⭐⭐⭐⭐

Important units:

### Absolute

```text
px
```

### Relative

```text
%
em
rem
vw
vh
```

---

## `%`

Relative to the relevant containing dimension/property.

```css
width: 50%;
```

---

## `em`

Relative to the font size of the relevant element/parent context.

---

## `rem`

Relative to the root (`html`) font size.

```css
font-size: 2rem;
```

If root font size is:

```text
16px
```

Then:

```text
2rem = 32px
```

---

## `vh`

Viewport height.

```css
height: 100vh;
```

---

## `vw`

Viewport width.

```css
width: 100vw;
```

---

# 24. `em` vs `rem` ⭐⭐⭐⭐

```text
em
 ↓
relative to local font-size context

rem
 ↓
relative to root html font-size
```

Interview answer:

> `rem` is generally more predictable for scalable typography because it is based on the root font size, while `em` can compound through nested elements.

---

# 25. Colors

Common formats:

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
```

Modern CSS also supports formats such as:

```css
hsl()
hsla()
```

---

# 26. Margin vs Padding ⭐⭐⭐⭐

### Margin

Space **outside** the border.

### Padding

Space **inside** the border.

```text
        Margin
   ┌───────────────┐
   │    Border     │
   │  ┌─────────┐  │
   │  │ Padding │  │
   │  │ Content │  │
   │  └─────────┘  │
   └───────────────┘
```

---

# 27. Margin Collapse ⭐⭐⭐

Vertical margins between normal block elements can collapse rather than add together.

Example:

```css
.box1 {
    margin-bottom: 30px;
}

.box2 {
    margin-top: 20px;
}
```

The resulting vertical separation can be:

```text
30px
```

rather than:

```text
50px
```

This is known as **margin collapsing**.

---

# 28. `overflow`

Controls content that exceeds an element's box.

```css
overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;
```

Example:

```css
.container {
    width: 200px;
    height: 100px;
    overflow: auto;
}
```

---

# 29. `z-index` ⭐⭐⭐⭐

Controls stacking order of positioned elements and certain other stacking-context participants.

```css
.modal {
    position: fixed;
    z-index: 1000;
}
```

Higher stacking order generally appears above lower ones **within the relevant stacking context**.

```text
z-index: 100
     ↑
     │
z-index: 10
     ↑
     │
z-index: 1
```

### Important interview point

`z-index` does **not** simply mean "higher number always wins" globally.

Stacking contexts matter.

---

# 30. Responsive Design ⭐⭐⭐⭐⭐

Responsive design means creating websites that work across different screen sizes.

```text
Desktop
   │
   ├── Laptop
   │
   ├── Tablet
   │
   └── Mobile
```

---

# 31. Media Queries ⭐⭐⭐⭐⭐

Example:

```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

Meaning:

```text
Screen width
     │
     ▼
≤ 768px ?
   /   \
 Yes    No
  │      │
  ▼      ▼
Column  Default
```

---

# 32. Mobile-First Design ⭐⭐⭐⭐

Instead of designing desktop first:

```text
Mobile
  ↓
Tablet
  ↓
Desktop
```

Base CSS is written for smaller screens, then enhanced using media queries.

Example:

```css
.container {
    display: block;
}

@media (min-width: 768px) {
    .container {
        display: flex;
    }
}
```

---

# 33. CSS Variables ⭐⭐⭐⭐

CSS variables allow reusable values.

```css
:root {
    --primary-color: #2563eb;
    --spacing: 20px;
}
```

Use:

```css
button {
    background-color: var(--primary-color);
    padding: var(--spacing);
}
```

Benefits:

* Reusability
* Maintainability
* Easy theme changes
* Dynamic updates

---

# 34. CSS Functions

Frequently encountered:

```css
calc()
min()
max()
clamp()
```

Example:

```css
width: calc(100% - 40px);
```

Responsive typography:

```css
font-size: clamp(1rem, 2vw, 2rem);
```

Meaning:

```text
minimum
   │
   ▼
  1rem
   │
   │ fluid
   ▼
  2vw
   │
   ▼
maximum
  2rem
```

---

# 35. Transitions ⭐⭐⭐

Used for smooth changes.

```css
button {
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: blue;
}
```

Without transition:

```text
Normal ──────────→ Hover
      instant
```

With transition:

```text
Normal → → → → → Hover
          smooth
```

---

# 36. Transform ⭐⭐⭐

Common transformations:

```css
transform: translateX(20px);
transform: translateY(20px);
transform: scale(1.2);
transform: rotate(45deg);
```

Example:

```css
button:hover {
    transform: scale(1.1);
}
```

---

# 37. Animations ⭐⭐⭐

CSS animations use:

```css
@keyframes
```

Example:

```css
@keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100px);
    }
}

.box {
    animation: slide 2s ease-in-out;
}
```

Flow:

```text
@keyframes
     │
     ▼
Start state
     │
     ▼
Intermediate states
     │
     ▼
End state
```

---

# 38. Transition vs Animation ⭐⭐⭐⭐

| Transition                          | Animation                  |
| ----------------------------------- | -------------------------- |
| Usually triggered by state change   | Can run automatically      |
| Uses `transition`                   | Uses `@keyframes`          |
| Good for hover effects              | Good for complex sequences |
| Generally from one state to another | Can have many stages       |

---

# 39. `opacity: 0` vs `visibility: hidden` vs `display: none` ⭐⭐⭐⭐

| Property             | Visible? | Space occupied? |
| -------------------- | -------- | --------------- |
| `opacity: 0`         | No       | Yes             |
| `visibility: hidden` | No       | Yes             |
| `display: none`      | No       | No              |

Important:

```css
opacity: 0;
```

doesn't automatically remove the element from interaction or accessibility behavior.

---

# 40. Inheritance ⭐⭐⭐⭐

Some CSS properties are inherited from parent to child.

Example:

```css
body {
    color: red;
}
```

Child text often inherits:

```text
body
 │
 ├── div
 │    └── p
 │
 └── span

color → inherited
```

Common inherited properties:

```text
color
font-family
font-size
line-height
```

Not all CSS properties inherit.

---

# 41. `inherit`, `initial`, `unset`, `revert`

### `inherit`

Explicitly inherit parent's value.

```css
color: inherit;
```

### `initial`

Sets the property's initial/default CSS value.

```css
color: initial;
```

### `unset`

Acts approximately as:

```text
inherit if property is inherited
otherwise initial
```

### `revert`

Rolls the property back toward the value from an earlier cascade origin, such as browser/user styles.

For most interviews, understand the first three thoroughly.

---

# 42. `overflow: hidden` and clearfix

Historically, developers sometimes used:

```css
overflow: hidden;
```

to contain floated children.

Modern layouts generally use:

```text
Flexbox
Grid
```

instead of relying on floats.

---

# 43. `float` ⭐⭐

Older CSS layout technique.

```css
img {
    float: left;
}
```

Originally used heavily for layouts and text wrapping.

Today:

```text
Modern layout
    ↓
Flexbox / Grid
```

is generally preferred.

Know `float` for interviews, but don't spend too much preparation time on it.

---

# 44. `position: absolute` vs `relative` ⭐⭐⭐⭐⭐

### Relative

```css
position: relative;
```

* Remains in normal flow
* Original space remains
* Can establish containing block for absolute descendants

### Absolute

```css
position: absolute;
```

* Removed from normal flow
* Positioned relative to its containing block

---

# 45. `fixed` vs `sticky` ⭐⭐⭐⭐

### Fixed

```css
position: fixed;
```

```text
Viewport
┌───────────────────────┐
│                 [X]   │ ← stays fixed
│                       │
│        Content        │
│                       │
└───────────────────────┘
```

### Sticky

```css
position: sticky;
top: 0;
```

Behaves normally until reaching its threshold, then sticks within its scrolling context.

---

# 46. `nth-child()` ⭐⭐⭐

Very common selector question.

```css
li:nth-child(2) {
    color: red;
}
```

Selects the second child matching the structural condition.

Useful patterns:

```css
:nth-child(odd)
:nth-child(even)
:nth-child(2)
:nth-child(3n)
```

Example:

```css
li:nth-child(even) {
    background: gray;
}
```

---

# 47. `nth-of-type()` vs `nth-child()`

Important interview distinction.

```css
p:nth-child(2)
```

checks whether the `<p>` is the second child.

Whereas:

```css
p:nth-of-type(2)
```

selects the second `<p>` among its sibling `<p>` elements.

---

# 48. `min-width`, `max-width`, `min-height`, `max-height`

Useful for responsive layouts.

```css
.container {
    width: 100%;
    max-width: 1200px;
}
```

This allows:

```text
Small screen
    ↓
100% width

Large screen
    ↓
maximum 1200px
```

Very common in real-world layouts.

---

# 49. `object-fit`

Important when working with images.

```css
img {
    width: 300px;
    height: 200px;
    object-fit: cover;
}
```

Common values:

```text
fill
contain
cover
none
scale-down
```

### `cover`

Image fills the box, potentially cropping.

### `contain`

Entire image fits inside the box, potentially leaving empty space.

---

# 50. CSS Architecture — Basic Interview Knowledge

You may hear:

* BEM
* Utility classes
* CSS Modules
* CSS-in-JS
* Tailwind CSS

### BEM

```text
Block
Element
Modifier
```

Example:

```html
<div class="card">
    <h2 class="card__title"></h2>
    <button class="card__button card__button--primary"></button>
</div>
```

Structure:

```text
card
 │
 ├── card__title
 │
 └── card__button
          │
          └── card__button--primary
```

You don't need deep BEM knowledge for most entry-level interviews.

---

# 51. CSS Performance — Basic Questions

Interviewers may ask how to improve CSS performance.

Good practices:

```text
Remove unused CSS
      ↓
Minify CSS
      ↓
Avoid unnecessarily complex selectors
      ↓
Reuse styles
      ↓
Load only required styles
      ↓
Use efficient responsive/layout techniques
```

Also avoid excessive:

```css
!important
```

and unnecessarily deep selectors.

---

# 52. CSS Interview Rapid Revision

Before an interview, make sure you can explain these **without looking at notes**:

### Must Know ⭐⭐⭐⭐⭐

```text
1. CSS Box Model
2. box-sizing
3. CSS Specificity
4. Cascade
5. Flexbox
6. Grid
7. Position
8. display
9. Responsive Design
10. Media Queries
11. Selectors
12. Pseudo-classes
13. Pseudo-elements
14. z-index / stacking basics
15. Margin vs Padding
16. em vs rem
```

### Should Know ⭐⭐⭐⭐

```text
17. CSS Variables
18. Inheritance
19. overflow
20. visibility vs display:none
21. opacity
22. transition
23. transform
24. animation
25. min/max width
26. object-fit
27. nth-child
28. nth-of-type
```

### Basic Awareness ⭐⭐⭐

```text
29. float
30. BEM
31. CSS architecture
32. CSS performance
33. calc()
34. clamp()
35. initial / inherit / unset / revert
```

---

# 53. Most Common CSS Interview Questions

Prepare these especially well:

```text
Q1. What is the CSS box model?

Q2. What is box-sizing?

Q3. Difference between content-box and border-box?

Q4. What is CSS specificity?

Q5. Which has higher specificity: ID or class?

Q6. What is the CSS cascade?

Q7. Difference between margin and padding?

Q8. Difference between display:none and visibility:hidden?

Q9. Difference between opacity:0 and display:none?

Q10. Difference between relative and absolute positioning?

Q11. Difference between fixed and sticky?

Q12. What is z-index?

Q13. What is Flexbox?

Q14. What are the main axis and cross axis?

Q15. Difference between justify-content and align-items?

Q16. Difference between align-items and align-content?

Q17. Flexbox vs Grid?

Q18. How do you center an element?

Q19. What are CSS media queries?

Q20. What is responsive design?

Q21. Difference between em and rem?

Q22. What are pseudo-classes?

Q23. What are pseudo-elements?

Q24. Difference between nth-child and nth-of-type?

Q25. What are CSS variables?

Q26. Difference between transition and animation?

Q27. What is inheritance?

Q28. What does !important do?

Q29. What is margin collapsing?

Q30. How does position:absolute determine its containing block?
```

---

# 54. CSS Interview Priority Map

```text
                    CSS
                     │
        ┌────────────┼────────────┐
        │            │            │
     Selectors     Layout       Cascade
        │            │            │
        │       ┌────┴────┐       │
        │       │         │       │
     Classes   Flexbox   Grid   Specificity
     IDs                    │       │
     Pseudo                  │    !important
     Attribute               │
                             │
                    ┌────────┴────────┐
                    │                 │
                Positioning       Box Model
                    │                 │
              relative              content
              absolute              padding
              fixed                 border
              sticky                margin
```

---

# 55. What NOT to Spend Too Much Time On

For a typical **fresher interview**, don't spend excessive time memorizing:

```text
❌ Every CSS property
❌ Rare CSS functions
❌ Obscure browser quirks
❌ Complex animation tricks
❌ Old layout techniques
❌ Every Grid property
❌ Every selector variation
```

Instead, become very strong at:

```text
HTML
  ↓
CSS Selectors
  ↓
Box Model
  ↓
Specificity
  ↓
Flexbox
  ↓
Grid
  ↓
Positioning
  ↓
Responsive Design
  ↓
Media Queries
```

These are the areas most likely to give you practical interview questions and coding/layout tasks.
