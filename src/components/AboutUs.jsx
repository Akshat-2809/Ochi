import React from 'react'

function AboutUs() {
  return (
    <div className='w-full py-20 px-12 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.3vw] tracking-tight'>Ochi is a stratergic partner for fast-growing tech businesses that need to raise funds, sell products, explain
            complex ideas, and hire great people.
        </h1>
        <div className='Expect w-full gap-[1vw] h-[50vh] border-t-[1.5px] border-[#98AE52] py-[1.2vw]  overflow-hidden flex justify-between items-start relative top-[5vh] font-["Founders_Grotesk"] border-b-[1.5px]'>
            <div className="left w-[40%] h-[70%]">
                <h3 className=' text-[1.5vw] px-5 py-2'>What can you expect:</h3>
            </div>
            <div className="center text-[1.3vw] leading-[2vw] w-[25%] -ml-[1vw] h-[70% flex flex-col px-[10px] py-[10px]">
                <div className="centerP1">
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital delivered for one or a hundred people.</p>
                </div>
                <div className="centerP2 mt-[3vw] ">
                <p>We believe the mix of stratergy and design(with a bit of coffee) is what makes your message clear, convincing and captivating.</p>
                </div>
                
            </div>
            <div className="socials h-[60%] flex flex-col px-8 py-4 left-[8%] relative top-[30%] w-[20%]">
                <h2>S:</h2>
                <a className='mt-3 underline' href="https://www.instagram.com/ochi_design/">Instagram</a>
                <a className= 'mt-[0.2vw] underline' href="https://www.facebook.com/people/OCHI-presentation-design/100067218942460/">Facebook</a>
                <a className= 'mt-[0.2vw] underline' href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFSdLHWArjFDgAAAZDOt_Yod0U94hM4JsRx-3a2IurJaCuhDK6HlW3gY3A1nqtc-yUsQOLVTATUmQz9UuB72o0Q0Bm3SwMuNfJViy_I1wE_95QuwmRVaNkGRNEovcp5pueX-UU=&original_referer=https://ochi.design/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F56403597">LinkedIn</a>
                <a className='mt-[0.2vw] underline' href="https://www.behance.net/ochi_design">Behance</a>

            </div>
        </div>
        
    </div>
  )
}

export default AboutUs