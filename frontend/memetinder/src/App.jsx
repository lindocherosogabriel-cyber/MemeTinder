import { useState } from 'react'
import './App.css'
import {Route,Router,BrowserRouter, Routes,useNavigate} from 'react-router-dom'
import Register from './components/register'
import Landing from './components/landing'
import Dashboard from './components/dashboard'
import Login from './components/login';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react'
import getVariable from './modules/ENV'
function App() {
  const navigate = useNavigate();
  useEffect(() =>{
    const HOST = getVariable('VITE_HOST');
    let data = Cookies.get("LocalUser-Data");
    let isRoute = window.location.pathname.includes("register") || window.location.pathname.includes("login");
    async function LoadData() {
      let token = Cookies.get("token");
      if(!isRoute) {
          if(data) {
            if(token) {
              let resp = await axios.get(`${HOST}/api/token`,{
                headers:{
                  Authorization: `Bearer ${token}`,
                }
              });
              console.log(resp.data);
            }else{
              let credentials = Cookies.get("LocalUser-Data");
              let resp = await axios.post("http://localhost:3001/api/login", credentials,{
                headers:{
                  "Content-Type": "application/json",
                }
              });
              if(resp) {
                var Resp = await axios.get("http://localhost:3001/api/token",{
                  headers:{
                    Authorization: `Bearer ${resp.data.token}`,
                  }
                });
                console.log(Resp.data);
              }else{
                alert("Não foi possível efetuar o login inicial! digite /register na URL acima ou apenas clique no seu perfil.")
                navigate("/register")
              }
            }
          }else{
            alert("Não foi possível efetuar o login inicial! digite /register na URL acima ou apenas clique no seu perfil.")
            navigate("/register")
          }
      }else{
        console.log("Ele está no register.")
      }
    }
    LoadData();
  },[navigate]);




  return (
     
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
  )
}

export default App
