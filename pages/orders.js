import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showOrders = (orders) => {
  clearDom();
  console.warn('page loaded');
  let domstring = '';
  orders.forEach((statement) => {
    domstring += `<h3 class="order-name">${statement.name}</h3>
    <p class="order-status">${statement.status}</p>
    <p class="order-phone">${statement.phone}</p>
    <p class="order-email">${statement.email}</p>
    <p class="order-type">${statement.type}</p>
    <button id='details--${statement.firebaseKey}>Details</button>
    <button id='edit--${statement.firebaseKey}>Edit</button>
    <button id='delete--${statement.firebaseKey}>Delete</button>'`;
  });
  renderToDOM('#cards', domstring);
};
export default showOrders;
