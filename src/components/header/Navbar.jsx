import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import logoimg from '/src/assets/logo.jpg';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginFrom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.info("Logged out. Come back soon!");
      })
      .catch(err => console.log(err));
  };

  const links = (
    <>
      <Link to='/'><li className='m-2 text-gray-700 hover:text-green-600'>Home</li></Link>
      <Link to="/advocates"><li className="m-2 text-gray-700 hover:text-green-600">Advocates</li></Link>
      <Link to='/legal-insights'><li className='m-2 text-gray-700 hover:text-green-600'>Legal Insights</li></Link>
      <Link to='/branch'><li className='m-2 text-gray-700 hover:text-green-600'>Our Branches</li></Link>
    </>
  );

  return (
    <div className="navbar shadow-sm bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost bg-white text-green-400 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost bg-white text-green-400 md:text-black text-xl flex items-center gap-2">
          <img src={logoimg} alt="Logo" className='h-10' />
          <div>
            <h1>উকিল</h1>
            <p className='text-[10px]'>Talk to Advocate</p>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        {!user ? (
          <>
            <button className="btn bg-white border-0 text-gray-600 hover:text-[#008236]" onClick={() => setShowLogin(true)}>Login</button>
            <button className="btn bg-[#008236] border-0" onClick={() => setShowRegister(true)}>Register</button>
          </>
        ) : (
          <button className="btn bg-red-500 text-white border-0" onClick={handleLogOut}>Logout</button>
        )}
      </div>

      {showRegister && <RegisterForm onClose={() => setShowRegister(false)} />}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      <ToastContainer />
    </div>
  );
};

export default Navbar;
