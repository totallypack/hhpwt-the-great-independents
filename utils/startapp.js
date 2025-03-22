import navbar from '../pages/navbar';
import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import showWelcome from '../pages/welcome';
import searchEvents from '../events/searchEvents';

const startapp = (user) => {
  console.warn('is the app started?');
  console.warn(user);
  domBuilder(user);
  navbar();
  showWelcome(user);
  navEvents(user);
  domEvents(user);
  formEvents(user);
  searchEvents(user);
};
export default startapp;
