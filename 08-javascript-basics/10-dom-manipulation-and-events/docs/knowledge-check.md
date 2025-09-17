### Knowledge Check Answers 🎯

---

#### Question: What is the DOM?

**Answer:** The **DOM** (Document Object Model) is a programming interface that represents your HTML document as a tree of objects (or "nodes").

**Why:** JavaScript uses the DOM to connect to and interact with your webpage. It allows you to dynamically read, add, change, and remove HTML elements and their content, making your site interactive.

**Remember:** The DOM is like a live, interactive family tree for your HTML elements. 🌳


---

#### Question: How do you target the nodes you want to work with?

**Answer:** You use special JavaScript methods like **`document.querySelector()`** or **`document.getElementById()`**.

**Why:** These methods act as search functions for the DOM. You provide them with a CSS selector or an ID, and they return a reference to the matching element node(s) on the page so you can work with them.

**Example:** `const mainHeading = document.querySelector('#main-heading');`

---

#### Question: How do you create an element in the DOM?

**Answer:** You use the **`document.createElement('tagName')`** method.

**Why:** This command creates a new, empty HTML element in the browser's memory. It doesn't appear on the page yet; it's just a node waiting to be modified and inserted into the DOM.

**Example:** `const newDiv = document.createElement('div');`

---

#### Question: How do you add an element to the DOM?

**Answer:** After creating an element, you add it to the DOM by **appending** it to an existing parent element using a method like **`parent.appendChild(newElement)`**.

**Why:** This takes the element you created in memory and inserts it into the live DOM tree as a child of the specified parent, making it visible on the webpage.

**Example:** `body.appendChild(newDiv);`

---

#### Question: How do you remove an element from the DOM?

**Answer:** The simplest way is to get a reference to the element and call the **`.remove()`** method on it.

**Why:** This modern method directly removes the element and all of its children from the DOM tree.

**Example:** `const elementToRemove = document.querySelector('.goodbye'); elementToRemove.remove();`

---

#### Question: How can you alter an element in the DOM?

**Answer:** Once you have a reference to an element, you can alter it by changing its properties, such as its styles (`.style`), classes (`.classList`), or content (`.textContent`).

**Why:** The DOM gives you full control to modify almost any aspect of an element on the fly in response to user interaction or other events.

**Example:** `mainHeading.style.color = 'blue';` or `mainHeading.classList.add('important');`

---

#### Question: When adding text to a DOM element, should you use `textContent` or `innerHTML`? Why?

**Answer:** You should almost always use **`textContent`**.

**Why:** `textContent` is much safer because it treats all input as plain text. `innerHTML` parses the string as HTML, which can create a security vulnerability (called Cross-Site Scripting or XSS) if the text comes from a user, as they could inject malicious `<script>` tags.

**Remember:** Use **`textContent`** for **text**.

---

#### Question: Where should you include your JavaScript tag in your HTML file when working with DOM nodes?

**Answer:** You should place your `<script>` tag at the **bottom of the `<body>`**, just before the closing `</body>` tag.

**Why:** This ensures the browser has finished loading and parsing all of your HTML elements *before* your JavaScript code runs. If the script runs first, it won't be able to find the DOM elements it's supposed to work with, causing errors.

---

#### Question: How do “events” and “listeners” work?

**Answer:** An **event** is an action that occurs on a webpage, like a `click` or a `keydown`. A **listener** is a function that waits for a specific event to happen on a specific element and then runs its code in response.

**Why:** This is the fundamental model for creating interactive websites. You "listen" for user actions and then trigger a JavaScript function to do something cool.

**Remember:** An **event** is the signal (the doorbell rings 🛎️). The **listener** is the code that responds (you open the door).

---

#### Question: What are three ways to use events in your code?

**Answer:** The three main methods are:
1.  **HTML attribute:** `onclick="myFunction()"`
2.  **DOM property:** `button.onclick = myFunction;`
3.  **Event Listener:** `button.addEventListener('click', myFunction);`

---

#### Question: Why are event listeners (`addEventListener()`) the preferred way to handle events?

**Answer:** `addEventListener()` is preferred because it's the most powerful and flexible method.

**Why:** Unlike the other methods, it allows you to add **multiple independent listeners** for the same event to a single element. The other two methods can only have one handler and will overwrite any previous ones.

---

#### Question: What are the benefits of using named functions in your listeners?

**Answer:** Using named functions makes your code **cleaner, more readable, and reusable**. It also allows you to **remove the event listener** later if you need to.

**Why:** Instead of defining a long, messy anonymous function inside your `addEventListener` call, you can reference a well-named function that is defined elsewhere. This makes your code more organized and gives you a reference to use with `removeEventListener()`.

---

#### Question: How do you attach listeners to groups of nodes?

**Answer:** You first select the group of nodes using **`querySelectorAll()`**, and then you **loop through the resulting NodeList**, adding an event listener to each node individually inside the loop.

**Why:** `addEventListener` can only be attached to a single element at a time, not a whole collection. A loop is the standard pattern to apply the same functionality to multiple elements.

---

#### Question: What is the difference between the return values of `querySelector` and `querySelectorAll`?

**Answer:** **`querySelector`** returns the **very first element** that matches a selector, or `null` if none are found. **`querySelectorAll`** returns a **NodeList** containing **all** the elements that match the selector.

**Remember:**
* `querySelector` = A single thing.
* `querySelectorAll` = A list of all things.

---

#### Question: What does a “NodeList” contain?

**Answer:** A **NodeList** is a collection (similar to an array) of DOM nodes.

**Why:** It's the data structure that `querySelectorAll` returns. While not a true JavaScript array, you can iterate over it with methods like `forEach()` to access each element it contains.

---

#### Question: Explain the difference between “capture” and “bubbling”.

**Answer:** **Capturing** and **bubbling** are the two phases of how events travel through the DOM. The **capture** phase goes from the outside in (from `window` down to the target). The **bubbling** phase goes from the inside out (from the target back up to `window`).

**Why:** By default, all events "bubble." This means if you click a button inside a div, the button's click event fires first, then the div's click event, and so on up the DOM tree. Understanding this helps you manage events on nested elements.

**Remember:** **Capture** is like a raindrop falling down 💧. **Bubbling** is like a bubble rising up 🫧.