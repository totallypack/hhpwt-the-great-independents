import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  // eslint-disable-next-line quotes
  const domString = `
  <image class="login-img" src="https://i.imgur.com/kdRFvj2.jpeg"></image>
  <button id="google-auth" class="btn btn-danger">Login to Get Started!</button>
  
  `;

  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
