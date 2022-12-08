import React from 'react'
import logo from '../images/logo-removebg-preview.png'
import { MdSpaceDashboard } from "react-icons/md";
import { RiUserSearchFill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { GrCompliance } from "react-icons/gr";
import { MdSettingsBackupRestore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {motion} from 'framer-motion';
// import './style.css';
// import StickyBox from "react-sticky-box";
import {Link} from 'react-router-dom';

export default function Sidebar() {
  const style={
      fontFamily: "Telma",
  }
  return (
    
    <div className='Sidebardiv fixed left-0 top-0' offsetTop={0} offsetLeft={0} style={{
      flex:2,
      position: 'sticky',
      top: 10,
    }}>
      <div className='flex flex-col h-screen bg-slate-50 drop-shadow-md ' >
        <div className="logo ml-8 mt-4 flex items-center">
            <img className='w-12 mr-3' src={logo} alt="" />
            <motion.div className='text-lg hover:text-orange-400' style={style}> <a href="/"
              whileHover={{
                fontSize: "24px",
              }}
            >HS manager</a></motion.div>
        </div>
        <div className="sections list-none w-fit mx-auto mt-16">
            <li className='flex items-center m-3 p-3 text-md text-orange-400'><MdSpaceDashboard/>
              <Link className='ml-3' to="/">Dashboard</Link>
            </li>
            <li className='flex items-center m-3 p-3 text-md text-gray-600 hover:text-orange-400'><GiTicket/>
              <Link className='ml-3' to='./Outpass'>Out Pass</Link>
            </li>
            <li className='flex items-center m-3 p-3 text-md text-gray-600 hover:text-orange-400'><GrCompliance/>
              <Link className='ml-3' to="/Complaints">Complaints</Link>
            </li>
            <li className='flex items-center m-3 p-3 text-md text-gray-600 hover:text-orange-400'><MdSettingsBackupRestore/>
              <Link className='ml-3' to="/RoomManagement">Room Management</Link>
            </li>
            <li className='flex items-center m-3 p-3 text-md text-gray-600 hover:text-orange-400'><RiUserSearchFill/>
              <Link className='ml-3' to="/RoomMateFinder">Room Mate Finder</Link>
            </li>
            <li className='flex items-center m-3 p-3 text-md text-gray-600 hover:text-orange-400'><CgProfile/>
              <Link className='ml-3' to="/Incharges">Incharges</Link>
            </li>
        </div>
      </div>
    </div>
  )
}
