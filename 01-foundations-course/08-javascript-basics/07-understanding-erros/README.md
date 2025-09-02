# Understanding Errors 🐞

-----

Reading and understanding error messages is a key skill for developers. Error messages are a valuable source of information that can help you resolve issues. Being able to parse error messages and warnings effectively will enable you to debug applications, get meaningful help, and push forward when faced with errors.

## Lesson Overview 💡

-----

  * Name at least three kinds of JavaScript errors.
  * Identify two parts of an error message that help you find where the error originates.
  * Understand how to research and resolve errors.

## The Anatomy of an Error 🔬

-----

An **error** is a type of object in the JS language with a **name/type** and a **message**. This information is crucial for locating, understanding, and resolving the error.

**Example Code:**

```javascript
const a = "Hello";
const b = "World";
console.log(c);
```

This code throws a **ReferenceError**. The error type is the first clue. A **ReferenceError** is thrown when a variable is not declared or initialized within the current scope.

**Key Parts of an Error Message:**

  * **Error Type:** Identifies the kind of error (e.g., `ReferenceError`, `SyntaxError`, `TypeError`).
  * **Error Message:** Explains why the error occurred (e.g., `c is not defined`).
  * **File Name and Line Number:** Pinpoints the exact location of the error in your code (e.g., `script.js:4`).
  * **Stack Trace:** Helps you understand the sequence of function calls that led to the error. This traces the evolution of an error back to its origin.

## Common Types of Errors 💥

-----

  * **SyntaxError:** Occurs when code is not written according to JavaScript's grammatical rules.
      * **Example:** Forgetting parentheses for a function call.
  * **ReferenceError:** Arises when you try to reference a variable that does not exist or is misspelled.
  * **TypeError:** Thrown when an operand, argument, or value is incompatible with the expected type or operation.
      * **Example:** Trying to use an array method like `.push()` on a string.

## Tips for Resolving Errors 🛠️

-----

  * **Understand the Error Message:** It's your friend, not your enemy. It tells you exactly what's wrong and where to look.
  * **Google the Error:** Searching the error message often leads to solutions on sites like Stack Overflow or documentation.
  * **Use the Debugger:** A critical tool for troubleshooting. You can set breakpoints, view variable values, and step through code line by line.
  * **Use the Console:** `console.log()` is great for quick debugging and getting immediate feedback. Other useful methods include `console.table()` and `console.trace()`.

## Errors vs. Warnings 🚨

-----

  * **Errors:** Stop the execution of your program. Typically shown in red.
  * **Warnings:** Provide insight into potential problems but do not stop program execution. Often informational and shown in yellow. While less significant than errors, you should still address warnings.

## Assignment & Resources 📚

-----

  * Review MDN documentation for **ReferenceError**, **SyntaxError**, and **TypeError**.
  * Work through “What went wrong? Troubleshooting JavaScript” and practice with intentional errors.
  * **Additional Resources:**
      * [MDN JavaScript Errors Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
      * W3schools article on window console object methods.
      * Steve Griffith’s video on the Chrome devtools Console.