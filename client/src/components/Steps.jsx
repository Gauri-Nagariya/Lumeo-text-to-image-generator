import React from "react";
import { assets, stepsData } from "../assets/assets";
import { motion } from "motion/react";

const Steps = () => {
  return (
    <motion.div
      className="pb-14 flex flex-col items-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">how it works</h1>

      <p className="text-lg text-gray-600 mb-8">
      Simple Steps to Transform Ideas into Visuals
      </p>

      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md rounded-2xl border border-gray-300 cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >
            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
