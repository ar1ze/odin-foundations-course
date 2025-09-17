### Knowledge Check Answers 🎯

---

#### Question: How do you select a specific element on your page with your browser’s developer tools?

**Answer:** You can either **right-click** on the element and choose **"Inspect"** from the menu, or use the **element selector tool** (an icon that looks like a square with a cursor) in the top-left of the developer tools panel.

**Why:** The "Inspect" option is a direct shortcut that opens the developer tools with the clicked element already highlighted. The selector tool allows you to visually hover over and click any element on the page to see its corresponding HTML and CSS.

**Remember:** **Right-click > Inspect** is the quickest way to target an element. 🎯

---

#### Question: What does a strikethrough in a CSS declaration mean in your browser’s developer tools?

**Answer:** A strikethrough means that the CSS property has been **overridden** by another, more specific CSS rule.

**Why:** The browser uses a strikethrough to show you that while a style was applied to an element, it was ultimately ignored in favor of a conflicting style with higher specificity or one that was declared later in the code. This is a key visual cue for debugging CSS.

**Example:** If you see `color: blue;` with a strikethrough, it means another rule, like `color: red;`, is winning out and being applied instead.

**Remember:** Strikethrough = An **overridden** or "losing" rule.

---

#### Question: How do you change CSS in real time on specific elements of a web page with your browser’s developer tools?

**Answer:** After inspecting an element, you can edit its CSS directly in the **"Styles"** panel.

**Why:** The "Styles" panel shows all the CSS rules affecting the selected element. You can click on properties and values to type new ones, add new rules, or click the checkboxes next to properties to toggle them on and off, seeing the changes instantly on the page.

**Remember:** The **Styles panel** is your live playground for CSS changes. 🎨