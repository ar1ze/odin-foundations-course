### Knowledge Check Answers 🎯

---

#### Question: What is the command line?

**Answer:** The command line is a text-based interface that allows you to control your computer by typing commands instead of clicking icons.

**Why:** It's a powerful tool for developers because it is often faster, more direct, and more scriptable than a graphical user interface (GUI).

**Remember:** The command line is how you "talk" to your computer with text. 💬

---

#### Question: How do you open the command line on your computer?

**Answer:** On **macOS or Linux**, you open the application named **Terminal**. On **Windows** (using WSL), you open your installed Linux distribution, such as **Ubuntu**.

**Why:** These applications give you access to the shell, which is the program that actually interprets your commands.

---

#### Question: How can you navigate to a particular directory?

**Answer:** You use the `cd` command (which stands for "change directory") followed by the name of the directory you want to go to.

**Why:** This command changes your "current working directory," effectively moving you into a different folder so you can work with its contents.

**Example:** `cd Documents/My-Project`

---

#### Question: Where will `cd` on its own navigate you to?

**Answer:** Typing `cd` by itself will always take you to your **home directory**.

**Why:** The home directory is the default location for your user's files, making `cd` a quick shortcut to get back to a known starting point.

---

#### Question: Where will `cd ..` navigate you to?

**Answer:** The `cd ..` command will navigate you **up one level** to the parent directory.

**Why:** The `..` is a universal shortcut that represents the directory immediately containing your current directory.

**Example:** If you are in `/Users/Odin/Projects`, running `cd ..` will take you to `/Users/Odin`.

---

#### Question: How do you display the name of the directory you are currently in?

**Answer:** You use the `pwd` command, which stands for "print working directory."

**Why:** This command prints the full, absolute path to your current location, which is helpful for figuring out exactly where you are in the file system.

---

#### Question: How do you display the contents of the directory you are currently in?

**Answer:** You use the `ls` command, which stands for "list."

**Why:** This command lists all the files and subdirectories located within your current working directory, similar to opening a folder to see what's inside.

---

#### Question: How do you create a new directory?

**Answer:** You use the `mkdir` command, which stands for "make directory," followed by the name you want to give the new directory.

**Why:** This is the command-line equivalent of creating a "New Folder" in a graphical interface.

**Example:** `mkdir my-website` will create a new directory named `my-website`.

---

#### Question: How do you create a new file?

**Answer:** You use the `touch` command followed by the name of the file you want to create.

**Why:** The `touch` command quickly creates a new, empty file with the specified name.

**Example:** `touch index.html` will create a new, empty file named `index.html`.

---

#### Question: How do you destroy a directory or file?

**Answer:** You use the `rm` command for a file and `rm -r` for a directory. `rm` stands for "remove."

**Why:** `rm` deletes files permanently. To delete a directory and everything inside it, you must add the `-r` (recursive) flag. **Be very careful, as this action cannot be undone!** ⚠️

**Example:** `rm style.css` deletes a file; `rm -r old-project` deletes a directory.

---

#### Question: How do you rename a directory or file?

**Answer:** You use the `mv` command, which stands for "move," by providing the current name and the desired new name.

**Why:** While `mv` is used for moving files, it also renames them if you "move" a file to a new name within the same directory.

**Example:** `mv old-name.txt new-name.txt` renames the file.