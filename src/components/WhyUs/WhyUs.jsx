import React from 'react';
import one from './Icons/Group-480.png'
import two from './Icons/Frame.png'
import three from './Icons/Frame-1.png'
const WhyUs = () => {
    return (
        <div className='w-[80%] mt-14 mx-auto'>

            <div className='text-center '>
                <h1 className='text-[42px] font-[500] text-center'>Why Us</h1>

                <p className='md:w-[840px] mx-auto mt-4 text-[20px] text-center font-[400]'>We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>

            </div>

            <div className='mt-20  grid grid-cols-1 gap-[40px] md:grid-cols-3'>

                <div className='bg-gradient-to-tr from-[#FFFFFF]  to-[#B6D3F0] px-[40px] py-7 rounded-3xl'>

                   
                        <img className=' w-[49px] h-[52px]' src={one} alt="group1" />

                        <h2 className='text-[26px] font-[500] mt-[30px]'>Unmatched Durability
                            with Corrosion-Free
                            Technology</h2>
                        <p className='text-[17px] font-[400] mt-[20px]'>Our JF-270 barbed wire features a
                            robust 270 GSM zinc coating,
                            ensuring superior resistance against
                            rust and corrosion. Paired with
                            stainless steel binding wire, our
                            fencing solutions are designed to
                            withstand harsh environmental
                            conditions, offering longevity and
                            reliability.</p>
                    


                </div>
          

                <div className='transform -translate-y-10 bg-gradient-to-tr from-[#FFFFFF]  to-[#002B55] px-[40px] py-7 rounded-3xl'>
                    <img className=' w-[49px] h-[52px]' src={two} alt="group2" />
                    <h2 className='text-[26px] font-[500] mt-[30px]'>Customer-Centric
                        Approach</h2>
                    <p className='text-[17px] font-[400] mt-[20px]'>At JF Products, customer satisfaction
                        is paramount. We pride ourselves on
                        delivering timely services,
                        maintaining transparent
                        communication, and ensuring a
                        seamless purchasing experience. Our
                        commitment to excellence is
                        reflected in the positive feedback
                        from our valued clients.
                    </p>
                </div>
                <div className='bg-gradient-to-tr from-[#FFFFFF]  to-[#B6D3F0] px-[40px] py-7 rounded-3xl'>

                    <img className=' w-[49px] h-[52px]' src={three} alt="group3" />

                    <h2 className='text-[26px] font-[500] mt-[30px]'>Innovative and Diverse
                        Product Range</h2>
                    <p className='text-[17px] font-[400] mt-[20px]'>We offer a wide array of fencing
                        solutions, including Polyhex Mesh,
                        Australian Trellis, and GI Poultry Mesh,
                        catering to various needs from
                        agricultural to residential
                        applications. Our products combine
                        functionality with aesthetic appeal,
                        ensuring both security and style.</p>

                </div>
            </div>

        </div>
    );
};

export default WhyUs;