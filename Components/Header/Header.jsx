import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import ProfilePic from "/public/profile.jpg";
import { BiChevronDownCircle } from "react-icons/bi";

const Header = () => {
  return (
    <header className="fixed top-0 w-full flex justify-between bg-secondary-bg lg:bg-primary-bg px-4 lg:py-5 lg:w-full lg:flex-row-reverse lg:flex lg:relative">
      <div className=" lg:text-white font-semibold lg:flex lg:items-center lg:gap-6 lg:lg:px-2 lg:py-1 lg:rounded-full hover:bg-secondary-bg transition-all duration-200 cursor-pointer">
        <Image
          src={ProfilePic}
          alt="Your Profile"
          width={46}
          height={46}
          className="rounded-full lg:float-right m-3 lg:m-0"
        />
        <span className="hidden lg:block">Kaio Bruno</span>
        <button className="hidden lg:block lg:mr-2">
          <BiChevronDownCircle className="text-xl" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-1 text-xl text-primary-text lg:text-sm lg:text-white lg:border lg:border-navbar-hover lg:rounded-full lg:justify-end lg:w-44 lg:mb-3 lg:hover:bg-secondary-bg lg:transition-all lg:duration-200 lg:cursor-pointer  ">
        April
        <BsChevronDown className="text-2xl lg:text-lg lg:ml-10 mr-4" />
      </div>

      <Image
        src="/pic"
        alt="Your Profile"
        width={46}
        height={46}
        className="rounded-full mx-3 my-2 lg:m-0 lg:invisible"
      />
    </header>
  );
};

export default Header;
