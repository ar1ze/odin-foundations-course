// Example
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Exercise
// Task 1
const redText = document.createElement('p');
redText.textContent = "Hey I'm red!";
redText.style.color = 'red';
container.appendChild(redText);

// Task 2
const h3Blue = document.createElement('h3');
h3Blue.textContent = "I'm a blue h3!";
h3Blue.style.cssText = 'color: blue;';
container.appendChild(h3Blue);

// Task 3
const box = document.createElement('div');
box.style.cssText = 'border: 5px solid black; background: pink;';

const boxH1 = document.createElement('h1');
boxH1.textContent = "I'm in a div";
box.appendChild(boxH1);

const boxP = document.createElement('p');
boxP.textContent = 'ME TOO!';
box.appendChild(boxP);

container.appendChild(box);
