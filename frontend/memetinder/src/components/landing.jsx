import Tindercard from "./tindercard"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect } from "react";
export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className='flex w-full h-screen justify-center items-center'>
      <Tindercard
      url=""
      />
      <button className='absolute right-[2%] top-[2%] shadow-[0px_7px_0px_0px_rgba(0,0,0,0.5)] w-[7%] bg-red-500 rounded-full p-1.5 text-white font-mono text-2xl' onClick={() => navigate('/dashboard')}>+</button>
   </div>
    )
}