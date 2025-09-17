### Knowledge Check Answers 🎯

---

#### Question: What are the 3 values defined in the shorthand `flex` property (e.g. `flex: 1 1 auto`)?

**Answer:** The three values are **`flex-grow`**, **`flex-shrink`**, and **`flex-basis`**, in that order.

**Why:** This shorthand property is a convenient way to set the three most important flex item properties at once: how much it should grow to fill extra space (`flex-grow`), how much it should shrink when space is limited (`flex-shrink`), and its ideal starting size (`flex-basis`).

**Remember:** **G**row, **S**hrink, **B**asis.

---

#### Question: What are the 3 defined values for the flex shorthand `flex:auto`?

**Answer:** The keyword `auto` is a shorthand that sets the `flex` property to **`1 1 auto`**.

**Why:** This means the item will have `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: auto`. It's a common default that makes an item fully flexible—it can grow and shrink as needed, and its initial size is determined by its content.