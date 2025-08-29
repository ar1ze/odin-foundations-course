# Text Editors: Foundations Course

## 💡 Introduction
***
A text editor is an essential tool for developers. A good one helps you write better code with real-time checking, syntax highlighting, and automatic formatting.

### ❓ Why not use Microsoft Word?
Rich text editors like Microsoft Word are unsuitable for code because they embed extra formatting information. Plain text editors like VSCode save only the text, which is necessary for programs to read and execute the file as code.

## 💻 Code Editors
***
Code editors are specialized, highly customizable web development tools. They offer features like plugins, syntax highlighting, and auto-closing of brackets, which prevent common errors.

### 🎯 Visual Studio Code (VSCode)
VSCode is a free and excellent code editor. It's the most popular choice among Odin students and moderators due to its great add-on and Git integration support.

* **Note:** For this course, it is assumed you'll be using VSCode because it's free, easy to use, and works consistently across operating systems.

## 📥 VSCode Installation
***
Follow these steps based on your operating system.

### 🐧 Linux
1.  **Download:** Open Terminal and run:
    `wget -O code-latest.deb 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'`
2.  **Install:** Run:
    `sudo apt install ./code-latest.deb`
    * **Password Note:** Characters won't be visible when typing your password for security.
3.  **Delete Installer:** Run:
    `rm code-latest.deb`
4.  **Using VSCode:**
    * Click "Visual Studio Code" from the Applications menu.
    * Use the `code` command in the terminal.

### 🍎 MacOS
1.  **Download:** Download the latest `.zip` file.
2.  **Install:** Double-click the `.zip` file, then drag the app icon to the Applications folder.
3.  **Delete Installer:** Drag the `.zip` file from Downloads to the trash.
4.  **Using VSCode:** Double-click the app in your Applications folder.

### 🖥️ WSL2
1.  **Install VSCode:** Follow the Windows instructions to install VSCode.
2.  **Delete Installer:** Drag the `.exe` file from Downloads to the trash.
3.  **Install WSL Extension:** Open VSCode, go to the extensions tab, and install the WSL extension.
4.  **Verify:** Open a new WSL2 terminal and run `code`. A new VSCode window should open.

## 📝 Assignment
***
Watch the "VSCode Tutorial for Beginners" video to become familiar with its features.

### 🤖 Disable Copilot AI
* Click the little robot face in the bottom right of the VSCode window.
* Uncheck the "code completions" box.
* This is to align with The Odin Project's philosophy on AI code generation.

## 📚 Additional Resources
***
* **VSCode Docs:** A great place to find answers to your queries.
* **Shortcut PDFs:** Handy PDFs for Linux, macOS, and Windows/WSL2 to improve your efficiency.