import {Link} from 'react-router-dom'
import { useState } from 'react'
export default function Dashboard() {
    const [posts,setPost] = useState(0);
    return(
        <div className='flex flex-col w-full h-screen content-around items-center'>
            <header className='flex flex-col-reverse justify-center items-center w-full h-[10%] bg-red-500 text-2xl '>
                <nav>
                    <Link to="/" className='text-blue-700 hover:underline'>Main</Link>
                </nav>
                <h1 className='font-mono text-white text-[20px] bg-red-800 rounded-[2px] p-1 gap-10'>DashBoard</h1>
            </header>

            <div className='flex flex-col w-full h-[90%] overflow-y-scroll rounded-2xl border-gray-200 border-4'>
                <header className='flex flex-row p-3'>
                    <h1 className='text-black font-extrabold'> |-[ Postagens : {posts} ]-| </h1>
                </header>
            </div>
        </div>
    )
}