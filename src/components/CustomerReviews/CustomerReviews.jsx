import React from 'react';
import premium from './Icons/premium.png';
import googleReview from './Icons/google-review.png';
import delivery from './Icons/delivery.png';

const CustomerReviews = () => {
  return (
    <div className='w-[90%] mt-24 mx-auto'>
      <div className='bg-[#002B55] md:h-[332px] rounded-3xl text-white py-10 px-4 sm:px-8'>
        <div className='mt-8 text-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-[42px] font-medium'>
            Trusted by over 6K+ customers
          </h1>
        </div>

        {/* Features Section */}
        <div className='mt-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[100px]'>
          {/* Premium */}
          <div className='flex items-center gap-5'>
            <img className='w-[60px] sm:w-[70px] lg:w-[80px] h-auto' src={premium} alt="Premium" />
            <div>
              <h2 className='text-xl sm:text-2xl lg:text-[28px] font-medium'>Premium</h2>
              <p className='text-lg sm:text-xl lg:text-[22px] font-normal'>Products</p>
            </div>
          </div>

          {/* Google Review */}
          <div className='flex items-center gap-5'>
            <img className='w-[60px] sm:w-[70px] lg:w-[80px] h-auto' src={googleReview} alt="Google Review" />
            <div>
              <h2 className='text-xl sm:text-2xl lg:text-[28px] font-medium'>4000+</h2>
              <p className='text-lg sm:text-xl lg:text-[22px] font-normal'>Google Review</p>
            </div>
          </div>

          {/* Delivery */}
          <div className='flex items-center gap-5'>
            <img className='w-[60px] sm:w-[70px] lg:w-[80px] h-auto' src={delivery} alt="Delivery" />
            <div>
              <h2 className='text-xl sm:text-2xl lg:text-[28px] font-medium'>Delivery</h2>
              <p className='text-lg sm:text-xl lg:text-[22px] font-normal'>Across India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
