# Command Line Basics 🖥️

---

### Introduction 🚀

The command line interface (**CLI**) is a blank screen or window where you enter commands for your computer to run. It's a fundamental skill for developers and acts as a central hub for launching programs and interacting with them. Learning the CLI syntax is crucial, and you'll quickly master the most-used commands through repetition. This lesson teaches you how to navigate your computer and manage files and directories directly from the command line.

### Lesson Overview 📝

* **Describe** what the command line is.
* **Open** the command line on your computer.
* **Navigate** directories and display their contents.
* **Create** a new directory and a new file.
* **Rename** or **destroy** a directory and a file.
* **Open** a file or folder in a program.

### Terminal Setup & First Commands ⌨️

---

* **Linux**: Search for "Terminal" in the programs menu or press **`Ctrl + Alt + T`**.
* **macOS**: Find "Terminal" in **`Applications > Utilities`** or use Spotlight search (**`Cmd + Space`**) and type "Terminal."
* The terminal prompt, which looks like **`$`** (Linux/older Macs) or **`%`** (newer Macs), indicates it's ready for a command.
* **`whoami`**: A basic command to return your username.

### Key Skills & Shortcuts ✨

---

* **Typing Passwords**: When entering a password (e.g., with `sudo`), characters won't appear. This is a security feature. Type your password normally and press Enter.
* **Copy & Paste**: Use **`Ctrl + Shift + C`** to copy and **`Ctrl + Shift + V`** to paste in the command line. (On Mac, use **`Cmd + C`** and **`Cmd + V`**).
* **Tab Completion**: Hit the **`Tab`** key to automatically complete commands or file/directory names. This saves a lot of typing and prevents errors.
* **The Dot Shortcut (`.`)**: The single dot represents your current directory. It's used for commands that affect everything in the current folder, such as `git add .` or `code .` to open a project in a code editor like VS Code.

### Opening Files in VS Code 📂

---

* **Linux**: Type **`code`** followed by the file or folder name: `code my_awesome_project/`.
* **macOS**: Install the **`'code'`** command by opening the Command Palette (**`Cmd + Shift + P`**) in VS Code, searching for "shell command," and selecting **`Shell Command: Install 'code' command in PATH`**.
* **WSL2**: Simply type **`code`** to open VS Code.

### Practice & Assignment 🎯

---

1.  **Create a `Desktop` folder** (if you don't have one):
    * Navigate to your home directory: **`cd ~`**
    * Create the folder: **`mkdir Desktop`**
    * Verify: **`ls`**
2.  **Complete lessons** from The Unix Shell course by Software Carpentry Foundation, focusing on:
    * `Introducing the Shell`
    * `Navigating Files and Directories`
    * `Working With Files and Directories`
3.  **Hands-on Practice**:
    * Create a new directory named **`test`** in your home directory.
    * Navigate into it.
    * Create a file named **`test.txt`** using the **`touch`** command.
    * Open `test.txt` in VS Code, make changes, save, and close.
    * Navigate back out of the `test` directory.
    * Delete the **`test`** directory.

### Knowledge Check ✅

---

* What is the command line?
* How do you open the command line?
* How do you navigate to a directory?
* What do `cd` and `cd ..` do?
* How do you display the current directory's name and its contents?
* How do you create a new directory and a new file?
* How do you destroy or rename a directory or file?