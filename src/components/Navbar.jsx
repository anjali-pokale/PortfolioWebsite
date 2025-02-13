import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Navbar = () => {
  const variants = {
    open: { clipPath: 'circle(1200px at 40px 40px)' },
    transition: { type: 'spring' },
    closed: {
      clipPath: 'circle(25px at 42px 41px)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
  }

  const [menu, setMenu] = useState(false)

  const items = [
    { id: 1, text: 'About', href: '#about' },
    { id: 2, text: 'Work', href: '#work' },
    { id: 3, text: 'Skills', href: '#skills' },
    { id: 4, text: 'Contact', href: '#contact' },
  ]

  return (
    <div>
      <motion.div className="container mx-auto hidden md:flex justify-between items-center py-6">
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-white">Innovative</span>
          <span className="text-purple-500">Creative</span>
          <span className="text-white">ANJALI</span>
        </div>
        <div>
          <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
            {items.map(({ id, text, href }) => (
              <li key={id}>
                <a
                  href={href}
                  className="hover:text-purple-500 duration-200 cursor-pointer"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full">
          Download CV
        </a>
      </motion.div>

      <div className="flex md:hidden justify-between">
        <motion.div animate={menu ? 'open' : 'closed'}>
          <motion.div
            variants={variants}
            onClick={() => setMenu((prev) => !prev)}
            className="bg-white w-2/3 h-screen text-black fixed z-10"
          >
            <div className="px-7 py-6">
              {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            {menu && (
              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-6 text-black text-lg">
                  {items.map(({ id, text, href }) => (
                    <li key={id}>
                      <a
                        href={href}
                        className="hover:text-purple-500 duration-200 cursor-pointer"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
                <a className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full">
                  Download CV
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-white">Innovative</span>
          <span className="text-purple-500">Creative</span>
          <span className="text-white">ANJALI</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
