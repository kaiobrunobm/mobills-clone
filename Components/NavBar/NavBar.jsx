import { FiHome, FiPlus } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiFlag } from "react-icons/bi";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full h-14 flex justify-center gap-5 items-center text-primary-text bg-secondary-bg border-t border-card-section-secondary-color">
      <Link
        href="/"
        className="flex flex-col justify-center items-center gap-1 text-xs"
      >
        <FiHome className="text-2xl" />
        DashBoard
      </Link>
      <Link
        href="/"
        className="flex flex-col justify-center items-center gap-1 text-xs"
      >
        <IoList className="text-2xl" />
        Transactions
      </Link>

      <Link
        href="/"
        className="flex flex-col justify-center pr-4 items-center text-xs"
      >
        <FiPlus className="bg-mobills-color w-14 h-14 rounded-full text-white p-2 mb-6" />
      </Link>

      <Link
        href="/"
        className="flex flex-col justify-center items-center gap-1 text-xs"
      >
        <BiFlag className="text-2xl" />
        Budget
      </Link>
      <Link
        href="/"
        className="flex flex-col justify-center items-center gap-1 text-xs"
      >
        <TfiMoreAlt className="text-2xl" />
        More
      </Link>
    </nav>
  );
};

export default NavBar;
