# Problem Solving: Foundations 💡

-----

Problem solving is the most important skill for a developer. It's the core of what software developers do, with programming languages and tools being secondary.

V. Anton Spraul defines it as: "writing an original program that performs a particular set of tasks and meets all stated constraints."

New programmers often find this the hardest skill. The best way to improve is through practice: building lots of programs.

## Lesson Overview 📚

-----

  * Explain the three steps in the problem-solving process.
  * Explain what pseudocode is and how to use it.
  * Break a problem down into subproblems.

## The Problem-Solving Process 📝

-----

### 1\. Understand the Problem 🤔

  * You can't solve a problem you don't understand.
  * **Tactics:** Write it down, reword it in plain English, draw diagrams.
  * You understand it when you can explain it to someone else.

### 2\. Plan 🗺️

  * Don't jump straight to coding. Plan first.
  * **Questions to ask:**
      * Does the program need a user interface? What will it look like? (Sketch it out)
      * What inputs will the program have?
      * What is the desired output?
      * What are the necessary steps to get from input to output? (This is the algorithm)

### 3\. Pseudocode ✍️

  * Writing out program logic in natural language, not code.
  * Helps you slow down and think through the steps.
  * **Example:**
    ```
    When the user inputs a number
    Initialize a counter variable and set its value to zero
    While counter is smaller than user inputted number
    increment the counter by one
    Print the value of the counter variable
    ```

### 4\. Divide and Conquer ⚔️

  * Break the big problem into smaller, simpler subproblems.
  * Start by coding the smallest or simplest subproblem.
  * Solving one subproblem often reveals the next step.
  * Avoid trying to solve the entire complex problem at once. Decomposition makes problems more approachable.

## Example: Solving Fizz Buzz 🎯

-----

### Understanding the Problem 📖

  * **Initial problem:** Write a program that prints numbers from 1 to a user-entered number.
      * Multiples of 3: print "Fizz"
      * Multiples of 5: print "Buzz"
      * Multiples of both 3 and 5: print "FizzBuzz"
  * **Reworded for clarity:** Program allows user to enter a number, prints each number, but substitutes "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

### Planning 🗓️

  * **Interface:** Browser console program, no complex UI.
  * **Input:** User enters a number via a prompt.
  * **Output:** A list of numbers/strings based on the FizzBuzz rules.

### Pseudocode for FizzBuzz 💻

  * When a user inputs a number
  * Loop from 1 to the entered number
  * If the current number is divisible by 3 and 5, then print "FizzBuzz"
  * Else if the current number is divisible by 3, then print "Fizz"
  * Else if the current number is divisible by 5, then print "Buzz"
  * Otherwise, print the current number

### Dividing and Conquering the Code 🧩

1.  **Get user input:** Use `prompt` and `parseInt` in JavaScript.
    ```javascript
    let answer = parseInt(prompt("..."));
    ```
2.  **Loop from 1 to the number:** Use a `for` loop.
    ```javascript
    for (let i = 1; i <= answer; i++) { ... }
    ```
3.  **Check divisibility by 3:** Use the modulus operator `%`.
    ```javascript
    if (i % 3 === 0) { console.log("Fizz"); } else { console.log(i); }
    ```
4.  **Check divisibility by 5:** Add an `else if` condition.
    ```javascript
    if (...) { ... } else if (i % 5 === 0) { console.log("Buzz"); } else { ... }
    ```
5.  **Check divisibility by both 3 and 5:** This is the most important part\!
      * Move the `i % 3 === 0 && i % 5 === 0` check to the top of the `if/else if` chain.
      * This ensures "FizzBuzz" is printed for numbers like 15 before the code checks for "Fizz" or "Buzz" individually.

## Assignment & Resources 📚

-----

  * **Read:**
      * "How to Think Like a Programmer - Lessons in Problem Solving" by Richard Reis.
      * "Pseudocode: What It Is and How to Write It" article.
  * **Watch:**
      * "How to Begin Thinking Like a Programmer" by Coding Tech.
      * Jonathan Blow on solving hard problems.
      * Video on repetitive programming techniques.
  * **Book:** "Think Like a Programmer: An Introduction to Creative Problem Solving" (paid, but highly recommended).

## Knowledge Check ✅

-----

  * What are the three stages in the problem-solving process?
  * Why is it important to clearly understand the problem?
  * What is an algorithm?
  * What is pseudocode?
  * What are the advantages of breaking down a problem?