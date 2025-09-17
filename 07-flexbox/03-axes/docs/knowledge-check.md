### Knowledge Check Answers 🎯

---

#### Question: How do you make flex items arrange themselves vertically instead of horizontally?

**Answer:** You set the `flex-direction` property on the flex container to **`column`**.

**Why:** By default, flex items are arranged in a `row`. The `flex-direction: column;` rule changes the main axis from horizontal to vertical, causing the flex items to stack on top of each other.

**Remember:** `flex-direction: column` makes items stack in a vertical **column**. ↕️

---

#### Question: In a `column` flex-container, what does `flex-basis` refer to?

**Answer:** In a `column` container, `flex-basis` refers to the **height** of a flex item.

**Why:** `flex-basis` always controls an item's size along the main axis. Since `flex-direction: column` makes the main axis vertical, `flex-basis` controls the item's height.

---

#### Question: In a `row` flex-container, what does `flex-basis` refer to?

**Answer:** In a `row` container, `flex-basis` refers to the **width** of a flex item.

**Why:** The default `flex-direction` is `row`, which makes the main axis horizontal. Therefore, `flex-basis` controls the item's width.

---

#### Question: Why do the previous two questions have different answers?

**Answer:** The meaning of `flex-basis` changes because it is always tied to the direction of the **main axis**, which is controlled by the `flex-direction` property.

**Why:** When you change the `flex-direction` from `row` to `column`, you are rotating the main axis from horizontal to vertical. As a result, `flex-basis` switches from controlling the width (the horizontal dimension) to controlling the height (the vertical dimension).

**Remember:** `flex-basis` always follows the **main axis**.