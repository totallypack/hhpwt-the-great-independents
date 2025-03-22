import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import client from './client';
import startapp from './startapp';
import logoutButton from '../components/logoutButton';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      console.warn('User status changed:', user);
      console.warn('are we started?');
      startapp(user);
      logoutButton();
    } else {
      // person is NOT logged in
      console.warn('no user');
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
