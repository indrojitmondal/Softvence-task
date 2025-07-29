import React from 'react';

const Sliders = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                     <div className='w-full h-96'>
                     <div className='w-[90%]  grid grid-cols-1 md:grid-cols-2  mx-auto'>
                {/* left  */}
                <div>
                    <img src={heroLeftImage} alt="leftImage" />
                </div>
                {/* right */}
                <div className='flex items-center'>
                    <div>


                        <div>
                            <h1 className='text-[62px] font-[500]'>JF Privezy Grass <br /> Wall</h1>
                            <p className='mt-5'>The perfact Blend of Greenery</p>
                            <div className='mt-12'>
                                {/* shopNow Button */}
                                <button className='btn bg-[#B0DD1D] rounded-[100px] text-white px-8 py-4'>Shop Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
                     </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                   
                       <div   className="w-full h-96">

                       </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                   
                      <div className="w-full h-96"></div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                   
                       <div className="w-full h-96">

                       </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Sliders;