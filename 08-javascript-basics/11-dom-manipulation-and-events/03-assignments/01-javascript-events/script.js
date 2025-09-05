let btn = document.querySelector('#btn');
function handleClick() {
  console.log('It was clicked by function expression');
}
btn.addEventListener('click', handleClick);

btn.addEventListener('click', function () {
  console.log('It was clicked anonumous function');
});

btn.addEventListener('click', () => {
  console.log('It was clicked by arrow function');
});
