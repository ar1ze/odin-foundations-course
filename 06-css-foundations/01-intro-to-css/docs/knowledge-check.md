### Knowledge Check Answers 🎯

---

#### Question: What is the syntax for class and ID selectors?

**Answer:** A **class** selector starts with a **period (`.`)**, and an **ID** selector starts with a **hash (`#`)**.

**Why:** These symbols are CSS syntax for selecting HTML elements by their `class` or `id` attributes. Since IDs must be unique, the `#` selector is more specific than the `.` selector.

**Example:**
* `.menu-item` selects `<div class="menu-item">`
* `#main-header` selects `<h1 id="main-header">`

**Remember:** **.** for class (many items can share a class), **#** for ID (like the #1 unique item).

---

#### Question: How would you apply a single rule to two different selectors?

**Answer:** You can group selectors by separating them with a **comma (`,`)**.

**Why:** The comma tells the browser to apply the same block of CSS rules to all the listed selectors. This helps you avoid repeating code.

**Example:** `h1, .special-text { color: blue; }` will make both `<h1>` elements and elements with the class `special-text` blue.

---

#### Question: Given an element that has an id of `title` and a class of `primary`, how would you use both attributes for a single rule?

**Answer:** You would chain the ID and class selectors together **without a space**, like this: `#title.primary`.

**Why:** Chaining selectors without a space creates a more specific rule that will only match an element that has *both* the specified ID and class.

**Example:** The selector `#title.primary` would match `<h1 id="title" class="primary">` but would *not* match `<h1 id="title">`.

---

#### Question: What does the descendant combinator do?

**Answer:** The descendant combinator (represented by a **space**) selects an element that is nested anywhere inside another specific element.

**Why:** It allows you to target elements more precisely based on their context or location within the HTML structure.

**Example:** The selector `.container p` will select *only* the `<p>` elements that are located somewhere inside an element with the class `container`.

---

#### Question: What are the names of the three ways to add CSS to HTML?

**Answer:** The three methods are **External CSS**, **Internal CSS**, and **Inline CSS**.

---

#### Question: What are the main differences between the three ways of adding CSS to HTML?

**Answer:** The main differences are the **location** of the CSS code and its **scope**.
* **External CSS:** The CSS is in a separate `.css` file, linked in the HTML's `<head>`. It's the best practice because it can style an entire website and keeps content and presentation separate.
* **Internal CSS:** The CSS is inside a `<style>` tag within the HTML's `<head>`. It only affects the single HTML page it's on.
* **Inline CSS:** The CSS is written directly into an HTML element's `style` attribute. It only affects that single element and is generally avoided because it's hard to maintain.

**Remember:**
* **External:** 🌍 For the whole site.
* **Internal:** 📄 For a single page.
* **Inline:** 🎯 For a single element.