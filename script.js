function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  menu.classList.toggle('open')
  icon.classList.toggle('open');
}

const cvButtonEl = document.querySelector('.js-button-cv');
const langButtonEl = document.querySelector('.js-options-container');

cvButtonEl.addEventListener('click', () => {
  if(langButtonEl.classList.contains('options-container')) { // Check if langButtonEl has the class 'options-container'
    langButtonEl.classList.remove('options-container');
    langButtonEl.classList.add('cv-visible');
  } else if(langButtonEl.classList.contains('cv-visible')) { // Check if langButtonEl has the class 'cv-visible'
    langButtonEl.classList.remove('cv-visible');
    langButtonEl.classList.add('options-container');
  }
});
