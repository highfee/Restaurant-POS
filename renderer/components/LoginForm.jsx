import { FaLock, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter, use } from "next/router";
import { useState } from "react";

const LoginForm = () => {
  const { asPath, push } = useRouter();
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!data.username && !data.password) {
      setErrorMessage("Pls fill all fields");
      setError(true);
      return;
    }
    if (asPath == "/adminlogin") {
      push("/admin/admin");
      return;
    }

    push("/cashier/home");
  };

  return (
    <section className="h-[70] min-w-[450px]">
      <p className="font-[700] text-center text-white text-5xl mb-[60px]">
        {asPath == "/adminlogin" ? "Admin Log in" : "Cahier Log in"}
      </p>
      <form className="bg-white p-5 pt-7 rounded-md" onSubmit={handleLogin}>
        {error && <p className="text text-red-600 mb-4">* {errorMessage}</p>}
        <div className="flex gap-4 items-center  border border-gray-300 p-2 rounded-md mb-6 focus-within:border-gray-700">
          <FaUser fill="#999" />
          <input
            type="text"
            className="outline-none w-full p-1"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-4 items-center  border border-gray-300 p-2 rounded-md mb-6 focus-within:border-gray-700">
          <FaLock fill="#999" />
          <input
            type="password"
            className="outline-none w-full p-1"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="w-full bg-[#4c91ff] rounded-md p-3 text-2xl text-white">
          Log in
        </button>
      </form>
      <p className="text-white mt-5 underline underline-offset-2">
        <Link href="home">Back to homepage</Link>
      </p>
    </section>
  );
};

export default LoginForm;
