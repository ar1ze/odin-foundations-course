# HTML Boilerplate

### Foundations Course

---

## Introduction 📝

All HTML documents need a basic structure, or "boilerplate," before you can add useful content. This lesson explains the different parts of this boilerplate.

## Lesson Overview 📚

* How to write the basic boilerplate for an HTML document.
* How to open HTML documents in your browser.

---

## Creating an HTML File 📂

* Create a folder named `html-boilerplate`.
* Inside the folder, create a file named `index.html`.
* The `.html` extension tells the computer it's an HTML file.
* Always name your homepage file `index.html` because web servers look for it by default.

---

## The DOCTYPE 📜

* Every HTML page starts with a doctype declaration.
* Its purpose is to tell the browser which version of HTML to use.
* For HTML5, the doctype is `<!DOCTYPE html>`.
* Older versions had more complicated doctypes, but you will always use `<!DOCTYPE html>`.

---

## HTML Element `<html lang="en">` 🌐

* The `<html>` element is the "root element" of the document.
* All other elements are descendants of it.
* The `lang` attribute specifies the language of the content, which improves accessibility for screen readers.

---

## Head Element `<head>` 🧠

* The `<head>` element contains important meta-information about the webpage.
* Content inside the `<head>` is not displayed on the webpage itself.
* It should be the first element under the `<html>` tag.

### Meta Element `<meta charset="UTF-8">` ⚙️

* Always include `<meta charset="UTF-8">` in the `<head>`.
* This ensures special symbols and characters are displayed correctly.

### Title Element `<title>` 🔖

* The `<title>` element gives the webpage a human-readable title.
* This title is what appears in the browser tab.
* Without a title, the tab would default to the filename, like `index.html`.

---

## Body Element `<body>` 💻

* The `<body>` element contains all the content that will be displayed to users (text, images, links, etc.).
* It goes inside the `<html>` element, after the `<head>` element.

---

## Viewing HTML Files in the Browser 🖥️

* **Primary Browser:** Google Chrome is recommended for this course.
* **Methods to Open a File:**
    * Drag and drop the file into the browser's address bar.
    * Double-click the file in your file system.
    * Use the terminal:
        * `google-chrome index.html` (Ubuntu)
        * `open ./index.html` (macOS)
        * `explorer.exe index.html` (WSL)
* **See Your Changes:** Add an element like `<h1>Hello World!</h1>` inside the `<body>` and refresh the browser to see the content appear.

---

## VSCode Shortcut `!` ⚡

* In VSCode, type `!` and press Enter in an HTML file to auto-generate the boilerplate.
* This shortcut is a great time-saver, but it's important to learn how to write the code manually for muscle memory and understanding.

---

## Assignment ✍️

1.  Watch Kevin Powell’s "Building Your First Web Page" video.
2.  Practice writing the boilerplate from memory until you can do it without peeking.
3.  Run your code through the [W3 HTML validator](https://validator.w3.org/) to check for syntax errors.

---

## Knowledge Check 🤔

* What is the purpose of the doctype declaration?
* What is the HTML element?
* What is the purpose of the head element?
* What is the purpose of the body element?