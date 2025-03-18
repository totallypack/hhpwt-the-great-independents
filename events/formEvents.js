import { createOrder, updateOrder, getOrder } from '../api/orderApiCalls';
import showOrders from '../pages/orders';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        type: document.querySelector('#type').checked,
        status: document.querySelector('#status').value,
        firebaseKey,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrder().then((statement) => showOrders(statement));
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const patchPayload = {
        name: document.querySelector('#name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        type: document.querySelector('#type').value,
        status: document.querySelector('#status').value,
        firebaseKey,
      };

      updateOrder(patchPayload).then(() => {
        getOrder().then((statement) => showOrders(statement));
      });
    }
  });
};

export default formEvents;
