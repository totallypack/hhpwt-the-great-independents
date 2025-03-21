import renderToDOM from '../utils/renderToDom';

const navbar = () => {
  const domstring = `
  <div id="nav-container">
    <div id="nav-elements">
      <image src="https://i.imgur.com/LA6W0Wi.jpeg"></image>
      <button id="view-orders">View Orders</button>
      <button id="view-order-form">Create an Order</button>
      <input class="form-control mr-sm-2" id="search" placeholder="Search Orders" aria-label="Search"/>
      <div id="logout-btn"></div>
    </div>
  </div>`;
  renderToDOM('#navigation', domstring);
};

export default navbar;
