### Knowledge Check Answers 🎯

-----

#### Question: What is the difference between objects and arrays?

**Answer:** **Objects** use named string **keys** to store unordered data, while **arrays** use numbered **indices** to store an ordered list of data.

**Why:** You should use an object when the labels for your data are important (like `firstName` or `email`). You should use an array when the order of the data is important (like a list of steps in a recipe or a queue of users).

**Example:**

  * **Object (Dictionary):** `const person = { name: 'Steve', age: 30 };`
  * **Array (List):** `const colors = ['red', 'green', 'blue'];`

**Remember:** Objects are like a **dictionary** 📖 (word and definition), while arrays are like a **to-do list** ✅ (ordered items).

-----

#### Question: How do you access object properties?

**Answer:** You can access object properties using either **dot notation** (`object.property`) or **bracket notation** (`object['property']`).

**Why:** Dot notation is the most common and is easier to read. Bracket notation is more powerful and must be used when a property's key is stored in a variable or if the key contains special characters (like a space or hyphen).

**Example:**

  * **Dot notation:** `person.name`
  * **Bracket notation:** `person['age']` or `let key = 'name'; person[key];`

-----

#### Question: How do primitives and object types differ when you assign them to other variables, or pass them into functions?

**Answer:** **Primitives** (like numbers and strings) are passed by **value**, meaning a **copy** is created. **Objects** (including arrays) are passed by **reference**, meaning a **pointer** to the original object is created.

**Why:** This is a fundamental difference in how JavaScript stores data. Modifying the copy of a primitive leaves the original untouched. Modifying an object through one of its references will change the single, original object, and that change will be visible through all other references to it.

**Example (Primitives):**

```javascript
let score = 100;
let playerScore = score; // A copy of 100 is made
playerScore = 150;       // This only changes the copy

console.log(score); // score is still 100
```

**Example (Objects):**

```javascript
let player1 = { score: 100 };
let player2 = player1; // player2 now REFERENCES the same object
player2.score = 150;   // This changes the one and only object

console.log(player1.score); // player1's score is now 150
```

**Remember:**

  * **Primitives** = Copy 📠
  * **Objects** = Reference 🔗