import createHome from './home.js';
import createMenu from './menu.js';
import createForm from './contact.js';

const createContent = () => {
	const home = createHome();
	const menu = createMenu();
	const contact = createForm();
	return [ home, menu, contact ];
};

export default createContent;
