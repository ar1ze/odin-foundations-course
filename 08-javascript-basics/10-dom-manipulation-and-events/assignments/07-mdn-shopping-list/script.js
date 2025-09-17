// Elements
let btnAdd = document.querySelector('.input-container button');
let inputText = document.querySelector('.input-container input');
let itemListContainer = document.querySelector('.item-list-container');

// Variables

// On click update list
btnAdd.addEventListener('click', () => {

  // Storing and clearing input
  let itemValue  = inputText.value;
  inputText.value = '';

  // Creating new elements
  let itemList = document.createElement('li');
  let itemSpan = document.createElement('span');
  let itemButton = document.createElement('button');

  // Assigning values
  itemSpan.textContent = itemValue;
  itemButton.textContent = 'Delete';

  // Appending to item list container
  itemList.appendChild(itemSpan);
  itemList.appendChild(itemButton);

  // Appending to main container
  itemListContainer.appendChild(itemList);

  // Remove the list on click
  itemButton.addEventListener('click', () => {
    itemListContainer.removeChild(itemList);
  });

  // Input focus after entering input
  inputText.focus();

});



