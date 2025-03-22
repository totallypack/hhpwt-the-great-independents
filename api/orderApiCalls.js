// edit api on your end to take the (uid) parameter
// ?orderBy="uid"&equalTo="${uid}"
// import client from '../utils/client';

const endpoint = 'https://hhpwt-44882-default-rtdb.firebaseio.com';
const getOrders = (uid) => new Promise((resolve, reject) => {
  console.warn(uid);
  fetch(`${endpoint}/order.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
  console.warn('did getOrder work?');
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
  console.warn('did createOrder work');
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
  console.warn('did updateOrder work');
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const searchOrder = (e, uid) => new Promise((resolve, reject) => {
  const userInput = e.target.value.toLowerCase();
  fetch(`${endpoint}/order.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((orderData) => {
      if (!orderData) {
        resolve([]); // Resolve with empty array if no data
        return;
      }
      // Convert Firebase Object into an array
      const ordersArray = Object.keys(orderData).map((key) => ({
        firebaseKey: key,
        ...orderData[key],
      }));
      // Filter books based on title or description
      const searchResult = ordersArray.filter((order) => order.name.toLowerCase().includes(userInput) || order.email.toLowerCase().includes(userInput));
      resolve(searchResult); // Resolve with filtered results
    })
    .catch(reject);
});

export {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
  searchOrder,
};
