import navbar from '../pages/navbar';
import { getItems } from '../api/itemApiCalls';
import { getOrders } from '../api/orderApiCalls';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { showItem } from '../pages/items';
import { showOrder } from '../pages/orders';

const startapp = (user) => {
  console.warn('is the app started?');
  console.warn(user);
  navbar();
  domBuilder(user);
  navEvents(user);
  domEvents(user);
  formEvents(user);
  logoutButton();
};
export default startapp;
