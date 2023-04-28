import { FiPlus } from "react-icons/fi";
import { BsGraphUp, BsThreeDotsVertical } from "react-icons/bs";
import Button from "./Button/Button";

const Account = () => {
  return (
    <main className="flex flex-col bg-primary-bg text-white lg:pl-[95px] mt-[63px] mb-[54px] lg:m-0 h-screen w-full">
      <div className="flex items-center justify-between w-full px-20">
        <h1 className="hidden lg:block text-4xl font-medium m-4">Accounts</h1>
        <div className="flex gap-4">
          <Button>
            <FiPlus className="text-[#7c4dff]" size={20} />
          </Button>
          <Button>
            <BsGraphUp size={20} />
          </Button>
          <Button>
            <BsThreeDotsVertical size={20} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] h-full w-full">
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default Account;
