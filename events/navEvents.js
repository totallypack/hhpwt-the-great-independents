import { getOrders } from '../api/orderApiCalls';
import addOrderForm from '../components/addOrderForm';
import showOrders from '../pages/orders';
import addItemForm from '../components/addItemForm';
import paymentForm from '../components/paymentForm';

const navEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
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
      const [, orderId] = e.target.id.split('--');
      addItemForm(orderId);
    }
    if (e.target.id.includes('payment-btn')) {
      const [, orderId] = e.target.id.split('--');
      paymentForm(orderId);
    }
  });
};

export default navEvents;
