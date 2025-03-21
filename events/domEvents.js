import { deleteOrder, getOrders, getSingleOrder } from '../api/orderApiCalls';
import addOrderForm from '../components/addOrderForm';
import showOrders from '../pages/orders';
import { getItems, deleteItem, getSingleItem } from '../api/itemApiCalls';
import { showItem, emptyItem } from '../pages/items';
import addItemForm from '../components/addItemForm';

const domEvents = (user) => {
  document.querySelector('#cards').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-orders')) {
      console.warn('clicked delete');
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }
    if (e.target.id.includes('details')) {
      emptyItem();
      getItems(user.uid).then(showItem);
    }
    if (e.target.id.includes('edit-orders')) {
      console.warn('clicked edit');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((OrderSta) => addOrderForm(OrderSta));
    }
    if (e.target.id.includes('delete-item')) {
      console.warn('clicked delete');
      const [, firebaseKey] = e.target.id.split('--');
      deleteItem(firebaseKey).then(() => {
        getItems(user.uid).then(showItem);
      });
    }
    if (e.target.id.includes('edit-item')) {
      console.warn('clicked edit');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((OrderSta) => addItemForm(OrderSta));
    }
  });
};
export default domEvents;
