const createNav = () => {
	var mainTitle = document.createElement('h1');
	mainTitle.classList.add('p-0', 'display-3');
	var titleContent = document.createElement('kbd');
	titleContent.innerText = "The Safa's";
	mainTitle.appendChild(titleContent);

	var nav = document.createElement('nav');
	nav.classList.add('mt-5');

	var menuTabs = document.createElement('div');
	menuTabs.id = 'nav-tab';
	menuTabs.classList.add('nav', 'nav-tabs');

	const tabs = [ 'Home', 'Menu', 'Contact' ];

	tabs.forEach((item, index) => {
		var tabItem = document.createElement('a');
		tabItem.id = '#nav-' + item.toLowerCase() + '-tab';
		tabItem.href = 'javascript:void(0);';
		tabItem.classList.add('nav-item', 'nav-link', 'font-weight-bold', 'h3');
		if (index === 0) {
			tabItem.classList.add('active');
		}
		tabItem.innerText = item;
		menuTabs.appendChild(tabItem);
	});

	nav.appendChild(menuTabs);

	return [ mainTitle, nav ];
};
export default createNav;
