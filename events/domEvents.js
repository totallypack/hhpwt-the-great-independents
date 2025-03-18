const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e) {
      console.warn('hurah!');
    }
  });
};
export default domEvents;
