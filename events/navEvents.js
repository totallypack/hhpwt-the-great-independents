import { getOrders } from '../api/orderApiCalls';
import addOrderForm from '../components/addOrderForm';
import showOrders from '../pages/orders';
import addItemForm from '../components/addItemForm';
import paymentForm from '../components/paymentForm';

const navEvents = (user) => {
  document.querySelector('#nav-elements').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders')) {
      console.warn('view orders clicked!');
      console.warn('User:', user);
      getOrders(user.uid).then(showOrders);
    }
    if (e.target.id.includes('view-order-form')) {
      console.warn('create order clicked clicked!');
      addOrderForm();
    }
  });

  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('add-item-btn')) {
      console.warn('create item clicked clicked!');
      addItemForm();
    }
    if (e.target.id.includes('payment-btn')) {
      console.warn('go to payment clicked clicked!');
      paymentForm();
    }
  });
};

export default navEvents;
