import React, { useEffect ,useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {AiFillApple, AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import Glide from "@glidejs/glide"
import iphone14 from '../Image/HeroSectionimg/hero_endframe__cvklg0xk3w6e_large 2 (1).png'
import JbLBox from '../Image/HeroSectionimg/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import womanPic from '../Image/HeroSectionimg/attractive-woman-wearing-hat-posing-black-background 1.png'
import perfumeImg from '../Image/HeroSectionimg/perfumeImg.png'







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
  
    {/*  Here add only reflect 5 card  */}

    </div>

    <button type="button" className='bg-[#DB4444] w-[15rem] h-[3rem] text-white font-bold rounded-md '>View All Products</button>


    </div>



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
     {/* 5 card component reflect */}

    </div>


    </div>

  


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
{/* 10 roduct card reflected */}
    <button type="button" className='bg-[#DB4444] w-[15rem] h-[3rem] text-white font-bold rounded-md '>View All Products</button>


    </div>



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


    </div>
  )
}


export default HomePage
