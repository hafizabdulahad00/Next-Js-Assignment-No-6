import React from 'react'
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import HeroImage from './Components/Header/Image/HeroImage.jpeg'
import logo1 from './Components/Header/Image/logo1.png'
import logo2 from './Components/Header/Image/logo2.png'
import logo3 from './Components/Header/Image/logo3.png'
import logo4 from './Components/Header/Image/logo4.png'
import logo5 from './Components/Header/Image/logo5.png'
import logo6 from './Components/Header/Image/logo6.png'
import vector1 from './Components/Header/Image/pen-tool-2.png'
import vector2 from './Components/Header/Image/Vector2.png'
import vector3 from './Components/Header/Image/vector3.png'
import vector4 from './Components/Header/Image/vector4.png'
import vector5 from './Components/Header/Image/vector5.png'
import vector6 from './Components/Header/Image/vector6.png'
import vector7 from './Components/Header/Image/vector7.png'
import vector8 from './Components/Header/Image/vector8.png'
import vector9 from './Components/Header/Image/vector9.png'
import Course1 from './Components/Header/Image/Course1.jpeg'
import Course2 from './Components/Header/Image/Course2.jpeg'
import Course3 from './Components/Header/Image/Course3.jpeg'
import Course4 from './Components/Header/Image/Course4.jpeg'
import Course5 from './Components/Header/Image/Course5.jpeg'
import Course6 from './Components/Header/Image/Course6.jpeg'
import Star from './Components/Header/Image/star.png'
import Team1 from './Components/Header/Image/Team1.png'
import Team2 from './Components/Header/Image/Team2.png'
import Team3 from './Components/Header/Image/Team3.png'
import Team4 from './Components/Header/Image/Team4.png'
import Team5 from './Components/Header/Image/Team5.png'
import Team6 from './Components/Header/Image/Team6.png'


export default function Home() {
  return (
    <div className='w-[1280px] h-full bg-[#ffffff]'>
    <Header />
    {/* // First box */}
    <div className='w-[1280px] h-[800px] flex items-center overflow-hidden sm:w-[428px] sm:h-[780px] sm:flex-col sm:justify-center lg-custom:w-[768px] lg-custom:h-[700px]'>
      <div className='w-[640px] h-[300px] flex flex-col gap-[24px] justify-start items-start pl-[80px] pr-[60px] sm:w-[428px] sm:h-[390px] sm:px-[24px] sm:py-[64px] lg-custom:w-[600px] lg-custom:h-[380px] lg-custom:px-[32px] lg-custom:py-[50px]'>

        <div className='w-[500px] h-[212px] flex flex-col gap-[24px] sm:w-[380px] sm:h-[174px] sm:items-start lg-custom:w-[480px] lg-custom:h-[180px] lg-custom:items-start'>
          <h1 className='text-[56px] leading-[67.2px] font-bold Roboto text-[#000000] sm:text-[40px] sm:leading-[48px] lg-custom:text-[48px] lg-custom:leading-[56px]'>Learn new skills online with ease</h1>
          <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]  lg-custom:text-[16px] lg-custom:leading-[24px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className='w-[358px] h-[64px] flex gap-[16px] pt-[16px] lg-custom:w-[320px] lg-custom:h-[60px] lg-custom:gap-[12px]'>
          <button className='w-[178px] h-[48px] rounded-[5px] border-[#000000] border-[1px] py-[12px] px-[24px] gap-[8px] bg-[#000000] text-[16px] leading-[24px] font-normal Roboto text-[#FFFFFF] whitespace-nowrap lg-custom:w-[160px] lg-custom:h-[45px] lg-custom:text-[14px]">
        Start learning now'>Start learning now</button>
          <button className='w-[164px] h-[48px] rounded-[5px] border-[#000000] border-[1px] py-[12px] px-[24px] gap-[8px] bg-[#FFFFFF] text-[16px] leading-[24px] font-normal Roboto text-[#000000] whitespace-nowrap lg-custom:w-[150px] lg-custom:h-[45px] lg-custom:text-[14px]'>Explore Courses</button>
        </div>
  
    </div>
    <Image className='overflow-hidden'
        src={HeroImage}
        width={640}
        height={900}
        alt='Hero Image'/>
    </div>
    {/* second box */}
    <div className='w-[1280px] h-[228px] flex items-center gap-[64px] px-[10px] py-[80px] bg-[#F7F7F7] justify-center sm:w-[428px] sm:h-[239.34px] sm:flex-col sm:gap-[24px] sm:px-[24px] sm:py-[48px] sm:items-start sm:overflow-hidden'>
      <h5 className='text-[24px] leading-[33.6px] font-bold Roboto text-[#000000]  sm:text-[18px] sm:leading-[27px]'>Trusted by 2000+ companies worldwide. <span className='hidden sm:block sm:text-[18px] sm:leading-[27px] sm:font-bold sm:Roboto sm:text-[#000000]'>[social proof to build credibility]</span></h5>

      <div className='w-[880px] h-[56px] flex gap-[19.12px] py-[8.74px] items-center justify-center sm:w-[1346px] sm:h-[65.34px] sm:gap-[16px] sm:py-[16px] sm:justify-start lg-custom:w-[1346px] lg-custom:h-[65.34px] lg-custom:gap-[16px] lg-custom:py-[16px] lg-custom:justify-start  '>
        <div className='w-[123.8px] h-[38.52px] sm:w-[107.15px] sm:h-[33.34px] lg-custom:w-[107.15px] lg-custom:h-[33.34px]'>
      <Image
        src={logo1}
        width={123.8}
        height={38.52}
        alt='Hero Image'/>
        </div>
        <div className='w-[123.8px] h-[38.52px]  sm:w-[107.15px] sm:h-[33.34px] lg-custom:w-[107.15px] lg-custom:h-[33.34px]'>
        <Image 
        src={logo2}
        width={123.8}
        height={38.52}
        alt='Hero Image'/>
        </div>
        <div className='w-[123.8px] h-[38.52px]  sm:w-[107.15px] sm:h-[33.34px] lg-custom:w-[107.15px] lg-custom:h-[33.34px]'>
        <Image 
        src={logo3}
        width={123.8}
        height={38.52}
        alt='Hero Image'/>
        </div>
        <div className='w-[123.8px] h-[38.52px]  sm:w-[107.15px] sm:h-[33.34px] lg-custom:w-[107.15px] lg-custom:h-[33.34px]'>
        <Image 
        src={logo4}
        width={123.8}
        height={38.52}
        alt='Hero Image'/>
        </div>
        <div className='w-[123.8px] h-[38.52px]  sm:w-[107.15px] sm:h-[33.34px] lg-custom:w-[107.15px] lg-custom:h-[33.34px]'>
        <Image 
        src={logo5}
        width={123.8}
        height={38.52}
        alt='Hero Image'/>
        </div>
        <div className='w-[123.8px] h-[38.52px]  sm:w-[107.15px] sm:h-[33.34px] lg-custom:w-[107.15px] lg-custom:h-[33.34px]'>
        <Image 
        src={logo6}
        width={123.8}
        height={38.52}
        alt='Hero Image'/>
        </div>
      </div>
    </div>
    {/* third-box */}
    <div className='w-[1280px] h-[1049px] flex flex-col py-[112px] px-[64px] gap-[80px] bg-[#FFFFFF] items-center sm:w-[428px] sm:h-[862px] sm:gap-[48px] sm:px-[24px] sm:py-[48px] sm:items-start sm:justify-center lg-custom:w-[768px] lg-custom:h-[900px] lg-custom:gap-[60px] lg-custom:px-[30px] lg-custom:py-[60px] lg-custom:items-start lg-custom:justify-center'>
      <div className='w-[768px] h-[109px] gap-[357px] flex sm:w-[385px] sm:h-[162px] lg-custom:w-[600px] lg-custom:h-[180px]'>
      <div className='w-[768px] h-[109px] gap-[24px] flex flex-col sm:w-[385px] sm:h-[162px] lg-custom:w-[600px] lg-custom:h-[180px]'>
        <h2 className='text-[48px] leading-[57.6px] font-bold Roboto text-[#000000] sm:text-[32px] sm:leading-[41.6px] sm:text-center lg-custom:leading-[48px] lg-custom:text-center'>Explore Courses By Category</h2>
        <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000] sm:text-center lg-custom:text-[16px] lg-custom:text-center'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

      </div>
      </div>
      <div className='w-[1280px] h-[636px] flex flex-col gap-[96px] items-start sm:w-[380px] sm:h-[556px] sm:items-center lg-custom:w-[668px] lg-custom:h-[844px]'>
        <div className='w-[1280px] h-[636px] flex flex-col gap-[64px] items-start sm:w-[380px] sm:h-[556px] sm:items-center lg-custom:w-[668px] lg-custom:h-[844px]'>
          <div className='w-[1280px] h-[132px] flex gap-[24px] justify-start sm:w-[380px] sm:h-[444px] sm:flex-col sm:items-start lg-custom:flex-col lg-custom:items-start'>

            <div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7] sm:w-[380px] sm:h-[132px]  lg-custom:w-[300px] lg-custom:h-[140px]'>
              <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
                <div className='w-[32px] h-[32px] flex gap-[10px]'>
                <Image 
                    src={vector1}
                    width={32}
                    height={32}
                    alt='Vector1'/>
                </div>
              </div>
              <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px] sm:w-[216px]'>
              <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px] sm:w-[216px]'>
              <div className='w-[246.67px] h-[57px] flex flex-col sm:w-[216px]'>
                <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Design & Development</h4>
                <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
                </div>
                </div>
              </div>
            </div>

            <div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7] sm:w-[380px] sm:h-[132px]'>
              <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
                <div className='w-[32px] h-[32px] flex gap-[10px]'>
                <Image 
                    src={vector2}
                    width={32}
                    height={32}
                    alt='Vector2'/>
                </div>
              </div>
              <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px] sm:w-[216px]'>
              <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px] sm:w-[216px]'>
              <div className='w-[246.67px] h-[57px] flex flex-col sm:w-[216px]'>
                <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Marketing</h4>
                <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
                </div>
                </div>
              </div>
            </div>

            <div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7] sm:w-[380px] sm:h-[132px]'>
              <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
                <div className='w-[32px] h-[32px] flex gap-[10px]'>
                <Image 
                    src={vector3}
                    width={32}
                    height={32}
                    alt='Vector1'/>
                </div>
              </div>
              <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px] sm:w-[216px]'>
              <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px] sm:w-[216px]'>
              <div className='w-[246.67px] h-[57px] flex flex-col sm:w-[216px]'>
                <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Development</h4>
                <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
                </div>
                </div>
              </div>
            </div>

          </div>

          <div className='w-[1280px] h-[132px] flex gap-[24px] justify-start sm:hidden lg-custom:hidden'>

<div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7]'>
  <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
    <div className='w-[32px] h-[32px] flex gap-[10px]'>
    <Image 
        src={vector4}
        width={32}
        height={32}
        alt='Vector4'/>
    </div>
  </div>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col'>
    <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Communication</h4>
    <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
    </div>
    </div>
  </div>
</div>

<div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7]'>
  <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
    <div className='w-[32px] h-[32px] flex gap-[10px]'>
    <Image 
        src={vector5}
        width={32}
        height={32}
        alt='Vector5'/>
    </div>
  </div>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col'>
    <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Digital Marketing</h4>
    <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
    </div>
    </div>
  </div>
</div>

<div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7]'>
  <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
    <div className='w-[32px] h-[32px] flex gap-[10px]'>
    <Image 
        src={vector6}
        width={32}
        height={32}
        alt='Vector6'/>
    </div>
  </div>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col'>
    <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Self Development</h4>
    <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
    </div>
    </div>
  </div>
</div>

         </div>

         <div className='w-[1280px] h-[132px] flex gap-[24px] justify-start sm:hidden lg-custom:hidden'>

<div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7]'>
  <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
    <div className='w-[32px] h-[32px] flex gap-[10px]'>
    <Image 
        src={vector7}
        width={32}
        height={32}
        alt='Vector7'/>
    </div>
  </div>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col'>
    <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Business</h4>
    <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
    </div>
    </div>
  </div>
</div>

<div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7]'>
  <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
    <div className='w-[32px] h-[32px] flex gap-[10px]'>
    <Image 
        src={vector8}
        width={32}
        height={32}
        alt='Vector8'/>
    </div>
  </div>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col'>
    <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Finance</h4>
    <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
    </div>
    </div>
  </div>
</div>

<div className='w-[410.67px] h-[132px] flex justify-start items-center p-4 rounded-[5px] gap-[32px] bg-[#F7F7F7]'>
  <div className='w-[100px] h-[100px] flex p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF]'>
    <div className='w-[32px] h-[32px] flex gap-[10px]'>
    <Image 
        src={vector9}
        width={32}
        height={32}
        alt='Vector9'/>
    </div>
  </div>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[24px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col gap-[16px]'>
  <div className='w-[246.67px] h-[57px] flex flex-col'>
    <h4 className='text-[20px] leading-[30px] font-semibold Roboto text-[#000000]'>Consulting</h4>
    <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>50+ Courses Available</p>
    </div>
    </div>
  </div>
</div>

        </div>

        <button className='w-[155px] h-[48px] rounded-[5px] border-[#000000] border-[1px] gap-[8px] py-[12px] px-[24px] self-center text-[16px] leading-[24px] font-normal Roboto text-[#000000] whitespace-nowrap flex items-center justify-center'>View All Courses</button>


        </div>
      </div>
    </div>
    {/* fourth-box */}
    <div className='w-[1280px] h-[488px] py-[112px] px-[64px] flex gap-[80px] bg-[#FFFFFF] sm:w-[428px] sm:h-[451px] sm:gap-[48px] sm:px-[24px] sm:py-[48px] sm:justify-start sm:items-center'>
      <div className='w-[1152px] h-[264px] flex flex-col gap-[24px] items-center sm:w-[380px] sm:h-[355px] sm:justify-center'>
      <div className='w-[1152px] h-[264px] flex flex-col gap-[32px] items-center sm:w-[380px] sm:h-[355px]'>
        <div className='w-[1152px] h-[136px] flex flex-col gap-[16px] sm:w-[380px] sm:h-[147px]'>
        <div className='w-[1152px] h-[136px] flex flex-col gap-[24px] sm:w-[380px] sm:h-[147px]'>
          <h2 className='text-[48px] leading-[57.6px] text-center font-bold Roboto text-[#000000] sm:text-[32px] sm:leading-[41.6px]'>Our Achivements</h2>
          <p className='text-[18px] leading-[27px] text-center font-normal Roboto text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          </div>
        </div>

        <div className='w-[1156px] h-[96px] flex gap-[24px] justify-center sm:w-[380px] sm:h-[176px] sm:flex-col sm:justify-start sm:items-start sm:pt-6'>
          <div className='w-[616px] h-[96px] flex gap-[24px] sm:w-[380px] sm:h-[76px] sm:py-2 sm:gap-[16px] sm:items-center'>
            <div className='w-[296px] h-[80px] flex flex-col gap-[8px] items-center  sm:w-[182px] sm:h-[60px]'>
              <h3 className='text-[40px] leading-[48px] font-bold Roboto text-[#000000] sm:text-[20px] sm:leading-[28px]'>+200</h3>
              <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Courses</p>
            </div>

            <div className='w-[296px] h-[80px] flex flex-col gap-[8px]  items-center sm:w-[182px] sm:h-[60px]'>
            <h3 className='text-[40px] leading-[48px] font-bold Roboto text-[#000000] sm:text-[20px] sm:leading-[28px]'>50K</h3>
            <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Mentors</p>
            </div>

          </div>

          <div  className='w-[616px] h-[96px] flex gap-[24px] sm:w-[380px] sm:h-[76px] sm:py-2 sm:gap-[16px] sm:items-center'>
          <div className='w-[296px] h-[80px] flex flex-col gap-[8px]  items-center sm:w-[182px] sm:h-[60px]'>
            <h3 className='text-[40px] leading-[48px] font-bold Roboto text-[#000000] sm:text-[20px] sm:leading-[28px]'>370K</h3>
            <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Students</p>
            </div>

            <div className='w-[296px] h-[80px] flex flex-col gap-[8px]  items-center sm:w-[182px] sm:h-[60px]'>
            <h3 className='text-[40px] leading-[48px] font-bold Roboto text-[#000000] sm:text-[20px] sm:leading-[28px]'>100+</h3>
            <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Recognition</p>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
    {/* fifth box */}
    <div className='w-[1280px] h-[1742px] flex flex-col items-center  justify-center px-[64px] py-[112px] bg-[#FFFFFF] gap-[60px] overflow-hidden sm:w-[428px] sm:h-[2135px] sm:gap-[48px] sm:px-6 sm:py-12'>
      <div className='w-[768px] h-[118px] flex flex-col gap-[16px] sm:w-[249px] sm:h-[93px]'>
      <div className='w-[768px] h-[118px] flex flex-col gap-[24px] sm:w-[249px] sm:h-[93px]'>
        <h1 className='text-[56px] leading-[67.2px] font-bold text-center text-[#000000] Roboto sm:text-[32px] sm:leading-[41.6px]'>Courses</h1>
        <p className='text-[18px] leading-[27px] text-center font-normal Roboto text-[#000000]'>Your Ultimate Guide to learning</p>
        </div>
      </div>
      <div className='w-[1152px] h-[1340px] flex flex-col gap-[64px] justify-start items-center sm:w-[380px] sm:h-[1898px]'>
        <div className='w-[336px] h-[40px] flex justify-center'>
          <button className='w-[87px] h-[40px] gap-[8px] px-[16px] py-[8px] border-b-[#676767] border-b-[1px] text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Popular</button>
          <button className='w-[140px] h-[40px] gap-[8px] px-[16px] py-[8px] border-none text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Recommended</button>
          <button className='w-[109px] h-[40px] gap-[8px] px-[16px] py-[8px] border-none text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Best Price</button>
        </div>
        <div className='w-[1152px] h-[1132px] flex flex-col items-center gap-[64px]  sm:w-[380px] sm:h-[1690px]'>
          {/* row1 */}
          <div className='w-[1312px] h-[534px] gap-[32px] flex justify-start items-start sm:w-[380px] sm:h-[1690px] sm:flex-col'>
            {/* card1 */}
            <div className='w-[416px] h-[534px] flex flex-col gap-[24px] rounded-[5px] bg-[#F7F7F7] sm:w-[380px] sm:h-[558px]'>

            <Image 
                    src={Course1}
                    width={416}
                    height={300}
                    alt='course1'/>
                    <div className='w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px] sm:w-[380px] sm:h-[234px]'>
                      <div className='w-[382px] h-[122px] flex flex-col gap-[8px] sm:w-[380px] sm:h-[146px]'>
                        <div className='w-[382px] h-[24px] flex gap-[8px] sm:w-[348px]'>
                          <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000] w-[326px]'>Design</p>
                          <div className='w-[48px] h-[24px] flex gap-[4px] justify-center items-center'>
                          <Image 
                    src={Star}
                    width={24}
                    height={24}
                    alt='star'/>
                    <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000]'>5.0</p>
                          </div>
                        </div>
                        <h1 className='text-[24px] leading-[33.6px] font-bold Roboto text-[#000000]'>UX/UI Design 201</h1>
                        <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      </div>
                      <div className='w-[383px] h-[40px] flex gap-[16px] sm:w-[382px]'>
                        <button className='w-[117px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-normal text-[#000000] border-[#000000] border-[1px] whitespace-nowrap'>Enroll Now</button>
                        <button className='w-[77px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-medium text-[#000000]'>$400</button>
                      </div>
                    </div>
            </div>

            {/* card2 */}
            <div className='w-[416px] h-[534px] flex flex-col gap-[24px] rounded-[5px] bg-[#F7F7F7] sm:w-[380px] sm:h-[558px]'>

        <Image 
        src={Course2}
        width={416}
        height={300}
        alt='course2'/>
        <div className='w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px] sm:w-[380px] sm:h-[234px]'>
          <div className='w-[382px] h-[122px] flex flex-col gap-[8px] sm:w-[380px] sm:h-[146px]'>
            <div className='w-[382px] h-[24px] flex gap-[8px] sm:w-[48px]'>
              <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000] w-[326px]'>Programming</p>
              <div className='w-[48px] h-[24px] flex gap-[4px] justify-center items-center'>
              <Image 
        src={Star}
        width={24}
        height={24}
        alt='star'/>
        <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000]'>5.0</p>
              </div>
            </div>
            <h1 className='text-[24px] leading-[33.6px] font-bold Roboto text-[#000000]'>Introduction to Python</h1>
            <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className='w-[383px] h-[40px] flex gap-[16px] sm:w-[382px]'>
            <button className='w-[117px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-normal text-[#000000] border-[#000000] border-[1px] whitespace-nowrap'>Enroll Now</button>
            <button className='w-[77px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-medium text-[#000000]'>$400</button>
          </div>
        </div>
            </div>

             {/* card3 */}
            <div className='w-[416px] h-[534px] flex flex-col gap-[24px] rounded-[5px] bg-[#F7F7F7] sm:w-[380px] sm:h-[558px]'>

        <Image 
        src={Course3}
        width={416}
        height={300}
        alt='course3'/>
        <div className='w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px] sm:w-[380px] sm:h-[234px]'>
          <div className='w-[382px] h-[122px] flex flex-col gap-[8px] sm:w-[380px] sm:h-[146px]'>
            <div className='w-[382px] h-[24px] flex gap-[8px] sm:w-[348px]'>
              <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000] w-[326px]'>Business</p>
              <div className='w-[48px] h-[24px] flex gap-[4px] justify-center items-center'>
              <Image 
        src={Star}
        width={24}
        height={24}
        alt='star'/>
        <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000]'>5.0</p>
              </div>
            </div>
            <h1 className='text-[24px] leading-[33.6px] font-bold Roboto text-[#000000]'>Data Analysis for Beginners</h1>
            <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className='w-[383px] h-[40px] flex gap-[16px] sm:w-[382px]'>
            <button className='w-[117px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-normal text-[#000000] border-[#000000] border-[1px] whitespace-nowrap'>Enroll Now</button>
            <button className='w-[77px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-medium text-[#000000]'>$400</button>
          </div>
        </div>
            </div>
          </div>
          {/* row2 */}
          <div className='w-[1312px] h-[534px] gap-[32px] flex justify-start items-start sm:hidden'>
            {/* card1 */}
            <div className='w-[416px] h-[534px] flex flex-col gap-[24px] rounded-[5px] bg-[#F7F7F7]'>

            <Image 
                    src={Course4}
                    width={416}
                    height={300}
                    alt='course4'/>
                    <div className='w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]'>
                      <div className='w-[382px] h-[122px] flex flex-col gap-[8px]'>
                        <div className='w-[382px] h-[24px] flex gap-[8px]'>
                          <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000] w-[326px]'>Art</p>
                          <div className='w-[48px] h-[24px] flex gap-[4px] justify-center items-center'>
                          <Image 
                    src={Star}
                    width={24}
                    height={24}
                    alt='star'/>
                    <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000]'>5.0</p>
                          </div>
                        </div>
                        <h1 className='text-[24px] leading-[33.6px] font-bold Roboto text-[#000000]'>Art Specialization</h1>
                        <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      </div>
                      <div className='w-[383px] h-[40px] flex gap-[16px]'>
                        <button className='w-[117px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-normal text-[#000000]  border-[#000000] border-[1px] whitespace-nowrap'>Enroll Now</button>
                        <button className='w-[77px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-medium text-[#000000]'>$400</button>
                      </div>
                    </div>
            </div>

            {/* card2 */}
            <div className='w-[416px] h-[534px] flex flex-col gap-[24px] rounded-[5px] bg-[#F7F7F7]'>

        <Image 
        src={Course5}
        width={416}
        height={300}
        alt='course5'/>
        <div className='w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]'>
          <div className='w-[382px] h-[122px] flex flex-col gap-[8px]'>
            <div className='w-[382px] h-[24px] flex gap-[8px]'>
              <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000] w-[326px]'>Law</p>
              <div className='w-[48px] h-[24px] flex gap-[4px] justify-center items-center'>
              <Image 
        src={Star}
        width={24}
        height={24}
        alt='star'/>
        <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000]'>5.0</p>
              </div>
            </div>
            <h1 className='text-[24px] leading-[33.6px] font-bold Roboto text-[#000000]'>Rule of Law</h1>
            <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className='w-[383px] h-[40px] flex gap-[16px]'>
            <button className='w-[117px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-normal text-[#000000] border-[#000000] border-[1px] whitespace-nowrap'>Enroll Now</button>
            <button className='w-[77px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-medium text-[#000000]'>$400</button>
          </div>
        </div>
            </div>


             {/* card3 */}
            <div className='w-[416px] h-[534px] flex flex-col gap-[24px] rounded-[5px] bg-[#F7F7F7]'>
              <div className='w-[416px] h-[300px] flex flex-wrap'>
        <Image
        src={Course6}
        width={416}
        height={300}
        alt='course6'/>
        </div>
        <div className='w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]'>
          <div className='w-[382px] h-[122px] flex flex-col gap-[8px]'>
            <div className='w-[382px] h-[24px] flex gap-[8px]'>
              <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000] w-[326px]'>Tech</p>
              <div className='w-[48px] h-[24px] flex gap-[4px] justify-center items-center'>
              <Image 
        src={Star}
        width={24}
        height={24}
        alt='star'/>
        <p className='text-[14px] leading-[21px] font-semibold Roboto text-[#000000]'>5.0</p>
              </div>
            </div>
            <h1 className='text-[24px] leading-[33.6px] font-bold Roboto text-[#000000]'>Introduction to webflow</h1>
            <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className='w-[383px] h-[40px] flex gap-[16px]'>
            <button className='w-[117px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-normal text-[#000000] border-[#000000] border-[1px] whitespace-nowrap'>Enroll Now</button>
            <button className='w-[77px] h-[40px] flex gap-[8px] px-[20px] py-[8px] rounded-[5px] text-[16px] leading-[24px] Roboto font-medium text-[#000000]'>$400</button>
          </div>
        </div>
            </div>
          </div>
          <button className='w-[152px] h-[40px] flex gap-[8px] px-[16px] py-[8px] rounded-[5px] border-[#000000] border-[1px] text-[16px] leading-[24px] font-normal Roboto text-[#000000] whitespace-nowrap'>View All Courses</button>
        </div>
      </div>
    </div>
    {/* Sixth box */}
    <div className='w-[1280px] h-[895px] flex flex-col px-[64px] py-[112px] gap-[80px] bg-[#F7F7F7] items-center sm:w-[428px] sm:h-[1075px] sm:gap-[48px] sm:px-6 sm:py-12'>
      <div className='w-[768px] h-[109px] flex flex-col gap-[16px] items-center justify-center sm:w-[363px] sm:h-[120px]'>
      <div className='w-[768px] h-[109px] flex flex-col gap-[24px] items-center justify-center  sm:w-[363px] sm:h-[120px]'>
        <h2 className='text-[48px] leading-[57.6px] font-bold Roboto text-[#000000] text-center sm:text-[32px] sm:leading-[41.6px]'>Our team</h2>
        <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
      <div className='w-[1280px] h-[482px] flex flex-col gap-[96px] items-center sm:w-[380px] sm:h-[723px]'>
      <div className='w-[1280px] h-[482px] flex flex-col gap-[64px] items-start sm:w-[380px] sm:h-[723px]'>
        {/* row1 */}
        <div className='w-[1280px] h-[209px] flex gap-[48px] justify-start sm:w-[380px] sm:h-[723px] sm:flex-col'>
          {/* card1 */}
          <div className='w-[394.67] h-[209px] flex flex-col gap-[24px] items-center'>
          <Image 
                    src={Team1}
                    width={80}
                    height={80}
                    alt='Team'/>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[16px] items-center'>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[0px] items-center'>
                      <h4 className='text-[20px] leading-[30px] font-semibold Roboto align-center text-[#000000]'>James Nduku</h4>
                      <p className='text-[18px] leading-[27px] font-normal Roboto align-center text-[#000000]'>Marketing Coordinator</p>
                      </div>
                    </div>

                    <div className='w-[100px] h-[24px] flex gap-[14px] justify-start'>
                    <FaLinkedin className='w-[24px] h-[24px] text-[#000000]' />
                    <FaTwitter className='w-[24px] h-[24px] text-[#000000]'/>
                    <FaDribbble className='w-[24px] h-[24px] text-[#000000]'/>
                    </div>
          </div>
            {/* card2 */}
            <div className='w-[394.67] h-[209px] flex flex-col gap-[24px] items-center'>
          <Image 
                    src={Team2}
                    width={80}
                    height={80}
                    alt='Team'/>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[16px] items-center'>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[0px] items-center'>
                      <h4 className='text-[20px] leading-[30px] font-semibold Roboto align-center text-[#000000]'>Joseph Munyambu</h4>
                      <p className='text-[18px] leading-[27px] font-normal Roboto align-center text-[#000000]'>Nursing Assistant</p>
                      </div>
                    </div>

                    <div className='w-[100px] h-[24px] flex gap-[14px] justify-start'>
                    <FaLinkedin className='w-[24px] h-[24px] text-[#000000]' />
                    <FaTwitter className='w-[24px] h-[24px] text-[#000000]'/>
                    <FaDribbble className='w-[24px] h-[24px] text-[#000000]'/>
                    </div>
          </div>
              {/* card3 */}
              <div className='w-[394.67] h-[209px] flex flex-col gap-[24px] items-center'>
          <Image 
                    src={Team3}
                    width={80}
                    height={80}
                    alt='Team'/>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[16px] items-center'>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[0px] items-center'>
                      <h4 className='text-[20px] leading-[30px] font-semibold Roboto align-center text-[#000000]'>Joseph Ngumbau</h4>
                      <p className='text-[18px] leading-[27px] font-normal Roboto align-center text-[#000000]'>Medical Assistant</p>
                      </div>
                    </div>

                    <div className='w-[100px] h-[24px] flex gap-[14px] justify-start'>
                    <FaLinkedin className='w-[24px] h-[24px] text-[#000000]' />
                    <FaTwitter className='w-[24px] h-[24px] text-[#000000]'/>
                    <FaDribbble className='w-[24px] h-[24px] text-[#000000]'/>
                    </div>
          </div>
          <button className='hidden sm:block sm:w-[89px] sm:h-[40px] sm:gap-2 sm:px-4 sm:py-2 sm:rounded-[5px] sm:border-[#000000] sm:border-[1px] sm:text-[16px] sm:leading-[24px] sm:font-normal sm:Roboto sm:text-[#000000] sm:whitespace-nowrap sm:self-center'>View All</button>
        </div>
        {/* row2 */}
        <div className='w-[1280px] h-[209px] flex gap-[48px] justify-start sm:hidden'>
          {/* card1 */}
          <div className='w-[394.67] h-[209px] flex flex-col gap-[24px] items-center'>
          <Image 
                    src={Team4}
                    width={80}
                    height={80}
                    alt='Team'/>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[16px] items-center'>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[0px] items-center'>
                      <h4 className='text-[20px] leading-[30px] font-semibold Roboto align-center text-[#000000]'>Erick Kipkemboi</h4>
                      <p className='text-[18px] leading-[27px] font-normal Roboto align-center text-[#000000]'>Web Designer</p>
                      </div>
                    </div>

                    <div className='w-[100px] h-[24px] flex gap-[14px] justify-start'>
                    <FaLinkedin className='w-[24px] h-[24px] text-[#000000]' />
                    <FaTwitter className='w-[24px] h-[24px] text-[#000000]'/>
                    <FaDribbble className='w-[24px] h-[24px] text-[#000000]'/>
                    </div>
          </div>
            {/* card2 */}
            <div className='w-[394.67] h-[209px] flex flex-col gap-[24px] items-center'>
          <Image 
                    src={Team5}
                    width={80}
                    height={80}
                    alt='Team'/>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[16px] items-center'>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[0px] items-center'>
                      <h4 className='text-[20px] leading-[30px] font-semibold Roboto align-center text-[#000000]'>Stephen Kerubo</h4>
                      <p className='text-[18px] leading-[27px] font-normal Roboto align-center text-[#000000]'>President of Sales</p>
                      </div>
                    </div>

                    <div className='w-[100px] h-[24px] flex gap-[14px] justify-start'>
                    <FaLinkedin className='w-[24px] h-[24px] text-[#000000]' />
                    <FaTwitter className='w-[24px] h-[24px] text-[#000000]'/>
                    <FaDribbble className='w-[24px] h-[24px] text-[#000000]'/>
                    </div>
          </div>
              {/* card3 */}
              <div className='w-[394.67] h-[209px] flex flex-col gap-[24px] items-center'>
          <Image 
                    src={Team6}
                    width={80}
                    height={80}
                    alt='Team'/>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[16px] items-center'>
                    <div className='w-[394.67px] h-[57px] flex flex-col gap-[0px] items-center'>
                      <h4 className='text-[20px] leading-[30px] font-semibold Roboto align-center text-[#000000]'>John Leboo</h4>
                      <p className='text-[18px] leading-[27px] font-normal Roboto align-center text-[#000000]'>Dog Trainer</p>
                      </div>
                    </div>

                    <div className='w-[100px] h-[24px] flex gap-[14px] justify-start'>
                    <FaLinkedin className='w-[24px] h-[24px] text-[#000000]' />
                    <FaTwitter className='w-[24px] h-[24px] text-[#000000]'/>
                    <FaDribbble className='w-[24px] h-[24px] text-[#000000]'/>
                    </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    {/* seven box */}
    <div className='w-[1280px] h-[830.89px] flex flex-col gap-[80px] px-[64px] py-[112px] bg-[#F7F7F7] justify-center items-start sm:w-[428px] sm:h-[681.89px] sm:gap-[48px] sm:px-6 sm:py-12'>
    <div className='w-[560px] h-[109px] flex flex-col gap-[24px] items-start sm:w-[361px] sm:h-[120px]'>
    <h2 className='text-[48px] leading-[57.6px] font-bold Roboto text-[#000000] sm:text-[32px] sm:leading-[41.6px]'>Customer testimonials</h2>
    <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[1152px] h-[417.89px] flex flex-col gap-[48px] items-start sm:w-[380px] sm:h-[417.89px]'>
        <div className='w-[1152px] h-[321.89px] flex justify-start gap-[32px] sm:w-[380px] sm:h-[321.89px] sm:flex-col'>
          {/* card1 */}
          <div className='w-[362.67px] h-[321.89px] p-[32px] flex flex-col gap-[24px] justify-start border-[#000000] border-[1px] sm:w-[380px] sm:h-[321.89px]'>
            <div className='w-[116px] h-[18.89px] flex gap-1 justify-start'>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            </div>

            <div className='w-[298.67px] h-[215px] flex flex-col gap-[24px] items-start sm:w-[316px]'>
              <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className='w-[215px] h-[56px] flex items-center gap-[20px] sm:w-[254px]'>
              <Image className='rounded-full'
                    src={Team3}
                    width={56}
                    height={56}
                    alt='team'/>
                <div className='w-[139px] h-[48px] flex flex-col gap-[0px] sm:w-[178px]'>
                  <h4 className='text-[16px] leading-[24px] font-semibold Roboto text-[#000000]'>James Nduku</h4>
                  <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Software Developer</p>
                  </div> 
              </div>
            </div>
          </div>
             {/* card2 */}
             <div className='w-[362.67px] h-[321.89px] p-[32px] flex flex-col gap-[24px] justify-start border-[#000000] border-[1px] sm:hidden'>
            <div className='w-[116px] h-[18.89px] flex gap-1 justify-start'>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            </div>

            <div className='w-[298.67px] h-[215px] flex flex-col gap-[24px] items-start'>
              <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className='w-[215px] h-[56px] flex items-center gap-[20px]'>
              <Image className='rounded-full'
                    src={Team1}
                    width={56}
                    height={56}
                    alt='team'/>
                <div className='w-[139px] h-[48px] flex flex-col gap-[0px]'>
                  <h4 className='text-[16px] leading-[24px] font-semibold Roboto text-[#000000]'>Erick Kipkemboi</h4>
                  <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>Scrum Master</p>
                  </div> 
              </div>
            </div>
          </div>
                {/* card3 */}
                <div className='w-[362.67px] h-[321.89px] p-[32px] flex flex-col gap-[24px] justify-start border-[#000000] border-[1px] sm:hidden'>
            <div className='w-[116px] h-[18.89px] flex gap-1 justify-start'>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            <IoStarSharp  className='w-[20px] h-[19px] text-[#000000]'/>
            </div>

            <div className='w-[298.67px] h-[215px] flex flex-col gap-[24px] items-start'>
              <p className='text-[18px] leading-[27px] font-normal Roboto text-[#000000]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className='w-[215px] h-[56px] flex items-center gap-[20px]'>
              <Image className='rounded-full'
                    src={Team6}
                    width={56}
                    height={56}
                    alt='team'/>
                <div className='w-[139px] h-[48px] flex flex-col gap-[0px]'>
                  <h4 className='text-[16px] leading-[24px] font-semibold Roboto text-[#000000]'>Stephen Kerubo</h4>
                  <p className='text-[16px] leading-[24px] font-normal Roboto text-[#000000]'>UI/UX Designer</p>
                  </div> 
              </div>
            </div>
          </div>
        </div>

        <div className='w-[1152px] h-[48px] flex justify-between items-center sm:w-[380px]'>
          <div className='w-[72px] h-[8px] gap-2 flex'>
          <GoDotFill className='w-[8px] h-[8px] text-[#000000] font-bold' />
          <GoDotFill className='w-[8px] h-[8px] text-[#8D8D8D] font-bold' />
          <GoDotFill className='w-[8px] h-[8px] text-[#8D8D8D] font-bold' />
          <GoDotFill className='w-[8px] h-[8px] text-[#8D8D8D] font-bold' />
          <GoDotFill className='w-[8px] h-[8px] text-[#8D8D8D] font-bold' />
          </div>

          <div className='w-[111px] h-[48px] flex gap-[15px] justify-start'>
            <button className='w-[48px] h-[48px] p-3 flex items-center justify-center gap-2 rounded-[50px] border-[#000000] border-[1px] '>
            <FaArrowLeft className='w-[24px] h-[24px] text-[#000000]'/>
            </button>
            <button className='w-[48px] h-[48px] p-3 flex items-center justify-center gap-2 rounded-[50px] border-[#000000] border-[1px]'>
            <FaArrowRight className='w-[24px] h-[24px] text-[#000000]'/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  
  );
}
