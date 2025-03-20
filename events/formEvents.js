import { createOrder, updateOrder, getOrders } from '../api/orderApiCalls';
import showOrders from '../pages/orders';
onst formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        type: document.querySelector('#type').value,
        status: 'Open',
        uid: user.uid,
        firebaseKey,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {

          getOrders(user.uid).then((statement) => showOrders(statement));
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
        status: 'Open',
        uid: user.uid,
        firebaseKey,
      };

      updateOrder(patchPayload).then(() => {
        getOrders(user.uid).then((statement) => showOrders(statement));
      });
    }
  });
};

export default formEvents;
