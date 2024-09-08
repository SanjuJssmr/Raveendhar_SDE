import React from 'react'
import { SlLocationPin } from "react-icons/sl"
import { PiPhoneCall } from "react-icons/pi"
import { LuMailPlus } from "react-icons/lu"

const Contact = () => {
    return (
        <div className='sm:mb-36 font-poppins mt-16 mb-10 w-full'>
            <div className="flex w-full gap-1 pb-5 flex-col items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2">Get in Touch</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center">
                    My contact details
                </p>
            </div>
            <div className='flex sm:flex-row flex-col pt-5 items-center text-gray-500 justify-center gap-20 w-full'>
                <section className='flex w-[250px] flex-col items-center justify-center gap-8 text-xl'>
                    <SlLocationPin className='text-7xl text-[#44bec7]  border-gray-400 border-2 rounded-full p-4' />
                    <div className='flex items-center justify-center flex-col text-lg opacity-70'>
                        <h3>Choolaimedu, <span className='font-semibold'>Chennai</span></h3>
                        <h3>TN,India</h3>
                    </div>
                </section>
                <section className='flex w-[250px]  flex-col items-center justify-center text-xl'>
                    <PiPhoneCall className='text-7xl flex items-center mb-9 justify-center gap-0   text-[#44bec7]  border-gray-400  border-2 rounded-full p-4' />
                    <h3 className='text-lg opacity-70'>Call: <span className='font-semibold'>+91 7010251056</span> </h3>
                    <h3 className='text-lg opacity-70'>Whatsapp: <span className='font-semibold'>+91 7010251056</span></h3>

                </section>
                <section className='flex w-[250px]  flex-col items-center justify-center text-xl'>
                    <LuMailPlus className='text-7xl  flex items-center mb-9   justify-center text-[#44bec7]  border-gray-400  border-2 rounded-full p-4' />
                    <h3 className='text-lg opacity-70'>Email me</h3>
                    <h3 className='text-lg opacity-70 font-semibold'>sanjuravi134@gmail.com</h3>
                </section>
            </div>
        </div>
    )
}

export default Contact