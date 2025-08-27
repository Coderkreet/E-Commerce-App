import React, { useEffect, useState, useRef } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { AiFillApple, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineMenu, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Glide from "@glidejs/glide"
import iphone14 from '../Image/HeroSectionimg/hero_endframe__cvklg0xk3w6e_large 2 (1).png'
import JbLBox from '../Image/HeroSectionimg/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import womanPic from '../Image/HeroSectionimg/attractive-woman-wearing-hat-posing-black-background 1.png'
import perfumeImg from '../Image/HeroSectionimg/perfumeImg.png'
import Recproduct from '../Recproduct'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  const [countdown, setCountdown] = useState(3 * 24 * 60 * 60 * 1000)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroRef = useRef()
  const categoriesRef = useRef()
  const flashSaleRef = useRef()
  const bestSellingRef = useRef()
  const promoRef = useRef()
  const exploreRef = useRef()

  const categories = [
    "Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle",
    "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
  ]

  const slides = [
    {
      bg: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
      content: (
        <>
          <div className='flex flex-col gap-4 z-10 relative'>
            <div className='flex items-center gap-3 lg:gap-6'>
              <AiFillApple className='text-3xl lg:text-6xl text-white'/>
              <p className='text-sm lg:text-xl text-gray-300'>iPhone 14 Series</p>
            </div>
            <h1 className='text-2xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight'>
              Up to 10%<br/>
              <span className='text-blue-400'>off Voucher</span>
            </h1>
            <button className='group flex items-center gap-2 text-white hover:text-blue-400 transition-all duration-300 w-fit'>
              <span className='text-lg lg:text-xl border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300'>Shop Now</span>
              <IoIosArrowForward className='transform group-hover:translate-x-1 transition-transform duration-300'/>
            </button>
          </div>
          <div className='relative z-10'>
            <img className='w-48 lg:w-80 xl:w-96 object-contain drop-shadow-2xl' src={iphone14} alt="iPhone 14"/>
            <div className='absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl -z-10'></div>
          </div>
        </>
      )
    },
    {
      bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
      content: (
        <>
          <div className='flex flex-col gap-4 z-10 relative'>
            <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight'>
              Enhance Your<br/>
              <span className='text-emerald-400'>Music Experience</span>
            </h1>
            <div className='flex gap-2 lg:gap-4'>
              {[
                { value: "23", label: "Hours" },
                { value: "07", label: "Days" },
                { value: "59", label: "Min" },
                { value: "35", label: "Sec" }
              ].map((time, idx) => (
                <div key={idx} className='w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/90 backdrop-blur-sm text-black flex flex-col justify-center items-center shadow-lg'>
                  <p className='text-sm lg:text-lg font-bold'>{time.value}</p>
                  <p className='text-xs text-gray-600'>{time.label}</p>
                </div>
              ))}
            </div>
            <button className='bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-fit'>
              Buy Now!
            </button>
          </div>
          <div className='relative z-10'>
            <img className='w-48 lg:w-80 xl:w-96 object-contain drop-shadow-2xl' src={JbLBox} alt="JBL Speaker"/>
            <div className='absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-3xl -z-10'></div>
          </div>
        </>
      )
    },
    {
      bg: "bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900",
      content: (
        <>
          <div className='flex flex-col gap-4 z-10 relative'>
            <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight'>
              Women's<br/>
              <span className='text-pink-400'>Collections</span>
            </h1>
            <p className='text-base lg:text-xl text-gray-300 max-w-md'>
              Featured collections that give you another vibe.
            </p>
            <button className='group flex items-center gap-2 text-white hover:text-pink-400 transition-all duration-300 w-fit'>
              <span className='text-lg border-b-2 border-transparent group-hover:border-pink-400 transition-all duration-300'>Shop Now</span>
              <IoIosArrowForward className='transform group-hover:translate-x-1 transition-transform duration-300'/>
            </button>
          </div>
          <div className='relative z-10'>
            <img className='w-48 lg:w-80 xl:w-96 object-contain drop-shadow-2xl' src={womanPic} alt="Women Collection"/>
            <div className='absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 blur-3xl -z-10'></div>
          </div>
        </>
      )
    },
    {
      bg: "bg-gradient-to-br from-amber-900 via-orange-800 to-red-900",
      content: (
        <>
          <div className='flex flex-col gap-4 z-10 relative'>
            <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight'>
              Luxury<br/>
              <span className='text-amber-400'>Perfume</span>
            </h1>
            <p className='text-base lg:text-xl text-gray-300'>
              GUCCI INTENSE OUD EDP
            </p>
            <button className='group flex items-center gap-2 text-white hover:text-amber-400 transition-all duration-300 w-fit'>
              <span className='text-lg border-b-2 border-transparent group-hover:border-amber-400 transition-all duration-300'>Shop Now</span>
              <IoIosArrowForward className='transform group-hover:translate-x-1 transition-transform duration-300'/>
            </button>
          </div>
          <div className='relative z-10'>
            <img className='w-48 lg:w-80 xl:w-96 object-contain drop-shadow-2xl' src={perfumeImg} alt="Perfume"/>
            <div className='absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 blur-3xl -z-10'></div>
          </div>
        </>
      )
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1000)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Hero animations
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    // Categories animation
    gsap.fromTo(categoriesRef.current?.children, 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    )

    // Scroll triggered animations
    const sections = [flashSaleRef, bestSellingRef, promoRef, exploreRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(ref.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 4000,
      animationDuration: 800,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-white",
        },
      },
    })

    slider.on('run', () => {
      setCurrentSlide(slider.index)
    })

    slider.mount()
    return () => slider.destroy()
  }, [])

  const formatTime = time => time < 10 ? `0${time}` : time
  const days = Math.floor(countdown / (24 * 60 * 60 * 1000))
  const hours = Math.floor((countdown % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  const minutes = Math.floor((countdown % (60 * 60 * 1000)) / (60 * 1000))
  const seconds = Math.floor((countdown % (60 * 1000)) / 1000)

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Mobile Navigation Header */}
      <div className='lg:hidden sticky top-0 z-50 bg-white shadow-sm px-4 py-3 flex items-center justify-between'>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
        >
          <HiOutlineMenu className='text-xl'/>
        </button>
        <h1 className='font-bold text-xl'>ShopLux</h1>
        <div className='flex gap-2'>
          <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
            <HiOutlineSearch className='text-xl'/>
          </button>
          <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors relative'>
            <AiOutlineShoppingCart className='text-xl'/>
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>3</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50' onClick={() => setIsMobileMenuOpen(false)}>
          <div className='w-80 h-full bg-white shadow-xl transform transition-transform'>
            <div className='p-4 border-b'>
              <h2 className='text-xl font-bold'>Categories</h2>
            </div>
            <div ref={categoriesRef} className='p-4 space-y-4'>
              {categories.map((category, index) => (
                <div key={index} className='flex items-center justify-between cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors group'>
                  <span className='group-hover:text-blue-600 transition-colors'>{category}</span>
                  <IoIosArrowForward className='text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all'/>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className='max-w-7xl mx-auto px-4 lg:px-6'>
        {/* Desktop Layout */}
        <div ref={heroRef} className='flex flex-col lg:flex-row justify-center items-start lg:items-center mt-6 lg:mt-10 gap-6 lg:gap-10'>
          
          {/* Desktop Categories Sidebar */}
          <div className='hidden lg:block w-64 xl:w-80'>
            <div ref={categoriesRef} className='bg-white rounded-2xl shadow-lg p-6 space-y-4'>
              <h3 className='font-bold text-lg text-gray-800 mb-6'>Categories</h3>
              {categories.map((category, index) => (
                <div key={index} className='flex items-center justify-between cursor-pointer hover:bg-blue-50 p-3 rounded-xl transition-all duration-300 group'>
                  <span className='text-gray-700 group-hover:text-blue-600 transition-colors font-medium'>{category}</span>
                  <IoIosArrowForward className='text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300'/>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Slider */}
          <div className="relative w-full lg:flex-1 max-w-4xl rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl glide-02">
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="flex">
                {slides.map((slide, index) => (
                  <li key={index}>
                    <div className={`${slide.bg} flex flex-col lg:flex-row justify-between items-center w-full h-64 sm:h-80 lg:h-96 text-white p-6 lg:p-8 relative overflow-hidden`}>
                      <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent'></div>
                      {slide.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Custom Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2" data-glide-el="controls[nav]">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  data-glide-dir={`=${index}`}
                  aria-label={`goto slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Flash Sales Section */}
        <section ref={flashSaleRef} className='mt-16 lg:mt-24'>
          <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10 mb-8'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-4 h-8 lg:w-5 lg:h-10 rounded-lg bg-gradient-to-b from-red-500 to-red-600'></div>
                <p className='text-red-500 font-bold text-sm lg:text-base'>Today's</p>
              </div>
              <h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-800'>Flash Sales</h2>
            </div>

            {/* Countdown Timer */}
            <div className='flex gap-3 lg:gap-6'>
              {[
                { value: formatTime(days), label: "Days" },
                { value: formatTime(hours), label: "Hours" },
                { value: formatTime(minutes), label: "Minutes" },
                { value: formatTime(seconds), label: "Seconds" }
              ].map((time, index) => (
                <div key={index} className='text-center'>
                  <p className='text-xs lg:text-sm text-gray-500 mb-1'>{time.label}</p>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white rounded-xl shadow-lg px-3 py-2 lg:px-4 lg:py-3'>
                      <span className='text-xl lg:text-3xl font-bold text-gray-800'>{time.value}</span>
                    </div>
                    {index < 3 && <span className='text-red-500 text-xl lg:text-2xl font-bold'>:</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white rounded-2xl lg:rounded-3xl shadow-lg p-6 lg:p-8 mb-8'>
            <Recproduct startNumber={0} endNumber={4}/>
          </div>
          
          <div className='text-center'>
            <Link to={'/products'}>
              <button className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full font-bold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                View All Products
              </button>
            </Link>
          </div>
        </section>

        {/* Best Selling Section */}
        <section ref={bestSellingRef} className='mt-16 lg:mt-24'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-4 h-8 lg:w-5 lg:h-10 rounded-lg bg-gradient-to-b from-red-500 to-red-600'></div>
                <p className='text-red-500 font-bold text-sm lg:text-base'>This Month</p>
              </div>
              <h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-800'>Best Selling Products</h2>
            </div>
            <button className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 lg:px-8 py-3 rounded-full font-bold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg'>
              View All
            </button>
          </div>
          <div className='bg-white rounded-2xl lg:rounded-3xl shadow-lg p-6 lg:p-8'>
            {/* Best selling products will go here */}
          </div>
        </section>

        {/* Promotional Banner */}
        <section ref={promoRef} className='mt-16 lg:mt-24'>
          <div className='bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl lg:rounded-3xl p-6 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 text-white relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10'></div>
            <div className='flex flex-col gap-6 z-10 flex-1'>
              <span className='text-emerald-400 font-bold text-sm lg:text-base'>Categories</span>
              <h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight'>
                Enhance Your Music Experience
              </h2>
              <div className='flex gap-3 lg:gap-4'>
                {[
                  { value: formatTime(days), label: "Days" },
                  { value: formatTime(hours), label: "Hours" },
                  { value: formatTime(minutes), label: "Minutes" },
                  { value: formatTime(seconds), label: "Seconds" }
                ].map((time, index) => (
                  <div key={index} className='w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white/90 backdrop-blur-sm text-black flex flex-col justify-center items-center shadow-lg'>
                    <p className='text-sm lg:text-lg font-bold'>{time.value}</p>
                    <p className='text-xs text-gray-600'>{time.label}</p>
                  </div>
                ))}
              </div>
              <button className='bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 lg:py-4 rounded-full font-bold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg w-fit'>
                Buy Now!
              </button>
            </div>
            <div className='relative z-10 flex-shrink-0'>
              <img className='w-48 lg:w-80 xl:w-96 object-contain drop-shadow-2xl' src={JbLBox} alt="JBL Speaker"/>
              <div className='absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-3xl -z-10'></div>
            </div>
          </div>
        </section>

        {/* Explore Products Section */}
        <section ref={exploreRef} className='mt-16 lg:mt-24 pb-16 lg:pb-24'>
          <div className='space-y-4 mb-8'>
            <div className='flex items-center gap-3'>
              <div className='w-4 h-8 lg:w-5 lg:h-10 rounded-lg bg-gradient-to-b from-red-500 to-red-600'></div>
              <p className='text-red-500 font-bold text-sm lg:text-base'>Our Products</p>
            </div>
            <h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-800'>Explore Our Products</h2>
          </div>

          <div className='bg-white rounded-2xl lg:rounded-3xl shadow-lg p-6 lg:p-8 mb-8'>
            <Recproduct startNumber={5} endNumber={12}/>
          </div>
          
          <div className='text-center'>
            <Link to={'/products'}>
              <button className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full font-bold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                View All Products
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
