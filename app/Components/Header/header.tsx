"use client";
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Logo from './Image/Frame 1.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
        <div className='w-[1280px] h-[64px] pl-[62px] pr-[64px] bg-[#F7F7F7] flex flex-col justify-center items-start shadow-custom-inset sm:hidden'>
           <div className='w-[1154px] h-[54px] py-3 gap-[32px] flex items-center'>
            <div className='w-[386px] h-[30px] gap-16px] flex items-center'>
                <p className='text-[#000000] text-[14px] leading-[21px] font-normal Roboto'>Phone Number: 956 742 455 678</p>
                <div className='w-[30px] border-[#676767] border-[1px] rotate-90'></div>
                <p className='text-[#000000] text-[14px] leading-[21px] font-normal Roboto'>Email:info@ddsgnr.com</p>
            </div>
            <div className='w-[736px] h-[24px] gap-[16px] flex items-center justify-end'>
                <div className='w-[132px] h-[24px] flex gap-[12px]'>
                <FaFacebookF className='w-[24px] h-[24px] text-[#000000]' />
                <FaInstagram className='w-[24px] h-[24px] text-[#000000]'/>
                <FaTwitter className='w-[24px] h-[24px] text-[#000000]'/>
                <IoLogoLinkedin className='w-[24px] h-[24px] text-[#000000]'/>
                </div>
            </div>
           </div>
           
        </div>
        <div className='w-[1280px] h-[72px] px-[64px] bg-[#F7F7F7] flex flex-col items-center justify-center border-b-[#676767] border-b-[1px] sm:w-[428px] sm:h-[72px] sm:px-6 sm:bg-[#FFFFFF]'>
            <div className='w-[1152px] h-[44px] flex justify-between items-center sm:w-[380px] sm:h-[48px] sm:gap-[32px] sm:items-center sm:justify-center'>
                {/* desktop-col */}
                <div className='w-[130.6px] h-[41px] py-[29px] flex flex-col gap-[10.5px] justify-center sm:hidden'>
                    <div className='w-[130.6px] h-[30.38px] flex gap-[8.02px] items-center sm:h-[41px] sm:gap-[10.5px] sm:py-[29px]'>
                    <Image 
                    src={Logo}
                    width={32.58}
                    height={30.38}
                    alt='Logo'/>
                    <p className='text-[25.07px] leading-[30.34px] font-bold text-[#000000] Inter'>Ddsgnr</p>
                    </div>
                    
                </div>
                 {/* mobile-col */}
                 <div className='hidden sm:w-[300px] sm:h-[41px] sm:flex sm:justify-start sm:items-center'>
                <div className='w-[130.6px] h-[41px] py-[29px] flex flex-col gap-[10.5px] justify-center'>
                    <div className='w-[130.6px] h-[30.38px] flex gap-[8.02px] items-center sm:h-[41px] sm:gap-[10.5px] sm:py-[29px]'>
                    <Image 
                    src={Logo}
                    width={32.58}
                    height={30.38}
                    alt='Logo'/>
                    <p className='text-[25.07px] leading-[30.34px] font-bold text-[#000000] Inter'>Ddsgnr</p>
                    </div>
                    
                </div>
                </div>
                <div className='w-[910px] h-[44px] flex gap-[32px] items-center bg-[#FFFFFF] sm:justify-end'>

                        <div className='w-[687px] h-[44px] flex gap-[32px] sm:hidden'>
                            <div className='w-[64px] h-[44px] p-[10px] flex gap-[10px] border-b-[#000000] border-b-[1px]'>
                                <Link href = "/" className='text-[16px] leading-[24px] text-[#000000] Roboto font-normal'>Home</Link>
                            </div>
                            <div className='w-[79px] h-[44px] p-[10px] flex gap-[10px]'>
                                <Link href = "/" className='text-[16px] leading-[24px] text-[#000000] Roboto font-normal'>Courses</Link>
                            </div>
                            <div className='w-[81px] h-[44px] p-[10px] flex gap-[10px]'>
                                <Link href = "/" className='text-[16px] leading-[24px] text-[#000000] Roboto font-normal'>Services</Link>
                            </div>
                            <div className='w-[113px] h-[44px] p-[10px] flex gap-[10px]'>
                                <Link href = "/" className='text-[16px] leading-[24px] text-[#000000] Roboto font-normal'>Achievement</Link>
                            </div>
                            <div className='w-[86px] h-[44px] p-[10px] flex gap-[10px]'>
                                <Link href = "/" className='text-[16px] leading-[24px] text-[#000000] Roboto font-normal'>About Us</Link>
                            </div>
                            <div className='w-[104px] h-[44px] p-[10px] flex gap-[10px]'>
                                <Link href = "/" className='text-[16px] leading-[24px] text-[#000000] Roboto font-normal'>Testimonial</Link>
                            </div>
                        </div>
                        <div className='w-[191px] h-[40px] flex gap-[16px] items-center sm:hidden'>
                            <button className='w-[80px] h-[40px] py-2 px-5 rounded-[5px] border-[#000000] border-[1px] Roboto font-normal text-[16px] leading-[24px] text-[#000000]'>Login</button>
                            <button className='w-[95px] h-[40px] py-2 px-5 rounded-[5px] bg-[#000000] border-[#000000] border-[1px] Roboto font-normal text-[16px] leading-[24px] text-[#FFFFFF] whitespace-nowrap'>Sign Up</button>
                        </div>
                        {/* Mobile-container */}
                        {/* <div className="hidden sm:flex sm:items-center sm:justify-center sm:w-[48px] sm:h-[48px] sm:cursor-pointer">
                            <div className='sm:w-[48px] sm:h-[48px] sm:flex sm:p-3 sm:justify-end'> 
                        <GiHamburgerMenu className='h-6 w-6 text-black'/>
                            </div>

                    </div> */}

<div className="relative hidden sm:flex sm:items-center sm:justify-center sm:w-[48px] sm:h-[48px] sm:cursor-pointer">
  {/* Hamburger Button */}
  <div
    className="sm:w-[48px] sm:h-[48px] sm:flex sm:p-3 sm:justify-end"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <GiHamburgerMenu className="h-6 w-6 text-black" />
  </div>

  {/* Dropdown Menu */}
  {isMenuOpen && (
    <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-md">
      <ul className="flex flex-col text-black">
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/">Home</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/courses">Courses</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/services">Services</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )}
</div>


            </div>

        </div>
        </div>
        </div>
    );
}

export default Header;

