/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import AboutImg from '../assets/hero.png'

const About = () => {
  return (
    <div className="bg-black text-white py-20 " id='about'>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img src={AboutImg} alt="AboutImg" className="w-72 h-75 rounded object-cover mb-8 md:mb-0" />
          <div className="flex-1">
            <p className="text-lg mb-8">I'm an Information Technology Engineer , I Graduated from Al-Saeed College of Engineering and Information Teachnology in Taiz University in the academic year 2023-2024  </p>
 {/* ////////////////////////////////////// */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5 transform transition-transform duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-300 h-2.5 transform transition-transform duration-300 hover:scale-105  rounded-full w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">React JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5 transform transition-transform duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-300 h-2.5 transform transition-transform duration-300 hover:scale-105  rounded-full w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">Laravel</label>
                <div className="grow bg-gray-800 rounded-full h-2.5 transform transition-transform duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-300 h-2.5 transform transition-transform duration-300 hover:scale-105  rounded-full w-8/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">My-SQL</label>
                <div className="grow bg-gray-800 rounded-full h-2.5 transform transition-transform duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-300 h-2.5 transform transition-transform duration-300 hover:scale-105  rounded-full w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">Mongo Database</label>
                <div className="grow bg-gray-800 rounded-full h-2.5 transform transition-transform duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-300 h-2.5 transform transition-transform duration-300 hover:scale-105  rounded-full w-7/12"></div>
                </div>
              </div>
            </div>
 {/* ////////////////////////////////////// */}
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-300 ">1+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-300 ">5+</h3>
                <p>Project Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-300 ">3+</h3>
                <p>Happy Clinents</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About