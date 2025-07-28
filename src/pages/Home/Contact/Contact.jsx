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

    const handleBranch = (branch)=>{
        console.log(branch);
        setBranchStatus(true);
    }
    useEffect(()=>{
        setBranchStatus(false);
    },[handleBranch]);
    return (
        <div className='w-[90%] mt-10 mx-auto'>

            <div className='flex justify-center'>
                <div className=' flex gap-12'>

                    {
                        branches.map((branch, index) => (
                            <div onClick={()=>handleBranch(branch.name)} key={index} className='flex flex-col items-center'>
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