
import React from 'react';
import Card from '../Card/Card';
import ap1 from './Images/ap1.jpeg'
import ap2 from './Images/ap2.jpeg'
import ap3 from './Images/ap3.jpeg'
import ap4 from './Images/ap-4.png'
import PlaneArrowLeft from '../PlaneArrow/PlaneArrowLeft';
import PlaneArrowRight from '../PlaneArrow/PlaneArrowRight';

const AgriProducts = () => {
    const products=[
        {name: 'JF Barbed Wire- 270 GSM',
         price: `₹4,995.00
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
    const slides = [1, 2, 3, 4];
    return (
       
        
        <>

        <h1 className='w-[90%] mx-auto text-[42px] font-[500]'>Agricultural Products
        </h1>

       <div className="w-full overflow-hidden">
            <div className="carousel w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide}
                        id={`agrislide${slide}`}
                        className="carousel-item relative w-full"
                    >
                        <div className="w-full">
                        <div className='w-[90%]  mx-auto grid mt-[40px] grid-cols-1 md:grid-cols-4 gap-[40px]'>
    
    {
      products.map((product, index)=>(
          <Card product={product} key={index}></Card>
      ))
    }
   
                        </div>
                        </div>

                        {/* Arrows */}
                        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform flex justify-between">
                            <a
                                href={`#agrislide${(slide - 2 + slides.length) % slides.length + 1}`}
                                className="btn btn-circle"
                            >
                                <PlaneArrowLeft/>
                            </a>
                            <a
                                href={`#agrislide${(slide % slides.length) + 1}`}
                                className="btn btn-circle"
                            >
                                <PlaneArrowRight/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>


        
         </>
     
    );
};

export default AgriProducts;
