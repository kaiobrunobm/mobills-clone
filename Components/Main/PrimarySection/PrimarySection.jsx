import { AiOutlineEye } from "react-icons/ai";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
const PrimarySection = () => {
  return (
    <section className="bg-secondary-bg rounded-b-3xl shadow-lg shadow-black/20 mt-[63px]">
      <div className="flex flex-col items-center">
        <p className="text-primary-text text-sm mt-2">Account balance</p>
        <span className="font-semibold text-4xl tracking-wider">R$ 402,64</span>
        <AiOutlineEye className="text-3xl mt-4" />
      </div>

      <div className="flex justify-around mt-5 pb-8">
        <div className="flex gap-3 ">
          <BsArrowUp className="w-12 h-12 p-2 bg-income-color rounded-full" />
          <div className="flex flex-col">
            <p className="text-primary-text text-sm">Incomes</p>
            <span className="text-income-color text-xl font-semibold ">
              R$ 402,64
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <BsArrowDown className="w-12 h-12 p-2 bg-expense-color rounded-full" />
          <div className="flex flex-col">
            <p className="text-primary-text text-sm">Expenses</p>
            <span className="text-expense-color text-xl font-semibold">
              R$ 402,64
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimarySection;
