import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/projects2.avif"
import project3 from "../assets/project3.png"
import {motion} from "motion/react"
import {useInView} from "react-intersection-observer"
import Skills from "./Skills"

const Work = () => {
    
    const projects = [
        {
            id: 1,
            title: "Music Player Web App",
            description: "A responsive music player web application built with React and integrated with Spotify API for seamless music playback. Features include playlist management, song search, and playback controls.",
            image: project1,
            link: "#"
        },
        {
            id: 2,
            title: "E-Commerce Website",
            description: "A full-stack e-commerce platform developed using Node.js and MongoDB for secure shopping experiences. Features include user authentication, product management, and a payment gateway integration.",
            image: project2,
            link: "#"
        },
        {
            id: 3,
            title: "Calorie Tracker",
            description: "An application built with React and Firebase to help users track their daily calorie intake. Includes a food database, progress tracking, and data visualization for health-conscious individuals.",
            image: project3,
            link: "#"
        },
    ]
        
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div id="work" className='py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.2 }}
                    className='text-4xl text-white underline font-bold text-center mb-12'>
                    My Work
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    className='mb-12 text-gray-400 text-center'>
                    Here's a glimpse of some of the projects I've worked on, showcasing my skills in web development, e-commerce, and more.
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map((project) => (
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: project.id * 0.1, duration: 0.3 }}
                                key={project.id}
                                className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'>
                                <img src={project.image} className='w-full h-48 object-cover'/>
                                <div className='p-6'>
                                    <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                                    <p className='text-slate-400 mb-4'>{project.description}</p>
                                    <a href={project.link} className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition gap-4'>
                                        View Details
                                    </a>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}>
                <Skills/>
            </motion.div>
        </div>
    );
}

export default Work;
