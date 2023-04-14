import PrimarySection from "./PrimarySection/PrimarySection";
import CreditCardSection from "./CreditCardSection/CreditCardSection";
import Section from "../Utils/Section";

const Main = () => {
  return (
    <main className="flex flex-col">
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