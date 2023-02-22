import Link from "next/link";
import { HiOutlineLogin } from "react-icons/hi";

const CashierSIdebar = () => {
  return (
    <div className=" w-[220px] py-6 px-3 h-full ">
      <p className="text-white text-3xl px-5 py-2 font-[900]">Highfee</p>
      <div className="mt-14  text-[#ddd] text-xl h-2/3 flex flex-col font-[600] justify-between">
        <div className="text-xl flex flex-col gap-5">
          <p className="hover:bg-[#292b2c] px-5 py-2 hover:rounded-lg">
            <Link href="">Reservation</Link>
          </p>
          <p className="hover:bg-[#292b2c] px-5 py-2 hover:rounded-lg">
            <Link href="">Table services</Link>
          </p>
          <p className="hover:bg-[#292b2c] px-5 py-2 hover:rounded-lg active__link">
            <Link href="home">Menu</Link>
          </p>
          <p className="hover:bg-[#292b2c] px-5 py-2 hover:rounded-lg">
            <Link href="">Delivery</Link>
          </p>
          <p className="hover:bg-[#292b2c] px-5 py-2 hover:rounded-lg">
            <Link href="Accounting">Accounting</Link>
          </p>
        </div>
        <div>
          <p className=" px-5 py-2">Cashier name</p>
          <p className="hover:bg-[#292b2c] px-5 py-2 hover:rounded-lg text-xl flex items-center gap-1">
            <HiOutlineLogin />
            <Link href="../home">Log out</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashierSIdebar;
