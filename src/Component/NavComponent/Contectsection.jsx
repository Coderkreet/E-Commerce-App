import React, { useEffect, useRef, useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import { AiOutlineSend } from 'react-icons/ai'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contectsection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const containerRef = useRef()
  const breadcrumbRef = useRef()
  const leftSectionRef = useRef()
  const formRef = useRef()

  useEffect(() => {
    // Breadcrumb animation
    gsap.fromTo(breadcrumbRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    )

    // Left section animation
    gsap.fromTo(leftSectionRef.current.children,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out",
        delay: 0.3
      }
    )

    // Form animation
    gsap.fromTo(formRef.current,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: "power3.out",
        delay: 0.5
      }
    )

    // Contact cards hover animation
    const cards = document.querySelectorAll('.contact-card')
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Success animation
      gsap.to('.submit-btn', {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })
    }, 2000)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        
        {/* Breadcrumb */}
        <div ref={breadcrumbRef} className='flex items-center gap-3 mb-12 text-sm lg:text-base'>
          <span className='text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Home</span>
          <span className='text-gray-400'>/</span>
          <span className='text-blue-600 font-semibold'>Contact</span>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-start'>
          
          {/* Left Section - Contact Information */}
          <div ref={leftSectionRef} className='space-y-8'>
            
            {/* Header */}
            <div className='text-center lg:text-left mb-12'>
              <h1 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
                Get In <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Touch</span>
              </h1>
              <p className='text-gray-600 text-lg leading-relaxed'>
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Cards */}
            <div className='space-y-6'>
              
              {/* Phone Contact */}
              <div className='contact-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5'></div>
                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg'>
                      <BiSolidPhoneCall className='text-white text-xl'/>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Call Us</h2>
                  </div>
                  <p className='text-gray-600 mb-3'>We are available 24/7, 7 days a week.</p>
                  <div className='space-y-2'>
                    <p className='font-semibold text-gray-800'>Phone: +8801611112222</p>
                    <p className='font-semibold text-gray-800'>Toll Free: 1800-123-4567</p>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className='contact-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5'></div>
                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg'>
                      <GrMail className='text-white text-xl'/>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Email Us</h2>
                  </div>
                  <p className='text-gray-600 mb-3'>Fill out our form and we will contact you within 24 hours.</p>
                  <div className='space-y-2'>
                    <p className='font-semibold text-gray-800'>customer@cartnevula.com</p>
                    <p className='font-semibold text-gray-800'>support@cartnevula.com</p>
                  </div>
                </div>
              </div>

              {/* Address Contact */}
              <div className='contact-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5'></div>
                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg'>
                      <HiOutlineLocationMarker className='text-white text-xl'/>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Visit Us</h2>
                  </div>
                  <p className='text-gray-600 mb-3'>Come and visit our office headquarters.</p>
                  <div className='space-y-2'>
                    <p className='font-semibold text-gray-800'>123 Business Street</p>
                    <p className='font-semibold text-gray-800'>Delhi, India 110001</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className='contact-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5'></div>
                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg'>
                      <HiOutlineClock className='text-white text-xl'/>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Business Hours</h2>
                  </div>
                  <div className='space-y-2'>
                    <p className='font-semibold text-gray-800'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className='font-semibold text-gray-800'>Saturday: 10:00 AM - 4:00 PM</p>
                    <p className='font-semibold text-gray-800'>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>Follow Us</h3>
              <div className='flex gap-4'>
                {[
                  { icon: FaTwitter, color: 'from-blue-400 to-blue-600' },
                  { icon: FaFacebookF, color: 'from-blue-600 to-blue-800' },
                  { icon: FaInstagram, color: 'from-pink-500 to-purple-600' },
                  { icon: FaLinkedinIn, color: 'from-blue-700 to-blue-900' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className='text-white text-lg' />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div ref={formRef} className='bg-white rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50'></div>
            <div className='relative z-10'>
              <div className='text-center mb-8'>
                <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-3'>Send us a Message</h2>
                <p className='text-gray-600'>We'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name, Email, Phone Row */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='relative'>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name *"
                      required
                      className='w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-gray-300'
                    />
                  </div>
                  
                  <div className='relative'>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='Your Email *'
                      required
                      className='w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-gray-300'
                    />
                  </div>
                  
                  <div className='relative'>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder='Your Phone *'
                      required
                      className='w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-gray-300'
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className='relative'>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    placeholder='Your Message *'
                    required
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-gray-300 resize-none'
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className='flex justify-end'>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <AiOutlineSend className='text-lg' />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Contact Info Footer */}
              <div className='mt-8 pt-6 border-t border-gray-200 text-center'>
                <p className='text-gray-600 text-sm'>
                  Or call us directly at <span className='font-semibold text-blue-600'>+8801611112222</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Map or Additional Info */}
        <div className='mt-20'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center'>
            <h3 className='text-2xl lg:text-3xl font-bold mb-4'>Ready to Get Started?</h3>
            <p className='text-lg lg:text-xl mb-6 opacity-90'>
              Join thousands of satisfied customers and experience the difference.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'>
                Get Started Today
              </button>
              <button className='px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contectsection
