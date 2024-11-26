import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Logo from '../Header/Image/Frame 1.png'
// import Link from 'next/link'


export const Footer = () => {
    return (
        <div className='w-[1280px] h-[684px] flex gap-[80px] p-[80px] justify-center bg-[#FFFFFF] sm:w-[428px] sm:h-[1411px] sm:gap-[48px] sm:px-[24px] sm:py-[48px] sm:flex-col sm:items-center'>
            {/* inner section */}
             <div className='w-[1120px] h-[524px] flex flex-col  gap-[80px] items-start sm:w-[380px] sm:h-[1315px] sm:gap-[48px] sm:items-center'>
                {/* first-row */}
            <div className='w-[1120px] h-[82px] justify-between flex sm:w-[380px] sm:h-[261px] sm:flex-col sm:gap-[24px] sm:items-center sm:justify-start'>
                <div className='w-[500px] h-[51px] flex flex-col sm:w-[287px] sm:h-[91px] sm:gap-[16px] sm:items-center'>
                    <h4 className='text-[18px] leading-[27px] font-semibold Roboto text-[#000000] sm:text-center'>Subscribe to our newsletter</h4>
                    <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000] sm:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='w-[400px] h-[82px] flex flex-col gap-[16px] bg-[#FFFFFF] sm:w-[380px] sm:h-[146px] sm:items-center'>
                    <div className='w-[400px] h-[48px] flex gap-[16px] bg-[#FFFFFF] sm:w-[380px] sm:h-[112px] sm:items-start sm:flex-col'>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='w-[265px] h-[48px] p-3 flex gap-[8px] rounded-[5px] border-[#000000] border-[1px] text-[16px] leading-[24px] font-normal Roboto text-[#505050] sm:w-[380px]' />
                        <button className='w-[119px] h-[48px] flex gap-[8px] items-center justify-center rounded-[5px] px-6 py-3 border-[#000000] border-[1px] text-[16px] leading-[24px] font-normal Roboto text-[#000000] sm:w-[380px]'>Subscribe</button>
                    </div>
                    <p className='text-[12px] leading-[18px] font-normal Roboto text-[#000000]'>By subscribing you agree to with our <a href="#" className='underline'> Privacy Policy</a></p>
                </div>
            </div>
            {/* Second-row */}    
            <div className='w-[1120px] h-[225px] justify-start gap-[40px] flex sm:w-[172px] sm:h-[811px] sm:flex-col sm:gap-[32px] sm:items-start'>
                {/* first column */}
                <div className='w-[250px] h-[40px] flex flex-col items-start justify-start sm:w-[172px] sm:h-[40px]'>
                    <div className='w-[130.6px] h-[40px] flex flex-col gap-[10.5px] py-[29px] justify-center'>
                    <div className='w-[130.6px] h-[30.38px] flex gap-[8.02px] items-center justify-center'>
                    <Image 
                    src={Logo}
                    width={32.58}
                    height={30.38}
                    alt='Logo'/>
                    <p className='text-[25.07px] leading-[30.34px] font-bold text-[#000000] Inter'>Ddsgnr</p>
                    </div>
                    </div>
                    </div>
                
    {/* second column */}
    <div className='w-[250px] h-[225px] flex flex-col gap-[16px] items-start justify-center sm:w-[172px] sm:h-[225px] sm:items-center'>
                    <h4 className='text-[16px] leading-[24px] font-semibold Roboto text-[#000000] sm:text-center'>Courses</h4>
                    <div className='w-[250px] h-[185px] flex flex-col items-start sm:w-[172px]'>
                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal sm:text-center'>Business</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal sm:text-center'>Development</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal sm:text-center'>Technology</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal sm:text-center'>Design</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal sm:text-center'>Programming</Link>
                        </div>
                    </div>
                </div>
  {/* third column */}
  <div className='w-[250px] h-[225px] flex flex-col gap-[16px] items-start justify-center sm:w-[172px] sm:h-[225px] sm:items-center'>
                    <h4 className='text-[16px] leading-[24px] font-semibold Roboto text-[#000000]'>Resources</h4>
                    <div className='w-[250px] h-[185px] flex flex-col items-start sm:w-[172px]'>
                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Career</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Resume</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Learning</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Interview Preparation</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Jobs</Link>
                        </div>
                    </div>
                </div>

  {/* fourth column */}
  <div className='w-[250px] h-[225px] flex flex-col gap-[16px] items-start justify-center sm:w-[172px] sm:h-[225px] sm:items-center'>
                    <h4 className='text-[16px] leading-[24px] font-semibold Roboto text-[#000000]'>About Us</h4>
                    <div className='w-[250px] h-[185px] flex flex-col items-start sm:w-[172px]'>
                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Contact</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Help/Support</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>FAQ</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Terms and Conditions</Link>
                        </div>

                        <div className='w-[250px] h-[37px] flex py-2 justify-start sm:w-[172px] sm:justify-center'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal'>Partners</Link>
                        </div>
                    </div>
                </div>
               
            </div>
            {/* Third-row */}    
            <div className='w-[1120px] h-[57px] flex-col items-start gap-[32px] flex sm:w-[380px] sm:h-[147px]'>
                <div className='w-[1120px] h-[1px] bg-[#000000] sm:w-[380px]'></div>
                <div className='w-[1120px] h-[24px] flex justify-between sm:w-[380px] sm:h-[114px] sm:flex-col sm:items-center sm:gap-[24px]'>
                    {/* first-col */}
                    <div className='w-[564px] h-[21px] flex gap-[24px] items-center sm:w-[345px] sm:h-[66px] sm:flex-col sm:justify-center'>
                        <p className='text-[14px] leading-[21px] font-normal Roboto text-[#000000]'>2023 Ddsgnr. All right reserved.</p>
                        <div className='w-[345px] h-[21px] flex gap-[24px] justify-start'>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal underline'>Privacy Policy</Link>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal underline'>Terms of Service</Link>
                        <Link href = "/" className='text-[14px] leading-[21px] text-[#000000] Roboto font-normal underline'>Cookies Settings</Link>
                        </div>
                    </div>

   {/* second-col */}
                    <div className='w-[132px] h-[24px] flex gap-[12px] justify-start'>
                    <FaFacebookF className='w-[24px] h-[24px] text-[#000000]' />
                <FaInstagram className='w-[24px] h-[24px] text-[#000000]'/>
                <FaTwitter className='w-[24px] h-[24px] text-[#000000]'/>
                <IoLogoLinkedin className='w-[24px] h-[24px] text-[#000000]'/>
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
}

export default Footer;