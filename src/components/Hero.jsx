import React from 'react'
import { FaNodeJs } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import prof from "../assets/prof.jpg"
import { BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lottie from 'react-lottie';
import animationData from '../assets/prof.json';

const Hero = () => {
  const handleResumeClick = () => {
    window.open(`../Raveendhar_SDE.pdf`, '_blank');
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className='flex sm:w-10/12 sm:h-screen py-28 w-screen items-center justify-center'>
      <section className='flex sm:gap-10 text-teal-500  h-full md:flex-row flex-col w-full items-center justify-center'>
        <div className='pb-5 sm:w-2/5'>
          <h1 className='text-2xl sm:text-4xl font-semibold opacity-70 sm:mt-20  text-[#44bec7] uppercase'>Hi there!</h1>
          <h1 className='text-3xl sm:text-[40px] font-semibold font-serif uppercase text-[#fa3c4c]'>Raveendhar <span className='opacity-70 font-mono'>here</span> </h1>
          <h6 className='text-xl sm:text-3xl uppercase font-extralight sm:mb-10 mb-3 text-[#d696bb] items-center justify-center '>Web Developer<span className=' text-3xl' data-aos='zoom-in '>🚀</span></h6>
          <button onClick={handleResumeClick} className='flex w-fit text-white px-5  py-2 hover:bg-[#182af2] mb-10 bg-[#1877f2] rounded-md '>RESUME</button>
        </div>
        {/* <div className='flex  md:w-64  xl:w-80 w-52  justify-center pr-2 '>
          <LazyLoadImage src={prof}
            effect="blur" alt="img" className="rounded-2xl shadow-md drop-shadow-md shadow-gray-700 " />
        </div> */}
        <div>
          <Lottie
            options={defaultOptions}
            width={350}
            height={300}
          />
        </div>
      </section>
    </div>
  )
}

export default Hero