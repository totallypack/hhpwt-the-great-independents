import renderToDOM from '../utils/renderToDom';

const navbar = () => {
  const domstring = `
<button id="view-orders">View Orders</button>
<button id="view-order-form">Create an Order</button>
<input id="search-bar" placeholder="Search Orders">`;
  renderToDOM('#nav-elements', domstring);
};

export default navbar;
