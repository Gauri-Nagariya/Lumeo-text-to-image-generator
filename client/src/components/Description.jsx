import React from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 "
      initial={{ opacity: 0.2, y: 30 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4 font-semibold mb-2 ">
        Create AI Images{" "}
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-col lg:flex-row items-center ">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-2xl "
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-powered Text to Image Generator
          </h2>

          <p className="text-gray-600 mb-4">
          Introducing our AI-powered Text-to-Image Generator, a cutting-edge tool that turns your imagination into reality. Simply describe your vision in words, and our intelligent engine instantly transforms it into a high-quality, visually stunning image.
          </p>

          <p className="text-gray-600">
          Whether you’re a designer, creator, or just exploring your creativity, this tool makes it easy to bring your ideas to life. No design skills required—just type, watch the magic happen, and download or share your masterpiece in seconds.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
