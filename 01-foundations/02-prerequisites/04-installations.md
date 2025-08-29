# 🗂️ Foundations Course: Installations
***

### ➡️ Introduction
* If you are already on MacOS, Ubuntu, or an official Ubuntu flavor with Chrome, you can skip this lesson.
* We only support MacOS, Ubuntu, and official flavors of Ubuntu.
* We do not recommend Ubuntu-based OS (Mint, Pop!\_OS, etc.).

### 📖 Lesson Overview
* Learn how to set up a proper environment for The Odin Project curriculum.
* Learn how to install Google Chrome.

### 📝 Assignment
* Choose and follow an environment setup method if you don't have a supported one.
* After setting up the environment, proceed to the Google Chrome installation instructions.

### 💻 OS Installation
***

#### 🖥️ Virtual Machine (Recommended)
* **What it is:** An emulation of an entire computer running inside your current OS.
* **Drawback:** Can be slow as it's running two computers at once.
* **Instructions:**
    1.  **Download:** Get Oracle's VirtualBox and Xubuntu 22.04 LTS (.iso file).
    2.  **Install:** Install VirtualBox on your Windows machine.
    3.  **Setup Xubuntu:**
        * Create a new VM named "Xubuntu."
        * Allocate at least 2048 MB of Base Memory and 2 processors.
        * Set the virtual hard disk size to at least 30GB.
        * The unattended installation will set up the OS and GuestAdditions automatically.
* **Key Point:** All your work for The Odin Project should be done **inside the VM**.
* **Post-Installation:**
    * **Fix `sudo` permissions:**
        * Go to **Users and Groups**, then **Manage Groups**.
        * Find `sudo` and add your user to the group.
        * Reboot the VM (`reboot` in the terminal).
    * **Test `sudo`:** Run `sudo apt update` and `sudo apt upgrade` in the terminal.
* **VM Performance Tips:**
    * Minimize host OS activity.
    * Plug in your laptop.
    * Ensure processors are set to 2 and memory is at most half of your total RAM.
    * Disable 3D Acceleration.
* **Shutting Down:**
    * **UI:** Click the power icon in the Whisker Menu.
    * **Terminal:** Type `poweroff`.
    * **VirtualBox Interface:** Choose "Send the shutdown signal."

#### 🔃 Ubuntu/Windows Dual-Boot
* **What it is:** Two operating systems on one computer, switchable with a reboot.
* **Preparation:** Back up important data.
* **Instructions:**
    1.  **Download:** Get the 64-bit Ubuntu or Xubuntu 22.04 LTS.
    2.  **Create Bootable Drive:** Use a flash drive (or CD/DVD) to create an Ubuntu Live USB.
    3.  **Install Ubuntu:**
        * Reboot and boot from the flash drive (e.g., press F12 on Dell).
        * Choose "Install Ubuntu alongside Windows."
        * Allocate at least 30GB of disk space for Ubuntu.
* **Intel RST:** If you encounter this error, follow the provided workaround to disable it.

#### 🐧 ChromeOS/ChromeOS Flex
* You can use a supported Chromebook if you can set up a Linux terminal on it.
* You will follow the Linux instructions for the curriculum.

#### 🚀 WSL2 (Advanced)
* **What it is:** A full-fledged Linux distribution running within Windows.
* **Warning:** Can cause confusion for new learners; VM is recommended for clear separation.
* **Instructions:**
    1.  **Install WSL2:** Open PowerShell as an administrator and run `wsl --install`.
    2.  **Install Windows Terminal (Win 10):** Use the direct install option.
    3.  **Set as Default (Optional):** In Windows Terminal settings, set `Ubuntu` as the default profile.
* **Key Point:** Follow the **Linux instructions** in the curriculum.
* **Important Note:** Do not work in the `/mnt/c` directory.

### 🌐 Google Chrome Installation
***

#### 🐧 Linux
1.  **Download:** `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
2.  **Install:** `sudo apt install ./google-chrome-stable_current_amd64.deb`
3.  **Delete installer:** `rm google-chrome-stable_current_amd64.deb`
4.  **Use:** Click from the Applications menu or run `google-chrome` in the terminal.
    * Use `google-chrome &` to free up the terminal.
* **Password Note:** Characters won't show as you type.

#### 🍏 MacOS
1.  **Download:** From the Google Chrome download page.
2.  **Install:** Drag `googlechrome.dmg` to the Applications folder.
3.  **Delete:** Drag the `.dmg` file to the trash.
4.  **Use:** Open from your Applications folder.

#### 🪟 WSL2
* **Note:** WSL does not have a GUI, so you'll install the Windows version.
1.  **Download:** From the Google Chrome download page.
2.  **Install:** Run `ChromeSetup.exe` from your Downloads folder.
3.  **Use:** Search for and open Google Chrome from the Start Menu.

### 🧠 Knowledge Check
* Which operating systems are supported by The Odin Project?
* Which browser is supported by The Odin Project?