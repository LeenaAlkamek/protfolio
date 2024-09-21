/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import HeroImg from "../assets/hero.png"
const Hero = () => {
    return (
        <div className="bg-black text-white text-center py-16">
            <img src={HeroImg} alt="" className="mx-auto mb-8 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 " />
            <h1 className="text-4xl font-bold">
                I'm {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-300 ">Leena Alkamel</span>
                , Full-Stack Developer
            </h1>

            <p className="mt-4 text-lg text-gray-300 ">
                I specialize in build modern and responsive web application .
            </p>
            <div className="mt-8 space-x-4">
                <button className="bg-gradient-to-r from-pink-500 to-orange-300 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact with me</button>
                <button className="bg-gradient-to-r from-blue-500 to-green-300 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"> Resume </button>
            </div>
        </div>
    )
}

export default Hero
