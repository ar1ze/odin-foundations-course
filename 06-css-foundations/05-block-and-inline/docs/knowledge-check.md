### Knowledge Check Answers 🎯

---

#### Question: What is the difference between a block element and an inline element?

**Answer:** **Block** elements start on a new line and take up the full width available to them. **Inline** elements do not start on a new line and only take up as much width as their content needs.

**Why:** This distinction is key to how layouts are structured. Block elements are for larger containers (like paragraphs or sections), while inline elements are for smaller pieces of content within a line of text (like a link or an emphasized word).

**Remember:**
* **Block** = A big **block** that stacks vertically. 🧱
* **Inline** = Stays **in the line** of text. ✍️

---

#### Question: What is the difference between an inline element and an inline-block element?

**Answer:** Like an **inline** element, an **inline-block** element sits on the same line with other elements. However, unlike an inline element, you can control its `width`, `height`, and vertical `margin` and `padding`, just like a **block** element.

**Why:** `inline-block` provides a useful middle ground, giving you the vertical stacking control of a block element while keeping the element within the flow of a line of text.

**Remember:** **inline-block** = Sits **inline**, but has the box properties of a **block**.

---

#### Question: Is an `h1` block or inline?

**Answer:** An `<h1>` element is a **block**-level element by default.

**Why:** Headings are intended to be titles that stand apart from other content, so they naturally occupy their own line.

---

#### Question: Is `button` block or inline?

**Answer:** A `<button>` is technically an **inline-block** element by default.

**Why:** This is a special case. It allows buttons to sit next to each other in a line (like inline elements) but also allows developers to give them a specific `width` and `height` (like block elements).

---

#### Question: Is `div` block or inline?

**Answer:** A `<div>` is a **block**-level element by default.

**Why:** It is the most generic block-level container, designed specifically to group larger sections of content or create distinct blocks in your layout.

---

#### Question: Is `span` block or inline?

**Answer:** A `<span>` is an **inline** element by default.

**Why:** It is the most generic inline container, used to wrap a small piece of text or content within a line for styling purposes without creating a line break.