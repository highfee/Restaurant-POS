import { BiTrashAlt } from "react-icons/bi";

const OrderedItemCard = ({ item, i, order, setOrder }) => {
  const handleRemove = (e) => {
    e.target.parentNode.parentNode.classList.remove("orderedItem");
    e.target.parentNode.parentNode.classList.add("removedItem");

    order.map((data) => {
      if (data.id === item.id) {
        item.quantity = 0;
      }
    });

    setTimeout(() => {
      setOrder(order.filter((item, index) => index !== i));
    }, 500);
  };

  return (
    <div className="h-[60px] min-h-[60px] bg-[#292b2c] rounded-xl px-6 flex items-center justify-between orderedItem">
      <div className="flex gap-2 items-center">
        <div onClick={handleRemove}>
          <BiTrashAlt
            fill="white"
            size={25}
            className=" remove pointer-events-none"
          />
        </div>
        <div className="h-6 w-6 bg-white rounded-full text-l grid place-items-center">
          {i + 1}
        </div>
        <p className="text-gray-300 text-xl font-[600]">
          {item.name} <span className="text-gray-400">x{item.quantity}</span>
        </p>
      </div>
      <p className="text-gray-300 text-xl font-[600]">
        N{item.price * item.quantity}
      </p>
    </div>
  );
};

export default OrderedItemCard;
