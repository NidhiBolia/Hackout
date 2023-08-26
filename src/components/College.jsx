import React from 'react';
import GetCollege from './getCollege';
import Navbar from './Navbar';
export default function College() {
  return (
    <>
   <Navbar />
    <div className='mt-24'>
        <p class="text-5xl ml-20 mt-14 font-semibold text-black font-[Roboto]"> Discover universities</p>
        <div className='flex gap-8 mt-10 ml-20 font-[Roboto]'>
        <div className=' flex justify-center items-center font-[Roboto]'>
        <GetCollege />
        </div>
        <div>
        <GetCollege />
        </div>
        </div>
    </div>
    </>
  )
}
