import React from 'react'
import {BiSearchAlt2} from "react-icons/bi";
import {motion} from 'framer-motion';
import Sidebar from './Sidebar'
import RightProfile from './RightProfile'

export default function RoomManagement() {
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
        <div className="flex flex-col">
            <h1 className='text-xl ml-10  font-serif tracking-widest'>Room<span className='text-orange-400 font-bold'> Accomidations</span>!!!!</h1>
            <div className="line w-4/5 my-3 h-1 bg-orange-200 rounded-full m-auto"></div>
            <div className='flex justify-around mt-5'>
                <div className="container text-lg shadow-lg bg-slate-100 flex-col w-1/3 p-5 rounded-lg flex justify-center items-center">
                    <p className='text-xl m-2'>For <span className='text-orange-400'>First Years</span></p>
                    <motion.div className="btn"
                        whileHover={{
                            scale: 1.2
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                        >
                        <button className=' bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Click Here</button>
                    </motion.div>
                </div>

                <div className="container text-lg shadow-lg bg-slate-100 flex-col w-1/3 p-5 rounded-lg flex justify-center items-center">
                    <p className='text-xl m-2'>For <span className='text-orange-400'>Second Years</span></p>
                    <motion.div className="btn"
                        whileHover={{
                            scale: 1.2
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                        >
                        <button className=' bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Click Here</button>
                    </motion.div>
                </div>
            </div>
            <div className='flex justify-around mt-5'>
            <div className="container text-lg shadow-lg bg-slate-100 flex-col w-1/3 p-5 rounded-lg flex justify-center items-center">
                    <p className='text-xl m-2'>For <span className='text-orange-400'>Third Years</span></p>
                    <motion.div className="btn"
                        whileHover={{
                            scale: 1.2
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                        >
                        <button className=' bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Click Here</button>
                    </motion.div>
                </div>

                <div className="container text-lg shadow-lg bg-slate-100 flex-col w-1/3 p-5 rounded-lg flex justify-center items-center">
                    <p className='text-xl m-2'>For <span className='text-orange-400'>Fourth Years</span></p>
                    <motion.div className="btn"
                        whileHover={{
                            scale: 1.2
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                        >
                        <button className=' bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Click Here</button>
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
