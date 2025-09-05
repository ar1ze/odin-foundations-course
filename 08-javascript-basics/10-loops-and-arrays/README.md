# Loops and Arrays: Foundations Course

## 📜 Introduction

The challenges of programming include **repetition** and **managing large amounts of data**.
* **Loops** are control structures that execute a block of code repeatedly.
* **Arrays** are data structures that store multiple values in a single variable.
* This lesson also introduces **Test-Driven Development (TDD)**, the practice of writing tests before code.

---

## 💻 Loops

Computers are great at repetitive tasks. We can use a **loop** to repeat a set of instructions multiple times.
* **MDN's Looping Code**: Read this resource and tackle the 'Active Learning' sections.
* **JavaScript.info's “Loops: While and For”**: Another resource with exercises to practice what you learn.

---

## 📦 Arrays

Arrays are an **ordered collection of items** (strings, numbers, etc.). They are useful for dealing with large quantities of data.
* **JavaScript Arrays crash course**: A short video overview of arrays.
* **JavaScript.info intro to arrays**: A textual introduction to the topic.
* **JavaScript.info's array method guide**: A deeper look at array methods.
* **MDN's Array documentation**: A key resource to bookmark for future reference.

### 🪄 Array Methods

Array methods provide powerful ways to manipulate data.

* **`map()`**: Transforms each element in an array and returns a **new array** with the results. It does not change the original array.
    * Example: `const mappedArr = arr.map((num) => num + 1);`
* **`filter()`**: Creates a **new array** containing only the elements for which a provided callback function returns `true`.
    * Example: `const oddNums = arr.filter(isOdd);`
* **`reduce()`**: Executes a reducer function on each element of the array, resulting in a **single output value**.
    * The callback function takes an **accumulator** and the **current item**.
    * It can take an optional `initialValue`.
    * Example: `const productOfAllNums = arr.reduce((total, currentItem) => total * currentItem, 1);`

---

## 🛠️ Test-Driven Development (TDD)

TDD is the practice of writing automated tests that describe how code should work **before** you write the code itself.
* **Advantage**: It's more productive and efficient than manually running code over and over to check if it works.

---

## 📝 Assignment

Complete the following exercises to practice what you've learned.

### JavaScript.info Array Methods Exercises
* Translate border-left-width to borderLeftWidth
* Filter range
* Filter range "in place"
* Sort in decreasing order
* Copy and sort array
* Shuffle an array
* Filter unique array members

### Wes Bos’ JavaScript30 Repository
* **04 - Array Cardio Day 1**
* **07 - Array Cardio Day 2**

### JavaScript Exercises Repository
* **06_repeatString**
* **07_reverseString**
* **08_removeFromArray**
* **09_sumAll**
* **10_leapYears**
* **11_tempConversion**

---

## 🧠 Knowledge Check

* What are loops useful for?
* What is the `break` statement?
* What is the `continue` statement?
* What is an array?
* What are arrays useful for?
* How do you access or change an array element?
* What are some useful array methods?
* What is the advantage of writing automated tests?