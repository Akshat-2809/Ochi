import React from 'react';
import HomePage from "../assets/HomePage.jpg";

function Approach() {
  return (
    <div className='w-full min-h-[40vh] md:h-[60vh] flex flex-col lg:flex-row items-center lg:items-start bg-[#CDEA68] px-4 md:px-0 py-8 lg:py-0'>
        
        {/* Text Section */}
        <div className="approach w-full lg:w-1/2 px-2 md:px-6 py-4 lg:py-1 text-center lg:text-left">
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] font-medium mb-4 md:mb-6'>
                Our approach:
            </h1>
            <a href="https://ochi.design/ochi-team/" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center mx-auto lg:mx-0 mt-3 gap-4 md:gap-[20px] px-6 md:px-7 text-white py-3 md:py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200 text-sm md:text-base font-medium'>
                    READ MORE
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </a>
        </div>
        
        {/* Image Section */}
        <div className="imageDiv w-full lg:w-1/2 h-64 md:h-80 lg:h-[93%] px-4 lg:px-0 lg:mr-8 mt-6 lg:mt-0">
            <img 
                className='w-full h-full object-cover rounded-[20px] shadow-lg' 
                src={HomePage} 
                alt="Our approach visualization"
            />
        </div>
    </div>
  )
}

export default Approach