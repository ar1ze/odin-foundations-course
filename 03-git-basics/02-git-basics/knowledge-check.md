### Knowledge Check Answers 🎯

---

#### Question: How do you create a new repository on GitHub?

**Answer:** On the GitHub website, you click the "+" icon in the top-right corner and select **"New repository"**. You then fill out the repository name and click the green "Create repository" button.

**Why:** This creates a remote, cloud-based home for your project's code, which you can then connect to your local machine.

---

#### Question: How do you copy a repository onto your local machine from GitHub?

**Answer:** You use the `git clone` command in your terminal, followed by the URL of the repository you want to copy.

**Why:** This command downloads the entire project folder, including its full version history, from GitHub to your computer.

**Example:** `git clone https://github.com/TheOdinProject/css-exercises.git`

---

#### Question: What is the default name of your remote connection?

**Answer:** The default name for the remote connection is **`origin`**.

**Why:** When you `clone` a repository, Git automatically creates the nickname `origin` to refer to the URL you cloned from. This saves you from having to type out the full URL every time you want to interact with the remote repository.

**Remember:** **`origin`** is the *original* remote location of the project.

---

#### Question: Explain what `origin` is in `git push origin main`.

**Answer:** In that command, **`origin`** is the name of the **remote repository** you're sending your changes to.

**Why:** It tells Git *where* to push your commits. `origin` is the default shorthand for the GitHub URL your local project is connected to.

---

#### Question: Explain what `main` is in `git push origin main`.

**Answer:** In that command, **`main`** is the name of the **branch** you are pushing.

**Why:** It tells the remote repository (`origin`) which branch of your code you want to update with your new commits. `main` is the standard name for the primary branch of a project.

---

#### Question: Explain the two-stage system that Git uses to save files.

**Answer:** Git uses a two-stage system that involves a **staging area** and a **commit**. First, you add selected file changes to the staging area, and second, you save everything in the staging area as a permanent snapshot called a commit.

**Why:** This two-step process lets you be very deliberate about your commits. You can group related changes together into a single, meaningful commit, even if you made other unrelated changes at the same time.

**Remember:** 1. **Stage** your changes (put them "on deck"). 2. **Commit** the staged changes (save them to history). 💾

---

#### Question: How do you check the status of your current repository?

**Answer:** You use the `git status` command.

**Why:** This command is your main tool for seeing what's going on in your repository. It shows you which files have been modified, which files are staged, and which files Git isn't tracking.

---

#### Question: How do you add files to the staging area in Git?

**Answer:** You use the `git add` command followed by the name of the file(s).

**Why:** This command tells Git that you want to include the updates to a specific file in your next commit.

**Example:** `git add index.html` will stage only the `index.html` file. `git add .` is a useful shortcut to stage all modified files in the current directory.

---

#### Question: How do you commit the files in the staging area and add a descriptive message?

**Answer:** You use the `git commit -m "A descriptive message"` command.

**Why:** This takes all the changes currently in the staging area and saves them as a new snapshot in your project's history. The `-m` flag allows you to add a required message explaining *what* you changed and *why*.

**Example:** `git commit -m "Create initial HTML structure for homepage"`

---

#### Question: How do you push your changes to your repository on GitHub?

**Answer:** You use the `git push` command, often followed by the remote name and branch name.

**Why:** This command sends all of your new local commits to the remote repository on GitHub, updating it with your latest work.

**Example:** `git push origin main`

---

#### Question: How do you look at the history of your previous commits?

**Answer:** You use the `git log` command.

**Why:** This command displays a chronological list of all the commits that have been made in the repository, including the unique commit ID, author, date, and commit message for each one.