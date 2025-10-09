import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Advocates from "./advocates";
import RegisterForm from "../../components/header/RegisterForm";
import AppointmentForm from "./AppoinForm";

const AdvocatesPage = () => {
  const advocatesData = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);
  const [userRegistered, setUserRegistered] = useState(false);
  const [appointmentCallback, setAppointmentCallback] = useState(null);

  useEffect(() => {
    const registered = localStorage.getItem("userRegistered");
    if (registered) setUserRegistered(true);
  }, []);

  const categories = [...new Set(advocatesData.map(a => a.category))];
  const filteredAdvocates = selectedCategory
    ? advocatesData.filter(a => a.category === selectedCategory)
    : advocatesData;

  const handleBookAppointment = (adv, callback) => {
    setSelectedAdvocate(adv);
    setAppointmentCallback(() => callback);
    if (!userRegistered) {
      setShowRegister(true);
    } else {
      setShowAppointment(true);
    }
  };

  const handleRegisterClose = (registered = false) => {
    setShowRegister(false);
    if (registered) {
      localStorage.setItem("userRegistered", true);
      setUserRegistered(true);
      toast.success("Account created successfully!");
      setShowAppointment(true); // show appointment form automatically
    }
  };

  const handleAppointmentClose = (booked = false) => {
  setShowAppointment(false);
  if (booked) {
    if (appointmentCallback) appointmentCallback(); // এখন button disable হবে
    toast.success(`Appointment booked with ${selectedAdvocate.name}!`);
  } else {
    // booked না হলে কিছুই হবে না (button enable থাকবে)
    setAppointmentCallback(null);
  }
};


  return (
    <div className="px-6 md:px-12 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
        Our Professional Advocates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-8">
        <div className="md:col-span-3 bg-white rounded-2xl shadow-md border border-gray-100 p-6 h-fit sticky top-20">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-3 text-center">
            Advocate Categories
          </h2>
          <ul className="space-y-2">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-lg text-center transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-green-100 text-green-700 font-semibold border-l-4 border-green-500"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setSelectedCategory("")}
            className="mt-6 w-full bg-green-50 hover:bg-green-100 text-green-700 py-2 rounded-lg font-medium border border-green-300 transition-all duration-300"
          >
            Show All
          </button>
        </div>

        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Advocates
            advocatesData={filteredAdvocates}
            onBookAppointment={handleBookAppointment}
          />
        </div>
      </div>

      {showRegister && <RegisterForm onClose={handleRegisterClose} />}
      {showAppointment && selectedAdvocate && (
        <AppointmentForm advocate={selectedAdvocate} onClose={handleAppointmentClose} />
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default AdvocatesPage;
