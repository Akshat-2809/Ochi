import React, { useEffect, useState } from 'react';
import { RiArrowRightUpLine } from "react-icons/ri";


function Start() {
    const [rotate,setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
    

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.12"  className='w-full overflow-hidden bg-[#CFEB67]'>
        <div className='heading relative font-["Founders_Grotesk"] left-[12vw] top-5 text-center h-[50vh] uppercase w-[75%]'>
            <h1 className='text-[10vw] text-[#212121] leading-none tracking-tighter font-bold'>ready</h1>
            <h1 className='text-[10vw] text-[#212121] leading-none tracking-tighter font-bold'>to start</h1>
            <h1 className='text-[10vw] text-[#212121] mt-1 leading-none tracking-tighter font-bold'>the project?</h1>
        </div>
        <div className='eye relative w-full h-[25vh]'>
            <div className='mt-7 absolute gap-10 flex left-1/2 -translate-x-[50%]' >
            <div className='flex items-center justify-center w-[13vw] h-[13vw] bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <div style={{transform :`translate(-50%,-50%) rotate(${rotate}deg)`}}  className='absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] line w-full h-7'>
                        <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                        </div>
                       
                    </div>
                </div>
                <div className='flex items-center justify-center w-[13vw] h-[13vw] bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform :`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] line w-full h-7'>
                        <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                
            </div>

            
        </div>
        <div className='h-[26vh] w-[50%] relative ml-[24vw] flex items-center flex-col'>
            <div className='sProject'>
            <a href="https://ochi.design/contact/"><button className='flex items-center gap-2 mt-8 uppercase text-[1.1vw] rounded-full  bg-black text-white border-none px-3 py-4 '>start the project <RiArrowRightUpLine/></button></a>
            </div>
            <div><h2 className='text-xl mt-3 mb-2 font-["Founders_Grotesk"]'>OR</h2></div>
            <div>
                <a href="mailto:hello@ochi.design"><button className='flex items-center gap-2 uppercase text-[1.1vw] rounded-full border-[2px] px-4 py-2 border-[#202120]'>hello@ochi.design <RiArrowRightUpLine/></button></a>
            </div>

        </div>
        
        
    </div>
  )
}

export default Start