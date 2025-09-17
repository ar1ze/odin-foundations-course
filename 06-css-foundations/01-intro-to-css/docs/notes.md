# Intro to CSS 🎨

This lesson teaches foundational CSS concepts to style web pages after learning HTML structure.

***

## 📝 Lesson Overview

* **Add styles to HTML** with CSS.
* Understand **`class` and `ID` attributes**.
* Add styles to specific elements using the **correct selectors**.

***

## 💻 Basic Syntax

A CSS **rule** is composed of a **selector** and a semicolon-separated list of **declarations**, with each declaration being a **property-value pair**.

***

## 🏷️ Semantic HTML

The `<div>` element is an empty container. It's often used for styling purposes when a more specific HTML tag isn't suitable.

***

## 🎯 Selectors

Selectors target HTML elements to apply CSS rules.

### Universal Selector 🌐

* Selects **every type** of element.
* Syntax: `*`
* Example: `* { color: purple; }`

### Type Selectors 🏷️

* Selects all elements of a given **element type**.
* Syntax: the element's name (e.g., `div`).
* Example: `div { color: white; }`

### Class Selectors 🧑‍🤝‍🧑

* Selects all elements with a specific **class attribute**.
* Syntax: a period `.` followed by the class name.
* Example: `.alert-text { color: red; }`
* **Note:** Class names cannot start with a number. Multiple classes can be added to an element, separated by a space.

### ID Selectors 🆔

* Selects an element with a specific **ID attribute**.
* An element can only have **one ID**, which must be unique on the page.
* Syntax: a hashtag `#` followed by the ID name.
* Example: `#title { background-color: red; }`
* **Note:** ID selectors can't start with a number. Use them sparingly.

### The Grouping Selector 🧩

* Applies the same style to **multiple selectors**.
* Syntax: a comma `,` separated list of selectors.
* Example: `.read, .unread { color: white; background-color: black; }`

### Chaining Selectors 🔗

* Targets an element that has **multiple selectors** at the same time.
* Syntax: selectors are listed **without spaces**.
* Example: `.subsection.header { color: red; }` (selects an element with both `subsection` and `header` classes).

### Descendant Combinator 🌲

* Selects an element that is a **descendant** of another element.
* Syntax: a single space ` ` between selectors.
* Example: `.ancestor .contents { /* some declarations */ }` (selects any element with the class `contents` that is inside an element with the class `ancestor`).

***

## 🎨 Key Properties

### Color & Background-color 🌈

* `color`: sets **text color**.
* `background-color`: sets an element's **background color**.
* Values can be keywords (`red`), HEX (`#1100ff`), RGB (`rgb(100, 0, 127)`), or HSL (`hsl(15, 82%, 56%)`).

### Typography Basics ✍️

* `font-family`: specifies a font, with fallbacks.
    * Example: `font-family: "Times New Roman", serif;`
* `font-size`: sets the size of the font.
    * Example: `font-size: 22px;`
* `font-weight`: controls the boldness of the text.
    * Values: keywords (`bold`) or numbers (`700`).
* `text-align`: aligns text horizontally.
    * Example: `text-align: center;`

### Image Height & Width 🖼️

* `height` and `width`: adjust the size of an element.
* Using `height: auto;` and setting `width` will maintain image proportions.
* Best practice: always include these properties and HTML attributes to prevent layout shifts while images load.

***

## 🚀 Adding CSS to HTML

There are three ways to add CSS to an HTML document.

### 1. External CSS 🌐

* Most common method.
* CSS is in a separate `.css` file.
* Linked in the `<head>` of the HTML using a `<link>` element.
    * Example: `<link rel="stylesheet" href="styles.css">`
* **Pros:** Keeps HTML clean, styles can be shared across multiple pages.

### 2. Internal CSS ⚙️

* CSS is placed directly within the `<style>` tags in the `<head>` of the HTML file.
* Useful for single-page unique styles.
* **Cons:** Can make HTML file large, doesn't separate concerns.

### 3. Inline CSS ➡️

* Styles are added directly to an element's opening tag using the `style` attribute.
* Example: `<div style="color: white; background-color: black;">...</div>`
* **Cons:** Unnecessary repetition, clutters HTML, overrides other methods, not recommended for most cases.

***

## 📚 Assignment

Complete the following exercises in order from the CSS exercises repository:

* 01-css-methods
* 02-class-id-selectors
* 03-grouping-selectors
* 04-chaining-selectors
* 05-descendant-combinator

***

## 🧠 Knowledge Check

* **Syntax for selectors?**
    * Class: `.class-name`
    * ID: `#id-name`
* **Apply a single rule to two selectors?**
    * Use the **grouping selector** with a comma-separated list: `.selector1, .selector2 { ... }`
* **Use both `id` and `class`?**
    * Use **chaining selectors**: `#title.primary { ... }`
* **Descendant combinator function?**
    * Selects an element that is a descendant of another element, regardless of nesting depth.
* **Three ways to add CSS?**
    * External, Internal, and Inline.
* **Main differences between them?**
    * **External:** separate file, best for large projects, reusable.
    * **Internal:** within `<style>` tags in `<head>`, for unique styles on a single page.
    * **Inline:** directly on elements with `style` attribute, for unique single-element styles, generally not recommended.