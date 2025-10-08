import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { name: "Raha", role: "User", text: "ধন্যবাদ।" },
    { name: "Sruty", role: "User", text: "পেজ থেকে অনেক হেল্প পাইছি। আপনাদের অনেক ধন্যবাদ!" },
    { name: "Rohit", role: "User", text: "২৪ ঘণ্টা সার্ভিস পাওয়া যায় — সত্যিই অসাধারণ উদ্যোগ।" },
    { name: "Ritu", role: "User", text: "আমি খুব সন্তুষ্ট। ভবিষ্যতেও আপনাদের সার্ভিস নিতে চাই।" },
    { name: "Adity", role: "User", text: "ওয়েবসাইটটা খুবই হেল্পফুল। ধন্যবাদ এত সুন্দরভাবে সাহায্য করার জন্য!" },
    { name: "Srijit", role: "User", text: "Thank you Ukil for your help." },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([...reviews, { ...newReview, role: "User" }]);
      setNewReview({ name: "", text: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20 text-center">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">ক্লায়েন্ট রিভিউ</h2>
      <p className="text-gray-600 mb-8">
        আমাদের ক্লায়েন্টরা তাদের অভিজ্ঞতা সম্পর্কে যা বলছেন তা জানুন।
      </p>

      {/* Review Slider */}
      <div className="overflow-hidden relative max-w-4xl mx-auto">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: reviews.length * 4,
            ease: "linear",
          }}
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-white shadow-md rounded-2xl p-6 text-left flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaUserCircle className="text-4xl text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{review.text}"</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Add Review Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-10 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
      >
        রিভিউ দিন
      </button>

      {/* Add Review Form */}
      {showForm && (
        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md text-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">নাম *</label>
            <input
              type="text"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
              placeholder="আপনার নাম লিখুন"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">রিভিউ *</label>
            <textarea
              value={newReview.text}
              onChange={(e) =>
                setNewReview({ ...newReview, text: e.target.value })
              }
              placeholder="আপনার মতামত লিখুন..."
              className="w-full border border-gray-300 rounded p-2 focus:outline-none"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold"
          >
            সাবমিট করুন
          </button>
        </motion.form>
      )}
    </div>
  );
};

export default Reviews;
