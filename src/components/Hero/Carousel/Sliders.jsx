import React from 'react';
import heroLeftImage from '../../../assets/heroLeft.png';
import LeftArrow from '../../ArrowIcons/LeftArrow';
import RightrArrow from '../../ArrowIcons/RightrArrow';

const Sliders = () => {
    const slides = [1, 2, 3, 4];

    return (
        <div className="w-full overflow-hidden">
            <div className="carousel w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide}
                        id={`slide${slide}`}
                        className="carousel-item relative w-full"
                    >
                        <div className="w-full">
                            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10">
                                {/* Left Side */}
                                <div className="w-full flex justify-center">
                                    <img
                                        src={heroLeftImage}
                                        alt="leftImage"
                                        className="w-full max-w-[500px] h-auto object-contain"
                                    />
                                </div>

                                {/* Right Side */}
                                <div className="text-center md:text-left px-4">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-semibold leading-tight">
                                        JF Privezy Grass <br /> Wall
                                    </h1>
                                    <p className="mt-4 text-base sm:text-lg">
                                        The perfect Blend of Greenery
                                    </p>
                                    <div className="mt-8">
                                        <button className="btn bg-[#B0DD1D] text-white rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Arrows */}
                        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform flex justify-between">
                            <a
                                href={`#slide${(slide - 2 + slides.length) % slides.length + 1}`}
                                className="btn btn-circle"
                            >
                                <LeftArrow />
                            </a>
                            <a
                                href={`#slide${(slide % slides.length) + 1}`}
                                className="btn btn-circle"
                            >
                                <RightrArrow />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sliders;
