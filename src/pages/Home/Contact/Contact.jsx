import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import coim from './BrancheImages/coim.png'
import chan from './BrancheImages/chan.png'
import haid from './BrancheImages/hyderabad1.png'
import goa from './BrancheImages/goa.png'
import kochia from './BrancheImages/kochia.png'
import mum from './BrancheImages/mum.png'
import locationImage from './BrancheImages/locationIcon.png'
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import { Link } from 'react-router';
const Contact = () => {
    

    const branches = [
        {
            name: 'COIMBATORE',
            image: coim,
            location: {
                name: 'JRR Towers (2nd Floor)',
                details: 'Pattalamma Temple Rd, Basavangudi, Bangalore, 560004',
            },
            googleMapLocation:
                'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7697.116931362253!2d73.956657!3d15.291856000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb15e7e06ff53%3A0xe68cf123ac7e8b6a!2sEvershine%20Dynamic%20Corporation%20Ltd!5e0!3m2!1sen!2sus!4v1753713194408!5m2!1sen!2sus',
        },
        {
            name: 'CHENNAI',
            image: chan,
            location: {
                name: 'Anna Salai',
                details: 'Mount Road, Teynampet, Chennai, Tamil Nadu 600018',
            },
            googleMapLocation:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.914985162001!2d80.25076331482277!3d13.05241769079159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c904dc8b0b%3A0x9d8cbcb9ed7b78f3!2sAnna%20Salai%2C%20Teynampet%2C%20Chennai!5e0!3m2!1sen!2sin!4v1753778853049!5m2!1sen!2sin',
        },
        {
            name: 'HYDERABAD',
            image: haid,
            location: {
                name: 'Hi-Tech City',
                details: 'Madhapur, Hyderabad, Telangana 500081',
            },
            googleMapLocation:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.297768316055!2d78.38265317487433!3d17.444433101108364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d1f918cd29%3A0x5a1b3a4ec81de66e!2sHi-Tech%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1753778901227!5m2!1sen!2sin',
        },
        {
            name: 'GOA',
            image: goa,
            location: {
                name: 'Panaji',
                details: 'Dr. P. Shirgaonkar Rd, Altinho, Panaji, Goa 403001',
            },
            googleMapLocation:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30672.06392204068!2d73.8171802106766!3d15.49198226561853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfdf1912b54e77%3A0x74a2819f7be0f39e!2sPanaji%2C%20Goa!5e0!3m2!1sen!2sin!4v1753778929094!5m2!1sen!2sin',
        },
        {
            name: 'KOCHI',
            image: kochia,
            location: {
                name: 'Infopark',
                details: 'Phase 1, Kakkanad, Kochi, Kerala 682030',
            },
            googleMapLocation:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0496882784996!2d76.34871081478843!3d10.015905692832175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1db0e243e7%3A0x9d9c10ec01301904!2sInfopark%20Kochi!5e0!3m2!1sen!2sin!4v1753778953812!5m2!1sen!2sin',
        },
        {
            name: 'MUMBAI',
            image: mum,
            location: {
                name: 'Andheri East',
                details: 'Marol MIDC Industry Estate, Andheri East, Mumbai, Maharashtra 400093',
            },
            googleMapLocation:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.643001715881!2d72.88915151490513!3d19.07998485780943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86c42ef2355%3A0x4e588ad27c6ecfd5!2sAndheri%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1753778981885!5m2!1sen!2sin',
        },
    ];

    const [location, setLocation]=useState('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7697.116931362253!2d73.956657!3d15.291856000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb15e7e06ff53%3A0xe68cf123ac7e8b6a!2sEvershine%20Dynamic%20Corporation%20Ltd!5e0!3m2!1sen!2sus!4v1753713194408!5m2!1sen!2sus')
    
    const [locationTitle, setLocationTitle]=useState('JRR Towers (2nd Floor)')
    const [locationDetails, setLocationDetails] = useState('Pattalamma Temple Rd, Basavangudi, Bangalore, 560004');



    const [selectedBranch, setSelectedBranch] = useState('COIMBATORE');
    const handleBranch = (branch) => {
        setSelectedBranch(branch.name);
        setLocation(branch.googleMapLocation);
        setLocationTitle(branch.location.name);
        setLocationDetails(branch.location.details);
    }
    return (
        <div className=' w-[90%]  border border-gray-200 rounded-2xl p-5  mt-40 mx-auto'>

<div className='text-center -translate-y-12'>

<button className='btn bg-[#B0DD1D] rounded-[100px] text-lg font-medium text-black px-8 py-6'>Our Branches</button>

</div> 
  
            <div className='flex  my-4 justify-center'>
                <div className=' flex flex-col-reverse md:flex-row gap-12'>

                    {
                        branches.map((branch, index) => (
                            <Link onClick={() => handleBranch(branch)} key={index} className={`flex flex-col px-4 py-3 items-center ${selectedBranch == branch.name ? 'border border-[#B0DD1D] rounded-2xl  bg-[#b0dd1d1a] ' : ''}`}>
                                <img className='w-[116px] h-[104px]' src={branch.image} alt="coim" />
                                <p className='text-sm font-medium'>
                                    {branch.name}
                                </p>
                            </Link>
                        ))
                    }




                </div>
            </div>
            <div className='grid mt-7  md:px-4 grid-cols-1 gap-5 md:grid-cols-[40%_60%]'>

                <div className='bg-[#002B55] rounded-3xl p-3 md:p-12 text-white'>
                    <h1 className='text-[32px] font-medium'>Contact Us</h1>
                
                     <div className='py-[30px]'>
                       
                          <input type="text" placeholder="Your Name" className=" pl-[30px] py-[20px] bg-[#1A4166] outline-0 text-white rounded-3xl w-full " />
                           
                           <div className='space-y-5 mt-5'>

                           <input type="email" placeholder="Email" className=" pl-[30px] py-[20px] bg-[#1A4166] outline-0 text-white rounded-3xl w-full " />
                           
                           <input type="text" placeholder="Phone *" className=" pl-[30px] py-[20px] bg-[#1A4166] outline-0 text-white rounded-3xl w-full " />
                           
                           <textarea className='pl-[30px] h-[134px] py-[20px] bg-[#1A4166] outline-0 text-white rounded-3xl w-full ' name="" placeholder='Write message' id="" ></textarea>

                           </div>

                           <div className='mt-[50px]'>

                           <button className='btn bg-[#B0DD1D] rounded-[100px] text-lg font-medium text-black px-8 py-6'>Submit Now</button>

                           </div>
                     
                     </div>
                </div>

                <div className='md:relative'>
                    {/* Google Map */}
                    <div className="w-full h-72 sm:h-96 md:h-[700px] px-3">
                        <iframe
                            src={location}
                            className="w-full h-full rounded-xl border-none shadow-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Apartment Location Map"
                        ></iframe>
                    </div>

                    <div className='flex md:absolute bottom-5 left-5 md:w-[680px] p-7 rounded-3xl bg-white text-black gap-7 items-center'>
                        <img src={locationImage} alt="location" />
                        <p className='text-lg font-normal'> <span className='font-[600]'>{locationTitle}</span>, {locationDetails} </p>
                    </div>
                </div>





            </div>





        
        
        </div>
    );
};

export default Contact;