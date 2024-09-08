import React from 'react'
import abc from "../assets/abc.jpg"
const LiveProject = () => {
    let stack = ["", "", "", "", "", "", "", "", "", "", ""]
    return (
        <div className='pb-10 w-full sm:h-screen h-full flex flex-col items-center justify-center'>
            <div className="flex font-poppins w-full gap-1 pb-5 flex-col items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2">Live Project</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center">
                    My Live Project
                </p>
            </div>
            <div className=' p-5 w-10/12 rounded-md shadow-md '>
                <section className='flex-col sm:flex-row flex gap-10 items-center justify-center'>
                    <img src={abc} alt="" width={200} height={200} />
                    <section className="flex  flex-col items-start gap-3 justify-center">
                        <a href='https://app.allmasters.ai/' className=' cursor-pointer font-poppins text-gray-600 text-2xl'>AllMasters.ai|</a>
                        <div className='text-gray-600 sm:text-sm text-xs text-justify '>
                            ✔️ Handling the backend part of the live product Allmasters.ai by creating and
                            maintaining REST APIs and core functionalities with strong debugging and
                            troubleshooting skills. <br />
                            ✔️ Developed a separate micro-service that is responsible for every task
                            schedulerfunctionality in the product which handles almost 50-70 jobs in daily
                            basis. <br />
                            ✔️ Build the crucial OCR modules that help the internal team to efficiently by
                            improves the fault tolerance by 98 percentage. <br />
                            ✔️ Optimized the existing API’s by implementing efficient logic and database
                            aggregations, which gradually increased the performance of the API’s from
                            minutes to (50-150 ms). <br />
                            ✔️ Migrated the deprecated package with properresearch and smooth
                            implementation without affecting the existing data.

                        </div>
                        <div className='flex gap-2 pt-2 sm:text-sm text-xs flex-wrap'>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2   py-1'>NodeJs</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2  py-1'>ExpressJs</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2   py-1'>MongoDb</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2   py-1'>Azure</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2  py-1'>Aws/S3</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2  py-1'>Nodemailer</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2  py-1'>Cron</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2  py-1'>Multer</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2  py-1'>Helmet</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2  py-1'>Ejs</p>
                            <p className='w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2  py-1'>Docker</p>

                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default LiveProject