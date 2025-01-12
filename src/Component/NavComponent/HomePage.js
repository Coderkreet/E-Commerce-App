import React, { useEffect ,useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {AiFillApple, AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import Glide from "@glidejs/glide"
import iphone14 from '../Image/HeroSectionimg/hero_endframe__cvklg0xk3w6e_large 2 (1).png'
import JbLBox from '../Image/HeroSectionimg/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import womanPic from '../Image/HeroSectionimg/attractive-woman-wearing-hat-posing-black-background 1.png'
import perfumeImg from '../Image/HeroSectionimg/perfumeImg.png'
import Recproduct from '../Recproduct'
import { Link } from 'react-router-dom'






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
  
  <Recproduct startNumber={0} endNumber={4}/>

    </div>

   <Link to={'/products'}> <button type="button" className='bg-[#DB4444] w-[15rem] h-[3rem] text-white font-bold rounded-md '>View All Products</button>
   </Link>

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
<Recproduct startNumber={5} endNumber={12}/>
<Link to={'/products'}> <button type="button" className='bg-[#DB4444] w-[15rem] h-[3rem] text-white font-bold rounded-md '>View All Products</button>
</Link>

    </div>

{/* end */}


    </div>
  )
}


export default HomePage
