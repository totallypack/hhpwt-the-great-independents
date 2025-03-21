import { createOrder, updateOrder, getOrders } from '../api/orderApiCalls';
import showOrders from '../pages/orders';
import { getItems, updateItem, createItem } from '../api/itemApiCalls';
import { showItem } from '../pages/items';
import paymentForm from '../components/paymentForm';
// import totalPrice from '../utils/total';
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
    // Getting the input elements directly from the form that was submitted
    const nameInput = e.target.querySelector('#name');
    const priceInput = e.target.querySelector('#price');
    const { orderId } = e.target.dataset;

    // Getting the values
    const nameValue = nameInput ? nameInput.value : '';
    const priceValue = priceInput ? Number(priceInput.value) : 0;

    if (e.target.id.includes('submit-item')) {
      const payload = {
        name: nameValue,
        price: priceValue,
        // eslint-disable-next-line object-shorthand
        orderId: orderId,
        uid: user.uid,
      };

      console.warn('Final payload:', payload);

      createItem(payload).then(({ name }) => {
        const patchPayload = {
          firebaseKey: name,
          orderId
        };
        updateItem(patchPayload).then(() => {
          getItems(orderId).then((items) => showItem(items, orderId));
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const patchPayload = {
        name: nameValue,
        price: priceValue,
        // eslint-disable-next-line object-shorthand
        orderId: orderId,
        uid: user.uid,
        firebaseKey
      };

      updateItem(patchPayload).then(() => {
        getItems(orderId).then((items) => showItem(items, orderId));
      });
    }
  });

  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-payment')) {
      const [, orderId] = e.target.id.split('--');
      paymentForm(orderId);
      const [, firebaseKey] = e.target.id.split('--');
      const orderPatchPayload = {
        status: 'Closed',
        firebaseKey,
      };

      updateOrder(orderPatchPayload)
        .then(() => getOrders(user.uid).then((orders) => showOrders(orders)))
        .catch((error) => {
          console.error('Error processing payment:', error);
        });
      // // eslint-disable-next-line no-undef
      // sessionStorage.removeItem('activeOrderId');
    }
  });
  // const [, firebaseKey] = e.target.id.split('--');
  // const payload = {
  //   tip: document.querySelector('#tip').value,
  //   payment: document.querySelector('#payment').value,
  //   uid: user.uid,
  //   firebaseKey,

  // createPayment(payload).then(({ payment }) => {
  //   const patchPayload = { firebaseKey: payment };
  //   updatePayment(patchPayload).then(() => {
  //     });
  //   }
  // });
};

export default formEvents;
