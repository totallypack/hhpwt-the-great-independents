import renderToDOM from '../utils/renderToDom';

const navbar = () => {
  const domstring = `
      <image class="login-img2" src="https://i.imgur.com/kdRFvj2.jpeg"></image>
      <button id="view-orders">View Orders</button>
      <button id="view-order-form">Create an Order</button>
      <div id="search-container">
      <input id="search-bar" type="search" placeholder="Search Orders">
      </div>
      <div id="login-form-container"></div>
      `;
  renderToDOM('#navigation', domstring);
};

export default navbar;
