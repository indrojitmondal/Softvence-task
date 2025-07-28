import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdShoppingCart } from "react-icons/md";
const Navbar = () => {
    return (
        <div className='w-[90%]  pt-[35px] pb-[97px] mx-auto'>

           <div className='flex justify-between'>
            {/* left */}
            <div className='flex text-lg  items-center gap-[50px]'> 

                <NavLink>Home</NavLink>
                <NavLink>Shops</NavLink>
                <NavLink>Blogs</NavLink>
                <NavLink>Contact</NavLink>


            </div>
            {/* logo */}
            <div>
              <img src={'/logo.png'} className='w-[132px] h-[150px]' alt="" />
            </div>

            {/* right */}
            <div className='flex text-lg  gap-[50px] items-center'>
                 <NavLink className={'flex text-lg items-center gap-2'}>Login <CgProfile /> </NavLink>
                 <div>
                 <IoSearch />
                 </div>
               
                 <NavLink className='flex items-center '>
                 <MdShoppingCart  />
                 <sup className='font-bold'>0</sup>
                 
                 </NavLink>
            </div>
            </div> 
             
        </div>
    );
};

export default Navbar;