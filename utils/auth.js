import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDom';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  clearDom();
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#view-orders').innerHTML = '';
  document.querySelector('#view-order-form').innerHTML = '';
  document.querySelector('#search-container').innerHTML = '';
  firebase.auth().signOut();
};

export { signIn, signOut };
