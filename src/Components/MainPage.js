import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from '../Components/Dashboard'
import RightProfile from './RightProfile'
import Complaints from '../Components/Complaints'
import RoomManagement from '../Components/RoomManagement'
import Incharges from '../Components/Incharges'
// import { Router } from 'react-router-dom'
import RoomMateFinder from '../Components/RoomMateFinder'
import Outpass from '../Components/Outpass'
// import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function MainPage() {
  // const { loginWithRedirect } = useAuth0();
  
  return (
    <Router>
      <div>
      {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
        <div className="flex" >
          <Sidebar/>
          {/* <Dashboard/> */}
          <Routes>
            <Route exact path='/' element={<Dashboard/>}></Route>
            <Route path='/Outpass' element={<Outpass/>}></Route>
            <Route path='/Incharges' element={<Incharges/>}></Route>
            <Route path='/Complaints' element={<Complaints/>}></Route>
            <Route path='/RoomMateFinder' element={<RoomMateFinder/>}></Route>
            <Route path='/RoomManagement' element={<RoomManagement/>}></Route>
            
          </Routes>
          {/* <Incharges/>
          <RoomMateFinder/>
          <Outpass/>
          <Complaints/>
          <RoomManagement/> */}
          <RightProfile/>
        </div>  
      </div>
    </Router>
    
  )
}
