import React, { useState } from "react";
import { motion } from "framer-motion";

// const SingleAdv = ({ singleadv, onBookAppointment }) => {
//   return (
//     <motion.div
//       className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.04 }}
//       transition={{ duration: 0.4 }}
//     >
//       {singleadv.experience > 5 && (
//         <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
//           PRO
//         </span>
//       )}

//       <img
//         src={singleadv.image}
//         alt={singleadv.name}
//         className="w-28 h-28 rounded-full object-cover border-4 border-green-200 mb-4 shadow-sm"
//       />

//       <h2 className="text-lg font-bold text-gray-800">{singleadv.name}</h2>
//       <p className="text-sm text-gray-500 mb-1">{singleadv.category}</p>

//       <div className="text-gray-500 text-xs space-y-1 mt-2">
//         <p>
//           Experience: <span className="font-medium text-gray-700">{singleadv.experience} yrs</span>
//         </p>
//         <p>
//           Cases Solved: <span className="font-medium text-gray-700">{singleadv.cases_won}</span>
//         </p>
//         <p>
//           Pending Cases: <span className="font-medium text-gray-700">{singleadv.cases_pending}</span>
//         </p>
//         <p>
//           Region: <span className="font-medium text-gray-700">{singleadv.region}</span>
//         </p>
//         <p>
//           Rating: <span className="text-yellow-500 font-semibold">{singleadv.rating} ⭐</span>
//         </p>
//       </div>

//       <button
//         onClick={() => onBookAppointment(singleadv)}
//         className="mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
//       >
//         Book Appointment
//       </button>
//     </motion.div>
//   );
// };

// export default SingleAdv;


const SingleAdv = ({ singleadv, onBookAppointment }) => {
  const [booked, setBooked] = useState(false);

  const handleClick = () => {
    if (!booked) {
      setBooked(true); // button disable
      onBookAppointment(singleadv, () => {
        setBooked(false); // re-enable after booking
      });
    }
  };

  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4 }}
    >
      {singleadv.experience > 5 && (
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          PRO
        </span>
      )}

      <img
        src={singleadv.image}
        alt={singleadv.name}
        className="w-28 h-28 rounded-full object-cover border-4 border-green-200 mb-4 shadow-sm"
      />

      <h2 className="text-lg font-bold text-gray-800">{singleadv.name}</h2>
      <p className="text-sm text-gray-500 mb-1">{singleadv.category}</p>

      <div className="text-gray-500 text-xs space-y-1 mt-2">
        <p>Experience: <span className="font-medium text-gray-700">{singleadv.experience} yrs</span></p>
        <p>Cases Solved: <span className="font-medium text-gray-700">{singleadv.cases_won}</span></p>
        <p>Pending Cases: <span className="font-medium text-gray-700">{singleadv.cases_pending}</span></p>
        <p>Region: <span className="font-medium text-gray-700">{singleadv.region}</span></p>
        <p>Rating: <span className="text-yellow-500 font-semibold">{singleadv.rating} ⭐</span></p>
      </div>

      <button
        onClick={handleClick}
        disabled={booked}
        className={`mt-5 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 ${
          booked ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {booked ? "Booking..." : "Book Appointment"}
      </button>
    </motion.div>
  );
};

export default SingleAdv;
