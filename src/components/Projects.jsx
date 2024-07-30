import React from 'react';
import { FaCircle } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import Fyde from "../assets//Fyde.png";
import Vise from "../assets//Vise.jpg";
import Blend from "../assets//Blend.png";
import Trawa from "../assets//Trawa.jpg";


function Projects() {
  return (
    <div  className='w-full py-14'>
        <div className=' w-full '>
            <h1 className='font-["Founders_Grostesk"] px-10 py-2 border-b-[2px] border-[#B3B3B2] text-[5vw]'>Featured Projects</h1>
            <div className='cards w-full flex gap-10 px-10'>
                <div className='fyde w-1/2 h-[79vh] mt-5'>
                <div className='FYDE font-["Founders_Grotesk"] flex items-center gap-2 px-5 py-4'><FaCircle className='h-3 w-3' />FYDE</div>
                <div className='w-full h-[63vh] rounded-[1.6vw] overflow-hidden'>
                    <img className='w-full h-full' src={Fyde} />
                </div>
                <div className='buttons mt-6 flex items-center gap-[1vw]'>
                    <a href="https://ochi.design/services/"><button className='rounded-full uppercase leading-none scale-[1] px-2 py-[0.6vw] border-[2px] border-[#B3B3B2] text-[1.2vw]'>audit</button></a>
                    <a href="https://ochi.design/services/"><button className='rounded-full uppercase leading-none scale-[1] px-2 py-[0.6vw] border-[2px] border-[#B3B3B2] text-[1.2vw]'>copywriting</button></a>
                    <a href="https://ochi.design/services/"><button className='rounded-full uppercase leading-none scale-[1] px-2 py-[0.6vw] border-[2px] border-[#B3B3B2] text-[1.2vw]'>sales design</button></a>
                    <a href="https://ochi.design/services/"><button className='rounded-full uppercase leading-none scale-[1] px-2 py-[0.6vw] border-[2px] border-[#B3B3B2] text-[1.2vw]'>slides design</button></a>
                </div>
                </div>
                <div className='vise w-1/2 h-[79vh] mt-5'>
                <div className='FYDE font-["Founders_Grotesk"]  flex items-center gap-2 px-5 py-4'><FaCircle className='h-3 w-3' />VISE</div>
                <div className='w-full h-[63vh] rounded-[1.6vw] overflow-hidden'>
                    <img className='w-full h-full' src={Vise} />
                </div>
                <div className="buttons mt-6 flex ml-2 items-center gap-5">
                    <a href="https://ochi.design/services/"><button className='rounded-full  py-[0.6vw] leading-none scale-[1.1] px-2 uppercase border-[2px] border-[#B3B3B2] text-[1.2vw] ' >Agency</button></a>
                    <a href="https://ochi.design/services/"><button className='rounded-full  py-[0.6vw] leading-none scale-[1.1] px-2 uppercase border-[2px] border-[#B3B3B2] text-[1.2vw] '>Company Presentation</button></a>
                </div>
                </div>
            </div>
            <div className='cards w-full flex gap-10 px-10'>
                <div className='trawa w-1/2 h-[79vh] mt-5'>
                <div className='trawa font-["Founders_Grotesk"] flex items-center gap-2 uppercase px-5 py-4'><FaCircle className='h-3 w-3' />trawa</div>
                <div className='w-full h-[63vh] rounded-[1.6vw] overflow-hidden'>
                    <img className='w-full h-full' src={Trawa} />
                </div>
                <div className='buttons mt-6 flex items-center gap-[1vw]'>
                    <a href="https://ochi.design/services/"><button className='rounded-full uppercase leading-none scale-[1] px-2 py-[0.6vw] border-[2px] border-[#B3B3B2] text-[1.2vw]'>brand identity</button></a>
                    <a href="https://ochi.design/services/"><button className='rounded-full uppercase leading-none scale-[1] px-2 py-[0.6vw] border-[2px] border-[#B3B3B2] text-[1.2vw]'>design research</button></a>
                    <a href="https://ochi.design/services/"><button className='rounded-full uppercase leading-none scale-[1] px-2 py-[0.6vw] border-[2px] border-[#B3B3B2] text-[1.2vw]'>investor deck</button></a>
            
                </div>
                </div>
                <div className='blend w-1/2 h-[79vh] mt-5'>
                <div className='blend font-["Founders_Grotesk"]  flex items-center gap-2 px-5 py-4'><FaCircle className='h-3 w-3' />VISE</div>
                <div className='w-full h-[63vh] rounded-[1.6vw] overflow-hidden'>
                    <img className='w-full h-full' src={Blend} />
                </div>
                <div className="buttons mt-6 flex ml-2 items-center gap-5">
                    <a href="https://ochi.design/services/"><button className='rounded-full  py-[0.6vw] leading-none scale-[1.1] px-2 uppercase border-[2px] border-[#B3B3B2] text-[1.2vw]'>Branded template</button></a>
                </div>
                </div>
            </div>
        <div className=" mt-16 relative case w-full h-[10vh]px-3 py-4">
            <a href="https://ochi.design/presentations/"><button className='uppercase px-8 py-4 flex items-center gap-3 absolute top-1/2 bg-zinc-900 text-white left-1/2 -translate-x-[50%] -translate-y-[50%] border-[3px] rounded-full' >view all case studies
             <RiArrowRightUpLine /> </button></a>
        </div>
            
        </div>
    </div>
  )
}

export default Projects