import React, { useEffect } from 'react'
import {TbShoppingBag} from 'react-icons/tb'
import {TbMoneybag} from 'react-icons/tb'
import portrait from "./Image/Signup/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
import men1 from './Image/Aboutimg/men1.png'
import Men2 from './Image/Aboutimg/Men2.png'
import women3 from './Image/Aboutimg/women3.png'
import { CiTwitter} from 'react-icons/ci'
import {BiLogoInstagram} from 'react-icons/bi'
import {FiLinkedin} from 'react-icons/fi'
import Glide from '@glidejs/glide'
const About = () => {

  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 2000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, []);

  return (
    <div>
          <div className='flex gap-x-3 mt-4 font-bold'>
        <p>Home</p>
        <div>/</div>
        <p>About</p>
      </div>
    {/* 1 */}
      <div className='flex justify-center items-center gap-20'>
        <div className='flex flex-col gap-[2rem] w-[32rem] items-start'>
               <h1 className='text-[3rem] font-bold'>Our Story</h1>
        <p>Launced in 2015, Cartnevula is South Bharat online shopping makterplace with an active presense in India. Supported by wide range of tailored marketing, data and service solutions, Cartnevula has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        <p>Cartnevula has more than 1 Million products to offer, growing at a very fast. Cartnevula offers a diverse assotment in categories ranging  from consumer.</p>

        </div>
        <img className='w-[35rem] h-[31rem] rounded-lg border border-black' src={portrait} alt=""/>
      </div>
{/* 2 */}
      <div className='flex justify-center items-center mt-[3rem] gap-x-20'>

    <div className='flex justify-center items-center flex-col w-[12rem] rounded-md  h-[12rem] border border-1 border-[#a4a4a4] '>
      <div className=' bg-[#444444]  h-[5rem] w-[5rem] flex justify-center items-center rounded-full '>
        <div className='bg-black h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_120_1380)">
    <path d="M11.6666 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6666 25C9.8257 25 8.33331 26.4924 8.33331 28.3333C8.33331 30.1743 9.8257 31.6667 11.6666 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 11.8182H11.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.81818 15.4545H8.48484" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 19.0909H11.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_120_1380">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
        </svg>
        </div>
      </div>
      <h1 className='text-[2rem] font-extrabold'>10.5K</h1>
      <p className='font-bold text-[0.8rem]'>sallers active our site</p>
    </div>

    <div className='flex justify-center items-center flex-col rounded-md w-[12rem] h-[12rem] border border-1 border-[#a4a4a4] bg-[#DB4444] '>
      <div className=' bg-[#ffc1c1]  h-[5rem] w-[5rem] flex justify-center items-center rounded-full '>
        <div className='bg-[#FFFFFF] h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
  <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41Z" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.6 16.0017C27.2377 15.3734 26.7113 14.8554 26.0772 14.5032C25.443 14.151 24.725 13.9779 24 14.0023H20C18.9391 14.0023 17.9217 14.4236 17.1716 15.1735C16.4214 15.9234 16 16.9406 16 18.0011C16 19.0617 16.4214 20.0788 17.1716 20.8288C17.9217 21.5787 18.9391 22 20 22H24C25.0609 22 26.0783 22.4213 26.8284 23.1712C27.5786 23.9212 28 24.9383 28 25.9989C28 27.0594 27.5786 28.0766 26.8284 28.8265C26.0783 29.5764 25.0609 29.9977 24 29.9977H20C19.275 30.0221 18.557 29.849 17.9228 29.4968C17.2887 29.1446 16.7623 28.6266 16.4 27.9983" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 9V13.3333M22 30.6667V35" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </div>
      <h1 className='text-[2rem] font-extrabold'>33k</h1>
      <p className='font-bold text-[0.8rem]'>Mopnthly Produduct Sale</p>
    </div>

    <div className='flex justify-center items-center flex-col w-[12rem] rounded-md  h-[12rem] border border-1 border-[#a4a4a4] '>
      <div className=' bg-[#444444]  h-[5rem] w-[5rem] flex justify-center items-center rounded-full '>
        <div className='bg-black text-white  h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full'>
      <TbShoppingBag className='w-[2.5rem] h-[2.5rem]' />
        </div>
      </div>
      <h1 className='text-[2rem] font-extrabold'>45.5k</h1>
      <p className='font-bold text-[0.8rem]'>Customer active in our site</p>
    </div>

    <div className='flex justify-center items-center flex-col  w-[12rem]  rounded-md h-[12rem] border border-1 border-[#a4a4a4] '>
      <div className=' bg-[#444444]  h-[5rem] w-[5rem] flex justify-center items-center rounded-full '>
        <div className='bg-black text-white h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full'>
      <TbMoneybag className='w-[2.5rem] h-[2.5rem]'/>
        </div>
      </div>
      <h1 className='text-[2rem] font-extrabold'>25k</h1>
      <p className='font-bold text-[0.8rem]'>Anual gross sale in our site</p>
    </div>


      </div>
{/* 3 */}
<div>
  

<div className="relative  glide-02 mt-[5rem]">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden mb-[6rem]" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
 <div className='flex gap-x-8 justify-center items-center'>
<div className='flex flex-col gap-y-2'>
  <img src={women3} className='w-[14rem] h-[24rem] fill-current' alt=""/>
  <h1 className='font-bold'>Tom Cruise</h1>
  <p className='text-[0.8rem] font-bold'>Founder & Chairman</p>
  <div className='flex gap-x-3 font-bold'>
    <CiTwitter/>
    <BiLogoInstagram/>
    <FiLinkedin/>
  </div>
</div>
<div className='flex flex-col gap-y-2'>
  <img src={men1} className='w-[18rem] h-[24rem] fill-current' alt=""/>
  <h1 className='font-bold'>Emma Watson</h1>
  <p className='text-[0.8rem] font-bold'>Managing Director</p>
  <div className='flex gap-x-3 font-bold'>
    <CiTwitter/>
    <BiLogoInstagram/>
    <FiLinkedin/>
  </div>
</div>
<div className='flex flex-col gap-y-2'>
  <img src={Men2} className='w-[20rem] h-[24rem] fill-current' alt=""/>
  <h1 className='font-bold'>Will Smith</h1>
  <p className='text-[0.8rem] font-bold'>Product Designer</p>
  <div className='flex gap-x-3 font-bold'>
    <CiTwitter/>
    <BiLogoInstagram/>
    <FiLinkedin/>
  </div>
</div>

</div>
            </li>

            <li>
            <div className='flex gap-x-8 justify-center items-center'>
  
  <div className='flex flex-col gap-y-2'>
    <img src={women3} className='w-[14rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Tom Cruise</h1>
    <p className='text-[0.8rem] font-bold'>Founder & Chairman</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  <div className='flex flex-col gap-y-2'>
    <img src={men1} className='w-[18rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Emma Watson</h1>
    <p className='text-[0.8rem] font-bold'>Managing Director</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  <div className='flex flex-col gap-y-2'>
    <img src={Men2} className='w-[20rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Will Smith</h1>
    <p className='text-[0.8rem] font-bold'>Product Designer</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  
  
  </div>
            </li>

            <li>
            <div className='flex gap-x-8 justify-center items-center'>
  
  <div className='flex flex-col gap-y-2'>
    <img src={women3} className='w-[14rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Tom Cruise</h1>
    <p className='text-[0.8rem] font-bold'>Founder & Chairman</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  <div className='flex flex-col gap-y-2'>
    <img src={men1} className='w-[18rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Emma Watson</h1>
    <p className='text-[0.8rem] font-bold'>Managing Director</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  <div className='flex flex-col gap-y-2'>
    <img src={Men2} className='w-[20rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Will Smith</h1>
    <p className='text-[0.8rem] font-bold'>Product Designer</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  </div>
            </li>

            <li>
            <div className='flex gap-x-8 justify-center items-center'>
  
  <div className='flex flex-col gap-y-2'>
    <img src={women3} className='w-[14rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Tom Cruise</h1>
    <p className='text-[0.8rem] font-bold'>Founder & Chairman</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  <div className='flex flex-col gap-y-2'>
    <img src={men1} className='w-[18rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Emma Watson</h1>
    <p className='text-[0.8rem] font-bold'>Managing Director</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  <div className='flex flex-col gap-y-2'>
    <img src={Men2} className='w-[20rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Will Smith</h1>
    <p className='text-[0.8rem] font-bold'>Product Designer</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  
  
  </div>
            </li>

            <li>
            <div className='flex gap-x-8 justify-center items-center'>
  
  <div className='flex flex-col gap-y-2'>
    <img src={women3} className='w-[14rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Tom Cruise</h1>
    <p className='text-[0.8rem] font-bold'>Founder & Chairman</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  <div className='flex flex-col gap-y-2'>
    <img src={men1} className='w-[18rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Emma Watson</h1>
    <p className='text-[0.8rem] font-bold'>Managing Director</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  <div className='flex flex-col gap-y-2'>
    <img src={Men2} className='w-[20rem] h-[24rem] fill-current' alt=""/>
    <h1 className='font-bold'>Will Smith</h1>
    <p className='text-[0.8rem] font-bold'>Product Designer</p>
    <div className='flex gap-x-3 font-bold'>
      <CiTwitter/>
      <BiLogoInstagram/>
      <FiLinkedin/>
    </div>
  </div>
  
  
  </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      </div>
{/* 5 */}

<div className='flex justify-center items-center mt-[3rem] gap-[5.5rem]'>

<div className='flex justify-center text-center items-center flex-col gap-y-4 rounded-md  h-[12rem] '>
  <div className=' bg-[#444444]  h-[5rem] w-[5rem] flex justify-center items-center rounded-full '>
    <div className='bg-black h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<g clip-path="url(#clip0_120_1380)">
<path d="M11.6666 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6666 25C9.8257 25 8.33331 26.4924 8.33331 28.3333C8.33331 30.1743 9.8257 31.6667 11.6666 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 11.8182H11.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.81818 15.4545H8.48484" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 19.0909H11.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_120_1380">
  <rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
    </svg>
    </div>
  </div>
  <h1 className='text-[1rem] font-extrabold'>FREE AND FAST DELIVERY</h1>
  <p className='text-[0.8rem]'>Free delivery for all orders over $140</p>
</div>

<div className='flex justify-center text-center items-center flex-col rounded-md  gap-y-4 h-[12rem] '>
  <div className=' bg-[#444444]  h-[5rem] w-[5rem] flex justify-center items-center rounded-full '>
    <div className='bg-black h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_888_3534)">
    <path d="M13.3337 25.0001C13.3337 23.1591 11.8413 21.6667 10.0003 21.6667C8.15938 21.6667 6.66699 23.1591 6.66699 25.0001V28.3334C6.66699 30.1744 8.15938 31.6667 10.0003 31.6667C11.8413 31.6667 13.3337 30.1744 13.3337 28.3334V25.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M33.3337 25.0001C33.3337 23.1591 31.8413 21.6667 30.0003 21.6667C28.1594 21.6667 26.667 23.1591 26.667 25.0001V28.3334C26.667 30.1744 28.1594 31.6667 30.0003 31.6667C31.8413 31.6667 33.3337 30.1744 33.3337 28.3334V25.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.66699 25.0001V20.0001C6.66699 16.4639 8.07175 13.0725 10.5722 10.572C13.0727 8.07151 16.4641 6.66675 20.0003 6.66675C23.5365 6.66675 26.9279 8.07151 29.4284 10.572C31.9289 13.0725 33.3337 16.4639 33.3337 20.0001V25.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 31.6667C30 32.9928 28.9464 34.2646 27.0711 35.2023C25.1957 36.14 22.6522 36.6667 20 36.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_888_3534">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
  </div>
  <h1 className='text-[1rem] font-extrabold'>24/7 CUSTOMER SERVICE</h1>
  <p className='text-[0.8rem]'>Friendly 24/7 customer support</p>
</div>

<div className='flex justify-center text-center items-center flex-col rounded-md  gap-y-4 h-[12rem] '>
  <div className=' bg-[#444444]  h-[5rem] w-[5rem] flex justify-center items-center rounded-full '>
    <div className='bg-black h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M8.09943 30.5992L8.0992 30.5991C7.22647 29.9483 6.42586 28.9206 5.84306 27.759C5.26022 26.5973 4.91699 25.3451 4.91699 24.2666V11.8666C4.91699 9.50736 6.67182 6.96177 8.89149 6.13513L8.89245 6.13477L17.2087 3.01826C17.2088 3.01823 17.2089 3.0182 17.2089 3.01817C17.9624 2.73661 18.9619 2.5874 19.9837 2.5874C21.0054 2.5874 22.0049 2.73661 22.7584 3.01817C22.7585 3.0182 22.7585 3.01823 22.7586 3.01826L31.0749 6.13477L31.0758 6.13513C33.2955 6.96177 35.0503 9.50736 35.0503 11.8666V24.2499C35.0503 25.3371 34.7069 26.5892 34.1244 27.7483C33.5419 28.9073 32.7414 29.9313 31.8681 30.5824L31.8679 30.5826L24.7012 35.9326L24.7012 35.9325L24.695 35.9373C23.4123 36.9264 21.7243 37.4332 20.0003 37.4332C18.2777 37.4332 16.5855 36.927 15.2652 35.9486C15.265 35.9484 15.2649 35.9483 15.2647 35.9482L8.09943 30.5992ZM17.7422 4.43145L17.7415 4.4317L9.42487 7.54837L9.42416 7.54863C8.59658 7.86019 7.85535 8.52248 7.32443 9.29061C6.79333 10.059 6.43366 10.9898 6.43366 11.8832V24.2666C6.43366 25.161 6.74424 26.1892 7.20124 27.101C7.65813 28.0126 8.29361 28.8722 9.00118 29.4005L9.00122 29.4006L16.1676 34.7503C17.2296 35.5445 18.6286 35.9249 20.0024 35.9249C21.3764 35.9249 22.7786 35.5445 23.8481 34.7516L23.8494 34.7506L31.0161 29.4006L31.017 29.3999C31.7317 28.8638 32.3672 28.005 32.8225 27.0943C33.2779 26.1837 33.5837 25.16 33.5837 24.2666V11.8666C33.5837 10.9804 33.2232 10.0538 32.6929 9.28645C32.1624 8.51889 31.4226 7.85396 30.5979 7.5338L30.598 7.53376L30.5925 7.5317L22.2758 4.41503L22.2758 4.41495L22.2667 4.41174C21.6286 4.18651 20.8005 4.08314 20.001 4.08532C19.2024 4.0875 18.3755 4.19514 17.7422 4.43145Z" fill="#FAFAFA" stroke="#FAFAFA"/>
  <path d="M17.4135 21.0536L17.7671 21.4071L18.1206 21.0536L24.4039 14.7703C24.692 14.4822 25.1754 14.4822 25.4635 14.7703C25.7516 15.0583 25.7516 15.5417 25.4635 15.8298L18.2968 22.9965C18.1455 23.1478 17.9583 23.2167 17.7671 23.2167C17.5758 23.2167 17.3886 23.1478 17.2373 22.9965L14.5539 20.3131C14.2659 20.0251 14.2659 19.5417 14.5539 19.2536C14.842 18.9655 15.3254 18.9655 15.6135 19.2536L17.4135 21.0536Z" fill="#FAFAFA" stroke="#FAFAFA"/>
</svg>
    </div>
  </div>
  <h1 className='text-[1rem] font-extrabold'>MONEY BACK GUARANTEE</h1>
  <p className='text-[0.8rem]'>We reurn money within 30 days</p>
</div>


  </div>


    </div>
  )
}

export default About
