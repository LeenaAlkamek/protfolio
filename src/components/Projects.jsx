/* eslint-disable no-unused-vars */
import React from 'react'
import Img from '../assets/hero.png'
const Project = [
    {
        id: 1,
        name: "Mobile App UI/UX Design",
        technologies: "Creating Visually user interface for mobile applicaton using XD",
        image: Img,
        github: "https://github.com/leenaalkamek",
    },
    {
        id: 2,
        name: "Web UI/UX Design",
        technologies: "Creating Visually user interface for website using XD",
        image: Img,
        github: "https://github.com/leenaalkamek",
    },
    {
        id: 3,
        name: "Frontend Development",
        technologies: "building responsive and interactive user interface using React with vite",
        image: Img,
        github: "https://github.com/leenaalkamek",
    },
    {
        id: 4,
        name: "Frontend Development",
        technologies: "building a simple website using Html & Css & JS",
        image: Img,
        github: "https://github.com/leenaalkamek",
    },
    {
        id: 5,
        name: "Full-Stack Development",
        technologies: "building a simple socilmedia website using Html & Css & JS & php (phpmyadmin)",
        image: Img,
        github: "https://github.com/leenaalkamek",
    },
    {
        id: 6,
        name: "Full-Stack Development",
        technologies: "building a Full-Stack website using React with vite for frontend and laravel for backend",
        image: Img,
        github: "https://github.com/leenaalkamek",
    },
]
const Projects = () => {
    return (
        <div className="bg-black text-white py-20 " id='project'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Project.map(Project => (
                        <div key={Project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                          <img src={Project.image} alt={Project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                          <h3 className="text-2xl font-bold mb-2">{Project.name}</h3>
                          <p className="text-gray-400 mb-4">{Project.technologies}</p>
                          <a href={Project.github} className="inline-block bg-gradient-to-r from-pink-500 to-orange-300 text-white px-4 py-2 rounded-full font-semibold" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Projects