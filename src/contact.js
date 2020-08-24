const createForm = () => {
	const menu = document.createElement('div');
	menu.id = 'nav-menu';
	menu.classList.add('tab-pane', 'fade');

	const form = document.createElement('form');
	return form;
};
export default createForm;

/*   <form>
            <div class="form-group">
              <label for="exampleInputEmail1"><kbd>Email address</kbd></label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="texter"><kbd>Message</kbd></label>
              <textarea class="form-control" id="texter"  aria-label="With textarea" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
          </form>
          */
