import renderToDOM from '../utils/renderToDom';

const startbuttons = () => {
  const domstring = `
    <div id="start-container">
        <button id="view-orders" class="btn btn-success btn1">View Orders</button>
        <button id="view-order-form" class="btn btn-success btn2">Create an Order</button>
        <button id="view-revenue" class="btn btn-success btn3">View Revenue</button>
    </div>`;
  renderToDOM('#view', domstring);
};

export default startbuttons;
