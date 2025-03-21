// edit api on your end to take the (uid) parameter
// ?orderBy="uid"&equalTo="${uid}"
const endpoint = 'https://hhpwt-44882-default-rtdb.firebaseio.com/';
const getItems = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item.json?orderBy="orderId"&equalTo="${orderId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn('Raw data from items query:', data);
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => {
      console.error('Error fetching items:', error);
      reject(error);
    });
});

const createItem = (payload) => new Promise((resolve, reject) => {
  console.warn('Payload before sending to Firebase:', payload);
  console.warn('Price value and type:', payload.price, typeof payload.price);
  fetch(`${endpoint}/item.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateItem = (payload) => new Promise((resolve, reject) => {
  console.warn('Updating item with payload:', payload);
  fetch(`${endpoint}/item/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn('Update response:', data);
      resolve(data);
    })
    .catch(reject);
});

const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getSingleItem,
};
