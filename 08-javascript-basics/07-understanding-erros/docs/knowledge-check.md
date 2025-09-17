### Knowledge Check Answers 🎯

---

#### Question: What are three reasons why you may see a TypeError?

**Answer:** You might see a `TypeError` if you: 1) misspell a method name, 2) try to access a property on a `null` or `undefined` value, or 3) try to invoke something that is not a function.

**Why:** A `TypeError` happens when you try to perform an operation on a value, but that value's data type is not compatible with the operation you're trying to perform.

**Example:**
1.  **Misspelling:** `'hello'.toUppercase()` will throw a `TypeError` because the correct method is `toUpperCase()`.
2.  **Accessing property on null:** `document.querySelector('.fake-class').style.color = 'blue';` will throw a `TypeError` because `querySelector` returns `null` if the element isn't found, and `null` has no `.style` property.
3.  **Calling a non-function:** `let myName = "Odin"; myName();` will throw a `TypeError` because you can't call a string like a function.

---

#### Question: What is the key difference between an error and a warning?

**Answer:** An **error** is a critical issue that will stop your script from running. A **warning** is a notification about a potential issue that will *not* stop your script from running.

**Why:** Errors indicate that the browser encountered a problem it couldn't solve, forcing it to halt execution. Warnings are just helpful hints or suggestions from the browser about best practices or potential, non-critical problems.

**Remember:**
* **Error:** Stops the show. 🛑
* **Warning:** Just a heads-up. ⚠️

---

#### Question: What is one method you can use to resolve an error?

**Answer:** One of the most effective methods is to **carefully read the error message** in the developer console.

**Why:** The error message is your best clue. It almost always tells you what type of error occurred and, crucially, the exact file and line number where the error was detected, pointing you directly to the source of the problem.