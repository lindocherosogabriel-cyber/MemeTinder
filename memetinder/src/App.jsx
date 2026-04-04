import { useState } from 'react'
import './App.css'
import {Route,Router,BrowserRouter,useNavigate, Routes} from 'react-router-dom'
import Register from './components/register'
import Landing from './components/landing'
import Dashboard from './components/dashboard'
function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
