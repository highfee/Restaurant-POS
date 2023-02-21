import { GiOpenedFoodCan } from "react-icons/gi";
import { HiCreditCard, HiCurrencyDollar } from "react-icons/hi";

const OrderTotal = ({ order }) => {
  const calcSubtotal = () => {
    const total = 0;
    order.map((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div className="bg-[#292b2c] rounded-xl flex-1 relative p-6">
      {order.length < 1 ? (
        <div className="flex h-full justify-center items-center flex-col gap-8 relative -top-28">
          <GiOpenedFoodCan fill="#a5abb64f" size={100} />
          <p className="text-2xl text-gray-400">No items added</p>
        </div>
      ) : (
        <div>
          <div className="text-gray-300 text-2xl flex flex-col gap-5 pb-8 border-b border-dashed border-gray-500">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>N {calcSubtotal()}</p>
            </div>
            <div className="flex justify-between">
              <p>Tasks 5%</p>
              <p>{(5 / 100) * calcSubtotal()}</p>
            </div>
          </div>
          <div className="text-white text-3xl mt-8 flex justify-between">
            <p>Total</p>
            <p className="text-2xl">
              N{calcSubtotal() + (5 / 100) * calcSubtotal()}
            </p>
          </div>
        </div>
      )}
      <div className="absolute w-full left-0  h-[200px] text-gray-300  bottom-0 px-6">
        <p className="text-[1.5rem]">Payment Method</p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <div className="w-[100px] h-[55px] border border-gray-400 rounded-xl grid place-items-center cursor-pointer">
            <HiCreditCard size={30} fill="white" />
          </div>
          <div className="w-[100px] h-[55px] border border-gray-400 rounded-xl grid place-items-center cursor-pointer">
            <HiCurrencyDollar size={30} fill="white" />
          </div>
        </div>
        <div
          className="w-full h-[50px] border rounded-full mt-4 text-white grid place-items-center text-2xl"
          style={{
            backgroundColor: order.length > 0 ? "#c2dae9" : "#3d3f41",
            color: order.length > 0 ? "#333" : "white",
            opacity: order.length > 0 ? "1" : ".3",
            pointerEvents: order.length > 0 ? undefined : "none",
          }}
          onClick={() => alert("hello")}
        >
          Place Order
        </div>
      </div>
    </div>
  );
};

export default OrderTotal;
