import React from 'react';
import ap1Image from '../../assets/ap1.jpeg'
const Card = ({product}) => {
    
    return (
        <div>
              <div className='bg-[#F2F4F6] rounded-[18px]'>
                 <img src={product.image} className='w-[285px] h-[220px]' alt="one" />
                 <div className='p-2'>
                 <h1 className='text-lg font-[600]'>{product.name}</h1>
                 <p className='text-sm mt-2.5 font-[500]'>{product.price}
                 </p>
                  {/* shopNow Button */}
                  <button className='btn mt-5 bg-[#B0DD1D] rounded-[100px] text-white px-8 py-4'>Shop Now</button>

                 </div>
              </div>
        </div>
    );
};

export default Card;