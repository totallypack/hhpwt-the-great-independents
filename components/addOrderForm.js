import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addOrderForm = (obj = {}) => {
  clearDom();

  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
    <div id="form-styling">
      <div class="form-group">
        <label for="order">Order</label>
        <input type="text" class="form-control" id="name" aria-describedby="item" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" class="form-control" id="phone" value="${obj.phone || ''}" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" value="${obj.email || ''}" required>
      <div class="form-check">
        <select name="type" id="type">
        <option value="Pizza">Pizza</option>
        <option value="Wangs">Wangs</option>
        </select>
        <label class="form-check-label" for="words-learn">Type</label>
      </div>
      <button type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update' : 'Submit'} Item
      </button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
