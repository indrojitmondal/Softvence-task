import React from 'react';
import image from '../../assets/quality.png'
import Marquee from "react-fast-marquee";
const Headline = () => {

    const context=[
        {title: 'Quality Product',

    },
        {title: 'Shipping Across India'},
        {title: '7000+ Customers'},
        {title: 'Product Warranty'}
    ]
    return (
        <div className='mt-[30px]'>
            <div className='text-center '>

                <button className='btn bg-[#B0DD1D] rounded-[100px] text-lg font-medium text-black px-8 py-6'>Contact Us</button>

            </div>
            
            <div className='hidden  bg-[#D9ECFF] md:flex transform -rotate-6 mt-32'>
            
            <Marquee pauseOnHover={false} speed={100} direction={'right'} gradient={false}>
            {
             context.map((p, index)=>(
                <div key={index} className='flex gap-6 items-center' >
                <img className='' src={image } alt="quality" />
                <h1 className='text-xl font-medium'>{p.title}</h1>
 
                </div>

             ))
              
               }
                 </Marquee>
            </div>
        </div>
    );
};

export default Headline;