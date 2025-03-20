import { getItems } from '../api/itemApiCalls';
import { getOrders } from '../api/orderApiCalls';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navEvents';
import { showItem } from '../pages/items';
import { showOrder } from '../pages/orders';
import navBar from '../components/navBar';

const startapp = (user) => {
  console.warn(user);
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar(user);
  navigationEvents(user);
  logoutButton();

  getItems(user.uid).then((item) => showItem(item));
  getOrders(user.uid).then((item) => showOrder(item));
};
export default startapp;
