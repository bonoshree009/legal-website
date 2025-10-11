import React from "react";
import SingleAdv from "./SingleAdv";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Advocates = ({ advocatesData, onBookAppointment }) => {
  return (
    <>
      {advocatesData.length > 0 ? (
        advocatesData.map((singleadv) => (
          <motion.div
            key={singleadv.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SingleAdv
              singleadv={singleadv}
              onBookAppointment={(adv, setBookedCallback) => {
                // এখানে আমরা AppointmentForm ওপেন করব
                onBookAppointment(adv, setBookedCallback);
              }}
            />
          </motion.div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500 text-lg mt-10">
          No advocates found in this category.
        </p>
      )}
    </>
  );
  
};

export default Advocates;
