### Knowledge Check Answers 🎯

---

#### Question: What three keywords can you use to declare new variables?

**Answer:** You can use **`let`**, **`const`**, and **`var`**.

**Why:** These keywords tell JavaScript you're creating a variable. Use `let` for variables that will be reassigned, and `const` for variables that should never be reassigned (constants). `var` is the old, pre-ES6 way of declaring variables.

**Remember:** **`let`** it change, keep it **`const`**-ant.

---

#### Question: Which of the three variable declarations should you avoid and why?

**Answer:** You should avoid using **`var`**.

**Why:** `var` has confusing behavior related to its scope (where it's available) that can lead to unexpected bugs. `let` and `const` were introduced to fix these issues, making them much safer and more predictable to work with.

---

#### Question: What rules should you follow when naming variables?

**Answer:** Names can include letters, numbers, underscores, and dollar signs, but **cannot start with a number**. They are case-sensitive, and the community standard is to use **`camelCase`**.

**Why:** Following these syntax rules and conventions is essential for writing valid code that other developers (and your future self) can easily read and understand.

**Example:** A good name is `let numberOfStudents;`. A bad name is `let 2cool;`.

---

#### Question: What happens when you add numbers and strings together?

**Answer:** The number is converted into a string, and the two strings are **concatenated** (joined together).

**Why:** This is a process called "type coercion." When the `+` operator sees a string, it prioritizes concatenation over mathematical addition.

**Example:** `12 + "apples"` results in the string `"12apples"`, not an error.

---

#### Question: How does the Modulo (%), or Remainder, operator work?

**Answer:** The modulo operator (`%`) performs a division and returns the **remainder**.

**Why:** It's very useful for tasks like checking if a number is even or odd (an even number `% 2` will always be `0`) or cycling through a limited set of numbers.

**Example:** `10 % 3` is `1` because 10 divided by 3 is 3 with a remainder of 1.

---

#### Question: What’s the difference between `==` and `===`?

**Answer:** **`===` (strict equality)** checks for both equal **value AND equal type**. **`==` (loose equality)** only checks for equal **value**, and will perform type coercion to make them match.

**Why:** You should almost always use the strict `===` operator to avoid unexpected bugs caused by JavaScript's automatic type coercion.

**Example:** `5 === "5"` is `false`, but `5 == "5"` is `true`.

**Remember:** Use the **strict** one (three `=`) for safer comparisons. ✅

---

#### Question: When would you receive a `NaN` result?

**Answer:** You get `NaN` (which means "Not-a-Number") when a mathematical operation fails or results in a value that cannot be represented as a valid number.

**Why:** It is JavaScript's way of indicating an impossible or meaningless numerical calculation.

**Example:** `0 / 0` or `10 * "some text"` will both produce `NaN`.

---

#### Question: How do you increment and decrement a number?

**Answer:** You can use the increment operator (`++`) to add 1 and the decrement operator (`--`) to subtract 1.

**Why:** These are simple shorthand operators that are more concise than writing `myNumber = myNumber + 1`.

**Example:** If `let score = 10;`, then `score++;` will make `score` equal to `11`.

---

#### Question: What’s the difference between prefixing and postfixing increment/decrement operators?

**Answer:** The **prefix** operator (`++x`) increments the value and then returns it. The **postfix** operator (`x++`) returns the original value and then increments it.

**Why:** The order matters when you use the result of the operation in the same line of code.

**Example:**
* **Prefix:** `let x = 3; let y = ++x;` // `y` is 4, `x` is 4
* **Postfix:** `let x = 3; let y = x++;` // `y` is 3, `x` is 4

**Remember:** **Pre**fix changes **pre**viously (before). **Post**fix changes **post** (after).

---

#### Question: What is operator precedence and how is it handled in JS?

**Answer:** **Operator precedence** determines the order in which operators are evaluated in a complex expression. JavaScript follows the same standard mathematical order of operations (PEMDAS/BODMAS).

**Why:** This ensures that expressions are calculated in a consistent and predictable way. Multiplication and division are always done before addition and subtraction, unless you use parentheses `()` to force a different order.

**Example:** `3 + 4 * 5` is `23`, not `35`.

---

#### Question: How do you access developer tools and the console?

**Answer:** You can **right-click** on a webpage and select **"Inspect"**, or use a keyboard shortcut like **F12** or **Ctrl+Shift+I** (Windows) / **Cmd+Opt+I** (Mac). The console is usually one of the tabs in the tools that appear.

---

#### Question: How do you log information to the console?

**Answer:** You use the **`console.log()`** method.

**Why:** This is the most common way for developers to print out values, messages, and variable states to help them debug their code and see what's happening behind the scenes.

**Example:** `console.log("The value of my variable is:", myVariable);`

---

#### Question: What does unary plus operator do to string representations of integers? eg. +”10”

**Answer:** The unary plus operator (`+`) attempts to **convert its operand into a number**.

**Why:** It's a very concise way to perform type conversion from a string to a number.

**Example:** `+"10"` will result in the number `10`. `+"hello"` will result in `NaN`.