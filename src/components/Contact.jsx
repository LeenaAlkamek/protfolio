/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMapMarkedAlt } from 'react-icons/fa'


const Contact = () => {
    return (
        <div className="bg-black text-white py-20 " id='contact'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-300 mb-4">Let's Talk</h3>
                        <p>I'm open to discussing web development project or partnership opportunities . </p>
                        <div className="mb-4 mt-8">
                            <FaEnvelope className="inline-block text-pink-400 mr-2"></FaEnvelope>
                            <a href="email:leenoAlkamel@gmail.com " className="hover:underline">yourEmail@exmple.com</a>
                        </div>
                        <div className="mb-4 ">
                            <FaPhone className="inline-block text-pink-400 mr-2"></FaPhone>
                            <span>+967 773 398 837</span>
                        </div>
                        <div className="mb-4 ">
                            <FaMapMarkedAlt className="inline-block text-pink-400 mr-2"></FaMapMarkedAlt>
                            <span>Taiz , Yemen </span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form action="" method="post" className="space-y-4 ">
                            <div>
                                <label htmlFor="name" className="block mb-2"> Your Name</label>
                                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none  focus:border-pink-400 mb-4" placeholder='Enter your name' />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2"> Your Email</label>
                                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none  focus:border-pink-400 mb-4" placeholder='Enter your Email' />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2"> Your Message</label>
                                <textarea type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none  focus:border-pink-400 mb-4" rows="5" placeholder='Enter your message' />
                            </div>
                            <button className="bg-gradient-to-r from-pink-500 to-orange-300 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
