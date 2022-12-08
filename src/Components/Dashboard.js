import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import student from '../images/student.png';
import food from '../images/food.png';
import staff from '../images/undraw_Done_checking_re_6vyx-removebg-preview.png';
import Sidebar from './Sidebar'
import RightProfile from './RightProfile'
// import MainPage from './MainPage';

export default function Center() {
  return (
    <>
    <div className="flex" >
    <Sidebar/>
    <div style={{flex:7}}>
      <div>
        <div className="search flex justify-center mt-3 mb-3">
            <div className="searchbar flex items-center  w-3/4 bg-slate-100 rounded-xl shadow-md">
                <BiSearchAlt2 className='text-xl ml-6  z-20'/>
                <input type="text" name="text" class=" -ml-2 px-3 py-3 shadow-sm bg-slate-100 placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-orange-500 w-full rounded-md sm:text-sm " placeholder="Search" />
            </div>
        </div>
        <div className='flex justify-around'>
          <div className="container bg-blue-400 w-1/3 mt-5 m-1  rounded-md">
            <div className='flex justify-between items-center'>
              <div className="img">
                <img className='w-32' src={student} alt="" />
              </div>
              <div className="info flex flex-col justify-center items-center m-3">
                <h1 className='text-2xl'>123</h1>
                <p>Total Students</p>
              </div>
            </div>
            <div className="btn w-full bg-blue-500 flex items-center justify-center cursor-pointer ">
              <p className='text-white hover:text-xl hover:text-black font-medium text-lg p-2'>View Details</p>
            </div>
          </div>

          <div className="container m-1  flex items-center justify-around flex-col bg-green-400 w-1/3 mt-5  rounded-md">
            <div className='flex justify-between items-center mt-6'>
              <div className="img">
                <img className='w-32' src={staff} alt="" />
              </div>
              <div className="info flex flex-col justify-center items-center m-3">
                <h1 className='text-2xl'>73</h1>
                <p>Total Staff</p>
              </div>
            </div>
            <div className="btn w-full bg-green-500 flex items-center justify-center cursor-pointer ">
              <p className='text-white hover:text-xl hover:text-black font-medium text-lg p-2'>View Details</p>
            </div>
          </div>

          <div className="container m-1  flex items-center justify-around flex-col bg-red-400 w-1/3 mt-5  rounded-md">
            <div className='flex m-6 justify-between items-center'>
              <div className="img">
                <img className='w-32' src={food} alt="" />
              </div>
              <div className="info flex flex-col justify-center items-center m-3">
                <p>Today's Meals</p>
              </div>
            </div>
            <div className="btn w-full bg-red-500 flex items-center justify-center cursor-pointer ">
              <p className='text-white hover:text-xl hover:text-black font-medium text-lg p-2'>View Details</p>
            </div>
          </div>
        </div>

        <div className="notice m-1 flex flex-col justify-center items-center">
          <div className="information bg-sky-200 w-full h-68 rounded-lg m-0 flex flex-col justify-center items-center">
            <h1 className='text-2xl text-gray-800'>Notices</h1>
            <div className="line w-1/2 h-1 bg-gray-800 rounded-full m-auto"></div>
            <p className='p-3 m-3 bg-white rounded-lg'> <span>1.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non eum incidunt enim placeat ut quia tempore eaque sequi quos.</p>
            <p className='p-3 m-3 bg-white rounded-lg'> <span>2.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non eum incidunt enim placeat ut quia tempore eaque sequi quos.</p>
            <p className='p-3 m-3 bg-white rounded-lg'> <span>3.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non eum incidunt enim placeat ut quia tempore eaque sequi quos.</p>
            
          </div>
        </div>

      </div>
    </div>
    {/* <MainPage/> */}
    <RightProfile/>
    </div>
    </>
  )
}
