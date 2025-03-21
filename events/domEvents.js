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
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('Details button clicked - Order ID:', firebaseKey);
      emptyItem();
      // // eslint-disable-next-line no-undef
      // sessionStorage.setItem('activeOrderId', firebaseKey);
      getItems(firebaseKey).then((items) => {
        console.warn('Items retrieved:', items);
        showItem(items, firebaseKey);
      });
    }
    if (e.target.id.includes('edit-orders')) {
      console.warn('clicked edit');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((OrderSta) => addOrderForm(OrderSta));
    }
    if (e.target.id.includes('delete-item')) {
      console.warn('clicked delete');
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItem(firebaseKey).then(async (itemObj) => {
        const { orderId } = itemObj;

        await deleteItem(firebaseKey);
        getItems(orderId).then((items) => showItem(items, orderId));
      });
    }
    if (e.target.id.includes('edit-item')) {
      console.warn('clicked edit');
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItem(firebaseKey).then((itemObj) => {
        const { orderId } = itemObj;

        console.warn('Edit item, orderId:', orderId, 'Type:', typeof orderId);
        console.warn('Item object:', itemObj);

        addItemForm(orderId, itemObj);
      });
    }
  });
};
export default domEvents;
