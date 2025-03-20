import navbar from '../pages/navbar';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startapp = (user) => {
  console.warn('is the app started?');
  console.warn(user);
  domBuilder(user);
  navbar();
  navEvents(user);
  domEvents(user);
  formEvents(user);
  logoutButton();
};
export default startapp;
