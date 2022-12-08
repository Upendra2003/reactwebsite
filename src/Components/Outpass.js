import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import {AiFillPlusCircle} from "react-icons/ai"
import {TiTick} from "react-icons/ti"
import {RiAlarmWarningFill} from "react-icons/ri"
import Sidebar from './Sidebar'
import RightProfile from './RightProfile'

export default function Complaints() {
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
        <div>
            <h1 className='text-xl ml-10  font-serif tracking-widest'>Let's generate a <span className='text-orange-400 font-bold'>Outpass</span> for you </h1>
            <div className="line w-4/5 my-3 h-1 bg-orange-200 rounded-full m-auto"></div>
            <div className="generate cursor-pointer shadow-lg bg-orange-200 w-4/5 rounded-lg flex flex-col justify-center items-center my-5 p-8 mx-auto">
                <AiFillPlusCircle className='text-2xl'/>
                <p className='text-2xl'>Generate Your Outpass</p>
            </div>
            <div className="approved cursor-pointer bg-green-300 shadow-lg w-4/5 rounded-lg flex flex-col justify-center items-center my-5 p-8 mx-auto">
                <TiTick className='text-2xl'/>
                <p className='text-2xl'>Approved Outpasses</p>
            </div>
            <div className="emergency cursor-pointer bg-red-300 shadow-lg w-4/5 rounded-lg flex flex-col justify-center items-center my-5 p-8 mx-auto">
                <RiAlarmWarningFill className='text-2xl'/>
                <h1 className='text-2xl'>Emergency Outpass</h1>
            </div>
        </div>
    </div>
    <RightProfile/>
    </div>
    </>
  )
}
