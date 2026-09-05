import React from 'react'

const About = () => {
    return (
        <div className='flex sm:hidden flex-col sm:w-10/12 min[600px]:w-10/12 max-[600px]:mx-8  min-[600px]:pt-10 pt-8 pb-10 items-center'>
            <h6 className='text-gray-50 text-justify bg-[#1877f2]  min-[600px]:text-sm text-xs  p-6 rounded-md shadow-md drop-shadow-md shadow-slate-900 backdrop-blur-3xl backdrop-opacity-70'>I am a backend engineer and SRE with experience owning production systems end to end — from REST and gRPC services to cloud infrastructure on AWS and GCP. I care about reliability, clean code, and measurable performance wins, and I keep expanding across Java, Spring Boot, Node.js, and observability so the platforms I run stay fast and stable.</h6>
        </div>
    )
}

export default About