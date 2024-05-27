import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate
} from "react-router-dom";
import NavBar from './Components/Navbar'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Cars from './Pages/Cars/Cars';
import Addcar from './Pages/Addcar/Addcar';
import Mycars from './Pages/Mycars/Mycars';
import Profile from './Pages/Profile/Profile';
import Logout from './Pages/Logout/Logout';

function App() {
  return <Router>
    <NavBar />
  <Routes>

    <Route index element={ <Home /> } />

    <Route path='/logout' element={ <Logout /> } />

    <Route path='/login' element={ <Login /> } />
    <Route path='/register' element={ <Register /> } />
    <Route path='/cars' element={ <Cars /> } />
    <Route path='/mycars' element={ <Mycars /> } />
    <Route path='/profile/:id' element={ <Profile /> } />

    <Route path='/addcar' element={ <Addcar /> } />

  </Routes>
</Router>
}

export default App
