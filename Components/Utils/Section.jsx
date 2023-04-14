import { Content } from "next/font/google";
import React from "react";

const Section = ({ title, children }) => {
  return (
    <section className="m-4">
      <p className="text-primary-text text-lg font-semibold m-2">{title}</p>
      <div className="bg-secondary-bg rounded-3xl shadow-lg shadow-black/20 p-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
