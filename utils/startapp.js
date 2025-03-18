import domBuilder from '../components/domBuilder';
import navEvents from '../events/navEvents';
import navbar from '../pages/navbar';

const startapp = (user) => {
  console.warn('is the app started?');
  console.warn(user);
  domBuilder();
  navbar();
  navEvents();
};
export default startapp;
