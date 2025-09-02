# Installing Node.js 💻

-----

### Introduction 📝

  * **Node.js** is a JavaScript runtime that lets you run JavaScript outside of a web browser.
  * We will install Node using **nvm (Node Version Manager)**, which makes it easy to switch between Node versions.
  * **npm** is a separate tool for installing JavaScript libraries. Don't confuse it with nvm.

-----

### Lesson Overview 🗺️

  * Learn how to install nvm and npm.
  * Learn how to use the Node console.

-----

### Installing NVM ⬇️

#### Installation on Linux 🐧

  * **Step 0: Prerequisites** - Install `curl` by running:
    ```bash
    sudo apt install curl
    ```
      * You might need to update package lists first with `sudo apt update && sudo apt upgrade`.
  * **Step 1: Download & Install** - Run the following command:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    ```
  * **Step 2: Initialize NVM** - Run these commands in your terminal:
    ```bash
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    ```
  * **Verify Installation:** Use `command -v nvm`. If it fails, close and reopen your terminal.

#### Installation on macOS 🍏

  * Create a `.zshrc` file if it doesn't exist: `touch ~/.zshrc`.
  * Run the following command to start the installation:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
    ```
  * **Initialize NVM:** Restart your terminal or paste the following code:
    ```bash
    export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
    ```
  * **Verify Installation:** Use `nvm --version`.

-----

### Installing Node 🟢

  * **Step 1: Installation** - Run the command to install the latest **LTS (long-term support)** version:
    ```bash
    nvm install --lts
    ```
  * **Step 2: Setting the Node version** - Tell nvm to use the LTS version:
    ```bash
    nvm use --lts
    ```
      * The LTS version is more stable and compatible.
  * **Verify Installation:** Run `node -v` to confirm Node is installed.

-----

### Using the Node Console ⌨️

  * The Node console is an interactive environment in your terminal for running and debugging JavaScript.
  * **To open:** Type `node` in your terminal.
  * **To exit:** Type `.exit`.

-----

### Additional Resources 📚

  * Watch the "What is NodeJS?" video by Programming with Mosh.