import { useState } from 'react'
import './App.css'
import Tindercard from './components/tindercard'
function App() {

  return (
   <div className='flex w-full h-screen justify-center items-center'>
      <Tindercard/>
      <input type="file" className='absolute right-[2%] top-[2%] w-[30%] bg-red-500 rounded-[4px] p-1.5 text-white' accept='image/*'/>
   </div>
  )
}

export default App
