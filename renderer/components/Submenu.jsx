import { HiArrowNarrowRight, HiMinus, HiPlus } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/slices/orderedItems";
import {
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/submenuSlice";

const Submenu = () => {
  const dispatch = useDispatch();
  const currentMenu = useSelector((state) => state.submenu.currentMenu);
  const active = useSelector((state) => state.submenu.active);

  return (
    <div className={`p-3 mt-3 item_cards ${active && "bounce"}`}>
      {currentMenu?.items.map((item, i) => (
        <div
          key={i}
          className="w-[220px] h-[220px] bg-[#292b2c] rounded-lg text-white p-2  flex flex-col pb-4 justify-between relative border-l-2"
        >
          <div className="absolute inset-0 w-[0px] bg-[#c2e8df]  rounded-lg "></div>
          <p className="text-gray-400">
            Orders <HiArrowNarrowRight className="inline" /> {currentMenu.name}
          </p>
          <div>
            <p className="text-[1.7rem]">{item.name}</p>
            <p>N{item.price}</p>
          </div>
          <div className="flex justify-end gap-3 pr-3">
            <div
              className="border border-white px-1 py-2 rounded-lg cursor-pointer hover:scale-95"
              onClick={() => {
                dispatch(remove(item));
                dispatch(decrementQuantity(item));
              }}
            >
              <HiMinus size={22} />
            </div>

            <p className="text-[26px]">{item.quantity}</p>
            <div
              className="border border-white px-1 py-2 rounded-lg cursor-pointer hover:scale-95"
              onClick={() => {
                dispatch(add(item));
                dispatch(incrementQuantity(item));
              }}
            >
              <HiPlus size={22} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
