import { searchOrder } from '../api/orderApiCalls';
import showOrders from '../pages/orders';

const searchEvents = (user) => {
  document.querySelector('#search-container').addEventListener('search', (e) => {
    if (e.target.id === 'search-bar') {
      searchOrder(e, user.uid).then(showOrders);
    }
  });
};
export default searchEvents;
