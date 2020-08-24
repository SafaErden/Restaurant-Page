import createNav from './header.js';
import createContent from './content.js';

const content = document.getElementById('content');
content.classList.add('container', 'text-center', 'bg', 'pt-5');

const tabContent = document.createElement('div');
tabContent.id = 'tab-tabContent';
tabContent.classList.add('tab-content');

const navbar = createNav()[0];
const navMenu = createNav()[1];
const home = createContent()[0];
const menu = createContent()[1];
const contact = createContent()[2];

tabContent.appendChild(navbar);
tabContent.appendChild(navMenu);
tabContent.appendChild(home);
tabContent.appendChild(menu);
tabContent.appendChild(contact);
content.appendChild(tabContent);
