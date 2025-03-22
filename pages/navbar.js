import renderToDOM from '../utils/renderToDom';

const navbar = () => {
  const domstring = `
      <img id="logo" src="N/A" >
      <button id="view-orders">View Orders</button>
      <button id="view-order-form">Create an Order</button>
      <input id="search-bar" placeholder="Search Orders">`;
  renderToDOM('#nav-elements', domstring);
};

export default navbar;
