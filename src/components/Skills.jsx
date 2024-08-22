import React from 'react'
import { FaNodeJs, FaAws, FaGitAlt, FaGithub, FaDocker, FaJava } from "react-icons/fa"
import { SiExpress, SiMicrosoftazure, SiRedis, SiRabbitmq, SiSpringboot, SiSocketdotio, SiProtonmail } from "react-icons/si"
import { BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi'
import { GrGraphQl,GrMysql } from "react-icons/gr"

const Skills = () => {
    return (
        <div className='flex flex-col w-full items-center justify-center'>
            <div className="flex w-full gap-1 flex-col font-poppins items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2">Skills</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center">
                    My expertise
                </p>
            </div>
            <div className='flex w-full h-full pb-10 pt-10 px-10 sm:px-40'>
                <section className='flex xl:text-9xl sm:text-7xl text-4xl gap-10 flex-wrap items-center justify-center text-opacity-50 text-[#1877f2]'>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20 items-center justify-center  '><FaNodeJs /><p className='text-sm text-gray-500 '>Nodejs</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center text-gray-400 '><SiExpress /><p className='text-sm text-gray-500 '>ExpressJs</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20 items-center justify-center  '><FaJava /><p className='text-sm text-gray-500 '>Java</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20 items-center justify-center  text-gray-400 '><SiSpringboot /><p className='text-sm text-gray-500 '>Springboot</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20 items-center justify-center'> <BiLogoMongodb /><p className='text-sm text-gray-500 '>MongoDb</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center text-gray-400 '>   <GrMysql /><p className='text-sm text-gray-500 '>MySql</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center'> <GrGraphQl /><p className='text-sm text-gray-500 '>GraphQl</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center text-gray-400 '>  <FaAws /><p className='text-sm text-gray-500 '>EC2/S3</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center'> <SiMicrosoftazure /><p className='text-sm text-gray-500 '>Azure/Blob</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center text-gray-400 '> <FaDocker /><p className='text-sm text-gray-500 '>Docker</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center'> <SiRabbitmq /><p className='text-sm text-gray-500 '>RabbitMq</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center text-gray-400 '><SiSocketdotio /><p className='text-sm text-gray-500 '>Socket.io</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center'> <FaGitAlt /><p className='text-sm text-gray-500 '>Git</p></div>
                    <div className='flex gap-3 flex-col sm:w-24 sm:h-32 w-14 h-20  items-center justify-center text-gray-400 '> <FaGithub /><p className='text-sm text-gray-500  '>GitHub</p></div>
                </section>
            </div>
        </div>
    )
}

export default Skills