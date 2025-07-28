import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-[90%] pt-6 pb-6 mx-auto'>
            <div className='flex justify-between items-center'>
                {/* Left Nav Items (Desktop) */}
                <div className='hidden lg:flex text-lg items-center gap-10'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shops">Shops</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>

                {/* Logo */}
                <div>
                    <img src={'/logo.png'} className='w-[100px] h-[120px]' alt="Logo" />
                </div>

                {/* Right Nav Icons (Desktop) */}
                <div className='hidden lg:flex text-lg gap-6 items-center'>
                    <NavLink to="/login" className='flex items-center gap-1'>
                        Login <CgProfile />
                    </NavLink>
                    <IoSearch className="text-2xl cursor-pointer" />
                    <NavLink to="/cart" className='flex items-center'>
                        <MdShoppingCart className="text-2xl" />
                        <sup className='font-bold'>0</sup>
                    </NavLink>
                </div>

                {/* Mobile Menu Icon */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu} className="text-3xl">
                        {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className='lg:hidden mt-4 flex flex-col gap-4 text-lg'>
                    <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/shops" onClick={toggleMenu}>Shops</NavLink>
                    <NavLink to="/blogs" onClick={toggleMenu}>Blogs</NavLink>
                    <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                    <NavLink to="/login" onClick={toggleMenu} className='flex items-center gap-1'>
                        Login <CgProfile />
                    </NavLink>
                    <div className="flex flex-col  gap-4">
                        <IoSearch className="text-2xl" />
                        <NavLink to="/cart" className='flex items-center'>
                            <MdShoppingCart className="text-2xl" />
                            <sup className='font-bold'>0</sup>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
