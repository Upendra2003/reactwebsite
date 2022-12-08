import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
// import {BsFillCalendarDateFill} from "react-icons/bs"
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
        <div className="flex flex-col">
            <h1 className='text-xl ml-10  font-serif tracking-widest'><span className='text-orange-400 font-bold'>Complaints</span>!!!!</h1>
            <div className="line w-4/5 my-3 h-1 bg-orange-200 rounded-full m-auto"></div>
            <div className='flex justify-around mt-5'>
                <div className="container text-lg shadow-lg bg-slate-100 flex-col w-1/3 p-5 rounded-lg flex justify-items-center">
                    <p className='text-xl m-2'>Select <span className='text-orange-400'>Block</span></p>
                    <select className='rounded-lg p-2 m-2' name="Blocks" id="cars">
                        <option value="L-Block">L-Block</option>
                        <option value="J-Block">J-Block</option>
                        <option value="K-Block">K-Block</option>
                        <option value="I-Block">I-Block</option>
                    </select>
                </div>

                <div className="container text-lg bg-slate-100 shadow-lg flex-col w-1/3 p-5 rounded-lg flex justify-items-center">
                    <p className='text-xl m-2'>Select <span className='text-orange-400'>Room</span></p>
                    <select className='rounded-lg p-2 m-2' name="Blocks" id="cars">
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                        <option value="104">104</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-around mt-5'>
                <div className="container text-lg shadow-lg bg-slate-100 flex-col w-1/3 p-5 rounded-lg flex justify-items-center">
                    <p className='text-xl m-2'>Choose <span className='text-orange-400'>Complaint</span></p>
                    <select className='rounded-lg p-2 m-2' name="Blocks" id="cars">
                        <option value="Water Problem">Water Problem</option>
                        <option value="Light Fault">Light Fault</option>
                        <option value="Cleaning Problem">Cleaning Problem</option>
                        {/* <option value="I-Block">I-Block</option> */}
                    </select>
                </div>

                <div className="container text-lg bg-slate-100 shadow-lg flex-col w-1/3 p-5 rounded-lg flex justify-items-center">
                    <p className='text-xl m-2'>Select <span className='text-orange-400'>Date</span></p>
                    <div className="searchbar flex items-center bg-slate-100 rounded-xl border-2">
                        <input className='-ml-2 px-3 py-3 shadow-sm bg-slate-100 placeholder-white focus:outline-none  focus:border-orange-500 focus:ring-orange-500 w-full rounded-md sm:text-sm focus:ring-3' type="date" id="birthday" name="birthday"></input>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RightProfile/>
    </div>
    </>
  )
}
