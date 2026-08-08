# Accessibility 

> **Goal:** Understand how to build HTML that can be used by people with different abilities, input methods, and assistive technologies.
>
> For interviews, focus on understanding **why accessibility matters**, not just memorizing ARIA attributes.

---

# 1. What Is Web Accessibility?

Web accessibility means designing websites and applications so that people with disabilities can perceive, understand, navigate, and interact with them.

Accessibility can involve users with:

- Visual disabilities
- Hearing disabilities
- Motor disabilities
- Cognitive disabilities
- Temporary impairments
- Situational limitations

Examples:

```text
Visual impairment
        ↓
Screen reader

Motor impairment
        ↓
Keyboard / alternative input

Hearing impairment
        ↓
Captions / transcripts

Cognitive difficulties
        ↓
Clear structure + predictable UI
````

---

# 2. Why Accessibility Matters

Accessibility is important because:

```text
Accessibility
      │
      ├── Inclusive user experience
      │
      ├── Better usability
      │
      ├── Legal/compliance considerations
      │
      ├── Better semantic structure
      │
      └── Supports assistive technologies
```

Accessibility is not only about disabled users.

For example:

```text
Dark/noisy environment
        ↓
Captions help

Broken mouse
        ↓
Keyboard navigation helps

Poor network
        ↓
Good semantic HTML can still provide useful structure
```

---

# 3. The Core Accessibility Principle

A useful mental model:

```text
Can the user...

1. Perceive it?
2. Understand it?
3. Navigate it?
4. Operate it?
```

You should therefore think about:

```text
Content
  ↓
Can it be perceived?

Controls
  ↓
Can they be operated?

Navigation
  ↓
Can users move through the page?

Meaning
  ↓
Can users understand what things do?
```

---

# 4. Semantic HTML Is the First Accessibility Tool ⭐⭐⭐

Before using ARIA, use proper HTML.

Example:

```html
<button>
    Delete
</button>
```

is better than:

```html
<div role="button">
    Delete
</div>
```

Why?

A native button already has browser-provided semantics and expected interaction behavior.

Mental model:

```text
Native HTML
    ↓
Built-in semantics
    ↓
Built-in browser behavior
    ↓
Accessibility support
```

---

# 5. Semantic HTML Examples

Use:

```html
<nav>
```

for navigation.

Use:

```html
<button>
```

for actions.

Use:

```html
<a href="/about">
```

for navigation to another resource/page.

Use:

```html
<form>
```

for forms.

Use:

```html
<main>
```

for main content.

Use:

```html
<header>
<footer>
<article>
<section>
```

when their semantics match the content.

---

# 6. Accessibility Tree

Browsers create an accessibility representation of the webpage.

Conceptually:

```text
HTML DOM
   │
   ▼
Browser
   │
   ▼
Accessibility Tree
   │
   ├── Role
   ├── Name
   ├── State
   └── Properties
   │
   ▼
Screen Reader / Assistive Technology
   │
   ▼
User
```

This is different from simply looking at the visual webpage.

---

# 7. DOM vs Accessibility Tree

The DOM represents the document structure.

The accessibility tree exposes information relevant to assistive technologies.

Example:

```html
<button>
    Save
</button>
```

A screen reader can understand something conceptually like:

```text
Role: button
Name: Save
```

This is much more useful than treating the element as an arbitrary visual box.

---

# 8. Accessible Name ⭐⭐⭐

An accessible name is the name used by assistive technology to identify a control.

For example:

```html
<button>
    Save
</button>
```

The accessible name is approximately:

```text
Save
```

For an input:

```html
<label for="email">
    Email
</label>

<input
    id="email"
    type="email"
>
```

The label helps provide the accessible name.

Mental model:

```text
Control
   │
   ├── Role
   ├── Name
   ├── State
   └── Properties
```

---

# 9. Labels Are Extremely Important ⭐⭐⭐

Bad:

```html
<input
    type="email"
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
    type="email"
    name="email"
>
```

Why?

The label:

* Identifies the field
* Helps screen readers
* Improves usability
* Provides a larger clickable area
* Clearly communicates what the field expects

---

# 10. Label Association

Explicit association:

```html
<label for="username">
    Username
</label>

<input
    id="username"
    type="text"
>
```

Relationship:

```text
<label for="username">
           │
           │ matches
           ▼
<input id="username">
```

---

# 11. Implicit Label Association

You can also nest the input:

```html
<label>
    Username

    <input
        type="text"
        name="username"
    >
</label>
```

Both patterns can associate the label with the control.

---

# 12. Placeholder Is Not a Label ⭐⭐⭐

This is a common interview question.

Don't do:

```html
<input
    placeholder="Enter your email"
>
```

as the only identification.

Instead:

```html
<label for="email">
    Email
</label>

<input
    id="email"
    placeholder="you@example.com"
>
```

Think:

```text
Label
 ↓
What is this field?

Placeholder
 ↓
What kind of value/example should I enter?
```

---

# 13. Images and `alt`

Images should generally have appropriate alternative text.

Example:

```html
<img
    src="profile.jpg"
    alt="Aadi smiling"
>
```

The `alt` text communicates the image's meaningful content when the image cannot be perceived.

---

# 14. Why `alt` Matters

Without appropriate alternative text:

```text
Image
  ↓
Screen reader
  ↓
May not communicate useful information
```

With useful `alt`:

```text
Image
  ↓
alt="System architecture diagram"
  ↓
Screen reader can communicate the alternative description
```

---

# 15. Decorative Images

If an image is purely decorative and provides no meaningful information:

```html
<img
    src="decorative-line.png"
    alt=""
>
```

An empty `alt` can indicate that the image is decorative.

Important:

```text
Meaningful image
      ↓
Meaningful alt

Decorative image
      ↓
alt=""
```

---

# 16. Don't Write "Image of..." Unnecessarily

Suppose:

```html
<img
    src="dog.jpg"
    alt="Golden retriever sitting in a park"
>
```

Usually you don't need:

```text
alt="Image of a golden retriever..."
```

The screen reader already knows it is an image in many contexts.

Focus the alt text on the useful meaning.

---

# 17. Bad Alt Text

Bad:

```html
alt="image"
```

Bad:

```html
alt="photo"
```

Usually not useful:

```html
alt="picture of something"
```

Better:

```html
alt="Golden retriever sitting beside a tree"
```

The correct description depends on why the image exists.

---

# 18. Links vs Buttons ⭐⭐⭐

This is an extremely common frontend interview question.

Use an `<a>` when the user is **going somewhere**.

```html
<a href="/profile">
    View Profile
</a>
```

Use a `<button>` when the user is **performing an action**.

```html
<button>
    Delete Account
</button>
```

Mental model:

```text
Navigation
   ↓
<a>

Action
   ↓
<button>
```

---

# 19. Why Not Use `<div>` for Everything?

Bad:

```html
<div onclick="deleteUser()">
    Delete
</div>
```

Better:

```html
<button onclick="deleteUser()">
    Delete
</button>
```

The button already communicates:

```text
Role
Keyboard behavior
Focus behavior
Interaction semantics
```

---

# 20. Keyboard Accessibility ⭐⭐⭐

A website should not require a mouse for essential interaction.

Users may navigate using:

```text
Tab
Shift + Tab
Enter
Space
Arrow keys
Escape
```

depending on the component.

Basic flow:

```text
Keyboard
   │
   ▼
Tab
   │
   ▼
Focus moves
   │
   ▼
Enter / Space
   │
   ▼
Interaction
```

---

# 21. Keyboard Focus

When an element receives keyboard focus, the user should be able to tell which element is currently active.

Example:

```text
Home
About
Projects
Contact
```

When pressing:

```text
Tab
```

focus should move through interactive controls in a logical order.

---

# 22. Focus Indicator

Avoid removing focus outlines without providing an accessible replacement.

Bad:

```css
button {
    outline: none;
}
```

If you remove the browser's focus indicator, provide a clearly visible alternative.

Example:

```css
button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}
```

The exact styling can vary.

The important principle:

```text
Keyboard focus
      ↓
Must be visually identifiable
```

---

# 23. `:focus` vs `:focus-visible`

CSS can style focus.

```css
button:focus {
    outline: 2px solid black;
}
```

`:focus-visible` is useful when you want focus styling to be emphasized when the browser determines that it is appropriate, commonly for keyboard interaction.

Example:

```css
button:focus-visible {
    outline: 2px solid black;
}
```

---

# 24. Logical Tab Order

Keyboard focus should normally follow a logical order.

Bad UI:

```text
Visual order:
Name
Email
Password
Submit

Keyboard order:
Submit
Name
Password
Email
```

This creates confusion.

Good:

```text
Visual order
     ↓
Logical DOM order
     ↓
Logical keyboard order
```

---

# 25. `tabindex`

`tabindex` controls keyboard focus behavior.

Examples:

```html
<button tabindex="0">
    Save
</button>
```

and:

```html
<div tabindex="0">
    Focusable content
</div>
```

---

# 26. `tabindex="0"`

Makes an element participate in the normal sequential keyboard focus order.

Example:

```html
<div tabindex="0">
    Focusable content
</div>
```

However, don't use this unnecessarily.

If you need a button:

```html
<button>
```

is preferable to:

```html
<div tabindex="0" role="button">
```

---

# 27. `tabindex="-1"`

Allows an element to receive programmatic focus but removes it from the normal sequential Tab order.

Example:

```html
<div id="error" tabindex="-1">
    Something went wrong.
</div>
```

JavaScript could focus it:

```javascript
document
    .getElementById("error")
    .focus();
```

This can be useful for:

* Modal focus management
* Error messages
* Dynamic content
* Skip-to-content targets

---

# 28. Avoid Positive `tabindex`

Avoid:

```html
<button tabindex="5">
```

or:

```html
<button tabindex="1">
```

Positive tabindex values can create confusing custom focus orders.

Prefer:

```text
Natural DOM order
       +
tabindex="0" when truly necessary
       +
tabindex="-1" for programmatic focus
```

---

# 29. Skip Links ⭐⭐⭐

A skip link allows keyboard users to bypass repetitive navigation.

Example:

```html
<a href="#main-content">
    Skip to main content
</a>

<header>
    ...
</header>

<nav>
    ...
</nav>

<main id="main-content">
    ...
</main>
```

Flow:

```text
Keyboard user
      │
      ▼
Skip link
      │
      ▼
Main content
```

This is especially useful on websites with large navigation areas.

---

# 30. Heading Structure ⭐⭐⭐

Headings provide document hierarchy.

Example:

```html
<h1>
    HTML Interview Preparation
</h1>

<h2>
    Forms
</h2>

<h3>
    Validation
</h3>

<h3>
    Input Types
</h3>

<h2>
    Accessibility
</h2>
```

Conceptually:

```text
h1
│
├── h2
│   ├── h3
│   └── h3
│
└── h2
```

---

# 31. Don't Choose Headings for Font Size

Bad reasoning:

> I want small text, so I'll use `<h4>`.

Heading elements represent hierarchy, not font size.

Use CSS for appearance:

```css
h2 {
    font-size: 20px;
}
```

HTML:

```html
<h2>
    Skills
</h2>
```

---

# 32. One `<h1>`?

You may hear:

> A page must have exactly one `<h1>`.

This is an oversimplification.

A document generally has a primary page heading, but modern HTML does not simply impose the old simplistic "exactly one h1" rule in every situation.

For interviews, a safe approach is:

```text
Use a clear primary <h1>
        ↓
Use logical <h2>, <h3>, ...
        ↓
Don't choose headings based on visual size
```

---

# 33. Forms and Accessibility

Accessible forms should have:

```text
Label
  ↓
Input
  ↓
Instructions
  ↓
Validation feedback
```

Example:

```html
<label for="password">
    Password
</label>

<input
    id="password"
    name="password"
    type="password"
    aria-describedby="password-help"
>

<p id="password-help">
    Password must contain at least 8 characters.
</p>
```

---

# 34. Grouping Related Form Controls

Use:

```html
<fieldset>
```

with:

```html
<legend>
```

Example:

```html
<fieldset>

    <legend>
        Preferred Contact Method
    </legend>

    <label>
        <input
            type="radio"
            name="contact"
            value="email"
        >
        Email
    </label>

    <label>
        <input
            type="radio"
            name="contact"
            value="phone"
        >
        Phone
    </label>

</fieldset>
```

This communicates the relationship between the controls.

---

# 35. Error Messages

Bad:

```text
Invalid!
```

Better:

```html
<label for="email">
    Email
</label>

<input
    id="email"
    type="email"
    aria-describedby="email-error"
    aria-invalid="true"
>

<p id="email-error">
    Enter a valid email address.
</p>
```

Important concepts:

```text
aria-invalid
      ↓
Field has invalid value

aria-describedby
      ↓
Connect field to additional explanation/error
```

---

# 36. What Is ARIA? ⭐⭐⭐

ARIA stands for:

> Accessible Rich Internet Applications

ARIA provides attributes that communicate accessibility semantics to assistive technologies.

Examples:

```text
role
aria-label
aria-labelledby
aria-describedby
aria-hidden
aria-expanded
aria-controls
aria-live
aria-current
aria-invalid
aria-checked
aria-selected
```

---

# 37. The First Rule of ARIA ⭐⭐⭐

A famous practical principle:

> Don't use ARIA when native HTML already provides the required semantics.

Example:

Prefer:

```html
<button>
    Save
</button>
```

over:

```html
<div
    role="button"
    tabindex="0"
>
    Save
</div>
```

The native button already provides the appropriate semantics and behavior.

---

# 38. `role`

Defines or communicates an element's semantic role.

Example:

```html
<div role="alert">
    Payment failed.
</div>
```

or:

```html
<div role="dialog">
    ...
</div>
```

However, don't add roles unnecessarily.

---

# 39. `aria-label`

Provides an accessible name.

Example:

```html
<button aria-label="Close">
    X
</button>
```

The visual text is:

```text
X
```

But the accessible name can be:

```text
Close
```

This is useful when the visible content is not sufficiently descriptive.

---

# 40. `aria-labelledby`

References another element that provides the accessible name.

Example:

```html
<h2 id="dialog-title">
    Delete Account
</h2>

<div
    role="dialog"
    aria-labelledby="dialog-title"
>
    ...
</div>
```

Relationship:

```text
dialog
  │
  │ aria-labelledby
  ▼
dialog-title
  │
  ▼
"Delete Account"
```

---

# 41. `aria-describedby`

Connects an element to additional descriptive text.

Example:

```html
<label for="password">
    Password
</label>

<input
    id="password"
    aria-describedby="password-help"
>

<p id="password-help">
    Minimum 8 characters.
</p>
```

Mental model:

```text
aria-labelledby
        ↓
"What is this?"

aria-describedby
        ↓
"Tell me more about it."
```

---

# 42. `aria-hidden`

Can hide an element from the accessibility tree.

Example:

```html
<span aria-hidden="true">
    ★
</span>
```

This can be useful for purely decorative content.

### Important

`aria-hidden="true"` does not necessarily make the element visually disappear.

It primarily affects accessibility exposure.

---

# 43. `aria-expanded`

Communicates whether a collapsible control is expanded.

Example:

```html
<button
    aria-expanded="false"
>
    Menu
</button>
```

When opened:

```html
<button
    aria-expanded="true"
>
    Menu
</button>
```

Typical use cases:

* Dropdown
* Accordion
* Menu
* Disclosure component

---

# 44. `aria-controls`

Indicates which element a control affects.

Example:

```html
<button
    aria-expanded="false"
    aria-controls="menu"
>
    Menu
</button>

<div id="menu">
    ...
</div>
```

Conceptually:

```text
Button
  │
  │ controls
  ▼
Menu
```

---

# 45. `aria-current`

Indicates the current item in a set.

Example:

```html
<nav>

    <a
        href="/"
        aria-current="page"
    >
        Home
    </a>

    <a href="/projects">
        Projects
    </a>

</nav>
```

Useful for:

* Current page
* Current step
* Current location
* Current item

---

# 46. `aria-invalid`

Indicates that a form field's current value is invalid.

Example:

```html
<input
    type="email"
    aria-invalid="true"
>
```

Usually combine this with useful error messaging.

---

# 47. `aria-live`

Used to communicate dynamic updates to assistive technologies.

Example:

```html
<div aria-live="polite">
    Your changes have been saved.
</div>
```

When content changes dynamically, assistive technology may announce the update.

Common use cases:

* Success messages
* Status updates
* Notifications
* Search results
* Validation feedback

---

# 48. `aria-live="polite"` vs `assertive`

Conceptually:

```text
polite
  ↓
Announce when appropriate

assertive
  ↓
Announce with higher urgency
```

Use assertive carefully.

Not every notification should interrupt the user's current activity.

---

# 49. Accessible Buttons

Good:

```html
<button type="button">
    Save
</button>
```

Icon button:

```html
<button
    type="button"
    aria-label="Close"
>
    ×
</button>
```

Avoid:

```html
<div onclick="save()">
    Save
</div>
```

---

# 50. Accessible Links

Good:

```html
<a href="/profile">
    View Profile
</a>
```

Bad:

```html
<a href="#">
    Click here
</a>
```

Better link text communicates the destination.

For example:

```text
Read the accessibility guide
```

is more informative than:

```text
Click here
```

---

# 51. Link vs Button — Interview Answer

Question:

> When should you use a link versus a button?

Strong answer:

> A link is used for navigation to another URL or resource, while a button is used to perform an action such as submitting a form, opening a dialog, deleting something, or toggling UI state.

---

# 52. Color and Accessibility

Do not communicate information using color alone.

Bad:

```text
Red = Error
Green = Success
```

without any additional indicator.

Better:

```text
❌ Error: Invalid email

✓ Success: Account created
```

The exact symbols are not mandatory, but the meaning should not depend only on color.

---

# 53. Color Contrast

Text should have sufficient contrast against its background.

Bad:

```text
Light gray text
+
White background
```

Good accessibility considers:

```text
Text
 +
Background
      ↓
Sufficient contrast
```

For exact contrast requirements, follow applicable accessibility standards rather than guessing.

---

# 54. Don't Disable Zoom

Avoid unnecessarily preventing users from zooming the webpage.

Bad:

```html
<meta
    name="viewport"
    content="width=device-width,
             initial-scale=1.0,
             maximum-scale=1.0,
             user-scalable=no"
>
```

Users may need zoom for readability.

Typical responsive setup:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

---

# 55. Responsive Accessibility

Accessibility also means supporting different screen sizes.

Think:

```text
Desktop
Tablet
Mobile
Zoomed interface
Large text
```

Your interface should remain usable.

This connects accessibility with:

* Responsive CSS
* Flexible layouts
* Touch targets
* Text resizing
* Overflow handling

---

# 56. Accessible Tables

Use table semantics when presenting tabular data.

Example:

```html
<table>

    <caption>
        Student Marks
    </caption>

    <thead>

        <tr>
            <th scope="col">
                Name
            </th>

            <th scope="col">
                Marks
            </th>
        </tr>

    </thead>

    <tbody>

        <tr>

            <td>
                Aadi
            </td>

            <td>
                90
            </td>

        </tr>

    </tbody>

</table>
```

Important elements:

```text
<table>
<caption>
<thead>
<tbody>
<tr>
<th>
<td>
```

---

# 57. `scope`

For simple tables, `scope` helps communicate whether a header applies to a row or column.

Example:

```html
<th scope="col">
    Name
</th>
```

and:

```html
<th scope="row">
    Aadi
</th>
```

Think:

```text
scope="col"
      ↓
column header

scope="row"
      ↓
row header
```

---

# 58. Accessible Modals

Modals require careful accessibility handling.

A good modal generally needs:

```text
Dialog semantics
      +
Accessible name
      +
Focus management
      +
Keyboard support
      +
Escape behavior
      +
Appropriate focus return
```

Conceptual flow:

```text
Open modal
    ↓
Move focus into modal
    ↓
User interacts
    ↓
Close modal
    ↓
Return focus to triggering control
```

This is more advanced than simply writing:

```html
<div class="modal">
```

---

# 59. Common Accessibility Mistakes

Avoid:

```text
❌ No labels on form inputs
❌ Placeholder used instead of label
❌ Clickable divs
❌ Non-descriptive link text
❌ Images without meaningful alt handling
❌ Removing focus indicators
❌ Keyboard-inaccessible components
❌ Information conveyed only by color
❌ Poor heading hierarchy
❌ Unnecessary ARIA
❌ Positive tabindex values
❌ Overusing divs
❌ Automatically disabling zoom
```

---

# 60. Accessibility Testing

You should know the basic testing approaches.

## Keyboard Testing

Try using the site without a mouse.

Test:

```text
Tab
Shift + Tab
Enter
Space
Escape
Arrow keys
```

Ask:

```text
Can I reach everything?

Can I understand where focus is?

Can I operate everything?

Can I escape dialogs/menus?
```

---

# 61. Screen Reader Testing

A screen reader can help test how the page is interpreted.

Examples of screen readers include:

```text
NVDA
JAWS
VoiceOver
TalkBack
```

You don't need to memorize every screen reader for a fresher interview.

Understand the principle:

```text
Visual UI
   ≠
Accessibility experience
```

---

# 62. Automated Accessibility Testing

Tools can detect many common issues.

Examples:

```text
Lighthouse
axe
WAVE
```

But automated tools cannot detect every accessibility problem.

Think:

```text
Automated testing
      +
Manual keyboard testing
      +
Screen reader testing
      ↓
Better accessibility evaluation
```

---

# 63. Accessibility Testing Checklist

```text
□ Can I navigate using keyboard only?
□ Is focus visible?
□ Can I reach every interactive control?
□ Are headings logically structured?
□ Do inputs have labels?
□ Do meaningful images have useful alt text?
□ Are decorative images handled appropriately?
□ Are links descriptive?
□ Are buttons actually buttons?
□ Is information conveyed without relying only on color?
□ Are error messages understandable?
□ Are dynamic updates announced where necessary?
□ Can users zoom?
□ Do modals manage focus correctly?
```

---

# 64. Important ARIA Cheat Sheet

| Attribute          | Purpose                        |
| ------------------ | ------------------------------ |
| `role`             | Communicates semantic role     |
| `aria-label`       | Provides accessible name       |
| `aria-labelledby`  | Gets name from another element |
| `aria-describedby` | Associates descriptive text    |
| `aria-hidden`      | Hides from accessibility tree  |
| `aria-expanded`    | Expanded/collapsed state       |
| `aria-controls`    | Indicates controlled element   |
| `aria-current`     | Indicates current item         |
| `aria-invalid`     | Indicates invalid form value   |
| `aria-live`        | Announces dynamic updates      |
| `aria-checked`     | Communicates checked state     |
| `aria-selected`    | Communicates selected state    |

---

# 65. Important HTML Accessibility Cheat Sheet

| Requirement           | Prefer                    |
| --------------------- | ------------------------- |
| Navigation            | `<a href>`                |
| Action                | `<button>`                |
| Main content          | `<main>`                  |
| Navigation region     | `<nav>`                   |
| Form field label      | `<label>`                 |
| Related form controls | `<fieldset>` + `<legend>` |
| Main heading          | `<h1>`                    |
| Section heading       | `<h2>`, `<h3>`, etc.      |
| Meaningful image      | `<img alt="...">`         |
| Decorative image      | `<img alt="">`            |
| Table data            | `<table>`                 |
| Table heading         | `<th>`                    |
| Code                  | `<code>`                  |
| Keyboard input        | `<kbd>`                   |

---

# 66. Most Important Interview Questions

## Fundamentals

1. What is web accessibility?
2. Why is accessibility important?
3. What is the accessibility tree?
4. How does semantic HTML help accessibility?
5. What is an accessible name?

## HTML

6. Why should we use `<button>` instead of a clickable `<div>`?
7. Why are labels important?
8. Why isn't placeholder a replacement for a label?
9. How should images be made accessible?
10. What is the purpose of `alt`?
11. What is the difference between decorative and meaningful images?
12. Why is heading hierarchy important?

## Keyboard

13. What is keyboard accessibility?
14. What is `tabindex`?
15. Difference between `tabindex="0"` and `tabindex="-1"`?
16. Why should positive tabindex generally be avoided?
17. What is a skip link?
18. Why is visible focus important?

## ARIA

19. What is ARIA?
20. What is the first rule of ARIA?
21. What is `role`?
22. What is `aria-label`?
23. `aria-label` vs `aria-labelledby`?
24. `aria-labelledby` vs `aria-describedby`?
25. What is `aria-expanded`?
26. What is `aria-controls`?
27. What is `aria-live`?
28. What is `aria-hidden`?
29. What is `aria-invalid`?

## Practical

30. How would you make a modal accessible?
31. How would you make a form accessible?
32. How would you test keyboard accessibility?
33. How would you test accessibility?
34. What are common accessibility mistakes?

---

# 67. Strong Interview Answers

## Q: Why is semantic HTML important?

> Semantic HTML gives content meaningful structure. This helps browsers, assistive technologies, and developers understand the role of different parts of a page. It improves accessibility, maintainability, and can also provide useful information to search engines.

---

## Q: Why use `<button>` instead of `<div onclick>`?

> A native button already provides appropriate semantics, keyboard interaction, focus behavior, and browser accessibility support. A clickable div requires manually recreating much of that behavior and is therefore usually inferior.

---

## Q: Why isn't placeholder a replacement for a label?

> A placeholder is intended as a hint or example and can disappear when the user enters a value. A label permanently identifies the purpose of the field and provides important accessibility information.

---

## Q: What is ARIA?

> ARIA, or Accessible Rich Internet Applications, provides attributes that communicate roles, states, properties, and relationships to assistive technologies, especially for dynamic interfaces. Native HTML should be preferred when it already provides the required semantics.

---

## Q: What is keyboard accessibility?

> Keyboard accessibility means users should be able to navigate and operate essential functionality without relying on a mouse. This includes logical focus order, visible focus indicators, keyboard-operable controls, and appropriate keyboard behavior for interactive components.

---

# 68. Accessibility Mental Model

Remember:

```text
                 ACCESSIBILITY
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
     Structure       Input          Content
        │              │              │
        ▼              ▼              ▼
 Semantic HTML     Keyboard        Alt text
 Headings          Focus           Labels
 Landmarks         Tab order       Captions
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                Assistive Tech
                       │
                       ▼
                     User
```

---

# 69. Golden Rules

Memorize these:

```text
1. Use semantic HTML first.

2. Use <button> for actions.

3. Use <a> for navigation.

4. Give form controls proper labels.

5. Don't use placeholder as a label.

6. Give meaningful images useful alt text.

7. Give decorative images empty alt.

8. Make important interactions keyboard accessible.

9. Keep focus visible.

10. Don't create unnecessary custom widgets.

11. Don't use ARIA when native HTML already works.

12. Don't rely only on color.

13. Maintain logical heading hierarchy.

14. Avoid positive tabindex.

15. Test with keyboard and assistive technologies.
```

---

# 70. Final Revision Diagram

```text
                    ACCESSIBLE WEB PAGE
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
          Semantic       Keyboard       Content
            HTML         Access         Access
             │              │              │
             │              │              │
        ┌────┼────┐     ┌───┼────┐     ┌───┼────┐
        ▼    ▼    ▼     ▼   ▼    ▼     ▼   ▼    ▼
      main  nav  form  Tab Focus Enter alt labels text
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                       Accessibility
                            │
                            ▼
                     Assistive Technology
                            │
                            ▼
                           User
```