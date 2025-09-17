# 🧑‍💻 Growing and Shrinking

---

### **Lesson Overview**
* This lesson covers the three individual properties defined by the **`flex`** shorthand: **`flex-grow`**, **`flex-shrink`**, and **`flex-basis`**.

---

### **The `flex` Shorthand**
* The **`flex`** property is a shorthand for three properties that control how flex items size themselves.
* The three properties are:
    * **`flex-grow`**
    * **`flex-shrink`**
    * **`flex-basis`**
* **`flex: 1`** equates to **`flex-grow: 1`**, **`flex-shrink: 1`**, **`flex-basis: 0`**.
* When **`flex`** is defined with a single value, it applies to **`flex-grow`**. For example, **`flex: 1`** is shorthand for **`flex: 1 1 0`**.

---

### **`flex-grow`**
* Accepts a number as its value, which is the "growth factor."
* A value of **`1`** on all items makes them grow to the same size.
* A value of **`2`** on one item makes it grow to twice the size of others with a value of **`1`**.
* **Key takeaway:** Flex items don't always respect a specified **`width`** when **`flex-grow`** is used.

---

### **`flex-shrink`**
* Similar to **`flex-grow`**, but sets the "shrink factor."
* Only applies if the combined size of all items is larger than their container.
* The default shrink factor is **`flex-shrink: 1`**, causing all items to shrink evenly.
* Use **`flex-shrink: 0`** to prevent an item from shrinking.
* **Key takeaway:** Like **`flex-grow`**, **`flex-shrink`** can override a specified **`width`** declaration.

---

### **`flex-basis`**
* Sets the initial size of a flex item before any growing or shrinking occurs.
* The default value in the `flex` shorthand is **`0%`**.
* The actual default value for the `flex-basis` property itself is **`auto`**.
* **`flex-basis: auto`** tells the item to check for and respect a **`width`** declaration.

---

### **`flex: auto`**
* A flex shorthand keyword equivalent to **`flex: 1 1 auto`**.
* It sets **`flex-grow: 1`**, **`flex-shrink: 1`**, and **`flex-basis: auto`**.
* This is not the default value when using the flex shorthand.

---

### **Practical Application**
* In practice, the most common declarations are **`flex: 1`** (for even growth) and **`flex-shrink: 0`** (to prevent shrinking).
* Using more complex values is rare but can be useful for specific layouts.

---

### **Additional Resources** 📚
* W3C's `flex` section.
* MDN's documentation on `flex`.
* Scrimba videos on `flexbox`.