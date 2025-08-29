# ⚙️ Setting up Git

### Foundations Course

-----

## 📖 Introduction

  * **Git** is a popular version control system.
  * **GitHub** is a service for uploading, hosting, and managing code using Git with a web interface.
  * Git and GitHub are not the same and were not created by the same company.

-----

## ⬇️ Step 1: Install Git

Choose your Operating System below:

### 🐧 Linux

1.  **Update the system:**
    ```bash
    sudo apt update
    sudo apt upgrade
    ```
2.  **Install Git:**
    ```bash
    sudo add-apt-repository ppa:git-core/ppa
    sudo apt update
    sudo apt install git
    ```
3.  **Verify version (must be at least 2.28):**
    ```bash
    git --version
    ```

### 🍏 MacOS

1.  **Install Homebrew:**
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2.  **Update Git:**
    ```bash
    brew install git
    ```
3.  **Verify version (must be at least 2.28):**
      * Close and open a new terminal window.
    <!-- end list -->
    ```bash
    git --version
    ```

### 💻 ChromeOS

  * Follow the instructions for installing Git from source on Digital Ocean.

-----

## 🛠️ Step 2: Configure Git and GitHub

### 2.1: Create a GitHub account

  * Go to GitHub.com and create an account.
  * Use a real email address.
  * Enable "Keep my email addresses private" and "Block command line pushes that expose my email" in email settings for privacy.
  * Note your private GitHub email address if you plan to use it.

### 2.2: Setup Git

  * **Configure user info:**
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email yourname@example.com
    ```
  * **Change default branch to `main`:**
    ```bash
    git config --global init.defaultBranch main
    ```
  * **Set default pull behavior:**
    ```bash
    git config --global pull.rebase false
    ```
  * **Verify configuration:**
    ```bash
    git config --get user.name
    git config --get user.email
    ```
  * **For macOS users (ignore `.DS_Store` files):**
    ```bash
    echo .DS_Store >> ~/.gitignore_global
    git config --global core.excludesfile ~/.gitignore_global
    ```

### 2.3: Create an SSH key

  * **Check for an existing key:**
    ```bash
    ls ~/.ssh/id_ed25519.pub
    ```
  * **If no key exists, create one:**
    ```bash
    ssh-keygen -t ed25519
    ```
  * Press Enter for the default location.
  * You can optionally add a password for added security.

### 2.4: Link your SSH key with GitHub

1.  Go to GitHub Settings \> SSH and GPG keys \> New SSH Key.
2.  **Copy your public SSH key from the terminal:**
    ```bash
    cat ~/.ssh/id_ed25519.pub
    ```
3.  Paste the entire output into the key field on GitHub and click "Add SSH key".

### 2.5: Testing your key

  * **Test the connection:** Follow the GitHub directions.
  * **Successful response:**
    ```text
    Hi username! You’ve successfully authenticated, but GitHub does not provide shell access.
    ```

-----

## ✅ Step 3: Let us know how it went\!

  * You have completed the basic installations.
  * It's normal to feel overwhelmed; you'll learn more as you progress.

-----

## 📚 Additional resources

  * **Understanding SSH Key Pairs:** Explains how public-key cryptography works.
  * **Asymmetric Encryption - Simply explained:** A video on the topic.