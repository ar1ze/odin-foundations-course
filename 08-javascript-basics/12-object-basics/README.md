# Object Basics 📚

-----

## **Introduction**

This lesson is an introduction to **Objects** in JavaScript, which are a collection of key-value pairs. It also covers some powerful and commonly used array methods.

## **Lesson Overview**

This lesson will cover:

  * Creating objects.
  * Accessing object properties.
  * Using multiple object operators.
  * Understanding the differences between object and primitive data types.

## **Objects**

Objects are a crucial part of JavaScript. While simple tasks can be accomplished without them, any real project will feature them. This lesson covers the basics, with a deeper dive to come later.

## **Differences between Objects and Primitives** ---

### **Primitive Data Types**

  * Can contain only a single value (e.g., string, number).
  * When a primitive variable is assigned to another, a **copy** of the data is created.
  * Changes to the copied variable do not affect the original.

**Example:**

```javascript
let data = 42; 
let dataCopy = data;

dataCopy = 43;

console.log(data);      // 42
console.log(dataCopy);  // 43
```

### **Object Data Types**

  * Used to store a collection of data and more complex entities (e.g., objects, arrays, functions).
  * When an object variable is assigned to another, it holds a **reference** to the original object.
  * Changes made through one reference affect the original object, and thus all other references to it.

**Example:**

```javascript
const obj = { data: 42 }; 
const objCopy = obj;

objCopy.data = 43;

console.log(obj);      // { data: 43 }
console.log(objCopy);  // { data: 43 }
```

### **Reassigning Object Variables**

  * Reassigning a variable to a **new object** breaks the reference link.
  * The other variables still refer to the **original** object.

**Example:**

```javascript
let animal = { species: "dog" }; 
let dog = animal;

animal = { species: "cat" };

console.log(animal); // { species: "cat" }
console.log(dog);    // { species: "dog" }
```

## **Assignments** 🎯

-----

### **JavaScript.info Exercises**

Complete the following array methods exercises:

  * Map to names
  * Map to objects
  * Sort users by age
  * Get average age
  * Create keyed object from array

### **JavaScript Exercises Repository**

Complete the following exercises in order:

  * 12\_calculator
  * 13\_palindromes
  * 14\_fibonacci
  * 15\_getTheTitles
  * 16\_findTheOldest

## **Knowledge Check** 🧠

-----

  * What is the difference between objects and arrays?
  * How do you access object properties?
  * How do primitives and object types differ when you assign them to other variables or pass them into functions?