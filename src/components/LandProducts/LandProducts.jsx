import React from 'react';
import Card from '../Card/Card';
import lp1 from './Images/lp1.jpeg'
import lp2 from './Images/lp2.jpeg'
import lp3 from './Images/lp3.jpeg'
import lp4 from './Images/lp4.jpeg'

const LandProducts = () => {
    const products=[
        {name: 'Antiqo Fence',
         price: `₹10,024.00 – ₹14,984.82
         `,
         image: lp1
        },
        {
         name: 'JF Australian Trellis',
         price: `₹6,962.00`,
         image: lp2

        },
        {
            name: 'JF Polyhex Mesh',
            price: `₹4,050.00 – ₹10,770.00`,
            image: lp3
   
        },
        {
            name: 'JF Privezy Grass Wall',
            price: `₹1,646.10 – ₹18,284.10
            `,
            image: lp4
   
        }


    ]
    return (
        <div className='flex items-center'>

            {/* <!-- arrow left icon --> */}
            <div className="border border-gray-300 ml-8 rounded-[50%] w-8 h-8">
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
              
             <div className='w-[90%]  mx-auto'>
             <h1 className='text-[42px] font-[500]'>Landscape Products

              </h1>
              <div className='grid mt-[40px] grid-cols-1 md:grid-cols-4 gap-[40px]'>
                
                  {
                    products.map((product, index)=>(
                        <Card product={product} key={index}></Card>
                    ))
                  }
                 
              </div>
             </div>

             {/* <!-- arrow right icon --> */}
             <div class="border border-gray-300 mr-8 rounded-[50%] w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 translate-x-2 translate-y-2 rotate-45 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>

            </div>
        </div>
    );
};

export default LandProducts;