import {Link} from 'react-router-dom'
import { useState } from 'react'
import ContentInDash from './ContentInDash';
import ContentPainel from './ContentPainel';
export default function Dashboard() {
    const [posts,setPost] = useState(0);
    const [content,seetContent] = useState([]);
    const [show,setShow] = useState(false);
    const [postURL,setPostURL] = useState('');

    function FECHAR() {
        setShow(false)
    }

    function ABRIR() {
        setShow(true);
    }

    function onChange(e) {
        ABRIR();

        const file = e.target.files[0];

        if(file) {
            const blob = new Blob([file], {type: file.type});
            const BlobURL = URL.createObjectURL(blob);
            setPostURL(BlobURL);
        }
        
    }


    return(
        <div className='flex flex-col w-full h-screen content-around items-center'>
            <header className='flex flex-col-reverse justify-center items-center w-full h-[10%] bg-red-500 text-2xl '>
                <nav>
                    <Link to="/" className='text-blue-700 hover:underline'>Main</Link>
                </nav>
                <h1 className='font-mono text-white text-[20px] bg-red-800 rounded-[2px] p-1 gap-10'>DashBoard</h1>
            </header>

            <div className='flex flex-col w-full h-[90%] rounded-2xl border-gray-200 border-4'>
                <header className='flex flex-row p-3'>
                    <h1 className='text-black font-extrabold'> |-[ Postagens : {posts} ]-| </h1>
                </header>
                <div className='flex flex-col justify-center items-center text-center overflow-y-scroll'>
                </div>
                <div className='flex justify-center items-center'>
                    <input type="file" className='bg-red-400 rounded-[3px] p-5 text-white font-mono' accept='image/*' onChange={onChange}/>
                </div>
            </div>
            <dialog className={`${show ? 'flex': 'none'}`}>
                {show ? <ContentPainel
                    url={postURL}
                    exitFunc={FECHAR}
                /> : null }
            </dialog>
        </div>
    )
}