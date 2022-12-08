import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import {motion} from 'framer-motion';
import roomfinder from '../images/roommate.png'
import Sidebar from './Sidebar'
import RightProfile from './RightProfile'

export default function RoomMateFinder() {
  return (
    <>
    <div className="flex" >
    <Sidebar/>
    <div style={{flex:7}}>
        <div className="search flex justify-center mt-3 mb-3">
            <div className="searchbar flex items-center  w-3/4 bg-slate-100 rounded-xl shadow-md">
                <BiSearchAlt2 className='text-xl ml-6  z-20'/>
                <input type="text" name="text" class=" -ml-2 px-3 py-3 shadow-sm bg-slate-100 placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-orange-500 w-full rounded-md sm:text-sm " placeholder="Search" />
            </div>
        </div>
        <div >
            <div className='ml-3 p-4'>
                <h1 className='text-xl font-semibold'><span className='text-orange-400'>Hi,</span> User_Name</h1>
                <p className='text-md'>Looking for <span className='text-orange-400'>!!</span> </p>
            </div>
            <div className="line w-4/5 mb-3 h-1 bg-orange-200 rounded-full m-auto"></div>
            <div className=' bg-slate-200  rounded-lg w-1/2 flex justify-center m-auto'>
                <div >
                    <div className='flex justify-center m-1 p-3'>
                        <motion.div className="btn mr-5"
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        >
                        <button className='  bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Room</button>
                        </motion.div>
                        <motion.div className="btn ml-5"
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        >
                        <button className='bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Room Mate</button>
                        </motion.div>
                    </div>
                    <div className="img flex justify-center items-center">
                        <img className='w-full ' src={roomfinder} alt="" />
                    </div>
                    <motion.div className="btn flex justify-center"
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        >
                        <button className='mb-2 bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Find</button>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
    <RightProfile/>
    </div>
    </>
  )
}
