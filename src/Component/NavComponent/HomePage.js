import React, { useEffect ,useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {AiFillApple, AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import Glide from "@glidejs/glide"
import iphone14 from '../Image/HeroSectionimg/hero_endframe__cvklg0xk3w6e_large 2 (1).png'
import JbLBox from '../Image/HeroSectionimg/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import womanPic from '../Image/HeroSectionimg/attractive-woman-wearing-hat-posing-black-background 1.png'
import perfumeImg from '../Image/HeroSectionimg/perfumeImg.png'
import Controlar from '../Image/HeroSectionimg/Controlar.png'
import Keybord from '../Image/HeroSectionimg/Keybord.png'
import TV from '../Image/HeroSectionimg/TV.png'
import Chair from '../Image/HeroSectionimg/Chair (1).png'
import BookTable from '../Image/HeroSectionimg/BookTable.png'
import beg from '../Image/HeroSectionimg/beg.png'
import LoudSpeaker from '../Image/HeroSectionimg/LoudSpeaker.png'
import raincort from '../Image/HeroSectionimg/raincort.png'
import Camara from '../Image/HeroSectionimg/Camara.png'
import Cesar from '../Image/HeroSectionimg/Cesar.png'
import loshn from '../Image/HeroSectionimg/Loshn.png'
import Jacket from '../Image/HeroSectionimg/Jacket.png'
import Remote from '../Image/HeroSectionimg/Remote.png'
import boot from '../Image/HeroSectionimg/boot.png'
import Toycar from '../Image/HeroSectionimg/ToyCar.png'
import Laptop from '../Image/HeroSectionimg/Laptop.png'






const HomePage = () => {

  const [countdown, setCountdown] = useState(3 * 24 * 60 * 60 * 1000); // 3 days in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1000); // Subtract 1 second from the countdown every second
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  const formatTime = time => {
    return time < 10 ? `0${time}` : time;
  };
  const days = Math.floor(countdown / (24 * 60 * 60 * 1000));
  const hours = Math.floor((countdown % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((countdown % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((countdown % (60 * 1000)) / 1000);

  
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
      }, [])

  return (
    <div className='flex flex-col w-[80rem] mx-auto'>
{/* 1 */}
     <div className='flex justify-center items-center mt-10 gap-x-10'>
      <div className='w-[13rem] h-[21rem] flex flex-col gap-4 '>
        <div className='flex items-center cursor-pointer hover:font-bold gap-x-9'><p>Woman’s Fashion</p> <IoIosArrowForward/> </div>
        <div className='flex items-center cursor-pointer hover:font-bold gap-x-14'><p>Men’s Fashion</p> <IoIosArrowForward/> </div>
        <p className='overflow-y-hidden hover:font-bold cursor-pointer'>Electronics</p>
        <p className='overflow-y-hidden hover:font-bold cursor-pointer'>Home & Lifestyle</p>
        <p className='overflow-y-hidden hover:font-bold cursor-pointer'>Medicine</p>
        <p className='overflow-y-hidden hover:font-bold cursor-pointer'>Baby’s & Toys</p>
        <p className='overflow-y-hidden hover:font-bold cursor-pointer'>Sports & Outdoor</p>
        <p className='overflow-y-hidden hover:font-bold cursor-pointer'>Groceries & Pets</p>
        <p className='overflow-y-hidden hover:font-bold cursor-pointer'>Health & Beauty</p>

      </div>

      <div className="relative w-[55rem] h-[22rem] rounded-lg glide-02 overflow-y-hidden">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
                <div className='bg-black flex justify-center items-center w-[55rem] h-[22rem]  text-white p-4'>
                    <div className='flex flex-col gap-5 mt-5 px-6'>
                        <div className='flex items-center gap-10'>
                            <AiFillApple className='text-[4rem]'/>
                            <p>iPhone 14 Series</p>
                        </div>
                    <h1 className='text-[3rem] font-bold'>Up to 10% off Voucher</h1>
                    <div className='items-center flex gap-3'>
                        <p className='text-[1.5rem] border-b-2'>Shop Now</p>
                        <IoIosArrowForward/>
                    </div>
                    </div>
                    <img className='mt-5' src={iphone14} alt=""/>
                    
                </div>
           
            </li>
            {/* 2 */}
            <li>
                <div className='bg-black flex justify-center items-center w-[55rem] h-[22rem]  text-white p-4'>
                    <div className='flex flex-col gap-5 mt-5 px-6'>
                      
                    <h1 className='text-[3rem] font-bold'>Enhance Your Music Experience</h1>
                    <div className='items-center flex gap-3'>
                      <div className='w-[4rem] h-[4rem] rounded-full bg-white text-black flex justify-center items-center flex-col' >
                        <p className='text-[1rem] font-extrabold'>23</p>
                        <p className='text-[0.7rem] '>Hours</p>
                      </div>
                      <div className='w-[4rem] h-[4rem] rounded-full bg-white text-black flex justify-center items-center flex-col' >
                        <p className='text-[1rem] font-extrabold'>07</p>
                        <p className='text-[0.7rem] '>Day</p>
                      </div>
                      <div className='w-[4rem] h-[4rem] rounded-full bg-white text-black flex justify-center items-center flex-col' >
                        <p className='text-[1rem] font-extrabold'>59</p>
                        <p className='text-[0.7rem] '>Minutes</p>
                      </div>
                      <div className='w-[4rem] h-[4rem] rounded-full bg-white text-black flex justify-center items-center flex-col' >
                        <p className='text-[1rem] font-extrabold'>23</p>
                        <p className='text-[0.7rem] '>Secounds</p>
                      </div>
                    </div>
                    <div className=''>
                        
                    <button className=' w-[8rem] rounded-lg h-[3rem] bg-green-400 ' type="button"> Buy Now!</button>
                    </div>
                    </div>
                    <img className='mt-5' src={JbLBox} alt=""/>
                    
                </div>
           
            </li>
            {/* 3 */}
            <li>
                <div className='bg-[#000000] flex justify-center items-center w-[55rem] h-[22rem]  text-white p-4'>
                    <div className='flex flex-col gap-5 mt-5 px-6'>
                      
                    <h1 className='text-[3rem] font-bold'>Women’s Collections</h1>
                    <p className='text-[2rem]'>Featured woman collections that give you another vibe.</p>
            
                    <div className='items-center flex gap-3'>
                        <p className='text-[1.5rem] border-b-2'>Shop Now</p>
                        <IoIosArrowForward/>
                    </div>
                    </div>
                    <img className='mt-5' src={womanPic} alt=""/>
                    
                </div>
           
            </li>
          {/* 4 */}
          <li>
                <div className='bg-[#000000] flex justify-center items-center w-[55rem] h-[22rem] gap-10 text-white p-4'>
                    <div className='flex flex-col gap-5 mt-5 px-6'>
                      
                    <h1 className='text-[3rem] font-bold'>Perfume</h1>
                    <p className='text-[1.5rem]'>GUCCI INTENSE OUD EDP.</p>
            
                    <div className='items-center flex gap-3'>
                        <p className='text-[1.5rem] border-b-2'>Shop Now</p>
                        <IoIosArrowForward/>
                    </div>
                    </div>
                    <div className='overflow-hidden'>
                        
                    <img className='mt-5 ' width={"300px"} src={perfumeImg} alt=""/>
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



    {/* 2 */}
    <div className='mt-[6rem] justify-start flex gap-10 items-center mb-[3rem] font-bold mr-[3rem]'>

<div className='flex gap-[3rem]'> 
<div className='flex flex-col gap-y-3'>
<div className='flex gap-x-3 items-center'>
<div className='w-[1.25rem] rounded-lg bg-[#DB4444] h-[2.5rem]'>
</div>
<p className='text-[#DB4444] font-bold'>Today’s</p>
</div>
<h1 className='text-[2rem] font-extrabold'>Flash Sales</h1>
</div>
</div>


<div className='flex gap-x-6'>
  <div>
    <p className='text-[0.7rem]'>Day</p>
    <div className='flex gap-x-4'>
    <h1 className='text-2xl font-bold'>03</h1>
    <div className='text-red-600 text-2xl'>
    :
  </div>
    </div>

  </div>

  <div>
    <p className='text-[0.7rem]'>Hours</p>
    <div className='flex gap-x-4'>
    <h1 className='text-2xl font-bold'>{formatTime(hours)}</h1>
    <div className='text-red-600 text-2xl'>
    :
  </div>
    </div>
  </div>

  <div>
    <p className='text-[0.7rem]'>Minutes</p>
    <div className='flex gap-x-4'>
    <h1 className='text-2xl font-bold'>{formatTime(minutes)}</h1>
    <div className='text-red-600 text-2xl'>
    :
  </div>
    </div>
  </div>

  <div>
    <p className='text-[0.7rem]'>Secounds</p>
    <h1 className='text-2xl font-bold'>{formatTime(seconds)}</h1>
  </div>
</div>
</div>
    <div className='flex flex-col justify-center items-center gap-y-[3.5rem]'>
{/* product */}
    <div className='flex gap-x-6'>
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#DB4444] p-[0.255rem] rounded-md '>-40%</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
            <div className='w-[14rem] h-[13rem] flex justify-center items-center'>

            <img src={Controlar} className='w-[10rem] h-[9rem]' alt=""/>
            </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>HAVIT HV-G92 Gamepad</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$120</p>
          <p className='text-gray-400 overflow-hidden'> <del>$160</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(88)</p>
        </div>
      </div>
      </div>

      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#DB4444] p-[0.255rem] rounded-md '>-35%</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={Keybord} className='w-[11rem] h-[6rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>AK-900 Wired Keyboard</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$960</p>
          <p className='text-gray-400 overflow-hidden'> <del>$1160</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(75)</p>
        </div>
      </div>
      </div>
  
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#DB4444] p-[0.255rem] rounded-md '>-30%</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={Chair} className='w-[6rem] h-[11rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>S-Series Comfort Chair </p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$370</p>
          <p className='text-gray-400 overflow-hidden'> <del>$400</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(99)</p>
        </div>
      </div>
      </div>
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#DB4444] p-[0.255rem] rounded-md '>-30%</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={TV} className='w-[10rem] h-[8rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>IPS LCD Gaming Monitor</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$370</p>
          <p className='text-gray-400 overflow-hidden'> <del>$400</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(99)</p>
        </div>
      </div>
      </div>

    </div>
    <button type="button" className='bg-[#DB4444] w-[15rem] h-[3rem] text-white font-bold rounded-md '>View All Products</button>


    </div>



{/* 3 */}
<div className='mt-[6rem] justify-start flex gap-10 items-center mb-[3rem] font-bold mr-[3rem]'>

<div className='flex gap-[3rem]'> 
<div className='flex flex-col gap-y-3'>
<div className='flex gap-x-3 items-center'>
<div className='w-[1.25rem] rounded-lg bg-[#DB4444] h-[2.5rem]'>
</div>
<p className='text-[#DB4444] font-bold'>Categories</p>
</div>
<h1 className='text-[2rem] font-extrabold'>Browse By Category</h1>
</div>
</div>



</div>

<div className='flex flex-col justify-center items-center gap-y-[3.75rem]'>

<div className='flex gap-x-4'>
<div className='w-[10rem] h-[9rem] flex justify-center items-center flex-col border border-black rounded-md'>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <g clip-path="url(#clip0_898_868)">
    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M25.6667 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_898_868">
      <rect width="56" height="56" fill="white"/>
    </clipPath>
  </defs>
</svg>

<p>Phones</p>
  
</div>
<div className='w-[10rem] h-[9rem] flex justify-center items-center flex-col border border-black rounded-md'>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <g clip-path="url(#clip0_898_613)">
    <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.3333 46.6666H39.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 37.3334V46.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35 37.3334V46.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 32H48" stroke="black" stroke-width="2" stroke-linecap="round"/>
  </g>
  <defs>
    <clipPath id="clip0_898_613">
      <rect width="56" height="56" fill="white"/>
    </clipPath>
  </defs>
</svg>

<p>Computer</p>
  
</div>
<div className='w-[10rem] h-[9rem] flex justify-center items-center flex-col border border-black rounded-md'>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M22 1H8C4.13401 1 1 4.13401 1 8V22C1 25.866 4.13401 29 8 29H22C25.866 29 29 25.866 29 22V8C29 4.13401 25.866 1 22 1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p>SmartWatch</p>
  
</div>
<div className='w-[10rem] h-[9rem] bg-[#DB4444] flex justify-center items-center flex-col border border-black rounded-md'>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <g clip-path="url(#clip0_898_6)">
    <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_898_6">
      <rect width="56" height="56" fill="white"/>
    </clipPath>
  </defs>
</svg>

<p className='text-white'>Camera</p>
  
</div>
<div className='w-[10rem] h-[9rem] flex justify-center items-center flex-col border border-black rounded-md'>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <g clip-path="url(#clip0_898_809)">
    <path d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35 25.6666V25.6908" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42 30.3333V30.3574" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_898_809">
      <rect width="56" height="56" fill="white"/>
    </clipPath>
  </defs>
</svg>

<p>Gaming</p>
  
</div>
<div className='w-[10rem] h-[9rem] flex justify-center items-center flex-col border border-black rounded-md'>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <g clip-path="url(#clip0_898_644)">
    <path d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_898_644">
      <rect width="56" height="56" fill="white"/>
    </clipPath>
  </defs>
</svg>

<p>HeadPhones</p>
  
</div>
  
</div>


</div>

{/* 4 */}
<div className='mt-[6rem] justify-between flex gap-10 items-center mb-[3rem] font-bold mr-[3rem]'>

<div className='flex gap-[3rem]'> 
<div className='flex flex-col gap-y-3'>
<div className='flex gap-x-3 items-center'>
<div className='w-[1.25rem] rounded-lg bg-[#DB4444] h-[2.5rem]'>
</div>
<p className='text-[#DB4444] font-bold'>This Month</p>
</div>
<h1 className='text-[2rem] font-extrabold'>Best Selling Products</h1>
</div>
</div>

<div className='flex justify-end'>
<button type="button" className='bg-[#DB4444] w-[8rem] h-[3rem] text-white font-bold rounded-md '>View All</button>
</div>




</div>

<div className='flex flex-col justify-center items-center gap-y-[3.5rem]'>
{/* product */}
    <div className='flex gap-x-6'>
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
          
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
            <div className='w-[14rem] h-[13rem] flex justify-center items-center'>

            <img src={raincort} className='w-[8rem] h-[9rem]' alt=""/>
            </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>The north coat</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$120</p>
          <p className='text-gray-400 overflow-hidden'> <del>$160</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(88)</p>
        </div>
      </div>
      </div>

      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#DB4444] p-[0.255rem] rounded-md '>-35%</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={beg} className='w-[11rem] h-[8rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>Gucci duffle bag</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$960</p>
          <p className='text-gray-400 overflow-hidden'> <del>$1160</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(75)</p>
        </div>
      </div>
      </div>
  
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#DB4444] p-[0.255rem] rounded-md '>-30%</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={LoudSpeaker} className='w-[11rem] h-[5rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>RGB liquid CPU Cooler </p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$370</p>
          <p className='text-gray-400 overflow-hidden'> <del>$400</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(99)</p>
        </div>
      </div>
      </div>
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#DB4444] p-[0.255rem] rounded-md '>-30%</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={BookTable} className='w-[8rem] h-[11rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>Small BookSelf</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$370</p>
          <p className='text-gray-400 overflow-hidden'> <del>$400</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(99)</p>
        </div>
      </div>
      </div>

    </div>


    </div>

    {/* 5 */}


    <div className='bg-black flex justify-center items-center w-[60rem] h-[29rem] mx-auto mt-[5rem] text-white p-4'>
                    <div className='flex flex-col gap-5 mt-5 px-6'>
                      <h1 className='text-green-400 font-bold'>Categories</h1>
                    <h1 className='text-[2.5rem] font-bold'>Enhance Your Music Experience</h1>
                    <div className='items-center flex gap-3'>
                      <div className='w-[4rem] h-[4rem] rounded-full bg-white text-black flex justify-center items-center flex-col' >
                        <p className='text-[1rem] font-extrabold'>{formatTime(days)}</p>
                        <p className='text-[0.7rem] '>Day</p>
                      </div>
                      <div className='w-[4rem] h-[4rem] rounded-full bg-white text-black flex justify-center items-center flex-col' >
                        <p className='text-[1rem] font-extrabold'>{formatTime(hours)}</p>
                        <p className='text-[0.7rem] '>Hours</p>
                      </div>
                      <div className='w-[4rem] h-[4rem] rounded-full bg-white text-black flex justify-center items-center flex-col' >
                        <p className='text-[1rem] font-extrabold'>{formatTime(minutes)}</p>
                        <p className='text-[0.7rem] '>Minutes</p>
                      </div>
                      <div className='w-[4rem] h-[4rem] rounded-full bg-white text-black flex justify-center items-center flex-col' >
                        <p className='text-[1rem] font-extrabold'>{formatTime(seconds)}</p>
                        <p className='text-[0.7rem] '>Secounds</p>
                      </div>
                    </div>
                    <div className=''>
                        
                    <button className=' w-[8rem] rounded-lg h-[3rem] bg-green-400 ' type="button"> Buy Now!</button>
                    </div>
                    </div>
                    <img className='mt-5' src={JbLBox} alt=""/>
                    
                </div>

     {/* 6 */}

     <div className='mt-[6rem] justify-start flex gap-10 items-center mb-[3rem] font-bold mr-[3rem]'>

<div className='flex gap-[3rem]'> 
<div className='flex flex-col gap-y-3'>
<div className='flex gap-x-3 items-center'>
<div className='w-[1.25rem] rounded-lg bg-[#DB4444] h-[2.5rem]'>
</div>
<p className='text-[#DB4444] font-bold'>Our Products</p>
</div>
<h1 className='text-[2rem] font-extrabold'>Explore Our Products</h1>
</div>
</div>

</div>

<div className='flex flex-col justify-center items-center gap-y-[3.5rem]'>
{/* product */}
    <div className='flex gap-x-6'>
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
          
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
            <div className='w-[14rem] h-[13rem] flex justify-center items-center'>

            <img src={Cesar} className='w-[7rem] h-[11rem]' alt=""/>
            </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>Breed Dry Dog Food</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$120</p>
          <p className='text-gray-400 overflow-hidden'> <del>$160</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(88)</p>
        </div>
      </div>
      </div>

      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
           
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={Camara} className='w-[9rem] h-[11rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>CANON EOS DSLR Camera</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$960</p>
          <p className='text-gray-400 overflow-hidden'> <del>$1160</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(75)</p>
        </div>
      </div>
      </div>
  
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
           
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={Laptop} className='w-[10rem] h-[11rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>ASUS FHD Gaming Laptop </p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$700</p>
          <p className='text-gray-400 overflow-hidden'> <del>$1000</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(99)</p>
        </div>
      </div>
      </div>
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
           
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={loshn} className='w-[10rem] h-[9rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>Curology Product Set </p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$370</p>
          <p className='text-gray-400 overflow-hidden'> <del>$400</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(99)</p>
        </div>
      </div>
      </div>

    </div>
    <div className='flex gap-x-6'>
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#3ff851] p-[0.255rem] rounded-md '>NEW</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
            <div className='w-[14rem] h-[13rem] flex justify-center items-center'>

            <img src={Toycar} className='w-[11rem] h-[8rem]' alt=""/>
            </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>Kids Electric Car</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$960</p>
          <p className='text-gray-400 overflow-hidden'> <del>$1900</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(88)</p>
        </div>
      </div>
      </div>

      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
          
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={boot} className='w-[11rem] h-[10rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>Jr. Zoom Soccer Cleats</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$1160</p>
          <p className='text-gray-400 overflow-hidden'> <del>$2000</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(75)</p>
        </div>
      </div>
      </div>
  
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
            <div className='absolute left-0 top-1'>
            <p className='bg-[#44db44] p-[0.255rem] rounded-md '>NEW</p>
            </div>
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={Remote} className='w-[11rem] h-[9rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>GP11 Shooter USB Gamepad</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$660</p>
          <p className='text-gray-400 overflow-hidden'> <del>$800</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(99)</p>
        </div>
      </div>
      </div>
      <div className='flex flex-col backgraondproduct relative justify-center items-center p-[1rem]'>
         
      
            <div className='flx flex-col absolute right-1 top-1 text-[1.3rem]'>

            <AiOutlineHeart className='bg-white rounded-full mb-5'/>
            <AiOutlineEye className='bg-white rounded-full' />
            </div>
          
        <div className='w-[14rem] h-[13rem] flex justify-center items-center'>
          
            <img src={Jacket} className='w-[11rem] h-[11rem]' alt=""/>
        </div>
      <div className='flex flex-col gap-y-4 font-bold text-[1rem] '>
        <p>Quilted Satin Jacket</p>
        <div className='flex gap-3 items-center'>
          <p className='text-[#DB4444] overflow-hidden'>$666</p>
          <p className='text-gray-400 overflow-hidden'> <del>$890</del> </p>
        </div>
        <div className='flex gap-3 items-center overflow-hidden'>
          <p>⭐⭐⭐⭐⭐</p>
          <p>(99)</p>
        </div>
      </div>
      </div>

    </div>
    <button type="button" className='bg-[#DB4444] w-[15rem] h-[3rem] text-white font-bold rounded-md '>View All Products</button>


    </div>

{/* 7 */}

<div className='mt-[6rem] justify-start flex gap-10 items-center mb-[3rem] font-bold mr-[3rem]'>

<div className='flex gap-[3rem]'> 
<div className='flex flex-col gap-y-3'>
<div className='flex gap-x-3 items-center'>
<div className='w-[1.25rem] rounded-lg bg-[#DB4444] h-[2.5rem]'>
</div>
<p className='text-[#DB4444] font-bold'>Featured</p>
</div>
<h1 className='text-[2rem] font-extrabold'>New Arrival</h1>
</div>
</div>

</div>






    

{/* end */}
<div className='flex justify-center items-center mt-[3rem] gap-[5.5rem]'>

<div className='flex justify-center text-center items-center flex-col gap-y-4 rounded-md  h-[12rem] '>
  <div className=' bg-[#444444]  h-[5rem] w-[5rem] flex justify-center items-center rounded-full '>
    <div className='bg-black h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full'>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<g clip-path="url(#clip0_120_1380)">
<path d="M11.6666 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6666 25C9.8257 25 8.33331 26.4924 8.33331 28.3333C8.33331 30.1743 9.8257 31.6667 11.6666 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10 className='text-2xl font-bold'.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
    <path d="M13.3337 25.0001C13.3337 23.1591 11.8413 21.6667 10.0 className='text-2xl font-bold'003 21.6667C8.15938 21.6667 6.66699 23.1591 6.66699 25.0001V28.3334C6.66699 30.1744 8.15938 31.6667 10.0 className='text-2xl font-bold'003 31.6667C11.8413 31.6667 13.3337 30.1744 13.3337 28.3334V25.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M33.3337 25.0001C33.3337 23.1591 31.8413 21.6667 30.0 className='text-2xl font-bold'003 21.6667C28.1594 21.6667 26.667 23.1591 26.667 25.0001V28.3334C26.667 30.1744 28.1594 31.6667 30.0 className='text-2xl font-bold'003 31.6667C31.8413 31.6667 33.3337 30.1744 33.3337 28.3334V25.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.66699 25.0001V20.0001C6.66699 16.4639 8.07175 13.0725 10.5722 10.572C13.0727 8.07151 16.4641 6.66675 20.0 className='text-2xl font-bold'003 6.66675C23.5365 6.66675 26.9279 8.07151 29.4284 10.572C31.9289 13.0725 33.3337 16.4639 33.3337 20.0001V25.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
  <path d="M8.09943 30.5992L8.0992 30.5991C7.22647 29.9483 6.42586 28.9206 5.84306 27.759C5.26022 26.5973 4.91699 25.3451 4.91699 24.2666V11.8666C4.91699 9.50736 6.67182 6.96177 8.89149 6.13513L8.89245 6.13477L17.2087 3.01826C17.2088 3.01823 17.2089 3.0182 17.2089 3.01817C17.9624 2.73661 18.9619 2.5874 19.9837 2.5874C21.0054 2.5874 22.0049 2.73661 22.7584 3.01817C22.7585 3.0182 22.7585 3.01823 22.7586 3.01826L31.0749 6.13477L31.0758 6.13513C33.2955 6.96177 35.0 className='text-2xl font-bold'503 9.50736 35.0 className='text-2xl font-bold'503 11.8666V24.2499C35.0 className='text-2xl font-bold'503 25.3371 34.7069 26.5892 34.1244 27.7483C33.5419 28.9073 32.7414 29.9313 31.8681 30.5824L31.8679 30.5826L24.7012 35.9326L24.7012 35.9325L24.695 35.9373C23.4123 36.9264 21.7243 37.4332 20.0 className='text-2xl font-bold'003 37.4332C18.2777 37.4332 16.5855 36.927 15.2652 35.9486C15.265 35.9484 15.2649 35.9483 15.2647 35.9482L8.09943 30.5992ZM17.7422 4.43145L17.7415 4.4317L9.42487 7.54837L9.42416 7.54863C8.59658 7.86019 7.85535 8.52248 7.32443 9.29061C6.79333 10.059 6.43366 10.9898 6.43366 11.8832V24.2666C6.43366 25.161 6.74424 26.1892 7.20124 27.101C7.65813 28.0126 8.29361 28.8722 9.00118 29.4005L9.00122 29.4006L16.1676 34.7 className='text-2xl font-bold'503C17.2296 35.5445 18.6286 35.9249 20.0024 35.9249C21.3764 35.9249 22.7786 35.5445 23.8481 34.7516L23.8494 34.7506L31.0161 29.4006L31.017 29.3999C31.7317 28.8638 32.3672 28.005 32.8225 27.0943C33.2779 26.1837 33.5837 25.16 33.5837 24.2666V11.8666C33.5837 10.9804 33.2232 10.0538 32.6929 9.28645C32.1624 8.51889 31.4226 7.85396 30.5979 7.5338L30.598 7.53376L30.5925 7.5317L22.2758 4.41 className='text-2xl font-bold'503L22.2758 4.41495L22.2667 4.41174C21.6286 4.18651 20.8005 4.08314 20.001 4.08532C19.2024 4.0875 18.3755 4.19514 17.7422 4.43145Z" fill="#FAFAFA" stroke="#FAFAFA"/>
  <path d="M17.4135 21.0536L17.7671 21.4071L18.1206 21.0536L24. className='text-2xl font-bold'4039 14.7 className='text-2xl font-bold'703C24.692 14.4822 25.1754 14.4822 25.4635 14.7 className='text-2xl font-bold'703C25.7516 15.0583 25.7516 15.5417 25.4635 15.8298L18.2968 22.9965C18.1455 23.1478 17.9583 23.2167 17.7671 23.2167C17.5758 23.2167 17.3886 23.1478 17.2373 22.9965L14.5539 20.3131C14.2659 20.0251 14.2659 19.5417 14.5539 19.2536C14.842 18.9655 15.3254 18.9655 15.6135 19.2536L17.4135 21.0536Z" fill="#FAFAFA" stroke="#FAFAFA"/>
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


export default HomePage
