// Multiple event handlers
let home = document.querySelector('#home');
home.addEventListener('click', (e) => {
  console.log('Home menu was clicked');
});

let dashboard = document.querySelector('#dashboard');
dashboard.addEventListener('click', (e) => {
  console.log('Dashboard menu item was clicked');
});

let report = document.querySelector('#report');
report.addEventListener('click', (e) => {
  console.log('Report menu item was clicked');
});

// Single event handler to handle all the 'click' events
let menu = document.querySelector('#menu');

menu.addEventListener('click', (e) => {
  let target = e.target;
  console.log(target);

  switch (target.id) {
    case 'home':
      console.log('Home menu item was clicked');
      break;
    case 'dashboard':
      console.log('Dashboard menu item was clicked');
      break;
    case 'report':
      console.log('Report menu item was clicked');
      break;
  }
});
