import React, { useEffect, useState } from 'react';

function EyesPlay() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div 
                data-scroll 
                data-scroll-section 
                data-scroll-speed="-.5" 
                className='w-full h-full relative bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
            >
                <div className='absolute flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    
                    {/* First Eye */}
                    <div className='flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-[15vw] xl:h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <h3 className='text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xs sm:text-sm md:text-base lg:text-lg font-medium'>
                                PLAY
                            </h3>
                            <div 
                                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} 
                                className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 line w-full h-6 md:h-7'
                            >
                                <div className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                    {/* Second Eye */}
                    <div className='flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-[15vw] xl:h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <h3 className='text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xs sm:text-sm md:text-base lg:text-lg font-medium'>
                                PLAY
                            </h3>
                            <div 
                                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} 
                                className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 line w-full h-6 md:h-7'
                            >
                                <div className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EyesPlay