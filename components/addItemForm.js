import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addItemForm = (orderId, obj = {}) => {
  console.warn('Creating form with orderId:', orderId, 'Type:', typeof orderId);
  clearDom();

  const formId = obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item';

  const domString = `
    <form id="${formId}" class="mb-4" data-order-id="${orderId}">
      <div class="form-group">
        <label for="order">Order</label>
        <input type="text" class="form-control" id="name" aria-describedby="item" placeholder="Item Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" placeholder="Price" value="${obj.price || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update' : 'Submit'} Item
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
