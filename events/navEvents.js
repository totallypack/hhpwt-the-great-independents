import { getOrders } from '../api/orderApiCalls';
import addOrderForm from '../components/addOrderForm';
import showOrders from '../pages/orders';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders')) {
      console.warn('view orders clicked!');
      getOrders().then(showOrders);
    }
    if (e.target.id.includes('view-order-form')) {
      console.warn('create order clicked clicked!');
      addOrderForm();
    }
  });
};

export default navEvents;
