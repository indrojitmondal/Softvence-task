import React from 'react';
import Card from '../Card/Card';
import ap1 from './Images/ap1.jpeg'
import ap2 from './Images/ap2.jpeg'
import ap3 from './Images/ap3.jpeg'
import ap4 from './Images/ap4.jpeg'

const AgriProducts = () => {
    const products=[
        {name: 'JF Barbed Wire- 270 GSM',
         price: `₹579.00 – ₹1,589.00
         `,
         image: ap1
        },
        {
         name: 'FGC RustFree Fencing Poles',
         price: `₹499.00 – ₹1,589.00`,
         image: ap2

        },
        {
            name: 'GI Poultry Mesh',
            price: `₹1,260.00 – ₹10,750.00`,
            image: ap3
   
        },
        {
            name: 'JF Bluelink Mesh',
            price: `₹3,067.50 – ₹6,362.50`,
            image: ap4
   
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
             <h1 className='text-[42px] font-[500]'>Agricultural Products
              </h1>
              <div className='grid mt-[40px] grid-cols-1 md:grid-cols-4 gap-4'>
                
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

export default AgriProducts;