import React, { useEffect, useRef } from 'react'
import { TbShoppingBag, TbMoneybag } from 'react-icons/tb'
import { CiTwitter } from 'react-icons/ci'
import { BiLogoInstagram } from 'react-icons/bi'
import { FiLinkedin } from 'react-icons/fi'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Glide from '@glidejs/glide'
import portrait from "./Image/Signup/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
import men1 from './Image/Aboutimg/men1.png'
import Men2 from './Image/Aboutimg/Men2.png'
import women3 from './Image/Aboutimg/women3.png'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const heroRef = useRef()
  const statsRef = useRef()
  const teamRef = useRef()
  const featuresRef = useRef()
  const breadcrumbRef = useRef()

  useEffect(() => {
    // Initialize Glide slider
    const slider = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 800,
      gap: 30,
      breakpoints: {
        1024: { perView: 2 },
        768: { perView: 1 }
      },
      classes: {
        nav: {
          active: "[&>*]:bg-blue-600",
        },
      },
    }).mount()

    // GSAP Animations
    const tl = gsap.timeline()

    // Breadcrumb animation
    gsap.fromTo(breadcrumbRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    )

    // Hero section animation
    gsap.fromTo(heroRef.current.children,
      { opacity: 0, y: 60 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out",
        delay: 0.3
      }
    )

    // Stats section scroll animation
    gsap.fromTo(statsRef.current.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Team section animation
    gsap.fromTo(teamRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Features section animation
    gsap.fromTo(featuresRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      slider.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const statsData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <g clipPath="url(#clip0_120_1380)">
            <path d="M11.6666 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6666 25C9.8257 25 8.33331 26.4924 8.33331 28.3333C8.33331 30.1743 9.8257 31.6667 11.6666 31.6667Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 11.8182H11.6667" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.81818 15.4545H8.48484" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 19.0909H11.6667" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      ),
      number: "10.5K",
      description: "Sellers active on our site",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.6 16.0017C27.2377 15.3734 26.7113 14.8554 26.0772 14.5032C25.443 14.151 24.725 13.9779 24 14.0023H20C18.9391 14.0023 17.9217 14.4236 17.1716 15.1735C16.4214 15.9234 16 16.9406 16 18.0011C16 19.0617 16.4214 20.0788 17.1716 20.8288C17.9217 21.5787 18.9391 22 20 22H24C25.0609 22 26.0783 22.4213 26.8284 23.1712C27.5786 23.9212 28 24.9383 28 25.9989C28 27.0594 27.5786 28.0766 26.8284 28.8265C26.0783 29.5764 25.0609 29.9977 24 29.9977H20C19.275 30.0221 18.557 29.849 17.9228 29.4968C17.2887 29.1446 16.7623 28.6266 16.4 27.9983" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 9V13.3333M22 30.6667V35" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      number: "33K",
      description: "Monthly Product Sales",
      gradient: "from-emerald-500 to-teal-500",
      highlight: true
    },
    {
      icon: <TbShoppingBag className='w-10 h-10 text-white' />,
      number: "45.5K",
      description: "Customers active on our site",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <TbMoneybag className='w-10 h-10 text-white'/>,
      number: "25K",
      description: "Annual gross sales on our site",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const teamMembers = [
    { image: women3, name: "Emma Watson", role: "Founder & Chairman" },
    { image: men1, name: "Tom Cruise", role: "Managing Director" },
    { image: Men2, name: "Will Smith", role: "Product Designer" }
  ]

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <g clipPath="url(#clip0_120_1380)">
            <path d="M11.6666 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6666 25C9.8257 25 8.33331 26.4924 8.33331 28.3333C8.33331 30.1743 9.8257 31.6667 11.6666 31.6667Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 11.8182H11.6667" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      ),
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <g clipPath="url(#clip0_888_3534)">
            <path d="M13.3337 25.0001C13.3337 23.1591 11.8413 21.6667 10.0003 21.6667C8.15938 21.6667 6.66699 23.1591 6.66699 25.0001V28.3334C6.66699 30.1744 8.15938 31.6667 10.0003 31.6667C11.8413 31.6667 13.3337 30.1744 13.3337 28.3334V25.0001Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66699 25.0001V20.0001C6.66699 16.4639 8.07175 13.0725 10.5722 10.572C13.0727 8.07151 16.4641 6.66675 20.0003 6.66675C23.5365 6.66675 26.9279 8.07151 29.4284 10.572C31.9289 13.0725 33.3337 16.4639 33.3337 20.0001V25.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      ),
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M17.4135 21.0536L17.7671 21.4071L18.1206 21.0536L24.4039 14.7703C24.692 14.4822 25.1754 14.4822 25.4635 14.7703C25.7516 15.0583 25.7516 15.5417 25.4635 15.8298L18.2968 22.9965C18.1455 23.1478 17.9583 23.2167 17.7671 23.2167C17.5758 23.2167 17.3886 23.1478 17.2373 22.9965L14.5539 20.3131C14.2659 20.0251 14.2659 19.5417 14.5539 19.2536C14.842 18.9655 15.3254 18.9655 15.6135 19.2536L17.4135 21.0536Z" fill="#FAFAFA" stroke="#FAFAFA"/>
        </svg>
      ),
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100'>
      <div className='max-w-7xl mx-auto px-4 lg:px-6 py-8'>
        
        {/* Breadcrumb */}
        <div ref={breadcrumbRef} className='flex items-center gap-3 mb-12 text-sm lg:text-base'>
          <span className='text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Home</span>
          <span className='text-gray-400'>/</span>
          <span className='text-blue-600 font-semibold'>About</span>
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32'>
          <div className='space-y-6 lg:space-y-8'>
            <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight'>
              Our <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>Story</span>
            </h1>
            <div className='space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed'>
              <p className='opacity-90'>
                Launched in 2015, <span className='font-semibold text-gray-800'>Cartnevula</span> is South Bharat's premier online shopping marketplace with an active presence in India. Supported by a wide range of tailored marketing, data and service solutions, Cartnevula has <span className='font-semibold text-blue-600'>10,500 sellers and 300 brands</span> and serves 3 million customers across the region.
              </p>
              <p className='opacity-90'>
                Cartnevula has more than <span className='font-semibold text-purple-600'>1 Million products</span> to offer, growing at a very fast pace. Cartnevula offers a diverse assortment in categories ranging from consumer electronics to fashion.
              </p>
            </div>
          </div>
          
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500'></div>
            <img 
              className='relative w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl border border-white/20 group-hover:scale-105 transition-transform duration-500' 
              src={portrait} 
              alt="Our Story"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-32'>
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={`relative group cursor-pointer ${stat.highlight ? 'lg:scale-110 z-10' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 opacity-20 group-hover:opacity-30`}></div>
              <div className={`relative p-8 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 ${stat.highlight ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white border-red-300' : ''}`}>
                <div className='flex flex-col items-center text-center space-y-4'>
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center ${stat.highlight ? 'bg-white/20 backdrop-blur-sm' : 'bg-black'}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className={`text-3xl lg:text-4xl font-bold ${stat.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {stat.number}
                  </h3>
                  <p className={`text-sm lg:text-base font-medium ${stat.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Team Section */}
        <section ref={teamRef} className='mb-20 lg:mb-32'>
          <div className='text-center mb-12 lg:mb-16'>
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Meet Our <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Team</span>
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              The passionate individuals behind Cartnevula's success
            </p>
          </div>

          <div className="relative glide-02">
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="flex">
                {[...Array(5)].map((_, slideIndex) => (
                  <li key={slideIndex}>
                    <div className='flex justify-center items-center gap-8 px-4'>
                      {teamMembers.map((member, memberIndex) => (
                        <div key={memberIndex} className='group text-center'>
                          <div className='relative mb-6'>
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                            <img 
                              src={member.image} 
                              className='relative w-48 lg:w-56 h-64 lg:h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500' 
                              alt={member.name}
                            />
                          </div>
                          <h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-2'>{member.name}</h3>
                          <p className='text-gray-600 font-medium mb-4'>{member.role}</p>
                          <div className='flex justify-center gap-4'>
                            {[CiTwitter, BiLogoInstagram, FiLinkedin].map((Icon, iconIndex) => (
                              <button 
                                key={iconIndex}
                                className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white group'
                              >
                                <Icon className='text-lg' />
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-12 gap-3" data-glide-el="controls[nav]">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-500 transition-all duration-300"
                  data-glide-dir={`=${index}`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
          {features.map((feature, index) => (
            <div key={index} className='group text-center'>
              <div className='relative inline-block mb-6'>
                <div className='absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-sm group-hover:blur-md transition-all duration-300'></div>
                <div className='relative w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <div className='w-14 h-14 bg-black rounded-full flex items-center justify-center'>
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className='text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                {feature.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default About
