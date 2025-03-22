import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import totalPrice from '../utils/total';

const emptyItem = () => {
  const domString = '<h1 id="emptyItems">NO ITEMS</h1>';
  renderToDOM('#cards', domString);
};

const showItem = (items, orderId) => {
  clearDom();

  if (!items || items.length === 0) {
    emptyItem();
  } else {
    let domString = '';
    try {
      items.forEach((item) => {
        domString += `
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-sub-title">PRICE: $${item.price}.00</p>
            <i class="btn btn-danger" id="delete-item-btn--${item.firebaseKey}">Delete</i>
            <i id="edit-item-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
          </div>
        </div>
        `;
      });
      renderToDOM('#cards', domString);

      const total = `
      <div>
        <h1 class="title">TOTAL: $${totalPrice(items)}.00</h1>
      </div>
      `;
      renderToDOM('#price', total);
    } catch (error) {
      console.error('Error rendering items:', error);
    }
  }
  try {
    const btnString = `
    <div>
    <button class="btn btn-lg mb-4" id="add-item-btn--${orderId}">Add an Item</button>
    <button class="btn btn-lg mb-4" id="payment-btn--${orderId}">Go to Payment</button>
    </div>`;
    renderToDOM('#view', btnString);
  } catch (error) {
    console.error('Error rendering buttons:', error);
  }
};

//test

export { showItem, emptyItem };
