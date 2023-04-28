import Section from "@/Components/Utils/Section";
const CreditCardSection = () => {
  return (
    <Section title="Credit cards">
      <div className="flex gap-4">
        <button className="bg-card-section-color px-8 py-2 rounded-full text-sm">
          Open invoices
        </button>
        <button className="bg-card-section-secondary-color px-8 py-2 rounded-full text-sm text-card-section-color">
          Closed invoices
        </button>
      </div>

      <div className="flex mt-10 pb-4 border-b border-card-section-secondary-color items-center">
        <div className="w-9 h-9 rounded-full bg-purple-600 " />
        <div className="w-full flex justify-between items-center">
          <div className="space-y-2 ml-5 ">
            <p className="text-sm">
              Nubank{" "}
              <span className="text-primary-text">- Closes on 07/May</span>
            </p>
            <p className="text-expense-color text-sm">R$ 226,09</p>
          </div>
          <button className="bg-purple-600 px-2 py-1 text-sm rounded-full">
            Automatic
          </button>
        </div>
      </div>

      <div className="flex justify-between p-1 mt-4">
        <p>Total</p>
        <p>R$ 226,09</p>
      </div>
    </Section>
  );
};

export default CreditCardSection;
