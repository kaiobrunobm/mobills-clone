import { FiHome, FiPlus } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiFlag } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import MobillsMd from "/public/mobills-md-logo.svg";

const NavBar = () => {
  return (
    <nav className="fixed bottom-[-0.1rem] w-full h-14 flex justify-center gap-5 items-center text-primary-text bg-secondary-bg border-t border-card-section-secondary-color lg:flex-col lg:w-24 lg:h-full lg:border-t-0 lg:border-r lg:justify-start lg:pt-5">
      <Image src={MobillsMd} alt="Mobills Logo" className="hidden lg:block" />
      <button className="flex flex-col justify-center items-center text-xs">
        <FiPlus className="hidden bg-[#6f5aab] w-14 h-14 rounded-full text-white p-4 mx-5 mb-5 mt-4 shadow-md lg:block" />
      </button>

      <Link
        href="/"
        className=" w-20 flex flex-col justify-center items-center gap-1 text-xs"
      >
        <FiHome className="text-2xl" />
        <p>DashBoard</p>
      </Link>
      <Link
        href="/"
        className=" w-20 flex flex-col justify-center items-center gap-1 text-xs"
      >
        <IoList className="text-2xl" />
        <p>Transactions</p>
      </Link>

      <button className="flex flex-col justify-center items-center text-xs">
        <FiPlus className="bg-mobills-color w-14 h-14 rounded-full text-white p-2 mb-6 lg:mb-0 lg:hidden" />
      </button>

      <Link
        href="/"
        className=" w-20 flex flex-col justify-center items-center gap-1 text-xs"
      >
        <BiFlag className="text-2xl" />
        <p>Budget</p>
      </Link>
      <Link
        href="/"
        className=" w-20 flex flex-col justify-center items-center gap-1 text-xs"
      >
        <TfiMoreAlt className="text-2xl" />
        <p>More</p>
      </Link>
    </nav>
  );
};

export default NavBar;
