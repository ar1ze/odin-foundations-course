# The Cascade 🌊

## Foundations Course

### Introduction

In the previous lesson, we covered basic CSS syntax and selectors. Now, it’s time to combine our knowledge of selectors with the C of CSS – the **cascade**.

---

### Lesson Overview

This section contains a general overview of topics that you will learn in this lesson.

* What the cascade does.
* Specificity and combining CSS selectors.
* How inheritance affects certain properties.

---

### The Cascade of CSS

Sometimes we may have rules that conflict with one another, and we end up with some unexpected results. The cascade is what determines which rules actually get applied to our HTML. We will examine three of these factors: **specificity**, **inheritance**, and **rule order**.

---

### Specificity

A CSS declaration that is more specific will take precedence over less specific ones.

* **ID selectors** (most specific selector)
* **Class selectors**
* **Type selectors**

Specificity acts like a tie-breaker when multiple, conflicting declarations target an element.

* An ID selector will always beat any number of class selectors.
* A class selector will always beat any number of type selectors.
* A type selector will always beat any number of less specific selectors.

When there's no declaration with a higher specificity selector, a rule with a greater number of selectors of the same type will take precedence.

#### Examples ✍️

* **`/* rule 1 */ .subsection { color: blue; }`**
* **`/* rule 2 */ .main .list { color: red; }`**
    * Rule 2 is more specific because it uses more class selectors. `color: red` wins.

* **`/* rule 1 */ #subsection { color: blue; }`**
* **`/* rule 2 */ .main .list { color: red; }`**
    * Rule 1 is more specific because ID beats class. `color: blue` wins.

* **`/* rule 1 */ #subsection { ... color: blue; }`**
* **`/* rule 2 */ .main #subsection { ... color: red; }`**
    * Neither rule uses a more specific selector type.
    * Rule 2 has a greater number of selectors (one class selector in addition to the ID selector), so it's more specific. `color: red` wins.

#### Not everything adds to specificity ❌

Universal selectors (`*`) and combinators (`+, ~, >,` and an empty space) do not add to specificity.

---

### Inheritance

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants.

* Typography-based properties (e.g., `color`, `font-size`) are usually inherited.
* Most other properties are not.
* You can check if a property is inherited in its MDN documentation under "Formal Definition."

The exception is when an element is directly targeted, as this always beats inheritance.

* **`#parent { color: red; }`**
* **`.child { color: blue; }`**
    * Even though `#parent` has higher specificity, the child element is directly targeted by `.child`. `color: blue` wins.

---

### Rule Order

The final tie-breaker. If after all other factors, there are still conflicting rules targeting an element, whichever rule was the **last defined is the winner**.

* **`/* styles.css */`**
* **`.alert { color: red; }`**
* **`.warning { color: yellow; }`**
    * For an element with both classes, `.warning` wins because it was defined last.

---

### Assignment 🧑‍💻

Complete the exercise in our CSS exercises repository’s `foundations/cascade` directory.

* **01-cascade-fix**
* Solutions can be found in the `solution` folder of each exercise.

---

### Knowledge Check ✅

* **Question:** Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

---

### Additional Resources 📚

* The CSS Cascade (interactive read)
* CSS Specificity Explained (Kevin Powell video)
* CSS Specificity Calculator
* Interactive Scrim on the CSS Cascade