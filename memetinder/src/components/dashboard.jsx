import {Link} from 'react-router-dom'
export default function Dashboard() {
    return(
        <div className='flex flex-col w-full h-screen content-around items-center'>
            <header className='flex flex-col-reverse justify-center items-center w-full h-[10%] bg-red-500 text-2xl '>
                <nav>
                    <Link to="/" className='text-blue-700 hover:underline'>Main</Link>
                </nav>
                <h1 className='font-mono text-white text-[20px] bg-red-800 rounded-[2px] p-1 gap-10'>DashBoard</h1>
            </header>

            <div className="absolute bottom-[20%] flex justify-center items-center p-6 w-[50%] h-[50%] bg-gray-300 shadow-[0px_20px_0px_0px_rgba(0,0,0,0.5)] rounded-2xl">
                <div className='grid w-full h-full bg-gray-200 overflow-y-scroll rounded-2xl'></div>
            </div>
        </div>
    )
}