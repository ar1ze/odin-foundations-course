# Git Basics 💻

---

## Introduction 📖

This lesson covers the basic Git workflow, including common commands for managing projects and uploading work to GitHub. You'll use these commands 70-80% of the time when working with Git.

## Lesson Overview 🚀

* How to create a repository on GitHub.
* How to get files to and from GitHub.
* How to take “snapshots” of your code.

## Assignment: Create and Clone a Repository 📋

### Before You Start!

* Check your Git version: `git --version`
* Set your default branch to `main`: `git config --global init.defaultBranch main`

### Create the Repository

1.  On GitHub, click the **“+”** button and select **“New repository.”**
2.  Name it `git_test`.
3.  Check **“Add a README file.”**
4.  Click **“Create repository.”**

### Clone the Repository

1.  On your new GitHub repository page, click the green **“Code”** button.
2.  Select the **SSH** option and copy the URL.
3.  In your terminal, create a projects directory: `mkdir repos`
4.  Move into it: `cd repos/`
5.  Clone the repository: `git clone git@github.com:USER-NAME/REPOSITORY-NAME.git`
6.  Test the connection by moving into the new folder and checking the remote:
    * `cd git_test`
    * `git remote -v`
    * You should see `origin` and the repository URL.

## The Basic Git Workflow 🔄

### Creating and Staging a File

1.  Create a file: `touch hello_world.txt`
2.  Check the file's status: `git status` (it will be red, **"Untracked files"**).
3.  Stage the file: `git add hello_world.txt`
4.  Check status again: `git status` (it will be green, **"Changes to be committed"**).

### Committing Your Changes

1.  Commit the staged file with a message: `git commit -m "Add hello_world.txt"`
2.  Check status again: `git status` (should say **"nothing to commit, working tree clean"**).
3.  View your commit history: `git log`

### Modifying and Committing Files

1.  Open `README.md` and add "Hello Odin!". Save it.
2.  In the terminal, check the status: `git status` (will be in **"Changes not staged for commit"**).
3.  Stage the file: `git add README.md`
4.  You can use `git add .` to stage all modified files in the current directory.
5.  Commit all staged changes: `git commit -m "Edit README.md and hello_world.txt"`
6.  Check the log: `git log` (you should now see three entries).

### Pushing to GitHub

1.  Push your local commits to the remote repository: `git push origin main` (or simply `git push`).
2.  Check your final status: `git status` (should say **"Your branch is up to date..."**).
3.  Refresh your GitHub page to see your pushed files.

## Cheatsheet 📜

---

### Remote Repository Commands
* `git clone git@github.com:USER-NAME/REPOSITORY-NAME.git`
* `git push` or `git push origin main`

### Workflow Commands
* `git add .`
* `git commit -m "A descriptive message"`

### Status and History Commands
* `git status`
* `git log`

## Git Best Practices ✅

---

* **Atomic Commits:** Make commits that include changes related to only one feature or task. This makes it easy to revert specific changes and write clear commit messages.
* **Useful Commit Messages:** Leveraging atomic commits allows for more descriptive and helpful commit messages.

## Knowledge Check 🤔

---

* How do you create a new repository on GitHub?
* How do you copy a repository to your local machine from GitHub?
* What is the default name of your remote connection?
* Explain `origin` and `main` in the command `git push origin main`.
* Explain the two-stage system (staging and committing).
* How do you check the status of your repository?
* How do you add files to the staging area?
* How do you commit files?
* How do you push changes to GitHub?
* How do you look at commit history?