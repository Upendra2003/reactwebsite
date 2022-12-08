import React from 'react';
import man1 from '../images/man1.jfif';
import man2 from '../images/man2.jpg';
import woman from '../images/woman.jpg';
import man3 from '../images/man3.jpg';
import {BiSearchAlt2} from "react-icons/bi"
import Sidebar from './Sidebar'
import RightProfile from './RightProfile'

export default function Incharges() {
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
        </div>
        <div className='m-3 p-4'>
            <h1 className=' font-serif tracking-widest text-3xl'>
                <span className='text-orange-400'>HOSTEL</span> INCHARGES
            </h1>
            <p>Meet our team experts in <span className='text-orange-400'>hostelling</span> and automation</p>
        </div>
        <div className="incharges flex flex-col">
            <div className='flex flex-row'>
                <div className="container bg-slate-100 flex w-1/2 h-32 rounded-lg m-4 justify-around items-center">
                    <div className="img ">
                        <img className=' ml-2  rounded-full w-20 h-20  ' src={man3} alt="" />
                    </div> 
                    <div className='line  bg-orange-200 w-1 h-28 rounded-full'></div>
                    <div className="info m-2">
                        <div className="name text-xl font-semibold text-blue-800">
                            P.K.Biswal
                        </div>
                        <div className="designation">
                            <p>Cheif Warden</p>
                            <p>98431 98403</p>
                            <a className=' hover:text-orange-500 text-gray-400 cursor-pointer' href="/">b121023@iiit-bh.ac.in</a>
                        </div>
                    </div>
                </div>

                <div className="container bg-slate-100 flex w-1/2 h-32 rounded-lg m-4 justify-around items-center">
                    <div className="img ">
                        <img className=' ml-2  rounded-full w-20 h-20 bg-cover  ' src={man2} alt="" />
                    </div> 
                    <div className='line  bg-orange-200 w-1 h-28 rounded-full'></div>
                    <div className="info m-2">
                        <div className="name text-xl font-semibold text-blue-800">
                            Sanjay Saxena
                        </div>
                        <div className="designation">
                            <p>Supervisor</p>
                            <p>98431 98403</p>
                            <a className=' hover:text-orange-500 text-gray-400 cursor-pointer' href="/">b121023@iiit-bh.ac.in</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className="container bg-slate-100 flex w-1/2 h-32 rounded-lg m-4 justify-around items-center">
                    <div className="img ">
                        <img className=' ml-2  rounded-full w-20  ' src={man1} alt="" />
                    </div> 
                    <div className='line  bg-orange-200 w-1 h-28 rounded-full'></div>
                    <div className="info m-2">
                        <div className="name text-xl font-semibold text-blue-800">
                            Hemanth
                        </div>
                        <div className="designation">
                            <p>Cheif Warden</p>
                            <p>98431 98403</p>
                            <a className=' hover:text-orange-500 text-gray-400 cursor-pointer' href="/">b121023@iiit-bh.ac.in</a>
                        </div>
                    </div>
                </div>

                <div className="container bg-slate-100 flex w-1/2 h-32 rounded-lg m-4 justify-around items-center">
                    <div className="img ">
                        <img className=' ml-2  rounded-full w-20 h-20 bg-cover  ' src={woman} alt="" />
                    </div> 
                    <div className='line  bg-orange-200 w-1 h-28 rounded-full'></div>
                    <div className="info m-2">
                        <div className="name text-xl font-semibold text-blue-800">
                            Indramani
                        </div>
                        <div className="designation">
                            <p>Supervisor</p>
                            <p>98431 98403</p>
                            <a className=' hover:text-orange-500 text-gray-400 cursor-pointer' href="/">b121023@iiit-bh.ac.in</a>
                        </div>
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
