import renderToDOM from '../utils/renderToDom';

const navbar = () => {
  const domstring = `
      <button id="view-orders">View Orders</button>
      <button id="view-order-form">Create an Order</button>
      <div id="search-container">
      <input id="search-bar" placeholder="Search Orders">
      </div>`;
  renderToDOM('#nav-elements', domstring);
};

export default navbar;
