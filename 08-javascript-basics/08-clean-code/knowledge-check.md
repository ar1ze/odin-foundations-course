### Knowledge Check Answers 🎯

---

#### Question: Why is it important to write clean code?

**Answer:** It's important because you and other developers will spend far more time **reading** code than writing it.

**Why:** Clean code is easy to understand, debug, and modify. Investing a little time to write cleanly now saves a massive amount of time and prevents future headaches when you (or a teammate) have to revisit the code later.

**Remember:** Write code for **humans** first, computers second. 🧑➡️🤖

---

#### Question: What are some good principles for keeping code clean?

**Answer:** Some of the most important principles are: use clear and descriptive names for variables and functions, keep your functions small and focused on a single task, and follow the **D.R.Y.** (Don't Repeat Yourself) principle.

**Why:**
* **Descriptive names** make your code self-documenting.
* **Small, single-purpose functions** are easier to understand, test, and reuse.
* **D.R.Y.** prevents bugs by ensuring that a piece of logic only exists in one place, so you only have to update it once.

**Example:**
* **Bad name:** `let d;`
* **Good name:** `let daysSinceLastLogin;`

---

#### Question: What is the difference between good comments and bad comments?

**Answer:** **Good comments** explain the **"why"** behind a piece of code. **Bad comments** just restate the **"what"**, which the code should already make clear.

**Why:** Your code itself should be readable enough to explain *what* it's doing. Comments are valuable when you need to add context that the code can't provide, such as explaining the reason for a complex business rule or a specific technical choice.

**Example:**
* **Bad Comment:** `// Add 1 to the score` followed by `score++;`
* **Good Comment:** `// The user gets a bonus point for finishing under 30 seconds` followed by `score++;`