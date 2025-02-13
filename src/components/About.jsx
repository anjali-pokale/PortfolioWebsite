import React from 'react';
import aboutImg from "../assets/about.jpeg";
import { motion } from "framer-motion"; // Corrected import statement for motion
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id="about" className="text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.3 }} 
          className="text-3xl md:text-4xl font-bold mb-8 underline"
        >
          About Me
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.3 }} 
          className="mb-12 text-gray-400 text-center"
        >
          "Always shining like the Sun, I strive to bring light to everything I work on."
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-8 md:mb-0 md:mr-8 flex justify-center"
          >
            <img
              src={aboutImg}
              className="w-2/3 sm:w-1/2 md:w-10/12"
              alt="About"
            />
          </motion.div>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }} 
            className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl"
          >
            Hey there! I'm Anjali, a student with a deep passion for software
            development, machine learning, and system design. With hands-on
            experience in full-stack development, I've contributed to projects
            like a Spotify Clone (Music Player Website) using React, ExpressJS,
            and MongoDB.
            <br />
            <br />
            Currently, I am developing AI-driven solutions such as EcoSort, an
            ML-based waste classification system, and refining CAPTCHA with my
            team, CaptGuards. In addition to these, I have a strong foundation
            in CS fundamentals and a keen interest in working on projects that
            create a meaningful impact.
            <br />
            <br />
            I’m always looking to collaborate on cutting-edge projects and
            explore new technologies. Feel free to reach out and connect!
          </motion.p>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0">
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-center"
            >
              <motion.h3
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.3 }} 
                className="text-3xl md:text-6xl font-bold md:my-6 text-purple-500"
              >
                My Expertise Includes:
              </motion.h3>
              <motion.h4
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.3 }} 
                className="text-xl md:text-3xl font-bold md:my-6 text-purple-300"
              >
                ✔ Programming:
              </motion.h4>
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.3 }} 
                className="text-sm sm:text-base text-gray-300"
              >
                C++, Python, JavaScript
              </motion.p>

              <motion.h4
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.3 }} 
                className="text-xl md:text-3xl font-bold md:my-6 text-purple-300"
              >
                ✔ Tech Stack:
              </motion.h4>
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.3 }} 
                className="text-sm sm:text-base text-gray-300"
              >
                React.js, Express.js, MongoDB, Flask, MySQL
              </motion.p>

              <motion.h4
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.3 }} 
                className="text-xl md:text-3xl font-bold md:my-6 text-purple-300"
              >
                ✔ CS Fundamentals:
              </motion.h4>
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.3 }} 
                className="text-sm sm:text-base text-gray-300"
              >
                Data Structures & Algorithms, System Design, DBMS, OS, CN
              </motion.p>

              <motion.h4
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.3 }} 
                className="text-xl md:text-3xl font-bold md:my-6 text-purple-300"
              >
                ✔ Machine Learning & AI:
              </motion.h4>
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.3 }} 
                className="text-sm sm:text-base text-gray-300"
              >
                Model Training, Computer Vision, Data Analysis
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
