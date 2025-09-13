import React from "react";
import plansData from "../data/plansData";
import PricingCard from "../component/PricingCard";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="bg-[#FCFCFC] flex flex-col items-center px-20 py-16 gap-10 justify-center">
      <div className="flex flex-col items-center">
        <h2 className="font-cormorant font-medium text-sm uppercase tracking-widest">
          Pricing
        </h2>
        <h1 className="font-jost text-4xl font-bold leading-tight py-5 text-[#111111] text-center">
          Our Affordable Pricing
        </h1>

        {/* Cards with motion */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
          {plansData.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
