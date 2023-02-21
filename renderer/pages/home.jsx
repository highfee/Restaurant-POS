import Head from "next/head";
import Link from "next/link";
import { FaUser, FaUserTie } from "react-icons/fa";
function Home() {
  return (
    <>
      <Head>
        <title>BeeBee Restaurant</title>
      </Head>
      <div className="h-[100vh] bg-[#292b2c] text-white flex flex-col justify-center items-center gap-8">
        <h1 className="text-[8vw] font-[300] text-gay-800">
          BeeBee Restaurant POS{" "}
        </h1>
        <div className="flex gap-12 text-[1.3vw] text-gry-800">
          <p className="flex items-center gap-2 hover:underline">
            <FaUserTie />
            <Link href="adminlogin">Admin login</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline">
            <FaUser />
            <Link href="login">Cashier login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
