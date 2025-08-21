import React from 'react';
import Ochi from "../assets//ochi.svg";
import clutch from "../assets//clutch.svg";
import FutureA from "../assets//FutureAcademy.png";

function Cards() {
  return (
    <div className='w-full min-h-screen py-8 md:py-16 lg:py-20'>
        <div className='w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-4 md:gap-6 px-4 md:px-8'>
            
            {/* Ochi Card */}
            <div className='w-full lg:w-1/3 h-64 md:h-80 lg:h-[47vh] relative rounded-xl md:rounded-[1vw] flex items-center justify-center bg-[#004D43] p-4'>
                <img 
                    className='w-32 md:w-40 lg:w-[40%] max-w-[160px]' 
                    src={Ochi} 
                    alt="Ochi logo"
                />
                <button className='absolute bottom-4 md:bottom-6 left-4 md:left-8 text-[#CFEB67] border-[1px] border-[#CFEB67] rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm lg:text-base hover:bg-[#CFEB67] hover:text-[#004D43] transition-colors duration-200'>
                    © 2019-2022
                </button>
            </div>
            
            {/* Clutch Card */}
            <div className='w-full lg:w-1/3 h-64 md:h-80 lg:h-[47vh] relative flex items-center justify-center rounded-xl md:rounded-[1vw] bg-[#212121] p-4'>
                <img 
                    className='w-32 md:w-40 lg:w-[40%] max-w-[160px]' 
                    src={clutch} 
                    alt="Clutch logo"
                />
                <button className='absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white border-[1px] border-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm lg:text-base tracking-tight uppercase hover:bg-white hover:text-[#212121] transition-colors duration-200'>
                    rating 5.0 on clutch
                </button>
            </div>
            
            {/* Future Academy Card */}
            <div className='w-full lg:w-1/3 h-64 md:h-80 lg:h-[47vh] relative flex items-center justify-center rounded-xl md:rounded-[1vw] bg-[#212121] p-4'>
                <img 
                    className='w-32 md:w-40 lg:w-[40%] max-w-[160px]' 
                    src={FutureA} 
                    alt="Future Academy logo"
                />
                <button className='absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white border-[1px] border-white rounded-full px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm lg:text-base tracking-tight uppercase hover:bg-white hover:text-[#212121] transition-colors duration-200'>
                    business bootcamp alumni
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards