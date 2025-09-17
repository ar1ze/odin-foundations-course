# Project: Recipes 🍝

This project, part of the **Foundations Course**, focuses on building a basic recipe website to practice **HTML knowledge**. The final website will not be styled with CSS, as the primary goal is to improve HTML skills.

---

## Setting Up Your Project's GitHub Repository ⚙️

* **Organize** your projects like a portfolio and link them to **GitHub**.
* **Avoid creating files directly on GitHub.com** after cloning to prevent version conflicts.
* **Follow these steps** to set up your repository:
    1.  Create a new public repository on GitHub called **odin-recipes**.
    2.  Clone the repository to your local machine: `git clone git@github.com:username/odin-recipes.git` (use SSH).
    3.  Navigate into the project directory: `cd odin-recipes`.
    4.  Create and write a brief introduction in the **README.md** file.

### Tips on Git 💡

* All Git commands must be run from inside your project folder.
* Commit **early and often** to create a timeline of your progress.
* Use `git add`, `git commit`, and `git push origin main` to manage and upload your changes.

---

## Warning About Looking at Solutions ⚠️

* Looking at student solutions robs you of the chance to develop your **problem-solving and researching skills**.
* Submitted projects are from other learners and may not represent **best practices**.
* An analogy: "Learning how to code from looking at completed code is like learning how to make pizza dough from looking at a baked pizza."
* **DO NOT PEEK.** Ask for help in the **Discord server** instead.

---

## Assignment 📝

### Iteration 1: Initial Structure

* Create an **index.html** file inside the `odin-recipes` directory.
* Add the basic HTML boilerplate and an `<h1>` heading with the text “Odin Recipes”.

### Iteration 2: Recipe Page

* Create a new directory named **recipes**.
* Inside the `recipes` directory, create a new HTML file for a recipe (e.g., **lasagna.html**).
* Add the usual boilerplate HTML and an `<h1>` heading with the recipe's name.
* In **index.html**, add a link to your recipe page: `<a href="recipes/recipename.html">Recipe Title</a>`.
* On the recipe page, add a link back to the index page for navigation: `<a href="../index.html">Home</a>`.

### Iteration 3: Recipe Page Content

* Add an image of the finished dish under the `<h1>` heading.
* Include a "Description" heading with a paragraph or two.
* Add an "Ingredients" heading with an **unordered list** (`<ul>`) of ingredients.
* Add a "Steps" heading with an **ordered list** (`<ol>`) of the instructions.

### Iteration 4: Add More Recipes

* Create **two more recipes** with identical page structures.
* Link to these new recipes from the **index.html** file.
* Consider using an **unordered list** (`<ul>`) to organize the links on the index page.

---

## Viewing Your Project on the Web 🌐

* To publish your project, ensure the main HTML file is named **index.html**.
* On your GitHub repository, go to **Settings > Pages**.
* Change the **Branch** to `main` and click **Save**.
* The project will be accessible at `your-github-username.github.io/your-github-repo-name`.