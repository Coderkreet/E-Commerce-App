import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineSend, AiOutlineCheck } from 'react-icons/ai'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GooglePlay from "./Image/FooterImg/GooglePlay.png"
import Qrcode from "./Image/FooterImg/Qrcode 1.png"
import appstore from "./Image/FooterImg/download-appstore.png"
import { GrFacebookOption } from 'react-icons/gr'
import { CiTwitter } from 'react-icons/ci'
import { BiLogoInstagram } from 'react-icons/bi'
import { FiLinkedin } from 'react-icons/fi'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const footerRef = useRef()
  const waveRef = useRef()

  useEffect(() => {
    // Wave animation
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        x: -1000,
        duration: 20,
        ease: "none",
        repeat: -1
      })
    }

    // Footer content animation
    const footerContent = footerRef.current?.querySelectorAll('.footer-section')
    if (footerContent) {
      gsap.fromTo(footerContent,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Social icons hover animation
    const socialIcons = document.querySelectorAll('.social-icon')
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, rotation: 360, duration: 0.3, ease: "power2.out" })
      })
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      gsap.to('.subscribe-btn', {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg ref={waveRef} className="absolute bottom-0 w-[200%] h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C150,10 350,110 600,60 C850,10 1050,110 1200,60 L1200,120 L0,120 Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div ref={footerRef} className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 pt-16 pb-8">
        
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay in the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Loop</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get 10% off your first order plus exclusive deals and updates.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="subscribe-btn px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg"
            >
              {isSubscribed ? (
                <>
                  <AiOutlineCheck className="text-lg" />
                  Subscribed!
                </>
              ) : (
                <>
                  <AiOutlineSend className="text-lg" />
                  Subscribe
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="footer-section lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cartnevula
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for premium products and exceptional shopping experience.
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="footer-section space-y-6">
            <h4 className="text-xl font-bold text-white">Support</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                <HiOutlineLocationMarker className="text-xl text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm lg:text-base">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                <HiOutlineMail className="text-xl text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm lg:text-base">cartnevula@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                <HiOutlinePhone className="text-xl text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm lg:text-base">+88015-88888-9999</span>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="footer-section space-y-6">
            <h4 className="text-xl font-bold text-white">Account</h4>
            <div className="space-y-3">
              {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm lg:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <div className="space-y-3">
              {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm lg:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Download App */}
          <div className="footer-section space-y-6">
            <h4 className="text-xl font-bold text-white">Download App</h4>
            <p className="text-gray-400 text-sm lg:text-base">Save $3 with App - New User Only</p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-2 rounded-lg">
                  <img src={Qrcode} alt="QR Code" className="w-16 h-16 object-contain" />
                </div>
                <div className="space-y-2">
                  <img src={GooglePlay} alt="Google Play" className="w-28 hover:scale-105 transition-transform cursor-pointer" />
                  <img src={appstore} alt="App Store" className="w-28 hover:scale-105 transition-transform cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white">Follow Us</h5>
              <div className="flex gap-4">
                {[
                  { Icon: GrFacebookOption, color: 'hover:bg-blue-600', name: 'Facebook' },
                  { Icon: CiTwitter, color: 'hover:bg-blue-400', name: 'Twitter' },
                  { Icon: BiLogoInstagram, color: 'hover:bg-pink-500', name: 'Instagram' },
                  { Icon: FiLinkedin, color: 'hover:bg-blue-700', name: 'LinkedIn' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`social-icon w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white ${social.color} transition-all duration-300 group`}
                    aria-label={social.name}
                  >
                    <social.Icon className="text-lg group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm lg:text-base text-center lg:text-left">
              © {new Date().getFullYear()} Cartnevula. All rights reserved. Made with ❤️ in India
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
    </footer>
  )
}

export default Footer
