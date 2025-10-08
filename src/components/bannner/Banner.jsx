import React from 'react';
import { useNavigate } from "react-router-dom"; // react-router-dom import

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bannerImg from '../../assets/div3.jpg';

const Banner = () => {
  const navigate = useNavigate(); // hook for navigation

  const handleImageClick = () => {
    navigate("/advocates"); // Advocates page route
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-md overflow-hidden my-10 p-6 md:p-12">
      {/* Left Side - Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#1e293b] leading-snug">
          মিনিটের মধ্যেই খুঁজে নিন <br /> আপনার উপযুক্ত আইনজীবী
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          অভিজ্ঞতা, বিশেষজ্ঞতা ও চেম্বার অনুযায়ী যাচাইকৃত আইনজীবীদের প্রোফাইল দেখুন। <br />
          আইনি পদক্ষেপ নেওয়ার আগে পড়ুন বিশেষজ্ঞদের ব্লগ, জানুন আপনার অধিকার সম্পর্কে।
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <button className="btn btn-primary bg-[#008236] px-8">Get Started</button>
          <button className="btn bg-white  border-1 border-green-500 text-[#008236] px-8">Sign In</button>
        </motion.div>

        <motion.div
          className="pt-4 text-sm text-gray-700 flex flex-wrap gap-2 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="text-green-600">●</span> যাচাইকৃত প্রোফাইল
          <span className="text-green-600">●</span> বিশেষজ্ঞ অনুসন্ধান
          <span className="text-green-600">●</span> নিরাপদ অনুরোধ
          <span className="text-green-600">●</span> সহায়ক ব্লগ
        </motion.div>
      </motion.div>

      {/* Right Side - Image Section */}
      <motion.div
        className="flex-1 flex justify-center mt-8 md:mt-0 cursor-pointer" // cursor-pointer added
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onClick={handleImageClick} // click handler
      >
        <img
          src={bannerImg}
          alt="Advocate working"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </motion.div>

      
    </div>
  );
};

export default Banner;
