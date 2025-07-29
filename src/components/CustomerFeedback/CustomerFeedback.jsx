import React from 'react';
import quoteImage from '../../assets/quo.png'
import bgImage from './Images/bg.png'
import customerImage from './Images/customer.jpg'
const CustomerFeedback = () => {
    return (
        <div className='mt-40 w-[90%] mx-auto'>
            <h1 className='text-[42px] text-center font-medium'>Why Customers Love ❤️ Us?</h1>

            <div className='mt-[40px] grid grid-cols-1 gap-12 md:grid-cols-[60%_40%]'>

                <div className='bg-[#F2F4F6] px-4'>

                    <div>
                        <img src={quoteImage} alt="quote" />
                        <p className='pl-8 text-[28px]'>I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product</p>
                    </div>

                    <div
                        className='mt-28 ml-5 flex justify-between items-center py-10 px-5'
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}>
                        <h1 className='text-[32px] font-[600]'>- Samuel Varughese</h1>
                        <div className='flex gap-5'>
                            {/* <!-- arrow left icon --> */}
                            <div className="border border-black  rounded-[50%] w-8 h-8">
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

                            {/* <!-- arrow right icon --> */}
                            <div class="border border-black  rounded-[50%] w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 translate-x-2 translate-y-2 rotate-45 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>

                        </div>
                    </div>


                </div>

                <div>
                   <img className='h-full object-cover' src={customerImage} alt="customer" />
                </div>


            </div>
        </div>
    );
};

export default CustomerFeedback;