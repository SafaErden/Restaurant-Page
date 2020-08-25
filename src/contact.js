const createForm = () => {
	const menu = document.createElement('div');
	menu.id = 'cont-contact';
	menu.classList.add('tab-pane', 'show', 'fade');

	const form = document.createElement('form');

	const mailField = document.createElement('div');
	mailField.classList.add('form-group', 'm-5');

	const textField = document.createElement('div');
	mailField.classList.add('form-group', 'm-5');

	const address = document.createElement('kbd');
	address.classList.add('h1');
	address.innerText = '11 First Street, Çadırkaya, Tercan, ERZİNCAN 24';

	const phone = document.createElement('kbd');
	phone.classList.add('h1');
	phone.innerText = '+90 267 987 6532';

	mailField.appendChild(address);
	textField.appendChild(phone);

	form.appendChild(mailField);
	form.appendChild(textField);
	menu.appendChild(form);
	return menu;

	const group = document.createElement('div');
};
export default createForm;

/*   <form>
            <div class="form-group">
              <label for="exampleInputEmail1"><kbd>11 First Street, Çadırkaya, Tercan, ERZİNCAN 24</kbd></label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="texter"><kbd>Message</kbd></label>
              <textarea class="form-control" id="texter"  aria-label="With textarea" placeholder="Message"></textarea>
            </div>
          </form>
          */
