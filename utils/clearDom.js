const clearDom = () => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#price').innerHTML = '';
  document.querySelector('#welcome-container').innerHTML = '';
};

export default clearDom;
