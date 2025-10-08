import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUserCheck, FaLock, FaComments, FaStar } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const WhyChoose = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-xl md:text-4xl font-semibold text-black mb-2">
          কেন আমাদের বেছে নেবেন?
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          যাচাইকৃত পেশাজীবী এবং নিরাপদ যোগাযোগ ব্যবস্থার মাধ্যমে নির্ভরযোগ্য আইনগত সেবা প্রদান।
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <FaUserCheck className="text-green-500 text-4xl mb-4" />,
            title: "যাচাইকৃত অ্যাডভোকেট",
            text: "আমাদের সব অ্যাডভোকেট যাচাইকৃত এবং পেশাদার, যারা আপনার আইনি প্রয়োজনকে সর্বোচ্চ গুরুত্ব দিয়ে সহায়তা করে।",
          },
          {
            icon: <FaLock className="text-green-500 text-4xl mb-4" />,
            title: "নিরাপদ প্ল্যাটফর্ম",
            text: "আপনার কেসের নথিগুলো নিরাপদভাবে সংরক্ষিত থাকে একটি এনক্রিপ্টেড ও সুরক্ষিত অনলাইন সিস্টেমে।",
          },
          {
            icon: <FaComments className="text-green-500 text-4xl mb-4" />,
            title: "সরাসরি যোগাযোগ",
            text: "মেসেজিং, ভিডিও কল বা নিরাপদ ইন-প্ল্যাটফর্ম চ্যাটের মাধ্যমে সরাসরি অ্যাডভোকেটদের সঙ্গে কথা বলুন।",
          },
          {
            icon: <FaStar className="text-green-500 text-4xl mb-4" />,
            title: "ক্লায়েন্ট রিভিউ",
            text: "বাস্তব ক্লায়েন্টদের মতামত পড়ুন এবং সঠিক অ্যাডভোকেট বেছে নিন আপনার আইনি সহায়তার জন্য।",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {card.icon}
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              {card.title}
            </h4>
            <p className="text-gray-600 text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
