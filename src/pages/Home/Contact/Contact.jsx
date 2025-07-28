import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import coim from './BrancheImages/coim.png'
import chan from './BrancheImages/chan.png'
import haid from './BrancheImages/hyderabad1.png'
import goa from './BrancheImages/goa.png'
import kochia from './BrancheImages/kochia.png'
import mum from './BrancheImages/mum.png'
const Contact = () => {
    const branches = [
        {
            name: 'COIMBATORE',
            image: coim,
        },
        {
            name: 'CHENNAI',
            image: chan,
        },
        {
            name: 'HYDERABAD',
            image: haid,
        },
        {
            name: 'GOA',
            image: goa,
        },
        {
            name: 'KOCHI',
            image: kochia,
        },
        {
            name: 'MUMBAI',
            image: mum
        }
    ]



    const [selectedBranch, setSelectedBranch] = useState('COIMBATORE');
    const handleBranch = (branch) => {
        setSelectedBranch(branch);
    }
    return (
        <div className='w-[90%] border border-gray-200 rounded-2xl p-5  mt-10 mx-auto'>

            <div className='flex my-4 justify-center'>
                <div className=' flex gap-12'>

                    {
                        branches.map((branch, index) => (
                            <div onClick={() => handleBranch(branch.name)} key={index} className={`flex flex-col px-4 py-3 items-center ${selectedBranch == branch.name ? 'border border-[#B0DD1D] rounded-2xl  bg-[#b0dd1d1a] ' : ''}`}>
                                <img className='w-[116px] h-[104px]' src={branch.image} alt="coim" />
                                <p className='text-sm font-medium'>
                                    {branch.name}
                                </p>
                            </div>
                        ))
                    }




                </div>
            </div>
            <div className='grid mt-5  px-4 grid-cols-1 gap-5 md:grid-cols-[40%_60%]'>

                <div className='bg-[#002B55] rounded-3xl px-12 text-white'>
                    <h1 className='text-[32px] font-medium'>Contact Us</h1>
                </div>
               
                 {/* Google Map */}
            <div className="w-full h-72 sm:h-96 md:h-[642px] px-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7697.116931362253!2d73.956657!3d15.291856000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb15e7e06ff53%3A0xe68cf123ac7e8b6a!2sEvershine%20Dynamic%20Corporation%20Ltd!5e0!3m2!1sen!2sus!4v1753713194408!5m2!1sen!2sus"
                className="w-full h-full rounded-xl border-none shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apartment Location Map"
              ></iframe>
            </div>
            </div>

           



        </div>
    );
};

export default Contact;