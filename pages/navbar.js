import renderToDOM from '../utils/renderToDom';

const navbar = () => {
  const domstring = `<div id="nav-container">
  <div id="nav-elements">
<img id="logo" src="N/A" >
<button id="view-orders">View Orders</button>
<button id="view-order-form">Create an Order</button>
<input id="search-bar" placeholder="Search Orders>
</div>
</div>`;
  renderToDOM('#navigation', domstring);
};

export default navbar;
