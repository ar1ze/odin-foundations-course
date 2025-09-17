// Single event listener
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  console.log('Hello World');
  console.log(e.target);
});

// Group of listeners
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>
  button.addEventListener('click', () => {
    console.log(`You clicked on button with id: ${button.id}!`);
  })
);
