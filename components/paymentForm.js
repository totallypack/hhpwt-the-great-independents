import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const paymentForm = (obj = {}) => {
  clearDom();

  const domString = `
    <form id="${obj.firebaseKey ? `update-payment--${obj.firebaseKey}` : 'submit-payment'}" class="mb-4">
      <div class="form-group">
        <label for="payment">Payment Type</label>
        <select class="form-select" id="payment" required>
          <option value="" selected disabled>Select payment type</option>
          <option value="credit" ${obj.payment === 'credit' ? 'selected' : ''}>Credit Card</option>
          <option value="debit" ${obj.payment === 'debit' ? 'selected' : ''}>Debit Card</option>
          <option value="cash" ${obj.payment === 'cash' ? 'selected' : ''}>Cash</option>
          <option value="digital" ${obj.payment === 'digital' ? 'selected' : ''}>Digital Wallet</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tip">Tip Amount</label>
        <input type="text" class="form-control" id="tip" placeholder="Tip" value="${obj.tip || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit Payment
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default paymentForm;
