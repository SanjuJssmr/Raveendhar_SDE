import React from 'react'
import { FaGithub } from "react-icons/fa"
import { LuArrowUpRightSquare } from 'react-icons/lu'
import proj1 from "../assets/ocr.jpg"
import proj2 from "../assets/logistic.jpg"
import proj3 from "../assets/course1.jpg"
import proj4 from "../assets/filter.jpg"
import proj5 from "../assets/stack.png"
import proj6 from "../assets/ecom.jpg"
import proj7 from "../assets/medi.jpg"
import proj8 from "../assets/interface1.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
    const projects = [
        {
            name: "Damage To Data",
            image: proj1,
            link: "https://github.com/SanjuJssmr/OCR"
        },
        {
            name: "Logistic Social",
            image: proj2,
            link: "https://github.com/SanjuJssmr/LogisticMedia"
        },
        {
            name: "Blog App",
            image: proj3,
            link: "https://github.com/SanjuJssmr/BlogBackend"
        },
        {
            name: "Filter Table",
            image: proj4,
            link: "https://github.com/SanjuJssmr/merncrud"
        },
        {
            name: "Stackoverflow Clone",
            image: proj5,
            link: "https://github.com/SanjuJssmr/overFlowBackend"
        },
        {
            name: "Ecommerce App",
            image: proj6,
            link: "https://github.com/SanjuJssmr/simpleEcom"
        },
        {
            name: "Medi Chat",
            image: proj7,
            link: "https://github.com/SanjuJssmr/rmcappb"
        },
        {
            name: "Analytic Table",
            image: proj8,
            link: "https://github.com/SanjuJssmr/algobullsTO-DO"
        }
    ]

    return (
        <div className='py-10 '>
            <div className="flex w-full font-poppins gap-1 pb-5 flex-col items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2">Projects</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center">
                    My Projects
                </p>
            </div>
            <div>
                <section className='flex items-center justify-center flex-wrap gap-5'>
                    {projects?.map((proj, i) => (
                        <div className='flex relative text-[#2F5061] rounded-xl flex-col w-[250px] height-[400px] backdrop-blur-3xl bg-gradient-to-t drop-shadow-md shadow-md  from-[#f6f6f6] to-gray-100 p-1 items-center justify-between'>
                            <section className=' absolute'>
                                <LazyLoadImage src={proj.image}
                                    effect="blur" alt="img" width={240} height={500} className='flex w-full rounded-xl' />
                            </section>
                            <section className='flex w-full bg-gradient-to-t mt-24 mb-5 pt-2 rounded-t-xl border-t-[1px] justify-start  border-[#707070]  from-[#f6f6f6] to-gray-100 flex-col z-20  items-center gap-3'>
                                <h1 className='text-xl font-bold pt-2 text-gray-500'>{proj.name}</h1>
                                <a href={proj.link} className='bg-[#1877f2] text-gray-50 rounded-lg  py-2 px-4 flex items-center justify-center gap-3 text-lg font-bold' >Explore {<LuArrowUpRightSquare />}</a>
                            </section>
                        </div>
                    ))}


                </section>
            </div>
        </div>
    )
}

export default Projects