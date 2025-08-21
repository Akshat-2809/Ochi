import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='py-6 md:py-10 w-full bg-[#004C42] rounded-tr-3xl rounded-tl-3xl'>
        <div className='overflow-hidden px-2 movingText border-t-[2px] border-b-[2px] border-zinc-300 flex whitespace-nowrap text-white'>
            <motion.h1 
                initial={{x:"0"}} 
                animate={{x:"-100%"}} 
                transition={{repeat: Infinity, ease:"linear", duration:10}} 
                className='text-6xl sm:text-8xl md:text-9xl lg:text-[14vw] leading-none font-["Founders_Grotesk"] font-semibold tracking-tight uppercase pr-8 md:pr-12 pb-4 md:pb-6 pt-4 md:pt-6'
            >
                We are Ochi
            </motion.h1>
            <motion.h1 
                initial={{x:"0"}} 
                animate={{x:"-100%"}} 
                transition={{repeat: Infinity, ease:"linear", duration:10}} 
                className='text-6xl sm:text-8xl md:text-9xl lg:text-[14vw] leading-none font-["Founders_Grotesk"] font-semibold tracking-tight pt-4 md:pt-6 pr-8 md:pr-12 pb-4 md:pb-6 uppercase'
            >
                We are Ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee