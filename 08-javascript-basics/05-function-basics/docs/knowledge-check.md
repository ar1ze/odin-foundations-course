### Knowledge Check Answers 🎯

---

#### Question: What are the functions useful for?

**Answer:** Functions are useful for packaging up reusable blocks of code that perform a specific task.

**Why:** Instead of rewriting the same logic over and over, you can define it once in a function and then call that function whenever you need it. This keeps your code organized, readable, and easy to maintain, following the **D.R.Y.** (Don't Repeat Yourself) principle.

**Remember:** Functions are like recipes; you write the instructions once and can use them to cook the same dish many times. 🍳

---

#### Question: How do you invoke a function?

**Answer:** You invoke (or "call") a function by typing its name followed by a set of parentheses `()`.

**Why:** The parentheses are the operator that tells JavaScript to execute the code contained within the function. If the function accepts arguments, you place them inside the parentheses.

**Example:** If you have a function defined as `function sayHello() {}`, you would invoke it with `sayHello();`.

---

#### Question: What are anonymous functions?

**Answer:** An **anonymous function** is a function that is defined without a name.

**Why:** They are often used when a function is created to be used immediately as an argument to another function or when assigned to a variable (which is called a function expression).

**Example:** In `const greet = function() { alert("Hi!"); };`, the function itself is anonymous, but it is assigned to the `greet` variable.

---

#### Question: What is function scope?

**Answer:** **Function scope** is the principle that variables declared inside a function are only accessible *within* that function.

**Why:** This prevents variables from conflicting with other variables in different parts of your program. It acts as a protective bubble, keeping the function's inner workings self-contained.

**Remember:** What happens in the function, stays in the function. Vegas rules! 🎰

---

#### Question: What are return values?

**Answer:** A **return value** is the value that a function sends back after it has finished its task.

**Why:** This allows a function to not only perform an action but also to produce an output that can be stored in a variable or used by another part of your program.

**Example:** The function `function add(a, b) { return a + b; }` returns the sum of its two arguments. You could capture this value like so: `let sum = add(5, 3);`.

---

#### Question: What are arrow functions?

**Answer:** **Arrow functions** (`=>`) are a more compact and modern syntax for writing function expressions.

**Why:** They provide a shorter way to write functions, which is especially useful for simple, one-line operations.

**Example:**
* **Traditional expression:** `const add = function(a, b) { return a + b; };`
* **Arrow function:** `const add = (a, b) => a + b;`

---

#### Question: What is the difference between a function declaration and a function expression?

**Answer:** A **function declaration** is a standalone statement that defines a named function (`function myFunction() {}`). A **function expression** defines a function as part of a larger expression, typically when assigning it to a variable (`const myFunction = function() {};`).

**Why:** The biggest practical difference is **hoisting**. Function declarations are hoisted, meaning the browser knows about them before executing any code, so you can call them before they appear in your script. Function expressions are not hoisted, so you can only call them after they have been defined.