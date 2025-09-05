document.getElementById('change-text-btn').addEventListener('click', () => {
  document.getElementById('paragraph-text').textContent = 'Playing guitar soothes the mind and lifts the spirit!';
});

document.getElementById('add-item-btn').addEventListener('click', () => {
  const ul = document.getElementById('benefits-list');
  const li = document.createElement('li');
  li.textContent = 'It reduces stress';
  ul.appendChild(li);
});

document.getElementById('remove-item-btn').addEventListener('click', () => {
  const ul = document.getElementById('benefits-list');
  if (ul.lastChild) {
    ul.removeChild(ul.lastChild);
  }
});
