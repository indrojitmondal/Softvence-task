import React, { useState, useEffect } from 'react';
import quoteImage from '../../assets/quo.png';
import bgImage from './Images/bg.png';
import customerImage from './Images/customer.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const CustomerFeedback = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const FeedbackContent = () => (
    <>
      <div className='bg-[#F2F4F6] px-4'>
        <div>
          <img src={quoteImage} alt="quote" />
          <p className='pl-8 text-[28px]'>
            I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast (400ft.) Value for money and easy to install. Happy with the product.
          </p>
        </div>

        <div
          className='mt-28 ml-5 flex justify-between items-center py-10 px-5'
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <h1 className='text-[32px] font-[600]'>- Samuel Varughese</h1>

          <div className='flex gap-5'>
            {/* Left arrow */}
            <div className="border border-black rounded-[50%] w-8 h-8">
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

            {/* Right arrow */}
            <div className="border border-black rounded-[50%] w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 translate-x-2 translate-y-2 rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right-side image */}
      <div className=''>
        <img className='h-full w-full' src={customerImage} alt="customer" />
      </div>
    </>
  );

  return (
    <div className='mt-40 w-[90%] mx-auto overflow-x-hidden'>
      <h1 className='text-[42px] text-center font-medium'>Why Customers Love ❤️ Us?</h1>

      {isMobile ? (
        <div className='mt-[40px] grid grid-cols-1 md:grid-cols-[60%_40%]'>
          <FeedbackContent />
        </div>
      ) : (
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='mt-[40px] grid grid-cols-1 md:grid-cols-[60%_40%]'
        >
          <FeedbackContent />
        </motion.div>
      )}
    </div>
  );
};

export default CustomerFeedback;
