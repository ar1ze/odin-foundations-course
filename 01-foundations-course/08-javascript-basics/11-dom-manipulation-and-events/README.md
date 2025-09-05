# DOM Manipulation and Events 💻

This lesson covers how to manipulate the Document Object Model (DOM) using JavaScript and how to handle events.

-----

### **Lesson Overview** 📝

  - **DOM:** What it is and how it relates to a webpage.
  - **Nodes vs. Elements:** The key difference between these.
  - **Targeting Nodes:** How to select nodes using CSS-style selectors.
  - **DOM Methods:** Basic methods for finding, adding, removing, and altering nodes.
  - **NodeList vs. Array:** The distinction between these two data structures.
  - **Events & Bubbling:** How events work and the concept of bubbling.

-----

### **Document Object Model (DOM)** 🌳

The DOM is a **tree-like representation** of a webpage's content, made up of **"nodes"**. We primarily focus on **"element"** nodes for manipulation. Nodes have relationships like "parent," "child," and "sibling," similar to a family tree.

-----

### **Targeting Nodes with Selectors** 🎯

You can select nodes using **CSS-style selectors** (e.g., `div.display`, `#container > .display`) and **relational properties** (e.g., `firstElementChild`, `previousElementSibling`).

**Code Example:**

```javascript
// selects the #container div
const container = document.querySelector("#container");

// selects the first child of #container
const display = container.firstElementChild; 

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling of .controls
const display = controls.previousElementSibling;
```

-----

### **DOM Methods** 🛠️

DOM nodes are JavaScript objects with properties and methods for manipulation.

#### **Query Selectors**

  - `element.querySelector(selector)`: Returns the **first** matching element.
  - `element.querySelectorAll(selectors)`: Returns a **NodeList** of all matches.
      - A **NodeList** looks and acts like an array but lacks certain array methods. It can be converted to an array using `Array.from()` or the spread operator.

#### **Element Creation**

  - `document.createElement(tagName)`: Creates a new element in **memory**, not yet in the DOM.

#### **Append Elements**

  - `parentNode.appendChild(childNode)`: Appends a child as the **last** child.
  - `parentNode.insertBefore(newNode, referenceNode)`: Inserts a new node **before** a reference node.

#### **Remove Elements**

  - `parentNode.removeChild(child)`: Removes a child from the DOM.

#### **Altering Elements**

  - **Adding Inline Style:**

      - `div.style.color = "blue";`
      - `div.style.cssText = "color: blue; background: white;";`
      - `div.setAttribute("style", "color: blue; background: white;");`
      - **Note:** Use **camelCase** for kebab-cased CSS properties (e.g., `backgroundColor`).

  - **Editing Attributes:**

      - `div.setAttribute("id", "theDiv")`
      - `div.getAttribute("id")`
      - `div.removeAttribute("id")`

  - **Working with Classes:**

      - `div.classList.add("new")`
      - `div.classList.remove("new")`
      - `div.classList.toggle("active")`

  - **Adding Text Content:**

      - `div.textContent = "Hello World!";` (Preferred for text)
      - `div.innerHTML = "<span>Hello World!</span>";` (Use sparingly due to **security risks**)

-----

### **Timing of JavaScript** ⏱️

For DOM manipulation to work, your JavaScript code must run **after** the DOM nodes are created.

  - Place your `<script>` tag at the **bottom of the `<body>`**.
  - Alternatively, use the `defer` attribute in the `<head>`: `<script src="js-file.js" defer></script>`

-----

### **Events** 🖱️

Events are actions on a webpage (e.g., clicks, key-presses) that JavaScript can listen to and react to.

#### **Three Ways to Handle Events**

1.  **HTML Attributes:**

      - `<button onclick="alert('Hello World')">Click Me</button>`
      - **Cons:** Clutters HTML, only one function per element.

2.  **DOM Properties:**

      - `btn.onclick = () => alert("Hello World");`
      - **Cons:** Still limited to one function per element.

3.  **Event Listeners (Preferred) ⭐:**

      - `btn.addEventListener("click", () => { alert("Hello World"); });`
      - **Pros:** Separates concerns, allows multiple listeners for one element.
      - Can also use a named function as the callback: `btn.addEventListener("click", alertFunction);`

#### **Attaching Listeners to Groups** 🖼️

To add a listener to multiple elements from a `querySelectorAll` NodeList, use the `.forEach` method.

**Example:**

```javascript
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
```

#### **Useful Events** ✨

  - `click`
  - `dblclick`
  - `keydown`
  - `keyup`

-----

### **Knowledge Check** 🤔

  - What is the DOM?
  - How do you target nodes?
  - How do you create, add, or remove an element?
  - Why use `textContent` over `innerHTML`?
  - Where should the `<script>` tag be placed?
  - What are the three ways to handle events, and which is preferred?
  - What is a **NodeList** and how does it differ from an array?