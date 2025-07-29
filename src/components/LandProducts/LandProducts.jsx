import React from 'react';
import Card from '../Card/Card';
import lp1 from './Images/lp1.jpeg'
import lp2 from './Images/lp2.jpeg'
import lp3 from './Images/lp3.jpeg'
import lp4 from './Images/lp4.jpeg'
import PlaneArrowLeft from '../PlaneArrow/PlaneArrowLeft';
import PlaneArrowRight from '../PlaneArrow/PlaneArrowRight';

const LandProducts = () => {
    const products = [
        {
            name: 'Antiqo Fence',
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
    const slides = [1, 2, 3, 4];
    return (
        <>

            <h1 className='w-[90%] mx-auto text-[42px] font-[500]'>Landscape Products
            </h1>

            <div className="w-full overflow-hidden">
                <div className="carousel w-full">
                    {slides.map((slide, index) => (
                        <div
                            key={slide}
                            id={`landslide${slide}`}
                            className="carousel-item relative w-full"
                        >
                            <div className="w-full">
                                <div className='w-[90%]  mx-auto grid mt-[40px] grid-cols-1 md:grid-cols-4 gap-[40px]'>

                                    {
                                        products.map((product, index) => (
                                            <Card product={product} key={index}></Card>
                                        ))
                                    }

                                </div>
                            </div>

                            {/* Arrows */}
                            <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform flex justify-between">
                                <a
                                    href={`#landslide${(slide - 2 + slides.length) % slides.length + 1}`}
                                    className="btn btn-circle"
                                >
                                    <PlaneArrowLeft />
                                </a>
                                <a
                                    href={`#landslide${(slide % slides.length) + 1}`}
                                    className="btn btn-circle"
                                >
                                    <PlaneArrowRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>
    );
};

export default LandProducts;