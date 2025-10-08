import React, { useState } from "react";

const AppointmentForm = ({ advocate, onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    caseDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose(true); // booked
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-96 relative shadow-2xl">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          onClick={() => onClose(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-400 mb-4 text-center">
          Book Appointment with {advocate.name}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="input input-bordered border-2 bg-amber-100 border-green-500 w-full rounded-lg accent-green-800"
          />
          <textarea
            name="caseDetails"
            placeholder="Case Details"
            value={formData.caseDetails}
            onChange={handleChange}
            className="textarea bg-white border-2 border-green-500 w-full rounded-lg"
            required
          />
          <button
            type="submit"
            className="btn bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
