import CashierSIdebar from "../../components/CashierSIdebar";
import { FaSearch } from "react-icons/fa";
import { menu } from "../../assets/constant";
import { useState, useDeferredValue } from "react";
import CashierHomeRight from "../../components/CashierHomeRight";
import Submenu from "../../components/Submenu";
import {
  setSubmenu,
  animate,
  unanimate,
} from "../../redux/slices/submenuSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const deferredQuery = useDeferredValue(searchText);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentMenu({
      items: [
        {
          id: "A1",
          name: "Fish and grill",
          price: "1200",
          quantity: 0,
        },
        {
          id: "B1",
          name: "Egusi",
          price: "700",
          quantity: 0,
        },
      ],
    });
  };

  return (
    <div className="bg-[#101214] ">
      <div className="h-screen  fixed top-0 left-0 mb-24 bg-inherit">
        <CashierSIdebar />
      </div>
      <div className="min-h-screen ml-[220px] grid gap-2 cashier__main__menu p-6">
        <div>
          <header>
            <div className="bg-[#292b2c] w-[35%] flex gap-3 p-3 rounded-xl items-center">
              <FaSearch fill="#fff" size={25} fontWeight="300" />
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  className="bg-transparent w-full text-white text-lg focus:outline-0"
                  placeholder="Search"
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </form>
            </div>
          </header>
          <div className=" p-3 mt-8 pb-6 menu_cards">
            {menu.map((item, i) => (
              <div
                key={i}
                className="w-[220px] h-[220px] bg-[#c2e8df] rounded-lg hover:bg-[#beced7] p-4 py-8 flex flex-col justify-between"
                onClick={() => {
                  dispatch(setSubmenu(i));
                  dispatch(animate());
                  setTimeout(() => dispatch(unanimate()), 500);
                }}
              >
                <p>icon</p>
                <div className="">
                  <p className="text-4xl">{item.name}</p>
                  <p className="text-[#555]">{item.items.length} items</p>
                </div>
              </div>
            ))}
          </div>
          <Submenu />
        </div>
        <CashierHomeRight />
      </div>
    </div>
  );
};

export default Home;
