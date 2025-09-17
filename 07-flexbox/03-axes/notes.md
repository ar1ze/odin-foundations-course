# Flexbox: Axes and Directions ➡️↕️

-----

## Introduction

This lesson covers how to control the orientation of items within a flex container using the `flex-direction` property.

## 🧐 Lesson Overview

  * Learn about the two "axes" of a flex container.
  * Understand how to change the axes to arrange content in columns instead of rows.

## The Axes of a Flex Container 🔄

The most important concept to grasp about flexbox is that it has two axes:

  * **Main Axis**: The primary direction in which flex items are laid out.
  * **Cross Axis**: The axis perpendicular to the main axis.

### Changing Direction with `flex-direction` ➡️

  * The default `flex-direction` is `row`, which makes the main axis horizontal (left-to-right).
  * To change the direction to vertical, use `flex-direction: column`. This makes the main axis vertical (top-to-bottom).

<!-- end list -->

```css
.flex-container { 
  flex-direction: column; 
}
```

## ⚠️ Important Considerations

  * **`flex` Shorthand**: Using `flex: 1` can cause unexpected behavior with `flex-direction: column` because it expands `flex-basis` to `0`. This can make empty divs collapse.
      * **Solution**: Use `flex: 1 1 auto` or set a height on the parent container.
  * **`flex-basis`**: The property that defines the default size of a flex item.
      * In a **row** container, `flex-basis` refers to the **width**.
      * In a **column** container, `flex-basis` refers to the **height**.

## 🧠 Knowledge Check

  * How do you arrange flex items vertically?
  * In a column flex-container, what does `flex-basis` refer to?
  * In a row flex-container, what does `flex-basis` refer to?
  * Why are the answers to the previous two questions different?

## 📚 Additional Resources

  * [Flexbox visual cheatsheet](https://flexbox.io/)
  * [Scrim on Flexbox axes](https://www.google.com/search?q=https://scrimba.com/scrim/codepark/flexbox-axes-cK92k6) (requires logging in to Scrimba)