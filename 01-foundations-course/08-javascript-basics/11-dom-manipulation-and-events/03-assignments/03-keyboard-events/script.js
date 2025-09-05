let textBox = document.getElementById('message');
textBox.addEventListener('keydown', (e) => {
  console.log(`key=${e.key}, code=${e.code}`);
});