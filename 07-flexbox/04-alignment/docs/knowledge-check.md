### Knowledge Check Answers 🎯

-----

#### Question: What is the difference between `justify-content` and `align-items`?

**Answer:** **`justify-content`** aligns flex items along the **main axis**, while **`align-items`** aligns them along the **cross axis**.

**Why:** In a default horizontal layout (`flex-direction: row`), `justify-content` controls the horizontal spacing, and `align-items` controls the vertical alignment. If you switch to `flex-direction: column`, their roles are reversed.

**Remember:**

  * **J**ustify-content works along the main (**j**ourney) direction of the items.
  * **A**lign-items works **a**cross that main direction.

-----

#### Question: How do you use flexbox to completely center a div inside a flex container?

**Answer:** On the flex container, you set both **`justify-content: center;`** and **`align-items: center;`**.

**Why:** `justify-content: center;` centers the item along the main (horizontal) axis, and `align-items: center;` centers it along the cross (vertical) axis. Using them together places the item perfectly in the middle.

**Example:**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

-----

#### Question: What’s the difference between `justify-content: space-between` and `justify-content: space-around`?

**Answer:** `space-between` places all available space *between* the flex items, pushing the first and last items to the very edges of the container. `space-around` distributes space *around* each item, which results in a half-size space at the container's edges.

**Why:** The key difference is how the space at the ends of the container is handled. `space-between` has no space at the ends, while `space-around` does.

**Example:**

  * **`space-between`:** `|item---item---item|`
  * **`space-around`:** `|-item--item--item-|`

**Remember:**

  * `space-**between**`: Space is only **between** the items.
  * `space-**around**`: Space is **all around** each item.