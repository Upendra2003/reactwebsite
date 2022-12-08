
import './App.css';
// import MainPage from './Components/MainPage';
import SignInPage from './Components/SignInPage';
// import SignUpPage from './Components/SignUpPage';
// import Incharges from '../src/Components/Incharges'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard'
import Outpass from './Components/Outpass'
import RoomManagement from './Components/RoomManagement'
import RoomMateFinder from './Components/RoomMateFinder'
import Complaints from './Components/Complaints'
import Incharges from './Components/Incharges'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/SignInPage' element={<SignInPage/>}></Route>
        <Route exact path='/' element={<Dashboard/>}></Route>
        <Route path='/Outpass' element={<Outpass/>}></Route>
        <Route path='/RoomManagement' element={<RoomManagement/>}></Route>
        <Route path='/RoomMateFinder' element={<RoomMateFinder/>}></Route>
        <Route path='/Complaints' element={<Complaints/>}></Route>
        <Route path='/Incharges' element={<Incharges/>}></Route>
      </Routes>
      
      
        
      
    {/* <SignInPage/> */}
    
    </Router>
  );
}

export default App;
