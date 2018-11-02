const button = document.querySelector('button');
const body = document.querySelector('body');
let theme = 'light';

button.addEventListener('click', function () {
  if (theme === 'light') {
    body.classList.add('theme--dark');
    theme = 'dark';
    button.textContent = 'Light Mode';
  } else {
    body.classList.remove('theme--dark');
    theme = 'light';
    button.textContent = 'Dark Mode';
  }
});