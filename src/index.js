import menuItemsTemplate from './templates/menu-items.hbs';
import menu from './menu.json';
import './styles.css';

const menuRef = document.querySelector('ul.js-menu');
const bodyRef = document.querySelector("body");
const checkBoxRef = document.querySelector("#theme-switch-toggle");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuRef.insertAdjacentHTML('beforeend', menuItemsTemplate(menu));

if (!localStorage.getItem('theme') || localStorage.getItem('theme') === Theme.LIGHT) {
  bodyRef.classList.add(Theme.LIGHT);
}
else {  
  bodyRef.classList.add(Theme.DARK);
  checkBoxRef.checked = true;
};

checkBoxRef.addEventListener('change', onThemeSwitchToggle);

function onThemeSwitchToggle() {
  bodyRef.classList.toggle(Theme.DARK);
  bodyRef.classList.toggle(Theme.LIGHT);

  if (checkBoxRef.checked) {    
    localStorage.setItem('theme', Theme.DARK);    
  }
  else {    
    localStorage.setItem('theme', Theme.LIGHT);    
  };  
};
