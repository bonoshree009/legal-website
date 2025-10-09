import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

// Loader Component
const Loader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const Legalinfo = () => {
  const LegalData = useLoaderData();
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (LegalData && LegalData.length > 0) {
      setLoading(false);
    }
  }, [LegalData]);

  const handleCardClick = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15 } },
    hover: { scale: 1.03, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🔍 Legal Insights
      </h1>

      {loading ? (
        <Loader />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {LegalData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => handleCardClick(item)}
              className="cursor-pointer flex"
            >
              <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.short_description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                    <span>📅 {item.date}</span>
                    <span>✍️ {item.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              key="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-2xl w-full mx-4 rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✖
              </button>

              <img
                src={selectedItem.thumbnail}
                alt={selectedItem.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedItem.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                📅 {selectedItem.date} | ✍️ {selectedItem.author}
              </p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedItem.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Legalinfo;
