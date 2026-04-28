import Tindercard from "./tindercard"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import getVariable from '../modules/ENV.js' 

export default function Landing() {
    const navigate = useNavigate();
    const [meme,setMeme] = useState("");
    useEffect(() => {
        async function StartSocial() {
            const HOST = getVariable('VITE_HOST');

        const resp = await axios.get(`${HOST}/api/meme`,{
            headers:{
                "Content-Type":"application/json",
            }
        });

        let dados = resp.data.map(meme => meme.midia);
        
        let index = Math.floor(Math.random() * dados.length)

        let memeChoose = dados[index];

        console.log(memeChoose)

        setMeme(memeChoose)


        }

        StartSocial();
    },[])

    return(
    <div className='flex w-full h-screen justify-center items-center'>
      {meme ? (
        <Tindercard url={meme}/>
      ):(
        <div className="text-black animate-bounce">Buscando Meme...</div>
      )}
      <button className='absolute right-[2%] top-[2%] shadow-[0px_7px_0px_0px_rgba(0,0,0,0.5)] w-[7%] bg-red-500 rounded-full p-1.5 text-white font-mono text-2xl' onClick={() => navigate('/dashboard')}>+</button>
   </div>
    )
}