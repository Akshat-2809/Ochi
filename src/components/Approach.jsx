import React from 'react';
import HomePage from "../assets/HomePage.jpg";

function Approach() {
  return (
    <div className='w-full h-[60vh] flex items-start bg-[#CDEA68]'>
        <div className="approach px-6 py-1 w-1/2 ">
            <h1 className='text-[5vw]'>Our approach:</h1>
            <a href="https://ochi.design/ochi-team/"><button className='flex items-center mt-3 gap-[20px] px-7 text-white py-4 rounded-full bg-zinc-900 '>READ MORE
                <div className='w-2 h-2 bg-zinc-100 rounded-full'>
                    </div></button></a>
        </div>
        <div className="imageDiv w-1/2 h-[93%] mr-8 ">
        <img className='object-cover rounded-[20px]' src={HomePage}></img>
        </div>
    </div>
  )
}

export default Approach