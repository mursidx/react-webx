import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function Card({ width, start, para, cName, heading ,text}) {
    return (
        <div className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[60vh] flex flex-col justify-between ${cName}`}>

            <div className={`w-full`}>
                <div className='w-full flex justify-between items-center'>
                    <h3 className='text-sm'>{heading}</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className='text-3xl font-medium mt-5 tracking-wide'>{text}</h1>
            </div>

            <div className='down w-full'>
                {
                    start && (
                        <>
                            <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a project</h1>
                            <button className='rounded-full mt-5 py-2 px-5 border border-zinc-400 text-white bg-zinc-800 hover:bg-zinc-600 hover:border-zinc-300 transition duration-300 ease-in-out shadow-lg'>
                                Contact us
                            </button>

                        </>
                    )
                }
                {para && (
                    <p className='text-sm text-zinc-500 font-medium '>webX is a top Webflow Agency combining high-end design with Webflow Development expertise.</p>
                )}


            </div>

        </div>
    )
}

export default Card