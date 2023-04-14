import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import ProfilePic from "/public/profile.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 w-full flex justify-between bg-secondary-bg">
      <Image
        src={ProfilePic}
        alt="Your Profile"
        width={46}
        height={46}
        className="rounded-full mx-3 my-2"
      />

      <div className="flex items-center justify-center gap-1 text-xl text-primary-text">
        April
        <BsChevronDown className="text-2xl" />
      </div>

      <Image
        src="/pic"
        alt="Your Profile"
        width={46}
        height={46}
        className="rounded-full mx-3 my-2"
      />
    </header>
  );
};

export default Header;
