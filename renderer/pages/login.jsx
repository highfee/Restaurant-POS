import Head from "next/head";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="bg-[#101214]  h-[100vh] flex justify-center items-center">
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
