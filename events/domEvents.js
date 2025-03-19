import { deleteOrder, getOrders, getSingleOrder } from '../api/orderApiCalls';
import addOrderForm from '../components/addOrderForm';
import showOrders from '../pages/orders';

const domEvents = (user) => {
  document.querySelector('#cards').addEventListener('click', (e) => {
    if (e.target.id.includes('delete')) {
      console.warn('clicked delete');
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }
    if (e.target.id.includes('details')) {
      console.warn('clicked details');
    }
    if (e.target.id.includes('edit')) {
      console.warn('clicked edit');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((OrderSta) => addOrderForm(OrderSta));
    }
  });
};
export default domEvents;
