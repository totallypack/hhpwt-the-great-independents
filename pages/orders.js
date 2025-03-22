import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showOrders = (orders) => {
  clearDom();
  console.warn('page loaded');
  console.warn(orders); // Check the content of the orders array
  if (!Array.isArray(orders)) {
    console.error('Expected orders to be an array:', orders);
    return;
  }
  let domstring = '';
  orders.forEach((statement) => {
    domstring += `
    <div id="orders-box">
    <div id="order-txt">
    <h3 class="order-name">${statement.name}</h3>
    <p class="order-status">${statement.status}</p>
    <p class="order-phone">${statement.phone}</p>
    <p class="order-email">${statement.email}</p>
    <p class="order-type">${statement.type}</p>
    </div>
    <div id="order-btns">
      <button class="details-btn" id='details--${statement.firebaseKey}'>Details</button>
      <button class="edit-btn" id='edit-orders--${statement.firebaseKey}'>Edit</button>
      <button class="delete-btn" id='delete-orders--${statement.firebaseKey}'>Delete</button>
    </div>
    </div>`;
  });
  renderToDOM('#cards', domstring);
};
export default showOrders;
