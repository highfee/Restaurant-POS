export const handleAddItem = (item, order, setOrder) => {
  let itemExist = order.some((data) => {
    return data.id === item.id;
  });
  if (!itemExist) {
    item.quantity += 1;
    setOrder((prev) => [...prev, item]);
  } else {
    order.map((data) => {
      if (data.id === item.id) {
        item.quantity += 1;
        setOrder((prev) => [...order]);
      }
    });
  }
};

export const handleRemoveItem = (item, order, setOrder) => {
  order.map((data) => {
    if (data.id === item.id) {
      if (item.quantity > 0) {
        item.quantity -= 1;
        // setOrder((prev) => [...order]);
        setOrder(() => order.filter((john) => john.quantity > 0));
      }
    }
  });
};
