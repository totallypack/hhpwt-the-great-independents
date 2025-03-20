import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const appdivLive = document.querySelector('#app');
  if (appdivLive) {
    const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
    appdivLive.innerHTML = domString;
    document.querySelector('#google-auth').addEventListener('click', signIn);
  }
};

export default loginButton;
