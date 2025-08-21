import React from 'react';
import LandingPageImg from "..//assets//landingPage.jpg";
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full min-h-screen pt-1'>
        <div className='textStructure mt-20 md:mt-32 lg:mt-40 px-4 md:px-10'>
            {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
                return (
                    <div key={index} className='masker overflow-hidden'>
                        <div className='w-fit flex items-center'>
                            {index === 1 && (
                                <motion.div 
                                    initial={{width: 0}} 
                                    animate={{width: "8rem"}}
                                    transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                                    className='w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 lg:w-[10vw] lg:h-[6.3vw] mr-2 md:mr-[1vw] rounded-md overflow-hidden'
                                >
                                    <img 
                                        className='w-full h-full object-cover' 
                                        src={LandingPageImg} 
                                        alt="Eye opening presentation"
                                    />
                                </motion.div>
                            )}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.5vw] leading-none tracking-tighter font-semibold font-['Founders_Grotesk_Condensed']">
                                {item}
                            </h1>
                        </div>
                    </div>
                )
            })}
        </div>
        
        <div className='border-t-[1px] py-4 md:py-5 px-4 md:px-16 border-zinc-400 mt-12 md:mt-16 lg:mt-[6.5vw] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0'>
            
            {/* Description texts */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 order-2 md:order-1'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='text-sm md:text-base lg:text-lg font-light tracking-tighter leading-tight'>
                        {item}
                    </p>
                ))}
            </div>
            
            {/* Start Project Button */}
            <div className='Start flex items-center gap-5 order-1 md:order-2 mb-4 md:mb-0'>
                <div className='py-2 md:py-1 px-4 md:px-4 border-[2px] font-light border-zinc-500 uppercase rounded-full text-sm md:text-base hover:bg-zinc-900 hover:text-white transition-colors duration-200'>
                    <a href="https://ochi.design/contact/" target="_blank" rel="noopener noreferrer">
                        start the project
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage