import React from 'react'

function Footer() {
  return (
    <div className='w-full overflow-hidden relative min-h-screen py-12 md:py-24 px-4 md:px-14'>
        <div className='inner flex flex-col lg:flex-row gap-8 lg:gap-[10vw]'>
            
            {/* Eye-Opening Section */}
            <div className='Eye-Opening font-["Founders_Grotesk"] flex flex-col justify-start lg:justify-between w-full lg:w-[38%] order-2 lg:order-1'>
                <div className='heading'>
                    <h1 className='uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[6.4vw] font-semibold leading-none tracking-tighter py-4 md:py-6'>
                        EYE- <br />Opening
                    </h1>
                </div>
            </div>
            
            {/* Presentations Section */}
            <div className='Presentation w-full lg:w-[65%] order-1 lg:order-2'>
                <h1 className='uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] px-2 font-semibold font-["Founders_Grotesk"]'>
                    Presentations
                </h1>
                
                {/* Social Links */}
                <div className='details px-3 mt-4 md:mt-2 text-base md:text-lg lg:text-[1.2vw]'>
                    S:
                    <a className='block mt-2 md:mt-3 underline hover:no-underline transition-all duration-200' 
                       href="https://www.instagram.com/ochi_design/"
                       target="_blank"
                       rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a className='block mt-1 underline hover:no-underline transition-all duration-200' 
                       href="https://www.facebook.com/people/OCHI-presentation-design/100067218942460/"
                       target="_blank"
                       rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a className='block mt-1 underline hover:no-underline transition-all duration-200' 
                       href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFSdLHWArjFDgAAAZDOt_Yod0U94hM4JsRx-3a2IurJaCuhDK6HlW3gY3A1nqtc-yUsQOLVTATUmQz9UuB72o0Q0Bm3SwMuNfJViy_I1wE_95QuwmRVaNkGRNEovcp5pueX-UU=&original_referer=https://ochi.design/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F56403597"
                       target="_blank"
                       rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a className='block mt-1 underline hover:no-underline transition-all duration-200' 
                       href="https://www.behance.net/ochi_design"
                       target="_blank"
                       rel="noopener noreferrer">
                        Behance
                    </a>
                </div>
                
                {/* Locations */}
                <div className='details text-base md:text-lg lg:text-[1.2vw] mt-6 md:mt-8 px-3'>
                    L:
                    <a className='block mt-2 md:mt-3 underline hover:no-underline transition-all duration-200' href="#">
                        202-1965 W 4th Ave <br />Vancouver, Canada
                    </a>
                    <a className='block mt-4 md:mt-6 underline hover:no-underline transition-all duration-200' href="#">
                        30 Chukarina St <br />Lviv, Ukraine
                    </a>
                </div>
                
                {/* Email */}
                <div className='email text-base md:text-lg lg:text-[1.2vw] mt-8 md:mt-12 px-3'>
                    E:
                    <a className='block mt-2 md:mt-3 underline hover:no-underline transition-all duration-200' 
                       href="mailto:hello@ochi.design">
                        hello@ochi.design
                    </a>
                </div>
            </div>
        </div>
        
        {/* Footer Bottom */}
        <div className='outer w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 h-auto md:h-[8vh] mt-12 md:mt-[7vw] pt-6 border-t border-zinc-300 md:border-none'>
            <div className='left-branding order-2 md:order-1'>
                <svg className="w-16 h-7 md:w-18 md:h-8" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"></path>
                    <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
                    <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"></path>
                    <path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"></path>
                    <path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"></path>
                </svg>
            </div>
            <div className='center-copy text-[#B2B3B3] text-sm md:text-base order-1 md:order-2'>
                <h2>© design 2024.</h2>
            </div>
            <div className='right-web text-[#B2B3B3] text-sm md:text-base order-3'>
                <h2>Website by Akshat</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer