import React from 'react'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { FaGraduationCap } from "react-icons/fa";
import Lottie from 'react-lottie';
import animationData from '../assets/lap.json';
const Qualification = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (

        <div className='w-screen sm:w-10/12'>

            <div className="flex sm:w-full font-poppins w-screen gap-1 mb-10 flex-col items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2">Experience {<FaGraduationCap />}</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center">
                    My personal journey
                </p>
            </div>
            <div  class=" w-full flex sm:ml-10 ml-2 justify-center items-center mb-16">
                <div>
                    <section class='sm:flex hidden flex-col'>
                        <div class='flex flex-col items-center  justify-center'>
                            <div class='bg-[#1877f2] h-32 w-[1px]' />
                            <div class='bg-[#1877f2] sm:w-8 sm:h-8 w-6 h-6  rounded-full flex items-center justify-center text-white'>1</div>
                            <div class='bg-[#1877f2] h-32 w-[1px]' />
                        </div>
                        <div class='flex flex-col items-center  justify-center'>
                            <div class='bg-[#1877f2] h-32 w-[1px]' />
                            <div class='bg-[#1877f2] sm:w-8 sm:h-8 w-6 h-6 rounded-full flex items-center justify-center text-white'>2</div>
                            <div class='bg-[#1877f2] h-32 w-[1px]' />
                        </div>
                    </section>
                </div>
                <div class='flex flex-col sm:gap-0 gap-10'>
                    <section className='flex  items-center px-10 justify-center gap10 w-full h-full'>

                        <section data-aos='fade-up' class='flex   items-center justify-center'>
                            <div class='flex shadow-md rounded-md  shadow-gray-300 sm:p-10 p-7 flex-col text-xs sm:text-2xl'>
                                <div class='flex font-poppins items-center uppercase gap-1 sm:gap-4'>
                                    <h1 class='text-[#fa3c4c]'>Dokonaly</h1>
                                    <h1 class='text-gray-500  '>( Web Developer )</h1>
                                </div>
                                <div class='flex items-center font-poppins text-[#44bec7] text-sm sm:text-lg uppercase gap-1 sm:gap-5 pb-2 sm:pb-5'>
                                    {
                                        <BsCalendarCheckFill className=" mb-1 " />
                                    }
                                    Aug 2023 - Present
                                </div>
                                <p class='sm:text-lg text-sm  text-gray-500 text-justify'>Handling the backend part along with server-side operations and database management starts from schema design till production, with regardless troubleshooting and debugging skills with multiple environment maintenance and scalability.</p>
                            </div>
                            <div class='hidden sm:flex'>

                                <Lottie
                                    options={defaultOptions}
                                    width={350}
                                    height={300}
                                />
                            </div>
                        </section>


                    </section>
                    <section data-aos='fade-up' className='flex  items-center px-10 justify-center  gap-10 w-full h-full '>
                        <section class='flex   items-center justify-center'>
                            <div class='flex shadow-md rounded-md  shadow-gray-300 sm:p-10 p-7 flex-col text-xs sm:text-2xl'>
                                <div class='flex font-poppins items-center uppercase gap-1 sm:gap-4'>
                                <h1 class='text-[#fa3c4c]'>Null class</h1>
                                <h1 class='text-gray-500'>( Full stack intern )</h1>
                                </div>
                                <div class='flex font-poppins items-center text-[#44bec7] text-sm sm:text-lg uppercase gap-1 sm:gap-5 pb-2 sm:pb-5'>
                                    {
                                        <BsCalendarCheckFill className=" mb-1 " />
                                    }
                                    Apr 2023 - June 2023
                                </div>
                                <p class='sm:text-lg text-sm text-gray-500 text-justify'>Gain knowledge of how software development works end-to-end along with the best practices that need to be followed, then build the clone of stack overflow using MERN stack.</p>

                            </div>
                            <div class='hidden sm:flex'>

                                <Lottie
                                    options={defaultOptions}
                                    width={350}
                                    height={300}
                                />
                            </div>
                        </section>

                    </section>
                </div>
            </div>

        </div>
    );

}

export default Qualification