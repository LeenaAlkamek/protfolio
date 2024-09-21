/* eslint-disable no-unused-vars */
import React from 'react'



const Services = [
    {
        id: 1,
        title: "UI/UX Design",
        description: "Creating Visually user interface for mobile applicaton & Web ."
    },
    {
        id: 2,
        title: "Frontend Devlopment",
        description: "Building responsive and intractive user interfaces ."
    },
    {
        id: 3,
        title: "Backend Devlopment",
        description: "Devloping robust server-side logic and database ."
    },
    {
        id: 4,
        title: "Full-Stack Devlopment",
        description: "Combining both frontend and bankend development skills ."
    },
]
const Service = () => {
    return (
        <div className="bg-black text-white py-20 " id='service'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Services.map(service => (
                        <div key={service.id} className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-300 ">
                                {service.id}
                            </div>
                            <h3 className=" text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-300 ">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-gray-300 ">{service.description}</p>
                            <a href="#" className="mt-4 inline-block text-orange-300 hover:text-pink-400"> Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service
