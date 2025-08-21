import React from 'react';
import Barnes from "../assets//Barnes.png";

function Reviews() {
  const clientReviews = [
    { company: "Planety", name: "Nina Walloch" },
    { company: "Workiz Easy", name: "Tomer Levy" },
    { company: "Premium Blend", name: "Ellen Kim" },
    { company: "Hypercare Systems", name: "Brendan Goss" },
    { company: "Officevibe", name: "Raff Labrie" },
    { company: "Trawa Energy", name: "David Budde" }
  ];

  return (
    <div className='w-full'>
        {/* Header */}
        <div className='w-full mt-8 md:mt-[5vw]'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[4vw] font-thin font-["Founders_Grotesk"] border-b-[2px] border-[#B3B3B2] px-4 md:px-10 py-4'>
                Clients&apos; reviews
            </h1>
        </div>

        {/* Featured Review */}
        <div className="review w-full flex flex-col lg:flex-row justify-between mt-6 md:mt-2 px-4 md:px-0">
            
            {/* Company Name */}
            <div className="karmanV w-full lg:w-[20%] px-2 md:px-4 py-3 font-thin underline text-lg md:text-xl lg:text-[1.6vw] order-1">
                <a href="#" className="hover:no-underline transition-all duration-200">
                    <h3 className='font-["Founders_Grostesk"]'>Karman Ventures</h3>
                </a>
            </div>
            
            {/* Services */}
            <div className="services flex items-start px-2 md:px-3 py-3 flex-col font-['Founders_Grostesk'] w-full lg:w-[20%] order-2">
                <div className="heading">
                    <h2 className='text-lg md:text-xl lg:text-[1.6vw] mb-4 lg:mb-16'>Services:</h2>
                </div>
                <div className="deck flex flex-col gap-2 lg:gap-0 lg:mt-0">
                    <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                        <button className='rounded-full border-[1.5px] text-sm md:text-base lg:text-[1.2vw] border-[#212121] px-4 py-2 uppercase hover:bg-[#212121] hover:text-white transition-colors duration-200'>
                            investors deck
                        </button>
                    </a>
                    <a href="https://ochi.design/services/" target="_blank" rel="noopener noreferrer">
                        <button className='rounded-full border-[1.5px] text-sm md:text-base lg:text-[1.2vw] border-[#212121] px-4 py-2 uppercase mt-2 hover:bg-[#212121] hover:text-white transition-colors duration-200'>
                            sales deck
                        </button>
                    </a>
                </div>
            </div>
            
            {/* William Barnes Review */}
            <div className="williamB font-['Founders_Grostesk'] px-2 md:px-3 py-3 w-full lg:w-[30%] order-4 lg:order-3">
                <div className="heading text-lg md:text-xl lg:text-[1.6vw] mb-4">William Barnes</div>
                <div className="image mb-4 lg:mt-[4.5vw] lg:mb-6">
                    <img className='w-20 h-20 md:w-24 md:h-24 lg:w-1/3 rounded-[10px] object-cover' src={Barnes} alt="William Barnes"/>
                </div>
                <div className='para leading-relaxed lg:leading-[2vw] font-medium text-sm md:text-base'>
                    <p>
                        They were transparent about the time and the stages of the project. The end product is high quality and I feel confident about how they were handholding the client through the process.
                        I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively
                        from story to design. 5/5
                    </p>
                </div>
            </div>

            {/* Read More */}
            <div className="read w-full lg:w-[10%] text-lg md:text-xl lg:text-[1.6vw] px-2 py-3 font-['Founders_Grostesk'] order-3 lg:order-4">
                <div className="heading uppercase text-[#B2B3B3]">read</div>
            </div>
        </div>

        {/* Client List */}
        <div className='w-full mt-8 md:mt-4'>
            {clientReviews.map((client, index) => (
                <div key={index} className='flex flex-col md:flex-row px-4 md:px-6 py-3 md:py-2 items-start md:items-center w-full border-t-[1px] border-[#B2B3B3] gap-2 md:gap-0'>
                    <div className='underline flex-1 md:flex-none md:w-1/3'>
                        <a href="#" className="hover:no-underline transition-all duration-200 text-sm md:text-base">
                            {client.company}
                        </a>
                    </div>
                    <div className='flex-1 md:flex-none md:w-1/3 md:text-center text-sm md:text-base'>
                        {client.name}
                    </div>
                    <div className='underline flex-1 md:flex-none md:w-1/3 md:text-right text-sm md:text-base'>
                        <a href="#" className="hover:no-underline transition-all duration-200">
                            READ
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews