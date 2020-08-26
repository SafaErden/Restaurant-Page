const createNav = () => {
  const mainTitle = document.createElement('h1');
  mainTitle.classList.add('p-0', 'display-3');
  const titleContent = document.createElement('kbd');
  titleContent.innerText = "The Safa's";
  mainTitle.appendChild(titleContent);

  const nav = document.createElement('nav');
  nav.classList.add('mt-5');

  const menuTabs = document.createElement('div');
  menuTabs.id = 'nav-tab';
  menuTabs.classList.add('nav', 'nav-tabs');

  const tabs = ['Home', 'Menu', 'Contact'];

  tabs.forEach((item, index) => {
    const tabItem = document.createElement('a');
    tabItem.id = `#nav-${item.toLowerCase()}-tab`;
    /* eslint-disable no-script-url */
    tabItem.href = 'javascript:void(0)';
    /* eslint-enable no-script-url */
    tabItem.classList.add('nav-item', 'nav-link', 'font-weight-bold', 'h3');
    if (index === 0) {
      tabItem.classList.add('active');
    }
    tabItem.innerText = item;
    menuTabs.appendChild(tabItem);
  });

  nav.appendChild(menuTabs);

  return [mainTitle, nav];
};
export default createNav;
