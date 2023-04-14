import PrimarySection from "./PrimarySection/PrimarySection";
import CreditCardSection from "./CreditCardSection/CreditCardSection";

const Main = () => {
  return (
    <main className="flex flex-col bg-primary-bg text-white">
      <PrimarySection />
      <CreditCardSection />
      <CreditCardSection />
      <CreditCardSection />
      <CreditCardSection />
      <CreditCardSection />
    </main>
  );
};

export default Main;
