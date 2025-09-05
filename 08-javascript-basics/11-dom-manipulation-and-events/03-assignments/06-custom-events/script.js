function highlight(elem, callback) {
  elem.style.backgroundColor = 'yellow';
  
  if (callback && typeof callback === 'function') {
    callback(elem);
  }

  let note = document.querySelector('.note');
  function addBorder(elem) {
    elem.style.border = 'solid 1px red';;
  }

  highlight(note, addBorder);
}

let note = document.querySelector('.note');
highlight(note);