import { useState } from 'react'

import './App.css'
import Welcome from './components/Welcome'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/Home'
import Auth from './components/Auth'
import Appointment from './components/Appointment'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<Auth />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />  
        <Route path="/appointment" element={<Appointment />} />    
    </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App
