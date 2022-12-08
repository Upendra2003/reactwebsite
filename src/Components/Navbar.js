import React from 'react'
import logo from '../images/logo-removebg-preview.png'
import {motion} from 'framer-motion';

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between m-5 pl-5'>
        <motion.div className="right w-12 sm:wt-3 cursor-pointer">
            <motion.img src={logo} alt="" 
              animate={{
                y: '0px',
                opacity: 1
              }}
              initial={{
                opacity:0,
              }}
              transition={{
                duration: 2,
              }}
              
            />
        </motion.div>
        <div className="left flex items-center text-base ">
            <motion.h3 className='mr-12 text-xs sm:text-xl'
              animate={{
                y: '0px',
                opacity: 1
              }}
              initial={{
                opacity:0,
              }}
              transition={{
                duration: 4,
              }}
            >Not a member? </motion.h3>
            <motion.div
              whileHover={{
                scale: 1.2
              }}
              whileTap={{
                scale: 0.8
              }}
            >
              <motion.button className='mr-12 -translate-y-24 bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-10 pr-10 text-white rounded-full'
                animate={{
                  y: '0px',
                  opacity: 1
                }}
                initial={{
                  opacity:0,
                }}
                transition={{
                  duration: 6,
                }}
              >Sign Up</motion.button>
            </motion.div>
            
        </div>
      </nav>
    </div>
  )
}
