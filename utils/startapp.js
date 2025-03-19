import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import navbar from '../pages/navbar';

const startapp = (user) => {
  console.warn('is the app started?');
  console.warn(user);
  domBuilder();
  navbar();
  navEvents(user);
  domEvents(user);
  formEvents(user);
};
export default startapp;
