import createNav from './header.js';

const content = document.getElementById('content');

const navbar = createNav()[0];
const navMenu = createNav()[1];

content.appendChild(navbar);
content.appendChild(navMenu);
