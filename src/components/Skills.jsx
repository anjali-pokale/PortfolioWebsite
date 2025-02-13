import React from "react";
import { motion } from "framer-motion"; // Correct import

const Skills = () => {
  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "Python",
    "Machine Learning",
    "Django",
    "HTML/CSS",
    "MySQL",
    "MongoDB",
    "Git/GitHub",
    "UI/UX Design",
    "Problem Solving",
  ];
  const skillsList = [...skills, ...skills];

  const scrollVariant1 = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  const scrollVariant2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div id="skills" className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          My Skills, My Recognition
        </h2>
        <p className="text-gray-400 mb-8">
          These are the core skills that I have honed through my experience in
          software development, machine learning, and design.
        </p>

        <div className="overflow-hidden relative w-full">
          <motion.div
            className="whitespace-nowrap flex space-x-10"
            variants={scrollVariant1}
            animate="animate"
          >
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row of Skills - Right to Left */}
        <div className="overflow-hidden relative w-full mt-5">
          <motion.div
            className="whitespace-nowrap flex space-x-10"
            variants={scrollVariant2}
            animate="animate"
          >
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
