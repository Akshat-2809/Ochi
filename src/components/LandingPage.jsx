import React from 'react';
import LandingPageImg from "..//assets//landingPage.jpg";
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen pt-1 '>
        <div className='textStructure mt-40 px-10'>
            {["WE CREATE" ,"EYE OPENING", "PRESENTATIONS"].map((item,index)=>
            {return <div className='masker '>
                <div className='w-fit flex items-center '>
                    {index === 1 && (
                    <motion.div initial={{width:0}} animate={{width:"10vw"}}
                    transition={{ease:[0.76,0,0.24,1],duration:1}}
                    className='w-[10vw] h-[6.3vw] mr-[1vw] rounded-md'>
                    <img className='h-[6.3vw] object-contain' src={LandingPageImg} />
                    </motion.div>)}
                <h1 className="text-[7.5vw] leading-none tracking-tighter font-semibold font-['Founders_Grotesk_Condensed']" >
                {item}
                </h1>
                </div>
            
            </div>})}
            
        </div>
        
        <div className='border-t-[1px] py-5 px-16 border-zinc-400 mt-[6.5vw] flex items-center justify-between '>
            {["For public and private comapnies","From the first pitch to IPO"].map((item,index)=>
            <p className='text-md font-light tracking-tighter leading-none'>{item}</p>)}
         <div className='Start flex items-center gap-5'>
            <div className='py-1 px-4 border-[2px] font-light border-zinc-500 uppercase rounded-full'><a href="https://ochi.design/contact/">start the project</a></div>
           

         </div>
        </div>
       
    </div>
  )
}

export default LandingPage