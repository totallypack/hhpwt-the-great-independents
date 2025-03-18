import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyItem = () => {
  const domString = '<h1 id="emptyItems">NO MAGIC ITEMS</h1>';
  renderToDOM('#cards', domString);
};

const showItem = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-lg mb-4" id="add-item-btn">Add an Item</button>';
  renderToDOM('#add-button', btnString);
  const payString = '<button class="btn btn-lg mb-4" id="payment-btn">Go to Payment</button>';
  renderToDOM('#add-button', payString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-sub-title">PRICE: ${item.price}</p>
        <i class="btn btn-danger" id="delete-item-btn--${item.firebaseKey}">Delete</i>
        <i id="edit-item-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#cards', domString);
};

export { showItem, emptyItem };
