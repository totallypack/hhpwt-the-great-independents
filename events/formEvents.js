import { createOrder, updateOrder, getOrders } from '../api/orderApiCalls';
import showOrders from '../pages/orders';
import { getItems, updateItem, createItem } from '../api/itemApiCalls';
import { showItem } from '../pages/items';
// import { createPayment, updatePayment } from '../api/paymentApiCalls';

const formEvents = (user) => {
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

  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        price: parseFloat(document.querySelector('#price').value) || 0,
        firebaseKey,
      };

      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload).then(() => {
          getItems(user.uid).then((statement) => showItem(statement));
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const patchPayload = {
        name: document.querySelector('#name').value,
        price: parseFloat(document.querySelector('#price').value) || 0,
        uid: user.uid,
        firebaseKey,
      };

      updateItem(patchPayload).then(() => {
        getItems(user.uid).then((statement) => showItem(statement));
      });
    }
  });

  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-payment')) {
      getOrders(user.uid).then((statement) => showOrders(statement));
      // const [, firebaseKey] = e.target.id.split('--');
      // const payload = {
      //   tip: document.querySelector('#tip').value,
      //   payment: document.querySelector('#payment').value,
      //   firebaseKey,
    }

    // createPayment(payload).then(({ payment }) => {
    //   const patchPayload = { firebaseKey: payment };
    //   updatePayment(patchPayload).then(() => {
  });
  //     });
  //   }
  // });
};

export default formEvents;
