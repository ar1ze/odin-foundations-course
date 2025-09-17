### Knowledge Check Answers 🎯

---

#### Question: How do you create a paragraph in HTML?

**Answer:** You create a paragraph by wrapping the text content inside a `<p>` opening tag and a `</p>` closing tag.

**Why:** The `<p>` element semantically defines a block of text as a paragraph, which browsers then display with space above and below it by default.

**Example:** `<p>This is a paragraph.</p>`

---

#### Question: How do you create a heading in HTML?

**Answer:** You create a heading by wrapping the text content in a heading tag, which ranges from `<h1>` to `<h6>`.

**Why:** These tags are used to introduce sections and organize the content of a page into a structured hierarchy.

**Example:** `<h1>This is a Main Heading</h1>`

---

#### Question: How many different levels of headings are there and what is the difference between them?

**Answer:** There are **six** levels of headings, from `<h1>` down to `<h6>`.

**Why:** The difference is their level of importance in the document's structure. `<h1>` is the most important (used for the main page title), and `<h6>` is the least important. You should use them in logical order without skipping levels.

---

#### Question: What element should you use to make text bold and important?

**Answer:** You should use the `<strong>` element.

**Why:** This tag not only makes the text bold by default but also adds semantic meaning, telling screen readers and search engines that this text has strong importance.

**Example:** `<p><strong>Warning:</strong> This action is irreversible.</p>`

---

#### Question: What element should you use to make text italicized to add emphasis to it?

**Answer:** You should use the `<em>` element, which stands for "emphasis."

**Why:** This tag typically renders text in italics and semantically indicates a verbal emphasis that changes the meaning of a sentence.

**Example:** `<p>You should <em>never</em> cross the streams.</p>`

---

#### Question: What relationship does an element have with any nested elements within it?

**Answer:** The outer element is the **parent**, and the nested elements are its **children**.

**Why:** This parent-child relationship is key to understanding HTML structure and is used by CSS to apply specific styles.

**Example:** In `<div><p>Hello</p></div>`, the `<div>` is the parent and the `<p>` is the child.

---

#### Question: What relationship do two elements have if they are at the same level of nesting?

**Answer:** They have a **sibling** relationship.

**Why:** Two or more elements are considered siblings if they share the same parent element.

**Example:** In `<body><h1>Hi</h1><p>There</p></body>`, the `<h1>` and `<p>` elements are siblings because they both have the `<body>` as their parent.

---

#### Question: How do you create HTML comments?

**Answer:** You create an HTML comment by starting it with ``.

**Why:** Comments are notes for human readers of the code; they are completely ignored by the browser and are not displayed on the webpage.

**Example:** ``