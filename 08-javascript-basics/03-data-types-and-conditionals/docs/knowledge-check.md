### Knowledge Check Answers 🎯

-----

#### Question: What are the eight data types in JavaScript?

**Answer:** The eight data types are **String**, **Number**, **BigInt**, **Boolean**, **Undefined**, **Null**, **Symbol**, and **Object**.

**Why:** These are the fundamental categories of values that you can work with in JavaScript. The first seven are "primitive" types, meaning they hold a single, simple value.

-----

#### Question: Which data type is NOT primitive?

**Answer:** The **Object** data type is not primitive.

**Why:** While primitive types hold a single value (like a number or a string), an object is a complex data type that can hold a collection of key-value pairs. Arrays and functions are also types of objects.

-----

#### Question: What is the relationship between null and undefined?

**Answer:** Both `null` and `undefined` represent the absence of a value, but `undefined` is typically an accidental absence, while `null` is an intentional absence.

**Why:** A variable that has been declared but not assigned a value is `undefined`. In contrast, a developer might explicitly assign `null` to a variable to indicate that it has "no value" on purpose.

-----

#### Question: What is the difference between single, double, and backtick quotes for strings?

**Answer:** **Single (`'`)** and **double (`"`)** quotes are functionally identical for creating simple strings. **Backticks (`` ` ``)** create special strings called "template literals" that allow for embedded expressions and multi-line text.

**Why:** Template literals (backticks) provide more power and convenience, especially when you need to insert variable values into a string.

-----

#### Question: What is the term for joining strings together?

**Answer:** The term is **concatenation**.

**Why:** This refers to the process of linking strings end-to-end, which is most often done in JavaScript using the `+` operator.

**Example:** `'Hello' + ' ' + 'World'` results in `"Hello World"`.

-----

#### Question: Which type of quote lets you embed variables/expressions in a string?

**Answer:** **Backticks (`` ` ``)** are used to create template literals, which allow you to embed variables and expressions.

-----

#### Question: How do you embed variables/expressions in a string?

**Answer:** Within a template literal (a string made with backticks), you wrap the variable or expression inside `${...}`.

**Why:** This syntax is called "string interpolation." It tells JavaScript to evaluate the code inside the curly braces and insert the result directly into the string.

**Example:** `let name = 'Bob'; let greeting = \`Hi, my name is ${name}.\`;\` // "Hi, my name is Bob."

-----

#### Question: How do you use escape characters in a string?

**Answer:** You use a **backslash (`\`)** before a character to give it a special meaning or to prevent it from being interpreted as code.

**Why:** This allows you to include characters that would otherwise be impossible to put in a string, such as a newline (`\n`) or a quote that matches the string's outer quotes (`\'`).

**Example:** `let message = 'It\'s a sunny day.';`

-----

#### Question: What is the difference between the slice/substring string methods?

**Answer:** They are very similar, but `slice()` is more flexible and predictable. `slice()` can accept negative indices to count from the end of the string, while `substring()` cannot. Also, if the start index is larger than the end index, `substring()` will swap them, while `slice()` will just return an empty string.

**Why:** Because of its ability to handle negative indices and its more straightforward behavior, `slice()` is generally preferred over `substring()`.

-----

#### Question: What are the three logical operators, and what do they stand for?

**Answer:** The three logical operators are:

  * **`&&`** (Logical **AND**)
  * **`||`** (Logical **OR**)
  * **`!`** (Logical **NOT**)

**Why:** These operators are essential for creating conditional logic by combining or inverting `true`/`false` values.

-----

#### Question: What are the comparison operators?

**Answer:** The main comparison operators are `===` (strict equality), `!==` (strict inequality), `>` (greater than), `<` (less than), `>=` (greater than or equal to), and `<=` (less than or equal to).

**Why:** These operators are used to compare two values, and the result of the comparison is always a boolean value (`true` or `false`).

-----

#### Question: What are truthy and falsy values?

**Answer:** A **falsy** value is a value that JavaScript treats as `false` when used in a boolean context (like in an `if` statement). A **truthy** value is any value that is treated as `true`.

**Why:** This concept allows you to write concise conditional checks, as you can check the "truthiness" of a value directly without needing to compare it to `true`.

-----

#### Question: What are the falsy values in JavaScript?

**Answer:** There are eight falsy values in total: **`false`**, **`0`**, **`-0`**, **`0n`** (BigInt zero), **`""`** (an empty string), **`null`**, **`undefined`**, and **`NaN`**.

**Why:** Every other value in JavaScript, including empty arrays (`[]`) and empty objects (`{}`), is considered **truthy**.

-----

#### Question: What are conditionals?

**Answer:** **Conditionals** are code structures that allow a program to make decisions and execute different blocks of code based on whether a certain condition is `true` or `false`.

**Why:** They are the fundamental building block of logic in programming, allowing your code to respond differently to different situations.

-----

#### Question: What is the syntax for an if/else conditional?

**Answer:** An `if` statement executes a block of code if a specified condition is true. An optional `else` block can be added to execute code if the condition is false.

**Example:**

```javascript
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

-----

#### Question: What is the syntax for a switch statement?

**Answer:** A `switch` statement evaluates a single expression and executes code from one of several `case` blocks depending on the expression's value.

**Why:** It can be a cleaner alternative to a long `if...else if...else` chain.

**Example:**

```javascript
switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}
```

-----

#### Question: What is the syntax for a ternary operator?

**Answer:** The ternary operator is a compact, one-line conditional with the syntax: `condition ? expressionIfTrue : expressionIfFalse;`.

**Why:** It's a useful shorthand for a simple `if/else` statement, especially when assigning a value to a variable based on a condition.

**Example:** `let price = isMember ? 10 : 20;`

-----

#### Question: What is nesting?

**Answer:** **Nesting** means placing one programming structure inside another of the same or similar type.

**Why:** It allows you to build more complex logic and data hierarchies.

**Example:** You can nest an `if` statement inside another `if` statement to check a secondary condition only if the first condition is true.