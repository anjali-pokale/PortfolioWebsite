import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    
    <div id="contact"className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
      {/* Heading Section */}
      <div className="text-center">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: -100 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Let's discuss my <span className="text-purple-500">Projects</span>
        </motion.h2>
        <motion.p
          ref={headingRef}
          initial={{ opacity: 0, y: -100 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-slate-400 mt-4"
        >
          Let's make something new, different, and meaningful—more visual or conceptual.
        </motion.p>
      </div>

      {/* Contact Info & Form */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="space-y-6">
          {[
            { icon: <FaPhone />, label: "Call Me", value: "+91 11111 11111" },
            { icon: <FaEnvelope />, label: "Email", value: "abcxyz@gmail.com" },
            { icon: <FaMapMarkerAlt />, label: "Address", value: "abc, Maharashtra, India" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-purple-500 p-4 rounded-full text-white">{item.icon}</div>
              <div>
                <p className="text-lg font-medium text-purple-500">{item.label}</p>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: 50 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Budget"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
          ></textarea>
          <motion.button
          whilwHover={{scale:1.05}}
          whileTap={{scale:0.95}}
            type="submit"
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>

      {/* Footer Section */}
      <motion.div 
      ref={formRef}
      initial={{ opacity: 0 }}
      animate={formInView ? { opacity: 1 } : {}}
      transition={{ delay: 1, duration: 0.5 }}
      className="mt-16 flex flex-col sm:flex-row justify-between items-center p-5 text-white border-t-2 border-purple-500">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
          ].map((social, index) => (
            <a key={index} href={social.link} className="hover:text-purple-500">
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
