const totalPrice = (items) => {
  if (!items || !Array.isArray(items)) {
    console.warn('No Items');
    return 0;
  }

  return items.reduce((total, item) => {
    const itemPrice = Number(item.price) || 0;
    return total + itemPrice;
  }, 0);
};

export default totalPrice;
