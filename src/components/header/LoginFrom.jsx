import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

const LoginForm = ({ onClose }) => {
    const [showRegister, setShowRegister] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Signed in successfully!');
        onClose();
    }

    return (
        <>
        {/* LOGIN FORM */}
        {!showRegister && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-96 p-8 relative">
                <button 
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold" 
                    onClick={onClose}
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-6 text-gray-400 text-center">
                    Sign in to your account
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="input input-bordered bg-white w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200" 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        className="input input-bordered bg-white w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200" 
                        required 
                    />

                    <button 
                        type="submit" 
                        className="btn bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg mt-2"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-500 text-sm">
                    Don't have an account?{" "}
                    <button onClick={() => setShowRegister(true)}  className="text-green-600 hover:underline"> Register here </button>
                </p>
            </div>
        </div>
        )}

        {/* REGISTER FORM */}
        {showRegister && (
            <RegisterForm onClose={() => { setShowRegister(false); onClose(); }} />
        )}
        </>
    );
};

export default LoginForm;
