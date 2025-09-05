# Clean Code: The Fundamentals 📖

***

### 📝 Introduction
The majority of a developer's time is spent reading code, not writing it. This includes your own old code and code written by others. The goal of this lesson is to provide guidelines for improving code readability, not to demand immediate perfection. Focus on gradual improvement.

---

### 💡 What is Clean Code?
Clean code is code that is easy to read, understand, and maintain.

* **Example A (Messy):** `const x= function (z){ const w = "Hello "; return w + z } x("John");`
    * Uses single-letter variables (`x`, `z`, `w`).
    * Inconsistent indentation and spacing.
    * Confusing and messy.

* **Example B (Clean):** `const generateUserGreeting = function (name) { const greeting = "Hello "; return greeting + name; }; generateUserGreeting("John");`
    * Uses meaningful names (`generateUserGreeting`, `name`, `greeting`).
    * Consistent indentation and spacing.
    * Much more readable, even though it performs the exact same task.

---

### ✍️ Naming Conventions

* **`camelCase`**: A common convention where the first word is lowercase and subsequent words start with a capital letter (e.g., `generateUserGreeting`). Use this for variables and functions.
* **Descriptive Naming**: A good name should clearly suggest what the variable or function does.
    * **Good:** `generateUserGreeting`, `greeting`
    * **Bad:** `x`, `z`, `w`
* **Consistent Vocabulary**: Use the same naming system for similar items.
    * **Consistent:** `getPlayerScore()`, `getPlayerName()`, `getPlayerTag()`
    * **Inconsistent:** `getUserScore()`, `fetchPlayerName()`, `retrievePlayer1Tag()`
* **Grammar for Naming**:
    * **Variables**: Preferably start with a noun or adjective (e.g., `numberOfThings`, `myName`, `selected`).
    * **Functions**: Should represent an action, so they should ideally begin with a verb (e.g., `getCount()`).
* **Searchable Names**: Avoid "magic values" (explicit, unexplained numbers or strings).
    * **Bad:** `setTimeout(stopTimer, 3600000);`
    * **Good:** `const ONE_HOUR = 3600000; setTimeout(stopTimer, ONE_HOUR);`
    * Use `ALL_CAPS` for variables that are truly constant (e.g., `ONE_HOUR`).

---

### 🖥️ Formatting and Structure

* **Indentation**: Be consistent. It doesn't matter if you use tabs or spaces, as long as you stick to one method.
* **Line Length**: Keep lines to about 80 characters for readability. When breaking a long line, break it after an operator or a comma.
* **Semicolons**: While optional in JavaScript, it is recommended to use them consistently to avoid potential bugs.

---

### 💬 The Role of Comments

Comments can be a great tool but are often misused.

* **Don't use comments to track changes**: Use **Git** for this purpose. Comments like `// 2023-01-10: Removed unnecessary code (RM)` are bloat.
* **Don't comment out unused code**: Delete it. You can always retrieve it from your Git history if needed.
* **Tell "why," not "how"**:
    * **Bad**: Comments that just restate what the code is doing (e.g., `// Return the string starting after the "["...`).
    * **Good**: Comments that explain the reason behind the code or provide context (e.g., `// The formula for BMI is weight in kilograms divided by height in meters squared`).
* **Prefer Self-Documenting Code**: Use clear function and variable names to make the code's purpose obvious, reducing the need for comments.

---

### 🧠 Conclusion

Writing clean code is a continuous journey of improvement. Don't aim for perfection immediately. By consistently applying these principles, your code will become cleaner and more maintainable over time.

"Great code comes from experience. Experience comes from not-so-great code."

---

### 📚 Additional Resources

* 10 Principles for Keeping Your Programming Code Clean
* How to code without comments
* Airbnb style guide
* Clean code in JavaScript