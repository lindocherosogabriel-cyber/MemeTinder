import { useState } from 'react'
import './App.css'
import {Route,Router,BrowserRouter,useNavigate, Routes} from 'react-router-dom'
import Register from './components/register'
import Landing from './components/landing'
import Dashboard from './components/dashboard'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react'
function App() {

  useEffect(() =>{
    let data = Cookies.get("LocalUser-Data");
    let isRoute = window.location.pathname.includes("register");
    async function LoadData() {
      if(!isRoute) {
          if(data) {
            let resp = await axios.post("http://localhost:3001/api/login",data,{
              headers:{
                'Content-Type':'application/json',
              }
            });
          
            if(resp.status === 200) {
             console.log("Sucesso!")
            }else{
              alert("Não foi possível efetuar o login inicial! digite /register na URL acima ou apenas clique no seu perfil.")
            }
          }else{
            alert("Não foi possível efetuar o login inicial! digite /register na URL acima ou apenas clique no seu perfil.")
          }
      }else{
        console.log("Ele está no register.")
      }
    }
    LoadData();
  },[]);




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
