import React, { useEffect, useState } from 'react';

function EyesPlay() {

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
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-full relative bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute gap-10 flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <h3 className='text-white absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>PLAY</h3>
                        <div style={{transform :`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] line w-full h-7'>
                        <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                        </div>
                       
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <h3 className='text-white absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>PLAY</h3>
                    <div style={{transform :`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] line w-full h-7'>
                        <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
        
    </div>
  )
}

export default EyesPlay