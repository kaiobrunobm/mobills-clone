import DashboardSection from "./DashboardSection/DashboardSection";
import CreditCardSection from "./CreditCardSection/CreditCardSection";

const DashBoard = () => {
  return (
    <main className="flex flex-col bg-primary-bg text-white lg:pl-[95px] mt-[63px] mb-[54px] lg:m-0">
      <DashboardSection />
      <CreditCardSection />
      <CreditCardSection />
      <CreditCardSection />
      <CreditCardSection />
    </main>
  );
};

export default DashBoard;
