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

    const roles = [
        {
            company: "Paperflite",
            title: "Technical Support Engineer (SRE)",
            dates: "Nov 2024 - Present",
            copy: "Own server-side and backend operations for the live Paperflite platform — availability, reliability, and performance. Led the production migration from AWS to GCP in one month, unlocking $200K in GCP credits, and now independently operate the full GCP server-side stack. Automated GitHub Actions CI/CD across services (2,500+ deployments), migrated major monoliths to gRPC microservices, and drove indexing and query work that improved application performance by 90%."
        },
        {
            company: "Dokonaly",
            title: "Junior Web Developer",
            dates: "Aug 2023 - Nov 2024",
            copy: "Built and maintained backend services for Allmasters.ai — REST APIs, workflow logic, and authentication. Delivered a dedicated scheduler microservice handling 50–70 automated jobs daily, engineered OCR modules that improved fault tolerance by 98%, and optimized MongoDB aggregations so API responses dropped from minutes to 50–150 ms."
        }
    ]

    return (

        <div className='w-screen sm:w-10/12'>

            <div className="flex sm:w-full font-poppins w-screen gap-2 mb-10 flex-col items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2 leading-heading">Experience {<FaGraduationCap />}</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center leading-body">
                    My personal journey
                </p>
            </div>
            <div className=" w-full flex sm:ml-10 ml-2 justify-center items-center mb-10">
                <div>
                    <section className='sm:flex hidden flex-col'>
                        {roles.map((_, index) => (
                            <div key={index} className='flex flex-col items-center  justify-center'>
                                <div className='bg-[#1877f2] h-32 w-[1px]' />
                                <div className='bg-[#1877f2] sm:w-8 sm:h-8 w-6 h-6  rounded-full flex items-center justify-center text-white'>{index + 1}</div>
                                <div className='bg-[#1877f2] h-32 w-[1px]' />
                            </div>
                        ))}
                    </section>
                </div>
                <div className='flex flex-col sm:gap-0 gap-10'>
                    {roles.map((role) => (
                        <section key={role.company} className='flex  items-center px-10 justify-center gap10 w-full h-full'>
                            <section data-aos='fade-up' className='flex   items-center justify-center'>
                                <div className='flex shadow-md rounded-md  shadow-gray-300 sm:p-10 p-7 flex-col hover:shadow-lg transition-shadow duration-300'>
                                    <div className='flex font-poppins items-center uppercase gap-x-3 gap-y-1 flex-wrap leading-heading'>
                                        <h1 className='text-[#fa3c4c] text-lg sm:text-2xl'>{role.company}</h1>
                                        <h1 className='text-gray-500 text-sm sm:text-xl'>( {role.title} )</h1>
                                    </div>
                                    <div className='flex items-center font-poppins text-[#44bec7] text-sm sm:text-base uppercase gap-2 pt-2 pb-3 sm:pb-4 leading-heading'>
                                        <BsCalendarCheckFill className=" mb-0.5 " />
                                        {role.dates}
                                    </div>
                                    <p className='sm:text-base text-sm  text-gray-500 text-left leading-body'>{role.copy}</p>
                                </div>
                                <div className='hidden sm:flex'>
                                    <Lottie
                                        options={defaultOptions}
                                        width={350}
                                        height={300}
                                    />
                                </div>
                            </section>
                        </section>
                    ))}
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-stretch justify-center gap-5 px-10 mb-16'>
                <div className='flex-1 shadow-md rounded-md shadow-gray-300 p-6 space-y-1.5'>
                    <h3 className='text-[#fa3c4c] font-poppins uppercase text-sm sm:text-lg leading-heading'>Master of Computer Applications</h3>
                    <p className='text-[#44bec7] text-xs sm:text-sm uppercase leading-heading'>TEC (AU) · Aug 2023 · Kanchipuram</p>
                    <p className='text-gray-500 text-sm leading-body'>CGPA 8.9 / 10 · DSA, Full Stack, Cloud & DevOps, Machine Learning</p>
                </div>
                <div className='flex-1 shadow-md rounded-md shadow-gray-300 p-6 space-y-1.5'>
                    <h3 className='text-[#fa3c4c] font-poppins uppercase text-sm sm:text-lg leading-heading'>BSc in Computer Science</h3>
                    <p className='text-[#44bec7] text-xs sm:text-sm uppercase leading-heading'>SCSVMV University · May 2021 · Kanchipuram</p>
                    <p className='text-gray-500 text-sm leading-body'>CGPA 9.1 / 10</p>
                </div>
            </div>

        </div>
    );

}

export default Qualification
