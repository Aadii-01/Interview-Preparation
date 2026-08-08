# HTML Forms

> **Goal:** Understand HTML forms deeply enough to answer interview questions and build forms that connect correctly to JavaScript and backend APIs.
>
> **Core flow:**
>
> ```text
> User
>   ↓
> HTML Form
>   ↓
> Browser validation
>   ↓
> Submit
>   ↓
> HTTP Request
>   ↓
> Backend
> ```
>
> We will later connect this to JavaScript, HTTP, APIs, authentication, and backend development.

---

# 1. What is an HTML Form?

An HTML form collects user input and provides a mechanism to submit that data.

Example:

```html
<form>
    <label for="name">Name</label>
    <input type="text" id="name">

    <button type="submit">Submit</button>
</form>
```

Typical form flow:

```text
┌─────────────┐
│     User    │
└──────┬──────┘
       │ enters data
       ▼
┌─────────────┐
│ HTML Form   │
└──────┬──────┘
       │ submit
       ▼
┌─────────────┐
│ Validation  │
└──────┬──────┘
       │ valid
       ▼
┌─────────────┐
│ HTTP Request│
└──────┬──────┘
       ▼
┌─────────────┐
│   Server    │
└─────────────┘
```

---

# 2. The `<form>` Element

Basic syntax:

```html
<form>
    ...
</form>
```

The form element groups controls that can participate in form submission.

Two extremely important attributes are:

```text
action
method
```

Example:

```html
<form action="/login" method="POST">
    ...
</form>
```

---

# 3. `action`

`action` specifies the URL where the form submission is sent.

```html
<form action="/login">
```

Conceptually:

```text
Form
 │
 │ submit
 ▼
action="/login"
 │
 ▼
/login endpoint
```

If JavaScript intercepts the submission, the request may instead be handled manually using APIs such as `fetch()`.

---

# 4. `method`

Specifies the HTTP method used for form submission.

Common methods:

```text
GET
POST
```

Example:

```html
<form action="/search" method="GET">
```

or:

```html
<form action="/login" method="POST">
```

---

# 5. GET vs POST in Forms ⭐⭐⭐

This is a very common interview question.

## GET

```html
<form action="/search" method="GET">
```

Form data is generally encoded into the URL query string.

Example:

```text
/search?q=javascript
```

Useful for:

- searches
- filters
- retrieving information

GET requests should generally be safe/idempotent in normal HTTP semantics.

---

## POST

```html
<form action="/login" method="POST">
```

Form data is sent in the request body.

Conceptually:

```text
POST /login

username=aadi
password=...
```

Useful for operations such as:

- creating resources
- submitting data
- login requests
- actions that shouldn't put the input into the URL

### Important

POST does **not** automatically mean "secure".

Security depends on the entire system, especially HTTPS and server-side handling.

---

# 6. GET vs POST Comparison

| Feature | GET | POST |
|---|---|---|
| Common purpose | Retrieve/search | Submit/create/process |
| Data location | URL/query string | Request body |
| Bookmarkable | Yes, often | Usually not |
| Sensitive data in URL | Bad idea | Better than putting it in URL, but HTTPS is still required |
| Typical form use | Search/filter | Login/create/submit |
| Cache behavior | Commonly cacheable | Generally not cached in the same way |

### Interview Answer

> GET form submissions encode data into the URL query string, while POST submissions send data in the request body. GET is commonly used for retrieval/search, while POST is commonly used for submitting or creating data.

---

# 7. `<input>`

`<input>` is one of the most important form controls.

Basic:

```html
<input type="text">
```

The `type` attribute determines the kind of input.

---

# 8. Text Input

```html
<input type="text">
```

Used for ordinary single-line text.

Example:

```html
<label for="username">Username</label>
<input
    type="text"
    id="username"
    name="username"
>
```

---

# 9. `name` Attribute ⭐⭐⭐

This is extremely important.

Consider:

```html
<input
    type="text"
    name="username"
>
```

The `name` identifies the field when the form data is submitted.

Example:

```html
<form action="/login" method="POST">

    <input
        type="text"
        name="username"
    >

    <button type="submit">
        Login
    </button>

</form>
```

Conceptually submitted data:

```text
username=aadi
```

### Interview Trap

An input having an `id` does **not** mean its value will automatically become a successful form field.

The `name` attribute is important for native form submission.

---

# 10. `id` vs `name`

Very common interview question.

### `id`

Primarily identifies an element within the document.

```html
<input id="email">
```

Useful for:

- `<label for="...">`
- CSS
- JavaScript
- DOM selection

### `name`

Identifies the form control's field name during form submission.

```html
<input name="email">
```

### Comparison

```text
id
│
├── document identity
├── label association
├── CSS
└── JavaScript

name
│
└── form submission field name
```

A field often has both:

```html
<input
    id="email"
    name="email"
>
```

---

# 11. `<label>` ⭐⭐⭐

A label identifies a form control.

Recommended pattern:

```html
<label for="email">
    Email
</label>

<input
    type="email"
    id="email"
    name="email"
>
```

The `for` value matches the input's `id`.

```text
<label for="email">
       │
       │ matches
       ▼
<input id="email">
```

### Why labels matter

They improve:

- accessibility
- usability
- clickable area
- screen-reader interpretation

Clicking the label can also focus/activate the associated control.

---

# 12. Implicit Label Association

You can also place the input inside the label:

```html
<label>
    Email
    <input
        type="email"
        name="email"
    >
</label>
```

This creates an implicit association.

Both explicit and implicit association are valid.

The explicit pattern is often easier to understand:

```html
<label for="email">Email</label>
<input id="email">
```

---

# 13. Password Input

```html
<input
    type="password"
    name="password"
>
```

The browser visually obscures the entered characters.

### Important

`type="password"` is **not encryption**.

It only controls how the browser displays the value.

Secure transmission requires HTTPS.

---

# 14. Email Input

```html
<input
    type="email"
    name="email"
>
```

Browsers can provide built-in validation for email-like input.

Example:

```html
<input
    type="email"
    required
>
```

If the value doesn't satisfy the browser's email constraints, native form validation can prevent submission.

### Interview Trap

Client-side validation is not enough.

The server must validate input too.

```text
Browser validation
       │
       ▼
Useful for UX
       │
       ▼
Server validation
       │
       ▼
Required for security/data integrity
```

---

# 15. Number Input

```html
<input
    type="number"
    name="age"
>
```

Useful when the input represents a number.

Common attributes:

```html
<input
    type="number"
    min="18"
    max="100"
    step="1"
>
```

### Important

`type="number"` does not guarantee that the server receives or safely processes a valid number.

Server-side validation is still required.

---

# 16. Date Input

```html
<input
    type="date"
    name="birthdate"
>
```

The browser may provide a date picker depending on the platform.

Other related types include:

```text
time
datetime-local
month
week
```

---

# 17. Checkbox

Used for independent yes/no or multiple selections.

```html
<label>
    <input
        type="checkbox"
        name="skills"
        value="python"
    >
    Python
</label>
```

Multiple checkboxes can be selected.

Example:

```html
<label>
    <input type="checkbox" name="skill" value="python">
    Python
</label>

<label>
    <input type="checkbox" name="skill" value="javascript">
    JavaScript
</label>
```

Conceptually:

```text
☑ Python
☑ JavaScript
☐ Go
```

---

# 18. Radio Buttons ⭐⭐⭐

Used when the user should select one option from a group.

```html
<label>
    <input
        type="radio"
        name="gender"
        value="male"
    >
    Male
</label>

<label>
    <input
        type="radio"
        name="gender"
        value="female"
    >
    Female
</label>
```

### Important Rule

Radio buttons belong to the same group when they share the same `name`.

```text
name="gender"
       │
       ├── radio 1
       ├── radio 2
       └── radio 3
```

Only one can normally be selected within that group.

---

# 19. Checkbox vs Radio

| Checkbox | Radio |
|---|---|
| Multiple choices possible | Usually one choice from a group |
| Independent options | Grouped by same `name` |
| Example: skills | Example: payment method |

Mental model:

```text
Checkbox:

☑ Python
☑ JavaScript
☐ Go


Radio:

◉ Male
○ Female
○ Other
```

---

# 20. File Input

```html
<input
    type="file"
    name="resume"
>
```

Used to select files.

You can restrict accepted types:

```html
<input
    type="file"
    accept=".pdf,.doc,.docx"
>
```

or:

```html
<input
    type="file"
    accept="image/*"
>
```

For multiple files:

```html
<input
    type="file"
    name="files"
    multiple
>
```

---

# 21. `multiple`

Allows multiple values/files where supported.

Example:

```html
<input
    type="file"
    multiple
>
```

For a `<select>`:

```html
<select multiple>
    ...
</select>
```

---

# 22. `<textarea>`

Used for multi-line text.

```html
<label for="message">
    Message
</label>

<textarea
    id="message"
    name="message"
    rows="5"
    cols="40"
></textarea>
```

Unlike `<input>`, the initial content of a textarea is placed between its tags:

```html
<textarea>
Initial text
</textarea>
```

Not:

```html
<textarea value="Initial text"></textarea>
```

For forms, `name` is important for submission.

---

# 23. `<select>`

Creates a dropdown/select control.

```html
<label for="branch">
    Branch
</label>

<select
    id="branch"
    name="branch"
>
    <option value="it">IT</option>
    <option value="cse">CSE</option>
    <option value="ece">ECE</option>
</select>
```

Structure:

```text
<select>
   │
   ├── <option>
   ├── <option>
   └── <option>
```

---

# 24. `<option>`

Represents an option inside a select or datalist-related context.

```html
<option value="it">
    Information Technology
</option>
```

The `value` is what is submitted.

For example:

```html
<option value="it">
    Information Technology
</option>
```

The user sees:

```text
Information Technology
```

The submitted value is:

```text
it
```

---

# 25. `selected`

Sets the initial selected option.

```html
<select name="branch">

    <option value="it" selected>
        IT
    </option>

    <option value="cse">
        CSE
    </option>

</select>
```

---

# 26. `<optgroup>`

Groups related options.

```html
<select name="course">

    <optgroup label="Engineering">
        <option value="it">IT</option>
        <option value="cse">CSE</option>
    </optgroup>

    <optgroup label="Science">
        <option value="physics">Physics</option>
        <option value="math">Mathematics</option>
    </optgroup>

</select>
```

Useful for large dropdowns.

---

# 27. `<datalist>`

Provides suggestions for an input.

```html
<label for="browser">
    Browser
</label>

<input
    id="browser"
    name="browser"
    list="browsers"
>

<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
</datalist>
```

Important distinction:

```text
<select>
↓
User selects from defined options

<datalist>
↓
Provides suggestions while allowing input
```

---

# 28. `<button>`

A button can perform different actions.

```html
<button type="submit">
    Submit
</button>
```

Common types:

```text
submit
button
reset
```

### `submit`

Submits the form.

```html
<button type="submit">
    Login
</button>
```

### `button`

Generic button; does not submit the form by default.

```html
<button type="button">
    Open Menu
</button>
```

### `reset`

Resets form controls to their initial values.

```html
<button type="reset">
    Reset
</button>
```

---

# 29. Why Explicit Button Types Matter

Inside a form:

```html
<form>

    <button>
        Open Menu
    </button>

</form>
```

The default type is generally `submit`.

If the button should not submit:

```html
<button type="button">
    Open Menu
</button>
```

### Interview Question

**Q: What is the default type of a button inside a form?**

Generally, it behaves as a submit button.

Best practice: explicitly specify the intended type.

---

# 30. `required`

Makes a form control required.

```html
<input
    type="text"
    name="username"
    required
>
```

The browser can prevent form submission when the required field is empty.

---

# 31. `placeholder`

Provides a hint to the user.

```html
<input
    type="email"
    placeholder="you@example.com"
>
```

### Important Interview Trap

Placeholder is **not a replacement for a label**.

Bad:

```html
<input
    placeholder="Enter your email"
>
```

Better:

```html
<label for="email">
    Email
</label>

<input
    id="email"
    name="email"
    type="email"
    placeholder="you@example.com"
>
```

---

# 32. `disabled`

Disables a form control.

```html
<input
    type="text"
    disabled
>
```

A disabled control generally:

- cannot be interacted with
- is not focusable
- is not included in normal form submission

### Important

Do not use `disabled` merely to hide information.

---

# 33. `readonly`

Prevents the user from editing the value while generally keeping the control usable/focusable.

```html
<input
    type="text"
    value="User ID: 101"
    readonly
>
```

A readonly control can generally still be submitted.

---

# 34. `disabled` vs `readonly`

| Feature | disabled | readonly |
|---|---|---|
| User can edit | No | No |
| Usually focusable | No | Yes |
| Included in normal form submission | No | Yes |
| Typical use | Temporarily unavailable control | Display value that must not be edited |

### Interview Question

**Q: Difference between disabled and readonly?**

> A disabled control is generally unavailable for interaction and isn't included in normal form submission, while a readonly control cannot be edited but can generally still participate in form submission.

---

# 35. `minlength` and `maxlength`

For text input:

```html
<input
    type="text"
    minlength="3"
    maxlength="20"
>
```

For textarea:

```html
<textarea
    minlength="10"
    maxlength="500"
></textarea>
```

These participate in native constraint validation.

---

# 36. `min`, `max`, and `step`

For numeric inputs:

```html
<input
    type="number"
    min="18"
    max="60"
    step="1"
>
```

Meaning:

```text
min  → minimum permitted value
max  → maximum permitted value
step → permitted increments
```

Example:

```html
<input
    type="number"
    min="0"
    max="100"
    step="5"
>
```

Possible values:

```text
0
5
10
15
...
100
```

---

# 37. `pattern`

Allows a regular-expression constraint for certain text-like inputs.

Example:

```html
<input
    type="text"
    name="username"
    pattern="[A-Za-z0-9]+"
>
```

This says the value should match the specified pattern for native constraint validation.

### Important

HTML validation is not a replacement for server-side validation.

---

# 38. `autocomplete`

Helps the browser understand what kind of information a field expects.

Example:

```html
<input
    type="email"
    name="email"
    autocomplete="email"
>
```

Other common values:

```text
name
email
username
current-password
new-password
street-address
postal-code
```

This improves usability and can help password managers/autofill.

---

# 39. `autofocus`

Requests that a control receive focus when the page loads.

```html
<input
    type="text"
    autofocus
>
```

Use it carefully, especially for accessibility.

---

# 40. `checked`

Sets a checkbox/radio to be initially selected.

```html
<input
    type="checkbox"
    name="terms"
    checked
>
```

or:

```html
<input
    type="radio"
    name="plan"
    value="pro"
    checked
>
```

---

# 41. `value`

Defines the control's value.

```html
<input
    type="text"
    name="username"
    value="aadi"
>
```

For options:

```html
<option value="it">
    Information Technology
</option>
```

The displayed label and submitted value can be different.

---

# 42. Form Validation

HTML provides built-in constraint validation.

Common attributes:

```text
required
type
min
max
minlength
maxlength
pattern
```

Flow:

```text
User enters data
       │
       ▼
Browser constraint validation
       │
   ┌───┴────┐
   │        │
 invalid   valid
   │        │
   ▼        ▼
Show      Submit
error     form
```

---

# 43. Client-Side vs Server-Side Validation

This is extremely important.

### Client-side

Runs in the browser.

Examples:

```html
<input type="email" required>
```

Benefits:

- immediate feedback
- better user experience
- avoids unnecessary requests

### Server-side

Runs on the server.

Must be used because the client cannot be trusted.

```text
Client
 │
 │ can be modified
 ▼
Browser validation
 │
 ▼
Server
 │
 ▼
Server validation
 │
 ▼
Trusted processing
```

### Interview Answer

> Client-side validation improves user experience, but server-side validation is essential because users can bypass or manipulate browser-side checks.

---

# 44. `novalidate`

A form can disable native browser constraint validation:

```html
<form
    action="/login"
    method="POST"
    novalidate
>
```

This is useful when validation is intentionally handled by JavaScript or another mechanism.

### Important

`novalidate` does not mean the data is valid.

It means the browser's built-in constraint validation isn't automatically enforced during submission.

---

# 45. Form Submission

Example:

```html
<form
    action="/login"
    method="POST"
>

    <label for="email">
        Email
    </label>

    <input
        type="email"
        id="email"
        name="email"
        required
    >

    <label for="password">
        Password
    </label>

    <input
        type="password"
        id="password"
        name="password"
        required
    >

    <button type="submit">
        Login
    </button>

</form>
```

Conceptual process:

```text
1. User fills fields
        ↓
2. Click Submit
        ↓
3. Browser validates
        ↓
4. Successful controls selected
        ↓
5. Form data encoded
        ↓
6. HTTP request generated
        ↓
7. Sent to action URL
```

---

# 46. What Gets Submitted?

This is a common interview area.

A form does not simply submit every element on the page.

Controls generally need a valid `name` and must satisfy the rules for successful controls.

Example:

```html
<input
    type="text"
    id="username"
    name="username"
    value="aadi"
>
```

Can produce:

```text
username=aadi
```

But:

```html
<input
    type="text"
    id="username"
    value="aadi"
>
```

has no `name`, so its value is not included as a normal named form field in native form submission.

---

# 47. Unchecked Checkbox

Consider:

```html
<input
    type="checkbox"
    name="newsletter"
    value="yes"
>
```

If checked, it can contribute:

```text
newsletter=yes
```

If unchecked, it is generally omitted from form submission.

This is a common interview trap.

---

# 48. Radio Button Submission

Example:

```html
<input
    type="radio"
    name="plan"
    value="basic"
>

<input
    type="radio"
    name="plan"
    value="pro"
>
```

If `pro` is selected:

```text
plan=pro
```

Only the selected radio in the group contributes its value.

---

# 49. File Uploads and `enctype`

For file uploads, use:

```html
<form
    action="/upload"
    method="POST"
    enctype="multipart/form-data"
>
```

Why?

Because file data needs an appropriate multipart encoding.

Conceptually:

```text
Form
 │
 ├── text fields
 │
 └── files
       │
       ▼
multipart/form-data
       │
       ▼
HTTP request
```

### Interview Question

**Q: Why do we use `multipart/form-data` for file uploads?**

> It allows form submissions to contain file data and other fields using multipart encoding.

---

# 50. `application/x-www-form-urlencoded`

This is a common form encoding.

For example:

```text
username=aadi&branch=IT
```

The form may use this encoding by default for typical URL-encoded submissions.

You don't need to memorize every byte-level detail yet.

---

# 51. `enctype` Summary

Common values:

```text
application/x-www-form-urlencoded
multipart/form-data
text/plain
```

Most important interview association:

```text
File upload
     ↓
multipart/form-data
```

---

# 52. `<fieldset>` and `<legend>`

Used to group related controls.

```html
<fieldset>

    <legend>
        Contact Information
    </legend>

    <label for="email">
        Email
    </label>

    <input
        id="email"
        name="email"
        type="email"
    >

</fieldset>
```

Conceptually:

```text
┌───────────────────────────────┐
│ Contact Information            │
│                               │
│ Email: [__________________]   │
│ Phone: [__________________]   │
│                               │
└───────────────────────────────┘
```

This is particularly useful for accessibility and organizing related controls.

---

# 53. `<output>`

Can represent the result of a calculation or user action.

Example:

```html
<form
    oninput="result.value = Number(a.value) + Number(b.value)"
>

    <input id="a" type="number">
    +
    <input id="b" type="number">

    =
    <output name="result"></output>

</form>
```

You don't need to memorize the inline JavaScript pattern; understand what `<output>` represents.

---

# 54. `<progress>`

Represents progress toward completion.

```html
<progress
    value="70"
    max="100"
>
    70%
</progress>
```

Conceptually:

```text
[██████████████------] 70%
```

---

# 55. `<meter>`

Represents a scalar measurement within a known range.

```html
<meter
    min="0"
    max="100"
    value="75"
>
    75
</meter>
```

### Progress vs Meter

```text
progress
↓
How much of a task is complete?

meter
↓
A measurement within a known range
```

Example:

```text
Progress → File upload: 75% complete
Meter    → Battery level: 75%
```

---

# 56. Complete Interview-Level Form Example

```html
<form
    action="/register"
    method="POST"
    enctype="multipart/form-data"
>

    <fieldset>

        <legend>Registration</legend>

        <label for="name">
            Name
        </label>

        <input
            type="text"
            id="name"
            name="name"
            required
            minlength="2"
            maxlength="50"
            autocomplete="name"
        >

        <br><br>

        <label for="email">
            Email
        </label>

        <input
            type="email"
            id="email"
            name="email"
            required
            autocomplete="email"
        >

        <br><br>

        <label for="password">
            Password
        </label>

        <input
            type="password"
            id="password"
            name="password"
            required
            autocomplete="new-password"
        >

        <br><br>

        <p>Preferred role:</p>

        <label>
            <input
                type="radio"
                name="role"
                value="frontend"
                required
            >
            Frontend
        </label>

        <label>
            <input
                type="radio"
                name="role"
                value="backend"
            >
            Backend
        </label>

        <br><br>

        <label>
            <input
                type="checkbox"
                name="terms"
                value="accepted"
                required
            >
            I accept the terms.
        </label>

        <br><br>

        <label for="resume">
            Resume
        </label>

        <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            required
        >

        <br><br>

        <button type="submit">
            Register
        </button>

        <button type="reset">
            Reset
        </button>

    </fieldset>

</form>
```

---

# 57. Form Architecture Mental Model

Remember this:

```text
                    FORM
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
      Controls                 Metadata
          │                       │
    ┌─────┼─────┐           action / method
    │     │     │
 input textarea select
    │
    ├── type
    ├── name
    ├── id
    ├── value
    └── validation
          │
          ▼
       Submit
          │
          ▼
    Form Encoding
          │
          ▼
      HTTP Request
          │
          ▼
       Backend
```

---

# 58. Most Important Form Attributes

| Attribute | Purpose |
|---|---|
| `action` | Submission destination |
| `method` | HTTP method |
| `name` | Form field name |
| `id` | Element identifier |
| `value` | Control value |
| `type` | Type of input/button |
| `required` | Makes field required |
| `placeholder` | Provides a hint |
| `disabled` | Disables control |
| `readonly` | Prevents editing |
| `checked` | Initially selects checkbox/radio |
| `selected` | Initially selects option |
| `multiple` | Allows multiple selections/files |
| `accept` | Restricts suggested file types |
| `autocomplete` | Provides autofill hints |
| `pattern` | Pattern constraint |
| `min/max` | Numeric/range limits |
| `minlength/maxlength` | Text length limits |
| `enctype` | Form submission encoding |
| `novalidate` | Disables native form validation |

---

# 59. Most Important Input Types

You should recognize these immediately:

```text
text
password
email
number
date
time
datetime-local
month
week
url
tel
search
checkbox
radio
file
hidden
color
range
submit
reset
button
```

You don't need to memorize every obscure input type for a fresher interview, but you should understand the major ones and their purpose.

---

# 60. Interview Questions

## Fundamentals

1. What is an HTML form?
2. What does the `action` attribute do?
3. What does the `method` attribute do?
4. GET vs POST?
5. What is the `name` attribute?
6. Why is `name` important in form submission?
7. Difference between `id` and `name`?

## Inputs

8. What is the difference between text and email input?
9. What is the purpose of `type="password"`?
10. Is password input encrypted?
11. Checkbox vs radio button?
12. How are radio buttons grouped?
13. What does `multiple` do?
14. What is the purpose of `accept` on file inputs?
15. What is `<textarea>`?
16. `<select>` vs `<datalist>`?

## Validation

17. What does `required` do?
18. What is `pattern`?
19. What do `min`, `max`, and `step` do?
20. What are `minlength` and `maxlength`?
21. What is client-side validation?
22. Why is server-side validation still required?
23. What does `novalidate` do?

## Accessibility

24. Why should inputs have labels?
25. What is the purpose of `for` on `<label>`?
26. Why isn't placeholder a replacement for a label?
27. What are `<fieldset>` and `<legend>`?

## Submission

28. What happens when a form is submitted?
29. What is `enctype`?
30. Why is `multipart/form-data` used for file uploads?
31. What happens to an unchecked checkbox during submission?
32. What happens if an input has no `name`?
33. What is the default button type inside a form?
34. Difference between `disabled` and `readonly`?

---

# 61. Practical Interview Exercises

## Exercise 1 — Login Form

Build:

```text
┌──────────────────────────────┐
│           Login              │
│                              │
│ Email:    [______________]   │
│                              │
│ Password: [______________]   │
│                              │
│        [ Login ]             │
└──────────────────────────────┘
```

Requirements:

- label every field
- email validation
- password required
- submit button
- POST method

---

## Exercise 2 — Registration Form

Include:

```text
Name
Email
Password
Age
Gender
Skills
Branch
Resume
Terms & Conditions
Submit
Reset
```

Use appropriate input types and validation.

---

## Exercise 3 — Explain the Submission

Given:

```html
<form action="/search" method="GET">

    <input
        type="text"
        name="q"
        value="javascript"
    >

    <button type="submit">
        Search
    </button>

</form>
```

What request URL would conceptually result?

Answer:

```text
/search?q=javascript
```

---

# 62. One-Minute Revision

```text
FORM
│
├── form
│   ├── action
│   ├── method
│   └── enctype
│
├── label
│   └── for ↔ id
│
├── input
│   ├── text
│   ├── email
│   ├── password
│   ├── number
│   ├── date
│   ├── radio
│   ├── checkbox
│   ├── file
│   └── hidden
│
├── textarea
│
├── select
│   ├── option
│   └── optgroup
│
├── datalist
│
├── button
│   ├── submit
│   ├── button
│   └── reset
│
└── validation
    ├── required
    ├── pattern
    ├── min/max
    ├── minlength/maxlength
    └── type
```

---

# 63. Critical Interview Facts

Memorize these relationships:

```text
label
  ↓
for
  ↓
input id


form
  ↓
action + method
  ↓
HTTP request


input
  ↓
name + value
  ↓
form submission


radio buttons
  ↓
same name
  ↓
one selection


file upload
  ↓
POST
  ↓
multipart/form-data


client validation
  ↓
UX
  ↓
NOT security


server validation
  ↓
security + data integrity
```

---

# 64. Progress

```text
HTML
├── ✅ 01-html-basics.md
├── ✅ 02-html-elements.md
├── ✅ 03-html-forms.md
├── ⬜ 04-semantic-html.md
├── ⬜ 05-accessibility.md
└── ⬜ 06-html-interview-questions.md
```

## Next File

`04-semantic-html.md`

We will cover:

```text
Semantic HTML
│
├── header
├── nav
├── main
├── section
├── article
├── aside
├── footer
├── address
└── figure
     │
     ▼
Meaning
     │
     ├── Accessibility
     ├── SEO
     ├── Maintainability
     └── Better document structure
```

Semantic HTML is one of the most important differences between **"I know HTML syntax"** and **"I understand HTML properly."**
