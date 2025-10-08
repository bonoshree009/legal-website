import React, { useState } from 'react';
import LoginForm from './LoginFrom';


const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    role: 'User'
  });

  const [showLogin, setShowLogin] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose(true); // only call on proper submit
  };

  return (
    <>
      {!showLogin && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-96 p-8 relative">
            <button 
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold" 
              onClick={() => onClose(false)} // cross clicked
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-gray-400 text-center">Create Your Account</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="input input-bordered w-full rounded-lg bg-white border-gray-300" required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="input input-bordered w-full rounded-lg bg-white border-gray-300" required />
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input input-bordered w-full rounded-lg  bg-white border-gray-300" required />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="input input-bordered w-full   bg-white rounded-lg border-gray-300" required />
              <select name="role" value={formData.role} onChange={handleChange} className="select select-bordered w-full rounded-lg  bg-white border-gray-300">
                <option>User</option>
                <option>Advocate</option>
              </select>

              <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg mt-2">
                Create Account
              </button>
            </form>

            <p className="mt-4 text-center text-gray-500 text-sm">
              Already have an account?{' '}
              <button onClick={() => setShowLogin(true)} className="text-green-600 hover:underline">
                Sign in
              </button>
            </p>
          </div>
        </div>
      )}

      {showLogin && <LoginForm onClose={() => { setShowLogin(false); onClose(false); }} />}
    </>
  );
};

export default RegisterForm;
