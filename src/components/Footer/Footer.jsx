import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className=' w-[95%] mx-auto rounded-3xl  my-14  bg-[#07315A]'>

            <div className='grid  px-16 py-20 text-white grid-cols-1 gap-20 md:grid-cols-[40%_30%_30%]'>
                <div>
                    <h1 className='text-3xl font-medium'>Join Our JF Products</h1>
                   
                    <p className='text-xl mt-4 font-normal'>We’ll tell you about store updates and discounts</p>
                    <input type="email" placeholder="Enter your email" className=" mt-10 pl-[30px] py-[20px] bg-[#1A4166] outline-0 text-white rounded-3xl w-full " />
                    <div className='mt-6 flex gap-3 items-center '>
                    <input type="checkbox" defaultChecked className="border border-white rounded-[6px] p-4 text-white" />
                    Yes, subscribe me to your newsletter.
                      </div> 

                    <button className=' mt-10 pl-[30px] py-[20px] bg-white outline-0 text-black text-lg font-medium text-center rounded-3xl w-full'>Join Now</button>    
                </div>
                <div> 
                <h1 className='text-3xl font-medium'>Information</h1>
                 <div className='mt-8 space-y-7 flex text-xl font-normal flex-col'>
                    <Link className=''>Home</Link>
                    <Link>Shop</Link>
                    <Link>Our Story</Link>
                    <Link>Blogs</Link>
                    <Link>Contact</Link>

                  </div>  
                </div>
                <div>
                <h1 className='text-3xl font-medium'>Helpful</h1>
                   
                </div>
            </div>
            
        </div>
    );
};

export default Footer;