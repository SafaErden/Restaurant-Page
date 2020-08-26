import createHome from './home';
import createMenu from './menu';
import createForm from './contact';

const createContent = () => {
  const home = createHome();
  const menu = createMenu();
  const contact = createForm();
  return [home, menu, contact];
};

export default createContent;
