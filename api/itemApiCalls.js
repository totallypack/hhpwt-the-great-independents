// edit api on your end to take the (uid) parameter
// ?orderBy="uid"&equalTo="${uid}"
const endpoint = 'https://hhpwt-44882-default-rtdb.firebaseio.com/';
const getItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item.json`, {
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
  console.warn('did getItem work?');
});

const createItem = (payload) => new Promise((resolve, reject) => {
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
  console.warn('did createItem work');
});

const updateItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
  console.warn('did updateItem work');
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
