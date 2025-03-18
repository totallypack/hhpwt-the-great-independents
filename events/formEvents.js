import { createOrder, updateOrder, getOrder } from '../api/orderData';
import { showOrder } from '../pages/orders';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        type: document.querySelector('#item-favorite').checked,
        status: document.querySelector('#item-public').value,
        firebaseKey,
        uid: user.uid,
        timestamp: Date.now()
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrder(user.uid).then((item) => showOrder(item));
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const patchPayload = {
        name: document.querySelector('#name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        type: document.querySelector('#item-favorite').checked,
        status: document.querySelector('#item-public').value,
        firebaseKey,
        uid: user.uid,
        timestamp: Date.now()
      };

      updateOrder(patchPayload).then(() => {
        getOrder(user.uid).then((item) => showOrder(item));
      });
    }
  });
};

export default formEvents;
