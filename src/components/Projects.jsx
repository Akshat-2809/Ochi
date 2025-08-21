import React from 'react';
import { FaCircle } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import Fyde from "../assets//Fyde.png";
import Vise from "../assets//Vise.jpg";
import Blend from "../assets//Blend.png";
import Trawa from "../assets//Trawa.jpg";

function Projects() {
  return (
    <div className='w-full py-8 md:py-14'>
        <div className='w-full'>
            <h1 className='font-["Founders_Grostesk"] px-4 md:px-10 py-4 md:py-2 border-b-[2px] border-[#B3B3B2] text-3xl sm:text-4xl md:text-5xl lg:text-[5vw]'>
                Featured Projects
            </h1>
            
            {/* First Row of Cards */}
            <div className='cards w-full flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 md:px-10 mt-6'>
                
                {/* Fyde Card */}
                <div className='fyde w-full lg:w-1/2 mt-4 lg:mt-5'>
                    <div className='FYDE font-["Founders_Grotesk"] flex items-center gap-2 px-2 md:px-5 py-4'>
                        <FaCircle className='h-2 w-2 md:h-3 md:w-3' />
                        FYDE
                    </div>
                    <div className='w-full h-64 md:h-80 lg:h-[63vh] rounded-lg md:rounded-[1.6vw] overflow-hidden'>
                        <img className='w-full h-full object-cover' src={Fyde} alt="Fyde project" />
                    </div>
                    <div className='buttons mt-4 md:mt-6 flex flex-wrap items-center gap-2 md:gap-4'>
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full uppercase leading-none px-3 md:px-4 py-2 md:py-3 border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                audit
                            </button>
                        </a>
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full uppercase leading-none px-3 md:px-4 py-2 md:py-3 border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                copywriting
                            </button>
                        </a>
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full uppercase leading-none px-3 md:px-4 py-2 md:py-3 border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                sales design
                            </button>
                        </a>
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full uppercase leading-none px-3 md:px-4 py-2 md:py-3 border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                slides design
                            </button>
                        </a>
                    </div>
                </div>
                
                {/* Vise Card */}
                <div className='vise w-full lg:w-1/2 mt-4 lg:mt-5'>
                    <div className='VISE font-["Founders_Grotesk"] flex items-center gap-2 px-2 md:px-5 py-4'>
                        <FaCircle className='h-2 w-2 md:h-3 md:w-3' />
                        VISE
                    </div>
                    <div className='w-full h-64 md:h-80 lg:h-[63vh] rounded-lg md:rounded-[1.6vw] overflow-hidden'>
                        <img className='w-full h-full object-cover' src={Vise} alt="Vise project" />
                    </div>
                    <div className="buttons mt-4 md:mt-6 flex flex-wrap items-center gap-2 md:gap-4">
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full py-2 md:py-3 leading-none px-3 md:px-4 uppercase border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                Agency
                            </button>
                        </a>
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full py-2 md:py-3 leading-none px-3 md:px-4 uppercase border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                Company Presentation
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Second Row of Cards */}
            <div className='cards w-full flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 md:px-10 mt-8'>
                
                {/* Trawa Card */}
                <div className='trawa w-full lg:w-1/2 mt-4 lg:mt-5'>
                    <div className='trawa font-["Founders_Grotesk"] flex items-center gap-2 uppercase px-2 md:px-5 py-4'>
                        <FaCircle className='h-2 w-2 md:h-3 md:w-3' />
                        trawa
                    </div>
                    <div className='w-full h-64 md:h-80 lg:h-[63vh] rounded-lg md:rounded-[1.6vw] overflow-hidden'>
                        <img className='w-full h-full object-cover' src={Trawa} alt="Trawa project" />
                    </div>
                    <div className='buttons mt-4 md:mt-6 flex flex-wrap items-center gap-2 md:gap-4'>
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full uppercase leading-none px-3 md:px-4 py-2 md:py-3 border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                brand identity
                            </button>
                        </a>
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full uppercase leading-none px-3 md:px-4 py-2 md:py-3 border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                design research
                            </button>
                        </a>
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full uppercase leading-none px-3 md:px-4 py-2 md:py-3 border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                investor deck
                            </button>
                        </a>
                    </div>
                </div>
                
                {/* Blend Card */}
                <div className='blend w-full lg:w-1/2 mt-4 lg:mt-5'>
                    <div className='blend font-["Founders_Grotesk"] flex items-center gap-2 px-2 md:px-5 py-4'>
                        <FaCircle className='h-2 w-2 md:h-3 md:w-3' />
                        BLEND
                    </div>
                    <div className='w-full h-64 md:h-80 lg:h-[63vh] rounded-lg md:rounded-[1.6vw] overflow-hidden'>
                        <img className='w-full h-full object-cover' src={Blend} alt="Blend project" />
                    </div>
                    <div className="buttons mt-4 md:mt-6 flex flex-wrap items-center gap-2 md:gap-4">
                        <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                            <button className='rounded-full py-2 md:py-3 leading-none px-3 md:px-4 uppercase border-[2px] border-[#B3B3B2] text-xs md:text-sm lg:text-[1.2vw] hover:bg-[#B3B3B2] hover:text-white transition-colors duration-200'>
                                Branded template
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* View All Case Studies Button */}
            <div className="mt-12 md:mt-16 relative case w-full flex justify-center py-8">
                <a href="https://ochi.design/presentations/" target="_blank" rel="noopener noreferrer">
                    <button className='uppercase px-6 md:px-8 py-3 md:py-4 flex items-center gap-3 bg-zinc-900 text-white border-[3px] rounded-full text-sm md:text-base hover:bg-zinc-700 transition-colors duration-200'>
                        view all case studies
                        <RiArrowRightUpLine />
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects