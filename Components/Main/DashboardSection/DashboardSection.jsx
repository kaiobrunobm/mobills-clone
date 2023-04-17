import { AiOutlineEye, AiOutlineBank } from "react-icons/ai";
import { BsArrowDown, BsArrowUp, BsCreditCard2Back } from "react-icons/bs";
import DashboardCard from "./DashboardCard/DashboardCard";

const DashboardSection = () => {
  return (
    <section className="bg-secondary-bg rounded-b-3xl shadow-lg shadow-black/20 lg:bg-primary-bg lg:shadow-none lg:mt-0">
      <div className="flex flex-col items-center lg:hidden">
        <p className="text-primary-text text-sm mt-2">Account balance</p>
        <span className="font-semibold text-4xl tracking-wider">R$ 402,64</span>
        <AiOutlineEye className="text-3xl mt-4" />
      </div>

      <h1 className="hidden lg:block text-4xl font-medium m-4">DashBoard</h1>
      <div className="flex justify-center mt-5 pb-8 gap-5 lg:gap- lg:mx-3">
        <DashboardCard
          icon={
            <AiOutlineBank className="bg-balance-color w-12 h-12 p-2 rounded-full" />
          }
          title="Current balance"
          value={
            <span className="text-xl font-semibold lg:text-white lg:font-medium">
              R$ 402,64
            </span>
          }
          className="text-income-color lg:text-white"
        />
        <DashboardCard
          icon={
            <BsArrowUp className="bg-income-color w-12 h-12 p-2 rounded-full" />
          }
          title="Incomes"
          value={
            <span className="text-xl text-income-color font-semibold lg:text-white lg:font-medium">
              R$ 402,64
            </span>
          }
          hidden={false}
        />
        <DashboardCard
          icon={
            <BsArrowDown className="bg-expense-color w-12 h-12 p-2 rounded-full" />
          }
          title="Expenses"
          value={
            <span className="text-xl text-expense-color font-semibold lg:text-white lg:font-medium">
              R$ 402,64
            </span>
          }
          className="text-income-color lg:text-white"
          hidden={false}
        />

        <DashboardCard
          icon={
            <bs className="bg-card-section-color w-12 h-12 p-2 rounded-full" />
          }
          title="Credit card"
          value={
            <span className="text-xl font-semibold lg:text-white lg:font-medium">
              R$ 226,09
            </span>
          }
          className="text-income-color lg:text-white"
        />
      </div>
    </section>
  );
};

export default DashboardSection;
