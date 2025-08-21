import React from 'react'

function AboutUs() {
  return (
    <div className='w-full py-8 md:py-20 px-4 md:px-12 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl'>
        <h1 className='font-["Neue_Montreal"] text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] leading-tight md:leading-[4.3vw] tracking-tight'>
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain
            complex ideas, and hire great people.
        </h1>
        
        <div className='w-full border-t-[1.5px] border-[#98AE52] border-b-[1.5px] mt-8 md:mt-[5vh] py-4 md:py-[1.2vw] font-["Founders_Grotesk"] flex flex-col lg:flex-row gap-6 lg:gap-[1vw]'>
            
            {/* Left Section */}
            <div className="w-full lg:w-[40%]">
                <h3 className='text-lg md:text-xl lg:text-[1.5vw] px-2 md:px-5 py-2 font-medium'>
                    What can you expect:
                </h3>
            </div>
            
            {/* Center Section */}
            <div className="w-full lg:w-[25%] text-sm md:text-base lg:text-[1.3vw] leading-relaxed lg:leading-[2vw] px-2 md:px-[10px] py-2 md:py-[10px] space-y-6 lg:space-y-[3vw]">
                <p>
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. 
                    Whether it's live or digital delivered for one or a hundred people.
                </p>
                <p>
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message 
                    clear, convincing and captivating.
                </p>
            </div>
            
            {/* Socials Section */}
            <div className="w-full lg:w-[20%] px-4 md:px-8 py-4 lg:ml-[8%] lg:mt-[30%]">
                <h2 className="text-lg md:text-xl font-medium mb-3">S:</h2>
                <div className="flex flex-col space-y-1 md:space-y-2">
                    <a 
                        className='underline hover:no-underline transition-all duration-200 text-sm md:text-base' 
                        href="https://www.instagram.com/ochi_design/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a 
                        className='underline hover:no-underline transition-all duration-200 text-sm md:text-base' 
                        href="https://www.facebook.com/people/OCHI-presentation-design/100067218942460/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                    <a 
                        className='underline hover:no-underline transition-all duration-200 text-sm md:text-base' 
                        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFSdLHWArjFDgAAAZDOt_Yod0U94hM4JsRx-3a2IurJaCuhDK6HlW3gY3A1nqtc-yUsQOLVTATUmQz9UuB72o0Q0Bm3SwMuNfJViy_I1wE_95QuwmRVaNkGRNEovcp5pueX-UU=&original_referer=https://ochi.design/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F56403597"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a 
                        className='underline hover:no-underline transition-all duration-200 text-sm md:text-base' 
                        href="https://www.behance.net/ochi_design"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Behance
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs