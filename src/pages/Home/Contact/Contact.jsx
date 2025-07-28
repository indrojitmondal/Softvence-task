import React, { useEffect, useState } from 'react';
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

    const [branchStatus, setBranchStatus]=useState(false);

    const [selectedBranch, setSelectedBranch]=useState('');
    const handleBranch=(branch)=>{
        setSelectedBranch(branch);
    }
    return (
        <div className='w-[90%] mt-10 mx-auto'>

            <div className='flex my-4 justify-center'>
                <div className=' flex gap-12'>

                    {
                        branches.map((branch, index) => (
                            <div onClick={()=>handleBranch(branch.name)} key={index} className={`flex flex-col px-4 py-3 items-center ${selectedBranch == branch.name ? 'border border-[#B0DD1D] rounded-2xl  bg-[#b0dd1d1a] ': ''}`}>
                                <img className='w-[116px] h-[104px]' src={branch.image} alt="coim" />
                                <p className='text-sm font-medium'>
                                    {branch.name}
                                </p>
                            </div>
                        ))
                    }




                </div>
            </div>

        </div>
    );
};

export default Contact;