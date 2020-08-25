const createMenu = () => {
  const menu = document.createElement('div');
  menu.id = 'cont-menu';
  menu.classList.add('tab-pane', 'show', 'fade');

  const deck = document.createElement('div');
  deck.classList.add('card-deck', 'mt-5');
  /* eslint-disable no-tabs */
  const content = [
    {
      img: 'pizza',
      title: 'Pizza Menu',
      info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'ham',
      title: 'Hamburger Menu',
      info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'spag',
      title: 'Spaghetti Menu',
      info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  /* eslint-enable no-tabs */
  content.forEach((item) => {
    const deckItem = document.createElement('div');
    deckItem.classList.add('card');

    const itemImage = document.createElement('img');
    itemImage.src = `./assets/image/${item.img}.jpg`;
    itemImage.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = item.title;

    const cardInfo = document.createElement('p');
    cardInfo.classList.add('card-text');
    cardInfo.innerText = item.info;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardInfo);

    deckItem.appendChild(itemImage);
    deckItem.appendChild(cardBody);

    deck.appendChild(deckItem);
  });

  menu.appendChild(deck);
  return menu;
};

export default createMenu;
