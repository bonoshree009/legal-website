import React, { useContext, useState } from 'react';
import {AuthContext} from '../../Context/AuthContext'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import LoginForm from './LoginFrom';

const RegisterForm = ({ onClose }) => {
  const { createuser, updateuser, setuser, google } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
   // const phone = e.target.phone.value;
    const password = e.target.password.value;
   // const role = e.target.role.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error('Password must contain at least 6 characters, one uppercase & one lowercase');
      return;
    }

    createuser(email, password)
      .then(res => {
        const user = res.user;
        updateuser({ displayName: fullName })
          .then(() => {
            setuser({ ...user, displayName: fullName });
            toast.success("Account Created Successfully!");
            onClose(true);
          });
      })
      .catch(err => toast.error(err.message));
  };

  const handleGoogle = () => {
    google()
      .then(() => {
        toast.success("Signed in with Google!");
        onClose(true);
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <>
      {!showLogin && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-96 p-8 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
              onClick={() => onClose(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-gray-400 text-center">Create Your Account</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input name="fullName" type="text" placeholder="Full Name"
                className="input input-bordered w-full rounded-lg bg-white border-gray-300" required />

              <input name="email" type="email" placeholder="Email Address"
                className="input input-bordered w-full rounded-lg bg-white border-gray-300" required />

              <input name="phone" type="text" placeholder="Phone Number" 
                className="input input-bordered w-full rounded-lg bg-white border-gray-300" required />

              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full rounded-lg bg-white border-gray-300 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>

              <select name="role" className="select select-bordered w-full rounded-lg bg-white border-gray-300">
                <option>User</option>
                <option>Advocate</option>
              </select>

              <button type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg mt-2">
                Create Account
              </button>
            </form>

            <button
              onClick={handleGoogle}
              className="btn w-full mt-3 bg-blue-50 hover:bg-blue-100 text-blue-700 flex items-center gap-2 border-blue-300"
            >
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" />
              Sign in with Google
            </button>

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
