import renderToDOM from '../utils/renderToDom';

const showWelcome = (user) => {
  const domstring = `<h1 id="welcome-message">Welcome, ${user.displayName}!</h1>
  <div id="director-btns">
  <button id="view-btn">View Orders</button>
  <button id="create-btn">Create an Order</button>
  </div>`;
  renderToDOM('#welcome-container', domstring);
};

export default showWelcome;
