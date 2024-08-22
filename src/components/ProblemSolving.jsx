import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/leet.json';
import blogData from '../assets/blog.json';
import geekData from '../assets/geek.json';


const ProblemSolving = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const BlogtOptions = {
        loop: true,
        autoplay: true,
        animationData: blogData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const geekOptions = {
        loop: true,
        autoplay: true,
        animationData: geekData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='flex sm:h-screen font-poppins h-full items-center justify-center flex-col mx-20'>
            <div className="flex w-full gap-1 pb-5 flex-col items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2">Links</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center">
                    Writings and Problem Solvings
                </p>
            </div>
            <section className='flex sm:flex-nowrap flex-wrap  w-full h-full gap-5'>
                <div className='flex shadow-md drop-shadow-md shadow-gray-300 sm:w-1/3 w-fit rounded-md  px-10 pb-10 h-fit flex-col items-center justify-center '>
                    <section>
                        <Lottie
                            options={defaultOptions}
                            
                        />
                    </section>
                    <section className='flex flex-col items-center justify-center gap-5'>
                        <a href='https://leetcode.com/u/sanjuravi134/' className='text-orange-500 w-full h-full uppercase rounded-md '>Leet Code</a>
                    </section>
                </div>
                <div className='flex shadow-md drop-shadow-md shadow-gray-300 sm:w-1/3 w-fit rounded-md  px-10 pb-10 h-fit  flex-col items-center justify-center '>
                    <section>
                        <Lottie
                            options={BlogtOptions}
                        />
                    </section>
                    <section className='flex flex-col items-center justify-center gap-5'>
                        <a href='https://medium.com/@sanjuravi134' className='text-gray-500 w-full h-full uppercase rounded-md '>Medium</a>
                    </section>
                </div>
                <div className='flex shadow-md drop-shadow-md shadow-gray-300 sm:w-1/3 w-fit rounded-md  px-10 pb-10 h-fit flex-col items-center justify-center '>
                    <section>
                        <Lottie
                            options={geekOptions}
                        
                        />
                    </section>
                    <section className='flex flex-col items-center justify-center gap-5'>
                        <a href='https://www.geeksforgeeks.org/user/38jy5x3nmyg0iqxez2kh49fdd1n3u38bjsyj775d' className='text-emerald-500 w-full h-full uppercase rounded-md '>Geeks for Geeks</a>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default ProblemSolving