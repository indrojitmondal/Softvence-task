import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <div className='w-[95%] mx-auto overflow-hidden bg-[#07315A] mt-14 rounded-3xl'>

                <div className='grid px-4 md:px-16 py-20 text-white grid-cols-1 gap-20 md:grid-cols-[40%_30%_30%]'>
                    {/* Column 1 */}
                    <div>
                        <h1 className='text-3xl font-medium'>Join Our JF Products</h1>
                        <p className='text-xl mt-4 font-normal'>We’ll tell you about store updates and discounts</p>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-10 px-6 py-4 bg-[#1A4166] outline-0 text-white rounded-3xl w-full"
                        />

                        <div className='mt-6 flex gap-3 items-center'>
                            <input
                                type="checkbox"
                               
                                className="border border-white rounded-sm text-white"
                            />
                            <span>Yes, subscribe me to your newsletter.</span>
                        </div>

                        <button className='mt-10 px-6 py-4 bg-white text-black text-lg font-medium text-center rounded-3xl w-full'>
                            Join Now
                        </button>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h1 className='text-3xl font-medium'>Information</h1>
                        <div className='mt-8 space-y-7 flex text-xl font-normal flex-col'>
                            <Link>Home</Link>
                            <Link>Shop</Link>
                            <Link>Our Story</Link>
                            <Link>Blogs</Link>
                            <Link>Contact</Link>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h1 className='text-3xl font-medium'>Helpful</h1>
                        <div className='mt-8 space-y-7 flex text-xl font-normal flex-col'>
                            <Link>FAQs</Link>
                            <Link>Terms & Conditions</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Shipping Policy</Link>
                            <Link>My Account</Link>
                        </div>
                    </div>
                </div>
                <div className='px-4 md:px-16  pb-20'>
                    <div className='md:flex  justify-between items-center'>
                        <div className='flex items-center gap-12'>
                            <img src={'/logo.png'} className='w-[100px] h-[120px]' alt="logo" />
                            <div className='text-white text-xl '>
                                <h1 className='font-semibold '>Our Branches</h1>
                                <p className='font-normal'>Coimabtore, Chennai, Hyderabad, Goa, Kochi</p>
                            </div>
                        </div>
                        <div className='text-center '>

                            <button className='btn bg-[#B0DD1D] rounded-[100px] text-lg font-medium text-black px-8 py-6'>Contact Us</button>

                        </div>
                    </div>
                </div>

            </div>

              {/* Bottom Text */}
              <div className=" ml-15  md:ml-30  my-10">
              <p className='text-lg font-normal'> Copyright © {new Date().getFullYear()} JF Products. All rights reserved
                </p>
            </div>

            
        </div>
    );
};

export default Footer;
