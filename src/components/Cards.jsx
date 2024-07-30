import React from 'react';
import Ochi from "../assets//ochi.svg";
import clutch from "../assets//clutch.svg";
import FutureA from "../assets//FutureAcademy.png";


function Cards() {
  return (
    <div className='w-full h-[100vh]'>
        <div className='w-full h-[60vh] relative flex items-center gap-4 px-8 py-2 top-[12vw] '>
            <div className='w-1/3 h-[47vh] relative rounded-[1vw] flex items-center justify-center bg-[#004D43]'>
                <img className='w-[40%]' src={Ochi} />
                <button className='absolute bottom-6 left-8 text-[#CFEB67] border-[1px] border-[#CFEB67] rounded-full px-3 py-[0.2vw]'> © 2019-2022</button>
            </div>
            <div className='w-1/3 relative h-[47vh] flex items-center justify-center rounded-[1vw] bg-[#212121]'>
            <img className='w-[40%]' src={clutch} />
            <button className='absolute bottom-6 left-6 text-[#fff] border-[1px] border-[#fff] rounded-full px-3 tracking-tight uppercase py-[0.2vw]'>rating 5.0 on clutch</button>
            </div>
            <div className='w-1/3 relative h-[47vh] flex items-center justify-center rounded-[1vw] bg-[#212121]'>
            <img className='w-[40%]' src={FutureA} />
            <button className='absolute bottom-6 left-6 text-[#fff] border-[1px] border-[#fff] rounded-full px-2 tracking-tight uppercase py-[0.2vw]'>business bootcamp alumini</button>
            
            </div>
        </div>
    </div>
  )
}

export default Cards