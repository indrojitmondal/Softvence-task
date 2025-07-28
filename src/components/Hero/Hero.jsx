import React from 'react';

import heroLeftImage from '../../assets/heroLeft.png'
import { CgArrowLeft, CgArrowRight } from 'react-icons/cg';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className='flex items-center'>


            {/* <!-- arrow left icon --> */}
            <div className="bg-[#B0DD1D] ml-8 rounded-[50%] w-8 h-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 translate-x-2 translate-y-2 -rotate-135"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                </svg>
            </div>

            <div className='w-[90%]  grid grid-cols-1 md:grid-cols-2  mx-auto'>
                {/* left  */}
                <div>
                    <img src={heroLeftImage} alt="leftImage" />
                </div>
                {/* right */}
                <div className='flex items-center'>
                    <div>


                        <div>
                            <h1 className='text-[62px] font-[500]'>JF Privezy Grass <br /> Wall</h1>
                            <p className='mt-5'>The perfact Blend of Greenery</p>
                            <div className='mt-12'>
                                {/* shopNow Button */}
                                <button className='btn bg-[#B0DD1D] rounded-[100px] text-white px-8 py-4'>Shop Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* <!-- arrow right icon --> */}
             <div class="bg-[#B0DD1D] mr-8 rounded-[50%] w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 translate-x-2 translate-y-2 rotate-45 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>

            </div>




            
        </div>
    );
};

export default Hero;