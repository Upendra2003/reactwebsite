import React from 'react'
// import { IoIosNotifications } from "react-icons/io";
// import { BsFillCaretDownFill } from "react-icons/bs";
import profileImg from '../images/profile.jpg'
// import './App.css';
import { AiFillClockCircle } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";

export default function RightProfile() {
//   var showDate = new Date();
//   var displayTodaysDate = showDate.getDate()+"-"+(showDate.getMonth())+"-"+showDate.getFullYear();
//   var dt=showDate.toDateString();
//   var displayTodaysTime = showDate.getHour()+"-"+showDate.getMinutes()+"-"+showDate.getSeconds();
  return (
    <div className='Right' style={{
        flex:2,
    }}>
      <div className="topProfile h-screen  items-center drop-shadow-lg bg-slate-50 flex flex-col ">
            <div className="flex  space-x-8 text-xs  bg-slate-300 p-4 rounded-full m-5">
                <div className="time flex items-center">
                    <AiFillClockCircle className='text-sm mr-1'/>
                    {/* {dt}-{displayTodaysTime} */}
                    <p className='text-xs'>12:00</p>
                </div>
                <div className="time flex items-center">
                    <BsCalendarDateFill className='text-sm mr-1'/>
                    {/* {dt}-{displayTodaysTime} */}
                    <p> 11:11:2022 </p>
                </div>
                {/* <input type="text" value={displayTodaysDate} readOnly="true" /> */}
            </div>
        <div className=' items-center mt-5 flex flex-col ' >
            <h2 className='text-2xl font-semibold text-gray-6000 '>Your Profile</h2>
            <div className="line w-1/2 h-1 bg-gray-800 rounded-full m-auto"></div>
            <img className=' w-32 h-32 m-4 object-cover rounded-full border border-r-white' src={profileImg} alt="" />
            <div className='text-left'>
                <p className=' font-medium m-2 text-gray-600'>Name : <span>Upendra</span></p>
                <div className="line w-1/3 h-1 bg-gray-300 rounded-full m-auto"></div>
                <p className=' font-medium m-2 text-gray-600'>Student ID : <span>B121023</span></p>
                <div className="line w-1/3 h-1 bg-gray-300 rounded-full m-auto"></div>
                <p className=' font-medium m-2 text-gray-600'>Branch : <span>CSE</span></p>
                <div className="line w-1/3 h-1 bg-gray-300 rounded-full m-auto"></div>
                <p className=' font-medium m-2 text-gray-600'>Year : <span>2021-2025</span></p>
                <div className="line w-1/3 h-1 bg-gray-300 rounded-full m-auto"></div>
                <p className=' font-medium m-2 text-gray-600'>Room No : <span>P8F1</span></p>
            </div>
            
        </div>
      </div>
      
    </div>
  )
}
