import React from 'react';
import Barnes from "../assets//Barnes.png";

function Reviews() {
  return (
    <div className='w-full'>
        <div className='w-full h-[14vh] mt-[5vw]'>
            <h1 className='text-[4vw] font-thin font-["Founders_Grotesk"] border-b-[2px] border-[#B3B3B2] px-10 py-4'>Clients' reviews</h1>
        </div>
        <div className="review w-full flex justify-between h-[60vh] mt-2">
            <div className="karmanV w-[20%] px-4 py-3 font-thin underline text-[1.6vw]">
                <a href=""><h3 className='font-["Founders_Grostesk"]'>Karman Ventures</h3></a>
            </div>
            <div className="services flex items-start px-3 py-3 flex-col font-['Founders_Grostesk'] w-[20%]">
                <div className="heading">
                    <h2 className='text-[1.6vw]'>Services:</h2>
                </div>
                <div className="deck flex flex-col mt-16 ">
                    <a href="https://ochi.design/services/"><button className='rounded-full border-[1.5px] text-[1.2vw]  border-[#212121] px-4 py-1 uppercase'>investors deck</button></a>
                    <a href="https://ochi.design/services/"><button className='rounded-full border-[1.5px] text-[1.2vw]  border-[#212121] px-4 py-1 uppercase mt-2' >sales deck</button></a>
                </div>
            </div>
            <div className="williamB font-['Founders_Grostesk'] px-3 py-3 w-[30%]">
                <div className="heading text-[1.6vw]">William Barnes</div>
                <div className="image mt-[4.5vw]">
                    <img className='w-1/3 rounded-[10px]' src={Barnes}/>
                </div>
                <div className='para mt-6 leading-[2vw] font-[500]'>
                    <p>They were transparent about the time and the stages of the project. The end product is high quality and i feel confident about how they were handholding the client through the process.
                         I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively
                         from story to design. 5/5
                    </p>
                </div>

            </div>
            <div className="read w-[10%] text-[1.6vw] px-2 py-3 font-['Founders_Grostesk']">
                <div className="heading uppercase text-[#B2B3B3] ">read</div>
            </div>
        </div>
        <div className='w-full'>
            <div className='Planety flex px-6 py-2 items-center w-full border-t-[1px] border-b-[1px] border-[#B2B3B3] gap-[40vw]'>
                <div className='underline'><a href="">Planety</a></div>
                <div className=''>Nina Walloch</div>
                <div className='py-1 underline'>READ</div>
            </div>
            <div className='Workiz flex px-6 py-2 items-center w-full border-b-[1px] border-[#B2B3B3] gap-[37.5vw] '>
                <div className='underline'><a href="">Workiz Easy</a></div>
                <div className='-ml-[0.3vw]'>Tomer Levy</div>
                <div className='py-1 underline ml-[3.5vw]' >READ</div>
            </div>
            <div className='PB flex px-6 py-2 items-center w-full border-b-[1px] border-[#B2B3B3] gap-[37.5vw] '>
                <div className='underline -ml-1'><a href="">Premium Blend</a></div>
                <div className='-ml-[1.6vw]'>Ellen Kim</div>
                <div className='py-1 underline ml-[4.8vw]' >READ</div>
            </div>
            <div className='Workiz flex px-6 py-2 items-center w-full border-b-[1px] border-[#B2B3B3] gap-[33vw] '>
                <div className='underline text-right -ml-1'><a href="">Hypercare Systems</a></div>
                <div className='ml-[0.2vw]'>Brendan Goss</div>
                <div className='py-1 underline ml-[6.6vw]' >READ</div>
            </div>
            <div className='Workiz flex px-6 py-2 items-center w-full border-b-[1px] border-[#B2B3B3] gap-[37.5vw] '>
                <div className='underline -ml-1'><a href="">Officevibe</a></div>
                <div className='ml-[1.2vw]'>Raff Labrie</div>
                <div className='py-1 underline ml-[3.7vw]' >READ</div>
            </div>
            <div className='Workiz flex px-6 py-2 items-center w-full border-b-[1px] border-[#B2B3B3] gap-[36vw] '>
                <div className='underline -ml-1'><a href="">Trawa Energy</a></div>
                <div className='ml-[0.7vw]'>David Budde</div>
                <div className='py-1 underline ml-[4.3vw]' >READ</div>
            </div>
           
            
        </div>
    </div>
  )
}

export default Reviews