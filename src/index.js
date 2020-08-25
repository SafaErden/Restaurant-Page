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

const tabs = document.querySelectorAll('.nav-link');

tabs.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		tabs.forEach((it, i) => {
			let ids = 'cont-' + it.id;
			const pick = document.getElementById('cont-' + it.innerHTML.toLowerCase());

			if (i === index) {
				pick.classList.add('active');
				it.classList.add('active');
			} else {
				pick.classList.remove('active');
				it.classList.remove('active');
			}
		});
	});
});
