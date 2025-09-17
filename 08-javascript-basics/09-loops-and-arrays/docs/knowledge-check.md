### Knowledge Check Answers 🎯

---

#### Question: What are loops useful for?

**Answer:** Loops are useful for executing the same block of code over and over again until a certain condition is met.

**Why:** They are a core tool for automation in programming. Instead of writing the same line of code 100 times, you can write it once inside a loop that runs 100 times, which is essential for working with collections of data like arrays.

**Example:** You can use a loop to print every name in a list of users, no matter how many users are in the list.

---

#### Question: What is the `break` statement?

**Answer:** The `break` statement is used to **exit a loop immediately**.

**Why:** It provides a way to stop a loop's execution early, even if the loop's original condition is still true. This is useful when you've found the item you're searching for and don't need to check the rest of the list.

**Remember:** `break` lets you **break out** of the loop. 🛑

---

#### Question: What is the `continue` statement?

**Answer:** The `continue` statement is used to **skip the rest of the current iteration** and proceed to the next iteration of the loop.

**Why:** It's useful when you encounter an item you don't want to process. It lets you bypass the code for that specific item without stopping the entire loop.

**Remember:** `continue` lets you **continue to** the next item. ⏭️

---

#### Question: What is an array?

**Answer:** An **array** is a single, special variable that can hold an ordered list of multiple values.

**Why:** It allows you to group related data together, making it easier to manage and manipulate. The items in an array can be of any data type.

**Example:** `let shoppingList = ["milk", "eggs", "bread"];`

---

#### Question: What are arrays useful for?

**Answer:** Arrays are useful for storing and organizing collections of data, such as a list of names, a set of numbers, or a series of objects.

**Why:** They provide a structured way to work with multiple values at once and come with many built-in methods that make it simple to perform common operations like adding, removing, sorting, and iterating over the data.

---

#### Question: How do you access or change an array element?

**Answer:** You can access or change an element by referencing its **index** (its numerical position) inside square brackets `[]`.

**Why:** Array indices are zero-based, meaning the first item is at index `0`, the second is at index `1`, and so on. This index is the "address" of the element within the array.

**Example:**
* To access: `let firstItem = shoppingList[0];` // "milk"
* To change: `shoppingList[1] = "cheese";` // The array is now ["milk", "cheese", "bread"]

---

#### Question: What are some useful array methods?

**Answer:** Some of the most common and useful array methods are:
* **`push()`** and **`pop()`**: to add/remove items from the **end** of an array.
* **`unshift()`** and **`shift()`**: to add/remove items from the **beginning** of an array.
* **`forEach()`**: to loop over each element and perform an action.
* **`slice()`**: to create a new array containing a portion of the original.

---

#### Question: What is the advantage of writing automated tests?

**Answer:** The main advantage is that automated tests provide a **safety net** that allows you to make changes to your code with confidence.

**Why:** Manually testing your entire application after every small change is slow and unreliable. Automated tests run quickly and consistently, immediately catching any bugs (called regressions) that your changes might have introduced, which saves a huge amount of time and effort in the long run.