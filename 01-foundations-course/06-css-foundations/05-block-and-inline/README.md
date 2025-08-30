# Block and Inline 🧱

## Introduction
In this lesson, you'll learn about CSS box types: block and inline boxes. These determine how elements behave and interact on a webpage. The `display` property controls an element's appearance.

---

## Lesson Overview 📝
- Learn about "Normal flow."
- Understand the difference between block and inline elements.
- Identify default block and inline elements.
- Learn about `<div>` and `<span>` elements.

---

## Block vs Inline 🖥️
- **Block Elements:**
    - Default style is `display: block`.
    - Appear stacked on top of each other, each on a new line.
    - Examples include most elements you've learned so far.
- **Inline Elements:**
    - Do not start on a new line.
    - Appear in line with surrounding elements.
    - Example: `<a>` (link) tags.
    - Padding and margin behave differently; generally, avoid adding extra padding or margin.

---

## The Middle Ground: Inline-Block 💻
- **`display: inline-block`:**
    - Behaves like an inline element but with block-style padding and margin.
    - Useful but often superseded by `flexbox` for lining up boxes.

---

## Divs and Spans 📦
- **Generic Containers:**
    - `<div>` and `<span>` give no specific meaning to their content.
    - Used as "hook" elements for styling with CSS classes or IDs.
    - Useful for grouping related elements.
- **`<div>`:**
    - A block-level element by default.
    - Commonly used as a container to group other elements and divide a page into blocks.
- **`<span>`:**
    - An inline-level element by default.
    - Used to group text content and inline HTML elements for styling.

---

## Assignment ✍️
- Read "Normal Flow" from MDN to understand default element layout.
- Review "HTML Block and Inline Elements" from W3 schools for a list of default elements.
- Read "Inline vs Inline-block Display in CSS" from Digital Ocean for examples.
- Complete exercises in the `foundations/block-and-inline` directory:
    - `01-margin-and-padding-1`
    - `02-margin-and-padding-2`
- Style your Recipe page using the external CSS method and properties from the previous lesson.
    - Use generic or web-safe fonts from CSS Fonts and CSS Web Safe Fonts.

---

## Knowledge Check 🤔
- What is the difference between block and inline elements?
- What is the difference between inline and inline-block elements?
- Is `<h1>` block or inline?
- Is `<button>` block or inline?
- Is `<div>` block or inline?
- Is `<span>` block or inline?

---

## Additional Resources 📚
- **Learn CSS Layout:** A tutorial with clear examples.
- **"Normal Flow" Video:** A short video explaining the concept.
- **Scrim:** An interactive explanation of block and inline display.