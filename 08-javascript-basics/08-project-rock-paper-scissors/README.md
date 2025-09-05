# Project: Rock Paper Scissors

### 📝 Foundations Course

---

## Introduction 🎮

This project involves creating the classic game **Rock Paper Scissors**, to be played entirely in the console.

Some student solutions may include a graphical user interface (GUI), but this project focuses on the console-based game. Remember to commit your code to GitHub.

## Problem Solving Approach 🧠

For each step of this project, follow this three-step process:

* **Plan** or pseudocode your solution.
* **Write** the code.
* **Test** your code to ensure it works correctly.

## Assignment Overview 💻

Remember to commit early and often!

### Step 1: Project Setup 🛠️

* Create a new Git repository.
* Create a blank HTML document with a `<script>` tag.
* Link to an external JavaScript file for better organization.
* Test the link by writing `console.log("Hello World")` and checking the browser console.

### Step 2: Computer’s Choice 🤖

* Create a function named `getComputerChoice`.
* This function should randomly return one of three strings: “rock”, “paper”, or “scissors”.
* **Hint:** Use `Math.random()` to help with conditional returns.
* Test the function to ensure it works as expected before moving on.

### Step 3: Human’s Choice 👤

* Create a function named `getHumanChoice`.
* This function should return the user’s input.
* **Hint:** Use the `prompt()` method to get the user’s input.
* For now, assume the user will always enter a valid choice.
* Test the function using `console.log`.

### Step 4: Player Scores 📊

* Declare two global variables: `humanScore` and `computerScore`.
* Initialize both variables with a value of 0.

### Step 5: Playing a Single Round 🥊

* Create a function named `playRound` with two parameters: `humanChoice` and `computerChoice`.
* Make the `humanChoice` parameter **case-insensitive**.
* Write the logic to compare the choices, increment the winner’s score, and log the outcome (e.g., “You lose! Paper beats Rock”).

### Step 6: Playing the Entire Game 🏆

* Create a function named `playGame`.
* Move the `playRound` function and score variables inside `playGame`.
* Call `playRound` five times to play 5 rounds of the game.
* The function should keep track of scores and declare a final winner at the end.
* **Hint:** You'll need to call your choice functions to get a new choice for each round.