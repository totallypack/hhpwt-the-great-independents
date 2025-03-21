import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  // eslint-disable-next-line quotes
  const domString = `
  <div id="loginbutton">
    <image id="HHPAW" src="https://i.imgur.com/LA6W0Wi.jpeg"></image>
    <button id="google-auth" class="btn btn-danger">Login to Get Started!</button>
  </div>
  `;

  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
