// User generated event 
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  console.log('Mouse Clicked');
});

// Programatically generate an event
let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);