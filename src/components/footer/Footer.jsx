import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRegStar, FaRegCircle } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className=" text-black">
    

<div className="max-w-6xl mx-auto px-4 py-12"> 
    <div className="bg-white text-black rounded-2xl shadow-lg p-8 md:flex md:gap-8 items-center">
         {/* Left text */} <div className="md:w-1/2 mb-8 md:mb-0 items-center justify-center h-full">
          <h2 className="text-2xl font-bold text-center my-2"> যোগাযোগ করুন </h2>
           <p>আপনার কোনো প্রশ্ন আছে বা কোনো প্রজেক্ট নিয়ে আলোচনা করতে চান? আমাদের সঙ্গে সরাসরি WhatsApp এ বার্তা পাঠান।</p> 
           <p className= "text-black mt-6"> আমরা ২৪ ঘন্টার মধ্যে উত্তর দেব। </p> </div>
            {/* Right form */} <div className="md:w-1/2"> <form className="space-y-4"> <div> 
                <label className="block mb-1" htmlFor="name">নাম *</label>
                 <input className="w-full p-2 rounded border border-gray-300" type="text" id="name" placeholder="আপনার পূর্ণ নাম" />
                 </div> <div> <label className="block mb-1" htmlFor="email">ইমেইল</label>
                  <input className="w-full p-2 rounded border border-gray-300" type="email" id="email" placeholder="you@example.com" /> </div> <div> <label className="block mb-1" htmlFor="message">বার্তা *</label> <textarea className="w-full p-2 rounded border border-gray-300" id="message" placeholder="আপনি কীভাবে সাহায্য চাইবেন?" rows="4" ></textarea> </div> 
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold" type="submit" >
                     WhatsApp এ পাঠান </button> </form> </div> </div> </div>


    
            {/* Actual Footer */}
            <div className=" border-y-2 border-green-500">
                <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-black">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">উকিল</h3>
                        <p>Connecting clients with verified lawyers for all legal needs.</p>
                    </div>

                    {/* For Clients */}
                    <div>
                        <h4 className="font-semibold mb-3">For Clients</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-500">Find Lawyers</a></li>
                            <li><a href="#" className="hover:text-green-500">My Cases</a></li>
                            <li><a href="#" className="hover:text-green-500">Legal Blog</a></li>
                        </ul>
                    </div>

                    {/* For Lawyers */}
                    <div>
                        <h4 className="font-semibold mb-3">For Lawyers</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-500">My Profile</a></li>
                            <li><a href="#" className="hover:text-green-500">My Cases</a></li>
                            <li><a href="#" className="hover:text-green-500">My Blogs</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold mb-3">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-500">Contact Us</a></li>
                            <li><a href="#" className="hover:text-green-500">FAQ</a></li>
                            <li><a href="#" className="hover:text-green-500">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="  pt-4 text-center text-gray-400">
                    © 2025 Ukil System. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
