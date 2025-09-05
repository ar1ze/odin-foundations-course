# Variables and Operators 🖥️

-----

### Introduction 📝

  * **HTML** structures webpages.
  * **CSS** styles webpages.
  * **JavaScript** makes webpages interactive.
  * This lesson covers the fundamentals of JavaScript to manipulate web page interactions.

### Lesson Overview 🗺️

  * Running JavaScript in an HTML file.
  * Declaring variables (`let`, `const`).
  * Performing number and string operations.
  * Using logical and mathematical operators.

-----

### How to Run JavaScript Code ▶️

  * The majority of JavaScript in the Foundations course runs in the browser.
  * To get started, create an **HTML file** with a `<script>` tag.
  * Use `console.log()` to print output to the browser's developer console.
  * **To view the console:** Right-click a webpage, select "Inspect," and click the "Console" tab.
  * For more complex scripts, use an **external JavaScript file** with a `.js` extension, linked via `<script src="filename.js"></script>`.

-----

### Variables 📦

  * Variables are "storage containers" for data.
  * **`let`**: Declares a variable that can be re-assigned.
    ```javascript
    let age = 11;
    age = 54; // re-assigned
    ```
  * **`const`**: Declares a constant variable that **cannot** be re-assigned. Trying to re-assign a `const` will throw an error.
    ```javascript
    const pi = 3.14;
    pi = 10; // This will cause an error
    ```
  * **`var`**: The original way to declare variables. It's similar to `let` but has quirks and is no longer widely used.

-----

### Numbers 🔢

  * Numbers are fundamental for programming logic and math operations.
  * JavaScript can evaluate mathematical expressions, e.g., `(3 + 2) - 76 * (1 + 1)`.

### Assignment Exercises ✍️

  * Add numbers: `console.log(23 + 97);` should log `120`.
  * Use variables: Declare `let a = 10;`, log it, re-assign it, and then declare `let b = 7 * a;` and log `b`.
  * Practice with `const`:
    ```javascript
    const max = 57;
    const actual = max - 13;
    const percentage = actual / max;
    console.log(percentage); // should log 0.7719...
    ```

-----

### Knowledge Check 🤔

  * **Variable keywords:** `let`, `const`, `var`.
  * **Avoid:** `var` due to its quirks.
  * **NaN:** `Not a Number` result.
  * **Operators:** Understand `==` vs `===` and modulo (`%`).
  * **Increment/Decrement:** `++` and `--` operators.
  * **Operator Precedence:** The order in which operations are performed.
  * **Console:** How to access developer tools and use `console.log()`.
  * **Unary Plus:** The `+` operator can convert string numbers to integers, e.g., `+"10"` becomes `10`.