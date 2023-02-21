import Link from "next/link";

const admin = () => {
  return (
    <div>
      <h1>Admin page</h1>
      <button>
        <Link href="../home">Log out</Link>
      </button>
    </div>
  );
};

export default admin;
