const createHome = () => {
	const home = document.createElement('div');
	home.id = 'nav-home';
	home.classList.add('tab-pane', 'fade', 'show', 'active');

	const firstInfo = document.createElement('h1');
	firstInfo.classList.add('my-5', 'p-3');

	const firstInfoContent = document.createElement('kbd');
	firstInfoContent.innerText = 'World class food and inviting atmosphere';

	firstInfo.appendChild(firstInfoContent);

	const secondInfo = document.createElement('h2');
	secondInfo.classList.add('p-3');

	const secondInfoContent = document.createElement('kbd');
	secondInfoContent.innerText = '11 First Street, Çadırkaya, Tercan, ERZİNCAN 24';

	secondInfo.appendChild(secondInfoContent);

	home.appendChild(firstInfo);
	home.appendChild(secondInfo);

	return home;
};

export default createHome;
