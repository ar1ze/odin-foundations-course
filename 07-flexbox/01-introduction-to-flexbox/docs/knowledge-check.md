### Knowledge Check Answers 🎯

---

#### Question: What’s the difference between a flex container and a flex item?

**Answer:** The **flex container** is the parent element that has `display: flex;` applied to it. The **flex items** are the direct children of that container.

**Why:** You set the flexbox rules on the container, and those rules control the layout and alignment of all the items inside it. You can't have flex items without a flex container.

**Remember:** The **container** is the box, and the **items** are the things you put inside the box. 📦

---

#### Question: How do you create a flex item?

**Answer:** You don't create a flex item directly. An element **automatically becomes a flex item** when its direct parent element is set to `display: flex;`.

**Why:** The parent (the flex container) is what defines the flexbox context. Any direct child of that container will then behave as a flex item by default.