import React from 'react'
// import { GoMail } from 'react-icons/go';
import '../App.css';
import Navbar from './Navbar';
import {motion} from 'framer-motion';
import hostel from '../images/hostel.json'
import Lottie from 'lottie-react';
// import '../App.css'
import {useNavigate} from 'react-router-dom';

export default function SignUpPage() {
  const myStyle={
    fontFamily: 'Telma'
  }
  const hostelStyle={
    height:"auto",
    width:500,
    marginTop: -40
  }
  let navigate = useNavigate();
  
  return (
    <>
    <Navbar/>
    <div className='flex justify-between items-center min-h-80 '>
      <div className="right translate-x-24">
        <div className="svg ">
          <Lottie animationData={hostel} style={hostelStyle}/>
        </div>
      </div>
      <motion.div className="left z-40 "
        animate={{
          x:"-240px",
          opacity: 1,
        }}
        initial={{
          opacity: 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 70,
        }}
      >
        <div>
            <div className="info ml-10">
                <motion.div className=' text-sm sm:text-3xl mb-2'><motion.span className=' cursor-pointer text-2xl sm:text-6xl tracking-wide font-Satisfy text-orange-400' style={myStyle}
                >Hola !!</motion.span> Hostellers</motion.div>
                <p className=' text-xs sm:text-sm mb-2'>Enter your details below</p>
                <div className="details flex flex-col">
                  <div className='flex items-center'>
                    {/* <i className='text-2xl '><GoMail/></i> */}
                    <input className=" mt-5 mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-3 sm:text-sm" placeholder="Enter ID" type="search" name="search"/>
                  </div>
                  
                  <input className="  mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-3 sm:text-sm" placeholder="Password" type="password" name="search"/>
                </div>
                <motion.div className="btn"
                  whileHover={{
                    scale: 1.2
                  }}
                  whileTap={{
                    scale: 0.8
                  }}
                >
                  <button onClick={()=>{navigate('/')}} className='ml-28 mb-5 bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Sign In</button>
                </motion.div>
                
            </div>
        </div>
      </motion.div>
    </div>
  </>
  )
}
