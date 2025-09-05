// Mouse events
let btn = document.querySelector('#btn');

btn.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

btn.addEventListener('mouseup', (e) => {
  let msg = document.querySelector('#message');

  switch (e.button) {
    case 0:
      msg.textContent = 'Left mouse button clicked.';
      break;
    case 1:
      msg.textContent = 'Middle mouse button clicked';
      break;
    case 2:
      msg.textContent = 'Right mouse button clicked.';
      break;
    default:
      msg.textContent = `Unknown mouse button code: ${e.button}`;
  }
});

// Key events
let btnKeys = document.querySelector('#btnKeys');

btnKeys.addEventListener('click', (e) => {
  let keys = [];

  if (e.shiftKey) keys.push('shift');
  if (e.ctrlKey) keys.push('ctrl');
  if (e.altKey) keys.push('alt');
  if (e.metaKey) keys.push('meta');

  let msg = document.querySelector('#messageKeys');
  msg.textContent = `Keys: ${keys.join('+')}`;
});

// Getting screen coordinates
let track = document.querySelector('#track');
track.addEventListener('mousemove', (e) => {
  let log = document.querySelector('#log');
  log.innerText = `
  Screen X/Y: (${e.screenX}, ${e.screenY})
  Client X/Y (${e.clientX}, ${e.clientY})
  `;
});
