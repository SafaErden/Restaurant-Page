import createNav from './header.js';
import createHome from './home.js';

const content = document.getElementById('content');
content.classList.add('container', 'text-center', 'bg', 'pt-5');

const navbar = createNav()[0];
const navMenu = createNav()[1];
const home = createHome();

content.appendChild(navbar);
content.appendChild(navMenu);
content.appendChild(home);
